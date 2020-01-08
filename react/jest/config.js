module.exports = {
  testEnvironment: "jsdom",
  moduleDirectories: ["src", "node_modules"],
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/jest/__mocks__/styleMock.js",
    "\\.(jpg|gif|ttf|eot|svg)$": "<rootDir>/jest/__mocks__/fileMock.js"
  },
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    ".+\\.(css|styl|less|sass|scss)$":
      "<rootDir>/node_modules/jest-css-modules-transform"
  },
  setupFilesAfterEnv: ["<rootDir>/jest/setupTests.js"],
  moduleFileExtensions: ["js", "json", "jsx", "css", "scss"]
};
