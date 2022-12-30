import { Combobox } from '@headlessui/react';
import clsx from 'clsx';

import type { MenuItemNode } from '@lib/menu';

export interface MenuItemProps {
  isMobile: boolean;
  item: MenuItemNode;
}

export default function MenuItem({ isMobile, item }: MenuItemProps) {
  if (item.data) {
    return (
      <Combobox.Option
        value={item}
        className={({ active }) =>
          clsx(
            'flex cursor-default select-none items-center rounded-md px-3 py-2',
            active && !isMobile && 'bg-gray-600 text-white dark:bg-gray-800'
          )
        }
      >
        {({ active }) => (
          <>
            {item.data?.icon && (
              <item.data.icon
                className={clsx('h-6 w-6 flex-none', active && !isMobile ? 'text-white' : 'text-gray-500')}
                aria-hidden="true"
              />
            )}
            <span className="ml-3 flex-auto truncate">{item.data?.title}</span>
            {active && !isMobile && item.data?.type === 'link' && (
              <span className="ml-3 flex-none text-xs text-gray-400">{item.data?.url}</span>
            )}
          </>
        )}
      </Combobox.Option>
    );
  } else {
    return null;
  }
}
