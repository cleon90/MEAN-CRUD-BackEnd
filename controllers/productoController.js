const Producto = require("../models/Producto");



exports.crearProducto = async (req, res) => {
    
    try {
        let producto;

        //Creamos nuestro producto
        producto = new Producto(req.body);
        await producto.save();
        res.send(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.getProductos = async (req,res) => {

    try {
        
        const productos = await Producto.find();
        res.json(productos);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
        
    }
}

exports.updateProducto = async (req,res) =>{

    try {
        const { name,category,location,price } = req.body;
        let producto = await Producto.findById(req.params.id);


        if (!producto){
            res.status(404).json({ msg: 'No existe el producto' })
        }
        producto.name = name;
        producto.category = category;
        producto.location = location;
        producto.price = price;

        producto = await Producto.findOneAndUpdate({ _id: req.params.id },producto, { new: true});
        res.json(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al actualizar');
    }
}

exports.getProducto = async (req,res) =>{

    try {
        const { name,category,location,price } = req.body;
        let producto = await Producto.findById(req.params.id);


        if (!producto){
            res.status(404).json({ msg: 'No existe el producto' })
        }
        res.json(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al actualizar');
    }
}

exports.deleteProducto = async (req,res) =>{

    try {
        let producto = await Producto.findById(req.params.id);

        if (!producto){
            res.status(404).json({ msg: 'No existe el producto' })
        }

        await Producto.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: 'Producto eliminado con éxito' });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al actualizar');
    }
}