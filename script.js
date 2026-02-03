// Data - Overriding covers with the 2 patterns
const PATTERNS = ["cover_pattern_1.png", "cover_pattern_2.png"];

// BOOKS_DATA is now loaded from books_data.js

// Update all books to use their matching cover by ID (1.png, 2.png, etc.)
BOOKS_DATA.forEach((book) => {
    book.cover = `${book.id}.png`;
});

const DOM = {
    world: document.getElementById('world'),
    camera: document.getElementById('camera'),
    canvas: document.getElementById('canvas'),
    lightbox: document.getElementById('lightbox'),
    lbCard: document.getElementById('lightbox-card'),
    lbBackdrop: document.getElementById('lightbox-backdrop'),
    lbClose: document.getElementById('lb-close'),
    lbTitle: document.getElementById('lb-title'),
    lbMeta: document.getElementById('lb-meta'),
    lbQuotes: document.getElementById('lb-quotes-container'),
    lbDesc: document.getElementById('lb-desc'),
    lbTags: document.getElementById('lb-tags'),
    lbCover: document.getElementById('lb-cover'),
    // Search UI (Legacy)
    searchInput: document.getElementById('search-input'),
    resetBtn: document.getElementById('reset-filter'),
    tagCloud: document.getElementById('tag-cloud'),
    tagCloudWrapper: document.getElementById('tag-cloud-wrapper'),
    // Sidebar UI (Legacy Overlay)
    navDrawerContainer: document.getElementById('nav-drawer-container'),
    sidebarPanel: document.getElementById('sidebar-panel'),
    navTrigger: document.getElementById('nav-trigger'),
    navDot: document.getElementById('nav-dot'),
    // NEW: Persistent Sidebar UI
    persistentSidebar: document.getElementById('persistent-sidebar'),
    sidebarSearchInput: document.getElementById('sidebar-search-input'),
    sidebarReset: document.getElementById('sidebar-reset'),
    sidebarTags: document.getElementById('sidebar-tags'),
    sidebarAboutLink: document.getElementById('sidebar-about-link'),
    categoryButtons: document.querySelectorAll('.category-btn'),
    // Hero Title (Legacy Ref for removal later if needed, now used in Hero Flow)
    heroTitle: document.getElementById('hero-title'),
    // Hero Flow Elements
    heroSection: document.getElementById('hero-section'),
    heroTitleContainer: document.getElementById('hero-title-container'),
    heroScrollIndicator: document.getElementById('hero-scroll-indicator'),
    // Reader Panel UI
    readerPanel: document.getElementById('reader-panel'),
    readerCover: document.getElementById('reader-cover'),
    readerTitle: document.getElementById('reader-title'),
    readerMeta: document.getElementById('reader-meta'),
    readerSpinner: document.getElementById('reader-spinner'),
    readerText: document.getElementById('reader-text'),
    readerError: document.getElementById('reader-error'),
    readerClose: document.getElementById('reader-close'),
    readerBottomSpinner: document.getElementById('reader-bottom-spinner'),
    readerScrollSentinel: document.getElementById('reader-scroll-sentinel'),
    readerContent: document.getElementById('reader-content'),
    // Reader Navigation UI
    readerNav: document.getElementById('reader-nav'),
    readerNavHeader: document.getElementById('reader-nav-header'),
    readerNavList: document.getElementById('reader-nav-list'),

    // View Toggle
    viewToggle: document.getElementById('view-toggle'),

    // Landing Page Elements (New Scroll Intro)
    landingPage: document.getElementById('landing-page'),
    landingTitle: document.getElementById('landing-title'),
    landingSubtitle: document.getElementById('landing-subtitle'),
    landingHero: document.getElementById('landing-hero'),
    landingStory: document.getElementById('landing-story'),
    enterLibrary: document.getElementById('enter-library'),

    // Hero Elements (Legacy - may be unused now)
    heroMainTitle: document.getElementById('hero-main-title'),
    heroSubtitle: document.getElementById('hero-subtitle'),

    // About Panel UI
    aboutPanel: document.getElementById('about-panel'),
    aboutClose: document.getElementById('about-close'),
    aboutLink: document.getElementById('about-link')
};

let state = {
    arrangeMode: false, // When true, user can drag books; when false, pan canvas
    activeCategory: 'all',
    activeBook: null,
    pan: { x: 0, y: 0 },
    zoom: 1.0, // Zoom level: 0.7 (70%) to 1.5 (150%), default 1.0 (100%)
    isDragging: false,
    wasDragging: false, // Track if we actually moved during drag
    dragStart: { x: 0, y: 0 },
    initialPan: { x: 0, y: 0 },
    activeNodes: new Map(), // key: index, value: DOM Element
    // Book Dragging State
    draggingBook: null, // Reference to book node being dragged
    draggingBookIndex: null, // Index of book being dragged
    bookDragStart: { x: 0, y: 0 }, // Initial book position
    clickedBook: null, // Book that was clicked (for distinguishing drag vs click)
    // Sidebar State
    sidebarOpen: false,
    // Search State
    searchMode: false,
    searchQuery: '',
    activeFilterTag: null,
    matchingIds: null, // Performance: Set of matching IDs (null = all match)
    // Reader State
    readerOpen: false,
    readerBook: null,
    selectedBookNode: null, // DOM node of selected book for isolation effect
    readerTutorialShown: false, // Track if tutorial was shown
    // Infinite Scroll State
    currentRef: null,
    nextRef: null,
    isLoadingMore: false,
    // Navigation State
    bookIndex: null, // Cached book index from Sefaria API
    // About Panel State
    aboutOpen: false,
    // Hero State
    heroShrunk: false,
    heroDismissed: false,
    // Z-Index Counter for book stacking
    topZIndex: 10, // Starts at 10, increments each time a book is picked up
    // Page-Flip Reader State
    pages: [], // Array of page content
    currentPageIndex: 0, // Current page being displayed (0-indexed)
    totalPages: 0, // Total number of pages
    rawContent: '' // Raw HTML content before pagination
};



// ===== NEW HERO FLOW =====
function showHeroSection() {
    if (!DOM.heroSection) {
        // Fallback if hero section missing
        showIntroScene();
        return;
    }

    DOM.heroSection.classList.remove('hidden');

    // Animate In elements - Scroll Up / Slide In (No Fade In)

    // Initial State (set immediately when unhidden)
    DOM.heroMainTitle.style.transform = 'translateY(100vh)';
    DOM.heroMainTitle.style.opacity = '1'; // Ensure visible so we see it slide
    DOM.heroMainTitle.style.transition = 'transform 1.5s cubic-bezier(0.16, 1, 0.3, 1)'; // Smooth easing

    // Trigger Animation
    setTimeout(() => {
        if (DOM.heroTitleContainer) {
            // Reset to natural position
            DOM.heroTitleContainer.style.transform = 'translateY(0)';
            DOM.heroTitleContainer.classList.remove('opacity-0', 'translate-y-8'); // Remove legacy classes

            // Also animate the specific title container if needed
            DOM.heroTitleContainer.style.opacity = '1';
        }
    }, 100);

    setTimeout(() => {
        if (DOM.heroScrollIndicator) {
            DOM.heroScrollIndicator.classList.remove('opacity-0');
        }

        // Add scroll listeners after delay
        setupHeroDismissListeners();
    }, 1200);
}

function setupHeroDismissListeners() {
    let triggered = false;

    const dismiss = () => {
        if (triggered) return;
        triggered = true;
        dismissHeroSection();

        // Cleanup
        window.removeEventListener('wheel', dismiss);
        window.removeEventListener('scroll', dismiss);
        window.removeEventListener('touchmove', dismiss);
        window.removeEventListener('click', dismiss);
    };

    window.addEventListener('wheel', dismiss, { passive: true });
    window.addEventListener('touchmove', dismiss, { passive: true });
    window.addEventListener('click', dismiss);
}

function dismissHeroSection() {
    if (!DOM.heroSection || state.heroDismissed) return;
    state.heroDismissed = true;

    // 1. Shrink Animation First
    if (DOM.heroTitleContainer) {
        DOM.heroTitleContainer.style.transition = 'transform 1.2s cubic-bezier(0.22, 1, 0.36, 1), opacity 1.2s ease';
        DOM.heroTitleContainer.style.transform = 'scale(0.6)'; // Shrink to 60%
        // We keep opacity 1 during shrink, or maybe slight fade if desired?
        // User said: "slowly shrinks and only then does the introduction appear"
    }

    if (DOM.heroScrollIndicator) {
        DOM.heroScrollIndicator.style.opacity = '0';
    }

    // 2. Wait for shrink to complete, THEN show Intro + Fade out Hero
    setTimeout(() => {
        // Trigger Intro Scene Logic
        showIntroScene();

        // Fade out Hero Container
        DOM.heroSection.style.transition = 'opacity 0.8s ease-out';
        DOM.heroSection.style.opacity = '0';

        // Remove from DOM
        setTimeout(() => {
            DOM.heroSection.style.display = 'none';
        }, 800);

    }, 1000); // Wait 1s (most of the shrink animation)
}


// 1. Scattering Layout Logic
const TABLE_SIZE = 2600; // Decreased from 3000 for even higher density
const SCATTER_DATA = [];

// Allowed rotations: 0, 15, -15 degrees
const ROTATIONS = [0, 15, -15];

function generateScatteredLayout() {
    // Reset
    SCATTER_DATA.length = 0;

    // Collision Config - Books 10% larger (Simulating camera zoom) -> Reduced by 15% requested by user
    const BOOK_W = 258; // 304 * 0.85
    const BOOK_H = 387; // 455 * 0.85
    // Adjusted radius - Increased further by 10% (Total ~15% spacing increase)
    const RADIUS = (Math.sqrt(BOOK_W * BOOK_W + BOOK_H * BOOK_H) / 2) * 1.15;
    const NEIGHBOR_RANGE = RADIUS * 2.5; // Range to check for rotation similarity
    const MIN_ROTATION_DIFF = 10; // Minimum degrees difference between adjacent books

    // Helper: Get a rotation that differs from neighbors
    function getUniqueRotation(x, y) {
        const neighbors = SCATTER_DATA.filter(existing => {
            const dx = existing.x - x;
            const dy = existing.y - y;
            return Math.sqrt(dx * dx + dy * dy) < NEIGHBOR_RANGE;
        });

        let rotation;
        let attempts = 0;

        do {
            rotation = (Math.random() - 0.5) * 30; // -15 to +15
            attempts++;

            // Check if this rotation is different enough from all neighbors
            const isTooSimilar = neighbors.some(neighbor =>
                Math.abs(neighbor.rotation - rotation) < MIN_ROTATION_DIFF
            );

            if (!isTooSimilar || attempts > 20) break;
        } while (true);

        return rotation;
    }

    // Use BOOKS_DATA directly (no duplicates)
    BOOKS_DATA.forEach((book, index) => {
        let placed = false;
        let attempts = 0;
        const maxAttempts = 200;

        while (!placed && attempts < maxAttempts) {
            attempts++;

            const padding = 300; // 300px visual clearance
            const x = Math.random() * (TABLE_SIZE - padding * 2) + padding;
            const y = Math.random() * (TABLE_SIZE - padding * 2) + padding;

            // Distance Check - Strict overlap limit (max 20% overlap ~ 80% distance)
            let collision = false;

            // Allow slight variance but ensure MINIMUM distance is kept high
            // 0.85 * Radius ensures centers are far enough to prevent full overlap
            const minDistThreshold = RADIUS * (0.85 + Math.random() * 0.4);

            for (const existing of SCATTER_DATA) {
                const dx = existing.x - x;
                const dy = existing.y - y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < minDistThreshold) {
                    collision = true;
                    break;
                }
            }

            if (!collision) {
                SCATTER_DATA.push({
                    x, y,
                    rotation: getUniqueRotation(x, y),
                    bookIndex: index
                });
                placed = true;
            }
        }

        // Fallback placement - Try to place with relaxed constraints, but still avoid full overlap
        // Only if absolutely necessary
        if (!placed) {
            // Try one more time with strictly minimal safe distance
            // If even that fails, we expand table implicitly or just find furthest point (too complex)
            // We'll just place it at a random point but push it slightly if colliding? 
            // Simplified: Just place it random, chances are low collision in 5000x5000

            const padding = 300;
            const fallbackX = Math.random() * (TABLE_SIZE - padding * 2) + padding;
            const fallbackY = Math.random() * (TABLE_SIZE - padding * 2) + padding;
            SCATTER_DATA.push({
                x: fallbackX,
                y: fallbackY,
                rotation: getUniqueRotation(fallbackX, fallbackY),
                bookIndex: index
            });
        }
    });
}

