/*==============================BASIC FUNCTIONS===================================*/

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function upright_or_reversed() {
  u = getRndInteger(0, 1);
  if (u == 0) {
    return "정방향";
  } else {
    return "역방향";
  }
}

/*=================================MAJOR ARCANA===================================*/

function fool() {
  if (u == 0) {
    return "<p>The Fool bodes well for physical health if you have been ill as it indicates vitality and energy. However, it can also indicate being accident prone so if you get the Fool for health be extra careful. It can also represent pregnancy as it represents the beginning of a new life.</p>";
  } else {
    return "<p>When The Fool reversed is in a health reading it indicates trying out alternative treatments could be helpful in resolving any health issues. Also the tendency to be accident prone is stronger when this is in your reading so be mindful of your surroundings.</p>";
  }
}
var Fool = {
  name: "The Fool",
  index: 0,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img: "https://upload.wikimedia.org/wikipedia/en/9/90/RWS_Tarot_00_Fool.jpg",
  rw_addendum:
    "어리석음, 조증, 사치, 도취, 정신 착란, 광란, 비통함.\n \
    역방향 : 태만, 부재, 분배, 부주의, 무관심, 무효, 허영심.",
  rw_meaning: fool()
};

function Magician() {
  if (u == 0) {
    return "<p>자신감에 찬 표정으로 지팡이를 내거는 마술사. 그는 무에서 유를 만들어내는 힘을 가지고 요소를 자유자재로 조종할 수 있습니다. \"자신이, 무엇으로, 앞으로 어떻게 하고 싶은가\"라는 정체성과 목적의식이 뚜렷합니다. 자발적으로 생각하고 행동을 취할 수 있습니다. 그것은 꿈을 이루는 것이나 사람에게 인정받게 되는 것입니다.</p>";
  } else {
    return "<p>정체성과 목적 의식이 뚜렷하지 않습니다. 아직 진정한 자신이 성숙되지 않은지도 모릅니다. 사람의 의견에 휩쓸리기 쉽기 때문에 사기당할 위험성도 높아지고 있습니다. 조심하세요.</p>";
  }
}
var Magician = {
  name: "The Magician",
  index: 1,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img:
    "https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg",
  rw_addendum:
    "Skill, diplomacy, address, subtlety; sickness, pain, loss, disaster, snares of enemies; \
    self-confidence, will; the Querent, if male. Reversed: Physician, Magus, mental disease, disgrace, disquiet.",
  rw_meaning: Magician()
};

function HighPriestess() {
  if (u == 0) {
    return "<p>대지 모신의 왕관을 받은 신비로운 여성의 사제가 바다가 보이는 성전에서 혼자 경전을 손에 지니고 있습니다. 주위에는 엄숙한 분위기가 감 돕니 다. 풍부한 영성과 높은 이상을 상징하는 카드입니다. 지적인 문제와 마주하는 성실한 태도를 나타냅니다. 고풍적인 플라톤의 생각, 근면한 자세가 당신에게 도움이 될 것입니다. 마음의 섬세함과 한결같음을 나타낼 수도 있습니다.</p>";
  } else {
    return "<p>성실함이 지나쳐버리는 것을 나타냅니다. 결벽이거나 완벽주의이거나 당신을 살기 어렵게 만들 가능성이 있습니다. 영성이 흐트러지고 있어서 의심과 불안에 휩싸인다 볼 수 있을 것입니다.</p>";
  }
}
var HighPriestess = {
  name: "The High Priestess",
  index: 2,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img:
    "https://upload.wikimedia.org/wikipedia/en/8/88/RWS_Tarot_02_High_Priestess.jpg",
  rw_addendum:
    "Secrets, mystery, the future as yet unrevealed; the woman who interests the Querent, if male;\n \
    the Querent herself, if female; silence, tenacity; mystery, wisdom, science. Reversed: Passion, moral or physical ardour, conceit, surface knowledge.",
  rw_meaning: HighPriestess()
};

function Empress() {
  if (u == 0) {
    return "<p>풍부하게 여무는 자연에 둘러싸여 호화로운 의자에 느긋하게 앉아 있는 아름다운 여제. 사랑스러운 표정의 그녀는 임신하고 있는 것 같습니다. 모든 풍요와 결실을 나타내는 카드입니다. 모든 것을 받아들이는 포용력과 대가를 요구하지 않고 주는 사랑이 번영을 제공합니다. 물질적인 보상이나 성공뿐만 아니라 사랑과 여유와 같은 형태가 없는 것까지도 얻을 수 있을 것입니다.</p>";
  } else {
    return "<p>다소 풍요로움이 과도한 상태입니다. 주어진 것  또는 가지고 있는 것에 대한 고마움을 잊고 오만하고 게으른 생각을 하고 있습니다. 달콤한 전망으로 나중에 눈을 당하는지도 모릅니다. 풍요로움이 부족하거나 고갈 등을 나타내는 수도 있습니다.</p>";
  }
}
var Empress = {
  name: "The Empress",
  index: 3,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img:
    "https://upload.wikimedia.org/wikipedia/en/d/d2/RWS_Tarot_03_Empress.jpg",
  rw_addendum:
    "Fruitfulness, action, initiative, length of days; the unknown, clandestine; also difficulty, doubt, ignorance.\n\
    Reversed: Light, truth, the unravelling of involved matters, public rejoicings; according to another reading, vacillation.",
  rw_meaning: Empress()
};

