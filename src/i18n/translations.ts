/** Textes du site — arabe uniquement */
export const copy = {
  nav: {
    about: "من نحن",
    howItWorks: "كيفاش كنخدمو",
    partners: "شركاؤنا",
    testimonials: "آراء زبنائنا",
    contact: "تواصل معنا",
    cta: "ابدأ الآن",
    tagline: "Ton business f'Yed nass",
  },
  footer: {
    description: "إشهار محلي ذكي يوصل مباشرة إلى يد عملائك المحليين.",
    quickLinks: "روابط سريعة",
    contactInfo: "معلومات الاتصال",
    followUs: "تابعنا",
    home: "الرئيسية",
    copyright: "جميع الحقوق محفوظة.",
  },
  hero: {
    badge: "مستقبل الإشهار المحلي",
    title: "مشروعك فيد الناس",
  },
  sections: {
    pricing: "الأسعار",
    roi: "كم ستوفر؟",
    clients: "شبكة زبناؤنا",
    partners: "شبكة شركائنا",
    partnersDesc:
      "شركاؤنا في التوزيع — مطاعم طنجة التي توزّع الأكياس مع إعلاناتكم",
    testimonials: "آراء زبنائنا",
    contact: "تواصل معنا",
    contactBadge: "ابدأ رحلتك الآن",
    contactTitle: "جاهز لتغيير قواعد اللعبة؟",
    contactSubtitle:
      "انضم إلى المئات من رجال الأعمال الذين اختاروا الطريق الذكي للإشهار المحلي. لا تضيع فرصة الوصول إلى عملائك المحليين.",
    contactHeading: "هيا نبدأ العمل معًا",
    contactMethods: "تواصل معنا عبر أي من الطرق التالية",
    callUs: "اتصل بنا",
    emailUs: "أرسل بريد إلكتروني",
    followInstagram: "تابعنا على إنستغرام",
    partnerBadge: "شريك توزيع معتمد",
  },
  promo: {
    bar: "عرض خاص — 1000 كيس موزع بـ 700 درهم فقط",
    urgency: "عرض محدود · استفد دابا قبل ما يسالي",
    cta: "استفد من العرض",
    badge: "عرض خاص",
    ribbon: "توفير استثنائي",
    bags: "1000 كيس موزع",
    price: "700 درهم",
    print: "طباعة على وجه واحد",
    pricingTitle: "1000 كيس موزع",
    bookNow: "احجز الآن واستفد من هذه العرض الخاص",
  },
} as const;

export type TranslationPath =
  | `nav.${keyof typeof copy.nav}`
  | `footer.${keyof typeof copy.footer}`
  | `hero.${keyof typeof copy.hero}`
  | `sections.${keyof typeof copy.sections}`
  | `promo.${keyof typeof copy.promo}`;

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const value = path.split(".").reduce<unknown>((acc, part) => {
    if (acc && typeof acc === "object" && part in acc) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, obj);

  return typeof value === "string" ? value : path;
}

export function t(key: TranslationPath): string {
  return getNestedValue(copy as Record<string, unknown>, key);
}
