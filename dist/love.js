/*==============================BASIC FUNCTIONS===================================*/

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function upright_or_reversed() {
  u = getRndInteger(0, 1);
  if (u == 0) {
    return "upright";
  } else {
    return "reversed";
  }
}

/*=================================MAJOR ARCANA===================================*/

function fool() {
  if (u == 0) {
    return "<p>The Fool in love is exciting and spontaneous but a little bit fickle. For those in relationships, The Fool indicates being so in love you can hardly contain your excitement. However, if the person asking the question is asking about commitment, this card is linked to lack of commitment /not being ready for a commitment. For those that are single, it is a very good indicator that an impulsive, carefree romance is on the cards (or many such romances). If the Fool appears, be prepared for fun-filled romance but be careful not to miss true love if it comes your way during this time.</p>";
  } else {
    return "<p>The Fool reversed in love can indicate that your pursuit of adventure may be holding you back from having the kind love you really want or causing uncertainty in your current relationship. If The Fool is reversed, your relationship may be exciting but may involve some risky behaviour. Be warned, this could lead to feelings of insecurity and may leave your relationship on shaky ground.</p>";
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
    reversed : 태만, 부재, 분배, 부주의, 무관심, 무효, 허영심.",
  rw_meaning: fool()
};

function Magician() {
  if (u == 0) {
    return "<p>The Magician in the context of a love Tarot reading is a positive card. For those in relationships, The Magician Tarot signifies the relationship moving to new and deeper level where you can expect stronger commitment and happiness. If you are single The Magician indicates that now is great time to meet someone new. Your partner will be serious about you, has good intentions and will treat you well.</p>";
  } else {
    return "<p>The Magician reversed in the context of a love Tarot reading for those in relationships, can indicate that you need to be more open and honest with your partner about your needs and desires. If you are tempted to try and manipulate your partner to get what you want, don’t. Honesty will get you much further than trickery.  It can also indicate that partner/lover who appears to be trustworthy, may be using their influence over you to manipulate you for their own selfish reasons.  If you are single The Magician indicates that you may be becoming cynical about love and your future love life and feeling like you will never attract anyone good to your life. Don’t lose faith. If you stay positive and send love and light out into the world you will eventually attract the same back to you!</p>";
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
    return "<p>If you are a man The High Priestess appearing in your reading in a love Tarot context usually signifies you will become infatuated with an attractive feminine sensual person who may be unattainable to you. If you are a female, The High Priestess indicates that you will be highly-desired by more than one person. People will find you irresistible! If you are involved with someone The High Priestess is an indicator of good sex! </p>";
  } else {
    return "<p>With the High Priestess reversed Tarot you will still find yourself highly-desired by others but you may question their motives or the attention may make you feel uncomfortable. you can expect uncontrolled emotional outbursts and high sexual tension.  If you find yourself losing patience with your partner or looking for arguments, take some time out for yourself.</p>";
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
    return "<p>The Empress Tarot in a love Tarot reading is a very positive card to get.  If you are single, get ready to mingle because The Empress indicates that real love and romance is on the way. If you are in a relationship it is an indicator of a committed relationship becoming deeper and more loving and affectionate. The Empress is also an indicator of good sex. For those enjoying the romance The Empress card can bring you must also remember that the Empress is a strong pregnancy indicator so if you are not ready for parenthood, take proper precautions!</p>";
  } else {
    return "<p>In a love Tarot meaning, if you are single, The Empress reversed can indicate that you will have many potential partners pursuing you but you may not necessarily be putting out to the world the person you really are. Don’t try to be someone you’re not, just to gain other people’s approval especially when it comes to romantic relationships.  If you are in a relationship it can indicate that you are not expressing your true emotions and suppressing them to try and keep your relationship in balance. Maybe you fear rejection or a negative reaction if you are honest with your partner about how you feel. You need to take time to figure out why you are suppressing your emotions. Be mindful of becoming overbearing to those around you as you may have this tendency at the moment. It is simply a symptom of the insecurities you are feeling inside, so shift the focus back to yourself and it will stop. Trust your intuition and let it guide you back to the beautiful, confident and inspiring person you were born to be!</p>";
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
    return "<p>If you are single and interested in men, The Emperor in a love Tarot context can indicate a romantic relationship with an older man. He will like structure, order, logic and routine. He will be a good influence on you but romance is not his strong point. He is however practical, dependable and protective. If you are single and interested in women, The Emperor Tarot is a sign that you need to be more open with your feelings. If you have feelings for someone in particular you need to bite the bullet and tell her. Don’t expect her to guess! For those already in relationships, The Emperor is a good omen of monogamy and a long lasting relationship. If you have been experiencing relationship problems they begin to improve and stability will return to the relationship.</p>";
  } else {
    return "<p>The Emperor Tarot card reversed in a love Tarot reading can indicate an imbalance of power in the relationship which is causing conflict or unhappiness. It can signify one partner controlling the other, being possessive, stubborn or overbearing. This type of behaviour will lead to the other partner feeling trapped. The Emperor reversed shows that there needs to be balance between wanting structure in a relationship and being a control freak. Learn to compromise! If you are single, The Emperor reversed can indicate that your father issues are leading to destructive patterns in your choice of partners. You need to resolve these issues to avoid attracting those who would seek to take advantage of you. It can also indicate a lack of commitment, flitting from one partner to another and a lack of monogamy, in essence rebelling again what The Emperor represents.</p>";
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
    reversed: 낭비하는, 의심 많은, 자기 주장이 강함, 게으름",
  rw_meaning: Emperor()
};

function Hierophant() {
  if (u == 0) {
    return "<p>For those in relationships, The Hierophant is the marriage and commitment card of the Major Arcana. You can expect your relationship to become more committed and begin moving towards new relationship milestones when this card appears. It indicates that you and your partner share the same values and goals, a very good card to get if a committed relationship is what you want. If you are single, this card signifies a new relationship on the horizon which will be built on commitment, love and security.</p>";
  } else {
    return "<p>The Hierophant reversed in a love Tarot context may signify an unconventional relationship or the desire for one if you are single. You may be breaking with tradition by choosing not to marry. it can also indicate a reversal of traditional gender roles. It can also indicate that you and your partner are not on the same page when it comes to values and goals. This may be causing conflict and insecurity in your relationship. Each of you need to stay open minded and try to understand where the other person is coming from.  Compromise is needed to bring about agreement without pushing either of you too far out of your comfort zone.</p>";
  }
}
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
  rw_meaning: Hierophant()
};

function Lovers() {
  if (u == 0) {
    return "<p>In a love or relationship Tarot reading The Lovers is one of the best cards you can get! It is a soulmate card and signifies kindred spirits and an intense bond between two people. If you are single, love is coming your way! This will be more than mere infatuation. There will be an intense attraction and sexual passion as well as romance and a deep connection and mutual understanding. this Major Arcana card tells you to expect a rekindling of the romance in your relationship. The bond between you and your partner will increase and deepen more than you can imagine. The Lovers represent you and your partner having a spiritual, emotional, mental and physical connection that most couples can only dream about. Lucky you!</p>";
  } else {
    return "<p>The Lovers reversed can indicate that while the sexual aspect of things is still great, you and your partner may not be on the same page in other important areas. It can also be a signifier that one partner is more emotionally invested in the relationship. Fear or trust issues could be stopping you from jumping in fully, which is necessary for the relationship to flourish. You may have different goals, values or hopes for the future. The relationship may have started off with you both feelings connected on many levels but you don’t feel as close as you used to. Look to the supporting cards for confirmation of the root cause. Whatever the reason, these differences need to be resolved if the relationship is to survive. If you are single The Lovers does indicate a relationship is coming your way but it may not happen as soon as you hoped. Alternatively, it can represent picking partners for the wrong reasons. If you are going to get involved with someone, this Major Arcana card tells you to make sure you connect with them in more than one way. A sexual connection, even an intense one, is not enough in itself to make a relationship work.</p>";
  }
}
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
  rw_meaning: Lovers()
};

