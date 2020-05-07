module.exports = {
  title: "Code Quality",
  tagline: "Welcome to our blog and docs page",
  url: "https://code-quality-metrics.github.io/docs-and-blog/",
  baseUrl: "/docs-and-blog/",
  favicon: "img/website-icon.png",
  organizationName: "code-quality-metrics", // Usually your GitHub org/user name.
  projectName: "docs-and-blog", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Code Quality",
      logo: {
        alt: "Code Quality Logo",
        src: "img/website-icon.png",
      },
      links: [
        {
          to: "docs/doc1",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/code-quality-metrics",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Blog posts",
          items: [
            {
              label: "Node",
              to: "blog/tags/node",
            },
            {
              label: "React",
              to: "blog/tags/react",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Main Page",
              to: "https://code-quality-metrics.github.io",
            },
            {
              label: "GitHub",
              href: "https://github.com/code-quality-metrics",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CQ. Built with Docusaurus.`,
    },
    googleAnalytics: {
        trackingID: 'UA-165829341-2',
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 5,
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
