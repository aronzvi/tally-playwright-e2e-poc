# Tally extension playwright e2e POC

playwright e2e proof of concept demonstrating interaction with the Tally Ho extension and github Actions integration

## playwright extension interaction 
- playwright runs chrome in non-headless mode and loads the extension via command-line argument
- Interaction is done by opening the extension's id/popup.html in its own page.  

## Tests
All tests use the tally Ho extension located at dist/chrome. This is the output directory when building the extension
The playwright test files are all located under the e2e-tests directory

1. Connect and disconnect from a dApp.  
Imports a recovery phrase and connects and disconnects from a dapp.   
**file:** dapp-connect.spec.ts 

2. Create wallet.  
Creates a wallet and verifies the seed.  
**file:** create-wallet.spec.ts

3. Remove wallet.    
Removes a wallet (after creating it).   
**file:** remove-wallet.spec.ts

## Trace files of failing tests
The trace of our failing tests is available in the test-results folder.  
The trace includes screenshots and can be opened like so:   
`$ npx playwright show-trace test-results/fail-Fail-chromium/trace.zip`

## Setup
    $ nvm use
    $ nvm install
    $ npm install -g yarn # if you don't have yarn globally installed
    $ yarn install
    $ npx playwright install chromium

## Running the tests
The following command runs all the tests together

`$ npx playwright test`
    
Run a single test

`$ npx playwright test test-file-name`

e.g

`$ npx playwright test create-wallet.spec.ts`
    
## github Actions integration

A new job to run the e2e tests, called 'e2e-tests', has been added to the main.yml workflow file. This job waits for the 'build' job to complete, downloads the built extension artifact, and places it in the correct location for use with the tests

### Reports and traces
All playwright standard output of the tests is available with the workflow run. 
All traces of failing tests are available in the debug-output artifact and can be viewed with the playwright show-trace command as mentioned above

## Known issues
1. The wallet page loader will run and the wallet page will never fully load. This has to do with having 0 balance in the tests. This is expected behaviour and we ignore this.  
2. It appears that there are occasional timeouts with the dapp-connect test possibly related to the website being used. When running with github actions the failing tests will be retried as per default CI settings and eventually pass. Due to this, the test may be reported as flaky