function Chariot() {
  if (u == 0) {
    return "<p>In a Love card meaning, The Chariot suggests that you need to conquer your emotions in order to have a successful relationship. If you and your partner have been going through a rough patch, you will need to come together, communicate and work hard. The challenges you face are not insurmountable. They just require some hard work and focus to resolve them. If you or your partner anxiety issues, it is crucial to get these under control as The Chariot Tarot also represents the need to balance the mind and heart to be successful. If your partner uses logic as emotional armour, you may need to get around their defences in order for your relationship to work. If you are single, The Chariot is an indication that your past relationships have let you battle weary. The Chariot signifies that you can overcome the pain of your past and move forward in your love life.</p>";
  } else {
    return "<p>The overall message of The Chariot reversed in a love Tarot reading is slow down! If you are a relationship and things aren’t progressing as fast as you would like you need to have patience and be confident that things will progress in their own time. Forcing things could be disastrous. Likewise, if you are feeling pressure into moving your relationship to the next level, don’t allow yourself to be coerced. Take a step back and consider what you are ready for. Be clear with your partner and set boundaries. If you are single, you may meet someone soon but the same message applies, don’t rush things. Enjoy the excitement of a new relationship and take time to get to know your new love interest without piling on the pressure. Sometimes it’s better to just go with the flow and let things evolve at their own pace.</p>";
  }
}
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
  rw_meaning: Chariot() 
  };

