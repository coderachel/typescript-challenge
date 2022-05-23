const { X509Certificate } = require('node:crypto');
const fs = require('fs')
fs.readFile('./demo1.cer', (err, data) => {
  if(err) {
    console.log(err)
    return
  }
  fs.writeFile('demo.bks', data, {
    encoding: 'utf8'
  }, (err) => {
    if(err) {
      console.log(err)
    }
  })
})