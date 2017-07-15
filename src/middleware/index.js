import { LOCATION_CHANGE } from 'react-router-redux';
import { cycleFlash } from '../actions';

const middleware = ({ dispatch }) => (
  next => (action) => {
    switch (action.type) {
      case LOCATION_CHANGE: {
        dispatch(cycleFlash());
        return next(action);
      }

      default:
        break;
    }

    return next(action);
  }
);

export default middleware;
