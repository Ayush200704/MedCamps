const express = require('express');
const app = express();
const mongoose = require("mongoose");
// const Product = require("./models/product.model");
const Product = require("./routes/products");

app.use(express.json());
app.use("/api/products", Product)

app.get("/", (req, res) => {
    res.send("node api")
});

mongoose.connect("mongodb+srv://ayushtiwari200704:3Wt1SA1UY67AMcws@backenddb.eawesli.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDB")
.then(() => {
        console.log("connected to database")
        app.listen(5000, () => {
            console.log("listening to port 5000...")
        })
    })
.catch(() => {
    console.log("connection failed")
})

    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // app.get("/api/products", async (req, res) => {
    //     try {
    //         const product = await Product.find({})
    //         res.status(200).json(product)
    //     } catch (error) {
    //         res.status(500).json({ message: error.message });
    //     }
    // })
    
    // app.get("/api/products/:id", async (req, res) => {
    //     try {
    //         const { id } = req.params;
    //         const newProduct = await Product.findById(id);
    //         res.status(200).json(newProduct)
    //     } catch (error) {
    //         res.status(500).json({ message: error.message })
    //     }
    // })
    
    // app.post("/api/products", async (req, res) => {
    //     try {
    //         const product = await Product.create(req.body);
    //         res.status(200).json(product)
    //     } catch (error) {
    //         res.status(500).json({ message: error.message });
    //     }
    
    // });
    
    
    // app.put("/api/products/:id", async (req, res) => {
    //     try {
    //         const { id } = req.params;
    //         const product = await Product.findByIdAndUpdate(id, req.body);
    //         res.status(200).json(product)
            
    //     } catch (error) {
    //         res.status(500).json({ message: error.message });
    //     }
    
    // })
    
    // app.delete("/api/products/:id", async (req, res)=>{
    //     try {
    //         const {id} = req.params;
    //         const product = await Product.findByIdAndDelete(id)
    //         if(!product){
    //             return res.status(404).json({message: "not found"})
    //         }
    //         res.status(200).json({message: "deleted successfully"});
    //     } catch (error) {
    //         res.status(500).json({message: error.message})
    //     }
        
    
    // })

















