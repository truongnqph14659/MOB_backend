import user from '../../models/user'
const bcyrpt = require('bcrypt')
const nodemailer = require('nodemailer')
export const createUser = async (req, res) => {
  console.log(req.body)
  try {
    const checkEmail = await user.findOne({ email: req.body.email })
    if (checkEmail) {
      return res.status(400).json('email da ton tai!')
    }
    const passHass = bcyrpt.hashSync(req.body.password, 10)
    const salt = Math.floor(Math.random() * (9998 - 1001 + 1)) + 1001
    const dataUser = {
      name: '',
      email: req.body.email,
      password: passHass,
      address: '',
      image: '',
      idcard: '',
      codeverify: salt,
    }
    let transporter = nodemailer.createTransport({
      //   host: 'smtp.ethereal.email',
      //   port: 587,
      //   secure: false, // true for 465, false for other ports
      service: 'gmail',
      auth: {
        user: 'truongrubi717@gmail.com', // generated ethereal user
        pass: 'lrplutveazenhkew', // generated ethereal password
      },
    })
    transporter.sendMail(
      {
        from: 'truongrubi717@gmail.com', // sender address
        to: req.body.email, // list of receivers
        subject: 'Verify account !', // Subject line
        text: 'xác nhận tài khoản đăng ký', // plain text body
        html: `<p>your code here: <span style="color:red">${salt}</span></p>`, // html body
      },
      async function (error) {
        if (error) {
          res.status(400).json({
            messege: 'đăng ký tài khoản không thành công vui lòng thử lại!',
            // email:
          })
          console.log('sending fail')
        } else {
          const resault = await new user(dataUser).save()
          if (resault)
            res.status(200).json({
              messege: 'xác nhận email của bạn!',
              email: dataUser.email,
            })
        }
      }
    )
  } catch (error) {
    res.status(400).json('dang ky khong thanh cong')
  }
}
