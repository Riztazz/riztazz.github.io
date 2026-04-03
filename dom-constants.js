
var PROJECTS = [
    {
        id: 'orbital-drift',
        category: 'Single-Player Space Game',
        title: 'Orbital Drift',
        subtitle: 'Unreal Engine 5 / Mover 2.0 / Team of 8',
        wip: true,
        desc: 'Space game with an advanced movement system - zero gravity, magnetic boots, dynamic gravity wells. Digital Dragons GoGlobal3 finalist.',
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
            'A bit about flutter and mobile development (the phone app is built with it)',
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
        id: 'shimmer',
        category: 'Game Server',
        title: 'Game Server (WIP)',
        subtitle: 'Native C++ / CMake / vcpkg / Clang',
        wip: true,
        desc: 'Early stages of a game server built in C++. Contains some of my code, the tools i use, and the practices i follow. Most of the code currently lives in src/shared. On hold for now, but planned for Vertex and other future projects.',
        bullets: [
            'CMake build tools with vcpkg as the package manager(manifest mode)',
            'CMake presets for different build configurations and platforms',
            'Targets Clang and C++26 standard. I\'m planning on heavily using the latest reflection features',
        ],
        stack: [
            { label: 'C++' }, { label: 'CMake' }, { label: 'vcpkg' },
            { label: 'Clang', color: 'blue' }, { label: 'Modern C++', color: 'blue' },
        ],
        repo: { url: 'https://github.com/TheShimmerGame/ShimmerWorld', label: 'ShimmerWorld on GitHub' },
        media: [],
    },
    {
        id: 'vertex',
        category: 'Multiplayer Action / MOBA Prototype',
        title: 'Vertex - WIP',
        subtitle: 'C++ / Unreal Engine 5 / Networking / Chaos Destruction',
        wip: true,
        desc: 'Early MOBA prototype focused on fast multiplayer gameplay with replicated Chaos destruction using modern UE features. Developed with couple of friends in spare time',
        bullets: [
            'Replicated Chaos destruction',
            'Gameplay systems implemented using GAS Framework',
            'Mover 2.0 for easily extendable movement and prediction',
            'Currently built using Steam UDP sockets for prototype. Moving towards dedicated server architecture after prototyping.',
        ],
        stack: [
            { label: 'C++' }, { label: 'Unreal Engine 5' }, { label: 'Mover 2.0' },
            { label: 'Chaos Destruction', color: 'blue' }, { label: 'UDP Networking', color: 'blue' },
            { label: 'Steam', color: 'orange' }, { label: 'Dedicated Server', color: 'orange' },
        ],
        media: [
            { type: 'youtube', id: 'SMkVrw1T04g', label: 'Prototype', caption: 'Vertex early multiplayer prototype' },
        ],
    },
    {
        id: 'mysql-editor',
        category: 'Developer Tool / Database',
        title: 'Database (MySQL) Editor with VCS support',
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
            { label: 'C#' },
        ],
        media: [
            { type: 'image', src: 'Launcher/Home.png', label: 'Built with Rust Tauri and React', caption: '' },
        ],
    },
    {
        id: 'other-experience',
        category: 'A little bit about',
        title: 'Where It All Started',
        subtitle: 'C++ / Lua / MySQL / Linux / Networking',
        wip: false,
        desc: 'I got into programming through TrinityCore / WoW private servers, and it taught me many aspects of programming and game development.',
        bullets: [
            'How MMORPGs work under the hood and how game servers are structured',
            'Multiplayer networking, packets and TCP / UDP protocols',
            'How to write performant C++ code where it matters',
            'Different SQL database designs, structures and how to cleanly interact with them from code',
            'Many different scripting systems (LUA, SQL based or C++ based)',
            'A lot about threading, bottlenecks under high load, and hosting',
            'A INVALUABLE experience with many debugging tools and profilers (ASan, TSan, Jemalloc(it does have debugging tools!) and many more',
            'A bit about reverse engineering and ton how players exploit games and how to prevent it',
        ],
        stack: [
            { label: 'C++' }, { label: 'Lua' }, { label: 'MySQL' },
            { label: 'Linux', color: 'blue' }, { label: 'Networking', color: 'blue' },
            { label: 'Threading', color: 'blue' },
        ],
        media: [
            { type: 'image', src: 'Misc/book.png', label: 'Misc', caption: '' },
        ],
    },
    {
        id: 'this-website',
        category: 'Portfolio',
        title: 'This very simple website',
        subtitle: 'HTML / CSS / JavaScript',
        wip: false,
        desc: 'that you\'re looking at right now was built by me from scratch. You can view the source code on github. It\'s a super simple, minimalistic, frameworkless page, but it was a fun little project to build and I\'m happy with how it turned out :)',
        bullets: [],
        stack: [
            { label: 'HTML' }, { label: 'CSS' }, { label: 'JavaScript' },
        ],
        repo: { url: 'https://github.com/Riztazz/riztazz.github.io', label: 'Website on GitHub' },
        media: [],
    },
];

// BEM Css naming convention applies

var CHIP_CLASS = {
    green: 'chip chip--green',
    blue: 'chip chip--blue',
    red: 'chip chip--red',
    orange: 'chip chip--orange'
};

var DOM_IDS = {
    STARS_CANVAS: 'stars-canvas',
    LIGHTBOX: 'lightbox',
    LB_VIEWER: 'lb-viewer',
    LB_THUMBS: 'lb-thumbs',
    LB_TITLE: 'lb-title',
    LB_COUNTER: 'lb-counter',
    LB_CAPTION: 'lb-caption',
    LB_PREV: 'lb-prev',
    LB_NEXT: 'lb-next',
    LB_CLOSE: 'lb-close',
    PROJECTS_CONTAINER: 'projects-container'
};

var DOM_CLASSES = {
    FADE_IN: 'fade-in',
    VISIBLE: 'visible',
    ACTIVE: 'active',
    NAV_LINKS: '.nav-links a',
    SECTION_ID: 'section[id]',
    PROJECT_COVER_DATA: '.project-cover[data-project]',
    LB_THUMB: 'lightbox__thumb',
    LB_THUMB_VIDEO: 'lightbox--thumb--video',
    LB_THUMB_GIST: 'lightbox--thumb--gist',
    LB_VIEWER_GIST: 'lightbox--viewer--gist',
    LB_GIST: 'lightbox-gist',
    LB_GIST_FRAME: 'lb-gist-frame',
    LB_MEDIA_FRAME: 'lb-media-frame',
    LB_OPEN: 'open',
    PROJECT_CARD: 'project-card',
    PROJECT_CARD_REVERSE: 'project-card--reverse',
    WIP_BADGE: 'wip-badge',
    PROJECT_COVER: 'project-cover',
    PROJECT_COVER_IMG: 'project-cover__img',
    PROJECT_COVER_OVERLAY: 'project-cover__overlay',
    PROJECT_COVER_PLAY: 'project-cover__play',
    PROJECT_COVER_LABEL: 'project-cover__label',
    PROJECT_COVER_COUNT: 'project-cover__count',
    PROJECT_COVER_EMPTY: 'project-cover--empty',
    PROJECT_INFO: 'project-info',
    PROJECT_CATEGORY: 'project-category',
    PROJECT_TITLE: 'project-title',
    PROJECT_SUBTITLE: 'project-subtitle',
    PROJECT_DESC: 'project-desc',
    PROJECT_BULLETS: 'project-bullets',
    PROJECT_STACK: 'project-stack',
    PROJECT_COVER_EMPTY: 'project-cover--empty',
    PROJECT_COVER_REPO: 'project-cover--repo',
};
