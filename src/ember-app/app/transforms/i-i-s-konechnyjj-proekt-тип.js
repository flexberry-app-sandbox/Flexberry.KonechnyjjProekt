import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипEnum from '../enums/i-i-s-konechnyjj-proekt-тип';

export default FlexberryEnum.extend({
  enum: ТипEnum,
  sourceType: 'IIS.Konechnyjj_proekt.Тип'
});
