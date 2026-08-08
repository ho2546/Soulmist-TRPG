const STORAGE_KEY = "soulmist-sheet-mvp";

const abilities = [
  { key: "str", label: "力量" },
  { key: "dex", label: "敏捷" },
  { key: "con", label: "體質" },
  { key: "int", label: "智力" },
  { key: "wis", label: "感知" },
  { key: "cha", label: "魅力" },
];

const skillDefinitions = [
  { key: "acrobatics", label: "特技", ability: "dex" },
  { key: "animal", label: "馴獸", ability: "wis" },
  { key: "arcana", label: "奧秘", ability: "int" },
  { key: "athletics", label: "運動", ability: "str" },
  { key: "deception", label: "欺瞞", ability: "cha" },
  { key: "history", label: "歷史", ability: "int" },
  { key: "insight", label: "洞悉", ability: "wis" },
  { key: "intimidation", label: "威嚇", ability: "cha" },
  { key: "investigation", label: "調查", ability: "int" },
  { key: "medicine", label: "醫藥", ability: "wis" },
  { key: "nature", label: "自然", ability: "int" },
  { key: "perception", label: "察覺", ability: "wis" },
  { key: "performance", label: "表演", ability: "cha" },
  { key: "persuasion", label: "說服", ability: "cha" },
  { key: "religion", label: "宗教", ability: "int" },
  { key: "sleight", label: "巧手", ability: "dex" },
  { key: "stealth", label: "隱匿", ability: "dex" },
  { key: "survival", label: "求生", ability: "wis" },
];

const armorTypes = [
  { key: "none", label: "無護甲", base: 10, dexMode: "full" },
  { key: "leather", label: "皮甲", base: 11, dexMode: "full" },
  { key: "studded", label: "鑲釘皮甲", base: 12, dexMode: "full" },
  { key: "hide", label: "獸皮甲", base: 12, dexMode: "cap2" },
  { key: "chainshirt", label: "鎖子衫", base: 13, dexMode: "cap2" },
  { key: "scale", label: "鱗甲", base: 14, dexMode: "cap2" },
  { key: "breastplate", label: "胸甲", base: 14, dexMode: "cap2" },
  { key: "halfplate", label: "半身板甲", base: 15, dexMode: "cap2" },
  { key: "ringmail", label: "環甲", base: 14, dexMode: "none" },
  { key: "chainmail", label: "鎖子甲", base: 16, dexMode: "none" },
  { key: "splint", label: "條板甲", base: 17, dexMode: "none" },
  { key: "plate", label: "全身板甲", base: 18, dexMode: "none" },
];

const fullCasterSlots = {
  1: [2, 0, 0, 0, 0, 0, 0, 0, 0], 2: [3, 0, 0, 0, 0, 0, 0, 0, 0],
  3: [4, 2, 0, 0, 0, 0, 0, 0, 0], 4: [4, 3, 0, 0, 0, 0, 0, 0, 0],
  5: [4, 3, 2, 0, 0, 0, 0, 0, 0], 6: [4, 3, 3, 0, 0, 0, 0, 0, 0],
  7: [4, 3, 3, 1, 0, 0, 0, 0, 0], 8: [4, 3, 3, 2, 0, 0, 0, 0, 0],
  9: [4, 3, 3, 3, 1, 0, 0, 0, 0], 10: [4, 3, 3, 3, 2, 0, 0, 0, 0],
  11: [4, 3, 3, 3, 2, 1, 0, 0, 0], 12: [4, 3, 3, 3, 2, 1, 0, 0, 0],
  13: [4, 3, 3, 3, 2, 1, 1, 0, 0], 14: [4, 3, 3, 3, 2, 1, 1, 0, 0],
  15: [4, 3, 3, 3, 2, 1, 1, 1, 0], 16: [4, 3, 3, 3, 2, 1, 1, 1, 0],
  17: [4, 3, 3, 3, 2, 1, 1, 1, 1], 18: [4, 3, 3, 3, 3, 1, 1, 1, 1],
  19: [4, 3, 3, 3, 3, 2, 1, 1, 1], 20: [4, 3, 3, 3, 3, 2, 2, 1, 1],
};

const halfCasterSlots = {
  1: [0, 0, 0, 0, 0, 0, 0, 0, 0], 2: [2, 0, 0, 0, 0, 0, 0, 0, 0],
  3: [3, 0, 0, 0, 0, 0, 0, 0, 0], 4: [3, 0, 0, 0, 0, 0, 0, 0, 0],
  5: [4, 2, 0, 0, 0, 0, 0, 0, 0], 6: [4, 2, 0, 0, 0, 0, 0, 0, 0],
  7: [4, 3, 0, 0, 0, 0, 0, 0, 0], 8: [4, 3, 0, 0, 0, 0, 0, 0, 0],
  9: [4, 3, 2, 0, 0, 0, 0, 0, 0], 10: [4, 3, 2, 0, 0, 0, 0, 0, 0],
  11: [4, 3, 3, 0, 0, 0, 0, 0, 0], 12: [4, 3, 3, 0, 0, 0, 0, 0, 0],
  13: [4, 3, 3, 1, 0, 0, 0, 0, 0], 14: [4, 3, 3, 1, 0, 0, 0, 0, 0],
  15: [4, 3, 3, 2, 0, 0, 0, 0, 0], 16: [4, 3, 3, 2, 0, 0, 0, 0, 0],
  17: [4, 3, 3, 3, 1, 0, 0, 0, 0], 18: [4, 3, 3, 3, 1, 0, 0, 0, 0],
  19: [4, 3, 3, 3, 2, 0, 0, 0, 0], 20: [4, 3, 3, 3, 2, 0, 0, 0, 0],
};

const races = {
  "盧明人": { bonuses: { int: 2 }, speed: 30, languages: ["通用語", "任選另一語言"], traits: ["學術天才", "啟蒙教育"], blessing: "菲耶拉的賜福：永恆沙漏見證者", summary: "以預視能力、知識社會與衰老代價為核心。", specialFields: [{ type: "number", name: "lumenAging", label: "衰老等級", min: 0, value: 0 }, { type: "number", name: "lumenExhaustion", label: "力竭等級", min: 0, value: 0 }] },
  "普萊默斯人": { bonuses: {}, speed: 30, languages: ["通用語", "普萊默斯語"], traits: ["烈酒肉體", "血釀祝福"], blessing: "飲宴與鮮血的傳承", summary: "靠飲酒、血性與祝福驅動的前線生存者。", specialFields: [{ type: "select", name: "primusBonusTarget", label: "屬性加值目標", options: abilities.map((item) => item.label) }, { type: "number", name: "lastDrinkDays", label: "距離上次飲酒天數", min: 0, value: 0 }, { type: "select", name: "bloodBlessingMode", label: "血釀祝福狀態", options: ["未啟動", "強韌肉體", "狂暴衝鋒", "恐懼 / 威嚇", "鮮血回春"] }] },
  "艾維尼安人": { bonuses: {}, speed: 30, languages: ["敘靈語"], traits: ["動物之靈與半變形", "完全變形能力"], blessing: "獸靈與轉化", summary: "與動物之靈締約，可在半變形與全變形間切換。", specialFields: [{ type: "select", name: "avianGroup", label: "部族", options: ["曙羽", "夜爪", "潮喙", "朽角", "峽奔", "月翎"] }, { type: "select", name: "avianBonusTarget", label: "屬性加值目標", options: abilities.map((item) => item.label) }, { type: "text", name: "animalSpirit", label: "動物之靈", placeholder: "例如：雪梟、黑狼、山羚" }, { type: "text", name: "spiritSkill", label: "靈魂技能", placeholder: "例如：察覺、隱匿、求生" }, { type: "text", name: "alwaysOnTrait", label: "常駐靈性特徵", placeholder: "例如：夜視、攀爬、嗅覺敏銳" }, { type: "select", name: "shapeshiftState", label: "變形狀態", options: ["常態", "半變形", "全變形"] }, { type: "textarea", name: "halfFormTraits", label: "半變形特徵", rows: 3, placeholder: "列出獲得的移動、感官、攻擊或社交變化" }, { type: "textarea", name: "fullFormTraits", label: "全變形特徵", rows: 3, placeholder: "列出完整獸形的能力與限制" }] },
  "東德雷塞爾人": { bonuses: {}, speed: 30, languages: ["通用語", "德雷塞爾古語"], traits: ["深幽適應", "幽冥承受力"], blessing: "地底祖靈", summary: "長於高幽冥環境，面對黑暗與侵蝕更能硬扛。", specialFields: [{ type: "text", name: "eastBranchNote", label: "東支習俗 / 備註", placeholder: "例如：黑巖城獵團、礦道誓約" }] },
  "西德雷塞爾人": { bonuses: { cha: 2 }, speed: 30, languages: ["通用語", "德雷塞爾古語"], traits: ["樹子外殼", "生命守護"], blessing: "樹心古誓", summary: "以樹皮般的外殼與生命庇護，兼具韌性與神祕氣質。", specialFields: [{ type: "select", name: "treeChildMode", label: "樹子外殼模式", options: ["自然護甲 13 + 體質", "敏捷導向戰鬥", "魅力引導儀式"] }] },
};

