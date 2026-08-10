import { d as createAstro, c as createComponent, a as renderTemplate, b as addAttribute, e as renderSlot, r as renderComponent, f as renderHead } from './astro/server_b0DU9Y3K.mjs';
import 'piccolore';
import { $ as $$SiteHeader } from './SiteHeader_y61EAjpp.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://naphjohn.github.io");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const frontmatter = Astro2.props.frontmatter ?? Astro2.props;
  const {
    title,
    description,
    pubDate,
    series,
    altLang,
    altHref,
    free,
    lang = "zh"
  } = frontmatter;
  const base = "/stock-blog/";
  const giscusLang = lang === "zh" ? "zh-CN" : "en";
  const _d = pubDate instanceof Date ? pubDate : pubDate ? new Date(pubDate) : null;
  const dateLabel = _d ? lang === "en" ? _d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : _d.getFullYear() + "年" + (_d.getMonth() + 1) + "月" + _d.getDate() + "日" : "";
  const dateIso = _d ? _d.toISOString().slice(0, 10) : "";
  return renderTemplate(_a || (_a = __template(["<html", '> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="color-scheme" content="light dark"><script', "></script><script>\n      (function () {\n        try {\n          var t = localStorage.getItem('theme');\n          if (t !== 'light' && t !== 'dark') {\n            t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';\n          }\n          document.documentElement.setAttribute('data-theme', t);\n        } catch (e) {}\n      })();\n    </script><title>", " · ", "</title>", "", "</head> <body> ", " <main> ", " <h1>", "</h1> ", ' <div id="post-wrap"', ' style="position:relative"> <article class="prose" id="post-content"> ', ' </article> <div class="paywall-veil" id="paywall-veil" hidden> <h3>☕️ 请作者喝咖啡</h3> <p>后续章节欢迎请作者喝杯咖啡（最低 ¥1），输入作者私发的解锁码即可解锁本专栏全部内容。</p> <button class="pbtn" id="veil-btn" type="button">打赏解锁</button> </div> </div> <section class="engage"> <div class="engage-actions"> <button id="like-btn" class="like-btn" type="button" aria-pressed="false"> <span class="like-ico">👍</span> <span class="like-label">点赞</span> <span id="like-count" class="like-count">0</span> </button> <button id="bookmark-btn" class="bookmark-btn" type="button" aria-pressed="false"> <span class="bookmark-ico">🔖</span> <span id="bookmark-label" class="bookmark-label">收藏</span> </button> </div> <p class="engage-tip">觉得有用？欢迎点赞、收藏，或请我喝杯咖啡 ☕</p> <div class="reward"> <div class="reward-col"> <div class="reward-qr"> <img', ' alt="支付宝收款码" loading="lazy"> </div> <p>支付宝</p> </div> <div class="reward-col"> <div class="reward-qr"> <img', ' alt="微信收款码" loading="lazy"> </div> <p>微信</p> </div> </div> </section> <section class="comments" aria-label="评论"> <h2 id="comments">💬 留言</h2> <div class="giscus-hint">\n评论由 <a href="https://giscus.app" target="_blank" rel="noopener noreferrer">Giscus</a> 驱动（基于 GitHub Discussions）。\n          当前仓库 <code>NaphJohn/stock-blog</code> 尚未启用 Discussions 或未安装 Giscus App：请在 GitHub 仓库 Settings → General → Features 勾选 Discussions，并到 github.com/apps/giscus 安装本仓库后刷新，评论区即自动显示。\n</div> <div class="giscus"></div> <script src="https://giscus.app/client.js" data-repo="NaphJohn/stock-blog" data-repo-id="R_PLACEHOLDER_REPO_ID" data-category="Announcements" data-mapping="pathname" data-strict="0" data-reactions-enabled="1" data-emit-metadata="0" data-input-position="bottom" data-theme="preferred_color_scheme"', ` crossorigin="anonymous" async>
        </script> <script>
          // Giscus 成功加载后，自动隐藏配置提示框
          (function () {
            var hint = document.querySelector('.giscus-hint');
            if (!hint) return;
            var tries = 0;
            var iv = setInterval(function () {
              tries++;
              if (document.querySelector('iframe.giscus-frame')) {
                hint.style.display = 'none';
                clearInterval(iv);
              } else if (tries > 40) {
                clearInterval(iv); // 约 20s 仍未加载，说明配置缺失，保留提示
              }
            }, 500);
          })();
        </script> </section> </main> <script>
      // 点赞
      (function () {
        var btn = document.getElementById('like-btn');
        if (!btn) return;
        var cnt = document.getElementById('like-count');
        var key = 'like:' + location.pathname;
        function read() { try { return localStorage.getItem(key) === '1'; } catch (e) { return false; } }
        function render() {
          var liked = read();
          btn.classList.toggle('liked', liked);
          btn.setAttribute('aria-pressed', liked ? 'true' : 'false');
          cnt.textContent = liked ? '1' : '0';
        }
        render();
        btn.addEventListener('click', function () {
          var liked = !read();
          try { localStorage.setItem(key, liked ? '1' : '0'); } catch (e) {}
          render();
          if (liked) { btn.classList.remove('pop'); void btn.offsetWidth; btn.classList.add('pop'); }
        });
      })();

      // 收藏 / 书签
      (function () {
        var btn = document.getElementById('bookmark-btn');
        if (!btn) return;
        var label = document.getElementById('bookmark-label');
        var key = 'blog-bookmarks';
        var url = location.pathname;
        function get() {
          try { return JSON.parse(localStorage.getItem(key) || '[]'); }
          catch (e) { return []; }
        }
        function isSaved() { return get().some(function (b) { return b.url === url; }); }
        function render() {
          var saved = isSaved();
          btn.classList.toggle('saved', saved);
          btn.setAttribute('aria-pressed', saved ? 'true' : 'false');
          if (label) label.textContent = saved ? '已收藏' : '收藏';
          if (window.__renderBookmarks) window.__renderBookmarks();
        }
        btn.addEventListener('click', function () {
          var list = get();
          if (isSaved()) {
            list = list.filter(function (b) { return b.url !== url; });
          } else {
            var h1 = document.querySelector('h1');
            var title = h1 ? h1.textContent.trim() : document.title;
            list.unshift({ url: url, title: title, lang: document.documentElement.lang || 'zh', added: Date.now() });
          }
          try { localStorage.setItem(key, JSON.stringify(list)); } catch (e) {}
          render();
        });
        render();
      })();

      // 划线 / 下划线 / 清除高亮
      (function () {
        var article = document.getElementById('post-content');
        if (!article) return;
        var toolbar = document.getElementById('hl-toolbar');
        var storageKey = 'blog-highlights:' + location.pathname;
        var pendingRange = null;

        function getSaved() {
          try { return JSON.parse(localStorage.getItem(storageKey) || '[]'); }
          catch (e) { return []; }
        }
        function save(list) {
          try { localStorage.setItem(storageKey, JSON.stringify(list)); } catch (e) {}
        }

        function showToolbar(x, y) {
          toolbar.hidden = false;
          toolbar.style.left = x + 'px';
          toolbar.style.top = Math.max(8, y - 8) + 'px';
        }
        function hideToolbar() {
          toolbar.hidden = true;
          pendingRange = null;
        }

        function getTextNodes(root) {
          var nodes = [];
          var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
          var n;
          while ((n = walker.nextNode())) {
            if (n.textContent.trim()) nodes.push(n);
          }
          return nodes;
        }

        function wrapNode(node, start, end, type) {
          var text = node.textContent;
          var before = text.slice(0, start);
          var target = text.slice(start, end);
          var after = text.slice(end);
          var el = document.createElement(type === 'highlight' ? 'mark' : 'span');
          el.className = type === 'highlight' ? 'user-hl' : 'user-ul';
          el.textContent = target;
          var frag = document.createDocumentFragment();
          if (before) frag.appendChild(document.createTextNode(before));
          frag.appendChild(el);
          if (after) frag.appendChild(document.createTextNode(after));
          node.parentNode.replaceChild(frag, node);
          return el;
        }

        function applyHighlight(range, type) {
          var text = range.toString().trim();
          if (!text) return;
          var sc = range.startContainer, so = range.startOffset;
          var ec = range.endContainer, eo = range.endOffset;
          if (sc === ec && sc.nodeType === 3) {
            wrapNode(sc, so, eo, type);
          } else {
            var wrapper = document.createElement(type === 'highlight' ? 'mark' : 'span');
            wrapper.className = type === 'highlight' ? 'user-hl' : 'user-ul';
            try { wrapper.appendChild(range.extractContents()); }
            catch (e) { return; }
            range.insertNode(wrapper);
          }
          save(getSaved().concat({ text: text, type: type, created: Date.now() }));
        }

        function clearAll() {
          article.querySelectorAll('.user-hl, .user-ul').forEach(function (el) {
            var parent = el.parentNode;
            while (el.firstChild) parent.insertBefore(el.firstChild, el);
            parent.removeChild(el);
            parent.normalize();
          });
          save([]);
        }

        function restore() {
          var saved = getSaved();
          if (!saved.length) return;
          saved.forEach(function (item) {
            var text = item.text;
            var type = item.type;
            var nodes = getTextNodes(article);
            for (var i = 0; i < nodes.length; i++) {
              var node = nodes[i];
              var idx = node.textContent.indexOf(text);
              if (idx >= 0) {
                wrapNode(node, idx, idx + text.length, type);
                break;
              }
            }
          });
        }

        document.addEventListener('mouseup', function (e) {
          // 忽略在工具栏上的点击
          if (toolbar.contains(e.target)) return;
          setTimeout(function () {
            var sel = window.getSelection();
            if (!sel.rangeCount || sel.isCollapsed) { hideToolbar(); return; }
            var range = sel.getRangeAt(0);
            var container = range.commonAncestorContainer;
            if (container.nodeType === 3) container = container.parentElement;
            if (!container.closest('article.prose')) { hideToolbar(); return; }
            pendingRange = range.cloneRange();
            var rect = range.getBoundingClientRect();
            showToolbar(rect.left + rect.width / 2 + window.scrollX, rect.top + window.scrollY);
          }, 10);
        });

        toolbar.addEventListener('click', function (e) {
          var btn = e.target.closest('button');
          if (!btn) return;
          var type = btn.getAttribute('data-type');
          if (type === 'clear') {
            clearAll();
            hideToolbar();
            window.getSelection().removeAllRanges();
            return;
          }
          if (!pendingRange) return;
          applyHighlight(pendingRange, type);
          hideToolbar();
          window.getSelection().removeAllRanges();
        });

        restore();
      })();
    </script> <script>
      // 付费章节遮罩：未解锁则模糊正文 + 显示打赏解锁层
      (function () {
        var wrap = document.getElementById('post-wrap');
        if (!wrap) return;
        if (wrap.getAttribute('data-free') === '1') return;
        if (!window.MingLiPay) return;
        if (MingLiPay.isChapterUnlocked()) return;
        var veil = document.getElementById('paywall-veil');
        wrap.classList.add('article-lock');
        if (veil) veil.hidden = false;
        var btn = document.getElementById('veil-btn');
        if (btn) btn.addEventListener('click', function () {
          MingLiPay.showTipModal({
            title: '请作者喝咖啡 ☕️',
            desc: '请作者喝杯咖啡后（最低 ¥1），输入作者私发的解锁码，即可解锁本专栏全部内容；作者本人免付费。',
            unlockCode: btoa('gushi2026ch')
          }, function () {
            wrap.classList.remove('article-lock');
            if (veil) veil.hidden = true;
          });
        });
      })();
    </script> <footer>© 2026 `, " · ", "</footer> </body></html>"])), addAttribute(lang, "lang"), addAttribute(`${base}paywall.js`, "src"), title, lang === "en" ? "Market Notes" : "股市笔记", description && renderTemplate`<meta name="description"${addAttribute(description, "content")}>`, renderHead(), renderComponent($$result, "SiteHeader", $$SiteHeader, { "lang": lang, "altLang": altLang, "altHref": altHref, "series": series }), series && renderTemplate`<span class="series-tag">系列：${series}</span>`, title, pubDate && renderTemplate`<time${addAttribute(dateIso, "datetime")}>${dateLabel}</time>`, addAttribute(free ? "1" : "0", "data-free"), renderSlot($$result, $$slots["default"]), addAttribute(`${base}reward/alipay.png`, "src"), addAttribute(`${base}reward/wechat.png`, "src"), addAttribute(giscusLang, "data-lang"), lang === "en" ? "Market Notes" : "股市笔记", lang === "en" ? "Hosted on GitHub Pages" : "托管于 GitHub Pages");
}, "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/layouts/BlogPost.astro", void 0);

export { $$BlogPost as $ };
