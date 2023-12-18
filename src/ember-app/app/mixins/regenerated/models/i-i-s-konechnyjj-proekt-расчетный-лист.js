import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  итогоКПере: DS.attr('decimal'),
  итогоНачис: DS.attr('decimal'),
  итогоУдер: DS.attr('decimal'),
  номерДок: DS.attr('number'),
  отправлено: DS.attr('boolean', { defaultValue: false }),
  сотрудники: DS.belongsTo('i-i-s-konechnyjj-proekt-сотрудники', { inverse: null, async: false }),
  составРасчета: DS.hasMany('i-i-s-konechnyjj-proekt-состав-расчета', { inverse: 'расчетныйЛист', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-konechnyjj-proekt-расчетный-лист.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  итогоКПере: {
    descriptionKey: 'models.i-i-s-konechnyjj-proekt-расчетный-лист.validations.итогоКПере.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  итогоНачис: {
    descriptionKey: 'models.i-i-s-konechnyjj-proekt-расчетный-лист.validations.итогоНачис.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  итогоУдер: {
    descriptionKey: 'models.i-i-s-konechnyjj-proekt-расчетный-лист.validations.итогоУдер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  номерДок: {
    descriptionKey: 'models.i-i-s-konechnyjj-proekt-расчетный-лист.validations.номерДок.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  отправлено: {
    descriptionKey: 'models.i-i-s-konechnyjj-proekt-расчетный-лист.validations.отправлено.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-konechnyjj-proekt-расчетный-лист.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  составРасчета: {
    descriptionKey: 'models.i-i-s-konechnyjj-proekt-расчетный-лист.validations.составРасчета.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РасчетныйЛистE', 'i-i-s-konechnyjj-proekt-расчетный-лист', {
    номерДок: attr('Номер документа', { index: 0 }),
    дата: attr('Дата составления', { index: 1 }),
    итогоНачис: attr('Итого начислено', { index: 2 }),
    итогоУдер: attr('Итого удержано', { index: 3 }),
    итогоКПере: attr('Итого к перечислению', { index: 4 }),
    отправлено: attr('Отправлено', { index: 5 }),
    сотрудники: belongsTo('i-i-s-konechnyjj-proekt-сотрудники', 'Сотрудники', {
      фамилия: attr('Фамилия', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'фамилия' }),
    составРасчета: hasMany('i-i-s-konechnyjj-proekt-состав-расчета', 'Состав расчета', {
      тип: attr('Тип', { index: 0 }),
      наименование: attr('Наименование', { index: 1 }),
      сумма: attr('Сумма', { index: 2 }),
      ндфл: attr('НДФЛ', { index: 3 }),
      взносы: attr('Страховые взносы', { index: 4 }),
      всего: attr('Всего', { index: 5 })
    })
  });

  modelClass.defineProjection('РасчетныйЛистL', 'i-i-s-konechnyjj-proekt-расчетный-лист', {
    номерДок: attr('Номер документа', { index: 0 }),
    дата: attr('Дата составления', { index: 1 }),
    итогоНачис: attr('Итого начислено', { index: 2 }),
    итогоУдер: attr('Итого удержано', { index: 3 }),
    итогоКПере: attr('Итого к перечислению', { index: 4 }),
    отправлено: attr('Отправлено', { index: 5 }),
    сотрудники: belongsTo('i-i-s-konechnyjj-proekt-сотрудники', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
