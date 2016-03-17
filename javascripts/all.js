var app=angular.module("theme",["ui.router"]);app.config(["$stateProvider","$urlRouterProvider",function(F,E){F.state("theme",{url:"/:slug",controller:"ThemeController",params:{slug:{value:"afterglow"}}}),E.otherwise("/afterglow")}]),app.controller("ThemeController",["$scope","$stateParams","$state","$location",function(F,E,D,C){var A={afterglow:"#2F2C2F,#252525,#A36B31,#D2D6D6,#5C6380,#DEDEDE,#ADBA4E,#DB6668",amigaos_1_3:"#0050A0,#000020,#F08000,#FFFFFF,#F08000,#FFFFFF,#F08000,#F08000",aubergine:"#4D394B,#3E313C,#4C9689,#FFFFFF,#3E313C,#FFFFFF,#38978D,#EB4D5C",base16_eighties_dark:"#393939,#2D2D2D,#F2777A,#FFFFFF,#515151,#D3D0C8,#99CC99,#66CCCC",base16_eighties_light:"#F2F0EC,#E8E6DF,#F2777A,#FFFFFF,#515151,#515151,#99CC99,#66CCCC",base16_tomorrow_night:"#191A1C,#282A2E,#B6BC68,#FFFFFF,#363B41,#959896,#80A2BE,#C26161",beaver_builders:"#F7941E,#FFB963,#FFB963,#110000,#F5A849,#110000,#3D0000,#507DAA",big_red:"#754242,#BD3737,#9C4444,#FFFFFF,#434745,#FFFFFF,#99D04A,#DB6668",bourbon:"#CF7C44,#CF7C44,#E89A6B,#F7DB72,#FBEDD4,#FFFAFC,#92406A,#92406A",brinjal:"#4F2F4C,#452842,#8C5888,#FFFFFF,#3E313C,#FFFFFF,#00FFB7,#DE4C0D",chicago_cubs:"#0E3386,#133a94,#D12325,#FFFFFF,#a31a1c,#FFFFFF,#D12325,#D12325",choco_mint:"#544538,#42362B,#5DB09D,#FFFFFF,#4A3C30,#FFFFFF,#FFFFFF,#5DB09D",citrus:"#507800,#94AF63,#FFEA00,#507800,#94AF63,#FFFFFF,#F7FF00,#FF9900",cobalt2:"#193549,#254155,#FFE633,#254155,#205569,#FFFFFF,#FFE633,#FDC400",convoy:"#3A3D3F,#3A3D3F,#D84315,#FFFFFF,#3A3D3F,#FFFFFF,#48B8AD,#D84315",dd:"#222222,#111111,#111111,#66AADD,#555555,#EEEEEE,#66DD66,#DD666D",danny_torrence:"#751C01,#5C1500,#FFFFFF,#751C01,#AD2A02,#FFFFFF,#FFFFFF,#AD2A02",deep_blue:"#0074B2,#0083CA,#00A2FF,#FFFFFF,#00A5FF,#FFFFFF,#03EEFF,#00CCC2",design_hub:"#1B549E,#1B549E,#19C0E7,#FFFFFF,#19C0E7,#FFFFFF,#19C0E7,#FFFFFF",digitalocean:"#3686BE,#215F8B,#7DB461,#FFFFFF,#2E3234,#FFFFFF,#7DB461,#215F8B",dolly_dark:"#635C5A,#564F4D,#E7412A,#FFFFFF,#564F4D,#FFFFFF,#8DA600,#0EA7B5",dolly_light:"#FAFAFA,#F3F3F3,#E7412A,#FFFFFF,#EDEDED,#564F4D,#8DA600,#0EA7B5",douglas_rain:"#EDECEB,#E3E3E3,#DA552F,#FFFFFF,#D6D6D6,#534540,#DA552F,#DA552F",dracula:"#282A36,#44475A,#44475A,#8BE9FD,#6272A4,#FFFFFF,#50FA7B,#FF5555",dropbox:"#007EE5,#007EE5,#47525D,#FFFFFF,#7B8994,#FFFFFF,#47525D,#47525D",drund:"#181818,#202020,#99CB3F,#FFFFFF,#202020,#FFFFFF,#99CB3F,#F7124E",ega:"#0000AA,#00AAAA,#FF55FF,#FFFFFF,#00AAAA,#FFFFFF,#C0C0C0,#FF00FF",fc_bayern_munchen:"#B51929,#B51929,#23408E,#BCA26F,#025277,#FFFFFF,#E5D3A0,#B7B6B7",facebook:"#4E69A2,#38528B,#38528B,#FFFFFF,#38528B,#FFFFFF,#1FAD38,#CD2323",film_noir:"#101010,#101010,#D3D3CA,#BB313E,#424242,#F0F0E6,#BB313E,#BB313E",freshbooks:"#0D83DD,#0064BE,#86C620,#FFFFFF,#648C0F,#FFFFFF,#9DFF00,#86C620",gartland:"#404040,#696969,#FFD200,#000000,#000000,#FFFFFF,#00703C,#EF4C23",github_activity_graph:"#333333,#222222,#44A340,#FFFFFF,#8CBE65,#FFFFFF,#D6E685,#1E6823",goodstuff_fm:"#292D36,#000000,#DA5647,#FFFFFF,#333644,#FFFFFF,#57AFBD,#DA5647",gotham:"#0A0F14,#10151B,#265360,#D4EBE9,#D26939,#9BD1CE,#EDB54B,#C33027",grooveshark:"#181D27,#FD6540,#393F40,#F1F2F4,#393F40,#F1F2F4,#F1F2F4,#FD6540",haunter:"#340027,#260024,#FF1962,#FFFFFF,#610047,#FFFFFF,#FF1962,#FF1962",hibari:"#383643,#383643,#EB4864,#FFFFFF,#383643,#FFFFFF,#EB4864,#EB4864",hip:"#F5F5F5,#CCCCCC,#3873AE,#FFFFFF,#E9E9E9,#000000,#69AA4E,#999999",hot_dog_stand:"#C0441C,#91282A,#F79F66,#FFFFFF,#91282A,#FFFFFF,#F79F66,#F15340",hoth:"#F8F8FA,#F8F8FA,#CAD1D9,#FFFFFF,#FFFFFF,#383F45,#60D156,#FF8669",hummingbird:"#2F343B,#2F343B,#FD7532,#FFFFFF,#FD7532,#FFFFFF,#FD7532,#FD7532",ingress_enlightened:"#000E0F,#000E0F,#393218,#F1C248,#006D77,#34EAF5,#02BF02,#F1C248",ingress_resistence:"#000E0F,#000E0F,#393218,#F1C248,#006D77,#34EAF5,#0492D0,#F1C248",juice_bar:"#86A34E,#94AF63,#FFFFFF,#6D8B42,#94AF63,#FFFFFF,#FFB10A,#DFA044",kansas_city_chiefs:"#B51815,#A51815,#FFFFFF,#B51815,#FF1815,#FFD21F,#FFE21F,#FF5555",kill_bill:"#FDE13A,#FDE13A,#000000,#E72D25,#FFF09E,#000000,#E72D25,#E72D25",kimbie:"#F3E3CD,#F3E3CD,#F3951D,#DA3D61,#F26328,#183E1C,#DA3D61,#F26328",latte:"#C17F46,#C17F46,#CFA677,#DCBF98,#FBEDD4,#EFEFEF,#EAECF1,#EAECF1",light_blue:"#89A1AB,#7D949E,#FFFFFF,#748991,#748991,#FFFFFF,#B3FF00,#748991",luizalabs:"#0074B2,#0083CA,#B26500,#FFFFFF,#00A5FF,#FFFFFF,#FF9000,#FF9000",madsoft:"#4A3A55,#3A2A45,#8A7A95,#FFFFFF,#2A1A35,#FFFFFF,#22CC88,#CC2288",makers:"#663399,#592D86,#8F6DB0,#FFFFFF,#3E313C,#FFFFFF,#FFFFFF,#EB4D5C",material_blue_grey:"#607D8B,#546E7A,#90A4AE,#FFFFFF,#455A64,#FFFFFF,#B2FF59,#EF5350",material_dark_blue_grey:"#212121,#212121,#607D8B,#FFFFFF,#607D8B,#FFFFFF,#607D8B,#607D8B",material_dark_indigo:"#212121,#212121,#3F51B5,#FFFFFF,#3F51B5,#FFFFFF,#3F51B5,#3F51B5",material_indigo:"#3F51B5,#303F9F,#303F9F,#FFFFFF,#303F9F,#FFFFFF,#B2FF59,#9FA8DA",mean_green:"#278F0D,#19780C,#070708,#FFFFFF,#19780C,#FFFFFF,#F7FF00,#FF8669",midnight_pink:"#34495e,#16a085,#1abc9c,#FFFFFF,#16A085,#ecf0f1,#FF2A68,#FF2A68",monokai:"#222222,#2F2F2F,#F92772,#FFFFFF,#A6E22D,#FFFFFF,#66D9EF,#BE84F2",monument:"#0D7E83,#076570,#F79F66,#FFFFFF,#D37C71,#FFFFFF,#F79F66,#F15340",myplanet:"#232323,#000000,#f05a28,#000000,#000000,#FFFFFF,#f05a28,#f05a28",netflix:"#1F1C18,#8E0E00,#8E0E00,#FFFFFF,#A1A09F,#FFFFFF,#B01D0C,#8E0E00",ochin:"#303E4D,#2C3849,#6698C8,#FFFFFF,#4A5664,#FFFFFF,#94E864,#78AF8F",oktavilla:"#F9F6F1,#F9F6F1,#FF3300,#FFFFFF,#FF3300,#1E1E1E,#FF3300,#B3D4FD",peter_sellers:"#0D2D4F,#0A2440,#639DD4,#FFFFFF,#3E6796,#FFFFFF,#94E864,#5990CF",phone_box:"#003D67,#003D67,#FFFFFF,#003D67,#00548C,#FFFFFF,#0099FF,#006752",pittsburgh_penguins:"#CEC18A,#ffffff,#000000,#FFFFFF,#FFFFFF,#000000,#ffff00,#000000",polygon:"#C10048,#920A3D,#2E0002,#FFFFFF,#610A29,#FFFFFF,#FFFFFF,#610A29",polymer:"#1F2036,#7986CB,#FE528C,#FFFFFF,#606BA2,#FFFFFF,#2DEBAE,#FE528C",pouchdb:"#F6F6F6,#EEEEEE,#FA3649,#FFFFFF,#FFFFFF,#000000,#60D156,#FA3649",product_hunt:"#FFFFFF,#EDECEB,#DA552F,#FFFFFF,#FCF5E2,#534540,#DA552F,#FF8669",put_io:"#FFFFFF,#FDCE45,#FDCE45,#0F1216,#ECEEF2,#0F1216,#1FAE7D,#1FAE7D",railway_clock:"#FFFFFF,#FFFFFF,#E0E0E0,#E1382F,#F2F2F2,#050505,#E1382F,#E1382F",reddit:"#F7F7F7,#CEE3F8,#B3CCE6,#FF3000,#B3CCE6,#336699,#38978D,#FF7500",retro_monochrome_terminal:"#000000,#000000,#006600,#00ff00,#00ff00,#00ff00,#ff0000,#ff0000",saiku_analytics:"#AE1817,#AE1817,#232323,#FFFFFF,#999999,#FFFFFF,#333333,#232323",sky_blue:"#A5C0CC,#62A5BF,#1A91BD,#F5F5F5,#BAD8E3,#170317,#38978D,#EB4D5C",slack_white:"#FFFFFF,#FFFFFF,#FFFFFF,#2288CC,#2288CC,#454449,#93CC93,#2288CC",slack_com:"#573D82,#453068,#3FBA91,#FFFFFF,#453068,#FFFFFF,#3FBA91,#FF3E88",social_tables_blue:"#494949,#65A0D6,#49C6B7,#FFFFFF,#898B8F,#FFFFFF,#9ECD75,#E6615D",social_tables_pink:"#494949,#CB5599,#49C6B7,#FFFFFF,#898B8F,#FFFFFF,#9ECD75,#E6615D",socialsign_in:"#112539,#112539,#2DA89C,#FFFFFF,#004365,#FFFFFF,#2DEBAE,#2DEBAE",solanum:"#4F2F4C,#452842,#8C5888,#FFFFFF,#3E313C,#FFFFFF,#D0FF00,#889100",solarized:"#FDF6E3,#EEE8D5,#93A1A1,#FDF6E3,#EEE8D5,#657B83,#2AA198,#DC322F",solarized_dark:"#073642,#002B36,#B58900,#FDF6E3,#CB4B16,#FDF6E3,#2AA198,#DC322F",son_of_obsidian:"#293134,#2F393C,#293134,#93C763,#2F393C,#81969A,#EC7600,#EC7600",space_gray:"#303E4D,#2C3849,#B04C58,#FFFFFF,#4A5664,#B3B8C4,#94E864,#78AF8F",spotify:"#1A1919,#1A1919,#EDEBE6,#7DBA4A,#4F4D4D,#FFFFFF,#7DBA4A,#7DBA4A",spring_tree:"#EB4D5C,#EB4D5C,#A6D6A1,#3C3865,#3C3865,#FFFFFF,#3C3865,#F18E2C",starbucks:"#0A6242,#0A6242,#3D3935,#BC7E3B,#BC7E3B,#F7F7F7,#3D3935,#3D3935",stark_contrast:"#000000,#A51C24,#FFFFFF,#0320FF,#A5A5A5,#FFFFFF,#FFFFFF,#FFFF00",summer_craze:"#B300B3,#23A61C,#FFFFFF,#C400FF,#FF2EFF,#000000,#F7FF00,#F7FF00",terminal:"#101010,#000000,#FFFFFF,#000000,#A0A0A0,#FFFFFF,#00A400,#5858FE",the_changelog:"#2B2D2D,#4A4C4D,#428BCA,#FFFFFF,#428BCA,#FFFFFF,#67D044,#DE495B",tron:"#000000,#000000,#1EB8EB,#000000,#1EB8EB,#FFFFFF,#1EB8EB,#1EB8EB",twitter:"#55ACEE,#55ACEE,#E1E8ED,#292F33,#ADDCFF,#F5F8FA,#E1E8ED,#E1E8ED",uber_dark:"#151525,#3A3A48,#1EACC7,#F2F2F4,#3A3A48,#E6E6E9,#79D6E6,#4CC8DE",uber_light:"#F2F2F4,#E6E6E9,#1FBAD6,#FFFFFF,#C0C0C8,#151525,#1FBAD6,#4CC8DE",wamein:"#BB6A76,#AD5B67,#62B791,#FFFFFF,#A5516A,#FFFFFF,#68F798,#694464",watermelon:"#2B7164,#2B7164,#51A050,#EC2262,#CECCB2,#032342,#DA3D61,#CECCB2",wedgies:"#222222,#333333,#3F96CA,#F9F9F9,#4A5664,#FFFFFF,#3F96CA,#EFC000",wegman:"#E3DAE6,#B49FC2,#5A30B0,#FDF6E3,#EEE8D5,#594275,#B358BF,#BD72CC",windows_3_1:"#FFFFFF,#C0C0C0,#001F7E,#FFFFFF,#C0C0C0,#000000,#001F7E,#C0C0C0",windows_95:"#327C7E,#001F7E,#001F7E,#FFFFFF,#001F7E,#FFFFFF,#C0C0C0,#C0C0C0",windows_xp:"#F0EDE0,#0054E3,#0054E3,#FFFFFF,#0054E3,#000000,#ED6D3A,#ED6D3A",work_hard:"#4D5250,#444A47,#D39B46,#FFFFFF,#434745,#FFFFFF,#99D04A,#DB6668",yosemite_itunes:"#FAFAFA,#FAFAFA,#0F82FF,#FFFFFF,#D4E7FF,#404040,#62D962,#E92242",youtube:"#FFFFFF,#CC181E,#CC181E,#FFFFFF,#444444,#0D0D0D,#CC181E,#E04A4D",zeplin:"#F5F5F5,#FFFFFF,#FDBD39,#FFFFFF,#FECF33,#574751,#A4BF36,#EE6723",plug_dj:"#1C1F25,#282C35,#925AFF,#FFFFFF,#925AFF,#FFFFFF,#89BE6C,#DB182E",xunit_net:"#162C16,#444A47,#663333,#FFFFFF,#995050,#FFFFFF,#E0E066,#DB6668"};F.$on("$stateChangeSuccess",function(){F.slug=E.slug}),F.$watch("slug",function(E){if(E){if("custom"===E)return void(F.colors=C.hash().split(",").map(function(F){return"#"+F}).join(","));F.colors=A[F.slug],D.go("theme",{slug:E})}}),F.$watch("colors",function(E){function B(){C.hash(e.map(function(F){return F.replace("#","")}))}if(E){var e=E.split(",");F.column_bg=e[0],F.menu_bg=e[1],F.active_item=e[2],F.active_item_text=e[3],F.hover_item=e[4],F.text_color=e[5],F.active_presence=e[6],F.mention_badge=e[7],"custom"===F.slug?B():E!==A[F.slug]&&D.go("theme",{slug:"custom"}).then(B)}})}]);