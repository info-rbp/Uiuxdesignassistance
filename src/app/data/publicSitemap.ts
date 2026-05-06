
import { INavLink } from "../types";
import { serviceCategories } from "./serviceCategories";


export const publicSitemap: INavLink[] = [
  {
    label: 'Home',
    path: '/',
    children: [
      {
        label: 'Header',
        path: '#header'
      },
      {
        label: 'Services',
        path: '#services'
      },
      {
        label: 'Process',
        path: '#process'
      },
      {
        label: 'Work',
        path: '#work'
      },
      {
        label: 'Pricing',
        path: '#pricing'
      },
      {
        label: 'Team',
        path: '#team'
      },
      {
        label: 'Testimonials',
        path: '#testimonials'
      },
      {
        label: 'Contact',
        path: '#contact'
      },
    ]
  },
  {
    label: 'Services',
    path: '/services',
    children: serviceCategories.map(serviceCategory => ({
      ...serviceCategory,
      path: `/services/${serviceCategory.path}`
    }))
  },
  {
    label: 'Company',
    path: '/company',
    children: [
      {
        label: 'About',
        path: '/company/about'
      },
      {
        label: 'Team',
        path: '/company/team'
      },
      {
        label: 'Blog',
        path: '/company/blog'
      },
      {
        label: 'Press',
        path: '/company/press'
      },
      {
        label: 'Careers',
        path: '/company/careers'
      },
      {
        label: 'Contact',
        path: '/company/contact'
      },
    ]
  },
  {
    label: 'Resources',
    path: '/resources',
    children: [
      {
        label: 'Blog',
        path: '/resources/blog'
      },
      {
        label: 'Case Studies',
        path: '/resources/case-studies'
      },
      {
        label: 'White Papers',
        path: '/resources/white-papers'
      },
      {
        label: 'Webinars',
        path: '/resources/webinars'
      },
    ]
  },
  {
    label: 'Contact',
    path: '/contact'
  }
]