const classes = {
  "戰士": { hitDie: 10, hpBase: 10, proficiencies: ["所有護甲", "盾牌", "簡易武器", "軍用武器"], weaponProficiencies: ["簡易武器", "軍用武器"], features: ["戰鬥風格", "回氣", "動作如潮", "額外攻擊", "不屈"], resources: ["回氣", "動作如潮", "不屈"], subclasses: ["門士", "血精英", "黑騎士", "獸群領袖", "聖堂騎士"], summary: "通用前排，擅長戰鬥風格與高行動效率。" },
  "野蠻人": { hitDie: 12, hpBase: 12, proficiencies: ["簡易武器", "軍用武器", "盾牌"], weaponProficiencies: ["簡易武器", "軍用武器"], features: ["狂暴", "危險感知", "魯莽攻擊", "快速移動", "原始本能"], resources: ["狂暴次數"], subclasses: ["破壞者", "灰燼狂戰士", "戰事之主"], summary: "衝鋒型前線，以高生命值與狂暴爆發支撐戰場。" },
  "遊蕩者": { hitDie: 8, hpBase: 8, proficiencies: ["輕甲", "簡易武器", "手弩", "細劍"], weaponProficiencies: ["簡易武器", "手弩", "細劍"], features: ["偷襲", "巧手動作", "靈巧閃避", "可靠天賦", "心靈堅韌"], resources: ["偷襲傷害", "專精技能"], subclasses: ["詐術師", "刺客", "縱火師"], summary: "高機動與高技能職，擅長迂迴、隱匿與精準擊殺。" },
  "武僧": { hitDie: 8, hpBase: 8, proficiencies: ["簡易武器", "短劍"], weaponProficiencies: ["簡易武器", "短劍"], features: ["武術", "氣點", "疾風步", "震懾拳", "完美身心"], resources: ["氣點"], subclasses: ["風行者", "啟迪僧", "原初門徒"], summary: "以身體修行與內在能量作戰，機動強、節奏快。" },
  "探索者": { hitDie: 10, hpBase: 10, proficiencies: ["輕甲", "中甲", "盾牌", "簡易武器", "軍用武器"], weaponProficiencies: ["簡易武器", "軍用武器"], features: ["獵敵", "自然探索", "戰鬥風格", "原野祕法", "額外攻擊"], resources: ["獵敵目標", "法術位"], subclasses: ["馴獸師", "護林者", "審判者", "斥候"], spellcasting: { ability: "wis", mode: "半施法", preparedFormula: "依等級與感知調整準備法術" }, summary: "偵察、追蹤與野外生存專家，兼具武技與祕法。" },
  "學者": { hitDie: 6, hpBase: 6, proficiencies: ["匕首", "標槍", "長棍", "輕弩", "書冊與工具"], weaponProficiencies: ["匕首", "標槍", "長棍", "輕弩"], features: ["知識骰", "學派研究", "奧術分析", "戰術指引", "廣泛學識"], resources: ["知識骰", "研究主題"], subclasses: ["特使", "工程師", "草藥師"], summary: "以知識支援戰局，適合情報、解謎與團隊增益。" },
  "靈術師": { hitDie: 8, hpBase: 8, proficiencies: ["匕首", "簡易武器"], weaponProficiencies: ["匕首", "簡易武器"], features: ["施法", "靈魂連結", "霧觸感知", "魂印法門", "信念護持"], resources: ["法術位", "靈魂連結"], subclasses: ["死靈師", "薩滿", "巫醫", "醫師"], spellcasting: { ability: "wis", mode: "準備施法", preparedFormula: "感知調整值 + 靈術師等級" }, summary: "與靈界互動的全施法者，擅長保護、詛咒與溝通。" },
  "織霧者": { hitDie: 6, hpBase: 6, proficiencies: ["匕首", "飛鏢", "投石索", "輕弩", "法器", "書寫工具"], weaponProficiencies: ["匕首", "飛鏢", "投石索", "輕弩"], features: ["施法", "法術回收", "秘法學派", "迷霧編織", "高階奧秘"], resources: ["法術位", "法術回收", "迷霧編織"], subclasses: ["元素使", "血法師", "先知"], spellcasting: { ability: "int", mode: "法術書施法", preparedFormula: "智力調整值 + 織霧者等級" }, summary: "純正施法核心，以法術書與秘法技巧主導戰場。" },
};

const subclassSummaries = {
  "戰士:門士": ["偏向守線與戰術壓制。", "適合擔任隊伍前排與掩護核心。"],
  "戰士:血精英": ["把鮮血代價轉成爆發與威懾。", "適合高風險高輸出的近戰節奏。"],
  "戰士:黑騎士": ["以重甲、威嚇與挑戰強敵主導前線。", "適合坦線、承傷與牽制高威脅目標。"],
  "戰士:獸群領袖": ["運用獸群形態與領袖能力強化同伴。", "適合協同作戰與團隊增益。"],
  "戰士:聖堂騎士": ["運用光明火花與聖堂技藝守護戰場。", "適合防護、支援與對抗黑暗。"],
  "野蠻人:破壞者": ["把怨恨與狂暴化為猛烈攻勢。", "適合正面突破與連續擊殺。"],
  "野蠻人:灰燼狂戰士": ["以灰燼毒劑與黑暗抗性維持戰鬥。", "適合危險環境與消耗戰。"],
  "野蠻人:戰事之主": ["以戰吼、聖痕與領袖氣勢鼓舞隊伍。", "適合前線指揮與團隊強化。"],
  "遊蕩者:詐術師": ["偏向詭計、社交與情報收集。", "團外探索與暗線場景很強。"],
  "遊蕩者:刺客": ["結合潛伏與精準暗殺。", "適合短回合爆發與機動切入。"],
  "遊蕩者:縱火師": ["以火藥、炸彈與爆炸裝置製造混亂。", "適合範圍傷害、陷阱與撤離戰術。"],
  "武僧:風行者": ["精進宗派武器與氣的運用。", "適合機動武技與多樣戰鬥架勢。"],
  "武僧:啟迪僧": ["以預知、天眼與時間感知回應危機。", "適合防守反擊與戰局預判。"],
  "武僧:原初門徒": ["把動物之靈與宗派武藝合而為一。", "適合獸靈強化與近戰壓迫。"],
  "探索者:馴獸師": ["帶夥伴上場，擅長雙單位協同。", "適合控場、追擊與站位操作。"],
  "探索者:護林者": ["以陷阱與自然精準掌控地形。", "適合預先布置、守區與伏擊。"],
  "探索者:審判者": ["以暗黑感知與審判之光追獵黑暗。", "適合鎖定邪惡目標與持續追擊。"],
  "探索者:斥候": ["擅長暗界製圖、暗影步與隱密偵察。", "適合探路、滲透與快速脫離。"],
  "學者:特使": ["偏向外交、交涉與秩序調停。", "適合社交場景與團隊支援。"],
  "學者:工程師": ["以發明與機械奇蹟強化隊伍。", "擅長道具、裝置與戰術支援。"],
  "學者:草藥師": ["以古老種子、藥品與草藥支援隊伍。", "適合治療、環境控制與探索準備。"],
  "靈術師:死靈師": ["偏向亡靈、靈縛與死亡權能。", "在死者、僕從與禁忌議題更有戲。"],
  "靈術師:薩滿": ["以先祖與動物魂火支援戰局。", "適合化身、圖騰與靈性輔助。"],
  "靈術師:巫醫": ["擅長腐化、詛咒與禁術操作。", "適合拖長戰與目標封鎖。"],
  "靈術師:醫師": ["以保護與回復為核心。", "適合擔任團隊穩定器。"],
  "織霧者:元素使": ["以元素主題法術建立輸出與場控。", "適合明確屬性風格的施法者。"],
  "織霧者:血法師": ["把自傷轉成更高的施法效益。", "適合高風險高上限的法師玩法。"],
  "織霧者:先知": ["偏向先讀、延後與時間操控。", "適合支援型控場與戰局預判。"],
};

