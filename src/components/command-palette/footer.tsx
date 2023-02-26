import Key from '@components/command-palette/key';

export default function Footer() {
  return (
    <div className="hidden flex-wrap items-center bg-gray-50 py-2.5 px-4 text-xs text-gray-700 dark:bg-black dark:text-gray-200 sm:flex">
      Press <Key>Enter</Key> to select, <Key>Esc</Key> to exit
    </div>
  );
}
