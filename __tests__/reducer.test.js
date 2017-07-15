import uuid from 'uuid';
import reducer from '../src/reducers';
import Flash from '../src/factories';
import {
  CLEAR_FLASH,
  CYCLE_FLASH,
  FLASH_NEXT,
  FLASH_NOW,
} from '../src/actions';

jest.mock('uuid');
uuid.mockImplementation(() => 'uuid');

const initialState = {
  now: [],
  next: [],
};

test('it returns the intital state by default', () => {
  expect(reducer()).toEqual(initialState);
});

test('FLASH_NEXT adds a flash message of the correct type to next array', () => {
  const foo = new Flash('foo', 'error');
  const bar = new Flash('bar', 'error');
  const baz = new Flash('baz', 'success');

  const stateBeforeAction = {
    ...initialState,
    now: [foo],
    next: [bar],
  };

  const expectedState = {
    ...initialState,
    now: [foo],
    next: [bar, baz],
  };

  expect(reducer(stateBeforeAction, {
    type: FLASH_NEXT,
    message: 'baz',
    messageType: 'success',
  })).toEqual(expectedState);
});

test('FLASH_NOW adds a flash message of the correct type to now array', () => {
  const foo = new Flash('foo', 'error');
  const bar = new Flash('bar', 'error');
  const baz = new Flash('baz', 'success');

  const stateBeforeAction = {
    ...initialState,
    now: [foo],
    next: [bar],
  };

  const expectedState = {
    ...initialState,
    now: [foo, baz],
    next: [bar],
  };

  expect(reducer(stateBeforeAction, {
    type: FLASH_NOW,
    message: 'baz',
    messageType: 'success',
  })).toEqual(expectedState);
});

test('CLEAR_FLASH removes the flash with the given key from the now array', () => {
  uuid.mockImplementationOnce(() => 'fooId');

  const foo = new Flash('foo', 'error');
  const bar = new Flash('bar', 'error');
  const baz = new Flash('baz', 'success');

  const stateBeforeAction = {
    ...initialState,
    now: [foo, bar],
    next: [baz],
  };

  const expectedState = {
    ...stateBeforeAction,
    now: [bar],
  };

  expect(reducer(stateBeforeAction, {
    type: CLEAR_FLASH,
    key: 'fooId',
  })).toEqual(expectedState);
});

test('CYCLE_FLASH moves the next array to now, and resets the next array', () => {
  const foo = new Flash('foo', 'error');
  const bar = new Flash('bar', 'error');
  const baz = new Flash('baz', 'success');

  const stateBeforeAction = {
    ...initialState,
    now: [foo],
    next: [bar, baz],
  };

  const expectedState = {
    ...initialState,
    now: [bar, baz],
    next: [],
  };

  expect(reducer(stateBeforeAction, {
    type: CYCLE_FLASH,
  })).toEqual(expectedState);
});
