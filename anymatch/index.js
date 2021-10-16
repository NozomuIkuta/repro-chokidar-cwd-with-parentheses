const anymatch = require('anymatch').default

console.table({
  'No Paren Dir': {
    glob: '/no-paren-dir/content/**/*',
    path: '/no-paren-dir/content/sample.md',
    result: anymatch('/no-paren-dir/content/**/*', '/no-paren-dir/content/sample.md')
  },
  'Paren Dir No Escaped': {
    glob: '/(paren-dir)/content/**/*',
    path: '/(paren-dir)/content/sample.md',
    result: anymatch('/(paren-dir)/content/**/*', '/(paren-dir)/content/sample.md')
  },
  'Paren Dir Escaped': {
    glob: '/\\(paren-dir\\)/content/**/*',
    path: '/(paren-dir)/content/sample.md',
    result: anymatch('/\\(paren-dir\\)/content/**/*', '/(paren-dir)/content/sample.md')
  }
})
