const ejs = require('ejs')
const fs = require('fs')
ejs.renderFile('./index.ejs', {cert_pem: 'certPem', cert_key: 'certKey'}, (err, str) => {
  if(err) {return}
  fs.writeFileSync('./nginx.conf', str)
})