module.exports = {
  moduleFileExtensions: ["js", "json", "ts"],
  preset: "ts-jest",
  rootDir: "./",
  testEnvironment: "node",
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  setupFiles: ["dotenv/config"],
  moduleDirectories: [".", "src", "../src", "../node_modules"],
  // coverageReporters: ['json'],
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "src/**/*.ts",
    // "src/modules/api/v3/**/*.ts",
    // // ignore Pattern
    // "!src/common/errors/**/*",
  ],
  coveragePathIgnorePatterns: [".module.ts$", ".spec.ts$", "__tests__/"],
};
