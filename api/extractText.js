const Tesseract = require("tesseract.js");

module.exports = async (req, res) => {
  try {
    const imageBuffer = req.files.image.data;
    const {
      data: { text },
    } = await Tesseract.recognize(imageBuffer, "deu");
    res.status(200).send({ text });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};
