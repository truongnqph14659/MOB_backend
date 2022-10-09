import Message from "../../models/message";

export const addMessage = async (req,res) => {
  try {
    const { from, to, message } = req.body;
    console.log(from,to,message);
    const data = await Message.create({
      message: { text: message },
      user: [from, to],
      send: from,
    });

    if (data) return res.json({ msg: "Message added successfully.",data});
    else return res.json({ msg: "Failed to add message to the database" });
  } catch (error) {
    res.status(400).json({
        error
    })
  }
};
