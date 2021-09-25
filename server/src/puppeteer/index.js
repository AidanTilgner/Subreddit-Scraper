const puppeteer = require('puppeteer')

const scrapeHeadlines = async (subreddit) => {
    //  Launch puppeteer instance
    const browser = await puppeteer.launch();

    //  Open a new page
    const page = await browser.newPage();

    //  Go to the given url
    let url = `https://www.reddit.com/r/${subreddit}`
    await page.goto(url, { waitUntil: 'networkidle2' });
    
    //  Basically run this code inside the console of the page
    let data = await page.evaluate(() => {
        let headlinesArr = Array.from(document.querySelectorAll('._eYtD2XCVieq6emjKBH3m'))

        headlinesArr = headlinesArr.map(el => {
            console.log(el.innerText)
            return el.innerText
        })

        return headlinesArr
    });

    console.log(data)
    return data

    await browser.close();
};

module.exports = {
    scrapeHeadlines
}