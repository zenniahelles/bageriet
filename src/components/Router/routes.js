import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Produkter from '../Pages/Produkter/Produkter';

const routes = [
{
    name: 'FORSIDE',
    path: '/',
    exact: true,
    component: Home
},
{
    name: 'PRODUKTER',
    path: '/produkter',
    exact: true,
    component: Produkter
},
{
    name: 'KONTAKT',
    path: '/kontakt',
    exact: true,
    component: Contact
},
{
    name: 'LOGIN',
    path: '/Login',
    exact: true,
    component: About
}
];

export default routes;