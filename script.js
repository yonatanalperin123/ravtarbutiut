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
        textColor: "text-white",
        bookContent: (typeof book1Content !== 'undefined' ? book1Content : '')
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
        textColor: "text-maroon",
        bookContent: `
            <h2>פרק א׳ - הילד שנשאר בחיים</h2>
            <p>אדון וגברת דרסלי, דיירי דרך פריווט מספר ארבע, ידעו לדווח בגאווה שהם נורמליים לגמרי - ותודה ששאלתם. לא יעלה על הדעת כי מכל האנשים בעולם דווקא הם יסתבכו בפרשיות מוזרות או מסתוריות, והרי הם פשוט לא סובלים שטויות מסוג זה.</p>
            <p>מר דרסלי היה מנכ״ל של חברה בשם גראנינגס לייצור מקדחות. הוא היה איש גדל־ממדים, בשרני, וכמעט נטול צוואר - למרות שדווקא היה לו שפם שמן למדי. גברת דרסלי היתה רזה ובלונדינית, ולה היה צוואר ארוך פי־שניים מהאורך המקובל, מה שהיה שימושי מאוד, כי רוב זמנה עבר עליה בהצצה מעל גדרות כדי לרגל אחר השכנים שלה. לדרסלים היה תינוק ששמו דאדלי, ובעיניהם לא היה בעולם ילד מוצלח ממנו.</p>
            <p>דבר לא היה חסר לדרסלים. אולם היה להם סוד, והם חיו בפחד שמישהו יגלה אותו. הם חשבו שחייהם לא יהיו חיים ברגע שמישהו ישמע על משפחת פוטר. גברת פוטר היתה אחותה של גברת דרסלי, אבל עברו שנים רבות מאז נפגשו לאחרונה.</p>
            <p>כשדרסלי ואשתו התעוררו בבוקר יום שלישי האפלולי והאפור שבו מתחיל סיפורנו, לא היה זכר בשמים המעוננים לכך שדברים מוזרים ומסתוריים עומדים להתרחש ברחבי המדינה. מר דרסלי פיזם לעצמו בשעה שבחר עניבה משעממת במיוחד ללבוש לעבודה, וגברת דרסלי ריכלה בעליצות וניסתה להכריח את דאדלי המצווח להיכנס לכיסא התינוקות שלו.</p>
            <p>שניהם לא הבחינו בינשוף הזהוב שחלף בתעופה על פני חלונם.</p>
            <p>בשעה שמונה וחצי מר דרסלי נטל את התיק שלו, הדביק נשיקה חפוזה על לחייה של גברת דרסלי וניסה לנשק לפרידה גם את דאדלי, אבל לא הצליח, מפני שדאדלי היה עסוק בלצרוח ולהעיף את ארוחת הבוקר שלו לכל הכיוונים. "איזה מתוק," התמוגג מר דרסלי ויצא מהבית.</p>
            <p>רק בקרן הרחוב הוא הבחין בסימן הראשון למשהו מוזר - חתולה שעיינה במפה. לרגע אחד מר דרסלי לא עיכל את מה שעיניו הראו לו - אך מייד הוא הסב את ראשו להביט שנית. בפינת דרך פריווט אכן עמדה חתולה מנומרת, אבל שום זכר למפה לא נראה.</p>
            <p>מר דרסלי התנער קלות וחדל לחשוב על החתולה. בדרכו העירה הוא לא חשב על דבר מלבד על משלוח גדול של מקדחות שקיווה לקבל מאוחר יותר באותו יום. אבל בכניסה לעיר המקדחות פרחו ממוחו. בזמן שעמד בפקקים של הבוקר, הוא לא היה יכול שלא להבחין במספר הגדול של אנשים שהיו לבושים באופן מוזר ביותר. אנשים עטויי גלימות.</p>

            <h2>פרק ב׳ - הזכוכית הנעלמת</h2>
            <p>כמעט עשר שנים עברו מהיום שבו התעוררו הדרסלים לגלות את אחיינם הפעוט על סף ביתם, אבל דרך פריווט כמעט שלא השתנתה. השמש זרחה על אותם הגנים המטופחים, והאירה את לוחית המספר ארבע על דלת הכניסה של בית משפחת דרסלי.</p>
            <p>אולם הארי פוטר עדיין היה שם. הוא אומנם ישן ברגע זה, אבל לא לאורך זמן. דודתו פטומה כבר היתה ערה, וקולה המצווה היה הצליל הראשון ששמע אותו יום.</p>
            <p>"קום! צא מהמיטה! מייד!"</p>
            <p>הארי התעורר בבהלה. דודתו דפקה שוב על הדלת. הארי שמע אותה הולכת לכיוון המטבח, ואז שמע את הרעש שמשמיע מחבת הטיגון כששמים אותו על האש. הוא התגלגל אל גבו וניסה להיזכר בחלום שחלם. זה היה חלום טוב. היה בו אופנוע מעופף.</p>
            <p>יום־ההולדת של דאדלי - איך היה יכול לשכוח? הארי קם באיטיות מהמיטה והחל לחפש את הגרביים שלו. הוא מצא זוג מתחת למיטה שלו, ואחרי ששלף מתוך אחד מהם עכביש הוא גרב אותם. הארי היה רגיל לעכבישים, מפני שהארון שמתחת לגרם המדרגות היה מלא בהם, ושם הוא ישן.</p>
        `
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

    // Collision Config - Books 10% larger (Simulating camera zoom)
    const BOOK_W = 304; // 276 * 1.1
    const BOOK_H = 455; // 414 * 1.1
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

    // === BOOKMARK TABS (Paper Strips) ===
    // Create bookmark tabs for books with quotes
    if (book.quotes && book.quotes.length > 0) {
        const bookmarkColors = ['pink', 'yellow', 'green', 'blue', 'orange'];
        const colorVars = {
            'pink': 'rgba(255, 182, 193, 0.9)',
            'yellow': 'rgba(255, 255, 150, 0.9)',
            'green': 'rgba(180, 255, 180, 0.9)',
            'blue': 'rgba(173, 216, 255, 0.9)',
            'orange': 'rgba(255, 200, 150, 0.9)'
        };

        const tabsContainer = document.createElement('div');
        tabsContainer.className = 'bookmark-tabs-container';

        // Create a tab for each quote (max 3)
        const maxTabs = Math.min(book.quotes.length, 3);

        // Shuffle or Random start for variety so not all first tabs are pink
        const startColorIndex = Math.floor(Math.random() * bookmarkColors.length);

        for (let i = 0; i < maxTabs; i++) {
            const quote = book.quotes[i];
            // Use random start index + i to cycle through colors
            const colorName = bookmarkColors[(startColorIndex + i) % bookmarkColors.length];
            const colorVar = colorVars[colorName];

            const tab = document.createElement('div');
            tab.className = `bookmark-tab color-${colorName}`;
            tab.style.setProperty('--bookmark-color', colorVar);

            // Create the popup
            const popup = document.createElement('div');
            popup.className = 'bookmark-quote-popup';
            popup.style.setProperty('--bookmark-color', colorVar);
            popup.innerHTML = `
                <span class="quote-mark">"</span>
                <div class="quote-text">${quote}</div>
                <div class="quote-source">${book.author || book.title}</div>
            `;

            tab.appendChild(popup);

            // Prevent tab hover from triggering book click
            tab.addEventListener('click', (e) => {
                e.stopPropagation();
            });

            tabsContainer.appendChild(tab);
        }

        scene.appendChild(tabsContainer);
    }
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
    } else {
        // Hide navigation for no-source books
        if (DOM.readerNav) {
            DOM.readerNav.classList.add('hidden');
        }

        // No external source - show summary
        DOM.readerSpinner.classList.add('hidden');

        const summaryContent = `
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

        // === PAGE-FLIP: Paginate and display content ===
        state.rawContent = summaryContent;
        state.pages = paginateContent(summaryContent);
        state.currentPageIndex = 0;
        state.totalPages = state.pages.length;
        displayCurrentPages();
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

// Event Listeners for Legacy Overlay Sidebar (null checks for new layout)
if (DOM.navTrigger) {
    DOM.navTrigger.addEventListener('mouseenter', () => {
        openSidebar();
    });
}

// Auto-Close on Mouse Leave (Container includes Trigger + Panel)
if (DOM.navDrawerContainer) {
    DOM.navDrawerContainer.addEventListener('mouseleave', () => {
        closeSidebar();
    });
}

if (DOM.navTrigger) {
    DOM.navTrigger.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent immediate closing
        openSidebar();
    });
}

// Close on Click Outside
window.addEventListener('click', (e) => {
    if (state.sidebarOpen && DOM.sidebarPanel) {
        // If click is NOT inside sidebar and NOT inside trigger
        if (!DOM.sidebarPanel.contains(e.target) && (!DOM.navTrigger || !DOM.navTrigger.contains(e.target))) {
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
if (DOM.landingPage) {
    // 1. Title Shrink on Scroll
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
    DOM.enterLibrary.addEventListener('click', () => {
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
    });
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
   Floating Quote Notes - Landing Page
   ========================================= */
const floatingQuotesContainer = document.getElementById('floating-quotes');

// Hebrew texts to fetch quotes from (using Sefaria API)
const QUOTE_SOURCES = [
    { ref: 'Pirkei Avot 1:1', name: 'פרקי אבות א׳:א׳' },
    { ref: 'Pirkei Avot 2:5', name: 'פרקי אבות ב׳:ה׳' },
    { ref: 'Ecclesiastes 1:2', name: 'קהלת א׳:ב׳' },
    { ref: 'Ecclesiastes 3:1', name: 'קהלת ג׳:א׳' },
    { ref: 'Psalms 23:1', name: 'תהלים כ״ג:א׳' },
    { ref: 'Psalms 121:1', name: 'תהלים קכ״א:א׳' },
    { ref: 'Proverbs 1:7', name: 'משלי א׳:ז׳' },
    { ref: 'Genesis 1:1', name: 'בראשית א׳:א׳' }
];

// Fallback quotes if API fails
const FALLBACK_QUOTES = [
    { text: 'עשה לך רב, וקנה לך חבר', source: 'פרקי אבות א׳:ו׳' },
    { text: 'אם אין אני לי מי לי, וכשאני לעצמי מה אני', source: 'פרקי אבות א׳:י״ד' },
    { text: 'הכל צפוי והרשות נתונה', source: 'פרקי אבות ג׳:ט״ו' },
    { text: 'לא עליך המלאכה לגמור', source: 'פרקי אבות ב׳:ט״ז' },
    { text: 'הבל הבלים הכל הבל', source: 'קהלת א׳:ב׳' },
    { text: 'ה׳ רועי לא אחסר', source: 'תהלים כ״ג:א׳' },
    { text: 'והיו הדברים האלה אשר אנכי מצוך היום', source: 'דברים ו׳:ו׳' },
    { text: 'בראשית ברא אלהים את השמים ואת הארץ', source: 'בראשית א׳:א׳' },
    { text: 'שמע ישראל ה׳ אלהינו ה׳ אחד', source: 'דברים ו׳:ד׳' },
    { text: 'ואהבת לרעך כמוך', source: 'ויקרא י״ט:י״ח' },
    { text: 'צדק צדק תרדוף', source: 'דברים ט״ז:כ׳' },
    { text: 'דע מאין באת ולאן אתה הולך', source: 'פרקי אבות ג׳:א׳' },
    { text: 'איזהו חכם הלומד מכל אדם', source: 'פרקי אבות ד׳:א׳' },
    { text: 'הסתכל בשלושה דברים', source: 'פרקי אבות ג׳:א׳' },
    { text: 'אל תסתכל בקנקן אלא במה שיש בו', source: 'פרקי אבות ד׳:כ׳' },
    { text: 'יפה שעה אחת בתשובה ומעשים טובים', source: 'פרקי אבות ד׳:י״ז' }
];

// Positions grid covering the entire screen (avoiding center)
const NOTE_POSITIONS = [
    // Top row
    { top: '3vh', left: '2%' },
    { top: '5vh', left: '18%' },
    { top: '8vh', right: '20%' },
    { top: '4vh', right: '3%' },
    // Upper middle
    { top: '20vh', left: '5%' },
    { top: '25vh', right: '8%' },
    { top: '22vh', left: '25%' },
    { top: '18vh', right: '25%' },
    // Middle edges (avoiding center title area)
    { top: '40vh', left: '1%' },
    { top: '45vh', right: '1%' },
    { top: '50vh', left: '8%' },
    { top: '48vh', right: '10%' },
    // Lower middle
    { top: '60vh', left: '3%' },
    { top: '62vh', right: '5%' },
    { top: '58vh', left: '22%' },
    { top: '65vh', right: '22%' },
    // Bottom row (Hero)
    { top: '78vh', left: '5%' },
    { top: '80vh', left: '25%' },
    { top: '75vh', right: '25%' },
    { top: '82vh', right: '5%' },

    // --- Introduction Section (100vh - 200vh) ---
    // Reduced count, slightly closer to text
    { top: '110vh', left: '6%' },
    { top: '130vh', right: '5%' },
    { top: '150vh', left: '8%' },
    { top: '170vh', right: '7%' },
    { top: '185vh', left: '5%' }
];

// Create a floating quote note element
function createQuoteNote(quote, index) {
    const note = document.createElement('div');
    note.className = 'floating-quote-note';

    // Position from grid
    const pos = NOTE_POSITIONS[index]; // Use exact index since we iterate positions
    if (pos.left) note.style.left = pos.left;
    if (pos.right) note.style.right = pos.right;
    note.style.top = pos.top;

    // Random rotation (-6 to +6 degrees)
    const rotation = (Math.random() - 0.5) * 12;
    note.style.setProperty('--rotation', `${rotation}deg`);

    // Random animation delay
    note.style.animationDelay = `${Math.random() * 10}s`;

    // Vary sizes slightly
    const sizeVariation = 0.8 + Math.random() * 0.4; // 0.8 to 1.2
    note.style.transform = `scale(${sizeVariation})`;

    note.innerHTML = `
        <div class="quote-text">${quote.text}</div>
        <div class="quote-source">${quote.source}</div>
    `;

    return note;
}

// Fetch quote from Sefaria API
async function fetchSefariaQuote(ref) {
    try {
        const response = await fetch(`https://www.sefaria.org/api/texts/${encodeURIComponent(ref)}?context=0&pad=0`);
        if (!response.ok) throw new Error('API error');
        const data = await response.json();

        // Get Hebrew text
        let hebrewText = data.he;
        if (Array.isArray(hebrewText)) {
            hebrewText = hebrewText[0];
        }

        // Clean HTML tags and limit length
        hebrewText = hebrewText.replace(/<[^>]*>/g, '');
        if (hebrewText.length > 100) {
            hebrewText = hebrewText.substring(0, 100) + '...';
        }

        return hebrewText;
    } catch (error) {
        console.log('Sefaria API error:', error);
        return null;
    }
}

