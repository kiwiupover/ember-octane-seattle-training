import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | format-timestamp', function(hooks) {
  setupRenderingTest(hooks);

  test('unknown', async function (assert) {

    await render(hbs `{{format-timestamp}}`);

    assert.equal(this.element.textContent.trim(), '(unknown)');
  });

  test('05-18-2003', async function(assert) {
    this.set('date', '05-18-2003');

    await render(hbs`{{format-timestamp date}}`);

    assert.equal(this.element.textContent.trim(), 'May 18, 2003 00:00.00 AM');
  });
});