function generateStacksLayout() {
    SCATTER_DATA.length = 0;

    // Define Stack Centers (4 Quadrants)
    const mid = TABLE_SIZE / 2;
    // Spread them out nicely
    const spread = 800;
    const centers = {
        'thought': { x: mid - spread, y: mid - spread, label: 'מחשבה' },  // Top Left
        'prose': { x: mid + spread, y: mid - spread, label: 'פרוזה' },  // Top Right
        'poetry': { x: mid - spread, y: mid + spread, label: 'שירה' },  // Bottom Left
        'halacha': { x: mid + spread, y: mid + spread, label: 'הלכה' }   // Bottom Right
    };

    // Use BOOKS_DATA directly
    BOOKS_DATA.forEach((book, index) => {
        const cat = book.category || 'thought';
        const center = centers[cat] || centers['thought'];

        // Random placement within a tight pile (stack feel)
        const pileRadius = 250;
        const r = Math.random() * pileRadius;
        const theta = Math.random() * Math.PI * 2;

        const x = center.x + r * Math.cos(theta);
        const y = center.y + r * Math.sin(theta);

        // Random messy rotation
        const rotation = (Math.random() - 0.5) * 40;

        SCATTER_DATA.push({
            x, y,
            rotation,
            bookIndex: index
        });
    });
}

function updateLayout() {
    const totalBooks = SCATTER_DATA.length;
    const maxStagger = 0.6; // Max stagger delay in seconds

    SCATTER_DATA.forEach((data, index) => {
        const node = state.activeNodes.get(index);
        if (node) {
            // Stagger delay based on index for wave effect
            const staggerDelay = (index / totalBooks) * maxStagger;

            // Slower, smoother transition with stagger
            node.style.transition = `all 1.5s cubic-bezier(0.25, 0.1, 0.25, 1) ${staggerDelay}s`;

            // Update position
            node.style.left = `${data.x}px`;
            node.style.top = `${data.y}px`;
            node.style.transform = `rotate(${data.rotation}deg)`;

            // Update counter-rotation for hover card
            // Update counter-rotation for all children (hover info & hover quote)
            node.style.setProperty('--counter-rotation', `${-data.rotation}deg`);
        }
    });
}

function createBookNode(index) {
    const layout = SCATTER_DATA[index];
    if (!layout) return null;

    // Get the actual book data using bookIndex from layout
    const book = BOOKS_DATA[layout.bookIndex];
    if (!book) return null;

    // 1. The Container (Scene)
    const scene = document.createElement('div');
    scene.className = 'book-scene absolute cursor-pointer group';

    // Position & Rotation (Applied to Scene)
    scene.style.left = `${layout.x}px`;
    scene.style.top = `${layout.y}px`;
    scene.style.transform = `rotate(${layout.rotation}deg)`;

    // Data Attributes
    scene.dataset.index = index; // Index in SCATTER_DATA for drag tracking
    scene.dataset.globalIndex = index;
    scene.dataset.id = book.id;
    scene.dataset.category = book.category;

    // 2. The 3D Wrapper (Preserve 3D)
    const wrap = document.createElement('div');
    wrap.className = 'book-wrap';
    scene.appendChild(wrap);

    // 3. The Faces

    // FRONT (Cover)
    const front = document.createElement('div');
    front.className = 'face front'; // REMOVED shadow-lg for alpha support
    // Lazy load the cover
    front.innerHTML = `
        <img src="${book.cover}" 
             class="w-full h-full object-cover" 
             alt="${book.title}" 
             loading="lazy" 
             decoding="async">
    `;
    wrap.appendChild(front);

    // BACK (Generic Texture or specific back)
    const back = document.createElement('div');
    back.className = 'face back';
    back.innerHTML = `
        <img src="backs(${book.id}).jpg" 
             class="w-full h-full object-cover rounded-sm" 
             loading="lazy">
    `;
    wrap.appendChild(back);

    // SPINE (Left side in LTR, Right side in RTL - we configured CSS for RTL)
    const spine = document.createElement('div');
    spine.className = `face spine ${book.color} flex items-center justify-center overflow-hidden border-x border-white/10`;
    // Rotated Title on Spine
    spine.innerHTML = `
        <div class="transform rotate-90 whitespace-nowrap text-xs font-bold tracking-widest text-white/90 w-[300px] text-center">
            ${book.title}
        </div>
    `;
    wrap.appendChild(spine);

    // PAGES (Right side, top, bottom)
    const pages = document.createElement('div');
    pages.className = 'face pages bg-[url("pages.png")] bg-repeat-y bg-contain';
    wrap.appendChild(pages);

    const top = document.createElement('div');
    top.className = 'face top bg-[url("pages.png")] bg-repeat-x bg-contain';
    wrap.appendChild(top);

    const bottom = document.createElement('div');
    bottom.className = 'face bottom bg-[url("pages.png")] bg-repeat-x bg-contain';
    wrap.appendChild(bottom);

    // Global Hover Quote Logic - REMOVED (using bookmark tabs instead)

    // Add normal hover info (Category/Title overlay) if needed?
    // The original code had a 'book-hover-info' div. 
    // If we want to KEEP the bottom info card (Title/Category), we should keep it.
    // The USER complained about the TOP quote bubble being crooked.
    // The previous code had `hoverInfo` which was the BOTTOM card.
    // Wait, let's look at style.css again. 
    // .book-hover- info is the bottom card? No.
    // .book-hover-quote was the top bubble.
    // .book-hover-info was likely the bottom card.
    // The prompt asked to fix the top bubble.
    // So I should KEEP the bottom card logic but REMOVE the old top bubble creation if it was there.
    // Reviewing previous view_file: I don't see .book-hover-quote creation in createBookNode yet. 
    // It was in initBookHoverQuote.
    // But I DO see `book-hover-info` creation here.
    // So I should KEEP `book-hover-info` as it handles the bottom card.
    // And ADD the listeners for the TOP GLOBAL BUBBLE.

    // So I will just INSERT the listeners and optionally remove any old bubble code if present.
    // The old bubble code was in `initBookHoverQuote` which I am deprecating.
    // So here I just ADD the listeners.

    const hoverInfo = document.createElement('div');
    hoverInfo.className = 'book-hover-info';

    // Category label mapping
    const categoryLabels = {
        'thought': 'מחשבה',
        'prose': 'פרוזה',
        'poetry': 'שירה',
        'halacha': 'הלכה'
    };

    // Set counter-rotation to keep card straight
    hoverInfo.style.setProperty('--counter-rotation', `${-layout.rotation}deg`);

    hoverInfo.innerHTML = `
        <div class="book-title">${book.title}</div>
        <div class="book-author">${book.author || ''}</div>
        <div class="book-meta">
            <span>${book.year || ''}</span>
            ${book.year && book.category ? '•' : ''}
            <span>${categoryLabels[book.category] || 'כללי'}</span>
        </div>
    `;
    scene.appendChild(hoverInfo);


    scene.addEventListener('click', (e) => {
        // Prevent opening if we just finished dragging
        if (state.wasDragging) {
            e.stopPropagation();
            return;
        }
        // Don't open reader panel in arrange mode
        if (state.arrangeMode) {
            e.stopPropagation();
            return;
        }
        // Use Reader Panel for all books - pass scene for isolation effect
        openReaderPanel(book, scene);
    });

    // Apply current filter state
    if (state.matchingIds && !state.matchingIds.has(book.id)) {
        scene.classList.add('dimmed');
    }

    return scene;
}

function renderAllBooks() {
    // Render everything once. The table is finite.
    // Optimization: If performance is bad, we can add spatial hashing/culling later.
    // For ~60 items (20 books x 3 duplicates), DOM handles it fine.

    DOM.world.innerHTML = '';
    state.activeNodes.clear();

    // Iterate over SCATTER_DATA to render all books including duplicates
    SCATTER_DATA.forEach((_, index) => {
        const node = createBookNode(index);
        if (node) {
            DOM.world.appendChild(node);
            state.activeNodes.set(index, node);
        }
    });
}

function initWorld() {
    generateScatteredLayout();

    // Set Center View initially
    const startX = (TABLE_SIZE - window.innerWidth) / 2;
    const startY = (TABLE_SIZE - window.innerHeight) / 2;
    state.pan = { x: startX, y: startY };

    updateCamera();
    renderAllBooks();
}

// 2. Drag Logic (Canvas Pan + Book Arrangement)
const DRAG_THRESHOLD = 5; // pixels

DOM.canvas.addEventListener('mousedown', (e) => {
    // Check if we're in arrange mode and clicked on a book
    const bookScene = e.target.closest('.book-scene');

    if (state.arrangeMode && bookScene) {
        // Start Book Drag
        e.preventDefault();
        e.stopPropagation();

        state.draggingBook = bookScene;
        state.draggingBookIndex = parseInt(bookScene.dataset.index);
        state.bookDragStart = {
            x: e.clientX,
            y: e.clientY,
            bookX: parseFloat(bookScene.style.left) || 0,
            bookY: parseFloat(bookScene.style.top) || 0
        };

        // Bring to front and scale up (picking up effect)
        bookScene.style.zIndex = '100';
        bookScene.style.transition = 'transform 0.3s ease-out'; // Smooth scale only
        DOM.canvas.style.cursor = 'grabbing';

        // Scale up the book-wrap inside
        const bookWrap = bookScene.querySelector('.book-wrap');
        if (bookWrap) {
            bookWrap.style.transition = 'transform 0.3s ease-out, filter 0.3s ease-out';
            bookWrap.style.transform = 'translateY(-20px) scale(1.15)';
            bookWrap.style.filter = 'drop-shadow(0 30px 40px rgba(0, 0, 0, 0.4))';
        }
    } else {
        // Start Canvas Pan (in normal mode, OR in arrange mode clicking on empty space)
        state.isDragging = true;
        state.wasDragging = false;
        state.dragStart = { x: e.clientX, y: e.clientY };
        state.initialPan = { ...state.pan };
        state.clickedBook = bookScene; // Remember which book was clicked (if any)
        DOM.canvas.style.cursor = 'grabbing';
    }
});

window.addEventListener('mousemove', (e) => {
    // Book Dragging
    if (state.draggingBook) {
        const dx = e.clientX - state.bookDragStart.x;
        const dy = e.clientY - state.bookDragStart.y;

        const newX = state.bookDragStart.bookX + dx;
        const newY = state.bookDragStart.bookY + dy;

        state.draggingBook.style.left = `${newX}px`;
        state.draggingBook.style.top = `${newY}px`;

        state.wasDragging = true; // Mark as dragged to prevent click
        return;
    }

    // Canvas Panning
    if (!state.isDragging) return;

    const dx = e.clientX - state.dragStart.x;
    const dy = e.clientY - state.dragStart.y;

    // Mark as dragged if moved beyond threshold
    if (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD) {
        state.wasDragging = true;
    }

    // Invert delta because dragging world right means camera moves left
    state.pan.x = state.initialPan.x - dx;
    state.pan.y = state.initialPan.y - dy;

    // Boundaries
    const maxPanX = TABLE_SIZE - window.innerWidth;
    const maxPanY = TABLE_SIZE - window.innerHeight;

    // Clamp
    state.pan.x = Math.max(0, Math.min(state.pan.x, maxPanX));
    state.pan.y = Math.max(0, Math.min(state.pan.y, maxPanY));

    updateCamera();
});

window.addEventListener('mouseup', () => {
    // Finalize Book Drag
    if (state.draggingBook) {
        const bookNode = state.draggingBook;
        const index = state.draggingBookIndex;

        // Update SCATTER_DATA with new position
        if (SCATTER_DATA[index]) {
            SCATTER_DATA[index].x = parseFloat(bookNode.style.left);
            SCATTER_DATA[index].y = parseFloat(bookNode.style.top);
        }

        // Scale down the book-wrap (putting back down)
        const bookWrap = bookNode.querySelector('.book-wrap');
        if (bookWrap) {
            bookWrap.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.4s ease';
            bookWrap.style.transform = '';
            bookWrap.style.filter = '';
        }

        // Keep book on top (increment z-index counter)
        state.topZIndex++;
        bookNode.style.zIndex = state.topZIndex;
        bookNode.style.transition = '';

        state.draggingBook = null;
        state.draggingBookIndex = null;
        DOM.canvas.style.cursor = state.arrangeMode ? 'grab' : 'grab';
    }

    // Finalize Canvas Pan
    state.isDragging = false;
    state.clickedBook = null;
    DOM.canvas.style.cursor = 'grab';

    // Clear wasDragging flag after a delay to allow click events to check it
    setTimeout(() => {
        state.wasDragging = false;
    }, 150);
});

