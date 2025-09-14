// jest.config.ts
import nextJest from 'next/jest';
import type { Config } from 'jest';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const config: Config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  // The transform property is not needed here, as next/jest handles it automatically.
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default async () => {
  const jestConfig = await createJestConfig(config)();

  // The key change is here:
  // We modify transformIgnorePatterns to include both @prismicio/react and esm-env.
  // This tells Jest to NOT ignore these packages when transforming code.
  return {
    ...jestConfig,
    transformIgnorePatterns: [
      '/node_modules/(?!(@prismicio/react|esm-env)/)',
      // This is the default pattern provided by next/jest, it's good to keep it
      '^.+\\.module\\.(css|sass|scss)$',
    ],
  };
};