// Initialize floating quotes
async function initFloatingQuotes() {
    if (!floatingQuotesContainer) return;

    // Use more quotes to fill the screen
    const quotes = FALLBACK_QUOTES;

    // Iterate over POSITIONS instead of quotes to ensure we fill all spots
    NOTE_POSITIONS.forEach((pos, index) => {
        // Cycle through quotes if we have more positions than quotes
        const quote = quotes[index % quotes.length];

        const note = createQuoteNote(quote, index);
        floatingQuotesContainer.appendChild(note);

        // Fade in with staggered delay
        setTimeout(() => {
            note.classList.add('visible');
        }, 300 + index * 150);
    });
}

// Start loading quotes when page loads
initFloatingQuotes();

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

    console.log('initPageNavigation: Initializing page navigation...');

    // Track scroll debounce
    let scrollDebounce = false;

    // Helper function for wheel handling
    function handleWheel(e) {
        // Only handle when reader is open
        if (!readerPanel.classList.contains('open')) {
            return;
        }

        console.log('Wheel event on reader panel. DeltaY:', e.deltaY);

        // Prevent default scrolling
        e.preventDefault();
        e.stopPropagation();

        // Debounce to prevent rapid page flipping
        if (scrollDebounce) {
            return;
        }
        scrollDebounce = true;
        setTimeout(() => scrollDebounce = false, 400);

        // Check if cover is still visible
        const coverHidden = readerPanel.classList.contains('cover-hidden');

        if (!coverHidden) {
            // First scroll: hide cover
            console.log('Hiding cover');
            readerPanel.classList.add('cover-hidden');
            return;
        }

        // Subsequent scrolls: change pages
        // Scroll down = advance in book, scroll up = go back
        if (e.deltaY > 0) {
            // Scroll down = next page (advance)
            nextPage();
        } else if (e.deltaY < 0) {
            // Scroll up = previous page (go back)
            prevPage();
        }
    }

    // Listen on the entire reader panel
    // Use capture: true to ensure we get the event before children consume it if necessary,
    // though bubbling usually works unless stopped.
    readerPanel.addEventListener('wheel', handleWheel, { passive: false });
    console.log('initPageNavigation: Event listener attached to reader-panel');

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!readerPanel.classList.contains('open')) return;

        if (e.key === 'ArrowLeft') {
            nextPage(); // RTL: left arrow = next
        } else if (e.key === 'ArrowRight') {
            prevPage(); // RTL: right arrow = prev
        } else if (e.key === 'ArrowDown' || e.key === 'PageDown') {
            nextPage();
        } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
            prevPage();
        }
    });

    // Touch swipe support for mobile
    let touchStartX = 0;
    let touchStartY = 0;

    readerContent.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    readerContent.addEventListener('touchend', (e) => {
        if (!state.readerOpen) return;

        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;

        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;

        // Vertical swipe
        if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 50) {
            const coverHidden = readerPanel.classList.contains('cover-hidden');

            if (!coverHidden) {
                readerPanel.classList.add('cover-hidden');
                return;
            }

            if (deltaY < 0) {
                nextPage(); // Swipe up = next
            } else {
                prevPage(); // Swipe down = prev
            }
        }
        // Horizontal swipe (RTL)
        else if (Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                nextPage(); // Swipe right = next (RTL)
            } else {
                prevPage(); // Swipe left = prev (RTL)
            }
        }
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

