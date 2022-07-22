import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

// shcemas imports
import banner from "./banner";
import advantage from "./advantage";
import languagesBox from "./languagesBox";
import workExperience from "./workExperience";
import portfolio from "./portfolio";
import contact from "./contact";
import reviews from "./reviews";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    banner,
    advantage,
    languagesBox,
    workExperience,
    portfolio,
    contact,
    reviews,
  ]),
});
