
function chipClass(c)
{
    return CHIP_CLASS[c] || CHIP_CLASS.green;
}
function ytThumb(id)
{
    return 'https://img.youtube.com/vi/' + id + '/hqdefault.jpg';
}
function coverSrc(item)
{
    return item.type === 'youtube' ? ytThumb(item.id) : item.src;
}

function normaliseGist(entry, fallbackLabel) {
    if (!entry) {
        return null;
    }
    if (typeof entry === 'string') {
        return { url: entry, label: fallbackLabel };
    }
    return { url: entry.url, label: entry.label || fallbackLabel };
}

function buildItemList(project) {
    var items = (project.media || []).slice();
    if (project.gist) {
        var h = normaliseGist(project.gist.header, 'HEADER');
        var i = normaliseGist(project.gist.implementation, 'IMPLEMENTATION');
        if (h) {
            items.push({ type: 'gist', src: h.url, label: h.label });
        }
        if (i) {
            items.push({ type: 'gist', src: i.url, label: i.label });
        }
    }
    return items;
}

// This is beginning to feel like.. silliness, but it keeps everything so simple, so.. here we are :P
function buildCard(project, index) {
    var items = buildItemList(project);
    var first = items[0];
    var count = items.length;
    var reverse = index % 2 === 1 ? ' ' + DOM_CLASSES.PROJECT_CARD_REVERSE : '';
    var wip = project.wip ? '<div class="' + DOM_CLASSES.WIP_BADGE + '">IN DEVELOPMENT</div>' : '';
    var badge = count > 1 ? '<div class="' + DOM_CLASSES.PROJECT_COVER_COUNT + '">' + count + ' MEDIA</div>' : '';
    var imgSrc = first && first.type !== 'gist' ? coverSrc(first) : null;
    var lbl = count > 1
        ? 'VIEW GALLERY'
        : (first && first.type === 'youtube'
            ? 'PLAY VIDEO'
            : (first && first.type === 'gist' ? 'READ MORE' : 'VIEW IMAGE'));
    var GH_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96" width="44" height="44"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/></svg>';

    var cover = first
        ? '<div class="' + DOM_CLASSES.PROJECT_COVER + '" data-project="' + project.id + '">'
        + (imgSrc ? '<img class="' + DOM_CLASSES.PROJECT_COVER_IMG + '" src="' + imgSrc + '" alt="' + project.title + '" loading="lazy">' : '')
        + '<div class="' + DOM_CLASSES.PROJECT_COVER_OVERLAY + '">'
        + '<div class="' + DOM_CLASSES.PROJECT_COVER_PLAY + '"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg></div>'
        + '<div class="' + DOM_CLASSES.PROJECT_COVER_LABEL + '">' + lbl + '</div>'
        + '</div>' + badge + '</div>'
        : (project.repo
            ? '<a class="' + DOM_CLASSES.PROJECT_COVER + ' ' + DOM_CLASSES.PROJECT_COVER_REPO + '" href="' + project.repo.url + '" target="_blank" rel="noopener noreferrer">'
            + GH_SVG + '<span>VIEW on GitHub</span></a>'
            : '<div class="' + DOM_CLASSES.PROJECT_COVER + ' ' + DOM_CLASSES.PROJECT_COVER_EMPTY + '">NO MEDIA</div>');

    var stack = project.stack.map(function (s)
    {
        return '<span class="' + chipClass(s.color) + '">' + s.label + '</span>';
    }).join('');

    var bullets = project.bullets.map(function (b)
    {
        return '<li>' + b + '</li>';
    }).join('');

    return '<div class="' + DOM_CLASSES.PROJECT_CARD + reverse + ' ' + DOM_CLASSES.FADE_IN + '" id="project-' + project.id + '">'
        + cover
        + '<div class="' + DOM_CLASSES.PROJECT_INFO + '">'
        + wip
        + '<div class="' + DOM_CLASSES.PROJECT_CATEGORY + '">' + project.category + '</div>'
        + '<div class="' + DOM_CLASSES.PROJECT_TITLE + '">' + project.title + '</div>'
        + '<div class="' + DOM_CLASSES.PROJECT_SUBTITLE + '">' + project.subtitle + '</div>'
        + '<p class="' + DOM_CLASSES.PROJECT_DESC + '">' + project.desc + '</p>'
        + '<ul class="' + DOM_CLASSES.PROJECT_BULLETS + '">' + bullets + '</ul>'
        + '<div class="' + DOM_CLASSES.PROJECT_STACK + '">' + stack + '</div>'
        + '</div></div>';
}

