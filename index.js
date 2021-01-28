const fs = require("fs");
const core = require("@actions/core");

const makeNpmrc = (registry, scope, token) => `
@${scope}:registry=${registry}
always-auth=true
_auth=${token}
`;

try {
  const registry = core.getInput("registry");
  const scope = core.getInput("scope");
  const token = core.getInput("token");
  const writePath = core.getInput("write-path") || process.cwd();
  const contents = makeNpmrc(registry, scope, token);
  fs.writeFileSync(`${writePath}.npmrc`, contents);
} catch (error) {
  core.setFailed(error.message);
}
