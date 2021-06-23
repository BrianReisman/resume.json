const resume = require('./resume.json');

module.exports = (req, res) => {
  res.status(200).json(resume)
}
