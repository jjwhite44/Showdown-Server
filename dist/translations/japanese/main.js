"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var main_exports = {};
__export(main_exports, {
  translations: () => translations
});
module.exports = __toCommonJS(main_exports);
const translations = {
  name: "Japanese",
  strings: {
    "namelocked": "\u30E6\u30FC\u30B6\u30FC\u540D\u30ED\u30C3\u30AF",
    "locked": "\u30ED\u30C3\u30AF",
    "autoconfirmed": "\u81EA\u52D5\u767B\u9332\u8A8D\u8A3C\u6E08\u307F",
    "trusted": "\u4FE1\u983C\u3042\u308A",
    "Please follow the rules:": "\u30EB\u30FC\u30EB\u3092\u5B88\u3063\u3066\u304F\u3060\u3055\u3044:",
    "[TN: Link to the PS rules for your language (path after pokemonshowdown.com]/rules": "/pages/rules-ja",
    "Global Rules": "\u5168\u90E8\u5C4B\u5171\u901A\u30EB\u30FC\u30EB",
    "${room} room rules": "${room}\u306E\u30EB\u30FC\u30EB",
    "<strong>Global ranks</strong>": "<strong>\u30B0\u30ED\u30FC\u30D0\u30EB\u30E6\u30FC\u30B6\u30FC\u30E9\u30F3\u30AF</strong>",
    "+ <strong>Global Voice</strong> - They can use ! commands like !groups": '<strong>\u30B0\u30ED\u30FC\u30D0\u30EB\u30DC\u30A4\u30B9</strong>(+): \u30D7\u30EC\u30D5\u30A3\u30C3\u30AF\u30B9\u3068\u3057\u3066"/"\u306E\u4EE3\u308F\u308A\u306B"!"\u3092\u4F7F\u3063\u3066\u30B3\u30DE\u30F3\u30C9\u306E\u7D50\u679C\u3092\u90E8\u5C4B\u306B\u8868\u793A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u3002',
    "% <strong>Global Driver</strong> - Like Voice, and they can also lock users and check for alts": "<strong>\u30B0\u30ED\u30FC\u30D0\u30EB\u30C9\u30E9\u30A4\u30D0\u30FC</strong>(%): \u30DC\u30A4\u30B9\u306B\u4F3C\u3066\u3044\u308B\u304C\u4E0A\u8A18\u306B\u52A0\u3048\u3066\u30E6\u30FC\u30B6\u30FC\u3092\u30ED\u30C3\u30AF\u3057\u305F\u308A\u3001\u4ED6\u306B\u4F7F\u3063\u3066\u3044\u308B\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u78BA\u8A8D\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u3002",
    "@ <strong>Global Moderator</strong> - The above, and they can globally ban users": "<strong>\u30B0\u30ED\u30FC\u30D0\u30EB\u30E2\u30C7\u30EC\u30FC\u30BF</strong>(@): \u4E0A\u8A18\u306B\u52A0\u3048\u3066\u30E6\u30FC\u30B6\u30FC\u3092\u30B5\u30A4\u30C8\u5168\u4F53\u304B\u3089BAN\u3067\u304D\u308B\u3002",
    "* <strong>Global Bot</strong> - An automated account that can use HTML anywhere": "<strong>\u30B0\u30ED\u30FC\u30D0\u30EB\u30DC\u30C3\u30C8</strong>(*): \u3069\u3053\u3067\u3082mute\u3084BAN\u3092\u3057\u305F\u308A\u3001HTML\u3092\u6271\u3046\u3053\u3068\u304C\u3067\u304D\u308B\u81EA\u52D5\u5316\u3055\u308C\u305F\u30A2\u30AB\u30A6\u30F3\u30C8\u3002",
    "~ <strong>Global Administrator</strong> - They can do anything, like change what this message says and promote users globally": "<strong>\u30B0\u30ED\u30FC\u30D0\u30EB\u30A2\u30C9\u30DF\u30CB\u30B9\u30C8\u30EC\u30FC\u30BF\u30FC</strong>(~): \u4F55\u3067\u3082\u3067\u304D\u308B\u3002\u3053\u306E\u6587\u7AE0\u3092\u7DE8\u96C6\u3057\u305F\u308A\u3001\u30E6\u30FC\u30B6\u30FC\u3092\u30B0\u30ED\u30FC\u30D0\u30EB\u306B\u6607\u683C\u3055\u305B\u305F\u308A\u3067\u304D\u308B\u3002",
    "<strong>Room ranks</strong>": "<strong>\u65E5\u672C\u8A9E\u90E8\u5C4B\u306E\u30E6\u30FC\u30B6\u30FC\u30E9\u30F3\u30AF</strong>",
    "^ <strong>Prize Winner</strong> - They don't have any powers beyond a symbol.": "<strong>\u30D7\u30E9\u30A4\u30BA\u30A6\u30A3\u30CA\u30FC</strong>(^): \u90E8\u5C4B\u306E\u30B7\u30F3\u30DC\u30EB\u3084\u8C61\u5FB4\u3067\u3042\u308A\u3001\u4F55\u3082\u6A29\u9650\u3092\u6301\u3061\u307E\u305B\u3093\u3002",
    "+ <strong>Voice</strong> - They can use ! commands like !groups": "<strong>\u30DC\u30A4\u30B9</strong>(+): \u30D7\u30EC\u30D5\u30A3\u30C3\u30AF\u30B9\u3068\u3057\u3066/\u306E\u4EE3\u308F\u308A\u306B!\u3092\u4F7F\u3063\u3066\u30B3\u30DE\u30F3\u30C9\u306E\u7D50\u679C\u3092\u90E8\u5C4B\u306B\u8868\u793A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u3002",
    "% <strong>Driver</strong> - The above, and they can mute and warn": "<strong>\u30C9\u30E9\u30A4\u30D0\u30FC</strong>(%): \u4E0A\u8A18\u306B\u52A0\u3048\u3066\u8B66\u544A\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u51FA\u3057\u305F\u308A\u30E6\u30FC\u30B6\u30FC\u3092\u77ED\u6642\u9593\u558B\u308C\u306A\u304F(\u30DF\u30E5\u30FC\u30C8)\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u3002",
    "@ <strong>Moderator</strong> - The above, and they can room ban users": "<strong>\u30E2\u30C7\u30EC\u30FC\u30BF</strong>(@): \u4E0A\u8A18\u306B\u52A0\u3048\u3066\u30E6\u30FC\u30B6\u30FC\u3092\u90E8\u5C4B\u304B\u3089BAN\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u3002",
    "* <strong>Bot</strong> - An automated account that can mute, warn, and use HTML": "<strong>\u30DC\u30C3\u30C8</strong>(*): mute\u3084BAN\u3092\u3057\u305F\u308A\u3001HTML\u3092\u6271\u3046\u3053\u3068\u304C\u3067\u304D\u308B\u81EA\u52D5\u5316\u3055\u308C\u305F\u30A2\u30AB\u30A6\u30F3\u30C8\u3002",
    "# <strong>Room Owner</strong> - They are leaders of the room and can almost totally control it": "<strong>\u30EB\u30FC\u30E0\u30AA\u30FC\u30CA\u30FC</strong>(#): \u3053\u306E\u90E8\u5C4B\u306E\u30EA\u30FC\u30C0\u30FC\u3067\u307B\u3068\u3093\u3069\u306E\u3053\u3068\u304C\u3067\u304D\u308B\u3002",
    "/help OR /h OR /? - Gives you help.": "/help \u53C8\u306F /h \u307E\u305F\u306F /? - \u30D8\u30EB\u30D7\u3092\u8868\u793A\u3059\u308B",
    "For an overview of room commands, use /roomhelp": "\u30C1\u30E3\u30C3\u30C8\u90E8\u5C4B\u5C02\u7528\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u3001/roomhelp\u3067\u53C2\u7167\u3067\u304D\u307E\u3059",
    "For details of a specific command, use something like: /help data": "\u7279\u5B9A\u306E\u30B3\u30DE\u30F3\u30C9\u306E\u30D8\u30EB\u30D7\u306F /help [\u30B3\u30DE\u30F3\u30C9] \u3067\u8868\u793A\u3055\u308C\u307E\u3059\u3002\u4F8B: /help data",
    "COMMANDS": "\u30B3\u30DE\u30F3\u30C9\u4E00\u89A7",
    "BATTLE ROOM COMMANDS": "\u5BFE\u6226\u30C1\u30E3\u30C3\u30C8\u7528\u30B3\u30DE\u30F3\u30C9",
    "OPTION COMMANDS": "\u8A2D\u5B9A\u30B3\u30DE\u30F3\u30C9",
    "INFORMATIONAL/RESOURCE COMMANDS": "\u60C5\u5831\u30B3\u30DE\u30F3\u30C9",
    "DATA COMMANDS": "\u30DD\u30B1\u30E2\u30F3\u30C7\u30FC\u30BF\u30B3\u30DE\u30F3\u30C9",
    "DRIVER COMMANDS": "\u30C9\u30E9\u30A4\u30D0\u30FC(%)\u30B3\u30DE\u30F3\u30C9",
    "MODERATOR COMMANDS": "\u30E2\u30C7\u30EC\u30FC\u30BF\u30FC(@)\u30B3\u30DE\u30F3\u30C9",
    "ADMIN COMMANDS": "\u30A2\u30C9\u30DF\u30CB\u30B9\u30C8\u30EC\u30FC\u30BF\u30FC(~)\u30B3\u30DE\u30F3\u30C9",
    "(replace / with ! to broadcast. Broadcasting requires: + % @ # ~)": "(/\u306E\u4EE3\u308F\u308A\u306B!\u3092\u4F7F\u3046\u3068\u30B3\u30DE\u30F3\u30C9\u306E\u7D50\u679C\u3092\u5168\u54E1\u306B\u8868\u793A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u5168\u54E1\u306B\u8868\u793A\u3059\u308B\u306B\u306F\u3001+ % @ # ~ \u306E\u6A29\u9650\u304C\u5FC5\u8981\u3067\u3059\u3002)",
    "<strong>Room punishments</strong>:": "<strong>\u30C1\u30E3\u30C3\u30C8\u7F70\u5247\u4E00\u89A7</strong>:",
    "<strong>warn</strong> - Displays a popup with the rules.": "<strong>warn</strong> - \u30E6\u30FC\u30B6\u30FC\u306B\u30C1\u30E3\u30C3\u30C8\u30EB\u30FC\u30EB\u306E\u30DD\u30C3\u30D7\u30A2\u30C3\u30D7\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002",
    "<strong>mute</strong> - Mutes a user (makes them unable to talk) for 7 minutes.": "<strong>mute</strong> - \u30E6\u30FC\u30B6\u30FC\u30927\u5206\u9593\u30DF\u30E5\u30FC\u30C8(\u66F8\u304D\u8FBC\u307F\u7981\u6B62)\u72B6\u614B\u306B\u3057\u307E\u3059\u3002",
    "<strong>hourmute</strong> - Mutes a user for 60 minutes.": "<strong>hourmute</strong> - \u30E6\u30FC\u30B6\u30FC\u309260\u5206\u9593\u30DF\u30E5\u30FC\u30C8\u3057\u307E\u3059\u3002",
    "<strong>ban</strong> - Bans a user (makes them unable to join the room) for 2 days.": "<strong>ban</strong> - \u30E6\u30FC\u30B6\u30FC\u3092\u90E8\u5C4B\u304B\u30892\u65E5\u9593BAN(\u8FFD\u653E)\u3057\u307E\u3059\u3002",
    "<strong>blacklist</strong> - Bans a user for a year.": "<strong>blacklist</strong> - \u30E6\u30FC\u30B6\u30FC\u3092\u90E8\u5C4B\u304B\u3089\u4E00\u5E74\u9593BAN\u3057\u307E\u3059\u3002",
    "<strong>Global punishments</strong>:": "<strong>\u30B0\u30ED\u30FC\u30D0\u30EB\u7F70\u5247\u4E00\u89A7</strong>:",
    "<strong>lock</strong> - Locks a user (makes them unable to talk in any rooms or PM non-staff) for 2 days.": "<strong>lock</strong> - 2\u65E5\u9593\u30ED\u30C3\u30AF\u3055\u308C\u3001\u5168\u3066\u306E\u30C1\u30E3\u30C3\u30C8\u90E8\u5C4B\u3068\u30D7\u30E9\u30A4\u30D9\u30FC\u30C8\u30E1\u30C3\u30BB\u30FC\u30B8\u3067\u767A\u8A00\u3067\u304D\u306A\u304F\u306A\u308A\u307E\u3059\u3002(\u30B0\u30ED\u30FC\u30D0\u30EB\u30B9\u30BF\u30C3\u30D5\u3068\u306EPM\u9664\u304F)",
    "<strong>weeklock</strong> - Locks a user for a week.": "<strong>weeklock</strong> - 1\u9031\u9593\u30ED\u30C3\u30AF\u3055\u308C\u307E\u3059",
    "<strong>namelock</strong> - Locks a user and prevents them from having a username for 2 days.": "<strong>namelock</strong> - 2\u65E5\u9593\u30ED\u30C3\u30AF\u305B\u308C\u3001\u30E6\u30FC\u30B6\u30FC\u540D\u3082\u4F7F\u3048\u306A\u304F\u306A\u308A\u307E\u3059\u3002",
    "<strong>weekban</strong> - Bans a user from the room for a week.": "<strong>weekban</strong> - 1\u9031\u9593\u305D\u306E\u90E8\u5C4B\u304B\u3089BAN\u3055\u308C\u307E\u3059\u3002",
    "<strong>globalban</strong> - Globally bans (makes them unable to connect and play games) for a week.": "<strong>globalban</strong> - 1\u9031\u9593\u5168\u3066\u306E\u30C1\u30E3\u30C3\u30C8\u90E8\u5C4B\u3068\u30D0\u30C8\u30EB\u304B\u3089\u30D0\u30F3\u3055\u308C\u307E\u3059\u3002",
    "<strong>Indefinite global punishments</strong>:": "<strong>\u7121\u671F\u9650\u306E\u61F2\u7F70</strong>:",
    "<strong>permalock</strong> - Issued for repeated instances of bad behavior and is rarely the result of a single action. ": "<strong>permalock</strong> - \u57FA\u672C\u7684\u306B\u8907\u6570\u56DE\u306B\u308F\u305F\u308B\u9055\u53CD\u884C\u70BA\u306B\u5BFE\u3057\u3066\u53D6\u3089\u308C\u308B\u51E6\u7F6E\u3067\u3042\u308A\u3001\u4E00\u5EA6\u306E\u9055\u53CD\u884C\u70BA\u3067\u3053\u306E\u51E6\u7F6E\u304C\u53D6\u3089\u308C\u308B\u3053\u3068\u306F\u7A00\u3067\u3059\u30023\u30F6\u6708\u4EE5\u4E0A\u554F\u984C\u304C\u306A\u3051\u308C\u3070\u3001",
    'These can be appealed in the <a href="https://www.smogon.com/forums/threads/discipline-appeal-rules.3583479/">Discipline Appeal</a>': '<a href="https://www.smogon.com/forums/threads/discipline-appeal-rules.3583479/">Discipline Appeal</a>',
    " forum after at least 3 months without incident.": "\u306B\u3066\u63A7\u8A34\u3059\u308B\u3053\u3068\u304C\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059\u3002",
    "<strong>permaban</strong> - Unappealable global ban typically issued for the most severe cases of offensive/inappropriate behavior.": "<strong>permaban</strong> - \u6700\u3082\u6DF1\u523B\u306A\u9055\u53CD\u884C\u70BA\u306B\u5BFE\u3057\u3066\u53D6\u3089\u308C\u308B\u51E6\u7F6E\u3067\u3042\u308A\u3001\u63A7\u8A34\u3059\u308B\u3053\u3068\u306F\u4E0D\u53EF\u80FD\u3067\u3059\u3002",
    "<strong>Room drivers (%)</strong> can use:": "<strong>\u30C9\u30E9\u30A4\u30D0\u30FC\uFF08%\uFF09</strong> \u30B3\u30DE\u30F3\u30C9:",
    "- /warn OR /k <em>username</em>: warn a user and show the Pok&eacute;mon Showdown rules": "- /warn \u307E\u305F\u306F /k <em>\u30E6\u30FC\u30B6\u30FC\u540D</em>: \u30E6\u30FC\u30B6\u30FC\u304C\u8B66\u544A\u3055\u308C\u3001\u5F53\u30B5\u30A4\u30C8\u306E\u30EB\u30FC\u30EB\u306E\u30A6\u30A3\u30F3\u30C9\u30A6\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002",
    "- /mute OR /m <em>username</em>: 7 minute mute": "- /mute \u53C8\u306F /m <em>\u30E6\u30FC\u30B6\u30FC\u540D</em>: 7\u5206\u9593\u30DF\u30E5\u30FC\u30C8\u72B6\u614B\u306B\u3057\u307E\u3059\u3002",
    "- /hourmute OR /hm <em>username</em>: 60 minute mute": "- /hourmute \u53C8\u306F /hm <em>\u30E6\u30FC\u30B6\u30FC\u540D</em>: 1\u6642\u9593\u30DF\u30E5\u30FC\u30C8\u72B6\u614B\u306B\u3057\u307E\u3059\u3002",
    "- /unmute <em>username</em>: unmute": "- /unmute <em>\u30E6\u30FC\u30B6\u30FC\u540D</em>: \u30E6\u30FC\u30B6\u30FC\u306E\u30DF\u30E5\u30FC\u30C8\u72B6\u614B\u3092\u89E3\u9664\u3057\u307E\u3059\u3002",
    "- /hidetext <em>username</em>: hide a user's messages from the room": "- /hidetext <em>\u30E6\u30FC\u30B6\u30FC\u540D</em>: \u30E6\u30FC\u30B6\u30FC\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u30C1\u30E3\u30C3\u30C8\u90E8\u5C4B\u304B\u3089\u53D6\u308A\u9664\u304D\u307E\u3059\u3002",
    "- /announce OR /wall <em>message</em>: make an announcement": "- /announce \u53C8\u306F /wall <em>\u30E1\u30C3\u30BB\u30FC\u30B8</em>: \u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u30C1\u30E3\u30C3\u30C8\u3067\u76EE\u7ACB\u3064\u3088\u3046\u306B\u30A2\u30CA\u30A6\u30F3\u30B9\u3057\u307E\u3059\u3002",
    "- /modlog <em>username</em>: search the moderator log of the room": "- /modlog <em>action=\u30E6\u30FC\u30B6\u30FCID(\u30A2\u30EB\u30D5\u30A1\u30D9\u30C3\u30C8\u306E\u307F)</em>: \u30E6\u30FC\u30B6\u30FC\u306B\u95A2\u3059\u308B\u30C1\u30E3\u30C3\u30C8\u90E8\u5C4B\u306E\u7BA1\u7406\u30ED\u30B0\u3092\u8868\u793A\u3057\u307E\u3059\u3002",
    "- /modnote <em>note</em>: add a moderator note that can be read through modlog": "- /modnote <em>\u30E1\u30C3\u30BB\u30FC\u30B8</em>: \u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u30C1\u30E3\u30C3\u30C8\u90E8\u5C4B\u306E\u7BA1\u7406\u30ED\u30B0\u306B\u8FFD\u52A0\u3057\u307E\u3059\u3002",
    "<strong>Room moderators (@)</strong> can also use:": "<strong>\u30E2\u30C7\u30EC\u30FC\u30BF\u30FC(@)</strong> \u30B3\u30DE\u30F3\u30C9:",
    "- /roomban OR /rb <em>username</em>: ban user from the room": "- /roomban \u53C8\u306F /rb <em>\u30E6\u30FC\u30B6\u30FC\u540D</em>: \u30E6\u30FC\u30B6\u30FC\u3092\u30C1\u30E3\u30C3\u30C8\u90E8\u5C4B\u304B\u3089BAN(\u5165\u5BA4\u7981\u6B62)\u3057\u307E\u3059\u3002",
    "- /roomunban <em>username</em>: unban user from the room": "- /roomunban <em>\u30E6\u30FC\u30B6\u30FC\u540D</em>: \u30E6\u30FC\u30B6\u30FC\u306EBAN\u72B6\u614B\u3092\u89E3\u9664\u3057\u307E\u3059\u3002",
    "- /roomvoice <em>username</em>: appoint a room voice": "- /roomvoice <em>\u30E6\u30FC\u30B6\u30FC\u540D</em>: \u30E6\u30FC\u30B6\u30FC\u306B\u30DC\u30A4\u30B9(+)\u6A29\u9650\u3092\u4E0E\u3048\u307E\u3059\u3002",
    "- /roomdevoice <em>username</em>: remove a room voice": "- /roomdevoice <em>\u30E6\u30FC\u30B6\u30FC\u540D</em>: \u30E6\u30FC\u30B6\u30FC\u304B\u3089\u30DC\u30A4\u30B9(+)\u6A29\u9650\u3092\u5916\u3057\u307E\u3059\u3002",
    "- /staffintro <em>intro</em>: set the staff introduction that will be displayed for all staff joining the room": "- /staffintro <em>\u30A4\u30F3\u30C8\u30ED</em>: \u30B9\u30BF\u30C3\u30D5\u304C\u30C1\u30E3\u30C3\u30C8\u90E8\u5C4B\u306B\u5165\u308B\u969B\u8868\u793A\u3055\u308C\u308B\u30A4\u30F3\u30C8\u30ED\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002",
    "- /roomsettings: change a variety of room settings, namely modchat": "- /roomsettings: \u30C1\u30E3\u30C3\u30C8\u90E8\u5C4B\u306E\u8A2D\u5B9A\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002modchat\u306A\u3069\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002",
    "<strong>Room owners (#)</strong> can also use:": "<strong>\u30EB\u30FC\u30E0\u30AA\u30FC\u30CA\u30FC(#)</strong> \u30B3\u30DE\u30F3\u30C9:",
    "- /roomintro <em>intro</em>: set the room introduction that will be displayed for all users joining the room": "- /roomintro <em>\u30A4\u30F3\u30C8\u30ED</em>: \u30E6\u30FC\u30B6\u30FC\u304C\u30C1\u30E3\u30C3\u30C8\u90E8\u5C4B\u306B\u5165\u308B\u969B\u8868\u793A\u3055\u308C\u308B\u30A4\u30F3\u30C8\u30ED\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002",
    "- /rules <em>rules link</em>: set the room rules link seen when using /rules": "- /rules <em>\u30EA\u30F3\u30AF</em>: /rules\u4F7F\u7528\u6642\u306B\u8868\u793A\u3059\u308B\u30C1\u30E3\u30C3\u30C8\u90E8\u5C4B\u306E\u30EB\u30FC\u30EB\u304C\u8A18\u8F09\u3055\u308C\u3066\u3044\u308B\u30EA\u30F3\u30AF\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002",
    "- /roommod, /roomdriver <em>username</em>: appoint a room moderator/driver": "- /roommod, /roomdriver <em>\u30E6\u30FC\u30B6\u30FC\u540D</em>: \u30E6\u30FC\u30B6\u30FC\u306B\u30E2\u30C7\u30EC\u30FC\u30BF\u30FC\u3084\u30C9\u30E9\u30A4\u30D0\u30FC\u6A29\u9650\u3092\u4E0E\u3048\u307E\u3059\u3002",
    "- /roomdemod, /roomdedriver <em>username</em>: remove a room moderator/driver": "- /roomdemod, /roomdedriver <em>\u30E6\u30FC\u30B6\u30FC\u540D</em>: \u30E6\u30FC\u30B6\u30FC\u304B\u3089\u30E2\u30C7\u30EC\u30FC\u30BF\u30FC\u3084\u30C9\u30E9\u30A4\u30D0\u30FC\u6A29\u9650\u3092\u5916\u3057\u307E\u3059\u3002",
    "- /roomdeauth <em>username</em>: remove all room auth from a user": "- /roomdeauth <em>\u30E6\u30FC\u30B6\u30FC\u540D</em>: \u30E6\u30FC\u30B6\u30FC\u304B\u3089\u5168\u3066\u306E\u6A29\u9650\u3092\u5916\u3057\u307E\u3059\u3002",
    "- /declare <em>message</em>: make a large blue declaration to the room": "- /declare <em>\u30E1\u30C3\u30BB\u30FC\u30B8</em>: \u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u5BA3\u8A00\u3057\u3066\u3001\u90E8\u5C4B\u306B\u3044\u308B\u5168\u54E1\u306B\u901A\u77E5\u3092\u9001\u308A\u307E\u3059\u3002",
    "- !htmlbox <em>HTML code</em>: broadcast a box of HTML code to the room": "- !htmlbox <em>HTML</em>: HTML\u30B3\u30FC\u30C9\u5165\u308A\u306Ebox\u3092\u90E8\u5C4B\u306B\u8868\u793A\u3057\u307E\u3059\u3002",
    "- !showimage <em>, [width], [height]</em>: show an image to the room": "- !showimage <em>[url], [width], [height]</em>: \u30C1\u30E3\u30C3\u30C8\u90E8\u5C4B\u306B\u753B\u50CF\u3092\u8868\u793A\u3057\u307E\u3059\u3002",
    "- /roomsettings: change a variety of room settings, including modchat, capsfilter, etc": "- /roomsettings: \u30C1\u30E3\u30C3\u30C8\u90E8\u5C4B\u306E\u8A2D\u5B9A\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002modchat, capsfilter\u306A\u3069\u69D8\u3005\u306A\u8A2D\u5B9A\u3092\u884C\u3048\u307E\u3059\u3002",
    'More detailed help can be found in the <a href="https://www.smogon.com/forums/posts/6774654/">roomauth guide</a>': '\u8A73\u3057\u304F\u306F<a href="https://www.smogon.com/forums/posts/6774654/">\u30B9\u30BF\u30C3\u30D5\u30AC\u30A4\u30C9(\u82F1\u8A9E)</a>\u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002',
    "Tournament Help:": "\u5927\u4F1A\u30D8\u30EB\u30D7:",
    "- /tour create <em>format</em>, elimination: create a new single elimination tournament in the current room.": "- /tour create <em>\u5BFE\u6226\u30EB\u30FC\u30EB</em>, elimination: \u30C1\u30E3\u30C3\u30C8\u90E8\u5C4B\u306B\u30C8\u30FC\u30CA\u30E1\u30F3\u30C8\u65B9\u5F0F\u306E\u5927\u4F1A\u3092\u958B\u50AC\u3057\u307E\u3059\u3002",
    "- /tour create <em>format</em>, roundrobin: create a new round robin tournament in the current room.": "- /tour create <em>\u5BFE\u6226\u30EB\u30FC\u30EB</em>, roundrobin: \u30C1\u30E3\u30C3\u30C8\u90E8\u5C4B\u306B\u7DCF\u5F53\u305F\u308A\u65B9\u5F0F\u306E\u5927\u4F1A\u3092\u958B\u50AC\u3057\u307E\u3059\u3002",
    "- /tour end: forcibly end the tournament in the current room": "- /tour end: \u958B\u50AC\u4E2D\u306E\u5927\u4F1A\u3092\u4E2D\u6B62\u3057\u307E\u3059\u3002",
    "- /tour start: start the tournament in the current room": "- /tour start: \u5927\u4F1A\u3092\u958B\u59CB\u3057\u307E\u3059\u3002",
    "- /tour banlist [pokemon], [talent], [...]: ban moves, abilities, Pok\xE9mon or items from being used in a tournament (it must be created first)": "- /tour banlist [\u30DD\u30B1\u30E2\u30F3], [\u7279\u6027], [...]: \u958B\u50AC\u4E2D\u306E\u5927\u4F1A\u306B\u6307\u5B9A\u3059\u308B\u30DD\u30B1\u30E2\u30F3\u3084\u7279\u6027\u306A\u3069\u3092\u4F7F\u7528\u7981\u6B62\u306B\u3057\u307E\u3059\u3002",
    'More detailed help can be found in the <a href="https://www.smogon.com/forums/posts/6777489/">tournaments guide</a>': '\u8A73\u3057\u304F\u306F\u3001<a href="https://www.smogon.com/forums/posts/6777489/">\u5927\u4F1A\u30AC\u30A4\u30C9(\u82F1\u8A9E)</a>\u3092\u3054\u53C2\u7167\u304F\u3060\u3055\u3044\u3002',
    "Your status cannot be updated while you are locked or semilocked.": "\u30ED\u30C3\u30AF\u30FB\u30BB\u30DF\u30ED\u30C3\u30AF\u72B6\u614B\u306E\u305F\u3081\u3001\u30B9\u30C6\u30FC\u30BF\u30B9\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002",
    "Your status is too long; it must be under ${maxLength} characters.": "\u30B9\u30C6\u30FC\u30BF\u30B9\u304C\u9577\u3059\u304E\u307E\u3059\u3002 ${maxLength} \u6587\u5B57\u4EE5\u5185\u306E\u30B9\u30C6\u30FC\u30BF\u30B9\u3092\u8A2D\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    "Your status contains a banned word.": "\u30B9\u30C6\u30FC\u30BF\u30B9\u306B\u7981\u6B62\u30EF\u30FC\u30C9\u304C\u5165\u3063\u3066\u3044\u307E\u3059\u3002",
    "Your status has been set to: ${target}.": "\u65B0\u3057\u3044\u30B9\u30C6\u30FC\u30BF\u30B9\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3057\u305F: ${target}.",
    "You are now marked as busy.": "\u30B9\u30C6\u30FC\u30BF\u30B9\u304C\u300C\u53D6\u308A\u8FBC\u307F\u4E2D\u300D\u306B\u306A\u308A\u307E\u3057\u305F\u3002",
    "You are now marked as away. Send a message or use /back to indicate you are back.": "\u30B9\u30C6\u30FC\u30BF\u30B9\u304C\u300C\u96E2\u5E2D\u4E2D\u300D\u306B\u306A\u308A\u307E\u3057\u305F\u3002\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u9001\u4FE1\u3059\u308B\u304B\u3001/back\u3092\u5165\u529B\u3059\u308B\u3068\u3001\u30B9\u30C6\u30FC\u30BF\u30B9\u304C\u5143\u306B\u623B\u308A\u307E\u3059\u3002",
    "You are already marked as back.": "\u73FE\u5728\u300C\u53D6\u308A\u8FBC\u307F\u4E2D\u300D\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002",
    "You are no longer marked as busy.": "\u300C\u53D6\u308A\u8FBC\u307F\u4E2D\u300D\u72B6\u614B\u304C\u89E3\u9664\u3055\u308C\u307E\u3057\u305F\u3002",
    "You must choose a name before you can talk.": "\u30C1\u30E3\u30C3\u30C8\u3059\u308B\u306B\u306F\u3001\u30E6\u30FC\u30B6\u30FC\u540D\u3092\u8A2D\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002",
    "You are ${lockType} and can't talk in chat. ${lockExpiration}": "${lockType} \u3055\u308C\u3066\u3044\u308B\u305F\u3081\u3001\u30C1\u30E3\u30C3\u30C8\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002\u30ED\u30C3\u30AF\u671F\u9650: ${lockExpiration}",
    "Get help with [TN: your lock]this": "\u30D8\u30EB\u30D7",
    "You are muted and cannot talk in this room.": "\u30DF\u30E5\u30FC\u30C8\u3055\u308C\u3066\u3044\u308B\u305F\u3081\u3001\u30C1\u30E3\u30C3\u30C8\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002",
    "Because moderated chat is set, your account must be at least one week old and you must have won at least one ladder game to speak in this room.": "\u3053\u306E\u30C1\u30E3\u30C3\u30C8\u90E8\u5C4B\u306F\u30E2\u30C7\u30EC\u30FC\u30C8\u30C1\u30E3\u30C3\u30C8\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u305F\u3081\u3001\u767B\u9332\u3057\u3066\u304B\u30891\u9031\u9593\u4EE5\u4E0A\u7D4C\u3063\u3066\u30EC\u30FC\u30C8\u30671\u52DD\u4EE5\u4E0A\u3057\u3066\u3044\u308B\u30E6\u30FC\u30B6\u30FC\u3057\u304B\u30C1\u30E3\u30C3\u30C8\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u305B\u3093\u3002",
    "Because moderated chat is set, your account must be staff in a public room or have a global rank to speak in this room.": "\u3053\u306E\u30C1\u30E3\u30C3\u30C8\u90E8\u5C4B\u306F\u30E2\u30C7\u30EC\u30FC\u30C8\u30C1\u30E3\u30C3\u30C8\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u305F\u3081\u3001\u516C\u5F0F\u90E8\u5C4B\u306E\u30B9\u30BF\u30C3\u30D5\u304B\u30B0\u30ED\u30FC\u30D0\u30EB\u30DC\u30A4\u30B9\u4EE5\u4E0A\u306E\u30E6\u30FC\u30B6\u30FC\u3057\u304B\u30C1\u30E3\u30C3\u30C8\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u305B\u3093\u3002",
    "Because moderated chat is set, you must be of rank ${groupName} or higher to speak in this room.": "\u3053\u306E\u30C1\u30E3\u30C3\u30C8\u90E8\u5C4B\u306F\u30E2\u30C7\u30EC\u30FC\u30C8\u30C1\u30E3\u30C3\u30C8\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u305F\u3081\u3001${groupName} \u4EE5\u4E0A\u306E\u30E6\u30FC\u30B6\u30FC\u3057\u304B\u30C1\u30E3\u30C3\u30C8\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u305B\u3093\u3002",
    "Your message can't be blank.": "\u7A7A\u767D\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u306F\u9001\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u305B\u3093\u3002",
    "Your message is too long: ": "\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u9577\u3059\u304E\u307E\u3059\uFF1A",
    "Your message contains banned characters.": "\u30E1\u30C3\u30BB\u30FC\u30B8\u306B\u4F7F\u7528\u4E0D\u53EF\u306E\u6587\u5B57\u304C\u5165\u3063\u3066\u3044\u307E\u3059\u3002",
    "This room has slow-chat enabled. You can only talk once every ${time} seconds.": "\u3053\u306E\u30C1\u30E3\u30C3\u30C8\u90E8\u5C4B\u306F\u30B9\u30ED\u30FC\u30C1\u30E3\u30C3\u30C8\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u305F\u3081\u3001 ${time} \u79D2\u4EE5\u5185\u306B\u8907\u6570\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u9001\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u305B\u3093\u3002",
    "Your username contains a phrase banned by this room.": "\u30E6\u30FC\u30B6\u30FC\u540D\u306B\u3053\u306E\u90E8\u5C4B\u306E\u7981\u6B62\u30EF\u30FC\u30C9\u304C\u5165\u3063\u3066\u3044\u307E\u3059\u3002",
    "Your status message contains a phrase banned by this room.": "\u30B9\u30C6\u30FC\u30BF\u30B9\u306B\u3053\u306E\u90E8\u5C4B\u306E\u7981\u6B62\u30EF\u30FC\u30C9\u304C\u5165\u3063\u3066\u3044\u307E\u3059\u3002",
    "You are ${lockType} and can only private message members of the global moderation team. ${lockExpiration}": "${lockType}\u72B6\u614B\u306E\u305F\u3081\u30D7\u30E9\u30A4\u30D9\u30FC\u30C8\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u9001\u4FE1\u3067\u304D\u308B\u306E\u306F\u30B0\u30ED\u30FC\u30D0\u30EB\u30B9\u30BF\u30C3\u30D5\u306E\u307F\u306B\u5236\u9650\u3055\u308C\u3066\u3044\u307E\u3059\u3002${lockExpiration}",
    "Get help with this": "\u30D8\u30EB\u30D7",
    'The user "${targetUser.name}" is locked and cannot be PMed.': '"${targetUser.name}"\u306F\u30ED\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B\u305F\u3081\u30D7\u30E9\u30A4\u30D9\u30FC\u30C8\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u9001\u4FE1\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u305B\u3093\u3002',
    "On this server, you must be of rank ${groupName} or higher to PM users.": "\u3053\u306E\u30B5\u30FC\u30D0\u30FC\u3067\u306F\u3001\u30D7\u30E9\u30A4\u30D9\u30FC\u30C8\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u9001\u4FE1\u3059\u308B\u306B\u306F${groupName}\u4EE5\u4E0A\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002",
    "This user is blocking private messages right now.": "\u3053\u306E\u30E6\u30FC\u30B6\u30FC\u306F\u73FE\u5728\u30D7\u30E9\u30A4\u30D9\u30FC\u30C8\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u30D6\u30ED\u30C3\u30AF\u3057\u3066\u3044\u307E\u3059\u3002",
    "This ${Config.groups[targetUser.group].name} is too busy to answer private messages right now. Please contact a different staff member.": "${Config.groups[targetUser.group].name} \u306F\u73FE\u5728\u591A\u5FD9\u306E\u305F\u3081\u30D7\u30E9\u30A4\u30D9\u30FC\u30C8\u30E1\u30C3\u30BB\u30FC\u30B8\u306B\u53CD\u5FDC\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u305B\u3093\u3002\u4ED6\u306E\u30B9\u30BF\u30C3\u30D5\u306B\u8A71\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002",
    'If you need help, try opening a <a href="view-help-request" class="button">help ticket</a>': '\u30D8\u30EB\u30D7\u3092\u6C42\u3081\u3066\u3044\u308B\u5834\u5408\u306F\u3001<a href="view-help-request" class="button">help ticket</a>\u306B\u3066\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u9001\u4FE1\u3057\u3066\u304F\u3060\u3055\u3044\u3002',
    "You are blocking private messages right now.": "\u30D7\u30E9\u30A4\u30D9\u30FC\u30C8\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u30D6\u30ED\u30C3\u30AF\u3057\u307E\u3057\u305F\u3002",
    "You are blocking challenges right now.": "\u5BFE\u6226\u306E\u7533\u3057\u8FBC\u307F\u3092\u30D6\u30ED\u30C3\u30AF\u3057\u307E\u3057\u305F\u3002",
    "Your message contained banned words in this room.": "\u30E1\u30C3\u30BB\u30FC\u30B8\u306B\u3053\u306E\u90E8\u5C4B\u306E\u7981\u6B62\u30EF\u30FC\u30C9\u304C\u5165\u3063\u3066\u3044\u307E\u3059\u3002",
    "You can't send the same message again so soon.": "\u9AD8\u983B\u5EA6\u3067\u540C\u3058\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u9001\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002",
    "Due to this room being a high traffic room, your message must contain at least two letters.": "\u3053\u306E\u30C1\u30E3\u30C3\u30C8\u90E8\u5C4B\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u983B\u5EA6\u304C\u9AD8\u3044\u305F\u3081\u30012\u6587\u5B57\u4EE5\u5185\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u9001\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002",
    "You are already blocking private messages! To unblock, use /unblockpms": "\u3059\u3067\u306B\u30D7\u30E9\u30A4\u30D9\u30FC\u30C8\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u30D6\u30ED\u30C3\u30AF\u3057\u3066\u3044\u307E\u3059\u3002\u30D6\u30ED\u30C3\u30AF\u3092\u89E3\u9664\u3059\u308B\u306B\u306F /unblockpms \u3092\u4F7F\u3063\u3066\u304F\u3060\u3055\u3044\u3002",
    "You are now blocking private messages, except from staff and ${rank}.": "\u30D7\u30E9\u30A4\u30D9\u30FC\u30C8\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u30D6\u30ED\u30C3\u30AF\u3057\u307E\u3057\u305F\u3002\u30B0\u30ED\u30FC\u30D0\u30EB\u30B9\u30BF\u30C3\u30D5\u3068${rank}\u3092\u6301\u3064\u30E6\u30FC\u30B6\u30FC\u304B\u3089\u306F\u30D6\u30ED\u30C3\u30AF\u3055\u308C\u307E\u305B\u3093\u3002",
    "You are now blocking private messages, except from staff and ${status} users.": "\u30D7\u30E9\u30A4\u30D9\u30FC\u30C8\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u30D6\u30ED\u30C3\u30AF\u3057\u307E\u3057\u305F\u3002\u30B0\u30ED\u30FC\u30D0\u30EB\u30B9\u30BF\u30C3\u30D5\u3068 ${status} \u72B6\u614B\u306E\u30E6\u30FC\u30B6\u30FC\u304B\u3089\u306F\u30D6\u30ED\u30C3\u30AF\u3055\u308C\u307E\u305B\u3093\u3002",
    "You are now blocking private messages, except from staff.": "\u30D7\u30E9\u30A4\u30D9\u30FC\u30C8\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u30D6\u30ED\u30C3\u30AF\u3057\u307E\u3057\u305F\u3002\u30B0\u30ED\u30FC\u30D0\u30EB\u30B9\u30BF\u30C3\u30D5\u304B\u3089\u306F\u30D6\u30ED\u30C3\u30AF\u3055\u308C\u307E\u305B\u3093\u3002",
    "You are not blocking private messages! To block, use /blockpms": "\u30D7\u30E9\u30A4\u30D9\u30FC\u30C8\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u30D6\u30ED\u30C3\u30AF\u3057\u3066\u3044\u307E\u305B\u3093\u3002\u30D6\u30ED\u30C3\u30AF\u3057\u305F\u3044\u5834\u5408\u306F\u3001/blockpms \u3092\u4F7F\u3063\u3066\u304F\u3060\u3055\u3044\u3002",
    "You are no longer blocking private messages.": "\u30D7\u30E9\u30A4\u30D9\u30FC\u30C8\u30E1\u30C3\u30BB\u30FC\u30B8\u306E\u30D6\u30ED\u30C3\u30AF\u3092\u89E3\u9664\u3057\u307E\u3057\u305F\u3002",
    "You are now blocking all incoming challenge requests.": "\u5BFE\u6226\u306E\u7533\u3057\u8FBC\u307F\u3092\u30D6\u30ED\u30C3\u30AF\u3057\u307E\u3057\u305F\u3002",
    "You are already blocking challenges!": "\u3059\u3067\u306B\u5BFE\u6226\u306E\u7533\u3057\u8FBC\u307F\u3092\u30D6\u30ED\u30C3\u30AF\u3057\u3066\u3044\u307E\u3059\u3002",
    "You are already available for challenges!": "\u73FE\u5728\u5BFE\u6226\u306E\u7533\u3057\u8FBC\u307F\u3092\u30D6\u30ED\u30C3\u30AF\u3057\u3066\u3044\u307E\u305B\u3093\u3002",
    "You are available for challenges from now on.": "\u5BFE\u6226\u306E\u7533\u3057\u8FBC\u307F\u306E\u30D6\u30ED\u30C3\u30AF\u3092\u89E3\u9664\u3057\u307E\u3057\u305F\u3002",
    "You are now blocking challenges, except from staff and ${rank}.": "\u5BFE\u6226\u306E\u7533\u3057\u8FBC\u307F\u3092\u30D6\u30ED\u30C3\u30AF\u3057\u307E\u3057\u305F\u3002\u30B0\u30ED\u30FC\u30D0\u30EB\u30B9\u30BF\u30C3\u30D5\u3068${rank}\u3092\u6301\u3064\u30E6\u30FC\u30B6\u30FC\u304B\u3089\u306F\u30D6\u30ED\u30C3\u30AF\u3055\u308C\u307E\u305B\u3093\u3002",
    "You are now blocking challenges, except from staff and ${status} users.": "\u5BFE\u6226\u306E\u7533\u3057\u8FBC\u307F\u3092\u30D6\u30ED\u30C3\u30AF\u3057\u307E\u3057\u305F\u3002\u30B0\u30ED\u30FC\u30D0\u30EB\u30B9\u30BF\u30C3\u30D5\u3068${status}\u72B6\u614B\u306E\u30E6\u30FC\u30B6\u30FC\u304B\u3089\u306F\u30D6\u30ED\u30C3\u30AF\u3055\u308C\u307E\u305B\u3093\u3002",
    "Staff FAQ": "\u30B9\u30BF\u30C3\u30D5\u306B\u95A2\u3059\u308B\u3088\u304F\u3042\u308B\u8CEA\u554F",
    "You cannot broadcast all FAQs at once.": "1\u56DE\u3067FAQ\u3092\u5168\u3066\u8868\u793A\u3055\u305B\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002",
    "A user is autoconfirmed when they have won at least one rated battle and have been registered for one week or longer. In order to prevent spamming and trolling, most chatrooms only allow autoconfirmed users to chat. If you are not autoconfirmed, you can politely PM a staff member (staff have %, @, or # in front of their username) in the room you would like to chat and ask them to disable modchat. However, staff are not obligated to disable modchat.": "\u30EC\u30FC\u30C8\u304C\u6709\u52B9\u306A\u30D0\u30C8\u30EB\u30671\u56DE\u4EE5\u4E0A\u52DD\u5229\u3057\u3001\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u767B\u9332\u3057\u3066\u304B\u30891\u9031\u9593\u304C\u7D4C\u904E\u3059\u308B\u30A2\u30AB\u30A6\u30F3\u30C8\u304C\u81EA\u52D5\u627F\u8A8D\u3055\u308C\u307E\u3059(autoconfirmed)\u3002\u627F\u8A8D\u3055\u308C\u3066\u3044\u306A\u3044\u30E6\u30FC\u30B6\u30FC\u306F\u30B0\u30ED\u30FC\u30D0\u30EB\u30B9\u30BF\u30C3\u30D5(\u3044\u304B\u306A\u308B\u5834\u6240\u3067\u3082\u540D\u524D\u306E\u524D\u306B %\u3001 @\u3001 ~ \u304C\u3064\u3044\u3066\u3044\u307E\u3059)\u4EE5\u5916\u306BPM\u3092\u9001\u4FE1\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u305B\u3093\u3002\u307E\u305F\u3001\u30C1\u30E3\u30C3\u30C8\u30EB\u30FC\u30E0\u3067\u306F\u8352\u3089\u3057\u3092\u9632\u6B62\u3059\u308B\u305F\u3081\u306Bmodchat\u3067\u627F\u8A8D\u6E08\u307F\u306E\u30E6\u30FC\u30B6\u30FC\u306E\u307F\u304C\u767A\u8A00\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3082\u3057\u3042\u306A\u305F\u304C\u627F\u8A8D\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u306F\u30EB\u30FC\u30E0\u30B9\u30BF\u30C3\u30D5(\u540D\u524D\u306E\u524D\u306B %\u3001@\u3001# \u304C\u3064\u3044\u3066\u3044\u308B\u30E6\u30FC\u30B6\u30FC\u3067\u3059)\u306BPM\u3092\u9001\u4FE1\u3057\u3001modchat\u3092\u7121\u52B9\u306B\u3059\u308B\u3088\u3046\u306B\u4F9D\u983C\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u304C\u3001\u30B9\u30BF\u30C3\u30D5\u306F\u7121\u52B9\u5316\u3059\u308B\u7FA9\u52D9\u306F\u3042\u308A\u307E\u305B\u3093\u3002",
    "How the ladder works": "Ladder\u306E\u4ED5\u7D44\u307F",
    "Tiering FAQ": "",
    "Badge FAQ": "",
    "Common misconceptions about our RNG": "RNG\u306B\u95A2\u3059\u308B\u3088\u304F\u3042\u308B\u8AA4\u89E3",
    "To join a room tournament, click the <strong>Join!</strong> button or type the command <code>/tour join</code> in the room's chat. You can check if your team is legal for the tournament by clicking the <strong>Validate</strong> button once you've joined and selected a team. To battle your opponent in the tournament, click the <strong>Ready!</strong> button when it appears. There are two different types of room tournaments: elimination (if a user loses more than a certain number of times, they are eliminated) and round robin (all users play against each other, and the user with the most wins is the winner).": "\u30C1\u30E3\u30C3\u30C8\u30EB\u30FC\u30E0\u306E\u30C8\u30FC\u30CA\u30E1\u30F3\u30C8\u306B\u53C2\u52A0\u3059\u308B\u306B\u306F\u3001<strong>Join!</strong>\u306E\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u304B<code>/tour join</code>\u3092\u90E8\u5C4B\u306E\u30C1\u30E3\u30C3\u30C8\u3067\u9001\u4FE1\u3057\u307E\u3059\u3002<strong>Validate</strong>\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3053\u3068\u306B\u3088\u3063\u3066\u9078\u629E\u3057\u305F\u30C1\u30FC\u30E0\u304C\u30C8\u30FC\u30CA\u30E1\u30F3\u30C8\u306E\u30EB\u30FC\u30EB\u306B\u9069\u5408\u3057\u3066\u3044\u308B\u304B\u78BA\u8A8D\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002<strong>Ready!</strong>\u30DC\u30BF\u30F3\u304C\u8868\u793A\u3055\u308C\u305F\u3068\u304D\u306B\u305D\u308C\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001\u30C8\u30FC\u30CA\u30E1\u30F3\u30C8\u306E\u5BFE\u6226\u76F8\u624B\u3068\u30D0\u30C8\u30EB\u3092\u958B\u59CB\u3057\u307E\u3059\u3002\u307E\u305F\u30012\u3064\u306E\u5F62\u5F0F\u306E\u30C8\u30FC\u30CA\u30E1\u30F3\u30C8\u304C\u5B58\u5728\u3057\u307E\u3059\u3002Elimination(\u30C8\u30FC\u30CA\u30E1\u30F3\u30C8\u5F62\u5F0F\u3002\u898F\u5B9A\u3055\u308C\u305F\u56DE\u6570\u3092\u8CA0\u3051\u8D8A\u3059\u3068\u5F37\u5236\u7684\u306B\u30C8\u30FC\u30CA\u30E1\u30F3\u30C8\u304B\u3089\u6557\u9000\u306B\u306A\u308A\u307E\u3059\u3002)\u3068Round Robin(\u7DCF\u5F53\u305F\u308A\u3002\u30C8\u30FC\u30CA\u30E1\u30F3\u30C8\u306E\u53C2\u52A0\u8005\u5168\u54E1\u3068\u30D0\u30C8\u30EB\u3092\u3057\u307E\u3059\u3002\u52DD\u3063\u305F\u56DE\u6570\u304C1\u756A\u591A\u3044\u30E6\u30FC\u30B6\u30FC\u304C\u512A\u52DD\u306B\u306A\u308A\u307E\u3059\u3002)",
    "Frequently Asked Questions": "\u3088\u304F\u3042\u308B\u8CEA\u554F",
    "pages/faq": "pages/faq-ja",
    "pages/ladderhelp": "pages/ladderhelp-ja",
    "pages/rng": "pages/rng-ja",
    "pages/staff": "pages/staff-ja",
    "- We log PMs so you can report them - staff can't look at them without permission unless there's a law enforcement reason.": "PM\u306F\u30E6\u30FC\u30B6\u30FC\u304B\u3089\u306E\u5831\u544A\u306A\u3069\u306B\u5099\u3048\u3066\u8A18\u9332\u3055\u308C\u3066\u3044\u307E\u3059\u304C\u3001\u7F70\u306E\u57F7\u884C\u306A\u3069\u6B63\u5F53\u306A\u7406\u7531\u304C\u306A\u3044\u9650\u308A\u95B2\u89A7\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002",
    "- We log IPs to enforce bans and mutes.": "IP\u30A2\u30C9\u30EC\u30B9\u306FBAN\u3084\u30DF\u30E5\u30FC\u30C8\u306E\u305F\u3081\u306B\u8A18\u9332\u3055\u308C\u3066\u3044\u307E\u3059\u3002",
    "- We use cookies to save your login info and teams, and for Google Analytics and AdSense.": "\u30ED\u30B0\u30A4\u30F3\u60C5\u5831\u3084\u30C1\u30FC\u30E0\u306E\u4FDD\u5B58\u3001Google\u30A2\u30CA\u30EA\u30C6\u30A3\u30AF\u30B9\u3084\u30A2\u30C9\u30BB\u30F3\u30B9\u306E\u305F\u3081\u306B\u30AF\u30C3\u30AD\u30FC\u304C\u4F7F\u7528\u3055\u308C\u3066\u3044\u307E\u3059\u3002",
    '- For more information, you can read our <a href="https://${Config.routes.root}/privacy">full privacy policy.</a>': '\u8A73\u3057\u304F\u306F\u3001<a href="https://${Config.routes.root}/privacy-ja">\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC</a>\u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002'
  }
};
//# sourceMappingURL=main.js.map
