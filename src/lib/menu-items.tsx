import {
  Cog6ToothIcon,
  FolderIcon,
  HomeIcon,
  MicrophoneIcon,
  MoonIcon,
  SunIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

export interface MenuItemBase {
  id: string;
  title: string;
  description?: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  tags?: string[];
  type: 'action' | 'link' | 'folder';
}

export interface Action extends MenuItemBase {
  type: 'action';
  action: () => void;
}

export interface Link extends MenuItemBase {
  type: 'link';
  url: string;
}

export interface Folder extends MenuItemBase {
  type: 'folder';
  menuItems: MenuItem[];
}

export type MenuItem = Link | Action | Folder;

const menuItems: MenuItem[] = [
  {
    id: 'home',
    type: 'link',
    title: 'Home',
    url: '/',
    icon: HomeIcon,
  },
  {
    id: 'speaking',
    type: 'link',
    title: 'Speaking',
    url: 'https://pages.iansutherland.ca/speaking',
    icon: MicrophoneIcon,
  },
  {
    id: 'about',
    type: 'link',
    title: 'About',
    url: '/about',
    icon: UserIcon,
  },
  {
    id: 'change-theme',
    type: 'folder',
    title: 'Change theme',
    icon: FolderIcon,
    menuItems: [
      {
        id: 'light-theme',
        type: 'action',
        title: 'Light',
        icon: SunIcon,
        action: () => {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        },
      },
      {
        id: 'dark-theme',
        type: 'action',
        title: 'Dark',
        icon: MoonIcon,
        action: () => {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        },
      },
      {
        id: 'system-theme',
        type: 'action',
        title: 'System',
        icon: Cog6ToothIcon,
        action: () => {
          document.documentElement.classList.remove('dark');
          localStorage.removeItem('theme');
        },
      },
    ],
  },
];

export { menuItems };