function Strength() {
  if (u == 0) {
    return "<p>Strength is the Major Arcana card that represents the Leo star sign so a relationship with a Leo may be on the cards if this appears. If you are single the Strength card is an indicator that now is a great time to meet someone as your confidence will be shining through. It can also be an indicator of a relationship coming up with someone who has a bit of a wild side. This can be an exciting prospect but if this person is too wild you may feel the need to tame them somewhat. If you do want to tame them, coax them gently, don’t try to dominate them. For those already in a relationship, Strength is generally a good indicator that you are a strong couple, close and united. If your relationship has gone through a lot of emotional upheaval, this card suggest that you are starting to get back on top of it and that any problems you faced in the past have actually brought you closer together.</p>";
  } else {
    return "<p>The Strength Tarot reversed in a love Tarot reading if you are single can indicate that lack of impulse control or unresolved self-esteem issues may be leading you to choose the wrong partners. This can become a vicious circle as bad relationships negatively affect your self-esteem. You need to resolve these issues and summon your inner strength and confidence and believe that you deserve better. Strength reversed can indicate that while your relationship is strong, low self-esteem may be leaving you feeling unworthy of the love you are receiving. This in turn may lead you to act impulsively and behave in manner that is not a true reflection of the feelings you have for your partner. Don’t let your anxiety or fear create problems where there are none.</p>";
  }
}
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
  rw_meaning: Strength()};

function Hermit() {
  if (u == 0) {
    return "<p>if you are single The Hermit Tarot card represents coming out the other side of a period of loneliness and solitude that may have been needed to recuperate from past heartbreak or a bad breakup. You will soon be ready for a fresh start. It can also indicate celibacy or chastity. The Hermit upright can represent an older wiser partner. It can also suggest that you may need to make more of an effort to connect with your partner. It can indicate that you and your partner are too focused on doing your own thing rather than spending quality time together.  </p>";
  } else {
    return "<p>The Hermit reversed in a love Tarot context is strong indicator of loneliness. If you are in a relationship it suggests that you may be feeling shut out or rejected by your partner. It can also indicate that you and your partner are so busy that you have no time to connect. This may be leading you to feel lonely even though you are in a relationship. It can also suggest one person withdrawing from a relationship while the other is still trying to hold on to it. If you are single, The Hermit reversed can indicate that you fear being left on the shelf or you feel you may have missed your window of opportunity to meet someone special. The Hermit in reverse can indicate that now is time to start looking for love after a being single for a long time. You need to put aside your fears and put yourself out there again.  If you have recently broken up with your partner it can be a sign that you want to get back together with your ex.</p>";
  }
}
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
  rw_meaning: Hermit()};

function WheelFortune() {
  if (u == 0) {
    return "<p>Wheel of Fortune in an upright position normally indicates a positive change so you could be taking the next step in your relationship or starting a new phase with your partner or even some sort of joint project. At the same time, the change the Wheel of Fortune Tarot card brings can be difficult. If you have been finding that you are no longer content in a relationship, this card can signal an upheaval. That could be you and your partner shaking things up and making much needed changes to improve your relationship or it could be a breakup that will leave you free to move onto better things. Whatever happens, it will lead you to where you are supposed to be. If you are single, Wheel of Fortune in your Tarot reading can indicate that the universe is working to bring you the love you deserve but you have to work with the universe! You have good fortune coming in love so now is the time to put yourself out there, get out and meet new people. Make sure you are discerning about exactly what you want in a partner as you have an opportunity to get just that with this card making an appearance in your Tarot spread. The Wheel of Fortune is also a card of destiny so in a love context it can signify soulmates. If you are single you may be meeting yours soon. it may indicate that you and your partner are meant to be! Look to the supporting cards to confirm this. </p>";
  } else {
    return "<p>if you are in a relationship the Wheel of Fortune Tarot reversed can represent stagnancy or the sparkle going out of the relationship. That doesn’t mean that you should automatically make a knee-jerk decision to end the relationship as all relationships have their ups and downs. You may just be moving from one phase of a relationship to another and this could be a little slump in between. Try and assess the situation and find what works for you. Either way this time of upheaval shall pass. Previous mistakes may come back and cause issues. If you are single and feel you have been unlucky in relationships, you need to look at your own choices and behaviour. Have you thrown away opportunities for love? If so, learn from your mistakes and you will get another chance at happiness. We choose the lessons we are meant to learn in this life and you can change your luck by learning from your past and applying these karmic lessons to your future. Whether you are single or in a relationship, the Wheel of Fortune Tarot card in a reversed position is a sign that you may experience setbacks or delays. Try to go with the flow, the only way is up. </p>";
  }
}
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
  rw_meaning: WheelFortune()};

