// import webpack = require("webpack");
// import webpack from 'webpack'
const xml2js = require('xml2js');
const parser = new xml2js.Parser();
module.exports = function(source: string | Buffer){
    // 
    console.log('this', this);
    this.cacheable && this.cacheable();
    const self = this;
    parser.parseString(source, function (err: any, result: any) {
        self.callback(err, !err && "module.exports = " + JSON.stringify(result));
    });
    return source
}