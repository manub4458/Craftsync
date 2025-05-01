/*! For license information please see main.js.LICENSE.txt */
(() => {
  "use strict";
  var t = {
      855: (t, e, r) => {
        var n = r(92),
          i = r(78),
          a = r(275),
          o = r(103),
          s = r(776),
          l = r(342),
          c = r(782),
          u = r(959),
          p = r(410),
          f = r(889),
          d = r(566),
          h = r(480),
          g = r(533),
          m = r(638),
          v = r(424),
          y = r(588),
          _ = r(511),
          x = r(228),
          b = r(98),
          w = r(507),
          k = r(330),
          T = r(675),
          P = r(817),
          Z = r(499),
          O = r(510),
          S = r(268),
          R = r(111),
          E = r(205);
        let M;
        const $ = document.querySelector("html");
        let C;
        document.addEventListener("scroll", function () {
          const t = document.body.offsetHeight - window.innerHeight;
          var e = window.pageYOffset / t;
          C = Math.round(100 * e);
        }),
          window.addEventListener("load", () => {
            (0, E.O)(),
              (0, P.a)(),
              (0, T.P)(),
              (0, k.n)(),
              (0, O.Z)(),
              (0, Z.X)(),
              (0, S.e)(),
              (0, i.l)(),
              (0, a.a)(),
              (0, o.J)(),
              (0, s.p)(),
              (0, l.m)(),
              (0, c.E)(),
              (0, u.l)(),
              (0, p.w)(),
              (0, f.h)(),
              (0, d.h)(),
              (0, h.w)(),
              (0, m.e)(),
              (0, x.t)(),
              (0, g.C)(),
              (0, v.Z)(),
              (0, _.L)(),
              (0, y.n)(),
              (0, b.p)(),
              (0, w.E)(),
              n.Z.config({ autoRefreshEvents: "DOMContentLoaded" }),
              (0, R.O)(),
              (function (t) {
                var e = window.innerWidth;
                function r() {
                  var t = window.innerWidth;
                  if (t !== e) {
                    clearTimeout(M), $.classList.add("pause");
                    const r = C;
                    (document.body.scrollTop =
                      document.documentElement.scrollTop =
                        0),
                      (M = setTimeout(function () {
                        $.classList.remove("pause"),
                          n.Z.killAll(),
                          (0, i.l)(),
                          (0, a.a)(),
                          (0, o.J)(),
                          (0, s.p)(),
                          (0, l.m)(),
                          (0, c.E)(),
                          (0, u.l)(),
                          (0, p.w)(),
                          (0, f.h)(),
                          (0, d.h)(),
                          (0, h.w)(),
                          (0, m.e)(),
                          (0, x.t)(),
                          (0, g.C)(),
                          (0, v.Z)(),
                          (0, _.L)(),
                          (0, y.n)(),
                          (0, b.p)(),
                          (0, w.E)(),
                          n.Z.config({ autoRefreshEvents: "DOMContentLoaded" });
                        const t =
                          document.body.offsetHeight - window.innerHeight;
                        setTimeout(() => {
                          document.body.scrollTop =
                            document.documentElement.scrollTop =
                              t * (r / 100).toFixed(2);
                        }, 0);
                      }, 500)),
                      (e = t);
                  }
                }
                window.addEventListener("orientationchange", r),
                  window.addEventListener("resize", r);
              })();
          });
      },
      268: (t, e, r) => {
        r.d(e, { e: () => n });
        const n = () => {
          const t = document.querySelectorAll(".anchor a"),
            e = document.querySelector("body");
          t.forEach((t) => {
            t.addEventListener("click", function (t) {
              t.preventDefault();
              const r = document.querySelector("header").offsetHeight,
                n = t.target.getAttribute("href").replace("#", ""),
                i = document.getElementById(n);
              if (e.classList.contains("home-page"))
                if ("products" === n) {
                  const t = i.querySelector(".design-arrow").clientHeight,
                    e = i.parentElement;
                  window.scrollTo(
                    0,
                    window.pageYOffset + e.getBoundingClientRect().top + t + 400
                  );
                } else
                  window.scrollTo(
                    0,
                    window.pageYOffset + i.getBoundingClientRect().top - r
                  );
              if (e.classList.contains("gallery-page"))
                if ("uxui" === n) {
                  const t = i.closest(".pin-spacer"),
                    e = i.closest(".section"),
                    r = window
                      .getComputedStyle(e, null)
                      .getPropertyValue("padding-top")
                      .replace("px", "");
                  window.matchMedia("(min-width: 1280px)").matches
                    ? window.scrollTo(
                        0,
                        window.pageYOffset +
                          t.getBoundingClientRect().top +
                          Number(r) +
                          i.offsetTop +
                          500
                      )
                    : window.scrollTo(
                        0,
                        window.pageYOffset +
                          t.getBoundingClientRect().top +
                          Number(r) +
                          i.offsetTop +
                          250
                      );
                } else if ("develop" === n) {
                  const t = i.parentElement;
                  window.matchMedia("(min-width: 1280px)").matches
                    ? window.scrollTo(
                        0,
                        window.pageYOffset +
                          t.getBoundingClientRect().top +
                          i.offsetHeight -
                          1e3
                      )
                    : window.scrollTo(
                        0,
                        window.pageYOffset +
                          t.getBoundingClientRect().top +
                          i.offsetHeight +
                          100
                      );
                } else if ("anim" === n) {
                  const t = i.parentElement;
                  window.matchMedia("(min-width: 1280px)").matches
                    ? window.scrollTo(
                        0,
                        window.pageYOffset + t.getBoundingClientRect().top + 1e3
                      )
                    : window.scrollTo(
                        0,
                        window.pageYOffset +
                          t.getBoundingClientRect().top +
                          i.offsetHeight +
                          500
                      );
                } else
                  window.scrollTo(
                    0,
                    window.pageYOffset + i.getBoundingClientRect().top - r
                  );
              if (e.classList.contains("about-page"))
                if ("team" === n) {
                  const t = i.parentElement;
                  window.scrollTo(
                    0,
                    window.pageYOffset + t.getBoundingClientRect().top + 250
                  );
                } else
                  window.scrollTo(
                    0,
                    window.pageYOffset + i.getBoundingClientRect().top
                  );
            });
          });
        };
      },
      205: (t, e, r) => {
        r.d(e, { O: () => n });
        const n = () => {
          const t = "cookie",
            e = document.querySelector(".cookies");
          document
            .querySelector(".cookie-btn")
            .addEventListener("click", function () {
              const r = new Date().getTime() + 1728e5;
              localStorage.setItem(
                t,
                JSON.stringify({ cookieValue: "cookie", expirationTime: r })
              ),
                e.classList.remove("show-cookies");
            }),
            (function (t) {
              const r = localStorage.getItem(t);
              if (r) {
                console.log("Cookie data");
                const { value: n, expirationTime: i } = JSON.parse(r);
                new Date().getTime() > i &&
                  (console.log("Current time >"),
                  localStorage.removeItem(t),
                  e.classList.add("show-cookies"));
              } else e.classList.add("show-cookies");
            })(t);
        };
      },
      111: (t, e, r) => {
        r.d(e, { O: () => n });
        document.getElementById('contact-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            const form = e.target;
            const status = document.getElementById('form-status');
            if (form.checkValidity()) {
                document.querySelector('.container').style.animation = 'fadeOut 1s ease-in-out forwards';
                try {
                    const response = await fetch(form.action, {
                        method: form.method,
                        body: new FormData(form),
                        headers: { Accept: "text/plain" }
                    });
                    const text = await response.text();
                    status.textContent = text;
                    status.classList.add('active');
                    if (response.ok) {
                        form.reset();
                    }
                    setTimeout(() => {
                        document.querySelector('.container').style.animation = '';
                        status.classList.remove('active');
                    }, 3000);
                } catch (error) {
                    status.textContent = "Oops! There was a problem submitting your form";
                    status.classList.add('active');
                    setTimeout(() => {
                        document.querySelector('.container').style.animation = '';
                        status.classList.remove('active');
                    }, 3000);
                }
            } else {
                form.reportValidity();
            }
        });
      },
      675: (t, e, r) => {
        r.d(e, { P: () => n });
        const n = () => {
          let t = window.pageYOffset;
          window.onscroll = function () {
            let e = window.pageYOffset;
            t > 50
              ? document.querySelector("header").classList.add("visible")
              : document.querySelector("header").classList.remove("visible"),
              (t = e);
          };
        };
      },
      817: (t, e, r) => {
        r.d(e, { a: () => i });
        var n = r(820);
        const i = () => {
          const t = document.querySelector("body"),
            e = document.querySelector(".loader");
          setTimeout(() => {
            e.style.opacity = "0";
          }, 2e3),
            setTimeout(() => {
              (t.style.overflow = "initial"), e.remove(), (0, n.X)();
            }, 500);
        };
      },
      330: (t, e, r) => {
        r.d(e, { n: () => n });
        const n = () => {
          let t = document.querySelector(".hamburger"),
            e = document.querySelector(".mob-menu");
          t.onclick = function () {
            this.classList.toggle("is-active"), e.classList.toggle("visible");
          };
        };
      },
      499: (t, e, r) => {
        r.d(e, { X: () => n });
        const n = () => {
          document.querySelectorAll("video").forEach((t) => {
            t.play(), t.paused && t.play();
          });
        };
      },
      820: (t, e, r) => {
        r.d(e, { X: () => n });
        const n = () => {
          if ("" !== location.hash) {
            const t = document.querySelector(`${location.hash}`),
              e = document.querySelector("header").offsetHeight;
            if ("#products" === location.hash) {
              const e = t.querySelector(".design-arrow").clientHeight,
                r = t.parentElement;
              window.scrollTo(
                0,
                window.pageYOffset + r.getBoundingClientRect().top + e + 400
              );
            }
            if ("#uxui" === location.hash) {
              const e = t.closest(".pin-spacer"),
                r = t.closest(".section"),
                n = window
                  .getComputedStyle(r, null)
                  .getPropertyValue("padding-top")
                  .replace("px", "");
              window.matchMedia("(min-width: 1280px)").matches
                ? window.scrollTo(
                    0,
                    window.pageYOffset +
                      e.getBoundingClientRect().top +
                      Number(n) +
                      t.offsetTop +
                      500
                  )
                : window.scrollTo(
                    0,
                    window.pageYOffset +
                      e.getBoundingClientRect().top +
                      Number(n) +
                      t.offsetTop +
                      250
                  );
            } else if ("#develop" === location.hash) {
              const e = t.parentElement;
              window.matchMedia("(min-width: 1280px)").matches
                ? window.scrollTo(
                    0,
                    window.pageYOffset +
                      e.getBoundingClientRect().top +
                      t.offsetHeight -
                      1e3
                  )
                : window.scrollTo(
                    0,
                    window.pageYOffset +
                      e.getBoundingClientRect().top +
                      t.offsetHeight +
                      100
                  );
            } else if ("#anim" === location.hash) {
              const e = t.parentElement;
              window.matchMedia("(min-width: 1280px)").matches
                ? window.scrollTo(
                    0,
                    window.pageYOffset + e.getBoundingClientRect().top + 1e3
                  )
                : window.scrollTo(
                    0,
                    window.pageYOffset +
                      e.getBoundingClientRect().top +
                      t.offsetHeight +
                      500
                  );
            } else if ("#team" === location.hash) {
              const e = t.parentElement;
              window.scrollTo(
                0,
                window.pageYOffset + e.getBoundingClientRect().top + 250
              );
            } else
              "#slogan" === location.hash
                ? window.scrollTo(
                    0,
                    window.pageYOffset + t.getBoundingClientRect().top
                  )
                : window.scrollTo(
                    0,
                    window.pageYOffset + t.getBoundingClientRect().top - e
                  );
          }
        };
      },
      510: (t, e, r) => {
        r.d(e, { Z: () => n });
        const n = () => {
          const t = document.querySelectorAll("video"),
            e = "Apple Computer, Inc." == navigator.vendor,
            r = document.querySelector("body");
          t.length &&
            !r.classList.contains("gallery-page") &&
            t.forEach((t) => {
              let r;
              t.querySelectorAll("source").forEach((n) => {
                r = e
                  ? t
                      .querySelector('[type="video/quicktime"]')
                      .getAttribute("data-load-src")
                  : t
                      .querySelector('[type="video/webm"]')
                      .getAttribute("data-load-src");
              }),
                t.setAttribute("src", r),
                t.play();
            });
        };
      },
      275: (t, e, r) => {
        r.d(e, { a: () => a });
        var n = r(358),
          i = r(92);
        n.ZP.registerPlugin(i.Z);
        const a = () => {
          const t = document.querySelectorAll(".section-advantages .text");
          t.length &&
            t.forEach((t) => {
              const e = t.querySelector("p"),
                r = n.ZP.fromTo(
                  e,
                  { y: 50, opacity: 0 },
                  { y: 0, opacity: 1, ease: "ease" }
                );
              i.Z.create({
                trigger: t,
                start: "bottom 90%",
                end: "200px 90%",
                scrub: !0,
                animation: r,
                markers: !1,
                invalidateOnRefresh: !1,
                onKill: (t) => {
                  n.ZP.set(t.animation._targets, { clearProps: "all" });
                },
              });
            });
        };
      },
      342: (t, e, r) => {
        r.d(e, { m: () => a });
        var n = r(358),
          i = r(92);
        n.ZP.registerPlugin(i.Z);
        const a = () => {
          const t = document.querySelector(".design-arrow");
          if (t) {
            const e = document.querySelector(".design-arrow-path"),
              r = e.getTotalLength();
            (e.style.strokeDasharray = r),
              (e.style.strokeDashoffset = r),
              i.Z.create({
                trigger: t,
                scrub: !0,
                start: "top center",
                end: "bottom center",
                markers: !1,
                invalidateOnRefresh: !1,
                onUpdate: (t) => {
                  (e.style.strokeDasharray = r),
                    (e.style.strokeDashoffset = r - r * t.progress);
                },
              });
          }
        };
      },
      782: (t, e, r) => {
        r.d(e, { E: () => a });
        var n = r(358),
          i = r(92);
        n.ZP.registerPlugin(i.Z);
        const a = () => {
          const t = document.querySelectorAll(
              ".section-design .function:not(.function-main)"
            ),
            e = document.querySelectorAll(".section-design .function")[0];
          let r, a, o;
          if (
            ((o = window.matchMedia("(max-width: 700px)").matches ? 90 : 200),
            t.length)
          ) {
            t.forEach((t) => {
              switch (t.getAttribute("class")) {
                case "function function1":
                  (r = "-55%"), (a = "-115%");
                  break;
                case "function function2":
                  (r = "55%"), (a = "-115%");
                  break;
                case "function function3":
                  (r = "117%"), (a = 0);
                  break;
                case "function function4":
                  (r = "55%"), (a = "115%");
                  break;
                case "function function5":
                  (r = "-55%"), (a = "115%");
                  break;
                case "function function6":
                  (r = "-111%"), (a = 0);
              }
              const e = n.ZP.fromTo(t, { y: 0, x: 0 }, { y: a, x: r });
              i.Z.create({
                trigger: ".design-functions",
                start: "300px center",
                end: "1000px center",
                scrub: !0,
                animation: e,
                markers: !1,
                invalidateOnRefresh: !1,
                onEnter: () => {
                  t.style.opacity = 1;
                },
                onLeave: () => {
                  t.style.opacity = 1;
                },
                onEnterBack: () => {
                  t.style.opacity = 1;
                },
                onLeaveBack: () => {
                  t.style.opacity = 0;
                },
                onKill: (t) => {
                  n.ZP.set(t.animation._targets, { clearProps: "all" });
                },
              });
            });
            const s = n.ZP.fromTo(
                e.querySelector(".bg"),
                { width: 90, opacity: 0 },
                { width: o, opacity: 1 }
              ),
              l = n.ZP.fromTo(
                e,
                { color: "transparent" },
                { color: "#262626" }
              ),
              c =
                (i.Z.create({
                  trigger: ".design-functions",
                  start: "top center",
                  end: "1000px center",
                  scrub: !0,
                  markers: !1,
                  invalidateOnRefresh: !1,
                }),
                i.Z.create({
                  trigger: ".design-functions",
                  start: "top center",
                  end: "300px center",
                  scrub: !0,
                  animation: s,
                  markers: !1,
                  invalidateOnRefresh: !1,
                  onKill: (t) => {
                    n.ZP.set(t.animation._targets, { clearProps: "all" });
                  },
                }),
                i.Z.create({
                  trigger: ".design-functions",
                  start: "top center",
                  end: "300px center",
                  scrub: !0,
                  animation: l,
                  markers: !1,
                  invalidateOnRefresh: !1,
                  onKill: (t) => {
                    n.ZP.set(t.animation._targets, { clearProps: "all" });
                  },
                }),
                n.ZP.fromTo(
                  ".section-design .gradient",
                  { width: 0 },
                  { width: 1018 }
                ));
            i.Z.create({
              trigger: ".design-functions",
              start: "center center",
              end: "1000px center",
              pin: ".design-functions-wrapper",
              scrub: !0,
              animation: c,
              markers: !1,
              invalidateOnRefresh: !1,
              onKill: (t) => {
                n.ZP.set(t.animation._targets, { clearProps: "all" });
              },
            });
          }
        };
      },
      776: (t, e, r) => {
        r.d(e, { p: () => a });
        var n = r(358),
          i = r(92);
        n.ZP.registerPlugin(i.Z);
        const a = () => {
          const t = document.querySelectorAll(
            ".section-design .design-headings .animated-text"
          );
          t.length &&
            (t.forEach((t) => {
              let e;
              e = t.classList.contains("design-title") ? 0 : 500;
              const r = n.ZP.fromTo(
                t,
                { y: e, opacity: 0 },
                { y: 0, opacity: 1, ease: "none" }
              );
              i.Z.create({
                trigger: ".section-design",
                start: "top top",
                end: "300px top",
                scrub: !0,
                animation: r,
                markers: !1,
                invalidateOnRefresh: !1,
                onKill: (t) => {
                  n.ZP.set(t.animation._targets, { clearProps: "all" });
                },
              });
            }),
            i.Z.create({
              trigger: ".design-headings",
              start: "top top",
              end: "300px top",
              pin: ".design-headings",
              scrub: !0,
              markers: !1,
              invalidateOnRefresh: !1,
            }));
        };
      },
      480: (t, e, r) => {
        r.d(e, { w: () => a });
        var n = r(358),
          i = r(92);
        n.ZP.registerPlugin(i.Z);
        const a = () => {
          const t = document.querySelector("body"),
            e = document.querySelector(".section-develop");
          if (e && window.matchMedia("(min-width: 1280px)").matches) {
            const t = e.offsetHeight,
              r = e.querySelector(".arrow-wrapper"),
              a = e.querySelectorAll("p"),
              o = n.ZP.fromTo(a, { opacity: 0, y: 200 }, { opacity: 1, y: 0 });
            let s;
            i.Z.create({
              trigger: e,
              start: "90% bottom",
              end: "bottom bottom",
              scrub: !0,
              animation: o,
              markers: !1,
              invalidateOnRefresh: !1,
              onLeave: () => {
                r.classList.add("active");
              },
              onEnterBack: () => {
                r.classList.remove("active");
              },
              onKill: (t) => {
                n.ZP.set(t.animation._targets, { clearProps: "all" });
              },
            }),
              a.forEach((r, a) => {
                let o;
                const s = r.offsetLeft + r.offsetWidth + 50;
                switch (a) {
                  case 0:
                  case 2:
                    o = `-${s}`;
                    break;
                  case 1:
                    o = `${s}`;
                }
                const l = n.ZP.fromTo(r, { x: 0 }, { x: o });
                i.Z.create({
                  trigger: e,
                  start: `${t + 450}px bottom`,
                  end: `${t + 1e3}px bottom`,
                  scrub: !0,
                  animation: l,
                  markers: !1,
                  invalidateOnRefresh: !1,
                  onKill: (t) => {
                    n.ZP.set(t.animation._targets, { clearProps: "all" });
                  },
                });
              }),
              i.Z.create({
                trigger: e,
                start: `${t + 450}px bottom`,
                end: `${t + 1e3}px bottom`,
                scrub: !0,
                markers: !1,
                invalidateOnRefresh: !1,
                onEnter: () => {
                  s = r.getBoundingClientRect().bottom;
                },
                onUpdate: (t) => {
                  t.progress.toFixed(2),
                    (r.querySelector(
                      ".image-item"
                    ).style.transform = `translateY(-${s * t.progress}px)`);
                },
              }),
              i.Z.create({
                trigger: e,
                start: "bottom bottom",
                end: `${t + 1e3}px bottom`,
                scrub: !0,
                pin: e,
                markers: !1,
                invalidateOnRefresh: !1,
                pinSpacing: !1,
              });
          }
          if (e && window.matchMedia("(max-width: 1279px)").matches) {
            const r = e.offsetHeight,
              a = e.querySelector(".arrow-wrapper");
            e.querySelectorAll("p").forEach((t, a) => {
              let o, s, l;
              const c = t.offsetLeft + t.offsetWidth + 50;
              switch (a) {
                case 0:
                  (o = `-${c}`), (s = "bottom"), (l = `${r + 400}px`);
                  break;
                case 1:
                  (o = `${c}`), (s = `${r + 400}px`), (l = `${r + 800}px`);
                  break;
                case 2:
                  (o = `-${c}`), (s = `${r + 800}px`), (l = `${r + 1200}px`);
              }
              if (window.matchMedia("(pointer: coarse)").matches) {
                const r = n.ZP.fromTo(t, { opacity: 0 }, { opacity: 1 });
                i.Z.create({
                  trigger: e,
                  start: `${s} bottom`,
                  end: `${l} bottom`,
                  scrub: !0,
                  animation: r,
                  markers: !1,
                  onKill: (t) => {
                    n.ZP.set(t.animation._targets, { clearProps: "all" });
                  },
                });
              } else {
                const r = n.ZP.fromTo(
                  t,
                  { y: 100, opacity: 0 },
                  { y: 0, opacity: 1 }
                );
                i.Z.create({
                  trigger: e,
                  start: `${s} bottom`,
                  end: `${l} bottom`,
                  scrub: !0,
                  animation: r,
                  invalidateOnRefresh: !1,
                  markers: !1,
                  onKill: (t) => {
                    n.ZP.set(t.animation._targets, { clearProps: "all" });
                  },
                });
              }
              const u = n.ZP.fromTo(t, { x: 0, y: 0 }, { x: o, y: 0 });
              i.Z.create({
                trigger: e,
                start: `${r + 1200}px bottom`,
                end: `${r + 1700}px bottom`,
                scrub: 1,
                animation: u,
                invalidateOnRefresh: !1,
                markers: !1,
                onKill: (t) => {
                  n.ZP.set(t.animation._targets, { clearProps: "all" });
                },
              });
            });
            let o =
              a.getBoundingClientRect().bottom -
              e.getBoundingClientRect().top -
              a.offsetHeight;
            const s = n.ZP.fromTo(a, { y: 0 }, { y: -o });
            i.Z.create({
              trigger: e,
              start: `${r + 1200}px bottom`,
              end: `${r + 1700}px bottom`,
              scrub: 1,
              animation: s,
              invalidateOnRefresh: !1,
              markers: !1,
              onKill: (t) => {
                n.ZP.set(t.animation._targets, { clearProps: "all" });
              },
            }),
              i.Z.create({
                trigger: e,
                start: "bottom bottom",
                end: `${r + 1700}px bottom`,
                scrub: !0,
                pin: e,
                markers: !1,
                invalidateOnRefresh: !1,
                pinSpacing: !0,
                onEnter: () => {
                  a.classList.add("active");
                },
                onLeaveBack: () => {
                  a.classList.remove("active");
                },
              }),
              i.Z.create({
                trigger: e,
                start: "top top",
                end: `${r + 1700}px top`,
                scrub: !0,
                markers: !1,
                invalidateOnRefresh: !1,
                onEnter: () => {
                  t.style.backgroundColor = "#000";
                },
                onEnterBack: () => {
                  t.style.backgroundColor = "#000";
                },
                onLeave: () => {
                  t.style.backgroundColor = "transparent";
                },
                onLeaveBack: () => {
                  t.style.backgroundColor = "transparent";
                },
              });
          }
        };
      },
      228: (t, e, r) => {
        r.d(e, { t: () => a });
        var n = r(358),
          i = r(92);
        n.ZP.registerPlugin(i.Z);
        const a = () => {
          const t = document.querySelector(".section-animation");
          if (t && window.matchMedia("(min-width: 1280px)").matches) {
            document
              .querySelector(".section-knowledge")
              .querySelector(".first-item");
            const e = document.querySelector(".fixed-arrow"),
              r = e.querySelector("svg"),
              a = document.querySelector(".fixed-arrow-path"),
              o = n.ZP.fromTo(
                e,
                { rotate: 0, left: "100%", top: "100%" },
                { rotate: "-55deg", left: "54%", top: "46%" }
              ),
              s =
                (i.Z.create({
                  trigger: t,
                  start: "500px top",
                  end: "1000px top",
                  scrub: !0,
                  animation: o,
                  markers: !1,
                  invalidateOnRefresh: !0,
                  onKill: (t) => {
                    n.ZP.set(t.animation._targets, { clearProps: "all" });
                  },
                }),
                n.ZP.fromTo(
                  e,
                  { rotate: "-55deg", x: "0", y: "0" },
                  { rotate: "-147deg", x: "-14%", y: "-88%" }
                )),
              l =
                (i.Z.create({
                  trigger: t,
                  start: "1500px top",
                  end: "2000px top",
                  scrub: !0,
                  animation: s,
                  markers: !1,
                  invalidateOnRefresh: !0,
                  onKill: (t) => {
                    n.ZP.set(t.animation._targets, { clearProps: "all" });
                  },
                }),
                n.ZP.fromTo(
                  r,
                  { x: "-47%", y: "0%", rotate: "66deg" },
                  { x: "-86%", y: "-26%", rotate: "118deg" }
                )),
              c =
                (i.Z.create({
                  trigger: t,
                  start: "1500px top",
                  end: "2000px top",
                  scrub: !0,
                  markers: !1,
                  invalidateOnRefresh: !0,
                  animation: l,
                  onUpdate: (t) => {
                    let e = t.progress.toFixed(2);
                    a.setAttribute(
                      "d",
                      `\n                        M\n                        ${
                        1424.716 - 0.717 * e
                      }\n                        ${
                        736.636 + 16.364 * e
                      }\n                        c\n                        ${
                        185.284 + 234.716 * e
                      }\n                        ${
                        172.364 - 407.079 * e
                      }\n                        ${
                        571.469 - 560.469 * e
                      }\n                        ${
                        625.927 * e - 163.927
                      }\n                        ${
                        433 + 527 * e
                      }\n                        ${
                        220.62 + 62.38 * e
                      }\n                        S\n                        2310.8 \n                        1419.269\n                        2310.8\n                        1419.269\n                        `
                    );
                  },
                  onKill: (t) => {
                    n.ZP.set(t.animation._targets, { clearProps: "all" });
                  },
                }),
                n.ZP.fromTo(
                  e,
                  {
                    left: "54%",
                    top: "46%",
                    rotate: "-147deg",
                    x: "-14%",
                    y: "-88%",
                  },
                  {
                    rotate: "-45deg",
                    left: "100%",
                    top: "100%",
                    x: "-145%",
                    y: "-160%",
                  }
                ));
            i.Z.create({
              trigger: t,
              start: "3500px bottom",
              end: "4000px bottom",
              scrub: !0,
              animation: c,
              markers: !1,
              invalidateOnRefresh: !0,
              onKill: (t) => {
                n.ZP.set(t.animation._targets, { clearProps: "all" });
              },
            }),
              i.Z.create({
                trigger: t,
                start: "3500px bottom",
                end: "4000px bottom",
                scrub: !0,
                animation: c,
                markers: !1,
                invalidateOnRefresh: !0,
                onUpdate: (t) => {
                  let e = t.progress.toFixed(2);
                  a.setAttribute(
                    "d",
                    `\n                        M\n                        1424\n                        753\n                        c\n                        420\n                        -311\n                        ${
                      11 + 606 * e
                    }\n                        ${
                      462 + 61 * e
                    }\n                        960\n                        283\n                        S\n                        2310.8\n                        1419.269\n                        2310.8\n                        1419.269\n                        `
                  );
                },
                onKill: (t) => {
                  n.ZP.set(t.animation._targets, { clearProps: "all" });
                },
              });
          }
        };
      },
      638: (t, e, r) => {
        r.d(e, { e: () => a });
        var n = r(358),
          i = r(92);
        n.ZP.registerPlugin(i.Z);
        const a = () => {
          const t = document.querySelector("body"),
            e = document.querySelector(".section-gallery-black");
          e &&
            window.matchMedia("(min-width: 1280px)").matches &&
            (e.querySelectorAll(".gallery-image").forEach((t, r) => {
              const a = t.querySelector("img"),
                o = t.offsetLeft,
                s = t.offsetTop,
                l = t.offsetWidth,
                c = o + l + 50,
                u = s + t.offsetHeight + 50;
              let p, f, d, h, g, m, v;
              switch (r) {
                case 0:
                  (p = `${c}`),
                    (f = `${u}`),
                    (d = "-50%"),
                    (h = "-85%"),
                    (g = 0),
                    (m = "400px");
                  break;
                case 1:
                  (p = `${c}`),
                    (f = `-${u}`),
                    (g = "400px"),
                    (m = "800px"),
                    (v = "-10deg"),
                    (d = "20%"),
                    (h = "-65%");
                  break;
                case 2:
                  (p = `-${c + l}`),
                    (f = `-${u}`),
                    (g = "800px"),
                    (m = "1200px"),
                    (v = "10deg"),
                    (d = "-120%"),
                    (h = "-55%");
                  break;
                case 3:
                  (p = `-${c + l}`),
                    (f = `${u}`),
                    (g = "1200px"),
                    (m = "1600px"),
                    (v = "4deg"),
                    (d = "-85%"),
                    (h = "-5%");
                  break;
                case 4:
                  (p = `${c}`),
                    (f = "0"),
                    (g = "1600px"),
                    (m = "2400px"),
                    (d = "5%"),
                    (h = "0%");
              }
              const y = n.ZP.fromTo(
                  t,
                  { x: p, y: f },
                  { x: "-50%", y: "-50%" }
                ),
                _ =
                  (i.Z.create({
                    trigger: e,
                    start: `${g} top`,
                    end: `${m} top`,
                    scrub: !0,
                    animation: y,
                    markers: !1,
                    invalidateOnRefresh: !1,
                    onEnter: () => {
                      t.style.opacity = 1;
                    },
                    onKill: (t) => {
                      n.ZP.set(t.animation._targets, { clearProps: "all" });
                    },
                  }),
                  n.ZP.fromTo(a, { rotate: 0 }, { rotate: v })),
                x =
                  (i.Z.create({
                    trigger: e,
                    start: `${g} top`,
                    end: `${m} top`,
                    scrub: !0,
                    animation: _,
                    markers: !1,
                    invalidateOnRefresh: !1,
                    onKill: (t) => {
                      n.ZP.set(t.animation._targets, { clearProps: "all" });
                    },
                  }),
                  n.ZP.fromTo(
                    t,
                    { x: "-50%", y: "-50%" },
                    { x: `${d}`, y: `${h}` }
                  )),
                b =
                  (i.Z.create({
                    trigger: e,
                    start: "2400px top",
                    end: "2900px top",
                    scrub: !0,
                    animation: x,
                    markers: !1,
                    invalidateOnRefresh: !1,
                    onKill: (t) => {
                      n.ZP.set(t.animation._targets, { clearProps: "all" });
                    },
                  }),
                  n.ZP.fromTo(a, { rotate: v }, { rotate: 0 }));
              i.Z.create({
                trigger: e,
                start: "2400px top",
                end: "2900px top",
                scrub: !0,
                animation: b,
                markers: !1,
                invalidateOnRefresh: !1,
                onKill: (t) => {
                  n.ZP.set(t.animation._targets, { clearProps: "all" });
                },
              }),
                0 === r
                  ? ((p = `${c}`), (f = `-${u}`))
                  : 1 === r
                  ? ((p = `${c}`), (f = "0"))
                  : 4 === r && ((p = `${c}`), (f = `${u}`));
              const w = n.ZP.fromTo(
                t,
                { x: `${d}`, y: `${h}` },
                { x: p, y: f }
              );
              i.Z.create({
                trigger: e,
                start: "2900px top",
                end: "3400px top",
                scrub: !0,
                animation: w,
                markers: !1,
                invalidateOnRefresh: !1,
                onKill: (t) => {
                  n.ZP.set(t.animation._targets, { clearProps: "all" });
                },
              });
            }),
            i.Z.create({
              trigger: e,
              start: "top top",
              end: "3400px top",
              scrub: !0,
              pin: e,
              markers: !1,
              invalidateOnRefresh: !1,
              onEnter: () => {
                e.classList.add("active");
              },
              onLeaveBack: () => {
                e.classList.remove("active");
              },
            })),
            e &&
              window.matchMedia("(max-width: 1279px)").matches &&
              (e.querySelectorAll(".gallery-image").forEach((t, r) => {
                const a = t.querySelector("img"),
                  o = t.offsetLeft,
                  s = t.offsetTop,
                  l = t.offsetWidth,
                  c = o + l + 50,
                  u = s + t.offsetHeight + 50;
                let p, f, d, h, g, m, v;
                switch (r) {
                  case 0:
                    (p = `${c}`), (f = `${u}`), (g = 0), (m = "400px");
                    break;
                  case 1:
                    (p = `${c}`),
                      (f = `-${u}`),
                      (g = "400px"),
                      (m = "800px"),
                      (v = "-10deg");
                    break;
                  case 2:
                    (p = `-${c + l}`),
                      (f = `-${u}`),
                      (g = "800px"),
                      (m = "1200px"),
                      (v = "10deg");
                    break;
                  case 3:
                    (p = `-${c + l}`),
                      (f = `${u}`),
                      (g = "1200px"),
                      (m = "1600px"),
                      (v = "4deg");
                    break;
                  case 4:
                    (p = `${c}`), (f = "0"), (g = "1600px"), (m = "2400px");
                }
                const y = n.ZP.fromTo(
                    t,
                    { x: p, y: f },
                    { x: "-50%", y: "-50%" }
                  ),
                  _ =
                    (i.Z.create({
                      trigger: e,
                      start: `${g} top`,
                      end: `${m} top`,
                      scrub: !0,
                      animation: y,
                      markers: !1,
                      invalidateOnRefresh: !1,
                      onEnter: () => {
                        t.style.opacity = 1;
                      },
                      onKill: (t) => {
                        n.ZP.set(t.animation._targets, { clearProps: "all" });
                      },
                    }),
                    n.ZP.fromTo(a, { rotate: 0 }, { rotate: v }));
                i.Z.create({
                  trigger: e,
                  start: `${g} top`,
                  end: `${m} top`,
                  scrub: !0,
                  animation: _,
                  markers: !1,
                  invalidateOnRefresh: !1,
                  onKill: (t) => {
                    n.ZP.set(t.animation._targets, { clearProps: "all" });
                  },
                }),
                  0 === r
                    ? ((d = `${c}`), (h = `-${u}`))
                    : 1 === r
                    ? ((d = `${c}`), (h = "0"))
                    : 2 === r
                    ? ((d = `-${c}`), (h = `-${u}`))
                    : 3 === r
                    ? ((d = `-${c}`), (h = `${u}`))
                    : 4 === r && ((d = `${c}`), (h = `${u}`));
                const x = n.ZP.fromTo(
                  t,
                  { x: "-50%", y: "-50%" },
                  { x: d, y: h }
                );
                i.Z.create({
                  trigger: e,
                  start: "2400px top",
                  end: "2900px top",
                  scrub: !0,
                  animation: x,
                  markers: !1,
                  invalidateOnRefresh: !1,
                  onKill: (t) => {
                    n.ZP.set(t.animation._targets, { clearProps: "all" });
                  },
                });
              }),
              i.Z.create({
                trigger: e,
                start: "top top",
                end: "2900px top",
                scrub: !0,
                pin: e,
                markers: !1,
                invalidateOnRefresh: !1,
                onEnter: () => {
                  e.classList.add("active");
                },
                onLeaveBack: () => {
                  e.classList.remove("active");
                },
              }),
              i.Z.create({
                trigger: e,
                start: "top top",
                end: "2900px top",
                scrub: !0,
                markers: !1,
                invalidateOnRefresh: !1,
                onEnter: () => {
                  t.style.backgroundColor = "#000";
                },
                onEnterBack: () => {
                  t.style.backgroundColor = "#000";
                },
                onLeave: () => {
                  t.style.backgroundColor = "transparent";
                },
                onLeaveBack: () => {
                  t.style.backgroundColor = "transparent";
                },
              }));
        };
      },
      511: (t, e, r) => {
        r.d(e, { L: () => a });
        var n = r(358),
          i = r(92);
        n.ZP.registerPlugin(i.Z);
        const a = () => {
          const t = document.querySelector(".section-gallery-positioned");
          t &&
            t.querySelectorAll(".gallery-image").forEach((e, r) => {
              let a;
              switch (r) {
                case 0:
                  a = -500;
                  break;
                case 1:
                case 4:
                  a = -600;
                  break;
                case 2:
                  a = -550;
                  break;
                case 3:
                  a = -700;
              }
              const o = n.ZP.fromTo(e, { y: 300 }, { y: a });
              i.Z.create({
                trigger: t,
                start: "top bottom",
                end: "bottom center",
                scrub: 0.3,
                animation: o,
                markers: !1,
                invalidateOnRefresh: !1,
                onEnter: () => {
                  e.classList.add("active");
                },
                onKill: (t) => {
                  n.ZP.set(t.animation._targets, { clearProps: "all" });
                },
              });
            });
        };
      },
      78: (t, e, r) => {
        r.d(e, { l: () => a });
        var n = r(358),
          i = r(92);
        n.ZP.registerPlugin(i.Z);
        const a = () => {
          const t = document.querySelectorAll(".gallery-layer");
          t.length &&
            t.forEach((t) => {
              let e;
              if (window.matchMedia("(max-width: 700px)").matches)
                switch (t.getAttribute("class")) {
                  case "gallery-layer layer1":
                    e = -75;
                    break;
                  case "gallery-layer layer2":
                    e = -40;
                    break;
                  case "gallery-layer layer3":
                    e = -105;
                    break;
                  case "gallery-layer layer4":
                    e = -104;
                    break;
                  case "gallery-layer layer5":
                    e = -135;
                    break;
                  case "gallery-layer layer6":
                    e = -110;
                    break;
                  case "gallery-layer layer7":
                    e = -126;
                    break;
                  case "gallery-layer layer8":
                    e = -129;
                }
              else
                switch (t.getAttribute("class")) {
                  case "gallery-layer layer1":
                    e = -150;
                    break;
                  case "gallery-layer layer2":
                    e = -200;
                    break;
                  case "gallery-layer layer3":
                    e = -205;
                    break;
                  case "gallery-layer layer4":
                    e = -145;
                    break;
                  case "gallery-layer layer5":
                    e = -255;
                    break;
                  case "gallery-layer layer6":
                    e = -305;
                    break;
                  case "gallery-layer layer7":
                    e = -365;
                    break;
                  case "gallery-layer layer8":
                    e = -295;
                }
              const r = n.ZP.fromTo(t, { y: 0 }, { y: e, ease: "ease" });
              i.Z.create({
                trigger: ".section-gallery",
                start: "top center",
                end: "bottom center",
                scrub: 0.3,
                animation: r,
                markers: !1,
                invalidateOnRefresh: !1,
                onKill: (t) => {
                  n.ZP.set(t.animation._targets, { clearProps: "all" });
                },
              });
            });
        };
      },
      889: (t, e, r) => {
        r.d(e, { h: () => a });
        var n = r(358),
          i = r(92);
        n.ZP.registerPlugin(i.Z);
        const a = () => {
          const t = document.querySelector(".last-sections");
          if (t) {
            const e = t.querySelector(".section-last"),
              r = t.querySelector(".section-prelast"),
              a = t.offsetHeight,
              o = n.ZP.fromTo(
                r.querySelector("p"),
                { y: 200, opacity: 0 },
                { y: 0, opacity: 1 }
              );
            i.Z.create({
              trigger: t,
              start: "top center",
              end: "bottom bottom",
              animation: o,
              scrub: !0,
              markers: !1,
              invalidateOnRefresh: !1,
              onKill: (t) => {
                n.ZP.set(t.animation._targets, { clearProps: "all" });
              },
            }),
              i.Z.create({
                trigger: e,
                start: "top top",
                end: `${a + 400} bottom`,
                scrub: !0,
                pin: t,
                markers: !1,
                invalidateOnRefresh: !1,
                onEnter: () => {
                  e.style.backgroundColor = "#000";
                },
                onLeave: () => {
                  t.classList.add("animated"),
                    (e.style.backgroundColor = "#fff");
                },
                onEnterBack: () => {
                  t.classList.remove("animated");
                },
                onLeaveBack: () => {
                  e.style.backgroundColor = "#000";
                },
              });
          }
        };
      },
      103: (t, e, r) => {
        r.d(e, { J: () => a });
        var n = r(358),
          i = r(92);
        n.ZP.registerPlugin(i.Z);
        const a = () => {
          const t = document.querySelector(".section-image");
          if (t) {
            const e = t.querySelector("img"),
              r = t.offsetHeight;
            let a;
            a = window.matchMedia("(pointer: coarse)").matches ? "1.1" : "1";
            const o = n.ZP.fromTo(
              t,
              { yPercent: -50, scale: "1.2" },
              { yPercent: 0, scale: a, ease: "none" }
            );
            let s;
            i.Z.create({
              trigger: ".section-design",
              start: "top bottom",
              end: `${r} bottom`,
              scrub: !0,
              animation: o,
              markers: !1,
              invalidateOnRefresh: !1,
              onKill: (t) => {
                n.ZP.set(t.animation._targets, { clearProps: "all" });
              },
            }),
              (s = window.matchMedia("(pointer: coarse)").matches
                ? n.ZP.fromTo(
                    e,
                    { opacity: 1, scale: a },
                    { scale: "1", opacity: 0, ease: "none" }
                  )
                : n.ZP.fromTo(
                    e,
                    { opacity: 1, y: 0 },
                    { y: -70, opacity: 0, ease: "none" }
                  )),
              i.Z.create({
                trigger: ".section-design",
                start: "top top",
                end: "300px botom",
                scrub: !0,
                animation: s,
                markers: !1,
                invalidateOnRefresh: !1,
                onKill: (t) => {
                  n.ZP.set(t.animation._targets, { clearProps: "all" });
                },
              }),
              i.Z.create({
                trigger: ".section-design",
                start: "top top",
                end: "600px botom",
                scrub: !0,
                pin: ".section-image",
                markers: !1,
                invalidateOnRefresh: !1,
              });
          }
        };
      },
      410: (t, e, r) => {
        r.d(e, { w: () => a });
        var n = r(358),
          i = r(92);
        n.ZP.registerPlugin(i.Z);
        const a = () => {
          const t = document.querySelector(".process-steps__arrow");
          if (t) {
            const e = t.clientHeight,
              r = document.querySelector(".process-steps-path"),
              a = document.querySelectorAll(
                ".section-process .process-steps__item"
              ),
              o = r.getTotalLength(),
              s = document.querySelectorAll(".section-process .item-wrapper"),
              l = document.querySelector(".section-process"),
              c = document.querySelector(".process-wrapper"),
              u = l.offsetHeight,
              p = l.querySelectorAll(".animated-bg div");
            let f = window.innerWidth,
              d = window.innerHeight;
            (r.style.strokeDasharray = o),
              (r.style.strokeDashoffset = o),
              i.Z.create({
                trigger: ".section-process",
                start: "bottom bottom",
                end: `${u + 400} bottom`,
                pin: ".section-process",
                scrub: !0,
                markers: !1,
              }),
              a.forEach((t) => {
                const e = n.ZP.fromTo(t, { opacity: 0 }, { opacity: 1 });
                i.Z.create({
                  trigger: t,
                  start: "center 80%",
                  end: "bottom 80%",
                  scrub: !0,
                  animation: e,
                  markers: !1,
                  invalidateOnRefresh: !1,
                  onKill: (t) => {
                    n.ZP.set(t.animation._targets, { clearProps: "all" });
                  },
                });
              }),
              i.Z.create({
                trigger: ".section-process",
                scrub: !0,
                start: "top 80%",
                end: `${e} center`,
                markers: !1,
                invalidateOnRefresh: !1,
                onUpdate: (t) => {
                  (r.style.strokeDasharray = o),
                    (r.style.strokeDashoffset = o - o * t.progress);
                },
                onLeave: (t) => {
                  document
                    .querySelector(".section-process .process-title img")
                    .classList.add("active");
                },
                onEnterBack: (t) => {
                  document
                    .querySelector(".section-process .process-title img")
                    .classList.remove("active");
                },
              });
            const h = n.ZP.fromTo(
              ".section-process .process-title span",
              { y: 100 },
              { y: 0, ease: "ease" }
            );
            s.forEach((t, e) => {
              let r, a;
              const o = n.ZP.fromTo(
                t,
                { y: 300, opacity: 0 },
                { y: 0, opacity: 1 }
              );
              c.children[0] == t && ((r = f), (a = 0)),
                c.children[1] == t && ((r = -f), (a = 0)),
                c.children[2] == t && ((r = 0), (a = 500));
              const s = n.ZP.fromTo(
                  t.children[0],
                  { y: 0, x: 0, opacity: 1 },
                  { y: a, x: r, opacity: 0 }
                ),
                l =
                  (i.Z.create({
                    trigger: t,
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: !0,
                    animation: o,
                    markers: !1,
                    invalidateOnRefresh: !1,
                    onKill: (t) => {
                      n.ZP.set(t.animation._targets, { clearProps: "all" });
                    },
                  }),
                  i.Z.create({
                    trigger: ".section-prelast",
                    start: "top bottom",
                    end: d / 2 + " center",
                    animation: s,
                    scrub: !0,
                    markers: !1,
                    onKill: (t) => {
                      n.ZP.set(t.animation._targets, { clearProps: "all" });
                    },
                  }),
                  n.ZP.fromTo(p[e], { opacity: 0 }, { opacity: 1 }));
              i.Z.create({
                trigger: t,
                start: "top bottom",
                end: "bottom bottom",
                animation: l,
                scrub: !0,
                markers: !1,
                invalidateOnRefresh: !1,
              });
            }),
              i.Z.create({
                trigger: ".section-process .process-title",
                start: "top 90%",
                end: "300px 90%",
                animation: h,
                scrub: !0,
                markers: !1,
                invalidateOnRefresh: !1,
                onKill: (t) => {
                  n.ZP.set(t.animation._targets, { clearProps: "all" });
                },
              });
          }
        };
      },
      533: (t, e, r) => {
        r.d(e, { C: () => a });
        var n = r(358),
          i = r(92);
        n.ZP.registerPlugin(i.Z);
        const a = () => {
          const t = document.querySelector(".section-animation");
          if (t && window.matchMedia("(min-width: 1280px)").matches) {
            const e = t.querySelectorAll(".animation-circle"),
              r = t.querySelector(".separator"),
              a =
                (document.querySelector(".fixed-arrow").querySelector("svg"),
                document.querySelector(".fixed-arrow-path")),
              o = a.getTotalLength();
            (a.style.strokeDasharray = o),
              (a.style.strokeDashoffset = o),
              e.forEach((e, r) => {
                e.querySelector("img") && e.querySelector("img").remove();
                const a = e.querySelector(".circle-elem").querySelector("svg"),
                  o = e.offsetLeft,
                  s = e.offsetTop,
                  l = e.offsetWidth,
                  c = e.offsetWidth,
                  u = a.querySelector(".circle-path"),
                  p = o + l + 50,
                  f = s + c + 50;
                let d, h, g, m;
                switch (r) {
                  case 0:
                    (d = `-${p}`), (h = `-${f}`), (g = "0px"), (m = "0px");
                    break;
                  case 1:
                    (d = `${p}`), (h = `-${f}`), (g = "0px"), (m = "0px");
                    break;
                  case 2:
                    (d = "0px"), (h = `${f}`), (g = "0px"), (m = "0px");
                }
                const v = n.ZP.fromTo(e, { x: d, y: h }, { x: g, y: m }),
                  y =
                    (i.Z.create({
                      trigger: t,
                      start: "1000px top",
                      end: "1500px top",
                      scrub: !0,
                      animation: v,
                      markers: !1,
                      invalidateOnRefresh: !1,
                      onEnter: () => {
                        e.style.opacity = 1;
                      },
                      onKill: (t) => {
                        n.ZP.set(t.animation._targets, { clearProps: "all" });
                      },
                    }),
                    i.Z.create({
                      trigger: t,
                      start: "1500px top",
                      end: "2000px top",
                      scrub: !0,
                      markers: !1,
                      invalidateOnRefresh: !1,
                      onUpdate: (t) => {
                        t.progress.toFixed(2),
                          0 === r &&
                            u.setAttribute(
                              "d",
                              `\n                        M224,\n                        0C${
                                347.712 - 182.512 * t.progress
                              },\n                        ${
                                0 + 291.662 * t.progress
                              },\n                        448,\n                        100.288,\n                        448,\n                        224S347.712,\n                        448,\n                        224,\n                        448,\n                        0,\n                        347.712,\n                        0,\n                        224,\n                        ${
                                100.288 + 182.512 * t.progress
                              },\n                        ${
                                0 - 291.662 * t.progress
                              },\n                        224,\n                        0Z`
                            ),
                          1 === r &&
                            u.setAttribute(
                              "d",
                              `\n                        M\n                        219\n                        0\n                        C\n                        339.95\n                        0\n                        438\n                        98.05\n                        ${
                                438 - 5 * t.progress
                              }\n                        ${
                                219 - 30 * t.progress
                              }\n                        S\n                        ${
                                339 - 165 * t.progress
                              }\n                        ${
                                439 - 326 * t.progress
                              }\n                        ${
                                219 + 40 * t.progress
                              }\n                        ${
                                438 - 44 * t.progress
                              }\n                        S\n                        0\n                        339.95\n                        0\n                        219\n                        S\n                        98.05\n                        0\n                        219\n                        0 \n                        Z\n                        `
                            ),
                          2 === r &&
                            u.setAttribute(
                              "d",
                              `\n                        M\n                        110\n                        0\n                        c\n                        60.751\n                        0\n                        ${
                                112 - 180.715 * t.progress
                              }\n                        ${
                                55 - 11.365 * t.progress
                              }\n                        ${
                                110 + 1 * t.progress
                              }\n                        110\n                        S\n                        170.751\n                        220\n                        110\n                        220\n                        A\n                        110\n                        110\n                        0\n                        0\n                        1\n                        110\n                        0\n                        Z\n                        `
                            );
                      },
                    }),
                    n.ZP.fromTo(e, { y: 0 }, { y: "-900px" }));
                i.Z.create({
                  trigger: t,
                  start: "3500px bottom",
                  end: `${3500 + window.innerHeight} top`,
                  scrub: !0,
                  animation: y,
                  markers: !1,
                  invalidateOnRefresh: !1,
                  onKill: (t) => {
                    n.ZP.set(t.animation._targets, { clearProps: "all" });
                  },
                });
              });
            const s = n.ZP.fromTo(a, { opacity: 0 }, { opacity: 1 });
            i.Z.create({
              trigger: t,
              start: "1000px top",
              end: "1500px top",
              scrub: !0,
              animation: s,
              markers: !1,
              invalidateOnRefresh: !1,
              onUpdate: (t) => {
                (a.style.strokeDasharray = o),
                  (a.style.strokeDashoffset = o - o * t.progress);
              },
              onKill: (t) => {
                n.ZP.set(t.animation._targets, { clearProps: "all" });
              },
            }),
              i.Z.create({
                trigger: t,
                start: "top top",
                end: "500px top",
                scrub: !0,
                markers: !1,
                invalidateOnRefresh: !1,
                onUpdate: (t) => {
                  let e = t.progress.toFixed(2);
                  r.style.width = `calc(100% - ${100 * e}%)`;
                },
              }),
              i.Z.create({
                trigger: t,
                start: "top top",
                end: "3500px bottom",
                scrub: !0,
                pin: t,
                markers: !1,
                invalidateOnRefresh: !0,
                onEnter: () => {
                  t.closest(".pin-spacer").classList.add("active");
                },
                onEnterBack: () => {
                  t.closest(".pin-spacer").classList.add("active");
                },
                onLeave: () => {
                  t.closest(".pin-spacer").classList.remove("active");
                },
                onLeaveBack: () => {
                  t.closest(".pin-spacer").classList.remove("active");
                },
              });
          }
          if (t && window.matchMedia("(max-width: 1279px)").matches) {
            const e = t.querySelectorAll(".animation-circle"),
              r = t.querySelector(".separator"),
              a =
                (document.querySelector(".fixed-arrow").querySelector("svg"),
                document.querySelector(".fixed-arrow-path")),
              o = a.getTotalLength();
            (a.style.strokeDasharray = o),
              (a.style.strokeDashoffset = o),
              e.forEach((e, r) => {
                const a = e.querySelector(".circle-elem").querySelector("svg");
                a && a.remove();
                const o = e.offsetLeft,
                  s = e.offsetTop,
                  l = o + e.offsetWidth + 50,
                  c = s + e.offsetWidth + 50;
                let u, p, f, d;
                switch (r) {
                  case 0:
                    (u = `-${l}`), (p = "0"), (f = "0px"), (d = "0px");
                    break;
                  case 1:
                    (u = `${l}`), (p = `-${c}`), (f = "0px"), (d = "0px");
                    break;
                  case 2:
                    (u = `${l}`), (p = 0), (f = "0px"), (d = "0px");
                }
                const h = n.ZP.fromTo(e, { x: u, y: p }, { x: f, y: d }),
                  g =
                    (i.Z.create({
                      trigger: t,
                      start: "500px top",
                      end: "1000px top",
                      scrub: !0,
                      animation: h,
                      markers: !1,
                      invalidateOnRefresh: !1,
                      onEnter: () => {
                        e.style.opacity = 1;
                      },
                      onKill: (t) => {
                        n.ZP.set(t.animation._targets, { clearProps: "all" });
                      },
                    }),
                    n.ZP.fromTo(e, { y: 0 }, { y: "-100px" })),
                  m =
                    (i.Z.create({
                      trigger: t,
                      start: "1000px top",
                      end: "1800px top",
                      scrub: !0,
                      markers: !1,
                      invalidateOnRefresh: !1,
                      animation: g,
                      onKill: (t) => {
                        n.ZP.set(t.animation._targets, { clearProps: "all" });
                      },
                    }),
                    n.ZP.fromTo(e, { y: "-100px" }, { y: "-300px" }));
                i.Z.create({
                  trigger: t,
                  start: "1800px top",
                  end: `${1800 + window.innerHeight} top`,
                  scrub: !0,
                  animation: m,
                  markers: !1,
                  invalidateOnRefresh: !1,
                  onKill: (t) => {
                    n.ZP.set(t.animation._targets, { clearProps: "all" });
                  },
                });
              });
            const s = n.ZP.fromTo(r, { width: "100%" }, { width: "0%" });
            i.Z.create({
              trigger: t,
              start: "top top",
              end: "500px top",
              scrub: !0,
              markers: !1,
              animation: s,
              invalidateOnRefresh: !1,
              onKill: (t) => {
                n.ZP.set(t.animation._targets, { clearProps: "all" });
              },
            }),
              i.Z.create({
                trigger: t,
                start: "top top",
                end: "1800px top",
                scrub: !0,
                pin: t,
                markers: !1,
                invalidateOnRefresh: !1,
                onEnter: () => {
                  t.closest(".pin-spacer").classList.add("active");
                },
                onEnterBack: () => {
                  t.closest(".pin-spacer").classList.add("active");
                },
                onLeave: () => {
                  t.closest(".pin-spacer").classList.remove("active");
                },
                onLeaveBack: () => {
                  t.closest(".pin-spacer").classList.remove("active");
                },
              });
          }
        };
      },
      424: (t, e, r) => {
        r.d(e, { Z: () => a });
        var n = r(358),
          i = r(92);
        n.ZP.registerPlugin(i.Z);
        const a = () => {
          const t = document.querySelector(".section-knowledge");
          if (t) {
            const e = document.querySelector(".section-logo"),
              r = document.querySelector(".section-separator"),
              a = t.querySelector(".text-wrapper"),
              o = a.querySelectorAll("p"),
              s = document.querySelector(".fixed-arrow"),
              l = t.querySelector(".text-arrow"),
              c = s.querySelector("svg"),
              u = l.querySelector("svg"),
              p = document.querySelector(".fixed-arrow-path"),
              f = document.querySelector(".fixed-text-arrow-path");
            let d,
              h,
              g = window.innerWidth;
            const m = f.getTotalLength();
            (f.style.strokeDasharray = m),
              o.length &&
                o.forEach((e, r) => {
                  const o = e.querySelector("span");
                  let g, v, y, _, x, b, w, k;
                  switch (r) {
                    case 0:
                      (g = "top"), (v = "300px");
                      break;
                    case 1:
                      (g = "300px"),
                        (v = "600px"),
                        (y = "-16.5%"),
                        (_ = "0%"),
                        (x = "95deg"),
                        (b = "98deg"),
                        (w = "-155%"),
                        (k = "-157%");
                      break;
                    case 2:
                      (g = "600px"),
                        (v = "900px"),
                        (y = "0%"),
                        (_ = "17%"),
                        (x = "98deg"),
                        (b = "95deg"),
                        (w = "-157%"),
                        (k = "-165%");
                      break;
                    case 3:
                      (g = "900px"),
                        (v = "1200px"),
                        (y = "17%"),
                        (_ = "34%"),
                        (x = "95deg"),
                        (b = "98deg"),
                        (w = "-165%"),
                        (k = "-157%");
                      break;
                    case 4:
                      (g = "1200px"),
                        (v = "1500px"),
                        (y = "34%"),
                        (_ = "68%"),
                        (x = "98deg"),
                        (b = "60deg"),
                        (w = "-165%"),
                        (k = "-157%");
                      break;
                    case 5:
                      (g = "1500px"),
                        (v = "1800px"),
                        (y = "68%"),
                        (_ = "68%"),
                        (x = "60deg"),
                        (b = "95deg"),
                        (w = "-157%"),
                        (k = "-130%");
                  }
                  const T = n.ZP.fromTo(
                    o,
                    { y: "50vh", opacity: 0 },
                    { y: 0, opacity: 1 }
                  );
                  if (
                    ((h = i.Z.create({
                      trigger: a,
                      start: `${g} bottom`,
                      end: `${v} bottom`,
                      scrub: !0,
                      animation: T,
                      markers: !1,
                      invalidateOnRefresh: !1,
                      onEnter: () => {
                        1 === r &&
                          (t.classList.add("start-arrow"),
                          document
                            .querySelector(".fixed-arrow")
                            .classList.add("hidden"));
                      },
                      onLeaveBack: () => {
                        1 === r &&
                          (t.classList.remove("start-arrow"),
                          document
                            .querySelector(".fixed-arrow")
                            .classList.remove("hidden"));
                      },
                    })),
                    5 === r && (d = h.end - t.offsetTop),
                    window.matchMedia("(min-width: 1280px)").matches)
                  ) {
                    if (0 === r) {
                      const t = n.ZP.fromTo(
                          c,
                          { x: "-86%", y: "-26%", rotate: "118deg" },
                          { x: "-15%", y: "-17%", rotate: "17deg" }
                        ),
                        e =
                          (i.Z.create({
                            trigger: a,
                            start: `${g} bottom`,
                            end: "100px bottom",
                            scrub: !0,
                            animation: t,
                            markers: !1,
                            invalidateOnRefresh: !0,
                            onUpdate: (t) => {
                              let e = t.progress.toFixed(2);
                              p.setAttribute(
                                "d",
                                `\n                                M\n                                ${
                                  1424 + 176 * e
                                }\n                                753\n                                c\n                                ${
                                  420 - 360 * e
                                }\n                                ${
                                  281 * e - 311
                                }\n                                617\n                                323\n                                960\n                                283\n                                S\n                                2310.8\n                                1419.269\n                                2310.8\n                                1419.269\n                                `
                              );
                            },
                          }),
                          n.ZP.fromTo(
                            c,
                            { x: "-15%", y: "-17%", rotate: "17deg" },
                            { x: "1%", y: "-34%", rotate: "-33deg" }
                          ));
                      i.Z.create({
                        trigger: a,
                        start: "100px bottom",
                        end: `${v} bottom`,
                        scrub: !0,
                        animation: e,
                        markers: !1,
                        invalidateOnRefresh: !0,
                        onUpdate: (t) => {
                          let e = t.progress.toFixed(2);
                          p.setAttribute(
                            "d",
                            `\n                                M\n                                ${
                              1600 + 174 * e
                            }\n                                753\n                                c\n                                ${
                              60 - 501 * e
                            }\n                                ${
                              390 * e - 30
                            }\n                                617\n                                323\n                                960\n                                283\n                                S\n                                2310.8\n                                1419.269\n                                2310.8\n                                1419.269\n                                `
                          ),
                            f.setAttribute(
                              "d",
                              `\n                                M\n                                1424\n                                753\n                                c\n                                ${
                                60 - 501 * e
                              }\n                                ${
                                390 * e - 30
                              }\n                                617\n                                323\n                                960\n                                283\n                                S\n                                2310.8\n                                1419.269\n                                2310.8\n                                1419.269\n                                `
                            );
                        },
                      });
                    }
                    if (1 === r) {
                      const t = n.ZP.fromTo(
                        u,
                        { x: "15.5%", y: "-53%", rotate: "-33deg" },
                        { x: "12%", y: "-46%", rotate: "-21deg" }
                      );
                      i.Z.create({
                        trigger: a,
                        start: `${g} bottom`,
                        end: `${v} bottom`,
                        scrub: !0,
                        animation: t,
                        markers: !1,
                        invalidateOnRefresh: !0,
                      });
                    }
                    if (2 === r) {
                      const t = n.ZP.fromTo(
                        u,
                        { x: "12%", y: "-46%", rotate: "-21deg" },
                        { x: "15.5%", y: "-53%", rotate: "-33deg" }
                      );
                      i.Z.create({
                        trigger: a,
                        start: `${g} bottom`,
                        end: `${v} bottom`,
                        scrub: !0,
                        animation: t,
                        markers: !1,
                        invalidateOnRefresh: !0,
                      });
                    }
                    if (3 === r) {
                      const t = n.ZP.fromTo(
                        u,
                        { x: "15.5%", y: "-53%", rotate: "-33deg" },
                        { x: "12%", y: "-46%", rotate: "-21deg" }
                      );
                      i.Z.create({
                        trigger: a,
                        start: `${g} bottom`,
                        end: `${v} bottom`,
                        scrub: !0,
                        animation: t,
                        markers: !1,
                        invalidateOnRefresh: !0,
                      });
                    }
                    if (4 === r) {
                      const t = n.ZP.fromTo(
                        u,
                        { x: "12%", y: "-46%", rotate: "-21deg" },
                        { x: "9%", y: "-37%", rotate: "-21deg" }
                      );
                      i.Z.create({
                        trigger: a,
                        start: `${g} bottom`,
                        end: `${v} bottom`,
                        scrub: !0,
                        animation: t,
                        markers: !1,
                        invalidateOnRefresh: !0,
                        onUpdate: (t) => {
                          let e = t.progress.toFixed(2);
                          f.setAttribute(
                            "d",
                            `\n                                M\n                                1424\n                                753\n                                c\n                                ${
                              452 * e - 441
                            }\n                                ${
                              360 + 33 * e
                            }\n                                ${
                              617 - 88 * e
                            }\n                                ${
                              323 + 33 * e
                            }\n                                960\n                                283\n                                S\n                                2310.8\n                                1419.269\n                                2310.8\n                                1419.269\n                                `
                          );
                        },
                      });
                    }
                    if (
                      (5 === r &&
                        i.Z.create({
                          trigger: a,
                          start: `${g} bottom`,
                          end: `${v} bottom`,
                          scrub: !0,
                          markers: !1,
                          invalidateOnRefresh: !0,
                          onUpdate: (t) => {
                            let e = t.progress.toFixed(2);
                            (f.style.strokeDashoffset = 0 + m * e),
                              (f.style.opacity = 1 == e ? "0" : "1");
                          },
                        }),
                      0 === r)
                    ) {
                      let t;
                      t = window.matchMedia("(max-height: 899px)").matches
                        ? "-163%"
                        : "-143%";
                      const e = n.ZP.fromTo(
                        s,
                        {
                          rotate: "-45deg",
                          left: "100%",
                          x: "-145%",
                          y: "-160%",
                        },
                        { rotate: "95deg", left: "50%", x: "-155%", y: t }
                      );
                      i.Z.create({
                        trigger: a,
                        start: `${g} bottom`,
                        end: `${v} bottom`,
                        scrub: !0,
                        animation: e,
                        markers: !1,
                        invalidateOnRefresh: !0,
                      });
                    } else {
                      const t = n.ZP.fromTo(
                        l,
                        { top: y, rotate: x, x: w },
                        { top: _, rotate: b, x: k }
                      );
                      i.Z.create({
                        trigger: a,
                        start: `${g} bottom`,
                        end: `${v} bottom`,
                        scrub: !0,
                        animation: t,
                        markers: !1,
                        invalidateOnRefresh: !0,
                      });
                    }
                  }
                });
            const v = n.ZP.fromTo(r, { width: 0 }, { width: "100%" });
            if (
              (i.Z.create({
                trigger: t,
                start: `${d} top`,
                end: "1600px top",
                scrub: !0,
                animation: v,
                markers: !1,
                invalidateOnRefresh: !1,
                onLeave: () => {
                  e.classList.add("start-animation");
                },
                onEnterBack: () => {
                  e.classList.remove("start-animation");
                },
              }),
              window.matchMedia("(min-width: 1280px)").matches)
            ) {
              let e;
              e = window.matchMedia("(max-height: 899px)").matches
                ? "85px"
                : "67px";
              const r = n.ZP.fromTo(
                l,
                {
                  width: "330px",
                  x: "-130%",
                  y: "0%",
                  top: "68%",
                  rotate: "95deg",
                },
                { x: "-50%", y: "-289%", top: "50%", width: e, rotate: "0deg" }
              );
              i.Z.create({
                trigger: t,
                start: `${d} top`,
                end: "1600px top",
                scrub: !0,
                animation: r,
                markers: !1,
                invalidateOnRefresh: !1,
                onLeave: () => {
                  t.classList.add("ended");
                },
                onEnterBack: () => {
                  t.classList.remove("ended");
                },
              });
            }
            const y = n.ZP.fromTo(
              e.querySelector("p"),
              { y: "50vh" },
              { y: "0" }
            );
            i.Z.create({
              trigger: t,
              start: `${d + 300} top`,
              end: "1600px top",
              scrub: !0,
              animation: y,
              markers: !1,
              invalidateOnRefresh: !1,
              onEnter: () => {
                e.classList.add("active");
              },
              onLeaveBack: () => {
                e.classList.remove("active");
              },
            }),
              o.forEach((e, r) => {
                e.querySelector("span");
                const a = e.offsetWidth;
                let o;
                switch (r) {
                  case 0:
                  case 2:
                  case 4:
                    o = -g / 2 - a;
                    break;
                  case 1:
                  case 3:
                  case 5:
                    o = g / 2 + a;
                }
                const s = n.ZP.fromTo(e, { x: 0 }, { x: o });
                i.Z.create({
                  trigger: t,
                  start: `${d} top`,
                  end: "1600px top",
                  scrub: !0,
                  animation: s,
                  markers: !1,
                  invalidateOnRefresh: !1,
                });
              }),
              i.Z.create({
                trigger: t,
                start: "top top",
                end: "1600px top",
                scrub: !0,
                pin: t,
                markers: !1,
                invalidateOnRefresh: !1,
              });
          }
        };
      },
      588: (t, e, r) => {
        r.d(e, { n: () => a });
        var n = r(358),
          i = r(92);
        n.ZP.registerPlugin(i.Z);
        const a = () => {
          const t = document.querySelector(".section-logo"),
            e = document.querySelector("footer");
          if (t) {
            let r;
            t.offsetHeight,
              (r = window.matchMedia("(min-width: 1280px)").matches
                ? "-200px"
                : "top");
            const a = n.ZP.fromTo(
              t.querySelector(".separator"),
              { opacity: 0 },
              { opacity: 1 }
            );
            i.Z.create({
              trigger: e,
              start: `${r} bottom`,
              end: "bottom bottom",
              scrub: !0,
              animation: a,
              markers: !1,
              invalidateOnRefresh: !1,
              onLeave: () => {
                t.classList.add("animated");
              },
              onEnterBack: () => {
                t.classList.remove("animated");
              },
            });
          }
        };
      },
      98: (t, e, r) => {
        r.d(e, { p: () => a });
        var n = r(358),
          i = r(92);
        n.ZP.registerPlugin(i.Z);
        const a = () => {
          const t = document.querySelector(".section-purpose");
          if (t) {
            const e = document.querySelector(".section-about"),
              r = e.offsetHeight,
              a = t.querySelector("img"),
              o = t.querySelector("p"),
              s = o.offsetTop,
              l = window.innerHeight,
              c = n.ZP.fromTo(e, { y: 0 }, { y: -r }),
              u =
                (i.Z.create({
                  trigger: t,
                  start: "top top",
                  end: "500px top",
                  scrub: !0,
                  animation: c,
                  markers: !1,
                  invalidateOnRefresh: !1,
                  onKill: (t) => {
                    n.ZP.set(t.animation._targets, { clearProps: "all" });
                  },
                }),
                n.ZP.fromTo(
                  a,
                  { scale: 0.2, rotate: "-145deg", opacity: 0 },
                  { scale: 1, rotate: "0", opacity: 1 }
                )),
              p =
                (i.Z.create({
                  trigger: t,
                  start: "top top",
                  end: "500px top",
                  scrub: !0,
                  animation: u,
                  markers: !1,
                  invalidateOnRefresh: !1,
                  onKill: (t) => {
                    n.ZP.set(t.animation._targets, { clearProps: "all" });
                  },
                }),
                n.ZP.fromTo(o, { y: l - s }, { y: 0 }));
            i.Z.create({
              trigger: t,
              start: "250px top",
              end: "500px top",
              scrub: !0,
              animation: p,
              markers: !1,
              invalidateOnRefresh: !1,
              onEnter: () => {
                o.classList.add("visible");
              },
              onKill: (t) => {
                n.ZP.set(t.animation._targets, { clearProps: "all" });
              },
            }),
              i.Z.create({
                trigger: t,
                start: "top top",
                end: `${l + 500}px top`,
                scrub: !0,
                pin: t,
                pinSpacing: !1,
                markers: !1,
                invalidateOnRefresh: !1,
              });
          }
        };
      },
      507: (t, e, r) => {
        r.d(e, { E: () => a });
        var n = r(358),
          i = r(92);
        n.ZP.registerPlugin(i.Z);
        const a = () => {
          const t = document.querySelector("body"),
            e = document.querySelector(".section-team");
          if (e) {
            const r = e.querySelectorAll(".team-envelope");
            let a, o, s, l, c, u;
            e.querySelector(".wrapper"),
              document.querySelector(".section-info"),
              window.innerHeight,
              r.forEach((t, r) => {
                switch (r) {
                  case 0:
                    (a = 0),
                      (o = "250px"),
                      (s = "500px"),
                      (l = "750px"),
                      (c = "1000px"),
                      (u = "1250px");
                    break;
                  case 1:
                    (a = "500px"),
                      (o = "750px"),
                      (s = "1000px"),
                      (l = "1250px");
                    break;
                  case 2:
                    (a = "1000"), (o = "1250px");
                }
                const p = n.ZP.fromTo(
                  t,
                  { left: 0, top: "30%", x: "-100%", y: "-50%" },
                  { left: "50%", top: "50%", x: "-50%", y: "-50%" }
                );
                if (
                  (i.Z.create({
                    trigger: e,
                    start: `${a} top`,
                    end: `${o} top`,
                    scrub: !0,
                    animation: p,
                    markers: !1,
                    invalidateOnRefresh: !0,
                    onEnter: () => {
                      t.classList.add("visible");
                    },
                  }),
                  2 !== r)
                ) {
                  const r = n.ZP.fromTo(
                    t,
                    { left: "50%", top: "50%", y: "-50%", opacity: 1 },
                    { left: "35%", top: "90%", y: "-50%", opacity: 0.5 }
                  );
                  i.Z.create({
                    trigger: e,
                    start: `${s} top`,
                    end: `${l} top`,
                    scrub: !0,
                    animation: r,
                    markers: !1,
                    invalidateOnRefresh: !0,
                  });
                }
                if (0 === r) {
                  const r = n.ZP.fromTo(
                    t,
                    { left: "35%", top: "90%", y: "-50%" },
                    { left: "25%", top: "100%", y: "0%" }
                  );
                  i.Z.create({
                    trigger: e,
                    start: `${c} top`,
                    end: `${u} top`,
                    scrub: !0,
                    animation: r,
                    markers: !1,
                    invalidateOnRefresh: !0,
                  });
                }
              }),
              i.Z.create({
                trigger: e,
                start: "top top",
                end: "2000px top",
                scrub: !0,
                pin: e,
                markers: !1,
                invalidateOnRefresh: !0,
              }),
              i.Z.create({
                trigger: e,
                start: "top center",
                end: "2000px top",
                scrub: !0,
                markers: !1,
                invalidateOnRefresh: !1,
                onEnter: () => {
                  t.style.backgroundColor = "#000";
                },
                onEnterBack: () => {
                  t.style.backgroundColor = "#000";
                },
                onLeave: () => {
                  t.style.backgroundColor = "transparent";
                },
                onLeaveBack: () => {
                  t.style.backgroundColor = "transparent";
                },
              });
          }
        };
      },
      566: (t, e, r) => {
        r.d(e, { h: () => a });
        var n = r(358),
          i = r(92);
        n.ZP.registerPlugin(i.Z);
        const a = () => {
          const t = document.querySelector(".section-ux-gallery");
          if (t && window.matchMedia("(min-width: 1025px)").matches) {
            const e = t.querySelector(".container"),
              r = t.querySelector(" p"),
              a = r.offsetHeight,
              o = t.querySelector("span"),
              s = t.querySelector(".image-wrapper"),
              l = t.querySelector(".curve"),
              c = t.querySelector(".gallery-image-wrapper"),
              u = c.querySelectorAll(".gallery-image"),
              p = c.querySelectorAll(".animate"),
              f = document.querySelector(".curve-path"),
              d = f.getTotalLength();
            (f.style.strokeDasharray = d), (f.style.strokeDashoffset = 455);
            let h = e.offsetHeight,
              g = window.innerWidth / 2 + 400,
              m = window.innerHeight / 2 + 400;
            const v = n.ZP.fromTo(r, { y: 0 }, { y: "" + (-200 - a) }),
              y =
                (i.Z.create({
                  trigger: t,
                  start: "top top",
                  end: "1000px top",
                  scrub: !0,
                  animation: v,
                  markers: !1,
                  invalidateOnRefresh: !0,
                  onKill: (t) => {
                    n.ZP.set(t.animation._targets, { clearProps: "all" });
                  },
                }),
                n.ZP.fromTo(o, { y: 200 }, { y: -200 }));
            let _, x, b;
            i.Z.create({
              trigger: t,
              start: "top top",
              end: "1000px top",
              scrub: !0,
              animation: y,
              markers: !1,
              invalidateOnRefresh: !0,
              onKill: (t) => {
                n.ZP.set(t.animation._targets, { clearProps: "all" });
              },
            }),
              window.matchMedia("(min-height: 1200px)").matches &&
              window.matchMedia("(min-width: 1025px)").matches
                ? ((_ = 34), (x = 350), (b = 50))
                : window.matchMedia("(max-height: 1199px)").matches &&
                  window.matchMedia("(min-width: 1025px)").matches &&
                  ((_ = 50), (x = 0), (b = -150));
            const w = n.ZP.fromTo(
                s,
                { yPercent: _, xPercent: -50, x: 0, y: 0, z: 1 },
                {
                  y: "" + (h - x),
                  x: "" + (-s.offsetLeft - b),
                  yPercent: 0,
                  xPercent: 0,
                  z: 1,
                }
              ),
              k =
                (i.Z.create({
                  trigger: t,
                  start: "top top",
                  end: "1000px top",
                  scrub: !0,
                  animation: w,
                  markers: !1,
                  invalidateOnRefresh: !0,
                  onKill: (t) => {
                    n.ZP.set(t.animation._targets, { clearProps: "all" });
                  },
                }),
                n.ZP.fromTo(
                  s,
                  { x: "" + (-s.offsetLeft - b) },
                  { x: "" + (s.offsetLeft / 2 - 50) }
                )),
              T =
                (i.Z.create({
                  trigger: t,
                  start: "1500px top",
                  end: "2000px top",
                  scrub: !0,
                  animation: k,
                  markers: !1,
                  invalidateOnRefresh: !0,
                  onKill: (t) => {
                    n.ZP.set(t.animation._targets, { clearProps: "all" });
                  },
                }),
                n.ZP.fromTo(
                  s.querySelector(".image"),
                  { rotate: 0, y: 0 },
                  { rotate: "-180deg", y: 125 }
                )),
              P =
                (i.Z.create({
                  trigger: t,
                  start: "1500px top",
                  end: "2000px top",
                  scrub: !0,
                  animation: T,
                  markers: !1,
                  invalidateOnRefresh: !0,
                  onKill: (t) => {
                    n.ZP.set(t.animation._targets, { clearProps: "all" });
                  },
                }),
                n.ZP.fromTo(
                  s.querySelector("img"),
                  { height: 543, rotate: "0deg" },
                  { height: 350, rotate: "120deg" }
                )),
              Z =
                (i.Z.create({
                  trigger: t,
                  start: "top top",
                  end: "1000px top",
                  scrub: !0,
                  animation: P,
                  markers: !1,
                  invalidateOnRefresh: !0,
                  onKill: (t) => {
                    n.ZP.set(t.animation._targets, { clearProps: "all" });
                  },
                }),
                n.ZP.fromTo(
                  l,
                  { y: "34%", x: "27%" },
                  { y: "10%", x: "-79%" }
                )),
              O =
                (i.Z.create({
                  trigger: t,
                  start: "top top",
                  end: "1000px top",
                  scrub: !0,
                  animation: Z,
                  markers: !1,
                  invalidateOnRefresh: !0,
                  onUpdate: (t) => {
                    (f.style.strokeDasharray = d),
                      (f.style.strokeDashoffset = 450 - d * (2 * t.progress)),
                      (0 === f.style.strokeDashoffset ||
                        f.style.strokeDashoffset < 0) &&
                        (f.style.strokeDashoffset = 0);
                  },
                  onKill: (t) => {
                    n.ZP.set(t.animation._targets, { clearProps: "all" });
                  },
                }),
                n.ZP.fromTo(c, { y: e.offsetHeight - c.offsetTop }, { y: 0 })),
              S =
                (i.Z.create({
                  trigger: t,
                  start: "top top",
                  end: "1000px top",
                  scrub: !0,
                  animation: O,
                  markers: !1,
                  invalidateOnRefresh: !0,
                  onEnter: () => {
                    c.classList.add("active");
                  },
                  onLeaveBack: () => {
                    c.classList.remove("active");
                  },
                  onKill: (t) => {
                    n.ZP.set(t.animation._targets, { clearProps: "all" });
                  },
                }),
                n.ZP.fromTo(l, { x: "-79%" }, { x: "79%" }));
            i.Z.create({
              trigger: t,
              start: "1500px top",
              end: "2000px top",
              scrub: !0,
              animation: S,
              markers: !1,
              invalidateOnRefresh: !0,
              onKill: (t) => {
                n.ZP.set(t.animation._targets, { clearProps: "all" });
              },
            }),
              p.forEach((e, r) => {
                let a, o, l, c, u, h, g, m, v, y, _, x, b, w, k;
                const T = p[r + 1];
                switch (
                  (0 === r
                    ? ((u = "120deg"),
                      (h = "60deg"),
                      (g = 0),
                      (m = 0),
                      (v = -14),
                      (y = -222),
                      (_ = [
                        "M",
                        -125,
                        -111.763,
                        "C",
                        -492.235,
                        -179,
                        12.13,
                        301.5,
                        -377.55,
                        428.7,
                      ]),
                      (x = [
                        "M",
                        -85,
                        -108,
                        "C",
                        -495,
                        9,
                        12.13,
                        301.5,
                        -377.55,
                        428.7,
                      ]))
                    : ((u = "60deg"),
                      (h = "120deg"),
                      (g = -14),
                      (m = -222),
                      (v = 0),
                      (y = 0),
                      (_ = [
                        "M",
                        -379,
                        -111,
                        "C",
                        -6,
                        -183,
                        -529,
                        316,
                        -128,
                        427,
                      ]),
                      (x = [
                        "M",
                        -379,
                        -108,
                        "C",
                        -10,
                        -32,
                        -417,
                        370,
                        -84,
                        431,
                      ])),
                  e.getAttribute("class"))
                ) {
                  case "gallery-image image-2 animate":
                    (a = 1e3),
                      (o = 1500),
                      (l = 1500),
                      (c = 2e3),
                      (k = -50),
                      (b = -35),
                      (w = 57);
                    break;
                  case "gallery-image image-3 animate":
                    (a = 2e3),
                      (o = 2500),
                      (l = 2500),
                      (c = 3e3),
                      (k = 50),
                      (b = -57),
                      (w = 57);
                    break;
                  case "gallery-image image-4 animate":
                    (a = 3e3),
                      (o = 3500),
                      (l = 3500),
                      (c = 4e3),
                      (k = 0),
                      (b = -3),
                      (w = 56);
                    break;
                  case "gallery-image image-5 animate":
                    (a = 4e3),
                      (o = 4500),
                      (l = 4500),
                      (c = 5e3),
                      (k = -35),
                      (b = 3),
                      (w = 26);
                    break;
                  case "gallery-image image-6 animate":
                    (a = 5e3),
                      (o = 5500),
                      (l = 5500),
                      (c = 6e3),
                      (k = 35),
                      (b = 0),
                      (w = -1);
                }
                const P = n.ZP.fromTo(
                  e,
                  { y: 470, x: 0, left: 0 },
                  { y: w, x: b, left: k }
                );
                if (
                  (i.Z.create({
                    trigger: t,
                    start: `${a}px top`,
                    end: `${o}px top`,
                    scrub: !0,
                    animation: P,
                    onKill: (t) => {
                      n.ZP.set(t.animation._targets, { clearProps: "all" });
                    },
                    markers: !1,
                    invalidateOnRefresh: !0,
                  }),
                  T)
                ) {
                  const e = n.ZP.fromTo(T, { y: 850 }, { y: 470 });
                  i.Z.create({
                    trigger: t,
                    start: `${a + 300}px top`,
                    end: `${o}px top`,
                    scrub: !0,
                    animation: e,
                    markers: !1,
                    invalidateOnRefresh: !0,
                    onKill: (t) => {
                      n.ZP.set(t.animation._targets, { clearProps: "all" });
                    },
                  });
                }
                const Z = n.ZP.fromTo(
                  s.querySelector("img"),
                  { rotate: u, x: g, y: m },
                  { rotate: h, x: v, y }
                );
                if (
                  (i.Z.create({
                    trigger: t,
                    start: `${a} top`,
                    end: `${o}px top`,
                    scrub: !0,
                    animation: Z,
                    markers: !1,
                    invalidateOnRefresh: !0,
                    onKill: (t) => {
                      n.ZP.set(t.animation._targets, { clearProps: "all" });
                    },
                  }),
                  0 === r &&
                    ((u = "60deg"),
                    (h = "60deg"),
                    (g = -14),
                    (m = -222),
                    (v = -14),
                    (y = -222)),
                  4 !== r && 0 !== r)
                ) {
                  const e = n.ZP.fromTo(
                    s.querySelector("img"),
                    { rotate: h, x: v, y },
                    { rotate: u, x: g, y: m }
                  );
                  i.Z.create({
                    trigger: t,
                    start: `${l} top`,
                    end: `${c}px top`,
                    scrub: !0,
                    animation: e,
                    markers: !1,
                    invalidateOnRefresh: !0,
                    onKill: (t) => {
                      n.ZP.set(t.animation._targets, { clearProps: "all" });
                    },
                  });
                }
                3 === r &&
                  i.Z.create({
                    trigger: t,
                    start: `${l} top`,
                    end: `${c}px top`,
                    scrub: !0,
                    markers: !1,
                    invalidateOnRefresh: !0,
                    onUpdate: (t) => {
                      let e = t.progress.toFixed(2);
                      f.style.strokeDashoffset = 0 + d * e;
                    },
                  });
                const O = n.ZP.fromTo(
                  t.querySelector(".curve-wrapper"),
                  { y: 0 },
                  { y: -100 }
                );
                if (
                  (i.Z.create({
                    trigger: t,
                    start: `${a} top`,
                    end: `${o}px top`,
                    scrub: !0,
                    animation: O,
                    markers: !1,
                    invalidateOnRefresh: !0,
                    onUpdate: (t) => {
                      let e = t.progress.toFixed(2);
                      0 === r
                        ? f.setAttribute(
                            "d",
                            `${_[0]} \n                        ${
                              _[1] + 40 * e
                            } \n                        ${
                              _[2] + 3.763 * e
                            } \n                        ${
                              _[3]
                            } \n                        ${
                              _[4] - 2.765 * e
                            } \n                        ${
                              _[5] + 188 * e
                            }\n                        ${
                              _[6]
                            } \n                        ${
                              _[7]
                            } \n                        ${
                              _[8]
                            } \n                        ${_[9]}`
                          )
                        : f.setAttribute(
                            "d",
                            `${_[0]} \n                            ${
                              _[1]
                            } \n                            ${
                              _[2] + 3 * e
                            } \n                            ${
                              _[3]
                            } \n                            ${
                              _[4] - 4 * e
                            } \n                            ${
                              _[5] + 151 * e
                            }\n                            ${
                              _[6] + 112 * e
                            } \n                            ${
                              _[7] + 54 * e
                            } \n                            ${
                              _[8] + 44 * e
                            } \n                            ${_[9] + 4 * e}`
                          );
                    },
                    onKill: (t) => {
                      n.ZP.set(t.animation._targets, { clearProps: "all" });
                    },
                  }),
                  4 !== r)
                ) {
                  const e = n.ZP.fromTo(
                    t.querySelector(".curve-wrapper"),
                    { y: -100 },
                    { y: 0 }
                  );
                  i.Z.create({
                    trigger: t,
                    start: `${l} top`,
                    end: `${c}px top`,
                    scrub: !0,
                    animation: e,
                    markers: !1,
                    invalidateOnRefresh: !0,
                    onUpdate: (t) => {
                      let e = t.progress.toFixed(2),
                        n = 1.5 * e;
                      n > 1 && (n = 1),
                        0 === r
                          ? f.setAttribute(
                              "d",
                              `${x[0]} \n                          ${
                                x[1] - 294 * n
                              } \n                          ${
                                x[2] - 3 * n
                              } \n                          ${
                                x[3]
                              } \n                          ${
                                x[4] + 489 * n
                              } \n                          ${
                                x[5] - 192 * n
                              }\n                          ${
                                x[6] - 541.13 * n
                              } \n                          ${
                                x[7] + 14.5 * n
                              } \n                          ${
                                x[8] + 249.55 * n
                              } \n                          ${x[9] - 1.7 * n}`
                            )
                          : f.setAttribute(
                              "d",
                              `${x[0]} \n                                ${
                                x[1]
                              } \n                                ${
                                x[2] - 3 * e
                              } \n                                ${
                                x[3]
                              } \n                                ${
                                x[4] + 4 * e
                              } \n                                ${
                                x[5] - 151 * e
                              }\n                                ${
                                x[6] - 112 * e
                              } \n                                ${
                                x[7] - 54 * e
                              } \n                                ${
                                x[8] - 44 * e
                              } \n                                ${
                                x[9] - 4 * e
                              }`
                            );
                    },
                    onKill: (t) => {
                      n.ZP.set(t.animation._targets, { clearProps: "all" });
                    },
                  });
                }
              }),
              u.forEach((e, r) => {
                let a, o;
                switch (r) {
                  case 0:
                    (a = -g - 150), (o = -m);
                    break;
                  case 1:
                    (a = g + 150), (o = -m);
                    break;
                  case 2:
                    (a = -g - 150), (o = m);
                    break;
                  case 3:
                    (a = g + 150), (o = 0);
                    break;
                  case 4:
                    (a = g + 150), (o = m);
                    break;
                  case 5:
                    (a = -g - 150), (o = 0);
                }
                const s = n.ZP.fromTo(e, { x: "0", y: "0" }, { x: a, y: o });
                i.Z.create({
                  trigger: t,
                  start: "6000px top",
                  end: "7000px top",
                  scrub: !0,
                  animation: s,
                  markers: !1,
                  invalidateOnRefresh: !0,
                  onKill: (t) => {
                    n.ZP.set(t.animation._targets, { clearProps: "all" });
                  },
                });
              });
            const R = n.ZP.fromTo(o, { opacity: 1 }, { opacity: 0 }),
              E =
                (i.Z.create({
                  trigger: t,
                  start: "6000px top",
                  end: "7000px top",
                  scrub: !0,
                  animation: R,
                  markers: !1,
                  invalidateOnRefresh: !0,
                  onKill: (t) => {
                    n.ZP.set(t.animation._targets, { clearProps: "all" });
                  },
                }),
                n.ZP.fromTo(
                  s.querySelector(".image img"),
                  { rotate: "120deg" },
                  { rotate: "180deg" }
                )),
              M =
                (i.Z.create({
                  trigger: t,
                  start: "6000px top",
                  end: "7000px top",
                  scrub: !0,
                  animation: E,
                  markers: !1,
                  invalidateOnRefresh: !0,
                  onKill: (t) => {
                    n.ZP.set(t.animation._targets, { clearProps: "all" });
                  },
                }),
                n.ZP.fromTo(
                  s,
                  { x: "" + (s.offsetLeft / 2 - 50), y: "" + (h - x) },
                  { y: "-50%", x: "-50%", top: "50%" }
                )),
              $ =
                (i.Z.create({
                  trigger: t,
                  start: "6000px top",
                  end: "7000px top",
                  scrub: !0,
                  animation: M,
                  markers: !1,
                  invalidateOnRefresh: !0,
                  onKill: (t) => {
                    n.ZP.set(t.animation._targets, { clearProps: "all" });
                  },
                }),
                n.ZP.fromTo(
                  s,
                  { y: "-50%", top: "50%", rotate: "0deg" },
                  { y: "0", top: "calc(100% + 125px)", rotate: "40deg" }
                ));
            i.Z.create({
              trigger: t,
              start: "7000px top",
              end: "8000px top",
              scrub: !0,
              animation: $,
              markers: !1,
              invalidateOnRefresh: !0,
              onKill: (t) => {
                n.ZP.set(t.animation._targets, { clearProps: "all" });
              },
            }),
              i.Z.create({
                trigger: t,
                start: "top top",
                end: "8000px top",
                pin: t,
                scrub: !0,
                markers: !1,
                invalidateOnRefresh: !0,
              });
          }
          if (t && window.matchMedia("(max-width: 1024px)").matches) {
            const e = t.querySelector(" p"),
              r = t.querySelector("span"),
              a = t.querySelector(".image-wrapper"),
              o = t.querySelector(".gallery-image-wrapper"),
              s = o.querySelectorAll(".gallery-image"),
              l = a.offsetHeight,
              c = o.offsetLeft,
              u = o.offsetWidth,
              p = n.ZP.fromTo(
                a.querySelector(".image"),
                { y: 0 },
                { y: -window.innerHeight / 2 - l / 2 - 100 }
              ),
              f =
                (i.Z.create({
                  trigger: t,
                  start: "top top",
                  end: "400px top",
                  scrub: !0,
                  animation: p,
                  markers: !1,
                  invalidateOnRefresh: !1,
                  onKill: (t) => {
                    n.ZP.set(t.animation._targets, { clearProps: "all" });
                  },
                }),
                n.ZP.fromTo(e, { opacity: 1 }, { opacity: 0 }));
            if (
              (i.Z.create({
                trigger: t,
                start: "top top",
                end: "100px top",
                scrub: !0,
                animation: f,
                markers: !1,
                invalidateOnRefresh: !1,
                onKill: (t) => {
                  n.ZP.set(t.animation._targets, { clearProps: "all" });
                },
              }),
              window.matchMedia("(min-width: 768px)").matches)
            ) {
              const e = n.ZP.fromTo(r, { y: "230%" }, { y: "-50%" });
              i.Z.create({
                trigger: t,
                start: "top top",
                end: "400px top",
                scrub: !0,
                animation: e,
                markers: !1,
                invalidateOnRefresh: !1,
                onKill: (t) => {
                  n.ZP.set(t.animation._targets, { clearProps: "all" });
                },
              });
            } else {
              const e = n.ZP.fromTo(r, { opacity: 0 }, { opacity: 1 });
              i.Z.create({
                trigger: t,
                start: "50px top",
                end: "400px top",
                scrub: !0,
                animation: e,
                markers: !1,
                invalidateOnRefresh: !1,
                onKill: (t) => {
                  n.ZP.set(t.animation._targets, { clearProps: "all" });
                },
              });
            }
            const d = n.ZP.fromTo(o, { x: c + u + 50 }, { x: 0 });
            i.Z.create({
              trigger: t,
              start: "top top",
              end: "400px top",
              scrub: !0,
              animation: d,
              markers: !1,
              invalidateOnRefresh: !1,
              onUpdate: (t) => {
                t.progress.toFixed(2) > 0 && (o.style.opacity = 1);
              },
              onKill: (t) => {
                n.ZP.set(t.animation._targets, { clearProps: "all" });
              },
            }),
              s.forEach((e, r) => {
                const a = e.offsetLeft,
                  o = e.offsetTop,
                  s = e.offsetWidth,
                  l = a + s + 50,
                  c = o + e.offsetHeight + 50;
                let u, p, f, d;
                switch (r) {
                  case 0:
                    (u = "0"), (p = "0"), (f = "400px"), (d = "400px");
                    break;
                  case 1:
                    (u = `-${l + s}`), (p = "0"), (f = "400px"), (d = "800px");
                    break;
                  case 2:
                    (u = `${l + s}`), (p = "0"), (f = "800px"), (d = "1200px");
                    break;
                  case 3:
                    (u = `-${l + s}`),
                      (p = `${c}`),
                      (f = "1200px"),
                      (d = "1600px");
                    break;
                  case 4:
                    (u = `${l + s}`),
                      (p = `${c}`),
                      (f = "1600px"),
                      (d = "2000px");
                    break;
                  case 5:
                    (u = `-${l + s}`),
                      (p = `${c}`),
                      (f = "2000px"),
                      (d = "2400px");
                }
                const h = n.ZP.fromTo(e, { x: u, y: p }, { x: 0, y: 0 });
                i.Z.create({
                  trigger: t,
                  start: `${f} top`,
                  end: `${d} top`,
                  scrub: !0,
                  animation: h,
                  markers: !1,
                  invalidateOnRefresh: !1,
                  onEnter: () => {
                    e.style.opacity = 1;
                  },
                  onLeaveBack: () => {
                    e.style.opacity = 0;
                  },
                  onKill: (t) => {
                    n.ZP.set(t.animation._targets, { clearProps: "all" });
                  },
                });
              }),
              i.Z.create({
                trigger: t,
                start: "top top",
                end: "2400px top",
                scrub: !0,
                pin: t,
                markers: !1,
                invalidateOnRefresh: !1,
              });
          }
        };
      },
      959: (t, e, r) => {
        r.d(e, { l: () => a });
        var n = r(358),
          i = r(92);
        n.ZP.registerPlugin(i.Z);
        const a = () => {
          const t = document.querySelectorAll(".section-why .why-item");
          if (t.length) {
            const e = document.querySelector(".section-why .why-row");
            let r = window.innerHeight,
              a = document.querySelector(".section-why").offsetHeight;
            t.forEach((t) => {
              let r, a, o;
              window.matchMedia("(max-width: 767px)").matches
                ? e.children[0] == t || e.children[1] == t || e.children[2] == t
                  ? ((r = "1deg"), (a = 50), (o = 50))
                  : ((r = "-1deg"), (a = -50), (o = 50))
                : e.children[0] == t || e.children[1] == t || e.children[2] == t
                ? ((r = "45deg"), (a = 400), (o = 400))
                : ((r = "-45deg"), (a = -600), (o = 600));
              const s = n.ZP.fromTo(
                t,
                { x: a, y: o, rotate: r },
                { x: 0, y: 0, rotate: 0 }
              );
              i.Z.create({
                trigger: e,
                start: "top 80%",
                end: "bottom bottom",
                scrub: !0,
                animation: s,
                markers: !1,
                invalidateOnRefresh: !1,
              });
            }),
              i.Z.create({
                trigger: ".section-why",
                start: "bottom bottom",
                end: `${r + a} bottom`,
                pin: ".section-why .container",
                scrub: !0,
                markers: !1,
                invalidateOnRefresh: !1,
                pinSpacing: !1,
              });
          }
        };
      },
      92: (t, e, r) => {
        function n(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        r.d(e, { Z: () => er });
        var i,
          a,
          o,
          s,
          l,
          c,
          u,
          p,
          f,
          d,
          h,
          g,
          m,
          v = function () {
            return (
              i ||
              ("undefined" != typeof window &&
                (i = window.gsap) &&
                i.registerPlugin &&
                i)
            );
          },
          y = 1,
          _ = [],
          x = [],
          b = [],
          w = Date.now,
          k = function (t, e) {
            return e;
          },
          T = function (t, e) {
            return ~b.indexOf(t) && b[b.indexOf(t) + 1][e];
          },
          P = function (t) {
            return !!~d.indexOf(t);
          },
          Z = function (t, e, r, n, i) {
            return t.addEventListener(e, r, { passive: !n, capture: !!i });
          },
          O = function (t, e, r, n) {
            return t.removeEventListener(e, r, !!n);
          },
          S = "scrollLeft",
          R = "scrollTop",
          E = function () {
            return (h && h.isPressed) || x.cache++;
          },
          M = function (t, e) {
            var r = function r(n) {
              if (n || 0 === n) {
                y && (o.history.scrollRestoration = "manual");
                var i = h && h.isPressed;
                (n = r.v = Math.round(n) || (h && h.iOS ? 1 : 0)),
                  t(n),
                  (r.cacheID = x.cache),
                  i && k("ss", n);
              } else
                (e || x.cache !== r.cacheID || k("ref")) &&
                  ((r.cacheID = x.cache), (r.v = t()));
              return r.v + r.offset;
            };
            return (r.offset = 0), t && r;
          },
          $ = {
            s: S,
            p: "left",
            p2: "Left",
            os: "right",
            os2: "Right",
            d: "width",
            d2: "Width",
            a: "x",
            sc: M(function (t) {
              return arguments.length
                ? o.scrollTo(t, C.sc())
                : o.pageXOffset || s[S] || l[S] || c[S] || 0;
            }),
          },
          C = {
            s: R,
            p: "top",
            p2: "Top",
            os: "bottom",
            os2: "Bottom",
            d: "height",
            d2: "Height",
            a: "y",
            op: $,
            sc: M(function (t) {
              return arguments.length
                ? o.scrollTo($.sc(), t)
                : o.pageYOffset || s[R] || l[R] || c[R] || 0;
            }),
          },
          A = function (t, e) {
            return (
              ((e && e._ctx && e._ctx.selector) || i.utils.toArray)(t)[0] ||
              ("string" == typeof t && !1 !== i.config().nullTargetWarn
                ? console.warn("Element not found:", t)
                : null)
            );
          },
          q = function (t, e) {
            var r = e.s,
              n = e.sc;
            P(t) && (t = s.scrollingElement || l);
            var a = x.indexOf(t),
              o = n === C.sc ? 1 : 2;
            !~a && (a = x.push(t) - 1),
              x[a + o] || t.addEventListener("scroll", E);
            var c = x[a + o],
              u =
                c ||
                (x[a + o] =
                  M(T(t, r), !0) ||
                  (P(t)
                    ? n
                    : M(function (e) {
                        return arguments.length ? (t[r] = e) : t[r];
                      })));
            return (
              (u.target = t),
              c || (u.smooth = "smooth" === i.getProperty(t, "scrollBehavior")),
              u
            );
          },
          L = function (t, e, r) {
            var n = t,
              i = t,
              a = w(),
              o = a,
              s = e || 50,
              l = Math.max(500, 3 * s),
              c = function (t, e) {
                var l = w();
                e || l - a > s
                  ? ((i = n), (n = t), (o = a), (a = l))
                  : r
                  ? (n += t)
                  : (n = i + ((t - i) / (l - o)) * (a - o));
              };
            return {
              update: c,
              reset: function () {
                (i = n = r ? 0 : n), (o = a = 0);
              },
              getVelocity: function (t) {
                var e = o,
                  s = i,
                  u = w();
                return (
                  (t || 0 === t) && t !== n && c(t),
                  a === o || u - o > l
                    ? 0
                    : ((n + (r ? s : -s)) / ((r ? u : a) - e)) * 1e3
                );
              },
            };
          },
          D = function (t, e) {
            return (
              e && !t._gsapAllow && t.preventDefault(),
              t.changedTouches ? t.changedTouches[0] : t
            );
          },
          B = function (t) {
            var e = Math.max.apply(Math, t),
              r = Math.min.apply(Math, t);
            return Math.abs(e) >= Math.abs(r) ? e : r;
          },
          z = function () {
            var t, e, r, n;
            (f = i.core.globals().ScrollTrigger) &&
              f.core &&
              ((t = f.core),
              (e = t.bridge || {}),
              (r = t._scrollers),
              (n = t._proxies),
              r.push.apply(r, x),
              n.push.apply(n, b),
              (x = r),
              (b = n),
              (k = function (t, r) {
                return e[t](r);
              }));
          },
          F = function (t) {
            return (
              (i = t || v()) &&
                "undefined" != typeof document &&
                document.body &&
                ((o = window),
                (s = document),
                (l = s.documentElement),
                (c = s.body),
                (d = [o, s, l, c]),
                i.utils.clamp,
                (m = i.core.context || function () {}),
                (p = "onpointerenter" in c ? "pointer" : "mouse"),
                (u = Y.isTouch =
                  o.matchMedia &&
                  o.matchMedia("(hover: none), (pointer: coarse)").matches
                    ? 1
                    : "ontouchstart" in o ||
                      navigator.maxTouchPoints > 0 ||
                      navigator.msMaxTouchPoints > 0
                    ? 2
                    : 0),
                (g = Y.eventTypes =
                  (
                    "ontouchstart" in l
                      ? "touchstart,touchmove,touchcancel,touchend"
                      : "onpointerdown" in l
                      ? "pointerdown,pointermove,pointercancel,pointerup"
                      : "mousedown,mousemove,mouseup,mouseup"
                  ).split(",")),
                setTimeout(function () {
                  return (y = 0);
                }, 500),
                z(),
                (a = 1)),
              a
            );
          };
        ($.op = C), (x.cache = 0);
        var Y = (function () {
          function t(t) {
            this.init(t);
          }
          var e, r;
          return (
            (t.prototype.init = function (t) {
              a || F(i) || console.warn("Please gsap.registerPlugin(Observer)"),
                f || z();
              var e = t.tolerance,
                r = t.dragMinimum,
                n = t.type,
                d = t.target,
                v = t.lineHeight,
                y = t.debounce,
                x = t.preventDefault,
                b = t.onStop,
                k = t.onStopDelay,
                T = t.ignore,
                S = t.wheelSpeed,
                R = t.event,
                M = t.onDragStart,
                Y = t.onDragEnd,
                K = t.onDrag,
                I = t.onPress,
                H = t.onRelease,
                X = t.onRight,
                N = t.onLeft,
                U = t.onUp,
                W = t.onDown,
                V = t.onChangeX,
                j = t.onChangeY,
                G = t.onChange,
                Q = t.onToggleX,
                J = t.onToggleY,
                tt = t.onHover,
                et = t.onHoverEnd,
                rt = t.onMove,
                nt = t.ignoreCheck,
                it = t.isNormalizer,
                at = t.onGestureStart,
                ot = t.onGestureEnd,
                st = t.onWheel,
                lt = t.onEnable,
                ct = t.onDisable,
                ut = t.onClick,
                pt = t.scrollSpeed,
                ft = t.capture,
                dt = t.allowClicks,
                ht = t.lockAxis,
                gt = t.onLockAxis;
              (this.target = d = A(d) || l),
                (this.vars = t),
                T && (T = i.utils.toArray(T)),
                (e = e || 1e-9),
                (r = r || 0),
                (S = S || 1),
                (pt = pt || 1),
                (n = n || "wheel,touch,pointer"),
                (y = !1 !== y),
                v || (v = parseFloat(o.getComputedStyle(c).lineHeight) || 22);
              var mt,
                vt,
                yt,
                _t,
                xt,
                bt,
                wt,
                kt = this,
                Tt = 0,
                Pt = 0,
                Zt = q(d, $),
                Ot = q(d, C),
                St = Zt(),
                Rt = Ot(),
                Et =
                  ~n.indexOf("touch") &&
                  !~n.indexOf("pointer") &&
                  "pointerdown" === g[0],
                Mt = P(d),
                $t = d.ownerDocument || s,
                Ct = [0, 0, 0],
                At = [0, 0, 0],
                qt = 0,
                Lt = function () {
                  return (qt = w());
                },
                Dt = function (t, e) {
                  return (
                    ((kt.event = t) && T && ~T.indexOf(t.target)) ||
                    (e && Et && "touch" !== t.pointerType) ||
                    (nt && nt(t, e))
                  );
                },
                Bt = function () {
                  var t = (kt.deltaX = B(Ct)),
                    r = (kt.deltaY = B(At)),
                    n = Math.abs(t) >= e,
                    i = Math.abs(r) >= e;
                  G && (n || i) && G(kt, t, r, Ct, At),
                    n &&
                      (X && kt.deltaX > 0 && X(kt),
                      N && kt.deltaX < 0 && N(kt),
                      V && V(kt),
                      Q && kt.deltaX < 0 != Tt < 0 && Q(kt),
                      (Tt = kt.deltaX),
                      (Ct[0] = Ct[1] = Ct[2] = 0)),
                    i &&
                      (W && kt.deltaY > 0 && W(kt),
                      U && kt.deltaY < 0 && U(kt),
                      j && j(kt),
                      J && kt.deltaY < 0 != Pt < 0 && J(kt),
                      (Pt = kt.deltaY),
                      (At[0] = At[1] = At[2] = 0)),
                    (_t || yt) &&
                      (rt && rt(kt), yt && (K(kt), (yt = !1)), (_t = !1)),
                    bt && !(bt = !1) && gt && gt(kt),
                    xt && (st(kt), (xt = !1)),
                    (mt = 0);
                },
                zt = function (t, e, r) {
                  (Ct[r] += t),
                    (At[r] += e),
                    kt._vx.update(t),
                    kt._vy.update(e),
                    y ? mt || (mt = requestAnimationFrame(Bt)) : Bt();
                },
                Ft = function (t, e) {
                  ht &&
                    !wt &&
                    ((kt.axis = wt = Math.abs(t) > Math.abs(e) ? "x" : "y"),
                    (bt = !0)),
                    "y" !== wt && ((Ct[2] += t), kt._vx.update(t, !0)),
                    "x" !== wt && ((At[2] += e), kt._vy.update(e, !0)),
                    y ? mt || (mt = requestAnimationFrame(Bt)) : Bt();
                },
                Yt = function (t) {
                  if (!Dt(t, 1)) {
                    var e = (t = D(t, x)).clientX,
                      n = t.clientY,
                      i = e - kt.x,
                      a = n - kt.y,
                      o = kt.isDragging;
                    (kt.x = e),
                      (kt.y = n),
                      (o ||
                        Math.abs(kt.startX - e) >= r ||
                        Math.abs(kt.startY - n) >= r) &&
                        (K && (yt = !0),
                        o || (kt.isDragging = !0),
                        Ft(i, a),
                        o || (M && M(kt)));
                  }
                },
                Kt = (kt.onPress = function (t) {
                  Dt(t, 1) ||
                    (t && t.button) ||
                    ((kt.axis = wt = null),
                    vt.pause(),
                    (kt.isPressed = !0),
                    (t = D(t)),
                    (Tt = Pt = 0),
                    (kt.startX = kt.x = t.clientX),
                    (kt.startY = kt.y = t.clientY),
                    kt._vx.reset(),
                    kt._vy.reset(),
                    Z(it ? d : $t, g[1], Yt, x, !0),
                    (kt.deltaX = kt.deltaY = 0),
                    I && I(kt));
                }),
                It = (kt.onRelease = function (t) {
                  if (!Dt(t, 1)) {
                    O(it ? d : $t, g[1], Yt, !0);
                    var e = !isNaN(kt.y - kt.startY),
                      r =
                        kt.isDragging &&
                        (Math.abs(kt.x - kt.startX) > 3 ||
                          Math.abs(kt.y - kt.startY) > 3),
                      n = D(t);
                    !r &&
                      e &&
                      (kt._vx.reset(),
                      kt._vy.reset(),
                      x &&
                        dt &&
                        i.delayedCall(0.08, function () {
                          if (w() - qt > 300 && !t.defaultPrevented)
                            if (t.target.click) t.target.click();
                            else if ($t.createEvent) {
                              var e = $t.createEvent("MouseEvents");
                              e.initMouseEvent(
                                "click",
                                !0,
                                !0,
                                o,
                                1,
                                n.screenX,
                                n.screenY,
                                n.clientX,
                                n.clientY,
                                !1,
                                !1,
                                !1,
                                !1,
                                0,
                                null
                              ),
                                t.target.dispatchEvent(e);
                            }
                        })),
                      (kt.isDragging = kt.isGesturing = kt.isPressed = !1),
                      b && !it && vt.restart(!0),
                      Y && r && Y(kt),
                      H && H(kt, r);
                  }
                }),
                Ht = function (t) {
                  return (
                    t.touches &&
                    t.touches.length > 1 &&
                    (kt.isGesturing = !0) &&
                    at(t, kt.isDragging)
                  );
                },
                Xt = function () {
                  return (kt.isGesturing = !1) || ot(kt);
                },
                Nt = function (t) {
                  if (!Dt(t)) {
                    var e = Zt(),
                      r = Ot();
                    zt((e - St) * pt, (r - Rt) * pt, 1),
                      (St = e),
                      (Rt = r),
                      b && vt.restart(!0);
                  }
                },
                Ut = function (t) {
                  if (!Dt(t)) {
                    (t = D(t, x)), st && (xt = !0);
                    var e =
                      (1 === t.deltaMode
                        ? v
                        : 2 === t.deltaMode
                        ? o.innerHeight
                        : 1) * S;
                    zt(t.deltaX * e, t.deltaY * e, 0),
                      b && !it && vt.restart(!0);
                  }
                },
                Wt = function (t) {
                  if (!Dt(t)) {
                    var e = t.clientX,
                      r = t.clientY,
                      n = e - kt.x,
                      i = r - kt.y;
                    (kt.x = e), (kt.y = r), (_t = !0), (n || i) && Ft(n, i);
                  }
                },
                Vt = function (t) {
                  (kt.event = t), tt(kt);
                },
                jt = function (t) {
                  (kt.event = t), et(kt);
                },
                Gt = function (t) {
                  return Dt(t) || (D(t, x) && ut(kt));
                };
              (vt = kt._dc =
                i
                  .delayedCall(k || 0.25, function () {
                    kt._vx.reset(), kt._vy.reset(), vt.pause(), b && b(kt);
                  })
                  .pause()),
                (kt.deltaX = kt.deltaY = 0),
                (kt._vx = L(0, 50, !0)),
                (kt._vy = L(0, 50, !0)),
                (kt.scrollX = Zt),
                (kt.scrollY = Ot),
                (kt.isDragging = kt.isGesturing = kt.isPressed = !1),
                m(this),
                (kt.enable = function (t) {
                  return (
                    kt.isEnabled ||
                      (Z(Mt ? $t : d, "scroll", E),
                      n.indexOf("scroll") >= 0 &&
                        Z(Mt ? $t : d, "scroll", Nt, x, ft),
                      n.indexOf("wheel") >= 0 && Z(d, "wheel", Ut, x, ft),
                      ((n.indexOf("touch") >= 0 && u) ||
                        n.indexOf("pointer") >= 0) &&
                        (Z(d, g[0], Kt, x, ft),
                        Z($t, g[2], It),
                        Z($t, g[3], It),
                        dt && Z(d, "click", Lt, !1, !0),
                        ut && Z(d, "click", Gt),
                        at && Z($t, "gesturestart", Ht),
                        ot && Z($t, "gestureend", Xt),
                        tt && Z(d, p + "enter", Vt),
                        et && Z(d, p + "leave", jt),
                        rt && Z(d, p + "move", Wt)),
                      (kt.isEnabled = !0),
                      t && t.type && Kt(t),
                      lt && lt(kt)),
                    kt
                  );
                }),
                (kt.disable = function () {
                  kt.isEnabled &&
                    (_.filter(function (t) {
                      return t !== kt && P(t.target);
                    }).length || O(Mt ? $t : d, "scroll", E),
                    kt.isPressed &&
                      (kt._vx.reset(),
                      kt._vy.reset(),
                      O(it ? d : $t, g[1], Yt, !0)),
                    O(Mt ? $t : d, "scroll", Nt, ft),
                    O(d, "wheel", Ut, ft),
                    O(d, g[0], Kt, ft),
                    O($t, g[2], It),
                    O($t, g[3], It),
                    O(d, "click", Lt, !0),
                    O(d, "click", Gt),
                    O($t, "gesturestart", Ht),
                    O($t, "gestureend", Xt),
                    O(d, p + "enter", Vt),
                    O(d, p + "leave", jt),
                    O(d, p + "move", Wt),
                    (kt.isEnabled = kt.isPressed = kt.isDragging = !1),
                    ct && ct(kt));
                }),
                (kt.kill = kt.revert =
                  function () {
                    kt.disable();
                    var t = _.indexOf(kt);
                    t >= 0 && _.splice(t, 1), h === kt && (h = 0);
                  }),
                _.push(kt),
                it && P(d) && (h = kt),
                kt.enable(R);
            }),
            (e = t),
            (r = [
              {
                key: "velocityX",
                get: function () {
                  return this._vx.getVelocity();
                },
              },
              {
                key: "velocityY",
                get: function () {
                  return this._vy.getVelocity();
                },
              },
            ]) && n(e.prototype, r),
            t
          );
        })();
        (Y.version = "3.12.1"),
          (Y.create = function (t) {
            return new Y(t);
          }),
          (Y.register = F),
          (Y.getAll = function () {
            return _.slice();
          }),
          (Y.getById = function (t) {
            return _.filter(function (e) {
              return e.vars.id === t;
            })[0];
          }),
          v() && i.registerPlugin(Y);
        var K,
          I,
          H,
          X,
          N,
          U,
          W,
          V,
          j,
          G,
          Q,
          J,
          tt,
          et,
          rt,
          nt,
          it,
          at,
          ot,
          st,
          lt,
          ct,
          ut,
          pt,
          ft,
          dt,
          ht,
          gt,
          mt,
          vt,
          yt,
          _t,
          xt,
          bt,
          wt = 1,
          kt = Date.now,
          Tt = kt(),
          Pt = 0,
          Zt = 0,
          Ot = function (t, e, r) {
            var n =
              Ft(t) && ("clamp(" === t.substr(0, 6) || t.indexOf("max") > -1);
            return (
              (r["_" + e + "Clamp"] = n), n ? t.substr(6, t.length - 7) : t
            );
          },
          St = function (t, e) {
            return !e || (Ft(t) && "clamp(" === t.substr(0, 6))
              ? t
              : "clamp(" + t + ")";
          },
          Rt = function t() {
            return Zt && requestAnimationFrame(t);
          },
          Et = function () {
            return (et = 1);
          },
          Mt = function () {
            return (et = 0);
          },
          $t = function (t) {
            return t;
          },
          Ct = function (t) {
            return Math.round(1e5 * t) / 1e5 || 0;
          },
          At = function () {
            return "undefined" != typeof window;
          },
          qt = function () {
            return K || (At() && (K = window.gsap) && K.registerPlugin && K);
          },
          Lt = function (t) {
            return !!~W.indexOf(t);
          },
          Dt = function (t) {
            return (
              T(t, "getBoundingClientRect") ||
              (Lt(t)
                ? function () {
                    return (
                      (We.width = H.innerWidth), (We.height = H.innerHeight), We
                    );
                  }
                : function () {
                    return ce(t);
                  })
            );
          },
          Bt = function (t, e) {
            var r = e.s,
              n = e.d2,
              i = e.d,
              a = e.a;
            return Math.max(
              0,
              (r = "scroll" + n) && (a = T(t, r))
                ? a() - Dt(t)()[i]
                : Lt(t)
                ? (N[r] || U[r]) -
                  (H["inner" + n] || N["client" + n] || U["client" + n])
                : t[r] - t["offset" + n]
            );
          },
          zt = function (t, e) {
            for (var r = 0; r < ot.length; r += 3)
              (!e || ~e.indexOf(ot[r + 1])) && t(ot[r], ot[r + 1], ot[r + 2]);
          },
          Ft = function (t) {
            return "string" == typeof t;
          },
          Yt = function (t) {
            return "function" == typeof t;
          },
          Kt = function (t) {
            return "number" == typeof t;
          },
          It = function (t) {
            return "object" == typeof t;
          },
          Ht = function (t, e, r) {
            return t && t.progress(e ? 0 : 1) && r && t.pause();
          },
          Xt = function (t, e) {
            if (t.enabled) {
              var r = e(t);
              r && r.totalTime && (t.callbackAnimation = r);
            }
          },
          Nt = Math.abs,
          Ut = "left",
          Wt = "right",
          Vt = "bottom",
          jt = "width",
          Gt = "height",
          Qt = "Right",
          Jt = "Left",
          te = "Top",
          ee = "Bottom",
          re = "padding",
          ne = "margin",
          ie = "Width",
          ae = "Height",
          oe = "px",
          se = function (t) {
            return H.getComputedStyle(t);
          },
          le = function (t, e) {
            for (var r in e) r in t || (t[r] = e[r]);
            return t;
          },
          ce = function (t, e) {
            var r =
                e &&
                "matrix(1, 0, 0, 1, 0, 0)" !== se(t)[rt] &&
                K.to(t, {
                  x: 0,
                  y: 0,
                  xPercent: 0,
                  yPercent: 0,
                  rotation: 0,
                  rotationX: 0,
                  rotationY: 0,
                  scale: 1,
                  skewX: 0,
                  skewY: 0,
                }).progress(1),
              n = t.getBoundingClientRect();
            return r && r.progress(0).kill(), n;
          },
          ue = function (t, e) {
            var r = e.d2;
            return t["offset" + r] || t["client" + r] || 0;
          },
          pe = function (t) {
            var e,
              r = [],
              n = t.labels,
              i = t.duration();
            for (e in n) r.push(n[e] / i);
            return r;
          },
          fe = function (t) {
            var e = K.utils.snap(t),
              r =
                Array.isArray(t) &&
                t.slice(0).sort(function (t, e) {
                  return t - e;
                });
            return r
              ? function (t, n, i) {
                  var a;
                  if ((void 0 === i && (i = 0.001), !n)) return e(t);
                  if (n > 0) {
                    for (t -= i, a = 0; a < r.length; a++)
                      if (r[a] >= t) return r[a];
                    return r[a - 1];
                  }
                  for (a = r.length, t += i; a--; ) if (r[a] <= t) return r[a];
                  return r[0];
                }
              : function (r, n, i) {
                  void 0 === i && (i = 0.001);
                  var a = e(r);
                  return !n || Math.abs(a - r) < i || a - r < 0 == n < 0
                    ? a
                    : e(n < 0 ? r - t : r + t);
                };
          },
          de = function (t, e, r, n) {
            return r.split(",").forEach(function (r) {
              return t(e, r, n);
            });
          },
          he = function (t, e, r, n, i) {
            return t.addEventListener(e, r, { passive: !n, capture: !!i });
          },
          ge = function (t, e, r, n) {
            return t.removeEventListener(e, r, !!n);
          },
          me = function (t, e, r) {
            (r = r && r.wheelHandler) &&
              (t(e, "wheel", r), t(e, "touchmove", r));
          },
          ve = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal",
          },
          ye = { toggleActions: "play", anticipatePin: 0 },
          _e = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
          xe = function (t, e) {
            if (Ft(t)) {
              var r = t.indexOf("="),
                n = ~r
                  ? +(t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1))
                  : 0;
              ~r &&
                (t.indexOf("%") > r && (n *= e / 100),
                (t = t.substr(0, r - 1))),
                (t =
                  n +
                  (t in _e
                    ? _e[t] * e
                    : ~t.indexOf("%")
                    ? (parseFloat(t) * e) / 100
                    : parseFloat(t) || 0));
            }
            return t;
          },
          be = function (t, e, r, n, i, a, o, s) {
            var l = i.startColor,
              c = i.endColor,
              u = i.fontSize,
              p = i.indent,
              f = i.fontWeight,
              d = X.createElement("div"),
              h = Lt(r) || "fixed" === T(r, "pinType"),
              g = -1 !== t.indexOf("scroller"),
              m = h ? U : r,
              v = -1 !== t.indexOf("start"),
              y = v ? l : c,
              _ =
                "border-color:" +
                y +
                ";font-size:" +
                u +
                ";color:" +
                y +
                ";font-weight:" +
                f +
                ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
            return (
              (_ += "position:" + ((g || s) && h ? "fixed;" : "absolute;")),
              (g || s || !h) &&
                (_ += (n === C ? Wt : Vt) + ":" + (a + parseFloat(p)) + "px;"),
              o &&
                (_ +=
                  "box-sizing:border-box;text-align:left;width:" +
                  o.offsetWidth +
                  "px;"),
              (d._isStart = v),
              d.setAttribute(
                "class",
                "gsap-marker-" + t + (e ? " marker-" + e : "")
              ),
              (d.style.cssText = _),
              (d.innerText = e || 0 === e ? t + "-" + e : t),
              m.children[0]
                ? m.insertBefore(d, m.children[0])
                : m.appendChild(d),
              (d._offset = d["offset" + n.op.d2]),
              we(d, 0, n, v),
              d
            );
          },
          we = function (t, e, r, n) {
            var i = { display: "block" },
              a = r[n ? "os2" : "p2"],
              o = r[n ? "p2" : "os2"];
            (t._isFlipped = n),
              (i[r.a + "Percent"] = n ? -100 : 0),
              (i[r.a] = n ? "1px" : 0),
              (i["border" + a + ie] = 1),
              (i["border" + o + ie] = 0),
              (i[r.p] = e + "px"),
              K.set(t, i);
          },
          ke = [],
          Te = {},
          Pe = function () {
            return kt() - Pt > 34 && (yt || (yt = requestAnimationFrame(Ye)));
          },
          Ze = function () {
            (!ut || !ut.isPressed || ut.startX > U.clientWidth) &&
              (x.cache++,
              ut ? yt || (yt = requestAnimationFrame(Ye)) : Ye(),
              Pt || $e("scrollStart"),
              (Pt = kt()));
          },
          Oe = function () {
            (dt = H.innerWidth), (ft = H.innerHeight);
          },
          Se = function () {
            x.cache++,
              !tt &&
                !ct &&
                !X.fullscreenElement &&
                !X.webkitFullscreenElement &&
                (!pt ||
                  dt !== H.innerWidth ||
                  Math.abs(H.innerHeight - ft) > 0.25 * H.innerHeight) &&
                V.restart(!0);
          },
          Re = {},
          Ee = [],
          Me = function t() {
            return ge(er, "scrollEnd", t) || Be(!0);
          },
          $e = function (t) {
            return (
              (Re[t] &&
                Re[t].map(function (t) {
                  return t();
                })) ||
              Ee
            );
          },
          Ce = [],
          Ae = function (t) {
            for (var e = 0; e < Ce.length; e += 5)
              (!t || (Ce[e + 4] && Ce[e + 4].query === t)) &&
                ((Ce[e].style.cssText = Ce[e + 1]),
                Ce[e].getBBox &&
                  Ce[e].setAttribute("transform", Ce[e + 2] || ""),
                (Ce[e + 3].uncache = 1));
          },
          qe = function (t, e) {
            var r;
            for (nt = 0; nt < ke.length; nt++)
              !(r = ke[nt]) ||
                (e && r._ctx !== e) ||
                (t ? r.kill(1) : r.revert(!0, !0));
            e && Ae(e), e || $e("revert");
          },
          Le = function (t, e) {
            x.cache++,
              (e || !_t) &&
                x.forEach(function (t) {
                  return Yt(t) && t.cacheID++ && (t.rec = 0);
                }),
              Ft(t) && (H.history.scrollRestoration = mt = t);
          },
          De = 0,
          Be = function (t, e) {
            if (!Pt || t) {
              (_t = er.isRefreshing = !0),
                x.forEach(function (t) {
                  return Yt(t) && ++t.cacheID && (t.rec = t());
                });
              var r = $e("refreshInit");
              st && er.sort(),
                e || qe(),
                x.forEach(function (t) {
                  Yt(t) &&
                    (t.smooth && (t.target.style.scrollBehavior = "auto"),
                    t(0));
                }),
                ke.slice(0).forEach(function (t) {
                  return t.refresh();
                }),
                ke.forEach(function (t, e) {
                  if (t._subPinOffset && t.pin) {
                    var r = t.vars.horizontal ? "offsetWidth" : "offsetHeight",
                      n = t.pin[r];
                    t.revert(!0, 1),
                      t.adjustPinSpacing(t.pin[r] - n),
                      t.refresh();
                  }
                }),
                ke.forEach(function (t) {
                  var e = Bt(t.scroller, t._dir);
                  ("max" === t.vars.end || (t._endClamp && t.end > e)) &&
                    t.setPositions(t.start, Math.max(t.start + 1, e), !0);
                }),
                r.forEach(function (t) {
                  return t && t.render && t.render(-1);
                }),
                x.forEach(function (t) {
                  Yt(t) &&
                    (t.smooth &&
                      requestAnimationFrame(function () {
                        return (t.target.style.scrollBehavior = "smooth");
                      }),
                    t.rec && t(t.rec));
                }),
                Le(mt, 1),
                V.pause(),
                De++,
                (_t = 2),
                Ye(2),
                ke.forEach(function (t) {
                  return Yt(t.vars.onRefresh) && t.vars.onRefresh(t);
                }),
                (_t = er.isRefreshing = !1),
                $e("refresh");
            } else he(er, "scrollEnd", Me);
          },
          ze = 0,
          Fe = 1,
          Ye = function (t) {
            if (!_t || 2 === t) {
              (er.isUpdating = !0), bt && bt.update(0);
              var e = ke.length,
                r = kt(),
                n = r - Tt >= 50,
                i = e && ke[0].scroll();
              if (
                ((Fe = ze > i ? -1 : 1),
                _t || (ze = i),
                n &&
                  (Pt && !et && r - Pt > 200 && ((Pt = 0), $e("scrollEnd")),
                  (Q = Tt),
                  (Tt = r)),
                Fe < 0)
              ) {
                for (nt = e; nt-- > 0; ) ke[nt] && ke[nt].update(0, n);
                Fe = 1;
              } else for (nt = 0; nt < e; nt++) ke[nt] && ke[nt].update(0, n);
              er.isUpdating = !1;
            }
            yt = 0;
          },
          Ke = [
            Ut,
            "top",
            Vt,
            Wt,
            ne + ee,
            ne + Qt,
            ne + te,
            ne + Jt,
            "display",
            "flexShrink",
            "float",
            "zIndex",
            "gridColumnStart",
            "gridColumnEnd",
            "gridRowStart",
            "gridRowEnd",
            "gridArea",
            "justifySelf",
            "alignSelf",
            "placeSelf",
            "order",
          ],
          Ie = Ke.concat([
            jt,
            Gt,
            "boxSizing",
            "max" + ie,
            "max" + ae,
            "position",
            ne,
            re,
            re + te,
            re + Qt,
            re + ee,
            re + Jt,
          ]),
          He = function (t, e, r, n) {
            if (!t._gsap.swappedIn) {
              for (var i, a = Ke.length, o = e.style, s = t.style; a--; )
                o[(i = Ke[a])] = r[i];
              (o.position =
                "absolute" === r.position ? "absolute" : "relative"),
                "inline" === r.display && (o.display = "inline-block"),
                (s[Vt] = s[Wt] = "auto"),
                (o.flexBasis = r.flexBasis || "auto"),
                (o.overflow = "visible"),
                (o.boxSizing = "border-box"),
                (o[jt] = ue(t, $) + oe),
                (o[Gt] = ue(t, C) + oe),
                (o[re] = s[ne] = s.top = s[Ut] = "0"),
                Ne(n),
                (s[jt] = s["max" + ie] = r[jt]),
                (s[Gt] = s["max" + ae] = r[Gt]),
                (s[re] = r[re]),
                t.parentNode !== e &&
                  (t.parentNode.insertBefore(e, t), e.appendChild(t)),
                (t._gsap.swappedIn = !0);
            }
          },
          Xe = /([A-Z])/g,
          Ne = function (t) {
            if (t) {
              var e,
                r,
                n = t.t.style,
                i = t.length,
                a = 0;
              for (
                (t.t._gsap || K.core.getCache(t.t)).uncache = 1;
                a < i;
                a += 2
              )
                (r = t[a + 1]),
                  (e = t[a]),
                  r
                    ? (n[e] = r)
                    : n[e] &&
                      n.removeProperty(e.replace(Xe, "-$1").toLowerCase());
            }
          },
          Ue = function (t) {
            for (var e = Ie.length, r = t.style, n = [], i = 0; i < e; i++)
              n.push(Ie[i], r[Ie[i]]);
            return (n.t = t), n;
          },
          We = { left: 0, top: 0 },
          Ve = function (t, e, r, n, i, a, o, s, l, c, u, p, f, d) {
            Yt(t) && (t = t(s)),
              Ft(t) &&
                "max" === t.substr(0, 3) &&
                (t = p + ("=" === t.charAt(4) ? xe("0" + t.substr(3), r) : 0));
            var h,
              g,
              m,
              v = f ? f.time() : 0;
            if ((f && f.seek(0), isNaN(t) || (t = +t), Kt(t)))
              f &&
                (t = K.utils.mapRange(
                  f.scrollTrigger.start,
                  f.scrollTrigger.end,
                  0,
                  p,
                  t
                )),
                o && we(o, r, n, !0);
            else {
              Yt(e) && (e = e(s));
              var y,
                _,
                x,
                b,
                w = (t || "0").split(" ");
              (m = A(e, s) || U),
                ((y = ce(m) || {}) && (y.left || y.top)) ||
                  "none" !== se(m).display ||
                  ((b = m.style.display),
                  (m.style.display = "block"),
                  (y = ce(m)),
                  b
                    ? (m.style.display = b)
                    : m.style.removeProperty("display")),
                (_ = xe(w[0], y[n.d])),
                (x = xe(w[1] || "0", r)),
                (t = y[n.p] - l[n.p] - c + _ + i - x),
                o && we(o, x, n, r - x < 20 || (o._isStart && x > 20)),
                (r -= r - x);
            }
            if ((d && ((s[d] = t || -0.001), t < 0 && (t = 0)), a)) {
              var k = t + r,
                T = a._isStart;
              (h = "scroll" + n.d2),
                we(
                  a,
                  k,
                  n,
                  (T && k > 20) ||
                    (!T &&
                      (u ? Math.max(U[h], N[h]) : a.parentNode[h]) <= k + 1)
                ),
                u &&
                  ((l = ce(o)),
                  u && (a.style[n.op.p] = l[n.op.p] - n.op.m - a._offset + oe));
            }
            return (
              f &&
                m &&
                ((h = ce(m)),
                f.seek(p),
                (g = ce(m)),
                (f._caScrollDist = h[n.p] - g[n.p]),
                (t = (t / f._caScrollDist) * p)),
              f && f.seek(v),
              f ? t : Math.round(t)
            );
          },
          je = /(webkit|moz|length|cssText|inset)/i,
          Ge = function (t, e, r, n) {
            if (t.parentNode !== e) {
              var i,
                a,
                o = t.style;
              if (e === U) {
                for (i in ((t._stOrig = o.cssText), (a = se(t))))
                  +i ||
                    je.test(i) ||
                    !a[i] ||
                    "string" != typeof o[i] ||
                    "0" === i ||
                    (o[i] = a[i]);
                (o.top = r), (o.left = n);
              } else o.cssText = t._stOrig;
              (K.core.getCache(t).uncache = 1), e.appendChild(t);
            }
          },
          Qe = function (t, e, r) {
            var n = e,
              i = n;
            return function (e) {
              var a = Math.round(t());
              return (
                a !== n &&
                  a !== i &&
                  Math.abs(a - n) > 3 &&
                  Math.abs(a - i) > 3 &&
                  ((e = a), r && r()),
                (i = n),
                (n = e),
                e
              );
            };
          },
          Je = function (t, e, r) {
            var n = {};
            (n[e.p] = "+=" + r), K.set(t, n);
          },
          tr = function (t, e) {
            var r = q(t, e),
              n = "_scroll" + e.p2,
              i = function e(i, a, o, s, l) {
                var c = e.tween,
                  u = a.onComplete,
                  p = {};
                o = o || r();
                var f = Qe(r, o, function () {
                  c.kill(), (e.tween = 0);
                });
                return (
                  (l = (s && l) || 0),
                  (s = s || i - o),
                  c && c.kill(),
                  (a[n] = i),
                  (a.modifiers = p),
                  (p[n] = function () {
                    return f(o + s * c.ratio + l * c.ratio * c.ratio);
                  }),
                  (a.onUpdate = function () {
                    x.cache++, Ye();
                  }),
                  (a.onComplete = function () {
                    (e.tween = 0), u && u.call(c);
                  }),
                  (c = e.tween = K.to(t, a))
                );
              };
            return (
              (t[n] = r),
              (r.wheelHandler = function () {
                return i.tween && i.tween.kill() && (i.tween = 0);
              }),
              he(t, "wheel", r.wheelHandler),
              er.isTouch && he(t, "touchmove", r.wheelHandler),
              i
            );
          },
          er = (function () {
            function t(e, r) {
              I ||
                t.register(K) ||
                console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
                gt(this),
                this.init(e, r);
            }
            return (
              (t.prototype.init = function (e, r) {
                if (
                  ((this.progress = this.start = 0),
                  this.vars && this.kill(!0, !0),
                  Zt)
                ) {
                  var n,
                    i,
                    a,
                    o,
                    s,
                    l,
                    c,
                    u,
                    p,
                    f,
                    d,
                    h,
                    g,
                    m,
                    v,
                    y,
                    _,
                    w,
                    k,
                    P,
                    Z,
                    O,
                    S,
                    R,
                    E,
                    M,
                    L,
                    D,
                    B,
                    z,
                    F,
                    Y,
                    I,
                    W,
                    V,
                    J,
                    rt,
                    it,
                    at,
                    ot,
                    ct,
                    ut,
                    pt = (e = le(
                      Ft(e) || Kt(e) || e.nodeType ? { trigger: e } : e,
                      ye
                    )),
                    ft = pt.onUpdate,
                    dt = pt.toggleClass,
                    ht = pt.id,
                    gt = pt.onToggle,
                    mt = pt.onRefresh,
                    yt = pt.scrub,
                    Tt = pt.trigger,
                    Rt = pt.pin,
                    Et = pt.pinSpacing,
                    Mt = pt.invalidateOnRefresh,
                    At = pt.anticipatePin,
                    qt = pt.onScrubComplete,
                    zt = pt.onSnapComplete,
                    Ut = pt.once,
                    Wt = pt.snap,
                    Vt = pt.pinReparent,
                    de = pt.pinSpacer,
                    me = pt.containerAnimation,
                    _e = pt.fastScrollEnd,
                    we = pt.preventOverlaps,
                    Pe =
                      e.horizontal ||
                      (e.containerAnimation && !1 !== e.horizontal)
                        ? $
                        : C,
                    Oe = !yt && 0 !== yt,
                    Re = A(e.scroller || H),
                    Ee = K.core.getCache(Re),
                    $e = Lt(Re),
                    Ce =
                      "fixed" ===
                      ("pinType" in e
                        ? e.pinType
                        : T(Re, "pinType") || ($e && "fixed")),
                    Ae = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
                    qe = Oe && e.toggleActions.split(" "),
                    Le = "markers" in e ? e.markers : ye.markers,
                    ze = $e
                      ? 0
                      : parseFloat(se(Re)["border" + Pe.p2 + ie]) || 0,
                    Ye = this,
                    Ke =
                      e.onRefreshInit &&
                      function () {
                        return e.onRefreshInit(Ye);
                      },
                    Ie = (function (t, e, r) {
                      var n = r.d,
                        i = r.d2,
                        a = r.a;
                      return (a = T(t, "getBoundingClientRect"))
                        ? function () {
                            return a()[n];
                          }
                        : function () {
                            return (e ? H["inner" + i] : t["client" + i]) || 0;
                          };
                    })(Re, $e, Pe),
                    Xe = (function (t, e) {
                      return !e || ~b.indexOf(t)
                        ? Dt(t)
                        : function () {
                            return We;
                          };
                    })(Re, $e),
                    je = 0,
                    Qe = 0,
                    er = 0,
                    rr = q(Re, Pe);
                  if (
                    ((Ye._startClamp = Ye._endClamp = !1),
                    (Ye._dir = Pe),
                    (At *= 45),
                    (Ye.scroller = Re),
                    (Ye.scroll = me ? me.time.bind(me) : rr),
                    (o = rr()),
                    (Ye.vars = e),
                    (r = r || e.animation),
                    "refreshPriority" in e &&
                      ((st = 1), -9999 === e.refreshPriority && (bt = Ye)),
                    (Ee.tweenScroll = Ee.tweenScroll || {
                      top: tr(Re, C),
                      left: tr(Re, $),
                    }),
                    (Ye.tweenTo = n = Ee.tweenScroll[Pe.p]),
                    (Ye.scrubDuration = function (t) {
                      (I = Kt(t) && t)
                        ? Y
                          ? Y.duration(t)
                          : (Y = K.to(r, {
                              ease: "expo",
                              totalProgress: "+=0",
                              duration: I,
                              paused: !0,
                              onComplete: function () {
                                return qt && qt(Ye);
                              },
                            }))
                        : (Y && Y.progress(1).kill(), (Y = 0));
                    }),
                    r &&
                      ((r.vars.lazy = !1),
                      (r._initted && !Ye.isReverted) ||
                        (!1 !== r.vars.immediateRender &&
                          !1 !== e.immediateRender &&
                          r.duration() &&
                          r.render(0, !0, !0)),
                      (Ye.animation = r.pause()),
                      (r.scrollTrigger = Ye),
                      Ye.scrubDuration(yt),
                      (z = 0),
                      ht || (ht = r.vars.id)),
                    Wt &&
                      ((It(Wt) && !Wt.push) || (Wt = { snapTo: Wt }),
                      "scrollBehavior" in U.style &&
                        K.set($e ? [U, N] : Re, { scrollBehavior: "auto" }),
                      x.forEach(function (t) {
                        return (
                          Yt(t) &&
                          t.target === ($e ? X.scrollingElement || N : Re) &&
                          (t.smooth = !1)
                        );
                      }),
                      (a = Yt(Wt.snapTo)
                        ? Wt.snapTo
                        : "labels" === Wt.snapTo
                        ? (function (t) {
                            return function (e) {
                              return K.utils.snap(pe(t), e);
                            };
                          })(r)
                        : "labelsDirectional" === Wt.snapTo
                        ? ((ot = r),
                          function (t, e) {
                            return fe(pe(ot))(t, e.direction);
                          })
                        : !1 !== Wt.directional
                        ? function (t, e) {
                            return fe(Wt.snapTo)(
                              t,
                              kt() - Qe < 500 ? 0 : e.direction
                            );
                          }
                        : K.utils.snap(Wt.snapTo)),
                      (W = Wt.duration || { min: 0.1, max: 2 }),
                      (W = It(W) ? G(W.min, W.max) : G(W, W)),
                      (V = K.delayedCall(Wt.delay || I / 2 || 0.1, function () {
                        var t = rr(),
                          e = kt() - Qe < 500,
                          i = n.tween;
                        if (
                          !(e || Math.abs(Ye.getVelocity()) < 10) ||
                          i ||
                          et ||
                          je === t
                        )
                          Ye.isActive && je !== t && V.restart(!0);
                        else {
                          var o = (t - l) / m,
                            s = r && !Oe ? r.totalProgress() : o,
                            u = e ? 0 : ((s - F) / (kt() - Q)) * 1e3 || 0,
                            p = K.utils.clamp(
                              -o,
                              1 - o,
                              (Nt(u / 2) * u) / 0.185
                            ),
                            f = o + (!1 === Wt.inertia ? 0 : p),
                            d = G(0, 1, a(f, Ye)),
                            h = Math.round(l + d * m),
                            g = Wt,
                            v = g.onStart,
                            y = g.onInterrupt,
                            _ = g.onComplete;
                          if (t <= c && t >= l && h !== t) {
                            if (i && !i._initted && i.data <= Nt(h - t)) return;
                            !1 === Wt.inertia && (p = d - o),
                              n(
                                h,
                                {
                                  duration: W(
                                    Nt(
                                      (0.185 * Math.max(Nt(f - s), Nt(d - s))) /
                                        u /
                                        0.05 || 0
                                    )
                                  ),
                                  ease: Wt.ease || "power3",
                                  data: Nt(h - t),
                                  onInterrupt: function () {
                                    return V.restart(!0) && y && y(Ye);
                                  },
                                  onComplete: function () {
                                    Ye.update(),
                                      (je = rr()),
                                      (z = F =
                                        r && !Oe
                                          ? r.totalProgress()
                                          : Ye.progress),
                                      zt && zt(Ye),
                                      _ && _(Ye);
                                  },
                                },
                                t,
                                p * m,
                                h - t - p * m
                              ),
                              v && v(Ye, n.tween);
                          }
                        }
                      }).pause())),
                    ht && (Te[ht] = Ye),
                    (at =
                      (Tt = Ye.trigger = A(Tt || (!0 !== Rt && Rt))) &&
                      Tt._gsap &&
                      Tt._gsap.stRevert) && (at = at(Ye)),
                    (Rt = !0 === Rt ? Tt : A(Rt)),
                    Ft(dt) && (dt = { targets: Tt, className: dt }),
                    Rt &&
                      (!1 === Et ||
                        Et === ne ||
                        (Et =
                          !(
                            !Et &&
                            Rt.parentNode &&
                            Rt.parentNode.style &&
                            "flex" === se(Rt.parentNode).display
                          ) && re),
                      (Ye.pin = Rt),
                      (i = K.core.getCache(Rt)).spacer
                        ? (v = i.pinState)
                        : (de &&
                            ((de = A(de)) &&
                              !de.nodeType &&
                              (de = de.current || de.nativeElement),
                            (i.spacerIsNative = !!de),
                            de && (i.spacerState = Ue(de))),
                          (i.spacer = w = de || X.createElement("div")),
                          w.classList.add("pin-spacer"),
                          ht && w.classList.add("pin-spacer-" + ht),
                          (i.pinState = v = Ue(Rt))),
                      !1 !== e.force3D && K.set(Rt, { force3D: !0 }),
                      (Ye.spacer = w = i.spacer),
                      (B = se(Rt)),
                      (R = B[Et + Pe.os2]),
                      (P = K.getProperty(Rt)),
                      (Z = K.quickSetter(Rt, Pe.a, oe)),
                      He(Rt, w, B),
                      (_ = Ue(Rt))),
                    Le)
                  ) {
                    (h = It(Le) ? le(Le, ve) : ve),
                      (f = be("scroller-start", ht, Re, Pe, h, 0)),
                      (d = be("scroller-end", ht, Re, Pe, h, 0, f)),
                      (k = f["offset" + Pe.op.d2]);
                    var nr = A(T(Re, "content") || Re);
                    (u = this.markerStart =
                      be("start", ht, nr, Pe, h, k, 0, me)),
                      (p = this.markerEnd = be("end", ht, nr, Pe, h, k, 0, me)),
                      me && (it = K.quickSetter([u, p], Pe.a, oe)),
                      Ce ||
                        (b.length && !0 === T(Re, "fixedMarkers")) ||
                        ((ut = se((ct = $e ? U : Re)).position),
                        (ct.style.position =
                          "absolute" === ut || "fixed" === ut
                            ? ut
                            : "relative"),
                        K.set([f, d], { force3D: !0 }),
                        (M = K.quickSetter(f, Pe.a, oe)),
                        (D = K.quickSetter(d, Pe.a, oe)));
                  }
                  if (me) {
                    var ir = me.vars.onUpdate,
                      ar = me.vars.onUpdateParams;
                    me.eventCallback("onUpdate", function () {
                      Ye.update(0, 0, 1), ir && ir.apply(me, ar || []);
                    });
                  }
                  if (
                    ((Ye.previous = function () {
                      return ke[ke.indexOf(Ye) - 1];
                    }),
                    (Ye.next = function () {
                      return ke[ke.indexOf(Ye) + 1];
                    }),
                    (Ye.revert = function (t, e) {
                      if (!e) return Ye.kill(!0);
                      var n = !1 !== t || !Ye.enabled,
                        i = tt;
                      n !== Ye.isReverted &&
                        (n &&
                          ((J = Math.max(rr(), Ye.scroll.rec || 0)),
                          (er = Ye.progress),
                          (rt = r && r.progress())),
                        u &&
                          [u, p, f, d].forEach(function (t) {
                            return (t.style.display = n ? "none" : "block");
                          }),
                        n && ((tt = Ye), Ye.update(n)),
                        !Rt ||
                          (Vt && Ye.isActive) ||
                          (n
                            ? (function (t, e, r) {
                                Ne(r);
                                var n = t._gsap;
                                if (n.spacerIsNative) Ne(n.spacerState);
                                else if (t._gsap.swappedIn) {
                                  var i = e.parentNode;
                                  i && (i.insertBefore(t, e), i.removeChild(e));
                                }
                                t._gsap.swappedIn = !1;
                              })(Rt, w, v)
                            : He(Rt, w, se(Rt), E)),
                        n || Ye.update(n),
                        (tt = i),
                        (Ye.isReverted = n));
                    }),
                    (Ye.refresh = function (i, a, h, x) {
                      if ((!tt && Ye.enabled) || a)
                        if (Rt && i && Pt) he(t, "scrollEnd", Me);
                        else {
                          !_t && Ke && Ke(Ye),
                            (tt = Ye),
                            n.tween && (n.tween.kill(), (n.tween = 0)),
                            Y && Y.pause(),
                            Mt && r && r.revert({ kill: !1 }).invalidate(),
                            Ye.isReverted || Ye.revert(!0, !0),
                            (Ye._subPinOffset = !1);
                          var b,
                            k,
                            T,
                            Z,
                            R,
                            M,
                            D,
                            B,
                            z,
                            F,
                            I,
                            H,
                            W,
                            j = Ie(),
                            G = Xe(),
                            Q = me ? me.duration() : Bt(Re, Pe),
                            et = m <= 0.01,
                            nt = 0,
                            it = x || 0,
                            at = It(h) ? h.end : e.end,
                            ot = e.endTrigger || Tt,
                            st = It(h)
                              ? h.start
                              : e.start ||
                                (0 !== e.start && Tt
                                  ? Rt
                                    ? "0 0"
                                    : "0 100%"
                                  : 0),
                            ct = (Ye.pinnedContainer =
                              e.pinnedContainer && A(e.pinnedContainer, Ye)),
                            ut = (Tt && Math.max(0, ke.indexOf(Ye))) || 0,
                            pt = ut;
                          for (
                            Le &&
                            It(h) &&
                            ((H = K.getProperty(f, Pe.p)),
                            (W = K.getProperty(d, Pe.p)));
                            pt--;

                          )
                            (M = ke[pt]).end || M.refresh(0, 1) || (tt = Ye),
                              !(D = M.pin) ||
                                (D !== Tt && D !== Rt && D !== ct) ||
                                M.isReverted ||
                                (F || (F = []), F.unshift(M), M.revert(!0, !0)),
                              M !== ke[pt] && (ut--, pt--);
                          for (
                            Yt(st) && (st = st(Ye)),
                              st = Ot(st, "start", Ye),
                              l =
                                Ve(
                                  st,
                                  Tt,
                                  j,
                                  Pe,
                                  rr(),
                                  u,
                                  f,
                                  Ye,
                                  G,
                                  ze,
                                  Ce,
                                  Q,
                                  me,
                                  Ye._startClamp && "_startClamp"
                                ) || (Rt ? -0.001 : 0),
                              Yt(at) && (at = at(Ye)),
                              Ft(at) &&
                                !at.indexOf("+=") &&
                                (~at.indexOf(" ")
                                  ? (at = (Ft(st) ? st.split(" ")[0] : "") + at)
                                  : ((nt = xe(at.substr(2), j)),
                                    (at = Ft(st)
                                      ? st
                                      : (me
                                          ? K.utils.mapRange(
                                              0,
                                              me.duration(),
                                              me.scrollTrigger.start,
                                              me.scrollTrigger.end,
                                              l
                                            )
                                          : l) + nt),
                                    (ot = Tt))),
                              at = Ot(at, "end", Ye),
                              c =
                                Math.max(
                                  l,
                                  Ve(
                                    at || (ot ? "100% 0" : Q),
                                    ot,
                                    j,
                                    Pe,
                                    rr() + nt,
                                    p,
                                    d,
                                    Ye,
                                    G,
                                    ze,
                                    Ce,
                                    Q,
                                    me,
                                    Ye._endClamp && "_endClamp"
                                  )
                                ) || -0.001,
                              nt = 0,
                              pt = ut;
                            pt--;

                          )
                            (D = (M = ke[pt]).pin) &&
                              M.start - M._pinPush <= l &&
                              !me &&
                              M.end > 0 &&
                              ((b =
                                M.end -
                                (Ye._startClamp
                                  ? Math.max(0, M.start)
                                  : M.start)),
                              ((D === Tt && M.start - M._pinPush < l) ||
                                D === ct) &&
                                isNaN(st) &&
                                (nt += b * (1 - M.progress)),
                              D === Rt && (it += b));
                          if (
                            ((l += nt),
                            (c += nt),
                            Ye._startClamp && (Ye._startClamp += nt),
                            Ye._endClamp &&
                              !_t &&
                              ((Ye._endClamp = c || -0.001),
                              (c = Math.min(c, Bt(Re, Pe)))),
                            (m = c - l || ((l -= 0.01) && 0.001)),
                            et &&
                              (er = K.utils.clamp(
                                0,
                                1,
                                K.utils.normalize(l, c, J)
                              )),
                            (Ye._pinPush = it),
                            u &&
                              nt &&
                              (((b = {})[Pe.a] = "+=" + nt),
                              ct && (b[Pe.p] = "-=" + rr()),
                              K.set([u, p], b)),
                            Rt)
                          )
                            (b = se(Rt)),
                              (Z = Pe === C),
                              (T = rr()),
                              (O = parseFloat(P(Pe.a)) + it),
                              !Q &&
                                c > 1 &&
                                ((I = {
                                  style: (I = (
                                    $e ? X.scrollingElement || N : Re
                                  ).style),
                                  value: I["overflow" + Pe.a.toUpperCase()],
                                }),
                                $e &&
                                  "scroll" !==
                                    se(U)["overflow" + Pe.a.toUpperCase()] &&
                                  (I.style["overflow" + Pe.a.toUpperCase()] =
                                    "scroll")),
                              He(Rt, w, b),
                              (_ = Ue(Rt)),
                              (k = ce(Rt, !0)),
                              (B = Ce && q(Re, Z ? $ : C)()),
                              Et &&
                                (((E = [Et + Pe.os2, m + it + oe]).t = w),
                                (pt = Et === re ? ue(Rt, Pe) + m + it : 0) &&
                                  E.push(Pe.d, pt + oe),
                                Ne(E),
                                ct &&
                                  ke.forEach(function (t) {
                                    t.pin === ct &&
                                      !1 !== t.vars.pinSpacing &&
                                      (t._subPinOffset = !0);
                                  }),
                                Ce && rr(J)),
                              Ce &&
                                (((R = {
                                  top: k.top + (Z ? T - l : B) + oe,
                                  left: k.left + (Z ? B : T - l) + oe,
                                  boxSizing: "border-box",
                                  position: "fixed",
                                })[jt] = R["max" + ie] =
                                  Math.ceil(k.width) + oe),
                                (R[Gt] = R["max" + ae] =
                                  Math.ceil(k.height) + oe),
                                (R[ne] =
                                  R[ne + te] =
                                  R[ne + Qt] =
                                  R[ne + ee] =
                                  R[ne + Jt] =
                                    "0"),
                                (R[re] = b[re]),
                                (R[re + te] = b[re + te]),
                                (R[re + Qt] = b[re + Qt]),
                                (R[re + ee] = b[re + ee]),
                                (R[re + Jt] = b[re + Jt]),
                                (y = (function (t, e, r) {
                                  for (
                                    var n, i = [], a = t.length, o = r ? 8 : 0;
                                    o < a;
                                    o += 2
                                  )
                                    (n = t[o]),
                                      i.push(n, n in e ? e[n] : t[o + 1]);
                                  return (i.t = t.t), i;
                                })(v, R, Vt)),
                                _t && rr(0)),
                              r
                                ? ((z = r._initted),
                                  lt(1),
                                  r.render(r.duration(), !0, !0),
                                  (S = P(Pe.a) - O + m + it),
                                  (L = Math.abs(m - S) > 1),
                                  Ce && L && y.splice(y.length - 2, 2),
                                  r.render(0, !0, !0),
                                  z || r.invalidate(!0),
                                  r.parent || r.totalTime(r.totalTime()),
                                  lt(0))
                                : (S = m),
                              I &&
                                (I.value
                                  ? (I.style["overflow" + Pe.a.toUpperCase()] =
                                      I.value)
                                  : I.style.removeProperty("overflow-" + Pe.a));
                          else if (Tt && rr() && !me)
                            for (k = Tt.parentNode; k && k !== U; )
                              k._pinOffset &&
                                ((l -= k._pinOffset), (c -= k._pinOffset)),
                                (k = k.parentNode);
                          F &&
                            F.forEach(function (t) {
                              return t.revert(!1, !0);
                            }),
                            (Ye.start = l),
                            (Ye.end = c),
                            (o = s = _t ? J : rr()),
                            me || _t || (o < J && rr(J), (Ye.scroll.rec = 0)),
                            Ye.revert(!1, !0),
                            (Qe = kt()),
                            V &&
                              ((je = -1),
                              Ye.isActive && rr(l + m * er),
                              V.restart(!0)),
                            (tt = 0),
                            r &&
                              Oe &&
                              (r._initted || rt) &&
                              r.progress() !== rt &&
                              r.progress(rt || 0, !0).render(r.time(), !0, !0),
                            (et || er !== Ye.progress || me) &&
                              (r &&
                                !Oe &&
                                r.totalProgress(
                                  me && l < -0.001 && !er
                                    ? K.utils.normalize(l, c, 0)
                                    : er,
                                  !0
                                ),
                              (Ye.progress =
                                et || (o - l) / m === er ? 0 : er)),
                            Rt &&
                              Et &&
                              (w._pinOffset = Math.round(Ye.progress * S)),
                            Y && Y.invalidate(),
                            isNaN(H) ||
                              ((H -= K.getProperty(f, Pe.p)),
                              (W -= K.getProperty(d, Pe.p)),
                              Je(f, Pe, H),
                              Je(u, Pe, H - (x || 0)),
                              Je(d, Pe, W),
                              Je(p, Pe, W - (x || 0))),
                            et && !_t && Ye.update(),
                            !mt || _t || g || ((g = !0), mt(Ye), (g = !1));
                        }
                    }),
                    (Ye.getVelocity = function () {
                      return ((rr() - s) / (kt() - Q)) * 1e3 || 0;
                    }),
                    (Ye.endAnimation = function () {
                      Ht(Ye.callbackAnimation),
                        r &&
                          (Y
                            ? Y.progress(1)
                            : r.paused()
                            ? Oe || Ht(r, Ye.direction < 0, 1)
                            : Ht(r, r.reversed()));
                    }),
                    (Ye.labelToScroll = function (t) {
                      return (
                        (r &&
                          r.labels &&
                          (l || Ye.refresh() || l) +
                            (r.labels[t] / r.duration()) * m) ||
                        0
                      );
                    }),
                    (Ye.getTrailing = function (t) {
                      var e = ke.indexOf(Ye),
                        r =
                          Ye.direction > 0
                            ? ke.slice(0, e).reverse()
                            : ke.slice(e + 1);
                      return (
                        Ft(t)
                          ? r.filter(function (e) {
                              return e.vars.preventOverlaps === t;
                            })
                          : r
                      ).filter(function (t) {
                        return Ye.direction > 0 ? t.end <= l : t.start >= c;
                      });
                    }),
                    (Ye.update = function (t, e, i) {
                      if (!me || i || t) {
                        var a,
                          u,
                          p,
                          d,
                          h,
                          g,
                          v,
                          x = !0 === _t ? J : Ye.scroll(),
                          b = t ? 0 : (x - l) / m,
                          k = b < 0 ? 0 : b > 1 ? 1 : b || 0,
                          T = Ye.progress;
                        if (
                          (e &&
                            ((s = o),
                            (o = me ? rr() : x),
                            Wt &&
                              ((F = z),
                              (z = r && !Oe ? r.totalProgress() : k))),
                          At &&
                            !k &&
                            Rt &&
                            !tt &&
                            !wt &&
                            Pt &&
                            l < x + ((x - s) / (kt() - Q)) * At &&
                            (k = 1e-4),
                          k !== T && Ye.enabled)
                        ) {
                          if (
                            ((d =
                              (h =
                                (a = Ye.isActive = !!k && k < 1) !=
                                (!!T && T < 1)) || !!k != !!T),
                            (Ye.direction = k > T ? 1 : -1),
                            (Ye.progress = k),
                            d &&
                              !tt &&
                              ((u =
                                k && !T ? 0 : 1 === k ? 1 : 1 === T ? 2 : 3),
                              Oe &&
                                ((p =
                                  (!h && "none" !== qe[u + 1] && qe[u + 1]) ||
                                  qe[u]),
                                (v =
                                  r &&
                                  ("complete" === p ||
                                    "reset" === p ||
                                    p in r)))),
                            we &&
                              (h || v) &&
                              (v || yt || !r) &&
                              (Yt(we)
                                ? we(Ye)
                                : Ye.getTrailing(we).forEach(function (t) {
                                    return t.endAnimation();
                                  })),
                            Oe ||
                              (!Y || tt || wt
                                ? r && r.totalProgress(k, !(!tt || (!Qe && !t)))
                                : (Y._dp._time - Y._start !== Y._time &&
                                    Y.render(Y._dp._time - Y._start),
                                  Y.resetTo
                                    ? Y.resetTo(
                                        "totalProgress",
                                        k,
                                        r._tTime / r._tDur
                                      )
                                    : ((Y.vars.totalProgress = k),
                                      Y.invalidate().restart()))),
                            Rt)
                          )
                            if ((t && Et && (w.style[Et + Pe.os2] = R), Ce)) {
                              if (d) {
                                if (
                                  ((g =
                                    !t &&
                                    k > T &&
                                    c + 1 > x &&
                                    x + 1 >= Bt(Re, Pe)),
                                  Vt)
                                )
                                  if (t || (!a && !g)) Ge(Rt, w);
                                  else {
                                    var P = ce(Rt, !0),
                                      E = x - l;
                                    Ge(
                                      Rt,
                                      U,
                                      P.top + (Pe === C ? E : 0) + oe,
                                      P.left + (Pe === C ? 0 : E) + oe
                                    );
                                  }
                                Ne(a || g ? y : _),
                                  (L && k < 1 && a) ||
                                    Z(O + (1 !== k || g ? 0 : S));
                              }
                            } else Z(Ct(O + S * k));
                          Wt && !n.tween && !tt && !wt && V.restart(!0),
                            dt &&
                              (h || (Ut && k && (k < 1 || !vt))) &&
                              j(dt.targets).forEach(function (t) {
                                return t.classList[a || Ut ? "add" : "remove"](
                                  dt.className
                                );
                              }),
                            ft && !Oe && !t && ft(Ye),
                            d && !tt
                              ? (Oe &&
                                  (v &&
                                    ("complete" === p
                                      ? r.pause().totalProgress(1)
                                      : "reset" === p
                                      ? r.restart(!0).pause()
                                      : "restart" === p
                                      ? r.restart(!0)
                                      : r[p]()),
                                  ft && ft(Ye)),
                                (!h && vt) ||
                                  (gt && h && Xt(Ye, gt),
                                  Ae[u] && Xt(Ye, Ae[u]),
                                  Ut &&
                                    (1 === k ? Ye.kill(!1, 1) : (Ae[u] = 0)),
                                  h ||
                                    (Ae[(u = 1 === k ? 1 : 3)] &&
                                      Xt(Ye, Ae[u]))),
                                _e &&
                                  !a &&
                                  Math.abs(Ye.getVelocity()) >
                                    (Kt(_e) ? _e : 2500) &&
                                  (Ht(Ye.callbackAnimation),
                                  Y
                                    ? Y.progress(1)
                                    : Ht(r, "reverse" === p ? 1 : !k, 1)))
                              : Oe && ft && !tt && ft(Ye);
                        }
                        if (D) {
                          var $ = me
                            ? (x / me.duration()) * (me._caScrollDist || 0)
                            : x;
                          M($ + (f._isFlipped ? 1 : 0)), D($);
                        }
                        it &&
                          it((-x / me.duration()) * (me._caScrollDist || 0));
                      }
                    }),
                    (Ye.enable = function (e, r) {
                      Ye.enabled ||
                        ((Ye.enabled = !0),
                        he(Re, "resize", Se),
                        he($e ? X : Re, "scroll", Ze),
                        Ke && he(t, "refreshInit", Ke),
                        !1 !== e &&
                          ((Ye.progress = er = 0), (o = s = je = rr())),
                        !1 !== r && Ye.refresh());
                    }),
                    (Ye.getTween = function (t) {
                      return t && n ? n.tween : Y;
                    }),
                    (Ye.setPositions = function (t, e, r, n) {
                      if (me) {
                        var i = me.scrollTrigger,
                          a = me.duration(),
                          o = i.end - i.start;
                        (t = i.start + (o * t) / a),
                          (e = i.start + (o * e) / a);
                      }
                      Ye.refresh(
                        !1,
                        !1,
                        {
                          start: St(t, r && !!Ye._startClamp),
                          end: St(e, r && !!Ye._endClamp),
                        },
                        n
                      ),
                        Ye.update();
                    }),
                    (Ye.adjustPinSpacing = function (t) {
                      if (E && t) {
                        var e = E.indexOf(Pe.d) + 1;
                        (E[e] = parseFloat(E[e]) + t + oe),
                          (E[1] = parseFloat(E[1]) + t + oe),
                          Ne(E);
                      }
                    }),
                    (Ye.disable = function (e, r) {
                      if (
                        Ye.enabled &&
                        (!1 !== e && Ye.revert(!0, !0),
                        (Ye.enabled = Ye.isActive = !1),
                        r || (Y && Y.pause()),
                        (J = 0),
                        i && (i.uncache = 1),
                        Ke && ge(t, "refreshInit", Ke),
                        V &&
                          (V.pause(),
                          n.tween && n.tween.kill() && (n.tween = 0)),
                        !$e)
                      ) {
                        for (var a = ke.length; a--; )
                          if (ke[a].scroller === Re && ke[a] !== Ye) return;
                        ge(Re, "resize", Se), ge(Re, "scroll", Ze);
                      }
                    }),
                    (Ye.kill = function (t, n) {
                      Ye.disable(t, n),
                        Y && !n && Y.kill(),
                        ht && delete Te[ht];
                      var a = ke.indexOf(Ye);
                      a >= 0 && ke.splice(a, 1),
                        a === nt && Fe > 0 && nt--,
                        (a = 0),
                        ke.forEach(function (t) {
                          return t.scroller === Ye.scroller && (a = 1);
                        }),
                        a || _t || (Ye.scroll.rec = 0),
                        r &&
                          ((r.scrollTrigger = null),
                          t && r.revert({ kill: !1 }),
                          n || r.kill()),
                        u &&
                          [u, p, f, d].forEach(function (t) {
                            return t.parentNode && t.parentNode.removeChild(t);
                          }),
                        bt === Ye && (bt = 0),
                        Rt &&
                          (i && (i.uncache = 1),
                          (a = 0),
                          ke.forEach(function (t) {
                            return t.pin === Rt && a++;
                          }),
                          a || (i.spacer = 0)),
                        e.onKill && e.onKill(Ye);
                    }),
                    ke.push(Ye),
                    Ye.enable(!1, !1),
                    at && at(Ye),
                    r && r.add && !m)
                  ) {
                    var or = Ye.update;
                    (Ye.update = function () {
                      (Ye.update = or), l || c || Ye.refresh();
                    }),
                      K.delayedCall(0.01, Ye.update),
                      (m = 0.01),
                      (l = c = 0);
                  } else Ye.refresh();
                  Rt &&
                    (function () {
                      if (xt !== De) {
                        var t = (xt = De);
                        requestAnimationFrame(function () {
                          return t === De && Be(!0);
                        });
                      }
                    })();
                } else this.update = this.refresh = this.kill = $t;
              }),
              (t.register = function (e) {
                return (
                  I ||
                    ((K = e || qt()),
                    At() && window.document && t.enable(),
                    (I = Zt)),
                  I
                );
              }),
              (t.defaults = function (t) {
                if (t) for (var e in t) ye[e] = t[e];
                return ye;
              }),
              (t.disable = function (t, e) {
                (Zt = 0),
                  ke.forEach(function (r) {
                    return r[e ? "kill" : "disable"](t);
                  }),
                  ge(H, "wheel", Ze),
                  ge(X, "scroll", Ze),
                  clearInterval(J),
                  ge(X, "touchcancel", $t),
                  ge(U, "touchstart", $t),
                  de(ge, X, "pointerdown,touchstart,mousedown", Et),
                  de(ge, X, "pointerup,touchend,mouseup", Mt),
                  V.kill(),
                  zt(ge);
                for (var r = 0; r < x.length; r += 3)
                  me(ge, x[r], x[r + 1]), me(ge, x[r], x[r + 2]);
              }),
              (t.enable = function () {
                if (
                  ((H = window),
                  (X = document),
                  (N = X.documentElement),
                  (U = X.body),
                  K &&
                    ((j = K.utils.toArray),
                    (G = K.utils.clamp),
                    (gt = K.core.context || $t),
                    (lt = K.core.suppressOverwrites || $t),
                    (mt = H.history.scrollRestoration || "auto"),
                    (ze = H.pageYOffset),
                    K.core.globals("ScrollTrigger", t),
                    U))
                ) {
                  (Zt = 1),
                    Rt(),
                    Y.register(K),
                    (t.isTouch = Y.isTouch),
                    (ht =
                      Y.isTouch &&
                      /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                    he(H, "wheel", Ze),
                    (W = [H, X, N, U]),
                    K.matchMedia
                      ? ((t.matchMedia = function (t) {
                          var e,
                            r = K.matchMedia();
                          for (e in t) r.add(e, t[e]);
                          return r;
                        }),
                        K.addEventListener("matchMediaInit", function () {
                          return qe();
                        }),
                        K.addEventListener("matchMediaRevert", function () {
                          return Ae();
                        }),
                        K.addEventListener("matchMedia", function () {
                          Be(0, 1), $e("matchMedia");
                        }),
                        K.matchMedia("(orientation: portrait)", function () {
                          return Oe(), Oe;
                        }))
                      : console.warn("Requires GSAP 3.11.0 or later"),
                    Oe(),
                    he(X, "scroll", Ze);
                  var e,
                    r,
                    n = U.style,
                    i = n.borderTopStyle,
                    a = K.core.Animation.prototype;
                  for (
                    a.revert ||
                      Object.defineProperty(a, "revert", {
                        value: function () {
                          return this.time(-0.01, !0);
                        },
                      }),
                      n.borderTopStyle = "solid",
                      e = ce(U),
                      C.m = Math.round(e.top + C.sc()) || 0,
                      $.m = Math.round(e.left + $.sc()) || 0,
                      i
                        ? (n.borderTopStyle = i)
                        : n.removeProperty("border-top-style"),
                      J = setInterval(Pe, 250),
                      K.delayedCall(0.5, function () {
                        return (wt = 0);
                      }),
                      he(X, "touchcancel", $t),
                      he(U, "touchstart", $t),
                      de(he, X, "pointerdown,touchstart,mousedown", Et),
                      de(he, X, "pointerup,touchend,mouseup", Mt),
                      rt = K.utils.checkPrefix("transform"),
                      Ie.push(rt),
                      I = kt(),
                      V = K.delayedCall(0.2, Be).pause(),
                      ot = [
                        X,
                        "visibilitychange",
                        function () {
                          var t = H.innerWidth,
                            e = H.innerHeight;
                          X.hidden
                            ? ((it = t), (at = e))
                            : (it === t && at === e) || Se();
                        },
                        X,
                        "DOMContentLoaded",
                        Be,
                        H,
                        "load",
                        Be,
                        H,
                        "resize",
                        Se,
                      ],
                      zt(he),
                      ke.forEach(function (t) {
                        return t.enable(0, 1);
                      }),
                      r = 0;
                    r < x.length;
                    r += 3
                  )
                    me(ge, x[r], x[r + 1]), me(ge, x[r], x[r + 2]);
                }
              }),
              (t.config = function (e) {
                "limitCallbacks" in e && (vt = !!e.limitCallbacks);
                var r = e.syncInterval;
                (r && clearInterval(J)) || ((J = r) && setInterval(Pe, r)),
                  "ignoreMobileResize" in e &&
                    (pt = 1 === t.isTouch && e.ignoreMobileResize),
                  "autoRefreshEvents" in e &&
                    (zt(ge) || zt(he, e.autoRefreshEvents || "none"),
                    (ct = -1 === (e.autoRefreshEvents + "").indexOf("resize")));
              }),
              (t.scrollerProxy = function (t, e) {
                var r = A(t),
                  n = x.indexOf(r),
                  i = Lt(r);
                ~n && x.splice(n, i ? 6 : 2),
                  e && (i ? b.unshift(H, e, U, e, N, e) : b.unshift(r, e));
              }),
              (t.clearMatchMedia = function (t) {
                ke.forEach(function (e) {
                  return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0);
                });
              }),
              (t.isInViewport = function (t, e, r) {
                var n = (Ft(t) ? A(t) : t).getBoundingClientRect(),
                  i = n[r ? jt : Gt] * e || 0;
                return r
                  ? n.right - i > 0 && n.left + i < H.innerWidth
                  : n.bottom - i > 0 && n.top + i < H.innerHeight;
              }),
              (t.positionInViewport = function (t, e, r) {
                Ft(t) && (t = A(t));
                var n = t.getBoundingClientRect(),
                  i = n[r ? jt : Gt],
                  a =
                    null == e
                      ? i / 2
                      : e in _e
                      ? _e[e] * i
                      : ~e.indexOf("%")
                      ? (parseFloat(e) * i) / 100
                      : parseFloat(e) || 0;
                return r
                  ? (n.left + a) / H.innerWidth
                  : (n.top + a) / H.innerHeight;
              }),
              (t.killAll = function (t) {
                if (
                  (ke.slice(0).forEach(function (t) {
                    return "ScrollSmoother" !== t.vars.id && t.kill();
                  }),
                  !0 !== t)
                ) {
                  var e = Re.killAll || [];
                  (Re = {}),
                    e.forEach(function (t) {
                      return t();
                    });
                }
              }),
              t
            );
          })();
        (er.version = "3.12.1"),
          (er.saveStyles = function (t) {
            return t
              ? j(t).forEach(function (t) {
                  if (t && t.style) {
                    var e = Ce.indexOf(t);
                    e >= 0 && Ce.splice(e, 5),
                      Ce.push(
                        t,
                        t.style.cssText,
                        t.getBBox && t.getAttribute("transform"),
                        K.core.getCache(t),
                        gt()
                      );
                  }
                })
              : Ce;
          }),
          (er.revert = function (t, e) {
            return qe(!t, e);
          }),
          (er.create = function (t, e) {
            return new er(t, e);
          }),
          (er.refresh = function (t) {
            return t ? Se() : (I || er.register()) && Be(!0);
          }),
          (er.update = function (t) {
            return ++x.cache && Ye(!0 === t ? 2 : 0);
          }),
          (er.clearScrollMemory = Le),
          (er.maxScroll = function (t, e) {
            return Bt(t, e ? $ : C);
          }),
          (er.getScrollFunc = function (t, e) {
            return q(A(t), e ? $ : C);
          }),
          (er.getById = function (t) {
            return Te[t];
          }),
          (er.getAll = function () {
            return ke.filter(function (t) {
              return "ScrollSmoother" !== t.vars.id;
            });
          }),
          (er.isScrolling = function () {
            return !!Pt;
          }),
          (er.snapDirectional = fe),
          (er.addEventListener = function (t, e) {
            var r = Re[t] || (Re[t] = []);
            ~r.indexOf(e) || r.push(e);
          }),
          (er.removeEventListener = function (t, e) {
            var r = Re[t],
              n = r && r.indexOf(e);
            n >= 0 && r.splice(n, 1);
          }),
          (er.batch = function (t, e) {
            var r,
              n = [],
              i = {},
              a = e.interval || 0.016,
              o = e.batchMax || 1e9,
              s = function (t, e) {
                var r = [],
                  n = [],
                  i = K.delayedCall(a, function () {
                    e(r, n), (r = []), (n = []);
                  }).pause();
                return function (t) {
                  r.length || i.restart(!0),
                    r.push(t.trigger),
                    n.push(t),
                    o <= r.length && i.progress(1);
                };
              };
            for (r in e)
              i[r] =
                "on" === r.substr(0, 2) && Yt(e[r]) && "onRefreshInit" !== r
                  ? s(0, e[r])
                  : e[r];
            return (
              Yt(o) &&
                ((o = o()),
                he(er, "refresh", function () {
                  return (o = e.batchMax());
                })),
              j(t).forEach(function (t) {
                var e = {};
                for (r in i) e[r] = i[r];
                (e.trigger = t), n.push(er.create(e));
              }),
              n
            );
          });
        var rr,
          nr = function (t, e, r, n) {
            return (
              e > n ? t(n) : e < 0 && t(0),
              r > n ? (n - e) / (r - e) : r < 0 ? e / (e - r) : 1
            );
          },
          ir = function t(e, r) {
            !0 === r
              ? e.style.removeProperty("touch-action")
              : (e.style.touchAction =
                  !0 === r
                    ? "auto"
                    : r
                    ? "pan-" + r + (Y.isTouch ? " pinch-zoom" : "")
                    : "none"),
              e === N && t(U, r);
          },
          ar = { auto: 1, scroll: 1 },
          or = function (t) {
            var e,
              r = t.event,
              n = t.target,
              i = t.axis,
              a = (r.changedTouches ? r.changedTouches[0] : r).target,
              o = a._gsap || K.core.getCache(a),
              s = kt();
            if (!o._isScrollT || s - o._isScrollT > 2e3) {
              for (
                ;
                a &&
                a !== U &&
                ((a.scrollHeight <= a.clientHeight &&
                  a.scrollWidth <= a.clientWidth) ||
                  (!ar[(e = se(a)).overflowY] && !ar[e.overflowX]));

              )
                a = a.parentNode;
              (o._isScroll =
                a &&
                a !== n &&
                !Lt(a) &&
                (ar[(e = se(a)).overflowY] || ar[e.overflowX])),
                (o._isScrollT = s);
            }
            (o._isScroll || "x" === i) &&
              (r.stopPropagation(), (r._gsapAllow = !0));
          },
          sr = function (t, e, r, n) {
            return Y.create({
              target: t,
              capture: !0,
              debounce: !1,
              lockAxis: !0,
              type: e,
              onWheel: (n = n && or),
              onPress: n,
              onDrag: n,
              onScroll: n,
              onEnable: function () {
                return r && he(X, Y.eventTypes[0], cr, !1, !0);
              },
              onDisable: function () {
                return ge(X, Y.eventTypes[0], cr, !0);
              },
            });
          },
          lr = /(input|label|select|textarea)/i,
          cr = function (t) {
            var e = lr.test(t.target.tagName);
            (e || rr) && ((t._gsapAllow = !0), (rr = e));
          };
        (er.sort = function (t) {
          return ke.sort(
            t ||
              function (t, e) {
                return (
                  -1e6 * (t.vars.refreshPriority || 0) +
                  t.start -
                  (e.start + -1e6 * (e.vars.refreshPriority || 0))
                );
              }
          );
        }),
          (er.observe = function (t) {
            return new Y(t);
          }),
          (er.normalizeScroll = function (t) {
            if (void 0 === t) return ut;
            if (!0 === t && ut) return ut.enable();
            if (!1 === t) return ut && ut.kill();
            var e =
              t instanceof Y
                ? t
                : (function (t) {
                    It(t) || (t = {}),
                      (t.preventDefault = t.isNormalizer = t.allowClicks = !0),
                      t.type || (t.type = "wheel,touch"),
                      (t.debounce = !!t.debounce),
                      (t.id = t.id || "normalizer");
                    var e,
                      r,
                      n,
                      i,
                      a,
                      o,
                      s,
                      l,
                      c = t,
                      u = c.normalizeScrollX,
                      p = c.momentum,
                      f = c.allowNestedScroll,
                      d = c.onRelease,
                      h = A(t.target) || N,
                      g = K.core.globals().ScrollSmoother,
                      m = g && g.get(),
                      v =
                        ht &&
                        ((t.content && A(t.content)) ||
                          (m &&
                            !1 !== t.content &&
                            !m.smooth() &&
                            m.content())),
                      y = q(h, C),
                      _ = q(h, $),
                      b = 1,
                      w =
                        (Y.isTouch && H.visualViewport
                          ? H.visualViewport.scale * H.visualViewport.width
                          : H.outerWidth) / H.innerWidth,
                      k = 0,
                      T = Yt(p)
                        ? function () {
                            return p(e);
                          }
                        : function () {
                            return p || 2.8;
                          },
                      P = sr(h, t.type, !0, f),
                      Z = function () {
                        return (i = !1);
                      },
                      O = $t,
                      S = $t,
                      R = function () {
                        (r = Bt(h, C)),
                          (S = G(ht ? 1 : 0, r)),
                          u && (O = G(0, Bt(h, $))),
                          (n = De);
                      },
                      E = function () {
                        (v._gsap.y =
                          Ct(parseFloat(v._gsap.y) + y.offset) + "px"),
                          (v.style.transform =
                            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                            parseFloat(v._gsap.y) +
                            ", 0, 1)"),
                          (y.offset = y.cacheID = 0);
                      },
                      M = function () {
                        R(),
                          a.isActive() &&
                            a.vars.scrollY > r &&
                            (y() > r
                              ? a.progress(1) && y(r)
                              : a.resetTo("scrollY", r));
                      };
                    return (
                      v && K.set(v, { y: "+=0" }),
                      (t.ignoreCheck = function (t) {
                        return (
                          (ht &&
                            "touchmove" === t.type &&
                            (function () {
                              if (i) {
                                requestAnimationFrame(Z);
                                var t = Ct(e.deltaY / 2),
                                  r = S(y.v - t);
                                if (v && r !== y.v + y.offset) {
                                  y.offset = r - y.v;
                                  var n = Ct(
                                    (parseFloat(v && v._gsap.y) || 0) - y.offset
                                  );
                                  (v.style.transform =
                                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                                    n +
                                    ", 0, 1)"),
                                    (v._gsap.y = n + "px"),
                                    (y.cacheID = x.cache),
                                    Ye();
                                }
                                return !0;
                              }
                              y.offset && E(), (i = !0);
                            })()) ||
                          (b > 1.05 && "touchstart" !== t.type) ||
                          e.isGesturing ||
                          (t.touches && t.touches.length > 1)
                        );
                      }),
                      (t.onPress = function () {
                        i = !1;
                        var t = b;
                        (b = Ct(
                          ((H.visualViewport && H.visualViewport.scale) || 1) /
                            w
                        )),
                          a.pause(),
                          t !== b && ir(h, b > 1.01 || (!u && "x")),
                          (o = _()),
                          (s = y()),
                          R(),
                          (n = De);
                      }),
                      (t.onRelease = t.onGestureStart =
                        function (t, e) {
                          if ((y.offset && E(), e)) {
                            x.cache++;
                            var n,
                              i,
                              o = T();
                            u &&
                              ((i =
                                (n = _()) + (0.05 * o * -t.velocityX) / 0.227),
                              (o *= nr(_, n, i, Bt(h, $))),
                              (a.vars.scrollX = O(i))),
                              (i =
                                (n = y()) + (0.05 * o * -t.velocityY) / 0.227),
                              (o *= nr(y, n, i, Bt(h, C))),
                              (a.vars.scrollY = S(i)),
                              a.invalidate().duration(o).play(0.01),
                              ((ht && a.vars.scrollY >= r) || n >= r - 1) &&
                                K.to({}, { onUpdate: M, duration: o });
                          } else l.restart(!0);
                          d && d(t);
                        }),
                      (t.onWheel = function () {
                        a._ts && a.pause(),
                          kt() - k > 1e3 && ((n = 0), (k = kt()));
                      }),
                      (t.onChange = function (t, e, r, i, a) {
                        if (
                          (De !== n && R(),
                          e &&
                            u &&
                            _(
                              O(
                                i[2] === e
                                  ? o + (t.startX - t.x)
                                  : _() + e - i[1]
                              )
                            ),
                          r)
                        ) {
                          y.offset && E();
                          var l = a[2] === r,
                            c = l ? s + t.startY - t.y : y() + r - a[1],
                            p = S(c);
                          l && c !== p && (s += p - c), y(p);
                        }
                        (r || e) && Ye();
                      }),
                      (t.onEnable = function () {
                        ir(h, !u && "x"),
                          er.addEventListener("refresh", M),
                          he(H, "resize", M),
                          y.smooth &&
                            ((y.target.style.scrollBehavior = "auto"),
                            (y.smooth = _.smooth = !1)),
                          P.enable();
                      }),
                      (t.onDisable = function () {
                        ir(h, !0),
                          ge(H, "resize", M),
                          er.removeEventListener("refresh", M),
                          P.kill();
                      }),
                      (t.lockAxis = !1 !== t.lockAxis),
                      ((e = new Y(t)).iOS = ht),
                      ht && !y() && y(1),
                      ht && K.ticker.add($t),
                      (l = e._dc),
                      (a = K.to(e, {
                        ease: "power4",
                        paused: !0,
                        scrollX: u ? "+=0.1" : "+=0",
                        scrollY: "+=0.1",
                        modifiers: {
                          scrollY: Qe(y, y(), function () {
                            return a.pause();
                          }),
                        },
                        onUpdate: Ye,
                        onComplete: l.vars.onComplete,
                      })),
                      e
                    );
                  })(t);
            return (
              ut && ut.target === e.target && ut.kill(),
              Lt(e.target) && (ut = e),
              e
            );
          }),
          (er.core = {
            _getVelocityProp: L,
            _inputObserver: sr,
            _scrollers: x,
            _proxies: b,
            bridge: {
              ss: function () {
                Pt || $e("scrollStart"), (Pt = kt());
              },
              ref: function () {
                return tt;
              },
            },
          }),
          qt() && K.registerPlugin(er);
      },
      358: (t, e, r) => {
        function n(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function i(t, e) {
          (t.prototype = Object.create(e.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = e);
        }
        r.d(e, { ZP: () => Nn });
        var a,
          o,
          s,
          l,
          c,
          u,
          p,
          f,
          d,
          h,
          g,
          m,
          v,
          y,
          _,
          x = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: { lineHeight: "" },
          },
          b = { duration: 0.5, overwrite: !1, delay: 0 },
          w = 1e8,
          k = 1e-8,
          T = 2 * Math.PI,
          P = T / 4,
          Z = 0,
          O = Math.sqrt,
          S = Math.cos,
          R = Math.sin,
          E = function (t) {
            return "string" == typeof t;
          },
          M = function (t) {
            return "function" == typeof t;
          },
          $ = function (t) {
            return "number" == typeof t;
          },
          C = function (t) {
            return void 0 === t;
          },
          A = function (t) {
            return "object" == typeof t;
          },
          q = function (t) {
            return !1 !== t;
          },
          L = function () {
            return "undefined" != typeof window;
          },
          D = function (t) {
            return M(t) || E(t);
          },
          B =
            ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
            function () {},
          z = Array.isArray,
          F = /(?:-?\.?\d|\.)+/gi,
          Y = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
          K = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
          I = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
          H = /[+-]=-?[.\d]+/,
          X = /[^,'"\[\]\s]+/gi,
          N = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
          U = {},
          W = {},
          V = function (t) {
            return (W = Tt(t, U)) && Tr;
          },
          j = function (t, e) {
            return console.warn(
              "Invalid property",
              t,
              "set to",
              e,
              "Missing plugin? gsap.registerPlugin()"
            );
          },
          G = function (t, e) {
            return !e && console.warn(t);
          },
          Q = function (t, e) {
            return (t && (U[t] = e) && W && (W[t] = e)) || U;
          },
          J = function () {
            return 0;
          },
          tt = { suppressEvents: !0, isStart: !0, kill: !1 },
          et = { suppressEvents: !0, kill: !1 },
          rt = { suppressEvents: !0 },
          nt = {},
          it = [],
          at = {},
          ot = {},
          st = {},
          lt = 30,
          ct = [],
          ut = "",
          pt = function (t) {
            var e,
              r,
              n = t[0];
            if ((A(n) || M(n) || (t = [t]), !(e = (n._gsap || {}).harness))) {
              for (r = ct.length; r-- && !ct[r].targetTest(n); );
              e = ct[r];
            }
            for (r = t.length; r--; )
              (t[r] && (t[r]._gsap || (t[r]._gsap = new Be(t[r], e)))) ||
                t.splice(r, 1);
            return t;
          },
          ft = function (t) {
            return t._gsap || pt(ee(t))[0]._gsap;
          },
          dt = function (t, e, r) {
            return (r = t[e]) && M(r)
              ? t[e]()
              : (C(r) && t.getAttribute && t.getAttribute(e)) || r;
          },
          ht = function (t, e) {
            return (t = t.split(",")).forEach(e) || t;
          },
          gt = function (t) {
            return Math.round(1e5 * t) / 1e5 || 0;
          },
          mt = function (t) {
            return Math.round(1e7 * t) / 1e7 || 0;
          },
          vt = function (t, e) {
            var r = e.charAt(0),
              n = parseFloat(e.substr(2));
            return (
              (t = parseFloat(t)),
              "+" === r ? t + n : "-" === r ? t - n : "*" === r ? t * n : t / n
            );
          },
          yt = function (t, e) {
            for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r; );
            return n < r;
          },
          _t = function () {
            var t,
              e,
              r = it.length,
              n = it.slice(0);
            for (at = {}, it.length = 0, t = 0; t < r; t++)
              (e = n[t]) &&
                e._lazy &&
                (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
          },
          xt = function (t, e, r, n) {
            it.length && !o && _t(),
              t.render(e, r, n || (o && e < 0 && (t._initted || t._startAt))),
              it.length && !o && _t();
          },
          bt = function (t) {
            var e = parseFloat(t);
            return (e || 0 === e) && (t + "").match(X).length < 2
              ? e
              : E(t)
              ? t.trim()
              : t;
          },
          wt = function (t) {
            return t;
          },
          kt = function (t, e) {
            for (var r in e) r in t || (t[r] = e[r]);
            return t;
          },
          Tt = function (t, e) {
            for (var r in e) t[r] = e[r];
            return t;
          },
          Pt = function t(e, r) {
            for (var n in r)
              "__proto__" !== n &&
                "constructor" !== n &&
                "prototype" !== n &&
                (e[n] = A(r[n]) ? t(e[n] || (e[n] = {}), r[n]) : r[n]);
            return e;
          },
          Zt = function (t, e) {
            var r,
              n = {};
            for (r in t) r in e || (n[r] = t[r]);
            return n;
          },
          Ot = function (t) {
            var e,
              r = t.parent || l,
              n = t.keyframes
                ? ((e = z(t.keyframes)),
                  function (t, r) {
                    for (var n in r)
                      n in t ||
                        ("duration" === n && e) ||
                        "ease" === n ||
                        (t[n] = r[n]);
                  })
                : kt;
            if (q(t.inherit))
              for (; r; ) n(t, r.vars.defaults), (r = r.parent || r._dp);
            return t;
          },
          St = function (t, e, r, n, i) {
            void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
            var a,
              o = t[n];
            if (i) for (a = e[i]; o && o[i] > a; ) o = o._prev;
            return (
              o
                ? ((e._next = o._next), (o._next = e))
                : ((e._next = t[r]), (t[r] = e)),
              e._next ? (e._next._prev = e) : (t[n] = e),
              (e._prev = o),
              (e.parent = e._dp = t),
              e
            );
          },
          Rt = function (t, e, r, n) {
            void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
            var i = e._prev,
              a = e._next;
            i ? (i._next = a) : t[r] === e && (t[r] = a),
              a ? (a._prev = i) : t[n] === e && (t[n] = i),
              (e._next = e._prev = e.parent = null);
          },
          Et = function (t, e) {
            t.parent &&
              (!e || t.parent.autoRemoveChildren) &&
              t.parent.remove &&
              t.parent.remove(t),
              (t._act = 0);
          },
          Mt = function (t, e) {
            if (t && (!e || e._end > t._dur || e._start < 0))
              for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
            return t;
          },
          $t = function (t, e, r, n) {
            return (
              t._startAt &&
              (o
                ? t._startAt.revert(et)
                : (t.vars.immediateRender && !t.vars.autoRevert) ||
                  t._startAt.render(e, !0, n))
            );
          },
          Ct = function t(e) {
            return !e || (e._ts && t(e.parent));
          },
          At = function (t) {
            return t._repeat
              ? qt(t._tTime, (t = t.duration() + t._rDelay)) * t
              : 0;
          },
          qt = function (t, e) {
            var r = Math.floor((t /= e));
            return t && r === t ? r - 1 : r;
          },
          Lt = function (t, e) {
            return (
              (t - e._start) * e._ts +
              (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
            );
          },
          Dt = function (t) {
            return (t._end = mt(
              t._start + (t._tDur / Math.abs(t._ts || t._rts || k) || 0)
            ));
          },
          Bt = function (t, e) {
            var r = t._dp;
            return (
              r &&
                r.smoothChildTiming &&
                t._ts &&
                ((t._start = mt(
                  r._time -
                    (t._ts > 0
                      ? e / t._ts
                      : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
                )),
                Dt(t),
                r._dirty || Mt(r, t)),
              t
            );
          },
          zt = function (t, e) {
            var r;
            if (
              ((e._time || (e._initted && !e._dur)) &&
                ((r = Lt(t.rawTime(), e)),
                (!e._dur || Gt(0, e.totalDuration(), r) - e._tTime > k) &&
                  e.render(r, !0)),
              Mt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
            ) {
              if (t._dur < t.duration())
                for (r = t; r._dp; )
                  r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
              t._zTime = -1e-8;
            }
          },
          Ft = function (t, e, r, n) {
            return (
              e.parent && Et(e),
              (e._start = mt(
                ($(r) ? r : r || t !== l ? Wt(t, r, e) : t._time) + e._delay
              )),
              (e._end = mt(
                e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
              )),
              St(t, e, "_first", "_last", t._sort ? "_start" : 0),
              Ht(e) || (t._recent = e),
              n || zt(t, e),
              t._ts < 0 && Bt(t, t._tTime),
              t
            );
          },
          Yt = function (t, e) {
            return (
              (U.ScrollTrigger || j("scrollTrigger", e)) &&
              U.ScrollTrigger.create(e, t)
            );
          },
          Kt = function (t, e, r, n, i) {
            return (
              Ne(t, e, i),
              t._initted
                ? !r &&
                  t._pt &&
                  !o &&
                  ((t._dur && !1 !== t.vars.lazy) ||
                    (!t._dur && t.vars.lazy)) &&
                  d !== Pe.frame
                  ? (it.push(t), (t._lazy = [i, n]), 1)
                  : void 0
                : 1
            );
          },
          It = function t(e) {
            var r = e.parent;
            return (
              r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r))
            );
          },
          Ht = function (t) {
            var e = t.data;
            return "isFromStart" === e || "isStart" === e;
          },
          Xt = function (t, e, r, n) {
            var i = t._repeat,
              a = mt(e) || 0,
              o = t._tTime / t._tDur;
            return (
              o && !n && (t._time *= a / t._dur),
              (t._dur = a),
              (t._tDur = i
                ? i < 0
                  ? 1e10
                  : mt(a * (i + 1) + t._rDelay * i)
                : a),
              o > 0 && !n && Bt(t, (t._tTime = t._tDur * o)),
              t.parent && Dt(t),
              r || Mt(t.parent, t),
              t
            );
          },
          Nt = function (t) {
            return t instanceof Fe ? Mt(t) : Xt(t, t._dur);
          },
          Ut = { _start: 0, endTime: J, totalDuration: J },
          Wt = function t(e, r, n) {
            var i,
              a,
              o,
              s = e.labels,
              l = e._recent || Ut,
              c = e.duration() >= w ? l.endTime(!1) : e._dur;
            return E(r) && (isNaN(r) || r in s)
              ? ((a = r.charAt(0)),
                (o = "%" === r.substr(-1)),
                (i = r.indexOf("=")),
                "<" === a || ">" === a
                  ? (i >= 0 && (r = r.replace(/=/, "")),
                    ("<" === a ? l._start : l.endTime(l._repeat >= 0)) +
                      (parseFloat(r.substr(1)) || 0) *
                        (o ? (i < 0 ? l : n).totalDuration() / 100 : 1))
                  : i < 0
                  ? (r in s || (s[r] = c), s[r])
                  : ((a = parseFloat(r.charAt(i - 1) + r.substr(i + 1))),
                    o &&
                      n &&
                      (a = (a / 100) * (z(n) ? n[0] : n).totalDuration()),
                    i > 1 ? t(e, r.substr(0, i - 1), n) + a : c + a))
              : null == r
              ? c
              : +r;
          },
          Vt = function (t, e, r) {
            var n,
              i,
              a = $(e[1]),
              o = (a ? 2 : 1) + (t < 2 ? 0 : 1),
              s = e[o];
            if ((a && (s.duration = e[1]), (s.parent = r), t)) {
              for (n = s, i = r; i && !("immediateRender" in n); )
                (n = i.vars.defaults || {}),
                  (i = q(i.vars.inherit) && i.parent);
              (s.immediateRender = q(n.immediateRender)),
                t < 2 ? (s.runBackwards = 1) : (s.startAt = e[o - 1]);
            }
            return new Ge(e[0], s, e[o + 1]);
          },
          jt = function (t, e) {
            return t || 0 === t ? e(t) : e;
          },
          Gt = function (t, e, r) {
            return r < t ? t : r > e ? e : r;
          },
          Qt = function (t, e) {
            return E(t) && (e = N.exec(t)) ? e[1] : "";
          },
          Jt = [].slice,
          te = function (t, e) {
            return (
              t &&
              A(t) &&
              "length" in t &&
              ((!e && !t.length) || (t.length - 1 in t && A(t[0]))) &&
              !t.nodeType &&
              t !== c
            );
          },
          ee = function (t, e, r) {
            return s && !e && s.selector
              ? s.selector(t)
              : !E(t) || r || (!u && Ze())
              ? z(t)
                ? (function (t, e, r) {
                    return (
                      void 0 === r && (r = []),
                      t.forEach(function (t) {
                        var n;
                        return (E(t) && !e) || te(t, 1)
                          ? (n = r).push.apply(n, ee(t))
                          : r.push(t);
                      }) || r
                    );
                  })(t, r)
                : te(t)
                ? Jt.call(t, 0)
                : t
                ? [t]
                : []
              : Jt.call((e || p).querySelectorAll(t), 0);
          },
          re = function (t) {
            return (
              (t = ee(t)[0] || G("Invalid scope") || {}),
              function (e) {
                var r = t.current || t.nativeElement || t;
                return ee(
                  e,
                  r.querySelectorAll
                    ? r
                    : r === t
                    ? G("Invalid scope") || p.createElement("div")
                    : t
                );
              }
            );
          },
          ne = function (t) {
            return t.sort(function () {
              return 0.5 - Math.random();
            });
          },
          ie = function (t) {
            if (M(t)) return t;
            var e = A(t) ? t : { each: t },
              r = Ce(e.ease),
              n = e.from || 0,
              i = parseFloat(e.base) || 0,
              a = {},
              o = n > 0 && n < 1,
              s = isNaN(n) || o,
              l = e.axis,
              c = n,
              u = n;
            return (
              E(n)
                ? (c = u = { center: 0.5, edges: 0.5, end: 1 }[n] || 0)
                : !o && s && ((c = n[0]), (u = n[1])),
              function (t, o, p) {
                var f,
                  d,
                  h,
                  g,
                  m,
                  v,
                  y,
                  _,
                  x,
                  b = (p || e).length,
                  k = a[b];
                if (!k) {
                  if (!(x = "auto" === e.grid ? 0 : (e.grid || [1, w])[1])) {
                    for (
                      y = -w;
                      y < (y = p[x++].getBoundingClientRect().left) && x < b;

                    );
                    x--;
                  }
                  for (
                    k = a[b] = [],
                      f = s ? Math.min(x, b) * c - 0.5 : n % x,
                      d = x === w ? 0 : s ? (b * u) / x - 0.5 : (n / x) | 0,
                      y = 0,
                      _ = w,
                      v = 0;
                    v < b;
                    v++
                  )
                    (h = (v % x) - f),
                      (g = d - ((v / x) | 0)),
                      (k[v] = m =
                        l ? Math.abs("y" === l ? g : h) : O(h * h + g * g)),
                      m > y && (y = m),
                      m < _ && (_ = m);
                  "random" === n && ne(k),
                    (k.max = y - _),
                    (k.min = _),
                    (k.v = b =
                      (parseFloat(e.amount) ||
                        parseFloat(e.each) *
                          (x > b
                            ? b - 1
                            : l
                            ? "y" === l
                              ? b / x
                              : x
                            : Math.max(x, b / x)) ||
                        0) * ("edges" === n ? -1 : 1)),
                    (k.b = b < 0 ? i - b : i),
                    (k.u = Qt(e.amount || e.each) || 0),
                    (r = r && b < 0 ? Me(r) : r);
                }
                return (
                  (b = (k[t] - k.min) / k.max || 0),
                  mt(k.b + (r ? r(b) : b) * k.v) + k.u
                );
              }
            );
          },
          ae = function (t) {
            var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
            return function (r) {
              var n = mt(Math.round(parseFloat(r) / t) * t * e);
              return (n - (n % 1)) / e + ($(r) ? 0 : Qt(r));
            };
          },
          oe = function (t, e) {
            var r,
              n,
              i = z(t);
            return (
              !i &&
                A(t) &&
                ((r = i = t.radius || w),
                t.values
                  ? ((t = ee(t.values)), (n = !$(t[0])) && (r *= r))
                  : (t = ae(t.increment))),
              jt(
                e,
                i
                  ? M(t)
                    ? function (e) {
                        return (n = t(e)), Math.abs(n - e) <= r ? n : e;
                      }
                    : function (e) {
                        for (
                          var i,
                            a,
                            o = parseFloat(n ? e.x : e),
                            s = parseFloat(n ? e.y : 0),
                            l = w,
                            c = 0,
                            u = t.length;
                          u--;

                        )
                          (i = n
                            ? (i = t[u].x - o) * i + (a = t[u].y - s) * a
                            : Math.abs(t[u] - o)) < l && ((l = i), (c = u));
                        return (
                          (c = !r || l <= r ? t[c] : e),
                          n || c === e || $(e) ? c : c + Qt(e)
                        );
                      }
                  : ae(t)
              )
            );
          },
          se = function (t, e, r, n) {
            return jt(z(t) ? !e : !0 === r ? !!(r = 0) : !n, function () {
              return z(t)
                ? t[~~(Math.random() * t.length)]
                : (r = r || 1e-5) &&
                    (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
                    Math.floor(
                      Math.round(
                        (t - r / 2 + Math.random() * (e - t + 0.99 * r)) / r
                      ) *
                        r *
                        n
                    ) / n;
            });
          },
          le = function (t, e, r) {
            return jt(r, function (r) {
              return t[~~e(r)];
            });
          },
          ce = function (t) {
            for (
              var e, r, n, i, a = 0, o = "";
              ~(e = t.indexOf("random(", a));

            )
              (n = t.indexOf(")", e)),
                (i = "[" === t.charAt(e + 7)),
                (r = t.substr(e + 7, n - e - 7).match(i ? X : F)),
                (o +=
                  t.substr(a, e - a) +
                  se(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5)),
                (a = n + 1);
            return o + t.substr(a, t.length - a);
          },
          ue = function (t, e, r, n, i) {
            var a = e - t,
              o = n - r;
            return jt(i, function (e) {
              return r + (((e - t) / a) * o || 0);
            });
          },
          pe = function (t, e, r) {
            var n,
              i,
              a,
              o = t.labels,
              s = w;
            for (n in o)
              (i = o[n] - e) < 0 == !!r &&
                i &&
                s > (i = Math.abs(i)) &&
                ((a = n), (s = i));
            return a;
          },
          fe = function (t, e, r) {
            var n,
              i,
              a,
              o = t.vars,
              l = o[e],
              c = s,
              u = t._ctx;
            if (l)
              return (
                (n = o[e + "Params"]),
                (i = o.callbackScope || t),
                r && it.length && _t(),
                u && (s = u),
                (a = n ? l.apply(i, n) : l.call(i)),
                (s = c),
                a
              );
          },
          de = function (t) {
            return (
              Et(t),
              t.scrollTrigger && t.scrollTrigger.kill(!!o),
              t.progress() < 1 && fe(t, "onInterrupt"),
              t
            );
          },
          he = [],
          ge = function (t) {
            if (L() && t) {
              var e = (t = (!t.name && t.default) || t).name,
                r = M(t),
                n =
                  e && !r && t.init
                    ? function () {
                        this._props = [];
                      }
                    : t,
                i = {
                  init: J,
                  render: or,
                  add: He,
                  kill: lr,
                  modifier: sr,
                  rawVars: 0,
                },
                a = {
                  targetTest: 0,
                  get: 0,
                  getSetter: rr,
                  aliases: {},
                  register: 0,
                };
              if ((Ze(), t !== n)) {
                if (ot[e]) return;
                kt(n, kt(Zt(t, i), a)),
                  Tt(n.prototype, Tt(i, Zt(t, a))),
                  (ot[(n.prop = e)] = n),
                  t.targetTest && (ct.push(n), (nt[e] = 1)),
                  (e =
                    ("css" === e
                      ? "CSS"
                      : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
              }
              Q(e, n), t.register && t.register(Tr, n, pr);
            } else t && he.push(t);
          },
          me = 255,
          ve = {
            aqua: [0, me, me],
            lime: [0, me, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, me],
            navy: [0, 0, 128],
            white: [me, me, me],
            olive: [128, 128, 0],
            yellow: [me, me, 0],
            orange: [me, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [me, 0, 0],
            pink: [me, 192, 203],
            cyan: [0, me, me],
            transparent: [me, me, me, 0],
          },
          ye = function (t, e, r) {
            return (
              ((6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
                ? e + (r - e) * t * 6
                : t < 0.5
                ? r
                : 3 * t < 2
                ? e + (r - e) * (2 / 3 - t) * 6
                : e) *
                me +
                0.5) |
              0
            );
          },
          _e = function (t, e, r) {
            var n,
              i,
              a,
              o,
              s,
              l,
              c,
              u,
              p,
              f,
              d = t ? ($(t) ? [t >> 16, (t >> 8) & me, t & me] : 0) : ve.black;
            if (!d) {
              if (
                ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ve[t])
              )
                d = ve[t];
              else if ("#" === t.charAt(0)) {
                if (
                  (t.length < 6 &&
                    ((n = t.charAt(1)),
                    (i = t.charAt(2)),
                    (a = t.charAt(3)),
                    (t =
                      "#" +
                      n +
                      n +
                      i +
                      i +
                      a +
                      a +
                      (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))),
                  9 === t.length)
                )
                  return [
                    (d = parseInt(t.substr(1, 6), 16)) >> 16,
                    (d >> 8) & me,
                    d & me,
                    parseInt(t.substr(7), 16) / 255,
                  ];
                d = [
                  (t = parseInt(t.substr(1), 16)) >> 16,
                  (t >> 8) & me,
                  t & me,
                ];
              } else if ("hsl" === t.substr(0, 3))
                if (((d = f = t.match(F)), e)) {
                  if (~t.indexOf("="))
                    return (d = t.match(Y)), r && d.length < 4 && (d[3] = 1), d;
                } else
                  (o = (+d[0] % 360) / 360),
                    (s = +d[1] / 100),
                    (n =
                      2 * (l = +d[2] / 100) -
                      (i = l <= 0.5 ? l * (s + 1) : l + s - l * s)),
                    d.length > 3 && (d[3] *= 1),
                    (d[0] = ye(o + 1 / 3, n, i)),
                    (d[1] = ye(o, n, i)),
                    (d[2] = ye(o - 1 / 3, n, i));
              else d = t.match(F) || ve.transparent;
              d = d.map(Number);
            }
            return (
              e &&
                !f &&
                ((n = d[0] / me),
                (i = d[1] / me),
                (a = d[2] / me),
                (l = ((c = Math.max(n, i, a)) + (u = Math.min(n, i, a))) / 2),
                c === u
                  ? (o = s = 0)
                  : ((p = c - u),
                    (s = l > 0.5 ? p / (2 - c - u) : p / (c + u)),
                    (o =
                      c === n
                        ? (i - a) / p + (i < a ? 6 : 0)
                        : c === i
                        ? (a - n) / p + 2
                        : (n - i) / p + 4),
                    (o *= 60)),
                (d[0] = ~~(o + 0.5)),
                (d[1] = ~~(100 * s + 0.5)),
                (d[2] = ~~(100 * l + 0.5))),
              r && d.length < 4 && (d[3] = 1),
              d
            );
          },
          xe = function (t) {
            var e = [],
              r = [],
              n = -1;
            return (
              t.split(we).forEach(function (t) {
                var i = t.match(K) || [];
                e.push.apply(e, i), r.push((n += i.length + 1));
              }),
              (e.c = r),
              e
            );
          },
          be = function (t, e, r) {
            var n,
              i,
              a,
              o,
              s = "",
              l = (t + s).match(we),
              c = e ? "hsla(" : "rgba(",
              u = 0;
            if (!l) return t;
            if (
              ((l = l.map(function (t) {
                return (
                  (t = _e(t, e, 1)) &&
                  c +
                    (e
                      ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                      : t.join(",")) +
                    ")"
                );
              })),
              r && ((a = xe(t)), (n = r.c).join(s) !== a.c.join(s)))
            )
              for (o = (i = t.replace(we, "1").split(K)).length - 1; u < o; u++)
                s +=
                  i[u] +
                  (~n.indexOf(u)
                    ? l.shift() || c + "0,0,0,0)"
                    : (a.length ? a : l.length ? l : r).shift());
            if (!i)
              for (o = (i = t.split(we)).length - 1; u < o; u++)
                s += i[u] + l[u];
            return s + i[o];
          },
          we = (function () {
            var t,
              e =
                "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in ve) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi");
          })(),
          ke = /hsl[a]?\(/,
          Te = function (t) {
            var e,
              r = t.join(" ");
            if (((we.lastIndex = 0), we.test(r)))
              return (
                (e = ke.test(r)),
                (t[1] = be(t[1], e)),
                (t[0] = be(t[0], e, xe(t[1]))),
                !0
              );
          },
          Pe = (function () {
            var t,
              e,
              r,
              n,
              i,
              a,
              o = Date.now,
              s = 500,
              l = 33,
              d = o(),
              h = d,
              m = 1e3 / 240,
              v = m,
              y = [],
              _ = function r(c) {
                var u,
                  p,
                  f,
                  g,
                  _ = o() - h,
                  x = !0 === c;
                if (
                  (_ > s && (d += _ - l),
                  ((u = (f = (h += _) - d) - v) > 0 || x) &&
                    ((g = ++n.frame),
                    (i = f - 1e3 * n.time),
                    (n.time = f /= 1e3),
                    (v += u + (u >= m ? 4 : m - u)),
                    (p = 1)),
                  x || (t = e(r)),
                  p)
                )
                  for (a = 0; a < y.length; a++) y[a](f, i, g, c);
              };
            return (n = {
              time: 0,
              frame: 0,
              tick: function () {
                _(!0);
              },
              deltaRatio: function (t) {
                return i / (1e3 / (t || 60));
              },
              wake: function () {
                f &&
                  (!u &&
                    L() &&
                    ((c = u = window),
                    (p = c.document || {}),
                    (U.gsap = Tr),
                    (c.gsapVersions || (c.gsapVersions = [])).push(Tr.version),
                    V(W || c.GreenSockGlobals || (!c.gsap && c) || {}),
                    (r = c.requestAnimationFrame),
                    he.forEach(ge)),
                  t && n.sleep(),
                  (e =
                    r ||
                    function (t) {
                      return setTimeout(t, (v - 1e3 * n.time + 1) | 0);
                    }),
                  (g = 1),
                  _(2));
              },
              sleep: function () {
                (r ? c.cancelAnimationFrame : clearTimeout)(t),
                  (g = 0),
                  (e = J);
              },
              lagSmoothing: function (t, e) {
                (s = t || 1 / 0), (l = Math.min(e || 33, s));
              },
              fps: function (t) {
                (m = 1e3 / (t || 240)), (v = 1e3 * n.time + m);
              },
              add: function (t, e, r) {
                var i = e
                  ? function (e, r, a, o) {
                      t(e, r, a, o), n.remove(i);
                    }
                  : t;
                return n.remove(t), y[r ? "unshift" : "push"](i), Ze(), i;
              },
              remove: function (t, e) {
                ~(e = y.indexOf(t)) && y.splice(e, 1) && a >= e && a--;
              },
              _listeners: y,
            });
          })(),
          Ze = function () {
            return !g && Pe.wake();
          },
          Oe = {},
          Se = /^[\d.\-M][\d.\-,\s]/,
          Re = /["']/g,
          Ee = function (t) {
            for (
              var e,
                r,
                n,
                i = {},
                a = t.substr(1, t.length - 3).split(":"),
                o = a[0],
                s = 1,
                l = a.length;
              s < l;
              s++
            )
              (r = a[s]),
                (e = s !== l - 1 ? r.lastIndexOf(",") : r.length),
                (n = r.substr(0, e)),
                (i[o] = isNaN(n) ? n.replace(Re, "").trim() : +n),
                (o = r.substr(e + 1).trim());
            return i;
          },
          Me = function (t) {
            return function (e) {
              return 1 - t(1 - e);
            };
          },
          $e = function t(e, r) {
            for (var n, i = e._first; i; )
              i instanceof Fe
                ? t(i, r)
                : !i.vars.yoyoEase ||
                  (i._yoyo && i._repeat) ||
                  i._yoyo === r ||
                  (i.timeline
                    ? t(i.timeline, r)
                    : ((n = i._ease),
                      (i._ease = i._yEase),
                      (i._yEase = n),
                      (i._yoyo = r))),
                (i = i._next);
          },
          Ce = function (t, e) {
            return (
              (t &&
                (M(t)
                  ? t
                  : Oe[t] ||
                    (function (t) {
                      var e,
                        r,
                        n,
                        i,
                        a = (t + "").split("("),
                        o = Oe[a[0]];
                      return o && a.length > 1 && o.config
                        ? o.config.apply(
                            null,
                            ~t.indexOf("{")
                              ? [Ee(a[1])]
                              : ((e = t),
                                (r = e.indexOf("(") + 1),
                                (n = e.indexOf(")")),
                                (i = e.indexOf("(", r)),
                                e.substring(
                                  r,
                                  ~i && i < n ? e.indexOf(")", n + 1) : n
                                ))
                                  .split(",")
                                  .map(bt)
                          )
                        : Oe._CE && Se.test(t)
                        ? Oe._CE("", t)
                        : o;
                    })(t))) ||
              e
            );
          },
          Ae = function (t, e, r, n) {
            void 0 === r &&
              (r = function (t) {
                return 1 - e(1 - t);
              }),
              void 0 === n &&
                (n = function (t) {
                  return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
                });
            var i,
              a = { easeIn: e, easeOut: r, easeInOut: n };
            return (
              ht(t, function (t) {
                for (var e in ((Oe[t] = U[t] = a),
                (Oe[(i = t.toLowerCase())] = r),
                a))
                  Oe[
                    i +
                      ("easeIn" === e
                        ? ".in"
                        : "easeOut" === e
                        ? ".out"
                        : ".inOut")
                  ] = Oe[t + "." + e] = a[e];
              }),
              a
            );
          },
          qe = function (t) {
            return function (e) {
              return e < 0.5
                ? (1 - t(1 - 2 * e)) / 2
                : 0.5 + t(2 * (e - 0.5)) / 2;
            };
          },
          Le = function t(e, r, n) {
            var i = r >= 1 ? r : 1,
              a = (n || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1),
              o = (a / T) * (Math.asin(1 / i) || 0),
              s = function (t) {
                return 1 === t
                  ? 1
                  : i * Math.pow(2, -10 * t) * R((t - o) * a) + 1;
              },
              l =
                "out" === e
                  ? s
                  : "in" === e
                  ? function (t) {
                      return 1 - s(1 - t);
                    }
                  : qe(s);
            return (
              (a = T / a),
              (l.config = function (r, n) {
                return t(e, r, n);
              }),
              l
            );
          },
          De = function t(e, r) {
            void 0 === r && (r = 1.70158);
            var n = function (t) {
                return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
              },
              i =
                "out" === e
                  ? n
                  : "in" === e
                  ? function (t) {
                      return 1 - n(1 - t);
                    }
                  : qe(n);
            return (
              (i.config = function (r) {
                return t(e, r);
              }),
              i
            );
          };
        ht("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
          var r = e < 5 ? e + 1 : e;
          Ae(
            t + ",Power" + (r - 1),
            e
              ? function (t) {
                  return Math.pow(t, r);
                }
              : function (t) {
                  return t;
                },
            function (t) {
              return 1 - Math.pow(1 - t, r);
            },
            function (t) {
              return t < 0.5
                ? Math.pow(2 * t, r) / 2
                : 1 - Math.pow(2 * (1 - t), r) / 2;
            }
          );
        }),
          (Oe.Linear.easeNone = Oe.none = Oe.Linear.easeIn),
          Ae("Elastic", Le("in"), Le("out"), Le()),
          (m = 7.5625),
          (y = 1 / (v = 2.75)),
          Ae(
            "Bounce",
            function (t) {
              return 1 - _(1 - t);
            },
            (_ = function (t) {
              return t < y
                ? m * t * t
                : t < 0.7272727272727273
                ? m * Math.pow(t - 1.5 / v, 2) + 0.75
                : t < 0.9090909090909092
                ? m * (t -= 2.25 / v) * t + 0.9375
                : m * Math.pow(t - 2.625 / v, 2) + 0.984375;
            })
          ),
          Ae("Expo", function (t) {
            return t ? Math.pow(2, 10 * (t - 1)) : 0;
          }),
          Ae("Circ", function (t) {
            return -(O(1 - t * t) - 1);
          }),
          Ae("Sine", function (t) {
            return 1 === t ? 1 : 1 - S(t * P);
          }),
          Ae("Back", De("in"), De("out"), De()),
          (Oe.SteppedEase =
            Oe.steps =
            U.SteppedEase =
              {
                config: function (t, e) {
                  void 0 === t && (t = 1);
                  var r = 1 / t,
                    n = t + (e ? 0 : 1),
                    i = e ? 1 : 0;
                  return function (t) {
                    return (((n * Gt(0, 0.99999999, t)) | 0) + i) * r;
                  };
                },
              }),
          (b.ease = Oe["quad.out"]),
          ht(
            "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
            function (t) {
              return (ut += t + "," + t + "Params,");
            }
          );
        var Be = function (t, e) {
            (this.id = Z++),
              (t._gsap = this),
              (this.target = t),
              (this.harness = e),
              (this.get = e ? e.get : dt),
              (this.set = e ? e.getSetter : rr);
          },
          ze = (function () {
            function t(t) {
              (this.vars = t),
                (this._delay = +t.delay || 0),
                (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
                  ((this._rDelay = t.repeatDelay || 0),
                  (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
                (this._ts = 1),
                Xt(this, +t.duration, 1, 1),
                (this.data = t.data),
                s && ((this._ctx = s), s.data.push(this)),
                g || Pe.wake();
            }
            var e = t.prototype;
            return (
              (e.delay = function (t) {
                return t || 0 === t
                  ? (this.parent &&
                      this.parent.smoothChildTiming &&
                      this.startTime(this._start + t - this._delay),
                    (this._delay = t),
                    this)
                  : this._delay;
              }),
              (e.duration = function (t) {
                return arguments.length
                  ? this.totalDuration(
                      this._repeat > 0
                        ? t + (t + this._rDelay) * this._repeat
                        : t
                    )
                  : this.totalDuration() && this._dur;
              }),
              (e.totalDuration = function (t) {
                return arguments.length
                  ? ((this._dirty = 0),
                    Xt(
                      this,
                      this._repeat < 0
                        ? t
                        : (t - this._repeat * this._rDelay) / (this._repeat + 1)
                    ))
                  : this._tDur;
              }),
              (e.totalTime = function (t, e) {
                if ((Ze(), !arguments.length)) return this._tTime;
                var r = this._dp;
                if (r && r.smoothChildTiming && this._ts) {
                  for (
                    Bt(this, t), !r._dp || r.parent || zt(r, this);
                    r && r.parent;

                  )
                    r.parent._time !==
                      r._start +
                        (r._ts >= 0
                          ? r._tTime / r._ts
                          : (r.totalDuration() - r._tTime) / -r._ts) &&
                      r.totalTime(r._tTime, !0),
                      (r = r.parent);
                  !this.parent &&
                    this._dp.autoRemoveChildren &&
                    ((this._ts > 0 && t < this._tDur) ||
                      (this._ts < 0 && t > 0) ||
                      (!this._tDur && !t)) &&
                    Ft(this._dp, this, this._start - this._delay);
                }
                return (
                  (this._tTime !== t ||
                    (!this._dur && !e) ||
                    (this._initted && Math.abs(this._zTime) === k) ||
                    (!t && !this._initted && (this.add || this._ptLookup))) &&
                    (this._ts || (this._pTime = t), xt(this, t, e)),
                  this
                );
              }),
              (e.time = function (t, e) {
                return arguments.length
                  ? this.totalTime(
                      Math.min(this.totalDuration(), t + At(this)) %
                        (this._dur + this._rDelay) || (t ? this._dur : 0),
                      e
                    )
                  : this._time;
              }),
              (e.totalProgress = function (t, e) {
                return arguments.length
                  ? this.totalTime(this.totalDuration() * t, e)
                  : this.totalDuration()
                  ? Math.min(1, this._tTime / this._tDur)
                  : this.ratio;
              }),
              (e.progress = function (t, e) {
                return arguments.length
                  ? this.totalTime(
                      this.duration() *
                        (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                        At(this),
                      e
                    )
                  : this.duration()
                  ? Math.min(1, this._time / this._dur)
                  : this.ratio;
              }),
              (e.iteration = function (t, e) {
                var r = this.duration() + this._rDelay;
                return arguments.length
                  ? this.totalTime(this._time + (t - 1) * r, e)
                  : this._repeat
                  ? qt(this._tTime, r) + 1
                  : 1;
              }),
              (e.timeScale = function (t) {
                if (!arguments.length)
                  return -1e-8 === this._rts ? 0 : this._rts;
                if (this._rts === t) return this;
                var e =
                  this.parent && this._ts
                    ? Lt(this.parent._time, this)
                    : this._tTime;
                return (
                  (this._rts = +t || 0),
                  (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
                  this.totalTime(Gt(-Math.abs(this._delay), this._tDur, e), !0),
                  Dt(this),
                  (function (t) {
                    for (var e = t.parent; e && e.parent; )
                      (e._dirty = 1), e.totalDuration(), (e = e.parent);
                    return t;
                  })(this)
                );
              }),
              (e.paused = function (t) {
                return arguments.length
                  ? (this._ps !== t &&
                      ((this._ps = t),
                      t
                        ? ((this._pTime =
                            this._tTime ||
                            Math.max(-this._delay, this.rawTime())),
                          (this._ts = this._act = 0))
                        : (Ze(),
                          (this._ts = this._rts),
                          this.totalTime(
                            this.parent && !this.parent.smoothChildTiming
                              ? this.rawTime()
                              : this._tTime || this._pTime,
                            1 === this.progress() &&
                              Math.abs(this._zTime) !== k &&
                              (this._tTime -= k)
                          ))),
                    this)
                  : this._ps;
              }),
              (e.startTime = function (t) {
                if (arguments.length) {
                  this._start = t;
                  var e = this.parent || this._dp;
                  return (
                    e &&
                      (e._sort || !this.parent) &&
                      Ft(e, this, t - this._delay),
                    this
                  );
                }
                return this._start;
              }),
              (e.endTime = function (t) {
                return (
                  this._start +
                  (q(t) ? this.totalDuration() : this.duration()) /
                    Math.abs(this._ts || 1)
                );
              }),
              (e.rawTime = function (t) {
                var e = this.parent || this._dp;
                return e
                  ? t &&
                    (!this._ts ||
                      (this._repeat && this._time && this.totalProgress() < 1))
                    ? this._tTime % (this._dur + this._rDelay)
                    : this._ts
                    ? Lt(e.rawTime(t), this)
                    : this._tTime
                  : this._tTime;
              }),
              (e.revert = function (t) {
                void 0 === t && (t = rt);
                var e = o;
                return (
                  (o = t),
                  (this._initted || this._startAt) &&
                    (this.timeline && this.timeline.revert(t),
                    this.totalTime(-0.01, t.suppressEvents)),
                  "nested" !== this.data && !1 !== t.kill && this.kill(),
                  (o = e),
                  this
                );
              }),
              (e.globalTime = function (t) {
                for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
                  (r = e._start + r / (e._ts || 1)), (e = e._dp);
                return !this.parent && this._sat
                  ? this._sat.vars.immediateRender
                    ? -1
                    : this._sat.globalTime(t)
                  : r;
              }),
              (e.repeat = function (t) {
                return arguments.length
                  ? ((this._repeat = t === 1 / 0 ? -2 : t), Nt(this))
                  : -2 === this._repeat
                  ? 1 / 0
                  : this._repeat;
              }),
              (e.repeatDelay = function (t) {
                if (arguments.length) {
                  var e = this._time;
                  return (this._rDelay = t), Nt(this), e ? this.time(e) : this;
                }
                return this._rDelay;
              }),
              (e.yoyo = function (t) {
                return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
              }),
              (e.seek = function (t, e) {
                return this.totalTime(Wt(this, t), q(e));
              }),
              (e.restart = function (t, e) {
                return this.play().totalTime(t ? -this._delay : 0, q(e));
              }),
              (e.play = function (t, e) {
                return (
                  null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                );
              }),
              (e.reverse = function (t, e) {
                return (
                  null != t && this.seek(t || this.totalDuration(), e),
                  this.reversed(!0).paused(!1)
                );
              }),
              (e.pause = function (t, e) {
                return null != t && this.seek(t, e), this.paused(!0);
              }),
              (e.resume = function () {
                return this.paused(!1);
              }),
              (e.reversed = function (t) {
                return arguments.length
                  ? (!!t !== this.reversed() &&
                      this.timeScale(-this._rts || (t ? -1e-8 : 0)),
                    this)
                  : this._rts < 0;
              }),
              (e.invalidate = function () {
                return (
                  (this._initted = this._act = 0), (this._zTime = -1e-8), this
                );
              }),
              (e.isActive = function () {
                var t,
                  e = this.parent || this._dp,
                  r = this._start;
                return !(
                  e &&
                  !(
                    this._ts &&
                    this._initted &&
                    e.isActive() &&
                    (t = e.rawTime(!0)) >= r &&
                    t < this.endTime(!0) - k
                  )
                );
              }),
              (e.eventCallback = function (t, e, r) {
                var n = this.vars;
                return arguments.length > 1
                  ? (e
                      ? ((n[t] = e),
                        r && (n[t + "Params"] = r),
                        "onUpdate" === t && (this._onUpdate = e))
                      : delete n[t],
                    this)
                  : n[t];
              }),
              (e.then = function (t) {
                var e = this;
                return new Promise(function (r) {
                  var n = M(t) ? t : wt,
                    i = function () {
                      var t = e.then;
                      (e.then = null),
                        M(n) &&
                          (n = n(e)) &&
                          (n.then || n === e) &&
                          (e.then = t),
                        r(n),
                        (e.then = t);
                    };
                  (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
                  (!e._tTime && e._ts < 0)
                    ? i()
                    : (e._prom = i);
                });
              }),
              (e.kill = function () {
                de(this);
              }),
              t
            );
          })();
        kt(ze.prototype, {
          _time: 0,
          _start: 0,
          _end: 0,
          _tTime: 0,
          _tDur: 0,
          _dirty: 0,
          _repeat: 0,
          _yoyo: !1,
          parent: null,
          _initted: !1,
          _rDelay: 0,
          _ts: 1,
          _dp: 0,
          ratio: 0,
          _zTime: -1e-8,
          _prom: 0,
          _ps: !1,
          _rts: 1,
        });
        var Fe = (function (t) {
          function e(e, r) {
            var i;
            return (
              void 0 === e && (e = {}),
              ((i = t.call(this, e) || this).labels = {}),
              (i.smoothChildTiming = !!e.smoothChildTiming),
              (i.autoRemoveChildren = !!e.autoRemoveChildren),
              (i._sort = q(e.sortChildren)),
              l && Ft(e.parent || l, n(i), r),
              e.reversed && i.reverse(),
              e.paused && i.paused(!0),
              e.scrollTrigger && Yt(n(i), e.scrollTrigger),
              i
            );
          }
          i(e, t);
          var r = e.prototype;
          return (
            (r.to = function (t, e, r) {
              return Vt(0, arguments, this), this;
            }),
            (r.from = function (t, e, r) {
              return Vt(1, arguments, this), this;
            }),
            (r.fromTo = function (t, e, r, n) {
              return Vt(2, arguments, this), this;
            }),
            (r.set = function (t, e, r) {
              return (
                (e.duration = 0),
                (e.parent = this),
                Ot(e).repeatDelay || (e.repeat = 0),
                (e.immediateRender = !!e.immediateRender),
                new Ge(t, e, Wt(this, r), 1),
                this
              );
            }),
            (r.call = function (t, e, r) {
              return Ft(this, Ge.delayedCall(0, t, e), r);
            }),
            (r.staggerTo = function (t, e, r, n, i, a, o) {
              return (
                (r.duration = e),
                (r.stagger = r.stagger || n),
                (r.onComplete = a),
                (r.onCompleteParams = o),
                (r.parent = this),
                new Ge(t, r, Wt(this, i)),
                this
              );
            }),
            (r.staggerFrom = function (t, e, r, n, i, a, o) {
              return (
                (r.runBackwards = 1),
                (Ot(r).immediateRender = q(r.immediateRender)),
                this.staggerTo(t, e, r, n, i, a, o)
              );
            }),
            (r.staggerFromTo = function (t, e, r, n, i, a, o, s) {
              return (
                (n.startAt = r),
                (Ot(n).immediateRender = q(n.immediateRender)),
                this.staggerTo(t, e, n, i, a, o, s)
              );
            }),
            (r.render = function (t, e, r) {
              var n,
                i,
                a,
                s,
                c,
                u,
                p,
                f,
                d,
                h,
                g,
                m,
                v = this._time,
                y = this._dirty ? this.totalDuration() : this._tDur,
                _ = this._dur,
                x = t <= 0 ? 0 : mt(t),
                b = this._zTime < 0 != t < 0 && (this._initted || !_);
              if (
                (this !== l && x > y && t >= 0 && (x = y),
                x !== this._tTime || r || b)
              ) {
                if (
                  (v !== this._time &&
                    _ &&
                    ((x += this._time - v), (t += this._time - v)),
                  (n = x),
                  (d = this._start),
                  (u = !(f = this._ts)),
                  b && (_ || (v = this._zTime), (t || !e) && (this._zTime = t)),
                  this._repeat)
                ) {
                  if (
                    ((g = this._yoyo),
                    (c = _ + this._rDelay),
                    this._repeat < -1 && t < 0)
                  )
                    return this.totalTime(100 * c + t, e, r);
                  if (
                    ((n = mt(x % c)),
                    x === y
                      ? ((s = this._repeat), (n = _))
                      : ((s = ~~(x / c)) && s === x / c && ((n = _), s--),
                        n > _ && (n = _)),
                    (h = qt(this._tTime, c)),
                    !v &&
                      this._tTime &&
                      h !== s &&
                      this._tTime - h * c - this._dur <= 0 &&
                      (h = s),
                    g && 1 & s && ((n = _ - n), (m = 1)),
                    s !== h && !this._lock)
                  ) {
                    var w = g && 1 & h,
                      T = w === (g && 1 & s);
                    if (
                      (s < h && (w = !w),
                      (v = w ? 0 : _),
                      (this._lock = 1),
                      (this.render(v || (m ? 0 : mt(s * c)), e, !_)._lock = 0),
                      (this._tTime = x),
                      !e && this.parent && fe(this, "onRepeat"),
                      this.vars.repeatRefresh &&
                        !m &&
                        (this.invalidate()._lock = 1),
                      (v && v !== this._time) ||
                        u !== !this._ts ||
                        (this.vars.onRepeat && !this.parent && !this._act))
                    )
                      return this;
                    if (
                      ((_ = this._dur),
                      (y = this._tDur),
                      T &&
                        ((this._lock = 2),
                        (v = w ? _ : -1e-4),
                        this.render(v, !0),
                        this.vars.repeatRefresh && !m && this.invalidate()),
                      (this._lock = 0),
                      !this._ts && !u)
                    )
                      return this;
                    $e(this, m);
                  }
                }
                if (
                  (this._hasPause &&
                    !this._forcing &&
                    this._lock < 2 &&
                    ((p = (function (t, e, r) {
                      var n;
                      if (r > e)
                        for (n = t._first; n && n._start <= r; ) {
                          if ("isPause" === n.data && n._start > e) return n;
                          n = n._next;
                        }
                      else
                        for (n = t._last; n && n._start >= r; ) {
                          if ("isPause" === n.data && n._start < e) return n;
                          n = n._prev;
                        }
                    })(this, mt(v), mt(n))),
                    p && (x -= n - (n = p._start))),
                  (this._tTime = x),
                  (this._time = n),
                  (this._act = !f),
                  this._initted ||
                    ((this._onUpdate = this.vars.onUpdate),
                    (this._initted = 1),
                    (this._zTime = t),
                    (v = 0)),
                  !v &&
                    n &&
                    !e &&
                    !s &&
                    (fe(this, "onStart"), this._tTime !== x))
                )
                  return this;
                if (n >= v && t >= 0)
                  for (i = this._first; i; ) {
                    if (
                      ((a = i._next),
                      (i._act || n >= i._start) && i._ts && p !== i)
                    ) {
                      if (i.parent !== this) return this.render(t, e, r);
                      if (
                        (i.render(
                          i._ts > 0
                            ? (n - i._start) * i._ts
                            : (i._dirty ? i.totalDuration() : i._tDur) +
                                (n - i._start) * i._ts,
                          e,
                          r
                        ),
                        n !== this._time || (!this._ts && !u))
                      ) {
                        (p = 0), a && (x += this._zTime = -1e-8);
                        break;
                      }
                    }
                    i = a;
                  }
                else {
                  i = this._last;
                  for (var P = t < 0 ? t : n; i; ) {
                    if (
                      ((a = i._prev),
                      (i._act || P <= i._end) && i._ts && p !== i)
                    ) {
                      if (i.parent !== this) return this.render(t, e, r);
                      if (
                        (i.render(
                          i._ts > 0
                            ? (P - i._start) * i._ts
                            : (i._dirty ? i.totalDuration() : i._tDur) +
                                (P - i._start) * i._ts,
                          e,
                          r || (o && (i._initted || i._startAt))
                        ),
                        n !== this._time || (!this._ts && !u))
                      ) {
                        (p = 0), a && (x += this._zTime = P ? -1e-8 : k);
                        break;
                      }
                    }
                    i = a;
                  }
                }
                if (
                  p &&
                  !e &&
                  (this.pause(),
                  (p.render(n >= v ? 0 : -1e-8)._zTime = n >= v ? 1 : -1),
                  this._ts)
                )
                  return (this._start = d), Dt(this), this.render(t, e, r);
                this._onUpdate && !e && fe(this, "onUpdate", !0),
                  ((x === y && this._tTime >= this.totalDuration()) ||
                    (!x && v)) &&
                    ((d !== this._start &&
                      Math.abs(f) === Math.abs(this._ts)) ||
                      this._lock ||
                      ((t || !_) &&
                        ((x === y && this._ts > 0) || (!x && this._ts < 0)) &&
                        Et(this, 1),
                      e ||
                        (t < 0 && !v) ||
                        (!x && !v && y) ||
                        (fe(
                          this,
                          x === y && t >= 0
                            ? "onComplete"
                            : "onReverseComplete",
                          !0
                        ),
                        this._prom &&
                          !(x < y && this.timeScale() > 0) &&
                          this._prom())));
              }
              return this;
            }),
            (r.add = function (t, e) {
              var r = this;
              if (($(e) || (e = Wt(this, e, t)), !(t instanceof ze))) {
                if (z(t))
                  return (
                    t.forEach(function (t) {
                      return r.add(t, e);
                    }),
                    this
                  );
                if (E(t)) return this.addLabel(t, e);
                if (!M(t)) return this;
                t = Ge.delayedCall(0, t);
              }
              return this !== t ? Ft(this, t, e) : this;
            }),
            (r.getChildren = function (t, e, r, n) {
              void 0 === t && (t = !0),
                void 0 === e && (e = !0),
                void 0 === r && (r = !0),
                void 0 === n && (n = -w);
              for (var i = [], a = this._first; a; )
                a._start >= n &&
                  (a instanceof Ge
                    ? e && i.push(a)
                    : (r && i.push(a),
                      t && i.push.apply(i, a.getChildren(!0, e, r)))),
                  (a = a._next);
              return i;
            }),
            (r.getById = function (t) {
              for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
                if (e[r].vars.id === t) return e[r];
            }),
            (r.remove = function (t) {
              return E(t)
                ? this.removeLabel(t)
                : M(t)
                ? this.killTweensOf(t)
                : (Rt(this, t),
                  t === this._recent && (this._recent = this._last),
                  Mt(this));
            }),
            (r.totalTime = function (e, r) {
              return arguments.length
                ? ((this._forcing = 1),
                  !this._dp &&
                    this._ts &&
                    (this._start = mt(
                      Pe.time -
                        (this._ts > 0
                          ? e / this._ts
                          : (this.totalDuration() - e) / -this._ts)
                    )),
                  t.prototype.totalTime.call(this, e, r),
                  (this._forcing = 0),
                  this)
                : this._tTime;
            }),
            (r.addLabel = function (t, e) {
              return (this.labels[t] = Wt(this, e)), this;
            }),
            (r.removeLabel = function (t) {
              return delete this.labels[t], this;
            }),
            (r.addPause = function (t, e, r) {
              var n = Ge.delayedCall(0, e || J, r);
              return (
                (n.data = "isPause"),
                (this._hasPause = 1),
                Ft(this, n, Wt(this, t))
              );
            }),
            (r.removePause = function (t) {
              var e = this._first;
              for (t = Wt(this, t); e; )
                e._start === t && "isPause" === e.data && Et(e), (e = e._next);
            }),
            (r.killTweensOf = function (t, e, r) {
              for (var n = this.getTweensOf(t, r), i = n.length; i--; )
                Ye !== n[i] && n[i].kill(t, e);
              return this;
            }),
            (r.getTweensOf = function (t, e) {
              for (var r, n = [], i = ee(t), a = this._first, o = $(e); a; )
                a instanceof Ge
                  ? yt(a._targets, i) &&
                    (o
                      ? (!Ye || (a._initted && a._ts)) &&
                        a.globalTime(0) <= e &&
                        a.globalTime(a.totalDuration()) > e
                      : !e || a.isActive()) &&
                    n.push(a)
                  : (r = a.getTweensOf(i, e)).length && n.push.apply(n, r),
                  (a = a._next);
              return n;
            }),
            (r.tweenTo = function (t, e) {
              e = e || {};
              var r,
                n = this,
                i = Wt(n, t),
                a = e,
                o = a.startAt,
                s = a.onStart,
                l = a.onStartParams,
                c = a.immediateRender,
                u = Ge.to(
                  n,
                  kt(
                    {
                      ease: e.ease || "none",
                      lazy: !1,
                      immediateRender: !1,
                      time: i,
                      overwrite: "auto",
                      duration:
                        e.duration ||
                        Math.abs(
                          (i - (o && "time" in o ? o.time : n._time)) /
                            n.timeScale()
                        ) ||
                        k,
                      onStart: function () {
                        if ((n.pause(), !r)) {
                          var t =
                            e.duration ||
                            Math.abs(
                              (i - (o && "time" in o ? o.time : n._time)) /
                                n.timeScale()
                            );
                          u._dur !== t &&
                            Xt(u, t, 0, 1).render(u._time, !0, !0),
                            (r = 1);
                        }
                        s && s.apply(u, l || []);
                      },
                    },
                    e
                  )
                );
              return c ? u.render(0) : u;
            }),
            (r.tweenFromTo = function (t, e, r) {
              return this.tweenTo(e, kt({ startAt: { time: Wt(this, t) } }, r));
            }),
            (r.recent = function () {
              return this._recent;
            }),
            (r.nextLabel = function (t) {
              return void 0 === t && (t = this._time), pe(this, Wt(this, t));
            }),
            (r.previousLabel = function (t) {
              return void 0 === t && (t = this._time), pe(this, Wt(this, t), 1);
            }),
            (r.currentLabel = function (t) {
              return arguments.length
                ? this.seek(t, !0)
                : this.previousLabel(this._time + k);
            }),
            (r.shiftChildren = function (t, e, r) {
              void 0 === r && (r = 0);
              for (var n, i = this._first, a = this.labels; i; )
                i._start >= r && ((i._start += t), (i._end += t)),
                  (i = i._next);
              if (e) for (n in a) a[n] >= r && (a[n] += t);
              return Mt(this);
            }),
            (r.invalidate = function (e) {
              var r = this._first;
              for (this._lock = 0; r; ) r.invalidate(e), (r = r._next);
              return t.prototype.invalidate.call(this, e);
            }),
            (r.clear = function (t) {
              void 0 === t && (t = !0);
              for (var e, r = this._first; r; )
                (e = r._next), this.remove(r), (r = e);
              return (
                this._dp && (this._time = this._tTime = this._pTime = 0),
                t && (this.labels = {}),
                Mt(this)
              );
            }),
            (r.totalDuration = function (t) {
              var e,
                r,
                n,
                i = 0,
                a = this,
                o = a._last,
                s = w;
              if (arguments.length)
                return a.timeScale(
                  (a._repeat < 0 ? a.duration() : a.totalDuration()) /
                    (a.reversed() ? -t : t)
                );
              if (a._dirty) {
                for (n = a.parent; o; )
                  (e = o._prev),
                    o._dirty && o.totalDuration(),
                    (r = o._start) > s && a._sort && o._ts && !a._lock
                      ? ((a._lock = 1), (Ft(a, o, r - o._delay, 1)._lock = 0))
                      : (s = r),
                    r < 0 &&
                      o._ts &&
                      ((i -= r),
                      ((!n && !a._dp) || (n && n.smoothChildTiming)) &&
                        ((a._start += r / a._ts),
                        (a._time -= r),
                        (a._tTime -= r)),
                      a.shiftChildren(-r, !1, -Infinity),
                      (s = 0)),
                    o._end > i && o._ts && (i = o._end),
                    (o = e);
                Xt(a, a === l && a._time > i ? a._time : i, 1, 1),
                  (a._dirty = 0);
              }
              return a._tDur;
            }),
            (e.updateRoot = function (t) {
              if (
                (l._ts && (xt(l, Lt(t, l)), (d = Pe.frame)), Pe.frame >= lt)
              ) {
                lt += x.autoSleep || 120;
                var e = l._first;
                if ((!e || !e._ts) && x.autoSleep && Pe._listeners.length < 2) {
                  for (; e && !e._ts; ) e = e._next;
                  e || Pe.sleep();
                }
              }
            }),
            e
          );
        })(ze);
        kt(Fe.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
        var Ye,
          Ke,
          Ie = function (t, e, r, n, i, a, o) {
            var s,
              l,
              c,
              u,
              p,
              f,
              d,
              h,
              g = new pr(this._pt, t, e, 0, 1, ar, null, i),
              m = 0,
              v = 0;
            for (
              g.b = r,
                g.e = n,
                r += "",
                (d = ~(n += "").indexOf("random(")) && (n = ce(n)),
                a && (a((h = [r, n]), t, e), (r = h[0]), (n = h[1])),
                l = r.match(I) || [];
              (s = I.exec(n));

            )
              (u = s[0]),
                (p = n.substring(m, s.index)),
                c ? (c = (c + 1) % 5) : "rgba(" === p.substr(-5) && (c = 1),
                u !== l[v++] &&
                  ((f = parseFloat(l[v - 1]) || 0),
                  (g._pt = {
                    _next: g._pt,
                    p: p || 1 === v ? p : ",",
                    s: f,
                    c: "=" === u.charAt(1) ? vt(f, u) - f : parseFloat(u) - f,
                    m: c && c < 4 ? Math.round : 0,
                  }),
                  (m = I.lastIndex));
            return (
              (g.c = m < n.length ? n.substring(m, n.length) : ""),
              (g.fp = o),
              (H.test(n) || d) && (g.e = 0),
              (this._pt = g),
              g
            );
          },
          He = function (t, e, r, n, i, a, o, s, l, c) {
            M(n) && (n = n(i || 0, t, a));
            var u,
              p = t[e],
              f =
                "get" !== r
                  ? r
                  : M(p)
                  ? l
                    ? t[
                        e.indexOf("set") || !M(t["get" + e.substr(3)])
                          ? e
                          : "get" + e.substr(3)
                      ](l)
                    : t[e]()
                  : p,
              d = M(p) ? (l ? tr : Je) : Qe;
            if (
              (E(n) &&
                (~n.indexOf("random(") && (n = ce(n)),
                "=" === n.charAt(1) &&
                  ((u = vt(f, n) + (Qt(f) || 0)) || 0 === u) &&
                  (n = u)),
              !c || f !== n || Ke)
            )
              return isNaN(f * n) || "" === n
                ? (!p && !(e in t) && j(e, n),
                  Ie.call(this, t, e, f, n, d, s || x.stringFilter, l))
                : ((u = new pr(
                    this._pt,
                    t,
                    e,
                    +f || 0,
                    n - (f || 0),
                    "boolean" == typeof p ? ir : nr,
                    0,
                    d
                  )),
                  l && (u.fp = l),
                  o && u.modifier(o, this, t),
                  (this._pt = u));
          },
          Xe = function (t, e, r, n, i, a) {
            var o, s, l, c;
            if (
              ot[t] &&
              !1 !==
                (o = new ot[t]()).init(
                  i,
                  o.rawVars
                    ? e[t]
                    : (function (t, e, r, n, i) {
                        if (
                          (M(t) && (t = We(t, i, e, r, n)),
                          !A(t) || (t.style && t.nodeType) || z(t) || B(t))
                        )
                          return E(t) ? We(t, i, e, r, n) : t;
                        var a,
                          o = {};
                        for (a in t) o[a] = We(t[a], i, e, r, n);
                        return o;
                      })(e[t], n, i, a, r),
                  r,
                  n,
                  a
                ) &&
              ((r._pt = s =
                new pr(r._pt, i, t, 0, 1, o.render, o, 0, o.priority)),
              r !== h)
            )
              for (
                l = r._ptLookup[r._targets.indexOf(i)], c = o._props.length;
                c--;

              )
                l[o._props[c]] = s;
            return o;
          },
          Ne = function t(e, r, n) {
            var i,
              s,
              c,
              u,
              p,
              f,
              d,
              h,
              g,
              m,
              v,
              y,
              _,
              x = e.vars,
              T = x.ease,
              P = x.startAt,
              Z = x.immediateRender,
              O = x.lazy,
              S = x.onUpdate,
              R = x.onUpdateParams,
              E = x.callbackScope,
              M = x.runBackwards,
              $ = x.yoyoEase,
              C = x.keyframes,
              A = x.autoRevert,
              L = e._dur,
              D = e._startAt,
              B = e._targets,
              z = e.parent,
              F = z && "nested" === z.data ? z.vars.targets : B,
              Y = "auto" === e._overwrite && !a,
              K = e.timeline;
            if (
              (K && (!C || !T) && (T = "none"),
              (e._ease = Ce(T, b.ease)),
              (e._yEase = $ ? Me(Ce(!0 === $ ? T : $, b.ease)) : 0),
              $ &&
                e._yoyo &&
                !e._repeat &&
                (($ = e._yEase), (e._yEase = e._ease), (e._ease = $)),
              (e._from = !K && !!x.runBackwards),
              !K || (C && !x.stagger))
            ) {
              if (
                ((y = (h = B[0] ? ft(B[0]).harness : 0) && x[h.prop]),
                (i = Zt(x, nt)),
                D &&
                  (D._zTime < 0 && D.progress(1),
                  r < 0 && M && Z && !A
                    ? D.render(-1, !0)
                    : D.revert(M && L ? et : tt),
                  (D._lazy = 0)),
                P)
              ) {
                if (
                  (Et(
                    (e._startAt = Ge.set(
                      B,
                      kt(
                        {
                          data: "isStart",
                          overwrite: !1,
                          parent: z,
                          immediateRender: !0,
                          lazy: !D && q(O),
                          startAt: null,
                          delay: 0,
                          onUpdate: S,
                          onUpdateParams: R,
                          callbackScope: E,
                          stagger: 0,
                        },
                        P
                      )
                    ))
                  ),
                  (e._startAt._dp = 0),
                  (e._startAt._sat = e),
                  r < 0 && (o || (!Z && !A)) && e._startAt.revert(et),
                  Z && L && r <= 0 && n <= 0)
                )
                  return void (r && (e._zTime = r));
              } else if (M && L && !D)
                if (
                  (r && (Z = !1),
                  (c = kt(
                    {
                      overwrite: !1,
                      data: "isFromStart",
                      lazy: Z && !D && q(O),
                      immediateRender: Z,
                      stagger: 0,
                      parent: z,
                    },
                    i
                  )),
                  y && (c[h.prop] = y),
                  Et((e._startAt = Ge.set(B, c))),
                  (e._startAt._dp = 0),
                  (e._startAt._sat = e),
                  r < 0 &&
                    (o ? e._startAt.revert(et) : e._startAt.render(-1, !0)),
                  (e._zTime = r),
                  Z)
                ) {
                  if (!r) return;
                } else t(e._startAt, k, k);
              for (
                e._pt = e._ptCache = 0, O = (L && q(O)) || (O && !L), s = 0;
                s < B.length;
                s++
              ) {
                if (
                  ((d = (p = B[s])._gsap || pt(B)[s]._gsap),
                  (e._ptLookup[s] = m = {}),
                  at[d.id] && it.length && _t(),
                  (v = F === B ? s : F.indexOf(p)),
                  h &&
                    !1 !== (g = new h()).init(p, y || i, e, v, F) &&
                    ((e._pt = u =
                      new pr(
                        e._pt,
                        p,
                        g.name,
                        0,
                        1,
                        g.render,
                        g,
                        0,
                        g.priority
                      )),
                    g._props.forEach(function (t) {
                      m[t] = u;
                    }),
                    g.priority && (f = 1)),
                  !h || y)
                )
                  for (c in i)
                    ot[c] && (g = Xe(c, i, e, v, p, F))
                      ? g.priority && (f = 1)
                      : (m[c] = u =
                          He.call(
                            e,
                            p,
                            c,
                            "get",
                            i[c],
                            v,
                            F,
                            0,
                            x.stringFilter
                          ));
                e._op && e._op[s] && e.kill(p, e._op[s]),
                  Y &&
                    e._pt &&
                    ((Ye = e),
                    l.killTweensOf(p, m, e.globalTime(r)),
                    (_ = !e.parent),
                    (Ye = 0)),
                  e._pt && O && (at[d.id] = 1);
              }
              f && ur(e), e._onInit && e._onInit(e);
            }
            (e._onUpdate = S),
              (e._initted = (!e._op || e._pt) && !_),
              C && r <= 0 && K.render(w, !0, !0);
          },
          Ue = function (t, e, r, n) {
            var i,
              a,
              o = e.ease || n || "power1.inOut";
            if (z(e))
              (a = r[t] || (r[t] = [])),
                e.forEach(function (t, r) {
                  return a.push({ t: (r / (e.length - 1)) * 100, v: t, e: o });
                });
            else
              for (i in e)
                (a = r[i] || (r[i] = [])),
                  "ease" === i || a.push({ t: parseFloat(t), v: e[i], e: o });
          },
          We = function (t, e, r, n, i) {
            return M(t)
              ? t.call(e, r, n, i)
              : E(t) && ~t.indexOf("random(")
              ? ce(t)
              : t;
          },
          Ve = ut + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
          je = {};
        ht(
          Ve + ",id,stagger,delay,duration,paused,scrollTrigger",
          function (t) {
            return (je[t] = 1);
          }
        );
        var Ge = (function (t) {
          function e(e, r, i, o) {
            var s;
            "number" == typeof r && ((i.duration = r), (r = i), (i = null));
            var c,
              u,
              p,
              f,
              d,
              h,
              g,
              m,
              v = (s = t.call(this, o ? r : Ot(r)) || this).vars,
              y = v.duration,
              _ = v.delay,
              b = v.immediateRender,
              w = v.stagger,
              k = v.overwrite,
              T = v.keyframes,
              P = v.defaults,
              Z = v.scrollTrigger,
              O = v.yoyoEase,
              S = r.parent || l,
              R = (z(e) || B(e) ? $(e[0]) : "length" in r) ? [e] : ee(e);
            if (
              ((s._targets = R.length
                ? pt(R)
                : G(
                    "GSAP target " + e + " not found. https://greensock.com",
                    !x.nullTargetWarn
                  ) || []),
              (s._ptLookup = []),
              (s._overwrite = k),
              T || w || D(y) || D(_))
            ) {
              if (
                ((r = s.vars),
                (c = s.timeline =
                  new Fe({
                    data: "nested",
                    defaults: P || {},
                    targets: S && "nested" === S.data ? S.vars.targets : R,
                  })).kill(),
                (c.parent = c._dp = n(s)),
                (c._start = 0),
                w || D(y) || D(_))
              ) {
                if (((f = R.length), (g = w && ie(w)), A(w)))
                  for (d in w) ~Ve.indexOf(d) && (m || (m = {}), (m[d] = w[d]));
                for (u = 0; u < f; u++)
                  ((p = Zt(r, je)).stagger = 0),
                    O && (p.yoyoEase = O),
                    m && Tt(p, m),
                    (h = R[u]),
                    (p.duration = +We(y, n(s), u, h, R)),
                    (p.delay = (+We(_, n(s), u, h, R) || 0) - s._delay),
                    !w &&
                      1 === f &&
                      p.delay &&
                      ((s._delay = _ = p.delay),
                      (s._start += _),
                      (p.delay = 0)),
                    c.to(h, p, g ? g(u, h, R) : 0),
                    (c._ease = Oe.none);
                c.duration() ? (y = _ = 0) : (s.timeline = 0);
              } else if (T) {
                Ot(kt(c.vars.defaults, { ease: "none" })),
                  (c._ease = Ce(T.ease || r.ease || "none"));
                var E,
                  M,
                  C,
                  L = 0;
                if (z(T))
                  T.forEach(function (t) {
                    return c.to(R, t, ">");
                  }),
                    c.duration();
                else {
                  for (d in ((p = {}), T))
                    "ease" === d ||
                      "easeEach" === d ||
                      Ue(d, T[d], p, T.easeEach);
                  for (d in p)
                    for (
                      E = p[d].sort(function (t, e) {
                        return t.t - e.t;
                      }),
                        L = 0,
                        u = 0;
                      u < E.length;
                      u++
                    )
                      ((C = {
                        ease: (M = E[u]).e,
                        duration: ((M.t - (u ? E[u - 1].t : 0)) / 100) * y,
                      })[d] = M.v),
                        c.to(R, C, L),
                        (L += C.duration);
                  c.duration() < y && c.to({}, { duration: y - c.duration() });
                }
              }
              y || s.duration((y = c.duration()));
            } else s.timeline = 0;
            return (
              !0 !== k || a || ((Ye = n(s)), l.killTweensOf(R), (Ye = 0)),
              Ft(S, n(s), i),
              r.reversed && s.reverse(),
              r.paused && s.paused(!0),
              (b ||
                (!y &&
                  !T &&
                  s._start === mt(S._time) &&
                  q(b) &&
                  Ct(n(s)) &&
                  "nested" !== S.data)) &&
                ((s._tTime = -1e-8), s.render(Math.max(0, -_) || 0)),
              Z && Yt(n(s), Z),
              s
            );
          }
          i(e, t);
          var r = e.prototype;
          return (
            (r.render = function (t, e, r) {
              var n,
                i,
                a,
                s,
                l,
                c,
                u,
                p,
                f,
                d = this._time,
                h = this._tDur,
                g = this._dur,
                m = t < 0,
                v = t > h - k && !m ? h : t < k ? 0 : t;
              if (g) {
                if (
                  v !== this._tTime ||
                  !t ||
                  r ||
                  (!this._initted && this._tTime) ||
                  (this._startAt && this._zTime < 0 !== m)
                ) {
                  if (((n = v), (p = this.timeline), this._repeat)) {
                    if (((s = g + this._rDelay), this._repeat < -1 && m))
                      return this.totalTime(100 * s + t, e, r);
                    if (
                      ((n = mt(v % s)),
                      v === h
                        ? ((a = this._repeat), (n = g))
                        : ((a = ~~(v / s)) && a === v / s && ((n = g), a--),
                          n > g && (n = g)),
                      (c = this._yoyo && 1 & a) &&
                        ((f = this._yEase), (n = g - n)),
                      (l = qt(this._tTime, s)),
                      n === d && !r && this._initted)
                    )
                      return (this._tTime = v), this;
                    a !== l &&
                      (p && this._yEase && $e(p, c),
                      !this.vars.repeatRefresh ||
                        c ||
                        this._lock ||
                        ((this._lock = r = 1),
                        (this.render(mt(s * a), !0).invalidate()._lock = 0)));
                  }
                  if (!this._initted) {
                    if (Kt(this, m ? t : n, r, e, v))
                      return (this._tTime = 0), this;
                    if (d !== this._time) return this;
                    if (g !== this._dur) return this.render(t, e, r);
                  }
                  if (
                    ((this._tTime = v),
                    (this._time = n),
                    !this._act &&
                      this._ts &&
                      ((this._act = 1), (this._lazy = 0)),
                    (this.ratio = u = (f || this._ease)(n / g)),
                    this._from && (this.ratio = u = 1 - u),
                    n &&
                      !d &&
                      !e &&
                      !a &&
                      (fe(this, "onStart"), this._tTime !== v))
                  )
                    return this;
                  for (i = this._pt; i; ) i.r(u, i.d), (i = i._next);
                  (p &&
                    p.render(
                      t < 0
                        ? t
                        : !n && c
                        ? -1e-8
                        : p._dur * p._ease(n / this._dur),
                      e,
                      r
                    )) ||
                    (this._startAt && (this._zTime = t)),
                    this._onUpdate &&
                      !e &&
                      (m && $t(this, t, 0, r), fe(this, "onUpdate")),
                    this._repeat &&
                      a !== l &&
                      this.vars.onRepeat &&
                      !e &&
                      this.parent &&
                      fe(this, "onRepeat"),
                    (v !== this._tDur && v) ||
                      this._tTime !== v ||
                      (m && !this._onUpdate && $t(this, t, 0, !0),
                      (t || !g) &&
                        ((v === this._tDur && this._ts > 0) ||
                          (!v && this._ts < 0)) &&
                        Et(this, 1),
                      e ||
                        (m && !d) ||
                        !(v || d || c) ||
                        (fe(
                          this,
                          v === h ? "onComplete" : "onReverseComplete",
                          !0
                        ),
                        this._prom &&
                          !(v < h && this.timeScale() > 0) &&
                          this._prom()));
                }
              } else
                !(function (t, e, r, n) {
                  var i,
                    a,
                    s,
                    l = t.ratio,
                    c =
                      e < 0 ||
                      (!e &&
                        ((!t._start && It(t) && (t._initted || !Ht(t))) ||
                          ((t._ts < 0 || t._dp._ts < 0) && !Ht(t))))
                        ? 0
                        : 1,
                    u = t._rDelay,
                    p = 0;
                  if (
                    (u &&
                      t._repeat &&
                      ((p = Gt(0, t._tDur, e)),
                      (a = qt(p, u)),
                      t._yoyo && 1 & a && (c = 1 - c),
                      a !== qt(t._tTime, u) &&
                        ((l = 1 - c),
                        t.vars.repeatRefresh && t._initted && t.invalidate())),
                    c !== l || o || n || t._zTime === k || (!e && t._zTime))
                  ) {
                    if (!t._initted && Kt(t, e, n, r, p)) return;
                    for (
                      s = t._zTime,
                        t._zTime = e || (r ? k : 0),
                        r || (r = e && !s),
                        t.ratio = c,
                        t._from && (c = 1 - c),
                        t._time = 0,
                        t._tTime = p,
                        i = t._pt;
                      i;

                    )
                      i.r(c, i.d), (i = i._next);
                    e < 0 && $t(t, e, 0, !0),
                      t._onUpdate && !r && fe(t, "onUpdate"),
                      p && t._repeat && !r && t.parent && fe(t, "onRepeat"),
                      (e >= t._tDur || e < 0) &&
                        t.ratio === c &&
                        (c && Et(t, 1),
                        r ||
                          o ||
                          (fe(t, c ? "onComplete" : "onReverseComplete", !0),
                          t._prom && t._prom()));
                  } else t._zTime || (t._zTime = e);
                })(this, t, e, r);
              return this;
            }),
            (r.targets = function () {
              return this._targets;
            }),
            (r.invalidate = function (e) {
              return (
                (!e || !this.vars.runBackwards) && (this._startAt = 0),
                (this._pt =
                  this._op =
                  this._onUpdate =
                  this._lazy =
                  this.ratio =
                    0),
                (this._ptLookup = []),
                this.timeline && this.timeline.invalidate(e),
                t.prototype.invalidate.call(this, e)
              );
            }),
            (r.resetTo = function (t, e, r, n) {
              g || Pe.wake(), this._ts || this.play();
              var i = Math.min(
                this._dur,
                (this._dp._time - this._start) * this._ts
              );
              return (
                this._initted || Ne(this, i),
                (function (t, e, r, n, i, a, o) {
                  var s,
                    l,
                    c,
                    u,
                    p = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
                  if (!p)
                    for (
                      p = t._ptCache[e] = [],
                        c = t._ptLookup,
                        u = t._targets.length;
                      u--;

                    ) {
                      if ((s = c[u][e]) && s.d && s.d._pt)
                        for (s = s.d._pt; s && s.p !== e && s.fp !== e; )
                          s = s._next;
                      if (!s)
                        return (
                          (Ke = 1), (t.vars[e] = "+=0"), Ne(t, o), (Ke = 0), 1
                        );
                      p.push(s);
                    }
                  for (u = p.length; u--; )
                    ((s = (l = p[u])._pt || l).s =
                      (!n && 0 !== n) || i ? s.s + (n || 0) + a * s.c : n),
                      (s.c = r - s.s),
                      l.e && (l.e = gt(r) + Qt(l.e)),
                      l.b && (l.b = s.s + Qt(l.b));
                })(this, t, e, r, n, this._ease(i / this._dur), i)
                  ? this.resetTo(t, e, r, n)
                  : (Bt(this, 0),
                    this.parent ||
                      St(
                        this._dp,
                        this,
                        "_first",
                        "_last",
                        this._dp._sort ? "_start" : 0
                      ),
                    this.render(0))
              );
            }),
            (r.kill = function (t, e) {
              if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
                return (
                  (this._lazy = this._pt = 0), this.parent ? de(this) : this
                );
              if (this.timeline) {
                var r = this.timeline.totalDuration();
                return (
                  this.timeline.killTweensOf(
                    t,
                    e,
                    Ye && !0 !== Ye.vars.overwrite
                  )._first || de(this),
                  this.parent &&
                    r !== this.timeline.totalDuration() &&
                    Xt(this, (this._dur * this.timeline._tDur) / r, 0, 1),
                  this
                );
              }
              var n,
                i,
                a,
                o,
                s,
                l,
                c,
                u = this._targets,
                p = t ? ee(t) : u,
                f = this._ptLookup,
                d = this._pt;
              if (
                (!e || "all" === e) &&
                (function (t, e) {
                  for (
                    var r = t.length, n = r === e.length;
                    n && r-- && t[r] === e[r];

                  );
                  return r < 0;
                })(u, p)
              )
                return "all" === e && (this._pt = 0), de(this);
              for (
                n = this._op = this._op || [],
                  "all" !== e &&
                    (E(e) &&
                      ((s = {}),
                      ht(e, function (t) {
                        return (s[t] = 1);
                      }),
                      (e = s)),
                    (e = (function (t, e) {
                      var r,
                        n,
                        i,
                        a,
                        o = t[0] ? ft(t[0]).harness : 0,
                        s = o && o.aliases;
                      if (!s) return e;
                      for (n in ((r = Tt({}, e)), s))
                        if ((n in r))
                          for (i = (a = s[n].split(",")).length; i--; )
                            r[a[i]] = r[n];
                      return r;
                    })(u, e))),
                  c = u.length;
                c--;

              )
                if (~p.indexOf(u[c]))
                  for (s in ((i = f[c]),
                  "all" === e
                    ? ((n[c] = e), (o = i), (a = {}))
                    : ((a = n[c] = n[c] || {}), (o = e)),
                  o))
                    (l = i && i[s]) &&
                      (("kill" in l.d && !0 !== l.d.kill(s)) ||
                        Rt(this, l, "_pt"),
                      delete i[s]),
                      "all" !== a && (a[s] = 1);
              return this._initted && !this._pt && d && de(this), this;
            }),
            (e.to = function (t, r) {
              return new e(t, r, arguments[2]);
            }),
            (e.from = function (t, e) {
              return Vt(1, arguments);
            }),
            (e.delayedCall = function (t, r, n, i) {
              return new e(r, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: r,
                onReverseComplete: r,
                onCompleteParams: n,
                onReverseCompleteParams: n,
                callbackScope: i,
              });
            }),
            (e.fromTo = function (t, e, r) {
              return Vt(2, arguments);
            }),
            (e.set = function (t, r) {
              return (
                (r.duration = 0), r.repeatDelay || (r.repeat = 0), new e(t, r)
              );
            }),
            (e.killTweensOf = function (t, e, r) {
              return l.killTweensOf(t, e, r);
            }),
            e
          );
        })(ze);
        kt(Ge.prototype, {
          _targets: [],
          _lazy: 0,
          _startAt: 0,
          _op: 0,
          _onInit: 0,
        }),
          ht("staggerTo,staggerFrom,staggerFromTo", function (t) {
            Ge[t] = function () {
              var e = new Fe(),
                r = Jt.call(arguments, 0);
              return (
                r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
              );
            };
          });
        var Qe = function (t, e, r) {
            return (t[e] = r);
          },
          Je = function (t, e, r) {
            return t[e](r);
          },
          tr = function (t, e, r, n) {
            return t[e](n.fp, r);
          },
          er = function (t, e, r) {
            return t.setAttribute(e, r);
          },
          rr = function (t, e) {
            return M(t[e]) ? Je : C(t[e]) && t.setAttribute ? er : Qe;
          },
          nr = function (t, e) {
            return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
          },
          ir = function (t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e);
          },
          ar = function (t, e) {
            var r = e._pt,
              n = "";
            if (!t && e.b) n = e.b;
            else if (1 === t && e.e) n = e.e;
            else {
              for (; r; )
                (n =
                  r.p +
                  (r.m
                    ? r.m(r.s + r.c * t)
                    : Math.round(1e4 * (r.s + r.c * t)) / 1e4) +
                  n),
                  (r = r._next);
              n += e.c;
            }
            e.set(e.t, e.p, n, e);
          },
          or = function (t, e) {
            for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
          },
          sr = function (t, e, r, n) {
            for (var i, a = this._pt; a; )
              (i = a._next), a.p === n && a.modifier(t, e, r), (a = i);
          },
          lr = function (t) {
            for (var e, r, n = this._pt; n; )
              (r = n._next),
                (n.p === t && !n.op) || n.op === t
                  ? Rt(this, n, "_pt")
                  : n.dep || (e = 1),
                (n = r);
            return !e;
          },
          cr = function (t, e, r, n) {
            n.mSet(t, e, n.m.call(n.tween, r, n.mt), n);
          },
          ur = function (t) {
            for (var e, r, n, i, a = t._pt; a; ) {
              for (e = a._next, r = n; r && r.pr > a.pr; ) r = r._next;
              (a._prev = r ? r._prev : i) ? (a._prev._next = a) : (n = a),
                (a._next = r) ? (r._prev = a) : (i = a),
                (a = e);
            }
            t._pt = n;
          },
          pr = (function () {
            function t(t, e, r, n, i, a, o, s, l) {
              (this.t = e),
                (this.s = n),
                (this.c = i),
                (this.p = r),
                (this.r = a || nr),
                (this.d = o || this),
                (this.set = s || Qe),
                (this.pr = l || 0),
                (this._next = t),
                t && (t._prev = this);
            }
            return (
              (t.prototype.modifier = function (t, e, r) {
                (this.mSet = this.mSet || this.set),
                  (this.set = cr),
                  (this.m = t),
                  (this.mt = r),
                  (this.tween = e);
              }),
              t
            );
          })();
        ht(
          ut +
            "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
          function (t) {
            return (nt[t] = 1);
          }
        ),
          (U.TweenMax = U.TweenLite = Ge),
          (U.TimelineLite = U.TimelineMax = Fe),
          (l = new Fe({
            sortChildren: !1,
            defaults: b,
            autoRemoveChildren: !0,
            id: "root",
            smoothChildTiming: !0,
          })),
          (x.stringFilter = Te);
        var fr = [],
          dr = {},
          hr = [],
          gr = 0,
          mr = 0,
          vr = function (t) {
            return (dr[t] || hr).map(function (t) {
              return t();
            });
          },
          yr = function () {
            var t = Date.now(),
              e = [];
            t - gr > 2 &&
              (vr("matchMediaInit"),
              fr.forEach(function (t) {
                var r,
                  n,
                  i,
                  a,
                  o = t.queries,
                  s = t.conditions;
                for (n in o)
                  (r = c.matchMedia(o[n]).matches) && (i = 1),
                    r !== s[n] && ((s[n] = r), (a = 1));
                a && (t.revert(), i && e.push(t));
              }),
              vr("matchMediaRevert"),
              e.forEach(function (t) {
                return t.onMatch(t);
              }),
              (gr = t),
              vr("matchMedia"));
          },
          _r = (function () {
            function t(t, e) {
              (this.selector = e && re(e)),
                (this.data = []),
                (this._r = []),
                (this.isReverted = !1),
                (this.id = mr++),
                t && this.add(t);
            }
            var e = t.prototype;
            return (
              (e.add = function (t, e, r) {
                M(t) && ((r = e), (e = t), (t = M));
                var n = this,
                  i = function () {
                    var t,
                      i = s,
                      a = n.selector;
                    return (
                      i && i !== n && i.data.push(n),
                      r && (n.selector = re(r)),
                      (s = n),
                      (t = e.apply(n, arguments)),
                      M(t) && n._r.push(t),
                      (s = i),
                      (n.selector = a),
                      (n.isReverted = !1),
                      t
                    );
                  };
                return (n.last = i), t === M ? i(n) : t ? (n[t] = i) : i;
              }),
              (e.ignore = function (t) {
                var e = s;
                (s = null), t(this), (s = e);
              }),
              (e.getTweens = function () {
                var e = [];
                return (
                  this.data.forEach(function (r) {
                    return r instanceof t
                      ? e.push.apply(e, r.getTweens())
                      : r instanceof Ge &&
                          !(r.parent && "nested" === r.parent.data) &&
                          e.push(r);
                  }),
                  e
                );
              }),
              (e.clear = function () {
                this._r.length = this.data.length = 0;
              }),
              (e.kill = function (t, e) {
                var r = this;
                if (t) {
                  var n = this.getTweens();
                  this.data.forEach(function (t) {
                    "isFlip" === t.data &&
                      (t.revert(),
                      t.getChildren(!0, !0, !1).forEach(function (t) {
                        return n.splice(n.indexOf(t), 1);
                      }));
                  }),
                    n
                      .map(function (t) {
                        return { g: t.globalTime(0), t };
                      })
                      .sort(function (t, e) {
                        return e.g - t.g || -1;
                      })
                      .forEach(function (e) {
                        return e.t.revert(t);
                      }),
                    this.data.forEach(function (e) {
                      return e instanceof Fe
                        ? "nested" !== e.data && e.kill()
                        : !(e instanceof Ge) && e.revert && e.revert(t);
                    }),
                    this._r.forEach(function (e) {
                      return e(t, r);
                    }),
                    (this.isReverted = !0);
                } else
                  this.data.forEach(function (t) {
                    return t.kill && t.kill();
                  });
                if ((this.clear(), e))
                  for (var i = fr.length; i--; )
                    fr[i].id === this.id && fr.splice(i, 1);
              }),
              (e.revert = function (t) {
                this.kill(t || {});
              }),
              t
            );
          })(),
          xr = (function () {
            function t(t) {
              (this.contexts = []), (this.scope = t);
            }
            var e = t.prototype;
            return (
              (e.add = function (t, e, r) {
                A(t) || (t = { matches: t });
                var n,
                  i,
                  a,
                  o = new _r(0, r || this.scope),
                  l = (o.conditions = {});
                for (i in (s && !o.selector && (o.selector = s.selector),
                this.contexts.push(o),
                (e = o.add("onMatch", e)),
                (o.queries = t),
                t))
                  "all" === i
                    ? (a = 1)
                    : (n = c.matchMedia(t[i])) &&
                      (fr.indexOf(o) < 0 && fr.push(o),
                      (l[i] = n.matches) && (a = 1),
                      n.addListener
                        ? n.addListener(yr)
                        : n.addEventListener("change", yr));
                return a && e(o), this;
              }),
              (e.revert = function (t) {
                this.kill(t || {});
              }),
              (e.kill = function (t) {
                this.contexts.forEach(function (e) {
                  return e.kill(t, !0);
                });
              }),
              t
            );
          })(),
          br = {
            registerPlugin: function () {
              for (
                var t = arguments.length, e = new Array(t), r = 0;
                r < t;
                r++
              )
                e[r] = arguments[r];
              e.forEach(function (t) {
                return ge(t);
              });
            },
            timeline: function (t) {
              return new Fe(t);
            },
            getTweensOf: function (t, e) {
              return l.getTweensOf(t, e);
            },
            getProperty: function (t, e, r, n) {
              E(t) && (t = ee(t)[0]);
              var i = ft(t || {}).get,
                a = r ? wt : bt;
              return (
                "native" === r && (r = ""),
                t
                  ? e
                    ? a(((ot[e] && ot[e].get) || i)(t, e, r, n))
                    : function (e, r, n) {
                        return a(((ot[e] && ot[e].get) || i)(t, e, r, n));
                      }
                  : t
              );
            },
            quickSetter: function (t, e, r) {
              if ((t = ee(t)).length > 1) {
                var n = t.map(function (t) {
                    return Tr.quickSetter(t, e, r);
                  }),
                  i = n.length;
                return function (t) {
                  for (var e = i; e--; ) n[e](t);
                };
              }
              t = t[0] || {};
              var a = ot[e],
                o = ft(t),
                s = (o.harness && (o.harness.aliases || {})[e]) || e,
                l = a
                  ? function (e) {
                      var n = new a();
                      (h._pt = 0),
                        n.init(t, r ? e + r : e, h, 0, [t]),
                        n.render(1, n),
                        h._pt && or(1, h);
                    }
                  : o.set(t, s);
              return a
                ? l
                : function (e) {
                    return l(t, s, r ? e + r : e, o, 1);
                  };
            },
            quickTo: function (t, e, r) {
              var n,
                i = Tr.to(
                  t,
                  Tt((((n = {})[e] = "+=0.1"), (n.paused = !0), n), r || {})
                ),
                a = function (t, r, n) {
                  return i.resetTo(e, t, r, n);
                };
              return (a.tween = i), a;
            },
            isTweening: function (t) {
              return l.getTweensOf(t, !0).length > 0;
            },
            defaults: function (t) {
              return (
                t && t.ease && (t.ease = Ce(t.ease, b.ease)), Pt(b, t || {})
              );
            },
            config: function (t) {
              return Pt(x, t || {});
            },
            registerEffect: function (t) {
              var e = t.name,
                r = t.effect,
                n = t.plugins,
                i = t.defaults,
                a = t.extendTimeline;
              (n || "").split(",").forEach(function (t) {
                return (
                  t &&
                  !ot[t] &&
                  !U[t] &&
                  G(e + " effect requires " + t + " plugin.")
                );
              }),
                (st[e] = function (t, e, n) {
                  return r(ee(t), kt(e || {}, i), n);
                }),
                a &&
                  (Fe.prototype[e] = function (t, r, n) {
                    return this.add(
                      st[e](t, A(r) ? r : (n = r) && {}, this),
                      n
                    );
                  });
            },
            registerEase: function (t, e) {
              Oe[t] = Ce(e);
            },
            parseEase: function (t, e) {
              return arguments.length ? Ce(t, e) : Oe;
            },
            getById: function (t) {
              return l.getById(t);
            },
            exportRoot: function (t, e) {
              void 0 === t && (t = {});
              var r,
                n,
                i = new Fe(t);
              for (
                i.smoothChildTiming = q(t.smoothChildTiming),
                  l.remove(i),
                  i._dp = 0,
                  i._time = i._tTime = l._time,
                  r = l._first;
                r;

              )
                (n = r._next),
                  (!e &&
                    !r._dur &&
                    r instanceof Ge &&
                    r.vars.onComplete === r._targets[0]) ||
                    Ft(i, r, r._start - r._delay),
                  (r = n);
              return Ft(l, i, 0), i;
            },
            context: function (t, e) {
              return t ? new _r(t, e) : s;
            },
            matchMedia: function (t) {
              return new xr(t);
            },
            matchMediaRefresh: function () {
              return (
                fr.forEach(function (t) {
                  var e,
                    r,
                    n = t.conditions;
                  for (r in n) n[r] && ((n[r] = !1), (e = 1));
                  e && t.revert();
                }) || yr()
              );
            },
            addEventListener: function (t, e) {
              var r = dr[t] || (dr[t] = []);
              ~r.indexOf(e) || r.push(e);
            },
            removeEventListener: function (t, e) {
              var r = dr[t],
                n = r && r.indexOf(e);
              n >= 0 && r.splice(n, 1);
            },
            utils: {
              wrap: function t(e, r, n) {
                var i = r - e;
                return z(e)
                  ? le(e, t(0, e.length), r)
                  : jt(n, function (t) {
                      return ((i + ((t - e) % i)) % i) + e;
                    });
              },
              wrapYoyo: function t(e, r, n) {
                var i = r - e,
                  a = 2 * i;
                return z(e)
                  ? le(e, t(0, e.length - 1), r)
                  : jt(n, function (t) {
                      return (
                        e + ((t = (a + ((t - e) % a)) % a || 0) > i ? a - t : t)
                      );
                    });
              },
              distribute: ie,
              random: se,
              snap: oe,
              normalize: function (t, e, r) {
                return ue(t, e, 0, 1, r);
              },
              getUnit: Qt,
              clamp: function (t, e, r) {
                return jt(r, function (r) {
                  return Gt(t, e, r);
                });
              },
              splitColor: _e,
              toArray: ee,
              selector: re,
              mapRange: ue,
              pipe: function () {
                for (
                  var t = arguments.length, e = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  e[r] = arguments[r];
                return function (t) {
                  return e.reduce(function (t, e) {
                    return e(t);
                  }, t);
                };
              },
              unitize: function (t, e) {
                return function (r) {
                  return t(parseFloat(r)) + (e || Qt(r));
                };
              },
              interpolate: function t(e, r, n, i) {
                var a = isNaN(e + r)
                  ? 0
                  : function (t) {
                      return (1 - t) * e + t * r;
                    };
                if (!a) {
                  var o,
                    s,
                    l,
                    c,
                    u,
                    p = E(e),
                    f = {};
                  if ((!0 === n && (i = 1) && (n = null), p))
                    (e = { p: e }), (r = { p: r });
                  else if (z(e) && !z(r)) {
                    for (l = [], c = e.length, u = c - 2, s = 1; s < c; s++)
                      l.push(t(e[s - 1], e[s]));
                    c--,
                      (a = function (t) {
                        t *= c;
                        var e = Math.min(u, ~~t);
                        return l[e](t - e);
                      }),
                      (n = r);
                  } else i || (e = Tt(z(e) ? [] : {}, e));
                  if (!l) {
                    for (o in r) He.call(f, e, o, "get", r[o]);
                    a = function (t) {
                      return or(t, f) || (p ? e.p : e);
                    };
                  }
                }
                return jt(n, a);
              },
              shuffle: ne,
            },
            install: V,
            effects: st,
            ticker: Pe,
            updateRoot: Fe.updateRoot,
            plugins: ot,
            globalTimeline: l,
            core: {
              PropTween: pr,
              globals: Q,
              Tween: Ge,
              Timeline: Fe,
              Animation: ze,
              getCache: ft,
              _removeLinkedListItem: Rt,
              reverting: function () {
                return o;
              },
              context: function (t) {
                return t && s && (s.data.push(t), (t._ctx = s)), s;
              },
              suppressOverwrites: function (t) {
                return (a = t);
              },
            },
          };
        ht("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
          return (br[t] = Ge[t]);
        }),
          Pe.add(Fe.updateRoot),
          (h = br.to({}, { duration: 0 }));
        var wr = function (t, e) {
            for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
              r = r._next;
            return r;
          },
          kr = function (t, e) {
            return {
              name: t,
              rawVars: 1,
              init: function (t, r, n) {
                n._onInit = function (t) {
                  var n, i;
                  if (
                    (E(r) &&
                      ((n = {}),
                      ht(r, function (t) {
                        return (n[t] = 1);
                      }),
                      (r = n)),
                    e)
                  ) {
                    for (i in ((n = {}), r)) n[i] = e(r[i]);
                    r = n;
                  }
                  !(function (t, e) {
                    var r,
                      n,
                      i,
                      a = t._targets;
                    for (r in e)
                      for (n = a.length; n--; )
                        (i = t._ptLookup[n][r]) &&
                          (i = i.d) &&
                          (i._pt && (i = wr(i, r)),
                          i && i.modifier && i.modifier(e[r], t, a[n], r));
                  })(t, r);
                };
              },
            };
          },
          Tr =
            br.registerPlugin(
              {
                name: "attr",
                init: function (t, e, r, n, i) {
                  var a, o, s;
                  for (a in ((this.tween = r), e))
                    (s = t.getAttribute(a) || ""),
                      ((o = this.add(
                        t,
                        "setAttribute",
                        (s || 0) + "",
                        e[a],
                        n,
                        i,
                        0,
                        0,
                        a
                      )).op = a),
                      (o.b = s),
                      this._props.push(a);
                },
                render: function (t, e) {
                  for (var r = e._pt; r; )
                    o ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), (r = r._next);
                },
              },
              {
                name: "endArray",
                init: function (t, e) {
                  for (var r = e.length; r--; )
                    this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
                },
              },
              kr("roundProps", ae),
              kr("modifiers"),
              kr("snap", oe)
            ) || br;
        (Ge.version = Fe.version = Tr.version = "3.12.1"),
          (f = 1),
          L() && Ze(),
          Oe.Power0,
          Oe.Power1,
          Oe.Power2,
          Oe.Power3,
          Oe.Power4,
          Oe.Linear,
          Oe.Quad,
          Oe.Cubic,
          Oe.Quart,
          Oe.Quint,
          Oe.Strong,
          Oe.Elastic,
          Oe.Back,
          Oe.SteppedEase,
          Oe.Bounce,
          Oe.Sine,
          Oe.Expo,
          Oe.Circ;
        var Pr,
          Zr,
          Or,
          Sr,
          Rr,
          Er,
          Mr,
          $r,
          Cr = {},
          Ar = 180 / Math.PI,
          qr = Math.PI / 180,
          Lr = Math.atan2,
          Dr = /([A-Z])/g,
          Br = /(left|right|width|margin|padding|x)/i,
          zr = /[\s,\(]\S/,
          Fr = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity",
          },
          Yr = function (t, e) {
            return e.set(
              e.t,
              e.p,
              Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
              e
            );
          },
          Kr = function (t, e) {
            return e.set(
              e.t,
              e.p,
              1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
              e
            );
          },
          Ir = function (t, e) {
            return e.set(
              e.t,
              e.p,
              t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
              e
            );
          },
          Hr = function (t, e) {
            var r = e.s + e.c * t;
            e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
          },
          Xr = function (t, e) {
            return e.set(e.t, e.p, t ? e.e : e.b, e);
          },
          Nr = function (t, e) {
            return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
          },
          Ur = function (t, e, r) {
            return (t.style[e] = r);
          },
          Wr = function (t, e, r) {
            return t.style.setProperty(e, r);
          },
          Vr = function (t, e, r) {
            return (t._gsap[e] = r);
          },
          jr = function (t, e, r) {
            return (t._gsap.scaleX = t._gsap.scaleY = r);
          },
          Gr = function (t, e, r, n, i) {
            var a = t._gsap;
            (a.scaleX = a.scaleY = r), a.renderTransform(i, a);
          },
          Qr = function (t, e, r, n, i) {
            var a = t._gsap;
            (a[e] = r), a.renderTransform(i, a);
          },
          Jr = "transform",
          tn = Jr + "Origin",
          en = function t(e, r) {
            var n = this,
              i = this.target,
              a = i.style;
            if (e in Cr && a) {
              if (((this.tfm = this.tfm || {}), "transform" === e))
                return Fr.transform.split(",").forEach(function (e) {
                  return t.call(n, e, r);
                });
              if (
                (~(e = Fr[e] || e).indexOf(",")
                  ? e.split(",").forEach(function (t) {
                      return (n.tfm[t] = xn(i, t));
                    })
                  : (this.tfm[e] = i._gsap.x ? i._gsap[e] : xn(i, e)),
                this.props.indexOf(Jr) >= 0)
              )
                return;
              i._gsap.svg &&
                ((this.svgo = i.getAttribute("data-svg-origin")),
                this.props.push(tn, r, "")),
                (e = Jr);
            }
            (a || r) && this.props.push(e, r, a[e]);
          },
          rn = function (t) {
            t.translate &&
              (t.removeProperty("translate"),
              t.removeProperty("scale"),
              t.removeProperty("rotate"));
          },
          nn = function () {
            var t,
              e,
              r = this.props,
              n = this.target,
              i = n.style,
              a = n._gsap;
            for (t = 0; t < r.length; t += 3)
              r[t + 1]
                ? (n[r[t]] = r[t + 2])
                : r[t + 2]
                ? (i[r[t]] = r[t + 2])
                : i.removeProperty(
                    "--" === r[t].substr(0, 2)
                      ? r[t]
                      : r[t].replace(Dr, "-$1").toLowerCase()
                  );
            if (this.tfm) {
              for (e in this.tfm) a[e] = this.tfm[e];
              a.svg &&
                (a.renderTransform(),
                n.setAttribute("data-svg-origin", this.svgo || "")),
                ((t = Mr()) && t.isStart) || i[Jr] || (rn(i), (a.uncache = 1));
            }
          },
          an = function (t, e) {
            var r = { target: t, props: [], revert: nn, save: en };
            return (
              t._gsap || Tr.core.getCache(t),
              e &&
                e.split(",").forEach(function (t) {
                  return r.save(t);
                }),
              r
            );
          },
          on = function (t, e) {
            var r = Zr.createElementNS
              ? Zr.createElementNS(
                  (e || "http://www.w3.org/1999/xhtml").replace(
                    /^https/,
                    "http"
                  ),
                  t
                )
              : Zr.createElement(t);
            return r.style ? r : Zr.createElement(t);
          },
          sn = function t(e, r, n) {
            var i = getComputedStyle(e);
            return (
              i[r] ||
              i.getPropertyValue(r.replace(Dr, "-$1").toLowerCase()) ||
              i.getPropertyValue(r) ||
              (!n && t(e, cn(r) || r, 1)) ||
              ""
            );
          },
          ln = "O,Moz,ms,Ms,Webkit".split(","),
          cn = function (t, e, r) {
            var n = (e || Rr).style,
              i = 5;
            if (t in n && !r) return t;
            for (
              t = t.charAt(0).toUpperCase() + t.substr(1);
              i-- && !(ln[i] + t in n);

            );
            return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? ln[i] : "") + t;
          },
          un = function () {
            "undefined" != typeof window &&
              window.document &&
              ((Pr = window),
              (Zr = Pr.document),
              (Or = Zr.documentElement),
              (Rr = on("div") || { style: {} }),
              on("div"),
              (Jr = cn(Jr)),
              (tn = Jr + "Origin"),
              (Rr.style.cssText =
                "border-width:0;line-height:0;position:absolute;padding:0"),
              ($r = !!cn("perspective")),
              (Mr = Tr.core.reverting),
              (Sr = 1));
          },
          pn = function t(e) {
            var r,
              n = on(
                "svg",
                (this.ownerSVGElement &&
                  this.ownerSVGElement.getAttribute("xmlns")) ||
                  "http://www.w3.org/2000/svg"
              ),
              i = this.parentNode,
              a = this.nextSibling,
              o = this.style.cssText;
            if (
              (Or.appendChild(n),
              n.appendChild(this),
              (this.style.display = "block"),
              e)
            )
              try {
                (r = this.getBBox()),
                  (this._gsapBBox = this.getBBox),
                  (this.getBBox = t);
              } catch (t) {}
            else this._gsapBBox && (r = this._gsapBBox());
            return (
              i && (a ? i.insertBefore(this, a) : i.appendChild(this)),
              Or.removeChild(n),
              (this.style.cssText = o),
              r
            );
          },
          fn = function (t, e) {
            for (var r = e.length; r--; )
              if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
          },
          dn = function (t) {
            var e;
            try {
              e = t.getBBox();
            } catch (r) {
              e = pn.call(t, !0);
            }
            return (
              (e && (e.width || e.height)) ||
                t.getBBox === pn ||
                (e = pn.call(t, !0)),
              !e || e.width || e.x || e.y
                ? e
                : {
                    x: +fn(t, ["x", "cx", "x1"]) || 0,
                    y: +fn(t, ["y", "cy", "y1"]) || 0,
                    width: 0,
                    height: 0,
                  }
            );
          },
          hn = function (t) {
            return !(
              !t.getCTM ||
              (t.parentNode && !t.ownerSVGElement) ||
              !dn(t)
            );
          },
          gn = function (t, e) {
            if (e) {
              var r = t.style;
              e in Cr && e !== tn && (e = Jr),
                r.removeProperty
                  ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                      (e = "-" + e),
                    r.removeProperty(e.replace(Dr, "-$1").toLowerCase()))
                  : r.removeAttribute(e);
            }
          },
          mn = function (t, e, r, n, i, a) {
            var o = new pr(t._pt, e, r, 0, 1, a ? Nr : Xr);
            return (t._pt = o), (o.b = n), (o.e = i), t._props.push(r), o;
          },
          vn = { deg: 1, rad: 1, turn: 1 },
          yn = { grid: 1, flex: 1 },
          _n = function t(e, r, n, i) {
            var a,
              o,
              s,
              l,
              c = parseFloat(n) || 0,
              u = (n + "").trim().substr((c + "").length) || "px",
              p = Rr.style,
              f = Br.test(r),
              d = "svg" === e.tagName.toLowerCase(),
              h = (d ? "client" : "offset") + (f ? "Width" : "Height"),
              g = 100,
              m = "px" === i,
              v = "%" === i;
            return i === u || !c || vn[i] || vn[u]
              ? c
              : ("px" !== u && !m && (c = t(e, r, n, "px")),
                (l = e.getCTM && hn(e)),
                (!v && "%" !== u) || (!Cr[r] && !~r.indexOf("adius"))
                  ? ((p[f ? "width" : "height"] = g + (m ? u : i)),
                    (o =
                      ~r.indexOf("adius") || ("em" === i && e.appendChild && !d)
                        ? e
                        : e.parentNode),
                    l && (o = (e.ownerSVGElement || {}).parentNode),
                    (o && o !== Zr && o.appendChild) || (o = Zr.body),
                    (s = o._gsap) &&
                    v &&
                    s.width &&
                    f &&
                    s.time === Pe.time &&
                    !s.uncache
                      ? gt((c / s.width) * g)
                      : ((v || "%" === u) &&
                          !yn[sn(o, "display")] &&
                          (p.position = sn(e, "position")),
                        o === e && (p.position = "static"),
                        o.appendChild(Rr),
                        (a = Rr[h]),
                        o.removeChild(Rr),
                        (p.position = "absolute"),
                        f &&
                          v &&
                          (((s = ft(o)).time = Pe.time), (s.width = o[h])),
                        gt(m ? (a * c) / g : a && c ? (g / a) * c : 0)))
                  : ((a = l ? e.getBBox()[f ? "width" : "height"] : e[h]),
                    gt(v ? (c / a) * g : (c / 100) * a)));
          },
          xn = function (t, e, r, n) {
            var i;
            return (
              Sr || un(),
              e in Fr &&
                "transform" !== e &&
                ~(e = Fr[e]).indexOf(",") &&
                (e = e.split(",")[0]),
              Cr[e] && "transform" !== e
                ? ((i = Mn(t, n)),
                  (i =
                    "transformOrigin" !== e
                      ? i[e]
                      : i.svg
                      ? i.origin
                      : $n(sn(t, tn)) + " " + i.zOrigin + "px"))
                : (!(i = t.style[e]) ||
                    "auto" === i ||
                    n ||
                    ~(i + "").indexOf("calc(")) &&
                  (i =
                    (Tn[e] && Tn[e](t, e, r)) ||
                    sn(t, e) ||
                    dt(t, e) ||
                    ("opacity" === e ? 1 : 0)),
              r && !~(i + "").trim().indexOf(" ") ? _n(t, e, i, r) + r : i
            );
          },
          bn = function (t, e, r, n) {
            if (!r || "none" === r) {
              var i = cn(e, t, 1),
                a = i && sn(t, i, 1);
              a && a !== r
                ? ((e = i), (r = a))
                : "borderColor" === e && (r = sn(t, "borderTopColor"));
            }
            var o,
              s,
              l,
              c,
              u,
              p,
              f,
              d,
              h,
              g,
              m,
              v = new pr(this._pt, t.style, e, 0, 1, ar),
              y = 0,
              _ = 0;
            if (
              ((v.b = r),
              (v.e = n),
              (r += ""),
              "auto" == (n += "") &&
                ((t.style[e] = n), (n = sn(t, e) || n), (t.style[e] = r)),
              Te((o = [r, n])),
              (n = o[1]),
              (l = (r = o[0]).match(K) || []),
              (n.match(K) || []).length)
            ) {
              for (; (s = K.exec(n)); )
                (f = s[0]),
                  (h = n.substring(y, s.index)),
                  u
                    ? (u = (u + 1) % 5)
                    : ("rgba(" !== h.substr(-5) && "hsla(" !== h.substr(-5)) ||
                      (u = 1),
                  f !== (p = l[_++] || "") &&
                    ((c = parseFloat(p) || 0),
                    (m = p.substr((c + "").length)),
                    "=" === f.charAt(1) && (f = vt(c, f) + m),
                    (d = parseFloat(f)),
                    (g = f.substr((d + "").length)),
                    (y = K.lastIndex - g.length),
                    g ||
                      ((g = g || x.units[e] || m),
                      y === n.length && ((n += g), (v.e += g))),
                    m !== g && (c = _n(t, e, p, g) || 0),
                    (v._pt = {
                      _next: v._pt,
                      p: h || 1 === _ ? h : ",",
                      s: c,
                      c: d - c,
                      m: (u && u < 4) || "zIndex" === e ? Math.round : 0,
                    }));
              v.c = y < n.length ? n.substring(y, n.length) : "";
            } else v.r = "display" === e && "none" === n ? Nr : Xr;
            return H.test(n) && (v.e = 0), (this._pt = v), v;
          },
          wn = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%",
          },
          kn = function (t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
              var r,
                n,
                i,
                a = e.t,
                o = a.style,
                s = e.u,
                l = a._gsap;
              if ("all" === s || !0 === s) (o.cssText = ""), (n = 1);
              else
                for (i = (s = s.split(",")).length; --i > -1; )
                  (r = s[i]),
                    Cr[r] && ((n = 1), (r = "transformOrigin" === r ? tn : Jr)),
                    gn(a, r);
              n &&
                (gn(a, Jr),
                l &&
                  (l.svg && a.removeAttribute("transform"),
                  Mn(a, 1),
                  (l.uncache = 1),
                  rn(o)));
            }
          },
          Tn = {
            clearProps: function (t, e, r, n, i) {
              if ("isFromStart" !== i.data) {
                var a = (t._pt = new pr(t._pt, e, r, 0, 0, kn));
                return (
                  (a.u = n), (a.pr = -10), (a.tween = i), t._props.push(r), 1
                );
              }
            },
          },
          Pn = [1, 0, 0, 1, 0, 0],
          Zn = {},
          On = function (t) {
            return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
          },
          Sn = function (t) {
            var e = sn(t, Jr);
            return On(e) ? Pn : e.substr(7).match(Y).map(gt);
          },
          Rn = function (t, e) {
            var r,
              n,
              i,
              a,
              o = t._gsap || ft(t),
              s = t.style,
              l = Sn(t);
            return o.svg && t.getAttribute("transform")
              ? "1,0,0,1,0,0" ===
                (l = [
                  (i = t.transform.baseVal.consolidate().matrix).a,
                  i.b,
                  i.c,
                  i.d,
                  i.e,
                  i.f,
                ]).join(",")
                ? Pn
                : l
              : (l !== Pn ||
                  t.offsetParent ||
                  t === Or ||
                  o.svg ||
                  ((i = s.display),
                  (s.display = "block"),
                  ((r = t.parentNode) && t.offsetParent) ||
                    ((a = 1), (n = t.nextElementSibling), Or.appendChild(t)),
                  (l = Sn(t)),
                  i ? (s.display = i) : gn(t, "display"),
                  a &&
                    (n
                      ? r.insertBefore(t, n)
                      : r
                      ? r.appendChild(t)
                      : Or.removeChild(t))),
                e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
          },
          En = function (t, e, r, n, i, a) {
            var o,
              s,
              l,
              c = t._gsap,
              u = i || Rn(t, !0),
              p = c.xOrigin || 0,
              f = c.yOrigin || 0,
              d = c.xOffset || 0,
              h = c.yOffset || 0,
              g = u[0],
              m = u[1],
              v = u[2],
              y = u[3],
              _ = u[4],
              x = u[5],
              b = e.split(" "),
              w = parseFloat(b[0]) || 0,
              k = parseFloat(b[1]) || 0;
            r
              ? u !== Pn &&
                (s = g * y - m * v) &&
                ((l = w * (-m / s) + k * (g / s) - (g * x - m * _) / s),
                (w = w * (y / s) + k * (-v / s) + (v * x - y * _) / s),
                (k = l))
              : ((w =
                  (o = dn(t)).x +
                  (~b[0].indexOf("%") ? (w / 100) * o.width : w)),
                (k =
                  o.y +
                  (~(b[1] || b[0]).indexOf("%") ? (k / 100) * o.height : k))),
              n || (!1 !== n && c.smooth)
                ? ((_ = w - p),
                  (x = k - f),
                  (c.xOffset = d + (_ * g + x * v) - _),
                  (c.yOffset = h + (_ * m + x * y) - x))
                : (c.xOffset = c.yOffset = 0),
              (c.xOrigin = w),
              (c.yOrigin = k),
              (c.smooth = !!n),
              (c.origin = e),
              (c.originIsAbsolute = !!r),
              (t.style[tn] = "0px 0px"),
              a &&
                (mn(a, c, "xOrigin", p, w),
                mn(a, c, "yOrigin", f, k),
                mn(a, c, "xOffset", d, c.xOffset),
                mn(a, c, "yOffset", h, c.yOffset)),
              t.setAttribute("data-svg-origin", w + " " + k);
          },
          Mn = function (t, e) {
            var r = t._gsap || new Be(t);
            if ("x" in r && !e && !r.uncache) return r;
            var n,
              i,
              a,
              o,
              s,
              l,
              c,
              u,
              p,
              f,
              d,
              h,
              g,
              m,
              v,
              y,
              _,
              b,
              w,
              k,
              T,
              P,
              Z,
              O,
              S,
              R,
              E,
              M,
              $,
              C,
              A,
              q,
              L = t.style,
              D = r.scaleX < 0,
              B = "px",
              z = "deg",
              F = getComputedStyle(t),
              Y = sn(t, tn) || "0";
            return (
              (n = i = a = l = c = u = p = f = d = 0),
              (o = s = 1),
              (r.svg = !(!t.getCTM || !hn(t))),
              F.translate &&
                (("none" === F.translate &&
                  "none" === F.scale &&
                  "none" === F.rotate) ||
                  (L[Jr] =
                    ("none" !== F.translate
                      ? "translate3d(" +
                        (F.translate + " 0 0")
                          .split(" ")
                          .slice(0, 3)
                          .join(", ") +
                        ") "
                      : "") +
                    ("none" !== F.rotate ? "rotate(" + F.rotate + ") " : "") +
                    ("none" !== F.scale
                      ? "scale(" + F.scale.split(" ").join(",") + ") "
                      : "") +
                    ("none" !== F[Jr] ? F[Jr] : "")),
                (L.scale = L.rotate = L.translate = "none")),
              (m = Rn(t, r.svg)),
              r.svg &&
                (r.uncache
                  ? ((S = t.getBBox()),
                    (Y = r.xOrigin - S.x + "px " + (r.yOrigin - S.y) + "px"),
                    (O = ""))
                  : (O = !e && t.getAttribute("data-svg-origin")),
                En(t, O || Y, !!O || r.originIsAbsolute, !1 !== r.smooth, m)),
              (h = r.xOrigin || 0),
              (g = r.yOrigin || 0),
              m !== Pn &&
                ((b = m[0]),
                (w = m[1]),
                (k = m[2]),
                (T = m[3]),
                (n = P = m[4]),
                (i = Z = m[5]),
                6 === m.length
                  ? ((o = Math.sqrt(b * b + w * w)),
                    (s = Math.sqrt(T * T + k * k)),
                    (l = b || w ? Lr(w, b) * Ar : 0),
                    (p = k || T ? Lr(k, T) * Ar + l : 0) &&
                      (s *= Math.abs(Math.cos(p * qr))),
                    r.svg &&
                      ((n -= h - (h * b + g * k)), (i -= g - (h * w + g * T))))
                  : ((q = m[6]),
                    (C = m[7]),
                    (E = m[8]),
                    (M = m[9]),
                    ($ = m[10]),
                    (A = m[11]),
                    (n = m[12]),
                    (i = m[13]),
                    (a = m[14]),
                    (c = (v = Lr(q, $)) * Ar),
                    v &&
                      ((O = P * (y = Math.cos(-v)) + E * (_ = Math.sin(-v))),
                      (S = Z * y + M * _),
                      (R = q * y + $ * _),
                      (E = P * -_ + E * y),
                      (M = Z * -_ + M * y),
                      ($ = q * -_ + $ * y),
                      (A = C * -_ + A * y),
                      (P = O),
                      (Z = S),
                      (q = R)),
                    (u = (v = Lr(-k, $)) * Ar),
                    v &&
                      ((y = Math.cos(-v)),
                      (A = T * (_ = Math.sin(-v)) + A * y),
                      (b = O = b * y - E * _),
                      (w = S = w * y - M * _),
                      (k = R = k * y - $ * _)),
                    (l = (v = Lr(w, b)) * Ar),
                    v &&
                      ((O = b * (y = Math.cos(v)) + w * (_ = Math.sin(v))),
                      (S = P * y + Z * _),
                      (w = w * y - b * _),
                      (Z = Z * y - P * _),
                      (b = O),
                      (P = S)),
                    c &&
                      Math.abs(c) + Math.abs(l) > 359.9 &&
                      ((c = l = 0), (u = 180 - u)),
                    (o = gt(Math.sqrt(b * b + w * w + k * k))),
                    (s = gt(Math.sqrt(Z * Z + q * q))),
                    (v = Lr(P, Z)),
                    (p = Math.abs(v) > 2e-4 ? v * Ar : 0),
                    (d = A ? 1 / (A < 0 ? -A : A) : 0)),
                r.svg &&
                  ((O = t.getAttribute("transform")),
                  (r.forceCSS =
                    t.setAttribute("transform", "") || !On(sn(t, Jr))),
                  O && t.setAttribute("transform", O))),
              Math.abs(p) > 90 &&
                Math.abs(p) < 270 &&
                (D
                  ? ((o *= -1),
                    (p += l <= 0 ? 180 : -180),
                    (l += l <= 0 ? 180 : -180))
                  : ((s *= -1), (p += p <= 0 ? 180 : -180))),
              (e = e || r.uncache),
              (r.x =
                n -
                ((r.xPercent =
                  n &&
                  ((!e && r.xPercent) ||
                    (Math.round(t.offsetWidth / 2) === Math.round(-n)
                      ? -50
                      : 0)))
                  ? (t.offsetWidth * r.xPercent) / 100
                  : 0) +
                B),
              (r.y =
                i -
                ((r.yPercent =
                  i &&
                  ((!e && r.yPercent) ||
                    (Math.round(t.offsetHeight / 2) === Math.round(-i)
                      ? -50
                      : 0)))
                  ? (t.offsetHeight * r.yPercent) / 100
                  : 0) +
                B),
              (r.z = a + B),
              (r.scaleX = gt(o)),
              (r.scaleY = gt(s)),
              (r.rotation = gt(l) + z),
              (r.rotationX = gt(c) + z),
              (r.rotationY = gt(u) + z),
              (r.skewX = p + z),
              (r.skewY = f + z),
              (r.transformPerspective = d + B),
              (r.zOrigin = parseFloat(Y.split(" ")[2]) || 0) && (L[tn] = $n(Y)),
              (r.xOffset = r.yOffset = 0),
              (r.force3D = x.force3D),
              (r.renderTransform = r.svg ? zn : $r ? Bn : An),
              (r.uncache = 0),
              r
            );
          },
          $n = function (t) {
            return (t = t.split(" "))[0] + " " + t[1];
          },
          Cn = function (t, e, r) {
            var n = Qt(e);
            return gt(parseFloat(e) + parseFloat(_n(t, "x", r + "px", n))) + n;
          },
          An = function (t, e) {
            (e.z = "0px"),
              (e.rotationY = e.rotationX = "0deg"),
              (e.force3D = 0),
              Bn(t, e);
          },
          qn = "0deg",
          Ln = "0px",
          Dn = ") ",
          Bn = function (t, e) {
            var r = e || this,
              n = r.xPercent,
              i = r.yPercent,
              a = r.x,
              o = r.y,
              s = r.z,
              l = r.rotation,
              c = r.rotationY,
              u = r.rotationX,
              p = r.skewX,
              f = r.skewY,
              d = r.scaleX,
              h = r.scaleY,
              g = r.transformPerspective,
              m = r.force3D,
              v = r.target,
              y = r.zOrigin,
              _ = "",
              x = ("auto" === m && t && 1 !== t) || !0 === m;
            if (y && (u !== qn || c !== qn)) {
              var b,
                w = parseFloat(c) * qr,
                k = Math.sin(w),
                T = Math.cos(w);
              (w = parseFloat(u) * qr),
                (b = Math.cos(w)),
                (a = Cn(v, a, k * b * -y)),
                (o = Cn(v, o, -Math.sin(w) * -y)),
                (s = Cn(v, s, T * b * -y + y));
            }
            g !== Ln && (_ += "perspective(" + g + Dn),
              (n || i) && (_ += "translate(" + n + "%, " + i + "%) "),
              (x || a !== Ln || o !== Ln || s !== Ln) &&
                (_ +=
                  s !== Ln || x
                    ? "translate3d(" + a + ", " + o + ", " + s + ") "
                    : "translate(" + a + ", " + o + Dn),
              l !== qn && (_ += "rotate(" + l + Dn),
              c !== qn && (_ += "rotateY(" + c + Dn),
              u !== qn && (_ += "rotateX(" + u + Dn),
              (p === qn && f === qn) || (_ += "skew(" + p + ", " + f + Dn),
              (1 === d && 1 === h) || (_ += "scale(" + d + ", " + h + Dn),
              (v.style[Jr] = _ || "translate(0, 0)");
          },
          zn = function (t, e) {
            var r,
              n,
              i,
              a,
              o,
              s = e || this,
              l = s.xPercent,
              c = s.yPercent,
              u = s.x,
              p = s.y,
              f = s.rotation,
              d = s.skewX,
              h = s.skewY,
              g = s.scaleX,
              m = s.scaleY,
              v = s.target,
              y = s.xOrigin,
              _ = s.yOrigin,
              x = s.xOffset,
              b = s.yOffset,
              w = s.forceCSS,
              k = parseFloat(u),
              T = parseFloat(p);
            (f = parseFloat(f)),
              (d = parseFloat(d)),
              (h = parseFloat(h)) && ((d += h = parseFloat(h)), (f += h)),
              f || d
                ? ((f *= qr),
                  (d *= qr),
                  (r = Math.cos(f) * g),
                  (n = Math.sin(f) * g),
                  (i = Math.sin(f - d) * -m),
                  (a = Math.cos(f - d) * m),
                  d &&
                    ((h *= qr),
                    (o = Math.tan(d - h)),
                    (i *= o = Math.sqrt(1 + o * o)),
                    (a *= o),
                    h &&
                      ((o = Math.tan(h)),
                      (r *= o = Math.sqrt(1 + o * o)),
                      (n *= o))),
                  (r = gt(r)),
                  (n = gt(n)),
                  (i = gt(i)),
                  (a = gt(a)))
                : ((r = g), (a = m), (n = i = 0)),
              ((k && !~(u + "").indexOf("px")) ||
                (T && !~(p + "").indexOf("px"))) &&
                ((k = _n(v, "x", u, "px")), (T = _n(v, "y", p, "px"))),
              (y || _ || x || b) &&
                ((k = gt(k + y - (y * r + _ * i) + x)),
                (T = gt(T + _ - (y * n + _ * a) + b))),
              (l || c) &&
                ((o = v.getBBox()),
                (k = gt(k + (l / 100) * o.width)),
                (T = gt(T + (c / 100) * o.height))),
              (o =
                "matrix(" +
                r +
                "," +
                n +
                "," +
                i +
                "," +
                a +
                "," +
                k +
                "," +
                T +
                ")"),
              v.setAttribute("transform", o),
              w && (v.style[Jr] = o);
          },
          Fn = function (t, e, r, n, i) {
            var a,
              o,
              s = 360,
              l = E(i),
              c = parseFloat(i) * (l && ~i.indexOf("rad") ? Ar : 1) - n,
              u = n + c + "deg";
            return (
              l &&
                ("short" === (a = i.split("_")[1]) &&
                  (c %= s) != c % 180 &&
                  (c += c < 0 ? s : -360),
                "cw" === a && c < 0
                  ? (c = ((c + 36e9) % s) - ~~(c / s) * s)
                  : "ccw" === a &&
                    c > 0 &&
                    (c = ((c - 36e9) % s) - ~~(c / s) * s)),
              (t._pt = o = new pr(t._pt, e, r, n, c, Kr)),
              (o.e = u),
              (o.u = "deg"),
              t._props.push(r),
              o
            );
          },
          Yn = function (t, e) {
            for (var r in e) t[r] = e[r];
            return t;
          },
          Kn = function (t, e, r) {
            var n,
              i,
              a,
              o,
              s,
              l,
              c,
              u = Yn({}, r._gsap),
              p = r.style;
            for (i in (u.svg
              ? ((a = r.getAttribute("transform")),
                r.setAttribute("transform", ""),
                (p[Jr] = e),
                (n = Mn(r, 1)),
                gn(r, Jr),
                r.setAttribute("transform", a))
              : ((a = getComputedStyle(r)[Jr]),
                (p[Jr] = e),
                (n = Mn(r, 1)),
                (p[Jr] = a)),
            Cr))
              (a = u[i]) !== (o = n[i]) &&
                "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) <
                  0 &&
                ((s = Qt(a) !== (c = Qt(o)) ? _n(r, i, a, c) : parseFloat(a)),
                (l = parseFloat(o)),
                (t._pt = new pr(t._pt, n, i, s, l - s, Yr)),
                (t._pt.u = c || 0),
                t._props.push(i));
            Yn(n, u);
          };
        ht("padding,margin,Width,Radius", function (t, e) {
          var r = "Top",
            n = "Right",
            i = "Bottom",
            a = "Left",
            o = (e < 3 ? [r, n, i, a] : [r + a, r + n, i + n, i + a]).map(
              function (r) {
                return e < 2 ? t + r : "border" + r + t;
              }
            );
          Tn[e > 1 ? "border" + t : t] = function (t, e, r, n, i) {
            var a, s;
            if (arguments.length < 4)
              return (
                (a = o.map(function (e) {
                  return xn(t, e, r);
                })),
                5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s
              );
            (a = (n + "").split(" ")),
              (s = {}),
              o.forEach(function (t, e) {
                return (s[t] = a[e] = a[e] || a[((e - 1) / 2) | 0]);
              }),
              t.init(e, s, i);
          };
        });
        var In,
          Hn,
          Xn = {
            name: "css",
            register: un,
            targetTest: function (t) {
              return t.style && t.nodeType;
            },
            init: function (t, e, r, n, i) {
              var a,
                o,
                s,
                l,
                c,
                u,
                p,
                f,
                d,
                h,
                g,
                m,
                v,
                y,
                _,
                b,
                w,
                k,
                T,
                P,
                Z = this._props,
                O = t.style,
                S = r.vars.startAt;
              for (p in (Sr || un(),
              (this.styles = this.styles || an(t)),
              (b = this.styles.props),
              (this.tween = r),
              e))
                if (
                  "autoRound" !== p &&
                  ((o = e[p]), !ot[p] || !Xe(p, e, r, n, t, i))
                )
                  if (
                    ((c = typeof o),
                    (u = Tn[p]),
                    "function" === c && (c = typeof (o = o.call(r, n, t, i))),
                    "string" === c && ~o.indexOf("random(") && (o = ce(o)),
                    u)
                  )
                    u(this, t, p, o, r) && (_ = 1);
                  else if ("--" === p.substr(0, 2))
                    (a = (getComputedStyle(t).getPropertyValue(p) + "").trim()),
                      (o += ""),
                      (we.lastIndex = 0),
                      we.test(a) || ((f = Qt(a)), (d = Qt(o))),
                      d ? f !== d && (a = _n(t, p, a, d) + d) : f && (o += f),
                      this.add(O, "setProperty", a, o, n, i, 0, 0, p),
                      Z.push(p),
                      b.push(p, 0, O[p]);
                  else if ("undefined" !== c) {
                    if (
                      (S && p in S
                        ? ((a =
                            "function" == typeof S[p]
                              ? S[p].call(r, n, t, i)
                              : S[p]),
                          E(a) && ~a.indexOf("random(") && (a = ce(a)),
                          Qt(a + "") || (a += x.units[p] || Qt(xn(t, p)) || ""),
                          "=" === (a + "").charAt(1) && (a = xn(t, p)))
                        : (a = xn(t, p)),
                      (l = parseFloat(a)),
                      (h =
                        "string" === c &&
                        "=" === o.charAt(1) &&
                        o.substr(0, 2)) && (o = o.substr(2)),
                      (s = parseFloat(o)),
                      p in Fr &&
                        ("autoAlpha" === p &&
                          (1 === l &&
                            "hidden" === xn(t, "visibility") &&
                            s &&
                            (l = 0),
                          b.push("visibility", 0, O.visibility),
                          mn(
                            this,
                            O,
                            "visibility",
                            l ? "inherit" : "hidden",
                            s ? "inherit" : "hidden",
                            !s
                          )),
                        "scale" !== p &&
                          "transform" !== p &&
                          ~(p = Fr[p]).indexOf(",") &&
                          (p = p.split(",")[0])),
                      (g = p in Cr))
                    )
                      if (
                        (this.styles.save(p),
                        m ||
                          (((v = t._gsap).renderTransform &&
                            !e.parseTransform) ||
                            Mn(t, e.parseTransform),
                          (y = !1 !== e.smoothOrigin && v.smooth),
                          ((m = this._pt =
                            new pr(
                              this._pt,
                              O,
                              Jr,
                              0,
                              1,
                              v.renderTransform,
                              v,
                              0,
                              -1
                            )).dep = 1)),
                        "scale" === p)
                      )
                        (this._pt = new pr(
                          this._pt,
                          v,
                          "scaleY",
                          v.scaleY,
                          (h ? vt(v.scaleY, h + s) : s) - v.scaleY || 0,
                          Yr
                        )),
                          (this._pt.u = 0),
                          Z.push("scaleY", p),
                          (p += "X");
                      else {
                        if ("transformOrigin" === p) {
                          b.push(tn, 0, O[tn]),
                            (k = void 0),
                            (T = void 0),
                            (P = void 0),
                            (T = (k = (w = o).split(" "))[0]),
                            (P = k[1] || "50%"),
                            ("top" !== T &&
                              "bottom" !== T &&
                              "left" !== P &&
                              "right" !== P) ||
                              ((w = T), (T = P), (P = w)),
                            (k[0] = wn[T] || T),
                            (k[1] = wn[P] || P),
                            (o = k.join(" ")),
                            v.svg
                              ? En(t, o, 0, y, 0, this)
                              : ((d = parseFloat(o.split(" ")[2]) || 0) !==
                                  v.zOrigin &&
                                  mn(this, v, "zOrigin", v.zOrigin, d),
                                mn(this, O, p, $n(a), $n(o)));
                          continue;
                        }
                        if ("svgOrigin" === p) {
                          En(t, o, 1, y, 0, this);
                          continue;
                        }
                        if (p in Zn) {
                          Fn(this, v, p, l, h ? vt(l, h + o) : o);
                          continue;
                        }
                        if ("smoothOrigin" === p) {
                          mn(this, v, "smooth", v.smooth, o);
                          continue;
                        }
                        if ("force3D" === p) {
                          v[p] = o;
                          continue;
                        }
                        if ("transform" === p) {
                          Kn(this, o, t);
                          continue;
                        }
                      }
                    else p in O || (p = cn(p) || p);
                    if (
                      g ||
                      ((s || 0 === s) &&
                        (l || 0 === l) &&
                        !zr.test(o) &&
                        p in O)
                    )
                      s || (s = 0),
                        (f = (a + "").substr((l + "").length)) !==
                          (d = Qt(o) || (p in x.units ? x.units[p] : f)) &&
                          (l = _n(t, p, a, d)),
                        (this._pt = new pr(
                          this._pt,
                          g ? v : O,
                          p,
                          l,
                          (h ? vt(l, h + s) : s) - l,
                          g ||
                          ("px" !== d && "zIndex" !== p) ||
                          !1 === e.autoRound
                            ? Yr
                            : Hr
                        )),
                        (this._pt.u = d || 0),
                        f !== d &&
                          "%" !== d &&
                          ((this._pt.b = a), (this._pt.r = Ir));
                    else if (p in O) bn.call(this, t, p, a, h ? h + o : o);
                    else if (p in t)
                      this.add(t, p, a || t[p], h ? h + o : o, n, i);
                    else if ("parseTransform" !== p) {
                      j(p, o);
                      continue;
                    }
                    g ||
                      (p in O ? b.push(p, 0, O[p]) : b.push(p, 1, a || t[p])),
                      Z.push(p);
                  }
              _ && ur(this);
            },
            render: function (t, e) {
              if (e.tween._time || !Mr())
                for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
              else e.styles.revert();
            },
            get: xn,
            aliases: Fr,
            getSetter: function (t, e, r) {
              var n = Fr[e];
              return (
                n && n.indexOf(",") < 0 && (e = n),
                e in Cr && e !== tn && (t._gsap.x || xn(t, "x"))
                  ? r && Er === r
                    ? "scale" === e
                      ? jr
                      : Vr
                    : (Er = r || {}) && ("scale" === e ? Gr : Qr)
                  : t.style && !C(t.style[e])
                  ? Ur
                  : ~e.indexOf("-")
                  ? Wr
                  : rr(t, e)
              );
            },
            core: { _removeProperty: gn, _getMatrix: Rn },
          };
        (Tr.utils.checkPrefix = cn),
          (Tr.core.getStyleSaver = an),
          (Hn = ht(
            "x,y,z,scale,scaleX,scaleY,xPercent,yPercent" +
              "," +
              (In = "rotation,rotationX,rotationY,skewX,skewY") +
              ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
            function (t) {
              Cr[t] = 1;
            }
          )),
          ht(In, function (t) {
            (x.units[t] = "deg"), (Zn[t] = 1);
          }),
          (Fr[Hn[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + In),
          ht(
            "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
            function (t) {
              var e = t.split(":");
              Fr[e[1]] = Hn[e[0]];
            }
          ),
          ht(
            "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
            function (t) {
              x.units[t] = "px";
            }
          ),
          Tr.registerPlugin(Xn);
        var Nn = Tr.registerPlugin(Xn) || Tr;
        Nn.core.Tween;
      },
      398: () => {},
    },
    e = {};
  function r(n) {
    var i = e[n];
    if (void 0 !== i) return i.exports;
    var a = (e[n] = { exports: {} });
    return t[n](a, a.exports, r), a.exports;
  }
  (r.d = (t, e) => {
    for (var n in e)
      r.o(e, n) &&
        !r.o(t, n) &&
        Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
  }),
    (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    r(855),
    r(268),
    r(205),
    r(111),
    r(675),
    r(817),
    r(330),
    r(499),
    r(820),
    r(510),
    r(275),
    r(342),
    r(782),
    r(776),
    r(480),
    r(228),
    r(638),
    r(511),
    r(78),
    r(889),
    r(103),
    r(410),
    r(533),
    r(424),
    r(588),
    r(98),
    r(507),
    r(566),
    r(959),
    r(398);
})();
