module.exports = (req, res) => {
  const resume = {name: "Brian Reisman"};
  res.status(200).send(resume)
}
