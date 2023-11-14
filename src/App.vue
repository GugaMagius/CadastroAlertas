<template>
  <div class="Principal">

    <MegaMenu :model="items" />

    <!-- <router-view /> -->

    <div class="RouterView">
      <router-view :dadosAlertas="dadosAlertasRec" />
    </div>


  </div>
</template>

<script>
import packageJson from '../package.json'
// import camera from './components/camera.vue'

export default {
  name: "",
  components: {
  },

  mounted() {
    this.versaoViewer = packageJson.version
    console.log("Versão do Viewer: ", this.versaoViewer)
    // console.log(this.$route.query.test)


  },
  data: function () {
    return {
      active: '',
      dadosAlertasRec: {},
      items: [
        {
          label: 'Alertas',
          icon: 'pi pi-fw pi-bell',
          to: '/'
        },
        {
          label: 'Contatos',
          icon: 'pi pi-fw pi-book',
          to: '/contatos'
        }
      ],

    };
  },
  computed: {
  },

  methods: {
  },
  sockets: {


  },

};
</script>



<style scoped>
body {
  margin: 0;
  height: 100%;
  background-color: var(--surface-b);
  font-family: var(--font-family);
  font-weight: 400;
  color: var(--text-color);
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>




