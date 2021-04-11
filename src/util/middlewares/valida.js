const { response } = require("express");
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken');


const validarCampos = (req, resp = response, newxt) => {

    const errores = validationResult(req);

    if (!errores.isEmpty()) {
        return resp.status(400).json({
            ok: false,
            errores: errores.array()
        })
    }

    newxt();

}


const validarJWT = (req, res, next) => {

    //leer token
    const token = req.header(process.env.NAME_HEADER_TOKEN);

    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No existe un token en la petición'
        })
    }

    try {

        const { uid } = jwt.verify(token, process.env.JWT_SECRET);
        req.uid = uid;
        next();

    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token incorrecto'
        })
    }
}



module.exports = {
    validarCampos, 
    validarJWT
}