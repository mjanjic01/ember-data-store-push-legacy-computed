import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

import Wrapper from 'ember-data-store-push-legacy-computed/utils/legacy-computed-wrapper';

module('Unit | Utils | legacy-computed-wrapper', function (hooks) {
  setupTest(hooks);

  test('it works with models from store.createRecord', function (assert) {
    let store = this.owner.lookup('service:store');

    let model = store.createRecord('item', { name: 'foo' });
    let wrapper = Wrapper.create({ model });

    assert.ok(model);
    assert.ok(wrapper);

    assert.strictEqual(model.name, 'foo');
    assert.strictEqual(wrapper.name, 'foo');

    assert.false(model.isDeleted);
    assert.false(wrapper.isDeleted);

    model.deleteRecord();

    assert.true(model.isDeleted);
    assert.true(wrapper.isDeleted);
  });

  test('it works with models from store.push', function (assert) {
    let store = this.owner.lookup('service:store');

    let model = store.push({
      data: {
        type: 'item',
        attributes: {
          name: 'foo',
        },
        id: 1,
      },
    });
    let wrapper = Wrapper.create({ model });

    assert.ok(model);
    assert.ok(wrapper);

    assert.strictEqual(model.name, 'foo');
    assert.strictEqual(wrapper.name, 'foo');

    assert.false(model.isDeleted);
    assert.false(wrapper.isDeleted);

    model.deleteRecord();

    assert.true(model.isDeleted);
    assert.true(wrapper.isDeleted); // undefined here
  });
});
