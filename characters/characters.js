var characters = [
    {"character":"也","definition":"also, too","pinyin":["yě"],"decomposition":"⿻？乚","radical":"乚","matches":[null,null,[1]]},
    {"character":"享","definition":"to share; to enjoy; to benefit from","pinyin":["xiǎng"],"decomposition":"⿳亠口子","etymology":{"type":"ideographic","hint":"Children 子 living and eating 口 in the house 亠"},"radical":"亠","matches":[[0],[0],[1],[1],[1],[2],[2],[2]]},
    {"character":"亮","definition":"bright, brilliant, radiant, light","pinyin":["liàng"],"decomposition":"⿳亠口⿱冖几","etymology":{"type":"pictographic","hint":"A lit oil lamp"},"radical":"亠","matches":[[0],[0],[1],[1],[1],[2,0],[2,0],[2,1],[2,1]]},
    {"character":"仁","definition":"benevolent, humane, kind","pinyin":["rén"],"decomposition":"⿰亻二","etymology":{"type":"ideographic","hint":"A caring relationship between two 二 people 亻"},"radical":"亻","matches":[[0],[0],[1],[1]]},
    {"character":"他","definition":"other, another; he, she, it","pinyin":["tā"],"decomposition":"⿰亻也","etymology":{"type":"ideographic","hint":"An additional, \"also\" 也  person 亻"},"radical":"亻","matches":[[0],[0],[1],[1],[1]]},
    {"character":"仰","definition":"raise the head to look; look up to, rely on, admire","pinyin":["yǎng"],"decomposition":"⿰亻卬","etymology":{"type":"ideographic","hint":"To exalt 卬 a person 亻"},"radical":"亻","matches":[[0],[0],[1],[1],[1],[1]]},
    {"character":"休","definition":"to rest; to stop; to retire","pinyin":["xiū"],"decomposition":"⿰亻木","etymology":{"type":"ideographic","hint":"A person 亻 leaning against a tree 木"},"radical":"亻","matches":[[0],[0],[1],[1],[1],[1]]},
    {"character":"伟","definition":"great, imposing; extraordinary","pinyin":["wěi"],"decomposition":"⿰亻韦","etymology":{"type":"pictophonetic","phonetic":"韦","semantic":"亻","hint":"person"},"radical":"亻","matches":[[0],[0],[1],[1],[1],[1]]},
    {"character":"伴","definition":"companion, comrade, partner; to accompany","pinyin":["bàn"],"decomposition":"⿰亻半","etymology":{"type":"pictophonetic","phonetic":"半","semantic":"亻","hint":"person"},"radical":"亻","matches":[[0],[0],[1],[1],[1],[1],[1]]},
    {"character":"似","definition":"resembling, similar to; as if, to seem","pinyin":["shì"],"decomposition":"⿰亻以","etymology":{"type":"ideographic","hint":"One person 亻 resembles another"},"radical":"亻","matches":[[0],[0],[1],[1],[1],[1]]},
    {"character":"佑","definition":"to help; to protect; to bless","pinyin":["yòu"],"decomposition":"⿰亻右","etymology":{"type":"pictophonetic","phonetic":"右","semantic":"亻","hint":"person"},"radical":"亻","matches":[[0],[0],[1],[1],[1],[1],[1]]},
    {"character":"你","definition":"you, second person pronoun","pinyin":["nǐ"],"decomposition":"⿰亻尔","etymology":{"type":"ideographic","hint":"Pronoun 尔 for a person 亻"},"radical":"亻","matches":[[0],[0],[1],[1],[1],[1],[1]]},
    {"character":"佳","definition":"good, auspicious; beautiful; delightful","pinyin":["jiā"],"decomposition":"⿰亻圭","etymology":{"type":"pictophonetic","phonetic":"圭","semantic":"亻","hint":"person"},"radical":"亻","matches":[[0],[0],[1],[1],[1],[1],[1],[1]]},
    {"character":"俊","definition":"talented, capable; handsome","pinyin":["jùn"],"decomposition":"⿰亻夋","etymology":{"type":"pictophonetic","phonetic":"夋","semantic":"亻","hint":"person"},"radical":"亻","matches":[[0],[0],[1],[1],[1],[1],[1],[1],[1]]},
    {"character":"俐","definition":"smooth; active; clever, sharp","pinyin":["lì"],"decomposition":"⿰亻利","etymology":{"type":"pictophonetic","phonetic":"利","semantic":"亻","hint":"person"},"radical":"亻","matches":[[0],[0],[1],[1],[1],[1],[1],[1],[1]]},
    {"character":"信","definition":"to trust, to believe; letter, sign","pinyin":["xìn"],"decomposition":"⿰亻言","radical":"亻","matches":[[0],[0],[1],[1],[1],[1],[1],[1],[1]]},
    {"character":"冰","definition":"ice; ice-cold","pinyin":["bīng"],"decomposition":"⿰冫水","etymology":{"type":"ideographic","hint":"Ice-cold冫 water 水"},"radical":"冫","matches":[[0],[0],[1],[1],[1],[1]]},
    {"character":"剋","definition":"to subdue, to restrain, to overcome; used in transliterations","pinyin":["kè"],"decomposition":"⿰克刂","etymology":{"type":"ideographic","hint":"A weapon 刂 used to subdue 十 a beast 兄"},"radical":"刂","matches":[[0],[0],[0],[0],[0],[0],[0],[1],[1]]},
    {"character":"剌","definition":"to slash, to cut in two; to contradict","pinyin":["lá"],"decomposition":"⿰束刂","etymology":{"type":"pictophonetic","phonetic":"束","semantic":"刂","hint":"knife"},"radical":"刂","matches":[[0],[0],[0],[0],[0],[0],[0],[1],[1]]},
    {"character":"劃","definition":"to row or paddle a boat; to scratch; to plan; profitable","pinyin":["huà"],"decomposition":"⿰畫刂","etymology":{"type":"pictophonetic","phonetic":"畫","semantic":"刂","hint":"knife"},"radical":"刂","matches":[[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[1],[1]]},
    {"character":"劇","definition":"theatrical plays, opera, drama; severe, acute","pinyin":["jù"],"decomposition":"⿰豦刂","etymology":{"type":"pictophonetic","phonetic":"豦","semantic":"刂","hint":"knife"},"radical":"刂","matches":[[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[1],[1]]},
    {"character":"助","definition":"to help, to aid, to assist","pinyin":["zhù"],"decomposition":"⿰且力","etymology":{"type":"pictophonetic","semantic":"力","hint":"strength","phonetic":"且"},"radical":"力","matches":[[0],[0],[0],[0],[0],[1],[1]]},
    {"character":"努","definition":"to exert, to strive, to make an effort; to pout","pinyin":["nǔ"],"decomposition":"⿱奴力","etymology":{"type":"pictophonetic","phonetic":"奴","semantic":"力","hint":"strength"},"radical":"力","matches":[[0],[0],[0],[0],[0],[1],[1]]},
    {"character":"勇","definition":"brave, courageous, fierce","pinyin":["yǒng"],"decomposition":"⿱甬力","etymology":{"type":"pictophonetic","phonetic":"甬","semantic":"力","hint":"strength"},"radical":"力","matches":[[0],[0],[0],[0],[0],[0],[0],[1],[1]]},
    {"character":"吵","definition":"to argue, to dispute; to annoy, to disturb","pinyin":["chǎo"],"decomposition":"⿰口少","etymology":{"type":"pictophonetic","phonetic":"少","semantic":"口","hint":"mouth"},"radical":"口","matches":[[0],[0],[0],[1],[1],[1],[1]]},
    {"character":"問","definition":"to ask about, to inquire after","pinyin":["wèn"],"decomposition":"⿵門口","etymology":{"type":"pictophonetic","phonetic":"門","semantic":"口","hint":"mouth"},"radical":"口","matches":[[0],[0],[0],[0],[0],[0],[0],[0],[1],[1],[1]]},
    {"character":"因","definition":"cause, reason; by; because","pinyin":["yīn"],"decomposition":"⿴囗大","radical":"囗","matches":[[0],[0],[1],[1],[1],[0]]},
    {"character":"坐","definition":"seat; to sit; to ride, to travel by","pinyin":["zuò"],"decomposition":"⿻从土","etymology":{"type":"ideographic","hint":"Two people 从 sitting on the ground 土"},"radical":"土","matches":[[0],[0],[0],[0],[1],[1],[1]]},
    {"character":"夜","definition":"night, dark; under cover of night","pinyin":["yè"],"decomposition":"⿱亠⿰亻夕","etymology":{"type":"ideographic","hint":"A person 亻 sneaking by under cover 亠 of night 夕"},"radical":"夕","matches":[[0],[0],[1,0],[1,0],[1,1],[1,1],[1,1],null]},
    {"character":"夢","definition":"dream","pinyin":["mèng"],"decomposition":"⿱艹⿱罒⿱冖夕","etymology":{"type":"ideographic","hint":"Two eyes 艹 shut 罒 at night 夕"},"radical":"夕","matches":[[0],[0],[0],[0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,1,0],[1,1,0],[1,1,1],[1,1,1],[1,1,1]]},
    {"character":"大","definition":"big, great, vast, high, deep","pinyin":["dà"],"decomposition":"⿻一人","etymology":{"type":"ideographic","hint":"A man 人 with outstretched arms"},"radical":"大","matches":[[0],[1],[1]]},
    {"character":"天","definition":"sky, heaven; god, celestial","pinyin":["tiān"],"decomposition":"⿱一大","etymology":{"type":"ideographic","hint":"The heavens 一 above a man 大"},"radical":"大","matches":[[0],[1],[1],[1]]},
    {"character":"失","definition":"to lose; to make a mistake, to neglect","pinyin":["shī"],"decomposition":"⿻丿夫","etymology":{"type":"ideographic","hint":"Something 丿 falling from a hand 夫"},"radical":"大","matches":[[0],[1],[1],[1],[1]]},
    {"character":"媽","definition":"mother, mama","pinyin":["mā"],"decomposition":"⿰女马","etymology":{"type":"pictophonetic","phonetic":"马","semantic":"女","hint":"woman"},"radical":"女","matches":[[0],[0],[0],[1],[1],[1]]},
    {"character":"妹","definition":"younger sister","pinyin":["mèi"],"decomposition":"⿰女未","etymology":{"type":"pictophonetic","phonetic":"未","semantic":"女","hint":"woman"},"radical":"女","matches":[[0],[0],[0],[1],[1],[1],[1],[1]]},
    {"character":"姐","definition":"elder sister; miss, young lady","pinyin":["jiě"],"decomposition":"⿰女且","etymology":{"type":"pictophonetic","phonetic":"且","semantic":"女","hint":"woman"},"radical":"女","matches":[[0],[0],[0],[1],[1],[1],[1],[1]]},
    {"character":"子","definition":"son, child; seed, egg; fruit; small thing","pinyin":["zi"],"decomposition":"⿻了一","etymology":{"type":"pictographic","hint":"A child in a wrap, with outstretched arms but bundled legs"},"radical":"子","matches":[[0],[0],[1]]},
    {"character":"字","definition":"character, letter, symbol, word","pinyin":["zì"],"decomposition":"⿱宀子","etymology":{"type":"ideographic","hint":"A child 子 in a house 宀; 子 also provides the pronunciation"},"radical":"子","matches":[[0],[0],[0],[1],[1],[1]]},
    {"character":"安","definition":"peaceful, tranquil, quiet","pinyin":["ān"],"decomposition":"⿱宀女","etymology":{"type":"ideographic","hint":"A woman 女 safe in a house 宀"},"radical":"宀","matches":[[0],[0],[0],[1],[1],[1]]},
    {"character":"寸","definition":"inch; small, tiny","pinyin":["cùn"],"decomposition":"？","etymology":{"type":"ideographic","hint":"A hand with a dot indicating where the pulse can be felt, about an inch up the wrist"},"radical":"寸","matches":[null,null,null]},
    {"character":"小","definition":"small, tiny, insignificant","pinyin":["xiǎo"],"decomposition":"⿻亅八","etymology":{"type":"ideographic","hint":"Dividing 八 by a line 亅"},"radical":"小","matches":[[0],[1],[1]]},
    {"character":"山","definition":"mountain, hill, peak","pinyin":["shān"],"decomposition":"⿶凵丨","etymology":{"type":"pictographic","hint":"Three mountain peaks"},"radical":"山","matches":[[1],[0],[0]]},
    {"character":"川","definition":"stream, river","pinyin":["chuān"],"decomposition":"⿲丿丨丨","etymology":{"type":"ideographic","hint":"A river's flow; compare 巛"},"radical":"川","matches":[[0],[1],[2]]},
    {"character":"平","definition":"flat, level, even; peaceful","pinyin":["píng"],"decomposition":"⿻干丷","etymology":{"type":"pictographic","hint":"A leveling scale"},"radical":"广","matches":[[0],[1],[1],[0],[0]]},
    {"character":"心","definition":"heart; mind; soul","pinyin":["xīn"],"decomposition":"？","etymology":{"type":"pictographic","hint":"A heart"},"radical":"心","matches":[null,null,null,null]},
    {"character":"手","definition":"hand","pinyin":["shǒu"],"decomposition":"？","etymology":{"type":"pictographic","hint":"A hand with the fingers splayed"},"radical":"手","matches":[null,null,null,null]},
    {"character":"文","definition":"culture, literature, writing","pinyin":["wén"],"decomposition":"⿱亠乂","etymology":{"type":"pictographic","hint":"A tattooed chest, representing writing"},"radical":"文","matches":[[0],[0],[1],[1]]},
    {"character":"日","definition":"sun; day; daytime","pinyin":["rì"],"decomposition":"⿴口一","etymology":{"type":"pictographic","hint":"The sun"},"radical":"日","matches":[[0],[0],[1],[0]]},
    {"character":"月","definition":"moon; month","pinyin":["yuè"],"decomposition":"⿵冂二","etymology":{"type":"pictographic","hint":"A crescent moon"},"radical":"月","matches":[[0],[0],[1],[1]]},
    {"character":"正","definition":"straight, right, proper, correct, just, true","pinyin":["zhèng"],"decomposition":"⿱一止","etymology":{"type":"ideographic","hint":"A foot 止 stopping in the right place 一"},"radical":"止","matches":[[0],[1],[1],[1],[1]]},
    {"character":"水","definition":"water, liquid, lotion, juice","pinyin":["shuǐ"],"decomposition":"⿻亅？","etymology":{"type":"pictographic","hint":"A river running between two banks; compare 川"},"radical":"水","matches":[[0],null,null,null]},
    {"character":"火","definition": "fire, flame; to burn; anger, rage", "pinyin": ["huǒ"], "decomposition": "⿻丷人", "etymology": { "type": "pictographic", "hint": "Flames" }, "radical": "火", "matches": [[0], [0], [1], [1]] },
    {"character":"汁","definition":"juice, liquor, fluid; sap; gravy, sauce","pinyin":["zhī"],"decomposition":"⿰氵十","etymology":{"type":"pictophonetic","phonetic":"十","semantic":"氵","hint":"water"},"radical":"氵","matches":[[0],[0],[0],[1],[1]]},
    {"character":"爸","definition":"father, papa","pinyin":["bà"],"decomposition":"⿱父巴","etymology":{"type":"pictophonetic","phonetic":"巴","semantic":"父","hint":"father"},"radical":"父","matches":[[0],[0],[0],[0],[1],[1],[1],[1]]},
    {"character":"眠","definition":"sleep, shut-eye, hibernatation","pinyin":["mián"],"decomposition":"⿰目民","etymology":{"type":"pictophonetic","phonetic":"民","semantic":"目","hint":"eye"},"radical":"目","matches":[[0],[0],[0],[0],[0],[1],[1],[1],[1],[1]]},
    {"character":"衣","definition":"cloth; clothes, apparel; dress, coat","pinyin":["yī"],"decomposition":"⿱亠？","etymology":{"type":"pictographic","hint":"A woman's dress"},"radical":"衣","matches":[[0],[0],null,null,null,null]},
    {"character":"見","definition":"to see, to observe, to meet, to appear","pinyin":["jiàn"],"decomposition":"⿱目儿","etymology":{"type":"ideographic","hint":"A man 儿 with the eye 目 emphasized"},"radical":"見","matches":[[0],[0],[0],[0],[0],[1],[1]]},
    {"character":"言","definition":"words, speech; to speak, to say","pinyin":["yán"],"decomposition":"⿱亠⿱二口","etymology":{"type":"ideographic","hint":"A tongue sticking out of a mouth 口"},"radical":"言","matches":[[0],[0],[1,0],[1,0],[1,1],[1,1],[1,1]]},
    {"character":"走","definition":"to walk, to run, to flee","pinyin":["zǒu"],"decomposition":"⿱土止","etymology":{"type":"ideographic","hint":"Someone 土 stepping with their foot 止"},"radical":"走","matches":[[0],[0],[0],[1],[1],[1],[1]]},
    {"character":"雨","definition":"rain","pinyin":["yǔ"],"decomposition":"⿻帀？","etymology":{"type":"pictographic","hint":"Rain drops falling from a cloud 帀"},"radical":"雨","matches":[[0],[0],[0],[0],null,null,null,null]},
    {"character":"風","definition":"wind; air; customs, manners; news","pinyin":["fēng"],"decomposition":"⿵几虫","radical":"風","matches":[[0],[0],[1],[1],[1],[1],[1],[1],[1]]},
    {"character":"一","definition":"one; a, an; alone","pinyin":["yī"],"decomposition":"？","etymology":{"type":"ideographic","hint":"Represents heaven (天), earth (旦), or the number 1"},"radical":"一","matches":[null]},
    {"character":"三","definition":"three","pinyin":["sān"],"decomposition":"⿱一二","etymology":{"type":"ideographic","hint":"Three  parallel lines; compare 一 (one) and 二 (two)"},"radical":"一","matches":[[0],[1],[1]]},
    {"character":"九","definition":"nine","pinyin":["jiǔ"],"decomposition":"⿻丿乙","etymology":{"type":"pictographic","hint":"An elbow"},"radical":"乙","matches":[[0],[1]]},
    {"character":"二","definition":"two; twice","pinyin":["èr"],"decomposition":"⿱一一","etymology":{"type":"ideographic","hint":"Two  parallel lines; compare 一 (one) and 三 (three)"},"radical":"二","matches":[[0],[1]]},
    {"character":"五","definition":"five; surname","pinyin":["wǔ"],"decomposition":"⿴二？","etymology":{"type":"ideographic","hint":"Five elements (the cross with the extra stroke) between heaven 一 and earth 一 "},"radical":"二","matches":[[0],null,null,[0]]},
    {"character":"八","definition":"eight; all around, all sides","pinyin":["bā"],"decomposition":"？","etymology":{"type":"ideographic","hint":"Two bent lines meaning \"to divide\""},"radical":"八","matches":[null,null]},
    {"character":"十","definition":"ten, tenth; complete; perfect","pinyin":["shí"],"decomposition":"⿻一丨","radical":"十","matches":[[0],[1]]},
    {"character":"四","definition":"four","pinyin":["sì"],"decomposition":"⿴囗儿","etymology":{"type":"ideographic","hint":"A child 儿 in a room with four walls 囗"},"radical":"囗","matches":[[0],[0],[1],[1],[0]]},
    {"character":"六","definition":"six","pinyin":["liù"],"decomposition":"⿱亠八","radical":"八","matches":[[0],[0],[1],[1]]},
    {"character":"七","definition":"seven","pinyin":["qī"],"decomposition":"⿻一乚","radical":"一","matches":[[0],[1]]},
    {"character":"年","definition":"year; anniversary; a person's age","pinyin":["nián"],"decomposition":"⿻干？","etymology":{"type":"ideographic","hint":"A man 干 carrying grain, representing the annual harvest"},"radical":"干","matches":[null,[0],null,null,[0],[0]]},
    {"character":"東","definition":"east, eastern, eastward","pinyin":["dōng"],"decomposition":"⿻木日","etymology":{"type":"ideographic","hint":"The sun 日 rising behind a tree 木; compare 西"},"radical":"木","matches":[[0],[1],[1],[1],[1],[0],[0],[0]]},
    {"character":"西","definition":"west, western, westward","pinyin":["xī"],"decomposition":"⿻兀囗","etymology":{"type":"pictographic","hint":"A bird settling into its nest, representing sunset; compare 東"},"radical":"西","matches":[[0],[1],[1],[0],[0],[1]]},
    {"character":"東","definition":"east, eastern, eastward","pinyin":["dōng"],"decomposition":"⿻木日","etymology":{"type":"ideographic","hint":"The sun 日 rising behind a tree 木; compare 西"},"radical":"木","matches":[[0],[1],[1],[1],[1],[0],[0],[0]]},
    {"character":"南","definition":"south; southern; southward","pinyin":["nán"],"decomposition":"⿱十⿵冂⿱丷干","etymology":{"type":"pictographic","hint":"A musical bell"},"radical":"十","matches":[[0],[0],[1,0],[1,0],[1,1,0],[1,1,0],[1,1,1],[1,1,1],[1,1,1]]},
    {"character":"卞","definition":"to be impatient; hasty, excitable","pinyin":["biàn"],"decomposition":"⿱亠卜","radical":"卜","matches":[[0],[0],[1],[1]]},
    {"character":"上","definition":"above, on top, superior; to go up; to attend; previous","pinyin":["shàng"],"decomposition":"⿱⺊一","etymology":{"type":"ideographic","hint":"One stroke on top of another; compare 下 (below)"},"radical":"一","matches":[[0],[0],[1]]},
    {"character":"不","definition":"no, not, un-; negative prefix","pinyin":["bù"],"decomposition":"⿱一？","etymology":{"type":"ideographic","hint":"A bird flying toward the sky 一"},"radical":"一","matches":[[0],null,null,null]},
    {"character":"好","definition":"good, excellent, fine; proper, suitable; well","pinyin":["hǎo"],"decomposition":"⿰女子","etymology":{"type":"ideographic","hint":"A woman 女 with a son 子"},"radical":"女","matches":[[0],[0],[0],[1],[1],[1]]},
    {"character":"女","definition":"woman, girl; female","pinyin":["nǚ"],"decomposition":"？","etymology":{"type":"pictographic","hint":"A woman turned to the side"},"radical":"女","matches":[null,null,null]},
    {"character":"男","definition":"man, boy; male; baron; surname","pinyin":["nán"],"decomposition":"⿱田力","etymology":{"type":"ideographic","hint":"Someone who can work 力 the farm 田"},"radical":"田","matches":[[0],[0],[0],[0],[0],[1],[1]]},
    {"character":"田","definition":"field, farm, arable land; cultivated","pinyin":["tián"],"decomposition":"⿵冂土","etymology":{"type":"pictographic","hint":"The plots of a rice paddy"},"radical":"田","matches":[[0],[0],[1],[1],[1]]},
    {"character":"太","definition":"very, too much; big; extreme","pinyin":["tài"],"decomposition":"⿵大丶","etymology":{"type":"ideographic","hint":"A giant 大 with a normal-sized man 丶 for scale"},"radical":"大","matches":[[0],[0],[0],[1]]},
    {"character":"平","definition":"flat, level, even; peaceful","pinyin":["píng"],"decomposition":"⿻干丷","etymology":{"type":"pictographic","hint":"A leveling scale"},"radical":"广","matches":[[0],[1],[1],[0],[0]]},
    {"character":"愛","definition":"to love, to like, to be fond of; love, affection","pinyin":["ài"],"decomposition":"⿱⿱爫⿱冖心夂","etymology":{"type":"ideographic","hint":"To bring a lover 心 into one's house 冖"},"radical":"心","matches":[[0,0],[0,0],[0,0],[0,0],[0,1,0],[0,1,0],[0,1,1],[0,1,1],[0,1,1],[0,1,1],[1],[1],[1]]},
    {"character":"木","definition":"tree; wood, lumber; wooden","pinyin":["mù"],"decomposition":"⿻十八","etymology":{"type":"pictographic","hint":"A tree"},"radical":"木","matches":[[0],[0],[1],[1]]},
    {"character":"星","definition":"star, planet; a point of light","pinyin":["xīng"],"decomposition":"⿱日生","etymology":{"type":"pictophonetic","phonetic":"生","semantic":"日","hint":"sun"},"radical":"日","matches":[[0],[0],[0],[0],[1],[1],[1],[1],[1]]},
    {"character":"歨","definition":"Old variant of 步","pinyin":["bù"],"decomposition":"⿱止止","etymology":{"type":"ideographic","hint":"Putting one foot 止 in front of the other"},"radical":"止","matches":[[0],[0],[0],[0],[1],[1],[1],[1]]},
    {"character":"永","definition":"long; perpetual, eternal; forever","pinyin":["yǒng"],"decomposition":"⿱？水","radical":"水","matches":[null,[1],[1],[1],[1]]},
    {"character":"火","definition":"fire, flame; to burn; anger, rage","pinyin":["huǒ"],"decomposition":"⿻丷人","etymology":{"type":"pictographic","hint":"Flames"},"radical":"火","matches":[[0],[0],[1],[1]]},
    {"character":"家","definition":"house, home, residence; family","pinyin":["jiā"],"decomposition":"⿱宀豕","etymology":{"type":"pictophonetic","phonetic":"豕","semantic":"宀","hint":"roof"},"radical":"宀","matches":[[0],[0],[0],[1],[1],[1],[1],[1],[1],[1]]},
    {"character":"海","definition":"sea, ocean; maritime","pinyin":["hǎi"],"decomposition":"⿰氵每","etymology":{"type":"pictophonetic","phonetic":"每","semantic":"氵","hint":"water"},"radical":"氵","matches":[[0],[0],[0],[1],[1],[1],[1],[1],[1],[1]]},
    {"character":"生","definition":"life, lifetime; birth; growth","pinyin":["shēng"],"decomposition":"⿻一土","etymology":{"type":"ideographic","hint":" A shoot 屮 growing in the soil 土"},"radical":"生","matches":[null,[0],[1],[1],[1]]},
    {"character":"百","definition":"one hundred; numerous, many","pinyin":["bǎi"],"decomposition":"⿱一白","etymology":{"type":"pictophonetic","phonetic":"白","semantic":"一","hint":"one"},"radical":"白","matches":[[0],[1],[1],[1],[1],[1]]},
    {"character":"千","definition":"thousand; many, numerous; very","pinyin":["qiān"],"decomposition":"⿱丿十","radical":"十","matches":[[0],[1],[1]]},
    {"character":"午","definition":"noon; 7th terrestrial branch","pinyin":["wǔ"],"decomposition":"⿻丿干","radical":"十","matches":[[0],[1],[1],[1]]},
    {"character":"早","definition":"early; soon; morning","pinyin":["zǎo"],"decomposition":"⿱日十","etymology":{"type":"ideographic","hint":"The first rays 十 of the sun 日"},"radical":"日","matches":[[0],[0],[0],[0],[1],[1]]},
    {"character":"池","definition":"pool, pond; moat; cistern","pinyin":["chí"],"decomposition":"⿰氵也","etymology":{"type":"pictophonetic","phonetic":"也","semantic":"氵","hint":"water"},"radical":"氵","matches":[[0],[0],[0],[1],[1],[1]]},
    {"character":"人","definition":"man, person; people","pinyin":["rén"],"decomposition":"？","etymology":{"type":"pictographic","hint":"The legs of a human being"},"radical":"人","matches":[null,null]},
    {"character":"中","definition":"central; center, middle; amidst; to hit (target), to attain; China; Chinese","pinyin":["zhōng"],"decomposition":"⿻口丨","etymology":{"type":"ideographic","hint":"A line 丨 through the center of a box 口"},"radical":"丨","matches":[[0],[0],[0],[1]]},
];

/*
    .definition
    .pinyin
    .character
*/