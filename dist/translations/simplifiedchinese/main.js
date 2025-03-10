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
  name: "Simplified Chinese",
  strings: {
    "namelocked": "\u7528\u6237\u540D\u5C01\u9501",
    "locked": "\u7528\u6237\u5C01\u9501",
    "autoconfirmed": "\u81EA\u52A8\u786E\u8BA4\u7528\u6237",
    "trusted": "\u4FE1\u4EFB\u7528\u6237",
    "Please follow the rules:": "\u9075\u5B88\u89C4\u5219:",
    "[TN: Link to the PS rules for your language (path after pokemonshowdown.com]/rules": "/pages/rules-zh",
    "Global Rules": "\u5168\u7AD9\u89C4\u5219",
    "${room} room rules": "${room}\u623F\u95F4\u89C4\u5219",
    "<strong>Global ranks</strong>": "<strong>\u5168\u670D\u6743\u9650</strong>",
    "+ <strong>Global Voice</strong> - They can use ! commands like !groups": "+ <strong>\u5168\u670D\u4FE1\u4EFB\u7528\u6237</strong> -\u53EF\u4EE5\u4F7F\u7528!\u5E7F\u64AD\u6307\u4EE4\uFF0C\u6BD4\u5982!groups\uFF0C\u5E76\u53EF\u4EE5\u5728\u9650\u5236\u53D1\u8A00\u671F\u95F4\u53D1\u8A00",
    "% <strong>Global Driver</strong> - The above, and they can also lock users and check for alts": "% <strong>\u5168\u670D\u89C1\u4E60\u7BA1\u7406</strong> - \u540C\u4FE1\u4EFB\u7528\u6237\uFF0C\u5E76\u53EF\u4EE5\u9501\u5B9A\u7528\u6237\u6216\u67E5\u770B\u4ED6\u4EEC\u7684\u5C0F\u53F7",
    "@ <strong>Global Moderator</strong> - The above, and they can globally ban users": "@ <strong>\u5168\u670D\u7BA1\u7406\u5458</strong> - \u540C\u4E0A\uFF0C\u5E76\u53EF\u4EE5\u5C06\u7528\u6237\u4ECE\u670D\u52A1\u5668\u5C01\u7981",
    "* <strong>Global Bot</strong> - Like Moderator, but makes it clear that this user is a bot": "* <strong>\u5168\u670D\u673A\u5668\u4EBA</strong> - \u8DDF\u5168\u670D\u7BA1\u7406\u5458\u4E00\u6837\uFF0C\u53EA\u4E0D\u8FC7\u662F\u673A\u5668",
    "~ <strong>Global Administrator</strong> - They can do anything, like change what this message says and promote users globally": "~ <strong>\u5168\u670D\u603B\u7BA1</strong> - \u53EF\u4EE5\u5728\u670D\u52A1\u5668\u505A\u4EFB\u4F55\u4E8B\uFF0C\u4F8B\u5982\u4FEE\u6539\u4F60\u73B0\u5728\u770B\u5230\u7684\u8FD9\u6761\u4FE1\u606F",
    "<strong>Room ranks</strong>": "<strong>\u623F\u6743\u9650</strong>",
    "^ <strong>Prize Winner</strong> - They don't have any powers beyond a symbol.": "",
    "+ <strong>Voice</strong> - They can use ! commands like !groups": "+ <strong>\u4FE1\u4EFB\u7528\u6237</strong> - \u53EF\u4EE5\u4F7F\u7528!\u5E7F\u64AD\u6307\u4EE4\uFF0C\u6BD4\u5982!groups\uFF0C\u5E76\u53EF\u4EE5\u5728\u9650\u5236\u53D1\u8A00\u671F\u95F4\u53D1\u8A00",
    "% <strong>Driver</strong> - The above, and they can mute and warn": "% <strong>\u89C1\u4E60\u7BA1\u7406</strong> - \u540C\u4E0A\uFF0C\u5E76\u53EF\u4EE5\u7981\u6B62\u7528\u6237\u53D1\u8A00\u6216\u8B66\u544A\u7528",
    "@ <strong>Moderator</strong> - The above, and they can room ban users": "@ <strong>\u7BA1\u7406\u5458</strong> - \u540C\u4E0A\uFF0C\u5E76\u53EF\u4EE5\u5C06\u7528\u6237\u4ECE\u623F\u95F4\u5C01\u7981",
    "* <strong>Bot</strong> - Like Moderator, but makes it clear that this user is a bot": "* <strong>\u673A\u5668\u4EBA</strong> - \u8DDF\u7BA1\u7406\u5458\u4E00\u6837\uFF0C\u53EA\u4E0D\u8FC7\u662F\u673A\u5668",
    "# <strong>Room Owner</strong> - They are leaders of the room and can almost totally control it": "# <strong>\u623F\u4E3B</strong> - \u623F\u4E2D\u7684\u9886\u5BFC\uFF0C\u51E0\u4E4E\u62E5\u6709\u623F\u95F4\u7684\u5168\u90E8\u7BA1\u7406\u6743\u529B",
    "/help OR /h OR /? - Gives you help.": "/help \u6216 /h \u6216 /? - \u5BFB\u6C42\u5E2E\u52A9",
    "For an overview of room commands, use /roomhelp": "\u60F3\u641C\u623F\u91CC\u7684\u6307\u4EE4\uFF0C\u5728\u623F\u91CC\u6253\u4E00\u4E0B/roomhelp",
    "For details of a specific command, use something like: /help data": "\u82E5\u8981\u67E5\u770B\u5177\u4F53\u6307\u4EE4\u7684\u7528\u6CD5(\u5982/data\u6307\u4EE4)\uFF0C\u8BF7\u4EE5/help data\u7684\u683C\u5F0F\u8FDB\u884C\u67E5\u8BE2",
    "COMMANDS": "\u6307\u4EE4",
    "BATTLE ROOM COMMANDS": "\u5BF9\u6218\u6307\u4EE4",
    "OPTION COMMANDS": "\u8BBE\u7F6E\u6307\u4EE4",
    "INFORMATIONAL/RESOURCE COMMANDS": "\u4FE1\u606F/\u8D44\u6599\u6307\u4EE4",
    "DATA COMMANDS": "\u6570\u636E\u6307\u4EE4",
    "DRIVER COMMANDS": "\u89C1\u4E60\u7BA1\u7406\u6307\u4EE4",
    "MODERATOR COMMANDS": "\u7BA1\u7406\u5458\u6307\u4EE4",
    "ADMIN COMMANDS": "\u603B\u7BA1\u6307\u4EE4",
    "(replace / with ! to broadcast. Broadcasting requires: + % @ # ~)": "(\u628A/\u6362\u6210!\u5C31\u53EF\u4EE5\u5E7F\u64AD\u6307\u4EE4\u3002\u5E7F\u64AD\u529F\u80FD\u9700\u8981\uFF1A+ % @ # ~)",
    "<strong>Room punishments</strong>:": "<strong>\u623F\u95F4\u5904\u7F5A</strong>:",
    "<strong>warn</strong> - Displays a popup with the rules.": "<strong>warn</strong> - \u663E\u793A\u89C4\u5219\u4E0E\u8B66\u544A",
    "<strong>mute</strong> - Mutes a user (makes them unable to talk) for 7 minutes.": "<strong>mute</strong> - \u7981\u8A00\u7528\u6237\uFF08\u4E0D\u80FD\u53D1\u8A00\uFF09\u4E03\u5206\u949F\u3002",
    "<strong>hourmute</strong> - Mutes a user for 60 minutes.": "<strong>hourmute</strong> - \u7981\u8A00\u7528\u6237\u4E00\u4E2A\u5C0F\u65F6\u3002",
    "<strong>ban</strong> - Bans a user (makes them unable to join the room) for 2 days.": "<strong>ban</strong> - \u5C06\u7528\u6237\u5C01\u7981\uFF08\u4E0D\u80FD\u8FDB\u5165\u8BE5\u623F\u5185\uFF09\u4E24\u5929\u3002",
    "<strong>weekban</strong> - Bans a user from the room for a week.": "<strong>weekban</strong> - \u5C06\u7528\u6237\u5C01\u7981\uFF08 \u4E0D\u80FD\u8FDB\u5165\u8BE5\u623F\u5185 \uFF09\u4E00\u4E2A\u661F\u671F\u3002",
    "<strong>blacklist</strong> - Bans a user for a year.": "<strong>blacklist</strong> - \u5C06\u7528\u6237\u62C9\u9ED1\uFF0C\u4E00\u5E74\u4E4B\u5185\u4E0D\u80FD\u8FDB\u5165\u623F\u91CC\u3002",
    "<strong>Global punishments</strong>:": "<strong>\u5168\u670D\u5904\u7F5A</strong>:",
    "<strong>lock</strong> - Locks a user (makes them unable to talk in any rooms or PM non-staff) for 2 days.": "<strong>lock</strong> - \u5C01\u9501\u7528\u6237\uFF08\u65E0\u6CD5\u5728\u4EFB\u4F55\u623F\u5185\u53D1\u8A00\u6216\u4E0E\u5168\u670D\u89C1\u4E60\u7BA1\u7406\u4EE5\u4E0B\u7684\u7528\u6237\u79C1\u4FE1\uFF09\u4E24\u5929\u3002",
    "<strong>weeklock</strong> - Locks a user for a week.": "<strong>weeklock</strong> - \u5C01\u9501\u7528\u6237\u4E00\u4E2A\u661F\u671F\u3002",
    "<strong>namelock</strong> - Locks a user and prevents them from having a username for 2 days.": "<strong>namelock</strong> - \u5C01\u9501\u7528\u6237ip\uFF0C\u4E24\u5929\u5185\u4E0D\u80FD\u4F7F\u7528\u4EFB\u4F55\u7528\u6237\u540D\u3002",
    "<strong>globalban</strong> - Globally bans (makes them unable to connect and play games) for a week.": "<strong>globalban</strong> - \u5168\u670D\u5C01\u7981\uFF08\u4F7F\u7528\u6237\u4E0D\u80FD\u8FDE\u63A5\u548C\u73A9\u6E38\u620F\uFF09\u4E00\u4E2A\u661F\u671F\u3002",
    "<strong>Indefinite global punishments</strong>:": "<strong>\u65E0\u671F\u9650\u7684\u5168\u670D\u60E9\u7F5A</strong>:",
    "<strong>permalock</strong> - Issued for repeated instances of bad behavior and is rarely the result of a single action. ": "<strong>permalock</strong> - \u591A\u662F\u7531\u4E8E\u53CD\u590D\u7684\u7CDF\u7CD5\u884C\u4E3A\uFF0C\u800C\u5F88\u5C11\u662F\u4E00\u6B21\u8FDD\u89C4\u6240\u5BFC\u81F4\u3002\u82E5\u81EA\u60E9\u7F5A\u8D773\u4E2A\u6708\u65E0\u518D\u72AF\uFF0C\u53EF\u4EE5\u5728",
    'These can be appealed in the <a href="https://www.smogon.com/forums/threads/discipline-appeal-rules.3583479/">Discipline Appeal</a>': '<a href="https://www.smogon.com/forums/threads/discipline-appeal-rules.3583479/">\u7EAA\u5F8B\u7533\u8BC9</a>',
    " forum after at least 3 months without incident.": "\u8BBA\u575B\u7533\u8BC9\u3002",
    "<strong>permaban</strong> - Unappealable global ban typically issued for the most severe cases of offensive/inappropriate behavior.": "<strong>permaban</strong> - \u65E0\u6CD5\u7533\u8BC9\u7684\u5168\u670D\u5C01\u7981\u3002\u591A\u662F\u7531\u6700\u4E25\u91CD\u7684\u5192\u72AF\u6216\u4E0D\u5F53\u884C\u4E3A\u5BFC\u81F4\u7684\u3002",
    "<strong>Room drivers (%)</strong> can use:": "<strong>\u89C1\u4E60\u7BA1\u7406\uFF08%\uFF09</strong> \u53EF\u4EE5\u4F7F\u7528",
    "- /warn OR /k <em>username</em>: warn a user and show the Pok&eacute;mon Showdown rules": "- /warn \u6216 /k <em>\u7528\u6237\u540D</em>: \u8B66\u544A\u7528\u6237\u5E76\u663E\u793APok&eacute;mon Showdown\u7684\u89C4\u5219",
    "- /mute OR /m <em>username</em>: 7 minute mute": "- /mute \u6216 /m <em>\u7528\u6237\u540D</em>: \u7981\u8A00\u4E03\u5206\u949F",
    "- /hourmute OR /hm <em>username</em>: 60 minute mute": "- /hourmute \u6216 /hm <em>\u7528\u6237\u540D</em>: \u7981\u8A00\u4E00\u4E2A\u5C0F\u65F6",
    "- /unmute <em>username</em>: unmute": "- /unmute <em>\u7528\u6237\u540D</em>: \u89E3\u9664\u7981\u8A00",
    "- /hidetext <em>username</em>: hide a user's messages from the room": "- /hidetext <em>\u7528\u6237\u540D</em>: \u5728\u623F\u95F4\u4E2D\u9690\u85CF\u8BE5\u7528\u6237\u53D1\u9001\u7684\u6D88\u606F",
    "- /announce OR /wall <em>message</em>: make an announcement": "- /announce \u6216 /wall <em>\u4FE1\u606F</em>: \u516C\u544A\u4FE1\u606F",
    "- /modlog <em>username</em>: search the moderator log of the room": "- /modlog <em>\u7528\u6237\u540D</em>: \u641C\u9501\u7528\u6237\u5728\u623F\u95F4\u7BA1\u7406\u6863\u6848\u4E2D\u7684\u8BB0\u5F55",
    "- /modnote <em>note</em>: add a moderator note that can be read through modlog": "- /modnote <em>\u4FE1\u606F</em>: \u5728\u623F\u95F4\u7BA1\u7406\u6863\u6848\u4E2D\u7559\u4E0B\u4FE1\u606F\uFF0C\u53EA\u6709\u89C1\u4E60\u7BA1\u7406\u4EE5\u4E0A\u80FD\u9605\u8BFB",
    "<strong>Room moderators (@)</strong> can also use:": "<strong>\u7BA1\u7406\u5458\uFF08@\uFF09</strong> \u53EF\u4EE5\u4F7F\u7528\uFF1A",
    "- /roomban OR /rb <em>username</em>: ban user from the room": "- /roomban \u6216 /rb <em>\u7528\u6237\u540D</em>: \u5C06\u7528\u6237\u5C01\u7981",
    "- /roomunban <em>username</em>: unban user from the room": "- /roomunban <em>\u7528\u6237\u540D</em>: \u89E3\u9664\u5C01\u7981",
    "- /roomvoice <em>username</em>: appoint a room voice": "- /roomvoice <em>\u7528\u6237\u540D</em>: \u5347\u7528\u6237\u4E3A\u4FE1\u4EFB\u7528\u6237",
    "- /roomdevoice <em>username</em>: remove a room voice": "- /roomdevoice <em>\u7528\u6237\u540D</em>: \u79FB\u9664\u4FE1\u4EFB\u7528\u6237\u6743\u9650",
    "- /staffintro <em>intro</em>: set the staff introduction that will be displayed for all staff joining the room": "- /staffintro <em>\u4ECB\u7ECD</em>: \u8BBE\u7F6E\u7BA1\u7406\u516C\u544A\uFF0C\u4F1A\u5BF9\u8FDB\u5165\u623F\u95F4\u7684\u89C1\u4E60\u7BA1\u7406\u6216\u4EE5\u4E0A\u4EBA\u5458\u663E\u793A",
    "- /roomsettings: change a variety of room settings, namely modchat": "- /roomsettings: \u663E\u793A\u5E76\u4FEE\u6539\u623F\u5185\u7684\u67D0\u4E9B\u8BBE\u7F6E\uFF0C\u6BD4\u5982modchat",
    "<strong>Room owners (#)</strong> can also use:": "<strong>\u623F\u4E3B\uFF08#\uFF09</strong> \u53EF\u4EE5\u4F7F\u7528\uFF1A",
    "- /roomintro <em>intro</em>: set the room introduction that will be displayed for all users joining the room": "- /roomintro <em>\u4ECB\u7ECD</em>: \u8BBE\u7F6E\u623F\u5185\u516C\u544A\uFF0C\u4F1A\u5BF9\u8FDB\u5165\u623F\u95F4\u7684\u6240\u6709\u7528\u6237\u663E\u793A",
    "- /rules <em>rules link</em>: set the room rules link seen when using /rules": "- /rules <em>\u89C4\u5219\u94FE\u63A5</em>: \u8BBE\u5B9A/rules\u663E\u793A\u7684\u89C4\u5219\u94FE\u63A5",
    "- /roommod, /roomdriver <em>username</em>: appoint a room moderator/driver": "- /roommod, /roomdriver <em>\u7528\u6237\u540D</em>: \u5347\u7528\u6237\u4E3A\u89C1\u4E60\u7BA1\u7406/\u7BA1\u7406\u5458",
    "- /roomdemod, /roomdedriver <em>username</em>: remove a room moderator/driver": "- /roomdemod, /roomdedriver <em>\u7528\u6237\u540D</em>: \u79FB\u9664\u89C1\u4E60\u7BA1\u7406/\u7BA1\u7406\u5458\u6743\u9650",
    "- /roomdeauth <em>username</em>: remove all room auth from a user": "- /roomdeauth <em>\u7528\u6237\u540D</em>: \u53D6\u6D88\u7528\u6237\u6240\u6709\u623F\u95F4\u6743\u9650",
    "- /declare <em>message</em>: make a large blue declaration to the room": "- /declare <em>\u4FE1\u606F</em>: \u7528\u84DD\u8272\u9AD8\u4EAE\u53D1\u5E03\u516C\u544A\u4FE1\u606F",
    "- !htmlbox <em>HTML code</em>: broadcast a box of HTML code to the room": "- !htmlbox <em>HTML\u7684\u4EE3\u7801</em>: \u5728\u623F\u5185\u5E7F\u64ADHTML\u4EE3\u7801\u6846",
    "- !showimage <em>, [width], [height]</em>: show an image to the room": "- !showimage <em>[url], [\u5BBD\u5EA6], [\u9AD8\u5EA6]</em>: \u5728\u623F\u5185\u663E\u793A\u56FE\u7247",
    "- /roomsettings: change a variety of room settings, including modchat, capsfilter, etc": "- /roomsettings: \u663E\u793A\u5E76\u4FEE\u6539\u623F\u5185\u7684\u67D0\u4E9B\u8BBE\u7F6E\uFF0C\u5305\u62ECmodchat\uFF0C\u5927\u5199\u9650\u5236\u7B49",
    'More detailed help can be found in the <a href="https://www.smogon.com/forums/posts/6774654/">roomauth guide</a>': '\u9700\u8981\u66F4\u591A\u5E2E\u52A9\u53EF\u4EE5\u9605\u8BFB <a href="https://www.smogon.com/forums/posts/6774654/">\u623F\u95F4\u7BA1\u7406\u6307\u5BFC</a>',
    "Tournament Help:": "\u623F\u8D5B\u6307\u4EE4",
    "- /tour create <em>format</em>, elimination: create a new single elimination tournament in the current room.": "- /tour create <em>\u5206\u7EA7</em>, elimination: \u5728\u623F\u91CC\u5F00\u5355\u6DD8\u6C70\u8D5B\uFF08\u62A5\u540D\uFF09\u3002",
    "- /tour create <em>format</em>, roundrobin: create a new round robin tournament in the current room.": "- /tour create <em>\u5206\u7EA7</em>, roundrobin: \u5728\u623F\u91CC\u5F00\u5FAA\u73AF\u8D5B\uFF08\u62A5\u540D\uFF09\u3002",
    "- /tour end: forcibly end the tournament in the current room": "- /tour end: \u5F3A\u884C\u7EC8\u6B62\u623F\u91CC\u7684\u6BD4\u8D5B",
    "- /tour start: start the tournament in the current room": "- /tour start: \u62A5\u540D\u5B8C\u540E\u5F00\u59CB\u6BD4\u8D5B",
    "- /tour banlist [pokemon], [talent], [...]: ban moves, abilities, Pok\xE9mon or items from being used in a tournament (it must be created first)": "- /tour banlist [\u5B9D\u53EF\u68A6], [\u7279\u6027], [...]: \u5728\u6BD4\u8D5B\u91CC\u7981\u6B62\u67D0\u4E9B\u6280\u80FD\uFF0C\u7279\u6027\uFF0C\u5B9D\u53EF\u68A6\u6216\u7269\u54C1\uFF08\u5F00\u6BD4\u8D5B\u524D\u8BBE\u5B9A\uFF09",
    'More detailed help can be found in the <a href="https://www.smogon.com/forums/posts/6777489/">tournaments guide</a>': '\u9700\u8981\u66F4\u591A\u5E2E\u52A9\u53EF\u4EE5\u9605\u8BFB <a href="https://www.smogon.com/forums/posts/6777489/">\u6BD4\u8D5B\u6307\u5BFC</a>',
    "Your status cannot be updated while you are locked or semilocked.": "\u9501\u5B9A\u6216\u534A\u9501\u5B9A\u65F6\u65E0\u6CD5\u66F4\u65B0\u60A8\u7684\u72B6\u6001.",
    "Your status is too long; it must be under ${maxLength} characters.": "\u60A8\u7684\u72B6\u6001\u592A\u957F\u4E86;\u5B83\u5FC5\u987B\u4F4E\u4E8E${maxLength}\u4E2A\u5B57\u7B26.",
    "Your status contains a banned word.": "\u60A8\u7684\u72B6\u6001\u91CC\u5305\u542B\u7981\u6B62\u4F7F\u7528\u7684\u8BCD.",
    "Your status has been set to: ${target}.": "\u60A8\u7684\u72B6\u6001\u5DF2\u8BBE\u7F6E\u4E3A: ${target}.",
    "You are now marked as busy.": "\u60A8\u73B0\u5728\u88AB\u6807\u8BB0\u4E3A\u5FD9\u788C.",
    "You are now marked as away. Send a message or use /back to indicate you are back.": "\u60A8\u73B0\u5728\u88AB\u6807\u8BB0\u4E3A\u79BB\u5F00\u3002\u53D1\u9001\u6D88\u606F\u6216\u4F7F\u7528/back\u56DE\u5230\u539F\u6765\u7684\u72B6\u6001.",
    "You are already marked as back.": "\u60A8\u5DF2\u56DE\u5230\u539F\u6765\u7684\u72B6\u6001.",
    "You are no longer marked as busy.": "\u60A8\u5DF2\u505C\u6B62\u6807\u8BB0\u4E3A\u5FD9\u788C.",
    "You must choose a name before you can talk.": "\u53D1\u8A00\u4E4B\u524D\u8BF7\u767B\u5F55\u7528\u6237",
    "You are ${lockType} and can't talk in chat. ${lockExpiration}": "\u60A8\u88AB${lockType}\u5C01\u9501\uFF0C\u56E0\u6B64\u4E0D\u80FD\u53D1\u8A00\u3002${lockExpiration}",
    "Get help with [TN: your lock]this": "\u5173\u4E8E\u88AB\u5C01\u9501\u63D0\u95EE\uFF0C\u8BF7\u6C42\u5E2E\u52A9",
    "You are muted and cannot talk in this room.": "\u60A8\u88AB\u6682\u65F6\u7981\u8A00\uFF0C\u56E0\u6B64\u4E0D\u80FD\u53D1\u8A00",
    "Because moderated chat is set, your account must be at least one week old and you must have won at least one ladder game to speak in this room.": "\u623F\u95F4\u7BA1\u63A7\uFF0C\u5929\u68AF\u8D62\u4E86\u4E00\u5C40\u5E76\u4E14\u6CE8\u518C\u8D85\u8FC7\u4E00\u4E2A\u661F\u671F\u7684\u7528\u6237\u624D\u80FD\u53D1\u8A00",
    "Because moderated chat is set, your account must be staff in a public room or have a global rank to speak in this room.": "\u623F\u95F4\u7BA1\u63A7\uFF0C\u89C1\u4E60\u7BA1\u7406\u6216\u5168\u670D\u4FE1\u4EFB\u7528\u6237\u4EE5\u4E0A\u7684\u7528\u6237\u624D\u80FD\u53D1\u8A00",
    "Because moderated chat is set, you must be of rank ${groupName} or higher to speak in this room.": "\u623F\u95F4\u7BA1\u63A7\uFF0C${groupName}\u6743\u9650\u4EE5\u4E0A\u7684\u7528\u6237\u624D\u80FD\u53D1\u8A00",
    "Your message can't be blank.": "\u53D1\u8A00\u65F6\u4E0D\u80FD\u7559\u7A7A\u767D",
    "Your message is too long: ": "\u60A8\u7684\u53E5\u5B50\u592A\u957F\u4E86",
    "Your message contains banned characters.": "\u53D1\u8A00\u5185\u5BB9\u5305\u542B\u4E86\u7981\u6B62\u8BCD\u6C47",
    "This room has slow-chat enabled. You can only talk once every ${time} seconds.": "\u9650\u901F\u804A\u5929\uFF0C\u6BCF${time}\u79D2\u949F\u624D\u80FD\u53D1\u8A00",
    "Your username contains a phrase banned by this room.": "\u7528\u6237\u540D\u5305\u542B\u4E86\u7981\u6B62\u8BCD\u6C47",
    "Your status message contains a phrase banned by this room.": "\u72B6\u6001\u5185\u5BB9\u5305\u542B\u4E86\u7981\u6B62\u8BCD\u6C47",
    "You are ${lockType} and can only private message members of the global moderation team. ${lockExpiration}": "\u4F60\u5904\u4E8E${lockType}\u7684\u72B6\u6001\uFF0C\u8FD9\u8868\u793A\u4F60\u53EA\u80FD\u79C1\u804A\u53D1\u6D88\u606F\u7ED9\u5168\u670D\u7BA1\u7406\u3002${lockExpiration}",
    "Get help with this": "\u7528\u8FD9\u4E2A\u8BF7\u6C42\u5E2E\u52A9",
    'The user "${targetUser.name}" is locked and cannot be PMed.': '"${targetUser.name}"\u88AB\u9501\u5B9A\u4E86\uFF0C\u56E0\u6B64\u4E0D\u80FD\u79C1\u804A\u4ED6\u3002',
    "On this server, you must be of rank ${groupName} or higher to PM users.": "\u4F60\u5FC5\u987B\u662F${groupName}\u4EE5\u4E0A\u7684\u73A9\u5BB6\u624D\u80FD\u5728\u8FD9\u4E2A\u670D\u52A1\u5668\u91CC\u79C1\u4FE1\u522B\u4EBA\u3002",
    "This user is blocking private messages right now.": "\u8FD9\u4E2A\u4EBA\u62D2\u6536\u79C1\u4FE1\u3002",
    "This ${Config.groups[targetUser.group].name} is too busy to answer private messages right now. Please contact a different staff member.": "${Config.groups[targetUser.group].name}\u592A\u5FD9\u4E86\uFF0C\u53E6\u627E\u4E2A\u5168\u670D\u7BA1\u7406\u6765\u5904\u7406\u5427\u3002",
    'If you need help, try opening a <a href="view-help-request" class="button">help ticket</a>': '\u5982\u679C\u4F60\u9700\u8981\u5E2E\u52A9\uFF0C\u8BD5\u8BD5\u521B\u5EFA\u4E00\u4E2A<a href="view-help-request" class="button">\u5E2E\u52A9\u8BF7\u6C42</a>',
    "You are blocking private messages right now.": "\u4F60\u73B0\u5728\u5DF2\u62D2\u6536\u79C1\u4FE1\u3002",
    "You are blocking challenges right now.": "",
    "Your message contained banned words in this room.": "\u53D1\u8A00\u5185\u5BB9\u5305\u542B\u4E86\u623F\u95F4\u5185\u7981\u6B62\u8BCD\u6C47",
    "You can't send the same message again so soon.": "\u540C\u6837\u7684\u53E5\u5B50\u4E0D\u80FD\u53CA\u65F6\u53D1\u51FA",
    "Due to this room being a high traffic room, your message must contain at least two letters.": "\u7531\u4E8E\u6B64\u623F\u95F4\u6D41\u91CF\u8F83\u5927\uFF0C\u56E0\u6B64\u60A8\u7684\u6D88\u606F\u5FC5\u987B\u81F3\u5C11\u5305\u542B\u4E24\u4E2A\u5B57\u6BCD",
    "You are already blocking private messages! To unblock, use /unblockpms": "\u60A8\u5DF2\u5C4F\u853D\u79C1\u4FE1\u3002\u82E5\u8981\u6062\u590D\u63A5\u6536\u79C1\u4FE1\uFF0C\u8BF7\u4F7F\u7528/unblockpms",
    "You are now blocking private messages, except from staff and ${rank}.": "\u60A8\u5DF2\u5C4F\u853D\u79C1\u4FE1\uFF0C\u9664\u4E86\u7BA1\u7406\u4E0E${rank}\u6743\u9650\u4EE5\u4E0A\u7684\u7528\u6237",
    "You are now blocking private messages, except from staff and ${status} users.": "\u60A8\u5DF2\u5C4F\u853D\u79C1\u4FE1\uFF0C\u9664\u4E86\u7BA1\u7406\u4E0E${status}\u72B6\u6001\u7684\u7528\u6237",
    "You are now blocking private messages, except from staff.": "\u60A8\u5DF2\u5C4F\u853D\u79C1\u4FE1\uFF0C\u9664\u4E86\u7BA1\u7406\u7528\u6237",
    "You are not blocking private messages! To block, use /blockpms": "\u60A8\u5E76\u672A\u5C4F\u853D\u79C1\u4FE1\u3002\u82E5\u8981\u5C4F\u853D\u79C1\u4FE1\uFF0C\u8BF7\u4F7F\u7528/blockpms",
    "You are no longer blocking private messages.": "\u60A8\u5DF2\u505C\u6B62\u5C4F\u853D\u79C1\u4FE1",
    "You are now blocking all incoming challenge requests.": "\u60A8\u5DF2\u5C4F\u853D\u6240\u6709\u6311\u6218\u8BF7\u6C42",
    "You are already blocking challenges!": "\u60A8\u5DF2\u5C4F\u853D\u6311\u6218\u8BF7\u6C42",
    "You are already available for challenges!": "\u60A8\u5DF2\u80FD\u591F\u63A5\u6536\u6311\u6218\u8BF7\u6C42",
    "You are available for challenges from now on.": "\u60A8\u4ECE\u73B0\u5728\u5F00\u59CB\u63A5\u6536\u6311\u6218\u8BF7\u6C42",
    "You are now blocking challenges, except from staff and ${rank}.": "",
    "You are now blocking challenges, except from staff and ${status} users.": "",
    "Staff FAQ": "\u7BA1\u7406FAQ",
    "You cannot broadcast all FAQs at once.": "\u65E0\u6CD5\u540C\u65F6\u5E7F\u64AD\u6240\u6709FAQ",
    "A user is autoconfirmed when they have won at least one rated battle and have been registered for one week or longer. In order to prevent spamming and trolling, most chatrooms only allow autoconfirmed users to chat. If you are not autoconfirmed, you can politely PM a staff member (staff have %, @, or # in front of their username) in the room you would like to chat and ask them to disable modchat. However, staff are not obligated to disable modchat.": "\u81EA\u52A8\u786E\u8BA4\u7528\u6237\u5C31\u662F\u5728\u5929\u68AF\u4E0A\u8D62\u4E86\u4E00\u6B21\u7684\u8FD8\u6709\u6CE8\u518C\u6EE1\u4E00\u5468\u7684\u7528\u6237\u3002\u4E3A\u4E86\u907F\u514D\u673A\u5668\u4E0E\u718A\u5B69\u5B50\u7B49\u5783\u573E\u4E4B\u7C7B\u7684\u7528\u6237\uFF0CPS\u5927\u591A\u6570\u7684\u804A\u5929\u5BA4\u90FD\u9700\u8981\u81EA\u52A8\u786E\u8BA4\u7528\u6237\u4EE5\u4E0A\u7684\u7528\u6237\u624D\u80FD\u804A\u5929\u3002\u5982\u679C\u4F60\u6CA1\u6709\u5F97\u5230\u8981\u6C42\uFF0C\u4F60\u53EF\u4EE5\u79C1\u8A00\u4E00\u4E2A\u5728\u623F\u91CC\u7684\u7BA1\u7406\u5458\uFF08\u7528\u6237\u540D\u524D\u52A0%\uFF0C@\uFF0C#\u53F7\u7684\uFF09\u3002\u603B\u4E4B\u8FD8\u662F\u8981\u770B\u60C5\u51B5\uFF0C\u8981\u662F\u7BA1\u7406\u5458\u5F88\u5FD9\u7684\u8BDD\u6216\u8005\u54EA\u91CC\u4E0D\u7B26\u5408\u8981\u6C42\uFF0C\u5C31\u53EA\u80FD\u7B49\u5F85",
    "How the ladder works": "\u4EC0\u4E48\u53EB\u505A\u5929\u68AF",
    "Tiering FAQ": "\u5206\u7EA7\u8BC4\u8BBAFAQ",
    "Badge FAQ": "\u8BBA\u575B\u5FBD\u7AE0FAQ",
    "Common misconceptions about our RNG": "\u5173\u4E8E\u968F\u673A\u6570\u53D1\u751F\u5668\u8FD8\u662F\u8FD0\u6C14\u4E0D\u597D",
    "To join a room tournament, click the <strong>Join!</strong> button or type the command <code>/tour join</code> in the room's chat. You can check if your team is legal for the tournament by clicking the <strong>Validate</strong> button once you've joined and selected a team. To battle your opponent in the tournament, click the <strong>Ready!</strong> button when it appears. There are two different types of room tournaments: elimination (if a user loses more than a certain number of times, they are eliminated) and round robin (all users play against each other, and the user with the most wins is the winner).": "\u82E5\u60F3\u52A0\u5165\u623F\u8D5B\uFF0C\u70B9\u4E00\u4E0B<strong>Join!</strong> \u6216\u8005\u5728\u623F\u5185\u6253\u4E00\u4E0B<code>/tour join</code>\u3002\u8981\u662F\u62C5\u5FC3\u961F\u4F0D\u6709\u95EE\u9898\u7684\u8BDD\uFF0C\u52A0\u5165\u623F\u8D5B\u540E\u53EF\u4EE5\u70B9\u4E00\u4E0B<strong>Validate</strong>\u3002\u63A5\u53D7\u6311\u6218\uFF0C\u70B9\u4E00\u4E0B<strong>Ready!</strong> \u3002\u5171\u6709\u4E24\u79CD\u6BD4\u8D5B\uFF0C\u6DD8\u6C70\u8D5B\uFF08\u4E00\u822C\u60C5\u51B5\u4E0B\u53EA\u6709\u4E00\u6761\u547D\uFF09\uFF0C\u8FD8\u6709\u5FAA\u73AF\u8D5B\uFF08\u6BCF\u4E2A\u5BF9\u624B\u8F83\u91CF\u4E00\u6B21\uFF09\u3002",
    "Frequently Asked Questions": "\u5E38\u89C1\u95EE\u9898\u89E3\u7B54",
    "pages/faq": "pages/faq",
    "pages/ladderhelp": "pages/ladderhelp",
    "pages/rng": "pages/rng",
    "pages/staff": "pages/staff",
    "- We log PMs so you can report them - staff can't look at them without permission unless there's a law enforcement reason.": "",
    "- We log IPs to enforce bans and mutes.": "",
    "- We use cookies to save your login info and teams, and for Google Analytics and AdSense.": "",
    '- For more information, you can read our <a href="https://${Config.routes.root}/privacy">full privacy policy.</a>': ""
  }
};
//# sourceMappingURL=main.js.map
