import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

// module('Integration | Component | providers/messages', function(hooks) {
//   setupRenderingTest(hooks);

//   test('it renders', async function(assert) {
//     this.set('model', {

//     })
//     await render(hbs`
//       <Providers::Messages @channel={{this.model}} as |messagesApi|>
//         <div {{did-insert messagesApi.loadMessages}}>

//         </div>
//       </Providers::Messages>
//     `);

//     assert.equal(this.element.textContent.trim(), 'template block text');
//   });
// });
