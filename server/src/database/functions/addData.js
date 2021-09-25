const addHeadline = async (headline, subreddit,karma, keywords, tags) => {
    //  We wanna use the model we made in models
    const Headline = require('../../models/headline')

    //  Creates a row using the schema
    const newHeadline = await Headline.create({
        subreddit: subreddit,
        headline: headline,
        karma: karma,
        keywords: keywords,
        tags: tags
    })
    .catch(err => {
        console.log(err)
    })

    console.log(newHeadline)
    return newHeadline
}

module.exports = {
    addHeadline
}