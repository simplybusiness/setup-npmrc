const fs = require("fs");
const core = require("@actions/core");

const makeNpmrc = (registry, scope, token) => `
@${scope}:registry=${registry}
always-auth=true
${registry}:_auth=${token}
${registry.replace("https:", "")}:_authToken=${token}
`;

try {
  const registry = core.getInput("registry");
  const scope = core.getInput("scope");
  const token = core.getInput("token");
  const contents = makeNpmrc(registry, scope, token);
  console.log("🤦‍♂️🤦‍♂️🤦‍♂️", contents);
  fs.writeFileSync(".npmrc", contents);
} catch (error) {
  core.setFailed(error.message);
}
