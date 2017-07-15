import uuid from 'uuid';

function Flash(message, type) {
  this.key = uuid();
  this.message = message;
  this.type = type;
}

export default Flash;
