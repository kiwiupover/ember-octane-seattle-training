import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import MockAuthService from '../stubs/mock-auth-service';

module('Acceptance | logout', function(hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function () {
    this.owner.register('service:auth', MockAuthService);
  })

  test('visit team and click logout end up on login page', async function(assert) {
    this.owner.lookup('service:auth').currentUserId = '2';

    await visit('/teams/outdoorsy');

    assert.equal(currentURL(), '/teams/outdoorsy');

    await click('[data-test-logout-button]');

    assert.equal(currentURL(), '/login');
  });
});
