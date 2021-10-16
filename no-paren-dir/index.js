const path = require('path')
const chokidar = require('chokidar')

chokidar.watch('**/*', {
  cwd: path.resolve('./content')
})
  .on('ready', () => console.log('Watching...'))
  .on('change', (path) => console.log(`Edited: ${path}`))
