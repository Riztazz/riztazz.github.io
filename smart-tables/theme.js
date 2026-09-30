const r = document.documentElement, k = "docsite-theme";
try { const s = localStorage.getItem(k); if (s) r.dataset.theme = s; } catch (e) {}
addEventListener("click", e => {
  if (e.target.id !== "t") return;
  const d = r.dataset.theme === "dark" ||
            (!r.dataset.theme && matchMedia("(prefers-color-scheme: dark)").matches);
  r.dataset.theme = d ? "light" : "dark";
  try { localStorage.setItem(k, r.dataset.theme); } catch (e) {}
});

const zoom = () => document.getElementById("z");
addEventListener("click", e => {
  const img = e.target.closest(".shot img");
  if (img) { zoom().firstElementChild.src = img.dataset.full || img.currentSrc || img.src; zoom().hidden = false; }
  else if (e.target.closest("#z")) { zoom().hidden = true; }
});
addEventListener("keydown", e => { if (e.key === "Escape") zoom().hidden = true; });

function startSearch() {
  var box = document.getElementById("s");
  if (!box || !window.DOCS) { return; }

  var q = document.getElementById("q");
  var r = document.getElementById("r");
  var root = box.dataset.root || "";
  var here = box.dataset.here || "";
  var rows = [], at = -1;

  function score(needle, hay) {
    var low = hay.toLowerCase(), n = 0, points = 0, last = -2;
    for (var i = 0; i < low.length && n < needle.length; i++) {
      if (low[i] !== needle[n]) { continue; }
      var starts = i === 0 || hay[i - 1] === " " || (hay[i] >= "A" && hay[i] <= "Z");
      points += starts ? 6 : 1;
      if (i === last + 1) { points += 4; }
      last = i; n++;
    }
    if (n < needle.length) { return -1; }

    return points - hay.length * 0.05;
  }

  function mark(text, needle) {
    var out = "", n = 0;
    for (var i = 0; i < text.length; i++) {
      if (n < needle.length && text[i].toLowerCase() === needle[n]) {
        out += "<em>" + text[i] + "</em>"; n++;
      } else { out += text[i]; }
    }
    return out;
  }

  function draw() {
    var needle = q.value.trim().toLowerCase().replace(/[ \t]+/g, "");
    if (!needle) { r.hidden = true; r.innerHTML = ""; rows = []; at = -1; return; }

    var mine = [], rest = [];
    for (var i = 0; i < window.DOCS.length; i++) {
      var row = window.DOCS[i], s = score(needle, row[0]);
      if (s < 0) { continue; }
      (row[1].split("#")[0] === here ? mine : rest).push([s, row]);
    }
    var by = function (a, b) { return b[0] - a[0]; };
    mine.sort(by); rest.sort(by);
    mine = mine.slice(0, 8); rest = rest.slice(0, 8);

    var html = "";
    rows = [];
    function group(label, list) {
      if (!list.length) { return; }
      html += "<b>" + label + "</b>";
      for (var j = 0; j < list.length; j++) {
        var row = list[j][1];
        rows.push(root + row[1]);
        html += '<a href="' + root + row[1] + '">' + mark(row[0], needle) +
                (row[2] ? "<small>" + row[2] + "</small>" : "") + "</a>";
      }
    }
    group("On this page", mine);
    group("Elsewhere", rest);
    if (!html) { html = "<p>Nothing matches.</p>"; }

    r.innerHTML = html;
    r.hidden = false;
    at = -1;
  }

  function highlight(next) {
    var links = r.querySelectorAll("a");
    if (!links.length) { return; }
    if (at >= 0) { links[at].removeAttribute("aria-selected"); }
    at = (next + links.length) % links.length;
    links[at].setAttribute("aria-selected", "true");
    links[at].scrollIntoView({ block: "nearest" });
  }

  q.addEventListener("input", draw);
  q.addEventListener("keydown", function (e) {
    if (e.key === "ArrowDown") { e.preventDefault(); highlight(at + 1); }
    else if (e.key === "ArrowUp") { e.preventDefault(); highlight(at - 1); }
    else if (e.key === "Enter" && at >= 0) { e.preventDefault(); location.href = rows[at]; }
    else if (e.key === "Escape") { q.value = ""; draw(); q.blur(); }
  });

  document.addEventListener("click", function (e) {
    if (!box.contains(e.target)) { r.hidden = true; }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "/" && document.activeElement !== q) { e.preventDefault(); q.focus(); }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startSearch);
} else {
  startSearch();
}
