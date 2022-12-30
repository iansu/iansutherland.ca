import { XMarkIcon } from '@heroicons/react/24/outline/index.js';

export interface HeaderProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ setOpen }: HeaderProps) {
  return (
    <div className="flex flex-wrap items-center justify-end py-2.5 px-4 text-xs text-gray-700 dark:bg-neutral-900 dark:text-gray-200 sm:hidden">
      <button>
        <XMarkIcon className="h-6 w-6" onClick={() => setOpen(false)} />
      </button>
    </div>
  );
}
