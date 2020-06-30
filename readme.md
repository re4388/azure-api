# Azure Static Server + API


## What are the tech stack

- config for Azure static host
- config for Azure Comos db
- setup backend API via Azure Function
- setup up frontend with bs4 and jquery
- Basic tutorial could refer to:
- need to setup `connection string` to locate Azure relvant db service


## demo site
https://green-tree-0ecc0a31e.azurestaticapps.ne


## unresolved
- vscode will hold everything when deactivate the F5 debug mode

## reference
- https://docs.microsoft.com/zh-tw/azure/static-web-apps/application-settings
- https://developer.mozilla.org/zh-TW/docs/Web/API/Fetch_API/Using_Fetch
- https://getbootstrap.com/docs/4.5/utilities/flex/#auto-margins
- https://portal.azure.com/#@muenbioai.onmicrosoft.com/resource/subscriptions/5b23cde1-70b9-4aa5-8021-b421baac3a8e/resourceGroups/g-0615/providers/Microsoft.DocumentDb/databaseAccounts/comos-20200615/dataExplorer


## todo
- consider use generated JSON to handle env variable issue -> https://stackoverflow.com/questions/36962601/node-js-how-to-use-environment-variables-in-json-file


## What we do in this demo?
1. A simple GET
2. A simple POST
3. POST to retrive a datum via `/id` from Azure comos db
4. POS to add new datum to Azure comos db


## How to run?

1. use vscode debug mode (need to install Azure core tool to use Azure serverless debug) to kick off the backend
2. use vscode live server to kick off the frontend
3. just click the buttons and see the result on console.log