function updateCamera() {
    // 2D Pan
    DOM.camera.style.transform = `translate3d(${-state.pan.x}px, ${-state.pan.y}px, 0)`;
}

// 3. Lightbox Logic - New Elegant Design
function openLightbox(book) {
    state.activeBook = book;

    // Cover Image
    if (DOM.lbCover) {
        DOM.lbCover.src = book.cover;
        DOM.lbCover.alt = book.title;
    }

    // Title
    DOM.lbTitle.innerText = book.title;

    // Meta: Author | Publisher | Year
    DOM.lbMeta.innerHTML = `
        <span class="font-medium text-[#3E2723]">${book.author}</span>
        <span class="text-[#3E2723]">|</span>
        <span class="text-[#3E2723] font-medium">${book.publisher}</span>
        <span class="text-[#3E2723]">|</span>
        <span class="text-[#3E2723] font-medium">${book.year}</span>
    `;

    // Quote - Show only first quote, centered and elegant
    DOM.lbQuotes.innerHTML = '';
    if (book.quotes && book.quotes.length > 0) {
        const qEl = document.createElement('blockquote');
        qEl.className = "font-serif text-xl text-[#3E2723] text-center leading-relaxed";
        qEl.innerHTML = `"${book.quotes[0]}"`;
        DOM.lbQuotes.appendChild(qEl);
    }

    // Tags - Pill shaped buttons
    DOM.lbTags.innerHTML = '';
    if (book.tags && book.tags.length > 0) {
        book.tags.forEach(tag => {
            const pill = document.createElement('span');
            pill.className = "px-4 py-1.5 text-xs font-sans text-[#3E2723]/70 border border-[#3E2723]/20 rounded-full hover:bg-[#3E2723]/5 transition-colors";
            pill.innerText = tag;
            DOM.lbTags.appendChild(pill);
        });
    }

    DOM.lightbox.classList.remove('hidden');
    setTimeout(() => DOM.lightbox.classList.add('lightbox-open'), 10);
}

function closeLightbox() {
    state.activeBook = null;
    DOM.lightbox.classList.remove('lightbox-open');
    setTimeout(() => DOM.lightbox.classList.add('hidden'), 500);
}

DOM.lbClose.addEventListener('click', closeLightbox);
DOM.lbBackdrop.addEventListener('click', closeLightbox);

// ===== Reader Panel (WikiSource Integration) =====

/**
 * Fetch book content from WikiSource API
 * @param {string} pageTitle - The WikiSource page title
 * @returns {Promise<string|null>} - The HTML content or null if not found
 */
async function fetchBookContent(pageTitle) {
    try {
        const url = `https://he.wikisource.org/w/api.php?action=parse&format=json&origin=*&page=${encodeURIComponent(pageTitle)}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        if (data.error) {
            console.warn('WikiSource API error:', data.error.info);
            return null;
        }

        return data.parse?.text?.['*'] || null;
    } catch (error) {
        console.error('Failed to fetch WikiSource content:', error);
        return null;
    }
}

/**
 * Load book content from the Sefaria API
 * @param {string} sefariaRef - The Sefaria reference (e.g., "Genesis.1", "Orot.1")
 * @returns {Promise<{htmlContent: string, nextRef: string|null, heRef: string|null}>}
 */
async function loadBookContent(sefariaRef) {
    try {
        const url = `https://www.sefaria.org/api/texts/${encodeURIComponent(sefariaRef)}?context=0`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        // Check for API errors
        if (data.error) {
            console.warn('Sefaria API error:', data.error);
            return {
                htmlContent: '<p class="error-message">הטקסט אינו זמין כעת. נסה שוב מאוחר יותר.</p>',
                nextRef: null,
                heRef: null
            };
        }

        // Capture the next reference for infinite scroll
        const nextRef = data.next || null;
        const heRef = data.heRef || data.ref || null;

        // Language Handling: Prefer Hebrew, fallback to English
        let textContent = data.he || data.text;

        // If no content at all
        if (!textContent) {
            return {
                htmlContent: '<p class="error-message">לא נמצא תוכן לטקסט זה.</p>',
                nextRef: null,
                heRef: null
            };
        }

        // Data Normalization: Handle both Array and String responses
        let htmlContent;

        if (Array.isArray(textContent)) {
            // If array, wrap each item in <p> tags
            // Handle nested arrays (some texts have verse arrays within chapter arrays)
            const normalizeArray = (arr) => {
                return arr.map(item => {
                    if (Array.isArray(item)) {
                        return normalizeArray(item);
                    }
                    // Skip empty strings
                    if (!item || (typeof item === 'string' && item.trim() === '')) {
                        return '';
                    }
                    return `<p>${item}</p>`;
                }).join('');
            };

            htmlContent = normalizeArray(textContent);
        } else if (typeof textContent === 'string') {
            // If string, wrap in single <p> tag
            htmlContent = `<p>${textContent}</p>`;
        } else {
            return {
                htmlContent: '<p class="error-message">פורמט לא צפוי של הטקסט.</p>',
                nextRef: null,
                heRef: null
            };
        }

        // Return content with metadata
        return {
            htmlContent,
            nextRef,
            heRef
        };

    } catch (error) {
        console.error('Failed to load Sefaria content:', error);
        return {
            htmlContent: '<p class="error-message">שגיאה בטעינת הטקסט. אנא בדוק את החיבור לאינטרנט ונסה שוב.</p>',
            nextRef: null,
            heRef: null
        };
    }
}


/**
 * Fetch initial chapters (Current + Next 2) for smooth reading start
 * @param {string} startRef - The starting Sefaria reference
 * @returns {Promise<Object>} Combined content and next ref
 */
async function loadInitialChapters(startRef) {
    let combinedHtml = '';
    let currentRef = startRef;
    let finalNextRef = null;
    let loadedCount = 0;
    const TARGET_CHAPTERS = 3; // Load 3 chapters initially

    DOM.readerSpinner.classList.remove('hidden');

    try {
        while (currentRef && loadedCount < TARGET_CHAPTERS) {
            console.log(`Loading chapter ${loadedCount + 1}: ${currentRef}`);
            const result = await loadBookContent(currentRef);

            if (!result || !result.htmlContent) break;

            combinedHtml += result.htmlContent;

            // Prepare for next iteration
            currentRef = result.nextRef;
            finalNextRef = result.nextRef; // Store the ref for infinite scroll to continue from
            loadedCount++;

            // Small delay to be nice to API
            await new Promise(r => setTimeout(r, 100));
        }
    } catch (e) {
        console.error('Error in initial chapter load:', e);
        if (!combinedHtml) {
            combinedHtml = `<p class="error-message">Error loading chapters: ${e.message}</p>`;
        }
    }

    DOM.readerSpinner.classList.add('hidden');

    // If absolutely no content was loaded
    if (!combinedHtml) {
        combinedHtml = '<p class="error-message">לא התקבל תוכן מהשרת (No Content)</p>';
    }

    return {
        htmlContent: combinedHtml,
        nextRef: finalNextRef,
        startRef: startRef
    };
}

/**
 * Fetch book index/structure from Sefaria API
 * @param {string} bookRef - The Sefaria book reference
 * @returns {Promise<Object>} Book index with chapters info
 */
async function fetchBookIndex(bookRef) {
    try {
        // Extract book name from reference (e.g., "Genesis.1" -> "Genesis")
        const bookName = bookRef.split('.')[0].split(',')[0].trim();
        const url = `https://www.sefaria.org/api/v2/raw/index/${encodeURIComponent(bookName)}`;
        const response = await fetch(url);

        if (!response.ok) {
            console.warn('Could not fetch book index:', response.status);
            return null;
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch book index:', error);
        return null;
    }
}

/**
 * Render chapter navigation based on book structure
 * @param {Object} bookIndex - The book index from Sefaria
 * @param {string} bookRef - The current book reference
 */
function renderChapterNav(bookIndex, bookRef) {
    if (!DOM.readerNavList || !bookIndex) return;

    DOM.readerNavList.innerHTML = '';

    // Get the book name for building refs
    const bookName = bookRef.split('.')[0].split(',')[0].trim();

    // Special handling for Tanakh - show books instead of chapters
    const tanakhBooks = [
        // Torah
        { en: 'Genesis', he: 'בראשית' },
        { en: 'Exodus', he: 'שמות' },
        { en: 'Leviticus', he: 'ויקרא' },
        { en: 'Numbers', he: 'במדבר' },
        { en: 'Deuteronomy', he: 'דברים' },
        // Nevi'im
        { en: 'Joshua', he: 'יהושע' },
        { en: 'Judges', he: 'שופטים' },
        { en: 'I Samuel', he: 'שמואל א' },
        { en: 'II Samuel', he: 'שמואל ב' },
        { en: 'I Kings', he: 'מלכים א' },
        { en: 'II Kings', he: 'מלכים ב' },
        { en: 'Isaiah', he: 'ישעיהו' },
        { en: 'Jeremiah', he: 'ירמיהו' },
        { en: 'Ezekiel', he: 'יחזקאל' },
        { en: 'Hosea', he: 'הושע' },
        { en: 'Joel', he: 'יואל' },
        { en: 'Amos', he: 'עמוס' },
        { en: 'Obadiah', he: 'עובדיה' },
        { en: 'Jonah', he: 'יונה' },
        { en: 'Micah', he: 'מיכה' },
        { en: 'Nahum', he: 'נחום' },
        { en: 'Habakkuk', he: 'חבקוק' },
        { en: 'Zephaniah', he: 'צפניה' },
        { en: 'Haggai', he: 'חגי' },
        { en: 'Zechariah', he: 'זכריה' },
        { en: 'Malachi', he: 'מלאכי' },
        // Ketuvim
        { en: 'Psalms', he: 'תהילים' },
        { en: 'Proverbs', he: 'משלי' },
        { en: 'Job', he: 'איוב' },
        { en: 'Song of Songs', he: 'שיר השירים' },
        { en: 'Ruth', he: 'רות' },
        { en: 'Lamentations', he: 'איכה' },
        { en: 'Ecclesiastes', he: 'קהלת' },
        { en: 'Esther', he: 'אסתר' },
        { en: 'Daniel', he: 'דניאל' },
        { en: 'Ezra', he: 'עזרא' },
        { en: 'Nehemiah', he: 'נחמיה' },
        { en: 'I Chronicles', he: 'דברי הימים א' },
        { en: 'II Chronicles', he: 'דברי הימים ב' }
    ];

    // Check if this is Tanakh
    const isTanakh = bookName === 'Genesis' || bookRef.includes('Genesis');

    if (isTanakh) {
        // Update header
        if (DOM.readerNavHeader) {
            DOM.readerNavHeader.textContent = 'ספרי התנ"ך';
        }

        // Render Tanakh books
        tanakhBooks.forEach(book => {
            const btn = document.createElement('button');
            btn.className = 'reader-nav-item';
            btn.textContent = book.he;
            btn.addEventListener('click', () => jumpToChapter(`${book.en}.1`));
            DOM.readerNavList.appendChild(btn);
        });
        return;
    }

    const schema = bookIndex.schema;
    if (!schema) return;

    // Handle complex texts with multiple sections
    if (schema.nodes && schema.nodes.length > 0) {
        // Complex text - show section names
        schema.nodes.forEach(node => {
            if (node.titles && node.titles.length > 0) {
                const heTitle = node.titles.find(t => t.lang === 'he')?.text || node.titles[0].text;
                const enTitle = node.key || node.titles[0].text;

                const btn = document.createElement('button');
                btn.className = 'reader-nav-item';
                btn.textContent = heTitle;
                btn.addEventListener('click', () => jumpToChapter(`${bookName}, ${enTitle}`));
                DOM.readerNavList.appendChild(btn);
            }
        });
    } else if (schema.lengths && schema.lengths.length > 0) {
        // Simple text with chapters
        const numChapters = schema.lengths[0];
        const sectionName = schema.sectionNames?.[0] || 'פרק';

        // Hebrew chapter names
        const hebrewNums = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י',
            'יא', 'יב', 'יג', 'יד', 'טו', 'טז', 'יז', 'יח', 'יט', 'כ',
            'כא', 'כב', 'כג', 'כד', 'כה', 'כו', 'כז', 'כח', 'כט', 'ל',
            'לא', 'לב', 'לג', 'לד', 'לה', 'לו', 'לז', 'לח', 'לט', 'מ',
            'מא', 'מב', 'מג', 'מד', 'מה', 'מו', 'מז', 'מח', 'מט', 'נ'];

        for (let i = 1; i <= Math.min(numChapters, 50); i++) {
            const btn = document.createElement('button');
            btn.className = 'reader-nav-item';
            btn.textContent = `${sectionName} ${hebrewNums[i - 1] || i}`;
            btn.addEventListener('click', () => jumpToChapter(`${bookName}.${i}`));
            DOM.readerNavList.appendChild(btn);
        }
    }
}

