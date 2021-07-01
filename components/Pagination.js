import Link from "next/link";

export default function Pagination({ currentPage, numPages }) {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = `/blog/page/${currentPage - 1}`;
  const nextPage = `/blog/page/${currentPage + 1}`;

  if (numPages === 1) return <></>;

  return (
    <div className="mt-6">
      <ul className="flex pl-0 list-none my-2">
        <li>
          {!isFirst && (
            <Link href={prevPage}>
              <a className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-800 mr-1 hover:bg-gray-200 cursor-pointer">
                Previous
              </a>
            </Link>
          )}
        </li>

        {Array.from({ length: numPages }, (_, i) => (
          <li key={i + 1}>
            <Link href={`/blog/page/${i + 1}`}>
              <a className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-800 mr-1 hover:bg-gray-200 cursor-pointer">
                {i + 1}
              </a>
            </Link>
          </li>
        ))}

        <li>
          {!isLast && (
            <Link href={nextPage}>
              <a className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-800 mr-1 hover:bg-gray-200 cursor-pointer">
                Next
              </a>
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
}