function Emperor() {
  if (u == 0) {
    return "<p>깎아지른 절벽에 있는 왕좌에 위엄 넘치는 앉아있는 황제. 야망과 통솔력에 차있으며 사람들을 지배하고 있습니다. 건설적인 노력을 통해 지역 사회를 안정시키는 데 성공하고 있는 상태. 확실한 실력과 경험, 자신감과 인품을 인정받아 사람들로부터 신뢰를 얻을 수 있을 것입니다. 또는 당신에게 권위를 가진 사람이 당신에게 크게 영향을 미칠 가능성을 보여줍니다.</p>";
  } else {
    return "<p>노력과 인품을 바탕으로 하지 않는 권위가 사람들을 억누르는 감이 있습니다. 사람과의 관계를 유지하려고 해도 실제 역부족인 것이 밝혀지면서 신뢰 관계가 무너지는 것입니다. 회사, 학교, 친구 관계 가족 관계 등 커뮤니티의 규모와 상관없이 늘 행동을 조심해야 합니다.</p>";
  }
}
var Emperor = {
  name: "The Emperor",
  index: 4,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img:
    "https://upload.wikimedia.org/wikipedia/en/c/c3/RWS_Tarot_04_Emperor.jpg",
  rw_addendum:
    "사회성 권위, 지배, 안정, 행동력, 성취, 달성, 완전 강한 긍정, 능력자, 사업자기질, 완벽주의\n\
    역방향: 낭비하는, 의심 많은, 자기 주장이 강함, 게으름",
  rw_meaning: Emperor()
};

var Hierophant = {
  name: "The Hierophant",
  index: 5,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img:
    "https://upload.wikimedia.org/wikipedia/en/8/8d/RWS_Tarot_05_Hierophant.jpg",
  rw_addendum:
    "Marriage, alliance, captivity, servitude; by another account, mercy and goodness; inspiration; the man to whom the Querent has recourse.\n\
    Reversed: Society, good understanding, concord, overkindness, weakness.",
  rw_meaning:
    "<p>He wears the triple crown and is seated between two pillars, but they are not those of the Temple which is guarded \
    by the High Priestess. In his left hand he holds a sceptre terminating in the triple cross, and with his right hand he gives \
    the well-known ecclesiastical sign which is calleed that of esotericism, distinguishing between the manifest and concealed part \
    of the doctrine. It is noticeable in this connexion that the High Priestess makes no sign. At his feet are the crossed keys, and two \
    priestly ministers in albs kneel before him. He has been usually called the Pope, which is a particular application of the more general \
    office that he symbolizes. He is the ruling power of external religion, as the High Priestess is the prevailing genius of the esoteric, \
    withdrawn power. </p><p>\
    The proper meanings of this card have suffered woeful admixture from nearly all hands. Grand Orient says truly that \
    the Hierophant is the power of the keys, exoteric orthodox doctrine, and the outer side of the life which leads to the doctrine; \
    but he is certainly not the prince of occult doctrine, as another commentator has suggested.\
    He is rather the summa totius theologiae, when it has passed into the utmost rigidity of expression; \
    but he symbolizes also all things that are righteous and sacred on the manifset side. </p><p> As such, he is the channel of grace belonging \
    to the world of institution as distinct from that of Nature, and he is the leader of salvation for the human race at large. \
    He is the order and the head of the recognized hierarchy, which is the reflection of another and greater hierarchic order; \
    but it may so happen that the pontiff forgets the significance of this his symbolic state and acts as if he contained within his \
    proper measures all that his sign signifies or his symbol seeks to shew forth. He is not, as it has been thought, philosophy--\
    except on the theological side; he is not inspiration; and he is not religion, although he is a mode of its expression."
};

var Lovers = {
  name: "The Lovers",
  index: 6,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img: "https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg",
  rw_addendum:
    "Attraction, love, beauty, trials overcome.\n\
    Reversed: Failure, foolish designs. Another account speaks of marriage frustrated and contrarieties of all kinds.",
  rw_meaning:
    "<p>The sun shines in the zenith, and beneath is a great winged figure with arms extended, pouring down influences. In the \
    foreground are two human figures, male and female, unveiled before each other, as if Adam and Eve when they first occupied the paradise \
    of the earthly body. Behind the man is the Tree of Life, bearing twelve fruits, and the Tree of the Knowledge of Good and Evil is behind the woman; \
    the serpent is twining round it. The figures suggest youth, virginity, innocence and love before it is contaminated by gross material desire.\
    This is in all simplicity the card of human love, here exhibited as part of the way, the truth and the life. It replaces, by recourse to first \
    principles, the old card of marriage, which I have described previously, and the later follies which depicted man between vice and virtue. \
    In a very high sense, the card is a mystery of the Covenant and Sabbath. </p><p>\
    The suggestion in respect of the woman is that she signifies that attraction towards the sensitive life which carries within it the idea \
    of the Fall of Man, but she is rather the working of a Secret Law of Providence than a willing and conscious temptress. It is through her \
    imputed lapse that man shall arise ultimately, and only by her can he complete himself. The card is therefore in its way another intimation \
    concerning the great mystery of womanhood. The old meanings fall to pieces of necessity with the old pictures, but even as interpretations \
    of the latter, some of them were of the order of commonplace and others were false in symbolism.</p>"
};

