import location from '../../models/location'
export const createLocation = async (req, res) => {
  try {
    const dataLocation = {
      name: req.body.name,
      location: {
        type: 'Point',
        coordinates: [
          parseFloat(req.body.longitude),
          parseFloat(req.body.latitude),
        ],
      },
    }
    const resault = await new location(dataLocation).save()
    if (resault)
      res.status(200).json({
        messege: 'true',
      })
  } catch (error) {
    res.status(400).json({
      messege: 'false',
    })
  }
}
