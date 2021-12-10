import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | announcements', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:announcements');
    assert.ok(route);
  });
});
