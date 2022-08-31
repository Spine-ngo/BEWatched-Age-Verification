import { Options } from '../types/options.type';
import { modelsDefault } from './models.default';
import { translationsDefault } from './translations.default';

export const optionsDefault: Options = {
  autoStart: true,
  debug: false,
  showCloseButton: false,
  accentColor: '#F26457',
  accentTextColor: '#fff',
  shadowColor: 'rgba(242,100,87,.25)',
  blur: true,
  models: modelsDefault,
  cookieAge: 30,
  cookieName: 'age-verification',
  showMax: 5,
  eventPrefix: 'bewatched',
  language: 'en',
  translations: translationsDefault,
  brands: [],
  showDefaultBrand: true,
};
