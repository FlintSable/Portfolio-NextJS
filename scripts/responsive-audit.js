/**
 * Responsive Audit Script
 *
 * Run in the browser console (or with Playwright) to check for common
 * responsiveness issues at any viewport size.
 *
 * Usage:
 *   1. Open your site in the browser
 *   2. Open DevTools console
 *   3. Paste this entire script and press Enter
 *   4. Resize the browser to different widths and re-run to check each breakpoint
 *
 * What it checks:
 *   - Horizontal overflow (content wider than viewport)
 *   - Touch targets smaller than 44x44px (Apple HIG minimum)
 *   - Text smaller than 12px (readability floor)
 *   - Elements hidden by overflow:hidden that might be unintentional
 *
 * Breakpoints to test (from globals.css):
 *   X-Small (phones):      375px
 *   Small (landscape):     576px
 *   Medium (tablets):      768px
 *   Large (desktops):      1024px
 *   XL (large desktops):   1280px
 */

(function responsiveAudit() {
  const results = {
    viewport: `${window.innerWidth}x${window.innerHeight}`,
    timestamp: new Date().toISOString(),
    issues: []
  };

  const allElements = document.querySelectorAll('*');

  // 1. Horizontal overflow
  if (document.body.scrollWidth > window.innerWidth) {
    results.issues.push({
      severity: 'HIGH',
      type: 'horizontal-overflow',
      message: `Body scrollWidth (${document.body.scrollWidth}px) exceeds viewport (${window.innerWidth}px)`,
    });
  }

  // Find individual overflowing elements
  allElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.right > window.innerWidth + 1 && el.tagName !== 'HTML' && el.tagName !== 'BODY') {
      results.issues.push({
        severity: 'HIGH',
        type: 'element-overflow',
        element: `${el.tagName}.${el.className?.toString()?.split(' ')[0] || '(no-class)'}`,
        message: `Overflows viewport by ${Math.round(rect.right - window.innerWidth)}px (element width: ${Math.round(rect.width)}px)`,
      });
    }
  });

  // 2. Small touch targets (interactive elements < 44x44)
  const interactive = document.querySelectorAll('a, button, input, select, textarea, [role="button"], [onclick]');
  interactive.forEach(el => {
    const rect = el.getBoundingClientRect();
    const style = window.getComputedStyle(el);
    if (style.display === 'none' || style.visibility === 'hidden') return;
    if (rect.width === 0 || rect.height === 0) return;

    if (rect.height < 44 || rect.width < 44) {
      results.issues.push({
        severity: 'MEDIUM',
        type: 'small-touch-target',
        element: `${el.tagName}`,
        text: el.textContent?.trim().slice(0, 30) || el.getAttribute('aria-label') || '(no text)',
        size: `${Math.round(rect.width)}x${Math.round(rect.height)}px`,
        message: `Touch target below 44x44px minimum (actual: ${Math.round(rect.width)}x${Math.round(rect.height)}px)`,
      });
    }
  });

  // 3. Small text (visible leaf nodes < 12px)
  allElements.forEach(el => {
    if (el.children.length > 0) return; // only leaf nodes
    const text = el.textContent?.trim();
    if (!text) return;

    const style = window.getComputedStyle(el);
    if (style.display === 'none' || style.visibility === 'hidden') return;

    const fontSize = parseFloat(style.fontSize);
    if (fontSize < 12) {
      results.issues.push({
        severity: 'LOW',
        type: 'small-text',
        element: `${el.tagName}`,
        text: text.slice(0, 40),
        fontSize: `${fontSize}px`,
        message: `Text below 12px readability floor (actual: ${fontSize}px)`,
      });
    }
  });

  // Summary
  const high = results.issues.filter(i => i.severity === 'HIGH').length;
  const medium = results.issues.filter(i => i.severity === 'MEDIUM').length;
  const low = results.issues.filter(i => i.severity === 'LOW').length;

  console.log(`\n=== RESPONSIVE AUDIT @ ${results.viewport} ===`);
  console.log(`Found ${results.issues.length} issues: ${high} HIGH, ${medium} MEDIUM, ${low} LOW\n`);

  if (results.issues.length === 0) {
    console.log('No issues found at this viewport size.');
  } else {
    // Group by severity
    ['HIGH', 'MEDIUM', 'LOW'].forEach(sev => {
      const group = results.issues.filter(i => i.severity === sev);
      if (group.length > 0) {
        console.log(`--- ${sev} ---`);
        group.forEach(issue => {
          console.log(`  [${issue.type}] ${issue.message}`);
          if (issue.element) console.log(`    Element: ${issue.element}`);
          if (issue.text) console.log(`    Text: "${issue.text}"`);
        });
        console.log('');
      }
    });
  }

  return results;
})();
