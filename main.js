
var PROJECTS = [
    {
        id: 'orbital-drift',
        category: 'Single-Player Space Game',
        title: 'Orbital Drift',
        subtitle: 'Unreal Engine 5 / Mover 2.0 / Team of 8',
        wip: true,
        desc: 'Space game with an advanced movement system -- zero gravity, magnetic boots, dynamic gravity wells. Digital Dragons GoGlobal3 finalist.',
        bullets: [
            'Custom ZeroG and MagBoots movement on Mover 2.0',
            'Dynamic gravity wells via Custom Gravity well system',
            'Helmet visor curvature shader (Brown-Conrady distortion)',
            'MVVM UI, async save system, data-driven gameplay',
            'Based movement (dynamic transprots) + resolving UE tick order issues',
            'Digital Dragons Finalist!',
        ],
        stack: [
            { label: 'C++' }, { label: 'Unreal Engine 5' }, { label: 'Mover 2.0' },
            { label: 'Gameplay Tags', color: 'blue' }, { label: 'MVVM', color: 'blue' },
        ],
        media: [
            { type: 'youtube', id: '1aQFQzFnGWk', label: 'Gameplay', caption: 'Orbital Drift Floating' },
            { type: 'image', src: 'OD/UnderstandableAbstractions.png', label: 'Abstractions', caption: 'Designer-ready abstractions, automatically discovered' },
            { type: 'youtube', id: 'lJbMBvuwJXM', label: 'Trailer', caption: 'Game Teaser' },
        ],
        gist: {
            header: { url: 'https://gist.github.com/Riztazz/5c7236a445078d211a31f24d23ce2f30.js', label: 'Some code by me(header)' },
            implementation: { url: 'https://gist.github.com/Riztazz/c020d60a77f0906c079bf4756be6caa4.js', label: 'and implementation' },
        },
    },
    {
        id: 'mysql-editor',
        category: 'Developer Tool / Database',
        title: 'MySQL Version Control Editor',
        subtitle: 'C++ / ImGui / MySQL',
        wip: false,
        desc: 'Reflection based MySQL Database editor for a game project. Includes built-in version control for data, making it easier to track changes and collaborate across a team.',
        bullets: [
            'Integrated version control specifically for SQL databases',
            'Built with C++ and ImGui for a lightweight, performant UI',
            'Provides direct MySQL connection for real-time visual editing',
        ],
        stack: [
            { label: 'C++' }, { label: 'ImGui' },
            { label: 'MySQL', color: 'blue' }, { label: 'Reflection' }, { label: 'Version Control', color: 'orange' }
        ],
        media: [
            { type: 'youtube', id: 'UWprXahu9HY', label: 'At work', caption: 'The editor in action' },
        ]
    },
    {
        id: 'almation-studio',
        category: 'Developer Tool / Motion Capture',
        title: 'Almation Studio',
        subtitle: 'C++ / ImGui / Live Link UE5',
        wip: false,
        desc: "Motion capture engine from a phone and webcams. Real-time processing, UE5 integration via Live Link. I wrote most of the UI system, camera systems, and the processing pipeline.",
        bullets: [
            'Real-time motion capture from phone and webcam',
            'Full UI architecture in ImGui',
            'Camera systems: calibration, tracking, synchronization',
            'UE5 integration via Live Link Protocol',
        ],
        stack: [
            { label: 'C++' }, { label: 'ImGui' },
            { label: 'Live Link', color: 'blue' }, { label: 'UE5', color: 'blue' }, { label: 'OpenCV' },
        ],
        media: [
            { type: 'youtube', id: '4ksSJwS8dG4', label: 'Project demo', caption: '' },
            { type: 'image', src: 'AImation/NodeGraph.png', label: 'UI', caption: 'Node graph post-processing created in ImGui' },
            { type: 'youtube', id: 'LnCjvmgwyRE', label: 'Post Processing', caption: 'Entire application at runtime' },
        ],
    },
    {
        id: 'game-launcher',
        category: 'Desktop Application / Tools',
        title: 'Game Launcher',
        subtitle: 'Rust / TypeScript / Tauri',
        wip: false,
        desc: 'Game launcher built from scratch, full support for the installer, updates, and content streaming. Backend API (C#) for multiple game servers.',
        bullets: [
            'Built from scratch in Rust + Tauri + React / TypeScript',
            'Game installer, auto-updates, content streaming',
            'Backend API in C# - auth and data management',
            'MySQL editor dev tool with SQL versioning'
        ],
        stack: [
            { label: 'Rust' }, { label: 'TypeScript' },
            { label: 'Tauri', color: 'blue' }, { label: 'React', color: 'blue' },
            { label: 'C#' }, { label: 'MySQL' },
        ],
        media: [
            { type: 'image', src: 'Launcher/Home.png', label: 'Built with Rust Tauri and React', caption: '' },
        ],
    },
];

var CHIP_CLASS = { green: 'chip chip--green', blue: 'chip chip--blue', red: 'chip chip--red', orange: 'chip chip--orange' };

function chipClass(c) { return CHIP_CLASS[c] || CHIP_CLASS.green; }
function ytThumb(id) { return 'https://img.youtube.com/vi/' + id + '/hqdefault.jpg'; }
function coverSrc(item) { return item.type === 'youtube' ? ytThumb(item.id) : item.src; }

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

