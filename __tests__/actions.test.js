import {
  CLEAR_FLASH,
  CYCLE_FLASH,
  FLASH_NEXT,
  FLASH_NOW,
  clearFlash,
  cycleFlash,
  flashNow,
  flashNext,
} from '../src/actions';

test('flashNext returns FLASH_NEXT action with the given message and messageType', () => {
  expect(flashNext('foo', 'bar')).toEqual({
    type: FLASH_NEXT,
    message: 'foo',
    messageType: 'bar',
  });
});

test('flashNow returns FLASH_NOW action with the given message and messageType', () => {
  expect(flashNow('foo', 'bar')).toEqual({
    type: FLASH_NOW,
    message: 'foo',
    messageType: 'bar',
  });
});

test('clearFlash returns CLEAR_FLASH action with the given key', () => {
  expect(clearFlash('foo')).toEqual({
    type: CLEAR_FLASH,
    key: 'foo',
  });
});

test('cycleFlash returns a CYCLE_FLASH action', () => {
  expect(cycleFlash()).toEqual({
    type: CYCLE_FLASH,
  });
});
