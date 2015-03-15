// Generated by CoffeeScript 1.7.1
(function() {
  var CleanCss, HtmlMinify, UglifyJS;

  UglifyJS = require("uglify-js");

  CleanCss = require("clean-css");

  HtmlMinify = require("html-minifier");


  /*
      minify js
      @param {String} source original js source code
   */

  exports.minifyJS = function(source, cb, options) {
    var err, result;
    try {
      result = UglifyJS.minify(source, {
        fromString: true,
        compress: options
      });
      return cb(null, result.code);
    } catch (_error) {
      err = _error;
      return cb(err);
    }
  };


  /*
      minify css
      @param {String} source original css source code
   */

  exports.minifyCss = function(source, cb, options) {
    var err, result;
    try {
      result = new CleanCss(options).minify(source);
      return cb(null, result.styles);
    } catch (_error) {
      err = _error;
      return cb(err);
    }
  };


  /*
      html minify
      @param {String} source original html source code
   */

  exports.minifyHTML = function(source, cb, options) {
    var default_options, err, k, result;
    default_options = {
      removeComments: true,
      removeCommentsFromCDATA: true,
      removeCDATASectionsFromCDATA: true,
      collapseWhitespace: true,
      conservativeCollapse: true,
      preserveLineBreaks: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: true,
      removeRedundantAttributes: true,
      preventAttributesEscaping: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      removeoptionaltags: false,
      removeignored: false,
      removeemptyelements: true,
      keepclosingslash: true,
      casesensitive: true,
      minifyjs: true,
      minifyCSS: true,
      minifyURLs: false,
      ignoreCustomComments: [],
      processScripts: [],
      customAttrAssign: [],
      customAttrSurround: []
    };
    if (options) {
      for (k in default_options) {
        if (!options[k]) {
          options[k] = default_options[k];
        }
      }
    } else {
      options = default_options;
    }
    try {
      result = HtmlMinify.minify(source, options);
      return cb(null, result);
    } catch (_error) {
      err = _error;
      return cb(err);
    }
  };

}).call(this);

//# sourceMappingURL=api.map