function renderProjects() {
    var el = document.getElementById(DOM_IDS.PROJECTS_CONTAINER);
    if (!el) {
        return;
    }
    el.innerHTML = PROJECTS.map(function (p, i)
    {
        return buildCard(p, i);
    }).join('');
}

renderProjects();

var lb = document.getElementById(DOM_IDS.LIGHTBOX);
var lbViewer = document.getElementById(DOM_IDS.LB_VIEWER);
var lbThumbs = document.getElementById(DOM_IDS.LB_THUMBS);
var lbTitle = document.getElementById(DOM_IDS.LB_TITLE);
var lbCounter = document.getElementById(DOM_IDS.LB_COUNTER);
var lbCaption = document.getElementById(DOM_IDS.LB_CAPTION);
var lbPrev = document.getElementById(DOM_IDS.LB_PREV);
var lbNext = document.getElementById(DOM_IDS.LB_NEXT);
var lbItems = [];
var lbIndex = 0;
var lbActive = null;

function lbThumbHtml(item, i) {
    if (item.type === 'gist') {
        return '<div class="' + DOM_CLASSES.LB_THUMB + ' ' + DOM_CLASSES.LB_THUMB_GIST + '" data-index="' + i + '"><span>' + item.label + '</span></div>';
    }
    var cls = DOM_CLASSES.LB_THUMB + (item.type === 'youtube' ? ' ' + DOM_CLASSES.LB_THUMB_VIDEO : '');
    return '<div class="' + cls + '" data-index="' + i + '"><img src="' + coverSrc(item) + '" alt="' + item.label + '" loading="lazy"></div>';
}

function makeGistFrame(scriptUrl) {
    var srcdoc = '<!DOCTYPE html><html><head><meta charset="UTF-8">'
        + '<style>body{margin:0;padding:0}</style>'
        + '</head><body>'
        + '<scr' + 'ipt src="' + scriptUrl + '"></scr' + 'ipt>'
        + '</body></html>';
    var f = document.createElement('iframe');
    f.className = DOM_CLASSES.LB_GIST_FRAME;
    f.srcdoc = srcdoc;
    return f;
}

function lbShowItem(index) {
    lbIndex = index;
    var item = lbItems[index];
    var isGist = item.type === 'gist';

    if (lbActive) {
        lbActive.remove();
        lbActive = null;
    }

    lbViewer.classList.toggle(DOM_CLASSES.LB_VIEWER_GIST, isGist);
    lb.classList.toggle(DOM_CLASSES.LB_GIST, isGist);

    lbPrev.hidden = index === 0 || isGist;
    lbNext.hidden = index === lbItems.length - 1 || isGist;

    if (isGist) {
        lbViewer.appendChild(makeGistFrame(item.src));
        lbActive = lbViewer.querySelector('.' + DOM_CLASSES.LB_GIST_FRAME);
        lbCaption.textContent = '';
    }
    else if (item.type === 'youtube') {
        var iframe = document.createElement('iframe');
        iframe.className = DOM_CLASSES.LB_MEDIA_FRAME;
        iframe.src = 'https://www.youtube.com/embed/' + item.id + '?autoplay=1&rel=0';
        iframe.allow = 'autoplay; fullscreen; encrypted-media; picture-in-picture';
        iframe.allowFullscreen = true;
        lbViewer.appendChild(iframe);
        lbActive = iframe;
        lbCaption.textContent = item.caption || item.label || '';
    }
    else {
        var img = document.createElement('img');
        img.src = item.src;
        img.alt = item.label;
        lbViewer.appendChild(img);
        lbActive = img;
        lbCaption.textContent = item.caption || item.label || '';
    }

    lbThumbs.querySelectorAll('.' + DOM_CLASSES.LB_THUMB).forEach(function (el, i) {
        el.classList.toggle(DOM_CLASSES.ACTIVE, i === index);
    });

    var at = lbThumbs.querySelector('.' + DOM_CLASSES.LB_THUMB + '.' + DOM_CLASSES.ACTIVE);
    if (at) {
        at.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }

    lbCounter.textContent = (index + 1) + ' / ' + lbItems.length;
}

