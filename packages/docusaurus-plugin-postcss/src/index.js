/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = (context, options) => {
  return {
    name: 'docusaurus-plugin-postcss',
    configureWebpack(config, isServer, utils) {
      const {getStyleLoaders} = utils;
      return {
        module: {
          rules: [
            {
              test: /\.css$/,
              exclude: /\.module\.css$/,
              use: [
                ...getStyleLoaders(isServer, {
                  importLoaders: 1,
                  sourceMap: false,
                }),
                {
                  loader: 'postcss-loader',
                  options: {
                    postcssOptions: {
                      plugins: [...options.plugins],
                    },
                  },
                },
              ],
            },
          ],
        },
      };
    },
  };
};