function Justice() {
  if (u == 0) {
    return "<p>In a love Tarot reading, if you are single, Justice can indicate a relationship with a person in the legal industry (judge, lawyer, legal secretary etc.) It is the Tarot card that corresponds to Libra, so a Libra may be coming into your life. If you have treated others with integrity and kindness and not been treated well in return in relationships, Justice in a love tarot reading can indicate that this imbalance is about to be corrected with the loving partner you deserve coming into your life. It can also signify that those who have treated you badly will get their comeuppance. whether Justice is a good or bad omen really depends on the behaviour of you and your partner. If you are both being honest and acting with integrity in your relationship then you will see the rewards in the form of a period of harmony or a bigger commitment. It can indicate marriage, representing the marriage contract. However, if either of you have been dishonest or have cheated, Justice indicates that the truth will be revealed and whoever has been dishonest will reap what they have sown.</p>";
  } else {
    return "<p>if you are in a relationship Justice reversed can be a strong indicator of being caught out in a deception or cheating. So if you have been cheating on your partner or lying to them, expect big repercussions. You may also find that any arguments between you and your partner seem endless with this Major Arcana trump card in your Tarot reading. It can also be a sign that you feel you are not being treated fairly or as an equal in the relationship. Before you go casting judgements on your partner, examine your own role in the relationship and ask yourself if you are being fair by apportioning the blame to your partner. If you assess your relationship issues and feel you are blameless, you should still try to learn from the situation. Remember, we teach people how to treat us and what we put up with, we end up with! If you are single, Justice reversed can indicate that while you may feel you are ready for the relationship you deserve, you have still not learned the lessons from your past relationships that are necessary for you to move forward and avoid repeating the same mistakes. It can also indicate that you tend to lack balance in relationships and this maybe causing your relationships to flounder. We all get caught up in the initial excitement of new love but be careful not lose yourself completely! Try to maintain a balance between you love life and your own independent life when you meet someone, it will give your relationships the space they need to grow. If you have treated past partners badly, Justice reversed can be a sign that you may be suffering the consequences of your actions.</p>";
  }
}
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
  rw_meaning: Justice()};

function HangedMan() {
  if (u == 0) {
    return "<p>In a love Tarot context The Hanged Man indicates that you may be unhappy with the way your relationship is going at the moment. It can also signify that either you or your partner may be feeling the need to take a step back from the relationship to assess your options or where you want the relationship to lead. The Hanged Man tells you to hold off on making any decisions and just give yourself time to think things through. You may need to rethink your perceptions of what your relationship should be like and focus on the positive aspects of the relationship as it is instead of worrying about what it isn’t. Alternatively, if you find that you are truly unhappy, The Hanged Man appearing in your Tarot reading tells you that you are the only one keeping yourself in this situation. You can walk away if you want to. If you are single, The Hanged Man can indicate that you need to release yourself from situations, ideas or people that do not make you happy. This may involve releasing old negative relationship patterns. If you have been holding on to your feelings for an ex, The Hanged Man tells you it’s time to release those feelings. It may also signify that you need to release any rigid preconceptions about your ideal partner in order to open yourself up to the options around you.   </p>";
  } else {
    return "<p>If you are single, The Hanged Man in a reversed position can indicate that you have been repeating the same negative relationship patterns over and over without learning from your mistakes. You may be rushing from bad relationship to the next and never taking responsibility for the role you play in choosing these relationships. Try to slow down, figure out why this pattern keeps continuing and what you need to resolve within yourself to change it. The Hanged Man can indicate that your relationship may not be working but you or your partner may be holding onto it for fear of being alone or starting over. It can also indicate that the relationship could be salvageable but you are not currently prepared to confront the issues you are experiencing.</p>";
  }
}
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
  rw_meaning:HangedMan()};

