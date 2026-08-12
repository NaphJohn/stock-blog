import { b as createAstro, c as createComponent, a as renderTemplate, r as renderComponent, F as Fragment, d as addAttribute, m as maybeRenderHead } from './astro/server_CYDbQRlG.mjs';
import 'piccolore';
/* empty css                             */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://naphjohn.github.io");
const $$SiteHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SiteHeader;
  const { lang = "zh", altLang, altHref, series } = Astro2.props;
  const siteName = lang === "en" ? "Market Notes" : "股市笔记";
  const base = "/stock-blog/";
  const homeHref = lang === "zh" ? base : base + "en/";
  const seriesHref = homeHref;
  const altHrefFull = altHref ? base + altHref.replace(/^\//, "") : void 0;
  return renderTemplate(_a || (_a = __template(["", '<header class="site-header"> <a', ' class="brand">', "</a> <nav> ", " ", ` <button id="bookmark-toggle" class="header-btn" type="button" aria-label="书签" title="书签">🔖</button> <button id="theme-toggle" class="theme-toggle" type="button" aria-label="切换日间/夜间模式">🌙</button> </nav> </header> <div id="bookmarks-panel" class="bookmarks-panel" hidden> <div class="bookmarks-head"> <strong>书签</strong> <button id="bookmarks-close" type="button" aria-label="关闭">×</button> </div> <ul id="bookmarks-list" class="bookmarks-list"></ul> <p id="bookmarks-empty" class="bookmarks-empty">暂无书签，在文章页点击「收藏」按钮即可添加。</p> </div> <div id="hl-toolbar" class="hl-toolbar" hidden> <button data-type="highlight" type="button" title="高亮">🖍️ 高亮</button> <button data-type="underline" type="button" title="下划线">➖ 下划线</button> <button data-type="clear" type="button" title="清除本页标记">❌ 清除</button> </div> <script>
  (function () {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    function sync() {
      var t = document.documentElement.getAttribute('data-theme');
      btn.textContent = t === 'dark' ? '☀️' : '🌙';
      syncGiscus(t);
    }
    btn.addEventListener('click', function () {
      var cur = document.documentElement.getAttribute('data-theme');
      var next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      sync();
    });
    sync();
  })();

  // 书签面板
  (function () {
    var toggle = document.getElementById('bookmark-toggle');
    var panel = document.getElementById('bookmarks-panel');
    var close = document.getElementById('bookmarks-close');
    var list = document.getElementById('bookmarks-list');
    var empty = document.getElementById('bookmarks-empty');
    if (!toggle || !panel) return;

    function getBookmarks() {
      try { return JSON.parse(localStorage.getItem('blog-bookmarks') || '[]'); }
      catch (e) { return []; }
    }
    function saveBookmarks(arr) {
      try { localStorage.setItem('blog-bookmarks', JSON.stringify(arr)); } catch (e) {}
    }
    function render() {
      var bm = getBookmarks();
      list.innerHTML = '';
      if (!bm.length) {
        empty.style.display = 'block';
        list.style.display = 'none';
        return;
      }
      empty.style.display = 'none';
      list.style.display = 'block';
      bm.forEach(function (b) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = b.url;
        a.textContent = b.title || b.url;
        a.title = b.title || b.url;
        var del = document.createElement('button');
        del.type = 'button';
        del.textContent = '删除';
        del.title = '删除书签';
        del.addEventListener('click', function () {
          saveBookmarks(getBookmarks().filter(function (x) { return x.url !== b.url; }));
          render();
        });
        li.appendChild(a);
        li.appendChild(del);
        list.appendChild(li);
      });
    }
    function open() { panel.hidden = false; render(); }
    function closeFn() { panel.hidden = true; }
    toggle.addEventListener('click', function () { panel.hidden ? open() : closeFn(); });
    close && close.addEventListener('click', closeFn);
    document.addEventListener('click', function (e) {
      if (!panel.hidden && !panel.contains(e.target) && e.target !== toggle) closeFn();
    });
    window.__renderBookmarks = render;
  })();

  function syncGiscus(theme) {
    var iframe = document.querySelector('iframe.giscus-frame');
    if (!iframe) return;
    try {
      iframe.contentWindow.postMessage({ giscus: { setConfig: { theme: theme === 'dark' ? 'dark' : 'light' } } }, 'https://giscus.app');
    } catch (e) {}
  }

  window.addEventListener('load', function () {
    setTimeout(function () {
      syncGiscus(document.documentElement.getAttribute('data-theme'));
    }, 1200);
  });
</script> `])), maybeRenderHead(), addAttribute(homeHref, "href"), siteName, series && renderTemplate`<a${addAttribute(seriesHref, "href")}>${series}</a>`, altHrefFull ? renderTemplate`<span class="lang-switch"> ${lang === "zh" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<span class="cur">中文</span><span class="sep">/</span><a${addAttribute(altHrefFull, "href")}>English</a>` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<a${addAttribute(altHrefFull, "href")}>中文</a><span class="sep">/</span><span class="cur">English</span>` })}`} </span>` : renderTemplate`<span class="lang-switch"><span class="cur">${lang === "en" ? "English" : "中文"}</span></span>`);
}, "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/components/SiteHeader.astro", void 0);

export { $$SiteHeader as $ };
