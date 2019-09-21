const path = require('path');

const withStylus = require('@zeit/next-stylus');

module.exports = withStylus({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 2,
    localIdentName: '[local]___[hash:base64:5]',
    camelCase: true,
  },
  stylusLoaderOptions: {
    import: [path.resolve(__dirname, './lib/lib.styl')],
  },
  webpack: (config) => {
    config.module.rules.forEach((rule) => {
      if (rule.test.toString().includes('.styl')) {
        rule.rules = rule.use.map((useRule) => {
          if (typeof useRule === 'string') {
            return {
              loader: useRule,
            };
          }

          if (useRule.loader.startsWith('css-loader')) {
            return {
              oneOf: [
                {
                  test: new RegExp('.global.styl$'),
                  loader: useRule.loader,
                  options: {
                    ...useRule.options,
                    modules: false,
                  },
                },
                {
                  loader: useRule.loader,
                  options: useRule.options,
                },
              ],
            };
          }

          return useRule;
        });
        delete rule.use;
      }
    });
    return config;
  },
});
