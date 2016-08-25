var src = 'app';
var build = 'build';
var development = 'build/development';
var production = 'build/production';
var srcAssets = 'app/assets';
var developmentAssets = 'build/assets';
var productionAssets = 'build/production/assets';

module.exports = {
  base64: {
    src: developmentAssets + '/css/*.css',
    dest: developmentAssets + '/css',
    options: {
      baseDir: build,
      extensions: ['png'],
      maxImageSize: 20 * 1024, // bytes
      debug: false
    }
  },
  browserify: {
    // Enable source maps
    debug: true,
    // Additional file extensions to make optional
    extensions: ['.coffee', '.hbs'],
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: './' + srcAssets + '/javascripts/application.js',
      dest: developmentAssets + '/js',
      outputName: 'application.js'
    }, {
      entries: './' + srcAssets + '/javascripts/prism.js',
      dest: developmentAssets + '/js',
      outputName: 'prism.js'
    }]
  },
  browsersync: {
    development: {
      server: {
        // We're serving the src folder as well
        // for the sass sourcemap linking
        baseDir: [development, build, src]
      },
      port: 9999,
      ui: {
        port: 9997,
        weinre: {
          port: 9996
        }
      },
      open: false,
      files: [
        developmentAssets + '/css/*.css',
        developmentAssets + '/js/*.js',
        developmentAssets + '/images/**'
      ],
      notify: {
        styles: [ 'display: hidden; padding: 5px 15px; font-family: sans-serif; position: fixed; font-size: 0.9em; z-index: 9999; left: 0px; top: 0px; border-bottom-right-radius: 5px; margin: 0px; color: white; text-align: center; background-color: rgb(27, 32, 50);' ]
      }
    },
    production: {
      server: {
        baseDir: [production]
      },
      port: 9998,
      open: false,
      notify: {
        styles: [ 'display: hidden; padding: 5px 15px; font-family: sans-serif; position: fixed; font-size: 0.9em; z-index: 9999; left: 0px; top: 0px; border-bottom-right-radius: 5px; margin: 0px; color: white; text-align: center; background-color: rgb(27, 32, 50);' ]
      }
    }
  },
  collect: {
    src: [
      productionAssets + '/manifest.json',
      production + '/**/*.{html,xml,txt,json,css,js}',
      '!' + production + '/index.xml'
    ],
    dest: production
  },
  criticalcss: {
    src: developmentAssets + '/css/critical*.css',
    dest: src + '/layouts/partials/critical/'
  },
  deleteAssets: {
    src: [
      developmentAssets,
      development,
      production
    ]
  },
  gzip: {
    src: production + '/**/*.{html,xml,json,css,js}',
    dest: production,
    options: {}
  },
  images: {
    src: srcAssets + '/images/**/*',
    dest: developmentAssets + '/images'
  },
  productionImages: {
    src: srcAssets + '/images/**/*',
    dest: productionAssets + '/images'
  },
  hugo: {
    development: {
      src: src,
      dest: development,
      config: 'config.toml'
    },
    production: {
      src: src,
      dest: production,
      config: 'config.production.toml'
    }
  },
  eslint: {
    src: [
      '!node_modules/**',
      srcAssets + '/javascripts/*.js'
    ]
  },
  lintStyles: {
    src: [
      srcAssets + '/styles/**/*.css',
      '!' + srcAssets + '/styles/vendor/_meyer-reset.css',
      '!' + srcAssets + '/styles/vendor/_syntax.css'
    ],
    options: {
      reporter: {
        clearMessages: true
      }
    }
  },
  loadcss: {
    src: 'node_modules/fg-loadcss/src/loadCSS.js',
    dest: src + '/layouts/partials/critical/',
    options: {}
  },
  optimize: {
    css: {
      src: developmentAssets + '/css/*.css',
      dest: productionAssets + '/css/',
      options: {
        keepSpecialComments: 0
      }
    },
    js: {
      src: developmentAssets + '/js/*.js',
      dest: productionAssets + '/js/',
      options: {}
    },
    images: {
      src: srcAssets + '/images/**/*.{jpg,jpeg,png,gif,svg}',
      dest: srcAssets + '/images/',
      options: {
        optimizationLevel: 3,
        progressive: true,
        interlaced: true
      }
    },
    html: {
      src: production + '/**/*.html',
      dest: production,
      options: {
        collapseWhitespace: true,
        conservativeCollapse: true,
        removeComments: true,
        minifyJS: true,
        minifyCSS: true,
        processScripts: ['application/ld+json']
      }
    }
  },
  revision: {
    src: {
      assets: [
        productionAssets + '/css/*.css',
        productionAssets + '/js/*.js',
        productionAssets + '/images/**/*'
      ],
      base: production
    },
    dest: {
      assets: production,
      manifest: {
        name: 'manifest.json',
        path: productionAssets
      }
    }
  },
  rsync: {
    src: production + '/**',
    options: {
      destination: '~/path/to/website/',
      root: production,
      hostname: 'domain.de',
      username: 'user',
      incremental: true,
      progress: true,
      relative: true,
      emptyDirectories: true,
      recursive: true,
      clean: true,
      exclude: ['.DS_Store'],
      include: []
    }
  },
  scripts: {
    src: srcAssets + '/javascripts/application.js',
    dest: developmentAssets + '/js'
  },
  styles: {
    src: srcAssets + '/styles/*.css',
    dest: developmentAssets + '/css',
    options: {
      precss: {},
      autoprefixer: {
        browsers: [
          'last 2 versions',
          'safari 5',
          'ie 8',
          'ie 9',
          'opera 12.1',
          'ios 6',
          'android 4'
        ],
        cascade: true
      },
      easings: {},
      responsiveType: {},
      lost: {},
      hexRGBA: {},
      pxtorem: {
        root_value: 18,
        unit_precision: 5,
        prop_white_list: ['font', 'font-size', 'line-height', 'letter-spacing'],
        selector_black_list: [],
        replace: true,
        media_query: true
      },
      mqpacker: {}
    }
  },
  svg: {
    src: 'vectors/*.svg',
    dest: src + '/layouts/partials',
    options: {
      mode: {
        symbol: {
          dest: 'svg',
          sprite: 'icons.svg'
        }
      },
      svg: {
        xmlDeclaration: false,
        doctypeDeclaration: false
      }
    }
  },
  watch: {
    hugo: [
      'config.toml',
      'config.production.toml',
      src + '/data/**/*.{json,yml,csv}',
      src + '/layouts/**/*.{html,xml,txt}',
      src + '/content/**/*.{markdown,md}',
      src + '/**/*.{html,markdown,md,yml,json,txt,xml}',
      src + '/*'
    ],
    styles: srcAssets + '/styles/**/*.css',
    scripts: srcAssets + '/javascripts/**/*.js',
    images: srcAssets + '/images/**/*',
    svg: 'vectors/*.svg',
    loadcss: 'node_modules/fg-loadcss/src/loadCSS.js',
    criticalcss: developmentAssets + '/css/critical*.css'
  },
  webp: {
    src: srcAssets + '/images/**/*.{jpg,jpeg,png}',
    dest: srcAssets + '/images/',
    options: {}
  }
};
