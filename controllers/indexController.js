const db = require("../db/queries");

module.exports = {
  get: async (req, res) => {
    //Fetch from database
    const messages = await db.fetchMessages();
    res.render("index", {
      title: "Mini Messageboard",
      messages: messages,
    });
  },
  getNew: (req, res) => {
    res.render("form");
  },
  postNew: async (req, res) => {
    const message = {
      text: req.body.text,
      username: req.body.author,
      added: new Date(),
    };
    await db.storeMessage(message);
    res.redirect("/");
  },
};
