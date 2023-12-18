import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  номерДок: DS.attr('number'),
  отправлено: DS.attr('boolean', { defaultValue: false }),
  подписано: DS.attr('boolean', { defaultValue: false }),
  сотрудники: DS.belongsTo('i-i-s-konechnyjj-proekt-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-konechnyjj-proekt-согласие-на-опд.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерДок: {
    descriptionKey: 'models.i-i-s-konechnyjj-proekt-согласие-на-опд.validations.номерДок.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  отправлено: {
    descriptionKey: 'models.i-i-s-konechnyjj-proekt-согласие-на-опд.validations.отправлено.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  подписано: {
    descriptionKey: 'models.i-i-s-konechnyjj-proekt-согласие-на-опд.validations.подписано.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-konechnyjj-proekt-согласие-на-опд.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СогласиеНаОпдE', 'i-i-s-konechnyjj-proekt-согласие-на-опд', {
    номерДок: attr('Номер док', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    подписано: attr('Подписано', { index: 2 }),
    отправлено: attr('Отправлено', { index: 3 }),
    сотрудники: belongsTo('i-i-s-konechnyjj-proekt-сотрудники', 'Сотрудники', {
      фамилия: attr('Фамилия', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'фамилия' })
  });

  modelClass.defineProjection('СогласиеНаОпдL', 'i-i-s-konechnyjj-proekt-согласие-на-опд', {
    номерДок: attr('Номер документа', { index: 0 }),
    дата: attr('Дата составления', { index: 1 }),
    подписано: attr('Подписано', { index: 2 }),
    отправлено: attr('Отправлено', { index: 3 }),
    сотрудники: belongsTo('i-i-s-konechnyjj-proekt-сотрудники', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
