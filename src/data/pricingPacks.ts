import type { LucideIcon } from "lucide-react";
import { Package, Crown } from "lucide-react";

export type PricingPack = {
  id: string;
  name: string;
  price: number;
  tagline: string;
  icon: LucideIcon;
  badge?: string;
  featured?: boolean;
  accent: "bronze" | "gold" | "premium";
  features: { text: string; included: boolean }[];
};

export const PRICING_PACKS: PricingPack[] = [
  {
    id: "starter",
    name: "الباقة الأساسية",
    price: 199,
    tagline: "ابدأ الإشهار المحلي بأقل تكلفة",
    icon: Package,
    badge: "للبدء",
    accent: "bronze",
    features: [
      { text: "إشهار على أكياس التوصيل", included: true },
      { text: "طباعة احترافية لعلامتك التجارية", included: true },
      { text: "تصميم جذاب لإعلانك", included: true },
      { text: "دعم قبل وبعد الخدمة", included: true },
      { text: "موقع إلكتروني", included: false },
    ],
  },
  {
    id: "tanger",
    name: "باقة طنجة",
    price: 499,
    tagline: "انتشار كامل في طنجة — شهر بعد شهر",
    icon: Crown,
    badge: "الخيار الأمثل",
    featured: true,
    accent: "premium",
    features: [
      { text: "توزيع في منطقتك وطنجة كاملة", included: true },
      { text: "حضور دائم في أيدي الزبائن", included: true },
      { text: "أقصى انتشار محلي ممكن", included: true },
      { text: "أولوية في شبكة التوزيع", included: true },
    ],
  },
];
