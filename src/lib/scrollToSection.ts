export const SECTION_NAVIGATE_EVENT = "section-navigate";

function getHeaderOffset(): number {
  const root = document.documentElement;
  const total = getComputedStyle(root).getPropertyValue("--header-total").trim();
  const nav = getComputedStyle(root).getPropertyValue("--header-nav").trim();
  const parsedTotal = Number.parseFloat(total);
  const parsedNav = Number.parseFloat(nav);

  if (Number.isFinite(parsedTotal) && parsedTotal > 0) {
    return parsedTotal + 12;
  }
  if (Number.isFinite(parsedNav) && parsedNav > 0) {
    return parsedNav + 12;
  }
  return 88;
}

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function scrollToElement(element: HTMLElement) {
  const offset = getHeaderOffset();
  const top = element.getBoundingClientRect().top + window.scrollY - offset;
  const behavior = prefersReducedMotion() ? "auto" : "smooth";

  window.scrollTo({ top: Math.max(0, top), behavior });

  if (window.location.hash !== `#${element.id}`) {
    history.replaceState(null, "", `#${element.id}`);
  }
}

export function scrollToSection(sectionId: string) {
  if (!sectionId) return;

  window.dispatchEvent(
    new CustomEvent(SECTION_NAVIGATE_EVENT, { detail: sectionId })
  );

  document.documentElement.removeAttribute("data-mobile-menu-open");
  document.body.style.overflow = "";

  const attemptScroll = () => {
    const element = document.getElementById(sectionId);
    if (element) {
      scrollToElement(element);
      return true;
    }
    return false;
  };

  if (attemptScroll()) {
    window.setTimeout(attemptScroll, 120);
    window.setTimeout(attemptScroll, 400);
    window.setTimeout(attemptScroll, 800);
    return;
  }

  let tries = 0;
  const retry = () => {
    if (attemptScroll() || tries >= 40) return;
    tries += 1;
    window.setTimeout(retry, 50);
  };
  retry();
}
