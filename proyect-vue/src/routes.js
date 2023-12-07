
import ComponenteOne from './components/Home/ComponenteOne.vue';
import AppBody from './components/AppBody.vue';
import MiComponenteOne from './components/MiComponente.vue'


const routes = [
    {
        path: '/comp-1',
        component: ComponenteOne,
    },
    {
        path: '/body',
        component: AppBody,
    },
    {
        path: '/mi-compenente',
        component: MiComponenteOne,
    },
];

export default routes;


