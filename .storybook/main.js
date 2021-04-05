module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(sa|sc|c)ss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      exclude: /\.module\.(sa|sc|c)ss$/
    });

    config.module.rules.push({
      test: /\.(sa|sc|c)ss$/,
      use: ["style-loader", { loader: "css-loader", options: { modules: true } }, "sass-loader"],
      include: /\.module\.(sa|sc|c)ss$/
    });

    // Return the altered config
    return config;
  }
};
