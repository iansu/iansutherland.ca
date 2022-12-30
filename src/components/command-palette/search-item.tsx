import { Combobox } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

export interface SearchItemProps {
  search: (query: string) => void;
}

export default function SearchItem({ search }: SearchItemProps) {
  return (
    <div className="relative">
      <MagnifyingGlassIcon
        className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
        aria-hidden="true"
      />
      <Combobox.Input
        className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
        placeholder="Search..."
        onChange={(event) => search(event.target.value)}
      />
    </div>
  );
}
