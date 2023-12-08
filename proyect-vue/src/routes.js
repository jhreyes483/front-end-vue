
import AppBody from './components/AppBody.vue';
import MyComponent from './components/MyComponent.vue'
/*** new * */
import BlogPage from './components/BlogPage/BlogPage.vue';
import Formulario from './components/FormPage/FormPage.vue';
import HomePage from './components/HomePage/HomePage.vue';
import HomeMain from './components/Home/HomeMain.vue';
import AppErrorComponent from './components/AppErrorComponent.vue';
import Films from './components/Movie/FilmsPage.vue'

const routes = [
    {
        path: '/body',
        component: AppBody,
    },
    {
        path: '/mi-componente',
        component: MyComponent,
    },


    {
        path: '/blog',
        component: BlogPage,
    },
    {
        path: '/formulario',
        component: Formulario,
    },
    {
        path: '/pagina/:id?',
        name: 'pagina',
        component: HomePage,
    },
    {
        path: '/home',
        component: HomeMain,
    },
    {
        path : '/peliculas',
        name : 'pelculas',
        component: Films,
    },


    {
        path: '/:pathMatch(.*)*',
        component: AppErrorComponent

    }

];

export default routes;


