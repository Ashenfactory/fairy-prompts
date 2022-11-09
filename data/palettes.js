const palettes = [
	['#cbc0d3', '#efd3d7'],
	['#b71e56', '#fae48f'],
	['#d1bd06', '#257fbd'],
	['#dacb32', '#232323'],
	['#0f5ea3', '#b5c62a'],
	['#4f4a9e', '#e5e6c4'],
	['#d1bd06', '#9e63a5'],
	['#cd2d47', '#105fa4'],
	['#eeb301', '#257fbd'],
	['#ed7a10', '#7e3688'],
	['#d2be07', '#3c3279'],
	['#0e5da2', '#eee5c6'],
	['#6e3e92', '#f1f1f1'],
	['#4f4a9e', '#e19118'],
	['#d94239', '#1e95ad'],
	['#b81f57', '#f4d12f'],
	['#a8b800', '#412645'],
	['#4c6665', '#3f3f3f'],
	['#5f5162', '#3c3c3c'],
	['#705b5a', '#878787'],
	['#7dcbbe', '#9ab2b6'],
	['#c6dbe0', '#bda9aa'],
	['#e7d2cd', '#a1a1ad'],
	['#287772', '#4f636a'],
	['#beaaa3', '#9bb3b7'],
	['#e7d2cd', '#f0e7c8'],
	['#9ab2b6', '#d7d7d7'],
	['#473b2f', '#725b63'],
	['#402e2c', '#4d5665'],
	['#c4bb9e', '#bbabae'],
	['#6c7059', '#705961'],
	['#c4bb9e', '#98a2ac'],
	['#beaaa3', '#878787'],
	["#fbce2d", "#0e0a05"],
	["#dde900", "#1c3157"],
	["#ffffff", "#d45d40"],
	["#e5e5e5", "#6b353a"],
	["#333375", "#84c0e1"],
	["#e74384", "#fef8fa"],
	["#640297", "#f5f1f7"],
	["#ffffff", "#074896"],
	["#000000", "#f7f8f8"],
	["#363636", "#f65701"],
	["#976dfd", "#fcfbfe"],
	["#dadad0", "#52534e"],
	["#ffffff", "#273651"],
	["#e65945", "#342e3e"],
	["#ff6b5f", "#ffea9f"],
	["#010101", "#f0f0f0"],
	["#577abc", "#f38d71"],
	["#0071bc", "#fefeff"],
	["#000000", "#fbfbfb"],
	["#cbe5f6", "#3b4b9c"],
	["#3703ce", "#9aa8e4"],
	["#261f16", "#3b9270"],
	["#ffffff", "#161616"],
	["#f5f5f5", "#2d2d2d"],
	["#262626", "#d3d3d3"],
	["#030710", "#e0366e"],
	["#fefefe", "#e95492"],
	["#293234", "#e7e2d8"],
	["#f0f4ff", "#4d4d62"],
	["#fefeff", "#3366ff"],
	["#f8f7f3", "#e55d56"],
	["#001931", "#00c8cd"],
	["#2f477d", "#dfe3eb"],
	["#132d3e", "#4792c3"],
	["#fefdfd", "#ed6f6b"],
	["#000000", "#f51110"],
	["#fd2c5a", "#fff5f7"],
	["#ffdb00", "#120572"],
	["#313130", "#c4b99e"],
	["#fe0000", "#240000"],
	["#1d1d1b", "#f0f0f0"],
	["#fffffe", "#0e0e0e"],
	["#fefeff", "#1423f8"],
	["#f7f7f7", "#4a6299"],
	["#010101", "#fafafa"],
	["#d6fc51", "#3b0136"],
	["#ffffff", "#0191d4"],
	["#00ffff", "#0003ff"],
	["#081827", "#06d43b"],
	["#ededec", "#a26e39"],
	["#ffcf5d", "#141007"],
	["#040404", "#d4af4e"],
	["#fefefe", "#424143"],
	["#fffffe", "#41220e"],
	["#ffffff", "#1a3552"],
	["#ededed", "#0d0d0d"],
	["#fefefe", "#454545"],
	["#f2eee5", "#bf526f"],
	["#ffffff", "#182a4d"],
	["#ef8265", "#070403"],
	["#27caff", "#fab97d"],
	["#f9f5ef", "#e64121"],
	["#ffffff", "#e91e63"],
	["#16111d", "#e2d429"],
	["#fefefe", "#481d57"],
	["#ffffff", "#2a3040"],
	["#0d386f", "#edf0f4"],
	["#ffffff", "#1d1d1d"],
	["#5a35ff", "#f9f5e8"],
	["#452066", "#fab460"],
	["#ffffff", "#566889"],
	["#333333", "#ec6a0f"],
	["#ffffff", "#242021"],
	["#ffffff", "#030303"],
	["#f1ebe5", "#e31716"],
	["#fefdfa", "#45382d"],
	["#272262", "#ce67a9"],
	["#fefefe", "#333333"],
	["#fff6d2", "#ff4d06"],
	["#20201f", "#d1ae5b"],
	["#fd9b01", "#1ca4fb"],
	["#224433", "#977559"],
	["#be2425", "#f69523"],
	["#000000", "#fcfcfc"],
	["#cbac6b", "#2d3237"],
	["#fa55ff", "#fee4ac"],
	["#193463", "#fdfdfd"],
	["#f4ddc9", "#632042"],
	["#130014", "#b92842"],
	["#ffffff", "#000000"],
	["#f0f0f1", "#3a3a3a"],
	["#f1d14c", "#363533"],
	["#f2f2f2", "#18191d"],
	["#fffefe", "#bf4b36"],
	["#222121", "#e63e38"],
	["#34495d", "#e5eaeb"],
	["#fbfbfb", "#444142"],
	["#4a8882", "#eef1f1"],
	["#2b2a29", "#f9f9f9"],
	["#83be97", "#805f30"],
	["#ffffff", "#060606"],
	["#221e1f", "#e0dccb"],
	["#eeedee", "#ba0364"],
	["#012355", "#a66c38"],
	["#1b1b1b", "#e0e0e0"],
	["#ffffff", "#404042"],
	["#f3f1f2", "#8e7545"],
	["#f4f4f4", "#c52c2a"],
	["#000000", "#c4121b"],
	["#ffe135", "#be07d1"],
	["#fffefe", "#fe3d1b"],
	["#ffffff", "#ff0202"],
	["#032e3c", "#f6f8f8"],
	["#ffffff", "#0373fe"],
	["#fffffe", "#a825e1"],
	["#fbfbfa", "#11171d"],
	["#f8f8f6", "#3b3d3d"],
	["#fefefe", "#121212"],
	["#3a5274", "#e2e5ea"],
	["#ffffff", "#030303"],
	["#fdfdfd", "#0b191c"],
	["#f8f8f6", "#635627"],
	["#313f48", "#01afaa"],
	["#ffffff", "#1579fb"],
	["#182835", "#e9b315"],
	["#1b1f2a", "#e0a981"],
	["#91be41", "#3e472f"],
	["#d9b916", "#0b274b"],
	["#fcfcfc", "#404040"],
	["#f4f4f4", "#0b090a"],
	["#209bde", "#5c2f66"],
	["#9eeeda", "#030505"],
	["#232613", "#bca068"],
	["#e6e3d7", "#ac583c"],
	["#0e0c11", "#562bda"],
	["#efece5", "#3d71f1"],
	["#ffffff", "#020202"],
	["#e4e4e4", "#626262"],
	["#b7cdc1", "#18254f"],
	["#fefefd", "#ec3b7d"],
	["#eeeeee", "#764c4b"],
	["#f5a4a3", "#261919"],
	["#292929", "#d27f5d"],
	["#252428", "#af946d"],
	["#b3b3b3", "#1c2942"],
	["#27252b", "#f6f6f6"],
	["#feffff", "#1f6c9c"],
	["#100f0f", "#d09421"],
	["#151414", "#e43304"],
	["#ffffff", "#ec132c"],
	["#f5f5f5", "#424243"],
	["#fcfcfc", "#050505"],
	["#fafafa", "#e34a85"],
	["#050505", "#f7f7f7"],
	["#fefbfb", "#353858"],
	["#000000", "#f3f3f3"],
	["#0c252f", "#d7c280"],
	["#f6c861", "#56b1b3"],
	["#fffefe", "#e64a37"],
	["#fd5231", "#060202"],
	["#233f4b", "#b49057"],
	["#ff0929", "#fef6f7"],
	["#fbfcfc", "#5e7f99"],
	["#03002d", "#f9f9fa"],
	["#fbfbfb", "#f91751"],
	["#ffde17", "#f25f1b"],
	["#000000", "#e7ca7c"],
	["#ffffff", "#040404"],
	["#361f55", "#e3aa32"],
	["#f6f6f6", "#020202"],
	["#06161b", "#98cc14"],
	["#ad402a", "#d9b17a"],
	["#111111", "#efefef"],
	["#fdfdfd", "#373737"],
	["#f4e9d9", "#3d4fda"],
	["#c75e4f", "#e5d79a"],
	["#4a4a4a", "#fbfbfb"],
	["#ffffff", "#560a29"],
	["#f4f3ee", "#5a5f64"],
	["#f8f8f8", "#393939"],
	["#1a1a1a", "#e9e9e9"],
	["#ffffff", "#e8531a"],
	["#e8e3dc", "#cd2d22"],
	["#37363b", "#d6ab81"],
	["#fcfdfd", "#0c0d0e"],
	["#da542c", "#fdf6f3"],
	["#fbf0ea", "#4f4d4c"],
	["#f7d8cf", "#ee2f26"],
	["#f7f7f7", "#e9574a"],
	["#f18433", "#fffefd"],
	["#fefeff", "#868cf5"],
	["#ffffff", "#090909"],
	["#fdfdfd", "#32302f"],
	["#010101", "#c7a369"],
	["#515781", "#f5f6f8"],
	["#f1f4eb", "#4c412d"],
	["#f4f4f4", "#281818"],
	["#ffffff", "#040404"],
	["#f12b42", "#feeef0"],
	["#08090a", "#f0f0f0"],
	["#edede5", "#252524"],
	["#febfee", "#fe362b"],
	["#ffffff", "#b403b2"],
	["#e1f4fe", "#738255"],
	["#fafcfd", "#577994"],
	["#012c09", "#c09044"],
	["#6a1e46", "#fbf8fa"],
	["#ffffff", "#e5504a"],
	["#210501", "#a18950"],
	["#fefefe", "#de1f26"],
	["#815cf4", "#f1edfc"],
	["#010101", "#f8f8f8"],
	["#181b38", "#02e4f1"],
	["#f51e28", "#fffcfc"],
	["#5847ed", "#d3cefa"],
	["#e74c3d", "#28201f"],
	["#ffffff", "#2c2924"],
	["#0d3938", "#9b8b34"],
	["#111111", "#f1c716"],
	["#2c3e50", "#ebecb0"],
	["#ffdec0", "#3c1e11"],
	["#0071bb", "#c2d9d5"],
	["#e94c89", "#fbeef4"],
	["#996cff", "#fdfcff"],
	["#fdfdfd", "#3e3c3d"],
	["#f8f4ec", "#18110a"],
	["#f05328", "#fceae4"],
	["#f6f6f7", "#6c6ff5"],
	["#000000", "#e4e4e4"],
	["#eaeaeb", "#223944"],
	["#ce168d", "#fffefe"],
	["#1a1a1a", "#e8e8e8"],
	["#242424", "#f0f0f0"],
	["#ffc60b", "#d51b20"],
	["#fffeff", "#ea4e8a"],
	["#002549", "#afb0b0"],
	["#2b2e28", "#e6e2cd"],
	["#000000", "#f9f9f9"],
	["#010101", "#f7f7f7"],
	["#222222", "#b8b8b8"],
	["#030303", "#bf60d6"],
	["#0202f8", "#b8bcf5"],
	["#2c3c5f", "#4cc1ec"],
	["#efd808", "#363753"],
	["#ffecf0", "#ff4606"],
	["#315483", "#d7e7ee"],
	["#f0bd52", "#353534"],
	["#b9b9b9", "#322e2b"],
	["#f4f4f4", "#56636a"],
	["#ffffff", "#0b3046"],
	["#313131", "#b7b7b7"],
	["#010101", "#fdfdfd"],
	["#fefdff", "#9b64ea"],
	["#fdfdfd", "#050507"],
	["#e2dcff", "#4e4a53"],
	["#fefefe", "#0d0d0d"],
	["#fefefe", "#374189"],
	["#ff2510", "#fffefd"],
	["#f3f3f3", "#272262"],
	["#0d0d0d", "#52decd"],
	["#0e2338", "#fc3b57"],
	["#f5f5f5", "#2d7d27"],
	["#232323", "#f4f4ee"],
	["#545322", "#faaf40"],
	["#d13a3a", "#fefdfd"],
	["#e9be71", "#2b2b44"],
	["#f5f4f5", "#34133d"],
	["#fcfcfc", "#3d4744"],
	["#ffffff", "#b55255"],
	["#0b0c0d", "#fa694d"],
	["#000000", "#f4362f"],
	["#fbfbff", "#344a6e"],
	["#f9fafa", "#49879c"],
	["#160f28", "#f8d443"],
	["#ffffff", "#ff0404"],
	["#fefefe", "#4e5c6b"],
	["#ededed", "#3d3d3d"],
	["#2a315f", "#589bb1"],
	["#013634", "#ffe5c5"],
	["#ebbcad", "#1b4163"],
	["#f7b959", "#70402c"],
	["#ededed", "#028acd"],
	["#f1ebe3", "#7f0f10"],
	["#fefefe", "#1566c2"],
	["#263746", "#cb6a35"],
	["#ea5058", "#fbeeee"],
	["#dbd7d2", "#57522a"],
	["#2a3038", "#eeb629"],
	["#fdfae9", "#9a6434"],
	["#fdfdfd", "#a8783b"],
	["#fefefe", "#090909"],
	["#fefefe", "#393939"],
	["#fefefe", "#653e1a"],
	["#292732", "#a07ccb"],
	["#121224", "#b237be"],
	["#510b2f", "#dc5d96"],
	["#dd3e7b", "#e9e5e7"],
	["#fafafa", "#282526"],
	["#e54b85", "#fbf0f5"],
	["#fefefe", "#ff3166"],
	["#301210", "#927c47"],
	["#dcf0f9", "#125e69"],
	["#fef0ef", "#1f1f1f"],
	["#3a3a3c", "#f2f2f3"],
	["#f7f8fa", "#4f5357"],
	["#ffffff", "#5094ef"],
	["#ffffff", "#459d86"],
	["#fffffe", "#f86913"],
	["#1a01ff", "#efd6e3"],
	["#fffdf7", "#2f2f2b"],
	["#ef7674", "#513945"],
	["#ff5a34", "#fffaf8"],
	["#edf5f7", "#345c9f"],
	["#dbdaea", "#251e6a"],
	["#ffffff", "#e41941"],
	["#ff6448", "#ffffff"],
	["#fefeff", "#563e2b"],
	["#f7f6f0", "#474644"],
	["#f7bcca", "#0a3649"],
	["#0724ef", "#f56f96"],
	["#b1ece1", "#2f535e"],
	["#ffffff", "#147659"],
	["#ede9de", "#484040"],
	["#fefefe", "#655a5c"],
	["#7c2615", "#c6a692"],
	["#fdfdfd", "#7a7a7a"],
	["#194a83", "#dee5ed"],
	["#fdfdfd", "#242626"],
	["#fefefe", "#252525"],
	["#faf0e1", "#253d23"],
	["#fefefd", "#020202"],
	["#ffffff", "#098bcf"],
	["#fbfcff", "#3484ff"],
	["#f7f9f8", "#29285f"],
	["#fffdfd", "#ea5a45"],
	["#16273a", "#c6b8aa"],
	["#ffffff", "#0b5fb7"],
	["#fcfdfd", "#596c73"],
	["#231f20", "#dbad6b"],
	["#00a89c", "#5c535f"],
	["#fc6761", "#0c0506"],
	["#282829", "#e44428"],
	["#d957ad", "#fafaf7"],
	["#060505", "#b9b7b7"],
	["#fef2dd", "#f26c5b"],
	["#fefffe", "#4faf34"],
	["#ffffff", "#060606"],
	["#fefefe", "#262223"],
	["#080d10", "#faa102"],
	["#f3f3f3", "#0c4c9b"],
	["#e71c26", "#fdefef"],
	["#ffffff", "#103d40"],
	["#fffefe", "#ed1c24"],
	["#4167d9", "#f5f7fd"],
	["#000000", "#f7f7f7"],
	["#ffffff", "#020202"],
	["#ecedf5", "#6a7aba"],
	["#020100", "#c5a121"],
	["#2e2f31", "#b4924f"],
	["#000000", "#efe275"],
	["#ffdc00", "#2c0ef1"],
	["#ce3e26", "#251f20"],
	["#222222", "#f3f3f3"],
	["#f1f1f1", "#272727"],
	["#1f1d11", "#c04328"],
	["#ffffff", "#0c81ff"],
	["#f8f8f9", "#4779ec"],
	["#fffefe", "#e62c34"],
	["#3c3c3b", "#5da2b4"],
	["#68097f", "#fc9744"],
	["#fffefe", "#fb430c"],
	["#fefefe", "#232323"],
	["#fcfbe9", "#1f66f3"],
	["#020303", "#03e2a6"],
	["#ffffff", "#a04ff3"],
	["#000000", "#f9f9f9"],
	["#fcf7f1", "#4c4c4b"],
	["#ffffff", "#16567b"],
	["#ffdf3f", "#ff4d4c"],
	["#f4ede0", "#de3c2b"],
	["#0a3d51", "#13a8aa"],
	["#cb5245", "#1c1414"],
	["#ffffff", "#d2251d"],
	["#e74f8a", "#fcebf2"],
	["#162932", "#b19867"],
	["#cacab6", "#6b4627"],
	["#0b1c25", "#d2a267"],
	["#3973e7", "#fafbfe"],
	["#fffefe", "#ee3a27"],
	["#fbfcfc", "#2869ac"],
	["#fefefd", "#f1634d"],
	["#f3f2f5", "#2d196d"],
	["#181717", "#f90186"],
	["#e73c3e", "#fef5f5"],
	["#151416", "#f3f2f2"],
	["#010000", "#ec0909"],
	["#91e8d5", "#4d6e68"],
	["#030303", "#e9643a"],
	["#fffeff", "#79738e"],
	["#ffffff", "#060606"],
	["#2e2ef0", "#f1f1f6"],
	["#ffffff", "#1f2d32"],
	["#ffffff", "#f96073"],
	["#fee900", "#342e18"],
	["#ffffff", "#7f5137"],
	["#e0e0e0", "#1c1c1c"],
	["#33454e", "#e4b077"],
	["#fefefe", "#e35645"],
	["#000000", "#f9f9f9"],
	["#f8ebbf", "#e74239"],
	["#ffffff", "#c62211"],
	["#eaeae9", "#951f27"],
	["#9210a9", "#e6d1e9"],
	["#f5c873", "#643518"],
	["#343434", "#e9b2b2"],
	["#434242", "#f9f9f9"],
	["#ffffff", "#e74c88"],
	["#131515", "#cef0e4"],
	["#ffffff", "#2b81c4"],
	["#ffffff", "#3c3c3c"],
	["#f15844", "#fef7f5"],
	["#ffffff", "#856a28"],
	["#f1f1f1", "#58595d"],
	["#3d3c3c", "#0fb4a8"],
	["#ffffff", "#2e7e9f"],
	["#e7e8da", "#ee4339"],
	["#ffffff", "#000000"],
	["#fefefe", "#080808"],
	["#c7f5fc", "#177794"],
	["#d2ae72", "#221c17"],
	["#023b45", "#d8c9ba"],
	["#ffc5c5", "#3f3d3d"],
	["#23201b", "#d5d6d7"],
	["#fefeff", "#6255e3"],
	["#fefffe", "#22485e"],
	["#2e2d2c", "#c3997d"],
	["#2f353f", "#84a239"],
	["#000000", "#f4f4f4"],
	["#231f20", "#d6bb9a"],
	["#ffffff", "#030303"],
	["#8b2217", "#f1c35d"],
	["#56bf9f", "#213262"],
	["#1a1a1a", "#e7e7e7"],
	["#fefefe", "#020202"],
	["#2e2e36", "#e0b077"],
	["#f9f9f8", "#2d3237"],
	["#ffffff", "#fa330f"],
	["#202020", "#cfced2"],
	["#010100", "#b27229"],
	["#212155", "#fb0102"],
	["#fa2b23", "#0c133a"],
	["#000000", "#f9f9f9"],
	["#1c1c1a", "#ead087"],
	["#fefefe", "#bf2b2b"],
	["#fdf4e6", "#9e235e"],
	["#000000", "#fafafa"],
	["#552f62", "#d4a575"],
	["#ffffff", "#242021"],
	["#ffffff", "#0e2471"],
	["#19203a", "#c8d0ed"],
	["#3e2d33", "#d4af92"],
	["#f58a1f", "#561844"],
	["#ffffff", "#fb3534"],
	["#26231e", "#a5a48f"],
	["#feffff", "#1176bc"],
	["#1b1b1b", "#cea574"],
	["#1f1c1d", "#e44d1b"],
	["#8ed4d4", "#4a6364"],
	["#ffffff", "#3c3c3e"],
	["#fd4b62", "#fffcfd"],
	["#ea1e25", "#fadac3"],
	["#2e3337", "#ef4a43"],
	["#f4f2f0", "#515050"],
	["#fffefe", "#ff405a"],
	["#ffffff", "#e27749"],
	["#fecf0d", "#3a2529"],
	["#444a4f", "#d17d3d"],
	["#020202", "#f4f4f4"],
	["#2f2f2f", "#42dcd7"],
	["#02375c", "#caab73"],
	["#9013fe", "#f2be01"],
	["#c4240a", "#f7e4e1"],
	["#191e29", "#edefdc"],
	["#7adbd4", "#0c5359"],
	["#ffffff", "#0a3afc"],
	["#040723", "#f7bd8d"],
	["#226ae8", "#f6fbfe"],
	["#140f10", "#f3f3f3"],
	["#dbf1fc", "#383538"],
	["#343334", "#d7d8d9"],
	["#000000", "#faf9fa"],
	["#f6f6f6", "#363538"],
	["#f9d046", "#841d0c"],
	["#ffffff", "#b72239"],
	["#fefaee", "#ef5551"],
	["#0101ff", "#f6f6f8"],
	["#ffffff", "#9e22d9"],
	["#010101", "#f9f9f9"],
	["#e4e4e5", "#2c576f"],
	["#ffffff", "#6778e5"]
];
