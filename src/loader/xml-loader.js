
const xml2js = require('xml2js');
const parser = new xml2js.Parser();

module.exports =  function(source) {
  this.cacheable && this.cacheable();
  const self = this;
  console.log('11')
  parser.parseString(source, function (err, result) {
    self.callback(err, !err && "module.exports = " + JSON.stringify(result));
  });
};