module.exports = {
  levels: [
    {
      layer: 'common',
      path: 'src/common.blocks',
      scheme: 'nested'
    },
    {
      layer: 'desktop',
      path: 'src/desktop.blocks',
      scheme: 'nested'
    },
    {
      layer: 'touch',
      path: 'src/touch.blocks',
      scheme: 'nested'
    },
    {
      layer: 'mobile',
      path: 'src/mobile.blocks',
      scheme: 'nested'
    },
    {
      layer: 'tablet',
      path: 'src/tablet.blocks',
      scheme: 'nested'
    }
  ],
  sets: {
    desktop: 'common desktop',
    mobile: 'common touch mobile',
    tablet: 'common touch tablet'
  },
  modules: {
    'bem-tools': {
      plugins: {
        create: {
          levels: {
            'src/common.blocks': { default: true }
          },
          techs: ['js', 'css'],
          templates: {
            js: '.bem/templates/js.js'
          }
        }
      }
    }
  }
};