const subclassAliases = {
  "戰士": { "血戰騎士": "血精英" },
  "野蠻人": { "荒魂行者": "破壞者", "血怒圖騰": "破壞者", "原初鬥士": "破壞者", "褻瀆者": "破壞者" },
  "遊蕩者": { "夜行密探": "詐術師", "靈刃客": "刺客" },
  "武僧": { "靜山道": "啟迪僧" },
  "探索者": { "獸契行者": "馴獸師", "迷霧射手": "斥候" },
  "學者": { "遺物考證": "特使", "戰術史官": "工程師" },
  "靈術師": { "侍靈道": "死靈師", "咒疫者": "巫醫", "守命人": "醫師", "渡魂司": "薩滿" },
  "織霧者": { "元素侍者": "元素使", "血術行家": "血法師", "時織者": "先知" },
};

const sampleCharacter = {
  name: "瑟琳娜", player: "Ron", level: 5, xp: 6500, race: "艾維尼安人", class: "織霧者", subclass: "先知",
  background: "迷霧抄寫員", heritage: "時織學派旁系", origin: "潮蝕邊境塔城", destiny: "在大霧降臨前改寫失落預言", creed: "記錄一切，延後毀滅",
  currentHp: 26, maxHpOverride: "", tempHp: 3, gloomLevel: 1, lightSpark: 2, hitDiceUsed: 1,
  concentrationState: "active", inspirationState: "ready", coverState: "half", deathSaveSuccess: 0, deathSaveFail: 0, initiativeScore: 17,
  conditionNotes: "專注中、半掩蔽、低光環境觀察優勢", tacticalNotes: "對施法者保留反制法術；被近身時優先迷霧步脫離",
  armorType: "leather", shieldMode: "none", acOverride: "", cp: 12, sp: 25, gp: 84, pp: 1, carryOverride: "", carryWeight: 41,
  weaponEntries: "秘銀匕首|dex|yes|1d4|穿刺|可投擲、輕型\n短杖|int|yes|1d6|力場|法器導引\n爪擊|str|yes|1d4|揮砍|半變形時可用",
  additionalWeaponProficiencies: "短杖", additionalLanguages: "古艾維尼安語、商會暗語",
  weaponLoadout: "秘銀匕首、短杖、皮甲、時刻沙漏", inventoryNotes: "施法材料包、旅行日誌、火把 x4、口糧 x6、繩索",
  spellbook: "戲法：光亮術、霧觸、法師之手\n1環：護盾術、羽落術、偵測魔法、睡眠術\n2環：迷霧步、鏡影術、定身術\n3環：反制法術、催眠圖紋",
  spellEntries: "0|光亮術|常駐|照明\n0|霧觸|常駐|近距干擾\n1|護盾術|準備|反應保命\n2|迷霧步|準備|保留脫離戰場\n2|鏡影術|準備|自保\n3|反制法術|準備|壓制敵方法師\n3|催眠圖紋|已用|剛剛的大戰已施放",
  spellNotes: "常駐專注：催眠圖紋 / 鏡影術輪換。團戰前先留 1 個 2環位給迷霧步。",
  skillNotes: "專長：觀察者。專精：奧秘、調查。", notes: "與團內戰士共享敵方行動預測。若幽冥升到 3 以上，優先保命撤退。",
  animalSpirit: "灰羽夜梟", spiritSkill: "察覺", alwaysOnTrait: "昏暗視野中察覺檢定優勢", shapeshiftState: "半變形",
  halfFormTraits: "眼部與羽翼顯現，可短距滑翔，夜視增強。", fullFormTraits: "化為大型夜梟，獲得飛行與俯衝，但無法正常施法。",
  avianGroup: "潮喙", avianBonusTarget: "智力", timeSightUses: 2, arcaneRecoveryUsed: 0,
  slot1Current: 4, slot1Max: 4, slot2Current: 3, slot2Max: 3, slot3Current: 2, slot3Max: 2, slot4Current: 0, slot4Max: 0, slot5Current: 0, slot5Max: 0, slot6Current: 0, slot6Max: 0, slot7Current: 0, slot7Max: 0, slot8Current: 0, slot8Max: 0, slot9Current: 0, slot9Max: 0,
  str: 8, dex: 14, con: 14, int: 16, wis: 13, cha: 12,
  skill_arcana_mode: "expertise", skill_arcana_misc: 0, skill_history_mode: "proficient", skill_history_misc: 0, skill_investigation_mode: "expertise", skill_investigation_misc: 0, skill_perception_mode: "proficient", skill_perception_misc: 1, skill_insight_mode: "proficient", skill_insight_misc: 0, skill_stealth_mode: "proficient", skill_stealth_misc: 0,
};

const form = document.getElementById("characterForm");
const raceSelect = document.getElementById("raceSelect");
const classSelect = document.getElementById("classSelect");
const subclassSelect = document.getElementById("subclassSelect");
const armorTypeSelect = document.getElementById("armorTypeSelect");
const dynamicFields = document.getElementById("dynamicFields");
const abilityInputs = document.getElementById("abilityInputs");
const skillInputs = document.getElementById("skillInputs");
const spellManager = document.getElementById("spellManager");
const sheetView = document.getElementById("sheetView");
const importFileInput = document.getElementById("importFileInput");
const proficiencyPreview = document.getElementById("proficiencyPreview");
const passivePerceptionPreview = document.getElementById("passivePerceptionPreview");
const workspace = document.querySelector(".workspace");
const modeButtons = document.querySelectorAll(".mode-btn");

document.getElementById("loadSampleBtn").addEventListener("click", () => { populateForm(sampleCharacter); updateAll(); });
document.getElementById("applySlotsBtn").addEventListener("click", () => { applySpellSlotsFromProgression(); updateAll(); });
document.getElementById("shortRestBtn").addEventListener("click", () => { applyShortRest(); updateAll(); });
document.getElementById("longRestBtn").addEventListener("click", () => { applyLongRest(); updateAll(); });
document.getElementById("importBtn").addEventListener("click", () => importFileInput.click());
document.getElementById("exportBtn").addEventListener("click", exportJson);
document.getElementById("resetBtn").addEventListener("click", resetForm);
document.getElementById("printBtn").addEventListener("click", () => window.print());
importFileInput.addEventListener("change", importJson);
form.addEventListener("input", updateAll);
sheetView.addEventListener("click", handleSheetActions);
form.addEventListener("change", (event) => {
  if (event.target.name === "race" || event.target.name === "class") { rebuildSubclassOptions(); rebuildDynamicFields(); rebuildSpellManager(); }
  if (event.target.name === "class") syncCurrentHpToEstimate();
  updateAll();
});
modeButtons.forEach((button) => button.addEventListener("click", () => {
  workspace.dataset.mobileMode = button.dataset.mode;
  modeButtons.forEach((item) => item.classList.toggle("is-active", item === button));
  updateAll();
}));

init();

function init() {
  buildStaticSelects();
  buildAbilityInputs();
  buildSkillInputs();
  rebuildSubclassOptions();
  rebuildDynamicFields();
  rebuildSpellManager();
  populateDefaults();
  const saved = loadState();
  if (saved) populateForm(saved);
  updateAll();
}

function buildStaticSelects() {
  raceSelect.innerHTML = Object.keys(races).map((name) => `<option value="${name}">${name}</option>`).join("");
  classSelect.innerHTML = Object.keys(classes).map((name) => `<option value="${name}">${name}</option>`).join("");
  armorTypeSelect.innerHTML = armorTypes.map((item) => `<option value="${item.key}">${item.label}</option>`).join("");
}

function buildAbilityInputs() {
  abilityInputs.innerHTML = abilities.map((ability) => `<div class="ability-card"><h4>${ability.label}</h4><label><span>基礎值</span><input type="number" name="${ability.key}" min="1" max="20" value="10"></label><div class="mini" id="${ability.key}BonusHint">種族加值：+0</div></div>`).join("");
}

function buildSkillInputs() {
  skillInputs.innerHTML = skillDefinitions.map((skill) => `<div class="skill-card"><div class="skill-head"><div><h4>${skill.label}</h4><p>${getAbilityLabel(skill.ability)} 技能</p></div><div class="skill-value" id="skillPreview_${skill.key}">+0</div></div><label><span>熟練狀態</span><select name="skill_${skill.key}_mode"><option value="none">未熟練</option><option value="proficient">熟練</option><option value="expertise">專精</option></select></label><label><span>額外修正</span><input type="number" name="skill_${skill.key}_misc" value="0"></label></div>`).join("");
}

function rebuildSubclassOptions() {
  const classData = classes[form.elements.class.value];
  const current = normalizeSubclass(form.elements.class.value, form.elements.subclass?.value);
  const options = classData?.subclasses?.length ? classData.subclasses : ["無"];
  subclassSelect.innerHTML = options.map((name) => `<option value="${name}">${name}</option>`).join("");
  subclassSelect.value = options.includes(current) ? current : options[0];
}

