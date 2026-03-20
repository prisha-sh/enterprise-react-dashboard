import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Dashboard": "Dashboard",
      "Manage Team": "Manage Team",
      "Contacts": "Contacts",
      "Invoices": "Invoices",
      "Profile Form": "Profile Form",
      "Calendar": "Calendar",
      "FAQ Page": "FAQ Page",
      "Data": "Data",
      "Pages": "Pages",
      "Charts": "Charts",
      "Logout": "Logout",
      "Administrator": "Administrator",
      "Viewer": "Viewer"
    }
  },
  ja: {
    translation: {
      "Dashboard": "ダッシュボード",
      "Manage Team": "チーム管理",
      "Contacts": "連絡先",
      "Invoices": "請求書",
      "Profile Form": "プロフィールフォーム",
      "Calendar": "カレンダー",
      "FAQ Page": "よくある質問",
      "Data": "データ",
      "Pages": "ページ",
      "Charts": "チャート",
      "Logout": "ログアウト",
      "Administrator": "管理者",
      "Viewer": "閲覧者"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;
