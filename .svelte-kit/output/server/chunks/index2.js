var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all2) => {
  for (var name in all2)
    __defProp(target, name, { get: all2[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  __defProp(target, "default", { value: mod, enumerable: true }),
  mod
));
var require_extend = __commonJS({
  "node_modules/.pnpm/extend@3.0.2/node_modules/extend/index.js"(exports, module) {
    var hasOwn = Object.prototype.hasOwnProperty;
    var toStr = Object.prototype.toString;
    var defineProperty = Object.defineProperty;
    var gOPD = Object.getOwnPropertyDescriptor;
    var isArray = function isArray2(arr) {
      if (typeof Array.isArray === "function") {
        return Array.isArray(arr);
      }
      return toStr.call(arr) === "[object Array]";
    };
    var isPlainObject2 = function isPlainObject3(obj) {
      if (!obj || toStr.call(obj) !== "[object Object]") {
        return false;
      }
      var hasOwnConstructor = hasOwn.call(obj, "constructor");
      var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, "isPrototypeOf");
      if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
        return false;
      }
      var key;
      for (key in obj) {
      }
      return typeof key === "undefined" || hasOwn.call(obj, key);
    };
    var setProperty = function setProperty2(target, options) {
      if (defineProperty && options.name === "__proto__") {
        defineProperty(target, options.name, {
          enumerable: true,
          configurable: true,
          value: options.newValue,
          writable: true
        });
      } else {
        target[options.name] = options.newValue;
      }
    };
    var getProperty = function getProperty2(obj, name) {
      if (name === "__proto__") {
        if (!hasOwn.call(obj, name)) {
          return void 0;
        } else if (gOPD) {
          return gOPD(obj, name).value;
        }
      }
      return obj[name];
    };
    module.exports = function extend2() {
      var options, name, src, copy, copyIsArray, clone;
      var target = arguments[0];
      var i = 1;
      var length = arguments.length;
      var deep = false;
      if (typeof target === "boolean") {
        deep = target;
        target = arguments[1] || {};
        i = 2;
      }
      if (target == null || typeof target !== "object" && typeof target !== "function") {
        target = {};
      }
      for (; i < length; ++i) {
        options = arguments[i];
        if (options != null) {
          for (name in options) {
            src = getProperty(target, name);
            copy = getProperty(options, name);
            if (target !== copy) {
              if (deep && copy && (isPlainObject2(copy) || (copyIsArray = isArray(copy)))) {
                if (copyIsArray) {
                  copyIsArray = false;
                  clone = src && isArray(src) ? src : [];
                } else {
                  clone = src && isPlainObject2(src) ? src : {};
                }
                setProperty(target, { name, newValue: extend2(deep, clone, copy) });
              } else if (typeof copy !== "undefined") {
                setProperty(target, { name, newValue: copy });
              }
            }
          }
        }
      }
      return target;
    };
  }
});
var emptyOptions$1 = {};
function toString$1(value, options) {
  const settings = emptyOptions$1;
  const includeImageAlt = typeof settings.includeImageAlt === "boolean" ? settings.includeImageAlt : true;
  const includeHtml = typeof settings.includeHtml === "boolean" ? settings.includeHtml : true;
  return one$1(value, includeImageAlt, includeHtml);
}
function one$1(value, includeImageAlt, includeHtml) {
  if (node$1(value)) {
    if ("value" in value) {
      return value.type === "html" && !includeHtml ? "" : value.value;
    }
    if (includeImageAlt && "alt" in value && value.alt) {
      return value.alt;
    }
    if ("children" in value) {
      return all$1(value.children, includeImageAlt, includeHtml);
    }
  }
  if (Array.isArray(value)) {
    return all$1(value, includeImageAlt, includeHtml);
  }
  return "";
}
function all$1(values, includeImageAlt, includeHtml) {
  const result = [];
  let index2 = -1;
  while (++index2 < values.length) {
    result[index2] = one$1(values[index2], includeImageAlt, includeHtml);
  }
  return result.join("");
}
function node$1(value) {
  return Boolean(value && typeof value === "object");
}
var characterEntities = {
  AElig: "Æ",
  AMP: "&",
  Aacute: "Á",
  Abreve: "Ă",
  Acirc: "Â",
  Acy: "А",
  Afr: "𝔄",
  Agrave: "À",
  Alpha: "Α",
  Amacr: "Ā",
  And: "⩓",
  Aogon: "Ą",
  Aopf: "𝔸",
  ApplyFunction: "⁡",
  Aring: "Å",
  Ascr: "𝒜",
  Assign: "≔",
  Atilde: "Ã",
  Auml: "Ä",
  Backslash: "∖",
  Barv: "⫧",
  Barwed: "⌆",
  Bcy: "Б",
  Because: "∵",
  Bernoullis: "ℬ",
  Beta: "Β",
  Bfr: "𝔅",
  Bopf: "𝔹",
  Breve: "˘",
  Bscr: "ℬ",
  Bumpeq: "≎",
  CHcy: "Ч",
  COPY: "©",
  Cacute: "Ć",
  Cap: "⋒",
  CapitalDifferentialD: "ⅅ",
  Cayleys: "ℭ",
  Ccaron: "Č",
  Ccedil: "Ç",
  Ccirc: "Ĉ",
  Cconint: "∰",
  Cdot: "Ċ",
  Cedilla: "¸",
  CenterDot: "·",
  Cfr: "ℭ",
  Chi: "Χ",
  CircleDot: "⊙",
  CircleMinus: "⊖",
  CirclePlus: "⊕",
  CircleTimes: "⊗",
  ClockwiseContourIntegral: "∲",
  CloseCurlyDoubleQuote: "”",
  CloseCurlyQuote: "’",
  Colon: "∷",
  Colone: "⩴",
  Congruent: "≡",
  Conint: "∯",
  ContourIntegral: "∮",
  Copf: "ℂ",
  Coproduct: "∐",
  CounterClockwiseContourIntegral: "∳",
  Cross: "⨯",
  Cscr: "𝒞",
  Cup: "⋓",
  CupCap: "≍",
  DD: "ⅅ",
  DDotrahd: "⤑",
  DJcy: "Ђ",
  DScy: "Ѕ",
  DZcy: "Џ",
  Dagger: "‡",
  Darr: "↡",
  Dashv: "⫤",
  Dcaron: "Ď",
  Dcy: "Д",
  Del: "∇",
  Delta: "Δ",
  Dfr: "𝔇",
  DiacriticalAcute: "´",
  DiacriticalDot: "˙",
  DiacriticalDoubleAcute: "˝",
  DiacriticalGrave: "`",
  DiacriticalTilde: "˜",
  Diamond: "⋄",
  DifferentialD: "ⅆ",
  Dopf: "𝔻",
  Dot: "¨",
  DotDot: "⃜",
  DotEqual: "≐",
  DoubleContourIntegral: "∯",
  DoubleDot: "¨",
  DoubleDownArrow: "⇓",
  DoubleLeftArrow: "⇐",
  DoubleLeftRightArrow: "⇔",
  DoubleLeftTee: "⫤",
  DoubleLongLeftArrow: "⟸",
  DoubleLongLeftRightArrow: "⟺",
  DoubleLongRightArrow: "⟹",
  DoubleRightArrow: "⇒",
  DoubleRightTee: "⊨",
  DoubleUpArrow: "⇑",
  DoubleUpDownArrow: "⇕",
  DoubleVerticalBar: "∥",
  DownArrow: "↓",
  DownArrowBar: "⤓",
  DownArrowUpArrow: "⇵",
  DownBreve: "̑",
  DownLeftRightVector: "⥐",
  DownLeftTeeVector: "⥞",
  DownLeftVector: "↽",
  DownLeftVectorBar: "⥖",
  DownRightTeeVector: "⥟",
  DownRightVector: "⇁",
  DownRightVectorBar: "⥗",
  DownTee: "⊤",
  DownTeeArrow: "↧",
  Downarrow: "⇓",
  Dscr: "𝒟",
  Dstrok: "Đ",
  ENG: "Ŋ",
  ETH: "Ð",
  Eacute: "É",
  Ecaron: "Ě",
  Ecirc: "Ê",
  Ecy: "Э",
  Edot: "Ė",
  Efr: "𝔈",
  Egrave: "È",
  Element: "∈",
  Emacr: "Ē",
  EmptySmallSquare: "◻",
  EmptyVerySmallSquare: "▫",
  Eogon: "Ę",
  Eopf: "𝔼",
  Epsilon: "Ε",
  Equal: "⩵",
  EqualTilde: "≂",
  Equilibrium: "⇌",
  Escr: "ℰ",
  Esim: "⩳",
  Eta: "Η",
  Euml: "Ë",
  Exists: "∃",
  ExponentialE: "ⅇ",
  Fcy: "Ф",
  Ffr: "𝔉",
  FilledSmallSquare: "◼",
  FilledVerySmallSquare: "▪",
  Fopf: "𝔽",
  ForAll: "∀",
  Fouriertrf: "ℱ",
  Fscr: "ℱ",
  GJcy: "Ѓ",
  GT: ">",
  Gamma: "Γ",
  Gammad: "Ϝ",
  Gbreve: "Ğ",
  Gcedil: "Ģ",
  Gcirc: "Ĝ",
  Gcy: "Г",
  Gdot: "Ġ",
  Gfr: "𝔊",
  Gg: "⋙",
  Gopf: "𝔾",
  GreaterEqual: "≥",
  GreaterEqualLess: "⋛",
  GreaterFullEqual: "≧",
  GreaterGreater: "⪢",
  GreaterLess: "≷",
  GreaterSlantEqual: "⩾",
  GreaterTilde: "≳",
  Gscr: "𝒢",
  Gt: "≫",
  HARDcy: "Ъ",
  Hacek: "ˇ",
  Hat: "^",
  Hcirc: "Ĥ",
  Hfr: "ℌ",
  HilbertSpace: "ℋ",
  Hopf: "ℍ",
  HorizontalLine: "─",
  Hscr: "ℋ",
  Hstrok: "Ħ",
  HumpDownHump: "≎",
  HumpEqual: "≏",
  IEcy: "Е",
  IJlig: "Ĳ",
  IOcy: "Ё",
  Iacute: "Í",
  Icirc: "Î",
  Icy: "И",
  Idot: "İ",
  Ifr: "ℑ",
  Igrave: "Ì",
  Im: "ℑ",
  Imacr: "Ī",
  ImaginaryI: "ⅈ",
  Implies: "⇒",
  Int: "∬",
  Integral: "∫",
  Intersection: "⋂",
  InvisibleComma: "⁣",
  InvisibleTimes: "⁢",
  Iogon: "Į",
  Iopf: "𝕀",
  Iota: "Ι",
  Iscr: "ℐ",
  Itilde: "Ĩ",
  Iukcy: "І",
  Iuml: "Ï",
  Jcirc: "Ĵ",
  Jcy: "Й",
  Jfr: "𝔍",
  Jopf: "𝕁",
  Jscr: "𝒥",
  Jsercy: "Ј",
  Jukcy: "Є",
  KHcy: "Х",
  KJcy: "Ќ",
  Kappa: "Κ",
  Kcedil: "Ķ",
  Kcy: "К",
  Kfr: "𝔎",
  Kopf: "𝕂",
  Kscr: "𝒦",
  LJcy: "Љ",
  LT: "<",
  Lacute: "Ĺ",
  Lambda: "Λ",
  Lang: "⟪",
  Laplacetrf: "ℒ",
  Larr: "↞",
  Lcaron: "Ľ",
  Lcedil: "Ļ",
  Lcy: "Л",
  LeftAngleBracket: "⟨",
  LeftArrow: "←",
  LeftArrowBar: "⇤",
  LeftArrowRightArrow: "⇆",
  LeftCeiling: "⌈",
  LeftDoubleBracket: "⟦",
  LeftDownTeeVector: "⥡",
  LeftDownVector: "⇃",
  LeftDownVectorBar: "⥙",
  LeftFloor: "⌊",
  LeftRightArrow: "↔",
  LeftRightVector: "⥎",
  LeftTee: "⊣",
  LeftTeeArrow: "↤",
  LeftTeeVector: "⥚",
  LeftTriangle: "⊲",
  LeftTriangleBar: "⧏",
  LeftTriangleEqual: "⊴",
  LeftUpDownVector: "⥑",
  LeftUpTeeVector: "⥠",
  LeftUpVector: "↿",
  LeftUpVectorBar: "⥘",
  LeftVector: "↼",
  LeftVectorBar: "⥒",
  Leftarrow: "⇐",
  Leftrightarrow: "⇔",
  LessEqualGreater: "⋚",
  LessFullEqual: "≦",
  LessGreater: "≶",
  LessLess: "⪡",
  LessSlantEqual: "⩽",
  LessTilde: "≲",
  Lfr: "𝔏",
  Ll: "⋘",
  Lleftarrow: "⇚",
  Lmidot: "Ŀ",
  LongLeftArrow: "⟵",
  LongLeftRightArrow: "⟷",
  LongRightArrow: "⟶",
  Longleftarrow: "⟸",
  Longleftrightarrow: "⟺",
  Longrightarrow: "⟹",
  Lopf: "𝕃",
  LowerLeftArrow: "↙",
  LowerRightArrow: "↘",
  Lscr: "ℒ",
  Lsh: "↰",
  Lstrok: "Ł",
  Lt: "≪",
  Map: "⤅",
  Mcy: "М",
  MediumSpace: " ",
  Mellintrf: "ℳ",
  Mfr: "𝔐",
  MinusPlus: "∓",
  Mopf: "𝕄",
  Mscr: "ℳ",
  Mu: "Μ",
  NJcy: "Њ",
  Nacute: "Ń",
  Ncaron: "Ň",
  Ncedil: "Ņ",
  Ncy: "Н",
  NegativeMediumSpace: "​",
  NegativeThickSpace: "​",
  NegativeThinSpace: "​",
  NegativeVeryThinSpace: "​",
  NestedGreaterGreater: "≫",
  NestedLessLess: "≪",
  NewLine: "\n",
  Nfr: "𝔑",
  NoBreak: "⁠",
  NonBreakingSpace: " ",
  Nopf: "ℕ",
  Not: "⫬",
  NotCongruent: "≢",
  NotCupCap: "≭",
  NotDoubleVerticalBar: "∦",
  NotElement: "∉",
  NotEqual: "≠",
  NotEqualTilde: "≂̸",
  NotExists: "∄",
  NotGreater: "≯",
  NotGreaterEqual: "≱",
  NotGreaterFullEqual: "≧̸",
  NotGreaterGreater: "≫̸",
  NotGreaterLess: "≹",
  NotGreaterSlantEqual: "⩾̸",
  NotGreaterTilde: "≵",
  NotHumpDownHump: "≎̸",
  NotHumpEqual: "≏̸",
  NotLeftTriangle: "⋪",
  NotLeftTriangleBar: "⧏̸",
  NotLeftTriangleEqual: "⋬",
  NotLess: "≮",
  NotLessEqual: "≰",
  NotLessGreater: "≸",
  NotLessLess: "≪̸",
  NotLessSlantEqual: "⩽̸",
  NotLessTilde: "≴",
  NotNestedGreaterGreater: "⪢̸",
  NotNestedLessLess: "⪡̸",
  NotPrecedes: "⊀",
  NotPrecedesEqual: "⪯̸",
  NotPrecedesSlantEqual: "⋠",
  NotReverseElement: "∌",
  NotRightTriangle: "⋫",
  NotRightTriangleBar: "⧐̸",
  NotRightTriangleEqual: "⋭",
  NotSquareSubset: "⊏̸",
  NotSquareSubsetEqual: "⋢",
  NotSquareSuperset: "⊐̸",
  NotSquareSupersetEqual: "⋣",
  NotSubset: "⊂⃒",
  NotSubsetEqual: "⊈",
  NotSucceeds: "⊁",
  NotSucceedsEqual: "⪰̸",
  NotSucceedsSlantEqual: "⋡",
  NotSucceedsTilde: "≿̸",
  NotSuperset: "⊃⃒",
  NotSupersetEqual: "⊉",
  NotTilde: "≁",
  NotTildeEqual: "≄",
  NotTildeFullEqual: "≇",
  NotTildeTilde: "≉",
  NotVerticalBar: "∤",
  Nscr: "𝒩",
  Ntilde: "Ñ",
  Nu: "Ν",
  OElig: "Œ",
  Oacute: "Ó",
  Ocirc: "Ô",
  Ocy: "О",
  Odblac: "Ő",
  Ofr: "𝔒",
  Ograve: "Ò",
  Omacr: "Ō",
  Omega: "Ω",
  Omicron: "Ο",
  Oopf: "𝕆",
  OpenCurlyDoubleQuote: "“",
  OpenCurlyQuote: "‘",
  Or: "⩔",
  Oscr: "𝒪",
  Oslash: "Ø",
  Otilde: "Õ",
  Otimes: "⨷",
  Ouml: "Ö",
  OverBar: "‾",
  OverBrace: "⏞",
  OverBracket: "⎴",
  OverParenthesis: "⏜",
  PartialD: "∂",
  Pcy: "П",
  Pfr: "𝔓",
  Phi: "Φ",
  Pi: "Π",
  PlusMinus: "±",
  Poincareplane: "ℌ",
  Popf: "ℙ",
  Pr: "⪻",
  Precedes: "≺",
  PrecedesEqual: "⪯",
  PrecedesSlantEqual: "≼",
  PrecedesTilde: "≾",
  Prime: "″",
  Product: "∏",
  Proportion: "∷",
  Proportional: "∝",
  Pscr: "𝒫",
  Psi: "Ψ",
  QUOT: '"',
  Qfr: "𝔔",
  Qopf: "ℚ",
  Qscr: "𝒬",
  RBarr: "⤐",
  REG: "®",
  Racute: "Ŕ",
  Rang: "⟫",
  Rarr: "↠",
  Rarrtl: "⤖",
  Rcaron: "Ř",
  Rcedil: "Ŗ",
  Rcy: "Р",
  Re: "ℜ",
  ReverseElement: "∋",
  ReverseEquilibrium: "⇋",
  ReverseUpEquilibrium: "⥯",
  Rfr: "ℜ",
  Rho: "Ρ",
  RightAngleBracket: "⟩",
  RightArrow: "→",
  RightArrowBar: "⇥",
  RightArrowLeftArrow: "⇄",
  RightCeiling: "⌉",
  RightDoubleBracket: "⟧",
  RightDownTeeVector: "⥝",
  RightDownVector: "⇂",
  RightDownVectorBar: "⥕",
  RightFloor: "⌋",
  RightTee: "⊢",
  RightTeeArrow: "↦",
  RightTeeVector: "⥛",
  RightTriangle: "⊳",
  RightTriangleBar: "⧐",
  RightTriangleEqual: "⊵",
  RightUpDownVector: "⥏",
  RightUpTeeVector: "⥜",
  RightUpVector: "↾",
  RightUpVectorBar: "⥔",
  RightVector: "⇀",
  RightVectorBar: "⥓",
  Rightarrow: "⇒",
  Ropf: "ℝ",
  RoundImplies: "⥰",
  Rrightarrow: "⇛",
  Rscr: "ℛ",
  Rsh: "↱",
  RuleDelayed: "⧴",
  SHCHcy: "Щ",
  SHcy: "Ш",
  SOFTcy: "Ь",
  Sacute: "Ś",
  Sc: "⪼",
  Scaron: "Š",
  Scedil: "Ş",
  Scirc: "Ŝ",
  Scy: "С",
  Sfr: "𝔖",
  ShortDownArrow: "↓",
  ShortLeftArrow: "←",
  ShortRightArrow: "→",
  ShortUpArrow: "↑",
  Sigma: "Σ",
  SmallCircle: "∘",
  Sopf: "𝕊",
  Sqrt: "√",
  Square: "□",
  SquareIntersection: "⊓",
  SquareSubset: "⊏",
  SquareSubsetEqual: "⊑",
  SquareSuperset: "⊐",
  SquareSupersetEqual: "⊒",
  SquareUnion: "⊔",
  Sscr: "𝒮",
  Star: "⋆",
  Sub: "⋐",
  Subset: "⋐",
  SubsetEqual: "⊆",
  Succeeds: "≻",
  SucceedsEqual: "⪰",
  SucceedsSlantEqual: "≽",
  SucceedsTilde: "≿",
  SuchThat: "∋",
  Sum: "∑",
  Sup: "⋑",
  Superset: "⊃",
  SupersetEqual: "⊇",
  Supset: "⋑",
  THORN: "Þ",
  TRADE: "™",
  TSHcy: "Ћ",
  TScy: "Ц",
  Tab: "	",
  Tau: "Τ",
  Tcaron: "Ť",
  Tcedil: "Ţ",
  Tcy: "Т",
  Tfr: "𝔗",
  Therefore: "∴",
  Theta: "Θ",
  ThickSpace: "  ",
  ThinSpace: " ",
  Tilde: "∼",
  TildeEqual: "≃",
  TildeFullEqual: "≅",
  TildeTilde: "≈",
  Topf: "𝕋",
  TripleDot: "⃛",
  Tscr: "𝒯",
  Tstrok: "Ŧ",
  Uacute: "Ú",
  Uarr: "↟",
  Uarrocir: "⥉",
  Ubrcy: "Ў",
  Ubreve: "Ŭ",
  Ucirc: "Û",
  Ucy: "У",
  Udblac: "Ű",
  Ufr: "𝔘",
  Ugrave: "Ù",
  Umacr: "Ū",
  UnderBar: "_",
  UnderBrace: "⏟",
  UnderBracket: "⎵",
  UnderParenthesis: "⏝",
  Union: "⋃",
  UnionPlus: "⊎",
  Uogon: "Ų",
  Uopf: "𝕌",
  UpArrow: "↑",
  UpArrowBar: "⤒",
  UpArrowDownArrow: "⇅",
  UpDownArrow: "↕",
  UpEquilibrium: "⥮",
  UpTee: "⊥",
  UpTeeArrow: "↥",
  Uparrow: "⇑",
  Updownarrow: "⇕",
  UpperLeftArrow: "↖",
  UpperRightArrow: "↗",
  Upsi: "ϒ",
  Upsilon: "Υ",
  Uring: "Ů",
  Uscr: "𝒰",
  Utilde: "Ũ",
  Uuml: "Ü",
  VDash: "⊫",
  Vbar: "⫫",
  Vcy: "В",
  Vdash: "⊩",
  Vdashl: "⫦",
  Vee: "⋁",
  Verbar: "‖",
  Vert: "‖",
  VerticalBar: "∣",
  VerticalLine: "|",
  VerticalSeparator: "❘",
  VerticalTilde: "≀",
  VeryThinSpace: " ",
  Vfr: "𝔙",
  Vopf: "𝕍",
  Vscr: "𝒱",
  Vvdash: "⊪",
  Wcirc: "Ŵ",
  Wedge: "⋀",
  Wfr: "𝔚",
  Wopf: "𝕎",
  Wscr: "𝒲",
  Xfr: "𝔛",
  Xi: "Ξ",
  Xopf: "𝕏",
  Xscr: "𝒳",
  YAcy: "Я",
  YIcy: "Ї",
  YUcy: "Ю",
  Yacute: "Ý",
  Ycirc: "Ŷ",
  Ycy: "Ы",
  Yfr: "𝔜",
  Yopf: "𝕐",
  Yscr: "𝒴",
  Yuml: "Ÿ",
  ZHcy: "Ж",
  Zacute: "Ź",
  Zcaron: "Ž",
  Zcy: "З",
  Zdot: "Ż",
  ZeroWidthSpace: "​",
  Zeta: "Ζ",
  Zfr: "ℨ",
  Zopf: "ℤ",
  Zscr: "𝒵",
  aacute: "á",
  abreve: "ă",
  ac: "∾",
  acE: "∾̳",
  acd: "∿",
  acirc: "â",
  acute: "´",
  acy: "а",
  aelig: "æ",
  af: "⁡",
  afr: "𝔞",
  agrave: "à",
  alefsym: "ℵ",
  aleph: "ℵ",
  alpha: "α",
  amacr: "ā",
  amalg: "⨿",
  amp: "&",
  and: "∧",
  andand: "⩕",
  andd: "⩜",
  andslope: "⩘",
  andv: "⩚",
  ang: "∠",
  ange: "⦤",
  angle: "∠",
  angmsd: "∡",
  angmsdaa: "⦨",
  angmsdab: "⦩",
  angmsdac: "⦪",
  angmsdad: "⦫",
  angmsdae: "⦬",
  angmsdaf: "⦭",
  angmsdag: "⦮",
  angmsdah: "⦯",
  angrt: "∟",
  angrtvb: "⊾",
  angrtvbd: "⦝",
  angsph: "∢",
  angst: "Å",
  angzarr: "⍼",
  aogon: "ą",
  aopf: "𝕒",
  ap: "≈",
  apE: "⩰",
  apacir: "⩯",
  ape: "≊",
  apid: "≋",
  apos: "'",
  approx: "≈",
  approxeq: "≊",
  aring: "å",
  ascr: "𝒶",
  ast: "*",
  asymp: "≈",
  asympeq: "≍",
  atilde: "ã",
  auml: "ä",
  awconint: "∳",
  awint: "⨑",
  bNot: "⫭",
  backcong: "≌",
  backepsilon: "϶",
  backprime: "‵",
  backsim: "∽",
  backsimeq: "⋍",
  barvee: "⊽",
  barwed: "⌅",
  barwedge: "⌅",
  bbrk: "⎵",
  bbrktbrk: "⎶",
  bcong: "≌",
  bcy: "б",
  bdquo: "„",
  becaus: "∵",
  because: "∵",
  bemptyv: "⦰",
  bepsi: "϶",
  bernou: "ℬ",
  beta: "β",
  beth: "ℶ",
  between: "≬",
  bfr: "𝔟",
  bigcap: "⋂",
  bigcirc: "◯",
  bigcup: "⋃",
  bigodot: "⨀",
  bigoplus: "⨁",
  bigotimes: "⨂",
  bigsqcup: "⨆",
  bigstar: "★",
  bigtriangledown: "▽",
  bigtriangleup: "△",
  biguplus: "⨄",
  bigvee: "⋁",
  bigwedge: "⋀",
  bkarow: "⤍",
  blacklozenge: "⧫",
  blacksquare: "▪",
  blacktriangle: "▴",
  blacktriangledown: "▾",
  blacktriangleleft: "◂",
  blacktriangleright: "▸",
  blank: "␣",
  blk12: "▒",
  blk14: "░",
  blk34: "▓",
  block: "█",
  bne: "=⃥",
  bnequiv: "≡⃥",
  bnot: "⌐",
  bopf: "𝕓",
  bot: "⊥",
  bottom: "⊥",
  bowtie: "⋈",
  boxDL: "╗",
  boxDR: "╔",
  boxDl: "╖",
  boxDr: "╓",
  boxH: "═",
  boxHD: "╦",
  boxHU: "╩",
  boxHd: "╤",
  boxHu: "╧",
  boxUL: "╝",
  boxUR: "╚",
  boxUl: "╜",
  boxUr: "╙",
  boxV: "║",
  boxVH: "╬",
  boxVL: "╣",
  boxVR: "╠",
  boxVh: "╫",
  boxVl: "╢",
  boxVr: "╟",
  boxbox: "⧉",
  boxdL: "╕",
  boxdR: "╒",
  boxdl: "┐",
  boxdr: "┌",
  boxh: "─",
  boxhD: "╥",
  boxhU: "╨",
  boxhd: "┬",
  boxhu: "┴",
  boxminus: "⊟",
  boxplus: "⊞",
  boxtimes: "⊠",
  boxuL: "╛",
  boxuR: "╘",
  boxul: "┘",
  boxur: "└",
  boxv: "│",
  boxvH: "╪",
  boxvL: "╡",
  boxvR: "╞",
  boxvh: "┼",
  boxvl: "┤",
  boxvr: "├",
  bprime: "‵",
  breve: "˘",
  brvbar: "¦",
  bscr: "𝒷",
  bsemi: "⁏",
  bsim: "∽",
  bsime: "⋍",
  bsol: "\\",
  bsolb: "⧅",
  bsolhsub: "⟈",
  bull: "•",
  bullet: "•",
  bump: "≎",
  bumpE: "⪮",
  bumpe: "≏",
  bumpeq: "≏",
  cacute: "ć",
  cap: "∩",
  capand: "⩄",
  capbrcup: "⩉",
  capcap: "⩋",
  capcup: "⩇",
  capdot: "⩀",
  caps: "∩︀",
  caret: "⁁",
  caron: "ˇ",
  ccaps: "⩍",
  ccaron: "č",
  ccedil: "ç",
  ccirc: "ĉ",
  ccups: "⩌",
  ccupssm: "⩐",
  cdot: "ċ",
  cedil: "¸",
  cemptyv: "⦲",
  cent: "¢",
  centerdot: "·",
  cfr: "𝔠",
  chcy: "ч",
  check: "✓",
  checkmark: "✓",
  chi: "χ",
  cir: "○",
  cirE: "⧃",
  circ: "ˆ",
  circeq: "≗",
  circlearrowleft: "↺",
  circlearrowright: "↻",
  circledR: "®",
  circledS: "Ⓢ",
  circledast: "⊛",
  circledcirc: "⊚",
  circleddash: "⊝",
  cire: "≗",
  cirfnint: "⨐",
  cirmid: "⫯",
  cirscir: "⧂",
  clubs: "♣",
  clubsuit: "♣",
  colon: ":",
  colone: "≔",
  coloneq: "≔",
  comma: ",",
  commat: "@",
  comp: "∁",
  compfn: "∘",
  complement: "∁",
  complexes: "ℂ",
  cong: "≅",
  congdot: "⩭",
  conint: "∮",
  copf: "𝕔",
  coprod: "∐",
  copy: "©",
  copysr: "℗",
  crarr: "↵",
  cross: "✗",
  cscr: "𝒸",
  csub: "⫏",
  csube: "⫑",
  csup: "⫐",
  csupe: "⫒",
  ctdot: "⋯",
  cudarrl: "⤸",
  cudarrr: "⤵",
  cuepr: "⋞",
  cuesc: "⋟",
  cularr: "↶",
  cularrp: "⤽",
  cup: "∪",
  cupbrcap: "⩈",
  cupcap: "⩆",
  cupcup: "⩊",
  cupdot: "⊍",
  cupor: "⩅",
  cups: "∪︀",
  curarr: "↷",
  curarrm: "⤼",
  curlyeqprec: "⋞",
  curlyeqsucc: "⋟",
  curlyvee: "⋎",
  curlywedge: "⋏",
  curren: "¤",
  curvearrowleft: "↶",
  curvearrowright: "↷",
  cuvee: "⋎",
  cuwed: "⋏",
  cwconint: "∲",
  cwint: "∱",
  cylcty: "⌭",
  dArr: "⇓",
  dHar: "⥥",
  dagger: "†",
  daleth: "ℸ",
  darr: "↓",
  dash: "‐",
  dashv: "⊣",
  dbkarow: "⤏",
  dblac: "˝",
  dcaron: "ď",
  dcy: "д",
  dd: "ⅆ",
  ddagger: "‡",
  ddarr: "⇊",
  ddotseq: "⩷",
  deg: "°",
  delta: "δ",
  demptyv: "⦱",
  dfisht: "⥿",
  dfr: "𝔡",
  dharl: "⇃",
  dharr: "⇂",
  diam: "⋄",
  diamond: "⋄",
  diamondsuit: "♦",
  diams: "♦",
  die: "¨",
  digamma: "ϝ",
  disin: "⋲",
  div: "÷",
  divide: "÷",
  divideontimes: "⋇",
  divonx: "⋇",
  djcy: "ђ",
  dlcorn: "⌞",
  dlcrop: "⌍",
  dollar: "$",
  dopf: "𝕕",
  dot: "˙",
  doteq: "≐",
  doteqdot: "≑",
  dotminus: "∸",
  dotplus: "∔",
  dotsquare: "⊡",
  doublebarwedge: "⌆",
  downarrow: "↓",
  downdownarrows: "⇊",
  downharpoonleft: "⇃",
  downharpoonright: "⇂",
  drbkarow: "⤐",
  drcorn: "⌟",
  drcrop: "⌌",
  dscr: "𝒹",
  dscy: "ѕ",
  dsol: "⧶",
  dstrok: "đ",
  dtdot: "⋱",
  dtri: "▿",
  dtrif: "▾",
  duarr: "⇵",
  duhar: "⥯",
  dwangle: "⦦",
  dzcy: "џ",
  dzigrarr: "⟿",
  eDDot: "⩷",
  eDot: "≑",
  eacute: "é",
  easter: "⩮",
  ecaron: "ě",
  ecir: "≖",
  ecirc: "ê",
  ecolon: "≕",
  ecy: "э",
  edot: "ė",
  ee: "ⅇ",
  efDot: "≒",
  efr: "𝔢",
  eg: "⪚",
  egrave: "è",
  egs: "⪖",
  egsdot: "⪘",
  el: "⪙",
  elinters: "⏧",
  ell: "ℓ",
  els: "⪕",
  elsdot: "⪗",
  emacr: "ē",
  empty: "∅",
  emptyset: "∅",
  emptyv: "∅",
  emsp13: " ",
  emsp14: " ",
  emsp: " ",
  eng: "ŋ",
  ensp: " ",
  eogon: "ę",
  eopf: "𝕖",
  epar: "⋕",
  eparsl: "⧣",
  eplus: "⩱",
  epsi: "ε",
  epsilon: "ε",
  epsiv: "ϵ",
  eqcirc: "≖",
  eqcolon: "≕",
  eqsim: "≂",
  eqslantgtr: "⪖",
  eqslantless: "⪕",
  equals: "=",
  equest: "≟",
  equiv: "≡",
  equivDD: "⩸",
  eqvparsl: "⧥",
  erDot: "≓",
  erarr: "⥱",
  escr: "ℯ",
  esdot: "≐",
  esim: "≂",
  eta: "η",
  eth: "ð",
  euml: "ë",
  euro: "€",
  excl: "!",
  exist: "∃",
  expectation: "ℰ",
  exponentiale: "ⅇ",
  fallingdotseq: "≒",
  fcy: "ф",
  female: "♀",
  ffilig: "ﬃ",
  fflig: "ﬀ",
  ffllig: "ﬄ",
  ffr: "𝔣",
  filig: "ﬁ",
  fjlig: "fj",
  flat: "♭",
  fllig: "ﬂ",
  fltns: "▱",
  fnof: "ƒ",
  fopf: "𝕗",
  forall: "∀",
  fork: "⋔",
  forkv: "⫙",
  fpartint: "⨍",
  frac12: "½",
  frac13: "⅓",
  frac14: "¼",
  frac15: "⅕",
  frac16: "⅙",
  frac18: "⅛",
  frac23: "⅔",
  frac25: "⅖",
  frac34: "¾",
  frac35: "⅗",
  frac38: "⅜",
  frac45: "⅘",
  frac56: "⅚",
  frac58: "⅝",
  frac78: "⅞",
  frasl: "⁄",
  frown: "⌢",
  fscr: "𝒻",
  gE: "≧",
  gEl: "⪌",
  gacute: "ǵ",
  gamma: "γ",
  gammad: "ϝ",
  gap: "⪆",
  gbreve: "ğ",
  gcirc: "ĝ",
  gcy: "г",
  gdot: "ġ",
  ge: "≥",
  gel: "⋛",
  geq: "≥",
  geqq: "≧",
  geqslant: "⩾",
  ges: "⩾",
  gescc: "⪩",
  gesdot: "⪀",
  gesdoto: "⪂",
  gesdotol: "⪄",
  gesl: "⋛︀",
  gesles: "⪔",
  gfr: "𝔤",
  gg: "≫",
  ggg: "⋙",
  gimel: "ℷ",
  gjcy: "ѓ",
  gl: "≷",
  glE: "⪒",
  gla: "⪥",
  glj: "⪤",
  gnE: "≩",
  gnap: "⪊",
  gnapprox: "⪊",
  gne: "⪈",
  gneq: "⪈",
  gneqq: "≩",
  gnsim: "⋧",
  gopf: "𝕘",
  grave: "`",
  gscr: "ℊ",
  gsim: "≳",
  gsime: "⪎",
  gsiml: "⪐",
  gt: ">",
  gtcc: "⪧",
  gtcir: "⩺",
  gtdot: "⋗",
  gtlPar: "⦕",
  gtquest: "⩼",
  gtrapprox: "⪆",
  gtrarr: "⥸",
  gtrdot: "⋗",
  gtreqless: "⋛",
  gtreqqless: "⪌",
  gtrless: "≷",
  gtrsim: "≳",
  gvertneqq: "≩︀",
  gvnE: "≩︀",
  hArr: "⇔",
  hairsp: " ",
  half: "½",
  hamilt: "ℋ",
  hardcy: "ъ",
  harr: "↔",
  harrcir: "⥈",
  harrw: "↭",
  hbar: "ℏ",
  hcirc: "ĥ",
  hearts: "♥",
  heartsuit: "♥",
  hellip: "…",
  hercon: "⊹",
  hfr: "𝔥",
  hksearow: "⤥",
  hkswarow: "⤦",
  hoarr: "⇿",
  homtht: "∻",
  hookleftarrow: "↩",
  hookrightarrow: "↪",
  hopf: "𝕙",
  horbar: "―",
  hscr: "𝒽",
  hslash: "ℏ",
  hstrok: "ħ",
  hybull: "⁃",
  hyphen: "‐",
  iacute: "í",
  ic: "⁣",
  icirc: "î",
  icy: "и",
  iecy: "е",
  iexcl: "¡",
  iff: "⇔",
  ifr: "𝔦",
  igrave: "ì",
  ii: "ⅈ",
  iiiint: "⨌",
  iiint: "∭",
  iinfin: "⧜",
  iiota: "℩",
  ijlig: "ĳ",
  imacr: "ī",
  image: "ℑ",
  imagline: "ℐ",
  imagpart: "ℑ",
  imath: "ı",
  imof: "⊷",
  imped: "Ƶ",
  in: "∈",
  incare: "℅",
  infin: "∞",
  infintie: "⧝",
  inodot: "ı",
  int: "∫",
  intcal: "⊺",
  integers: "ℤ",
  intercal: "⊺",
  intlarhk: "⨗",
  intprod: "⨼",
  iocy: "ё",
  iogon: "į",
  iopf: "𝕚",
  iota: "ι",
  iprod: "⨼",
  iquest: "¿",
  iscr: "𝒾",
  isin: "∈",
  isinE: "⋹",
  isindot: "⋵",
  isins: "⋴",
  isinsv: "⋳",
  isinv: "∈",
  it: "⁢",
  itilde: "ĩ",
  iukcy: "і",
  iuml: "ï",
  jcirc: "ĵ",
  jcy: "й",
  jfr: "𝔧",
  jmath: "ȷ",
  jopf: "𝕛",
  jscr: "𝒿",
  jsercy: "ј",
  jukcy: "є",
  kappa: "κ",
  kappav: "ϰ",
  kcedil: "ķ",
  kcy: "к",
  kfr: "𝔨",
  kgreen: "ĸ",
  khcy: "х",
  kjcy: "ќ",
  kopf: "𝕜",
  kscr: "𝓀",
  lAarr: "⇚",
  lArr: "⇐",
  lAtail: "⤛",
  lBarr: "⤎",
  lE: "≦",
  lEg: "⪋",
  lHar: "⥢",
  lacute: "ĺ",
  laemptyv: "⦴",
  lagran: "ℒ",
  lambda: "λ",
  lang: "⟨",
  langd: "⦑",
  langle: "⟨",
  lap: "⪅",
  laquo: "«",
  larr: "←",
  larrb: "⇤",
  larrbfs: "⤟",
  larrfs: "⤝",
  larrhk: "↩",
  larrlp: "↫",
  larrpl: "⤹",
  larrsim: "⥳",
  larrtl: "↢",
  lat: "⪫",
  latail: "⤙",
  late: "⪭",
  lates: "⪭︀",
  lbarr: "⤌",
  lbbrk: "❲",
  lbrace: "{",
  lbrack: "[",
  lbrke: "⦋",
  lbrksld: "⦏",
  lbrkslu: "⦍",
  lcaron: "ľ",
  lcedil: "ļ",
  lceil: "⌈",
  lcub: "{",
  lcy: "л",
  ldca: "⤶",
  ldquo: "“",
  ldquor: "„",
  ldrdhar: "⥧",
  ldrushar: "⥋",
  ldsh: "↲",
  le: "≤",
  leftarrow: "←",
  leftarrowtail: "↢",
  leftharpoondown: "↽",
  leftharpoonup: "↼",
  leftleftarrows: "⇇",
  leftrightarrow: "↔",
  leftrightarrows: "⇆",
  leftrightharpoons: "⇋",
  leftrightsquigarrow: "↭",
  leftthreetimes: "⋋",
  leg: "⋚",
  leq: "≤",
  leqq: "≦",
  leqslant: "⩽",
  les: "⩽",
  lescc: "⪨",
  lesdot: "⩿",
  lesdoto: "⪁",
  lesdotor: "⪃",
  lesg: "⋚︀",
  lesges: "⪓",
  lessapprox: "⪅",
  lessdot: "⋖",
  lesseqgtr: "⋚",
  lesseqqgtr: "⪋",
  lessgtr: "≶",
  lesssim: "≲",
  lfisht: "⥼",
  lfloor: "⌊",
  lfr: "𝔩",
  lg: "≶",
  lgE: "⪑",
  lhard: "↽",
  lharu: "↼",
  lharul: "⥪",
  lhblk: "▄",
  ljcy: "љ",
  ll: "≪",
  llarr: "⇇",
  llcorner: "⌞",
  llhard: "⥫",
  lltri: "◺",
  lmidot: "ŀ",
  lmoust: "⎰",
  lmoustache: "⎰",
  lnE: "≨",
  lnap: "⪉",
  lnapprox: "⪉",
  lne: "⪇",
  lneq: "⪇",
  lneqq: "≨",
  lnsim: "⋦",
  loang: "⟬",
  loarr: "⇽",
  lobrk: "⟦",
  longleftarrow: "⟵",
  longleftrightarrow: "⟷",
  longmapsto: "⟼",
  longrightarrow: "⟶",
  looparrowleft: "↫",
  looparrowright: "↬",
  lopar: "⦅",
  lopf: "𝕝",
  loplus: "⨭",
  lotimes: "⨴",
  lowast: "∗",
  lowbar: "_",
  loz: "◊",
  lozenge: "◊",
  lozf: "⧫",
  lpar: "(",
  lparlt: "⦓",
  lrarr: "⇆",
  lrcorner: "⌟",
  lrhar: "⇋",
  lrhard: "⥭",
  lrm: "‎",
  lrtri: "⊿",
  lsaquo: "‹",
  lscr: "𝓁",
  lsh: "↰",
  lsim: "≲",
  lsime: "⪍",
  lsimg: "⪏",
  lsqb: "[",
  lsquo: "‘",
  lsquor: "‚",
  lstrok: "ł",
  lt: "<",
  ltcc: "⪦",
  ltcir: "⩹",
  ltdot: "⋖",
  lthree: "⋋",
  ltimes: "⋉",
  ltlarr: "⥶",
  ltquest: "⩻",
  ltrPar: "⦖",
  ltri: "◃",
  ltrie: "⊴",
  ltrif: "◂",
  lurdshar: "⥊",
  luruhar: "⥦",
  lvertneqq: "≨︀",
  lvnE: "≨︀",
  mDDot: "∺",
  macr: "¯",
  male: "♂",
  malt: "✠",
  maltese: "✠",
  map: "↦",
  mapsto: "↦",
  mapstodown: "↧",
  mapstoleft: "↤",
  mapstoup: "↥",
  marker: "▮",
  mcomma: "⨩",
  mcy: "м",
  mdash: "—",
  measuredangle: "∡",
  mfr: "𝔪",
  mho: "℧",
  micro: "µ",
  mid: "∣",
  midast: "*",
  midcir: "⫰",
  middot: "·",
  minus: "−",
  minusb: "⊟",
  minusd: "∸",
  minusdu: "⨪",
  mlcp: "⫛",
  mldr: "…",
  mnplus: "∓",
  models: "⊧",
  mopf: "𝕞",
  mp: "∓",
  mscr: "𝓂",
  mstpos: "∾",
  mu: "μ",
  multimap: "⊸",
  mumap: "⊸",
  nGg: "⋙̸",
  nGt: "≫⃒",
  nGtv: "≫̸",
  nLeftarrow: "⇍",
  nLeftrightarrow: "⇎",
  nLl: "⋘̸",
  nLt: "≪⃒",
  nLtv: "≪̸",
  nRightarrow: "⇏",
  nVDash: "⊯",
  nVdash: "⊮",
  nabla: "∇",
  nacute: "ń",
  nang: "∠⃒",
  nap: "≉",
  napE: "⩰̸",
  napid: "≋̸",
  napos: "ŉ",
  napprox: "≉",
  natur: "♮",
  natural: "♮",
  naturals: "ℕ",
  nbsp: " ",
  nbump: "≎̸",
  nbumpe: "≏̸",
  ncap: "⩃",
  ncaron: "ň",
  ncedil: "ņ",
  ncong: "≇",
  ncongdot: "⩭̸",
  ncup: "⩂",
  ncy: "н",
  ndash: "–",
  ne: "≠",
  neArr: "⇗",
  nearhk: "⤤",
  nearr: "↗",
  nearrow: "↗",
  nedot: "≐̸",
  nequiv: "≢",
  nesear: "⤨",
  nesim: "≂̸",
  nexist: "∄",
  nexists: "∄",
  nfr: "𝔫",
  ngE: "≧̸",
  nge: "≱",
  ngeq: "≱",
  ngeqq: "≧̸",
  ngeqslant: "⩾̸",
  nges: "⩾̸",
  ngsim: "≵",
  ngt: "≯",
  ngtr: "≯",
  nhArr: "⇎",
  nharr: "↮",
  nhpar: "⫲",
  ni: "∋",
  nis: "⋼",
  nisd: "⋺",
  niv: "∋",
  njcy: "њ",
  nlArr: "⇍",
  nlE: "≦̸",
  nlarr: "↚",
  nldr: "‥",
  nle: "≰",
  nleftarrow: "↚",
  nleftrightarrow: "↮",
  nleq: "≰",
  nleqq: "≦̸",
  nleqslant: "⩽̸",
  nles: "⩽̸",
  nless: "≮",
  nlsim: "≴",
  nlt: "≮",
  nltri: "⋪",
  nltrie: "⋬",
  nmid: "∤",
  nopf: "𝕟",
  not: "¬",
  notin: "∉",
  notinE: "⋹̸",
  notindot: "⋵̸",
  notinva: "∉",
  notinvb: "⋷",
  notinvc: "⋶",
  notni: "∌",
  notniva: "∌",
  notnivb: "⋾",
  notnivc: "⋽",
  npar: "∦",
  nparallel: "∦",
  nparsl: "⫽⃥",
  npart: "∂̸",
  npolint: "⨔",
  npr: "⊀",
  nprcue: "⋠",
  npre: "⪯̸",
  nprec: "⊀",
  npreceq: "⪯̸",
  nrArr: "⇏",
  nrarr: "↛",
  nrarrc: "⤳̸",
  nrarrw: "↝̸",
  nrightarrow: "↛",
  nrtri: "⋫",
  nrtrie: "⋭",
  nsc: "⊁",
  nsccue: "⋡",
  nsce: "⪰̸",
  nscr: "𝓃",
  nshortmid: "∤",
  nshortparallel: "∦",
  nsim: "≁",
  nsime: "≄",
  nsimeq: "≄",
  nsmid: "∤",
  nspar: "∦",
  nsqsube: "⋢",
  nsqsupe: "⋣",
  nsub: "⊄",
  nsubE: "⫅̸",
  nsube: "⊈",
  nsubset: "⊂⃒",
  nsubseteq: "⊈",
  nsubseteqq: "⫅̸",
  nsucc: "⊁",
  nsucceq: "⪰̸",
  nsup: "⊅",
  nsupE: "⫆̸",
  nsupe: "⊉",
  nsupset: "⊃⃒",
  nsupseteq: "⊉",
  nsupseteqq: "⫆̸",
  ntgl: "≹",
  ntilde: "ñ",
  ntlg: "≸",
  ntriangleleft: "⋪",
  ntrianglelefteq: "⋬",
  ntriangleright: "⋫",
  ntrianglerighteq: "⋭",
  nu: "ν",
  num: "#",
  numero: "№",
  numsp: " ",
  nvDash: "⊭",
  nvHarr: "⤄",
  nvap: "≍⃒",
  nvdash: "⊬",
  nvge: "≥⃒",
  nvgt: ">⃒",
  nvinfin: "⧞",
  nvlArr: "⤂",
  nvle: "≤⃒",
  nvlt: "<⃒",
  nvltrie: "⊴⃒",
  nvrArr: "⤃",
  nvrtrie: "⊵⃒",
  nvsim: "∼⃒",
  nwArr: "⇖",
  nwarhk: "⤣",
  nwarr: "↖",
  nwarrow: "↖",
  nwnear: "⤧",
  oS: "Ⓢ",
  oacute: "ó",
  oast: "⊛",
  ocir: "⊚",
  ocirc: "ô",
  ocy: "о",
  odash: "⊝",
  odblac: "ő",
  odiv: "⨸",
  odot: "⊙",
  odsold: "⦼",
  oelig: "œ",
  ofcir: "⦿",
  ofr: "𝔬",
  ogon: "˛",
  ograve: "ò",
  ogt: "⧁",
  ohbar: "⦵",
  ohm: "Ω",
  oint: "∮",
  olarr: "↺",
  olcir: "⦾",
  olcross: "⦻",
  oline: "‾",
  olt: "⧀",
  omacr: "ō",
  omega: "ω",
  omicron: "ο",
  omid: "⦶",
  ominus: "⊖",
  oopf: "𝕠",
  opar: "⦷",
  operp: "⦹",
  oplus: "⊕",
  or: "∨",
  orarr: "↻",
  ord: "⩝",
  order: "ℴ",
  orderof: "ℴ",
  ordf: "ª",
  ordm: "º",
  origof: "⊶",
  oror: "⩖",
  orslope: "⩗",
  orv: "⩛",
  oscr: "ℴ",
  oslash: "ø",
  osol: "⊘",
  otilde: "õ",
  otimes: "⊗",
  otimesas: "⨶",
  ouml: "ö",
  ovbar: "⌽",
  par: "∥",
  para: "¶",
  parallel: "∥",
  parsim: "⫳",
  parsl: "⫽",
  part: "∂",
  pcy: "п",
  percnt: "%",
  period: ".",
  permil: "‰",
  perp: "⊥",
  pertenk: "‱",
  pfr: "𝔭",
  phi: "φ",
  phiv: "ϕ",
  phmmat: "ℳ",
  phone: "☎",
  pi: "π",
  pitchfork: "⋔",
  piv: "ϖ",
  planck: "ℏ",
  planckh: "ℎ",
  plankv: "ℏ",
  plus: "+",
  plusacir: "⨣",
  plusb: "⊞",
  pluscir: "⨢",
  plusdo: "∔",
  plusdu: "⨥",
  pluse: "⩲",
  plusmn: "±",
  plussim: "⨦",
  plustwo: "⨧",
  pm: "±",
  pointint: "⨕",
  popf: "𝕡",
  pound: "£",
  pr: "≺",
  prE: "⪳",
  prap: "⪷",
  prcue: "≼",
  pre: "⪯",
  prec: "≺",
  precapprox: "⪷",
  preccurlyeq: "≼",
  preceq: "⪯",
  precnapprox: "⪹",
  precneqq: "⪵",
  precnsim: "⋨",
  precsim: "≾",
  prime: "′",
  primes: "ℙ",
  prnE: "⪵",
  prnap: "⪹",
  prnsim: "⋨",
  prod: "∏",
  profalar: "⌮",
  profline: "⌒",
  profsurf: "⌓",
  prop: "∝",
  propto: "∝",
  prsim: "≾",
  prurel: "⊰",
  pscr: "𝓅",
  psi: "ψ",
  puncsp: " ",
  qfr: "𝔮",
  qint: "⨌",
  qopf: "𝕢",
  qprime: "⁗",
  qscr: "𝓆",
  quaternions: "ℍ",
  quatint: "⨖",
  quest: "?",
  questeq: "≟",
  quot: '"',
  rAarr: "⇛",
  rArr: "⇒",
  rAtail: "⤜",
  rBarr: "⤏",
  rHar: "⥤",
  race: "∽̱",
  racute: "ŕ",
  radic: "√",
  raemptyv: "⦳",
  rang: "⟩",
  rangd: "⦒",
  range: "⦥",
  rangle: "⟩",
  raquo: "»",
  rarr: "→",
  rarrap: "⥵",
  rarrb: "⇥",
  rarrbfs: "⤠",
  rarrc: "⤳",
  rarrfs: "⤞",
  rarrhk: "↪",
  rarrlp: "↬",
  rarrpl: "⥅",
  rarrsim: "⥴",
  rarrtl: "↣",
  rarrw: "↝",
  ratail: "⤚",
  ratio: "∶",
  rationals: "ℚ",
  rbarr: "⤍",
  rbbrk: "❳",
  rbrace: "}",
  rbrack: "]",
  rbrke: "⦌",
  rbrksld: "⦎",
  rbrkslu: "⦐",
  rcaron: "ř",
  rcedil: "ŗ",
  rceil: "⌉",
  rcub: "}",
  rcy: "р",
  rdca: "⤷",
  rdldhar: "⥩",
  rdquo: "”",
  rdquor: "”",
  rdsh: "↳",
  real: "ℜ",
  realine: "ℛ",
  realpart: "ℜ",
  reals: "ℝ",
  rect: "▭",
  reg: "®",
  rfisht: "⥽",
  rfloor: "⌋",
  rfr: "𝔯",
  rhard: "⇁",
  rharu: "⇀",
  rharul: "⥬",
  rho: "ρ",
  rhov: "ϱ",
  rightarrow: "→",
  rightarrowtail: "↣",
  rightharpoondown: "⇁",
  rightharpoonup: "⇀",
  rightleftarrows: "⇄",
  rightleftharpoons: "⇌",
  rightrightarrows: "⇉",
  rightsquigarrow: "↝",
  rightthreetimes: "⋌",
  ring: "˚",
  risingdotseq: "≓",
  rlarr: "⇄",
  rlhar: "⇌",
  rlm: "‏",
  rmoust: "⎱",
  rmoustache: "⎱",
  rnmid: "⫮",
  roang: "⟭",
  roarr: "⇾",
  robrk: "⟧",
  ropar: "⦆",
  ropf: "𝕣",
  roplus: "⨮",
  rotimes: "⨵",
  rpar: ")",
  rpargt: "⦔",
  rppolint: "⨒",
  rrarr: "⇉",
  rsaquo: "›",
  rscr: "𝓇",
  rsh: "↱",
  rsqb: "]",
  rsquo: "’",
  rsquor: "’",
  rthree: "⋌",
  rtimes: "⋊",
  rtri: "▹",
  rtrie: "⊵",
  rtrif: "▸",
  rtriltri: "⧎",
  ruluhar: "⥨",
  rx: "℞",
  sacute: "ś",
  sbquo: "‚",
  sc: "≻",
  scE: "⪴",
  scap: "⪸",
  scaron: "š",
  sccue: "≽",
  sce: "⪰",
  scedil: "ş",
  scirc: "ŝ",
  scnE: "⪶",
  scnap: "⪺",
  scnsim: "⋩",
  scpolint: "⨓",
  scsim: "≿",
  scy: "с",
  sdot: "⋅",
  sdotb: "⊡",
  sdote: "⩦",
  seArr: "⇘",
  searhk: "⤥",
  searr: "↘",
  searrow: "↘",
  sect: "§",
  semi: ";",
  seswar: "⤩",
  setminus: "∖",
  setmn: "∖",
  sext: "✶",
  sfr: "𝔰",
  sfrown: "⌢",
  sharp: "♯",
  shchcy: "щ",
  shcy: "ш",
  shortmid: "∣",
  shortparallel: "∥",
  shy: "­",
  sigma: "σ",
  sigmaf: "ς",
  sigmav: "ς",
  sim: "∼",
  simdot: "⩪",
  sime: "≃",
  simeq: "≃",
  simg: "⪞",
  simgE: "⪠",
  siml: "⪝",
  simlE: "⪟",
  simne: "≆",
  simplus: "⨤",
  simrarr: "⥲",
  slarr: "←",
  smallsetminus: "∖",
  smashp: "⨳",
  smeparsl: "⧤",
  smid: "∣",
  smile: "⌣",
  smt: "⪪",
  smte: "⪬",
  smtes: "⪬︀",
  softcy: "ь",
  sol: "/",
  solb: "⧄",
  solbar: "⌿",
  sopf: "𝕤",
  spades: "♠",
  spadesuit: "♠",
  spar: "∥",
  sqcap: "⊓",
  sqcaps: "⊓︀",
  sqcup: "⊔",
  sqcups: "⊔︀",
  sqsub: "⊏",
  sqsube: "⊑",
  sqsubset: "⊏",
  sqsubseteq: "⊑",
  sqsup: "⊐",
  sqsupe: "⊒",
  sqsupset: "⊐",
  sqsupseteq: "⊒",
  squ: "□",
  square: "□",
  squarf: "▪",
  squf: "▪",
  srarr: "→",
  sscr: "𝓈",
  ssetmn: "∖",
  ssmile: "⌣",
  sstarf: "⋆",
  star: "☆",
  starf: "★",
  straightepsilon: "ϵ",
  straightphi: "ϕ",
  strns: "¯",
  sub: "⊂",
  subE: "⫅",
  subdot: "⪽",
  sube: "⊆",
  subedot: "⫃",
  submult: "⫁",
  subnE: "⫋",
  subne: "⊊",
  subplus: "⪿",
  subrarr: "⥹",
  subset: "⊂",
  subseteq: "⊆",
  subseteqq: "⫅",
  subsetneq: "⊊",
  subsetneqq: "⫋",
  subsim: "⫇",
  subsub: "⫕",
  subsup: "⫓",
  succ: "≻",
  succapprox: "⪸",
  succcurlyeq: "≽",
  succeq: "⪰",
  succnapprox: "⪺",
  succneqq: "⪶",
  succnsim: "⋩",
  succsim: "≿",
  sum: "∑",
  sung: "♪",
  sup1: "¹",
  sup2: "²",
  sup3: "³",
  sup: "⊃",
  supE: "⫆",
  supdot: "⪾",
  supdsub: "⫘",
  supe: "⊇",
  supedot: "⫄",
  suphsol: "⟉",
  suphsub: "⫗",
  suplarr: "⥻",
  supmult: "⫂",
  supnE: "⫌",
  supne: "⊋",
  supplus: "⫀",
  supset: "⊃",
  supseteq: "⊇",
  supseteqq: "⫆",
  supsetneq: "⊋",
  supsetneqq: "⫌",
  supsim: "⫈",
  supsub: "⫔",
  supsup: "⫖",
  swArr: "⇙",
  swarhk: "⤦",
  swarr: "↙",
  swarrow: "↙",
  swnwar: "⤪",
  szlig: "ß",
  target: "⌖",
  tau: "τ",
  tbrk: "⎴",
  tcaron: "ť",
  tcedil: "ţ",
  tcy: "т",
  tdot: "⃛",
  telrec: "⌕",
  tfr: "𝔱",
  there4: "∴",
  therefore: "∴",
  theta: "θ",
  thetasym: "ϑ",
  thetav: "ϑ",
  thickapprox: "≈",
  thicksim: "∼",
  thinsp: " ",
  thkap: "≈",
  thksim: "∼",
  thorn: "þ",
  tilde: "˜",
  times: "×",
  timesb: "⊠",
  timesbar: "⨱",
  timesd: "⨰",
  tint: "∭",
  toea: "⤨",
  top: "⊤",
  topbot: "⌶",
  topcir: "⫱",
  topf: "𝕥",
  topfork: "⫚",
  tosa: "⤩",
  tprime: "‴",
  trade: "™",
  triangle: "▵",
  triangledown: "▿",
  triangleleft: "◃",
  trianglelefteq: "⊴",
  triangleq: "≜",
  triangleright: "▹",
  trianglerighteq: "⊵",
  tridot: "◬",
  trie: "≜",
  triminus: "⨺",
  triplus: "⨹",
  trisb: "⧍",
  tritime: "⨻",
  trpezium: "⏢",
  tscr: "𝓉",
  tscy: "ц",
  tshcy: "ћ",
  tstrok: "ŧ",
  twixt: "≬",
  twoheadleftarrow: "↞",
  twoheadrightarrow: "↠",
  uArr: "⇑",
  uHar: "⥣",
  uacute: "ú",
  uarr: "↑",
  ubrcy: "ў",
  ubreve: "ŭ",
  ucirc: "û",
  ucy: "у",
  udarr: "⇅",
  udblac: "ű",
  udhar: "⥮",
  ufisht: "⥾",
  ufr: "𝔲",
  ugrave: "ù",
  uharl: "↿",
  uharr: "↾",
  uhblk: "▀",
  ulcorn: "⌜",
  ulcorner: "⌜",
  ulcrop: "⌏",
  ultri: "◸",
  umacr: "ū",
  uml: "¨",
  uogon: "ų",
  uopf: "𝕦",
  uparrow: "↑",
  updownarrow: "↕",
  upharpoonleft: "↿",
  upharpoonright: "↾",
  uplus: "⊎",
  upsi: "υ",
  upsih: "ϒ",
  upsilon: "υ",
  upuparrows: "⇈",
  urcorn: "⌝",
  urcorner: "⌝",
  urcrop: "⌎",
  uring: "ů",
  urtri: "◹",
  uscr: "𝓊",
  utdot: "⋰",
  utilde: "ũ",
  utri: "▵",
  utrif: "▴",
  uuarr: "⇈",
  uuml: "ü",
  uwangle: "⦧",
  vArr: "⇕",
  vBar: "⫨",
  vBarv: "⫩",
  vDash: "⊨",
  vangrt: "⦜",
  varepsilon: "ϵ",
  varkappa: "ϰ",
  varnothing: "∅",
  varphi: "ϕ",
  varpi: "ϖ",
  varpropto: "∝",
  varr: "↕",
  varrho: "ϱ",
  varsigma: "ς",
  varsubsetneq: "⊊︀",
  varsubsetneqq: "⫋︀",
  varsupsetneq: "⊋︀",
  varsupsetneqq: "⫌︀",
  vartheta: "ϑ",
  vartriangleleft: "⊲",
  vartriangleright: "⊳",
  vcy: "в",
  vdash: "⊢",
  vee: "∨",
  veebar: "⊻",
  veeeq: "≚",
  vellip: "⋮",
  verbar: "|",
  vert: "|",
  vfr: "𝔳",
  vltri: "⊲",
  vnsub: "⊂⃒",
  vnsup: "⊃⃒",
  vopf: "𝕧",
  vprop: "∝",
  vrtri: "⊳",
  vscr: "𝓋",
  vsubnE: "⫋︀",
  vsubne: "⊊︀",
  vsupnE: "⫌︀",
  vsupne: "⊋︀",
  vzigzag: "⦚",
  wcirc: "ŵ",
  wedbar: "⩟",
  wedge: "∧",
  wedgeq: "≙",
  weierp: "℘",
  wfr: "𝔴",
  wopf: "𝕨",
  wp: "℘",
  wr: "≀",
  wreath: "≀",
  wscr: "𝓌",
  xcap: "⋂",
  xcirc: "◯",
  xcup: "⋃",
  xdtri: "▽",
  xfr: "𝔵",
  xhArr: "⟺",
  xharr: "⟷",
  xi: "ξ",
  xlArr: "⟸",
  xlarr: "⟵",
  xmap: "⟼",
  xnis: "⋻",
  xodot: "⨀",
  xopf: "𝕩",
  xoplus: "⨁",
  xotime: "⨂",
  xrArr: "⟹",
  xrarr: "⟶",
  xscr: "𝓍",
  xsqcup: "⨆",
  xuplus: "⨄",
  xutri: "△",
  xvee: "⋁",
  xwedge: "⋀",
  yacute: "ý",
  yacy: "я",
  ycirc: "ŷ",
  ycy: "ы",
  yen: "¥",
  yfr: "𝔶",
  yicy: "ї",
  yopf: "𝕪",
  yscr: "𝓎",
  yucy: "ю",
  yuml: "ÿ",
  zacute: "ź",
  zcaron: "ž",
  zcy: "з",
  zdot: "ż",
  zeetrf: "ℨ",
  zeta: "ζ",
  zfr: "𝔷",
  zhcy: "ж",
  zigrarr: "⇝",
  zopf: "𝕫",
  zscr: "𝓏",
  zwj: "‍",
  zwnj: "‌"
};
var own = {}.hasOwnProperty;
function decodeNamedCharacterReference(value) {
  return own.call(characterEntities, value) ? characterEntities[value] : false;
}
function splice$1(list3, start, remove, items) {
  const end = list3.length;
  let chunkStart = 0;
  let parameters;
  if (start < 0) {
    start = -start > end ? 0 : end + start;
  } else {
    start = start > end ? end : start;
  }
  remove = remove > 0 ? remove : 0;
  if (items.length < 1e4) {
    parameters = Array.from(items);
    parameters.unshift(start, remove);
    list3.splice(...parameters);
  } else {
    if (remove)
      list3.splice(start, remove);
    while (chunkStart < items.length) {
      parameters = items.slice(chunkStart, chunkStart + 1e4);
      parameters.unshift(start, 0);
      list3.splice(...parameters);
      chunkStart += 1e4;
      start += 1e4;
    }
  }
}
function push(list3, items) {
  if (list3.length > 0) {
    splice$1(list3, list3.length, 0, items);
    return list3;
  }
  return items;
}
var hasOwnProperty$1 = {}.hasOwnProperty;
function combineExtensions$1(extensions) {
  const all2 = {};
  let index2 = -1;
  while (++index2 < extensions.length) {
    syntaxExtension$1(all2, extensions[index2]);
  }
  return all2;
}
function syntaxExtension$1(all2, extension2) {
  let hook;
  for (hook in extension2) {
    const maybe = hasOwnProperty$1.call(all2, hook) ? all2[hook] : void 0;
    const left = maybe || (all2[hook] = {});
    const right = extension2[hook];
    let code22;
    if (right) {
      for (code22 in right) {
        if (!hasOwnProperty$1.call(left, code22))
          left[code22] = [];
        const value = right[code22];
        constructs$1(
          // @ts-expect-error Looks like a list.
          left[code22],
          Array.isArray(value) ? value : value ? [value] : []
        );
      }
    }
  }
}
function constructs$1(existing, list3) {
  let index2 = -1;
  const before = [];
  while (++index2 < list3.length) {
    (list3[index2].add === "after" ? existing : before).push(list3[index2]);
  }
  splice$1(existing, 0, 0, before);
}
function decodeNumericCharacterReference(value, base) {
  const code22 = Number.parseInt(value, base);
  if (
    // C0 except for HT, LF, FF, CR, space.
    code22 < 9 || code22 === 11 || code22 > 13 && code22 < 32 || // Control character (DEL) of C0, and C1 controls.
    code22 > 126 && code22 < 160 || // Lone high surrogates and low surrogates.
    code22 > 55295 && code22 < 57344 || // Noncharacters.
    code22 > 64975 && code22 < 65008 || (code22 & 65535) === 65535 || (code22 & 65535) === 65534 || // Out of range
    code22 > 1114111
  ) {
    return "�";
  }
  return String.fromCharCode(code22);
}
function normalizeIdentifier$1(value) {
  return value.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
var asciiAlpha$1 = regexCheck$1(/[A-Za-z]/);
var asciiAlphanumeric$1 = regexCheck$1(/[\dA-Za-z]/);
var asciiAtext = regexCheck$1(/[#-'*+\--9=?A-Z^-~]/);
function asciiControl$1(code22) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    code22 !== null && (code22 < 32 || code22 === 127)
  );
}
var asciiDigit = regexCheck$1(/\d/);
var asciiHexDigit = regexCheck$1(/[\dA-Fa-f]/);
var asciiPunctuation = regexCheck$1(/[!-/:-@[-`{-~]/);
function markdownLineEnding$1(code22) {
  return code22 !== null && code22 < -2;
}
function markdownLineEndingOrSpace$1(code22) {
  return code22 !== null && (code22 < 0 || code22 === 32);
}
function markdownSpace$1(code22) {
  return code22 === -2 || code22 === -1 || code22 === 32;
}
var unicodePunctuation$1 = regexCheck$1(new RegExp("\\p{P}|\\p{S}", "u"));
var unicodeWhitespace$1 = regexCheck$1(/\s/);
function regexCheck$1(regex) {
  return check;
  function check(code22) {
    return code22 !== null && code22 > -1 && regex.test(String.fromCharCode(code22));
  }
}
function normalizeUri(value) {
  const result = [];
  let index2 = -1;
  let start = 0;
  let skip = 0;
  while (++index2 < value.length) {
    const code22 = value.charCodeAt(index2);
    let replace2 = "";
    if (code22 === 37 && asciiAlphanumeric$1(value.charCodeAt(index2 + 1)) && asciiAlphanumeric$1(value.charCodeAt(index2 + 2))) {
      skip = 2;
    } else if (code22 < 128) {
      if (!/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(code22))) {
        replace2 = String.fromCharCode(code22);
      }
    } else if (code22 > 55295 && code22 < 57344) {
      const next = value.charCodeAt(index2 + 1);
      if (code22 < 56320 && next > 56319 && next < 57344) {
        replace2 = String.fromCharCode(code22, next);
        skip = 1;
      } else {
        replace2 = "�";
      }
    } else {
      replace2 = String.fromCharCode(code22);
    }
    if (replace2) {
      result.push(value.slice(start, index2), encodeURIComponent(replace2));
      start = index2 + skip + 1;
      replace2 = "";
    }
    if (skip) {
      index2 += skip;
      skip = 0;
    }
  }
  return result.join("") + value.slice(start);
}
function markdownSpace2$1(code22) {
  return code22 === -2 || code22 === -1 || code22 === 32;
}
function factorySpace$1(effects, ok3, type, max) {
  const limit = max ? max - 1 : Number.POSITIVE_INFINITY;
  let size = 0;
  return start;
  function start(code22) {
    if (markdownSpace2$1(code22)) {
      effects.enter(type);
      return prefix(code22);
    }
    return ok3(code22);
  }
  function prefix(code22) {
    if (markdownSpace2$1(code22) && size++ < limit) {
      effects.consume(code22);
      return prefix;
    }
    effects.exit(type);
    return ok3(code22);
  }
}
var content = {
  tokenize: initializeContent
};
function initializeContent(effects) {
  const contentStart = effects.attempt(
    this.parser.constructs.contentInitial,
    afterContentStartConstruct,
    paragraphInitial
  );
  let previous2;
  return contentStart;
  function afterContentStartConstruct(code22) {
    if (code22 === null) {
      effects.consume(code22);
      return;
    }
    effects.enter("lineEnding");
    effects.consume(code22);
    effects.exit("lineEnding");
    return factorySpace$1(effects, contentStart, "linePrefix");
  }
  function paragraphInitial(code22) {
    effects.enter("paragraph");
    return lineStart(code22);
  }
  function lineStart(code22) {
    const token = effects.enter("chunkText", {
      contentType: "text",
      previous: previous2
    });
    if (previous2) {
      previous2.next = token;
    }
    previous2 = token;
    return data(code22);
  }
  function data(code22) {
    if (code22 === null) {
      effects.exit("chunkText");
      effects.exit("paragraph");
      effects.consume(code22);
      return;
    }
    if (markdownLineEnding$1(code22)) {
      effects.consume(code22);
      effects.exit("chunkText");
      return lineStart;
    }
    effects.consume(code22);
    return data;
  }
}
var document = {
  tokenize: initializeDocument
};
var containerConstruct = {
  tokenize: tokenizeContainer
};
function initializeDocument(effects) {
  const self2 = this;
  const stack = [];
  let continued = 0;
  let childFlow;
  let childToken;
  let lineStartOffset;
  return start;
  function start(code22) {
    if (continued < stack.length) {
      const item = stack[continued];
      self2.containerState = item[1];
      return effects.attempt(
        item[0].continuation,
        documentContinue,
        checkNewContainers
      )(code22);
    }
    return checkNewContainers(code22);
  }
  function documentContinue(code22) {
    continued++;
    if (self2.containerState._closeFlow) {
      self2.containerState._closeFlow = void 0;
      if (childFlow) {
        closeFlow();
      }
      const indexBeforeExits = self2.events.length;
      let indexBeforeFlow = indexBeforeExits;
      let point4;
      while (indexBeforeFlow--) {
        if (self2.events[indexBeforeFlow][0] === "exit" && self2.events[indexBeforeFlow][1].type === "chunkFlow") {
          point4 = self2.events[indexBeforeFlow][1].end;
          break;
        }
      }
      exitContainers(continued);
      let index2 = indexBeforeExits;
      while (index2 < self2.events.length) {
        self2.events[index2][1].end = Object.assign({}, point4);
        index2++;
      }
      splice$1(
        self2.events,
        indexBeforeFlow + 1,
        0,
        self2.events.slice(indexBeforeExits)
      );
      self2.events.length = index2;
      return checkNewContainers(code22);
    }
    return start(code22);
  }
  function checkNewContainers(code22) {
    if (continued === stack.length) {
      if (!childFlow) {
        return documentContinued(code22);
      }
      if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
        return flowStart(code22);
      }
      self2.interrupt = Boolean(
        childFlow.currentConstruct && !childFlow._gfmTableDynamicInterruptHack
      );
    }
    self2.containerState = {};
    return effects.check(
      containerConstruct,
      thereIsANewContainer,
      thereIsNoNewContainer
    )(code22);
  }
  function thereIsANewContainer(code22) {
    if (childFlow)
      closeFlow();
    exitContainers(continued);
    return documentContinued(code22);
  }
  function thereIsNoNewContainer(code22) {
    self2.parser.lazy[self2.now().line] = continued !== stack.length;
    lineStartOffset = self2.now().offset;
    return flowStart(code22);
  }
  function documentContinued(code22) {
    self2.containerState = {};
    return effects.attempt(
      containerConstruct,
      containerContinue,
      flowStart
    )(code22);
  }
  function containerContinue(code22) {
    continued++;
    stack.push([self2.currentConstruct, self2.containerState]);
    return documentContinued(code22);
  }
  function flowStart(code22) {
    if (code22 === null) {
      if (childFlow)
        closeFlow();
      exitContainers(0);
      effects.consume(code22);
      return;
    }
    childFlow = childFlow || self2.parser.flow(self2.now());
    effects.enter("chunkFlow", {
      contentType: "flow",
      previous: childToken,
      _tokenizer: childFlow
    });
    return flowContinue(code22);
  }
  function flowContinue(code22) {
    if (code22 === null) {
      writeToChild(effects.exit("chunkFlow"), true);
      exitContainers(0);
      effects.consume(code22);
      return;
    }
    if (markdownLineEnding$1(code22)) {
      effects.consume(code22);
      writeToChild(effects.exit("chunkFlow"));
      continued = 0;
      self2.interrupt = void 0;
      return start;
    }
    effects.consume(code22);
    return flowContinue;
  }
  function writeToChild(token, eof) {
    const stream = self2.sliceStream(token);
    if (eof)
      stream.push(null);
    token.previous = childToken;
    if (childToken)
      childToken.next = token;
    childToken = token;
    childFlow.defineSkip(token.start);
    childFlow.write(stream);
    if (self2.parser.lazy[token.start.line]) {
      let index2 = childFlow.events.length;
      while (index2--) {
        if (
          // The token starts before the line ending…
          childFlow.events[index2][1].start.offset < lineStartOffset && // …and either is not ended yet…
          (!childFlow.events[index2][1].end || // …or ends after it.
          childFlow.events[index2][1].end.offset > lineStartOffset)
        ) {
          return;
        }
      }
      const indexBeforeExits = self2.events.length;
      let indexBeforeFlow = indexBeforeExits;
      let seen;
      let point4;
      while (indexBeforeFlow--) {
        if (self2.events[indexBeforeFlow][0] === "exit" && self2.events[indexBeforeFlow][1].type === "chunkFlow") {
          if (seen) {
            point4 = self2.events[indexBeforeFlow][1].end;
            break;
          }
          seen = true;
        }
      }
      exitContainers(continued);
      index2 = indexBeforeExits;
      while (index2 < self2.events.length) {
        self2.events[index2][1].end = Object.assign({}, point4);
        index2++;
      }
      splice$1(
        self2.events,
        indexBeforeFlow + 1,
        0,
        self2.events.slice(indexBeforeExits)
      );
      self2.events.length = index2;
    }
  }
  function exitContainers(size) {
    let index2 = stack.length;
    while (index2-- > size) {
      const entry = stack[index2];
      self2.containerState = entry[1];
      entry[0].exit.call(self2, effects);
    }
    stack.length = size;
  }
  function closeFlow() {
    childFlow.write([null]);
    childToken = void 0;
    childFlow = void 0;
    self2.containerState._closeFlow = void 0;
  }
}
function tokenizeContainer(effects, ok3, nok) {
  return factorySpace$1(
    effects,
    effects.attempt(this.parser.constructs.document, ok3, nok),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}
function classifyCharacter$1(code22) {
  if (code22 === null || markdownLineEndingOrSpace$1(code22) || unicodeWhitespace$1(code22)) {
    return 1;
  }
  if (unicodePunctuation$1(code22)) {
    return 2;
  }
}
function resolveAll$1(constructs2, events, context) {
  const called = [];
  let index2 = -1;
  while (++index2 < constructs2.length) {
    const resolve = constructs2[index2].resolveAll;
    if (resolve && !called.includes(resolve)) {
      events = resolve(events, context);
      called.push(resolve);
    }
  }
  return events;
}
var attention = {
  name: "attention",
  tokenize: tokenizeAttention,
  resolveAll: resolveAllAttention
};
function resolveAllAttention(events, context) {
  let index2 = -1;
  let open;
  let group;
  let text4;
  let openingSequence;
  let closingSequence;
  let use;
  let nextEvents;
  let offset;
  while (++index2 < events.length) {
    if (events[index2][0] === "enter" && events[index2][1].type === "attentionSequence" && events[index2][1]._close) {
      open = index2;
      while (open--) {
        if (events[open][0] === "exit" && events[open][1].type === "attentionSequence" && events[open][1]._open && // If the markers are the same:
        context.sliceSerialize(events[open][1]).charCodeAt(0) === context.sliceSerialize(events[index2][1]).charCodeAt(0)) {
          if ((events[open][1]._close || events[index2][1]._open) && (events[index2][1].end.offset - events[index2][1].start.offset) % 3 && !((events[open][1].end.offset - events[open][1].start.offset + events[index2][1].end.offset - events[index2][1].start.offset) % 3)) {
            continue;
          }
          use = events[open][1].end.offset - events[open][1].start.offset > 1 && events[index2][1].end.offset - events[index2][1].start.offset > 1 ? 2 : 1;
          const start = Object.assign({}, events[open][1].end);
          const end = Object.assign({}, events[index2][1].start);
          movePoint(start, -use);
          movePoint(end, use);
          openingSequence = {
            type: use > 1 ? "strongSequence" : "emphasisSequence",
            start,
            end: Object.assign({}, events[open][1].end)
          };
          closingSequence = {
            type: use > 1 ? "strongSequence" : "emphasisSequence",
            start: Object.assign({}, events[index2][1].start),
            end
          };
          text4 = {
            type: use > 1 ? "strongText" : "emphasisText",
            start: Object.assign({}, events[open][1].end),
            end: Object.assign({}, events[index2][1].start)
          };
          group = {
            type: use > 1 ? "strong" : "emphasis",
            start: Object.assign({}, openingSequence.start),
            end: Object.assign({}, closingSequence.end)
          };
          events[open][1].end = Object.assign({}, openingSequence.start);
          events[index2][1].start = Object.assign({}, closingSequence.end);
          nextEvents = [];
          if (events[open][1].end.offset - events[open][1].start.offset) {
            nextEvents = push(nextEvents, [
              ["enter", events[open][1], context],
              ["exit", events[open][1], context]
            ]);
          }
          nextEvents = push(nextEvents, [
            ["enter", group, context],
            ["enter", openingSequence, context],
            ["exit", openingSequence, context],
            ["enter", text4, context]
          ]);
          nextEvents = push(
            nextEvents,
            resolveAll$1(
              context.parser.constructs.insideSpan.null,
              events.slice(open + 1, index2),
              context
            )
          );
          nextEvents = push(nextEvents, [
            ["exit", text4, context],
            ["enter", closingSequence, context],
            ["exit", closingSequence, context],
            ["exit", group, context]
          ]);
          if (events[index2][1].end.offset - events[index2][1].start.offset) {
            offset = 2;
            nextEvents = push(nextEvents, [
              ["enter", events[index2][1], context],
              ["exit", events[index2][1], context]
            ]);
          } else {
            offset = 0;
          }
          splice$1(events, open - 1, index2 - open + 3, nextEvents);
          index2 = open + nextEvents.length - offset - 2;
          break;
        }
      }
    }
  }
  index2 = -1;
  while (++index2 < events.length) {
    if (events[index2][1].type === "attentionSequence") {
      events[index2][1].type = "data";
    }
  }
  return events;
}
function tokenizeAttention(effects, ok3) {
  const attentionMarkers2 = this.parser.constructs.attentionMarkers.null;
  const previous2 = this.previous;
  const before = classifyCharacter$1(previous2);
  let marker;
  return start;
  function start(code22) {
    marker = code22;
    effects.enter("attentionSequence");
    return inside(code22);
  }
  function inside(code22) {
    if (code22 === marker) {
      effects.consume(code22);
      return inside;
    }
    const token = effects.exit("attentionSequence");
    const after = classifyCharacter$1(code22);
    const open = !after || after === 2 && before || attentionMarkers2.includes(code22);
    const close = !before || before === 2 && after || attentionMarkers2.includes(previous2);
    token._open = Boolean(marker === 42 ? open : open && (before || !close));
    token._close = Boolean(marker === 42 ? close : close && (after || !open));
    return ok3(code22);
  }
}
function movePoint(point4, offset) {
  point4.column += offset;
  point4.offset += offset;
  point4._bufferIndex += offset;
}
var autolink = {
  name: "autolink",
  tokenize: tokenizeAutolink
};
function tokenizeAutolink(effects, ok3, nok) {
  let size = 0;
  return start;
  function start(code22) {
    effects.enter("autolink");
    effects.enter("autolinkMarker");
    effects.consume(code22);
    effects.exit("autolinkMarker");
    effects.enter("autolinkProtocol");
    return open;
  }
  function open(code22) {
    if (asciiAlpha$1(code22)) {
      effects.consume(code22);
      return schemeOrEmailAtext;
    }
    return emailAtext(code22);
  }
  function schemeOrEmailAtext(code22) {
    if (code22 === 43 || code22 === 45 || code22 === 46 || asciiAlphanumeric$1(code22)) {
      size = 1;
      return schemeInsideOrEmailAtext(code22);
    }
    return emailAtext(code22);
  }
  function schemeInsideOrEmailAtext(code22) {
    if (code22 === 58) {
      effects.consume(code22);
      size = 0;
      return urlInside;
    }
    if ((code22 === 43 || code22 === 45 || code22 === 46 || asciiAlphanumeric$1(code22)) && size++ < 32) {
      effects.consume(code22);
      return schemeInsideOrEmailAtext;
    }
    size = 0;
    return emailAtext(code22);
  }
  function urlInside(code22) {
    if (code22 === 62) {
      effects.exit("autolinkProtocol");
      effects.enter("autolinkMarker");
      effects.consume(code22);
      effects.exit("autolinkMarker");
      effects.exit("autolink");
      return ok3;
    }
    if (code22 === null || code22 === 32 || code22 === 60 || asciiControl$1(code22)) {
      return nok(code22);
    }
    effects.consume(code22);
    return urlInside;
  }
  function emailAtext(code22) {
    if (code22 === 64) {
      effects.consume(code22);
      return emailAtSignOrDot;
    }
    if (asciiAtext(code22)) {
      effects.consume(code22);
      return emailAtext;
    }
    return nok(code22);
  }
  function emailAtSignOrDot(code22) {
    return asciiAlphanumeric$1(code22) ? emailLabel(code22) : nok(code22);
  }
  function emailLabel(code22) {
    if (code22 === 46) {
      effects.consume(code22);
      size = 0;
      return emailAtSignOrDot;
    }
    if (code22 === 62) {
      effects.exit("autolinkProtocol").type = "autolinkEmail";
      effects.enter("autolinkMarker");
      effects.consume(code22);
      effects.exit("autolinkMarker");
      effects.exit("autolink");
      return ok3;
    }
    return emailValue(code22);
  }
  function emailValue(code22) {
    if ((code22 === 45 || asciiAlphanumeric$1(code22)) && size++ < 63) {
      const next = code22 === 45 ? emailValue : emailLabel;
      effects.consume(code22);
      return next;
    }
    return nok(code22);
  }
}
var blankLine$1 = {
  tokenize: tokenizeBlankLine$1,
  partial: true
};
function tokenizeBlankLine$1(effects, ok3, nok) {
  return start;
  function start(code22) {
    return markdownSpace$1(code22) ? factorySpace$1(effects, after, "linePrefix")(code22) : after(code22);
  }
  function after(code22) {
    return code22 === null || markdownLineEnding$1(code22) ? ok3(code22) : nok(code22);
  }
}
var blockQuote = {
  name: "blockQuote",
  tokenize: tokenizeBlockQuoteStart,
  continuation: {
    tokenize: tokenizeBlockQuoteContinuation
  },
  exit: exit$1
};
function tokenizeBlockQuoteStart(effects, ok3, nok) {
  const self2 = this;
  return start;
  function start(code22) {
    if (code22 === 62) {
      const state = self2.containerState;
      if (!state.open) {
        effects.enter("blockQuote", {
          _container: true
        });
        state.open = true;
      }
      effects.enter("blockQuotePrefix");
      effects.enter("blockQuoteMarker");
      effects.consume(code22);
      effects.exit("blockQuoteMarker");
      return after;
    }
    return nok(code22);
  }
  function after(code22) {
    if (markdownSpace$1(code22)) {
      effects.enter("blockQuotePrefixWhitespace");
      effects.consume(code22);
      effects.exit("blockQuotePrefixWhitespace");
      effects.exit("blockQuotePrefix");
      return ok3;
    }
    effects.exit("blockQuotePrefix");
    return ok3(code22);
  }
}
function tokenizeBlockQuoteContinuation(effects, ok3, nok) {
  const self2 = this;
  return contStart;
  function contStart(code22) {
    if (markdownSpace$1(code22)) {
      return factorySpace$1(
        effects,
        contBefore,
        "linePrefix",
        self2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
      )(code22);
    }
    return contBefore(code22);
  }
  function contBefore(code22) {
    return effects.attempt(blockQuote, ok3, nok)(code22);
  }
}
function exit$1(effects) {
  effects.exit("blockQuote");
}
var characterEscape = {
  name: "characterEscape",
  tokenize: tokenizeCharacterEscape
};
function tokenizeCharacterEscape(effects, ok3, nok) {
  return start;
  function start(code22) {
    effects.enter("characterEscape");
    effects.enter("escapeMarker");
    effects.consume(code22);
    effects.exit("escapeMarker");
    return inside;
  }
  function inside(code22) {
    if (asciiPunctuation(code22)) {
      effects.enter("characterEscapeValue");
      effects.consume(code22);
      effects.exit("characterEscapeValue");
      effects.exit("characterEscape");
      return ok3;
    }
    return nok(code22);
  }
}
var characterReference = {
  name: "characterReference",
  tokenize: tokenizeCharacterReference
};
function tokenizeCharacterReference(effects, ok3, nok) {
  const self2 = this;
  let size = 0;
  let max;
  let test;
  return start;
  function start(code22) {
    effects.enter("characterReference");
    effects.enter("characterReferenceMarker");
    effects.consume(code22);
    effects.exit("characterReferenceMarker");
    return open;
  }
  function open(code22) {
    if (code22 === 35) {
      effects.enter("characterReferenceMarkerNumeric");
      effects.consume(code22);
      effects.exit("characterReferenceMarkerNumeric");
      return numeric;
    }
    effects.enter("characterReferenceValue");
    max = 31;
    test = asciiAlphanumeric$1;
    return value(code22);
  }
  function numeric(code22) {
    if (code22 === 88 || code22 === 120) {
      effects.enter("characterReferenceMarkerHexadecimal");
      effects.consume(code22);
      effects.exit("characterReferenceMarkerHexadecimal");
      effects.enter("characterReferenceValue");
      max = 6;
      test = asciiHexDigit;
      return value;
    }
    effects.enter("characterReferenceValue");
    max = 7;
    test = asciiDigit;
    return value(code22);
  }
  function value(code22) {
    if (code22 === 59 && size) {
      const token = effects.exit("characterReferenceValue");
      if (test === asciiAlphanumeric$1 && !decodeNamedCharacterReference(self2.sliceSerialize(token))) {
        return nok(code22);
      }
      effects.enter("characterReferenceMarker");
      effects.consume(code22);
      effects.exit("characterReferenceMarker");
      effects.exit("characterReference");
      return ok3;
    }
    if (test(code22) && size++ < max) {
      effects.consume(code22);
      return value;
    }
    return nok(code22);
  }
}
var nonLazyContinuation = {
  tokenize: tokenizeNonLazyContinuation,
  partial: true
};
var codeFenced = {
  name: "codeFenced",
  tokenize: tokenizeCodeFenced,
  concrete: true
};
function tokenizeCodeFenced(effects, ok3, nok) {
  const self2 = this;
  const closeStart = {
    tokenize: tokenizeCloseStart,
    partial: true
  };
  let initialPrefix = 0;
  let sizeOpen = 0;
  let marker;
  return start;
  function start(code22) {
    return beforeSequenceOpen(code22);
  }
  function beforeSequenceOpen(code22) {
    const tail = self2.events[self2.events.length - 1];
    initialPrefix = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
    marker = code22;
    effects.enter("codeFenced");
    effects.enter("codeFencedFence");
    effects.enter("codeFencedFenceSequence");
    return sequenceOpen(code22);
  }
  function sequenceOpen(code22) {
    if (code22 === marker) {
      sizeOpen++;
      effects.consume(code22);
      return sequenceOpen;
    }
    if (sizeOpen < 3) {
      return nok(code22);
    }
    effects.exit("codeFencedFenceSequence");
    return markdownSpace$1(code22) ? factorySpace$1(effects, infoBefore, "whitespace")(code22) : infoBefore(code22);
  }
  function infoBefore(code22) {
    if (code22 === null || markdownLineEnding$1(code22)) {
      effects.exit("codeFencedFence");
      return self2.interrupt ? ok3(code22) : effects.check(nonLazyContinuation, atNonLazyBreak, after)(code22);
    }
    effects.enter("codeFencedFenceInfo");
    effects.enter("chunkString", {
      contentType: "string"
    });
    return info(code22);
  }
  function info(code22) {
    if (code22 === null || markdownLineEnding$1(code22)) {
      effects.exit("chunkString");
      effects.exit("codeFencedFenceInfo");
      return infoBefore(code22);
    }
    if (markdownSpace$1(code22)) {
      effects.exit("chunkString");
      effects.exit("codeFencedFenceInfo");
      return factorySpace$1(effects, metaBefore, "whitespace")(code22);
    }
    if (code22 === 96 && code22 === marker) {
      return nok(code22);
    }
    effects.consume(code22);
    return info;
  }
  function metaBefore(code22) {
    if (code22 === null || markdownLineEnding$1(code22)) {
      return infoBefore(code22);
    }
    effects.enter("codeFencedFenceMeta");
    effects.enter("chunkString", {
      contentType: "string"
    });
    return meta(code22);
  }
  function meta(code22) {
    if (code22 === null || markdownLineEnding$1(code22)) {
      effects.exit("chunkString");
      effects.exit("codeFencedFenceMeta");
      return infoBefore(code22);
    }
    if (code22 === 96 && code22 === marker) {
      return nok(code22);
    }
    effects.consume(code22);
    return meta;
  }
  function atNonLazyBreak(code22) {
    return effects.attempt(closeStart, after, contentBefore)(code22);
  }
  function contentBefore(code22) {
    effects.enter("lineEnding");
    effects.consume(code22);
    effects.exit("lineEnding");
    return contentStart;
  }
  function contentStart(code22) {
    return initialPrefix > 0 && markdownSpace$1(code22) ? factorySpace$1(
      effects,
      beforeContentChunk,
      "linePrefix",
      initialPrefix + 1
    )(code22) : beforeContentChunk(code22);
  }
  function beforeContentChunk(code22) {
    if (code22 === null || markdownLineEnding$1(code22)) {
      return effects.check(nonLazyContinuation, atNonLazyBreak, after)(code22);
    }
    effects.enter("codeFlowValue");
    return contentChunk(code22);
  }
  function contentChunk(code22) {
    if (code22 === null || markdownLineEnding$1(code22)) {
      effects.exit("codeFlowValue");
      return beforeContentChunk(code22);
    }
    effects.consume(code22);
    return contentChunk;
  }
  function after(code22) {
    effects.exit("codeFenced");
    return ok3(code22);
  }
  function tokenizeCloseStart(effects2, ok4, nok2) {
    let size = 0;
    return startBefore;
    function startBefore(code22) {
      effects2.enter("lineEnding");
      effects2.consume(code22);
      effects2.exit("lineEnding");
      return start2;
    }
    function start2(code22) {
      effects2.enter("codeFencedFence");
      return markdownSpace$1(code22) ? factorySpace$1(
        effects2,
        beforeSequenceClose,
        "linePrefix",
        self2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
      )(code22) : beforeSequenceClose(code22);
    }
    function beforeSequenceClose(code22) {
      if (code22 === marker) {
        effects2.enter("codeFencedFenceSequence");
        return sequenceClose(code22);
      }
      return nok2(code22);
    }
    function sequenceClose(code22) {
      if (code22 === marker) {
        size++;
        effects2.consume(code22);
        return sequenceClose;
      }
      if (size >= sizeOpen) {
        effects2.exit("codeFencedFenceSequence");
        return markdownSpace$1(code22) ? factorySpace$1(effects2, sequenceCloseAfter, "whitespace")(code22) : sequenceCloseAfter(code22);
      }
      return nok2(code22);
    }
    function sequenceCloseAfter(code22) {
      if (code22 === null || markdownLineEnding$1(code22)) {
        effects2.exit("codeFencedFence");
        return ok4(code22);
      }
      return nok2(code22);
    }
  }
}
function tokenizeNonLazyContinuation(effects, ok3, nok) {
  const self2 = this;
  return start;
  function start(code22) {
    if (code22 === null) {
      return nok(code22);
    }
    effects.enter("lineEnding");
    effects.consume(code22);
    effects.exit("lineEnding");
    return lineStart;
  }
  function lineStart(code22) {
    return self2.parser.lazy[self2.now().line] ? nok(code22) : ok3(code22);
  }
}
var codeIndented = {
  name: "codeIndented",
  tokenize: tokenizeCodeIndented
};
var furtherStart = {
  tokenize: tokenizeFurtherStart,
  partial: true
};
function tokenizeCodeIndented(effects, ok3, nok) {
  const self2 = this;
  return start;
  function start(code22) {
    effects.enter("codeIndented");
    return factorySpace$1(effects, afterPrefix, "linePrefix", 4 + 1)(code22);
  }
  function afterPrefix(code22) {
    const tail = self2.events[self2.events.length - 1];
    return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? atBreak(code22) : nok(code22);
  }
  function atBreak(code22) {
    if (code22 === null) {
      return after(code22);
    }
    if (markdownLineEnding$1(code22)) {
      return effects.attempt(furtherStart, atBreak, after)(code22);
    }
    effects.enter("codeFlowValue");
    return inside(code22);
  }
  function inside(code22) {
    if (code22 === null || markdownLineEnding$1(code22)) {
      effects.exit("codeFlowValue");
      return atBreak(code22);
    }
    effects.consume(code22);
    return inside;
  }
  function after(code22) {
    effects.exit("codeIndented");
    return ok3(code22);
  }
}
function tokenizeFurtherStart(effects, ok3, nok) {
  const self2 = this;
  return furtherStart2;
  function furtherStart2(code22) {
    if (self2.parser.lazy[self2.now().line]) {
      return nok(code22);
    }
    if (markdownLineEnding$1(code22)) {
      effects.enter("lineEnding");
      effects.consume(code22);
      effects.exit("lineEnding");
      return furtherStart2;
    }
    return factorySpace$1(effects, afterPrefix, "linePrefix", 4 + 1)(code22);
  }
  function afterPrefix(code22) {
    const tail = self2.events[self2.events.length - 1];
    return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? ok3(code22) : markdownLineEnding$1(code22) ? furtherStart2(code22) : nok(code22);
  }
}
var codeText = {
  name: "codeText",
  tokenize: tokenizeCodeText,
  resolve: resolveCodeText,
  previous: previous$1
};
function resolveCodeText(events) {
  let tailExitIndex = events.length - 4;
  let headEnterIndex = 3;
  let index2;
  let enter;
  if ((events[headEnterIndex][1].type === "lineEnding" || events[headEnterIndex][1].type === "space") && (events[tailExitIndex][1].type === "lineEnding" || events[tailExitIndex][1].type === "space")) {
    index2 = headEnterIndex;
    while (++index2 < tailExitIndex) {
      if (events[index2][1].type === "codeTextData") {
        events[headEnterIndex][1].type = "codeTextPadding";
        events[tailExitIndex][1].type = "codeTextPadding";
        headEnterIndex += 2;
        tailExitIndex -= 2;
        break;
      }
    }
  }
  index2 = headEnterIndex - 1;
  tailExitIndex++;
  while (++index2 <= tailExitIndex) {
    if (enter === void 0) {
      if (index2 !== tailExitIndex && events[index2][1].type !== "lineEnding") {
        enter = index2;
      }
    } else if (index2 === tailExitIndex || events[index2][1].type === "lineEnding") {
      events[enter][1].type = "codeTextData";
      if (index2 !== enter + 2) {
        events[enter][1].end = events[index2 - 1][1].end;
        events.splice(enter + 2, index2 - enter - 2);
        tailExitIndex -= index2 - enter - 2;
        index2 = enter + 2;
      }
      enter = void 0;
    }
  }
  return events;
}
function previous$1(code22) {
  return code22 !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function tokenizeCodeText(effects, ok3, nok) {
  let sizeOpen = 0;
  let size;
  let token;
  return start;
  function start(code22) {
    effects.enter("codeText");
    effects.enter("codeTextSequence");
    return sequenceOpen(code22);
  }
  function sequenceOpen(code22) {
    if (code22 === 96) {
      effects.consume(code22);
      sizeOpen++;
      return sequenceOpen;
    }
    effects.exit("codeTextSequence");
    return between(code22);
  }
  function between(code22) {
    if (code22 === null) {
      return nok(code22);
    }
    if (code22 === 32) {
      effects.enter("space");
      effects.consume(code22);
      effects.exit("space");
      return between;
    }
    if (code22 === 96) {
      token = effects.enter("codeTextSequence");
      size = 0;
      return sequenceClose(code22);
    }
    if (markdownLineEnding$1(code22)) {
      effects.enter("lineEnding");
      effects.consume(code22);
      effects.exit("lineEnding");
      return between;
    }
    effects.enter("codeTextData");
    return data(code22);
  }
  function data(code22) {
    if (code22 === null || code22 === 32 || code22 === 96 || markdownLineEnding$1(code22)) {
      effects.exit("codeTextData");
      return between(code22);
    }
    effects.consume(code22);
    return data;
  }
  function sequenceClose(code22) {
    if (code22 === 96) {
      effects.consume(code22);
      size++;
      return sequenceClose;
    }
    if (size === sizeOpen) {
      effects.exit("codeTextSequence");
      effects.exit("codeText");
      return ok3(code22);
    }
    token.type = "codeTextData";
    return data(code22);
  }
}
function subtokenize(events) {
  const jumps = {};
  let index2 = -1;
  let event;
  let lineIndex;
  let otherIndex;
  let otherEvent;
  let parameters;
  let subevents;
  let more;
  while (++index2 < events.length) {
    while (index2 in jumps) {
      index2 = jumps[index2];
    }
    event = events[index2];
    if (index2 && event[1].type === "chunkFlow" && events[index2 - 1][1].type === "listItemPrefix") {
      subevents = event[1]._tokenizer.events;
      otherIndex = 0;
      if (otherIndex < subevents.length && subevents[otherIndex][1].type === "lineEndingBlank") {
        otherIndex += 2;
      }
      if (otherIndex < subevents.length && subevents[otherIndex][1].type === "content") {
        while (++otherIndex < subevents.length) {
          if (subevents[otherIndex][1].type === "content") {
            break;
          }
          if (subevents[otherIndex][1].type === "chunkText") {
            subevents[otherIndex][1]._isInFirstContentOfListItem = true;
            otherIndex++;
          }
        }
      }
    }
    if (event[0] === "enter") {
      if (event[1].contentType) {
        Object.assign(jumps, subcontent(events, index2));
        index2 = jumps[index2];
        more = true;
      }
    } else if (event[1]._container) {
      otherIndex = index2;
      lineIndex = void 0;
      while (otherIndex--) {
        otherEvent = events[otherIndex];
        if (otherEvent[1].type === "lineEnding" || otherEvent[1].type === "lineEndingBlank") {
          if (otherEvent[0] === "enter") {
            if (lineIndex) {
              events[lineIndex][1].type = "lineEndingBlank";
            }
            otherEvent[1].type = "lineEnding";
            lineIndex = otherIndex;
          }
        } else {
          break;
        }
      }
      if (lineIndex) {
        event[1].end = Object.assign({}, events[lineIndex][1].start);
        parameters = events.slice(lineIndex, index2);
        parameters.unshift(event);
        splice$1(events, lineIndex, index2 - lineIndex + 1, parameters);
      }
    }
  }
  return !more;
}
function subcontent(events, eventIndex) {
  const token = events[eventIndex][1];
  const context = events[eventIndex][2];
  let startPosition = eventIndex - 1;
  const startPositions = [];
  const tokenizer = token._tokenizer || context.parser[token.contentType](token.start);
  const childEvents = tokenizer.events;
  const jumps = [];
  const gaps = {};
  let stream;
  let previous2;
  let index2 = -1;
  let current = token;
  let adjust = 0;
  let start = 0;
  const breaks = [start];
  while (current) {
    while (events[++startPosition][1] !== current) {
    }
    startPositions.push(startPosition);
    if (!current._tokenizer) {
      stream = context.sliceStream(current);
      if (!current.next) {
        stream.push(null);
      }
      if (previous2) {
        tokenizer.defineSkip(current.start);
      }
      if (current._isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = true;
      }
      tokenizer.write(stream);
      if (current._isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = void 0;
      }
    }
    previous2 = current;
    current = current.next;
  }
  current = token;
  while (++index2 < childEvents.length) {
    if (
      // Find a void token that includes a break.
      childEvents[index2][0] === "exit" && childEvents[index2 - 1][0] === "enter" && childEvents[index2][1].type === childEvents[index2 - 1][1].type && childEvents[index2][1].start.line !== childEvents[index2][1].end.line
    ) {
      start = index2 + 1;
      breaks.push(start);
      current._tokenizer = void 0;
      current.previous = void 0;
      current = current.next;
    }
  }
  tokenizer.events = [];
  if (current) {
    current._tokenizer = void 0;
    current.previous = void 0;
  } else {
    breaks.pop();
  }
  index2 = breaks.length;
  while (index2--) {
    const slice = childEvents.slice(breaks[index2], breaks[index2 + 1]);
    const start2 = startPositions.pop();
    jumps.unshift([start2, start2 + slice.length - 1]);
    splice$1(events, start2, 2, slice);
  }
  index2 = -1;
  while (++index2 < jumps.length) {
    gaps[adjust + jumps[index2][0]] = adjust + jumps[index2][1];
    adjust += jumps[index2][1] - jumps[index2][0] - 1;
  }
  return gaps;
}
var content2 = {
  tokenize: tokenizeContent,
  resolve: resolveContent
};
var continuationConstruct = {
  tokenize: tokenizeContinuation,
  partial: true
};
function resolveContent(events) {
  subtokenize(events);
  return events;
}
function tokenizeContent(effects, ok3) {
  let previous2;
  return chunkStart;
  function chunkStart(code22) {
    effects.enter("content");
    previous2 = effects.enter("chunkContent", {
      contentType: "content"
    });
    return chunkInside(code22);
  }
  function chunkInside(code22) {
    if (code22 === null) {
      return contentEnd(code22);
    }
    if (markdownLineEnding$1(code22)) {
      return effects.check(
        continuationConstruct,
        contentContinue,
        contentEnd
      )(code22);
    }
    effects.consume(code22);
    return chunkInside;
  }
  function contentEnd(code22) {
    effects.exit("chunkContent");
    effects.exit("content");
    return ok3(code22);
  }
  function contentContinue(code22) {
    effects.consume(code22);
    effects.exit("chunkContent");
    previous2.next = effects.enter("chunkContent", {
      contentType: "content",
      previous: previous2
    });
    previous2 = previous2.next;
    return chunkInside;
  }
}
function tokenizeContinuation(effects, ok3, nok) {
  const self2 = this;
  return startLookahead;
  function startLookahead(code22) {
    effects.exit("chunkContent");
    effects.enter("lineEnding");
    effects.consume(code22);
    effects.exit("lineEnding");
    return factorySpace$1(effects, prefixed, "linePrefix");
  }
  function prefixed(code22) {
    if (code22 === null || markdownLineEnding$1(code22)) {
      return nok(code22);
    }
    const tail = self2.events[self2.events.length - 1];
    if (!self2.parser.constructs.disable.null.includes("codeIndented") && tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4) {
      return ok3(code22);
    }
    return effects.interrupt(self2.parser.constructs.flow, nok, ok3)(code22);
  }
}
function factoryDestination(effects, ok3, nok, type, literalType, literalMarkerType, rawType, stringType, max) {
  const limit = max || Number.POSITIVE_INFINITY;
  let balance = 0;
  return start;
  function start(code22) {
    if (code22 === 60) {
      effects.enter(type);
      effects.enter(literalType);
      effects.enter(literalMarkerType);
      effects.consume(code22);
      effects.exit(literalMarkerType);
      return enclosedBefore;
    }
    if (code22 === null || code22 === 32 || code22 === 41 || asciiControl$1(code22)) {
      return nok(code22);
    }
    effects.enter(type);
    effects.enter(rawType);
    effects.enter(stringType);
    effects.enter("chunkString", {
      contentType: "string"
    });
    return raw(code22);
  }
  function enclosedBefore(code22) {
    if (code22 === 62) {
      effects.enter(literalMarkerType);
      effects.consume(code22);
      effects.exit(literalMarkerType);
      effects.exit(literalType);
      effects.exit(type);
      return ok3;
    }
    effects.enter(stringType);
    effects.enter("chunkString", {
      contentType: "string"
    });
    return enclosed(code22);
  }
  function enclosed(code22) {
    if (code22 === 62) {
      effects.exit("chunkString");
      effects.exit(stringType);
      return enclosedBefore(code22);
    }
    if (code22 === null || code22 === 60 || markdownLineEnding$1(code22)) {
      return nok(code22);
    }
    effects.consume(code22);
    return code22 === 92 ? enclosedEscape : enclosed;
  }
  function enclosedEscape(code22) {
    if (code22 === 60 || code22 === 62 || code22 === 92) {
      effects.consume(code22);
      return enclosed;
    }
    return enclosed(code22);
  }
  function raw(code22) {
    if (!balance && (code22 === null || code22 === 41 || markdownLineEndingOrSpace$1(code22))) {
      effects.exit("chunkString");
      effects.exit(stringType);
      effects.exit(rawType);
      effects.exit(type);
      return ok3(code22);
    }
    if (balance < limit && code22 === 40) {
      effects.consume(code22);
      balance++;
      return raw;
    }
    if (code22 === 41) {
      effects.consume(code22);
      balance--;
      return raw;
    }
    if (code22 === null || code22 === 32 || code22 === 40 || asciiControl$1(code22)) {
      return nok(code22);
    }
    effects.consume(code22);
    return code22 === 92 ? rawEscape : raw;
  }
  function rawEscape(code22) {
    if (code22 === 40 || code22 === 41 || code22 === 92) {
      effects.consume(code22);
      return raw;
    }
    return raw(code22);
  }
}
function factoryLabel(effects, ok3, nok, type, markerType, stringType) {
  const self2 = this;
  let size = 0;
  let seen;
  return start;
  function start(code22) {
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code22);
    effects.exit(markerType);
    effects.enter(stringType);
    return atBreak;
  }
  function atBreak(code22) {
    if (size > 999 || code22 === null || code22 === 91 || code22 === 93 && !seen || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    code22 === 94 && !size && "_hiddenFootnoteSupport" in self2.parser.constructs) {
      return nok(code22);
    }
    if (code22 === 93) {
      effects.exit(stringType);
      effects.enter(markerType);
      effects.consume(code22);
      effects.exit(markerType);
      effects.exit(type);
      return ok3;
    }
    if (markdownLineEnding$1(code22)) {
      effects.enter("lineEnding");
      effects.consume(code22);
      effects.exit("lineEnding");
      return atBreak;
    }
    effects.enter("chunkString", {
      contentType: "string"
    });
    return labelInside(code22);
  }
  function labelInside(code22) {
    if (code22 === null || code22 === 91 || code22 === 93 || markdownLineEnding$1(code22) || size++ > 999) {
      effects.exit("chunkString");
      return atBreak(code22);
    }
    effects.consume(code22);
    if (!seen)
      seen = !markdownSpace$1(code22);
    return code22 === 92 ? labelEscape : labelInside;
  }
  function labelEscape(code22) {
    if (code22 === 91 || code22 === 92 || code22 === 93) {
      effects.consume(code22);
      size++;
      return labelInside;
    }
    return labelInside(code22);
  }
}
function factoryTitle(effects, ok3, nok, type, markerType, stringType) {
  let marker;
  return start;
  function start(code22) {
    if (code22 === 34 || code22 === 39 || code22 === 40) {
      effects.enter(type);
      effects.enter(markerType);
      effects.consume(code22);
      effects.exit(markerType);
      marker = code22 === 40 ? 41 : code22;
      return begin;
    }
    return nok(code22);
  }
  function begin(code22) {
    if (code22 === marker) {
      effects.enter(markerType);
      effects.consume(code22);
      effects.exit(markerType);
      effects.exit(type);
      return ok3;
    }
    effects.enter(stringType);
    return atBreak(code22);
  }
  function atBreak(code22) {
    if (code22 === marker) {
      effects.exit(stringType);
      return begin(marker);
    }
    if (code22 === null) {
      return nok(code22);
    }
    if (markdownLineEnding$1(code22)) {
      effects.enter("lineEnding");
      effects.consume(code22);
      effects.exit("lineEnding");
      return factorySpace$1(effects, atBreak, "linePrefix");
    }
    effects.enter("chunkString", {
      contentType: "string"
    });
    return inside(code22);
  }
  function inside(code22) {
    if (code22 === marker || code22 === null || markdownLineEnding$1(code22)) {
      effects.exit("chunkString");
      return atBreak(code22);
    }
    effects.consume(code22);
    return code22 === 92 ? escape : inside;
  }
  function escape(code22) {
    if (code22 === marker || code22 === 92) {
      effects.consume(code22);
      return inside;
    }
    return inside(code22);
  }
}
function factoryWhitespace(effects, ok3) {
  let seen;
  return start;
  function start(code22) {
    if (markdownLineEnding$1(code22)) {
      effects.enter("lineEnding");
      effects.consume(code22);
      effects.exit("lineEnding");
      seen = true;
      return start;
    }
    if (markdownSpace$1(code22)) {
      return factorySpace$1(
        effects,
        start,
        seen ? "linePrefix" : "lineSuffix"
      )(code22);
    }
    return ok3(code22);
  }
}
var definition$1 = {
  name: "definition",
  tokenize: tokenizeDefinition
};
var titleBefore = {
  tokenize: tokenizeTitleBefore,
  partial: true
};
function tokenizeDefinition(effects, ok3, nok) {
  const self2 = this;
  let identifier;
  return start;
  function start(code22) {
    effects.enter("definition");
    return before(code22);
  }
  function before(code22) {
    return factoryLabel.call(
      self2,
      effects,
      labelAfter,
      // Note: we don’t need to reset the way `markdown-rs` does.
      nok,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(code22);
  }
  function labelAfter(code22) {
    identifier = normalizeIdentifier$1(
      self2.sliceSerialize(self2.events[self2.events.length - 1][1]).slice(1, -1)
    );
    if (code22 === 58) {
      effects.enter("definitionMarker");
      effects.consume(code22);
      effects.exit("definitionMarker");
      return markerAfter;
    }
    return nok(code22);
  }
  function markerAfter(code22) {
    return markdownLineEndingOrSpace$1(code22) ? factoryWhitespace(effects, destinationBefore)(code22) : destinationBefore(code22);
  }
  function destinationBefore(code22) {
    return factoryDestination(
      effects,
      destinationAfter,
      // Note: we don’t need to reset the way `markdown-rs` does.
      nok,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(code22);
  }
  function destinationAfter(code22) {
    return effects.attempt(titleBefore, after, after)(code22);
  }
  function after(code22) {
    return markdownSpace$1(code22) ? factorySpace$1(effects, afterWhitespace, "whitespace")(code22) : afterWhitespace(code22);
  }
  function afterWhitespace(code22) {
    if (code22 === null || markdownLineEnding$1(code22)) {
      effects.exit("definition");
      self2.parser.defined.push(identifier);
      return ok3(code22);
    }
    return nok(code22);
  }
}
function tokenizeTitleBefore(effects, ok3, nok) {
  return titleBefore2;
  function titleBefore2(code22) {
    return markdownLineEndingOrSpace$1(code22) ? factoryWhitespace(effects, beforeMarker)(code22) : nok(code22);
  }
  function beforeMarker(code22) {
    return factoryTitle(
      effects,
      titleAfter,
      nok,
      "definitionTitle",
      "definitionTitleMarker",
      "definitionTitleString"
    )(code22);
  }
  function titleAfter(code22) {
    return markdownSpace$1(code22) ? factorySpace$1(effects, titleAfterOptionalWhitespace, "whitespace")(code22) : titleAfterOptionalWhitespace(code22);
  }
  function titleAfterOptionalWhitespace(code22) {
    return code22 === null || markdownLineEnding$1(code22) ? ok3(code22) : nok(code22);
  }
}
var hardBreakEscape = {
  name: "hardBreakEscape",
  tokenize: tokenizeHardBreakEscape
};
function tokenizeHardBreakEscape(effects, ok3, nok) {
  return start;
  function start(code22) {
    effects.enter("hardBreakEscape");
    effects.consume(code22);
    return after;
  }
  function after(code22) {
    if (markdownLineEnding$1(code22)) {
      effects.exit("hardBreakEscape");
      return ok3(code22);
    }
    return nok(code22);
  }
}
var headingAtx = {
  name: "headingAtx",
  tokenize: tokenizeHeadingAtx,
  resolve: resolveHeadingAtx
};
function resolveHeadingAtx(events, context) {
  let contentEnd = events.length - 2;
  let contentStart = 3;
  let content3;
  let text4;
  if (events[contentStart][1].type === "whitespace") {
    contentStart += 2;
  }
  if (contentEnd - 2 > contentStart && events[contentEnd][1].type === "whitespace") {
    contentEnd -= 2;
  }
  if (events[contentEnd][1].type === "atxHeadingSequence" && (contentStart === contentEnd - 1 || contentEnd - 4 > contentStart && events[contentEnd - 2][1].type === "whitespace")) {
    contentEnd -= contentStart + 1 === contentEnd ? 2 : 4;
  }
  if (contentEnd > contentStart) {
    content3 = {
      type: "atxHeadingText",
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end
    };
    text4 = {
      type: "chunkText",
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end,
      contentType: "text"
    };
    splice$1(events, contentStart, contentEnd - contentStart + 1, [
      ["enter", content3, context],
      ["enter", text4, context],
      ["exit", text4, context],
      ["exit", content3, context]
    ]);
  }
  return events;
}
function tokenizeHeadingAtx(effects, ok3, nok) {
  let size = 0;
  return start;
  function start(code22) {
    effects.enter("atxHeading");
    return before(code22);
  }
  function before(code22) {
    effects.enter("atxHeadingSequence");
    return sequenceOpen(code22);
  }
  function sequenceOpen(code22) {
    if (code22 === 35 && size++ < 6) {
      effects.consume(code22);
      return sequenceOpen;
    }
    if (code22 === null || markdownLineEndingOrSpace$1(code22)) {
      effects.exit("atxHeadingSequence");
      return atBreak(code22);
    }
    return nok(code22);
  }
  function atBreak(code22) {
    if (code22 === 35) {
      effects.enter("atxHeadingSequence");
      return sequenceFurther(code22);
    }
    if (code22 === null || markdownLineEnding$1(code22)) {
      effects.exit("atxHeading");
      return ok3(code22);
    }
    if (markdownSpace$1(code22)) {
      return factorySpace$1(effects, atBreak, "whitespace")(code22);
    }
    effects.enter("atxHeadingText");
    return data(code22);
  }
  function sequenceFurther(code22) {
    if (code22 === 35) {
      effects.consume(code22);
      return sequenceFurther;
    }
    effects.exit("atxHeadingSequence");
    return atBreak(code22);
  }
  function data(code22) {
    if (code22 === null || code22 === 35 || markdownLineEndingOrSpace$1(code22)) {
      effects.exit("atxHeadingText");
      return atBreak(code22);
    }
    effects.consume(code22);
    return data;
  }
}
var htmlBlockNames = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
];
var htmlRawNames = ["pre", "script", "style", "textarea"];
var htmlFlow = {
  name: "htmlFlow",
  tokenize: tokenizeHtmlFlow,
  resolveTo: resolveToHtmlFlow,
  concrete: true
};
var blankLineBefore = {
  tokenize: tokenizeBlankLineBefore,
  partial: true
};
var nonLazyContinuationStart = {
  tokenize: tokenizeNonLazyContinuationStart,
  partial: true
};
function resolveToHtmlFlow(events) {
  let index2 = events.length;
  while (index2--) {
    if (events[index2][0] === "enter" && events[index2][1].type === "htmlFlow") {
      break;
    }
  }
  if (index2 > 1 && events[index2 - 2][1].type === "linePrefix") {
    events[index2][1].start = events[index2 - 2][1].start;
    events[index2 + 1][1].start = events[index2 - 2][1].start;
    events.splice(index2 - 2, 2);
  }
  return events;
}
function tokenizeHtmlFlow(effects, ok3, nok) {
  const self2 = this;
  let marker;
  let closingTag;
  let buffer;
  let index2;
  let markerB;
  return start;
  function start(code22) {
    return before(code22);
  }
  function before(code22) {
    effects.enter("htmlFlow");
    effects.enter("htmlFlowData");
    effects.consume(code22);
    return open;
  }
  function open(code22) {
    if (code22 === 33) {
      effects.consume(code22);
      return declarationOpen;
    }
    if (code22 === 47) {
      effects.consume(code22);
      closingTag = true;
      return tagCloseStart;
    }
    if (code22 === 63) {
      effects.consume(code22);
      marker = 3;
      return self2.interrupt ? ok3 : continuationDeclarationInside;
    }
    if (asciiAlpha$1(code22)) {
      effects.consume(code22);
      buffer = String.fromCharCode(code22);
      return tagName;
    }
    return nok(code22);
  }
  function declarationOpen(code22) {
    if (code22 === 45) {
      effects.consume(code22);
      marker = 2;
      return commentOpenInside;
    }
    if (code22 === 91) {
      effects.consume(code22);
      marker = 5;
      index2 = 0;
      return cdataOpenInside;
    }
    if (asciiAlpha$1(code22)) {
      effects.consume(code22);
      marker = 4;
      return self2.interrupt ? ok3 : continuationDeclarationInside;
    }
    return nok(code22);
  }
  function commentOpenInside(code22) {
    if (code22 === 45) {
      effects.consume(code22);
      return self2.interrupt ? ok3 : continuationDeclarationInside;
    }
    return nok(code22);
  }
  function cdataOpenInside(code22) {
    const value = "CDATA[";
    if (code22 === value.charCodeAt(index2++)) {
      effects.consume(code22);
      if (index2 === value.length) {
        return self2.interrupt ? ok3 : continuation;
      }
      return cdataOpenInside;
    }
    return nok(code22);
  }
  function tagCloseStart(code22) {
    if (asciiAlpha$1(code22)) {
      effects.consume(code22);
      buffer = String.fromCharCode(code22);
      return tagName;
    }
    return nok(code22);
  }
  function tagName(code22) {
    if (code22 === null || code22 === 47 || code22 === 62 || markdownLineEndingOrSpace$1(code22)) {
      const slash = code22 === 47;
      const name = buffer.toLowerCase();
      if (!slash && !closingTag && htmlRawNames.includes(name)) {
        marker = 1;
        return self2.interrupt ? ok3(code22) : continuation(code22);
      }
      if (htmlBlockNames.includes(buffer.toLowerCase())) {
        marker = 6;
        if (slash) {
          effects.consume(code22);
          return basicSelfClosing;
        }
        return self2.interrupt ? ok3(code22) : continuation(code22);
      }
      marker = 7;
      return self2.interrupt && !self2.parser.lazy[self2.now().line] ? nok(code22) : closingTag ? completeClosingTagAfter(code22) : completeAttributeNameBefore(code22);
    }
    if (code22 === 45 || asciiAlphanumeric$1(code22)) {
      effects.consume(code22);
      buffer += String.fromCharCode(code22);
      return tagName;
    }
    return nok(code22);
  }
  function basicSelfClosing(code22) {
    if (code22 === 62) {
      effects.consume(code22);
      return self2.interrupt ? ok3 : continuation;
    }
    return nok(code22);
  }
  function completeClosingTagAfter(code22) {
    if (markdownSpace$1(code22)) {
      effects.consume(code22);
      return completeClosingTagAfter;
    }
    return completeEnd(code22);
  }
  function completeAttributeNameBefore(code22) {
    if (code22 === 47) {
      effects.consume(code22);
      return completeEnd;
    }
    if (code22 === 58 || code22 === 95 || asciiAlpha$1(code22)) {
      effects.consume(code22);
      return completeAttributeName;
    }
    if (markdownSpace$1(code22)) {
      effects.consume(code22);
      return completeAttributeNameBefore;
    }
    return completeEnd(code22);
  }
  function completeAttributeName(code22) {
    if (code22 === 45 || code22 === 46 || code22 === 58 || code22 === 95 || asciiAlphanumeric$1(code22)) {
      effects.consume(code22);
      return completeAttributeName;
    }
    return completeAttributeNameAfter(code22);
  }
  function completeAttributeNameAfter(code22) {
    if (code22 === 61) {
      effects.consume(code22);
      return completeAttributeValueBefore;
    }
    if (markdownSpace$1(code22)) {
      effects.consume(code22);
      return completeAttributeNameAfter;
    }
    return completeAttributeNameBefore(code22);
  }
  function completeAttributeValueBefore(code22) {
    if (code22 === null || code22 === 60 || code22 === 61 || code22 === 62 || code22 === 96) {
      return nok(code22);
    }
    if (code22 === 34 || code22 === 39) {
      effects.consume(code22);
      markerB = code22;
      return completeAttributeValueQuoted;
    }
    if (markdownSpace$1(code22)) {
      effects.consume(code22);
      return completeAttributeValueBefore;
    }
    return completeAttributeValueUnquoted(code22);
  }
  function completeAttributeValueQuoted(code22) {
    if (code22 === markerB) {
      effects.consume(code22);
      markerB = null;
      return completeAttributeValueQuotedAfter;
    }
    if (code22 === null || markdownLineEnding$1(code22)) {
      return nok(code22);
    }
    effects.consume(code22);
    return completeAttributeValueQuoted;
  }
  function completeAttributeValueUnquoted(code22) {
    if (code22 === null || code22 === 34 || code22 === 39 || code22 === 47 || code22 === 60 || code22 === 61 || code22 === 62 || code22 === 96 || markdownLineEndingOrSpace$1(code22)) {
      return completeAttributeNameAfter(code22);
    }
    effects.consume(code22);
    return completeAttributeValueUnquoted;
  }
  function completeAttributeValueQuotedAfter(code22) {
    if (code22 === 47 || code22 === 62 || markdownSpace$1(code22)) {
      return completeAttributeNameBefore(code22);
    }
    return nok(code22);
  }
  function completeEnd(code22) {
    if (code22 === 62) {
      effects.consume(code22);
      return completeAfter;
    }
    return nok(code22);
  }
  function completeAfter(code22) {
    if (code22 === null || markdownLineEnding$1(code22)) {
      return continuation(code22);
    }
    if (markdownSpace$1(code22)) {
      effects.consume(code22);
      return completeAfter;
    }
    return nok(code22);
  }
  function continuation(code22) {
    if (code22 === 45 && marker === 2) {
      effects.consume(code22);
      return continuationCommentInside;
    }
    if (code22 === 60 && marker === 1) {
      effects.consume(code22);
      return continuationRawTagOpen;
    }
    if (code22 === 62 && marker === 4) {
      effects.consume(code22);
      return continuationClose;
    }
    if (code22 === 63 && marker === 3) {
      effects.consume(code22);
      return continuationDeclarationInside;
    }
    if (code22 === 93 && marker === 5) {
      effects.consume(code22);
      return continuationCdataInside;
    }
    if (markdownLineEnding$1(code22) && (marker === 6 || marker === 7)) {
      effects.exit("htmlFlowData");
      return effects.check(
        blankLineBefore,
        continuationAfter,
        continuationStart
      )(code22);
    }
    if (code22 === null || markdownLineEnding$1(code22)) {
      effects.exit("htmlFlowData");
      return continuationStart(code22);
    }
    effects.consume(code22);
    return continuation;
  }
  function continuationStart(code22) {
    return effects.check(
      nonLazyContinuationStart,
      continuationStartNonLazy,
      continuationAfter
    )(code22);
  }
  function continuationStartNonLazy(code22) {
    effects.enter("lineEnding");
    effects.consume(code22);
    effects.exit("lineEnding");
    return continuationBefore;
  }
  function continuationBefore(code22) {
    if (code22 === null || markdownLineEnding$1(code22)) {
      return continuationStart(code22);
    }
    effects.enter("htmlFlowData");
    return continuation(code22);
  }
  function continuationCommentInside(code22) {
    if (code22 === 45) {
      effects.consume(code22);
      return continuationDeclarationInside;
    }
    return continuation(code22);
  }
  function continuationRawTagOpen(code22) {
    if (code22 === 47) {
      effects.consume(code22);
      buffer = "";
      return continuationRawEndTag;
    }
    return continuation(code22);
  }
  function continuationRawEndTag(code22) {
    if (code22 === 62) {
      const name = buffer.toLowerCase();
      if (htmlRawNames.includes(name)) {
        effects.consume(code22);
        return continuationClose;
      }
      return continuation(code22);
    }
    if (asciiAlpha$1(code22) && buffer.length < 8) {
      effects.consume(code22);
      buffer += String.fromCharCode(code22);
      return continuationRawEndTag;
    }
    return continuation(code22);
  }
  function continuationCdataInside(code22) {
    if (code22 === 93) {
      effects.consume(code22);
      return continuationDeclarationInside;
    }
    return continuation(code22);
  }
  function continuationDeclarationInside(code22) {
    if (code22 === 62) {
      effects.consume(code22);
      return continuationClose;
    }
    if (code22 === 45 && marker === 2) {
      effects.consume(code22);
      return continuationDeclarationInside;
    }
    return continuation(code22);
  }
  function continuationClose(code22) {
    if (code22 === null || markdownLineEnding$1(code22)) {
      effects.exit("htmlFlowData");
      return continuationAfter(code22);
    }
    effects.consume(code22);
    return continuationClose;
  }
  function continuationAfter(code22) {
    effects.exit("htmlFlow");
    return ok3(code22);
  }
}
function tokenizeNonLazyContinuationStart(effects, ok3, nok) {
  const self2 = this;
  return start;
  function start(code22) {
    if (markdownLineEnding$1(code22)) {
      effects.enter("lineEnding");
      effects.consume(code22);
      effects.exit("lineEnding");
      return after;
    }
    return nok(code22);
  }
  function after(code22) {
    return self2.parser.lazy[self2.now().line] ? nok(code22) : ok3(code22);
  }
}
function tokenizeBlankLineBefore(effects, ok3, nok) {
  return start;
  function start(code22) {
    effects.enter("lineEnding");
    effects.consume(code22);
    effects.exit("lineEnding");
    return effects.attempt(blankLine$1, ok3, nok);
  }
}
var htmlText = {
  name: "htmlText",
  tokenize: tokenizeHtmlText
};
function tokenizeHtmlText(effects, ok3, nok) {
  const self2 = this;
  let marker;
  let index2;
  let returnState;
  return start;
  function start(code22) {
    effects.enter("htmlText");
    effects.enter("htmlTextData");
    effects.consume(code22);
    return open;
  }
  function open(code22) {
    if (code22 === 33) {
      effects.consume(code22);
      return declarationOpen;
    }
    if (code22 === 47) {
      effects.consume(code22);
      return tagCloseStart;
    }
    if (code22 === 63) {
      effects.consume(code22);
      return instruction;
    }
    if (asciiAlpha$1(code22)) {
      effects.consume(code22);
      return tagOpen;
    }
    return nok(code22);
  }
  function declarationOpen(code22) {
    if (code22 === 45) {
      effects.consume(code22);
      return commentOpenInside;
    }
    if (code22 === 91) {
      effects.consume(code22);
      index2 = 0;
      return cdataOpenInside;
    }
    if (asciiAlpha$1(code22)) {
      effects.consume(code22);
      return declaration;
    }
    return nok(code22);
  }
  function commentOpenInside(code22) {
    if (code22 === 45) {
      effects.consume(code22);
      return commentEnd;
    }
    return nok(code22);
  }
  function comment(code22) {
    if (code22 === null) {
      return nok(code22);
    }
    if (code22 === 45) {
      effects.consume(code22);
      return commentClose;
    }
    if (markdownLineEnding$1(code22)) {
      returnState = comment;
      return lineEndingBefore(code22);
    }
    effects.consume(code22);
    return comment;
  }
  function commentClose(code22) {
    if (code22 === 45) {
      effects.consume(code22);
      return commentEnd;
    }
    return comment(code22);
  }
  function commentEnd(code22) {
    return code22 === 62 ? end(code22) : code22 === 45 ? commentClose(code22) : comment(code22);
  }
  function cdataOpenInside(code22) {
    const value = "CDATA[";
    if (code22 === value.charCodeAt(index2++)) {
      effects.consume(code22);
      return index2 === value.length ? cdata : cdataOpenInside;
    }
    return nok(code22);
  }
  function cdata(code22) {
    if (code22 === null) {
      return nok(code22);
    }
    if (code22 === 93) {
      effects.consume(code22);
      return cdataClose;
    }
    if (markdownLineEnding$1(code22)) {
      returnState = cdata;
      return lineEndingBefore(code22);
    }
    effects.consume(code22);
    return cdata;
  }
  function cdataClose(code22) {
    if (code22 === 93) {
      effects.consume(code22);
      return cdataEnd;
    }
    return cdata(code22);
  }
  function cdataEnd(code22) {
    if (code22 === 62) {
      return end(code22);
    }
    if (code22 === 93) {
      effects.consume(code22);
      return cdataEnd;
    }
    return cdata(code22);
  }
  function declaration(code22) {
    if (code22 === null || code22 === 62) {
      return end(code22);
    }
    if (markdownLineEnding$1(code22)) {
      returnState = declaration;
      return lineEndingBefore(code22);
    }
    effects.consume(code22);
    return declaration;
  }
  function instruction(code22) {
    if (code22 === null) {
      return nok(code22);
    }
    if (code22 === 63) {
      effects.consume(code22);
      return instructionClose;
    }
    if (markdownLineEnding$1(code22)) {
      returnState = instruction;
      return lineEndingBefore(code22);
    }
    effects.consume(code22);
    return instruction;
  }
  function instructionClose(code22) {
    return code22 === 62 ? end(code22) : instruction(code22);
  }
  function tagCloseStart(code22) {
    if (asciiAlpha$1(code22)) {
      effects.consume(code22);
      return tagClose;
    }
    return nok(code22);
  }
  function tagClose(code22) {
    if (code22 === 45 || asciiAlphanumeric$1(code22)) {
      effects.consume(code22);
      return tagClose;
    }
    return tagCloseBetween(code22);
  }
  function tagCloseBetween(code22) {
    if (markdownLineEnding$1(code22)) {
      returnState = tagCloseBetween;
      return lineEndingBefore(code22);
    }
    if (markdownSpace$1(code22)) {
      effects.consume(code22);
      return tagCloseBetween;
    }
    return end(code22);
  }
  function tagOpen(code22) {
    if (code22 === 45 || asciiAlphanumeric$1(code22)) {
      effects.consume(code22);
      return tagOpen;
    }
    if (code22 === 47 || code22 === 62 || markdownLineEndingOrSpace$1(code22)) {
      return tagOpenBetween(code22);
    }
    return nok(code22);
  }
  function tagOpenBetween(code22) {
    if (code22 === 47) {
      effects.consume(code22);
      return end;
    }
    if (code22 === 58 || code22 === 95 || asciiAlpha$1(code22)) {
      effects.consume(code22);
      return tagOpenAttributeName;
    }
    if (markdownLineEnding$1(code22)) {
      returnState = tagOpenBetween;
      return lineEndingBefore(code22);
    }
    if (markdownSpace$1(code22)) {
      effects.consume(code22);
      return tagOpenBetween;
    }
    return end(code22);
  }
  function tagOpenAttributeName(code22) {
    if (code22 === 45 || code22 === 46 || code22 === 58 || code22 === 95 || asciiAlphanumeric$1(code22)) {
      effects.consume(code22);
      return tagOpenAttributeName;
    }
    return tagOpenAttributeNameAfter(code22);
  }
  function tagOpenAttributeNameAfter(code22) {
    if (code22 === 61) {
      effects.consume(code22);
      return tagOpenAttributeValueBefore;
    }
    if (markdownLineEnding$1(code22)) {
      returnState = tagOpenAttributeNameAfter;
      return lineEndingBefore(code22);
    }
    if (markdownSpace$1(code22)) {
      effects.consume(code22);
      return tagOpenAttributeNameAfter;
    }
    return tagOpenBetween(code22);
  }
  function tagOpenAttributeValueBefore(code22) {
    if (code22 === null || code22 === 60 || code22 === 61 || code22 === 62 || code22 === 96) {
      return nok(code22);
    }
    if (code22 === 34 || code22 === 39) {
      effects.consume(code22);
      marker = code22;
      return tagOpenAttributeValueQuoted;
    }
    if (markdownLineEnding$1(code22)) {
      returnState = tagOpenAttributeValueBefore;
      return lineEndingBefore(code22);
    }
    if (markdownSpace$1(code22)) {
      effects.consume(code22);
      return tagOpenAttributeValueBefore;
    }
    effects.consume(code22);
    return tagOpenAttributeValueUnquoted;
  }
  function tagOpenAttributeValueQuoted(code22) {
    if (code22 === marker) {
      effects.consume(code22);
      marker = void 0;
      return tagOpenAttributeValueQuotedAfter;
    }
    if (code22 === null) {
      return nok(code22);
    }
    if (markdownLineEnding$1(code22)) {
      returnState = tagOpenAttributeValueQuoted;
      return lineEndingBefore(code22);
    }
    effects.consume(code22);
    return tagOpenAttributeValueQuoted;
  }
  function tagOpenAttributeValueUnquoted(code22) {
    if (code22 === null || code22 === 34 || code22 === 39 || code22 === 60 || code22 === 61 || code22 === 96) {
      return nok(code22);
    }
    if (code22 === 47 || code22 === 62 || markdownLineEndingOrSpace$1(code22)) {
      return tagOpenBetween(code22);
    }
    effects.consume(code22);
    return tagOpenAttributeValueUnquoted;
  }
  function tagOpenAttributeValueQuotedAfter(code22) {
    if (code22 === 47 || code22 === 62 || markdownLineEndingOrSpace$1(code22)) {
      return tagOpenBetween(code22);
    }
    return nok(code22);
  }
  function end(code22) {
    if (code22 === 62) {
      effects.consume(code22);
      effects.exit("htmlTextData");
      effects.exit("htmlText");
      return ok3;
    }
    return nok(code22);
  }
  function lineEndingBefore(code22) {
    effects.exit("htmlTextData");
    effects.enter("lineEnding");
    effects.consume(code22);
    effects.exit("lineEnding");
    return lineEndingAfter;
  }
  function lineEndingAfter(code22) {
    return markdownSpace$1(code22) ? factorySpace$1(
      effects,
      lineEndingAfterPrefix,
      "linePrefix",
      self2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    )(code22) : lineEndingAfterPrefix(code22);
  }
  function lineEndingAfterPrefix(code22) {
    effects.enter("htmlTextData");
    return returnState(code22);
  }
}
var labelEnd = {
  name: "labelEnd",
  tokenize: tokenizeLabelEnd,
  resolveTo: resolveToLabelEnd,
  resolveAll: resolveAllLabelEnd
};
var resourceConstruct = {
  tokenize: tokenizeResource
};
var referenceFullConstruct = {
  tokenize: tokenizeReferenceFull
};
var referenceCollapsedConstruct = {
  tokenize: tokenizeReferenceCollapsed
};
function resolveAllLabelEnd(events) {
  let index2 = -1;
  while (++index2 < events.length) {
    const token = events[index2][1];
    if (token.type === "labelImage" || token.type === "labelLink" || token.type === "labelEnd") {
      events.splice(index2 + 1, token.type === "labelImage" ? 4 : 2);
      token.type = "data";
      index2++;
    }
  }
  return events;
}
function resolveToLabelEnd(events, context) {
  let index2 = events.length;
  let offset = 0;
  let token;
  let open;
  let close;
  let media;
  while (index2--) {
    token = events[index2][1];
    if (open) {
      if (token.type === "link" || token.type === "labelLink" && token._inactive) {
        break;
      }
      if (events[index2][0] === "enter" && token.type === "labelLink") {
        token._inactive = true;
      }
    } else if (close) {
      if (events[index2][0] === "enter" && (token.type === "labelImage" || token.type === "labelLink") && !token._balanced) {
        open = index2;
        if (token.type !== "labelLink") {
          offset = 2;
          break;
        }
      }
    } else if (token.type === "labelEnd") {
      close = index2;
    }
  }
  const group = {
    type: events[open][1].type === "labelLink" ? "link" : "image",
    start: Object.assign({}, events[open][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  };
  const label = {
    type: "label",
    start: Object.assign({}, events[open][1].start),
    end: Object.assign({}, events[close][1].end)
  };
  const text4 = {
    type: "labelText",
    start: Object.assign({}, events[open + offset + 2][1].end),
    end: Object.assign({}, events[close - 2][1].start)
  };
  media = [
    ["enter", group, context],
    ["enter", label, context]
  ];
  media = push(media, events.slice(open + 1, open + offset + 3));
  media = push(media, [["enter", text4, context]]);
  media = push(
    media,
    resolveAll$1(
      context.parser.constructs.insideSpan.null,
      events.slice(open + offset + 4, close - 3),
      context
    )
  );
  media = push(media, [
    ["exit", text4, context],
    events[close - 2],
    events[close - 1],
    ["exit", label, context]
  ]);
  media = push(media, events.slice(close + 1));
  media = push(media, [["exit", group, context]]);
  splice$1(events, open, events.length, media);
  return events;
}
function tokenizeLabelEnd(effects, ok3, nok) {
  const self2 = this;
  let index2 = self2.events.length;
  let labelStart;
  let defined;
  while (index2--) {
    if ((self2.events[index2][1].type === "labelImage" || self2.events[index2][1].type === "labelLink") && !self2.events[index2][1]._balanced) {
      labelStart = self2.events[index2][1];
      break;
    }
  }
  return start;
  function start(code22) {
    if (!labelStart) {
      return nok(code22);
    }
    if (labelStart._inactive) {
      return labelEndNok(code22);
    }
    defined = self2.parser.defined.includes(
      normalizeIdentifier$1(
        self2.sliceSerialize({
          start: labelStart.end,
          end: self2.now()
        })
      )
    );
    effects.enter("labelEnd");
    effects.enter("labelMarker");
    effects.consume(code22);
    effects.exit("labelMarker");
    effects.exit("labelEnd");
    return after;
  }
  function after(code22) {
    if (code22 === 40) {
      return effects.attempt(
        resourceConstruct,
        labelEndOk,
        defined ? labelEndOk : labelEndNok
      )(code22);
    }
    if (code22 === 91) {
      return effects.attempt(
        referenceFullConstruct,
        labelEndOk,
        defined ? referenceNotFull : labelEndNok
      )(code22);
    }
    return defined ? labelEndOk(code22) : labelEndNok(code22);
  }
  function referenceNotFull(code22) {
    return effects.attempt(
      referenceCollapsedConstruct,
      labelEndOk,
      labelEndNok
    )(code22);
  }
  function labelEndOk(code22) {
    return ok3(code22);
  }
  function labelEndNok(code22) {
    labelStart._balanced = true;
    return nok(code22);
  }
}
function tokenizeResource(effects, ok3, nok) {
  return resourceStart;
  function resourceStart(code22) {
    effects.enter("resource");
    effects.enter("resourceMarker");
    effects.consume(code22);
    effects.exit("resourceMarker");
    return resourceBefore;
  }
  function resourceBefore(code22) {
    return markdownLineEndingOrSpace$1(code22) ? factoryWhitespace(effects, resourceOpen)(code22) : resourceOpen(code22);
  }
  function resourceOpen(code22) {
    if (code22 === 41) {
      return resourceEnd(code22);
    }
    return factoryDestination(
      effects,
      resourceDestinationAfter,
      resourceDestinationMissing,
      "resourceDestination",
      "resourceDestinationLiteral",
      "resourceDestinationLiteralMarker",
      "resourceDestinationRaw",
      "resourceDestinationString",
      32
    )(code22);
  }
  function resourceDestinationAfter(code22) {
    return markdownLineEndingOrSpace$1(code22) ? factoryWhitespace(effects, resourceBetween)(code22) : resourceEnd(code22);
  }
  function resourceDestinationMissing(code22) {
    return nok(code22);
  }
  function resourceBetween(code22) {
    if (code22 === 34 || code22 === 39 || code22 === 40) {
      return factoryTitle(
        effects,
        resourceTitleAfter,
        nok,
        "resourceTitle",
        "resourceTitleMarker",
        "resourceTitleString"
      )(code22);
    }
    return resourceEnd(code22);
  }
  function resourceTitleAfter(code22) {
    return markdownLineEndingOrSpace$1(code22) ? factoryWhitespace(effects, resourceEnd)(code22) : resourceEnd(code22);
  }
  function resourceEnd(code22) {
    if (code22 === 41) {
      effects.enter("resourceMarker");
      effects.consume(code22);
      effects.exit("resourceMarker");
      effects.exit("resource");
      return ok3;
    }
    return nok(code22);
  }
}
function tokenizeReferenceFull(effects, ok3, nok) {
  const self2 = this;
  return referenceFull;
  function referenceFull(code22) {
    return factoryLabel.call(
      self2,
      effects,
      referenceFullAfter,
      referenceFullMissing,
      "reference",
      "referenceMarker",
      "referenceString"
    )(code22);
  }
  function referenceFullAfter(code22) {
    return self2.parser.defined.includes(
      normalizeIdentifier$1(
        self2.sliceSerialize(self2.events[self2.events.length - 1][1]).slice(1, -1)
      )
    ) ? ok3(code22) : nok(code22);
  }
  function referenceFullMissing(code22) {
    return nok(code22);
  }
}
function tokenizeReferenceCollapsed(effects, ok3, nok) {
  return referenceCollapsedStart;
  function referenceCollapsedStart(code22) {
    effects.enter("reference");
    effects.enter("referenceMarker");
    effects.consume(code22);
    effects.exit("referenceMarker");
    return referenceCollapsedOpen;
  }
  function referenceCollapsedOpen(code22) {
    if (code22 === 93) {
      effects.enter("referenceMarker");
      effects.consume(code22);
      effects.exit("referenceMarker");
      effects.exit("reference");
      return ok3;
    }
    return nok(code22);
  }
}
var labelStartImage = {
  name: "labelStartImage",
  tokenize: tokenizeLabelStartImage,
  resolveAll: labelEnd.resolveAll
};
function tokenizeLabelStartImage(effects, ok3, nok) {
  const self2 = this;
  return start;
  function start(code22) {
    effects.enter("labelImage");
    effects.enter("labelImageMarker");
    effects.consume(code22);
    effects.exit("labelImageMarker");
    return open;
  }
  function open(code22) {
    if (code22 === 91) {
      effects.enter("labelMarker");
      effects.consume(code22);
      effects.exit("labelMarker");
      effects.exit("labelImage");
      return after;
    }
    return nok(code22);
  }
  function after(code22) {
    return code22 === 94 && "_hiddenFootnoteSupport" in self2.parser.constructs ? nok(code22) : ok3(code22);
  }
}
var labelStartLink = {
  name: "labelStartLink",
  tokenize: tokenizeLabelStartLink,
  resolveAll: labelEnd.resolveAll
};
function tokenizeLabelStartLink(effects, ok3, nok) {
  const self2 = this;
  return start;
  function start(code22) {
    effects.enter("labelLink");
    effects.enter("labelMarker");
    effects.consume(code22);
    effects.exit("labelMarker");
    effects.exit("labelLink");
    return after;
  }
  function after(code22) {
    return code22 === 94 && "_hiddenFootnoteSupport" in self2.parser.constructs ? nok(code22) : ok3(code22);
  }
}
var lineEnding = {
  name: "lineEnding",
  tokenize: tokenizeLineEnding
};
function tokenizeLineEnding(effects, ok3) {
  return start;
  function start(code22) {
    effects.enter("lineEnding");
    effects.consume(code22);
    effects.exit("lineEnding");
    return factorySpace$1(effects, ok3, "linePrefix");
  }
}
var thematicBreak$1 = {
  name: "thematicBreak",
  tokenize: tokenizeThematicBreak
};
function tokenizeThematicBreak(effects, ok3, nok) {
  let size = 0;
  let marker;
  return start;
  function start(code22) {
    effects.enter("thematicBreak");
    return before(code22);
  }
  function before(code22) {
    marker = code22;
    return atBreak(code22);
  }
  function atBreak(code22) {
    if (code22 === marker) {
      effects.enter("thematicBreakSequence");
      return sequence(code22);
    }
    if (size >= 3 && (code22 === null || markdownLineEnding$1(code22))) {
      effects.exit("thematicBreak");
      return ok3(code22);
    }
    return nok(code22);
  }
  function sequence(code22) {
    if (code22 === marker) {
      effects.consume(code22);
      size++;
      return sequence;
    }
    effects.exit("thematicBreakSequence");
    return markdownSpace$1(code22) ? factorySpace$1(effects, atBreak, "whitespace")(code22) : atBreak(code22);
  }
}
var list$1 = {
  name: "list",
  tokenize: tokenizeListStart,
  continuation: {
    tokenize: tokenizeListContinuation
  },
  exit: tokenizeListEnd
};
var listItemPrefixWhitespaceConstruct = {
  tokenize: tokenizeListItemPrefixWhitespace,
  partial: true
};
var indentConstruct = {
  tokenize: tokenizeIndent$1,
  partial: true
};
function tokenizeListStart(effects, ok3, nok) {
  const self2 = this;
  const tail = self2.events[self2.events.length - 1];
  let initialSize = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
  let size = 0;
  return start;
  function start(code22) {
    const kind = self2.containerState.type || (code22 === 42 || code22 === 43 || code22 === 45 ? "listUnordered" : "listOrdered");
    if (kind === "listUnordered" ? !self2.containerState.marker || code22 === self2.containerState.marker : asciiDigit(code22)) {
      if (!self2.containerState.type) {
        self2.containerState.type = kind;
        effects.enter(kind, {
          _container: true
        });
      }
      if (kind === "listUnordered") {
        effects.enter("listItemPrefix");
        return code22 === 42 || code22 === 45 ? effects.check(thematicBreak$1, nok, atMarker)(code22) : atMarker(code22);
      }
      if (!self2.interrupt || code22 === 49) {
        effects.enter("listItemPrefix");
        effects.enter("listItemValue");
        return inside(code22);
      }
    }
    return nok(code22);
  }
  function inside(code22) {
    if (asciiDigit(code22) && ++size < 10) {
      effects.consume(code22);
      return inside;
    }
    if ((!self2.interrupt || size < 2) && (self2.containerState.marker ? code22 === self2.containerState.marker : code22 === 41 || code22 === 46)) {
      effects.exit("listItemValue");
      return atMarker(code22);
    }
    return nok(code22);
  }
  function atMarker(code22) {
    effects.enter("listItemMarker");
    effects.consume(code22);
    effects.exit("listItemMarker");
    self2.containerState.marker = self2.containerState.marker || code22;
    return effects.check(
      blankLine$1,
      // Can’t be empty when interrupting.
      self2.interrupt ? nok : onBlank,
      effects.attempt(
        listItemPrefixWhitespaceConstruct,
        endOfPrefix,
        otherPrefix
      )
    );
  }
  function onBlank(code22) {
    self2.containerState.initialBlankLine = true;
    initialSize++;
    return endOfPrefix(code22);
  }
  function otherPrefix(code22) {
    if (markdownSpace$1(code22)) {
      effects.enter("listItemPrefixWhitespace");
      effects.consume(code22);
      effects.exit("listItemPrefixWhitespace");
      return endOfPrefix;
    }
    return nok(code22);
  }
  function endOfPrefix(code22) {
    self2.containerState.size = initialSize + self2.sliceSerialize(effects.exit("listItemPrefix"), true).length;
    return ok3(code22);
  }
}
function tokenizeListContinuation(effects, ok3, nok) {
  const self2 = this;
  self2.containerState._closeFlow = void 0;
  return effects.check(blankLine$1, onBlank, notBlank);
  function onBlank(code22) {
    self2.containerState.furtherBlankLines = self2.containerState.furtherBlankLines || self2.containerState.initialBlankLine;
    return factorySpace$1(
      effects,
      ok3,
      "listItemIndent",
      self2.containerState.size + 1
    )(code22);
  }
  function notBlank(code22) {
    if (self2.containerState.furtherBlankLines || !markdownSpace$1(code22)) {
      self2.containerState.furtherBlankLines = void 0;
      self2.containerState.initialBlankLine = void 0;
      return notInCurrentItem(code22);
    }
    self2.containerState.furtherBlankLines = void 0;
    self2.containerState.initialBlankLine = void 0;
    return effects.attempt(indentConstruct, ok3, notInCurrentItem)(code22);
  }
  function notInCurrentItem(code22) {
    self2.containerState._closeFlow = true;
    self2.interrupt = void 0;
    return factorySpace$1(
      effects,
      effects.attempt(list$1, ok3, nok),
      "linePrefix",
      self2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    )(code22);
  }
}
function tokenizeIndent$1(effects, ok3, nok) {
  const self2 = this;
  return factorySpace$1(
    effects,
    afterPrefix,
    "listItemIndent",
    self2.containerState.size + 1
  );
  function afterPrefix(code22) {
    const tail = self2.events[self2.events.length - 1];
    return tail && tail[1].type === "listItemIndent" && tail[2].sliceSerialize(tail[1], true).length === self2.containerState.size ? ok3(code22) : nok(code22);
  }
}
function tokenizeListEnd(effects) {
  effects.exit(this.containerState.type);
}
function tokenizeListItemPrefixWhitespace(effects, ok3, nok) {
  const self2 = this;
  return factorySpace$1(
    effects,
    afterPrefix,
    "listItemPrefixWhitespace",
    self2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1
  );
  function afterPrefix(code22) {
    const tail = self2.events[self2.events.length - 1];
    return !markdownSpace$1(code22) && tail && tail[1].type === "listItemPrefixWhitespace" ? ok3(code22) : nok(code22);
  }
}
var setextUnderline = {
  name: "setextUnderline",
  tokenize: tokenizeSetextUnderline,
  resolveTo: resolveToSetextUnderline
};
function resolveToSetextUnderline(events, context) {
  let index2 = events.length;
  let content3;
  let text4;
  let definition2;
  while (index2--) {
    if (events[index2][0] === "enter") {
      if (events[index2][1].type === "content") {
        content3 = index2;
        break;
      }
      if (events[index2][1].type === "paragraph") {
        text4 = index2;
      }
    } else {
      if (events[index2][1].type === "content") {
        events.splice(index2, 1);
      }
      if (!definition2 && events[index2][1].type === "definition") {
        definition2 = index2;
      }
    }
  }
  const heading2 = {
    type: "setextHeading",
    start: Object.assign({}, events[text4][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  };
  events[text4][1].type = "setextHeadingText";
  if (definition2) {
    events.splice(text4, 0, ["enter", heading2, context]);
    events.splice(definition2 + 1, 0, ["exit", events[content3][1], context]);
    events[content3][1].end = Object.assign({}, events[definition2][1].end);
  } else {
    events[content3][1] = heading2;
  }
  events.push(["exit", heading2, context]);
  return events;
}
function tokenizeSetextUnderline(effects, ok3, nok) {
  const self2 = this;
  let marker;
  return start;
  function start(code22) {
    let index2 = self2.events.length;
    let paragraph2;
    while (index2--) {
      if (self2.events[index2][1].type !== "lineEnding" && self2.events[index2][1].type !== "linePrefix" && self2.events[index2][1].type !== "content") {
        paragraph2 = self2.events[index2][1].type === "paragraph";
        break;
      }
    }
    if (!self2.parser.lazy[self2.now().line] && (self2.interrupt || paragraph2)) {
      effects.enter("setextHeadingLine");
      marker = code22;
      return before(code22);
    }
    return nok(code22);
  }
  function before(code22) {
    effects.enter("setextHeadingLineSequence");
    return inside(code22);
  }
  function inside(code22) {
    if (code22 === marker) {
      effects.consume(code22);
      return inside;
    }
    effects.exit("setextHeadingLineSequence");
    return markdownSpace$1(code22) ? factorySpace$1(effects, after, "lineSuffix")(code22) : after(code22);
  }
  function after(code22) {
    if (code22 === null || markdownLineEnding$1(code22)) {
      effects.exit("setextHeadingLine");
      return ok3(code22);
    }
    return nok(code22);
  }
}
var flow = {
  tokenize: initializeFlow
};
function initializeFlow(effects) {
  const self2 = this;
  const initial = effects.attempt(
    // Try to parse a blank line.
    blankLine$1,
    atBlankEnding,
    // Try to parse initial flow (essentially, only code).
    effects.attempt(
      this.parser.constructs.flowInitial,
      afterConstruct,
      factorySpace$1(
        effects,
        effects.attempt(
          this.parser.constructs.flow,
          afterConstruct,
          effects.attempt(content2, afterConstruct)
        ),
        "linePrefix"
      )
    )
  );
  return initial;
  function atBlankEnding(code22) {
    if (code22 === null) {
      effects.consume(code22);
      return;
    }
    effects.enter("lineEndingBlank");
    effects.consume(code22);
    effects.exit("lineEndingBlank");
    self2.currentConstruct = void 0;
    return initial;
  }
  function afterConstruct(code22) {
    if (code22 === null) {
      effects.consume(code22);
      return;
    }
    effects.enter("lineEnding");
    effects.consume(code22);
    effects.exit("lineEnding");
    self2.currentConstruct = void 0;
    return initial;
  }
}
var resolver = {
  resolveAll: createResolver()
};
var string = initializeFactory("string");
var text$1 = initializeFactory("text");
function initializeFactory(field) {
  return {
    tokenize: initializeText,
    resolveAll: createResolver(
      field === "text" ? resolveAllLineSuffixes : void 0
    )
  };
  function initializeText(effects) {
    const self2 = this;
    const constructs2 = this.parser.constructs[field];
    const text4 = effects.attempt(constructs2, start, notText);
    return start;
    function start(code22) {
      return atBreak(code22) ? text4(code22) : notText(code22);
    }
    function notText(code22) {
      if (code22 === null) {
        effects.consume(code22);
        return;
      }
      effects.enter("data");
      effects.consume(code22);
      return data;
    }
    function data(code22) {
      if (atBreak(code22)) {
        effects.exit("data");
        return text4(code22);
      }
      effects.consume(code22);
      return data;
    }
    function atBreak(code22) {
      if (code22 === null) {
        return true;
      }
      const list3 = constructs2[code22];
      let index2 = -1;
      if (list3) {
        while (++index2 < list3.length) {
          const item = list3[index2];
          if (!item.previous || item.previous.call(self2, self2.previous)) {
            return true;
          }
        }
      }
      return false;
    }
  }
}
function createResolver(extraResolver) {
  return resolveAllText;
  function resolveAllText(events, context) {
    let index2 = -1;
    let enter;
    while (++index2 <= events.length) {
      if (enter === void 0) {
        if (events[index2] && events[index2][1].type === "data") {
          enter = index2;
          index2++;
        }
      } else if (!events[index2] || events[index2][1].type !== "data") {
        if (index2 !== enter + 2) {
          events[enter][1].end = events[index2 - 1][1].end;
          events.splice(enter + 2, index2 - enter - 2);
          index2 = enter + 2;
        }
        enter = void 0;
      }
    }
    return extraResolver ? extraResolver(events, context) : events;
  }
}
function resolveAllLineSuffixes(events, context) {
  let eventIndex = 0;
  while (++eventIndex <= events.length) {
    if ((eventIndex === events.length || events[eventIndex][1].type === "lineEnding") && events[eventIndex - 1][1].type === "data") {
      const data = events[eventIndex - 1][1];
      const chunks = context.sliceStream(data);
      let index2 = chunks.length;
      let bufferIndex = -1;
      let size = 0;
      let tabs;
      while (index2--) {
        const chunk = chunks[index2];
        if (typeof chunk === "string") {
          bufferIndex = chunk.length;
          while (chunk.charCodeAt(bufferIndex - 1) === 32) {
            size++;
            bufferIndex--;
          }
          if (bufferIndex)
            break;
          bufferIndex = -1;
        } else if (chunk === -2) {
          tabs = true;
          size++;
        } else if (chunk === -1) ;
        else {
          index2++;
          break;
        }
      }
      if (size) {
        const token = {
          type: eventIndex === events.length || tabs || size < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            line: data.end.line,
            column: data.end.column - size,
            offset: data.end.offset - size,
            _index: data.start._index + index2,
            _bufferIndex: index2 ? bufferIndex : data.start._bufferIndex + bufferIndex
          },
          end: Object.assign({}, data.end)
        };
        data.end = Object.assign({}, token.start);
        if (data.start.offset === data.end.offset) {
          Object.assign(data, token);
        } else {
          events.splice(
            eventIndex,
            0,
            ["enter", token, context],
            ["exit", token, context]
          );
          eventIndex += 2;
        }
      }
      eventIndex++;
    }
  }
  return events;
}
function createTokenizer(parser, initialize, from) {
  let point4 = Object.assign(
    from ? Object.assign({}, from) : {
      line: 1,
      column: 1,
      offset: 0
    },
    {
      _index: 0,
      _bufferIndex: -1
    }
  );
  const columnStart = {};
  const resolveAllConstructs = [];
  let chunks = [];
  let stack = [];
  const effects = {
    consume,
    enter,
    exit: exit2,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    })
  };
  const context = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser,
    sliceStream,
    sliceSerialize,
    now,
    defineSkip,
    write
  };
  let state = initialize.tokenize.call(context, effects);
  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }
  return context;
  function write(slice) {
    chunks = push(chunks, slice);
    main();
    if (chunks[chunks.length - 1] !== null) {
      return [];
    }
    addResult(initialize, 0);
    context.events = resolveAll$1(resolveAllConstructs, context.events, context);
    return context.events;
  }
  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs);
  }
  function sliceStream(token) {
    return sliceChunks(chunks, token);
  }
  function now() {
    const { line, column, offset, _index, _bufferIndex } = point4;
    return {
      line,
      column,
      offset,
      _index,
      _bufferIndex
    };
  }
  function defineSkip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
  }
  function main() {
    let chunkIndex;
    while (point4._index < chunks.length) {
      const chunk = chunks[point4._index];
      if (typeof chunk === "string") {
        chunkIndex = point4._index;
        if (point4._bufferIndex < 0) {
          point4._bufferIndex = 0;
        }
        while (point4._index === chunkIndex && point4._bufferIndex < chunk.length) {
          go(chunk.charCodeAt(point4._bufferIndex));
        }
      } else {
        go(chunk);
      }
    }
  }
  function go(code22) {
    state = state(code22);
  }
  function consume(code22) {
    if (markdownLineEnding$1(code22)) {
      point4.line++;
      point4.column = 1;
      point4.offset += code22 === -3 ? 2 : 1;
      accountForPotentialSkip();
    } else if (code22 !== -1) {
      point4.column++;
      point4.offset++;
    }
    if (point4._bufferIndex < 0) {
      point4._index++;
    } else {
      point4._bufferIndex++;
      if (point4._bufferIndex === chunks[point4._index].length) {
        point4._bufferIndex = -1;
        point4._index++;
      }
    }
    context.previous = code22;
  }
  function enter(type, fields) {
    const token = fields || {};
    token.type = type;
    token.start = now();
    context.events.push(["enter", token, context]);
    stack.push(token);
    return token;
  }
  function exit2(type) {
    const token = stack.pop();
    token.end = now();
    context.events.push(["exit", token, context]);
    return token;
  }
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }
  function onsuccessfulcheck(_, info) {
    info.restore();
  }
  function constructFactory(onreturn, fields) {
    return hook;
    function hook(constructs2, returnState, bogusState) {
      let listOfConstructs;
      let constructIndex;
      let currentConstruct;
      let info;
      return Array.isArray(constructs2) ? handleListOfConstructs(constructs2) : "tokenize" in constructs2 ? (
        // @ts-expect-error Looks like a construct.
        handleListOfConstructs([constructs2])
      ) : handleMapOfConstructs(constructs2);
      function handleMapOfConstructs(map4) {
        return start;
        function start(code22) {
          const def = code22 !== null && map4[code22];
          const all2 = code22 !== null && map4.null;
          const list3 = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(def) ? def : def ? [def] : [],
            ...Array.isArray(all2) ? all2 : all2 ? [all2] : []
          ];
          return handleListOfConstructs(list3)(code22);
        }
      }
      function handleListOfConstructs(list3) {
        listOfConstructs = list3;
        constructIndex = 0;
        if (list3.length === 0) {
          return bogusState;
        }
        return handleConstruct(list3[constructIndex]);
      }
      function handleConstruct(construct) {
        return start;
        function start(code22) {
          info = store();
          currentConstruct = construct;
          if (!construct.partial) {
            context.currentConstruct = construct;
          }
          if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) {
            return nok();
          }
          return construct.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            fields ? Object.assign(Object.create(context), fields) : context,
            effects,
            ok3,
            nok
          )(code22);
        }
      }
      function ok3(code22) {
        onreturn(currentConstruct, info);
        return returnState;
      }
      function nok(code22) {
        info.restore();
        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex]);
        }
        return bogusState;
      }
    }
  }
  function addResult(construct, from2) {
    if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
      resolveAllConstructs.push(construct);
    }
    if (construct.resolve) {
      splice$1(
        context.events,
        from2,
        context.events.length - from2,
        construct.resolve(context.events.slice(from2), context)
      );
    }
    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
  }
  function store() {
    const startPoint = now();
    const startPrevious = context.previous;
    const startCurrentConstruct = context.currentConstruct;
    const startEventsIndex = context.events.length;
    const startStack = Array.from(stack);
    return {
      restore,
      from: startEventsIndex
    };
    function restore() {
      point4 = startPoint;
      context.previous = startPrevious;
      context.currentConstruct = startCurrentConstruct;
      context.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
    }
  }
  function accountForPotentialSkip() {
    if (point4.line in columnStart && point4.column < 2) {
      point4.column = columnStart[point4.line];
      point4.offset += columnStart[point4.line] - 1;
    }
  }
}
function sliceChunks(chunks, token) {
  const startIndex = token.start._index;
  const startBufferIndex = token.start._bufferIndex;
  const endIndex = token.end._index;
  const endBufferIndex = token.end._bufferIndex;
  let view;
  if (startIndex === endIndex) {
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);
    if (startBufferIndex > -1) {
      const head = view[0];
      if (typeof head === "string") {
        view[0] = head.slice(startBufferIndex);
      } else {
        view.shift();
      }
    }
    if (endBufferIndex > 0) {
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }
  return view;
}
function serializeChunks(chunks, expandTabs) {
  let index2 = -1;
  const result = [];
  let atTab;
  while (++index2 < chunks.length) {
    const chunk = chunks[index2];
    let value;
    if (typeof chunk === "string") {
      value = chunk;
    } else
      switch (chunk) {
        case -5: {
          value = "\r";
          break;
        }
        case -4: {
          value = "\n";
          break;
        }
        case -3: {
          value = "\r\n";
          break;
        }
        case -2: {
          value = expandTabs ? " " : "	";
          break;
        }
        case -1: {
          if (!expandTabs && atTab)
            continue;
          value = " ";
          break;
        }
        default: {
          value = String.fromCharCode(chunk);
        }
      }
    atTab = chunk === -2;
    result.push(value);
  }
  return result.join("");
}
var constructs_exports = {};
__export(constructs_exports, {
  attentionMarkers: () => attentionMarkers,
  contentInitial: () => contentInitial,
  disable: () => disable,
  document: () => document2,
  flow: () => flow2,
  flowInitial: () => flowInitial,
  insideSpan: () => insideSpan,
  string: () => string2,
  text: () => text2$1
});
var document2 = {
  [42]: list$1,
  [43]: list$1,
  [45]: list$1,
  [48]: list$1,
  [49]: list$1,
  [50]: list$1,
  [51]: list$1,
  [52]: list$1,
  [53]: list$1,
  [54]: list$1,
  [55]: list$1,
  [56]: list$1,
  [57]: list$1,
  [62]: blockQuote
};
var contentInitial = {
  [91]: definition$1
};
var flowInitial = {
  [-2]: codeIndented,
  [-1]: codeIndented,
  [32]: codeIndented
};
var flow2 = {
  [35]: headingAtx,
  [42]: thematicBreak$1,
  [45]: [setextUnderline, thematicBreak$1],
  [60]: htmlFlow,
  [61]: setextUnderline,
  [95]: thematicBreak$1,
  [96]: codeFenced,
  [126]: codeFenced
};
var string2 = {
  [38]: characterReference,
  [92]: characterEscape
};
var text2$1 = {
  [-5]: lineEnding,
  [-4]: lineEnding,
  [-3]: lineEnding,
  [33]: labelStartImage,
  [38]: characterReference,
  [42]: attention,
  [60]: [autolink, htmlText],
  [91]: labelStartLink,
  [92]: [hardBreakEscape, characterEscape],
  [93]: labelEnd,
  [95]: attention,
  [96]: codeText
};
var insideSpan = {
  null: [attention, resolver]
};
var attentionMarkers = {
  null: [42, 95]
};
var disable = {
  null: []
};
function parse(options) {
  const settings = options || {};
  const constructs2 = (
    /** @type {FullNormalizedExtension} */
    combineExtensions$1([constructs_exports, ...settings.extensions || []])
  );
  const parser = {
    defined: [],
    lazy: {},
    constructs: constructs2,
    content: create(content),
    document: create(document),
    flow: create(flow),
    string: create(string),
    text: create(text$1)
  };
  return parser;
  function create(initial) {
    return creator;
    function creator(from) {
      return createTokenizer(parser, initial, from);
    }
  }
}
function postprocess(events) {
  while (!subtokenize(events)) {
  }
  return events;
}
var search = /[\0\t\n\r]/g;
function preprocess() {
  let column = 1;
  let buffer = "";
  let start = true;
  let atCarriageReturn;
  return preprocessor;
  function preprocessor(value, encoding, end) {
    const chunks = [];
    let match;
    let next;
    let startPosition;
    let endPosition;
    let code22;
    value = buffer + (typeof value === "string" ? value.toString() : new TextDecoder(encoding || void 0).decode(value));
    startPosition = 0;
    buffer = "";
    if (start) {
      if (value.charCodeAt(0) === 65279) {
        startPosition++;
      }
      start = void 0;
    }
    while (startPosition < value.length) {
      search.lastIndex = startPosition;
      match = search.exec(value);
      endPosition = match && match.index !== void 0 ? match.index : value.length;
      code22 = value.charCodeAt(endPosition);
      if (!match) {
        buffer = value.slice(startPosition);
        break;
      }
      if (code22 === 10 && startPosition === endPosition && atCarriageReturn) {
        chunks.push(-3);
        atCarriageReturn = void 0;
      } else {
        if (atCarriageReturn) {
          chunks.push(-5);
          atCarriageReturn = void 0;
        }
        if (startPosition < endPosition) {
          chunks.push(value.slice(startPosition, endPosition));
          column += endPosition - startPosition;
        }
        switch (code22) {
          case 0: {
            chunks.push(65533);
            column++;
            break;
          }
          case 9: {
            next = Math.ceil(column / 4) * 4;
            chunks.push(-2);
            while (column++ < next)
              chunks.push(-1);
            break;
          }
          case 10: {
            chunks.push(-4);
            column = 1;
            break;
          }
          default: {
            atCarriageReturn = true;
            column = 1;
          }
        }
      }
      startPosition = endPosition + 1;
    }
    if (end) {
      if (atCarriageReturn)
        chunks.push(-5);
      if (buffer)
        chunks.push(buffer);
      chunks.push(null);
    }
    return chunks;
  }
}
function decodeNumericCharacterReference2(value, base) {
  const code22 = Number.parseInt(value, base);
  if (
    // C0 except for HT, LF, FF, CR, space.
    code22 < 9 || code22 === 11 || code22 > 13 && code22 < 32 || // Control character (DEL) of C0, and C1 controls.
    code22 > 126 && code22 < 160 || // Lone high surrogates and low surrogates.
    code22 > 55295 && code22 < 57344 || // Noncharacters.
    code22 > 64975 && code22 < 65008 || /* eslint-disable no-bitwise */
    (code22 & 65535) === 65535 || (code22 & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    code22 > 1114111
  ) {
    return "�";
  }
  return String.fromCodePoint(code22);
}
var characterEscapeOrReference = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function decodeString(value) {
  return value.replace(characterEscapeOrReference, decode);
}
function decode($0, $1, $2) {
  if ($1) {
    return $1;
  }
  const head = $2.charCodeAt(0);
  if (head === 35) {
    const head2 = $2.charCodeAt(1);
    const hex = head2 === 120 || head2 === 88;
    return decodeNumericCharacterReference2($2.slice(hex ? 2 : 1), hex ? 16 : 10);
  }
  return decodeNamedCharacterReference($2) || $0;
}
function stringifyPosition(value) {
  if (!value || typeof value !== "object") {
    return "";
  }
  if ("position" in value || "type" in value) {
    return position(value.position);
  }
  if ("start" in value || "end" in value) {
    return position(value);
  }
  if ("line" in value || "column" in value) {
    return point(value);
  }
  return "";
}
function point(point4) {
  return index(point4 && point4.line) + ":" + index(point4 && point4.column);
}
function position(pos) {
  return point(pos && pos.start) + "-" + point(pos && pos.end);
}
function index(value) {
  return value && typeof value === "number" ? value : 1;
}
var own2 = {}.hasOwnProperty;
function fromMarkdown(value, encoding, options) {
  if (typeof encoding !== "string") {
    options = encoding;
    encoding = void 0;
  }
  return compiler(options)(
    postprocess(
      parse(options).document().write(preprocess()(value, encoding, true))
    )
  );
}
function compiler(options) {
  const config = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: opener(link2),
      autolinkProtocol: onenterdata,
      autolinkEmail: onenterdata,
      atxHeading: opener(heading2),
      blockQuote: opener(blockQuote2),
      characterEscape: onenterdata,
      characterReference: onenterdata,
      codeFenced: opener(codeFlow),
      codeFencedFenceInfo: buffer,
      codeFencedFenceMeta: buffer,
      codeIndented: opener(codeFlow, buffer),
      codeText: opener(codeText2, buffer),
      codeTextData: onenterdata,
      data: onenterdata,
      codeFlowValue: onenterdata,
      definition: opener(definition2),
      definitionDestinationString: buffer,
      definitionLabelString: buffer,
      definitionTitleString: buffer,
      emphasis: opener(emphasis2),
      hardBreakEscape: opener(hardBreak2),
      hardBreakTrailing: opener(hardBreak2),
      htmlFlow: opener(html2, buffer),
      htmlFlowData: onenterdata,
      htmlText: opener(html2, buffer),
      htmlTextData: onenterdata,
      image: opener(image2),
      label: buffer,
      link: opener(link2),
      listItem: opener(listItem2),
      listItemValue: onenterlistitemvalue,
      listOrdered: opener(list3, onenterlistordered),
      listUnordered: opener(list3),
      paragraph: opener(paragraph2),
      reference: onenterreference,
      referenceString: buffer,
      resourceDestinationString: buffer,
      resourceTitleString: buffer,
      setextHeading: opener(heading2),
      strong: opener(strong2),
      thematicBreak: opener(thematicBreak3)
    },
    exit: {
      atxHeading: closer(),
      atxHeadingSequence: onexitatxheadingsequence,
      autolink: closer(),
      autolinkEmail: onexitautolinkemail,
      autolinkProtocol: onexitautolinkprotocol,
      blockQuote: closer(),
      characterEscapeValue: onexitdata,
      characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
      characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
      characterReferenceValue: onexitcharacterreferencevalue,
      codeFenced: closer(onexitcodefenced),
      codeFencedFence: onexitcodefencedfence,
      codeFencedFenceInfo: onexitcodefencedfenceinfo,
      codeFencedFenceMeta: onexitcodefencedfencemeta,
      codeFlowValue: onexitdata,
      codeIndented: closer(onexitcodeindented),
      codeText: closer(onexitcodetext),
      codeTextData: onexitdata,
      data: onexitdata,
      definition: closer(),
      definitionDestinationString: onexitdefinitiondestinationstring,
      definitionLabelString: onexitdefinitionlabelstring,
      definitionTitleString: onexitdefinitiontitlestring,
      emphasis: closer(),
      hardBreakEscape: closer(onexithardbreak),
      hardBreakTrailing: closer(onexithardbreak),
      htmlFlow: closer(onexithtmlflow),
      htmlFlowData: onexitdata,
      htmlText: closer(onexithtmltext),
      htmlTextData: onexitdata,
      image: closer(onexitimage),
      label: onexitlabel,
      labelText: onexitlabeltext,
      lineEnding: onexitlineending,
      link: closer(onexitlink),
      listItem: closer(),
      listOrdered: closer(),
      listUnordered: closer(),
      paragraph: closer(),
      referenceString: onexitreferencestring,
      resourceDestinationString: onexitresourcedestinationstring,
      resourceTitleString: onexitresourcetitlestring,
      resource: onexitresource,
      setextHeading: closer(onexitsetextheading),
      setextHeadingLineSequence: onexitsetextheadinglinesequence,
      setextHeadingText: onexitsetextheadingtext,
      strong: closer(),
      thematicBreak: closer()
    }
  };
  configure(config, (options || {}).mdastExtensions || []);
  const data = {};
  return compile;
  function compile(events) {
    let tree = {
      type: "root",
      children: []
    };
    const context = {
      stack: [tree],
      tokenStack: [],
      config,
      enter,
      exit: exit2,
      buffer,
      resume,
      data
    };
    const listStack = [];
    let index2 = -1;
    while (++index2 < events.length) {
      if (events[index2][1].type === "listOrdered" || events[index2][1].type === "listUnordered") {
        if (events[index2][0] === "enter") {
          listStack.push(index2);
        } else {
          const tail = listStack.pop();
          index2 = prepareList(events, tail, index2);
        }
      }
    }
    index2 = -1;
    while (++index2 < events.length) {
      const handler = config[events[index2][0]];
      if (own2.call(handler, events[index2][1].type)) {
        handler[events[index2][1].type].call(
          Object.assign(
            {
              sliceSerialize: events[index2][2].sliceSerialize
            },
            context
          ),
          events[index2][1]
        );
      }
    }
    if (context.tokenStack.length > 0) {
      const tail = context.tokenStack[context.tokenStack.length - 1];
      const handler = tail[1] || defaultOnError;
      handler.call(context, void 0, tail[0]);
    }
    tree.position = {
      start: point2(
        events.length > 0 ? events[0][1].start : {
          line: 1,
          column: 1,
          offset: 0
        }
      ),
      end: point2(
        events.length > 0 ? events[events.length - 2][1].end : {
          line: 1,
          column: 1,
          offset: 0
        }
      )
    };
    index2 = -1;
    while (++index2 < config.transforms.length) {
      tree = config.transforms[index2](tree) || tree;
    }
    return tree;
  }
  function prepareList(events, start, length) {
    let index2 = start - 1;
    let containerBalance = -1;
    let listSpread = false;
    let listItem3;
    let lineIndex;
    let firstBlankLineIndex;
    let atMarker;
    while (++index2 <= length) {
      const event = events[index2];
      switch (event[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          if (event[0] === "enter") {
            containerBalance++;
          } else {
            containerBalance--;
          }
          atMarker = void 0;
          break;
        }
        case "lineEndingBlank": {
          if (event[0] === "enter") {
            if (listItem3 && !atMarker && !containerBalance && !firstBlankLineIndex) {
              firstBlankLineIndex = index2;
            }
            atMarker = void 0;
          }
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace": {
          break;
        }
        default: {
          atMarker = void 0;
        }
      }
      if (!containerBalance && event[0] === "enter" && event[1].type === "listItemPrefix" || containerBalance === -1 && event[0] === "exit" && (event[1].type === "listUnordered" || event[1].type === "listOrdered")) {
        if (listItem3) {
          let tailIndex = index2;
          lineIndex = void 0;
          while (tailIndex--) {
            const tailEvent = events[tailIndex];
            if (tailEvent[1].type === "lineEnding" || tailEvent[1].type === "lineEndingBlank") {
              if (tailEvent[0] === "exit")
                continue;
              if (lineIndex) {
                events[lineIndex][1].type = "lineEndingBlank";
                listSpread = true;
              }
              tailEvent[1].type = "lineEnding";
              lineIndex = tailIndex;
            } else if (tailEvent[1].type === "linePrefix" || tailEvent[1].type === "blockQuotePrefix" || tailEvent[1].type === "blockQuotePrefixWhitespace" || tailEvent[1].type === "blockQuoteMarker" || tailEvent[1].type === "listItemIndent") ;
            else {
              break;
            }
          }
          if (firstBlankLineIndex && (!lineIndex || firstBlankLineIndex < lineIndex)) {
            listItem3._spread = true;
          }
          listItem3.end = Object.assign(
            {},
            lineIndex ? events[lineIndex][1].start : event[1].end
          );
          events.splice(lineIndex || index2, 0, ["exit", listItem3, event[2]]);
          index2++;
          length++;
        }
        if (event[1].type === "listItemPrefix") {
          const item = {
            type: "listItem",
            _spread: false,
            start: Object.assign({}, event[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          listItem3 = item;
          events.splice(index2, 0, ["enter", item, event[2]]);
          index2++;
          length++;
          firstBlankLineIndex = void 0;
          atMarker = true;
        }
      }
    }
    events[start][1]._spread = listSpread;
    return length;
  }
  function opener(create, and) {
    return open;
    function open(token) {
      enter.call(this, create(token), token);
      if (and)
        and.call(this, token);
    }
  }
  function buffer() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function enter(node2, token, errorHandler) {
    const parent = this.stack[this.stack.length - 1];
    const siblings = parent.children;
    siblings.push(node2);
    this.stack.push(node2);
    this.tokenStack.push([token, errorHandler]);
    node2.position = {
      start: point2(token.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function closer(and) {
    return close;
    function close(token) {
      if (and)
        and.call(this, token);
      exit2.call(this, token);
    }
  }
  function exit2(token, onExitError) {
    const node2 = this.stack.pop();
    const open = this.tokenStack.pop();
    if (!open) {
      throw new Error(
        "Cannot close `" + token.type + "` (" + stringifyPosition({
          start: token.start,
          end: token.end
        }) + "): it’s not open"
      );
    } else if (open[0].type !== token.type) {
      if (onExitError) {
        onExitError.call(this, token, open[0]);
      } else {
        const handler = open[1] || defaultOnError;
        handler.call(this, token, open[0]);
      }
    }
    node2.position.end = point2(token.end);
  }
  function resume() {
    return toString$1(this.stack.pop());
  }
  function onenterlistordered() {
    this.data.expectingFirstListItemValue = true;
  }
  function onenterlistitemvalue(token) {
    if (this.data.expectingFirstListItemValue) {
      const ancestor = this.stack[this.stack.length - 2];
      ancestor.start = Number.parseInt(this.sliceSerialize(token), 10);
      this.data.expectingFirstListItemValue = void 0;
    }
  }
  function onexitcodefencedfenceinfo() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.lang = data2;
  }
  function onexitcodefencedfencemeta() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.meta = data2;
  }
  function onexitcodefencedfence() {
    if (this.data.flowCodeInside)
      return;
    this.buffer();
    this.data.flowCodeInside = true;
  }
  function onexitcodefenced() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.value = data2.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
    this.data.flowCodeInside = void 0;
  }
  function onexitcodeindented() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.value = data2.replace(/(\r?\n|\r)$/g, "");
  }
  function onexitdefinitionlabelstring(token) {
    const label = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.label = label;
    node2.identifier = normalizeIdentifier$1(
      this.sliceSerialize(token)
    ).toLowerCase();
  }
  function onexitdefinitiontitlestring() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.title = data2;
  }
  function onexitdefinitiondestinationstring() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.url = data2;
  }
  function onexitatxheadingsequence(token) {
    const node2 = this.stack[this.stack.length - 1];
    if (!node2.depth) {
      const depth = this.sliceSerialize(token).length;
      node2.depth = depth;
    }
  }
  function onexitsetextheadingtext() {
    this.data.setextHeadingSlurpLineEnding = true;
  }
  function onexitsetextheadinglinesequence(token) {
    const node2 = this.stack[this.stack.length - 1];
    node2.depth = this.sliceSerialize(token).codePointAt(0) === 61 ? 1 : 2;
  }
  function onexitsetextheading() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function onenterdata(token) {
    const node2 = this.stack[this.stack.length - 1];
    const siblings = node2.children;
    let tail = siblings[siblings.length - 1];
    if (!tail || tail.type !== "text") {
      tail = text4();
      tail.position = {
        start: point2(token.start),
        // @ts-expect-error: we’ll add `end` later.
        end: void 0
      };
      siblings.push(tail);
    }
    this.stack.push(tail);
  }
  function onexitdata(token) {
    const tail = this.stack.pop();
    tail.value += this.sliceSerialize(token);
    tail.position.end = point2(token.end);
  }
  function onexitlineending(token) {
    const context = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const tail = context.children[context.children.length - 1];
      tail.position.end = point2(token.end);
      this.data.atHardBreak = void 0;
      return;
    }
    if (!this.data.setextHeadingSlurpLineEnding && config.canContainEols.includes(context.type)) {
      onenterdata.call(this, token);
      onexitdata.call(this, token);
    }
  }
  function onexithardbreak() {
    this.data.atHardBreak = true;
  }
  function onexithtmlflow() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.value = data2;
  }
  function onexithtmltext() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.value = data2;
  }
  function onexitcodetext() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.value = data2;
  }
  function onexitlink() {
    const node2 = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const referenceType = this.data.referenceType || "shortcut";
      node2.type += "Reference";
      node2.referenceType = referenceType;
      delete node2.url;
      delete node2.title;
    } else {
      delete node2.identifier;
      delete node2.label;
    }
    this.data.referenceType = void 0;
  }
  function onexitimage() {
    const node2 = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const referenceType = this.data.referenceType || "shortcut";
      node2.type += "Reference";
      node2.referenceType = referenceType;
      delete node2.url;
      delete node2.title;
    } else {
      delete node2.identifier;
      delete node2.label;
    }
    this.data.referenceType = void 0;
  }
  function onexitlabeltext(token) {
    const string3 = this.sliceSerialize(token);
    const ancestor = this.stack[this.stack.length - 2];
    ancestor.label = decodeString(string3);
    ancestor.identifier = normalizeIdentifier$1(string3).toLowerCase();
  }
  function onexitlabel() {
    const fragment = this.stack[this.stack.length - 1];
    const value = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    this.data.inReference = true;
    if (node2.type === "link") {
      const children = fragment.children;
      node2.children = children;
    } else {
      node2.alt = value;
    }
  }
  function onexitresourcedestinationstring() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.url = data2;
  }
  function onexitresourcetitlestring() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.title = data2;
  }
  function onexitresource() {
    this.data.inReference = void 0;
  }
  function onenterreference() {
    this.data.referenceType = "collapsed";
  }
  function onexitreferencestring(token) {
    const label = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.label = label;
    node2.identifier = normalizeIdentifier$1(
      this.sliceSerialize(token)
    ).toLowerCase();
    this.data.referenceType = "full";
  }
  function onexitcharacterreferencemarker(token) {
    this.data.characterReferenceType = token.type;
  }
  function onexitcharacterreferencevalue(token) {
    const data2 = this.sliceSerialize(token);
    const type = this.data.characterReferenceType;
    let value;
    if (type) {
      value = decodeNumericCharacterReference(
        data2,
        type === "characterReferenceMarkerNumeric" ? 10 : 16
      );
      this.data.characterReferenceType = void 0;
    } else {
      const result = decodeNamedCharacterReference(data2);
      value = result;
    }
    const tail = this.stack.pop();
    tail.value += value;
    tail.position.end = point2(token.end);
  }
  function onexitautolinkprotocol(token) {
    onexitdata.call(this, token);
    const node2 = this.stack[this.stack.length - 1];
    node2.url = this.sliceSerialize(token);
  }
  function onexitautolinkemail(token) {
    onexitdata.call(this, token);
    const node2 = this.stack[this.stack.length - 1];
    node2.url = "mailto:" + this.sliceSerialize(token);
  }
  function blockQuote2() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function codeFlow() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function codeText2() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function definition2() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function emphasis2() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function heading2() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function hardBreak2() {
    return {
      type: "break"
    };
  }
  function html2() {
    return {
      type: "html",
      value: ""
    };
  }
  function image2() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function link2() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function list3(token) {
    return {
      type: "list",
      ordered: token.type === "listOrdered",
      start: null,
      spread: token._spread,
      children: []
    };
  }
  function listItem2(token) {
    return {
      type: "listItem",
      spread: token._spread,
      checked: null,
      children: []
    };
  }
  function paragraph2() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function strong2() {
    return {
      type: "strong",
      children: []
    };
  }
  function text4() {
    return {
      type: "text",
      value: ""
    };
  }
  function thematicBreak3() {
    return {
      type: "thematicBreak"
    };
  }
}
function point2(d) {
  return {
    line: d.line,
    column: d.column,
    offset: d.offset
  };
}
function configure(combined, extensions) {
  let index2 = -1;
  while (++index2 < extensions.length) {
    const value = extensions[index2];
    if (Array.isArray(value)) {
      configure(combined, value);
    } else {
      extension(combined, value);
    }
  }
}
function extension(combined, extension2) {
  let key;
  for (key in extension2) {
    if (own2.call(extension2, key)) {
      switch (key) {
        case "canContainEols": {
          const right = extension2[key];
          if (right) {
            combined[key].push(...right);
          }
          break;
        }
        case "transforms": {
          const right = extension2[key];
          if (right) {
            combined[key].push(...right);
          }
          break;
        }
        case "enter":
        case "exit": {
          const right = extension2[key];
          if (right) {
            Object.assign(combined[key], right);
          }
          break;
        }
      }
    }
  }
}
function defaultOnError(left, right) {
  if (left) {
    throw new Error(
      "Cannot close `" + left.type + "` (" + stringifyPosition({
        start: left.start,
        end: left.end
      }) + "): a different token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is open"
    );
  } else {
    throw new Error(
      "Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is still open"
    );
  }
}
function remarkParse(options) {
  const self2 = this;
  self2.parser = parser;
  function parser(doc) {
    return fromMarkdown(doc, {
      ...self2.data("settings"),
      ...options,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: self2.data("micromarkExtensions") || [],
      mdastExtensions: self2.data("fromMarkdownExtensions") || []
    });
  }
}
function blockquote$1(state, node2) {
  const result = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: state.wrap(state.all(node2), true)
  };
  state.patch(node2, result);
  return state.applyData(node2, result);
}
function hardBreak$1(state, node2) {
  const result = { type: "element", tagName: "br", properties: {}, children: [] };
  state.patch(node2, result);
  return [state.applyData(node2, result), { type: "text", value: "\n" }];
}
function code$1(state, node2) {
  const value = node2.value ? node2.value + "\n" : "";
  const properties = {};
  if (node2.lang) {
    properties.className = ["language-" + node2.lang];
  }
  let result = {
    type: "element",
    tagName: "code",
    properties,
    children: [{ type: "text", value }]
  };
  if (node2.meta) {
    result.data = { meta: node2.meta };
  }
  state.patch(node2, result);
  result = state.applyData(node2, result);
  result = { type: "element", tagName: "pre", properties: {}, children: [result] };
  state.patch(node2, result);
  return result;
}
function strikethrough(state, node2) {
  const result = {
    type: "element",
    tagName: "del",
    properties: {},
    children: state.all(node2)
  };
  state.patch(node2, result);
  return state.applyData(node2, result);
}
function emphasis$1(state, node2) {
  const result = {
    type: "element",
    tagName: "em",
    properties: {},
    children: state.all(node2)
  };
  state.patch(node2, result);
  return state.applyData(node2, result);
}
function footnoteReference$1(state, node2) {
  const clobberPrefix = typeof state.options.clobberPrefix === "string" ? state.options.clobberPrefix : "user-content-";
  const id = String(node2.identifier).toUpperCase();
  const safeId = normalizeUri(id.toLowerCase());
  const index2 = state.footnoteOrder.indexOf(id);
  let counter;
  let reuseCounter = state.footnoteCounts.get(id);
  if (reuseCounter === void 0) {
    reuseCounter = 0;
    state.footnoteOrder.push(id);
    counter = state.footnoteOrder.length;
  } else {
    counter = index2 + 1;
  }
  reuseCounter += 1;
  state.footnoteCounts.set(id, reuseCounter);
  const link2 = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + clobberPrefix + "fn-" + safeId,
      id: clobberPrefix + "fnref-" + safeId + (reuseCounter > 1 ? "-" + reuseCounter : ""),
      dataFootnoteRef: true,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(counter) }]
  };
  state.patch(node2, link2);
  const sup = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [link2]
  };
  state.patch(node2, sup);
  return state.applyData(node2, sup);
}
function heading$1(state, node2) {
  const result = {
    type: "element",
    tagName: "h" + node2.depth,
    properties: {},
    children: state.all(node2)
  };
  state.patch(node2, result);
  return state.applyData(node2, result);
}
function html$1(state, node2) {
  if (state.options.allowDangerousHtml) {
    const result = { type: "raw", value: node2.value };
    state.patch(node2, result);
    return state.applyData(node2, result);
  }
  return void 0;
}
function revert(state, node2) {
  const subtype = node2.referenceType;
  let suffix = "]";
  if (subtype === "collapsed") {
    suffix += "[]";
  } else if (subtype === "full") {
    suffix += "[" + (node2.label || node2.identifier) + "]";
  }
  if (node2.type === "imageReference") {
    return [{ type: "text", value: "![" + node2.alt + suffix }];
  }
  const contents = state.all(node2);
  const head = contents[0];
  if (head && head.type === "text") {
    head.value = "[" + head.value;
  } else {
    contents.unshift({ type: "text", value: "[" });
  }
  const tail = contents[contents.length - 1];
  if (tail && tail.type === "text") {
    tail.value += suffix;
  } else {
    contents.push({ type: "text", value: suffix });
  }
  return contents;
}
function imageReference$1(state, node2) {
  const id = String(node2.identifier).toUpperCase();
  const def = state.definitionById.get(id);
  if (!def) {
    return revert(state, node2);
  }
  const properties = { src: normalizeUri(def.url || ""), alt: node2.alt };
  if (def.title !== null && def.title !== void 0) {
    properties.title = def.title;
  }
  const result = { type: "element", tagName: "img", properties, children: [] };
  state.patch(node2, result);
  return state.applyData(node2, result);
}
function image$1(state, node2) {
  const properties = { src: normalizeUri(node2.url) };
  if (node2.alt !== null && node2.alt !== void 0) {
    properties.alt = node2.alt;
  }
  if (node2.title !== null && node2.title !== void 0) {
    properties.title = node2.title;
  }
  const result = { type: "element", tagName: "img", properties, children: [] };
  state.patch(node2, result);
  return state.applyData(node2, result);
}
function inlineCode$1(state, node2) {
  const text4 = { type: "text", value: node2.value.replace(/\r?\n|\r/g, " ") };
  state.patch(node2, text4);
  const result = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [text4]
  };
  state.patch(node2, result);
  return state.applyData(node2, result);
}
function linkReference$1(state, node2) {
  const id = String(node2.identifier).toUpperCase();
  const def = state.definitionById.get(id);
  if (!def) {
    return revert(state, node2);
  }
  const properties = { href: normalizeUri(def.url || "") };
  if (def.title !== null && def.title !== void 0) {
    properties.title = def.title;
  }
  const result = {
    type: "element",
    tagName: "a",
    properties,
    children: state.all(node2)
  };
  state.patch(node2, result);
  return state.applyData(node2, result);
}
function link$1(state, node2) {
  const properties = { href: normalizeUri(node2.url) };
  if (node2.title !== null && node2.title !== void 0) {
    properties.title = node2.title;
  }
  const result = {
    type: "element",
    tagName: "a",
    properties,
    children: state.all(node2)
  };
  state.patch(node2, result);
  return state.applyData(node2, result);
}
function listItem$1(state, node2, parent) {
  const results = state.all(node2);
  const loose = parent ? listLoose(parent) : listItemLoose(node2);
  const properties = {};
  const children = [];
  if (typeof node2.checked === "boolean") {
    const head = results[0];
    let paragraph2;
    if (head && head.type === "element" && head.tagName === "p") {
      paragraph2 = head;
    } else {
      paragraph2 = { type: "element", tagName: "p", properties: {}, children: [] };
      results.unshift(paragraph2);
    }
    if (paragraph2.children.length > 0) {
      paragraph2.children.unshift({ type: "text", value: " " });
    }
    paragraph2.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: node2.checked, disabled: true },
      children: []
    });
    properties.className = ["task-list-item"];
  }
  let index2 = -1;
  while (++index2 < results.length) {
    const child = results[index2];
    if (loose || index2 !== 0 || child.type !== "element" || child.tagName !== "p") {
      children.push({ type: "text", value: "\n" });
    }
    if (child.type === "element" && child.tagName === "p" && !loose) {
      children.push(...child.children);
    } else {
      children.push(child);
    }
  }
  const tail = results[results.length - 1];
  if (tail && (loose || tail.type !== "element" || tail.tagName !== "p")) {
    children.push({ type: "text", value: "\n" });
  }
  const result = { type: "element", tagName: "li", properties, children };
  state.patch(node2, result);
  return state.applyData(node2, result);
}
function listLoose(node2) {
  let loose = false;
  if (node2.type === "list") {
    loose = node2.spread || false;
    const children = node2.children;
    let index2 = -1;
    while (!loose && ++index2 < children.length) {
      loose = listItemLoose(children[index2]);
    }
  }
  return loose;
}
function listItemLoose(node2) {
  const spread = node2.spread;
  return spread === null || spread === void 0 ? node2.children.length > 1 : spread;
}
function list2(state, node2) {
  const properties = {};
  const results = state.all(node2);
  let index2 = -1;
  if (typeof node2.start === "number" && node2.start !== 1) {
    properties.start = node2.start;
  }
  while (++index2 < results.length) {
    const child = results[index2];
    if (child.type === "element" && child.tagName === "li" && child.properties && Array.isArray(child.properties.className) && child.properties.className.includes("task-list-item")) {
      properties.className = ["contains-task-list"];
      break;
    }
  }
  const result = {
    type: "element",
    tagName: node2.ordered ? "ol" : "ul",
    properties,
    children: state.wrap(results, true)
  };
  state.patch(node2, result);
  return state.applyData(node2, result);
}
function paragraph$1(state, node2) {
  const result = {
    type: "element",
    tagName: "p",
    properties: {},
    children: state.all(node2)
  };
  state.patch(node2, result);
  return state.applyData(node2, result);
}
function root$1(state, node2) {
  const result = { type: "root", children: state.wrap(state.all(node2)) };
  state.patch(node2, result);
  return state.applyData(node2, result);
}
function strong$1(state, node2) {
  const result = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: state.all(node2)
  };
  state.patch(node2, result);
  return state.applyData(node2, result);
}
var pointEnd = point3("end");
var pointStart = point3("start");
function point3(type) {
  return point4;
  function point4(node2) {
    const point5 = node2 && node2.position && node2.position[type] || {};
    if (typeof point5.line === "number" && point5.line > 0 && typeof point5.column === "number" && point5.column > 0) {
      return {
        line: point5.line,
        column: point5.column,
        offset: typeof point5.offset === "number" && point5.offset > -1 ? point5.offset : void 0
      };
    }
  }
}
function position2(node2) {
  const start = pointStart(node2);
  const end = pointEnd(node2);
  if (start && end) {
    return { start, end };
  }
}
function table(state, node2) {
  const rows = state.all(node2);
  const firstRow = rows.shift();
  const tableContent = [];
  if (firstRow) {
    const head = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: state.wrap([firstRow], true)
    };
    state.patch(node2.children[0], head);
    tableContent.push(head);
  }
  if (rows.length > 0) {
    const body = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: state.wrap(rows, true)
    };
    const start = pointStart(node2.children[1]);
    const end = pointEnd(node2.children[node2.children.length - 1]);
    if (start && end)
      body.position = { start, end };
    tableContent.push(body);
  }
  const result = {
    type: "element",
    tagName: "table",
    properties: {},
    children: state.wrap(tableContent, true)
  };
  state.patch(node2, result);
  return state.applyData(node2, result);
}
function tableRow(state, node2, parent) {
  const siblings = parent ? parent.children : void 0;
  const rowIndex = siblings ? siblings.indexOf(node2) : 1;
  const tagName = rowIndex === 0 ? "th" : "td";
  const align = parent && parent.type === "table" ? parent.align : void 0;
  const length = align ? align.length : node2.children.length;
  let cellIndex = -1;
  const cells = [];
  while (++cellIndex < length) {
    const cell = node2.children[cellIndex];
    const properties = {};
    const alignValue = align ? align[cellIndex] : void 0;
    if (alignValue) {
      properties.align = alignValue;
    }
    let result2 = { type: "element", tagName, properties, children: [] };
    if (cell) {
      result2.children = state.all(cell);
      state.patch(cell, result2);
      result2 = state.applyData(cell, result2);
    }
    cells.push(result2);
  }
  const result = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: state.wrap(cells, true)
  };
  state.patch(node2, result);
  return state.applyData(node2, result);
}
function tableCell(state, node2) {
  const result = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: state.all(node2)
  };
  state.patch(node2, result);
  return state.applyData(node2, result);
}
var tab = 9;
var space = 32;
function trimLines(value) {
  const source = String(value);
  const search2 = /\r?\n|\r/g;
  let match = search2.exec(source);
  let last = 0;
  const lines = [];
  while (match) {
    lines.push(
      trimLine(source.slice(last, match.index), last > 0, true),
      match[0]
    );
    last = match.index + match[0].length;
    match = search2.exec(source);
  }
  lines.push(trimLine(source.slice(last), last > 0, false));
  return lines.join("");
}
function trimLine(value, start, end) {
  let startIndex = 0;
  let endIndex = value.length;
  if (start) {
    let code22 = value.codePointAt(startIndex);
    while (code22 === tab || code22 === space) {
      startIndex++;
      code22 = value.codePointAt(startIndex);
    }
  }
  if (end) {
    let code22 = value.codePointAt(endIndex - 1);
    while (code22 === tab || code22 === space) {
      endIndex--;
      code22 = value.codePointAt(endIndex - 1);
    }
  }
  return endIndex > startIndex ? value.slice(startIndex, endIndex) : "";
}
function text3(state, node2) {
  const result = { type: "text", value: trimLines(String(node2.value)) };
  state.patch(node2, result);
  return state.applyData(node2, result);
}
function thematicBreak2(state, node2) {
  const result = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  state.patch(node2, result);
  return state.applyData(node2, result);
}
var handlers = {
  blockquote: blockquote$1,
  break: hardBreak$1,
  code: code$1,
  delete: strikethrough,
  emphasis: emphasis$1,
  footnoteReference: footnoteReference$1,
  heading: heading$1,
  html: html$1,
  imageReference: imageReference$1,
  image: image$1,
  inlineCode: inlineCode$1,
  linkReference: linkReference$1,
  link: link$1,
  listItem: listItem$1,
  list: list2,
  paragraph: paragraph$1,
  // @ts-expect-error: root is different, but hard to type.
  root: root$1,
  strong: strong$1,
  table,
  tableCell,
  tableRow,
  text: text3,
  thematicBreak: thematicBreak2,
  toml: ignore,
  yaml: ignore,
  definition: ignore,
  footnoteDefinition: ignore
};
function ignore() {
  return void 0;
}
var VOID = -1;
var PRIMITIVE = 0;
var ARRAY = 1;
var OBJECT = 2;
var DATE = 3;
var REGEXP = 4;
var MAP = 5;
var SET = 6;
var ERROR = 7;
var BIGINT = 8;
var env = typeof self === "object" ? self : globalThis;
var deserializer = ($, _) => {
  const as = (out, index2) => {
    $.set(index2, out);
    return out;
  };
  const unpair = (index2) => {
    if ($.has(index2))
      return $.get(index2);
    const [type, value] = _[index2];
    switch (type) {
      case PRIMITIVE:
      case VOID:
        return as(value, index2);
      case ARRAY: {
        const arr = as([], index2);
        for (const index3 of value)
          arr.push(unpair(index3));
        return arr;
      }
      case OBJECT: {
        const object = as({}, index2);
        for (const [key, index3] of value)
          object[unpair(key)] = unpair(index3);
        return object;
      }
      case DATE:
        return as(new Date(value), index2);
      case REGEXP: {
        const { source, flags } = value;
        return as(new RegExp(source, flags), index2);
      }
      case MAP: {
        const map4 = as(/* @__PURE__ */ new Map(), index2);
        for (const [key, index3] of value)
          map4.set(unpair(key), unpair(index3));
        return map4;
      }
      case SET: {
        const set = as(/* @__PURE__ */ new Set(), index2);
        for (const index3 of value)
          set.add(unpair(index3));
        return set;
      }
      case ERROR: {
        const { name, message } = value;
        return as(new env[name](message), index2);
      }
      case BIGINT:
        return as(BigInt(value), index2);
      case "BigInt":
        return as(Object(BigInt(value)), index2);
    }
    return as(new env[type](value), index2);
  };
  return unpair;
};
var deserialize = (serialized) => deserializer(/* @__PURE__ */ new Map(), serialized)(0);
var EMPTY = "";
var { toString: toString2 } = {};
var { keys } = Object;
var typeOf = (value) => {
  const type = typeof value;
  if (type !== "object" || !value)
    return [PRIMITIVE, type];
  const asString = toString2.call(value).slice(8, -1);
  switch (asString) {
    case "Array":
      return [ARRAY, EMPTY];
    case "Object":
      return [OBJECT, EMPTY];
    case "Date":
      return [DATE, EMPTY];
    case "RegExp":
      return [REGEXP, EMPTY];
    case "Map":
      return [MAP, EMPTY];
    case "Set":
      return [SET, EMPTY];
  }
  if (asString.includes("Array"))
    return [ARRAY, asString];
  if (asString.includes("Error"))
    return [ERROR, asString];
  return [OBJECT, asString];
};
var shouldSkip = ([TYPE, type]) => TYPE === PRIMITIVE && (type === "function" || type === "symbol");
var serializer = (strict, json, $, _) => {
  const as = (out, value) => {
    const index2 = _.push(out) - 1;
    $.set(value, index2);
    return index2;
  };
  const pair = (value) => {
    if ($.has(value))
      return $.get(value);
    let [TYPE, type] = typeOf(value);
    switch (TYPE) {
      case PRIMITIVE: {
        let entry = value;
        switch (type) {
          case "bigint":
            TYPE = BIGINT;
            entry = value.toString();
            break;
          case "function":
          case "symbol":
            if (strict)
              throw new TypeError("unable to serialize " + type);
            entry = null;
            break;
          case "undefined":
            return as([VOID], value);
        }
        return as([TYPE, entry], value);
      }
      case ARRAY: {
        if (type)
          return as([type, [...value]], value);
        const arr = [];
        const index2 = as([TYPE, arr], value);
        for (const entry of value)
          arr.push(pair(entry));
        return index2;
      }
      case OBJECT: {
        if (type) {
          switch (type) {
            case "BigInt":
              return as([type, value.toString()], value);
            case "Boolean":
            case "Number":
            case "String":
              return as([type, value.valueOf()], value);
          }
        }
        if (json && "toJSON" in value)
          return pair(value.toJSON());
        const entries = [];
        const index2 = as([TYPE, entries], value);
        for (const key of keys(value)) {
          if (strict || !shouldSkip(typeOf(value[key])))
            entries.push([pair(key), pair(value[key])]);
        }
        return index2;
      }
      case DATE:
        return as([TYPE, value.toISOString()], value);
      case REGEXP: {
        const { source, flags } = value;
        return as([TYPE, { source, flags }], value);
      }
      case MAP: {
        const entries = [];
        const index2 = as([TYPE, entries], value);
        for (const [key, entry] of value) {
          if (strict || !(shouldSkip(typeOf(key)) || shouldSkip(typeOf(entry))))
            entries.push([pair(key), pair(entry)]);
        }
        return index2;
      }
      case SET: {
        const entries = [];
        const index2 = as([TYPE, entries], value);
        for (const entry of value) {
          if (strict || !shouldSkip(typeOf(entry)))
            entries.push(pair(entry));
        }
        return index2;
      }
    }
    const { message } = value;
    return as([TYPE, { name: type, message }], value);
  };
  return pair;
};
var serialize$1 = (value, { json, lossy } = {}) => {
  const _ = [];
  return serializer(!(json || lossy), !!json, /* @__PURE__ */ new Map(), _)(value), _;
};
var esm_default = typeof structuredClone === "function" ? (
  /* c8 ignore start */
  (any, options) => options && ("json" in options || "lossy" in options) ? deserialize(serialize$1(any, options)) : structuredClone(any)
) : (any, options) => deserialize(serialize$1(any, options));
function defaultFootnoteBackContent(_, rereferenceIndex) {
  const result = [{ type: "text", value: "↩" }];
  if (rereferenceIndex > 1) {
    result.push({
      type: "element",
      tagName: "sup",
      properties: {},
      children: [{ type: "text", value: String(rereferenceIndex) }]
    });
  }
  return result;
}
function defaultFootnoteBackLabel(referenceIndex, rereferenceIndex) {
  return "Back to reference " + (referenceIndex + 1) + (rereferenceIndex > 1 ? "-" + rereferenceIndex : "");
}
function footer(state) {
  const clobberPrefix = typeof state.options.clobberPrefix === "string" ? state.options.clobberPrefix : "user-content-";
  const footnoteBackContent = state.options.footnoteBackContent || defaultFootnoteBackContent;
  const footnoteBackLabel = state.options.footnoteBackLabel || defaultFootnoteBackLabel;
  const footnoteLabel = state.options.footnoteLabel || "Footnotes";
  const footnoteLabelTagName = state.options.footnoteLabelTagName || "h2";
  const footnoteLabelProperties = state.options.footnoteLabelProperties || {
    className: ["sr-only"]
  };
  const listItems = [];
  let referenceIndex = -1;
  while (++referenceIndex < state.footnoteOrder.length) {
    const def = state.footnoteById.get(state.footnoteOrder[referenceIndex]);
    if (!def) {
      continue;
    }
    const content3 = state.all(def);
    const id = String(def.identifier).toUpperCase();
    const safeId = normalizeUri(id.toLowerCase());
    let rereferenceIndex = 0;
    const backReferences = [];
    const counts = state.footnoteCounts.get(id);
    while (counts !== void 0 && ++rereferenceIndex <= counts) {
      if (backReferences.length > 0) {
        backReferences.push({ type: "text", value: " " });
      }
      let children = typeof footnoteBackContent === "string" ? footnoteBackContent : footnoteBackContent(referenceIndex, rereferenceIndex);
      if (typeof children === "string") {
        children = { type: "text", value: children };
      }
      backReferences.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + clobberPrefix + "fnref-" + safeId + (rereferenceIndex > 1 ? "-" + rereferenceIndex : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof footnoteBackLabel === "string" ? footnoteBackLabel : footnoteBackLabel(referenceIndex, rereferenceIndex),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(children) ? children : [children]
      });
    }
    const tail = content3[content3.length - 1];
    if (tail && tail.type === "element" && tail.tagName === "p") {
      const tailTail = tail.children[tail.children.length - 1];
      if (tailTail && tailTail.type === "text") {
        tailTail.value += " ";
      } else {
        tail.children.push({ type: "text", value: " " });
      }
      tail.children.push(...backReferences);
    } else {
      content3.push(...backReferences);
    }
    const listItem2 = {
      type: "element",
      tagName: "li",
      properties: { id: clobberPrefix + "fn-" + safeId },
      children: state.wrap(content3, true)
    };
    state.patch(def, listItem2);
    listItems.push(listItem2);
  }
  if (listItems.length === 0) {
    return;
  }
  return {
    type: "element",
    tagName: "section",
    properties: { dataFootnotes: true, className: ["footnotes"] },
    children: [
      {
        type: "element",
        tagName: footnoteLabelTagName,
        properties: {
          ...esm_default(footnoteLabelProperties),
          id: "footnote-label"
        },
        children: [{ type: "text", value: footnoteLabel }]
      },
      { type: "text", value: "\n" },
      {
        type: "element",
        tagName: "ol",
        properties: {},
        children: state.wrap(listItems, true)
      },
      { type: "text", value: "\n" }
    ]
  };
}
var convert$1 = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  function(test) {
    if (test === null || test === void 0) {
      return ok2$1;
    }
    if (typeof test === "function") {
      return castFactory$1(test);
    }
    if (typeof test === "object") {
      return Array.isArray(test) ? anyFactory$1(test) : propsFactory$1(test);
    }
    if (typeof test === "string") {
      return typeFactory$1(test);
    }
    throw new Error("Expected function, string, or object as test");
  }
);
function anyFactory$1(tests) {
  const checks = [];
  let index2 = -1;
  while (++index2 < tests.length) {
    checks[index2] = convert$1(tests[index2]);
  }
  return castFactory$1(any);
  function any(...parameters) {
    let index3 = -1;
    while (++index3 < checks.length) {
      if (checks[index3].apply(this, parameters))
        return true;
    }
    return false;
  }
}
function propsFactory$1(check) {
  const checkAsRecord = (
    /** @type {Record<string, unknown>} */
    check
  );
  return castFactory$1(all2);
  function all2(node2) {
    const nodeAsRecord = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      node2
    );
    let key;
    for (key in check) {
      if (nodeAsRecord[key] !== checkAsRecord[key])
        return false;
    }
    return true;
  }
}
function typeFactory$1(check) {
  return castFactory$1(type);
  function type(node2) {
    return node2 && node2.type === check;
  }
}
function castFactory$1(testFunction) {
  return check;
  function check(value, index2, parent) {
    return Boolean(
      looksLikeANode$1(value) && testFunction.call(
        this,
        value,
        typeof index2 === "number" ? index2 : void 0,
        parent || void 0
      )
    );
  }
}
function ok2$1() {
  return true;
}
function looksLikeANode$1(value) {
  return value !== null && typeof value === "object" && "type" in value;
}
function color$1(d) {
  return d;
}
var empty$1 = [];
var CONTINUE$1 = true;
var EXIT$1 = false;
var SKIP$1 = "skip";
function visitParents$1(tree, test, visitor, reverse) {
  let check;
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
  } else {
    check = test;
  }
  const is2 = convert$1(check);
  const step = reverse ? -1 : 1;
  factory(tree, void 0, [])();
  function factory(node2, index2, parents) {
    const value = (
      /** @type {Record<string, unknown>} */
      node2 && typeof node2 === "object" ? node2 : {}
    );
    if (typeof value.type === "string") {
      const name = (
        // `hast`
        typeof value.tagName === "string" ? value.tagName : (
          // `xast`
          typeof value.name === "string" ? value.name : void 0
        )
      );
      Object.defineProperty(visit3, "name", {
        value: "node (" + color$1(node2.type + (name ? "<" + name + ">" : "")) + ")"
      });
    }
    return visit3;
    function visit3() {
      let result = empty$1;
      let subresult;
      let offset;
      let grandparents;
      if (!test || is2(node2, index2, parents[parents.length - 1] || void 0)) {
        result = toResult$1(visitor(node2, parents));
        if (result[0] === EXIT$1) {
          return result;
        }
      }
      if ("children" in node2 && node2.children) {
        const nodeAsParent = (
          /** @type {UnistParent} */
          node2
        );
        if (nodeAsParent.children && result[0] !== SKIP$1) {
          offset = (reverse ? nodeAsParent.children.length : -1) + step;
          grandparents = parents.concat(nodeAsParent);
          while (offset > -1 && offset < nodeAsParent.children.length) {
            const child = nodeAsParent.children[offset];
            subresult = factory(child, offset, grandparents)();
            if (subresult[0] === EXIT$1) {
              return subresult;
            }
            offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
          }
        }
      }
      return result;
    }
  }
}
function toResult$1(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === "number") {
    return [CONTINUE$1, value];
  }
  return value === null || value === void 0 ? empty$1 : [value];
}
function visit$1(tree, testOrVisitor, visitorOrReverse, maybeReverse) {
  let reverse;
  let test;
  let visitor;
  if (typeof testOrVisitor === "function" && typeof visitorOrReverse !== "function") {
    test = void 0;
    visitor = testOrVisitor;
    reverse = visitorOrReverse;
  } else {
    test = testOrVisitor;
    visitor = visitorOrReverse;
    reverse = maybeReverse;
  }
  visitParents$1(tree, test, overload, reverse);
  function overload(node2, parents) {
    const parent = parents[parents.length - 1];
    const index2 = parent ? parent.children.indexOf(node2) : void 0;
    return visitor(node2, index2, parent);
  }
}
var own3 = {}.hasOwnProperty;
var emptyOptions2$1 = {};
function createState(tree, options) {
  const settings = options || emptyOptions2$1;
  const definitionById = /* @__PURE__ */ new Map();
  const footnoteById = /* @__PURE__ */ new Map();
  const footnoteCounts = /* @__PURE__ */ new Map();
  const handlers2 = { ...handlers, ...settings.handlers };
  const state = {
    all: all2,
    applyData,
    definitionById,
    footnoteById,
    footnoteCounts,
    footnoteOrder: [],
    handlers: handlers2,
    one: one2,
    options: settings,
    patch,
    wrap
  };
  visit$1(tree, function(node2) {
    if (node2.type === "definition" || node2.type === "footnoteDefinition") {
      const map4 = node2.type === "definition" ? definitionById : footnoteById;
      const id = String(node2.identifier).toUpperCase();
      if (!map4.has(id)) {
        map4.set(id, node2);
      }
    }
  });
  return state;
  function one2(node2, parent) {
    const type = node2.type;
    const handle2 = state.handlers[type];
    if (own3.call(state.handlers, type) && handle2) {
      return handle2(state, node2, parent);
    }
    if (state.options.passThrough && state.options.passThrough.includes(type)) {
      if ("children" in node2) {
        const { children, ...shallow } = node2;
        const result = esm_default(shallow);
        result.children = state.all(node2);
        return result;
      }
      return esm_default(node2);
    }
    const unknown = state.options.unknownHandler || defaultUnknownHandler;
    return unknown(state, node2, parent);
  }
  function all2(parent) {
    const values = [];
    if ("children" in parent) {
      const nodes = parent.children;
      let index2 = -1;
      while (++index2 < nodes.length) {
        const result = state.one(nodes[index2], parent);
        if (result) {
          if (index2 && nodes[index2 - 1].type === "break") {
            if (!Array.isArray(result) && result.type === "text") {
              result.value = trimMarkdownSpaceStart(result.value);
            }
            if (!Array.isArray(result) && result.type === "element") {
              const head = result.children[0];
              if (head && head.type === "text") {
                head.value = trimMarkdownSpaceStart(head.value);
              }
            }
          }
          if (Array.isArray(result)) {
            values.push(...result);
          } else {
            values.push(result);
          }
        }
      }
    }
    return values;
  }
}
function patch(from, to) {
  if (from.position)
    to.position = position2(from);
}
function applyData(from, to) {
  let result = to;
  if (from && from.data) {
    const hName = from.data.hName;
    const hChildren = from.data.hChildren;
    const hProperties = from.data.hProperties;
    if (typeof hName === "string") {
      if (result.type === "element") {
        result.tagName = hName;
      } else {
        const children = "children" in result ? result.children : [result];
        result = { type: "element", tagName: hName, properties: {}, children };
      }
    }
    if (result.type === "element" && hProperties) {
      Object.assign(result.properties, esm_default(hProperties));
    }
    if ("children" in result && result.children && hChildren !== null && hChildren !== void 0) {
      result.children = hChildren;
    }
  }
  return result;
}
function defaultUnknownHandler(state, node2) {
  const data = node2.data || {};
  const result = "value" in node2 && !(own3.call(data, "hProperties") || own3.call(data, "hChildren")) ? { type: "text", value: node2.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: state.all(node2)
  };
  state.patch(node2, result);
  return state.applyData(node2, result);
}
function wrap(nodes, loose) {
  const result = [];
  let index2 = -1;
  if (loose) {
    result.push({ type: "text", value: "\n" });
  }
  while (++index2 < nodes.length) {
    if (index2)
      result.push({ type: "text", value: "\n" });
    result.push(nodes[index2]);
  }
  if (loose && nodes.length > 0) {
    result.push({ type: "text", value: "\n" });
  }
  return result;
}
function trimMarkdownSpaceStart(value) {
  let index2 = 0;
  let code22 = value.charCodeAt(index2);
  while (code22 === 9 || code22 === 32) {
    index2++;
    code22 = value.charCodeAt(index2);
  }
  return value.slice(index2);
}
function toHast(tree, options) {
  const state = createState(tree, options);
  const node2 = state.one(tree, void 0);
  const foot = footer(state);
  const result = Array.isArray(node2) ? { type: "root", children: node2 } : node2 || { type: "root", children: [] };
  if (foot) {
    result.children.push({ type: "text", value: "\n" }, foot);
  }
  return result;
}
function remarkRehype(destination, options) {
  if (destination && "run" in destination) {
    return async function(tree, file) {
      const hastTree = (
        /** @type {HastRoot} */
        toHast(tree, { file, ...options })
      );
      await destination.run(hastTree, file);
    };
  }
  return function(tree, file) {
    return (
      /** @type {HastRoot} */
      toHast(tree, { file, ...options || destination })
    );
  };
}
function bail(error) {
  if (error) {
    throw error;
  }
}
var import_extend = __toESM(require_extend());
function isPlainObject(value) {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in value) && !(Symbol.iterator in value);
}
function trough() {
  const fns = [];
  const pipeline = { run, use };
  return pipeline;
  function run(...values) {
    let middlewareIndex = -1;
    const callback = values.pop();
    if (typeof callback !== "function") {
      throw new TypeError("Expected function as last argument, not " + callback);
    }
    next(null, ...values);
    function next(error, ...output) {
      const fn = fns[++middlewareIndex];
      let index2 = -1;
      if (error) {
        callback(error);
        return;
      }
      while (++index2 < values.length) {
        if (output[index2] === null || output[index2] === void 0) {
          output[index2] = values[index2];
        }
      }
      values = output;
      if (fn) {
        wrap2(fn, next)(...output);
      } else {
        callback(null, ...output);
      }
    }
  }
  function use(middelware) {
    if (typeof middelware !== "function") {
      throw new TypeError(
        "Expected `middelware` to be a function, not " + middelware
      );
    }
    fns.push(middelware);
    return pipeline;
  }
}
function wrap2(middleware, callback) {
  let called;
  return wrapped;
  function wrapped(...parameters) {
    const fnExpectsCallback = middleware.length > parameters.length;
    let result;
    if (fnExpectsCallback) {
      parameters.push(done);
    }
    try {
      result = middleware.apply(this, parameters);
    } catch (error) {
      const exception = (
        /** @type {Error} */
        error
      );
      if (fnExpectsCallback && called) {
        throw exception;
      }
      return done(exception);
    }
    if (!fnExpectsCallback) {
      if (result && result.then && typeof result.then === "function") {
        result.then(then, done);
      } else if (result instanceof Error) {
        done(result);
      } else {
        then(result);
      }
    }
  }
  function done(error, ...output) {
    if (!called) {
      called = true;
      callback(error, ...output);
    }
  }
  function then(value) {
    done(null, value);
  }
}
var VFileMessage = class extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(causeOrReason, optionsOrParentOrPlace, origin) {
    super();
    if (typeof optionsOrParentOrPlace === "string") {
      origin = optionsOrParentOrPlace;
      optionsOrParentOrPlace = void 0;
    }
    let reason = "";
    let options = {};
    let legacyCause = false;
    if (optionsOrParentOrPlace) {
      if ("line" in optionsOrParentOrPlace && "column" in optionsOrParentOrPlace) {
        options = { place: optionsOrParentOrPlace };
      } else if ("start" in optionsOrParentOrPlace && "end" in optionsOrParentOrPlace) {
        options = { place: optionsOrParentOrPlace };
      } else if ("type" in optionsOrParentOrPlace) {
        options = {
          ancestors: [optionsOrParentOrPlace],
          place: optionsOrParentOrPlace.position
        };
      } else {
        options = { ...optionsOrParentOrPlace };
      }
    }
    if (typeof causeOrReason === "string") {
      reason = causeOrReason;
    } else if (!options.cause && causeOrReason) {
      legacyCause = true;
      reason = causeOrReason.message;
      options.cause = causeOrReason;
    }
    if (!options.ruleId && !options.source && typeof origin === "string") {
      const index2 = origin.indexOf(":");
      if (index2 === -1) {
        options.ruleId = origin;
      } else {
        options.source = origin.slice(0, index2);
        options.ruleId = origin.slice(index2 + 1);
      }
    }
    if (!options.place && options.ancestors && options.ancestors) {
      const parent = options.ancestors[options.ancestors.length - 1];
      if (parent) {
        options.place = parent.position;
      }
    }
    const start = options.place && "start" in options.place ? options.place.start : options.place;
    this.ancestors = options.ancestors || void 0;
    this.cause = options.cause || void 0;
    this.column = start ? start.column : void 0;
    this.fatal = void 0;
    this.file;
    this.message = reason;
    this.line = start ? start.line : void 0;
    this.name = stringifyPosition(options.place) || "1:1";
    this.place = options.place || void 0;
    this.reason = this.message;
    this.ruleId = options.ruleId || void 0;
    this.source = options.source || void 0;
    this.stack = legacyCause && options.cause && typeof options.cause.stack === "string" ? options.cause.stack : "";
    this.actual;
    this.expected;
    this.note;
    this.url;
  }
};
VFileMessage.prototype.file = "";
VFileMessage.prototype.name = "";
VFileMessage.prototype.reason = "";
VFileMessage.prototype.message = "";
VFileMessage.prototype.stack = "";
VFileMessage.prototype.column = void 0;
VFileMessage.prototype.line = void 0;
VFileMessage.prototype.ancestors = void 0;
VFileMessage.prototype.cause = void 0;
VFileMessage.prototype.fatal = void 0;
VFileMessage.prototype.place = void 0;
VFileMessage.prototype.ruleId = void 0;
VFileMessage.prototype.source = void 0;
var path$1 = { basename, dirname, extname, join, sep: "/" };
function basename(path2, ext) {
  if (ext !== void 0 && typeof ext !== "string") {
    throw new TypeError('"ext" argument must be a string');
  }
  assertPath(path2);
  let start = 0;
  let end = -1;
  let index2 = path2.length;
  let seenNonSlash;
  if (ext === void 0 || ext.length === 0 || ext.length > path2.length) {
    while (index2--) {
      if (path2.codePointAt(index2) === 47) {
        if (seenNonSlash) {
          start = index2 + 1;
          break;
        }
      } else if (end < 0) {
        seenNonSlash = true;
        end = index2 + 1;
      }
    }
    return end < 0 ? "" : path2.slice(start, end);
  }
  if (ext === path2) {
    return "";
  }
  let firstNonSlashEnd = -1;
  let extIndex = ext.length - 1;
  while (index2--) {
    if (path2.codePointAt(index2) === 47) {
      if (seenNonSlash) {
        start = index2 + 1;
        break;
      }
    } else {
      if (firstNonSlashEnd < 0) {
        seenNonSlash = true;
        firstNonSlashEnd = index2 + 1;
      }
      if (extIndex > -1) {
        if (path2.codePointAt(index2) === ext.codePointAt(extIndex--)) {
          if (extIndex < 0) {
            end = index2;
          }
        } else {
          extIndex = -1;
          end = firstNonSlashEnd;
        }
      }
    }
  }
  if (start === end) {
    end = firstNonSlashEnd;
  } else if (end < 0) {
    end = path2.length;
  }
  return path2.slice(start, end);
}
function dirname(path2) {
  assertPath(path2);
  if (path2.length === 0) {
    return ".";
  }
  let end = -1;
  let index2 = path2.length;
  let unmatchedSlash;
  while (--index2) {
    if (path2.codePointAt(index2) === 47) {
      if (unmatchedSlash) {
        end = index2;
        break;
      }
    } else if (!unmatchedSlash) {
      unmatchedSlash = true;
    }
  }
  return end < 0 ? path2.codePointAt(0) === 47 ? "/" : "." : end === 1 && path2.codePointAt(0) === 47 ? "//" : path2.slice(0, end);
}
function extname(path2) {
  assertPath(path2);
  let index2 = path2.length;
  let end = -1;
  let startPart = 0;
  let startDot = -1;
  let preDotState = 0;
  let unmatchedSlash;
  while (index2--) {
    const code22 = path2.codePointAt(index2);
    if (code22 === 47) {
      if (unmatchedSlash) {
        startPart = index2 + 1;
        break;
      }
      continue;
    }
    if (end < 0) {
      unmatchedSlash = true;
      end = index2 + 1;
    }
    if (code22 === 46) {
      if (startDot < 0) {
        startDot = index2;
      } else if (preDotState !== 1) {
        preDotState = 1;
      }
    } else if (startDot > -1) {
      preDotState = -1;
    }
  }
  if (startDot < 0 || end < 0 || // We saw a non-dot character immediately before the dot.
  preDotState === 0 || // The (right-most) trimmed path component is exactly `..`.
  preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return "";
  }
  return path2.slice(startDot, end);
}
function join(...segments) {
  let index2 = -1;
  let joined;
  while (++index2 < segments.length) {
    assertPath(segments[index2]);
    if (segments[index2]) {
      joined = joined === void 0 ? segments[index2] : joined + "/" + segments[index2];
    }
  }
  return joined === void 0 ? "." : normalize(joined);
}
function normalize(path2) {
  assertPath(path2);
  const absolute = path2.codePointAt(0) === 47;
  let value = normalizeString(path2, !absolute);
  if (value.length === 0 && !absolute) {
    value = ".";
  }
  if (value.length > 0 && path2.codePointAt(path2.length - 1) === 47) {
    value += "/";
  }
  return absolute ? "/" + value : value;
}
function normalizeString(path2, allowAboveRoot) {
  let result = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let index2 = -1;
  let code22;
  let lastSlashIndex;
  while (++index2 <= path2.length) {
    if (index2 < path2.length) {
      code22 = path2.codePointAt(index2);
    } else if (code22 === 47) {
      break;
    } else {
      code22 = 47;
    }
    if (code22 === 47) {
      if (lastSlash === index2 - 1 || dots === 1) ;
      else if (lastSlash !== index2 - 1 && dots === 2) {
        if (result.length < 2 || lastSegmentLength !== 2 || result.codePointAt(result.length - 1) !== 46 || result.codePointAt(result.length - 2) !== 46) {
          if (result.length > 2) {
            lastSlashIndex = result.lastIndexOf("/");
            if (lastSlashIndex !== result.length - 1) {
              if (lastSlashIndex < 0) {
                result = "";
                lastSegmentLength = 0;
              } else {
                result = result.slice(0, lastSlashIndex);
                lastSegmentLength = result.length - 1 - result.lastIndexOf("/");
              }
              lastSlash = index2;
              dots = 0;
              continue;
            }
          } else if (result.length > 0) {
            result = "";
            lastSegmentLength = 0;
            lastSlash = index2;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          result = result.length > 0 ? result + "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (result.length > 0) {
          result += "/" + path2.slice(lastSlash + 1, index2);
        } else {
          result = path2.slice(lastSlash + 1, index2);
        }
        lastSegmentLength = index2 - lastSlash - 1;
      }
      lastSlash = index2;
      dots = 0;
    } else if (code22 === 46 && dots > -1) {
      dots++;
    } else {
      dots = -1;
    }
  }
  return result;
}
function assertPath(path2) {
  if (typeof path2 !== "string") {
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(path2)
    );
  }
}
var proc = { cwd };
function cwd() {
  return "/";
}
function isUrl(fileUrlOrPath) {
  return Boolean(
    fileUrlOrPath !== null && typeof fileUrlOrPath === "object" && "href" in fileUrlOrPath && fileUrlOrPath.href && "protocol" in fileUrlOrPath && fileUrlOrPath.protocol && // @ts-expect-error: indexing is fine.
    fileUrlOrPath.auth === void 0
  );
}
function urlToPath(path2) {
  if (typeof path2 === "string") {
    path2 = new URL(path2);
  } else if (!isUrl(path2)) {
    const error = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + path2 + "`"
    );
    error.code = "ERR_INVALID_ARG_TYPE";
    throw error;
  }
  if (path2.protocol !== "file:") {
    const error = new TypeError("The URL must be of scheme file");
    error.code = "ERR_INVALID_URL_SCHEME";
    throw error;
  }
  return getPathFromURLPosix(path2);
}
function getPathFromURLPosix(url) {
  if (url.hostname !== "") {
    const error = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    error.code = "ERR_INVALID_FILE_URL_HOST";
    throw error;
  }
  const pathname = url.pathname;
  let index2 = -1;
  while (++index2 < pathname.length) {
    if (pathname.codePointAt(index2) === 37 && pathname.codePointAt(index2 + 1) === 50) {
      const third = pathname.codePointAt(index2 + 2);
      if (third === 70 || third === 102) {
        const error = new TypeError(
          "File URL path must not include encoded / characters"
        );
        error.code = "ERR_INVALID_FILE_URL_PATH";
        throw error;
      }
    }
  }
  return decodeURIComponent(pathname);
}
var order = (
  /** @type {const} */
  [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ]
);
var VFile = class {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(value) {
    let options;
    if (!value) {
      options = {};
    } else if (isUrl(value)) {
      options = { path: value };
    } else if (typeof value === "string" || isUint8Array(value)) {
      options = { value };
    } else {
      options = value;
    }
    this.cwd = proc.cwd();
    this.data = {};
    this.history = [];
    this.messages = [];
    this.value;
    this.map;
    this.result;
    this.stored;
    let index2 = -1;
    while (++index2 < order.length) {
      const prop2 = order[index2];
      if (prop2 in options && options[prop2] !== void 0 && options[prop2] !== null) {
        this[prop2] = prop2 === "history" ? [...options[prop2]] : options[prop2];
      }
    }
    let prop;
    for (prop in options) {
      if (!order.includes(prop)) {
        this[prop] = options[prop];
      }
    }
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path === "string" ? path$1.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */
  set basename(basename2) {
    assertNonEmpty(basename2, "basename");
    assertPart(basename2, "basename");
    this.path = path$1.join(this.dirname || "", basename2);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path === "string" ? path$1.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */
  set dirname(dirname2) {
    assertPath2(this.basename, "dirname");
    this.path = path$1.join(dirname2 || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path === "string" ? path$1.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */
  set extname(extname2) {
    assertPart(extname2, "extname");
    assertPath2(this.dirname, "extname");
    if (extname2) {
      if (extname2.codePointAt(0) !== 46) {
        throw new Error("`extname` must start with `.`");
      }
      if (extname2.includes(".", 1)) {
        throw new Error("`extname` cannot contain multiple dots");
      }
    }
    this.path = path$1.join(this.dirname, this.stem + (extname2 || ""));
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */
  set path(path2) {
    if (isUrl(path2)) {
      path2 = urlToPath(path2);
    }
    assertNonEmpty(path2, "path");
    if (this.path !== path2) {
      this.history.push(path2);
    }
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path === "string" ? path$1.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */
  set stem(stem) {
    assertNonEmpty(stem, "stem");
    assertPart(stem, "stem");
    this.path = path$1.join(this.dirname || "", stem + (this.extname || ""));
  }
  // Normal prototypal methods.
  /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(causeOrReason, optionsOrParentOrPlace, origin) {
    const message = this.message(causeOrReason, optionsOrParentOrPlace, origin);
    message.fatal = true;
    throw message;
  }
  /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(causeOrReason, optionsOrParentOrPlace, origin) {
    const message = this.message(causeOrReason, optionsOrParentOrPlace, origin);
    message.fatal = void 0;
    return message;
  }
  /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(causeOrReason, optionsOrParentOrPlace, origin) {
    const message = new VFileMessage(
      // @ts-expect-error: the overloads are fine.
      causeOrReason,
      optionsOrParentOrPlace,
      origin
    );
    if (this.path) {
      message.name = this.path + ":" + message.name;
      message.file = this.path;
    }
    message.fatal = false;
    this.messages.push(message);
    return message;
  }
  /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(encoding) {
    if (this.value === void 0) {
      return "";
    }
    if (typeof this.value === "string") {
      return this.value;
    }
    const decoder = new TextDecoder(encoding || void 0);
    return decoder.decode(this.value);
  }
};
function assertPart(part, name) {
  if (part && part.includes(path$1.sep)) {
    throw new Error(
      "`" + name + "` cannot be a path: did not expect `" + path$1.sep + "`"
    );
  }
}
function assertNonEmpty(part, name) {
  if (!part) {
    throw new Error("`" + name + "` cannot be empty");
  }
}
function assertPath2(path2, name) {
  if (!path2) {
    throw new Error("Setting `" + name + "` requires `path` to be set too");
  }
}
function isUint8Array(value) {
  return Boolean(
    value && typeof value === "object" && "byteLength" in value && "byteOffset" in value
  );
}
var CallableInstance = (
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  /** @type {unknown} */
  /**
   * @this {Function}
   * @param {string | symbol} property
   * @returns {(...parameters: Array<unknown>) => unknown}
   */
  function(property) {
    const self2 = this;
    const constr = self2.constructor;
    const proto = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      constr.prototype
    );
    const func = proto[property];
    const apply = function() {
      return func.apply(apply, arguments);
    };
    Object.setPrototypeOf(apply, proto);
    const names = Object.getOwnPropertyNames(func);
    for (const p of names) {
      const descriptor = Object.getOwnPropertyDescriptor(func, p);
      if (descriptor)
        Object.defineProperty(apply, p, descriptor);
    }
    return apply;
  }
);
var own4 = {}.hasOwnProperty;
var Processor = class _Processor extends CallableInstance {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy");
    this.Compiler = void 0;
    this.Parser = void 0;
    this.attachers = [];
    this.compiler = void 0;
    this.freezeIndex = -1;
    this.frozen = void 0;
    this.namespace = {};
    this.parser = void 0;
    this.transformers = trough();
  }
  /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@link Processor `Processor`}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */
  copy() {
    const destination = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new _Processor()
    );
    let index2 = -1;
    while (++index2 < this.attachers.length) {
      const attacher = this.attachers[index2];
      destination.use(...attacher);
    }
    destination.data((0, import_extend.default)(true, {}, this.namespace));
    return destination;
  }
  /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > 👉 **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > 👉 **Note**: to register custom data in TypeScript, augment the
   * > {@link Data `Data`} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */
  data(key, value) {
    if (typeof key === "string") {
      if (arguments.length === 2) {
        assertUnfrozen("data", this.frozen);
        this.namespace[key] = value;
        return this;
      }
      return own4.call(this.namespace, key) && this.namespace[key] || void 0;
    }
    if (key) {
      assertUnfrozen("data", this.frozen);
      this.namespace = key;
      return this;
    }
    return this.namespace;
  }
  /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */
  freeze() {
    if (this.frozen) {
      return this;
    }
    const self2 = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    while (++this.freezeIndex < this.attachers.length) {
      const [attacher, ...options] = this.attachers[this.freezeIndex];
      if (options[0] === false) {
        continue;
      }
      if (options[0] === true) {
        options[0] = void 0;
      }
      const transformer = attacher.call(self2, ...options);
      if (typeof transformer === "function") {
        this.transformers.use(transformer);
      }
    }
    this.frozen = true;
    this.freezeIndex = Number.POSITIVE_INFINITY;
    return this;
  }
  /**
   * Parse text to a syntax tree.
   *
   * > 👉 **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > 👉 **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */
  parse(file) {
    this.freeze();
    const realFile = vfile(file);
    const parser = this.parser || this.Parser;
    assertParser("parse", parser);
    return parser(String(realFile), realFile);
  }
  /**
   * Process the given file as configured on the processor.
   *
   * > 👉 **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > 👉 **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > 👉 **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@link CompileResultMap `CompileResultMap`}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  process(file, done) {
    const self2 = this;
    this.freeze();
    assertParser("process", this.parser || this.Parser);
    assertCompiler("process", this.compiler || this.Compiler);
    return done ? executor(void 0, done) : new Promise(executor);
    function executor(resolve, reject) {
      const realFile = vfile(file);
      const parseTree = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        self2.parse(realFile)
      );
      self2.run(parseTree, realFile, function(error, tree, file2) {
        if (error || !tree || !file2) {
          return realDone(error);
        }
        const compileTree = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          tree
        );
        const compileResult = self2.stringify(compileTree, file2);
        if (looksLikeAValue(compileResult)) {
          file2.value = compileResult;
        } else {
          file2.result = compileResult;
        }
        realDone(
          error,
          /** @type {VFileWithOutput<CompileResult>} */
          file2
        );
      });
      function realDone(error, file2) {
        if (error || !file2) {
          reject(error);
        } else if (resolve) {
          resolve(file2);
        } else {
          done(void 0, file2);
        }
      }
    }
  }
  /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > 👉 **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > 👉 **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > 👉 **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@link CompileResultMap `CompileResultMap`}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  processSync(file) {
    let complete = false;
    let result;
    this.freeze();
    assertParser("processSync", this.parser || this.Parser);
    assertCompiler("processSync", this.compiler || this.Compiler);
    this.process(file, realDone);
    assertDone("processSync", "process", complete);
    return result;
    function realDone(error, file2) {
      complete = true;
      bail(error);
      result = file2;
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * > 👉 **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > 👉 **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */
  run(tree, file, done) {
    assertNode(tree);
    this.freeze();
    const transformers = this.transformers;
    if (!done && typeof file === "function") {
      done = file;
      file = void 0;
    }
    return done ? executor(void 0, done) : new Promise(executor);
    function executor(resolve, reject) {
      const realFile = vfile(file);
      transformers.run(tree, realFile, realDone);
      function realDone(error, outputTree, file2) {
        const resultingTree = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          outputTree || tree
        );
        if (error) {
          reject(error);
        } else if (resolve) {
          resolve(resultingTree);
        } else {
          done(void 0, resultingTree, file2);
        }
      }
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > 👉 **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > 👉 **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */
  runSync(tree, file) {
    let complete = false;
    let result;
    this.run(tree, file, realDone);
    assertDone("runSync", "run", complete);
    return result;
    function realDone(error, tree2) {
      bail(error);
      result = tree2;
      complete = true;
    }
  }
  /**
   * Compile a syntax tree.
   *
   * > 👉 **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > 👉 **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > 👉 **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@link CompileResultMap `CompileResultMap`}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  stringify(tree, file) {
    this.freeze();
    const realFile = vfile(file);
    const compiler2 = this.compiler || this.Compiler;
    assertCompiler("stringify", compiler2);
    assertNode(tree);
    return compiler2(tree, realFile);
  }
  /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > 👉 **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */
  use(value, ...parameters) {
    const attachers = this.attachers;
    const namespace = this.namespace;
    assertUnfrozen("use", this.frozen);
    if (value === null || value === void 0) ;
    else if (typeof value === "function") {
      addPlugin(value, parameters);
    } else if (typeof value === "object") {
      if (Array.isArray(value)) {
        addList(value);
      } else {
        addPreset(value);
      }
    } else {
      throw new TypeError("Expected usable value, not `" + value + "`");
    }
    return this;
    function add(value2) {
      if (typeof value2 === "function") {
        addPlugin(value2, []);
      } else if (typeof value2 === "object") {
        if (Array.isArray(value2)) {
          const [plugin, ...parameters2] = (
            /** @type {PluginTuple<Array<unknown>>} */
            value2
          );
          addPlugin(plugin, parameters2);
        } else {
          addPreset(value2);
        }
      } else {
        throw new TypeError("Expected usable value, not `" + value2 + "`");
      }
    }
    function addPreset(result) {
      if (!("plugins" in result) && !("settings" in result)) {
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      }
      addList(result.plugins);
      if (result.settings) {
        namespace.settings = (0, import_extend.default)(true, namespace.settings, result.settings);
      }
    }
    function addList(plugins) {
      let index2 = -1;
      if (plugins === null || plugins === void 0) ;
      else if (Array.isArray(plugins)) {
        while (++index2 < plugins.length) {
          const thing = plugins[index2];
          add(thing);
        }
      } else {
        throw new TypeError("Expected a list of plugins, not `" + plugins + "`");
      }
    }
    function addPlugin(plugin, parameters2) {
      let index2 = -1;
      let entryIndex = -1;
      while (++index2 < attachers.length) {
        if (attachers[index2][0] === plugin) {
          entryIndex = index2;
          break;
        }
      }
      if (entryIndex === -1) {
        attachers.push([plugin, ...parameters2]);
      } else if (parameters2.length > 0) {
        let [primary, ...rest] = parameters2;
        const currentPrimary = attachers[entryIndex][1];
        if (isPlainObject(currentPrimary) && isPlainObject(primary)) {
          primary = (0, import_extend.default)(true, currentPrimary, primary);
        }
        attachers[entryIndex] = [plugin, primary, ...rest];
      }
    }
  }
};
var unified = new Processor().freeze();
function assertParser(name, value) {
  if (typeof value !== "function") {
    throw new TypeError("Cannot `" + name + "` without `parser`");
  }
}
function assertCompiler(name, value) {
  if (typeof value !== "function") {
    throw new TypeError("Cannot `" + name + "` without `compiler`");
  }
}
function assertUnfrozen(name, frozen) {
  if (frozen) {
    throw new Error(
      "Cannot call `" + name + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
  }
}
function assertNode(node2) {
  if (!isPlainObject(node2) || typeof node2.type !== "string") {
    throw new TypeError("Expected node, got `" + node2 + "`");
  }
}
function assertDone(name, asyncName, complete) {
  if (!complete) {
    throw new Error(
      "`" + name + "` finished async. Use `" + asyncName + "` instead"
    );
  }
}
function vfile(value) {
  return looksLikeAVFile(value) ? value : new VFile(value);
}
function looksLikeAVFile(value) {
  return Boolean(
    value && typeof value === "object" && "message" in value && "messages" in value
  );
}
function looksLikeAValue(value) {
  return typeof value === "string" || isUint8Array2(value);
}
function isUint8Array2(value) {
  return Boolean(
    value && typeof value === "object" && "byteLength" in value && "byteOffset" in value
  );
}
var nonNullable = (value) => value != null;
var camelToKebab = (str) => str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
var transformClassName = (node2) => {
  if (node2.type !== "element" || node2.properties === void 0 || !Array.isArray(node2.properties.className))
    return;
  node2.properties.class = node2.properties.className.join(" ");
  delete node2.properties.className;
};
var transformAriaProps = (node2) => {
  if (node2.type !== "element" || node2.properties === void 0)
    return;
  const ariaProps = Object.keys(node2.properties).filter((key) => key.startsWith("aria"));
  for (const key of ariaProps) {
    const value = node2.properties[key];
    delete node2.properties[key];
    node2.properties[camelToKebab(key)] = value;
  }
};
var transform = (node2) => {
  transformClassName(node2);
  transformAriaProps(node2);
};
var visit2 = (visitor, node2) => {
  visitor(node2);
  node2.children?.forEach((child) => visit2(visitor, child));
};
var rehypeReactPropsToSvelteProps = () => {
  return (node2, _file, done) => {
    try {
      visit2(transform, node2);
      done();
    } catch (e) {
      if (e instanceof Error)
        return done(e);
      return done(new Error(String(e)));
    }
  };
};
var createParser = (plugins) => {
  const processor = unified().use(remarkParse).use(plugins.map((plugin) => plugin.remarkPlugin).filter(nonNullable)).use(remarkRehype, { allowDangerousHtml: true }).use(plugins.map((plugin) => plugin.rehypePlugin).filter(nonNullable)).use(rehypeReactPropsToSvelteProps);
  return (md) => processor.runSync(processor.parse(md), md);
};
var resolveComponent = (map4, tagName, circularCheck = []) => {
  if (circularCheck.includes(tagName)) {
    circularCheck.push(tagName);
    throw new Error(`Circular dependency detected: ${circularCheck.join(" -> ")}`);
  }
  const component = map4[tagName];
  if (typeof component === "string") {
    return resolveComponent(map4, component, [...circularCheck, tagName]);
  }
  if (component === null)
    return null;
  if (component === void 0)
    return tagName;
  return component;
};
var svgTags = [
  /* 'a',  */
  "animate",
  "animateMotion",
  "animateTransform",
  "circle",
  "clipPath",
  "defs",
  "desc",
  "ellipse",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "filter",
  "foreignObject",
  "g",
  "hatch",
  "hatchpath",
  /* 'image', */
  "line",
  "linearGradient",
  "marker",
  "mask",
  "metadata",
  "mpath",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  /* 'script',  */
  "set",
  "stop",
  /* 'style',  */
  "svg",
  "switch",
  "symbol",
  "text",
  "textPath",
  /* 'title',  */
  "tspan",
  "use",
  "view"
];
function ccount(value, character) {
  const source = String(value);
  if (typeof character !== "string") {
    throw new TypeError("Expected character");
  }
  let count = 0;
  let index2 = source.indexOf(character);
  while (index2 !== -1) {
    count++;
    index2 = source.indexOf(character, index2 + character.length);
  }
  return count;
}
function ok() {
}
var asciiAlpha = regexCheck(/[A-Za-z]/);
var asciiAlphanumeric = regexCheck(/[\dA-Za-z]/);
function asciiControl(code3) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    code3 !== null && (code3 < 32 || code3 === 127)
  );
}
function markdownLineEnding(code3) {
  return code3 !== null && code3 < -2;
}
function markdownLineEndingOrSpace(code3) {
  return code3 !== null && (code3 < 0 || code3 === 32);
}
function markdownSpace(code3) {
  return code3 === -2 || code3 === -1 || code3 === 32;
}
var unicodePunctuation = regexCheck(new RegExp("\\p{P}|\\p{S}", "u"));
var unicodeWhitespace = regexCheck(/\s/);
function regexCheck(regex) {
  return check;
  function check(code3) {
    return code3 !== null && code3 > -1 && regex.test(String.fromCharCode(code3));
  }
}
function escapeStringRegexp(string3) {
  if (typeof string3 !== "string") {
    throw new TypeError("Expected a string");
  }
  return string3.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
var convert = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  function(test) {
    if (test === null || test === void 0) {
      return ok2;
    }
    if (typeof test === "function") {
      return castFactory(test);
    }
    if (typeof test === "object") {
      return Array.isArray(test) ? anyFactory(test) : propsFactory(test);
    }
    if (typeof test === "string") {
      return typeFactory(test);
    }
    throw new Error("Expected function, string, or object as test");
  }
);
function anyFactory(tests) {
  const checks = [];
  let index2 = -1;
  while (++index2 < tests.length) {
    checks[index2] = convert(tests[index2]);
  }
  return castFactory(any);
  function any(...parameters) {
    let index22 = -1;
    while (++index22 < checks.length) {
      if (checks[index22].apply(this, parameters))
        return true;
    }
    return false;
  }
}
function propsFactory(check) {
  const checkAsRecord = (
    /** @type {Record<string, unknown>} */
    check
  );
  return castFactory(all2);
  function all2(node2) {
    const nodeAsRecord = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      node2
    );
    let key;
    for (key in check) {
      if (nodeAsRecord[key] !== checkAsRecord[key])
        return false;
    }
    return true;
  }
}
function typeFactory(check) {
  return castFactory(type);
  function type(node2) {
    return node2 && node2.type === check;
  }
}
function castFactory(testFunction) {
  return check;
  function check(value, index2, parent) {
    return Boolean(
      looksLikeANode(value) && testFunction.call(
        this,
        value,
        typeof index2 === "number" ? index2 : void 0,
        parent || void 0
      )
    );
  }
}
function ok2() {
  return true;
}
function looksLikeANode(value) {
  return value !== null && typeof value === "object" && "type" in value;
}
function color(d) {
  return d;
}
var empty = [];
var CONTINUE = true;
var EXIT = false;
var SKIP = "skip";
function visitParents(tree, test, visitor, reverse) {
  let check;
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
  } else {
    check = test;
  }
  const is2 = convert(check);
  const step = reverse ? -1 : 1;
  factory(tree, void 0, [])();
  function factory(node2, index2, parents) {
    const value = (
      /** @type {Record<string, unknown>} */
      node2 && typeof node2 === "object" ? node2 : {}
    );
    if (typeof value.type === "string") {
      const name = (
        // `hast`
        typeof value.tagName === "string" ? value.tagName : (
          // `xast`
          typeof value.name === "string" ? value.name : void 0
        )
      );
      Object.defineProperty(visit22, "name", {
        value: "node (" + color(node2.type + (name ? "<" + name + ">" : "")) + ")"
      });
    }
    return visit22;
    function visit22() {
      let result = empty;
      let subresult;
      let offset;
      let grandparents;
      if (!test || is2(node2, index2, parents[parents.length - 1] || void 0)) {
        result = toResult(visitor(node2, parents));
        if (result[0] === EXIT) {
          return result;
        }
      }
      if ("children" in node2 && node2.children) {
        const nodeAsParent = (
          /** @type {UnistParent} */
          node2
        );
        if (nodeAsParent.children && result[0] !== SKIP) {
          offset = (reverse ? nodeAsParent.children.length : -1) + step;
          grandparents = parents.concat(nodeAsParent);
          while (offset > -1 && offset < nodeAsParent.children.length) {
            const child = nodeAsParent.children[offset];
            subresult = factory(child, offset, grandparents)();
            if (subresult[0] === EXIT) {
              return subresult;
            }
            offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
          }
        }
      }
      return result;
    }
  }
}
function toResult(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === "number") {
    return [CONTINUE, value];
  }
  return value === null || value === void 0 ? empty : [value];
}
function findAndReplace(tree, list22, options) {
  const settings = options || {};
  const ignored = convert(settings.ignore || []);
  const pairs = toPairs(list22);
  let pairIndex = -1;
  while (++pairIndex < pairs.length) {
    visitParents(tree, "text", visitor);
  }
  function visitor(node2, parents) {
    let index2 = -1;
    let grandparent;
    while (++index2 < parents.length) {
      const parent = parents[index2];
      const siblings = grandparent ? grandparent.children : void 0;
      if (ignored(
        parent,
        siblings ? siblings.indexOf(parent) : void 0,
        grandparent
      )) {
        return;
      }
      grandparent = parent;
    }
    if (grandparent) {
      return handler(node2, parents);
    }
  }
  function handler(node2, parents) {
    const parent = parents[parents.length - 1];
    const find = pairs[pairIndex][0];
    const replace2 = pairs[pairIndex][1];
    let start = 0;
    const siblings = parent.children;
    const index2 = siblings.indexOf(node2);
    let change = false;
    let nodes = [];
    find.lastIndex = 0;
    let match = find.exec(node2.value);
    while (match) {
      const position3 = match.index;
      const matchObject = {
        index: match.index,
        input: match.input,
        stack: [...parents, node2]
      };
      let value = replace2(...match, matchObject);
      if (typeof value === "string") {
        value = value.length > 0 ? { type: "text", value } : void 0;
      }
      if (value === false) {
        find.lastIndex = position3 + 1;
      } else {
        if (start !== position3) {
          nodes.push({
            type: "text",
            value: node2.value.slice(start, position3)
          });
        }
        if (Array.isArray(value)) {
          nodes.push(...value);
        } else if (value) {
          nodes.push(value);
        }
        start = position3 + match[0].length;
        change = true;
      }
      if (!find.global) {
        break;
      }
      match = find.exec(node2.value);
    }
    if (change) {
      if (start < node2.value.length) {
        nodes.push({ type: "text", value: node2.value.slice(start) });
      }
      parent.children.splice(index2, 1, ...nodes);
    } else {
      nodes = [node2];
    }
    return index2 + nodes.length;
  }
}
function toPairs(tupleOrList) {
  const result = [];
  if (!Array.isArray(tupleOrList)) {
    throw new TypeError("Expected find and replace tuple or list of tuples");
  }
  const list22 = !tupleOrList[0] || Array.isArray(tupleOrList[0]) ? tupleOrList : [tupleOrList];
  let index2 = -1;
  while (++index2 < list22.length) {
    const tuple = list22[index2];
    result.push([toExpression(tuple[0]), toFunction(tuple[1])]);
  }
  return result;
}
function toExpression(find) {
  return typeof find === "string" ? new RegExp(escapeStringRegexp(find), "g") : find;
}
function toFunction(replace2) {
  return typeof replace2 === "function" ? replace2 : function() {
    return replace2;
  };
}
var inConstruct = "phrasing";
var notInConstruct = ["autolink", "link", "image", "label"];
function gfmAutolinkLiteralFromMarkdown() {
  return {
    transforms: [transformGfmAutolinkLiterals],
    enter: {
      literalAutolink: enterLiteralAutolink,
      literalAutolinkEmail: enterLiteralAutolinkValue,
      literalAutolinkHttp: enterLiteralAutolinkValue,
      literalAutolinkWww: enterLiteralAutolinkValue
    },
    exit: {
      literalAutolink: exitLiteralAutolink,
      literalAutolinkEmail: exitLiteralAutolinkEmail,
      literalAutolinkHttp: exitLiteralAutolinkHttp,
      literalAutolinkWww: exitLiteralAutolinkWww
    }
  };
}
function gfmAutolinkLiteralToMarkdown() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct,
        notInConstruct
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct,
        notInConstruct
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct,
        notInConstruct
      }
    ]
  };
}
function enterLiteralAutolink(token) {
  this.enter({ type: "link", title: null, url: "", children: [] }, token);
}
function enterLiteralAutolinkValue(token) {
  this.config.enter.autolinkProtocol.call(this, token);
}
function exitLiteralAutolinkHttp(token) {
  this.config.exit.autolinkProtocol.call(this, token);
}
function exitLiteralAutolinkWww(token) {
  this.config.exit.data.call(this, token);
  const node2 = this.stack[this.stack.length - 1];
  ok(node2.type === "link");
  node2.url = "http://" + this.sliceSerialize(token);
}
function exitLiteralAutolinkEmail(token) {
  this.config.exit.autolinkEmail.call(this, token);
}
function exitLiteralAutolink(token) {
  this.exit(token);
}
function transformGfmAutolinkLiterals(tree) {
  findAndReplace(
    tree,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, findUrl],
      [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, findEmail]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function findUrl(_, protocol, domain2, path2, match) {
  let prefix = "";
  if (!previous(match)) {
    return false;
  }
  if (/^w/i.test(protocol)) {
    domain2 = protocol + domain2;
    protocol = "";
    prefix = "http://";
  }
  if (!isCorrectDomain(domain2)) {
    return false;
  }
  const parts = splitUrl(domain2 + path2);
  if (!parts[0])
    return false;
  const result = {
    type: "link",
    title: null,
    url: prefix + protocol + parts[0],
    children: [{ type: "text", value: protocol + parts[0] }]
  };
  if (parts[1]) {
    return [result, { type: "text", value: parts[1] }];
  }
  return result;
}
function findEmail(_, atext, label, match) {
  if (
    // Not an expected previous character.
    !previous(match, true) || // Label ends in not allowed character.
    /[-\d_]$/.test(label)
  ) {
    return false;
  }
  return {
    type: "link",
    title: null,
    url: "mailto:" + atext + "@" + label,
    children: [{ type: "text", value: atext + "@" + label }]
  };
}
function isCorrectDomain(domain2) {
  const parts = domain2.split(".");
  if (parts.length < 2 || parts[parts.length - 1] && (/_/.test(parts[parts.length - 1]) || !/[a-zA-Z\d]/.test(parts[parts.length - 1])) || parts[parts.length - 2] && (/_/.test(parts[parts.length - 2]) || !/[a-zA-Z\d]/.test(parts[parts.length - 2]))) {
    return false;
  }
  return true;
}
function splitUrl(url) {
  const trailExec = /[!"&'),.:;<>?\]}]+$/.exec(url);
  if (!trailExec) {
    return [url, void 0];
  }
  url = url.slice(0, trailExec.index);
  let trail2 = trailExec[0];
  let closingParenIndex = trail2.indexOf(")");
  const openingParens = ccount(url, "(");
  let closingParens = ccount(url, ")");
  while (closingParenIndex !== -1 && openingParens > closingParens) {
    url += trail2.slice(0, closingParenIndex + 1);
    trail2 = trail2.slice(closingParenIndex + 1);
    closingParenIndex = trail2.indexOf(")");
    closingParens++;
  }
  return [url, trail2];
}
function previous(match, email) {
  const code3 = match.input.charCodeAt(match.index - 1);
  return (match.index === 0 || unicodeWhitespace(code3) || unicodePunctuation(code3)) && (!email || code3 !== 47);
}
function normalizeIdentifier(value) {
  return value.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
footnoteReference.peek = footnoteReferencePeek;
function gfmFootnoteFromMarkdown() {
  return {
    enter: {
      gfmFootnoteDefinition: enterFootnoteDefinition,
      gfmFootnoteDefinitionLabelString: enterFootnoteDefinitionLabelString,
      gfmFootnoteCall: enterFootnoteCall,
      gfmFootnoteCallString: enterFootnoteCallString
    },
    exit: {
      gfmFootnoteDefinition: exitFootnoteDefinition,
      gfmFootnoteDefinitionLabelString: exitFootnoteDefinitionLabelString,
      gfmFootnoteCall: exitFootnoteCall,
      gfmFootnoteCallString: exitFootnoteCallString
    }
  };
}
function gfmFootnoteToMarkdown() {
  return {
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["phrasing", "label", "reference"] }],
    handlers: { footnoteDefinition, footnoteReference }
  };
}
function enterFootnoteDefinition(token) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    token
  );
}
function enterFootnoteDefinitionLabelString() {
  this.buffer();
}
function exitFootnoteDefinitionLabelString(token) {
  const label = this.resume();
  const node2 = this.stack[this.stack.length - 1];
  ok(node2.type === "footnoteDefinition");
  node2.label = label;
  node2.identifier = normalizeIdentifier(
    this.sliceSerialize(token)
  ).toLowerCase();
}
function exitFootnoteDefinition(token) {
  this.exit(token);
}
function enterFootnoteCall(token) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, token);
}
function enterFootnoteCallString() {
  this.buffer();
}
function exitFootnoteCallString(token) {
  const label = this.resume();
  const node2 = this.stack[this.stack.length - 1];
  ok(node2.type === "footnoteReference");
  node2.label = label;
  node2.identifier = normalizeIdentifier(
    this.sliceSerialize(token)
  ).toLowerCase();
}
function exitFootnoteCall(token) {
  this.exit(token);
}
function footnoteReference(node2, _, state, info) {
  const tracker = state.createTracker(info);
  let value = tracker.move("[^");
  const exit2 = state.enter("footnoteReference");
  const subexit = state.enter("reference");
  value += tracker.move(
    state.safe(state.associationId(node2), {
      ...tracker.current(),
      before: value,
      after: "]"
    })
  );
  subexit();
  exit2();
  value += tracker.move("]");
  return value;
}
function footnoteReferencePeek() {
  return "[";
}
function footnoteDefinition(node2, _, state, info) {
  const tracker = state.createTracker(info);
  let value = tracker.move("[^");
  const exit2 = state.enter("footnoteDefinition");
  const subexit = state.enter("label");
  value += tracker.move(
    state.safe(state.associationId(node2), {
      ...tracker.current(),
      before: value,
      after: "]"
    })
  );
  subexit();
  value += tracker.move(
    "]:" + (node2.children && node2.children.length > 0 ? " " : "")
  );
  tracker.shift(4);
  value += tracker.move(
    state.indentLines(state.containerFlow(node2, tracker.current()), map)
  );
  exit2();
  return value;
}
function map(line, index2, blank) {
  if (index2 === 0) {
    return line;
  }
  return (blank ? "" : "    ") + line;
}
var constructsWithoutStrikethrough = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
handleDelete.peek = peekDelete;
function gfmStrikethroughFromMarkdown() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: enterStrikethrough },
    exit: { strikethrough: exitStrikethrough }
  };
}
function gfmStrikethroughToMarkdown() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: constructsWithoutStrikethrough
      }
    ],
    handlers: { delete: handleDelete }
  };
}
function enterStrikethrough(token) {
  this.enter({ type: "delete", children: [] }, token);
}
function exitStrikethrough(token) {
  this.exit(token);
}
function handleDelete(node2, _, state, info) {
  const tracker = state.createTracker(info);
  const exit2 = state.enter("strikethrough");
  let value = tracker.move("~~");
  value += state.containerPhrasing(node2, {
    ...tracker.current(),
    before: value,
    after: "~"
  });
  value += tracker.move("~~");
  exit2();
  return value;
}
function peekDelete() {
  return "~";
}
function markdownTable(table2, options = {}) {
  const align = (options.align || []).concat();
  const stringLength = options.stringLength || defaultStringLength;
  const alignments = [];
  const cellMatrix = [];
  const sizeMatrix = [];
  const longestCellByColumn = [];
  let mostCellsPerRow = 0;
  let rowIndex = -1;
  while (++rowIndex < table2.length) {
    const row2 = [];
    const sizes2 = [];
    let columnIndex2 = -1;
    if (table2[rowIndex].length > mostCellsPerRow) {
      mostCellsPerRow = table2[rowIndex].length;
    }
    while (++columnIndex2 < table2[rowIndex].length) {
      const cell = serialize(table2[rowIndex][columnIndex2]);
      if (options.alignDelimiters !== false) {
        const size = stringLength(cell);
        sizes2[columnIndex2] = size;
        if (longestCellByColumn[columnIndex2] === void 0 || size > longestCellByColumn[columnIndex2]) {
          longestCellByColumn[columnIndex2] = size;
        }
      }
      row2.push(cell);
    }
    cellMatrix[rowIndex] = row2;
    sizeMatrix[rowIndex] = sizes2;
  }
  let columnIndex = -1;
  if (typeof align === "object" && "length" in align) {
    while (++columnIndex < mostCellsPerRow) {
      alignments[columnIndex] = toAlignment(align[columnIndex]);
    }
  } else {
    const code3 = toAlignment(align);
    while (++columnIndex < mostCellsPerRow) {
      alignments[columnIndex] = code3;
    }
  }
  columnIndex = -1;
  const row = [];
  const sizes = [];
  while (++columnIndex < mostCellsPerRow) {
    const code3 = alignments[columnIndex];
    let before = "";
    let after = "";
    if (code3 === 99) {
      before = ":";
      after = ":";
    } else if (code3 === 108) {
      before = ":";
    } else if (code3 === 114) {
      after = ":";
    }
    let size = options.alignDelimiters === false ? 1 : Math.max(
      1,
      longestCellByColumn[columnIndex] - before.length - after.length
    );
    const cell = before + "-".repeat(size) + after;
    if (options.alignDelimiters !== false) {
      size = before.length + size + after.length;
      if (size > longestCellByColumn[columnIndex]) {
        longestCellByColumn[columnIndex] = size;
      }
      sizes[columnIndex] = size;
    }
    row[columnIndex] = cell;
  }
  cellMatrix.splice(1, 0, row);
  sizeMatrix.splice(1, 0, sizes);
  rowIndex = -1;
  const lines = [];
  while (++rowIndex < cellMatrix.length) {
    const row2 = cellMatrix[rowIndex];
    const sizes2 = sizeMatrix[rowIndex];
    columnIndex = -1;
    const line = [];
    while (++columnIndex < mostCellsPerRow) {
      const cell = row2[columnIndex] || "";
      let before = "";
      let after = "";
      if (options.alignDelimiters !== false) {
        const size = longestCellByColumn[columnIndex] - (sizes2[columnIndex] || 0);
        const code3 = alignments[columnIndex];
        if (code3 === 114) {
          before = " ".repeat(size);
        } else if (code3 === 99) {
          if (size % 2) {
            before = " ".repeat(size / 2 + 0.5);
            after = " ".repeat(size / 2 - 0.5);
          } else {
            before = " ".repeat(size / 2);
            after = before;
          }
        } else {
          after = " ".repeat(size);
        }
      }
      if (options.delimiterStart !== false && !columnIndex) {
        line.push("|");
      }
      if (options.padding !== false && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(options.alignDelimiters === false && cell === "") && (options.delimiterStart !== false || columnIndex)) {
        line.push(" ");
      }
      if (options.alignDelimiters !== false) {
        line.push(before);
      }
      line.push(cell);
      if (options.alignDelimiters !== false) {
        line.push(after);
      }
      if (options.padding !== false) {
        line.push(" ");
      }
      if (options.delimiterEnd !== false || columnIndex !== mostCellsPerRow - 1) {
        line.push("|");
      }
    }
    lines.push(
      options.delimiterEnd === false ? line.join("").replace(/ +$/, "") : line.join("")
    );
  }
  return lines.join("\n");
}
function serialize(value) {
  return value === null || value === void 0 ? "" : String(value);
}
function defaultStringLength(value) {
  return value.length;
}
function toAlignment(value) {
  const code3 = typeof value === "string" ? value.codePointAt(0) : 0;
  return code3 === 67 || code3 === 99 ? 99 : code3 === 76 || code3 === 108 ? 108 : code3 === 82 || code3 === 114 ? 114 : 0;
}
function blockquote(node2, _, state, info) {
  const exit2 = state.enter("blockquote");
  const tracker = state.createTracker(info);
  tracker.move("> ");
  tracker.shift(2);
  const value = state.indentLines(
    state.containerFlow(node2, tracker.current()),
    map2
  );
  exit2();
  return value;
}
function map2(line, _, blank) {
  return ">" + (blank ? "" : " ") + line;
}
function patternInScope(stack, pattern) {
  return listInScope(stack, pattern.inConstruct, true) && !listInScope(stack, pattern.notInConstruct, false);
}
function listInScope(stack, list22, none) {
  if (typeof list22 === "string") {
    list22 = [list22];
  }
  if (!list22 || list22.length === 0) {
    return none;
  }
  let index2 = -1;
  while (++index2 < list22.length) {
    if (stack.includes(list22[index2])) {
      return true;
    }
  }
  return false;
}
function hardBreak(_, _1, state, info) {
  let index2 = -1;
  while (++index2 < state.unsafe.length) {
    if (state.unsafe[index2].character === "\n" && patternInScope(state.stack, state.unsafe[index2])) {
      return /[ \t]/.test(info.before) ? "" : " ";
    }
  }
  return "\\\n";
}
function longestStreak(value, substring) {
  const source = String(value);
  let index2 = source.indexOf(substring);
  let expected = index2;
  let count = 0;
  let max = 0;
  if (typeof substring !== "string") {
    throw new TypeError("Expected substring");
  }
  while (index2 !== -1) {
    if (index2 === expected) {
      if (++count > max) {
        max = count;
      }
    } else {
      count = 1;
    }
    expected = index2 + substring.length;
    index2 = source.indexOf(substring, expected);
  }
  return max;
}
function formatCodeAsIndented(node2, state) {
  return Boolean(
    state.options.fences === false && node2.value && // If there’s no info…
    !node2.lang && // And there’s a non-whitespace character…
    /[^ \r\n]/.test(node2.value) && // And the value doesn’t start or end in a blank…
    !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(node2.value)
  );
}
function checkFence(state) {
  const marker = state.options.fence || "`";
  if (marker !== "`" && marker !== "~") {
    throw new Error(
      "Cannot serialize code with `" + marker + "` for `options.fence`, expected `` ` `` or `~`"
    );
  }
  return marker;
}
function code(node2, _, state, info) {
  const marker = checkFence(state);
  const raw = node2.value || "";
  const suffix = marker === "`" ? "GraveAccent" : "Tilde";
  if (formatCodeAsIndented(node2, state)) {
    const exit3 = state.enter("codeIndented");
    const value2 = state.indentLines(raw, map3);
    exit3();
    return value2;
  }
  const tracker = state.createTracker(info);
  const sequence = marker.repeat(Math.max(longestStreak(raw, marker) + 1, 3));
  const exit2 = state.enter("codeFenced");
  let value = tracker.move(sequence);
  if (node2.lang) {
    const subexit = state.enter(`codeFencedLang${suffix}`);
    value += tracker.move(
      state.safe(node2.lang, {
        before: value,
        after: " ",
        encode: ["`"],
        ...tracker.current()
      })
    );
    subexit();
  }
  if (node2.lang && node2.meta) {
    const subexit = state.enter(`codeFencedMeta${suffix}`);
    value += tracker.move(" ");
    value += tracker.move(
      state.safe(node2.meta, {
        before: value,
        after: "\n",
        encode: ["`"],
        ...tracker.current()
      })
    );
    subexit();
  }
  value += tracker.move("\n");
  if (raw) {
    value += tracker.move(raw + "\n");
  }
  value += tracker.move(sequence);
  exit2();
  return value;
}
function map3(line, _, blank) {
  return (blank ? "" : "    ") + line;
}
function checkQuote(state) {
  const marker = state.options.quote || '"';
  if (marker !== '"' && marker !== "'") {
    throw new Error(
      "Cannot serialize title with `" + marker + "` for `options.quote`, expected `\"`, or `'`"
    );
  }
  return marker;
}
function definition(node2, _, state, info) {
  const quote = checkQuote(state);
  const suffix = quote === '"' ? "Quote" : "Apostrophe";
  const exit2 = state.enter("definition");
  let subexit = state.enter("label");
  const tracker = state.createTracker(info);
  let value = tracker.move("[");
  value += tracker.move(
    state.safe(state.associationId(node2), {
      before: value,
      after: "]",
      ...tracker.current()
    })
  );
  value += tracker.move("]: ");
  subexit();
  if (
    // If there’s no url, or…
    !node2.url || // If there are control characters or whitespace.
    /[\0- \u007F]/.test(node2.url)
  ) {
    subexit = state.enter("destinationLiteral");
    value += tracker.move("<");
    value += tracker.move(
      state.safe(node2.url, { before: value, after: ">", ...tracker.current() })
    );
    value += tracker.move(">");
  } else {
    subexit = state.enter("destinationRaw");
    value += tracker.move(
      state.safe(node2.url, {
        before: value,
        after: node2.title ? " " : "\n",
        ...tracker.current()
      })
    );
  }
  subexit();
  if (node2.title) {
    subexit = state.enter(`title${suffix}`);
    value += tracker.move(" " + quote);
    value += tracker.move(
      state.safe(node2.title, {
        before: value,
        after: quote,
        ...tracker.current()
      })
    );
    value += tracker.move(quote);
    subexit();
  }
  exit2();
  return value;
}
function checkEmphasis(state) {
  const marker = state.options.emphasis || "*";
  if (marker !== "*" && marker !== "_") {
    throw new Error(
      "Cannot serialize emphasis with `" + marker + "` for `options.emphasis`, expected `*`, or `_`"
    );
  }
  return marker;
}
emphasis.peek = emphasisPeek;
function emphasis(node2, _, state, info) {
  const marker = checkEmphasis(state);
  const exit2 = state.enter("emphasis");
  const tracker = state.createTracker(info);
  let value = tracker.move(marker);
  value += tracker.move(
    state.containerPhrasing(node2, {
      before: value,
      after: marker,
      ...tracker.current()
    })
  );
  value += tracker.move(marker);
  exit2();
  return value;
}
function emphasisPeek(_, _1, state) {
  return state.options.emphasis || "*";
}
function visit(tree, testOrVisitor, visitorOrReverse, maybeReverse) {
  let reverse;
  let test;
  let visitor;
  if (typeof testOrVisitor === "function" && typeof visitorOrReverse !== "function") {
    test = void 0;
    visitor = testOrVisitor;
    reverse = visitorOrReverse;
  } else {
    test = testOrVisitor;
    visitor = visitorOrReverse;
    reverse = maybeReverse;
  }
  visitParents(tree, test, overload, reverse);
  function overload(node2, parents) {
    const parent = parents[parents.length - 1];
    const index2 = parent ? parent.children.indexOf(node2) : void 0;
    return visitor(node2, index2, parent);
  }
}
var emptyOptions = {};
function toString(value, options) {
  const settings = emptyOptions;
  const includeImageAlt = typeof settings.includeImageAlt === "boolean" ? settings.includeImageAlt : true;
  const includeHtml = typeof settings.includeHtml === "boolean" ? settings.includeHtml : true;
  return one(value, includeImageAlt, includeHtml);
}
function one(value, includeImageAlt, includeHtml) {
  if (node(value)) {
    if ("value" in value) {
      return value.type === "html" && !includeHtml ? "" : value.value;
    }
    if (includeImageAlt && "alt" in value && value.alt) {
      return value.alt;
    }
    if ("children" in value) {
      return all(value.children, includeImageAlt, includeHtml);
    }
  }
  if (Array.isArray(value)) {
    return all(value, includeImageAlt, includeHtml);
  }
  return "";
}
function all(values, includeImageAlt, includeHtml) {
  const result = [];
  let index2 = -1;
  while (++index2 < values.length) {
    result[index2] = one(values[index2], includeImageAlt, includeHtml);
  }
  return result.join("");
}
function node(value) {
  return Boolean(value && typeof value === "object");
}
function formatHeadingAsSetext(node2, state) {
  let literalWithBreak = false;
  visit(node2, function(node3) {
    if ("value" in node3 && /\r?\n|\r/.test(node3.value) || node3.type === "break") {
      literalWithBreak = true;
      return EXIT;
    }
  });
  return Boolean(
    (!node2.depth || node2.depth < 3) && toString(node2) && (state.options.setext || literalWithBreak)
  );
}
function heading(node2, _, state, info) {
  const rank = Math.max(Math.min(6, node2.depth || 1), 1);
  const tracker = state.createTracker(info);
  if (formatHeadingAsSetext(node2, state)) {
    const exit3 = state.enter("headingSetext");
    const subexit2 = state.enter("phrasing");
    const value2 = state.containerPhrasing(node2, {
      ...tracker.current(),
      before: "\n",
      after: "\n"
    });
    subexit2();
    exit3();
    return value2 + "\n" + (rank === 1 ? "=" : "-").repeat(
      // The whole size…
      value2.length - // Minus the position of the character after the last EOL (or
      // 0 if there is none)…
      (Math.max(value2.lastIndexOf("\r"), value2.lastIndexOf("\n")) + 1)
    );
  }
  const sequence = "#".repeat(rank);
  const exit2 = state.enter("headingAtx");
  const subexit = state.enter("phrasing");
  tracker.move(sequence + " ");
  let value = state.containerPhrasing(node2, {
    before: "# ",
    after: "\n",
    ...tracker.current()
  });
  if (/^[\t ]/.test(value)) {
    value = "&#x" + value.charCodeAt(0).toString(16).toUpperCase() + ";" + value.slice(1);
  }
  value = value ? sequence + " " + value : sequence;
  if (state.options.closeAtx) {
    value += " " + sequence;
  }
  subexit();
  exit2();
  return value;
}
html.peek = htmlPeek;
function html(node2) {
  return node2.value || "";
}
function htmlPeek() {
  return "<";
}
image.peek = imagePeek;
function image(node2, _, state, info) {
  const quote = checkQuote(state);
  const suffix = quote === '"' ? "Quote" : "Apostrophe";
  const exit2 = state.enter("image");
  let subexit = state.enter("label");
  const tracker = state.createTracker(info);
  let value = tracker.move("![");
  value += tracker.move(
    state.safe(node2.alt, { before: value, after: "]", ...tracker.current() })
  );
  value += tracker.move("](");
  subexit();
  if (
    // If there’s no url but there is a title…
    !node2.url && node2.title || // If there are control characters or whitespace.
    /[\0- \u007F]/.test(node2.url)
  ) {
    subexit = state.enter("destinationLiteral");
    value += tracker.move("<");
    value += tracker.move(
      state.safe(node2.url, { before: value, after: ">", ...tracker.current() })
    );
    value += tracker.move(">");
  } else {
    subexit = state.enter("destinationRaw");
    value += tracker.move(
      state.safe(node2.url, {
        before: value,
        after: node2.title ? " " : ")",
        ...tracker.current()
      })
    );
  }
  subexit();
  if (node2.title) {
    subexit = state.enter(`title${suffix}`);
    value += tracker.move(" " + quote);
    value += tracker.move(
      state.safe(node2.title, {
        before: value,
        after: quote,
        ...tracker.current()
      })
    );
    value += tracker.move(quote);
    subexit();
  }
  value += tracker.move(")");
  exit2();
  return value;
}
function imagePeek() {
  return "!";
}
imageReference.peek = imageReferencePeek;
function imageReference(node2, _, state, info) {
  const type = node2.referenceType;
  const exit2 = state.enter("imageReference");
  let subexit = state.enter("label");
  const tracker = state.createTracker(info);
  let value = tracker.move("![");
  const alt = state.safe(node2.alt, {
    before: value,
    after: "]",
    ...tracker.current()
  });
  value += tracker.move(alt + "][");
  subexit();
  const stack = state.stack;
  state.stack = [];
  subexit = state.enter("reference");
  const reference = state.safe(state.associationId(node2), {
    before: value,
    after: "]",
    ...tracker.current()
  });
  subexit();
  state.stack = stack;
  exit2();
  if (type === "full" || !alt || alt !== reference) {
    value += tracker.move(reference + "]");
  } else if (type === "shortcut") {
    value = value.slice(0, -1);
  } else {
    value += tracker.move("]");
  }
  return value;
}
function imageReferencePeek() {
  return "!";
}
inlineCode.peek = inlineCodePeek;
function inlineCode(node2, _, state) {
  let value = node2.value || "";
  let sequence = "`";
  let index2 = -1;
  while (new RegExp("(^|[^`])" + sequence + "([^`]|$)").test(value)) {
    sequence += "`";
  }
  if (/[^ \r\n]/.test(value) && (/^[ \r\n]/.test(value) && /[ \r\n]$/.test(value) || /^`|`$/.test(value))) {
    value = " " + value + " ";
  }
  while (++index2 < state.unsafe.length) {
    const pattern = state.unsafe[index2];
    const expression = state.compilePattern(pattern);
    let match;
    if (!pattern.atBreak)
      continue;
    while (match = expression.exec(value)) {
      let position3 = match.index;
      if (value.charCodeAt(position3) === 10 && value.charCodeAt(position3 - 1) === 13) {
        position3--;
      }
      value = value.slice(0, position3) + " " + value.slice(match.index + 1);
    }
  }
  return sequence + value + sequence;
}
function inlineCodePeek() {
  return "`";
}
function formatLinkAsAutolink(node2, state) {
  const raw = toString(node2);
  return Boolean(
    !state.options.resourceLink && // If there’s a url…
    node2.url && // And there’s a no title…
    !node2.title && // And the content of `node` is a single text node…
    node2.children && node2.children.length === 1 && node2.children[0].type === "text" && // And if the url is the same as the content…
    (raw === node2.url || "mailto:" + raw === node2.url) && // And that starts w/ a protocol…
    /^[a-z][a-z+.-]+:/i.test(node2.url) && // And that doesn’t contain ASCII control codes (character escapes and
    // references don’t work), space, or angle brackets…
    !/[\0- <>\u007F]/.test(node2.url)
  );
}
link.peek = linkPeek;
function link(node2, _, state, info) {
  const quote = checkQuote(state);
  const suffix = quote === '"' ? "Quote" : "Apostrophe";
  const tracker = state.createTracker(info);
  let exit2;
  let subexit;
  if (formatLinkAsAutolink(node2, state)) {
    const stack = state.stack;
    state.stack = [];
    exit2 = state.enter("autolink");
    let value2 = tracker.move("<");
    value2 += tracker.move(
      state.containerPhrasing(node2, {
        before: value2,
        after: ">",
        ...tracker.current()
      })
    );
    value2 += tracker.move(">");
    exit2();
    state.stack = stack;
    return value2;
  }
  exit2 = state.enter("link");
  subexit = state.enter("label");
  let value = tracker.move("[");
  value += tracker.move(
    state.containerPhrasing(node2, {
      before: value,
      after: "](",
      ...tracker.current()
    })
  );
  value += tracker.move("](");
  subexit();
  if (
    // If there’s no url but there is a title…
    !node2.url && node2.title || // If there are control characters or whitespace.
    /[\0- \u007F]/.test(node2.url)
  ) {
    subexit = state.enter("destinationLiteral");
    value += tracker.move("<");
    value += tracker.move(
      state.safe(node2.url, { before: value, after: ">", ...tracker.current() })
    );
    value += tracker.move(">");
  } else {
    subexit = state.enter("destinationRaw");
    value += tracker.move(
      state.safe(node2.url, {
        before: value,
        after: node2.title ? " " : ")",
        ...tracker.current()
      })
    );
  }
  subexit();
  if (node2.title) {
    subexit = state.enter(`title${suffix}`);
    value += tracker.move(" " + quote);
    value += tracker.move(
      state.safe(node2.title, {
        before: value,
        after: quote,
        ...tracker.current()
      })
    );
    value += tracker.move(quote);
    subexit();
  }
  value += tracker.move(")");
  exit2();
  return value;
}
function linkPeek(node2, _, state) {
  return formatLinkAsAutolink(node2, state) ? "<" : "[";
}
linkReference.peek = linkReferencePeek;
function linkReference(node2, _, state, info) {
  const type = node2.referenceType;
  const exit2 = state.enter("linkReference");
  let subexit = state.enter("label");
  const tracker = state.createTracker(info);
  let value = tracker.move("[");
  const text32 = state.containerPhrasing(node2, {
    before: value,
    after: "]",
    ...tracker.current()
  });
  value += tracker.move(text32 + "][");
  subexit();
  const stack = state.stack;
  state.stack = [];
  subexit = state.enter("reference");
  const reference = state.safe(state.associationId(node2), {
    before: value,
    after: "]",
    ...tracker.current()
  });
  subexit();
  state.stack = stack;
  exit2();
  if (type === "full" || !text32 || text32 !== reference) {
    value += tracker.move(reference + "]");
  } else if (type === "shortcut") {
    value = value.slice(0, -1);
  } else {
    value += tracker.move("]");
  }
  return value;
}
function linkReferencePeek() {
  return "[";
}
function checkBullet(state) {
  const marker = state.options.bullet || "*";
  if (marker !== "*" && marker !== "+" && marker !== "-") {
    throw new Error(
      "Cannot serialize items with `" + marker + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  }
  return marker;
}
function checkBulletOther(state) {
  const bullet = checkBullet(state);
  const bulletOther = state.options.bulletOther;
  if (!bulletOther) {
    return bullet === "*" ? "-" : "*";
  }
  if (bulletOther !== "*" && bulletOther !== "+" && bulletOther !== "-") {
    throw new Error(
      "Cannot serialize items with `" + bulletOther + "` for `options.bulletOther`, expected `*`, `+`, or `-`"
    );
  }
  if (bulletOther === bullet) {
    throw new Error(
      "Expected `bullet` (`" + bullet + "`) and `bulletOther` (`" + bulletOther + "`) to be different"
    );
  }
  return bulletOther;
}
function checkBulletOrdered(state) {
  const marker = state.options.bulletOrdered || ".";
  if (marker !== "." && marker !== ")") {
    throw new Error(
      "Cannot serialize items with `" + marker + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  }
  return marker;
}
function checkRule(state) {
  const marker = state.options.rule || "*";
  if (marker !== "*" && marker !== "-" && marker !== "_") {
    throw new Error(
      "Cannot serialize rules with `" + marker + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  }
  return marker;
}
function list(node2, parent, state, info) {
  const exit2 = state.enter("list");
  const bulletCurrent = state.bulletCurrent;
  let bullet = node2.ordered ? checkBulletOrdered(state) : checkBullet(state);
  const bulletOther = node2.ordered ? bullet === "." ? ")" : "." : checkBulletOther(state);
  let useDifferentMarker = parent && state.bulletLastUsed ? bullet === state.bulletLastUsed : false;
  if (!node2.ordered) {
    const firstListItem = node2.children ? node2.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (bullet === "*" || bullet === "-") && // Empty first list item:
      firstListItem && (!firstListItem.children || !firstListItem.children[0]) && // Directly in two other list items:
      state.stack[state.stack.length - 1] === "list" && state.stack[state.stack.length - 2] === "listItem" && state.stack[state.stack.length - 3] === "list" && state.stack[state.stack.length - 4] === "listItem" && // That are each the first child.
      state.indexStack[state.indexStack.length - 1] === 0 && state.indexStack[state.indexStack.length - 2] === 0 && state.indexStack[state.indexStack.length - 3] === 0
    ) {
      useDifferentMarker = true;
    }
    if (checkRule(state) === bullet && firstListItem) {
      let index2 = -1;
      while (++index2 < node2.children.length) {
        const item = node2.children[index2];
        if (item && item.type === "listItem" && item.children && item.children[0] && item.children[0].type === "thematicBreak") {
          useDifferentMarker = true;
          break;
        }
      }
    }
  }
  if (useDifferentMarker) {
    bullet = bulletOther;
  }
  state.bulletCurrent = bullet;
  const value = state.containerFlow(node2, info);
  state.bulletLastUsed = bullet;
  state.bulletCurrent = bulletCurrent;
  exit2();
  return value;
}
function checkListItemIndent(state) {
  const style = state.options.listItemIndent || "one";
  if (style !== "tab" && style !== "one" && style !== "mixed") {
    throw new Error(
      "Cannot serialize items with `" + style + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  }
  return style;
}
function listItem(node2, parent, state, info) {
  const listItemIndent = checkListItemIndent(state);
  let bullet = state.bulletCurrent || checkBullet(state);
  if (parent && parent.type === "list" && parent.ordered) {
    bullet = (typeof parent.start === "number" && parent.start > -1 ? parent.start : 1) + (state.options.incrementListMarker === false ? 0 : parent.children.indexOf(node2)) + bullet;
  }
  let size = bullet.length + 1;
  if (listItemIndent === "tab" || listItemIndent === "mixed" && (parent && parent.type === "list" && parent.spread || node2.spread)) {
    size = Math.ceil(size / 4) * 4;
  }
  const tracker = state.createTracker(info);
  tracker.move(bullet + " ".repeat(size - bullet.length));
  tracker.shift(size);
  const exit2 = state.enter("listItem");
  const value = state.indentLines(
    state.containerFlow(node2, tracker.current()),
    map4
  );
  exit2();
  return value;
  function map4(line, index2, blank) {
    if (index2) {
      return (blank ? "" : " ".repeat(size)) + line;
    }
    return (blank ? bullet : bullet + " ".repeat(size - bullet.length)) + line;
  }
}
function paragraph(node2, _, state, info) {
  const exit2 = state.enter("paragraph");
  const subexit = state.enter("phrasing");
  const value = state.containerPhrasing(node2, info);
  subexit();
  exit2();
  return value;
}
var phrasing = (
  /** @type {(node?: unknown) => node is PhrasingContent} */
  convert([
    "break",
    "delete",
    "emphasis",
    "footnote",
    "footnoteReference",
    "image",
    "imageReference",
    "inlineCode",
    "link",
    "linkReference",
    "strong",
    "text"
  ])
);
function root(node2, _, state, info) {
  const hasPhrasing = node2.children.some(function(d) {
    return phrasing(d);
  });
  const fn = hasPhrasing ? state.containerPhrasing : state.containerFlow;
  return fn.call(state, node2, info);
}
function checkStrong(state) {
  const marker = state.options.strong || "*";
  if (marker !== "*" && marker !== "_") {
    throw new Error(
      "Cannot serialize strong with `" + marker + "` for `options.strong`, expected `*`, or `_`"
    );
  }
  return marker;
}
strong.peek = strongPeek;
function strong(node2, _, state, info) {
  const marker = checkStrong(state);
  const exit2 = state.enter("strong");
  const tracker = state.createTracker(info);
  let value = tracker.move(marker + marker);
  value += tracker.move(
    state.containerPhrasing(node2, {
      before: value,
      after: marker,
      ...tracker.current()
    })
  );
  value += tracker.move(marker + marker);
  exit2();
  return value;
}
function strongPeek(_, _1, state) {
  return state.options.strong || "*";
}
function text(node2, _, state, info) {
  return state.safe(node2.value, info);
}
function checkRuleRepetition(state) {
  const repetition = state.options.ruleRepetition || 3;
  if (repetition < 3) {
    throw new Error(
      "Cannot serialize rules with repetition `" + repetition + "` for `options.ruleRepetition`, expected `3` or more"
    );
  }
  return repetition;
}
function thematicBreak(_, _1, state) {
  const value = (checkRule(state) + (state.options.ruleSpaces ? " " : "")).repeat(checkRuleRepetition(state));
  return state.options.ruleSpaces ? value.slice(0, -1) : value;
}
var handle = {
  blockquote,
  break: hardBreak,
  code,
  definition,
  emphasis,
  hardBreak,
  heading,
  html,
  image,
  imageReference,
  inlineCode,
  link,
  linkReference,
  list,
  listItem,
  paragraph,
  root,
  strong,
  text,
  thematicBreak
};
function gfmTableFromMarkdown() {
  return {
    enter: {
      table: enterTable,
      tableData: enterCell,
      tableHeader: enterCell,
      tableRow: enterRow
    },
    exit: {
      codeText: exitCodeText,
      table: exitTable,
      tableData: exit,
      tableHeader: exit,
      tableRow: exit
    }
  };
}
function enterTable(token) {
  const align = token._align;
  this.enter(
    {
      type: "table",
      align: align.map(function(d) {
        return d === "none" ? null : d;
      }),
      children: []
    },
    token
  );
  this.data.inTable = true;
}
function exitTable(token) {
  this.exit(token);
  this.data.inTable = void 0;
}
function enterRow(token) {
  this.enter({ type: "tableRow", children: [] }, token);
}
function exit(token) {
  this.exit(token);
}
function enterCell(token) {
  this.enter({ type: "tableCell", children: [] }, token);
}
function exitCodeText(token) {
  let value = this.resume();
  if (this.data.inTable) {
    value = value.replace(/\\([\\|])/g, replace);
  }
  const node2 = this.stack[this.stack.length - 1];
  ok(node2.type === "inlineCode");
  node2.value = value;
  this.exit(token);
}
function replace($0, $1) {
  return $1 === "|" ? $1 : $0;
}
function gfmTableToMarkdown(options) {
  const settings = options || {};
  const padding = settings.tableCellPadding;
  const alignDelimiters = settings.tablePipeAlign;
  const stringLength = settings.stringLength;
  const around = padding ? " " : "|";
  return {
    unsafe: [
      { character: "\r", inConstruct: "tableCell" },
      { character: "\n", inConstruct: "tableCell" },
      // A pipe, when followed by a tab or space (padding), or a dash or colon
      // (unpadded delimiter row), could result in a table.
      { atBreak: true, character: "|", after: "[	 :-]" },
      // A pipe in a cell must be encoded.
      { character: "|", inConstruct: "tableCell" },
      // A colon must be followed by a dash, in which case it could start a
      // delimiter row.
      { atBreak: true, character: ":", after: "-" },
      // A delimiter row can also start with a dash, when followed by more
      // dashes, a colon, or a pipe.
      // This is a stricter version than the built in check for lists, thematic
      // breaks, and setex heading underlines though:
      // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
      { atBreak: true, character: "-", after: "[:|-]" }
    ],
    handlers: {
      inlineCode: inlineCodeWithTable,
      table: handleTable,
      tableCell: handleTableCell,
      tableRow: handleTableRow
    }
  };
  function handleTable(node2, _, state, info) {
    return serializeData(handleTableAsData(node2, state, info), node2.align);
  }
  function handleTableRow(node2, _, state, info) {
    const row = handleTableRowAsData(node2, state, info);
    const value = serializeData([row]);
    return value.slice(0, value.indexOf("\n"));
  }
  function handleTableCell(node2, _, state, info) {
    const exit2 = state.enter("tableCell");
    const subexit = state.enter("phrasing");
    const value = state.containerPhrasing(node2, {
      ...info,
      before: around,
      after: around
    });
    subexit();
    exit2();
    return value;
  }
  function serializeData(matrix, align) {
    return markdownTable(matrix, {
      align,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength
    });
  }
  function handleTableAsData(node2, state, info) {
    const children = node2.children;
    let index2 = -1;
    const result = [];
    const subexit = state.enter("table");
    while (++index2 < children.length) {
      result[index2] = handleTableRowAsData(children[index2], state, info);
    }
    subexit();
    return result;
  }
  function handleTableRowAsData(node2, state, info) {
    const children = node2.children;
    let index2 = -1;
    const result = [];
    const subexit = state.enter("tableRow");
    while (++index2 < children.length) {
      result[index2] = handleTableCell(children[index2], node2, state, info);
    }
    subexit();
    return result;
  }
  function inlineCodeWithTable(node2, parent, state) {
    let value = handle.inlineCode(node2, parent, state);
    if (state.stack.includes("tableCell")) {
      value = value.replace(/\|/g, "\\$&");
    }
    return value;
  }
}
function gfmTaskListItemFromMarkdown() {
  return {
    exit: {
      taskListCheckValueChecked: exitCheck,
      taskListCheckValueUnchecked: exitCheck,
      paragraph: exitParagraphWithTaskListItem
    }
  };
}
function gfmTaskListItemToMarkdown() {
  return {
    unsafe: [{ atBreak: true, character: "-", after: "[:|-]" }],
    handlers: { listItem: listItemWithTaskListItem }
  };
}
function exitCheck(token) {
  const node2 = this.stack[this.stack.length - 2];
  ok(node2.type === "listItem");
  node2.checked = token.type === "taskListCheckValueChecked";
}
function exitParagraphWithTaskListItem(token) {
  const parent = this.stack[this.stack.length - 2];
  if (parent && parent.type === "listItem" && typeof parent.checked === "boolean") {
    const node2 = this.stack[this.stack.length - 1];
    ok(node2.type === "paragraph");
    const head = node2.children[0];
    if (head && head.type === "text") {
      const siblings = parent.children;
      let index2 = -1;
      let firstParaghraph;
      while (++index2 < siblings.length) {
        const sibling = siblings[index2];
        if (sibling.type === "paragraph") {
          firstParaghraph = sibling;
          break;
        }
      }
      if (firstParaghraph === node2) {
        head.value = head.value.slice(1);
        if (head.value.length === 0) {
          node2.children.shift();
        } else if (node2.position && head.position && typeof head.position.start.offset === "number") {
          head.position.start.column++;
          head.position.start.offset++;
          node2.position.start = Object.assign({}, head.position.start);
        }
      }
    }
  }
  this.exit(token);
}
function listItemWithTaskListItem(node2, parent, state, info) {
  const head = node2.children[0];
  const checkable = typeof node2.checked === "boolean" && head && head.type === "paragraph";
  const checkbox = "[" + (node2.checked ? "x" : " ") + "] ";
  const tracker = state.createTracker(info);
  if (checkable) {
    tracker.move(checkbox);
  }
  let value = handle.listItem(node2, parent, state, {
    ...info,
    ...tracker.current()
  });
  if (checkable) {
    value = value.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, check);
  }
  return value;
  function check($0) {
    return $0 + checkbox;
  }
}
function gfmFromMarkdown() {
  return [
    gfmAutolinkLiteralFromMarkdown(),
    gfmFootnoteFromMarkdown(),
    gfmStrikethroughFromMarkdown(),
    gfmTableFromMarkdown(),
    gfmTaskListItemFromMarkdown()
  ];
}
function gfmToMarkdown(options) {
  return {
    extensions: [
      gfmAutolinkLiteralToMarkdown(),
      gfmFootnoteToMarkdown(),
      gfmStrikethroughToMarkdown(),
      gfmTableToMarkdown(options),
      gfmTaskListItemToMarkdown()
    ]
  };
}
function splice(list22, start, remove, items) {
  const end = list22.length;
  let chunkStart = 0;
  let parameters;
  if (start < 0) {
    start = -start > end ? 0 : end + start;
  } else {
    start = start > end ? end : start;
  }
  remove = remove > 0 ? remove : 0;
  if (items.length < 1e4) {
    parameters = Array.from(items);
    parameters.unshift(start, remove);
    list22.splice(...parameters);
  } else {
    if (remove)
      list22.splice(start, remove);
    while (chunkStart < items.length) {
      parameters = items.slice(chunkStart, chunkStart + 1e4);
      parameters.unshift(start, 0);
      list22.splice(...parameters);
      chunkStart += 1e4;
      start += 1e4;
    }
  }
}
var hasOwnProperty = {}.hasOwnProperty;
function combineExtensions(extensions) {
  const all2 = {};
  let index2 = -1;
  while (++index2 < extensions.length) {
    syntaxExtension(all2, extensions[index2]);
  }
  return all2;
}
function syntaxExtension(all2, extension2) {
  let hook;
  for (hook in extension2) {
    const maybe = hasOwnProperty.call(all2, hook) ? all2[hook] : void 0;
    const left = maybe || (all2[hook] = {});
    const right = extension2[hook];
    let code3;
    if (right) {
      for (code3 in right) {
        if (!hasOwnProperty.call(left, code3))
          left[code3] = [];
        const value = right[code3];
        constructs(
          // @ts-expect-error Looks like a list.
          left[code3],
          Array.isArray(value) ? value : value ? [value] : []
        );
      }
    }
  }
}
function constructs(existing, list22) {
  let index2 = -1;
  const before = [];
  while (++index2 < list22.length) {
    (list22[index2].add === "after" ? existing : before).push(list22[index2]);
  }
  splice(existing, 0, 0, before);
}
var wwwPrefix = {
  tokenize: tokenizeWwwPrefix,
  partial: true
};
var domain = {
  tokenize: tokenizeDomain,
  partial: true
};
var path = {
  tokenize: tokenizePath,
  partial: true
};
var trail = {
  tokenize: tokenizeTrail,
  partial: true
};
var emailDomainDotTrail = {
  tokenize: tokenizeEmailDomainDotTrail,
  partial: true
};
var wwwAutolink = {
  tokenize: tokenizeWwwAutolink,
  previous: previousWww
};
var protocolAutolink = {
  tokenize: tokenizeProtocolAutolink,
  previous: previousProtocol
};
var emailAutolink = {
  tokenize: tokenizeEmailAutolink,
  previous: previousEmail
};
var text2 = {};
function gfmAutolinkLiteral() {
  return {
    text: text2
  };
}
var code2 = 48;
while (code2 < 123) {
  text2[code2] = emailAutolink;
  code2++;
  if (code2 === 58)
    code2 = 65;
  else if (code2 === 91)
    code2 = 97;
}
text2[43] = emailAutolink;
text2[45] = emailAutolink;
text2[46] = emailAutolink;
text2[95] = emailAutolink;
text2[72] = [emailAutolink, protocolAutolink];
text2[104] = [emailAutolink, protocolAutolink];
text2[87] = [emailAutolink, wwwAutolink];
text2[119] = [emailAutolink, wwwAutolink];
function tokenizeEmailAutolink(effects, ok3, nok) {
  const self2 = this;
  let dot;
  let data;
  return start;
  function start(code3) {
    if (!gfmAtext(code3) || !previousEmail.call(self2, self2.previous) || previousUnbalanced(self2.events)) {
      return nok(code3);
    }
    effects.enter("literalAutolink");
    effects.enter("literalAutolinkEmail");
    return atext(code3);
  }
  function atext(code3) {
    if (gfmAtext(code3)) {
      effects.consume(code3);
      return atext;
    }
    if (code3 === 64) {
      effects.consume(code3);
      return emailDomain;
    }
    return nok(code3);
  }
  function emailDomain(code3) {
    if (code3 === 46) {
      return effects.check(
        emailDomainDotTrail,
        emailDomainAfter,
        emailDomainDot
      )(code3);
    }
    if (code3 === 45 || code3 === 95 || asciiAlphanumeric(code3)) {
      data = true;
      effects.consume(code3);
      return emailDomain;
    }
    return emailDomainAfter(code3);
  }
  function emailDomainDot(code3) {
    effects.consume(code3);
    dot = true;
    return emailDomain;
  }
  function emailDomainAfter(code3) {
    if (data && dot && asciiAlpha(self2.previous)) {
      effects.exit("literalAutolinkEmail");
      effects.exit("literalAutolink");
      return ok3(code3);
    }
    return nok(code3);
  }
}
function tokenizeWwwAutolink(effects, ok3, nok) {
  const self2 = this;
  return wwwStart;
  function wwwStart(code3) {
    if (code3 !== 87 && code3 !== 119 || !previousWww.call(self2, self2.previous) || previousUnbalanced(self2.events)) {
      return nok(code3);
    }
    effects.enter("literalAutolink");
    effects.enter("literalAutolinkWww");
    return effects.check(
      wwwPrefix,
      effects.attempt(domain, effects.attempt(path, wwwAfter), nok),
      nok
    )(code3);
  }
  function wwwAfter(code3) {
    effects.exit("literalAutolinkWww");
    effects.exit("literalAutolink");
    return ok3(code3);
  }
}
function tokenizeProtocolAutolink(effects, ok3, nok) {
  const self2 = this;
  let buffer = "";
  let seen = false;
  return protocolStart;
  function protocolStart(code3) {
    if ((code3 === 72 || code3 === 104) && previousProtocol.call(self2, self2.previous) && !previousUnbalanced(self2.events)) {
      effects.enter("literalAutolink");
      effects.enter("literalAutolinkHttp");
      buffer += String.fromCodePoint(code3);
      effects.consume(code3);
      return protocolPrefixInside;
    }
    return nok(code3);
  }
  function protocolPrefixInside(code3) {
    if (asciiAlpha(code3) && buffer.length < 5) {
      buffer += String.fromCodePoint(code3);
      effects.consume(code3);
      return protocolPrefixInside;
    }
    if (code3 === 58) {
      const protocol = buffer.toLowerCase();
      if (protocol === "http" || protocol === "https") {
        effects.consume(code3);
        return protocolSlashesInside;
      }
    }
    return nok(code3);
  }
  function protocolSlashesInside(code3) {
    if (code3 === 47) {
      effects.consume(code3);
      if (seen) {
        return afterProtocol;
      }
      seen = true;
      return protocolSlashesInside;
    }
    return nok(code3);
  }
  function afterProtocol(code3) {
    return code3 === null || asciiControl(code3) || markdownLineEndingOrSpace(code3) || unicodeWhitespace(code3) || unicodePunctuation(code3) ? nok(code3) : effects.attempt(domain, effects.attempt(path, protocolAfter), nok)(code3);
  }
  function protocolAfter(code3) {
    effects.exit("literalAutolinkHttp");
    effects.exit("literalAutolink");
    return ok3(code3);
  }
}
function tokenizeWwwPrefix(effects, ok3, nok) {
  let size = 0;
  return wwwPrefixInside;
  function wwwPrefixInside(code3) {
    if ((code3 === 87 || code3 === 119) && size < 3) {
      size++;
      effects.consume(code3);
      return wwwPrefixInside;
    }
    if (code3 === 46 && size === 3) {
      effects.consume(code3);
      return wwwPrefixAfter;
    }
    return nok(code3);
  }
  function wwwPrefixAfter(code3) {
    return code3 === null ? nok(code3) : ok3(code3);
  }
}
function tokenizeDomain(effects, ok3, nok) {
  let underscoreInLastSegment;
  let underscoreInLastLastSegment;
  let seen;
  return domainInside;
  function domainInside(code3) {
    if (code3 === 46 || code3 === 95) {
      return effects.check(trail, domainAfter, domainAtPunctuation)(code3);
    }
    if (code3 === null || markdownLineEndingOrSpace(code3) || unicodeWhitespace(code3) || code3 !== 45 && unicodePunctuation(code3)) {
      return domainAfter(code3);
    }
    seen = true;
    effects.consume(code3);
    return domainInside;
  }
  function domainAtPunctuation(code3) {
    if (code3 === 95) {
      underscoreInLastSegment = true;
    } else {
      underscoreInLastLastSegment = underscoreInLastSegment;
      underscoreInLastSegment = void 0;
    }
    effects.consume(code3);
    return domainInside;
  }
  function domainAfter(code3) {
    if (underscoreInLastLastSegment || underscoreInLastSegment || !seen) {
      return nok(code3);
    }
    return ok3(code3);
  }
}
function tokenizePath(effects, ok3) {
  let sizeOpen = 0;
  let sizeClose = 0;
  return pathInside;
  function pathInside(code3) {
    if (code3 === 40) {
      sizeOpen++;
      effects.consume(code3);
      return pathInside;
    }
    if (code3 === 41 && sizeClose < sizeOpen) {
      return pathAtPunctuation(code3);
    }
    if (code3 === 33 || code3 === 34 || code3 === 38 || code3 === 39 || code3 === 41 || code3 === 42 || code3 === 44 || code3 === 46 || code3 === 58 || code3 === 59 || code3 === 60 || code3 === 63 || code3 === 93 || code3 === 95 || code3 === 126) {
      return effects.check(trail, ok3, pathAtPunctuation)(code3);
    }
    if (code3 === null || markdownLineEndingOrSpace(code3) || unicodeWhitespace(code3)) {
      return ok3(code3);
    }
    effects.consume(code3);
    return pathInside;
  }
  function pathAtPunctuation(code3) {
    if (code3 === 41) {
      sizeClose++;
    }
    effects.consume(code3);
    return pathInside;
  }
}
function tokenizeTrail(effects, ok3, nok) {
  return trail2;
  function trail2(code3) {
    if (code3 === 33 || code3 === 34 || code3 === 39 || code3 === 41 || code3 === 42 || code3 === 44 || code3 === 46 || code3 === 58 || code3 === 59 || code3 === 63 || code3 === 95 || code3 === 126) {
      effects.consume(code3);
      return trail2;
    }
    if (code3 === 38) {
      effects.consume(code3);
      return trailCharRefStart;
    }
    if (code3 === 93) {
      effects.consume(code3);
      return trailBracketAfter;
    }
    if (
      // `<` is an end.
      code3 === 60 || // So is whitespace.
      code3 === null || markdownLineEndingOrSpace(code3) || unicodeWhitespace(code3)
    ) {
      return ok3(code3);
    }
    return nok(code3);
  }
  function trailBracketAfter(code3) {
    if (code3 === null || code3 === 40 || code3 === 91 || markdownLineEndingOrSpace(code3) || unicodeWhitespace(code3)) {
      return ok3(code3);
    }
    return trail2(code3);
  }
  function trailCharRefStart(code3) {
    return asciiAlpha(code3) ? trailCharRefInside(code3) : nok(code3);
  }
  function trailCharRefInside(code3) {
    if (code3 === 59) {
      effects.consume(code3);
      return trail2;
    }
    if (asciiAlpha(code3)) {
      effects.consume(code3);
      return trailCharRefInside;
    }
    return nok(code3);
  }
}
function tokenizeEmailDomainDotTrail(effects, ok3, nok) {
  return start;
  function start(code3) {
    effects.consume(code3);
    return after;
  }
  function after(code3) {
    return asciiAlphanumeric(code3) ? nok(code3) : ok3(code3);
  }
}
function previousWww(code3) {
  return code3 === null || code3 === 40 || code3 === 42 || code3 === 95 || code3 === 91 || code3 === 93 || code3 === 126 || markdownLineEndingOrSpace(code3);
}
function previousProtocol(code3) {
  return !asciiAlpha(code3);
}
function previousEmail(code3) {
  return !(code3 === 47 || gfmAtext(code3));
}
function gfmAtext(code3) {
  return code3 === 43 || code3 === 45 || code3 === 46 || code3 === 95 || asciiAlphanumeric(code3);
}
function previousUnbalanced(events) {
  let index2 = events.length;
  let result = false;
  while (index2--) {
    const token = events[index2][1];
    if ((token.type === "labelLink" || token.type === "labelImage") && !token._balanced) {
      result = true;
      break;
    }
    if (token._gfmAutolinkLiteralWalkedInto) {
      result = false;
      break;
    }
  }
  if (events.length > 0 && !result) {
    events[events.length - 1][1]._gfmAutolinkLiteralWalkedInto = true;
  }
  return result;
}
function classifyCharacter(code3) {
  if (code3 === null || markdownLineEndingOrSpace(code3) || unicodeWhitespace(code3)) {
    return 1;
  }
  if (unicodePunctuation(code3)) {
    return 2;
  }
}
function resolveAll(constructs2, events, context) {
  const called = [];
  let index2 = -1;
  while (++index2 < constructs2.length) {
    const resolve = constructs2[index2].resolveAll;
    if (resolve && !called.includes(resolve)) {
      events = resolve(events, context);
      called.push(resolve);
    }
  }
  return events;
}
function markdownSpace2(code3) {
  return code3 === -2 || code3 === -1 || code3 === 32;
}
function factorySpace(effects, ok3, type, max) {
  const limit = max ? max - 1 : Number.POSITIVE_INFINITY;
  let size = 0;
  return start;
  function start(code3) {
    if (markdownSpace2(code3)) {
      effects.enter(type);
      return prefix(code3);
    }
    return ok3(code3);
  }
  function prefix(code3) {
    if (markdownSpace2(code3) && size++ < limit) {
      effects.consume(code3);
      return prefix;
    }
    effects.exit(type);
    return ok3(code3);
  }
}
var blankLine = {
  tokenize: tokenizeBlankLine,
  partial: true
};
function tokenizeBlankLine(effects, ok3, nok) {
  return start;
  function start(code3) {
    return markdownSpace(code3) ? factorySpace(effects, after, "linePrefix")(code3) : after(code3);
  }
  function after(code3) {
    return code3 === null || markdownLineEnding(code3) ? ok3(code3) : nok(code3);
  }
}
var indent = {
  tokenize: tokenizeIndent,
  partial: true
};
function gfmFootnote() {
  return {
    document: {
      [91]: {
        tokenize: tokenizeDefinitionStart,
        continuation: {
          tokenize: tokenizeDefinitionContinuation
        },
        exit: gfmFootnoteDefinitionEnd
      }
    },
    text: {
      [91]: {
        tokenize: tokenizeGfmFootnoteCall
      },
      [93]: {
        add: "after",
        tokenize: tokenizePotentialGfmFootnoteCall,
        resolveTo: resolveToPotentialGfmFootnoteCall
      }
    }
  };
}
function tokenizePotentialGfmFootnoteCall(effects, ok3, nok) {
  const self2 = this;
  let index2 = self2.events.length;
  const defined = self2.parser.gfmFootnotes || (self2.parser.gfmFootnotes = []);
  let labelStart;
  while (index2--) {
    const token = self2.events[index2][1];
    if (token.type === "labelImage") {
      labelStart = token;
      break;
    }
    if (token.type === "gfmFootnoteCall" || token.type === "labelLink" || token.type === "label" || token.type === "image" || token.type === "link") {
      break;
    }
  }
  return start;
  function start(code3) {
    if (!labelStart || !labelStart._balanced) {
      return nok(code3);
    }
    const id = normalizeIdentifier(
      self2.sliceSerialize({
        start: labelStart.end,
        end: self2.now()
      })
    );
    if (id.codePointAt(0) !== 94 || !defined.includes(id.slice(1))) {
      return nok(code3);
    }
    effects.enter("gfmFootnoteCallLabelMarker");
    effects.consume(code3);
    effects.exit("gfmFootnoteCallLabelMarker");
    return ok3(code3);
  }
}
function resolveToPotentialGfmFootnoteCall(events, context) {
  let index2 = events.length;
  while (index2--) {
    if (events[index2][1].type === "labelImage" && events[index2][0] === "enter") {
      events[index2][1];
      break;
    }
  }
  events[index2 + 1][1].type = "data";
  events[index2 + 3][1].type = "gfmFootnoteCallLabelMarker";
  const call = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, events[index2 + 3][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  };
  const marker = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, events[index2 + 3][1].end),
    end: Object.assign({}, events[index2 + 3][1].end)
  };
  marker.end.column++;
  marker.end.offset++;
  marker.end._bufferIndex++;
  const string3 = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, marker.end),
    end: Object.assign({}, events[events.length - 1][1].start)
  };
  const chunk = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, string3.start),
    end: Object.assign({}, string3.end)
  };
  const replacement = [
    // Take the `labelImageMarker` (now `data`, the `!`)
    events[index2 + 1],
    events[index2 + 2],
    ["enter", call, context],
    // The `[`
    events[index2 + 3],
    events[index2 + 4],
    // The `^`.
    ["enter", marker, context],
    ["exit", marker, context],
    // Everything in between.
    ["enter", string3, context],
    ["enter", chunk, context],
    ["exit", chunk, context],
    ["exit", string3, context],
    // The ending (`]`, properly parsed and labelled).
    events[events.length - 2],
    events[events.length - 1],
    ["exit", call, context]
  ];
  events.splice(index2, events.length - index2 + 1, ...replacement);
  return events;
}
function tokenizeGfmFootnoteCall(effects, ok3, nok) {
  const self2 = this;
  const defined = self2.parser.gfmFootnotes || (self2.parser.gfmFootnotes = []);
  let size = 0;
  let data;
  return start;
  function start(code3) {
    effects.enter("gfmFootnoteCall");
    effects.enter("gfmFootnoteCallLabelMarker");
    effects.consume(code3);
    effects.exit("gfmFootnoteCallLabelMarker");
    return callStart;
  }
  function callStart(code3) {
    if (code3 !== 94)
      return nok(code3);
    effects.enter("gfmFootnoteCallMarker");
    effects.consume(code3);
    effects.exit("gfmFootnoteCallMarker");
    effects.enter("gfmFootnoteCallString");
    effects.enter("chunkString").contentType = "string";
    return callData;
  }
  function callData(code3) {
    if (
      // Too long.
      size > 999 || // Closing brace with nothing.
      code3 === 93 && !data || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      code3 === null || code3 === 91 || markdownLineEndingOrSpace(code3)
    ) {
      return nok(code3);
    }
    if (code3 === 93) {
      effects.exit("chunkString");
      const token = effects.exit("gfmFootnoteCallString");
      if (!defined.includes(normalizeIdentifier(self2.sliceSerialize(token)))) {
        return nok(code3);
      }
      effects.enter("gfmFootnoteCallLabelMarker");
      effects.consume(code3);
      effects.exit("gfmFootnoteCallLabelMarker");
      effects.exit("gfmFootnoteCall");
      return ok3;
    }
    if (!markdownLineEndingOrSpace(code3)) {
      data = true;
    }
    size++;
    effects.consume(code3);
    return code3 === 92 ? callEscape : callData;
  }
  function callEscape(code3) {
    if (code3 === 91 || code3 === 92 || code3 === 93) {
      effects.consume(code3);
      size++;
      return callData;
    }
    return callData(code3);
  }
}
function tokenizeDefinitionStart(effects, ok3, nok) {
  const self2 = this;
  const defined = self2.parser.gfmFootnotes || (self2.parser.gfmFootnotes = []);
  let identifier;
  let size = 0;
  let data;
  return start;
  function start(code3) {
    effects.enter("gfmFootnoteDefinition")._container = true;
    effects.enter("gfmFootnoteDefinitionLabel");
    effects.enter("gfmFootnoteDefinitionLabelMarker");
    effects.consume(code3);
    effects.exit("gfmFootnoteDefinitionLabelMarker");
    return labelAtMarker;
  }
  function labelAtMarker(code3) {
    if (code3 === 94) {
      effects.enter("gfmFootnoteDefinitionMarker");
      effects.consume(code3);
      effects.exit("gfmFootnoteDefinitionMarker");
      effects.enter("gfmFootnoteDefinitionLabelString");
      effects.enter("chunkString").contentType = "string";
      return labelInside;
    }
    return nok(code3);
  }
  function labelInside(code3) {
    if (
      // Too long.
      size > 999 || // Closing brace with nothing.
      code3 === 93 && !data || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      code3 === null || code3 === 91 || markdownLineEndingOrSpace(code3)
    ) {
      return nok(code3);
    }
    if (code3 === 93) {
      effects.exit("chunkString");
      const token = effects.exit("gfmFootnoteDefinitionLabelString");
      identifier = normalizeIdentifier(self2.sliceSerialize(token));
      effects.enter("gfmFootnoteDefinitionLabelMarker");
      effects.consume(code3);
      effects.exit("gfmFootnoteDefinitionLabelMarker");
      effects.exit("gfmFootnoteDefinitionLabel");
      return labelAfter;
    }
    if (!markdownLineEndingOrSpace(code3)) {
      data = true;
    }
    size++;
    effects.consume(code3);
    return code3 === 92 ? labelEscape : labelInside;
  }
  function labelEscape(code3) {
    if (code3 === 91 || code3 === 92 || code3 === 93) {
      effects.consume(code3);
      size++;
      return labelInside;
    }
    return labelInside(code3);
  }
  function labelAfter(code3) {
    if (code3 === 58) {
      effects.enter("definitionMarker");
      effects.consume(code3);
      effects.exit("definitionMarker");
      if (!defined.includes(identifier)) {
        defined.push(identifier);
      }
      return factorySpace(
        effects,
        whitespaceAfter,
        "gfmFootnoteDefinitionWhitespace"
      );
    }
    return nok(code3);
  }
  function whitespaceAfter(code3) {
    return ok3(code3);
  }
}
function tokenizeDefinitionContinuation(effects, ok3, nok) {
  return effects.check(blankLine, ok3, effects.attempt(indent, ok3, nok));
}
function gfmFootnoteDefinitionEnd(effects) {
  effects.exit("gfmFootnoteDefinition");
}
function tokenizeIndent(effects, ok3, nok) {
  const self2 = this;
  return factorySpace(
    effects,
    afterPrefix,
    "gfmFootnoteDefinitionIndent",
    4 + 1
  );
  function afterPrefix(code3) {
    const tail = self2.events[self2.events.length - 1];
    return tail && tail[1].type === "gfmFootnoteDefinitionIndent" && tail[2].sliceSerialize(tail[1], true).length === 4 ? ok3(code3) : nok(code3);
  }
}
function gfmStrikethrough(options) {
  const options_ = options || {};
  let single = options_.singleTilde;
  const tokenizer = {
    tokenize: tokenizeStrikethrough,
    resolveAll: resolveAllStrikethrough
  };
  if (single === null || single === void 0) {
    single = true;
  }
  return {
    text: {
      [126]: tokenizer
    },
    insideSpan: {
      null: [tokenizer]
    },
    attentionMarkers: {
      null: [126]
    }
  };
  function resolveAllStrikethrough(events, context) {
    let index2 = -1;
    while (++index2 < events.length) {
      if (events[index2][0] === "enter" && events[index2][1].type === "strikethroughSequenceTemporary" && events[index2][1]._close) {
        let open = index2;
        while (open--) {
          if (events[open][0] === "exit" && events[open][1].type === "strikethroughSequenceTemporary" && events[open][1]._open && // If the sizes are the same:
          events[index2][1].end.offset - events[index2][1].start.offset === events[open][1].end.offset - events[open][1].start.offset) {
            events[index2][1].type = "strikethroughSequence";
            events[open][1].type = "strikethroughSequence";
            const strikethrough2 = {
              type: "strikethrough",
              start: Object.assign({}, events[open][1].start),
              end: Object.assign({}, events[index2][1].end)
            };
            const text32 = {
              type: "strikethroughText",
              start: Object.assign({}, events[open][1].end),
              end: Object.assign({}, events[index2][1].start)
            };
            const nextEvents = [
              ["enter", strikethrough2, context],
              ["enter", events[open][1], context],
              ["exit", events[open][1], context],
              ["enter", text32, context]
            ];
            const insideSpan2 = context.parser.constructs.insideSpan.null;
            if (insideSpan2) {
              splice(
                nextEvents,
                nextEvents.length,
                0,
                resolveAll(insideSpan2, events.slice(open + 1, index2), context)
              );
            }
            splice(nextEvents, nextEvents.length, 0, [
              ["exit", text32, context],
              ["enter", events[index2][1], context],
              ["exit", events[index2][1], context],
              ["exit", strikethrough2, context]
            ]);
            splice(events, open - 1, index2 - open + 3, nextEvents);
            index2 = open + nextEvents.length - 2;
            break;
          }
        }
      }
    }
    index2 = -1;
    while (++index2 < events.length) {
      if (events[index2][1].type === "strikethroughSequenceTemporary") {
        events[index2][1].type = "data";
      }
    }
    return events;
  }
  function tokenizeStrikethrough(effects, ok3, nok) {
    const previous2 = this.previous;
    const events = this.events;
    let size = 0;
    return start;
    function start(code3) {
      if (previous2 === 126 && events[events.length - 1][1].type !== "characterEscape") {
        return nok(code3);
      }
      effects.enter("strikethroughSequenceTemporary");
      return more(code3);
    }
    function more(code3) {
      const before = classifyCharacter(previous2);
      if (code3 === 126) {
        if (size > 1)
          return nok(code3);
        effects.consume(code3);
        size++;
        return more;
      }
      if (size < 2 && !single)
        return nok(code3);
      const token = effects.exit("strikethroughSequenceTemporary");
      const after = classifyCharacter(code3);
      token._open = !after || after === 2 && Boolean(before);
      token._close = !before || before === 2 && Boolean(after);
      return ok3(code3);
    }
  }
}
var EditMap = class {
  /**
   * Create a new edit map.
   */
  constructor() {
    this.map = [];
  }
  /**
   * Create an edit: a remove and/or add at a certain place.
   *
   * @param {number} index
   * @param {number} remove
   * @param {Array<Event>} add
   * @returns {undefined}
   */
  add(index2, remove, add) {
    addImpl(this, index2, remove, add);
  }
  // To do: add this when moving to `micromark`.
  // /**
  //  * Create an edit: but insert `add` before existing additions.
  //  *
  //  * @param {number} index
  //  * @param {number} remove
  //  * @param {Array<Event>} add
  //  * @returns {undefined}
  //  */
  // addBefore(index, remove, add) {
  //   addImpl(this, index, remove, add, true)
  // }
  /**
   * Done, change the events.
   *
   * @param {Array<Event>} events
   * @returns {undefined}
   */
  consume(events) {
    this.map.sort(function(a, b) {
      return a[0] - b[0];
    });
    if (this.map.length === 0) {
      return;
    }
    let index2 = this.map.length;
    const vecs = [];
    while (index2 > 0) {
      index2 -= 1;
      vecs.push(
        events.slice(this.map[index2][0] + this.map[index2][1]),
        this.map[index2][2]
      );
      events.length = this.map[index2][0];
    }
    vecs.push([...events]);
    events.length = 0;
    let slice = vecs.pop();
    while (slice) {
      events.push(...slice);
      slice = vecs.pop();
    }
    this.map.length = 0;
  }
};
function addImpl(editMap, at, remove, add) {
  let index2 = 0;
  if (remove === 0 && add.length === 0) {
    return;
  }
  while (index2 < editMap.map.length) {
    if (editMap.map[index2][0] === at) {
      editMap.map[index2][1] += remove;
      editMap.map[index2][2].push(...add);
      return;
    }
    index2 += 1;
  }
  editMap.map.push([at, remove, add]);
}
function gfmTableAlign(events, index2) {
  let inDelimiterRow = false;
  const align = [];
  while (index2 < events.length) {
    const event = events[index2];
    if (inDelimiterRow) {
      if (event[0] === "enter") {
        if (event[1].type === "tableContent") {
          align.push(
            events[index2 + 1][1].type === "tableDelimiterMarker" ? "left" : "none"
          );
        }
      } else if (event[1].type === "tableContent") {
        if (events[index2 - 1][1].type === "tableDelimiterMarker") {
          const alignIndex = align.length - 1;
          align[alignIndex] = align[alignIndex] === "left" ? "center" : "right";
        }
      } else if (event[1].type === "tableDelimiterRow") {
        break;
      }
    } else if (event[0] === "enter" && event[1].type === "tableDelimiterRow") {
      inDelimiterRow = true;
    }
    index2 += 1;
  }
  return align;
}
function gfmTable() {
  return {
    flow: {
      null: {
        tokenize: tokenizeTable,
        resolveAll: resolveTable
      }
    }
  };
}
function tokenizeTable(effects, ok3, nok) {
  const self2 = this;
  let size = 0;
  let sizeB = 0;
  let seen;
  return start;
  function start(code3) {
    let index2 = self2.events.length - 1;
    while (index2 > -1) {
      const type = self2.events[index2][1].type;
      if (type === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      type === "linePrefix")
        index2--;
      else
        break;
    }
    const tail = index2 > -1 ? self2.events[index2][1].type : null;
    const next = tail === "tableHead" || tail === "tableRow" ? bodyRowStart : headRowBefore;
    if (next === bodyRowStart && self2.parser.lazy[self2.now().line]) {
      return nok(code3);
    }
    return next(code3);
  }
  function headRowBefore(code3) {
    effects.enter("tableHead");
    effects.enter("tableRow");
    return headRowStart(code3);
  }
  function headRowStart(code3) {
    if (code3 === 124) {
      return headRowBreak(code3);
    }
    seen = true;
    sizeB += 1;
    return headRowBreak(code3);
  }
  function headRowBreak(code3) {
    if (code3 === null) {
      return nok(code3);
    }
    if (markdownLineEnding(code3)) {
      if (sizeB > 1) {
        sizeB = 0;
        self2.interrupt = true;
        effects.exit("tableRow");
        effects.enter("lineEnding");
        effects.consume(code3);
        effects.exit("lineEnding");
        return headDelimiterStart;
      }
      return nok(code3);
    }
    if (markdownSpace(code3)) {
      return factorySpace(effects, headRowBreak, "whitespace")(code3);
    }
    sizeB += 1;
    if (seen) {
      seen = false;
      size += 1;
    }
    if (code3 === 124) {
      effects.enter("tableCellDivider");
      effects.consume(code3);
      effects.exit("tableCellDivider");
      seen = true;
      return headRowBreak;
    }
    effects.enter("data");
    return headRowData(code3);
  }
  function headRowData(code3) {
    if (code3 === null || code3 === 124 || markdownLineEndingOrSpace(code3)) {
      effects.exit("data");
      return headRowBreak(code3);
    }
    effects.consume(code3);
    return code3 === 92 ? headRowEscape : headRowData;
  }
  function headRowEscape(code3) {
    if (code3 === 92 || code3 === 124) {
      effects.consume(code3);
      return headRowData;
    }
    return headRowData(code3);
  }
  function headDelimiterStart(code3) {
    self2.interrupt = false;
    if (self2.parser.lazy[self2.now().line]) {
      return nok(code3);
    }
    effects.enter("tableDelimiterRow");
    seen = false;
    if (markdownSpace(code3)) {
      return factorySpace(
        effects,
        headDelimiterBefore,
        "linePrefix",
        self2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
      )(code3);
    }
    return headDelimiterBefore(code3);
  }
  function headDelimiterBefore(code3) {
    if (code3 === 45 || code3 === 58) {
      return headDelimiterValueBefore(code3);
    }
    if (code3 === 124) {
      seen = true;
      effects.enter("tableCellDivider");
      effects.consume(code3);
      effects.exit("tableCellDivider");
      return headDelimiterCellBefore;
    }
    return headDelimiterNok(code3);
  }
  function headDelimiterCellBefore(code3) {
    if (markdownSpace(code3)) {
      return factorySpace(effects, headDelimiterValueBefore, "whitespace")(code3);
    }
    return headDelimiterValueBefore(code3);
  }
  function headDelimiterValueBefore(code3) {
    if (code3 === 58) {
      sizeB += 1;
      seen = true;
      effects.enter("tableDelimiterMarker");
      effects.consume(code3);
      effects.exit("tableDelimiterMarker");
      return headDelimiterLeftAlignmentAfter;
    }
    if (code3 === 45) {
      sizeB += 1;
      return headDelimiterLeftAlignmentAfter(code3);
    }
    if (code3 === null || markdownLineEnding(code3)) {
      return headDelimiterCellAfter(code3);
    }
    return headDelimiterNok(code3);
  }
  function headDelimiterLeftAlignmentAfter(code3) {
    if (code3 === 45) {
      effects.enter("tableDelimiterFiller");
      return headDelimiterFiller(code3);
    }
    return headDelimiterNok(code3);
  }
  function headDelimiterFiller(code3) {
    if (code3 === 45) {
      effects.consume(code3);
      return headDelimiterFiller;
    }
    if (code3 === 58) {
      seen = true;
      effects.exit("tableDelimiterFiller");
      effects.enter("tableDelimiterMarker");
      effects.consume(code3);
      effects.exit("tableDelimiterMarker");
      return headDelimiterRightAlignmentAfter;
    }
    effects.exit("tableDelimiterFiller");
    return headDelimiterRightAlignmentAfter(code3);
  }
  function headDelimiterRightAlignmentAfter(code3) {
    if (markdownSpace(code3)) {
      return factorySpace(effects, headDelimiterCellAfter, "whitespace")(code3);
    }
    return headDelimiterCellAfter(code3);
  }
  function headDelimiterCellAfter(code3) {
    if (code3 === 124) {
      return headDelimiterBefore(code3);
    }
    if (code3 === null || markdownLineEnding(code3)) {
      if (!seen || size !== sizeB) {
        return headDelimiterNok(code3);
      }
      effects.exit("tableDelimiterRow");
      effects.exit("tableHead");
      return ok3(code3);
    }
    return headDelimiterNok(code3);
  }
  function headDelimiterNok(code3) {
    return nok(code3);
  }
  function bodyRowStart(code3) {
    effects.enter("tableRow");
    return bodyRowBreak(code3);
  }
  function bodyRowBreak(code3) {
    if (code3 === 124) {
      effects.enter("tableCellDivider");
      effects.consume(code3);
      effects.exit("tableCellDivider");
      return bodyRowBreak;
    }
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("tableRow");
      return ok3(code3);
    }
    if (markdownSpace(code3)) {
      return factorySpace(effects, bodyRowBreak, "whitespace")(code3);
    }
    effects.enter("data");
    return bodyRowData(code3);
  }
  function bodyRowData(code3) {
    if (code3 === null || code3 === 124 || markdownLineEndingOrSpace(code3)) {
      effects.exit("data");
      return bodyRowBreak(code3);
    }
    effects.consume(code3);
    return code3 === 92 ? bodyRowEscape : bodyRowData;
  }
  function bodyRowEscape(code3) {
    if (code3 === 92 || code3 === 124) {
      effects.consume(code3);
      return bodyRowData;
    }
    return bodyRowData(code3);
  }
}
function resolveTable(events, context) {
  let index2 = -1;
  let inFirstCellAwaitingPipe = true;
  let rowKind = 0;
  let lastCell = [0, 0, 0, 0];
  let cell = [0, 0, 0, 0];
  let afterHeadAwaitingFirstBodyRow = false;
  let lastTableEnd = 0;
  let currentTable;
  let currentBody;
  let currentCell;
  const map4 = new EditMap();
  while (++index2 < events.length) {
    const event = events[index2];
    const token = event[1];
    if (event[0] === "enter") {
      if (token.type === "tableHead") {
        afterHeadAwaitingFirstBodyRow = false;
        if (lastTableEnd !== 0) {
          flushTableEnd(map4, context, lastTableEnd, currentTable, currentBody);
          currentBody = void 0;
          lastTableEnd = 0;
        }
        currentTable = {
          type: "table",
          start: Object.assign({}, token.start),
          // Note: correct end is set later.
          end: Object.assign({}, token.end)
        };
        map4.add(index2, 0, [["enter", currentTable, context]]);
      } else if (token.type === "tableRow" || token.type === "tableDelimiterRow") {
        inFirstCellAwaitingPipe = true;
        currentCell = void 0;
        lastCell = [0, 0, 0, 0];
        cell = [0, index2 + 1, 0, 0];
        if (afterHeadAwaitingFirstBodyRow) {
          afterHeadAwaitingFirstBodyRow = false;
          currentBody = {
            type: "tableBody",
            start: Object.assign({}, token.start),
            // Note: correct end is set later.
            end: Object.assign({}, token.end)
          };
          map4.add(index2, 0, [["enter", currentBody, context]]);
        }
        rowKind = token.type === "tableDelimiterRow" ? 2 : currentBody ? 3 : 1;
      } else if (rowKind && (token.type === "data" || token.type === "tableDelimiterMarker" || token.type === "tableDelimiterFiller")) {
        inFirstCellAwaitingPipe = false;
        if (cell[2] === 0) {
          if (lastCell[1] !== 0) {
            cell[0] = cell[1];
            currentCell = flushCell(
              map4,
              context,
              lastCell,
              rowKind,
              void 0,
              currentCell
            );
            lastCell = [0, 0, 0, 0];
          }
          cell[2] = index2;
        }
      } else if (token.type === "tableCellDivider") {
        if (inFirstCellAwaitingPipe) {
          inFirstCellAwaitingPipe = false;
        } else {
          if (lastCell[1] !== 0) {
            cell[0] = cell[1];
            currentCell = flushCell(
              map4,
              context,
              lastCell,
              rowKind,
              void 0,
              currentCell
            );
          }
          lastCell = cell;
          cell = [lastCell[1], index2, 0, 0];
        }
      }
    } else if (token.type === "tableHead") {
      afterHeadAwaitingFirstBodyRow = true;
      lastTableEnd = index2;
    } else if (token.type === "tableRow" || token.type === "tableDelimiterRow") {
      lastTableEnd = index2;
      if (lastCell[1] !== 0) {
        cell[0] = cell[1];
        currentCell = flushCell(
          map4,
          context,
          lastCell,
          rowKind,
          index2,
          currentCell
        );
      } else if (cell[1] !== 0) {
        currentCell = flushCell(map4, context, cell, rowKind, index2, currentCell);
      }
      rowKind = 0;
    } else if (rowKind && (token.type === "data" || token.type === "tableDelimiterMarker" || token.type === "tableDelimiterFiller")) {
      cell[3] = index2;
    }
  }
  if (lastTableEnd !== 0) {
    flushTableEnd(map4, context, lastTableEnd, currentTable, currentBody);
  }
  map4.consume(context.events);
  index2 = -1;
  while (++index2 < context.events.length) {
    const event = context.events[index2];
    if (event[0] === "enter" && event[1].type === "table") {
      event[1]._align = gfmTableAlign(context.events, index2);
    }
  }
  return events;
}
function flushCell(map4, context, range, rowKind, rowEnd, previousCell) {
  const groupName = rowKind === 1 ? "tableHeader" : rowKind === 2 ? "tableDelimiter" : "tableData";
  const valueName = "tableContent";
  if (range[0] !== 0) {
    previousCell.end = Object.assign({}, getPoint(context.events, range[0]));
    map4.add(range[0], 0, [["exit", previousCell, context]]);
  }
  const now = getPoint(context.events, range[1]);
  previousCell = {
    type: groupName,
    start: Object.assign({}, now),
    // Note: correct end is set later.
    end: Object.assign({}, now)
  };
  map4.add(range[1], 0, [["enter", previousCell, context]]);
  if (range[2] !== 0) {
    const relatedStart = getPoint(context.events, range[2]);
    const relatedEnd = getPoint(context.events, range[3]);
    const valueToken = {
      type: valueName,
      start: Object.assign({}, relatedStart),
      end: Object.assign({}, relatedEnd)
    };
    map4.add(range[2], 0, [["enter", valueToken, context]]);
    if (rowKind !== 2) {
      const start = context.events[range[2]];
      const end = context.events[range[3]];
      start[1].end = Object.assign({}, end[1].end);
      start[1].type = "chunkText";
      start[1].contentType = "text";
      if (range[3] > range[2] + 1) {
        const a = range[2] + 1;
        const b = range[3] - range[2] - 1;
        map4.add(a, b, []);
      }
    }
    map4.add(range[3] + 1, 0, [["exit", valueToken, context]]);
  }
  if (rowEnd !== void 0) {
    previousCell.end = Object.assign({}, getPoint(context.events, rowEnd));
    map4.add(rowEnd, 0, [["exit", previousCell, context]]);
    previousCell = void 0;
  }
  return previousCell;
}
function flushTableEnd(map4, context, index2, table2, tableBody) {
  const exits = [];
  const related = getPoint(context.events, index2);
  if (tableBody) {
    tableBody.end = Object.assign({}, related);
    exits.push(["exit", tableBody, context]);
  }
  table2.end = Object.assign({}, related);
  exits.push(["exit", table2, context]);
  map4.add(index2 + 1, 0, exits);
}
function getPoint(events, index2) {
  const event = events[index2];
  const side = event[0] === "enter" ? "start" : "end";
  return event[1][side];
}
var tasklistCheck = {
  tokenize: tokenizeTasklistCheck
};
function gfmTaskListItem() {
  return {
    text: {
      [91]: tasklistCheck
    }
  };
}
function tokenizeTasklistCheck(effects, ok3, nok) {
  const self2 = this;
  return open;
  function open(code3) {
    if (
      // Exit if there’s stuff before.
      self2.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !self2._gfmTasklistFirstContentOfListItem
    ) {
      return nok(code3);
    }
    effects.enter("taskListCheck");
    effects.enter("taskListCheckMarker");
    effects.consume(code3);
    effects.exit("taskListCheckMarker");
    return inside;
  }
  function inside(code3) {
    if (markdownLineEndingOrSpace(code3)) {
      effects.enter("taskListCheckValueUnchecked");
      effects.consume(code3);
      effects.exit("taskListCheckValueUnchecked");
      return close;
    }
    if (code3 === 88 || code3 === 120) {
      effects.enter("taskListCheckValueChecked");
      effects.consume(code3);
      effects.exit("taskListCheckValueChecked");
      return close;
    }
    return nok(code3);
  }
  function close(code3) {
    if (code3 === 93) {
      effects.enter("taskListCheckMarker");
      effects.consume(code3);
      effects.exit("taskListCheckMarker");
      effects.exit("taskListCheck");
      return after;
    }
    return nok(code3);
  }
  function after(code3) {
    if (markdownLineEnding(code3)) {
      return ok3(code3);
    }
    if (markdownSpace(code3)) {
      return effects.check(
        {
          tokenize: spaceThenNonSpace
        },
        ok3,
        nok
      )(code3);
    }
    return nok(code3);
  }
}
function spaceThenNonSpace(effects, ok3, nok) {
  return factorySpace(effects, after, "whitespace");
  function after(code3) {
    return code3 === null ? nok(code3) : ok3(code3);
  }
}
function gfm(options) {
  return combineExtensions([
    gfmAutolinkLiteral(),
    gfmFootnote(),
    gfmStrikethrough(options),
    gfmTable(),
    gfmTaskListItem()
  ]);
}
var emptyOptions2 = {};
function remarkGfm(options) {
  const self2 = (
    /** @type {Processor} */
    this
  );
  const settings = options || emptyOptions2;
  const data = self2.data();
  const micromarkExtensions = data.micromarkExtensions || (data.micromarkExtensions = []);
  const fromMarkdownExtensions = data.fromMarkdownExtensions || (data.fromMarkdownExtensions = []);
  const toMarkdownExtensions = data.toMarkdownExtensions || (data.toMarkdownExtensions = []);
  micromarkExtensions.push(gfm(settings));
  fromMarkdownExtensions.push(gfmFromMarkdown());
  toMarkdownExtensions.push(gfmToMarkdown(settings));
}
var gfmPlugin = (options = {}) => ({ remarkPlugin: [remarkGfm, options] });
export {
  createParser as c,
  gfmPlugin as g,
  nonNullable as n,
  resolveComponent as r,
  svgTags as s
};
