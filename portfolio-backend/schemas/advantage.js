export default {
  name: "advantages",
  title: "Advantages",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "yearsExperience",
      title: "Years of Experience",
      type: "string",
    },
    {
      name: "clientSatisfaction",
      title: "Client Satisfaction",
      type: "string",
    },
    {
      name: "languagesBox",
      title: "Languages Box",
      type: "array",
      of: [{ type: "languagesBox" }],
    },
  ],
};
