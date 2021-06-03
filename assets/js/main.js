!(function (e) {
  "use strict";
  var o = e("#header").outerHeight() - 15;
  if (
    (e(document).on(
      "click",
      ".nav-menu a, .mobile-nav a, .scrollto",
      function (a) {
        if (
          location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname
        ) {
          var t = e(this.hash);
          if (t.length) {
            a.preventDefault();
            var n = t.offset().top - o;
            return (
              "#header" == e(this).attr("href") && (n = 0),
              e("html, body").animate({ scrollTop: n }, 1500, "easeInOutExpo"),
              e(this).parents(".nav-menu, .mobile-nav").length &&
                (e(".nav-menu .active, .mobile-nav .active").removeClass(
                  "active"
                ),
                e(this).closest("li").addClass("active")),
              e("body").hasClass("mobile-nav-active") &&
                (e("body").removeClass("mobile-nav-active"),
                e(".mobile-nav-toggle i").toggleClass(
                  "icofont-navigation-menu icofont-close"
                ),
                e(".mobile-nav-overly").fadeOut()),
              !1
            );
          }
        }
      }
    ),
    e(document).ready(function () {
      if (window.location.hash) {
        var a = window.location.hash;
        if (e(a).length) {
          var t = e(a).offset().top - o;
          e("html, body").animate({ scrollTop: t }, 1500, "easeInOutExpo");
        }
      }
    }),
    e(".nav-menu").length)
  ) {
    var a = e(".nav-menu").clone().prop({ class: "mobile-nav d-md-none" });
    e("body").append(a),
      e("body").prepend(
        '<button type="button" class="mobile-nav-toggle d-md-none"><i class="icofont-navigation-menu"></i></button>'
      ),
      e("body").append('<div class="mobile-nav-overly"></div>'),
      e(document).on("click", ".mobile-nav-toggle", function (o) {
        e("body").toggleClass("mobile-nav-active"),
          e(".mobile-nav-toggle i").toggleClass(
            "icofont-navigation-menu icofont-close"
          ),
          e(".mobile-nav-overly").toggle();
      }),
      e(document).on("click", ".mobile-nav .drop-down > a", function (o) {
        o.preventDefault(),
          e(this).next().slideToggle(300),
          e(this).parent().toggleClass("active");
      }),
      e(document).click(function (o) {
        var a = e(".mobile-nav, .mobile-nav-toggle");
        a.is(o.target) ||
          0 !== a.has(o.target).length ||
          (e("body").hasClass("mobile-nav-active") &&
            (e("body").removeClass("mobile-nav-active"),
            e(".mobile-nav-toggle i").toggleClass(
              "icofont-navigation-menu icofont-close"
            ),
            e(".mobile-nav-overly").fadeOut()));
      });
  } else
    e(".mobile-nav, .mobile-nav-toggle").length &&
      e(".mobile-nav, .mobile-nav-toggle").hide();
  var t = e("section"),
    n = e(".nav-menu, #mobile-nav");
  e(window).on("scroll", function () {
    var o = e(this).scrollTop() + 200;
    t.each(function () {
      var a = e(this).offset().top,
        t = a + e(this).outerHeight();
      o >= a &&
        o <= t &&
        (o <= t && n.find("li").removeClass("active"),
        n
          .find('a[href="#' + e(this).attr("id") + '"]')
          .parent("li")
          .addClass("active")),
        o < 300 && e(".nav-menu ul:first li:first").addClass("active");
    });
  }),
    e(window).scroll(function () {
      e(this).scrollTop() > 100
        ? e("#header").addClass("header-scrolled")
        : e("#header").removeClass("header-scrolled");
    }),
    e(window).scrollTop() > 100 && e("#header").addClass("header-scrolled"),
    e(window).scroll(function () {
      e(this).scrollTop() > 100
        ? e(".back-to-top").fadeIn("slow")
        : e(".back-to-top").fadeOut("slow");
    }),
    e(".back-to-top").click(function () {
      return (
        e("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo"), !1
      );
    }),
    e(".testimonials-carousel").owlCarousel({
      autoplay: !0,
      dots: !0,
      loop: !0,
      responsive: { 0: { items: 1 }, 768: { items: 1 }, 900: { items: 2 } },
    }),
    e(window).on("load", function () {
      AOS.init({ duration: 1e3, easing: "ease-in-out", once: !0, mirror: !1 });
    }),
    lozad().observe();
})(jQuery);