function rebuildDynamicFields() {
  const raceData = races[form.elements.race.value];
  const fields = [...(raceData?.specialFields || []), ...getClassSpecificFields(form.elements.class.value, form.elements.subclass.value)];
  dynamicFields.innerHTML = renderFieldGroup("專屬欄位", fields);
}

function rebuildSpellManager() {
  const classData = classes[form.elements.class.value];
  if (!classData?.spellcasting) {
    spellManager.innerHTML = `<div class="resource-note"><strong>目前職業沒有施法核心。</strong><div class="muted-line">如果團規有卷軸、儀式或物品施法，可在下方手動記錄。</div></div>`;
    return;
  }
  spellManager.innerHTML = `<div class="slot-row"><h4>施法核心</h4><div class="muted-line">能力：${getAbilityLabel(classData.spellcasting.ability)} / 模式：${classData.spellcasting.mode}</div><div class="muted-line">準備方式：${classData.spellcasting.preparedFormula}</div></div><div class="slot-row"><h4>法術位</h4>${[1,2,3,4,5,6,7,8,9].map((level) => `<div class="slot-grid"><strong>${level} 環</strong><label><span>目前</span><input type="number" name="slot${level}Current" min="0" value="0"></label><label><span>最大</span><input type="number" name="slot${level}Max" min="0" value="0"></label></div>`).join("")}</div>`;
}

function populateDefaults() {
  ["xp","currentHp","tempHp","gloomLevel","lightSpark","hitDiceUsed","cp","sp","gp","pp","carryWeight","deathSaveSuccess","deathSaveFail"].forEach((name) => {
    if (form.elements[name] && form.elements[name].value === "") form.elements[name].value = 0;
  });
  if (!form.elements.level.value || form.elements.level.value === "0") form.elements.level.value = 1;
  ["armorType","shieldMode","concentrationState","inspirationState","coverState"].forEach((name) => { if (form.elements[name] && !form.elements[name].value) form.elements[name].selectedIndex = 0; });
  abilities.forEach((ability) => { if (form.elements[ability.key] && form.elements[ability.key].value === "") form.elements[ability.key].value = 10; });
  skillDefinitions.forEach((skill) => {
    if (!form.elements[`skill_${skill.key}_mode`].value) form.elements[`skill_${skill.key}_mode`].value = "none";
    if (form.elements[`skill_${skill.key}_misc`].value === "") form.elements[`skill_${skill.key}_misc`].value = 0;
  });
}

function populateForm(data) {
  if (data.race && races[data.race]) form.elements.race.value = data.race;
  if (data.class && classes[data.class]) form.elements.class.value = data.class;
  if (data.class && data.subclass) data = { ...data, subclass: normalizeSubclass(data.class, data.subclass) };
  rebuildSubclassOptions();
  rebuildDynamicFields();
  rebuildSpellManager();
  Object.entries(data).forEach(([key, value]) => { if (form.elements[key]) form.elements[key].value = value ?? ""; });
  rebuildSubclassOptions();
  rebuildDynamicFields();
  rebuildSpellManager();
  Object.entries(data).forEach(([key, value]) => { if (form.elements[key]) form.elements[key].value = value ?? ""; });
}

function getState() {
  const raw = {};
  Array.from(form.elements).forEach((field) => { if (field.name) raw[field.name] = field.value; });
  const parsed = { ...raw };
  Array.from(form.elements).forEach((field) => { if (field.name && field.type === "number") parsed[field.name] = field.value === "" ? null : toNumber(field.value, 0); });
  return parsed;
}

function updateAll() {
  const state = getState();
  const finalAbilities = getFinalAbilities(state);
  const proficiency = getProficiencyBonus(state.level);
  const skills = getSkillTotals(state, finalAbilities, proficiency);
  updateAbilityHints(state);
  updateSkillPreviews(skills, proficiency);
  renderSheet(state, finalAbilities, skills, proficiency);
  saveState(state);
}

function updateAbilityHints(state) {
  const bonuses = getResolvedRaceBonuses(state);
  abilities.forEach((ability) => { document.getElementById(`${ability.key}BonusHint`).textContent = `種族加值：${formatSigned(bonuses[ability.key] || 0)}`; });
}

function updateSkillPreviews(skills, proficiency) {
  proficiencyPreview.textContent = formatSigned(proficiency);
  passivePerceptionPreview.textContent = String(10 + skills.perception.total);
  skillDefinitions.forEach((skill) => { document.getElementById(`skillPreview_${skill.key}`).textContent = formatSigned(skills[skill.key].total); });
}

