/**
 * Books Data Configuration
 * 
 * Edit this file to add, remove, or modify books in the library.
 * Each book object contains details like title, author, year, etc.
 * 
 * Fields:
 * - id: Unique number for the book.
 * - title: Book title.
 * - author: Author's name.
 * - year: Year of publication.
 * - publisher: Publisher name.
 * - cover: Image filename for the cover (e.g., "1.png").
 * - summary: Brief description of the book.
 * - quotes: Array of representative quotes.
 * - tags: Array of keywords/tags.
 * - category: 'prose', 'thought', or 'poetry'.
 * - color: Color theme class (bg-book-navy, bg-book-brown, etc.).
 * - textColor: Text color class (text-white, text-maroon).
 * - sefariaRef: (Optional) Reference string for Sefaria API.
 * - wikisourcePage: (Optional) Page title for WikiSource API.
 */

const BOOKS_DATA = [
    {
        id: 1,
        title: "פרסי ג'קסון וגנב הברק",
        author: "ריק ריירדן",
        year: 2005,
        publisher: "זמורה דביר ביתן",
        cover: "1.png",
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
        cover: "2.png",
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
        cover: "3.png",
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
        cover: "4.png",
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
        cover: "5.png",
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
        cover: "6.png",
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
        cover: "7.png",
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
        cover: "8.png",
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
        cover: "9.png",
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
        cover: "13.png",
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
        quotes: ["הדמה היא האם של הכל."],
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
