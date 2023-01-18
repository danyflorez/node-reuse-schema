import fs from "fs";
import { reusableSchema } from "./reusable-schema";

const schema2Generator = () => {
  const file = fs.createWriteStream("schema2Generator.json");

  const schema = [{ key: "found", ...reusableSchema }];

  file.write(JSON.stringify(schema, null, 2));
  file.end();
};

export default schema2Generator;
