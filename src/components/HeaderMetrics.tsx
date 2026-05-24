import { useEffect } from "react";

/** Mesure nav + PromoBar et met à jour --header-nav / --header-promo / --header-total */
export function HeaderMetrics() {
  useEffect(() => {
    const nav = document.querySelector<HTMLElement>("[data-header-nav]");
    const promo = document.querySelector<HTMLElement>("[data-header-promo]");

    const update = () => {
      const navH = nav?.getBoundingClientRect().height ?? 64;
      const promoVisible =
        promo &&
        promo.offsetHeight > 0 &&
        getComputedStyle(promo).display !== "none";
      const promoH = promoVisible ? promo.getBoundingClientRect().height : 0;

      const root = document.documentElement;
      root.style.setProperty("--header-nav", `${Math.round(navH)}px`);
      root.style.setProperty("--header-promo", `${Math.round(promoH)}px`);
      root.style.setProperty("--header-total", `${Math.round(navH + promoH)}px`);
    };

    const ro = new ResizeObserver(update);
    if (nav) ro.observe(nav);
    if (promo) ro.observe(promo);
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);

    const mq = window.matchMedia("(min-width: 1024px)");
    mq.addEventListener("change", update);

    update();
    const t = window.setTimeout(update, 400);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
      mq.removeEventListener("change", update);
      window.clearTimeout(t);
    };
  }, []);

  return null;
}
