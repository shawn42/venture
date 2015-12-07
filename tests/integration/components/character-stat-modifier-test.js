import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('character-stat-modifier', 'Integration | Component | character stat modifier', {
  integration: true
});

test('increases stat on plus click', function(assert) {
  this.set('someStat', 41);
  this.set('bucketOPoints', 1);
  this.render(hbs`{{character-stat-modifier stat=someStat pointsLeft=bucketOPoints}}`);

  var $plusButton = this.$('.app-increase-btn');
  assert.ok($plusButton);
  $plusButton.click();
  assert.equal(this.$('.app-current-value').text().trim(), '42');
  assert.equal(this.get('bucketOPoints'), 0);
});

test('decrease stat on minus click');
test('will not decrease below zero');

test('will not increase if no points left', function(assert) {
  this.set('someStat', 42);
  this.set('bucketOPoints', 0);
  this.render(hbs`{{character-stat-modifier stat=someStat pointsLeft=bucketOPoints}}`);

  var $plusButton = this.$('.app-increase-btn');
  assert.ok($plusButton);
  $plusButton.click();
  assert.equal(this.$('.app-current-value').text().trim(), '42');
  assert.equal(this.get('bucketOPoints'), 0);
});

test('renders current stat value', function(assert) {
  
  this.set('someStat', 42);
  this.render(hbs`{{character-stat-modifier stat=someStat}}`);

  assert.equal(this.$('.app-current-value').text().trim(), '42');
});
