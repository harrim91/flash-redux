import uuid from 'uuid';
import Flash from '../src/factories';

jest.mock('uuid');
uuid.mockImplementation(() => 'uuid');

test('it creates a flash message with a unique id, and the passed type and message', () => {
  expect(new Flash('foo', 'error')).toEqual({
    key: uuid(),
    type: 'error',
    message: 'foo',
  });
});

test('it creates a flash message with a unique id, and the passed message and default type', () => {
  expect(new Flash('foo')).toEqual({
    key: uuid(),
    type: 'message',
    message: 'foo',
  });
});