function renderSheet(state, finalAbilities, skills, proficiency) {
  const classData = classes[state.class];
  const raceData = races[state.race];
  const isSessionMode = workspace.dataset.mobileMode === "session";
  const hpEstimate = getEstimatedMaxHp(state, classData, finalAbilities);
  const hpMax = state.maxHpOverride ?? hpEstimate;
  const armorClass = state.acOverride ?? getEstimatedArmorClass(state, finalAbilities);
  const carryCapacity = getCarryCapacity(state, finalAbilities);
  const spellSummary = getSpellSummary(state, classData, finalAbilities, proficiency);
  const parsedSpells = parseSpellEntries(state.spellEntries);
  const parsedWeapons = parseWeaponEntries(state.weaponEntries, finalAbilities, proficiency);
  const weaponProficiencies = mergeProficiencies(classData.weaponProficiencies, state.additionalWeaponProficiencies);
  const languageProficiencies = mergeProficiencies(raceData.languages, state.additionalLanguages);
  const resourceCaps = getClassResourceCaps(state, classData, finalAbilities);
  const subclassSummary = getSubclassSummary(state.class, state.subclass);
  const quickResources = getQuickResources(state, resourceCaps);
  const sessionTopbar = isSessionMode ? renderSessionTopbar(state, hpMax, armorClass, finalAbilities) : "";
  const sessionQuickSection = isSessionMode ? section("快速消耗", `<div class="session-quick-grid">${renderQuickSlots(state)}${renderQuickResources(quickResources)}</div>`, "section-session-quick") : "";

  sheetView.innerHTML = `
    ${sessionTopbar}
    <div class="sheet-top">
      <div class="sheet-banner">
        <p class="eyebrow">Character Sheet</p>
        <h2>${escapeHtml(state.name || "未命名角色")}</h2>
        <div class="identity-line">
          <span class="identity-pill">玩家：${escapeHtml(state.player || "未填寫")}</span>
          <span class="identity-pill">種族：${escapeHtml(state.race || "未選擇")}</span>
          <span class="identity-pill">職業：${escapeHtml(state.class || "未選擇")}</span>
          <span class="identity-pill">子職：${escapeHtml(state.subclass || "未填寫")}</span>
          <span class="identity-pill">等級：${state.level || 1}</span>
        </div>
      </div>
      <div class="summary-card">
        <h3>核心數值</h3>
        <div class="stat-grid">
          ${statBox("生命值", `${state.currentHp ?? 0} / ${hpMax}`, "stat-box-major stat-box-hp")}
          ${statBox("護甲等級", armorClass, "stat-box-major stat-box-ac")}
          ${statBox("熟練加值", formatSigned(proficiency), "stat-box-highlight")}
          ${statBox("速度", `${raceData.speed} 尺`, "stat-box-highlight")}
          ${statBox("幽冥等級", state.gloomLevel ?? 0, "stat-box-track")}
          ${statBox("光明火花", state.lightSpark ?? 0, "stat-box-track")}
          ${statBox("先攻", formatSigned(finalAbilities.dex.mod), "stat-box-highlight")}
          ${statBox("生命骰", `d${classData.hitDie} / 已用 ${state.hitDiceUsed ?? 0}`, "stat-box-track")}
          ${statBox("被動察覺", 10 + skills.perception.total, "stat-box-highlight")}
        </div>
      </div>
    </div>

    ${section("背景摘要", featureGrid([
      featureBox("傳承 / 出身 / 宿命", [`傳承：${state.heritage || "未填寫"}`, `出身：${state.origin || "未填寫"}`, `宿命：${state.destiny || "未填寫"}`, `陣營 / 信條：${state.creed || "未填寫"}`], "feature-box-story"),
      featureBox("規則定位", [`種族：${raceData.summary}`, `職業：${classData.summary}`, `估算最大生命值：${hpEstimate}${state.maxHpOverride ? "（已手動覆寫）" : ""}`], "feature-box-lore"),
    ]), "section-lore")}
    ${section("戰鬥狀態", featureGrid([
      featureBox("目前狀態", getCombatStateLines(state, armorClass), "feature-box-combat"),
      featureBox("戰術提醒", [state.conditionNotes || "尚未填寫當前狀態。", state.tacticalNotes || "尚未填寫優勢 / 劣勢提醒。"], "feature-box-combat"),
    ]), "section-combat")}
    ${section("屬性", `<div class="ability-preview-grid">${abilities.map((ability) => renderAbilityCard(ability, finalAbilities[ability.key])).join("")}</div>`, "section-abilities")}
    ${section("技能", `<div class="sheet-skills-grid">${getHighlightedSkills(skills).map(renderSheetSkill).join("")}</div>`, "section-skills")}
    ${section("熟練與語言", featureGrid([
      featureBox("武器熟練", weaponProficiencies, "feature-box-gear"),
      featureBox("語言熟練", languageProficiencies, "feature-box-lore"),
    ]), "section-proficiencies")}
    ${section("種族能力", featureGrid([
      featureBox("種族摘要", [`初始幽冥：${getStartingGloom(state.race)}`, `語言：${languageProficiencies.join("、")}`, `主要特色：${raceData.summary}`], "feature-box-lore"),
      featureBox("種族特性", [...raceData.traits, `祝福：${raceData.blessing}`], "feature-box-lore"),
    ]), "section-race")}
    ${section("職業能力", featureGrid([
      featureBox("職業摘要", [`生命骰：d${classData.hitDie}`, `1 級生命值：${classData.hpBase} + 體質調整值`, `熟練：${classData.proficiencies.join("、")}`], "feature-box-lore"),
      featureBox("職業重點", classData.features, "feature-box-lore"),
    ]), "section-class")}
    ${section("子職重點", featureGrid([
      featureBox("子職定位", [`目前子職：${state.subclass || "未選擇"}`, ...subclassSummary], "feature-box-lore"),
      featureBox("跑團建議", getPlayTips(state, classData, raceData), "feature-box-lore"),
    ]), "section-subclass")}
    ${section("施法摘要", featureGrid([featureBox("施法資料", spellSummary.lines, "feature-box-magic"), featureBox("法術與資源備註", spellSummary.notes, "feature-box-magic")]), "section-magic")}
    ${sessionQuickSection}
    ${section("法術清單", featureGrid([featureBox("結構化法術", parsedSpells.length ? parsedSpells.map((spell) => `${spell.levelLabel}｜${spell.name}｜${spell.status}${spell.note ? `｜${spell.note}` : ""}`) : ["尚未填寫結構化法術清單。"], "feature-box-magic"), featureBox("資源上限", getResourceCapLines(resourceCaps), "feature-box-magic")]), "section-spells")}
    ${section("武器卡", featureGrid([
      isSessionMode ? weaponActionDeck(parsedWeapons) : featureBox("結構化武器", parsedWeapons.length ? parsedWeapons.map((weapon) => `${weapon.name}｜命中 ${formatSigned(weapon.attackBonus)}｜傷害 ${weapon.damageText}${weapon.note ? `｜${weapon.note}` : ""}`) : ["尚未填寫結構化武器卡。"], "feature-box-gear"),
      featureBox("戰鬥節奏提醒", [`先攻順位：${state.initiativeScore ?? "未填寫"}`, `專注：${state.concentrationState === "active" ? "進行中" : "未專注"}`, state.tacticalNotes || "尚未填寫戰術提醒。"], "feature-box-combat"),
    ]), "section-weapons")}
    ${section("裝備與金錢", featureGrid([
      featureBox("裝備配置", [`護甲：${getArmorLabel(state.armorType)}`, `盾牌：${state.shieldMode === "shield" ? "裝備中" : "未裝備"}`, `武器與護具：${state.weaponLoadout || "未填寫"}`, `攜帶重量：${state.carryWeight ?? 0} / ${carryCapacity}`], "feature-box-gear"),
      featureBox("財務與背包", [`CP：${state.cp ?? 0} / SP：${state.sp ?? 0} / GP：${state.gp ?? 0} / PP：${state.pp ?? 0}`, state.inventoryNotes || "未填寫背包與雜物。"], "feature-box-gear"),
    ]), "section-gear")}
    ${section("專屬追蹤", `<div class="tracker-grid">${trackerBox("種族追蹤", getRaceTrackers(state), "tracker-box-race")}${trackerBox("職業追蹤", getClassTrackers(state, classData), "tracker-box-class")}</div>`, "section-trackers")}
    ${section("玩家備註", featureGrid([noteBox("技能 / 專長 / 專精", state.skillNotes, "feature-box-notes"), noteBox("法術簿", state.spellbook, "feature-box-notes"), noteBox("施法備註", state.spellNotes, "feature-box-notes"), noteBox("角色摘要與其他備註", state.notes, "feature-box-notes")]), "section-notes")}
  `;
}

function section(title, inner, sectionClass = "") { return `<section class="sheet-section ${sectionClass}"><h3>${title}</h3>${inner}</section>`; }
function featureGrid(items) { return `<div class="feature-grid">${items.join("")}</div>`; }
function renderAbilityCard(ability, data) { return `<article class="ability-preview ability-${ability.key}"><header><h3>${ability.label}</h3><div class="ability-mod">${formatSigned(data.mod)}</div></header><div class="ability-score">${data.final}</div><div class="ability-numbers"><span>基礎 ${data.base}</span><span>加值 ${formatSigned(data.bonus)}</span><span>最終 ${data.final}</span></div></article>`; }
function renderSheetSkill(skill) { return `<article class="sheet-skill ${skill.proficiencyBonus ? "is-trained" : "is-untrained"}"><div class="sheet-skill-head"><h4>${skill.label}</h4><div class="sheet-skill-value">${formatSigned(skill.total)}</div></div><div class="ability-numbers"><span>${getAbilityLabel(skill.ability)} ${formatSigned(skill.abilityMod)}</span><span>熟練 ${formatSigned(skill.proficiencyBonus)}</span><span>額外 ${formatSigned(skill.misc)}</span></div></article>`; }
function renderSessionTopbar(state, hpMax, armorClass, finalAbilities) {
  return `<div class="session-topbar">
    <div class="session-chip session-chip-hp">
      <span>生命值</span>
      <strong>${state.currentHp ?? 0} / ${hpMax}</strong>
      <div class="session-chip-actions">
        <button type="button" class="session-mini-btn" data-action="adjust-number" data-field="currentHp" data-delta="-1">-1</button>
        <button type="button" class="session-mini-btn" data-action="adjust-number" data-field="currentHp" data-delta="1">+1</button>
      </div>
    </div>
    <div class="session-chip">
      <span>護甲等級</span>
      <strong>${armorClass}</strong>
    </div>
    <div class="session-chip">
      <span>先攻</span>
      <strong>${state.initiativeScore ?? formatSigned(finalAbilities.dex.mod)}</strong>
    </div>
    <div class="session-chip session-chip-focus">
      <span>專注</span>
      <strong>${state.concentrationState === "active" ? "進行中" : "未專注"}</strong>
      <div class="session-chip-actions">
        <button type="button" class="session-mini-btn" data-action="toggle-value" data-field="concentrationState" data-on="active" data-off="none">切換</button>
      </div>
    </div>
  </div>`;
}
function renderQuickSlots(state) {
  const rows = [1,2,3,4,5,6,7,8,9].filter((level) => (state[`slot${level}Max`] ?? 0) > 0).map((level) => {
    const current = state[`slot${level}Current`] ?? 0;
    const max = state[`slot${level}Max`] ?? 0;
    return `<div class="quick-spend-card">
      <div class="quick-spend-head"><h4>${level} 環法術位</h4><strong>${current} / ${max}</strong></div>
      <div class="quick-spend-actions">
        <button type="button" class="session-mini-btn is-minus" data-action="adjust-slot" data-level="${level}" data-delta="-1">施放</button>
        <button type="button" class="session-mini-btn" data-action="adjust-slot" data-level="${level}" data-delta="1">回復</button>
      </div>
    </div>`;
  });
  return rows.length ? rows.join("") : `<div class="quick-spend-card empty-card"><h4>法術位</h4><p>目前沒有已啟用的法術位。</p></div>`;
}
function renderQuickResources(resources) {
  return resources.length ? resources.map((resource) => `<div class="quick-spend-card quick-resource-card">
    <div class="quick-spend-head"><h4>${escapeHtml(resource.label)}</h4><strong>${resource.current} / ${resource.max}</strong></div>
    <div class="quick-spend-actions">
      <button type="button" class="session-mini-btn is-minus" data-action="adjust-resource" data-resource="${escapeHtml(resource.key)}" data-delta="-1">消耗</button>
      <button type="button" class="session-mini-btn" data-action="adjust-resource" data-resource="${escapeHtml(resource.key)}" data-delta="1">回補</button>
    </div>
  </div>`).join("") : `<div class="quick-spend-card empty-card"><h4>職業資源</h4><p>目前沒有可快速點按的職業資源。</p></div>`;
}
function weaponActionDeck(weapons) {
  if (!weapons.length) return `<article class="feature-box feature-box-gear empty-card"><h4>武器動作</h4><div class="empty">尚未填寫結構化武器卡。</div></article>`;
  return `<div class="weapon-action-deck">${weapons.map((weapon) => `<button type="button" class="weapon-action-card">
    <span class="weapon-action-name">${escapeHtml(weapon.name)}</span>
    <span class="weapon-action-attack">命中 ${formatSigned(weapon.attackBonus)}</span>
    <strong class="weapon-action-damage">${escapeHtml(weapon.damageText)}</strong>
    <span class="weapon-action-note">${escapeHtml(weapon.note || "標準攻擊動作")}</span>
  </button>`).join("")}</div>`;
}

