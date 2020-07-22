import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | home-page/skills', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<HomePage::Skills />`);
    assert.ok(this.element.textContent)
    // assert.equal(this.element.textContent.trim(), '');
    //
    // // Template block usage:
    // await render(hbs`
    //   <HomePage::Skills>
    //     template block text
    //   </HomePage::Skills>
    // `);
    //
    // assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
