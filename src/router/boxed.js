import BoxedLayout from 'Container/Boxed';

// dashboard components
const Ecommerce = () => import('Views/dashboard/Ecommerce');
const WebAnalytics = () => import('Views/dashboard/WebAnalytics');
const Magazine = () => import('Views/dashboard/Magazine');
const News = () => import('Views/dashboard/News');
const Agency = () => import('Views/dashboard/Agency');


export default {
   path: '/boxed',
   component: BoxedLayout,
   redirect: '/boxed/dashboard/ecommerce',
   children: [
      {
         component: Ecommerce,
         path: '/boxed/dashboard/ecommerce',
         meta: {
            requiresAuth: true,
            title: 'message.ecommerce',
            breadcrumb: 'Dashboard / Ecommerce'
         }
      },
      {
         component: WebAnalytics,
         path: '/boxed/dashboard/web-analytics',
         meta: {
            requiresAuth: true,
            title: 'message.webAnalytics',
            breadcrumb: 'Dashboard / Web Analytics'
         }
      },
      {
         component: Magazine,
         path: '/boxed/dashboard/magazine',
         meta: {
            requiresAuth: true,
            title: 'message.magazineAndNews',
            breadcrumb: 'Dashboard / Magazine'
         }
      },
      {
         component: News,
         path: '/boxed/dashboard/news',
         meta: {
            requiresAuth: true,
            title: 'message.news',
            breadcrumb: 'Dashboard / News'
         }
      },
      {
         component: Agency,
         path: '/boxed/dashboard/agency',
         meta: {
            requiresAuth: true,
            title: 'message.agency',
            breadcrumb: 'Dashboard / Agency'
         }
      }
   ]
}
