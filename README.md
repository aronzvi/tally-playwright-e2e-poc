# Tally extension playwright e2e POC

playwright e2e test demonstrating UI interaction with the Tally extension.

## Test details
- The test imports a recovery phrase and connects and disconnects from a dapp. 
- Interaction is done by opening popup.html of the extension in its own page
 
## Setup

    $ npm install 

## Running the test

    $ npx playwright test poc.spec.ts

## Files
In the tests directory:

**poc.spec.ts** - Our test file
**chrome-extension** - The tally chrome extension files


## Notes 
- With playwright, extensions only work in Chrome / Chromium in non-headless mode. 
Integration with a CI server should be possible using Xvfb. 
See [here](https://playwright.dev/docs/ci#running-headed) for a bit more on this 
