import { cycleFlash } from '../actions';

const defaultConfig = {
  trigger: '',
};

const middleware = (config = defaultConfig) => ({ dispatch }) => (
  next => (action) => {
    if (config.trigger && action.type === config.trigger) dispatch(cycleFlash());
    return next(action);
  }
);

export default middleware;
