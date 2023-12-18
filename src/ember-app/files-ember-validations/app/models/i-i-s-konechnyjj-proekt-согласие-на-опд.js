import {
  defineNamespace,
  defineProjections,
  Model as СогласиеНаОпдMixin
} from '../mixins/regenerated/models/i-i-s-konechnyjj-proekt-согласие-на-опд';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СогласиеНаОпдMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
