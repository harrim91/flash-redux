import uuid from 'uuid';

const DEFAULT_TYPE = 'message';

function Flash(message, type = DEFAULT_TYPE) {
  this.key = uuid();
  this.message = message;
  this.type = type;
}

export default Flash;