/**
 * Jump to a specific chapter
 * @param {string} ref - The Sefaria reference to jump to
 */
async function jumpToChapter(ref) {
    if (!state.readerBook) return;

    // Show loading
    DOM.readerSpinner.classList.remove('hidden');
    DOM.readerText.innerHTML = '';

    // Load new content
    const result = await loadBookContent(ref);

    DOM.readerSpinner.classList.add('hidden');
    DOM.readerText.innerHTML = result.htmlContent;

    // Update state
    state.currentRef = ref;
    state.nextRef = result.nextRef;

    // Scroll to top
    if (DOM.readerContent) {
        DOM.readerContent.scrollTop = 0;
    }
}

/**
 * Open the Reader Panel with Focus & Isolation transition
 * @param {Object} book - The book object
 * @param {HTMLElement} bookNode - The clicked book DOM node (optional)
 */
async function openReaderPanel(book, bookNode = null) {
    state.readerOpen = true;
    state.readerBook = book;
    state.selectedBookNode = bookNode;
    state.currentRef = book.sefariaRef || null;
    state.nextRef = null;
    state.isLoadingMore = false;

    // Apply book isolation effect
    document.body.classList.add('reader-active');
    if (bookNode) {
        bookNode.classList.add('selected-book');
    }

    // Set cover image
    DOM.readerCover.src = book.cover;
    DOM.readerCover.alt = book.title;

    // Set title and meta
    DOM.readerTitle.innerText = book.title;
    DOM.readerMeta.innerHTML = `
        <span>${book.author}</span>
        <span>•</span>
        <span>${book.publisher}</span>
        <span>•</span>
        <span>${book.year}</span>
    `;

    // Reset states
    DOM.readerSpinner.classList.remove('hidden');
    DOM.readerText.innerHTML = '';
    DOM.readerError.classList.add('hidden');
    DOM.readerBottomSpinner.classList.remove('loading');

    // Show panel with animation
    DOM.readerPanel.classList.add('open');

    // Scroll content to top
    DOM.readerContent.scrollTop = 0;

    // Priority: 1. Sefaria, 2. WikiSource, 3. Summary fallback
    if (book.sefariaRef) {
        // Show navigation for Sefaria books
        if (DOM.readerNav) {
            DOM.readerNav.classList.remove('hidden');
        }

        // Use Sefaria API
        // Use Sefaria API - Fetch Initial Chapters (Current + Next 2)
        const result = await loadInitialChapters(book.sefariaRef);
        DOM.readerSpinner.classList.add('hidden');

        // === PAGE-FLIP: Paginate and display content ===
        state.rawContent = result.htmlContent;
        state.pages = paginateContent(result.htmlContent);
        state.currentPageIndex = 0;
        state.totalPages = state.pages.length;
        displayCurrentPages();
        // Trigger Swipe Tutorial (if first time)
        if (!state.readerTutorialShown) {
            setTimeout(() => {
                playReaderSwipeTutorial();
            }, 1000);
        }

        // Store nextRef for loading more pages later
        state.nextRef = result.nextRef;

        // Check if it was an error message
        if (result.htmlContent.includes('error-message')) {
            DOM.readerError.classList.remove('hidden');
        } else {
            DOM.readerError.classList.add('hidden');
        }

        // Fetch and render chapter navigation (async, non-blocking)
        fetchBookIndex(book.sefariaRef).then(bookIndex => {
            if (bookIndex) {
                state.bookIndex = bookIndex;
                renderChapterNav(bookIndex, book.sefariaRef);
            }
        });
    } else if (book.wikisourcePage) {
        // Hide navigation for WikiSource books
        if (DOM.readerNav) {
            DOM.readerNav.classList.add('hidden');
        }

        // Fallback to WikiSource
        const content = await fetchBookContent(book.wikisourcePage);
        DOM.readerSpinner.classList.add('hidden');

        if (content) {
            // === PAGE-FLIP: Paginate and display content ===
            state.rawContent = content;
            state.pages = paginateContent(content);
            state.currentPageIndex = 0;
            state.totalPages = state.pages.length;
            displayCurrentPages();
            // Trigger Swipe Tutorial (if first time)
            if (!state.readerTutorialShown) {
                setTimeout(() => {
                    playReaderSwipeTutorial();
                }, 1000);
            }
            DOM.readerError.classList.add('hidden');
        } else {
            DOM.readerError.classList.remove('hidden');
        }
    } else if (book.bookContent) {
        // Book has embedded content
        if (DOM.readerNav) {
            DOM.readerNav.classList.add('hidden');
        }

        DOM.readerSpinner.classList.add('hidden');

        // === PAGE-FLIP: Paginate and display book content ===
        state.rawContent = book.bookContent;
        state.pages = paginateContent(book.bookContent);
        state.currentPageIndex = 0;
        state.totalPages = state.pages.length;
        displayCurrentPages();
        // Trigger Swipe Tutorial (if first time)
        if (!state.readerTutorialShown) {
            setTimeout(() => {
                playReaderSwipeTutorial();
            }, 1000);
        }
        // Trigger Swipe Tutorial (if first time)
        if (!state.readerTutorialShown) {
            setTimeout(() => {
                playReaderSwipeTutorial();
            }, 1000);
        }
    } else {
        // Hide navigation for no-source books
        if (DOM.readerNav) {
            DOM.readerNav.classList.add('hidden');
        }

        DOM.readerSpinner.classList.add('hidden');

        // Check if book has absolutely no content source
        const hasNoContent = !book.sefariaRef && !book.wikisourcePage && !book.bookContent;

        let summaryContent = `
            <div class="summary-container" style="padding: 2rem; direction: rtl; text-align: right;">
                <h2 style="font-family: var(--font-heading); color: var(--color-maroon); margin-bottom: 20px;">${book.title}</h2>
                <p style="font-size: 1.2rem; line-height: 1.8; margin-bottom: 2rem;">
                    ${book.summary}
                </p>
                
                ${hasNoContent ? `
                <div class="no-content-message" style="
                    margin: 40px 0;
                    padding: 20px;
                    background: rgba(62, 39, 35, 0.05);
                    border-radius: 8px;
                    border: 1px dashed var(--color-maroon);
                    text-align: center;
                    font-weight: bold;
                    color: var(--color-maroon);
                ">
                    <p>לצערנו לספר זה אין כרגע גישה, מוזמנים להמשיך לעיין</p>
                </div>
                ` : ''}

                ${book.quotes && book.quotes.length > 0 ? `
                    <h3 style="font-family: var(--font-heading); font-size: 1.2rem; margin-top: 32px; margin-bottom: 12px;">ציטוטים</h3>
                    <blockquote style="border-right: 3px solid rgba(62, 39, 35, 0.2); padding-right: 16px; font-style: italic;">
                        ${book.quotes.map(q => `<p>"${q}"</p>`).join('')}
                    </blockquote>
                ` : ''}
            </div>
        `;

        // === PAGE-FLIP: Paginate and display content ===
        state.rawContent = summaryContent;
        state.pages = paginateContent(summaryContent);
        state.currentPageIndex = 0;
        state.totalPages = state.pages.length;
        state.totalPages = state.pages.length;
        displayCurrentPages();
        // Trigger Swipe Tutorial (if first time)
        if (!state.readerTutorialShown) {
            setTimeout(() => {
                playReaderSwipeTutorial();
            }, 1000);
        }
    }

    // Trigger Swipe Tutorial (if first time)
    if (!state.readerTutorialShown) {
        setTimeout(() => {
            playReaderSwipeTutorial();
        }, 1000);
    }
}

/**
 * Load more content for infinite scroll
 */
async function loadMoreContent() {
    if (state.isLoadingMore || !state.nextRef) return;

    state.isLoadingMore = true;
    DOM.readerBottomSpinner.classList.add('loading');

    try {
        console.log('Lazy loading next chapter:', state.nextRef);
        const result = await loadBookContent(state.nextRef); // Fetch single next chapter

        if (result && result.htmlContent) {
            // Create a chapter title page or marker if needed
            // For now, just paginate the new content

            // Add a visual divider in the content itself (optional, maybe a header)
            let contentToPaginate = result.htmlContent;
            if (result.heRef) {
                contentToPaginate = `<h2>${result.heRef}</h2>` + contentToPaginate;
            }

            // Paginate the NEW content
            const newPages = paginateContent(contentToPaginate);

            if (newPages.length > 0) {
                // Append new pages to the existing array
                state.pages = [...state.pages, ...newPages];
                state.totalPages = state.pages.length;

                // Update raw content just in case
                state.rawContent += contentToPaginate;

                console.log(`Added ${newPages.length} new pages. Total: ${state.totalPages}`);

                // Update UI
                updatePageIndicator();
                updateNavButtons();
            }

            // Update next ref
            state.nextRef = result.nextRef;
        }
    } catch (error) {
        console.error('Error loading more content:', error);
    } finally {
        state.isLoadingMore = false;
        DOM.readerBottomSpinner.classList.remove('loading');
    }
}

// Infinite scroll observer instance
let infiniteScrollObserver = null;

/**
 * Setup IntersectionObserver for infinite scroll
 */
function setupInfiniteScrollObserver() {
    // Disconnect any existing observer
    if (infiniteScrollObserver) {
        infiniteScrollObserver.disconnect();
    }

    // Create new observer
    infiniteScrollObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && state.nextRef && !state.isLoadingMore) {
                    loadMoreContent();
                }
            });
        },
        {
            root: DOM.readerContent,
            rootMargin: '200px', // Trigger 200px before reaching the bottom
            threshold: 0
        }
    );

    // Start observing the sentinel
    if (DOM.readerScrollSentinel) {
        infiniteScrollObserver.observe(DOM.readerScrollSentinel);
    }
}

/**
 * Close the Reader Panel
 */
function closeReaderPanel() {
    state.readerOpen = false;
    state.readerBook = null;
    state.currentRef = null;
    state.nextRef = null;
    state.bookIndex = null;

    // Remove book isolation effect
    document.body.classList.remove('reader-active');
    if (state.selectedBookNode) {
        state.selectedBookNode.classList.remove('selected-book');
        state.selectedBookNode = null;
    }

    // Disconnect infinite scroll observer
    if (infiniteScrollObserver) {
        infiniteScrollObserver.disconnect();
        infiniteScrollObserver = null;
    }

    // Hide navigation
    if (DOM.readerNav) {
        DOM.readerNav.classList.add('hidden');
    }

    DOM.readerPanel.classList.remove('open');
}

// Reader Panel Event Listeners
DOM.readerClose.addEventListener('click', closeReaderPanel);

// Close on Escape key
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (state.readerOpen) closeReaderPanel();
        if (state.aboutOpen) closeAboutPanel();
    }
});

// ===== About Panel =====
/**
 * Open the About Panel
 */
function openAboutPanel() {
    state.aboutOpen = true;
    document.body.classList.add('reader-active'); // Use same isolation effect
    DOM.aboutPanel.classList.add('open');
    // Close sidebar if open
    closeSidebar();
}

/**
 * Close the About Panel
 */
function closeAboutPanel() {
    state.aboutOpen = false;
    document.body.classList.remove('reader-active');
    DOM.aboutPanel.classList.remove('open');
}

// About Panel Event Listeners
if (DOM.aboutClose) {
    DOM.aboutClose.addEventListener('click', closeAboutPanel);
}

