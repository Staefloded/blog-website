import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "@/components/Layout";
import Link from "next/link";
import CategoryLabel from "@/components/CategoryLabel";
import Image from "next/image";
import marked from "marked";
import { buildUrl } from "cloudinary-build-url";

export default function PostPage({
  frontmatter: { title, category, date, cover_image, author, author_image },
  content,
  slug,
}) {
  const url = buildUrl(cover_image, {
    cloud: {
      cloudName: "staefloded",
    },
  });

  const blurUrl = buildUrl(cover_image, {
    cloud: {
      cloudName: "staefloded",
    },
    transformations: {
      effect: "blur:1000",
      quality: 1,
    },
  });

  return (
    <Layout title={title}>
      <Link href="/blog">
        <a>Go Back</a>
      </Link>

      <div className="w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6 ">
        <div className="flex justify-between items-center mt-4 mb-4">
          <h1 className="text-3xl leading-none font-bold sm:text-5xl">{title}</h1>
          <CategoryLabel>{category}</CategoryLabel>
        </div>

        <Image
          src={url}
          layout="responsive"
          width={300}
          height={200}
          alt=""
          blurDataURL={blurUrl}
          placeholder="blur"
          objectFit="cover"
          className="w-full rounded"
        />

        <div className="flex justify-between items-center bg-gray-100 p-2 my-8">
          <div className="flex items-center">
            <Image
              src={author_image}
              alt=""
              width={35}
              height={35}
              className="w-10 h-10 object-cover rounded-full"
            />

            <h4 className="ml-1">{author}</h4>
          </div>

          <span className="mr-4">{date}</span>
        </div>

        <div className="blog-text mt-2">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(path.join("posts", slug + ".md"), "utf-8");

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
}
