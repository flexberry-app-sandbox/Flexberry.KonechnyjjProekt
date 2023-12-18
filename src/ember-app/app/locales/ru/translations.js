import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISKonechnyjj_proektГрафикиОтпускаLForm from './forms/i-i-s-konechnyjj-proekt-графики-отпуска-l';
import IISKonechnyjj_proektДолжностиLForm from './forms/i-i-s-konechnyjj-proekt-должности-l';
import IISKonechnyjj_proektОтделыLForm from './forms/i-i-s-konechnyjj-proekt-отделы-l';
import IISKonechnyjj_proektРасчетныйЛистLForm from './forms/i-i-s-konechnyjj-proekt-расчетный-лист-l';
import IISKonechnyjj_proektСогласиеНаОпдLForm from './forms/i-i-s-konechnyjj-proekt-согласие-на-опд-l';
import IISKonechnyjj_proektСотрудникиLForm from './forms/i-i-s-konechnyjj-proekt-сотрудники-l';
import IISKonechnyjj_proektГрафикиОтпускаEForm from './forms/i-i-s-konechnyjj-proekt-графики-отпуска-e';
import IISKonechnyjj_proektДолжностиEForm from './forms/i-i-s-konechnyjj-proekt-должности-e';
import IISKonechnyjj_proektОтделыEForm from './forms/i-i-s-konechnyjj-proekt-отделы-e';
import IISKonechnyjj_proektРасчетныйЛистEForm from './forms/i-i-s-konechnyjj-proekt-расчетный-лист-e';
import IISKonechnyjj_proektСогласиеНаОпдEForm from './forms/i-i-s-konechnyjj-proekt-согласие-на-опд-e';
import IISKonechnyjj_proektСотрудникиEForm from './forms/i-i-s-konechnyjj-proekt-сотрудники-e';
import IISKonechnyjj_proektГрафикиОтпускаModel from './models/i-i-s-konechnyjj-proekt-графики-отпуска';
import IISKonechnyjj_proektДолжностиModel from './models/i-i-s-konechnyjj-proekt-должности';
import IISKonechnyjj_proektОтделыModel from './models/i-i-s-konechnyjj-proekt-отделы';
import IISKonechnyjj_proektРасчетныйЛистModel from './models/i-i-s-konechnyjj-proekt-расчетный-лист';
import IISKonechnyjj_proektСогласиеНаОпдModel from './models/i-i-s-konechnyjj-proekt-согласие-на-опд';
import IISKonechnyjj_proektСоставРасчетаModel from './models/i-i-s-konechnyjj-proekt-состав-расчета';
import IISKonechnyjj_proektСотрудникиModel from './models/i-i-s-konechnyjj-proekt-сотрудники';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-konechnyjj-proekt-графики-отпуска': IISKonechnyjj_proektГрафикиОтпускаModel,
    'i-i-s-konechnyjj-proekt-должности': IISKonechnyjj_proektДолжностиModel,
    'i-i-s-konechnyjj-proekt-отделы': IISKonechnyjj_proektОтделыModel,
    'i-i-s-konechnyjj-proekt-расчетный-лист': IISKonechnyjj_proektРасчетныйЛистModel,
    'i-i-s-konechnyjj-proekt-согласие-на-опд': IISKonechnyjj_proektСогласиеНаОпдModel,
    'i-i-s-konechnyjj-proekt-состав-расчета': IISKonechnyjj_proektСоставРасчетаModel,
    'i-i-s-konechnyjj-proekt-сотрудники': IISKonechnyjj_proektСотрудникиModel
  },

  'application-name': 'Модуль КЭДО',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Модуль КЭДО',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Модуль КЭДО',
          title: 'Konechnyjj_proekt'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'кадровые-документы': {
          caption: 'Кадровые документы',
          title: 'Кадровые документы',
          'i-i-s-konechnyjj-proekt-согласие-на-опд-l': {
            caption: 'Согласие на опд',
            title: ''
          },
          'i-i-s-konechnyjj-proekt-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-konechnyjj-proekt-графики-отпуска-l': {
            caption: 'Графики отпуска',
            title: ''
          },
          'i-i-s-konechnyjj-proekt-отделы-l': {
            caption: 'Отделы',
            title: ''
          },
          'i-i-s-konechnyjj-proekt-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          }
        },
        'зарплатные-документы': {
          caption: 'Зарплатные документы',
          title: 'Зарплатные документы',
          'i-i-s-konechnyjj-proekt-расчетный-лист-l': {
            caption: 'Расчетный лист',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-konechnyjj-proekt-графики-отпуска-l': IISKonechnyjj_proektГрафикиОтпускаLForm,
    'i-i-s-konechnyjj-proekt-должности-l': IISKonechnyjj_proektДолжностиLForm,
    'i-i-s-konechnyjj-proekt-отделы-l': IISKonechnyjj_proektОтделыLForm,
    'i-i-s-konechnyjj-proekt-расчетный-лист-l': IISKonechnyjj_proektРасчетныйЛистLForm,
    'i-i-s-konechnyjj-proekt-согласие-на-опд-l': IISKonechnyjj_proektСогласиеНаОпдLForm,
    'i-i-s-konechnyjj-proekt-сотрудники-l': IISKonechnyjj_proektСотрудникиLForm,
    'i-i-s-konechnyjj-proekt-графики-отпуска-e': IISKonechnyjj_proektГрафикиОтпускаEForm,
    'i-i-s-konechnyjj-proekt-должности-e': IISKonechnyjj_proektДолжностиEForm,
    'i-i-s-konechnyjj-proekt-отделы-e': IISKonechnyjj_proektОтделыEForm,
    'i-i-s-konechnyjj-proekt-расчетный-лист-e': IISKonechnyjj_proektРасчетныйЛистEForm,
    'i-i-s-konechnyjj-proekt-согласие-на-опд-e': IISKonechnyjj_proektСогласиеНаОпдEForm,
    'i-i-s-konechnyjj-proekt-сотрудники-e': IISKonechnyjj_proektСотрудникиEForm
  },

});

export default translations;
