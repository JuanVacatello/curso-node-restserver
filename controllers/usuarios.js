const { response } = require('express');
const Usuario = require('../models/usuario');

const usuariosGet = (req, res = response) => {
  const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

  res.json({
    msg: 'get API - controlador',
    q,
    nombre,
    apikey,
    page,
    limit,
  });
};

const usuariosPut = (req, res = response) => {
  const { id } = req.params;

  res.json({
    msg: 'put API - controlador',
    id,
  });
};

const usuariosPost = async (req, res = response) => {
  const body = req.body;
  const usuario = new Usuario(body);

  await usuario.save()

  res.json({
    msg: 'post API - controlador',
    usuario,
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