function Death() {
  if (u == 0) {
    return "<p>Death in a love tarot context can signify that you or your partner may be holding onto a relationship that’s not working or you may be clinging to old patterns that are stopping your relationship from moving forward. Death signifies that things are going to change whether you want them to or not. You can either resist the change or embrace it. If your relationship is not going well, the Death Tarot card can indicate that it may be time to walk away, it can indicate divorce or it can indicate that you and your partner need to make big changes and let go of old patterns or issues to make it work. The old issues the Death card seeks to change can be deep seated and painful. If that’s the case, you may want to consider relationship counselling. The outcome really depends on whether or not you and your partner are both willing to embrace the transformation and really want the relationship to survive because you love each other rather than because you fear not being in the relationship. The changes the Death Tarot card can bring to a relationship can be positive too, it can indicate an unexpected change like a surprise engagement or a pregnancy, you may find these changes overwhelming initially. If you are single, the Death card can indicate that you will soon be casting off the old beliefs, issues or behaviours that are no longer useful to you. Embrace this transformation as it will bring new love into your life.    </p>";
  } else {
    return "<p>the Death Tarot card reversed in a love tarot reading, is a strong indicator that you are resistant to a change in your relationship. You may be holding on to a relationship that has long since run its course because you feel dependent on your partner or are terrified of loneliness. Or you may be staying with a partner who you no longer love out of a sense of obligation. It can also indicate that a relationship that you thought was finished long ago could resurface and rekindle. If you are single, Death reversed is a strong indicator that you need to let go of negative behaviour patterns in order to bring something positive into your love life. For example, if you have a tendency to pick bad partners due to low self-esteem you will need to build your self-confidence and let go of your self-sabotaging behaviours in order to allow a partner in to your life who will treat you with love and respect. </p>";
  }
}
var Death = {
  name: "Death",
  index: 13,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img: "https://upload.wikimedia.org/wikipedia/en/d/d7/RWS_Tarot_13_Death.jpg",
  rw_addendum:"",
  rw_meaning:Death()};

function Temperance() {
  if (u == 0) {
    return "<p>In a love Tarot reading, the Temperance Tarot card is one of the best cards you can get. It signifies a harmonious relationship where you and your partner find the perfect balance of love, commitment and respect. It is also a signifier of soulmates. If you have been having relationship problems, Temperance is an indicator that you will both resolve whatever issues have been holding your relationship back in order to move forward together. If you are single, Temperance is an indicator that you will be learning to balance the other areas of your life in order to make room for a loving partner to come into your life. Once you have done this you will attract the right partner to you.</p>";
  } else {
    return "<p>In a love Tarot spread, Temperance reversed can indicate conflict and clashes caused by an imbalance in the relationship. This may be a result of one of you feeling like you care more than the other or feeling like the love and respect you show your partner is not reciprocated. There is a lack of harmony in the relationship and you may find that you are arguing with each other, that you’re not willing to listen to each other.  You may also find yourselves being outright antagonistic with each other and trying to point score rather than working together to resolve your issues. Try to calm the situation down and find your own inner balance so that you can better cope with the issues you are facing and make yourself more open to finding solutions. If you are single, Temperance reversed can indicate that you are giving too much of yourself too soon to the people you’re interested in. This can be simply that you’re trying too hard or coming across as too eager or it can indicate promiscuity or coming across as completely desperate! Try to be patient if you’re looking for love. Don’t be hasty or try to force a relationship before you’ve gotten to know someone properly. Just relax, try to find your own inner balance and let any new romance develop at its own pace.</p>";
  }
}
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
  rw_meaning:Temperance()};

