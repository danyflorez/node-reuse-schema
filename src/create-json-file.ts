import fs from "fs";

const createJsonFile = (fileName: string, schema: any) => {
  const file = fs.createWriteStream(fileName);
  file.write(JSON.stringify(schema, null, 2));
  file.end();
};
export default createJsonFile;
