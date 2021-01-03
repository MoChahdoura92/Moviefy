const fs = require('fs')

const contents = fs.readFileSync(require.resolve('./assets/resume.pdf'))

exports.handler = function(event, context, callback) {
  callback(null, {
  statusCode: 200,
  body: `${contents}`
  });
}