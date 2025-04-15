  // Utility function to get readable timestamp
  function getTimestamp() {
    return new Date().toISOString();
  }

  // Utility to get a readable object type
  function getElementType(element) {
    if (!element) return 'unknown';

    const tag = element.tagName?.toLowerCase();
    const typeAttr = element.getAttribute('type');
    const role = element.getAttribute('role');
    const aria = element.getAttribute('aria-label');

    if (tag === 'img') return 'image';
    if (tag === 'a') return 'link';
    if (tag === 'button') return 'button';
    if (tag === 'select') return 'dropdown';
    if (tag === 'input') return `input (${typeAttr || 'text'})`;
    if (tag === 'p' || tag === 'span' || tag === 'div') return 'text';
    if (role) return role;
    if (aria) return aria;

    return tag || 'unknown';
  }

  // Log all clicks
  document.addEventListener('click', (e) => {
    const elementType = getElementType(e.target);
    console.log(`${getTimestamp()} , click , ${elementType}`);
  });

  // Log page views for specific sections on load
  window.addEventListener('DOMContentLoaded', () => {
    const viewedElements = document.querySelectorAll('p, img, a, h2, li');
    viewedElements.forEach((el) => {
      const type = getElementType(el);
      console.log(`${getTimestamp()} , view , ${type}`);
    });
  });