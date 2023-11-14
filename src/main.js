import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import SocketIO from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';
import VueRouter from 'vue-router';
import router from './router';
import VueIframe from 'vue-iframes';


import 'primevue/resources/themes/lara-light-blue/theme.css' // Theme

// import 'primevue/resources/themes/md-dark-indigo/theme.css'
import 'primevue/resources/primevue.min.css'; //core css
import 'primeicons/primeicons.css';  //icons
import 'primeflex/primeflex.css'; // Primeflex


// Components
import AutoComplete from 'primevue/autocomplete'
import Button from 'primevue/button';
import Card from 'primevue/card';
import Panel from 'primevue/panel';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Knob from 'primevue/knob';
import Slider from 'primevue/slider';
import Badge from 'primevue/badge';
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import Menu from 'primevue/menu';
import TabMenu from 'primevue/tabmenu';
import TieredMenu from 'primevue/tieredmenu';
import Calendar from 'primevue/calendar';
import MultiSelect from 'primevue/multiselect';
import ProgressSpinner from 'primevue/progressspinner';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Dropdown from 'primevue/dropdown';
import ProgressBar from 'primevue/progressbar';
import Chips from 'primevue/chips';
import RadioButton from 'primevue/radiobutton';
import Checkbox from 'primevue/checkbox';
import ScrollPanel from 'primevue/scrollpanel';
import Dialog from 'primevue/dialog';
import Image from 'primevue/image';
import Sidebar from 'primevue/sidebar';
import Listbox from 'primevue/listbox';
import MegaMenu from 'primevue/megamenu';
// import Chart from 'primevue/chart';
import { ref } from 'vue';

// #teste! - Endereço de Ip para o socket com o servidor backend
// const adressSocket = 'http://localhost:3007' // ##teste Rodar local - desenvolvimento

const adressSocket = 'http://10.69.0.6:3007' // Rodar servidor - produção

const SocketInstance = {
  debug: true,
  connection: SocketIO(adressSocket)
}

// Instancia
const app = createApp(App).use(new VueSocketIO(SocketInstance));

app.use(PrimeVue);
app.use(VueRouter);
app.use(router);
app.use(ref);
app.use(VueIframe);

app.component('AutoComplete', AutoComplete);
app.component('Button', Button);
app.component('Card', Card);
app.component('Panel', Panel);
app.component('Splitter', Splitter);
app.component('SplitterPanel', SplitterPanel);
app.component('Knob', Knob);
app.component('Slider', Slider);
app.component('Badge', Badge);
app.component('InputNumber', InputNumber);
app.component('InputText', InputText)
app.component('Menu', Menu);
app.component('TabMenu', TabMenu);
app.component('TieredMenu', TieredMenu);
app.component('Calendar', Calendar);
app.component('MultiSelect', MultiSelect);
app.component('ProgressSpinner', ProgressSpinner);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Dropdown', Dropdown);
app.component('ProgressBar', ProgressBar);
app.component('Chips', Chips);
app.component('RadioButton', RadioButton);
app.component('Checkbox', Checkbox);
app.component('ScrollPanel', ScrollPanel);
app.component('Dialog', Dialog);
app.component('Image', Image);
app.component('Sidebar', Sidebar);
app.component('Listbox', Listbox);
app.component('MegaMenu', MegaMenu);
// app.component('Chart', Chart);


app.mount('#app');