function lbOpen(projectId, startIndex) {
    var project = PROJECTS.find(function (p) { return p.id === projectId; });
    if (!project) {
        return;
    }
    lbItems = buildItemList(project);
    if (!lbItems.length) {
        return;
    }
    lbTitle.textContent = project.title;
    lbThumbs.innerHTML = lbItems.map(lbThumbHtml).join('');
    lb.classList.add(DOM_CLASSES.LB_OPEN);
    document.body.style.overflow = 'hidden';
    lbShowItem(startIndex || 0);
}

function lbClose() {
    lb.classList.remove(DOM_CLASSES.LB_OPEN);
    lb.classList.remove(DOM_CLASSES.LB_GIST);
    document.body.style.overflow = '';
    if (lbActive) {
        lbActive.remove();
        lbActive = null;
    }
    lbViewer.classList.remove(DOM_CLASSES.LB_VIEWER_GIST);
    lbItems = [];
    lbIndex = 0;
}

document.getElementById(DOM_IDS.LB_CLOSE).addEventListener('click', lbClose);

lb.addEventListener('click', function (e) {
    if (e.target === lb) {
        lbClose();
    }
});

lbPrev.addEventListener('click', function () {
    if (lbIndex > 0) {
        lbShowItem(lbIndex - 1);
    }
});

lbNext.addEventListener('click', function () {
    if (lbIndex < lbItems.length - 1) {
        lbShowItem(lbIndex + 1);
    }
});

lbThumbs.addEventListener('click', function (e) {
    var t = e.target.closest('.' + DOM_CLASSES.LB_THUMB);
    if (t) {
        lbShowItem(parseInt(t.dataset.index, 10));
    }
});

document.getElementById(DOM_IDS.PROJECTS_CONTAINER).addEventListener('click', function (e) {
    var cover = e.target.closest(DOM_CLASSES.PROJECT_COVER_DATA);
    if (cover) {
        lbOpen(cover.dataset.project, 0);
    }
});

document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains(DOM_CLASSES.LB_OPEN)) {
        return;
    }
    if (e.key === 'Escape') {
        lbClose();
    }
    var cur = lbItems[lbIndex];
    if (cur && cur.type === 'gist') {
        return;
    }
    if (e.key === 'ArrowLeft' && lbIndex > 0) {
        lbShowItem(lbIndex - 1);
    }
    if (e.key === 'ArrowRight' && lbIndex < lbItems.length - 1) {
        lbShowItem(lbIndex + 1);
    }
});

(function () {
    var canvas = document.getElementById(DOM_IDS.STARS_CANVAS);
    var ctx = canvas.getContext('2d');
    var stars = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function seed() {
        stars = Array.from({ length: 200 }, function () {
            return {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 1.2 + 0.2,
                base: Math.random(),
                speed: Math.random() * 0.0003 + 0.0001,
                phase: Math.random() * Math.PI * 2
            };
        });
    }

    function draw(t) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < stars.length; i++) {
            var s = stars[i];
            var a = s.base * (0.4 + 0.6 * Math.sin(t * s.speed * 1000 + s.phase));
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(180,210,255,' + a + ')';
            ctx.fill();
        }
        requestAnimationFrame(draw);
    }

    resize();
    seed();
    requestAnimationFrame(draw);
    window.addEventListener('resize', function () { resize(); seed(); });
}());

(function () {
    var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
            if (e.isIntersecting) {
                e.target.classList.add(DOM_CLASSES.VISIBLE);
            }
        });
    }, { threshold: 0.1 });

    setTimeout(function () {
        document.querySelectorAll('.' + DOM_CLASSES.FADE_IN).forEach(function (el)
        {
            obs.observe(el);
        });
    }, 50);
}());

(function () {
    var links = document.querySelectorAll(DOM_CLASSES.NAV_LINKS);
    window.addEventListener('scroll', function () {
        var cur = '';
        document.querySelectorAll(DOM_CLASSES.SECTION_ID).forEach(function (s) {
            if (window.scrollY >= s.offsetTop - 120) {
                cur = s.id;
            }
        });
        links.forEach(function (a) {
            a.classList.toggle(DOM_CLASSES.ACTIVE, a.getAttribute('href') === '#' + cur);
        });
    }, { passive: true });
}());