function getFinalAbilities(state) {
  const raceBonuses = getResolvedRaceBonuses(state);
  return Object.fromEntries(abilities.map((ability) => {
    const base = toNumber(state[ability.key], 10);
    const bonus = raceBonuses[ability.key] || 0;
    const final = base + bonus;
    return [ability.key, { base, bonus, final, mod: getModifier(final) }];
  }));
}

function getResolvedRaceBonuses(state) {
  const bonuses = { ...(races[state.race]?.bonuses || {}) };
  if (state.race === "普萊默斯人" && state.primusBonusTarget) bonuses[getAbilityKeyByLabel(state.primusBonusTarget)] = 2;
  if (state.race === "艾維尼安人" && state.avianBonusTarget) bonuses[getAbilityKeyByLabel(state.avianBonusTarget)] = 2;
  return bonuses;
}

function getSkillTotals(state, finalAbilities, proficiency) {
  return Object.fromEntries(skillDefinitions.map((skill) => {
    const mode = state[`skill_${skill.key}_mode`] || "none";
    const misc = toNumber(state[`skill_${skill.key}_misc`], 0);
    const multiplier = mode === "expertise" ? 2 : mode === "proficient" ? 1 : 0;
    const abilityMod = finalAbilities[skill.ability].mod;
    return [skill.key, { ...skill, abilityMod, misc, proficiencyBonus: proficiency * multiplier, total: abilityMod + misc + proficiency * multiplier }];
  }));
}

function getHighlightedSkills(skills) { return [...Object.values(skills)].sort((a, b) => b.total - a.total || a.label.localeCompare(b.label, "zh-Hant")); }
function getEstimatedArmorClass(state, finalAbilities) {
  const armor = armorTypes.find((item) => item.key === state.armorType) || armorTypes[0];
  const dexPart = armor.dexMode === "none" ? 0 : armor.dexMode === "cap2" ? Math.min(2, finalAbilities.dex.mod) : finalAbilities.dex.mod;
  let ac = armor.base + dexPart + (state.shieldMode === "shield" ? 2 : 0);
  if (state.race === "西德雷塞爾人" && state.treeChildMode === "自然護甲 13 + 體質") ac = Math.max(ac, 13 + finalAbilities.con.mod + (state.shieldMode === "shield" ? 2 : 0));
  return ac;
}
function getEstimatedMaxHp(state, classData, finalAbilities) {
  const level = Math.max(1, toNumber(state.level, 1));
  return Math.max(1, classData.hpBase + finalAbilities.con.mod + Math.max(0, level - 1) * (Math.floor(classData.hitDie / 2) + 1 + finalAbilities.con.mod));
}
function getCarryCapacity(state, finalAbilities) { return state.carryOverride ?? Math.max(1, finalAbilities.str.final * 15); }

function getSpellSummary(state, classData, finalAbilities, proficiency) {
  if (!classData.spellcasting) return { lines: ["此職業目前不以施法為核心。"], notes: [state.spellNotes || "如有卷軸、儀式或魔法物品，可自行記錄。"] };
  const abilityKey = classData.spellcasting.ability;
  const mod = finalAbilities[abilityKey].mod;
  const slots = [1,2,3,4,5,6,7,8,9].filter((level) => (state[`slot${level}Max`] ?? 0) > 0).map((level) => `${level} 環：${state[`slot${level}Current`] ?? 0} / ${state[`slot${level}Max`] ?? 0}`);
  return {
    lines: [`施法能力：${getAbilityLabel(abilityKey)}`, `施法模式：${classData.spellcasting.mode}`, `法術豁免 DC：${8 + proficiency + mod}`, `法術攻擊加值：${formatSigned(proficiency + mod)}`, `準備方式：${classData.spellcasting.preparedFormula}`, ...(slots.length ? slots : ["目前尚未填入法術位。"])],
    notes: [state.spellbook || "未填寫法術簿。", state.spellNotes || "未填寫施法備註。", `結構化法術數：${parseSpellEntries(state.spellEntries).length}`],
  };
}

function getRaceTrackers(state) {
  if (state.race === "盧明人") return [`衰老等級：${state.lumenAging ?? 0}`, `力竭等級：${state.lumenExhaustion ?? 0}`];
  if (state.race === "普萊默斯人") return [`距離上次飲酒天數：${state.lastDrinkDays ?? 0}`, `血釀祝福：${state.bloodBlessingMode || "未啟動"}`];
  if (state.race === "艾維尼安人") return [`部族：${state.avianGroup || "未填寫"}`, `動物之靈：${state.animalSpirit || "未填寫"}`, `變形狀態：${state.shapeshiftState || "常態"}`];
  if (state.race === "東德雷塞爾人") return [state.eastBranchNote || "未填寫東支習俗備註。", "高幽冥環境通常更有優勢。"];
  if (state.race === "西德雷塞爾人") return [`樹子外殼模式：${state.treeChildMode || "未填寫"}`, "生命守護與自然護甲可視場景切換描述。"];
  return ["目前沒有額外種族追蹤。"];
}

function getClassTrackers(state, classData) {
  const trackers = [...classData.resources];
  Object.entries(getClassResourceCaps(state, classData, getFinalAbilities(state))).forEach(([label, data]) => trackers.push(`${label}：${Math.min(data.current, data.max)} / ${data.max}`));
  if (state.class === "探索者") trackers.push(`獵敵目標：${state.favoredEnemy || "未填寫"}`);
  if (state.class === "學者") trackers.push(`知識骰：${state.cognitionDie || "未填寫"}`);
  if (state.class === "織霧者" && state.subclass === "先知") trackers.push(`時視使用次數：${state.timeSightUses ?? 0}`);
  if (state.class === "戰士") {
    if (form.elements.secondWindCurrent) trackers.push(`回氣剩餘：${state.secondWindCurrent ?? 0}`);
    if (form.elements.actionSurgeCurrent) trackers.push(`動作如潮剩餘：${state.actionSurgeCurrent ?? 0}`);
  }
  if (state.class === "武僧" && form.elements.kiCurrent) trackers.push(`氣點剩餘：${state.kiCurrent ?? 0}`);
  return trackers;
}

function getClassSpecificFields(className, subclassName) {
  const fields = [];
  if (className === "戰士") {
    fields.push({ type: "number", name: "secondWindCurrent", label: "回氣剩餘", min: 0, value: 1 });
    fields.push({ type: "number", name: "actionSurgeCurrent", label: "動作如潮剩餘", min: 0, value: 1 });
  }
  if (className === "野蠻人") fields.push({ type: "number", name: "rageCurrent", label: "狂暴剩餘次數", min: 0, value: 2 });
  if (className === "武僧") fields.push({ type: "number", name: "kiCurrent", label: "氣點剩餘", min: 0, value: 2 });
  if (className === "探索者") {
    fields.push({ type: "text", name: "favoredEnemy", label: "獵敵目標", placeholder: "例如：亡靈、獵霧獸、帝國斥候" });
    if (subclassName === "馴獸師") {
      fields.push({ type: "text", name: "companionName", label: "夥伴名稱", placeholder: "例如：灰牙" });
      fields.push({ type: "text", name: "companionType", label: "夥伴類型", placeholder: "例如：霧狼、山貓、巨鷹" });
    }
  }
  if (className === "學者") {
    fields.push({ type: "text", name: "cognitionDie", label: "知識骰", placeholder: "例如：d6" });
    fields.push({ type: "number", name: "cognitionUsesCurrent", label: "知識骰剩餘", min: 0, value: 3 });
  }
  if (className === "靈術師") {
    fields.push({ type: "number", name: "connectionUsesCurrent", label: "靈魂連結剩餘", min: 0, value: 1 });
    if (subclassName === "死靈師") fields.push({ type: "text", name: "servantNotes", label: "僕從 / 靈縛備註", placeholder: "例如：鴉靈、守墓犬、祖靈面具" });
    if (subclassName === "巫醫") fields.push({ type: "number", name: "taintLevel", label: "污染值", min: 0, value: 0 });
    if (subclassName === "醫師") fields.push({ type: "number", name: "protectLifePool", label: "保護生命池", min: 0, value: 10 });
  }
  if (className === "織霧者") {
    fields.push({ type: "number", name: "arcaneRecoveryUsed", label: "法術回收已用", min: 0, value: 0 });
    if (subclassName === "血法師") fields.push({ type: "number", name: "bloodcastSelfDamage", label: "施血術自傷", min: 0, value: 0 });
    if (subclassName === "元素使") fields.push({ type: "number", name: "elementOfferings", label: "元素奉獻", min: 0, value: 2 });
    if (subclassName === "先知") fields.push({ type: "number", name: "timeSightUses", label: "時視使用次數", min: 0, value: 1 });
  }
  return fields;
}

