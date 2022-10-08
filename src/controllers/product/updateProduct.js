import product from "../../models/product";

export const updateProduct = async (req,res)=>{
    try {
        const data = await product.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        res.json(data)
    } catch (error) {
        res.status(400).json({
            error
        })
    }
}