const fs = require("fs");
const path = require("path");
const sass = require("node-sass");

const getComponents = () => {
  let allComponents = [];
  const sources = ["atoms", "molecules", "organisms"];
  sources.forEach((source) => {
    const allFiles = fs
      .readdirSync(`src/${source}`)
      .map((file) => ({
        input: `src/${source}/${file}`,
        output: `src/lib/${file.slice(0, -4)}css`
      }));
    
    allComponents = [...allComponents, ...allFiles];
  });
  return allComponents
};

const compile = (source, destination) => {
  const result = sass.renderSync({
    data: fs.readFileSync(path.resolve(source)).toString(),
    outputStyle: "expanded",
    outFile: "global.css",
    includePaths: [path.resolve("src")],
  });

  fs.writeFileSync(path.resolve(destination), result.css.toString());
};


compile("src/global.scss", "src/lib/global.css")
getComponents().forEach(comp => compile(comp.input, comp.output))
