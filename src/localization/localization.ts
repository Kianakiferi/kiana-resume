import { createI18n } from 'vue-i18n';
import zhCN from '@assets/localization/zh_CN.json';
import en from '@assets/localization/en.json';

type MessageSchema = typeof zhCN;

const i18n = createI18n<[MessageSchema], 'zh-CN' | 'en'>({
    locale: 'zh-CN',
    fallbackLocale: 'zh-CN',
    legacy: false,
    messages: {
        'zh-CN':zhCN,
        'en': en
    }
});

export default i18n;
