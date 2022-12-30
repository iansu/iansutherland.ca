export default function Footer() {
  return (
    <div className="hidden flex-wrap items-center bg-gray-50 py-2.5 px-4 text-xs text-gray-700 dark:bg-black dark:text-gray-200 sm:flex">
      Press{' '}
      <kbd className="mx-1 rounded border border-gray-300 bg-white px-1 dark:border-gray-700 dark:bg-gray-800">
        Enter
      </kbd>{' '}
      to select,{' '}
      <kbd className="mx-1 rounded border border-gray-300 bg-white px-1 dark:border-gray-700 dark:bg-gray-800">ESC</kbd>{' '}
      to exit
    </div>
  );
}
