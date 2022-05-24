export default {
  clearMocks: true,
  coverageProvider: "v8",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  roots: ["<rootDir>/__test__"],
  testMatch: ["**/test/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "@exceptions/(.*)": "<rootDir>/src/exceptions/$1",
    "@controllers/(.*)": "<rootDir>/src/controllers/$1",
    "@middlewares/(.*)": "<rootDir>/src/middlewares/$1",
    "@routes/(.*)": "<rootDir>/src/routes/$1",
    "@repositories/(.*)": "<rootDir>/src/repositories/$1",
    "@utils/(.*)": "<rootDir>/src/utils/$1",
  },
};
