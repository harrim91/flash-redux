import { cycleFlash } from '../actions';

const defaultConfig = {
  trigger: '',
};

const middleware = (config = defaultConfig) => ({ dispatch }) => (
  next => (action) => {
    switch (action.type) {
      case config.trigger: {
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
