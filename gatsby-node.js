require('ts-node').register();

const path = require('path');

const { createPages } = require('./src/lib/gatsby/createPages');
const { onCreateNode } = require('./src/lib/gatsby/onCreateNode');
const {
  onCreateWebpackConfig,
} = require('./src/lib/gatsby/onCreateWebpackConfig');

exports.createPages = createPages;
exports.onCreateNode = onCreateNode;
exports.onCreateWebpackConfig = onCreateWebpackConfig;
