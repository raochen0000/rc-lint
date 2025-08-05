const stylelint = require("stylelint");
const path = require("path");
const assert = require("assert");

describe("测试 stylelint", () => {
  it("stylelint-css 规则校验测试", async () => {
    const filePath = [path.join(__dirname, "./fixtures/index.css")];
    const configPath = path.join(__dirname, "../lib/stylelint-config.js");

    try {
      const result = await stylelint.lint({
        configFile: configPath,
        files: filePath,
        fix: false,
        // formatter: "compact",
      });
      // console.log("stylelint result:", result);

      if (result && result.errored) {
        const filesResult = JSON.parse(result.output || "[]");
        // console.log("stylelint result:", filesResult);
        filesResult.forEach(file => {
          if (file.warnings && file.warnings.length > 0) {
            file.warnings.forEach(warning => {
              console.log(warning);
            });
          }
        });
        assert.ok(filesResult.length == 0);
      }
    } catch (error) {
      console.log("error", error);
    }
  });
});