var Chariot = {
  name: "The Chariot",
  index: 7,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img:
    "https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg",
  rw_addendum:
    "Succour, providence; also war, triumph, presumption, vengeance, trouble.\n\
    Reversed: Riot, quarrel, dispute, litigation, defeat.",
  rw_meaning:
    "<p>An erect and princely figure carrying a drawn sword and corresponding, broadly speaking, to the traditional description which \
    I have given in the first part. On the shoulders of the victorious hero are supposed to be the Urim and Thummim. He has led captivity captive; \
    he is conquest on all planes--in the mind, in science, in progress, in certain trials of initiation. He has thus replied to the sphinx, \
    and it is on this account that I have accepted the variation of Eliphas Levi; two sphinxes thus draw his chariot. He is above all things triumph in the mind.</p><p>\n\
    It is to be understood for this reason (a) that the question of the sphinx is concerned with a Mystery of Nature and not of the world of Grace, to which the charioteer\
    could offer no answer; (b) that the planes of his conquest are manifest or external and not within himself; (c) that the liberation which \
    he effects may leave himself in the bondage of the logical understanding; (d) that the tests of initiation through which he has passed in triumph \
    are to be understood physically or rationally; and (e) that if he came to the pillars of that Temple between which the High Priestess is seated, \
    he could not open the scroll called Tora, nor if she questioned him could he answer. He is not hereditary royalty and he is not priesthood.</p>"
};

var Strength = {
  name: "Strength",
  index: 8,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img:
    "https://upload.wikimedia.org/wikipedia/en/f/f5/RWS_Tarot_08_Strength.jpg",
  rw_addendum:
    "Power, energy, action, courage, magnanimity; also complete success and honours.\n\
    Reversed: Despotism, abuse if power, weakness, discord, sometimes even disgrace.",
  rw_meaning:
    "<p>A woman, over whose head there broods the same symbol of life which we have seen in the card of the Magician, is closing the jaws \
    of a lion. The only point in which this design differs from the conventional presentations is that her beneficient fortitude has already subdued \
    the lion, which is being led by a chain of flowers. For reasons which satisfy myself, this card has been interchanged with that of Justice, \
    which is usually numbered eight. As the variation carries nothing with it which will signify to the reader, there is no cause for explanation. \
    Fortitude, in one of its most exalted aspects, is connected wtih the Divine Mystery of Union; the virtue, of course, operates in all planes, \
    and hence draws on all in its symbolism. It connects also with innocentia inviolata, and with the strength which resides in contemplation. </p><p>\n\
    These higher meanings are, however, matters of inference, and I do not suggest that they are transparent on the surface of the card.\
    They are intimated in a concealed manner by the chain of flowers, which signifies, among many other things, the sweet yoke and the light burden \
    of Divine Law, when it has been taken into the heart of hearts. The card has nothing to do with self-confidence in the ordinary sense, though \
    this has been suggested--but it concerns the confidence of those whose strength is God, who have found their refuge in Him. There is one aspect in which \
    the lion signifies the passions, and she who is called Strength is the higher nature in its liberation. It has walked upon the asp and the basilisk \
    and has trodden down the lion and the dragon.</p>"
};

var Hermit = {
  name: "The Hermit",
  index: 9,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img: "https://upload.wikimedia.org/wikipedia/en/4/4d/RWS_Tarot_09_Hermit.jpg",
  rw_addendum:
    "Prudence, circumspection; also and especially treason, dissimulation, roguery, corruption.\n\
    Reversed: Concealment, disguise, policy, fear, unreasoned caution.",
  rw_meaning:
    "<p>The variation from conventional models in this card is only that the lamp is not enveloped partially in the mantle of its bearer, \
    who blends the idea of the Ancient of Days with the Light of the World. It is a star which shines in the lantern. I have said that this \
    is a card of attainment, and to extend this conception the figure is seen holding up his beacon on an eminence. Therefore the Hermit is not, \
    as Court de Gebelin explained, a wise man in search of truth and justice; nor is he, as a later explanation proposes, an especial example of experience. \
    His beacon intimates that 'where I am, you also may be.' </p><p>\n\
    It is further a card which is understood quite incorrectly when it is connected with the idea of occult isolation, as the protection of \
    personal magnetism against admixture. This is one of the frivolous renderings which we owe to Eliphas Levi. It has been adopted by the \
    French Order of Martinism and some of us have heard a great deal of the Silent and Unknown Philosophy enveloped by his mantle from the knowledge \
    of the profane. In true Martinism, the significance fo the term Philosophe inconnu was of another order. It did not refer to the intended concealment \
    of the Instituted Mysteries, much less of their substittues, but--like the card itself--to the truth that the Divine Mysteries secure their \
    own protection from those who are unprepared.</p> "
};

