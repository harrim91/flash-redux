import { LOCATION_CHANGE } from 'react-router-redux';
import { cycleFlash } from '../src/actions';
import middleware from '../src/middleware';

const mockDispatch = jest.fn();

const fakeStore = () => ({
  dispatch: mockDispatch,
});

const dispatchWithFakeStore = (action) => {
  let dispatched = null;
  const dispatch = middleware(fakeStore())(
    actionAttempt => (dispatched = actionAttempt),
  );
  dispatch(action);
  return dispatched;
};

it('should dispatch cycleFlash on LOCATION_CHANGE', () => {
  const action = {
    type: LOCATION_CHANGE,
  };

  dispatchWithFakeStore(action);

  expect(mockDispatch).toHaveBeenCalledWith(cycleFlash());
});
