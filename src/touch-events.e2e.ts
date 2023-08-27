import { newE2EPage, E2EPage, EventSpy } from '@stencil/core/testing';

describe('touch events', () => {
  let page: E2EPage;
  let touchStartSpy: EventSpy;
  let touchMoveSpy: EventSpy;
  let touchEndSpy: EventSpy;

  beforeEach(async () => {
    page = await newE2EPage();

    await page.setContent(`
      <html><body>Test</body></html>
    `);

    touchStartSpy = await page.spyOnEvent('touchstart');
    touchMoveSpy = await page.spyOnEvent('touchmove');
    touchEndSpy = await page.spyOnEvent('touchend');

    await page.touchscreen.touchStart(1, 1);
    await page.touchscreen.touchMove(2, 2); // does not work
    await page.touchscreen.touchEnd();
    await page.waitForChanges();
  });

  it('fires touch start', () => {
    expect(touchStartSpy).toHaveReceivedEventTimes(1);
  });

  // touchmove does not get fired
  it('fires touch move', () => {
    expect(touchMoveSpy).toHaveReceivedEventTimes(1);
  });

  it('fires touch end', () => {
    expect(touchEndSpy).toHaveReceivedEventTimes(1);
  });
});
