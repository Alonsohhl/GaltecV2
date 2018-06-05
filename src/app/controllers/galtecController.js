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

controller.contacto = (req, res) => {     
    res.render('galtec/contacto');
    console.log('Carga contacto cargando');

};

controller.nosotros = (req, res) => {     
    res.render('galtec/nosotros');
    console.log('Nosotros cargando');

};

controller.servicios = (req, res) => {     
    res.render('galtec/servicios');
    console.log('servicios cargando');

};
  
module.exports = controller;