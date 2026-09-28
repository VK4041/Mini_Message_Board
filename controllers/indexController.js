module.exports = {
  get: (req, res) => {
    res.render("index", { message: "Hello World" });
  },
};
