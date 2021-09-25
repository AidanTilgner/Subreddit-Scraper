const express = require('express')
const router = express.Router()

//  Bringing in the controller for organization
const { getHeadlines } = require('../controllers/subreddit')

router.use('/:subreddit', async (req, res) => {
    const headlines = await getHeadlines(req.params.subreddit)
})

module.exports = router;