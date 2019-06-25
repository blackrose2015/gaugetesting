/* globals gauge*/
"use strict";
const { openBrowser,write, closeBrowser, goto, press, text, focus, inputField } = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    await openBrowser({ headless: headless })
});

afterSuite(async () => {
    await closeBrowser();
});

step("Page contains <content>", async (content) => {
    assert.ok(await text(content).exists());
});

step("Input email <email>", async function(email) {
    await focus(inputField({'id': 'email'}));
    await write(email);
    await press('Enter');	   
});

step("Goto website", async function() {
	await goto(url);	
});