function Devil() {
  if (u == 0) {
    return "<p>The Devil can be a sign that you or your partner are feeling trapped. It may indicate a loss of freedom brought on by becoming too engrossed in a relationship. The Devil shows that this level of co-dependence is unhealthy. You and your partner should take a step back and try to rediscover some interests outside the relationship. It can also signify that you or your partner may be suffering from mental health issues that are affecting the relationship. If this is the case, seek the help of a professional counsellor to assist you both during this time. The Devil Tarot card can be a sign of jealousy, envy, deception, dominance, cheating and in an extremely negative context abuse, violence or sexual assault. Look to supporting cards to confirm this. If you feel trapped in a relationship because of any form of abuse, remember you can free yourself of this situation, don’t let The Devil make you feel powerless. If you are single, The Devil can indicate sex without love. You may be having unfulfilling or even dangerous sexual encounters or allowing yourself to be used by people who do not care about you because you desperately want to be loved. If that is the case, take a break from dating until you’ve built up your self-esteem. The Devil can also be an indicator of a potential relationship that may be harmful to you. This new love interest may have a drug addiction, become overly dependent on you possibly as a result of mental health issues, be deceptive or become violent or abusive. Although they may seem intriguing or exciting at first, The Devil indicates danger, so avoid letting this person into your life.</p>";
  } else {
    return "<p>The Devil Tarot card reversed can indicate that you and your partner may have been feeling stuck in a rut or felt like the relationship was on its way out but you having started to come out the other side of this. It can also be an indicator of a close call, one of you may have come close to doing something that would have irreparably damaged your relationship (e.g. an affair or infidelity) but decided to honour your relationship instead. If you have been in an abusive relationship, you may be beginning to realise that you deserve better and to take back your power. The influence your abusive partner once had over you may be lessening as you start to realise that you have choices and there is help out there for you. If you are single, The Devil reversed can indicate a close call with the type of negative, abusive or dangerous person described in the upright meaning. It can also indicate that previously you may have felt you were stuck with being single or were so desperately seeking someone to love you that you were prepared to put up anything. However, you are starting to become more aware of yourself and how this behaviour has been hindering your search for love. You may need to take a step back from dating for while to just start enjoying the freedom of only having yourself to answer to that being single brings. With this new attitude emerging, the right partner won’t be far behind so relax and enjoy this time.</p>";
  }
}
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
  rw_meaning: Devil()};

function Tower() {
  if (u == 0) {
    return "<p>In a love Tarot reading, The Tower can be a bad omen representing, break-ups, separation or divorce. It can also represent either you or your partner or both, going through a difficult or traumatic event that will push your relationship to its absolute limits. If you want your relationship to survive this Tower event, you will need to try to be there for each other and maintain open and honest communication. If your relationship survives this upheaval, The Tower tells you that the relationship will have changed significantly. This may not necessarily be a bad thing as The Tower represents destruction of false beliefs too, so the relationship may come out completely changed but with a more solid and honest foundation. However, getting to that point will be one of the most difficult things you will go through as a couple. If you are single, you may find that you suddenly have to face an uncomfortable revelation about why you are single. If ego or arrogance has been getting in the way of you forming healthy relationships, it may indicate that a chaotic or destructive event is going to break down that ego. While this will not be a pleasant experience, it will teach you humility and improve your chances of a happy, healthy relationship in the future.  The Tower can also indicate violence or assault so it can be a warning to be mindful of your personal safety when getting out there and meeting new people. Don’t be overly cautious but have your wits about you and take appropriate safety precautions.</p>";
  } else {
    return "<p>The Tower reversed can signify that while you know your relationship is as good as over, you are avoiding actually ending it for fear of the pain it will bring. You may think you can paper over the cracks but this would be like putting a band aid on a gunshot wound. You need to face facts and understand that as long as you hold onto something that is broken you are preventing yourself from moving onto something better. If your relationship has recently come through a Tower event, different but intact, The Tower reversed is telling you not to try and get the relationship back to the way it was previously. Your relationship has changed because it needed to, you can’t go back. You need to decide if this new version of your relationship is something you want. If you are single, The Tower reversed can indicate that you have avoided a disastrous relationship with someone who was possibly dangerous, abusive or violent. It can also indicate that you are delaying or completely avoiding dealing with a traumatic or painful breakup. While you may think this approach is easier than facing up to what you’ve been through, it is actually stopping you from moving on your love life.  Stop and face whatever you’re running from, learn what you can from it and then draw a line under it and leave it in the past where it belongs. It hard to move forward when you’re dragging a truck load of baggage behind you so deal with it and let it go.</p>";
  }
}
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
  rw_meaning:Tower()};

