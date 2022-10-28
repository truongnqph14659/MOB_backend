import order from '../../models/order'
export const createOrder = async (req, res) => {
  try {
    const dataOrder = {
      IdHost: req.body.IdHost,
      IdUser: req.body.IdUser,
      payDay: req.body.payDay,
      price: req.body.price,
      cashMoney: req.body.cashMoney,
      banking: req.body.banking,
    }
    const saveOrder = await new order(dataOrder).save()
    const date = new Date(saveOrder.createdAt)
    const time =
      24 - date.getHours() - 12 < 0
        ? `${(24 - date.getHours() - 12) * -1}:${date.getMinutes()} PM`
        : `${24 - date.getHours() - 12}:${date.getMinutes()} AM`
    res.status(200).json({
      messege: true,
      idBill: saveOrder._id,
      idUser: saveOrder.IdUser,
      idHost: saveOrder.IdHost,
      idPro: saveOrder.idPro,
      price: saveOrder.price,
      payDay: saveOrder.payDay,
      cashMoney: saveOrder.cashMoney,
      banking: saveOrder.banking,
      status: 'Đang chờ xác nhận',
      date: `Thứ ${date.getDay() + 1}, ${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}`,
      time: time,
    })
  } catch (error) {
    res.status(401).json({
      messege: false,
    })
  }
}