if (DOM.aboutLink) {
    DOM.aboutLink.addEventListener('click', (e) => {
        e.preventDefault();
        openAboutPanel();
    });
}


// 4. Search & Filter
// Extract unique tags - limited to 15 most frequent
function extractUniqueTags() {
    const allTags = BOOKS_DATA.flatMap(book => book.tags || []);

    // Count frequency of each tag
    const tagCount = {};
    allTags.forEach(tag => {
        tagCount[tag] = (tagCount[tag] || 0) + 1;
    });

    // Sort by frequency (most common first) and limit to 15
    return Object.keys(tagCount)
        .sort((a, b) => tagCount[b] - tagCount[a])
        .slice(0, 15);
}

function renderTags() {
    const tags = extractUniqueTags();
    DOM.tagCloud.innerHTML = '';

    tags.forEach(tag => {
        const span = document.createElement('span');
        // Initial Style: Larger Capsules (Text-sm, PX-3, PY-1.5)
        span.className = 'cursor-pointer text-sm text-maroon/60 hover:text-maroon hover:underline transition-all px-3 py-1.5 rounded-md border border-transparent';
        span.innerText = tag;
        span.addEventListener('click', () => toggleTagFilter(tag, span));
        DOM.tagCloud.appendChild(span);
    });
}

function toggleTagFilter(tag, el) {
    if (state.activeFilterTag === tag) {
        // Deactivate
        state.activeFilterTag = null;
        el.className = 'cursor-pointer text-sm text-maroon/60 hover:text-maroon hover:underline transition-all px-3 py-1.5 rounded-md border border-transparent';
    } else {
        // Reset all others
        Array.from(DOM.tagCloud.children).forEach(c => {
            c.className = 'cursor-pointer text-sm text-maroon/60 hover:text-maroon hover:underline transition-all px-3 py-1.5 rounded-md border border-transparent';
        });

        // Activate (Inverted: Dark BG, Light Text)
        state.activeFilterTag = tag;
        el.className = 'cursor-pointer text-sm bg-[#333] text-[#F9F5F0] px-3 py-1.5 rounded-md border border-[#333] font-bold shadow-sm transition-all';
    }
    performSearch();
    updateResetButton();
}

function performSearch() {
    const query = state.searchQuery.trim().toLowerCase();
    const tag = state.activeFilterTag;

    // Reset if empty
    if (query === '' && !tag) {
        state.matchingIds = null;
        // Reset all nodes
        state.activeNodes.forEach(node => node.classList.remove('dimmed'));
        return;
    }

    // Optimization: Pre-calculate matching IDs
    const matching = new Set();
    BOOKS_DATA.forEach(book => {
        const matchesQuery = query === '' ||
            book.title.toLowerCase().includes(query) ||
            book.author.toLowerCase().includes(query) ||
            (book.summary && book.summary.toLowerCase().includes(query));

        const matchesTag = !tag || (book.tags && book.tags.includes(tag));

        if (matchesQuery && matchesTag) {
            matching.add(book.id);
        }
    });

    state.matchingIds = matching;

    // Update active nodes immediately
    state.activeNodes.forEach((node, index) => {
        const layout = SCATTER_DATA[index];
        const book = layout ? BOOKS_DATA[layout.bookIndex] : null;
        if (book) {
            if (state.matchingIds.has(book.id)) {
                node.classList.remove('dimmed');
            } else {
                node.classList.add('dimmed');
            }
        }
    });
}

DOM.searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    performSearch();
    updateResetButton();
});

// Reset Button Logic
function updateResetButton() {
    const hasActiveSearch = state.searchQuery.length > 0;
    const hasActiveTag = state.activeFilterTag !== null;

    if (hasActiveSearch || hasActiveTag) {
        DOM.resetBtn.classList.remove('hidden');
    } else {
        DOM.resetBtn.classList.add('hidden');
    }
}

DOM.resetBtn.addEventListener('click', () => {
    // Clear State
    state.searchQuery = '';
    state.activeFilterTag = null;

    // Clear UI
    DOM.searchInput.value = '';

    // Reset Tags Visuals
    Array.from(DOM.tagCloud.children).forEach(c => {
        c.className = 'cursor-pointer text-sm text-maroon/60 hover:text-maroon hover:underline transition-all px-3 py-1.5 rounded-md border border-transparent';
    });

    // Reset Search
    performSearch();
    updateResetButton();
});

// Sidebar Interaction: Expand Tags on Focus
DOM.searchInput.addEventListener('focus', () => {
    DOM.tagCloudWrapper.classList.remove('h-0', 'opacity-0');
    DOM.tagCloudWrapper.classList.add('h-auto', 'opacity-100', 'mt-4'); // mt-4 for spacing
});

// Collapse Tags when leaving search (if no active search/filter)
DOM.searchInput.addEventListener('blur', () => {
    // Small delay to allow tag clicks to register before collapsing
    setTimeout(() => {
        // Only collapse if there's no active search or filter
        if (state.searchQuery.length === 0 && state.activeFilterTag === null) {
            DOM.tagCloudWrapper.classList.remove('h-auto', 'opacity-100', 'mt-4');
            DOM.tagCloudWrapper.classList.add('h-0', 'opacity-0');
        }
    }, 200);
});


// Sidebar Open/Close Logic
function openSidebar() {
    state.sidebarOpen = true;
    DOM.sidebarPanel.classList.remove('translate-x-full');
    DOM.sidebarPanel.classList.add('translate-x-0');
}

function closeSidebar() {
    state.sidebarOpen = false;
    if (DOM.sidebarPanel) {
        DOM.sidebarPanel.classList.remove('translate-x-0');
        DOM.sidebarPanel.classList.add('translate-x-full');
    }
}

// Menu Toggle Button
const menuToggle = document.getElementById('menu-toggle');
if (menuToggle) {
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        if (state.sidebarOpen) {
            closeSidebar();
        } else {
            openSidebar();
        }
    });
}

// Close on Click Outside
window.addEventListener('click', (e) => {
    if (state.sidebarOpen && DOM.sidebarPanel) {
        // If click is NOT inside sidebar and NOT inside menu button
        if (!DOM.sidebarPanel.contains(e.target) && (!menuToggle || !menuToggle.contains(e.target))) {
            closeSidebar();
        }
    }
});

// Close on Escape
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && state.sidebarOpen) {
        closeSidebar();
    }
});

// ===== NEW: Persistent Sidebar Event Listeners =====

// Persistent Search Input
if (DOM.sidebarSearchInput) {
    DOM.sidebarSearchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        performSearch();
        // Update reset button visibility
        if (DOM.sidebarReset) {
            if (state.searchQuery.length > 0 || state.activeFilterTag) {
                DOM.sidebarReset.classList.remove('hidden');
            } else {
                DOM.sidebarReset.classList.add('hidden');
            }
        }
    });
}

// Persistent Reset Button
if (DOM.sidebarReset) {
    DOM.sidebarReset.addEventListener('click', () => {
        state.searchQuery = '';
        state.activeFilterTag = null;
        state.activeCategory = 'all';

        if (DOM.sidebarSearchInput) {
            DOM.sidebarSearchInput.value = '';
        }

        // Reset category buttons
        DOM.categoryButtons?.forEach(btn => btn.classList.remove('active'));
        document.querySelector('.category-btn[data-category="all"]')?.classList.add('active');

        performSearch();
        DOM.sidebarReset.classList.add('hidden');
    });
}

// Category Buttons
DOM.categoryButtons?.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        state.activeCategory = category;

        // Update active state
        DOM.categoryButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Filter by category
        if (category === 'all') {
            state.activeFilterTag = null;
        } else {
            // Map category to matching books
            state.matchingIds = new Set();
            BOOKS_DATA.forEach(book => {
                if (book.category === category) {
                    state.matchingIds.add(book.id);
                }
            });
        }

        // Update display
        state.activeNodes.forEach((node, index) => {
            const layout = SCATTER_DATA[index];
            const book = layout ? BOOKS_DATA[layout.bookIndex] : null;
            if (book) {
                if (category === 'all' || book.category === category) {
                    node.classList.remove('dimmed');
                } else {
                    node.classList.add('dimmed');
                }
            }
        });
    });
});

// Persistent About Link
if (DOM.sidebarAboutLink) {
    DOM.sidebarAboutLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (DOM.aboutPanel) {
            DOM.aboutPanel.classList.add('visible');
            state.aboutOpen = true;
        }
    });
}

// ===== Hero Shrink on Drag =====
function shrinkHero() {
    if (!state.heroShrunk && DOM.heroTitle) {
        state.heroShrunk = true;
        DOM.heroTitle.classList.add('shrunk');
    }
}

// Function to create a single book node (scene)


// Splash Screen Logic
const splashScreen = document.getElementById('splash-screen');
const splashBall = document.getElementById('splash-ball');
const progressStroke = document.getElementById('progress-stroke');
const progressCircle = document.getElementById('progress-circle');

// Intro Scene Elements
const introScene = document.getElementById('intro-scene');
const introParagraphs = document.querySelectorAll('.intro-paragraph');
const introContinue = document.getElementById('intro-continue');

// Progress circle constants
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * 23; // 2πr where r=23

/**
 * Update the progress circle stroke based on loading progress (0-1)
 */
function updateProgressCircle(progress) {
    if (!progressStroke) return;
    // strokeDashoffset goes from circumference (0%) to 0 (100%)
    const offset = CIRCLE_CIRCUMFERENCE * (1 - progress);
    progressStroke.style.strokeDashoffset = offset;
}

/**
 * Show the intro scene with staggered paragraph animations
 */
function showIntroScene() {
    if (!introScene) return;

    // Show and fade in the intro scene
    introScene.classList.remove('hidden');
    setTimeout(() => {
        introScene.classList.add('visible');
    }, 50);

    // Stagger the paragraph animations
    introParagraphs.forEach((paragraph, index) => {
        setTimeout(() => {
            paragraph.classList.add('visible');
        }, 600 + (index * 400)); // Start after 600ms, 400ms between each
    });

    // Show continue button after all paragraphs
    const continueDelay = 600 + (introParagraphs.length * 400) + 500;
    setTimeout(() => {
        if (introContinue) {
            introContinue.classList.add('visible');
        }
    }, continueDelay);
}

/**
 * Dismiss the intro scene and show the library
 */
function dismissIntroScene() {
    if (!introScene) return;

    // Fade out intro scene
    introScene.classList.add('fade-out');

    // Show the main canvas, then start tutorial
    setTimeout(() => {
        // Show the canvas/library
        if (DOM.canvas) {
            DOM.canvas.style.visibility = 'visible';
            DOM.canvas.style.opacity = '1';
        }
        introScene.style.display = 'none';
        playTutorialAnimation();
    }, 800);
}

// Tutorial Elements
const tutorialOverlay = document.getElementById('tutorial-overlay');
const tutorialCursor = document.getElementById('tutorial-cursor');
const tutorialHint = document.getElementById('tutorial-hint');

