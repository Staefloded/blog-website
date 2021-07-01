module.exports = {
  reactStrictMode: true,
  target: "serverless",
  images: {
    domains: ["randomuser.me", "res.cloudinary.com"],
  },
  async redirects() {
    return [
      {
        source: "/blog/page",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};
