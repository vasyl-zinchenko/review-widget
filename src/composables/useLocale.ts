import { useI18n } from 'vue-i18n';

export function useLocale() {
  const { locale } = useI18n();

  const setLocale = (language: string) => {
    locale.value = language;
  };

  return {
    setLocale,
    locale,
  };
}