function playTutorialAnimation() {
    if (!tutorialOverlay || !tutorialCursor) return;

    // Show the tutorial overlay
    tutorialOverlay.classList.remove('hidden');

    // Position cursor in center initially
    tutorialCursor.style.left = '50%';
    tutorialCursor.style.top = '50%';

    // Start the animation sequence
    tutorialCursor.style.animation = 'tutorialSequence 3.5s ease-in-out forwards';

    setTimeout(() => {
        tutorialCursor.classList.add('active');

        // Show hint text
        if (tutorialHint) {
            tutorialHint.innerText = 'גרור כדי לחקור את המדף';
            tutorialHint.style.opacity = '1';
        }
    }, 200);

    // Simulate press at 20% of animation (0.7s into 3.5s)
    setTimeout(() => {
        tutorialCursor.classList.add('pressed');
    }, 700);

    // Pan the camera during drag phase (from 20% to 70%)
    const panDuration = 1750; // ms
    const panStartTime = 700;
    const targetPanX = 300; // How much to pan
    const startPanX = state.pan.x;
    const startTime = performance.now() + panStartTime;

    function animatePan(currentTime) {
        const elapsed = currentTime - startTime;
        if (elapsed < 0) {
            requestAnimationFrame(animatePan);
            return;
        }

        const progress = Math.min(elapsed / panDuration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);

        state.pan.x = startPanX + (targetPanX * eased);
        updateCamera();

        if (progress < 1) {
            requestAnimationFrame(animatePan);
        }
    }

    requestAnimationFrame(animatePan);

    // Release press at 70% (2.45s)
    setTimeout(() => {
        tutorialCursor.classList.remove('pressed');
    }, 2450);

    // Phase 2: Click on a book
    // Change hint text
    setTimeout(() => {
        if (tutorialHint) {
            tutorialHint.innerText = 'לחץ על ספר כדי לקרוא עוד';
        }
    }, 3000);

    // Move cursor to a book position (find first visible book)
    setTimeout(() => {
        tutorialCursor.classList.remove('active');

        // Find a book to hover over
        const firstBook = document.querySelector('.book-scene');
        if (firstBook) {
            const rect = firstBook.getBoundingClientRect();
            const targetX = rect.left + rect.width / 2;
            const targetY = rect.top + rect.height / 2;

            // Animate cursor to book
            tutorialCursor.style.transition = 'left 0.8s ease-out, top 0.8s ease-out';
            tutorialCursor.style.left = `${targetX}px`;
            tutorialCursor.style.top = `${targetY}px`;
            tutorialCursor.style.opacity = '1';

            // Just show click animation (no opening anything)
            setTimeout(() => {
                tutorialCursor.classList.add('pressed');

                // Release after a moment
                setTimeout(() => {
                    tutorialCursor.classList.remove('pressed');
                }, 200);
            }, 900);
        }
    }, 3200);

    // Hide tutorial after book click animation
    setTimeout(() => {
        if (tutorialHint) {
            tutorialHint.style.opacity = '0';
        }
        tutorialCursor.style.opacity = '0';
    }, 5800);

    setTimeout(() => {
        tutorialOverlay.classList.add('hidden');
        tutorialCursor.classList.remove('active');
        tutorialCursor.style.transition = '';
    }, 6500);

}

/**
 * Play Swipe Tutorial for Reader
 */
function playReaderSwipeTutorial() {
    if (!tutorialOverlay || !tutorialCursor) return;

    state.readerTutorialShown = true; // Mark as shown

    // Show the tutorial overlay
    tutorialOverlay.classList.remove('hidden');
    tutorialCursor.style.animation = 'none'; // Reset any CSS anim
    tutorialCursor.style.transition = 'left 1.2s ease-in-out, top 1.2s ease-in-out, opacity 0.5s ease';

    // Position cursor in center
    tutorialCursor.style.left = '30%'; // Start Left (RTL Next Page gesture starts left, swipes right)
    tutorialCursor.style.top = '50%';

    // Reveal
    setTimeout(() => {
        tutorialCursor.classList.add('active'); // opacity 1
        if (tutorialHint) {
            tutorialHint.innerText = 'גרור לדפדוף';
            tutorialHint.style.opacity = '1';
        }
    }, 100);

    // Simulate Press
    setTimeout(() => {
        tutorialCursor.classList.add('pressed');
    }, 800);

    // Drag Left (Next Page in RTL usually requires dragging Right->Left? Or Left->Right?)
    // Wait, Dragging Page content to the Right usually reveals the Left page (Previous).
    // Dragging Content Left reveals Right page (Next).
    // But earlier logic: Drag Right -> Next Page (User Request/Code?)
    // Code says: "if (deltaX > 0) nextPage()". YES.
    // So Drag Right -> Next Page.
    // So cursor should move Right.

    // Drag Right (Left -> Right) to go Next Page
    setTimeout(() => {
        tutorialCursor.style.left = '80%'; // Move to Right
    }, 1200);

    // Release
    setTimeout(() => {
        tutorialCursor.classList.remove('pressed');
    }, 2400);

    // Hide
    setTimeout(() => {
        tutorialCursor.classList.remove('active');
        if (tutorialHint) tutorialHint.style.opacity = '0';

        // Hide overlay
        setTimeout(() => {
            tutorialOverlay.classList.add('hidden');
        }, 500);
    }, 3000);
}

/**
 * Preload all book cover images with progress tracking
 * Updates the progress circle as images load
 */
function preloadAllImages() {
    const uniqueCovers = [...new Set(BOOKS_DATA.map(book => book.cover))];
    const totalImages = uniqueCovers.length;
    let loadedCount = 0;

    const loadPromises = uniqueCovers.map(src => {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                loadedCount++;
                updateProgressCircle(loadedCount / totalImages);
                resolve();
            };
            img.onerror = () => {
                loadedCount++;
                updateProgressCircle(loadedCount / totalImages);
                resolve(); // Resolve even on error to not block
            };
            img.src = src;
        });
    });

    return Promise.all(loadPromises);
}

// Preloading state (Legacy - disabled for new landing page)
// Images preload in background but don't control UI flow anymore
preloadAllImages().then(() => {
    console.log('Images preloaded');
});

// Note: Old splash/hero flow is disabled. 
// The new #landing-page is immediately visible and user-scrollable.

function dismissSplash() {
    // Don't dismiss until everything is ready
    if (!imagesLoaded || !minimumTimeElapsed) return;
    if (!splashScreen) return;

    // Hide the main canvas until intro scene is dismissed (keep hidden for now)
    if (DOM.canvas) {
        DOM.canvas.style.visibility = 'hidden';
        DOM.canvas.style.opacity = '0';
        DOM.canvas.style.transition = 'opacity 0.5s ease-out';
    }

    // 1. Show Hero Section
    showHeroSection();

    // 2. Fade out splash screen
    setTimeout(() => {
        splashScreen.classList.add('fade-out');
    }, 200);

    // 3. Remove splash from DOM after transition completes
    setTimeout(() => {
        splashScreen.style.display = 'none';
    }, 1200);
}

// ===== NEW HERO FLOW =====
function showHeroSection() {
    if (!DOM.heroSection) {
        // Fallback if hero section missing
        showIntroScene();
        return;
    }

    DOM.heroSection.classList.remove('hidden');

    // Animate In elements
    setTimeout(() => {
        if (DOM.heroMainTitle) {
            DOM.heroMainTitle.classList.remove('opacity-0', 'translate-y-8');
        }
    }, 100);

    setTimeout(() => {
        if (DOM.heroScrollIndicator) {
            DOM.heroScrollIndicator.classList.remove('opacity-0');
        }

        // Add scroll listeners after delay
        setupHeroDismissListeners();
    }, 1000);
}

function setupHeroDismissListeners() {
    let triggered = false;

    const dismiss = () => {
        if (triggered) return;
        triggered = true;
        dismissHeroSection();

        // Cleanup
        window.removeEventListener('wheel', dismiss);
        window.removeEventListener('scroll', dismiss); // Mobile
        window.removeEventListener('touchmove', dismiss);
        window.removeEventListener('click', dismiss);
    };

    // Use a small threshold/delay to prevent accidental triggers
    // But for responsiveness, essentially any interaction triggers it
    window.addEventListener('wheel', dismiss, { passive: true });
    window.addEventListener('touchmove', dismiss, { passive: true });
    window.addEventListener('click', dismiss);
    // Note: 'scroll' event might not fire if body isn't scrolling, which it isn't (fixed elements)
    // So wheel/touchmove is better.
}

function dismissHeroSection() {
    if (!DOM.heroSection) return;

    // Fade out Hero content
    DOM.heroSection.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    DOM.heroSection.style.opacity = '0';
    DOM.heroSection.style.transform = 'translateY(-20px)'; // Parallax feel

    // Trigger Intro Scene Logic
    // We want the Intro to appear as Hero fades out
    showIntroScene();

    // Hide Hero from DOM
    setTimeout(() => {
        DOM.heroSection.style.display = 'none';
    }, 800);
}

// Click handler for intro scene continue button
if (introContinue) {
    introContinue.addEventListener('click', dismissIntroScene);
}

// Init Tags
renderTags();

// Custom Cursor
const cursor = document.getElementById('custom-cursor');
window.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});
window.addEventListener('mousedown', () => {
    document.body.classList.add('cursor-pressed');
});
window.addEventListener('mouseup', () => {
    document.body.classList.remove('cursor-pressed');
});

window.addEventListener('resize', () => {
    // Re-clamp panning on resize
    const maxPanX = TABLE_SIZE - window.innerWidth;
    const maxPanY = TABLE_SIZE - window.innerHeight;
    state.pan.x = Math.max(0, Math.min(state.pan.x, maxPanX));
    state.pan.y = Math.max(0, Math.min(state.pan.y, maxPanY));
    updateCamera();
});

/* =========================================
   Arrange Mode Toggle Logic
   ========================================= */
if (DOM.viewToggle) {
    DOM.viewToggle.addEventListener('click', () => {
        state.arrangeMode = !state.arrangeMode;

        if (state.arrangeMode) {
            // Enter Arrange Mode
            document.body.classList.add('arrange-mode');
            DOM.viewToggle.classList.add('active');
        } else {
            // Exit Arrange Mode
            document.body.classList.remove('arrange-mode');
            DOM.viewToggle.classList.remove('active');
        }
    });
}

initWorld();

/* =========================================
   Landing Page Scroll Logic
   ========================================= */
/* =========================================
   Image Preloading System
   ========================================= */
let allImagesLoaded = false;

function preloadAllBookCovers() {
    // Get all unique cover images from BOOKS_DATA
    const coverImages = BOOKS_DATA.map(book => book.cover);
    const uniqueCovers = [...new Set(coverImages)];

    let loadedCount = 0;
    const totalImages = uniqueCovers.length;

    console.log(`Preloading ${totalImages} book covers...`);

    return new Promise((resolve) => {
        if (totalImages === 0) {
            resolve();
            return;
        }

        uniqueCovers.forEach(coverSrc => {
            const img = new Image();

            img.onload = () => {
                loadedCount++;
                console.log(`Loaded ${loadedCount}/${totalImages}: ${coverSrc}`);

                if (loadedCount === totalImages) {
                    console.log('All book covers loaded successfully!');
                    allImagesLoaded = true;
                    resolve();
                }
            };

            img.onerror = () => {
                loadedCount++;
                console.warn(`Failed to load: ${coverSrc}`);

                // Still count as "loaded" to not block the site
                if (loadedCount === totalImages) {
                    console.log('All book covers processed (some may have failed)');
                    allImagesLoaded = true;
                    resolve();
                }
            };

            img.src = coverSrc;
        });
    });
}

// Start preloading images when script loads
preloadAllBookCovers().then(() => {
    console.log('Image preloading complete - site ready');
    // Enable enter library button if it exists
    if (DOM.enterLibrary) {
        DOM.enterLibrary.disabled = false;
        DOM.enterLibrary.style.opacity = '1';
        DOM.enterLibrary.style.cursor = 'pointer';
    }
});

// Disable enter library button initially
if (DOM.enterLibrary) {
    DOM.enterLibrary.disabled = true;
    DOM.enterLibrary.style.opacity = '0.5';
    DOM.enterLibrary.style.cursor = 'wait';
}

/* =========================================
   Landing Page Scroll Logic
   ========================================= */
let isEnteringLibrary = false;

function triggerEnterLibrary() {
    // Don't allow entry until images are loaded
    if (!allImagesLoaded) {
        console.log('Please wait for images to load...');
        return;
    }

    if (isEnteringLibrary) return;
    isEnteringLibrary = true;

    // Fade out landing page
    if (DOM.landingPage) {
        DOM.landingPage.style.transition = 'opacity 0.8s ease-out';
        DOM.landingPage.style.opacity = '0';

        setTimeout(() => {
            DOM.landingPage.style.display = 'none';

            // Show canvas
            if (DOM.canvas) {
                DOM.canvas.style.visibility = 'visible';
                DOM.canvas.style.opacity = '1';
            }

            // Play tutorial
            playTutorialAnimation();
        }, 800);
    }
}

