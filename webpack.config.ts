import * as path from "path";
import * as webpack from "webpack";
import * as webpackDevServer from "webpack-dev-server";

import ESLintPlugin from "eslint-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

import { customWebpackData } from "./package.json";

type Configuration = webpack.Configuration & {
  devServer: webpackDevServer.Configuration;
};

const baseConfig: Configuration = {
  cache: {
    type: "filesystem",
    cacheDirectory: path.resolve(__dirname, ".cache")
  },
  devServer: {
    contentBase: "./dist",
    hot: true,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  devtool: "inline-source-map",
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        exclude: /\.module\.(sa|sc|c)ss$/
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]__[hash:base64:5]"
              }
            }
          },
          "sass-loader"
        ],
        include: /\.module\.(sa|sc|c)ss$/
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource"
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource"
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  optimization: {
    moduleIds: "deterministic",
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  output: {
    clean: true,
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new ESLintPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      title: customWebpackData.appName
    })
  ]
};

export default function (env: unknown, { mode }: { [key: string]: string }): Configuration {
  const config = { ...baseConfig };

  if (mode === "production") {
    config.devtool = false;
  }

  return config;
}
