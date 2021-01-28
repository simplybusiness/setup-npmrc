const fs = require("fs");
const path = require("path");
const core = require("@actions/core");

const makeNpmrc = (registry, scope, token) => `
always-auth=true
_auth=${token}
`;

try {
  const registry = core.getInput("registry");
  const scope = core.getInput("scope");
  const token = core.getInput("token");
  const writePath = core.getInput("write-path") || process.cwd();
  const contents = makeNpmrc(registry, scope, token);
  const filePath = path.join(writePath, '.npmrc');
  fs.writeFileSync(filePath, contents);
  console.log(`Writing to ${filePath}`);
  core.exportVariable('NPM_CONFIG_USERCONFIG', filePath);
} catch (error) {
  core.setFailed(error.message);
}
