import bathroom from '../../models/bathroom'
export const getBathRoom = async (req, res) => {
  try {
    const data = await bathroom.find()
    res.status(200).json({
      messege: 'true',
      databaths: data,
    })
  } catch (error) {
    res.status(400).json({
      messege: 'false',
    })
  }
}
export const getListBathById = async (req, res) => {
  try {
    const data = await bathroom.findOne({ _id: req.body.id }).exec()
    res.status(200).json({
      message: 'true',
      dataBaths: data,
    })
  } catch (error) {
    res.status(400).json({
      // error
      message: 'false',
    })
  }
}
