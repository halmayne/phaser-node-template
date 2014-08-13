'use strict';

exports.index = (req, res)=>{
  res.render('home/index', {title: 'Node.js: Home'});
};

exports.part1 = (req, res)=>{
  res.render('home/part1');
};
