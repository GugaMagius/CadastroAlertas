import { createWebHistory, createRouter } from "vue-router";
import Alertas from "@/components/alertas.vue"
import Contatos from "@/components/contatos.vue"
// import PinturaPo from "@/telas/Pinturapo.vue";
// import PinturaLiq from "@/telas/Pinturaliq.vue";
// import FormacaoKit from "@/telas/Formacaokit.vue";
// import Enganchamento from "@/telas/Enganchamento.vue";
// import Ecoat from "@/telas/Ecoat.vue";
// import Mosaico from "@/telas/Mosaico.vue";
// import Service from "@/telas/Service.vue";
// import Graficos from "@/relatorios/graficos.vue";
// import Metas from "@/panels/metas.vue";
// import SelecaoCTs from "@/panels/selecaocts.vue";
// import Logs from "@/panels/logs.vue";
// import Testes from "@/panels/testes.vue";
// import grafPeriodo from "@/components/grafPeriodo.vue"
// import grafMedia from "@/components/grafMedia.vue"
// import grafDisp from "@/components/grafDisp.vue"
// import grafDispHrs from "@/components/grafDispHrs.vue"
// import AndonGeral from "@/components/telaAndonGeral.vue"
// import Andon from "@/components/telaAndon";


const routes = [

    {
        path: "/",
        name: "Alertas",
        component: Alertas,
        props: true
    },
    {
        path: "/contatos",
        name: "Contatos",
        component: Contatos,
        props: true
    },
    // {
    //     path: "/pinturapo",
    //     name: "- Pintura pó",
    //     component: PinturaPo,
    //     props: true
    // },
    // {
    //     path: "/pinturaliq",
    //     name: "- PinturaLiq",
    //     component: PinturaLiq,
    //     props: true
    // },
    // {
    //     path: "/formacaokit",
    //     name: "- Formação Kits",
    //     component: FormacaoKit,
    //     props: true
    // },
    // {
    //     path: "/andongeral",
    //     name: "- Teste Andon",
    //     component: AndonGeral,
    //     props: true
    // },
    // {
    //     path: "/graficos",
    //     name: "- Produtividade",
    //     component: Graficos,
    //     props: true,
    //     children: [
    //         {
    //           path: 'periodo',
    //           components: {
    //             grafico: grafPeriodo,
    //           }
    //         },
    //         {
    //           path: 'media',
    //           components: {
    //             grafico: grafMedia,
    //           }
    //         },
    //         {
    //           path: 'disp',
    //           components: {
    //             grafico: grafDisp,
    //           },
    //         },
    //         {
    //           path: 'disphrs',
    //           components: {
    //             grafico: grafDispHrs,
    //           },
    //         }
    //       ],
    // },
    // {
    //     path: "/service",
    //     name: "- Configurações",
    //     component: Service,
    //     props: true,
    //     children: [
    //         {
    //           path: 'metas',
    //           components: {
    //             panel: Metas,
    //           }
    //         },
    //         {
    //           path: 'selecaocts',
    //           components: {
    //             panel: SelecaoCTs,
    //           }
    //         },
    //         {
    //           path: 'logs',
    //           components: {
    //             panel: Logs,
    //           },
    //         },
    //         {
    //           path: 'testes',
    //           components: {
    //             panel: Testes,
    //           },
    //         },
    //       ],
    // }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;