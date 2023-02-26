export interface KeyProps {
  children: React.ReactNode;
}

export default function Key({ children }: KeyProps) {
  return (
    <kbd className="mx-1 rounded border border-gray-300 bg-white px-1 shadow-[0_2px_0_0] shadow-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:shadow-[0_2px_0_0] dark:shadow-gray-600">
      {children}
    </kbd>
  );
}
