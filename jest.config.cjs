module.exports = {
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
  },
  moduleNameMapper: {
    '^@components/(.+)$': '<rootDir>/src/components/$1',
    '^@layouts/(.+)$': '<rootDir>/src/layouts/$1',
    '^@lib/(.+)$': '<rootDir>/src/lib/$1',
  },
};
