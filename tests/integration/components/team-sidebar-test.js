import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import MockAuthService from 'shlack/tests/stubs/mock-auth-service';

module('Integration | Component | team-sidebar', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.owner.register('service:auth', MockAuthService);
  });

  test('it renders', async function(assert) {
    const userId = 'lol';
    this.owner.lookup('service:auth').currentUserId = userId;

    this.set('model', {
      name: 'Outdoorsy',
      channels: [
        {
          name: 'general'
        }
      ]
    });

    await render(hbs`<TeamSidebar @team={{this.model}} />`);

    assert.deepEqual(
      this.element.textContent.trim().replace(/\s*\n+\s*/g, '\n').split('\n'),
      ["Outdoorsy",
      `Dave Laird --${userId}--`,
      "Channels",
      "#",
      "general",
      "Logout"]
    );
  });
});
