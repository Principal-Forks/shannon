// Basic test suite for Shannon CLI functionality
describe('Shannon CLI', () => {
  test('should have correct package name', () => {
    const packageJson = require('../../package.json');
    expect(packageJson.name).toBe('shannon');
  });

  test('should have correct version', () => {
    const packageJson = require('../../package.json');
    expect(packageJson.version).toBe('1.0.0');
  });

  test('should have main entry point', () => {
    const packageJson = require('../../package.json');
    expect(packageJson.main).toBe('shannon.mjs');
  });

  test('should have required dependencies', () => {
    const packageJson = require('../../package.json');
    expect(packageJson.dependencies).toHaveProperty('@anthropic-ai/claude-agent-sdk');
    expect(packageJson.dependencies).toHaveProperty('js-yaml');
    expect(packageJson.dependencies).toHaveProperty('zod');
  });

  test('should have dev dependencies for quality tools', () => {
    const packageJson = require('../../package.json');
    expect(packageJson.devDependencies).toHaveProperty('eslint');
    expect(packageJson.devDependencies).toHaveProperty('prettier');
    expect(packageJson.devDependencies).toHaveProperty('typescript');
    expect(packageJson.devDependencies).toHaveProperty('jest');
  });
});