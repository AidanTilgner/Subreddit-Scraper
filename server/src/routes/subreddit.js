const express = require('express')
const router = express.Router()

//  Bringing in the controller for organization
const { getHeadlines } = require('../controllers/subreddit')

router.use('/:subreddit', async (req, res) => {
    console.log('Incoming request for headlines');
    //  Implement error catching here
    let subreddit = req.params.subreddit
    const headlines = await getHeadlines(req.params.subreddit)
    console.log(headlines);
    res.json(headlines)
})

module.exports = router;