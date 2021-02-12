var pinyin1 = document.getElementById("pinyin1");
var pinyin2 = document.getElementById("pinyin2");
var pinyin3 = document.getElementById("pinyin3");
var pinyin4 = document.getElementById("pinyin4");

var phraseChinese1 = document.getElementById("phraseChinese1");
var phraseChinese2 = document.getElementById("phraseChinese2");
var phraseChinese3 = document.getElementById("phraseChinese3");
var phraseChinese4 = document.getElementById("phraseChinese4");

var phraseEnglish = document.getElementById("phraseEnglish");
var phraseVietnamese = document.getElementById("phraseVietnamese")

var button = document.getElementById("button");
var random = Math.random();

// Arrays for pinyin and Chinese characters
var p1 = [
	"新 ",
	"恭",
	"大",
	"萬",
	"年",
	"身",
	"心",
	"恭"
];

var p2 = [
	"年",
	"喜",
	"吉",
	"事",
	"年",
	"體",
	"想",
	"賀"
];

var p3 = [
	"快",
	"發",
	"大",
	"如",
	"有",
	"健",
	"事",
	"新"
];

var p4 = [
	"樂",
	"財",
	"利",
	"意",
	"餘",
	"康",
	"成",
	"禧"
];

var phrasesC1 = [
	"CHÚC",
	"CUNG",
	"ĐẠI",
	"VẠN",
	"QUANH",
	"SỨC",
	"CẦU",
	"CUNG"
];

var phrasesC2 = [
	"MỪNG",
	"HỈ",
	"CÁT",
	"SỰ",
	"NĂM",
	"KHỎE",
	"ĐƯỢC",
	"CHÚC"
];

var phrasesC3 = [
	"NĂM",
	"PHÁT",
	"ĐẠI",
	"NHƯ",
	"DƯ",
	"DỒI",
	"ƯỚC",
	"TÂN"
];

var phrasesC4 = [
	"MỚI",
	"TÀI",
	"LỢI",
	"Ý",
	"DẢ",
	"DÀO",
	"THẤY",
	"XUÂN"
];

// English phrases
// Translations taken from here: http://www.travelsintranslation.com/2014/01/cantonese-chinese-new-year-phrases/
var phrasesE = [
	"(Happy new year)",
	"(Congratulations on your prosperity)",
	"(Great luck and prosperity)",
	"(May 10,000 things go according to your wishes)",
	"(Every year have more than you need)",
	"(Wishing you good health)",
	"(May all your heart's desires come true)",
	"(Congratulations in the new year)"
];
var phrasesV = [
    "新年おめでとうございます｡",
    "財源が広がりますように",
    "大吉大利｡",
    "すべてのことがじゅんちょうにすすみますように｡",
    "毎年余裕がある｡",
    "ごけんこうを｡",
    "絶対に何も｡",
    "きょうがしんねん｡"
]

// Sets text content as random phrase from arrays
pinyin1.textContent = p1[Math.floor(random * p1.length)];
pinyin2.textContent = p2[Math.floor(random * p2.length)];
pinyin3.textContent = p3[Math.floor(random * p3.length)];
pinyin4.textContent = p4[Math.floor(random * p4.length)];
phraseChinese1.textContent = phrasesC1[Math.floor(random * phrasesC1.length)];
phraseChinese2.textContent = phrasesC2[Math.floor(random * phrasesC2.length)];
phraseChinese3.textContent = phrasesC3[Math.floor(random * phrasesC3.length)];
phraseChinese4.textContent = phrasesC4[Math.floor(random * phrasesC4.length)];
phraseEnglish.textContent = phrasesE[Math.floor(random * phrasesE.length)];
phraseVietnamese.textContent = phrasesV[Math.floor(random * phrasesV.length)];

var onClick = function() {
	var random = Math.random();

	pinyin1.textContent = p1[Math.floor(random * p1.length)];
	pinyin2.textContent = p2[Math.floor(random * p2.length)];
	pinyin3.textContent = p3[Math.floor(random * p3.length)];
	pinyin4.textContent = p4[Math.floor(random * p4.length)];
	phraseChinese1.textContent = phrasesC1[Math.floor(random * phrasesC1.length)];
	phraseChinese2.textContent = phrasesC2[Math.floor(random * phrasesC2.length)];
	phraseChinese3.textContent = phrasesC3[Math.floor(random * phrasesC3.length)];
	phraseChinese4.textContent = phrasesC4[Math.floor(random * phrasesC4.length)];
	phraseEnglish.textContent = phrasesE[Math.floor(random * phrasesE.length)];
    phraseVietnamese.textContent = phrasesV[Math.floor(random * phrasesV.length)];
}

// Sets text content as random phrase when button is clicked
button.addEventListener("click", onClick);
let d = new Date()
document.getElementById("date").innerHTML = d