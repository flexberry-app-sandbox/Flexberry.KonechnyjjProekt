import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-konechnyjj-proekt-отделы', 'Unit | Serializer | i-i-s-konechnyjj-proekt-отделы', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-konechnyjj-proekt-отделы',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-konechnyjj-proekt-тип',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
