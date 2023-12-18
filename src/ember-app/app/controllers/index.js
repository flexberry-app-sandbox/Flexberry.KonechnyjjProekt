import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.кадровые-документы.caption'),
          title: i18n.t('forms.application.sitemap.кадровые-документы.title'),
          children: [{
            link: 'i-i-s-konechnyjj-proekt-согласие-на-опд-l',
            caption: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-konechnyjj-proekt-согласие-на-опд-l.caption'),
            title: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-konechnyjj-proekt-согласие-на-опд-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-konechnyjj-proekt-должности-l',
            caption: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-konechnyjj-proekt-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-konechnyjj-proekt-должности-l.title'),
            children: null
          }, {
            link: 'i-i-s-konechnyjj-proekt-графики-отпуска-l',
            caption: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-konechnyjj-proekt-графики-отпуска-l.caption'),
            title: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-konechnyjj-proekt-графики-отпуска-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-konechnyjj-proekt-отделы-l',
            caption: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-konechnyjj-proekt-отделы-l.caption'),
            title: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-konechnyjj-proekt-отделы-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-konechnyjj-proekt-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-konechnyjj-proekt-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-konechnyjj-proekt-сотрудники-l.title'),
            icon: 'table',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.зарплатные-документы.caption'),
          title: i18n.t('forms.application.sitemap.зарплатные-документы.title'),
          children: [{
            link: 'i-i-s-konechnyjj-proekt-расчетный-лист-l',
            caption: i18n.t('forms.application.sitemap.зарплатные-документы.i-i-s-konechnyjj-proekt-расчетный-лист-l.caption'),
            title: i18n.t('forms.application.sitemap.зарплатные-документы.i-i-s-konechnyjj-proekt-расчетный-лист-l.title'),
            icon: 'book',
            children: null
          }]
        }
      ]
    };
  }),
})