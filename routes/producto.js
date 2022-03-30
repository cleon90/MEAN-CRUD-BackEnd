// Rutas para producto
const { Router } = require('express');
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');


//api/Productos
router.post('/', productoController.crearProducto);
router.get('/', productoController.getProductos);
router.put('/:id', productoController.updateProducto);
router.get('/:id', productoController.getProducto);
router.delete('/:id', productoController.deleteProducto);

module.exports = router;