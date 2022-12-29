import { Fragment, useState, useEffect, useCallback } from 'react';
import { Combobox, Dialog, Transition } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { FolderIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

import { on, off } from '@lib/events';
import { links } from '@lib/links';

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const toggleNavigation = useCallback(() => setOpen(!open), [open]);
  const toggleNavigationOnShortcut = useCallback(
    (event) => {
      if (event.metaKey && event.key === 'k') {
        setOpen(!open);
      }
    },
    [open]
  );

  useEffect(() => {
    on('navigation:toggle', toggleNavigation);
    on('keydown', toggleNavigationOnShortcut);

    return () => {
      off('navigation:toggle', toggleNavigation);
      off('keydown', toggleNavigationOnShortcut);
    };
  }, [toggleNavigation, toggleNavigationOnShortcut]);

  const filteredLinks =
    query === ''
      ? []
      : links.filter((link) => {
          return link.title.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Transition.Root show={open} as={Fragment} afterLeave={() => setQuery('')} appear>
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
              <Combobox onChange={(item) => (window.location = item.url)}>
                <div className="relative">
                  <MagnifyingGlassIcon
                    className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <Combobox.Input
                    className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    onChange={(event) => setQuery(event.target.value)}
                  />
                </div>

                {(query === '' || filteredLinks.length > 0) && (
                  <Combobox.Options static className="max-h-80 scroll-py-2 divide-gray-100 overflow-y-auto">
                    <li className="p-2">
                      <ul className="text-sm text-gray-700">
                        {filteredLinks.map((link) => (
                          <Combobox.Option
                            key={link.url}
                            value={link}
                            className={({ active }) =>
                              clsx(
                                'flex cursor-default select-none items-center rounded-md px-3 py-2',
                                active && 'bg-indigo-600 text-white'
                              )
                            }
                          >
                            {({ active }) => (
                              <>
                                <FolderIcon
                                  className={clsx('h-6 w-6 flex-none', active ? 'text-white' : 'text-gray-400')}
                                  aria-hidden="true"
                                />
                                <span className="ml-3 flex-auto truncate">{link.title}</span>
                                {active && <span className="ml-3 flex-none text-indigo-100">Jump to...</span>}
                              </>
                            )}
                          </Combobox.Option>
                        ))}
                      </ul>
                    </li>
                    {query === '' && (
                      <li className="p-2">
                        <h2 className="sr-only">Quick actions</h2>
                        <ul className="text-sm text-gray-700">
                          {links.map((link) => (
                            <Combobox.Option
                              key={link.url}
                              value={link}
                              className={({ active }) =>
                                clsx(
                                  'flex cursor-default select-none items-center rounded-md px-3 py-2',
                                  active && 'bg-indigo-600 text-white'
                                )
                              }
                            >
                              {({ active }) => (
                                <>
                                  {/* <link.icon
                                    className={clsx('h-6 w-6 flex-none', active ? 'text-white' : 'text-gray-400')}
                                    aria-hidden="true"
                                  /> */}
                                  <span className="ml-3 flex-auto truncate">{link.title}</span>
                                </>
                              )}
                            </Combobox.Option>
                          ))}
                        </ul>
                      </li>
                    )}
                  </Combobox.Options>
                )}

                {query !== '' && filteredLinks.length === 0 && (
                  <div className="py-14 px-6 text-center sm:px-14">
                    <FolderIcon className="mx-auto h-6 w-6 text-gray-400" aria-hidden="true" />
                    <p className="mt-4 text-sm text-gray-900">No results found. Please try again.</p>
                  </div>
                )}
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
