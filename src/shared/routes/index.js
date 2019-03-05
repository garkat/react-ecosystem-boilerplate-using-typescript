import loadable from '@loadable/component';

const AboutUs = loadable(() => import('../views/AboutUs'));
const ContactUs = loadable(() => import('../views/ContactUs'));
const Home = loadable(() => import('../views/Home'));

const routes = [
  {
    component: AboutUs,
    exact: true,
    path: '/about-us',
  },
  {
    component: ContactUs,
    exact: true,
    path: '/contact-us',
  },
  {
    component: Home,
    exact: true,
    path: '/',
  },
];

export default routes;
