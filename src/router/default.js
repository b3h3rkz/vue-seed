import Full from 'Container/Full'

// dashboard components
const Ecommerce = () => import('Views/dashboard/Ecommerce');
const WebAnalytics = () => import('Views/dashboard/WebAnalytics');
const Magazine = () => import('Views/dashboard/Magazine');
const News = () => import('Views/dashboard/News');
const Agency = () => import('Views/dashboard/Agency');


export default {
   path: '/',
   component: Full,
   redirect: '/default/dashboard/ecommerce',
   children: [
      {
         path: '/default/dashboard/ecommerce',
         component: Ecommerce,
         meta: {
            requiresAuth: true,
            title: 'message.ecommerce',
            breadcrumb: 'Dashboard / Ecommerce'
         }
      },
      {
         path: '/default/dashboard/web-analytics',
         component: WebAnalytics,
         meta: {
            requiresAuth: true,
            title: 'message.webAnalytics',
            breadcrumb: 'Dashboard / Web Analytics '
         }
      },
      {
         path: '/default/dashboard/magazine',
         component: Magazine,
         meta: {
            requiresAuth: true,
            title: 'message.magazine',
            breadcrumb: 'Dashboard / Magazine '
         }
      },
      {
         path: '/default/dashboard/news',
         component: News,
         meta: {
            requiresAuth: true,
            title: 'message.news',
            breadcrumb: 'Dashboard / News '
         }
      },
      {
         path: '/default/dashboard/agency',
         component: Agency,
         meta: {
            requiresAuth: true,
            title: 'message.agency',
            breadcrumb: 'Dashboard / Agency'
         }
      }
   ]
}
