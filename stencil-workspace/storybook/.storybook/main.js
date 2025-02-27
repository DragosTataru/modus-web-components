module.exports = {
  "stories": [
    "../**/*.stories.mdx",
    "../**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "staticDirs": ['../public'],
  "addons": [
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
    // "storybook-dark-mode"
  ],
  babel: async (options) => ({
    ...options,
    presets: [...options.presets, '@babel/preset-react'],
  }),
  "framework": "@storybook/web-components"
}
