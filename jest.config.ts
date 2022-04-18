module.exports = {
  moduleFileExtensions: ["js", "json", "ts"],
  rootDir: "./",
  testEnvironment: "node",
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  moduleDirectories: [".", "src", "../src", "../node_modules"],
  // setupFiles: ['dotenv/config'],
  // coverageReporters: ['json'],
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "src/**/*.ts",
    // ignore Pattern
    "!src/modules/*.ts",
  ],
  coveragePathIgnorePatterns: [".module.ts$", ".spec.ts$", "__tests__/"],
};
