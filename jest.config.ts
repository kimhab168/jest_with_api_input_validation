import { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest", // Use ts-jest to run TypeScript files
  testEnvironment: "node", // Specifies that tests will run in a Node.js environment
  verbose: true, // Show detailed information about test results
  coverageDirectory: "coverage", // Output test coverage results in the 'coverage' directory
  collectCoverage: true, // Enable coverage collection
  testPathIgnorePatterns: ["/node_modules"], // Ignore the 'node_modules' directory when running tests
  transform: {
    "^.+\\.ts?$": "ts-jest", // Use ts-jest to transform TypeScript files
    "^.+\\.jsx?$": "babel-jest", // Use babel-jest to transform JavaScript files
  },
  transformIgnorePatterns: [
    "node_modules/(?!(yaml|@tsoa)/)", // Ignore node_modules except specific packages (like yaml, tsoa)
  ],
  testMatch: ["<rootDir>/src/**/__test__/*.ts"], // Match test files in the specified directory pattern
  collectCoverageFrom: [
    "src/**/*.ts", // Collect coverage for all TypeScript files in the src directory
    "!src/**/__test__/*.ts?(x)", // Exclude test files themselves from coverage
    "!**/node_modules/**", // Exclude node_modules from coverage
  ],
  coverageThreshold: {
    global: {
      branches: 1, // Minimum branch coverage required globally
      functions: 1, // Minimum function coverage required globally
      lines: 1, // Minimum line coverage required globally
      statements: 1, // Minimum statement coverage required globally
    },
  },
  coverageReporters: ["text-summary", "lcov"], // Output coverage reports in 'text-summary' and 'lcov' formats
  moduleNameMapper: {
    "@/(.*)": ["<rootDir>/$1"], // Map module imports to their corresponding paths
  },
};

export default config;
