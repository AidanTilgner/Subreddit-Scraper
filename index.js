const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const subreddit = require('./routes/subreddit')

app.use("/subreddit/:endpoint", subreddit)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))