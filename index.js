const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
import * as echarts from 'echarts';
import * as jsdom from 'jsdom'

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/chart', (req, res) => {

    context.res = {
      // status: 200, /* Defaults to 200 */
      status: 200,
      body: 'hi'


    };

  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))