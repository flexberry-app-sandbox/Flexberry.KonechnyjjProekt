import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СогласиеНаОпдMixin
} from '../mixins/regenerated/models/i-i-s-konechnyjj-proekt-согласие-на-опд';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СогласиеНаОпдMixin, Validations, {
});

defineProjections(Model);

export default Model;
