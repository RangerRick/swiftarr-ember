import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | swiftarr-auth', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:swiftarr-auth');
    assert.ok(service);
  });
});