var WheelFortune = {
  name: "Wheel of Fortune",
  index: 10,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img:
    "https://upload.wikimedia.org/wikipedia/en/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg",
  rw_addendum:
    "Destiny, fortune, success, elevation, luck, felicity.\n\
    Reversed: Increase, abundance, superfluity.",
  rw_meaning:
    "<p>In this symbol I have again followed the reconstruction of Eliphas Levi, who has furnished several variants. It is \
    legitimate--as I have intimated--to use Egyptian symbolism when this serves our purpose, provided that no theory of origin is implied therein. \
    I have, however, presented Typhon in his serpent form. The symbolism is, of course, not exclusively Egyptian, as the four Living Creatures of Ezekiel \
    occupy the angles of the card, and the wheel itself follows other indications of Levi in respect of Ezekiel's vision, as illustrative of the \
    particular Tarot Key. With the French occultist, and in the design itself, the symbolic picture stands for the perpetual motion of a fluidic universe \
    and for the flux of human life. The Sphinx is the equilibrium therein. The transliteration of Taro as Rota is inscribed on the wheel, counterchanged \
    with the letters of the Divine Name--to shew that Providence is imphed through all. But this is the Divine intention within, and the similar intention without \
    is exemplified by the four Living Creatures. Sometimes the sphinx is represented couchant on a pedestal above, which defrauds the symbolism \
    by stultifying the essential idea of stability amidst movement.</p><p>\
    Behind the general notion expressed in the symbol there lies the denial of chance and the fatality which is implied therein. It may be added that, \
    from the days of Levi onward, the occult explanations of this card are--even for occultism itself--of a singularly fatuous kind. It has been said \
    to mean principle, fecundity, virile honour, ruling authority, etc. The findings of common fortune-telling are better than this on their own plane.</p>"
};

var Justice = {
  name: "Justice",
  index: 11,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img:
    "https://upload.wikimedia.org/wikipedia/en/e/e0/RWS_Tarot_11_Justice.jpg",
  rw_addendum:
    "Equity, rightness, probity, executive; triumph of the deserving side in law.\n\
    Reversed: Law in all its departments, legal complications, bigotry, bias, excessive severity.",
  rw_meaning:
    "<p>As this card follows the traditional symbolism and carries above all its obvious meanings, there is little to say regarding it \
    outside the few considerations collected in the first part, to which the reader is referred. \
    It will be seen, however, that the figure is seated between pillars, like the High Priestess, and on this account it seems desirable to indicate \
    that the moral principle which deals unto every man according to his works--while, of course, it is in strict analogy with higher things;--\
    differs in its essence from the spiritual justice which is involved in the idea of election. The latter belongs to a mysterious order of \
    Providence, in virtue of which it is possible for certain men to conceive the idea of dedication to the highest things. The operation of this \
    is like the breathing of the Spirit where it wills, and we have no canon of criticism or ground of explanation concerning it. It is analogous \
    to the possession of the fairy gifts and the high gifts and the gracious gifts of the poet: we have them or have not, and their presence \
    is as much a mystery as their absence. The law of Justice is not however involved by either alternative. In conclusion, the pillars of Justice \
    open into one world and the pillars of the High Priestess into another.</p>"
};

var HangedMan = {
  name: "The Hanged Man",
  index: 12,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img:
    "https://upload.wikimedia.org/wikipedia/en/2/2b/RWS_Tarot_12_Hanged_Man.jpg",
  rw_addendum:
    "Wisdom, circumspection, discernment, trials, sacrifice, intuition, divination, prophecy.\n\
    Reversed: Selfishness, the crowd, body politic.",
  rw_meaning:
    "<p>The gallows from which he is suspended forms a Tau cross, while the figure--from the position of the legs--forms a fylfot cross.\
  There is a nimbus about the head of the seeming martyr. It should be noted (1) that the tree of sacrifice is living wood, with leaves thereon;\
  (2) that the face expresses deep entrancement, not suffering; (3) that the figure, as a whole, suggests life in suspension, but life and not death.\
  It is a card of profound significance, but all the significance is veiled. One of his editors suggests that Eliphas Levi did not know the meaning,\
  which is unquestionable nor did the editor himself. It has been called falsely a card of martyrdom, a card of prudence, a card of the Great Wrok,\
  a card of duty; but we may exhaust all published interpretations and find only vanity. I will say very simply on my own part that it expresses the relation,\n\
  in one of its aspects, between the Divine and the Universe.</p><p>\
  He who can understand that the story of his higher nature is imbedded in this symbolism will receive intimations concerning a great awakening\
  that is possible, and will know that after the sacred Mystery of Death there is a glorious Mystery of Resurrection.</p>"
};

