import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-konechnyjj-proekt-графики-отпуска-l');
  this.route('i-i-s-konechnyjj-proekt-графики-отпуска-e',
  { path: 'i-i-s-konechnyjj-proekt-графики-отпуска-e/:id' });
  this.route('i-i-s-konechnyjj-proekt-графики-отпуска-e.new',
  { path: 'i-i-s-konechnyjj-proekt-графики-отпуска-e/new' });
  this.route('i-i-s-konechnyjj-proekt-должности-l');
  this.route('i-i-s-konechnyjj-proekt-должности-e',
  { path: 'i-i-s-konechnyjj-proekt-должности-e/:id' });
  this.route('i-i-s-konechnyjj-proekt-должности-e.new',
  { path: 'i-i-s-konechnyjj-proekt-должности-e/new' });
  this.route('i-i-s-konechnyjj-proekt-отделы-l');
  this.route('i-i-s-konechnyjj-proekt-отделы-e',
  { path: 'i-i-s-konechnyjj-proekt-отделы-e/:id' });
  this.route('i-i-s-konechnyjj-proekt-отделы-e.new',
  { path: 'i-i-s-konechnyjj-proekt-отделы-e/new' });
  this.route('i-i-s-konechnyjj-proekt-расчетный-лист-l');
  this.route('i-i-s-konechnyjj-proekt-расчетный-лист-e',
  { path: 'i-i-s-konechnyjj-proekt-расчетный-лист-e/:id' });
  this.route('i-i-s-konechnyjj-proekt-расчетный-лист-e.new',
  { path: 'i-i-s-konechnyjj-proekt-расчетный-лист-e/new' });
  this.route('i-i-s-konechnyjj-proekt-согласие-на-опд-l');
  this.route('i-i-s-konechnyjj-proekt-согласие-на-опд-e',
  { path: 'i-i-s-konechnyjj-proekt-согласие-на-опд-e/:id' });
  this.route('i-i-s-konechnyjj-proekt-согласие-на-опд-e.new',
  { path: 'i-i-s-konechnyjj-proekt-согласие-на-опд-e/new' });
  this.route('i-i-s-konechnyjj-proekt-сотрудники-l');
  this.route('i-i-s-konechnyjj-proekt-сотрудники-e',
  { path: 'i-i-s-konechnyjj-proekt-сотрудники-e/:id' });
  this.route('i-i-s-konechnyjj-proekt-сотрудники-e.new',
  { path: 'i-i-s-konechnyjj-proekt-сотрудники-e/new' });
});

export default Router;
