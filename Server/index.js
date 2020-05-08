const express = require('express')
const PORT = process.env.PORT || 5000


express()
  .use(express.static(path.join(__dirname, 'public')))


  .get('/api', (req, res) =>{
    res.json('Working');
   })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
