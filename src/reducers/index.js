import Flash from '../factories';
import {
  CLEAR_FLASH,
  CYCLE_FLASH,
  FLASH_NEXT,
  FLASH_NOW,
} from '../actions';

const initialState = {
  now: [],
  next: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FLASH_NEXT: {
      const { message, messageType } = action;
      return {
        ...state,
        next: [...state.next, new Flash(message, messageType)],
      };
    }

    case FLASH_NOW: {
      const { message, messageType } = action;
      return {
        ...state,
        now: [...state.now, new Flash(message, messageType)],
      };
    }

    case CLEAR_FLASH: {
      const { key } = action;
      return {
        ...state,
        now: state.now.filter(d => d.key !== key),
      };
    }

    case CYCLE_FLASH: {
      return {
        ...state,
        now: state.next,
        next: initialState.next,
      };
    }

    default:
      return state;
  }
};

export default reducer;
