import ProductModel from "../models/ProductModel.js"
 
// Get all products
const getAllProducts = async (req, res, _next) => {
    try {
        await ProductModel
            .findAll()
            .then((products) => {
                if (!products) {
                    return res.status(404).json({
                        message: "Products can't be fetched"
                    })
                }

                return res.status(200).json({
                    products: products
                })
            })
    } catch (error) {
        console.log(`Error on getting all products : ${error}`);
        return res.status(500).json({
            message: error.message
        })
    }
}

export {
    getAllProducts
}