function buildCard(project, index) {
    var items = buildItemList(project);
    var first = items[0];
    var count = items.length;
    var reverse = index % 2 === 1 ? ' project-card--reverse' : '';
    var wip = project.wip ? '<div class="wip-badge">IN DEVELOPMENT</div>' : '';
    var badge = count > 1 ? '<div class="project-cover__count">' + count + ' MEDIA</div>' : '';
    var imgSrc = first && first.type !== 'gist' ? coverSrc(first) : null;
    var lbl = count > 1
        ? 'VIEW GALLERY'
        : (first && first.type === 'youtube'
            ? 'PLAY VIDEO'
            : (first && first.type === 'gist' ? 'READ MORE' : 'VIEW IMAGE'));

    var cover = first
        ? '<div class="project-cover" data-project="' + project.id + '">'
        + (imgSrc ? '<img class="project-cover__img" src="' + imgSrc + '" alt="' + project.title + '" loading="lazy">' : '')
        + '<div class="project-cover__overlay">'
        + '<div class="project-cover__play"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg></div>'
        + '<div class="project-cover__label">' + lbl + '</div>'
        + '</div>' + badge + '</div>'
        : '<div class="project-cover project-cover--empty">NO MEDIA</div>';

    var stack = project.stack.map(function (s) { return '<span class="' + chipClass(s.color) + '">' + s.label + '</span>'; }).join('');
    var bullets = project.bullets.map(function (b) { return '<li>' + b + '</li>'; }).join('');

    return '<div class="project-card' + reverse + ' fade-in" id="project-' + project.id + '">'
        + cover
        + '<div class="project-info">'
        + wip
        + '<div class="project-category">' + project.category + '</div>'
        + '<div class="project-title">' + project.title + '</div>'
        + '<div class="project-subtitle">' + project.subtitle + '</div>'
        + '<p class="project-desc">' + project.desc + '</p>'
        + '<ul class="project-bullets">' + bullets + '</ul>'
        + '<div class="project-stack">' + stack + '</div>'
        + '</div></div>';
}

function renderProjects() {
    var el = document.getElementById('projects-container');
    if (!el) {
        return;
    }
    el.innerHTML = PROJECTS.map(function (p, i) { return buildCard(p, i); }).join('');
}

renderProjects();

var lb = document.getElementById('lightbox');
var lbViewer = document.getElementById('lb-viewer');
var lbThumbs = document.getElementById('lb-thumbs');
var lbTitle = document.getElementById('lb-title');
var lbCounter = document.getElementById('lb-counter');
var lbCaption = document.getElementById('lb-caption');
var lbPrev = document.getElementById('lb-prev');
var lbNext = document.getElementById('lb-next');
var lbItems = [];
var lbIndex = 0;
var lbActive = null;

function lbThumbHtml(item, i) {
    if (item.type === 'gist') {
        return '<div class="lightbox__thumb lightbox__thumb--gist" data-index="' + i + '"><span>' + item.label + '</span></div>';
    }
    var cls = 'lightbox__thumb' + (item.type === 'youtube' ? ' lightbox__thumb--video' : '');
    return '<div class="' + cls + '" data-index="' + i + '"><img src="' + coverSrc(item) + '" alt="' + item.label + '" loading="lazy"></div>';
}

function makeGistFrame(scriptUrl) {
    var srcdoc = '<!DOCTYPE html><html><head><meta charset="UTF-8">'
        + '<style>body{margin:0;padding:0}</style>'
        + '</head><body>'
        + '<scr' + 'ipt src="' + scriptUrl + '"></scr' + 'ipt>'
        + '</body></html>';
    var f = document.createElement('iframe');
    f.className = 'lb-gist-frame';
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

    lbViewer.classList.toggle('lightbox__viewer--gist', isGist);
    lb.classList.toggle('lightbox--gist', isGist);

    lbPrev.hidden = index === 0 || isGist;
    lbNext.hidden = index === lbItems.length - 1 || isGist;

    if (isGist) {
        lbViewer.appendChild(makeGistFrame(item.src));
        lbActive = lbViewer.querySelector('.lb-gist-frame');
        lbCaption.textContent = '';
    }
    else if (item.type === 'youtube') {
        var iframe = document.createElement('iframe');
        iframe.className = 'lb-media-frame';
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

    lbThumbs.querySelectorAll('.lightbox__thumb').forEach(function (el, i) {
        el.classList.toggle('active', i === index);
    });

    var at = lbThumbs.querySelector('.lightbox__thumb.active');
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
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
    lbShowItem(startIndex || 0);
}

function lbClose() {
    lb.classList.remove('open');
    lb.classList.remove('lightbox--gist');
    document.body.style.overflow = '';
    if (lbActive) {
        lbActive.remove();
        lbActive = null;
    }
    lbViewer.classList.remove('lightbox__viewer--gist');
    lbItems = [];
    lbIndex = 0;
}

document.getElementById('lb-close').addEventListener('click', lbClose);

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
    var t = e.target.closest('.lightbox__thumb');
    if (t) {
        lbShowItem(parseInt(t.dataset.index, 10));
    }
});

document.getElementById('projects-container').addEventListener('click', function (e) {
    var cover = e.target.closest('.project-cover[data-project]');
    if (cover) {
        lbOpen(cover.dataset.project, 0);
    }
});

document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains('open')) {
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
    var canvas = document.getElementById('stars-canvas');
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
                e.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    setTimeout(function () {
        document.querySelectorAll('.fade-in').forEach(function (el) { obs.observe(el); });
    }, 50);
}());

(function () {
    var links = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', function () {
        var cur = '';
        document.querySelectorAll('section[id]').forEach(function (s) {
            if (window.scrollY >= s.offsetTop - 120) {
                cur = s.id;
            }
        });
        links.forEach(function (a) {
            a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
        });
    }, { passive: true });
}());
