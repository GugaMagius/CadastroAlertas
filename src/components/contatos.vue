<template>
    <div>
        <h2>Contatos</h2>

        <div style="max-width: 100%; margin:auto; overflow-y: auto; height: 88vh;">

            <DataTable v-model:editingRows="contatoEdit" stripedRows scrollable scrollHeight="80vh" sortField="seq"
                :sortOrder="1" class="p-datatable-sm" filterDisplay="row" :value="Object.values(contatos)" editMode="row"
                dataKey="nome" @row-edit-save="onRowEditSave" tableClass="editable-cells-table">
                <Column field="nome" :sortable="true" header="Nome" style="max-width: 18vw">
                    <template #editor="{ data, field }">
                        <InputText v-model="data[field]" style="width: 100%" />
                    </template>
                    <template #body="{ data, field }">
                        {{ data[field] }}
                    </template>
                </Column>
                <Column field="email" sortable header="e-mail" style="min-width: 30vw">
                    <template #editor="{ data, field }">
                        <InputText v-model="data[field]" style="width: 100%;" />
                    </template>
                </Column>
                <Column field="telefone" sortable header="Telefone" style="max-width: 16vw">
                    <template #editor="{ data, field }">
                        <InputNumber v-model="data[field]" style="width: 100%;" />
                    </template>
                    <template #body="{ data, field }">
                        {{ data[field] }}
                    </template>
                </Column>
                <Column :rowEditor="true" style="width: 5%; max-width: 8vw" bodyStyle="text-align:center"></Column>
                <Column field="check" header="" style="min-width:8%" :sortable="false">
                    <template #body="{ data }">
                        <Button icon="pi pi-trash" severity="danger" rounded text @click="apagarRegistro(data)" />
                    </template>
                </Column>
            </DataTable>

            <Button icon="pi pi-plus" v-if="contatoEdit.length === 0" @click="adicionarRegistro" />
            <Button icon="pi pi-save" class="ml-3" label="Salvar" @click="salvarRegistros" />

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            contatos: {},
            contatoEdit: []
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

            console.log("Solicitado exclusão do contato: ", data)

            delete this.contatos[data.nome]

        },
        salvarRegistros() {

            this.$socket.emit("salvarContatos", this.contatos)

        },
        adicionarRegistro() {

            this.contatos['temp'] = { nome: '', email: '', telefone: '' }

        },
        onRowEditSave(event) {
            let { data, newData } = event;
            console.log("Event", event)
            if (data.nome === '') {

                delete this.contatos.temp
                this.contatos[newData.nome] = newData

            } else {

                this.contatos[data.nome] = newData

            }

            // products.value[index] = newData;
        }
    },

    sockets: {

        dadosAlertas(dados) {

            let dadosRecebidos = dados.recordset.find(registro => 'contatos' === registro.arquivo)

            console.log("Array filtrada: ", dadosRecebidos)

            this.contatos = JSON.parse(dadosRecebidos.dados)

        }

    },
}

</script>