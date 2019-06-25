# Login specification

This is an executable specification file. This file follows markdown syntax. Every heading in this file denotes a scenario. Every bulleted point denotes a step.
To execute this specification, use
	npm test

## Unsuccessfully login
    
* Goto URL "https://app.wirelessanalytics.com/login"
* Input email "me@user.com"
* Page contains "Company Not Found"