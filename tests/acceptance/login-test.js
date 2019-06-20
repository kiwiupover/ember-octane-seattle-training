import { module, test } from 'qunit';
import { visit, currentURL, fillIn, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import MockAuthService from '../stubs/mock-auth-service';

module('Acceptance | login', function(hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:auth', MockAuthService);
  })

  test('a user and login', async function(assert) {
    await visit('/login');

    await fillIn('[data-test-login-select]', 1);

    await click('[data-test-login-button]');

    assert.ok(currentURL().startsWith('/teams'));
  });
});
