export interface Link {
  title: string;
  url: string;
  description?: string;
  icon?: any;
  tags?: string[];
  links?: Link[];
}

const links: Link[] = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Speaking',
    url: 'https://pages.iansutherland.ca/speaking',
  },
  {
    title: 'About',
    url: '/about',
  },
];

export { links };
