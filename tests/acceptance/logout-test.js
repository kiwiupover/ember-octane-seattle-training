import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | logout', function(hooks) {
  setupApplicationTest(hooks);

  test('visit team and click logout end up on login page', async function(assert) {
    await visit('/teams');

    assert.equal(currentURL(), '/teams');
    
    await click('[data-test-logout-button]');
    
    assert.equal(currentURL(), '/login');
  });
});