function Star() {
  if (u == 0) {
    return "<p>The Star in a love Tarot reading can indicate a relationship with an Aquarius. If you are single, The Star is an indicator that you are ready to let go of any baggage you have been carrying from past relationships. Your future love life looks positive and now is a great time to meet people. It can also signify someone from your past coming back into your life to rekindle a relationship. If you are in a relationship the Star is a sign that your relationship will be progressing into something deeper. If you have had problems in the relationship previously, The Star tells you that these issues can be healed and you can have a bright future if you open yourself up to healing.</p>";
  } else {
    return "<p>The Star reversed indicates that you may have lost faith in the relationship or are focusing on the negative and missing the positive aspects of your relationship. Your relationship may have lost some of its spark, you may feel that the relationship has become stagnant and monotonous and that you and your partner have disconnected on some level. The Star reversed tells you that these problems can be fixed but you have to be prepared to heal old wounds and clear out any negative energy from the relationship if you want to go forward. If you are single, The Star reversed indicates loneliness and lack of faith in the universe’s plan for you. You may be feeling like you will never meet the right person for you. You may feel that you are becoming cynical about love. You need to release your fears and let go of the negative energy you’ve been holding on to in order to move forward. Love will appear when you least expect it!</p>";
  }
}
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
  rw_meaning:Star()};

function Moon() {
  if (u == 0) {
    return "<p>The Moon Tarot card in a love Tarot reading can indicate that you may be feeling uncertain or insecure in the relationship. If your relationship looks fine to the outside world, The Moon can show that things are not as perfect as they seem. There may be miscommunication in the relationship. There could be a lot of arguments or old issues or insecurities coming to the surface. It can also signify deception, but don’t jump to conclusions if you see it in your Tarot reading. Stay calm and wait until the facts of the matter become clearer. If you are single, The Moon can indicate deceit around you or that you may be being conned. If you are dating, be mindful that this person’s intentions may not be as honourable as they seem or you may not have all the facts about them yet. It indicates that there is some piece of information that is yet to reveal itself. </p>";
  } else {
    return "<p>If you are in relationship, The Moon reversed can indicate deception or lies being unveiled. This could be an affair being exposed. It can also simply be an indication of the truth of your relationship coming to light. Perhaps you have been deceiving yourself about the current state of the relationship or blinding yourself to certain things about your partner. If so, The Moon reversed shows that you will see your partner’s true character or the truth about your relationship. If you are single, The Moon reversed can be an indicator that you are starting to regain your composure and self-confidence after a period of uncertainty. It can also be an indicator that you may be ignoring signs or your instincts that a potential partner is not suitable for you. An example of this would be noticing warning signs that the person you’re dating is married or involved but ignoring the signs because you don’t want to believe it.</p>";
  }
}
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
  rw_meaning:Moon()};

function Sun() {
  if (u == 0) {
    return "<p>In a love Tarot spread, The Sun is an indication great joy and happiness. It can be a sign of a period of fun, passion and positivity in your relationship. At the same time, The Sun in an upright position shines light onto everything in its path and this includes relationships, so it can also indicate that any hidden issues in your relationship will be highlighted. Any issues highlighted by The Sun will be resolved for your greater good. This can either take the form of the relationship becoming more open and honest or in some cases ending to allow a better relationship to come to you. Look to supporting cards for verification. Whatever the outcome The Sun is bringing something positive and good into your love life. The Sun can also indicate a celebration such as an engagement or wedding. If you are single, The Sun indicates that a great relationship could be coming your way. It can also indicate that you will be feeling carefree and enjoying the fun aspects of being single. Whether you are involved or single, The Sun is one of the main pregnancy indicators in the Tarot deck. If you are not ready for children, take appropriate precautions.</p>";
  } else {
    return "<p>The Sun reversed can indicate that you are feeling left out in the cold by your partner. Some of the spark or passion may have gone out of the relationship. It can be an indication of a broken engagement or cancelled wedding. It may indicate that you are finding it difficult to see a way forward for you and your partner. It can also signify jealousy or trying to score points off each other. Try to focus on the positive things in the relationship, spend quality time together and remind yourself of why you got together in the first place. If you are single, The Sun reversed can be an indicator that you have become so egotistical that you are putting off potential partners. Trying to impress a potential partner may actually be having the opposite effect as it may come across that you are constantly bragging. Just dial it back a bit. They will respond much more favourably if you drop that ego, just be yourself!</p>";
  }
}
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
  rw_meaning:Sun()};

