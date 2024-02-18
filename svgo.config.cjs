module.exports = {
  multipass: true, // boolean. false by default
  plugins: [
    // set of built-in plugins enabled by default
    "preset-default",
    // enable built-in plugins by name
    "prefixIds",
    // or by expanded notation which allows to configure plugin
    {
      name: "sortAttrs",
      params: {
        xmlnsOrder: "alphabetical",
        overrides: {
          removeViewBox: false,
          removeDimensions: true,
          removeDoctype: true,
          removeComments: true,
          removeMetadata: true,
          removeEditorsNSData: true,
          cleanupIDs: true,
          removeRasterImages: true,
          removeUselessDefs: true,
          removeUnknownsAndDefaults: true,
          removeUselessStrokeAndFill: true,
          removeHiddenElems: true,
          removeEmptyText: true,
          removeEmptyAttrs: true,
          removeEmptyContainers: true,
          removeUnusedNS: true,
          removeDesc: true,
          prefixIds: false,
          prefixClassNames: false,
        },
      },
    },
  ],
};
