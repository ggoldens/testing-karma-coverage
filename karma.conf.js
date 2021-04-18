module.exports = (config) => {
  config.set({
    frameworks: ['jasmine', 'jasmine-matchers'],
    preprocessors: {
        '*.js': ['coverage'],
    },
    files: [
        '*.js',
        '*.spec.js',
    ],
    plugins: [
        'karma-jasmine',
        'karma-jasmine-matchers',
        'karma-chrome-launcher',
        'karma-coverage'
    ],
    reporters: ['dots', 'coverage'],
    color: true,
    singleRun: true,
    browsers: ['ChromeHeadless'],
    coverageReported: {
        dir: 'coverage/',
        reporters: [
            { type: 'html', subdir: 'html'},
        ]
    }
  });
}