var Death = {
  name: "Death",
  index: 13,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img: "https://upload.wikimedia.org/wikipedia/en/d/d7/RWS_Tarot_13_Death.jpg",
  rw_addendum:
    "End, mortality, destruction, corruption; also, for a man, the loss of a benefactor; for a woman, many contrarieties; for a maid, failure of marriage projects.\n\
  Reversed: Inertia, sleep, lethargy, petrifaction, somnambulism; hope destroyed.",
  rw_meaning:
    "<p>The veil or mask of life is perpetuated in change, transsformation and passage from lower to higher, and this is more fitly\
  represented in the rectified Tarot by one of the apocalyptic visions than by the crude notion of the reaping skeleton. Behind it lies the \
  whole world of ascent in the spirit. The mysterious horseman moves slowly, bearing a black banner emblazoned with the Mystic Rose, which signifies\
   life. Between two pillars on the verge of the horizon there shines the sun of immortality. The horseman carries no visible weapon, but king and child and maiden \
   fall before him, while a prelate with clasped hands awaits his end.</p><p>\n\
   There should be no need to point out that the suggestion of death which I have made in connection with the previous card is, \
   of course, to be understood mystically, but this is not the case in the present instance. The natural transit of man to the next stage \
   of his being either is or may be one form of his progress, but the exotic and almost unknown entrance, while still in this life, into the state\
   of mystical death is a change in the form of consciousness and the passage into a state to which ordinary death is neither the path nor gate. \
   The existing occult explanations of the 13th card are, on the whole, better than usual, rebirth, creation, destination, renewal, and the rest.</p>"
};

var Temperance = {
  name: "Temperance",
  index: 14,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img:
    "https://upload.wikimedia.org/wikipedia/en/f/f8/RWS_Tarot_14_Temperance.jpg",
  rw_addendum:
    "Economy, moderation, frugality, management, accommodation.\n\
  Reversed: Things connected with churches, religions, sects, the priesthood, sometimes even the priest who will marry the Querent;\
  also disunion, unfortunate combinations, competing interests.",
  rw_meaning:
    "<p>A winged angel, with the sign of the sun upon his forehead and on his breast the square and triangle of the septenary.\
  I speak of him in the masculine sense, but the figure is neither male nor female. It is held to be pouring the essences of life from \
  chalice to chalice. It has one foot upon the earth and one upon the waters, thus illustrating the nature of the essences. A direct path \
  goes up to certain heights on the verge of the horizon, and above there is a great light, through which a crown is seen vaguely. Hereof \
  is some part of the Secret of Eternal Life, as it is possible to man in his incarnation. All the conventional emblems are renounced herein.</p><p>\
  So also are the conventional meanings, which refer to changes in the seasons, perpetual movement of life and even the combination of ideas. \
  It is, moreover, untrue to say that the figure symbolizes the genius of the sun, although it is the analogy of solar light, realized in the third part \
  of our human triplicity. It is called Temperance fantastically, because, when the rule of it obtains in our consciousness, it tempers, combines and harmonises \
  the psychic and material natures. Under that rule we know in our rational part something of whence we came and whither we are going.</p>"
};

var Devil = {
  name: "The Devil",
  index: 15,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img: "https://upload.wikimedia.org/wikipedia/en/5/55/RWS_Tarot_15_Devil.jpg",
  rw_addendum:
    "Ravage, violence, vehemence, extraordinary efforts, force, fatality; that which is predestined but is not for this reason evil.\n\
  Reversed: Evil fatality, weakness, pettiness, blindness.",
  rw_meaning:
    "<p>The design is an accommodation, mean or harmony, between several motives mentioned in the first part. The Horned Goat of Mendes, \
  with wings like those of a bat, is standing on an altar. At the pit of the stomach there is the sign of Mercury. The right hand is upraised \
  and extended, being the reverse of that benediction which is given by the Hierophant in the fifth card. In the left hand there is a great flaming torch\
  inverted towards the earth. A reversed pentagram is on the forehead. There is a ring in front of the altar, from which two chains are carried \
  to the necks of two figures, male and female. These are analogous with those of the fifth card, as if Adam and Eve after the Fall. Hereof \
  is the chain and fatality of the material life.</p><p> \n\
  The figures are tailed, to signify the animal nature, but there is human intelligence in the faces, and he who is exalted above them is not to be \
  their master for ever. Even now, he is also a bondsman, sustained by the evil that is in him and blind to the liberty of service. With more than \
  his usual derision for the arts which he pretended to respect and interpret as a master therein, Eliphas Levi affirms that the Baphometic figure is \
  occult science and magic. Another commentator says that in the Divine world it signifies predestination, but there is no correspondence in that world \
  with the things which below are of the brute. What it does signify is the Dweller on the Threshold without the Mystical Garden when those are driven forth \
  therefrom who have eaten the forbidden fruit.</p>"
};

var Tower = {
  name: "The Tower",
  index: 16,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img: "https://upload.wikimedia.org/wikipedia/en/5/53/RWS_Tarot_16_Tower.jpg",
  rw_meaning: "",
  rw_addendum:
    "Misery, distress, indigence, adversity, calamity, disgrace, deception, ruin. It is a card in particular of unforeseen catastrophe.\n\
  Reversed: According to one account, the same in a lesser degree; also, oppression, imprisonment, tyranny.",
  rw_meaning:
    "<p>Occult explanations attached to this card are meagre and mostly disconcerting. It is idle to indicate that it depicts mind in all \
  its aspects, because it bears this evidence on the surface. It is said further that it contains the first allusion to a material building, but I \
  do not conceive that the Tower is more or less material than the pillars which we have met with in three previous cases. I see nothing to warrant \
  Papus in supposing that it is literally the fall of Adam, but there is more in favour of his alternative--that it signifes the materialization \
  of the spiritual word. The bibliographer Christian imagines that it is the downfall of the mind, seeking to penetrate the mystery of God. \
  I agree rather with Grand Orient that it is the ruin of the House of We, when evil has prevailed therein, and above all that it is the rending \
  of a House of Doctrine. I understand that the reference is, however, to a House of Falsehood. It illustrates also in the most comprehensive way \
  the old truth that 'except the Lord build the house, they labour in vain that build it.' </p><p>\n\
  There is a sense in which the catastrophe is a reflection from the previous card, but not on the side of the symbolism which I have tried \
  to indicate therein. It is more correctly a question of analogy; one is concerned with the fall into the material and animal state, while \
  the other signifies destruction on the intellectual side. The Tower has been spoken of as the chastisement of pride and the intellect overwhelmed \
  in the attempt to penetrate the Mystery of God; but in neither case do these explanations account for the two persons who are the living sufferers.\
  The one is the literal word made void and the other its false interpretation. In  yet a deeper sense, it may signify also the end of a dispensation, \
  but there is no possibility here for the consideration of this involved question.</p>"
};

