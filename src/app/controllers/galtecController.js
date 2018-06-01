const controller = {};

//nodemailer = require('nodemailer');

controller.index2 = (req, res) => {

     
     res.render('galtec/index');
     console.log('Carga completa');

};

controller.test = (req, res) => {

     
    res.render('galtec/index2');
    console.log('Carga completa 2');

};
  
module.exports = controller;