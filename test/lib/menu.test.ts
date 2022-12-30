import { getMenuItems, searchMenuItems } from '@lib/menu';

jest.mock('@lib/menu-items', () => ({
  menuItems: [
    {
      type: 'folder',
      title: 'Folder 1',
      menuItems: [
        {
          type: 'folder',
          title: 'Folder 1.1',
          menuItems: [
            {
              type: 'link',
              title: 'Link 1.1.1',
              href: '/link-1-1-1',
            },
            {
              type: 'link',
              title: 'Link 1.1.2',
              href: '/link-1-1-2',
            },
          ],
        },
        {
          type: 'link',
          title: 'Link 1.2',
          href: '/link-1-2',
        },
      ],
    },
    {
      type: 'folder',
      title: 'Folder 2',
      menuItems: [
        {
          type: 'link',
          title: 'Link 2.1',
          href: '/link-2-1',
        },
        {
          type: 'link',
          title: 'Link 2.2',
          href: '/link-2-2',
        },
      ],
    },
    {
      type: 'link',
      title: 'Link 3',
      href: '/link-3',
    },
    {
      type: 'link',
      title: 'Link 4',
      href: '/link-4',
    },
  ],
}));

describe('menu', () => {
  test('should return menu items', () => {
    const menuItems = getMenuItems();

    expect(menuItems.children).toHaveLength(4);
  });

  test('should return matching menu items', () => {
    const menuItems = getMenuItems();
    const searchResults = searchMenuItems(menuItems, 'f');

    expect(searchResults.children).toHaveLength(3);
  });
});
