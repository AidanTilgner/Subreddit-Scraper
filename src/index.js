const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 5000
const subreddit = require('./routes/subreddit')
const { urlencoded } = require('express')

//  DB Connection
require('./database/connection')

//  To allow connections to the server
app.use(cors())

//  We need to dish out a frontend to the API for a user to interact with
app.use(express.static('public'))

//  To allow use of JSON and URLENCODED with middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//  So that when a user looks for data on a given subreddit an action can be controlled
//  by the subreddit.js file
app.use("/subreddit/:endpoint", subreddit)

//  then to actually make the server listen
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))




