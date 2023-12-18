import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-konechnyjj-proekt-должности', 'Unit | Model | i-i-s-konechnyjj-proekt-должности', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-konechnyjj-proekt-графики-отпуска',
    'model:i-i-s-konechnyjj-proekt-должности',
    'model:i-i-s-konechnyjj-proekt-отделы',
    'model:i-i-s-konechnyjj-proekt-расчетный-лист',
    'model:i-i-s-konechnyjj-proekt-согласие-на-опд',
    'model:i-i-s-konechnyjj-proekt-состав-расчета',
    'model:i-i-s-konechnyjj-proekt-сотрудники',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