function Judgment() {
  if (u == 0) {
    return "<p>In a love Tarot spread, Judgement can indicate that you or your partner may be judging each other too harshly. Be wary of throwing blame or accusations at each other during arguments to try and provoke a reaction, you may do more damage to your relationship than you mean to. Instead try to sit down and talk through how you are feeling without trying to apportion blame. You need to forgive past mistakes if you want the relationship to move forward. You may be able to breathe new life into a relationship that’s falling flat with simple, open and honest communication. It can also indicate that others are judging your relationship or talking about you and your partner behind your back. The best thing you can do in this instance is rise above it. It’s really their issue, not yours. Alternatively, Judgement can signify being separated from someone you love by an ocean or sea so it may indicate that you and your partner could be living in separate countries for a while or having a long distance relationship. If you are single, judgement tells you not to be too hasty in judging potential partners. Give yourself a chance to get to know them before you decide if they are right or wrong for you. It also reminds you to be mindful of how you come across as you never get a second chance to make a first impression!  </p>";
  } else {
    return "<p>Judgement reversed can indicate that you are avoiding making a decision about the relationship because of self-doubt. Whether this decision is about the relationship moving forward or ending, it is a decision that needs to be made. Judgement reversed can also indicate malicious gossip or false accusations so if you have heard nasty rumours about your partner, make sure you get the facts before you rush to judgement. The Judgement Tarot card reversed can also indicate issues caused by failure to learn from the past. Perhaps you and your partner have been through a rough patch and you feel like you should be closer now but you’re not. Ask yourself have you learned all you could from those past issues and are you applying that knowledge to your relationship? If you are single, Judgement reversed can indicate that you are letting shyness or embarrassment stop you from approaching the person you are interested in. Don’t let fear hold you back! Whether or not it works out the way you want it to, at least you’ll know you tried and you won’t have to forever wonder “what if?”</p>";
  }
}
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
  rw_meaning:Judgment()};

function World() {
  if (u == 0) {
    return "<p>In a love Tarot reading, The World can signify reaching a goal you have aspired to. That may be getting married or having children or just being in a very happy, secure, loving and committed place in your relationship. There are whole worlds opening up to you and your partner, enjoy this time, you have both had to work to get your relationship to this point. If you are single, The World signifies that there are so many options open to you. It suggests that you have worked hard to overcome your personal challenges to reach stage where you are at peace with yourself and your place in the world. This can only mean good things for you romantically, as like attracts like. When you are comfortable with yourself, happy and open to the possibilities this life has to offer you will draw someone amazing into your life. It can also be an indication that you may meet someone new while travelling or someone who travels a lot perhaps as part of their job. It also suggests that you will be popular and in-demand.</p>";
  } else {
    return "<p>In a love Tarot spread, The World reversed can indicate that your relationship has become stagnant. It may be that you and your partner have let things slide and you need to put more effort in to the relationship and having open and honest communication to get it back on track. If, however, you have been putting serious work into your relationship but it doesn’t seem to be getting any better, you may need to consider if this is the right relationship for you. If you are single, you may feel that your love life has fallen flat but ask yourself if you’ve been making enough effort to get out and meet the right people. Prince/Princess charming is not just going to knock on your door and sweep you off your feet. You have to get out and meet people. Don’t be afraid to put yourself out there. The World reversed can also indicate that you are struggling to move on from a relationship that ended without warning. Perhaps a previous partner suddenly cut you off without warning or didn’t give you the time you needed to come to terms with the end of relationship. This can be incredibly difficult to deal with as you have not had an opportunity to get closure. Don’t wish your life away waiting for them to come back. You may never get closure from your previous partner so you must focus on finding another way to make your peace with what has happened. Ask the universe to help you in this and keep yourself open to opportunities for healing. You will get through it in time but it will take a big conscious effort on your part, so put your focus into that.</p>";
  }
}
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
  rw_meaning:World()};

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
  if (rightCard["direction"] == "reversed") {
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
      card_obj["identifier"] = "Present";
      break;
    case 2:
      card_obj["identifier"] = "Challenge";
      break;
    case 3:
      card_obj["identifier"] = "Past";
      break;
    case 4:
      card_obj["identifier"] = "Future";
      break;
    case 5:
      card_obj["identifier"] = "Above";
      break;
    case 6:
      card_obj["identifier"] = "Below";
      break;
    case 7:
      card_obj["identifier"] = "Advice";
      break;
    case 8:
      card_obj["identifier"] = "Influences";
      break;
    case 9:
      card_obj["identifier"] = "Hopes";
      break;
    case 10:
      card_obj["identifier"] = "Outcome";
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

