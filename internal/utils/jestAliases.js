const {join} = require('path');

module.exports = {
  get: ({compilerOptions: {paths, baseUrl}}) => Object.entries(paths)
    .map(([alias, [path]]) => [alias, path])
    .map(([alias, path]) => [alias, `${join(baseUrl, path)}`])
    .map(([alias, path]) => alias.endsWith("/*")
      ? [
        `^${alias.substr(0, alias.lastIndexOf("/*"))}(.+)$`,
        `${join('<rootDir>', path.substr(0, path.lastIndexOf("/*")))}$1`
      ] : [`^${alias}$`, `${join('<rootDir>', path)}`]
    )
    .reduce((outObj, [k, v]) => ({ ...outObj, [k]: v }), {})
};