var Star = {
  name: "Star",
  index: 17,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img: "https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_17_Star.jpg",
  rw_addendum:
    "Loss, theft, privation, abandnment; another reading says- hope and bright prospects.\n\
  Reversed: Arrogance, haughtiness, impotence.",
  rw_meaning:
    "<p>A great, radiant star of eight rays, surrounded by seven lesser stars--also of eight rays. The female figure \
  in the foreground is entirely naked. Her left knee is on the land and her right foot upon the water. She pours Water of Life \
  from two great ewers, irrigating sea and land. Behind her is rising ground and on the right a shrub or tree, whereon a bird alights.\
  The figure expresses eternal youth and beauty. The star is l'etoile flamboyante, which appears in Masonic symbolism, but has been \
  confused therein. That which the figure communicates to the living scene is the substance of the heavens and the elements. It has \
  been said truly that the mottoes of this card are 'Waters of Life freely' and 'Gifts of the Spirit.'</p><p>\
  The summary of several tawdry explantaions says that it is a card of hope. On other planes it has been certified as immortality and \
  interior light. For the majority of prepared minds, the figure will appear as the type of Truth unveiled, glorious in undying beauty, \
  pouring on the waters of the soul some part and measure of her priceless possession. But she is in reality the Great Mother in the \
  Kabalistic Sephira Binah, which is supernal Understanding, who communicates to the Sephiroth that are below in the measure \
  that they can receive her influx.</p>"
};

var Moon = {
  name: "The Moon",
  index: 18,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img: "https://upload.wikimedia.org/wikipedia/en/7/7f/RWS_Tarot_18_Moon.jpg",
  rw_addendum:
    "Hidden enemies, danger, calumny, darkness, terror, deception, occult forces, error.\n\
  Reversed: Instability, inconstancy, silence, lesser degrees of deception and error.",
  rw_meaning:
    "<p>The distinction between this card and some of the conventional types is that the moon is increasing on what is called \
  the side of mercy, to the right of the observer. It has sixteen chief and sixteen secondary rays. The card represents life of the imagination \
  apart from life of the spirit. The path between the towers is the issue into the unknown. The dog and wolf are the fears of the natural \
  mind in the presence of that place of exit, when there is only reflected light to guide it.<p></p>\
  The last reference is a key to another form of symbolism. The intellectual light is a reflection and beyond it is the unknown mystery\
  which it cannot shew forth. It illuminates our animal nature, types of which are represented below--the dog, the wolf and that which comes up\
  out of the deeps, the nameless and hideous tendency which is lower than the savaage beast. It strives to attain manifestation, symbolized \
  by crawling from the abyss of water to the land, but as a rule it sinks back whence it came. The face of the mind directs a calm gaze \
  upon the unrest below; the dew of thought falls; the message is: Peace, be still; and it may be that there shall come a calm upon the animal nature, \
  while the abyss beneath shall cease from giving up a form.</p>"
};

var Sun = {
  name: "The Sun",
  index: 19,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img: "https://upload.wikimedia.org/wikipedia/en/1/17/RWS_Tarot_19_Sun.jpg",
  rw_addendum:
    "Material happiness, fortunate marriage, contentment.\n\
  Reversed: The same in a lesser sense.",
  rw_meaning:
    "<p>The naked child mounted on a white horse and displaying a red standard has been mentioned already as the better symbolism \
  connected with this card. It is the destiny of the Supernatural East and the great and holy light which goes before the endless procession \
  of humanity, coming out from the walled garden of the sensitive life and passing on the journey home. The card signifies, therefore, the transit \
  from the manifest light of this world, represented by the glorious sun of earth, to the light of the world to come, which goes before aspiration \
  and is typified by the heart of a child.</p>\n\
  <p>But the last allusion is again the key to a different form or aspect of the symbolism. The sun is that of consciousness in the spirit-- \
  the direct antithesis of the reflected light. The characteristic type of humanity has become a little child therein--a child in the sense of \
  simplicity and innocence in the sense of wisdom. In that simplicity, he bears the seal of Nature and of Art; in that innocence, he signifies \
  the restored world. When the self-knowing spirit has dawned in the consciousness above the natural mind, that mind in its renewal leads forth \
  the animal nature in a state of perfect conformity.</p>"
};

