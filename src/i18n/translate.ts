import i18n from 'i18n-js';

export function translate(key: string, options?: I18n.TranslateOptions) {
  return i18n.t(key, options);
}
