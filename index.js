const fs = require("fs");
const core = require("@actions/core");

const makeNpmrc = (token) => `
@simplybusiness:registry=https://bnw-registry.simplybusiness.io
always-auth=true
email=pest@simplybusiness.co.uk
_auth=${token}
`;

try {
  const token = core.getInput("token");
  const contents = makeNpmrc(token);
  fs.writeFileSync(".npmrc", contents);
} catch (error) {
  core.setFailed(error.message);
}
