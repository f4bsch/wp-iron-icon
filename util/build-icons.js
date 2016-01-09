#!/usr/bin/env node

var fs = require('fs');
var cheerio = require('cheerio');
var path = require('path');

var cheerioOptions = {xmlMode: true};
var icon_categories = [
'communication',
'device',
'editor',
'hardware',
'image',
'iron',
'maps',
'notification',
'social'
];

var license_comment = '<!--\nCopyright (c) 2014 The Polymer Project Authors. All rights reserved.\n'+
'This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt\n'+
'The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt\n'+
'The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt\n'+
'Code distributed by Google as part of the polymer project is also\n'+
'subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt\n'+
'-->\n';


function read(file) {
  var content = fs.readFileSync(file, 'utf8');
  return cheerio.load(content, cheerioOptions);
}

function transmogrify($, name) {

  
  
  return output;
}




icon_categories.forEach(function(cat) {
  var file = '../iron-icons/'+cat+'-icons.html';  
  console.log(file, cat);  
  var $ = read(file);  
  var node = $('svg');
  var innerHTML = $.xml(node.children());  

  var svg_open = '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n';
  var svg_close = '\n</svg>';
  
  var out_file = '../icons/'+cat+'.svg'; 

  fs.writeFile(out_file, license_comment+svg_open+innerHTML+svg_close);
});
