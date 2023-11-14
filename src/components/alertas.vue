<template>
    <div>
        <h2>Alertas</h2>

        <div style="max-width: 100%; margin:auto; overflow-y: auto; height: 100%;">

            <DataTable v-model:editingRows="alertaEdit" stripedRows scrollable scrollHeight="68vh" sortField="seq"
                :sortOrder="1" class="p-datatable-sm" filterDisplay="row" :value="alertas" editMode="row"
                :dataKey="nome + alerta" @row-edit-save="onRowEditSave" tableClass="editable-cells-table">
                <Column field="nome" sortable header="Nome Contato" style="min-width: 12vw">
                    <template #editor="{ data, field }">
                        <!-- <InputText v-model="data[field]" style="width: 100%;" /> -->
                        <div class="p-float-label mt-4">
                            <Dropdown v-model="data[field]" inputId="dd-contatos" :options="Object.keys(contatos)"
                                class="w-full mt-2" />
                            <label for="dd-contatos">Selecione o Contato</label>
                        </div>
                    </template>
                </Column>
                <Column field="codigo" :sortable="true" header="Codigo Parada" style="max-width: 8vw">
                    <template #editor="{ data, field }">
                        <InputText v-model="data[field]" style="width: 100%" />
                    </template>
                    <template #body="{ data, field }">
                        {{ data[field] }}
                    </template>
                </Column>
                <Column field="classification" :sortable="true" header="Classificação Parada" style="max-width: 8vw">
                    <template #editor="{ data, field }">
                        <InputText v-model="data[field]" style="width: 100%" />
                    </template>
                    <template #body="{ data, field }">
                        {{ data[field] }}
                    </template>
                </Column>

                <Column field="tempo" sortable header="Tempo para alerta (min)" style="max-width: 8vw">
                    <template #editor="{ data, field }">
                        <InputNumber class="" v-model="data[field]" />
                    </template>
                    <template #body="{ data, field }">
                        {{ data[field] }}
                    </template>
                </Column>

                <Column field="alerta" sortable header="Tipo de Alerta" style="max-width: 12vw">
                    <template #editor="{ data, field }">
                        <div class="p-float-label mt-4">
                            <Dropdown v-model="data[field]" inputId="dd-alert" :options="['telefone', 'email', 'alertaTV']"
                                class="w-full mt-2" />
                            <label for="dd-alert">Selecione o tipo de alerta</label>
                        </div>
                    </template>
                    <template #body="{ data, field }">
                        {{ data[field] }}
                    </template>
                </Column>
                <Column field="mgroup" :sortable="true" header="Departamento" style="max-width: 8vw">
                    <template #editor="{ data, field }">
                        <InputText v-model="data[field]" style="width: 100%" />
                    </template>
                    <template #body="{ data, field }">
                        {{ data[field] }}
                    </template>
                </Column>
                <Column field="setor" sortable header="Centro de Custo" style="max-width: 8vw">
                    <template #editor="{ data, field }">
                        <InputText v-model="data[field]" style="width: 100%;" />
                    </template>
                </Column>
                <Column field="horaInicio" sortable header="Hora Início" style="max-width: 8vw">
                    <template #editor="{ data, field }">
                        <InputText v-model="data[field]" style="width: 100%;" />
                    </template>
                </Column>
                <Column field="horaFim" sortable header="Hora Fim" style="max-width: 8vw">
                    <template #editor="{ data, field }">
                        <InputText v-model="data[field]" style="width: 100%;" />
                    </template>
                </Column>
                <Column field="diasSemana" sortable header="Dias da Semana" style="max-width: 8vw">
                    <template #editor="{ data, field }">
                        <InputText v-model="data[field]" style="width: 100%;" />
                    </template>
                </Column>
                <Column :rowEditor="true" style="width: 5%; max-width: wvw" bodyStyle="text-align:center"></Column>
                <Column field="check" header="" style="min-width:4vw" :sortable="false">
                    <template #body="{ data }">
                        <Button icon="pi pi-trash" severity="danger" rounded text @click="apagarRegistro(data)" />
                    </template>
                </Column>
            </DataTable>

            <Button icon="pi pi-plus" v-if="alertaEdit.length === 0" @click="adicionarRegistro" />
            <Button icon="pi pi-save" class="ml-3" label="Salvar" @click="salvarRegistros" />

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            alertas: [],
            alertaEdit: [],
            contatos: {}
        }
    },
    props: {

        dadosAlertas: Object

    },
    mounted() {

        this.$socket.emit("dadosAlertas")

    },
    methods: {
        apagarRegistro(data) {

            console.log("Solicitado exclusão do alerta: ", data)


            this.alertas = this.alertas.filter(alerta => data !== alerta)


        },

        salvarRegistros() {

            this.$socket.emit("salvarAlertas", this.alertas)

        },

        adicionarRegistro() {

            this.alertas.push({ codigo: '', classification: '', nome: '', setor: '', mgroup: '', tempo: '', alerta: '', horaInicio: '', horaFim: '', diasSemana: '' })

        },

        onRowEditSave(event) {

            let { newData, index } = event;

            console.log("Event", event)

            this.alertas.splice(index, 1, newData)
        }

    },

    sockets: {

        dadosAlertas(dados) {

            let dadosRecebidos = dados.recordset.find(registro => 'alertas' === registro.arquivo)

            this.alertas = JSON.parse(dadosRecebidos.dados)

            let listaContatos = dados.recordset.find(registro => 'contatos' === registro.arquivo)

            this.contatos = JSON.parse(listaContatos.dados)

        }

    },
}

</script>