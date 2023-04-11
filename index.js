const ptr = require('puppeteer');
require("dotenv").config()


async function login() {
    try {
        // 
        let browser = await ptr.launch({
            headless: false,
            defaultViewport: false,
            args: ["--start-maximized"]
        })
        const page = await browser.newPage();


        await page.goto("https://twitter.com/login");


     // for username
        await page.waitForSelector("input[type='text']", { visible: true });
        await page.type("input[type='text']", process.env.id);

        await new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            }, 1000);
        })

        await page.click("div[class='css-18t94o4 css-1dbjc4n r-sdzlij r-1phboty r-rs99b7 r-ywje51 r-usiww2 r-2yi16 r-1qi8awa r-1ny4l3l r-ymttw5 r-o7ynqc r-6416eg r-lrvibr r-13qz1uu']")


      // for password
        await page.waitForSelector("input[type='password']", { visible: true });
        await page.type("input[type='password']", process.env.ps);

        await new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            }, 1000);
        })

        await page.click("div[data-testid='LoginForm_Login_Button']");

    
        await new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            }, 100000);
        })


        await browser.close();
    }
    catch (err) {
        console.log(err.message)
    }
}
login()
