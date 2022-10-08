import product from "../../models/product"

export const getProduct = async (req,res)=>{
    const filter = { _id: req.params.id };
    try {
        const data = await product.find(filter).populate('user').populate({path: 'category',model:'Category',select:'name'})
        res.json(data)
    } catch (error) {
        res.status(400).json({
            // error
            message:error
        })
    }
}

export const getAll = async (req,res)=>{
    try {
        const data = await product.find()
        res.json(data)
    } catch (error) {
        res.status(400).json({
            // error
            message:error
        })
    }
}