var Judgment = {
  name: "Judgment",
  index: 20,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img:
    "https://upload.wikimedia.org/wikipedia/en/d/dd/RWS_Tarot_20_Judgement.jpg",
  rw_addendum:
    "Change of position, renewal, outcome. Another account specifies total loss through lawsuit.\n\
  Reversed: Weakness, pusillanimity, simplicity; also deliberation, decision, sentence.",
  rw_meaning:
    "<p>I have said that this symbol is essentially invariable in all Tarot sets, or at least the variations do not alter its character.\
  The great angel is here encompassed by clouds, but he blows his bannered trumpet, and the cross as usual is displayed on the banner. The dead are \
  rising from their tombs--a woman on the right, a man on the left hand, and between them their child, whose back is turned. But in this card \
  there are more than three who are restored, and it has been thought worth while to make this variation as illustrating the insufficiency of current explanations. \
  It should be noted that all the figures are as one in the wonder, adoration and ecstasy expressed by their attitudes. It is the card which \
  registers the accomplishment of the great work of transformation in answer to the summons of the Supernal--which summons is heard and answered from within.</p><p>\
  Herein is the intimation of a significance which cannot well be carried further in the present place. What is that within us which does sound \
  a trumpet and all that is lower in our nature rises in response--almost in a moment, almost in the twinkling of an eye? Let the card continue \
  to depict, for those who can see no further, the Last judgment and the resurrection in the natural body; but let those who have inward eyes look \
  and discover therewith. They will understand that it has been called truly in the past a card of eternal life, and for this reason it may be \
  compared with that which passes under the name of Temperance.</p>"
};

var World = {
  name: "The World",
  index: 21,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img: "https://upload.wikimedia.org/wikipedia/en/f/ff/RWS_Tarot_21_World.jpg",
  rw_addendum:
    "Assured success, recompense, voyage, route, emigration, flight, change of place.\n\
  Reversed: Inertia, fixity, stagnation, permanence.",
  rw_meaning:
    "<p>As this final message of the Major Trumps is unchanged--and indeed unchangeable--in respect of its design, it has been partly \
  described already regarding its deeper sense. It represents also the perfection and end of the Cosmos, the secret which is within it, the rapture \
  of the universe when it understands itself in God. It is further the state of the soul in the consciousness of Divine Vision, reflected from \
  the self-knowing spirit. But these meanings are without prejudice to that which I have said concerning it on the material side.</p><p> \n\
  It has more than one message on the macrocosmic side and is, for example, the state of the restored world when the law of manifestation \
  shall have been carried to the highest degree of natural perfection. But it is perhaps more especially a story of the past, referring to \
  that day when all was declared to be good, when the morning stars sang together and all the Sons of God shouted for joy. \
  One of the worst explanations concerning it is that the figure symbolizes the Magus when he has reached the highest degree of initiation; \
  another account says that it represents the absolute, which is ridiculous. The figure has been said to stand for Truth, which is, however, \
  more properly allocated to the seventeenth card. Lastly, it has been called the Crown of the Magi.</p>"
};

/*======================================DECK======================================*/

//creates array with all card objects
var tarotDeck = [
  Fool,
  Magician,
  HighPriestess,
  Empress,
  Emperor,
  Hierophant,
  Lovers,
  Chariot,
  Strength,
  Hermit,
  WheelFortune,
  Justice,
  HangedMan,
  Death,
  Temperance,
  Devil,
  Tower,
  Star,
  Moon,
  Sun,
  Judgment,
  World
];

/*=========================BASIC CARD DRAWING FUNCTIONS===========================*/

//function that draws a specific card from the deck, by index
function draw_indexed_card(index) {
  var rightCard = tarotDeck[index];
  return rightCard;
}

//function to pick random int out of 78
function pick_card_index() {
  return getRndInteger(0, 21);
}

function draw_random_card() {
  index = pick_card_index();
  rightCard = tarotDeck[index];
  console.log("You drew ...", rightCard["name"]);
  console.log("The position of this card is ...", rightCard["direction"]);
  return rightCard;
}

var show_indexed_card = function (index) {
  //identifies correct card from deck!
  var rightCard = tarotDeck[index];
  //generic display message
  // document.getElementById("results").innerHTML +="The card drawn is...<br> <br> <div class='placard-container'><div class='card-container'>";
  //testing reverse or upright
  if (rightCard["direction"] == "역방향") {
    document.getElementById("results").innerHTML +=
      "<img src= '" +
      rightCard["img"] +
      "' class='reversed'>";
  } else {
    document.getElementById("results").innerHTML +=
      "<img src= '" + rightCard["img"] + "' class='card-img'><br>";
  }
  //display card name
  // document.getElementById("results").innerHTML +=
  //   "</div>" + rightCard["name"] + ", " + rightCard["direction"];
  document.getElementById("results").innerHTML +=
    "</div>" +
    "<p>&#x1F31E; &#x1F311; &#x1F312; &#x1F313; &#x1F314; &#x1F315; &#x1F316; &#x1F317; &#x1F318; &#x1F31E;</p>";
  return rightCard;
};

