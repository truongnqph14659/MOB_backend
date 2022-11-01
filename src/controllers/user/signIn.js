import user from '../../models/user'
const bcyrpt = require('bcrypt')
export const loginUser = async (req, res) => {
  try {
    const checkEmail = await user.findOne({ email: req.body.email })
    if (!checkEmail) return res.status(404).json('tài khoản chưa đăng ký!')
    const checkPass = bcyrpt.compareSync(req.body.password, checkEmail.password)
    if (!checkPass) return res.status(400).json('sai mật khẩu!')
    res.status(200).json({
      messege: 'true',
      name: checkEmail.name,
      email: checkEmail.email,
      image: checkEmail.image,
      phone: checkEmail.phone,
      address: checkEmail.address,
    })
  } catch (error) {
    res.status(401).json({
      messege: 'false',
    })
  }
}
export const loginHost = async (req, res) => {
  try {
    const checkEmail = await user.findOne({ email: req.body.email })
    if (!checkEmail) return res.status(404).json('tài khoản chưa đăng ký!')
    const checkPass = bcyrpt.compareSync(req.body.password, checkEmail.password)
    if (!checkPass) return res.status(400).json('sai mật khẩu!')
    if (checkEmail.role != 1)
      return res.status(404).json('bạn ko có quyền đăng nhập hệ thống!')
    res.status(200).json({
      id: checkEmail._id,
      messege: 'true',
      name: checkEmail.name,
      image: checkEmail.image,
      role: 'host',
      status:checkEmail.status
    })
  } catch (error) {
    res.status(401).json({
      messege: 'false',
    })
  }
}
export const loginAdmin = async (req, res) => {
  try {
    const checkEmail = await user.findOne({ email: req.body.email })
    if (!checkEmail) return res.status(404).json('tài khoản admin sai!')
    const checkPass = bcyrpt.compareSync(req.body.password, checkEmail.password)
    if (!checkPass) return res.status(400).json('sai mật khẩu!')
    res.status(200).json({
      messege: 'true',
      name: checkEmail.name,
      image: checkEmail.image,
      role: 'admin',
    })
  } catch (error) {
    res.status(401).json({
      messege: 'false',
    })
  }
}

export const statusUser=async(req,res)=>{
  try {
    const data = await user.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
    res.json(data)
} catch (error) {
    res.status(400).json({
        error
    })
}
}