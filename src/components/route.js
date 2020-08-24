import { lazy } from 'react';

export default [
  {
    path: '/phonebook',
    label: 'Phonebook',
    exact: true,
    component: lazy(() => import('./PhoneBook/PhoneBook')),
    private: true,
    restircted: false,
  },
  {
    path: '/registration',
    label: 'Registration',
    exact: true,
    component: lazy(() => import('./Registartion/Registration')),
    private: false,
    restircted: true,
  },
  {
    path: '/',
    label: 'LogIn',
    exact: true,
    component: lazy(() => import('./LogIn/LogIn')),
    private: false,
    restircted: true,
  },
];
