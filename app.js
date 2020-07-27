const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateSentence = require('./generate_sentence')
const port = 3000
const handlebars = require('handlebars')

// Pin what you selected
handlebars.registerHelper('if_same', (job, option, options) => {
  if (job === option) {
    return options.fn(this)
  }
  return options.inverse(this)
})

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
// Add static file
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const option = req.body.job
  const sentence = generateSentence(option)
  res.render('index', { sentence, option })
})


app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})