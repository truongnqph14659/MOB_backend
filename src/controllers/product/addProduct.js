import product from "../../models/product"
export const addProduct = async (req,res)=>{
    try {
        const data = await product(req.body).save()
        res.json(data)
    } catch (error) {
        res.status(400).json({
            error
        })
    }
}