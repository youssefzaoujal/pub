export const SECTION_NAVIGATE_EVENT = "section-navigate";

export function scrollToSection(sectionId: string) {
  window.dispatchEvent(
    new CustomEvent(SECTION_NAVIGATE_EVENT, { detail: sectionId })
  );

  const tryScroll = (attempts = 0) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (attempts < 30) {
      requestAnimationFrame(() => tryScroll(attempts + 1));
    }
  };

  tryScroll();
}
