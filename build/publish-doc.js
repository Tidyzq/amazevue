var ghpages = require('gh-pages');
var config = require('../config');

ghpages.publish(config.doc.assetsRoot, function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log('publish to github pages success')
  }
});