import createJsonFile from "./create-json-file";
import { reusableSchema } from "./reusable-schema";

const schema2Generator = () => {
  const schema = [{ key: "found", ...reusableSchema }];
  createJsonFile("schema2Generator.json", schema);
};

export default schema2Generator;
