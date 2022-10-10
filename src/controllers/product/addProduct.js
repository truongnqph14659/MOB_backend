import product from '../../models/product'
export const addProduct = async (req, res) => {
  try {
    const dataSave = {
      name: req.body.name,
      images: req.body.images,
      price: req.body.price,
      star: parseFloat(req.body.star),
      supplement: req.body.supplement,
      nameLocation: req.body.nameLocation,
      location: {
        type: 'Point',
        coordinates: [
          parseFloat(req.body.longitude),
          parseFloat(req.body.latitude),
        ],
      },
      category: req.body.category,
      user: req.body.user,
      sleepingPlaces: req.body.sleepingPlaces,
    }
    const data = await product(dataSave).save()
    res.status(200).json({
      messege: 'true',
    })
  } catch (error) {
    res.status(400).json({
      messege: 'false',
      error,
    })
  }
}
