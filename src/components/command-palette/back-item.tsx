import { Combobox } from '@headlessui/react';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline/index.js';
import clsx from 'clsx';

import type { MenuItemNode } from '@lib/menu';

export interface BackItemProps {
  isMobile: boolean;
  parentItem: MenuItemNode;
  setMenuItems: React.Dispatch<React.SetStateAction<MenuItemNode>>;
}

export default function BackItem({ isMobile, parentItem, setMenuItems }: BackItemProps) {
  return (
    <Combobox.Option
      key="back"
      value={{
        parent: parentItem,
        data: {
          id: 'back',
          title: 'Back',
          type: 'action',
          action: () => setMenuItems(parentItem),
        },
      }}
      className={({ active }) =>
        clsx(
          'flex cursor-default select-none items-center rounded-md px-3 py-2',
          active && !isMobile && 'bg-gray-600 text-white'
        )
      }
    >
      {({ active }) => (
        <>
          <ArrowUturnLeftIcon
            className={clsx('h-6 w-6 flex-none', active && !isMobile ? 'text-white' : 'text-gray-500')}
            aria-hidden="true"
          />
          <span className="ml-3 flex-auto truncate">Back</span>
        </>
      )}
    </Combobox.Option>
  );
}
