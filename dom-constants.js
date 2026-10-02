
var PROJECTS = [
    {
        id: 'market-game',
        group: 'game',
        status: 'wip',
        category: 'Clicker / Trading and Hacking',
        title: 'Market Game',
        subtitle: 'Gameplay, systems, UI and effects / Only programmer',
        desc: "A clicker that turns the internet into a small universe. Players explore a net sphere, mine, trade and build their computer. I am the only programmer, responsible for the gameplay, game systems, tools and UI.",
        paragraphs: [
            "The market moves because simulated traders buy and sell. Players can also pick up computer parts and swap them on a workbench. I built these systems and the desktop UI that brings them together.",
            "I created the black holes, lightning and other effects using Niagara, HLSL and C++. I keep clear performance limits, use scripts to check each layer, and profile often. I also build tools that let designers adjust the game without changing code."
        ],
        stack: [
            { label: 'C++20' }, { label: 'Unreal Engine 5' }, { label: 'Gameplay', color: 'blue' },
            { label: 'UI', color: 'blue' }, { label: 'Niagara' }, { label: 'HLSL' },
            { label: 'Designer Tools', color: 'green' }
        ],
        media: [
            { type: 'video', src: 'MarketGame/market-game-demo.mp4', poster: 'MarketGame/black-hole.webp', label: 'Gameplay and effects', caption: 'A short look at the net sphere, lightning and black hole effects. I built the gameplay, systems, UI and effects shown here.' },
            { type: 'image', src: 'MarketGame/black-hole.webp', label: 'Black hole', caption: 'The black hole effect I created with Niagara, HLSL and C++.' },
            { type: 'image', src: 'MarketGame/net-sphere.webp', label: 'Net sphere', caption: "The internet shown as a small universe, viewed from the player's room." },
            { type: 'image', src: 'MarketGame/desktop-ui.webp', label: 'Game UI', caption: 'Inventory, trading and item processing in the desktop UI I built.' },
            { type: 'image', src: 'MarketGame/market.webp', label: 'Trading', caption: 'Prices change as simulated traders buy and sell.' },
            { type: 'image', src: 'MarketGame/interaction.webp', label: 'Picking up parts', caption: 'Players can pick up computer parts and use them at the workbench.' },
            { type: 'image', src: 'MarketGame/gpu_parts_changing.webp', label: 'Building a computer', caption: 'Swapping parts changes what the computer can do.' },
            { type: 'image', src: 'MarketGame/mining.webp', label: 'Mining', caption: 'The mining screen, where players manage heat and the risk of a breach.' }
        ],
    },
    {
        id: 'orbital-drift',
        group: 'game',
        category: 'Space Game / Team of 8',
        title: 'Orbital Drift',
        subtitle: 'Gameplay, movement, UI and tools / C++ and Unreal Engine 5',
        status: 'wip',
        tags: [ 'GOGLOBAL3 FINALIST' ],
        desc: "A space game made by a team of 8. I built the gameplay prototype with zero-gravity movement, magnetic boots and gravity wells. That prototype helped us become a finalist in the Digital Dragons GoGlobal3 Accelerator.",
        paragraphs: [
            "I built most of the game systems, including interactions, movement, UI, tools and visual effects. The player and orbiting objects use Mover. I fixed their update order so the player moves smoothly with the ship, even when universe time speeds up.",
            "I also built a custom renderer for the navigation terminal to keep its screen sharp, with control over when it is drawn and how often it updates. The orbital maths and art assets are the work of other team members."
        ],
        stack: [
            { label: 'C++' }, { label: 'Unreal Engine 5' }, { label: 'Mover 2.0' },
            { label: 'Gameplay', color: 'blue' }, { label: 'UI', color: 'blue' },
            { label: 'Designer Tools', color: 'green' }
        ],
        media: [
            { type: 'video', src: 'OD/orbital-drift-demo.mp4', poster: 'OD/navigation.webp', label: 'Movement and terminal demo', caption: 'Terminal interactions and movement on an orbiting ship. The captions explain my work on the UI, rendering and movement.' },
            { type: 'image', src: 'OD/navigation.webp', label: 'Navigation terminal', caption: 'The navigation screen uses my custom widget renderer. I built the UI; another team member built the orbital maths.' },
            { type: 'image', src: 'OD/moving-ship.webp', label: 'Moving with the ship', caption: 'The player stays with the moving ship as universe time speeds up. Both the player and orbiting objects use Mover.' },
            { type: 'image', src: 'OD/UnderstandableAbstractions.png', label: 'Designer tools', caption: 'Tools that let designers set up game behaviour in the editor.' }
        ],
        gist: {
            header: { url: 'https://gist.github.com/Riztazz/5c7236a445078d211a31f24d23ce2f30.js', label: 'Code sample: header' },
            implementation: { url: 'https://gist.github.com/Riztazz/c020d60a77f0906c079bf4756be6caa4.js', label: 'Code sample: implementation' }
        },
    },
    {
        id: 'smart-tables',
        group: 'tool',
        category: 'Unreal Engine Plugin / UMG',
        title: 'Smart Tables',
        subtitle: 'C++ / Unreal Engine 5 / Slate / UMG',
        tags: [ 'PLUGIN' ],
        repo: { url: 'https://github.com/Riztazz/SmartTables', label: 'Smart Tables on GitHub' },
        desc: 'A table widget for UMG. Columns are declared once, rows virtualise past a million, and it is set up in the Details panel without writing C++. Unreal Engine plugin, built solo.',
        bullets: [
            'A million rows or more, virtualised, sorted off the game thread',
            'Columns declared in one place, bound by name through reflection',
            'Natural sort, two levels, and a filter that reads every column',
            'Cells are Widget Blueprints, pooled and recycled',
            'Every gesture also exposed as a Blueprint node',
            'Column layout persists between sessions, skinned from one style asset',
        ],
        stack: [
            { label: 'C++' }, { label: 'Unreal Engine 5' }, { label: 'Slate' },
            { label: 'UMG', color: 'blue' }, { label: 'Reflection', color: 'blue' },
        ],
        media: [
            { type: 'image', src: 'assets/cover.png', label: 'Smart Tables', caption: 'Efficient tables for UMG that sort, filter, select and edit' },
            { type: 'image', src: 'assets/sort-filter.png', label: 'Sort and filter', caption: 'Two sort levels and a filter that reads every column' },
            { type: 'image', src: 'assets/columns.png', label: 'Columns', caption: 'Resize, reorder and hide columns from the header' },
            { type: 'image', src: 'assets/cells.png', label: 'Cells', caption: 'Any widget in a cell, editing the row it draws' },
            { type: 'image', src: 'assets/styles.png', label: 'Styles', caption: 'One table in four style assets' },
        ],
    },
    {
        id: 'almation-studio',
        group: 'tool',
        category: 'Developer Tool / Motion Capture',
        title: 'Almation Studio',
        subtitle: 'C++ / ImGui / Live Link UE5',
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
        id: 'io-guard',
        group: 'tool',
        category: 'Claude Code Plugin / Developer Tool',
        title: 'io-guard',
        subtitle: 'Python / Claude Code / MCP / Hooks',
        tags: [ 'PLUGIN' ],
        repo: { url: 'https://github.com/Riztazz/claude-io-guard', label: 'io-guard on GitHub' },
        desc: 'A free plugin for Claude Code. AI agents keep breaking files in small ways, mostly on Windows: the wrong line endings, a lost backslash, tabs mixed with spaces. I kept fixing the same mistakes by hand in my own projects, so I wrote a tool that does it for me. It looks at every call the agent makes, fixes what it can, and tells the agent what to do about the rest.',
        bullets: [
            'Looks at every file and shell call, before it runs and after',
            'Keeps the line endings and the indent a file already has',
            'Stops a shell command from writing over a file git tracks, and says which tool to use',
            'Moves a long script into a file, so Windows does not cut it or eat its backslashes',
            'Every error says what went wrong and gives the call that fixes it',
            'Plain Python with nothing to install, and it works on Windows and macOS',
            'Over 1,100 tests, and each rule is tried on 60,000 real commands first',
            'A settings page in the browser, with numbers on what it fixed',
        ],
        stack: [
            { label: 'Python' }, { label: 'Claude Code' },
            { label: 'MCP', color: 'blue' }, { label: 'Hooks', color: 'blue' }, { label: 'Git' },
        ],
        media: [
            { type: 'image', src: 'io-guard/fixed.svg', label: 'A fix', caption: 'The same script with and without io-guard' },
            { type: 'image', src: 'io-guard/blocked.svg', label: 'A block', caption: 'The agent is told why, and what to use' },
            { type: 'image', src: 'io-guard/architecture.svg', label: 'How it works', caption: 'Every call goes through the checks before it reaches a file' },
            { type: 'image', src: 'io-guard/settings.png', label: 'Settings', caption: 'Each check can be turned on or off' },
        ],
    },
    {
        id: 'mysql-editor',
        group: 'tool',
        category: 'Developer Tool / Database',
        title: 'Database (MySQL) Editor with VCS support',
        subtitle: 'C++ / ImGui / MySQL',
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
        id: 'vertex',
        hidden: true,
        group: 'game',
        category: 'Multiplayer Action / MOBA Prototype',
        title: 'Vertex',
        subtitle: 'C++ / Unreal Engine 5 / Networking / Chaos Destruction',
        status: 'wip',
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
        id: 'game-launcher',
        group: 'tool',
        category: 'Desktop Application / Tools',
        title: 'Game Launcher',
        subtitle: 'Rust / TypeScript / Tauri',
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
        group: 'game',
        category: 'Live MMORPG / Gameplay Programming',
        title: 'Battlegrounds, Bosses and Behaviours',
        subtitle: 'C++ / Lua / MySQL / Linux / Networking',
        desc: 'Years of gameplay programming on a live MMORPG, with the work in front of real players every day. This is where I learned state machines, encounter design, and what a game actually does under load - and where most of what I reach for now came from.',
        bullets: [
            'Battlegrounds end to end: objectives, scoring, queues and team logic',
            'Boss encounters as state machines - phases, timers, adds, transitions',
            'NPC behaviour and AI scripting, plus navigation and movement work',
            'Custom gameplay events, written and run live for players',
            'World content: quests, spawns, and the data driving them',
            'Protocol layers and the server systems holding it together',
            'Hunting use-after-free and data races with ASan, TSan and jemalloc',
            'Reverse engineering, and how players exploit a live game',
        ],
        stack: [
            { label: 'C++' }, { label: 'Lua' }, { label: 'Gameplay Scripting' },
            { label: 'State Machines', color: 'blue' }, { label: 'MySQL', color: 'blue' },
            { label: 'Networking', color: 'blue' }, { label: 'Linux' },
        ],
        media: [
            { type: 'image', src: 'Misc/book.png', label: 'Misc', caption: '' },
        ],
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
    COLUMN_GAMES: 'column-games',
    COLUMN_TOOLS: 'column-tools'
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
    TILE: 'tile',
    TILE_HEAD: 'tile__head',
    TILE_THUMB: 'tile__thumb',
    TILE_THUMB_REPO: 'tile__thumb--repo',
    TILE_TITLE: 'tile__title',
    TILE_SUB: 'tile__sub',
    TILE_BODY: 'tile__body',
    PROJECT_CARD: 'project-card',
    PROJECT_CARD_REVERSE: 'project-card--reverse',
    WIP_BADGE: 'wip-badge',
    WIP_BADGE_HOLD: 'wip-badge--hold',
    TILE_TAG: 'tile__tag',
    TILE_REPO: 'tile__repo',
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

var SNAKE_HL = {
    delayMs: 500,
    snakingMs: 2000,
    crossingMs: 600,
    poppinMs: 100,
    holdMs: 4500,
    words: [
        { id: 'hl-gameplay' },
        { id: 'hl-servers' },
        { id: 'hl-protocols' },
        { id: 'hl-devtools' },
    ],
};
