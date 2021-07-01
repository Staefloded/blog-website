import Image from "next/image";
import Link from "next/link";
import CategoryLabel from "./CategoryLabel";
import { buildUrl } from "cloudinary-build-url";

export default function Post({ post, compact }) {
  const url = buildUrl(post.frontmatter.cover_image, {
    cloud: {
      cloudName: "staefloded",
    },
  });

  const blurUrl = buildUrl(post.frontmatter.cover_image, {
    cloud: {
      cloudName: "staefloded",
    },
    transformations: {
      effect: "blur:1000",
      quality: 1,
    },
  });

  return (
    <div className="w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6 flex justify-between flex-col">
      {!compact && (
        <Image
          src={url}
          alt=""
          blurDataURL={blurUrl}
          placeholder="blur"
          height={420}
          width={600}
          className="mb-4 rounded"
        />
      )}

      <div className="flex justify-between items-center mt-1">
        <span className="font-light text-gray-600">{post.frontmatter.date}</span>
        <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
      </div>

      <div className="mt-2">
        <Link href={`/blog/${post.slug}`}>
          <a className="text-2xl text-gray-700 font-bold hover:underline">
            {post.frontmatter.title}
          </a>
        </Link>
        <p className="mt-2 text-gray-600">{post.frontmatter.excerpt}</p>
      </div>

      {!compact && (
        <div className="flex justify-between items-center mt-6">
          <Link href={`/blog/${post.slug}`}>
            <a className="text-gray-900 hover:text-blue-600">Read More</a>
          </Link>
          <div className="flex items-center ">
            <Image
              src={post.frontmatter.author_image}
              alt=""
              width={35}
              height={35}
              className="w-10 h-10 object-cover rounded-full"
            />
            <h3 className="text-gray-700 font-bold ml-2">{post.frontmatter.author}</h3>
          </div>
        </div>
      )}
    </div>
  );
}
