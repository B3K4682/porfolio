export default {
  name: "portfolio",
  title: "Portfolio",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "banner",
      title: "Banner",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "githubLink",
      title: "Github Link",
      type: "string",
    },
    {
      name: "siteLink",
      title: "Site Link",
      type: "string",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "string",
    },
  ],
};
