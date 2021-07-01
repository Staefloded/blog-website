import Link from "next/link";

export default function CategoryList({ categories }) {
  return (
    <div className="w-full p-5 bg-white rounded-lg shadow-md mt-6">
      <h3 className="text-2xl bg-gray-800 text-white p-3 rounded">Blog Categories</h3>
      <ul className="divide-y divide-gray-300">
        {categories.map((category, index) => (
          <li key={index} className="p-4 hover:bg-gray-50">
            <Link href={`/blog/category/${category.toLowerCase()}`}>
              <a className="block w-full">{category}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
