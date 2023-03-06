const { response } = require('express');

const usuariosGet = (req, res = response) => {
  res.json({
    msg: 'get API - controlador',
  });
};

const usuariosPut = (req, res = response) => {
  res.json({
    msg: 'put API - controlador',
  });
};

const usuariosPost = (req, res = response) => {
  const { nombre, apellido, edad, id } = req.body;

  res.json({
    msg: 'post API - controlador',
    nombre,
    apellido,
    edad,
    id,
  });
};

const usuariosPatch = (req, res = response) => {
  res.json({
    msg: 'patch API - controlador',
  });
};

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: 'delete API - controlador',
  });
};

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosPatch,
  usuariosDelete,
};
