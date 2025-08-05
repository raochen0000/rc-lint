const assert = require("assert");
const eslint = require("eslint");
const path = require("path");

describe("test/eslint-config.test.js", () => {
  it("babel-eslint parser run well for react", async () => {
    const configPath = "./react.js";
    const filePath = path.join(__dirname, "./fixture/react-ts.tsx");

    const cli = new eslint.ESLint({
      overrideConfigFile: configPath,
      ignore: false,
    });

    const results = await cli.lintFiles([filePath]);
    const { messages, errorCount, fatalErrorCount, warningCount } = results[0];

    console.log("messages", messages);

    assert.equal(fatalErrorCount, 0);
    assert.equal(errorCount, 0);
    // assert.equal(warningCount, 1);

    const errorReportedByReactPlugin = messages.filter(result => {
      return result.ruleId && result.ruleId.indexOf("react/") !== -1;
    });

    assert.notEqual(errorReportedByReactPlugin.length, 0);
  });
});
