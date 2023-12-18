import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  котОтдела: DS.attr('number'),
  наименование: DS.attr('string')
});

export let ValidationRules = {
  котОтдела: {
    descriptionKey: 'models.i-i-s-konechnyjj-proekt-отделы.validations.котОтдела.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-konechnyjj-proekt-отделы.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтделыE', 'i-i-s-konechnyjj-proekt-отделы', {
    котОтдела: attr('Код отдела', { index: 0 }),
    наименование: attr('Наименование', { index: 1 })
  });

  modelClass.defineProjection('ОтделыL', 'i-i-s-konechnyjj-proekt-отделы', {
    котОтдела: attr('Код отдела', { index: 0 }),
    наименование: attr('Наименование', { index: 1 })
  });
};
