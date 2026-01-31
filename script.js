// Data - Overriding covers with the 2 patterns
const PATTERNS = ["cover_pattern_1.png", "cover_pattern_2.png"];

const BOOKS_DATA = [
    {
        id: 1,
        title: "פרסי ג'קסון וגנב הברק",
        author: "ריק ריירדן",
        year: 2005,
        publisher: "זמורה דביר ביתן",
        cover: "newcover (1).png",
        summary: "נער שמגלה כי הוא חצי-אל יוצא למסע מסוכן ברחבי ארצות הברית כדי למנוע מלחמה בין האלים באולימפוס.",
        quotes: ["מצחיק איך בני אדם מסוגלים לעוות את התמונה.", "רק בשלב מאוחר בהרבה הערכתי את החוכמה."],
        tags: ["פנטזיה", "פרוזה", "נוער", "הרפתקאות"],
        category: "prose",
        color: "bg-book-navy",
        textColor: "text-white"
    },
    {
        id: 2,
        title: "תיאום כוונות",
        author: "הרב חיים סבתו",
        year: 1999,
        publisher: "ידיעות ספרים",
        cover: "newcover (2).png",
        summary: "סיפורו המטלטל של צוות טנק במלחמת יום הכיפורים, המשלב זכרונות קרב עם חשבון נפש אמוני.",
        quotes: ["אני אוסף את כל הכוחות ומרכז אותם בכוונת.", "עכשיו אנחנו רק מחפשים מטרות ויורים."],
        tags: ["פרוזה", "דוקומנטרי", "רומן", "מלחמה", "אמונה"],
        category: "prose",
        color: "bg-book-brown",
        textColor: "text-white"
    },
    {
        id: 3,
        title: "אולי בשבת יזרקו סוכריות",
        author: "אורי אורבך",
        year: 1996,
        publisher: "בית אל",
        cover: "newcover (3).png",
        summary: "קובץ שירים וסיפורים מלאי הומור וחן על עולמם של ילדים במשפחה הדתית-לאומית.",
        quotes: ["כשהוא רואה ילדים שמחים זה מביא לו נחמה.", "כל פעם שאני אומר לו 'תודה' אני חושב על הבן שלו."],
        tags: ["ילדים", "מאויר", "הומור", "משפחה"],
        category: "prose",
        color: "bg-book-stone",
        textColor: "text-maroon"
    },
    {
        id: 4,
        title: "אורות",
        author: "הראי״ה קוק",
        year: 1920,
        publisher: "מוסד הרב קוק",
        cover: "newcover (4).png",
        summary: "ספר היסוד של המחשבה הציונית-דתית, העוסק בתחיית האומה בארצה ובקדושת הארץ.",
        quotes: ["עלה למעלה עלה, כי כח עז לך.", "אל תכחש בם, פן יכחשו לך."],
        tags: ["יהדות", "מחשבה", "ציונות", "קבלה"],
        category: "thought",
        color: "bg-book-green",
        textColor: "text-white",
        sefariaRef: "Orot, Lights from Darkness, Land of Israel.1"
    },
    {
        id: 5,
        title: "אורות התשובה",
        author: "הראי״ה קוק",
        year: 1925,
        publisher: "מוסד הרב קוק",
        cover: "newcover (5).png",
        summary: "חיבור פסיכולוגי-רוחני המציג את התשובה כתנועה של שיבה אל המקור ואל האושר הפנימי.",
        quotes: ["הרצון הטוב הוא הכל, וכל הכשרונות אינם אלא מילואיו."],
        tags: ["יהדות", "מחשבה", "נפש", "תשובה"],
        category: "thought",
        color: "bg-book-navy",
        textColor: "text-white",
        sefariaRef: "Orot HaTeshuvah, Foreword"
    },
    {
        id: 6,
        title: "איך לבנות חיים",
        author: "הדר גולדין",
        year: 2015,
        publisher: "קורן מגיד",
        cover: "newcover (6).png",
        summary: "עיונים במסילת ישרים מתוך מחברותיו של הדר גולדין ז״ל. מדריך מעשי לחיים של משמעות.",
        quotes: ["בחיים יש לך שתי אפשרויות: להתעסק בעצמך או לעשות דברים גדולים."],
        tags: ["יהדות", "מחשבה", "תיקון מידות", "השראה"],
        category: "thought",
        color: "bg-book-stone",
        textColor: "text-maroon"
    },
    {
        id: 7,
        title: "איש האמונה הבודד",
        author: "הרב יוסף דוב סולובייצ׳יק",
        year: 1965,
        publisher: "מוסד הרב קוק",
        cover: "newcover (7).png",
        summary: "מסה פילוסופית על הדילמה של האדם המודרני, הקרוע בין הרצון לשלוט לצורך בכניעה.",
        quotes: ["בכל אחד מאתנו נמצאים שני אנשים, איש היצירה ואיש הענווה."],
        tags: ["יהדות", "מחשבה", "פילוסופיה", "אקזיסטנציאליזם"],
        category: "thought",
        color: "bg-book-green",
        textColor: "text-white"
    },
    {
        id: 8,
        title: "בבא",
        author: "שי צ׳רקה",
        year: 1999,
        publisher: "מודן",
        cover: "newcover (8).png",
        summary: "קומיקס איקוני על תקופת המשנה. הומור ויזואלי מבריק המנגיש סוגיות תלמודיות.",
        quotes: ["לפחות פרסום הנס יותר גדול ככה!"],
        tags: ["ילדים", "מאויר", "קומיקס", "הומור"],
        category: "prose",
        color: "bg-book-brown",
        textColor: "text-white"
    },
    {
        id: 9,
        title: "דתי נורמלי",
        author: "אורי אורבך",
        year: 2018,
        publisher: "בית אל",
        cover: "newcover (9).png",
        summary: "מאמרים סאטיריים ושנונים המתבוננים בחיוך ובביקורת חדה על החברה הדתית-לאומית.",
        quotes: ["הדרת? בטח, הדרתי במשרד. נהדר!"],
        tags: ["עיון", "פוליטיקה", "סאטירה", "חברה"],
        category: "prose",
        color: "bg-book-navy",
        textColor: "text-white"
    },
    {
        id: 10,
        title: "הארי פוטר ואבן החכמים",
        author: "ג׳.ק. רולינג",
        year: 2001,
        publisher: "ידיעות ספרים",
        cover: "10.png",
        summary: "ילד יתום מגלה שהוא קוסם ויוצא להרפתקה בבית הספר הוגוורטס.",
        quotes: ["היינו יכולים ליהרג, או גרוע מזה - להיות מסולקים מבית-הספר."],
        tags: ["נוער", "פרוזה", "פנטזיה", "קלאסיקה"],
        category: "prose",
        color: "bg-book-stone",
        textColor: "text-maroon"
    },
    {
        id: 11,
        title: "חסידים צוחקים מזה",
        author: "הרב מנחם פרומן",
        year: 2016,
        publisher: "דברי שיר",
        cover: "11.png",
        summary: "לקט תורות וסיפורים המשלבים הומור חסידי עם עומק רוחני ושמחה.",
        quotes: ["חסידים צוחקים מזה, תן חיוך - זו התשובה."],
        tags: ["יהדות", "מחשבה", "חסידות", "שמחה"],
        category: "thought",
        color: "bg-book-brown",
        textColor: "text-white"
    },
    {
        id: 12,
        title: "כל שושנה היא אי",
        author: "זלדה",
        year: 2017,
        publisher: "קיבוץ מאוחד",
        cover: "12.png",
        summary: "שירה המבטאת עולם פנימי עשיר של אמונה פשוטה, התבוננות בטבע ורגישות אנושית.",
        quotes: ["הלא קרקע הים מרכבה לאלוהים."],
        tags: ["שירה", "יהדות", "רגש", "טבע"],
        category: "poetry",
        color: "bg-book-green",
        textColor: "text-white"
    },
    {
        id: 13,
        title: "לא בשם האל",
        author: "הרב יונתן זקס",
        year: 2016,
        publisher: "קורן",
        cover: "newcover (13).png",
        summary: "התמודדות עם אלימות בשם הדת וקריאה לאחריות מוסרית ושלום בין-דתי.",
        quotes: ["כשהדת הופכת אנשים לרוצחים, אלוהים בוכה."],
        tags: ["עיון", "יהדות", "מחשבה", "מוסר"],
        category: "thought",
        color: "bg-book-navy",
        textColor: "text-white"
    },
    {
        id: 14,
        title: "סיפורי מעשיות",
        author: "רבי נחמן מברסלב",
        year: 1816,
        publisher: "ידיעות ספרים",
        cover: "14.png",
        summary: "סיפורים אלגוריים ומסתוריים המקפלים בתוכם סודות קבליים ותובנות עמוקות.",
        quotes: ["ולא התחלתי עדיין לחיות כלל, ואף על פי כן אני זקן מאד."],
        tags: ["עיון", "יהדות", "מחשבה", "קבלה", "חסידות"],
        category: "thought",
        color: "bg-book-stone",
        textColor: "text-maroon",
        wikisourcePage: "סיפורי_מעשיות"
    },
    {
        id: 15,
        title: "תנ\"ך",
        author: "",
        year: 0,
        publisher: "קורן",
        cover: "15.png",
        summary: "ספר הספרים - התורה, הנביאים והכתובים.",
        quotes: ["בראשית ברא אלהים את השמים ואת הארץ."],
        tags: ["יהדות", "תנ\"ך", "קלאסיקה"],
        category: "thought",
        color: "bg-book-navy",
        textColor: "text-white",
        sefariaRef: "Genesis.1"
    },
    {
        id: 16,
        title: "חזרה בלי תשובה",
        author: "חיים באר",
        year: 2019,
        publisher: "עם עובד",
        cover: "16.png",
        summary: "רומן על חיים של זיכרון, אהבה ואובדן.",
        quotes: ["הזיכרון הוא הבית שלנו."],
        tags: ["פרוזה", "רומן", "ישראלי"],
        category: "prose",
        color: "bg-book-green",
        textColor: "text-white"
    },
    {
        id: 17,
        title: "חרשתא",
        author: "יצחק שמי",
        year: 1929,
        publisher: "עם עובד",
        cover: "17.png",
        summary: "נובלה על חיי הכפר הערבי בארץ ישראל.",
        quotes: ["האדמה היא האם של הכל."],
        tags: ["פרוזה", "קלאסיקה", "ארץ ישראל"],
        category: "prose",
        color: "bg-book-brown",
        textColor: "text-white"
    },
    {
        id: 18,
        title: "לוחות ושברי לוחות",
        author: "הרב שג\"ר",
        year: 2013,
        publisher: "ידיעות ספרים",
        cover: "18.png",
        summary: "עיונים בתורה ובמחשבת ישראל בעידן הפוסטמודרני.",
        quotes: ["השבר הוא חלק מהשלמות."],
        tags: ["יהדות", "מחשבה", "פילוסופיה"],
        category: "thought",
        color: "bg-book-stone",
        textColor: "text-maroon"
    },
    {
        id: 19,
        title: "והארץ ניתנה לבני אדם",
        author: "אברהם יהושע השל",
        year: 1965,
        publisher: "ידיעות ספרים",
        cover: "19.png",
        summary: "על האדם, האלוהים והעולם במחשבה היהודית.",
        quotes: ["האדם הוא שליח של האלוהים."],
        tags: ["יהדות", "מחשבה", "פילוסופיה"],
        category: "thought",
        color: "bg-book-navy",
        textColor: "text-white"
    },
    {
        id: 20,
        title: "פניני הלכה",
        author: "הרב אליעזר מלמד",
        year: 2000,
        publisher: "הר ברכה",
        cover: "20.png",
        summary: "סדרת ספרי הלכה מקיפה לדור החדש.",
        quotes: ["ההלכה היא דרך חיים."],
        tags: ["יהדות", "הלכה", "מדריך"],
        category: "thought",
        color: "bg-book-green",
        textColor: "text-white"
    },
    {
        id: 21,
        title: "תמול שלשום",
        author: "ש\"י עגנון",
        year: 1945,
        publisher: "שוקן",
        cover: "21.png",
        summary: "רומן על עלייתו של יצחק קומר לארץ ישראל.",
        quotes: ["כל אדם הוא עולם בפני עצמו."],
        tags: ["פרוזה", "קלאסיקה", "ארץ ישראל"],
        category: "prose",
        color: "bg-book-brown",
        textColor: "text-white"
    },
    {
        id: 22,
        title: "הנסיך הקטן",
        author: "אנטואן דה סנט אקזופרי",
        year: 1943,
        publisher: "עם עובד",
        cover: "22.png",
        summary: "סיפור פילוסופי על מהות החיים והאהבה.",
        quotes: ["הדברים החשובים באמת נראים רק בלב."],
        tags: ["פרוזה", "פילוסופיה", "קלאסיקה"],
        category: "prose",
        color: "bg-book-stone",
        textColor: "text-maroon"
    },
    {
        id: 23,
        title: "התפילה",
        author: "הרב יוסף דוב סולובייצ'יק",
        year: 2003,
        publisher: "קורן",
        cover: "23.png",
        summary: "הגות עמוקה על משמעות התפילה.",
        quotes: ["התפילה היא שיחת הנפש עם בוראה."],
        tags: ["יהדות", "מחשבה", "תפילה"],
        category: "thought",
        color: "bg-book-navy",
        textColor: "text-white"
    },
    {
        id: 24,
        title: "שירת כל חי",
        author: "הרב נתן שטרנהרץ",
        year: 1870,
        publisher: "ברסלב",
        cover: "24.png",
        summary: "ליקוט תפילות ושירים מבית מדרשו של רבי נחמן.",
        quotes: ["השירה היא נשמת העולם."],
        tags: ["יהדות", "שירה", "חסידות"],
        category: "poetry",
        color: "bg-book-green",
        textColor: "text-white"
    },
    {
        id: 25,
        title: "מה את מבקשת",
        author: "לאה אילון",
        year: 2018,
        publisher: "כנרת",
        cover: "25.png",
        summary: "רומן על נשים, אמונה וזהות.",
        quotes: ["החיפוש הוא הדרך."],
        tags: ["פרוזה", "רומן", "נשים"],
        category: "prose",
        color: "bg-book-brown",
        textColor: "text-white"
    },
    {
        id: 26,
        title: "מדריך הטרמפיסט לגלקסיה",
        author: "דאגלס אדמס",
        year: 1979,
        publisher: "כנרת",
        cover: "26.png",
        summary: "קומדיית מדע בדיוני קלאסית על החיים, היקום והכל.",
        quotes: ["התשובה לחיים, ליקום ולכל דבר היא 42."],
        tags: ["מדע בדיוני", "הומור", "קלאסיקה"],
        category: "prose",
        color: "bg-book-stone",
        textColor: "text-maroon"
    }
];

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
    // Search UI
    searchInput: document.getElementById('search-input'),
    resetBtn: document.getElementById('reset-filter'),
    tagCloud: document.getElementById('tag-cloud'),
    tagCloudWrapper: document.getElementById('tag-cloud-wrapper'),
    // Sidebar UI
    navDrawerContainer: document.getElementById('nav-drawer-container'),
    sidebarPanel: document.getElementById('sidebar-panel'),
    navTrigger: document.getElementById('nav-trigger'),
    navDot: document.getElementById('nav-dot'),
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
    // About Panel UI
    aboutPanel: document.getElementById('about-panel'),
    aboutClose: document.getElementById('about-close'),
    aboutLink: document.getElementById('about-link')
};

