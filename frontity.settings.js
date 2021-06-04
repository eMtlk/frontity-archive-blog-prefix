const settings = {
  name: "archive-blog-prefix",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["Blog", "/blog/"],
            ["Blog page 2", "/blog/page/2"],
            ["Test category", "/blog/category/test-category/"],
            ["Archive 2021/02 no-prefix", "/2021/02/"],
            ["Prefixed archive 2021/02", "/blog/2021/02"],
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://distcode.uk/frontity-blog",
          homepage: "/home",
          postsPage: "/blog",
          categoryBase: "blog/category",
          authorBase: "blog/author",
          tagBase: "blog/tag",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
