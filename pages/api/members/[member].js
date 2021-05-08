export default function handler(req, res) {
  const { member } = req.query
  res.end(`User ID: ${member}`)
}