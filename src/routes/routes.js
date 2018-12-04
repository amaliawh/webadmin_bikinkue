import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// Admin pages
import Overview from 'src/components/Dashboard/Views/Overview.vue'
import UserProfile from 'src/components/Dashboard/Views/UserProfile.vue'
import TableList from 'src/components/Dashboard/Views/TableList.vue'
import Icons from 'src/components/Dashboard/Views/Icons.vue'
import Maps from 'src/components/Dashboard/Views/Maps.vue'
import Notifications from 'src/components/Dashboard/Views/Notifications.vue'
import TambahResep from 'src/components/Dashboard/Views/TambahResep.vue'
import Coba from 'src/components/Dashboard/Views/Coba.vue'
//import Coba from 'src/components/Coba.vue'

const routes = [
  {
    path: '/',
    component: Coba,
    redirect: '/admin/overview'
  },
  {
    path: '/coba',
    component: Coba,
    redirect: '/coba'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'coba',
        name: 'Coba',
        component: Coba
      },
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'user',
        name: 'User',
        component: UserProfile
      },
      {
        path: 'table-list',
        name: 'Table List',
        component: TableList
      },

      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'Maps',
        component: Maps
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
      {
        path: 'tambahresep',
        name: 'Tambah Resep',
        component: TambahResep
      },
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
