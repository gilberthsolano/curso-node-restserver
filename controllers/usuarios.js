const { response }= require('express');

const usuariosGet = (req= require, res = response) => {
    const {q, nombre= 'No name', apikey, page=1, limit }= req.query;

    
    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
  }


 const usuariosPut= (req, res= response) => {
    const {id} = req.params;
    res.json({
        msg: 'put API - controlador',
        id
    });
  }

  const usuariosPost = (req, res= response) => {

    const {nombre, edad} = req.body;

    res.json({
        msg: 'post API - controlador ',
        nombre, 
        edad
    });
  }

 const usuariosDelete = (req, res= response) => {
    res.json({
        msg: 'detele API - controlador ',
    });
  }

  const usuariosPath = (req, res= response) => {
    res.json({
        msg: 'patch API - controlador ',
    });
  }


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPath,
}

  