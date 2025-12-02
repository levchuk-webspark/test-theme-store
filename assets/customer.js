// assets/customer.js
document.addEventListener('DOMContentLoaded', function () {
  // Smooth scroll for same-page anchors
  document.querySelectorAll('a[href*="#"]').forEach(function (link) {
    // Only intercept anchors pointing to the account path or hash-only links
    try {
      var url = new URL(link.href, location.origin);
    } catch (e) { return; }
    if (url.pathname === location.pathname || url.hash) {
      link.addEventListener('click', function (e) {
        // Only handle when the hash target exists on the page
        if (url.hash) {
          var target = document.querySelector(url.hash);
          if (target) {
            // If the link navigates to a different page path, let default navigation happen
            if (url.pathname === location.pathname) {
              e.preventDefault();
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
              history.replaceState(null, '', url.hash);
            }
          }
        }
      });
    }
  });

  // Active sidebar highlight
  var navLinks = Array.from(document.querySelectorAll('.account-sidebar__menu a[href*="#"]'));
  var sections = Array.from(document.querySelectorAll('section[id]'));

  if (!navLinks.length || !sections.length) return;

  function onScroll() {
    var offset = window.scrollY + 120; // tweak if you have sticky headers
    for (var i = sections.length - 1; i >= 0; i--) {
      var sec = sections[i];
      if (offset >= sec.offsetTop) {
        var id = sec.id;
        navLinks.forEach(function (a) { a.classList.remove('active'); });
        var active = document.querySelector('.account-sidebar__menu a[href$="#' + id + '"]');
        if (active) active.classList.add('active');
        break;
      }
    }
  }

  window.addEventListener('scroll', onScroll);
  onScroll();
});
