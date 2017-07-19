import { cycleFlash } from '../actions';

const defaultConfig = {
  cycle: '',
};

const middleware = (config = defaultConfig) => ({ dispatch }) => (
  next => (action) => {
    switch (action.type) {
      case config.cycle: {
        dispatch(cycleFlash());
        return next(action);
      }

      default: {
        return next(action);
      }
    }
  }
);

export default middleware;
