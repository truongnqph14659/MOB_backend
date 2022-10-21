import Message from "../../models/message";
import user from '../../models/user'

export const addMessage = async (req,res) => {
  try {
    const { from, to, message } = req.body;
    const time=new Date(Date.now()).getHours() +":"+new Date(Date.now()).getMinutes()
    console.log(from,to,message);
    const data = await Message.create({
      message: { text: message },
      user: [from, to],
      send: from,
      time_send:time
    });
    if (data) return res.json({ msg: "Message added successfully.",data});
    else return res.json({ msg: "Failed to add message to the database" });
  } catch (error) {
    res.status(400).json({
        error
    })
  }
};

export const findMessage = async (req,res)=>{
  try {
      const data = await Message.find()
      res.json({
          data
      })
  } catch (error) {
      res.status(400).json({
          error
      })
  }
}


export const findUser = async (req,res)=>{
  try {
      const data = await user.find()
      res.json({
          data
      })
  } catch (error) {
      res.status(400).json({
          error
      })
  }
}