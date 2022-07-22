export default {
  name: "workExperience",
  title: "Work Experience",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "yearFrom",
      title: "Year From",
      type: "string",
    },
    {
      name: "yearTo",
      title: "Year To",
      type: "string",
    },
    {
      name: "position",
      title: "Position",
      type: "string",
    },
    {
      name: "website",
      title: "Website",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
