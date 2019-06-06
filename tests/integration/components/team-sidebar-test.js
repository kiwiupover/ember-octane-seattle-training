import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | team-sidebar', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<TeamSidebar />`);

    assert.deepEqual(
      this.element.textContent.trim().replace(/\s*\n+\s*/g, '\n').split('\n'),
      ["Outdoorsy",
      "Dave Laird --2--",
      "Channels",
      "#",
      "general",
      "Logout"]
    );
  });
});