let state = {
    activeCategory: 'all',
    activeBook: null,
    pan: { x: 0, y: 0 },
    isDragging: false,
    wasDragging: false, // Track if we actually moved during drag
    dragStart: { x: 0, y: 0 },
    initialPan: { x: 0, y: 0 },
    activeNodes: new Map(), // key: index, value: DOM Element
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
    // Infinite Scroll State
    currentRef: null,
    nextRef: null,
    isLoadingMore: false,
    // Navigation State
    bookIndex: null, // Cached book index from Sefaria API
    // About Panel State
    aboutOpen: false
};

// 1. Scattering Layout Logic
const TABLE_SIZE = 2500; // Larger size to accommodate more books
const SCATTER_DATA = [];

// Allowed rotations: 0, 15, -15 degrees
const ROTATIONS = [0, 15, -15];

function generateScatteredLayout() {
    // Reset
    SCATTER_DATA.length = 0;

    // Collision Config - Tighter spacing so books can touch
    const BOOK_W = 240;
    const BOOK_H = 360;
    // Adjusted radius - 15% less dense than before
    const RADIUS = Math.sqrt(BOOK_W * BOOK_W + BOOK_H * BOOK_H) / 2 - 10; // Slightly larger spacing
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

        while (!placed && attempts < 100) {
            attempts++;

            const padding = 200; // Smaller padding for edge books
            const x = Math.random() * (TABLE_SIZE - padding * 2) + padding;
            const y = Math.random() * (TABLE_SIZE - padding * 2) + padding;

            // Distance Check - tighter collision, sometimes allowing overlap
            let collision = false;
            // Use random threshold to sometimes allow very close placement
            const minDistThreshold = RADIUS * (0.8 + Math.random() * 0.4); // 80%-120% of radius

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
                    x,
                    y,
                    rotation: getUniqueRotation(x, y), // Ensures different rotation from neighbors
                    bookIndex: index // Reference to book data
                });
                placed = true;
            }
        }

        // Fallback placement - place anyway even if overlapping
        if (!placed) {
            const fallbackX = Math.random() * TABLE_SIZE;
            const fallbackY = Math.random() * TABLE_SIZE;
            SCATTER_DATA.push({
                x: fallbackX,
                y: fallbackY,
                rotation: getUniqueRotation(fallbackX, fallbackY),
                bookIndex: index
            });
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

    // Interaction - only open if not dragging
    scene.addEventListener('click', (e) => {
        // Prevent opening if we just finished dragging
        if (state.wasDragging) {
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

// 2. Drag to Pan Logic
const DRAG_THRESHOLD = 5; // pixels

DOM.canvas.addEventListener('mousedown', (e) => {
    state.isDragging = true;
    state.wasDragging = false; // Reset drag detection
    state.dragStart = { x: e.clientX, y: e.clientY };
    state.initialPan = { ...state.pan };
    DOM.canvas.style.cursor = 'grabbing';
});

window.addEventListener('mousemove', (e) => {
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
    state.isDragging = false;
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
        <span class="text-[#3E2723]/30">|</span>
        <span>${book.publisher}</span>
        <span class="text-[#3E2723]/30">|</span>
        <span>${book.year}</span>
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
        const result = await loadBookContent(book.sefariaRef);
        DOM.readerSpinner.classList.add('hidden');
        DOM.readerText.innerHTML = result.htmlContent;

        // Store nextRef for infinite scroll
        state.nextRef = result.nextRef;

        // Check if it was an error message
        if (result.htmlContent.includes('error-message')) {
            DOM.readerError.classList.remove('hidden');
        } else {
            DOM.readerError.classList.add('hidden');
            // Setup infinite scroll observer
            setupInfiniteScrollObserver();
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

        // Fallback to WikiSource (no infinite scroll)
        const content = await fetchBookContent(book.wikisourcePage);
        DOM.readerSpinner.classList.add('hidden');

        if (content) {
            DOM.readerText.innerHTML = content;
            DOM.readerError.classList.add('hidden');
        } else {
            DOM.readerError.classList.remove('hidden');
        }
    } else {
        // Hide navigation for no-source books
        if (DOM.readerNav) {
            DOM.readerNav.classList.add('hidden');
        }

        // No external source - show summary instead
        DOM.readerSpinner.classList.add('hidden');
        DOM.readerText.innerHTML = `
            <div style="padding: 20px 0;">
                <h2 style="font-family: var(--font-heading); font-size: 1.5rem; margin-bottom: 16px;">תקציר</h2>
                <p>${book.summary}</p>
                ${book.quotes && book.quotes.length > 0 ? `
                    <h3 style="font-family: var(--font-heading); font-size: 1.2rem; margin-top: 32px; margin-bottom: 12px;">ציטוטים</h3>
                    <blockquote style="border-right: 3px solid rgba(62, 39, 35, 0.2); padding-right: 16px; font-style: italic;">
                        ${book.quotes.map(q => `<p>"${q}"</p>`).join('')}
                    </blockquote>
                ` : ''}
            </div>
        `;
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
        const result = await loadBookContent(state.nextRef);

        // Create a chapter divider
        const divider = document.createElement('div');
        divider.className = 'chapter-divider';
        divider.innerHTML = `<span class="chapter-divider-text">${result.heRef || state.nextRef}</span>`;

        // Append divider and new content
        DOM.readerText.appendChild(divider);

        const contentFragment = document.createElement('div');
        contentFragment.innerHTML = result.htmlContent;
        while (contentFragment.firstChild) {
            DOM.readerText.appendChild(contentFragment.firstChild);
        }

        // Update state
        state.currentRef = state.nextRef;
        state.nextRef = result.nextRef;

    } catch (error) {
        console.error('Failed to load more content:', error);
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
    DOM.sidebarPanel.classList.remove('translate-x-0');
    DOM.sidebarPanel.classList.add('translate-x-full');
}

// Event Listeners for Sidebar
DOM.navTrigger.addEventListener('mouseenter', () => {
    openSidebar();
});

// Auto-Close on Mouse Leave (Container includes Trigger + Panel)
DOM.navDrawerContainer.addEventListener('mouseleave', () => {
    closeSidebar();
});

DOM.navTrigger.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent immediate closing
    openSidebar();
});

// Close on Click Outside
window.addEventListener('click', (e) => {
    if (state.sidebarOpen) {
        // If click is NOT inside sidebar and NOT inside trigger
        if (!DOM.sidebarPanel.contains(e.target) && !DOM.navTrigger.contains(e.target)) {
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
    }, 4800);

    setTimeout(() => {
        tutorialOverlay.classList.add('hidden');
        tutorialCursor.classList.remove('active');
        tutorialCursor.style.transition = '';
    }, 5500);
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

// Preloading state
let imagesLoaded = false;
let minimumTimeElapsed = false;
const MINIMUM_SPLASH_TIME = 1500; // 1.5 seconds minimum

// Start preloading immediately
const preloadStart = Date.now();
preloadAllImages().then(() => {
    imagesLoaded = true;
    updateSplashState();
});

// Minimum time timer
setTimeout(() => {
    minimumTimeElapsed = true;
    updateSplashState();
}, MINIMUM_SPLASH_TIME);

// Update splash screen based on loading state
function updateSplashState() {
    if (imagesLoaded && minimumTimeElapsed) {
        // Ready - auto dismiss splash and show intro
        dismissSplash();
    }
}

function dismissSplash() {
    // Don't dismiss until everything is ready
    if (!imagesLoaded || !minimumTimeElapsed) return;
    if (!splashScreen) return;

    // Hide the main canvas until intro scene is dismissed
    if (DOM.canvas) {
        DOM.canvas.style.visibility = 'hidden';
        DOM.canvas.style.opacity = '0';
        DOM.canvas.style.transition = 'opacity 0.5s ease-out';
    }

    // 1. Show intro scene underneath splash (it will be revealed when splash fades)
    showIntroScene();

    // 2. Fade out splash screen
    setTimeout(() => {
        splashScreen.classList.add('fade-out');
    }, 200);

    // 3. Remove splash from DOM after transition completes
    setTimeout(() => {
        splashScreen.style.display = 'none';
    }, 1200);
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

initWorld();
