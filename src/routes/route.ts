export interface IRoute {
  id: number
  name: string
  route: string
  icon?: any
  children?: IRoute[]
}

export const routes: IRoute[] = [
  {
    id: 1,
    name: 'dashboard',
    route: '/dashboard',
    icon: 'columns',
  },
  {
    id: 2,
    name: 'customers',
    route: '/dashboard/customers',
    icon: 'user-circle',
  },
  {
    id: 3,
    name: 'prospects',
    route: '/dashboard/prospects',
    icon: 'user-circle',
  },
  {
    id: 4,
    name: 'administration',
    route: '#',
    icon: 'sliders-v-square',
    children: [
      {
        id: 1,
        name: 'Payment Providers',
        route: '/dashboard/payment-providers',
      },
      { id: 2, name: 'Goals', route: '/dashboard/goals' },
      { id: 3, name: 'Gender', route: '/dashboard/genders' },
      { id: 4, name: 'Relationships', route: '/dashboard/relationships' },
      { id: 5, name: 'Titles', route: '/dashboard/titles' },
      { id: 6, name: 'Industries', route: '/dashboard/industries' },
      { id: 7, name: 'Products', route: '/dashboard/products' },
      { id: 8, name: 'Product Unit Prices', route: '/dashboard/product-unit-prices' },
    ],
  },
]