if (DOM.landingPage) {
    // 1. Title Shrink on Scroll & Scroll-to-Enter
    DOM.landingPage.addEventListener('scroll', () => {
        const scrollY = DOM.landingPage.scrollTop;
        const maxScroll = window.innerHeight * 0.5; // Shrink over first half of screen

        // Calculate scale: 1.0 at top, 0.4 at maxScroll
        const progress = Math.min(scrollY / maxScroll, 1);
        const scale = 1 - (progress * 0.6); // Goes from 1.0 to 0.4

        if (DOM.landingTitle) {
            DOM.landingTitle.style.transform = `scale(${scale})`;
        }
        if (DOM.landingSubtitle) {
            DOM.landingSubtitle.style.opacity = 1 - progress;
        }

        // SCROLL TO ENTER TRIGGER
        // If user is near the bottom (within 100px), trigger entry
        if (DOM.landingPage.scrollTop + DOM.landingPage.clientHeight >= DOM.landingPage.scrollHeight - 100) {
            // Only trigger if images are loaded
            if (allImagesLoaded) {
                triggerEnterLibrary();
            }
        }
    });

    // 2. IntersectionObserver for Reveal Animations
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        root: DOM.landingPage,
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all intro-paragraph and intro-reveal elements
    document.querySelectorAll('.intro-paragraph, .intro-reveal').forEach(el => {
        revealObserver.observe(el);
    });
}

/* =========================================
   Enter Library Button Handler
   ========================================= */
if (DOM.enterLibrary) {
    DOM.enterLibrary.addEventListener('click', triggerEnterLibrary);
}

/* =========================================
   Night Mode System
   ========================================= */
const nightModeToggle = document.getElementById('night-mode-toggle');
const candleLight = document.getElementById('candle-light');
const dustContainer = document.getElementById('dust-particles');

let nightModeEnabled = false;

// Toggle Night Mode
if (nightModeToggle) {
    nightModeToggle.addEventListener('click', () => {
        nightModeEnabled = !nightModeEnabled;

        if (nightModeEnabled) {
            document.body.classList.add('night-mode');
            nightModeToggle.classList.add('active');
        } else {
            document.body.classList.remove('night-mode');
            nightModeToggle.classList.remove('active');
        }
    });
}

// Candle Light follows cursor (only in night mode)
document.addEventListener('mousemove', (e) => {
    if (!nightModeEnabled || !candleLight) return;

    candleLight.style.left = e.clientX + 'px';
    candleLight.style.top = e.clientY + 'px';
});

// Create Dust Particles
function createDustParticles() {
    if (!dustContainer) return;

    // Create 30 particles
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'dust-particle';

        // Random position
        particle.style.left = Math.random() * 100 + 'vw';

        // Random size (2-5px)
        const size = 2 + Math.random() * 3;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';

        // Random animation duration (15-30s)
        const duration = 15 + Math.random() * 15;
        particle.style.animationDuration = duration + 's';

        // Random delay so they don't all start at once
        particle.style.animationDelay = Math.random() * 10 + 's';

        // Random horizontal drift
        const drift = (Math.random() - 0.5) * 100;
        particle.style.setProperty('--drift', drift + 'px');

        dustContainer.appendChild(particle);
    }
}

// Clear Dust Particles
function clearDustParticles() {
    if (!dustContainer) return;
    dustContainer.innerHTML = '';
}

/* =========================================
   Intro Link - Return to Landing Page
   ========================================= */
const introLink = document.getElementById('intro-link');
const landingPageForReturn = document.getElementById('landing-page');

if (introLink) {
    introLink.addEventListener('click', (e) => {
        e.preventDefault();

        // Show landing page again
        if (landingPageForReturn) {
            landingPageForReturn.style.display = 'block';
            landingPageForReturn.style.opacity = '0';

            // Scroll to top of landing page
            landingPageForReturn.scrollTop = 0;

            // Fade in
            setTimeout(() => {
                landingPageForReturn.style.transition = 'opacity 0.5s ease-in';
                landingPageForReturn.style.opacity = '1';
            }, 50);
        }

        // Close sidebar if open
        const sidebarPanel = document.getElementById('sidebar-panel');
        if (sidebarPanel) {
            sidebarPanel.classList.remove('translate-x-0');
            sidebarPanel.classList.add('translate-x-full');
        }
    });
}

/* =========================================
   Zoom System - Mouse Wheel Zoom for Library
   ========================================= */

// Apply zoom to the world/canvas
function applyZoom() {
    if (!DOM.world) return;

    DOM.world.style.transform = `scale(${state.zoom})`;
    DOM.world.style.transformOrigin = 'center center';
    DOM.world.style.transition = 'transform 0.2s ease-out'; // Smooth zoom transition
}

// Handle zoom with mouse wheel
function handleLibraryZoom(e) {
    // Only zoom when library is visible (not on landing page or reader)
    const landingPage = document.getElementById('landing-page');
    const readerPanel = document.getElementById('reader-panel');

    // Skip if landing page is visible or reader is open
    if (landingPage && landingPage.style.display !== 'none' && landingPage.style.opacity !== '0') {
        return;
    }
    if (readerPanel && readerPanel.classList.contains('open')) {
        return;
    }

    e.preventDefault();

    // Calculate zoom change
    const zoomSpeed = 0.03; // 3% per wheel tick for smoother control
    const delta = e.deltaY > 0 ? -zoomSpeed : zoomSpeed; // Scroll down = zoom out

    // Update zoom with limits
    const newZoom = state.zoom + delta;
    state.zoom = Math.max(0.7, Math.min(1.5, newZoom)); // Clamp between 70% and 150%

    // Apply zoom
    applyZoom();
}

// Attach zoom listener to canvas
if (DOM.canvas) {
    DOM.canvas.addEventListener('wheel', handleLibraryZoom, { passive: false });
}

/* =========================================
   Parallax Book Covers - Landing Page Background
   ========================================= */
const parallaxCoversContainer = document.getElementById('parallax-covers');

// Positions for book covers (spread across the viewport)
const COVER_POSITIONS = [
    // Hero section (0-100vh)
    { top: '10vh', left: '5%', rotation: -8 },
    { top: '15vh', right: '8%', rotation: 12 },
    { top: '30vh', left: '12%', rotation: 5 },
    { top: '35vh', right: '15%', rotation: -10 },
    { top: '55vh', left: '8%', rotation: 15 },
    { top: '60vh', right: '10%', rotation: -5 },
    { top: '75vh', left: '15%', rotation: 8 },
    { top: '80vh', right: '12%', rotation: -12 },

    // Introduction section (100vh-200vh)
    { top: '110vh', left: '10%', rotation: -15 },
    { top: '120vh', right: '8%', rotation: 10 },
    { top: '135vh', left: '12%', rotation: -8 },
    { top: '145vh', right: '15%', rotation: 12 },
    { top: '160vh', left: '8%', rotation: 5 },
    { top: '170vh', right: '10%', rotation: -10 },
    { top: '185vh', left: '15%', rotation: 15 }
];

function createParallaxCover(coverSrc, position, index) {
    const cover = document.createElement('div');
    cover.className = 'parallax-cover';
    cover.dataset.parallaxSpeed = (0.3 + Math.random() * 0.4).toFixed(2); // Random speed 0.3-0.7

    // Position
    if (position.left) cover.style.left = position.left;
    if (position.right) cover.style.right = position.right;
    cover.style.top = position.top;

    // Rotation
    cover.style.transform = `rotate(${position.rotation}deg)`;

    // Create image
    const img = document.createElement('img');
    img.src = coverSrc;
    img.alt = 'Book cover';
    img.loading = 'lazy';

    cover.appendChild(img);

    return cover;
}

function initParallaxCovers() {
    if (!parallaxCoversContainer || !BOOKS_DATA || BOOKS_DATA.length === 0) return;

    // Select random covers from BOOKS_DATA
    const shuffledBooks = [...BOOKS_DATA].sort(() => Math.random() - 0.5);

    COVER_POSITIONS.forEach((position, index) => {
        // Cycle through shuffled books
        const book = shuffledBooks[index % shuffledBooks.length];
        const cover = createParallaxCover(book.cover, position, index);

        parallaxCoversContainer.appendChild(cover);

        // Fade in with stagger
        setTimeout(() => {
            cover.classList.add('visible');
        }, 200 + index * 100);
    });
}

// Parallax scroll effect
function updateParallaxCovers() {
    const landingPage = document.getElementById('landing-page');
    if (!landingPage) return;

    const scrollY = landingPage.scrollTop;
    const covers = document.querySelectorAll('.parallax-cover');

    covers.forEach(cover => {
        const speed = parseFloat(cover.dataset.parallaxSpeed);
        const yOffset = scrollY * speed;
        const rotation = cover.style.transform.match(/rotate\(([^)]+)\)/)[1];

        cover.style.transform = `translateY(${yOffset}px) rotate(${rotation})`;
    });
}

// Initialize covers when page loads
if (parallaxCoversContainer) {
    initParallaxCovers();

    // Attach scroll listener
    const landingPage = document.getElementById('landing-page');
    if (landingPage) {
        landingPage.addEventListener('scroll', updateParallaxCovers);
    }
}

/* =========================================
   Book Hover Quotes - Floating Notes on Hover
   ========================================= */

// Cache for book quotes
const bookQuotesCache = new Map();

// Fetch random text from a book using Sefaria API
async function fetchRandomBookQuote(sefariaRef) {
    if (!sefariaRef) return null;

    try {
        // Get a random section
        const response = await fetch(`https://www.sefaria.org/api/texts/${encodeURIComponent(sefariaRef)}?context=0&pad=0`);
        if (!response.ok) throw new Error('API error');
        const data = await response.json();

        // Get Hebrew text
        let hebrewText = data.he;
        if (Array.isArray(hebrewText)) {
            // Pick a random one
            hebrewText = hebrewText[Math.floor(Math.random() * hebrewText.length)];
        }

        if (!hebrewText) return null;

        // Clean HTML tags
        hebrewText = hebrewText.replace(/<[^>]*>/g, '');

        // Limit length
        if (hebrewText.length > 80) {
            hebrewText = hebrewText.substring(0, 80) + '...';
        }

        return {
            text: hebrewText,
            source: data.heRef || sefariaRef
        };
    } catch (error) {
        console.log('Quote fetch error:', error);
        return null;
    }
}

// Create hover quote note for a book
function createBookHoverQuote(bookScene, book) {
    const quoteNote = document.createElement('div');
    quoteNote.className = 'book-hover-quote';

    // Initial content from book's own quotes if available
    const initialQuote = book.quotes && book.quotes[0]
        ? book.quotes[0]
        : 'לחץ לקריאה...';

    quoteNote.innerHTML = `
        <div class="quote-text">${initialQuote}</div>
        <div class="quote-source">${book.title}</div>
    `;

    // Add to book scene (not inside faces to avoid 3D issues)
    bookScene.appendChild(quoteNote);

    return quoteNote;
}

// Rotate quotes for a book
async function rotateBookQuote(quoteNote, book) {
    if (!book.quotes || book.quotes.length === 0) return;

    // Pick a random quote from the book's quotes
    const randomIndex = Math.floor(Math.random() * book.quotes.length);
    const quote = book.quotes[randomIndex];

    // Update with fade effect
    const textEl = quoteNote.querySelector('.quote-text');
    if (textEl) {
        quoteNote.style.opacity = '0';
        setTimeout(() => {
            textEl.textContent = quote;
            quoteNote.style.opacity = '';
        }, 150);
    }
}

// Initialize hover quotes for a book
function initBookHoverQuote(bookScene, book) {
    // Only for books with quotes
    if (!book.quotes || book.quotes.length === 0) return;

    // Create quote note
    const quoteNote = createBookHoverQuote(bookScene, book);

    // Set up rotation interval (every 10 seconds)
    let rotationInterval = null;

    bookScene.addEventListener('mouseenter', () => {
        // Start rotating quotes
        rotateBookQuote(quoteNote, book);
        rotationInterval = setInterval(() => {
            rotateBookQuote(quoteNote, book);
        }, 5000);
    });

    bookScene.addEventListener('mouseleave', () => {
        // Stop rotating
        if (rotationInterval) {
            clearInterval(rotationInterval);
            rotationInterval = null;
        }
    });
}

// Initialize for all books after they're rendered
function initAllBookHoverQuotes() {
    // Wait for books to be rendered
    setTimeout(() => {
        const bookScenes = document.querySelectorAll('.book-scene');
        bookScenes.forEach((scene) => {
            const bookId = scene.dataset.id;
            const book = BOOKS_DATA.find(b => b.id === parseInt(bookId));
            if (book) {
                initBookHoverQuote(scene, book);
            }
        });
    }, 2000); // Wait for books to load
}

// Start initialization
initAllBookHoverQuotes();

// ===== PAGE-FLIP READER FUNCTIONS =====

/**
 * Paginate content into pages based on actual rendered height
 * Creates pages that fill the available space
 * @param {string} htmlContent - The raw HTML content to paginate
 * @returns {Array} Array of page content strings
 */