var show_indexed_card_no_reverse = function (i) {
  //like show_indexed_card(), but without reversed parameter
  var rightCard = tarotDeck[i];
  document.getElementById("results").innerHTML +=
    "<h3 id='show-card-num-" + rightCard["index"] + "'>" + rightCard["index"] + ". " + rightCard["name"] +
    "</h3><img src= '" +
    rightCard["img"] +
    "' width=220 height=auto><br><div class='explanation'>" + rightCard["rw_meaning"] +
    "</div><p>&#x1F31E; &#x1F311; &#x1F312; &#x1F313; &#x1F314; &#x1F315; &#x1F316; &#x1F317; &#x1F318; &#x1F31E;</p>";
  return rightCard;
};

//function which shows all cards in Tarot deck!
var show_all_cards = function () {
  var i = 0;
  for (i = 0; i < 22; i++) {
    show_indexed_card_no_reverse(i);
  }
  window.scrollTo(0, document.getElementById("show-card-num-0").y);
  console.log(document.getElementById("show-card-num-0").y);
  console.log(document.getElementById("show-card-num-0"));
  return;
};

/*==========================CELTIC CROSS CARD DRAWING FUNCTIONS=======================*/
var draw_celtic_indices = function () {
  var indices = [];
  var result;
  while (indices.length < 10) {
    result = pick_card_index();
    if (indices.indexOf(result) == -1) {
      indices.push(result);
    }
  }
  return indices;
};

var draw_celtic_picture = function (array) {
  var i = 0;
  for (i = 0; i < 10; i++) {
    console.log("inside draw celtic picture loop");
    show_indexed_card(array[i]["img"]);
  }
};

var set_celtic_identifier = function (card_obj, i) {
  //sets celtic array: 1) takes a card object with a number assigned
  //then assigns a string name (celtic identifier) to that object
  console.log("inside set_celtic_identifier");
  switch (i) {
    case 1:
      card_obj["identifier"] = "선물";
      break;
    case 2:
      card_obj["identifier"] = "도전";
      break;
    case 3:
      card_obj["identifier"] = "과거";
      break;
    case 4:
      card_obj["identifier"] = "미래";
      break;
    case 5:
      card_obj["identifier"] = "내가 생각하는 미래";
      break;
    case 6:
      card_obj["identifier"] = "내가 처한 상황";
      break;
    case 7:
      card_obj["identifier"] = "조언";
      break;
    case 8:
      card_obj["identifier"] = "영향";
      break;
    case 9:
      card_obj["identifier"] = "소망";
      break;
    case 10:
      card_obj["identifier"] = "결과";
      break;
  }
  return card_obj;
};

var is_reversed = function (direction) {
  if (direction == "reversed") {
    return true;
  }
};

var erase_display = function () {
  document.getElementById("results").innerHTML = "";
  var i = 0;
  for (i = 0; i < 10; i++) {
    var j = i + 1;
    document.getElementById("celtic-num-" + j).innerHTML = "";
  }
};

var draw_celtic_cross = function () {
  
  erase_display();
  
  console.log("inside draw_celtic_cross fct");
  //select randomized celtic indices
  var indices = draw_celtic_indices();
  console.log(indices);
  var i = 0;
  var j;
  var card;
  var celtic_result = [];
  //for each of the indices in the celtic index...
  for (i = 0; i < indices.length; i++) {
    j = i + 1;
    card = draw_indexed_card(indices[i]); //select the card associated with the index
    card["number"] = j; //assign cards to celtic indices array (celtic_result)
    set_celtic_identifier(card, card["number"]); //set a string associated with the number of celtic result
    console.log("card is ...", card);
    console.log("card['img'] is ...", card["img"]);
    document.getElementById("results").innerHTML +=
      "<div class='placard-container' id='celtic-exp-" +
      j +
      "'><div class='placard-container-item''celtic-identifier-name'>" +
      card["identifier"].toUpperCase() +
      "</div><div class='placard-container-item card-container'>" +
      "<div class='card-image-container'><img width=120px height=200px class='card-image card-container-item' src= '" +
      card["img"] +
      "' id='card-img-num-" +
      j +
      "'><p class='card-container-item' 'card-name'>" +
      card["name"] +
      ", " +
      card["direction"] +
      "</div><div class='placard-container-item card-explanation'>" +
      card["rw_meaning"] +
      "</div></div></div>";
    if (is_reversed(card["direction"])) {
      const card_image_ = document.getElementById("card-img-num-" + j);
      card_image_.classList.add("reversed");
    }
    celtic_result.push(card);
  }
  console.log("celtic result is ...", celtic_result);
  draw_cross_graphic(celtic_result);
  return celtic_result;
};

var draw_cross_graphic = function (array) {
  console.log("inside draw_cross_graphic");
  var i = 0;
  for (i = 0; i < array.length; i++) {
    var j = i + 1;
    document.getElementById("celtic-num-" + j).innerHTML +=
      "<img src= '" +
      array[i]["img"] +
      "' width=55 height=auto id='cc-img-num-" +
      j +
      "'>";
    if (is_reversed(array[i]["direction"])) {
      console.log("inside reversed,draw cross graphic");
      const cc_image_ = document.getElementById("cc-img-num-" + j);
      cc_image_.classList.add("reversed");
    }
  }
  return;
};

