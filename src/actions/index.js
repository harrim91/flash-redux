const addFlash = (message, messageType, type) => ({
  type,
  message,
  messageType,
});

export const FLASH_NEXT = '@@flash/ADD_FLASH_NEXT';
export const flashNext = (message, messageType) =>
  addFlash(message, messageType, FLASH_NEXT);

export const FLASH_NOW = '@@flash/ADD_FLASH_NOW';
export const flashNow = (message, messageType) =>
  addFlash(message, messageType, FLASH_NOW);

export const CLEAR_FLASH = '@@flash/CLEAR_FLASH';
export const clearFlash = key => ({
  type: CLEAR_FLASH,
  key,
});

export const CYCLE_FLASH = '@@flash/CYCLE_FLASH';
export const cycleFlash = () => ({
  type: CYCLE_FLASH,
});
