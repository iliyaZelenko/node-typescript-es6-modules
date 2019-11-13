import * as express from 'express'
import message, { port } from './customModule'

const app = express()

app.get('/', async (req, res) => {
  res.json(message)
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
})
