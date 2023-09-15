import ProductModel from "../models/ProductModel.js"

// Get all products
const getAllProducts = async (_req, res, _next) => {
    try {
        await ProductModel.findAll().then((products) => {
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

// Get one product
const getProduct = async (req, res, _next) => {
    try {
        const { productId } = req.params

        if (!productId) {
            throw new Error("Product ID is required")
        }

        await ProductModel.findByPk(productId).then((product) => {
            if (!product) {
                return res.status(404).json({
                    message: "Product not found"
                })
            }

            return res.status(200).json({
                product: product
            })
        })
    } catch (error) {
        console.log(`Error on get product by productId : ${error}`);

        return res.status(500).json({
            message: error.message
        })
    }
}

export {
    getAllProducts,
    getProduct
}