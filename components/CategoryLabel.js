import Link from "next/link";

export default function CategoryLabel({ children }) {
  const colorKey = {
    JavaScript: "yellow",
    CSS: "blue",
    Python: "green",
    Ruby: "red",
    PHP: "purple",
  };

  return (
    <Link href={`/blog/category/${children.toLowerCase()}`}>
      <a className={`px-2 py-1 bg-${colorKey[children]}-600 text-gray-100 font-bold rounded`}>
        {children}
      </a>
    </Link>
  );
}
