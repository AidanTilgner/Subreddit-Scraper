const { scrapeHeadlines } = require('../puppeteer/index')
const { head } = require('../routes/subreddit')

const getHeadlines = async (subreddit) => {
    let headlines = scrapeHeadlines(subreddit)
    console.log(headlines)
    return headlines
}   

module.exports = {
    getHeadlines
}