function renderFieldGroup(title, fields) {
  if (!fields.length) return `<div class="dynamic-group"><h4>${title}</h4><div class="empty">目前沒有額外欄位。</div></div>`;
  return `<div class="dynamic-group"><h4>${title}</h4><div class="form-grid two">${fields.map(renderDynamicField).join("")}</div></div>`;
}

function renderDynamicField(field) {
  if (field.type === "textarea") return `<label class="full"><span>${field.label}</span><textarea name="${field.name}" rows="${field.rows || 3}" placeholder="${field.placeholder || ""}">${field.value || ""}</textarea></label>`;
  if (field.type === "select") return `<label><span>${field.label}</span><select name="${field.name}">${field.options.map((option) => `<option value="${option}">${option}</option>`).join("")}</select></label>`;
  return `<label><span>${field.label}</span><input type="${field.type || "text"}" name="${field.name}" ${field.min !== undefined ? `min="${field.min}"` : ""} ${field.max !== undefined ? `max="${field.max}"` : ""} ${field.placeholder ? `placeholder="${field.placeholder}"` : ""} value="${field.value !== undefined ? field.value : ""}"></label>`;
}

function applySpellSlotsFromProgression() {
  const slots = getSuggestedSpellSlots(classes[getState().class], getState().level);
  if (!slots) return;
  [1,2,3,4,5,6,7,8,9].forEach((level, index) => {
    const max = slots[index] || 0;
    form.elements[`slot${level}Max`].value = max;
    form.elements[`slot${level}Current`].value = Math.min(toNumber(form.elements[`slot${level}Current`].value, 0) || max, max);
  });
}

function applyShortRest() {
  const state = getState();
  form.elements.tempHp.value = 0;
  if (state.class === "織霧者" && form.elements.arcaneRecoveryUsed) form.elements.arcaneRecoveryUsed.value = 0;
}

function applyLongRest() {
  const state = getState();
  const finalAbilities = getFinalAbilities(state);
  const classData = classes[state.class];
  form.elements.currentHp.value = state.maxHpOverride ?? getEstimatedMaxHp(state, classData, finalAbilities);
  form.elements.tempHp.value = 0;
  form.elements.hitDiceUsed.value = 0;
  [1,2,3,4,5,6,7,8,9].forEach((level) => {
    if (form.elements[`slot${level}Current`] && form.elements[`slot${level}Max`]) form.elements[`slot${level}Current`].value = toNumber(form.elements[`slot${level}Max`].value, 0);
  });
  if (form.elements.secondWindCurrent) form.elements.secondWindCurrent.value = 1;
  if (form.elements.actionSurgeCurrent) form.elements.actionSurgeCurrent.value = getFighterActionSurgeUses(state.level);
  if (form.elements.rageCurrent) form.elements.rageCurrent.value = getBarbarianRageCount(state.level);
  if (form.elements.kiCurrent) form.elements.kiCurrent.value = getMonkKiPoints(state.level);
  if (form.elements.cognitionUsesCurrent) form.elements.cognitionUsesCurrent.value = getScholarKnowledgeUses(state.level);
  if (form.elements.connectionUsesCurrent) form.elements.connectionUsesCurrent.value = getSpiritLinkUses(state.level);
  if (form.elements.arcaneRecoveryUsed) form.elements.arcaneRecoveryUsed.value = 0;
  if (form.elements.timeSightUses) form.elements.timeSightUses.value = getTimeSightUses(state.level);
  if (form.elements.elementOfferings) form.elements.elementOfferings.value = getElementOfferingUses(state.level);
}

function handleSheetActions(event) {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const action = button.dataset.action;
  if (action === "adjust-number") {
    adjustFieldNumber(button.dataset.field, toNumber(button.dataset.delta, 0));
  } else if (action === "toggle-value") {
    toggleFieldValue(button.dataset.field, button.dataset.on, button.dataset.off);
  } else if (action === "adjust-slot") {
    adjustSlotValue(toNumber(button.dataset.level, 0), toNumber(button.dataset.delta, 0));
  } else if (action === "adjust-resource") {
    adjustQuickResource(button.dataset.resource, toNumber(button.dataset.delta, 0));
  }
}

function adjustFieldNumber(fieldName, delta) {
  const field = form.elements[fieldName];
  if (!field) return;
  const min = field.min === "" ? Number.NEGATIVE_INFINITY : toNumber(field.min, Number.NEGATIVE_INFINITY);
  const max = field.max === "" ? Number.POSITIVE_INFINITY : toNumber(field.max, Number.POSITIVE_INFINITY);
  const next = Math.max(min, Math.min(max, toNumber(field.value, 0) + delta));
  field.value = next;
  updateAll();
}

function toggleFieldValue(fieldName, onValue, offValue) {
  const field = form.elements[fieldName];
  if (!field) return;
  field.value = field.value === onValue ? offValue : onValue;
  updateAll();
}

function adjustSlotValue(level, delta) {
  const currentField = form.elements[`slot${level}Current`];
  const maxField = form.elements[`slot${level}Max`];
  if (!currentField || !maxField) return;
  const next = Math.max(0, Math.min(toNumber(maxField.value, 0), toNumber(currentField.value, 0) + delta));
  currentField.value = next;
  updateAll();
}

function getQuickResources(state, resourceCaps) {
  const mappings = {
    "回氣": { key: "secondWindCurrent", mode: "current" },
    "動作如潮": { key: "actionSurgeCurrent", mode: "current" },
    "狂暴": { key: "rageCurrent", mode: "current" },
    "氣點": { key: "kiCurrent", mode: "current" },
    "知識骰": { key: "cognitionUsesCurrent", mode: "current" },
    "靈魂連結": { key: "connectionUsesCurrent", mode: "current" },
    "法術回收": { key: "arcaneRecoveryUsed", mode: "invert" },
    "時視": { key: "timeSightUses", mode: "current" },
    "元素奉獻": { key: "elementOfferings", mode: "current" },
    "保護生命池": { key: "protectLifePool", mode: "current" },
  };
  return Object.entries(resourceCaps).map(([label, data]) => ({ label, key: label, current: Math.min(data.current, data.max), max: data.max, ...mappings[label] })).filter((item) => item.key && item.mode);
}

function adjustQuickResource(resourceLabel, delta) {
  const state = getState();
  const resources = getQuickResources(state, getClassResourceCaps(state, classes[state.class], getFinalAbilities(state)));
  const resource = resources.find((item) => item.key === resourceLabel);
  if (!resource || !form.elements[resource.key]) return;
  if (resource.mode === "invert") {
    const usedMax = resource.max;
    const currentAvailable = resource.current;
    const nextAvailable = Math.max(0, Math.min(resource.max, currentAvailable + delta));
    form.elements[resource.key].value = usedMax - nextAvailable;
  } else {
    form.elements[resource.key].value = Math.max(0, Math.min(resource.max, toNumber(form.elements[resource.key].value, 0) + delta));
  }
  updateAll();
}

