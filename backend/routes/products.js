const express = require("express");
const route = express.Router();
const Product = require("../models/product.model");

route.get("/", async (req, res) => {
    try {
        const product = await Product.find({})
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

route.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const newProduct = await Product.findById(id);
        res.status(200).json(newProduct)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

route.post("/", async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

});


route.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        res.status(200).json(product)
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

})

route.delete("/:id", async (req, res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id)
        if(!product){
            return res.status(404).json({message: "not found"})
        }
        res.status(200).json({message: "deleted successfully"});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
    

});

module.exports = route;