import Head from "next/head";
import Header from "./Header";
import Search from "./Search";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Head>

      <Header />
      <Search />
      <main className="container mx-auto my-7">{children}</main>
    </div>
  );
}

Layout.defaultProps = {
  title: "Welcome to Dev space",
  keywords: "development, coding, programming",
  description: "The best info in news and development",
};
