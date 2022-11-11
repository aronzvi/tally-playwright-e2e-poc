# Tally extension playwright e2e POC

playwright e2e proof of concept demonstrating interaction with the Tally Ho extension and github Actions integration

## playwright extension interaction 
- playwright runs chrome in non-headless mode and loads the extension via command-line argument
- Interaction is done by opening the extension's id/popup.html in its own page.  

## Tests
All tests use the tally Ho extension located at dist/chrome

1. Connect and disconnect from a dApp.  
Imports a recovery phrase and connects and disconnects from a dapp.   
The test file is available at tests/dapp-connect.spec.ts 

2. Create wallet.  
Creates a wallet and verifies the seed.  
The test file is available at tests/create-wallet.spec.ts


3. Remove wallet.    
Removes a wallet (after creating it).   
The test file is available at tests/remove-wallet.spec.ts

4. Fail.    
A test that explicitly throws an exception in order for a trace to be generated.  
The test file is available at tests/fail.spec.ts

## Trace files of failing tests
The trace of our failing tests is available in the test-results folder.  
The trace includes screenshots and can be opened like so:   
`$ npx playwright show-trace test-results/fail-Fail-chromium/trace.zip`

## Setup

`$ npm install`

## Running the tests
The following command runs all the tests together

`$ npx playwright test`
    
Run a single test

`$ npx playwright test test-file-name`

e.g

`$ npx playwright test create-wallet.spec.ts`
    
## github Actions integration
A proof of concept workflow file has been created at .github/workflows/main.yml.   
The workflow contains two jobs - build and e2e-tests. 

### Build job
This job's purpose is just to simulate the build job in tally ho's workflow file and allow for easy integration.  
The job uploads the already built extension artifact using the same file name as tally ho's workflow build job -- 
extension-builds.

### e2e-tests job
This job waits for the build job to complete, downloads the built extension artifact and places it in the proper location for it to be used with the tests

### Reports and traces
All playwright standard output of the tests is available with the workflow run. 
All traces of failing tests are available in the debug-output artifact and can be viewed with the playwright show-trace command as mentioned above

## Known issues
1. The wallet page loader will run and the wallet page will never fully load. This has to do with having 0 balance in the tests. This is expected behaviour and we ignore this.  
2. It appears that there are occasional timeouts with the dapp-connect test possibly related to the website being used. When running with github actions the failing tests will be retried as per default CI settings and eventually pass. Due to this, the test may be reported as flaky


