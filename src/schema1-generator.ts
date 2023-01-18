import fs from "fs";
import { reusableSchema } from "./reusable-schema";

const schema1Generator = () => {
  const file = fs.createWriteStream("schema1Generator.json");

  const schema = [{ name: "json", ...reusableSchema }];

  file.write(JSON.stringify(schema, null, 2));
  file.end();
};

export default schema1Generator;
