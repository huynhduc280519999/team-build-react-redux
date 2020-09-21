export const nonAuthenticatedRoutes = [
  {
    isExact: true,
    path: '/login',
    component: 'login'
  }
]

export const authenticatedRoutes = [
  {
    isExact: true,
    path: '/home',
    component: 'home'
  },
  {
    isExact: true,
    path: '/profile',
    component: 'profile'
  },
  {
    isExact: true,
    path: '/groups',
    component: 'groups'
  },
  {
    isExact: true,
    path: '/users',
    component: 'users'
  }
]

export const menuRoute = [
  {
    title: 'Hệ thống',
    childs: [
      {
        name: 'Profile',
        path: '/profile'
      },
      {
        name: 'Groups',
        path: '/groups'
      },
      {
        name: 'Users',
        path: '/users'
      }
    ]
  }
]