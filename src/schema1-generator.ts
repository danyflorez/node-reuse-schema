import createJsonFile from "./create-json-file";
import { reusableSchema } from "./reusable-schema";

const schema1Generator = () => {
  const schema = [{ name: "json", ...reusableSchema }];
  createJsonFile("schema1Generator.json", schema)
};

export default schema1Generator;
