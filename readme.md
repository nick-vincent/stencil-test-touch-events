# Testing touch events in Stencil

This is a barebones Stencil project to demonstrate Puppeteer's
`touchMove()` not working in Stencil's e2e tests.

## Run the test

```
yarn
yarn test
```

## Test output

```
[50:05.8]  jest args: --spec --e2e --max-workers=8
 FAIL  src/touch-events.e2e.ts
  touch events
    ✓ fires touch start (602 ms)
    ✕ fires touch move (427 ms)
    ✓ fires touch end (381 ms)

  ● touch events › fires touch move

    expected event "touchmove" to have been called 1 times, but was called 0 time

      30 |   // touchmove does not get fired
      31 |   it('fires touch move', () => {
    > 32 |     expect(touchMoveSpy).toHaveReceivedEventTimes(1);
         |                          ^
      33 |   });
      34 |
      35 |   it('fires touch end', () => {

      at Object.<anonymous> (src/touch-events.e2e.ts:32:26)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 2 passed, 3 total
Snapshots:   0 total
Time:        2.238 s, estimated 3 s
Ran all test suites.
```
