import { Fragment, useState, useEffect, useCallback } from 'react';
import { Combobox, Dialog, Transition } from '@headlessui/react';

import { on, off } from '@lib/events';
import { getMenuItems, searchMenuItems, MenuItemNode } from '@lib/menu';

import NoResults from '@components/command-palette/no-results';
import BackItem from '@components/command-palette/back-item';
import Footer from '@components/command-palette/footer';
import MenuItem from '@components/command-palette/menu-item';
import SearchItem from './search-item';

export default function CommandPalette() {
  const menuItemsRoot = getMenuItems();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [menuItems, setMenuItems] = useState<MenuItemNode>(menuItemsRoot);
  const toggleNavigation = useCallback(() => setOpen(!open), [open]);
  const toggleNavigationOnShortcut = useCallback(
    (event: KeyboardEvent) => {
      if (event.metaKey && event.key === 'k') {
        setOpen(!open);
      }
    },
    [open]
  );

  useEffect(() => {
    on('navigation:toggle', toggleNavigation);

    return () => {
      off('navigation:toggle', toggleNavigation);
    };
  }, [toggleNavigation]);

  useEffect(() => {
    on('keydown', toggleNavigationOnShortcut);

    return () => {
      off('keydown', toggleNavigationOnShortcut);
    };
  }, [toggleNavigationOnShortcut]);

  const reset = () => {
    setQuery('');
    setMenuItems(menuItemsRoot);
  };

  const selectItem = (node: MenuItemNode) => {
    const item = node.data;

    if (!item) {
      setOpen(false);

      return;
    }

    if (item.type === 'link') {
      if (item.url.startsWith('/') && window.location.pathname === item.url) {
        setOpen(false);
      } else if (item.url.startsWith('h') && window.location.href !== item.url) {
        setOpen(false);
      }

      window.location.href = item.url;
    } else if (item.type === 'action') {
      item.action();

      if (item.id !== 'back') {
        setOpen(false);
      }
    } else if (item.type === 'folder') {
      setQuery('');
      setMenuItems(node);
    } else {
      setOpen(false);
    }
  };

  const search = (query: string) => {
    setQuery(query);

    if (query !== '') {
      const searchResults = searchMenuItems(menuItemsRoot, query);

      setMenuItems(searchResults);
    } else {
      setMenuItems(menuItemsRoot);
    }
  };

  return (
    <Transition.Root show={open} as={Fragment} afterLeave={reset} appear>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="mx-auto max-w-2xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
              <Combobox onChange={(item: MenuItemNode) => selectItem(item)}>
                <SearchItem search={search} />

                {menuItems.children.length > 0 && (
                  <Combobox.Options static className="max-h-80 scroll-py-2 divide-gray-100 overflow-y-auto">
                    <li className="p-2">
                      <ul className="text-sm text-gray-700">
                        {menuItems.children.map((item: MenuItemNode) => (
                          <MenuItem key={item.data?.id} item={item} />
                        ))}

                        {menuItems.parent && <BackItem parentItem={menuItems.parent} setMenuItems={setMenuItems} />}
                      </ul>
                    </li>
                  </Combobox.Options>
                )}

                {query !== '' && menuItems.children.length === 0 && <NoResults />}

                <Footer />
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
