import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('user-form', 'Integration | Component | user form', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{user-form}}`);

  assert.equal(this.$('.component-type').text().trim(), 'Form');

  // Template block usage:
  // this.render(hbs`
  //   {{#user-form}}
  //     template block text
  //   {{/user-form}}
  // `);

  // assert.equal(this.$().text().trim(), 'template block text');
});
