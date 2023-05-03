import EmberObject from '@ember/object';
import { readOnly } from '@ember/object/computed';

// eslint-disable-next-line ember/no-classic-classes
const Wrapper = EmberObject.extend({
  isDeleted: readOnly('model.isDeleted'),
  name: readOnly('model.name'),
  id: readOnly('model.id'),
});

export default Wrapper;
