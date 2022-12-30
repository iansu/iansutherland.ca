import { DocumentIcon } from '@heroicons/react/24/outline';

export default function NoResults() {
  return (
    <div className="py-14 px-6 text-center sm:px-14">
      <DocumentIcon className="mx-auto h-6 w-6 text-gray-500" aria-hidden="true" />
      <p className="mt-4 text-sm text-gray-900 dark:text-gray-200">No results found. Please try again.</p>
    </div>
  );
}