function paginateContent(htmlContent) {
    // Create temporary container to parse HTML
    const temp = document.createElement('div');
    temp.innerHTML = htmlContent;

    // Handle plain text: smart parsing for headings and paragraphs
    if (temp.children.length === 0 && temp.textContent.trim().length > 0) {
        const rawText = temp.textContent;
        const lines = rawText.split('\n');
        let processedHTML = '';
        let currentParagraph = '';

        for (let i = 0; i < lines.length; i++) {
            let line = lines[i].trim();

            // Skip empty lines or page markers (digits only or ^L)
            if (!line || /^\d+$/.test(line) || line.includes('\f')) {
                if (currentParagraph) {
                    processedHTML += `<p>${currentParagraph}</p>`;
                    currentParagraph = '';
                }
                continue;
            }

            // Heuristic for Headings:
            // 1. Short line (< 50 chars)
            // 2. Starts with "Chapter", "פרק", or looks like a title
            // 3. Or just isolated short lines that aren't part of a sentence flow
            const isShort = line.length < 50;
            const isTitleKeyword = /^(פרק|חלק|chapter|part|\d+\.?\s)/i.test(line);

            if (isShort && (isTitleKeyword || !currentParagraph)) {
                // If we have a pending paragraph, close it
                if (currentParagraph) {
                    processedHTML += `<p>${currentParagraph}</p>`;
                    currentParagraph = '';
                }
                processedHTML += `<h2>${line}</h2>`;
            } else {
                // It's part of a paragraph
                if (currentParagraph) {
                    currentParagraph += ' ' + line;
                } else {
                    currentParagraph = line;
                }
            }
        }

        if (currentParagraph) {
            processedHTML += `<p>${currentParagraph}</p>`;
        }

        temp.innerHTML = processedHTML;
    }

    const pages = [];

    // Get all text nodes and block elements
    const allElements = [];

    function collectElements(parent) {
        const children = parent.children;
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            const tagName = child.tagName.toLowerCase();
            if (['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote'].includes(tagName)) {
                allElements.push(child);
            } else if (tagName === 'div') {
                collectElements(child);
            }
        }
    }

    collectElements(temp);
    console.log('Pagination: found', allElements.length, 'elements');

    if (allElements.length === 0) {
        // No block elements - split raw text by estimated line count
        const text = temp.textContent || '';
        const charsPerPage = 600; // More aggressive split
        const chunks = [];
        for (let i = 0; i < text.length; i += charsPerPage) {
            chunks.push(`<p>${text.slice(i, i + charsPerPage)}</p>`);
        }
        return chunks.length > 0 ? chunks : ['<p>אין תוכן להצגה</p>'];
    }

    // Get page container height for measurement
    const pageContainer = document.getElementById('page-right');
    const maxHeight = pageContainer ? pageContainer.clientHeight - 120 : 400; // minus padding (60px top + 60px bottom)

    // Create hidden measurement div
    const measureDiv = document.createElement('div');
    measureDiv.className = 'book-page'; // Inherit exact styles
    measureDiv.style.cssText = `
        position: absolute;
        visibility: hidden;
        height: auto; /* Allow height to grow for measurement */
        width: ${pageContainer ? pageContainer.clientWidth : 500}px;
        padding: 0 !important; /* Override class padding to measure content only */
        left: -9999px;
        top: -9999px;
    `;
    document.body.appendChild(measureDiv);

    let currentPage = '';
    let currentHeight = 0;

    allElements.forEach((child, index) => {
        const childHTML = child.outerHTML;

        // Measure this element
        measureDiv.innerHTML = childHTML;
        const childHeight = measureDiv.offsetHeight;

        // Check for Chapter Heading (H2) - Start new page
        const isChapterHeading = child.tagName === 'H2';

        if ((currentHeight + childHeight > maxHeight && currentPage) || (isChapterHeading && currentPage)) {
            // Start new page
            pages.push(currentPage);
            currentPage = childHTML;
            currentHeight = childHeight;
        } else {
            currentPage += childHTML;
            currentHeight += childHeight;
        }
    });

    // Add remaining content
    if (currentPage) {
        pages.push(currentPage);
    }

    // Cleanup
    document.body.removeChild(measureDiv);

    console.log('Pagination complete: created', pages.length, 'pages, maxHeight:', maxHeight);

    return pages.length > 0 ? pages : ['<p>אין תוכן להצגה</p>'];
}

/**
 * Display the current page spread (two pages)
 */
function displayCurrentPages() {
    const pageRight = document.getElementById('page-right');
    const pageLeft = document.getElementById('page-left');

    console.log('displayCurrentPages called, pageRight:', !!pageRight, 'pageLeft:', !!pageLeft);
    console.log('state.pages:', state.pages.length, 'currentIndex:', state.currentPageIndex);

    if (!pageRight || !pageLeft) {
        console.log('ERROR: page elements not found!');
        return;
    }

    // RTL: Right page is shown first (lower index)
    const rightPageIndex = state.currentPageIndex * 2;
    const leftPageIndex = rightPageIndex + 1;

    console.log('Displaying pages:', rightPageIndex, leftPageIndex);

    // Add flip animation
    pageRight.classList.add('flipping');
    pageLeft.classList.add('flipping');

    setTimeout(() => {
        // Update content
        const rightContent = state.pages[rightPageIndex] || '';
        const leftContent = state.pages[leftPageIndex] || '<p class="empty-page"></p>';

        console.log('Right page content length:', rightContent.length);
        console.log('Left page content length:', leftContent.length);

        pageRight.innerHTML = rightContent;
        pageLeft.innerHTML = leftContent;

        // Remove flip animation
        pageRight.classList.remove('flipping');
        pageLeft.classList.remove('flipping');
    }, 150);

    // Update navigation state
    updatePageIndicator();
    updateNavButtons();
}

/**
 * Update the page indicator text
 */
function updatePageIndicator() {
    const indicator = document.getElementById('page-indicator');
    if (!indicator) return;

    const currentSpread = state.currentPageIndex + 1;
    const totalSpreads = Math.ceil(state.pages.length / 2);

    indicator.textContent = `עמוד ${currentSpread} מתוך ${totalSpreads}`;
}

/**
 * Update navigation button states
 */
function updateNavButtons() {
    const prevBtn = document.getElementById('prev-page');
    const nextBtn = document.getElementById('next-page');

    if (prevBtn) {
        prevBtn.disabled = state.currentPageIndex <= 0;
    }

    if (nextBtn) {
        const totalSpreads = Math.ceil(state.pages.length / 2);
        nextBtn.disabled = state.currentPageIndex >= totalSpreads - 1;
    }
}

/**
 * Go to next page spread
 */
function nextPage() {
    console.log('nextPage called, pages:', state.pages.length, 'current:', state.currentPageIndex);
    const totalSpreads = Math.ceil(state.pages.length / 2);
    if (state.currentPageIndex < totalSpreads - 1) {
        state.currentPageIndex++;
        console.log('Moving to page:', state.currentPageIndex);
        displayCurrentPages();
        // Trigger Swipe Tutorial (if first time)
        if (!state.readerTutorialShown) {
            setTimeout(() => {
                playReaderSwipeTutorial();
            }, 1000);
        }

        // Check if we need to load more content (Trigger when 2 spreads from end)
        if (state.currentPageIndex >= totalSpreads - 2) {
            console.log('Near end of content, triggering loadMoreContent');
            loadMoreContent();
        }
    } else {
        console.log('Already at last page');
    }
}

/**
 * Go to previous page spread
 */
function prevPage() {
    console.log('prevPage called, current:', state.currentPageIndex);
    if (state.currentPageIndex > 0) {
        state.currentPageIndex--;
        console.log('Moving to page:', state.currentPageIndex);
        displayCurrentPages();
        // Trigger Swipe Tutorial (if first time)
        if (!state.readerTutorialShown) {
            setTimeout(() => {
                playReaderSwipeTutorial();
            }, 1000);
        }
    } else {
        console.log('Already at first page');
    }
}

/**
 * Initialize page navigation event listeners
 * Uses scroll/wheel for page navigation
 */
function initPageNavigation() {
    const readerContent = document.getElementById('reader-content');
    const readerPanel = document.getElementById('reader-panel');

    if (!readerPanel) return;

    console.log('initPageNavigation: Initializing page navigation (Swipe/Drag Mode)...');

    // Remove Visual Click Cues & Custom Cursor Logic
    const pageRight = document.getElementById('page-right');
    const pageLeft = document.getElementById('page-left');

    // We no longer overwrite cursor with 'grab'
    // The custom cursor will be visible naturally due to global 'cursor: none'

    if (pageRight) {
        pageRight.title = 'גרור לדפדוף';
        // Remove manual cursor override so custom cursor shows
        pageRight.style.cursor = '';
    }
    if (pageLeft) {
        pageLeft.title = 'גרור לדפדוף';
        pageLeft.style.cursor = '';
    }

    // Handle Wheel for hiding cover (Keep existing logic)
    function handleWheel(e) {
        if (!readerPanel.classList.contains('open')) return;

        const coverHidden = readerPanel.classList.contains('cover-hidden');
        if (!coverHidden && e.deltaY > 0) {
            readerPanel.classList.add('cover-hidden');
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        if (coverHidden && e.deltaY < 0 && state.currentPageIndex === 0) {
            readerPanel.classList.remove('cover-hidden');
            e.preventDefault();
            e.stopPropagation();
        }
    }
    readerPanel.addEventListener('wheel', handleWheel, { passive: false });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!readerPanel.classList.contains('open')) return;
        if (e.key === 'ArrowLeft') nextPage();
        else if (e.key === 'ArrowRight') prevPage();
        else if (e.key === 'ArrowDown' || e.key === 'PageDown') nextPage();
        else if (e.key === 'ArrowUp' || e.key === 'PageUp') prevPage();
    });

    // Unified Swipe/Drag Logic
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let currentX = 0;

    // Helper to handle swipe end
    const handleSwipeEnd = (deltaX, deltaY) => {
        const absX = Math.abs(deltaX);
        const absY = Math.abs(deltaY);
        const threshold = 50; // Minimum drag distance

        // Vertical Swipe (Dismiss Cover)
        if (absY > absX && absY > threshold) {
            const coverHidden = readerPanel.classList.contains('cover-hidden');
            if (!coverHidden) {
                readerPanel.classList.add('cover-hidden');
                return;
            }
            // Optional: Swipe up/down for pages?
            // if (deltaY < 0) nextPage(); else prevPage();
        }
        // Horizontal Swipe (Page Turn)
        else if (absX > threshold) {
            if (deltaX > 0) {
                // Drag Right -> Next Page (in RTL context)
                nextPage();
            } else {
                // Drag Left -> Prev Page
                prevPage();
            }
        }
    };

    // --- Mouse Events ---
    readerContent.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        readerContent.style.cursor = 'grabbing';

        // Update child cursors too
        if (pageRight) pageRight.style.cursor = 'grabbing';
        if (pageLeft) pageLeft.style.cursor = 'grabbing';
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault(); // Prevent text selection
        currentX = e.clientX;
    });

    window.addEventListener('mouseup', (e) => {
        if (!isDragging) return;
        isDragging = false;
        readerContent.style.cursor = 'default';
        if (pageRight) pageRight.style.cursor = 'grab';
        if (pageLeft) pageLeft.style.cursor = 'grab';

        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;
        handleSwipeEnd(deltaX, deltaY);
    });

    // --- Touch Events ---
    readerContent.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    }, { passive: true });

    readerContent.addEventListener('touchend', (e) => {
        if (!state.readerOpen) return;
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const deltaX = touchEndX - startX;
        const deltaY = touchEndY - startY;
        handleSwipeEnd(deltaX, deltaY);
    }, { passive: true });
}

// Reset cover visibility when closing reader
function resetReaderState() {
    const readerPanel = document.getElementById('reader-panel');
    if (readerPanel) {
        readerPanel.classList.remove('cover-hidden');
        readerPanel.classList.remove('open');
    }
    state.currentPageIndex = 0;
    state.pages = [];
    state.totalPages = 0;
    state.readerOpen = false;
}

// Initialize close button
function initCloseButton() {
    const closeBtn = document.getElementById('reader-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            resetReaderState();
        });
    }
}

// Initialize page navigation when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initPageNavigation();
    initCloseButton();
});