function syncCurrentHpToEstimate() { form.elements.currentHp.value = getEstimatedMaxHp(getState(), classes[getState().class], getFinalAbilities(getState())); }
function resetForm() { localStorage.removeItem(STORAGE_KEY); form.reset(); buildStaticSelects(); rebuildSubclassOptions(); rebuildDynamicFields(); rebuildSpellManager(); populateDefaults(); updateAll(); }
function saveState(state) { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function loadState() { try { return JSON.parse(localStorage.getItem(STORAGE_KEY)); } catch { return null; } }

function exportJson() {
  const blob = new Blob([JSON.stringify(getState(), null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${getState().name || "soulmist-character"}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function importJson(event) {
  const [file] = event.target.files || [];
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try { populateForm(JSON.parse(String(reader.result))); updateAll(); } catch { window.alert("JSON 匯入失敗，請確認檔案格式正確。"); }
    importFileInput.value = "";
  });
  reader.readAsText(file, "utf-8");
}

function getSuggestedSpellSlots(classData, level) {
  if (!classData?.spellcasting) return null;
  const normalized = Math.max(1, Math.min(20, toNumber(level, 1)));
  return classData.spellcasting.mode === "半施法" ? halfCasterSlots[normalized] : fullCasterSlots[normalized];
}

function getFighterActionSurgeUses(level) { return toNumber(level, 1) >= 17 ? 2 : 1; }
function getBarbarianRageCount(level) { level = toNumber(level, 1); return level >= 17 ? 6 : level >= 12 ? 5 : level >= 6 ? 4 : level >= 3 ? 3 : 2; }
function getMonkKiPoints(level) { return Math.max(1, toNumber(level, 1)); }
function getScholarKnowledgeUses(level) { level = toNumber(level, 1); return level >= 17 ? 6 : level >= 11 ? 5 : level >= 5 ? 4 : 3; }
function getSpiritLinkUses(level) { level = toNumber(level, 1); return level >= 18 ? 3 : level >= 6 ? 2 : 1; }
function getTimeSightUses(level) { level = toNumber(level, 1); return level >= 15 ? 3 : level >= 5 ? 2 : 1; }
function getElementOfferingUses(level) { level = toNumber(level, 1); return level >= 15 ? 4 : level >= 9 ? 3 : 2; }

function getClassResourceCaps(state, classData, finalAbilities) {
  const caps = {};
  if (state.class === "戰士" && form.elements.secondWindCurrent) caps["回氣"] = { current: toNumber(state.secondWindCurrent, 0), max: 1 };
  if (state.class === "戰士" && form.elements.actionSurgeCurrent) caps["動作如潮"] = { current: toNumber(state.actionSurgeCurrent, 0), max: getFighterActionSurgeUses(state.level) };
  if (state.class === "野蠻人" && form.elements.rageCurrent) caps["狂暴"] = { current: toNumber(state.rageCurrent, 0), max: getBarbarianRageCount(state.level) };
  if (state.class === "武僧" && form.elements.kiCurrent) caps["氣點"] = { current: toNumber(state.kiCurrent, 0), max: getMonkKiPoints(state.level) };
  if (state.class === "學者" && form.elements.cognitionUsesCurrent) caps["知識骰"] = { current: toNumber(state.cognitionUsesCurrent, 0), max: getScholarKnowledgeUses(state.level) };
  if (state.class === "靈術師" && form.elements.connectionUsesCurrent) caps["靈魂連結"] = { current: toNumber(state.connectionUsesCurrent, 0), max: getSpiritLinkUses(state.level) };
  if (state.class === "織霧者" && form.elements.arcaneRecoveryUsed) caps["法術回收"] = { current: Math.max(0, 1 - toNumber(state.arcaneRecoveryUsed, 0)), max: 1 };
  if (state.class === "織霧者" && state.subclass === "先知" && form.elements.timeSightUses) caps["時視"] = { current: toNumber(state.timeSightUses, 0), max: getTimeSightUses(state.level) };
  if (state.class === "織霧者" && state.subclass === "元素使" && form.elements.elementOfferings) caps["元素奉獻"] = { current: toNumber(state.elementOfferings, 0), max: getElementOfferingUses(state.level) };
  if (state.class === "靈術師" && state.subclass === "醫師" && form.elements.protectLifePool) caps["保護生命池"] = { current: toNumber(state.protectLifePool, 0), max: Math.max(5, toNumber(state.level, 1) * 2 + Math.max(0, finalAbilities.wis.mod)) };
  return caps;
}

function getResourceCapLines(caps) {
  const entries = Object.entries(caps);
  return entries.length ? entries.map(([label, data]) => `${label}：${Math.min(data.current, data.max)} / ${data.max}`) : ["目前沒有已結構化的職業資源上限。"];
}

function parseSpellEntries(text) {
  if (!text) return [];
  return String(text).split(/\r?\n/).map((line) => line.trim()).filter(Boolean).map((line) => {
    const [levelRaw = "", name = "", status = "準備", note = ""] = line.split("|").map((part) => part.trim());
    const level = levelRaw === "戲法" ? 0 : toNumber(levelRaw, 0);
    return { level, levelLabel: level === 0 ? "戲法" : `${level} 環`, name: name || "未命名法術", status: status || "準備", note };
  }).sort((a, b) => a.level - b.level || a.name.localeCompare(b.name, "zh-Hant"));
}

function parseWeaponEntries(text, finalAbilities, proficiency) {
  if (!text) return [];
  return String(text).split(/\r?\n/).map((line) => line.trim()).filter(Boolean).map((line) => {
    const [name = "", abilityKeyRaw = "str", proficientRaw = "yes", damageDie = "1d6", damageType = "鈍擊", note = ""] = line.split("|").map((part) => part.trim());
    const abilityKey = ["str", "dex", "con", "int", "wis", "cha"].includes(abilityKeyRaw) ? abilityKeyRaw : "str";
    const abilityMod = finalAbilities[abilityKey]?.mod ?? 0;
    const isProficient = proficientRaw.toLowerCase() === "yes";
    return { name: name || "未命名武器", attackBonus: abilityMod + (isProficient ? proficiency : 0), damageText: `${damageDie} ${formatSigned(abilityMod)} ${damageType}`, note };
  });
}

function getCombatStateLines(state, armorClass) {
  const coverLabels = { none: "無掩蔽", half: "半掩蔽", threeQuarters: "四分之三掩蔽", full: "全掩蔽" };
  return [`專注：${state.concentrationState === "active" ? "進行中" : "未專注"}`, `靈感：${state.inspirationState === "ready" ? "持有中" : "沒有"}`, `掩蔽：${coverLabels[state.coverState] || "無掩蔽"}`, `死亡成功 / 失敗：${toNumber(state.deathSaveSuccess, 0)} / ${toNumber(state.deathSaveFail, 0)}`, `先攻順位：${state.initiativeScore ?? "未填寫"}`, `目前 AC：${armorClass}`];
}

function getSubclassSummary(className, subclass) { return subclassSummaries[`${className}:${subclass}`] || ["這個子職目前還沒有整理過摘要。"]; }
function getPlayTips(state, classData, raceData) {
  const tips = [`種族節奏：${raceData.summary}`, `職業節奏：${classData.summary}`];
  if (state.class === "織霧者") tips.push("先分配法術位用途，再決定保命與輸出比例。");
  if (state.class === "靈術師") tips.push("注意專注與保護資源，別太早把核心回復交完。");
  if (state.class === "探索者") tips.push("開戰前先決定獵敵與站位，價值通常大於第一發輸出。");
  if (state.race === "艾維尼安人") tips.push("把變形狀態與場景需求綁在一起使用，會比單純加數值更強。");
  return tips;
}

function getStartingGloom(raceName) { return { "盧明人": 1, "普萊默斯人": 3, "艾維尼安人": 1, "東德雷塞爾人": 4, "西德雷塞爾人": 1 }[raceName] ?? "依團規"; }
function getArmorLabel(key) { return armorTypes.find((item) => item.key === key)?.label || "未裝備"; }
function getAbilityLabel(key) { return abilities.find((item) => item.key === key)?.label || "未知"; }
function getAbilityKeyByLabel(label) { return abilities.find((item) => item.label === label)?.key || null; }
function getModifier(score) { return Math.floor((score - 10) / 2); }
function getProficiencyBonus(level) { return Math.floor((Math.max(1, toNumber(level, 1)) - 1) / 4) + 2; }
function mergeProficiencies(baseItems, additionalItems) {
  const extras = String(additionalItems || "").split(/[、,，;；\n]/).map((item) => item.trim()).filter(Boolean);
  return [...new Set([...(baseItems || []), ...extras])];
}
function normalizeSubclass(className, subclassName) { return subclassAliases[className]?.[subclassName] || subclassName; }
function toNumber(value, fallback = 0) { if (value === null || value === undefined || value === "") return fallback; const parsed = Number(value); return Number.isFinite(parsed) ? parsed : fallback; }
function formatSigned(number) { return `${number >= 0 ? "+" : ""}${number}`; }
function escapeHtml(value) { return String(value).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;"); }
function statBox(label, value, variant = "") { return `<div class="stat-box ${variant}"><div class="stat-label">${label}</div><div class="stat-value">${value}</div></div>`; }
function featureBox(title, items, variant = "") { return `<article class="feature-box ${variant}"><h4>${title}</h4><ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></article>`; }
function trackerBox(title, items, variant = "") { return `<article class="tracker-box ${variant}"><h4>${title}</h4><ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></article>`; }
function noteBox(title, text, variant = "") { return `<article class="feature-box ${variant}"><h4>${title}</h4><div class="notes-block ${text ? "" : "empty"}">${escapeHtml(text || "尚未填寫")}</div></article>`; }
