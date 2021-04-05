module.exports = {
  core: {
    builder: "webpack5"
  },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/preset-scss",
    "storybook-css-modules-preset",
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
};
