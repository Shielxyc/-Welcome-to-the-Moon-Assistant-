/**
 * 欢迎来到月球 · 可配置资源
 *
 * 增加关卡：在 levels 中复制一个关卡配置并补上对应 M{N}_*.png 图片。
 * 增加任务：在对应关卡的 A/B/C 数组中追加对象即可，主程序会自动渲染。
 * 路径均为相对 index.html 的路径；直接用浏览器打开文件时不要写开头的 "/"。
 */
(function () {
  "use strict";

  const missionImage = (level, code) => `mission image/M${level}_${code}.png`;

  window.WELCOME_MOON_DATA = {
    assets: {
      accomplished: "mission image/ACCOMPLISHED.png",
      actionImageDir: "action image"
    },

    // A/B/C 三组的展示信息与强调色。
    groups: {
      A: { name: "A 组", en: "GROUP A", accent: "#ff9b88", rgb: "255, 155, 136" },
      B: { name: "B 组", en: "GROUP B", accent: "#b8a8ff", rgb: "184, 168, 255" },
      C: { name: "C 组", en: "GROUP C", accent: "#f2cf7a", rgb: "242, 207, 122" }
    },

    // 当前规则：每张任务卡同一时间最多计一次高分；再次点击同一张卡会撤销并归零。
    // 高分/低分字段与文案也由这里统一配置。
    scoring: {
      singleCompletion: true,
      requireOnePerGroup: true,
      claimScoreField: "highScore",
      highScoreField: "highScore",
      lowScoreField: "lowScore",
      highLabel: "高分",
      lowLabel: "低分"
    },

    // 图标路径统一为 action image/{图标名}.png。
    // emoji 是图片加载失败时的降级兜底。
    actions: {
      robot: {
        image: "action image/robot.png",
        emoji: "🤖",
        label: "机器人",
        en: "ROBOT",
        color: "#b8c9dc",
        rgb: "184, 201, 220"
      },
      energy: {
        image: "action image/energy.png",
        emoji: "⚡",
        label: "能源",
        en: "ENERGY",
        color: "#efd061",
        rgb: "239, 208, 97"
      },
      plant: {
        image: "action image/plant.png",
        emoji: "🌱",
        label: "植物",
        en: "PLANT",
        color: "#86d78a",
        rgb: "134, 215, 138"
      },
      water: {
        image: "action image/water.png",
        emoji: "💧",
        label: "水",
        en: "WATER",
        color: "#69cdf1",
        rgb: "105, 205, 241"
      },
      astronaut: {
        image: "action image/astronaut.png",
        emoji: "👨‍🚀",
        label: "宇航员",
        en: "ASTRONAUT",
        color: "#f3a962",
        rgb: "243, 169, 98"
      },
      planning: {
        image: "action image/planning.png",
        emoji: "📝",
        label: "计划",
        en: "PLANNING",
        color: "#ef8598",
        rgb: "239, 133, 152"
      }
    },

    levels: {

      level1: {
        id: "level1",
        name: "关卡 1：发射",
        code: "LEVEL 01",
        enabled: true,
        groups: {
          A: [
            { id: "A1", image: missionImage(1, "A1"), highScore: 3, lowScore: 2, description: "填写了宇航员层和水层（共3行）的全部格子。" },
            { id: "A2", image: missionImage(1, "A2"), highScore: 4, lowScore: 2, description: "填写了机器人层和计划层（共3行）的全部格子。" }
          ],
          B: [
            { id: "B1", image: missionImage(1, "B1"), highScore: 3, lowScore: 2, description: "填写了能量层的全部格子。" },
            { id: "B2", image: missionImage(1, "B2"), highScore: 3, lowScore: 2, description: "填写了植物层和万能行动层的全部格子。" }
          ],
          C: [
            { id: "C1", image: missionImage(1, "C1"), highScore: 2, lowScore: 1, description: "通过建造效果填写了10个X。" },
            { id: "C2", image: missionImage(1, "C2"), highScore: 3, lowScore: 2, description: "拥有5个系统故障格圈起来且尚未划掉。" }
          ]
        }
      },

      level2: {
        id: "level2",
        name: "关卡 2：旅程",
        code: "LEVEL 02",
        enabled: true,
        groups: {
          A: [
            { id: "A1", image: missionImage(2, "A1"), highScore: 9, lowScore: 5, description: "将3座空间站的倍率乘数圈起来（通过机器人行动打通路径）" },
            { id: "A2", image: missionImage(2, "A2"), highScore: 10, lowScore: 5, description: "将2座空间站的全部植物圈起来（不要求打通路径）" }
          ],
          B: [
            { id: "B1", image: missionImage(2, "B1"), highScore: 11, lowScore: 6, description: "通过能量行动，在你的航线上分割出2个6格数列并完成。" },
            { id: "B2", image: missionImage(2, "B2"), highScore: 12, lowScore: 6, description: "通过能量行动，在你的航线上分割出3个数列并完成：1个6格，1个4格，1个2格。" }
          ],
          C: [
            { id: "C1", image: missionImage(2, "C1"), highScore: 9, lowScore: 5, description: "圈起来6个水箱。" },
            { id: "C2", image: missionImage(2, "C2"), highScore: 11, lowScore: 6, description: "圈起来4个连续的水箱。" }
          ]
        }
      },

      level3: {
        id: "level3",
        name: "关卡 3：殖民",
        code: "LEVEL 03",
        enabled: true,
        groups: {
          A: [
            { id: "A1", image: missionImage(3, "A1"), highScore: 12, lowScore: 6, description: "填写了3条纵向列的全部建筑。" },
            { id: "A2", image: missionImage(3, "A2"), highScore: 12, lowScore: 5, description: "填写了3条横向行的全部建筑。" }
          ],
          B: [
            { id: "B1", image: missionImage(3, "B1"), highScore: 9, lowScore: 4, description: "通过机器人行动，将右上角的天文台连接到你的管道网络中。" },
            { id: "B2", image: missionImage(3, "B2"), highScore: 9, lowScore: 4, description: "将任意2个区间内的全部抛物面天线圈起来。" }
          ],
          C: [
            { id: "C1", image: missionImage(3, "C1"), highScore: 8, lowScore: 4, description: "圈起来的温室内植物数列达到10个。" },
            { id: "C2", image: missionImage(3, "C2"), highScore: 9, lowScore: 5, description: "将任意2个区间内的全部水箱圈起来。" }
          ]
        }
      },

      level4: {
        id: "level4",
        name: "关卡 4：矿脉",
        code: "LEVEL 04",
        enabled: true,
        groups: {
          A: [
            { id: "A1", image: missionImage(4, "A1"), highScore: 8, lowScore: 4, description: "在矿脉中，完成并抽取了5个竖列。" },
            { id: "A2", image: missionImage(4, "A2"), highScore: 9, lowScore: 4, description: "在矿脉中，完成并抽取了4个连续的竖列。" }
          ],
          B: [
            { id: "B1", image: missionImage(4, "B1"), highScore: 11, lowScore: 6, description: "激活了你的5家次要工厂。" },
            { id: "B2", image: missionImage(4, "B2"), highScore: 10, lowScore: 4, description: "升级或激活了总计6家工厂，无论主要还是次要。" }
          ],
          C: [
            { id: "C1", image: missionImage(4, "C1"), highScore: 8, lowScore: 3, description: "在矿脉中，将8个植物圈起来，无论是否完成了抽取。" },
            { id: "C2", image: missionImage(4, "C2"), highScore: 10, lowScore: 4, description: "在矿脉中，将5个水圈起来，无论是否完成了抽取。" }
          ]
        }
      },

      level5: {
        id: "level5",
        name: "关卡 5：穹顶",
        code: "LEVEL 05",
        enabled: true,
        groups: {
          A: [
            { id: "A1", image: missionImage(5, "A1"), highScore: 0, lowScore: 0, highDisplay: "★",lowDisplay: "✴",description: "填写了一座摩天楼的全部楼层。" },
            { id: "A2", image: missionImage(5, "A2"), highScore: 0, lowScore: 0, highDisplay: "★",lowDisplay: "✴",description: "填写了2座摩天楼的顶端楼层。" }
          ],
          B: [
            { id: "B1", image: missionImage(5, "B1"), highScore: 0, lowScore: 0, highDisplay: "★",lowDisplay: "✴",description: "在水和植物的研究塔楼，有3个楼层都至少圈起2个图标。" },
            { id: "B2", image: missionImage(5, "B2"), highScore: 0, lowScore: 0, highDisplay: "★",lowDisplay: "✴",description: "在水和植物的研究塔楼，有2个楼层都至少圈起3个图标。" }
          ],
          C: [
            { id: "C1", image: missionImage(5, "C1"), highScore: 0, lowScore: 0, highDisplay: "★",lowDisplay: "✴",description: "建造完穹顶的全部节段。" },
            { id: "C2", image: missionImage(5, "C2"), highScore: 0, lowScore: 0, highDisplay: "★",lowDisplay: "✴",description: "通过计划行动，填写了4个X。" }
          ]
        }
      },

      level6: {
        id: "level6",
        name: "关卡 6：病毒",
        code: "LEVEL 06",
        enabled: true,
        groups: {
          A: [
            { id: "A1", image: missionImage(6, "A1"), highScore: 8, lowScore: 3, description: "疏散了2个房间，这2个房间的居住格可以部分甚至全部被感染。" },
            { id: "A2", image: missionImage(6, "A2"), highScore: 8, lowScore: 3, description: "疏散了同一层的全部房间，这些房间的居住格可以部分甚至全部被感染。" }
          ],
          B: [
            { id: "B1", image: missionImage(6, "B1"), highScore: 11, lowScore: 4, description: "隔离了3个房间，即关闭了它们所连接的全部走廊。" },
            { id: "B2", image: missionImage(6, "B2"), highScore: 12, lowScore: 5, description: "隔离了绿病毒和蓝病毒的原始房间，即关闭了它们所连接的全部走廊。" }
          ],
          C: [
            { id: "C1", image: missionImage(6, "C1"), highScore: 10, lowScore: 4, description: "在2个楼层都圈起来了全部的能量图标。" },
            { id: "C2", image: missionImage(6, "C2"), highScore: 10, lowScore: 4, description: "在2个楼层都圈起来了全部的植物和水图标。" }
          ]
        }
      },

      level7: {
        id: "level7",
        name: "关卡 7：逃离",
        code: "LEVEL 07",
        enabled: true,
        groups: {
          A: [
            { id: "A1", image: missionImage(7, "A1"), highScore: 10, lowScore: 5, description: "在3个温室中都填写了数字，并且都圈起来了3个植物。" },
            { id: "A2", image: missionImage(7, "A2"), highScore: 7, lowScore: 3, description: "在最顶端星舰的温室中填写了数字，并且圈起来了3个植物。" }
          ],
          B: [
            { id: "B1", image: missionImage(7, "B1"), highScore: 9, lowScore: 4, description: "在7个模块中写满数字。" },
            { id: "B2", image: missionImage(7, "B2"), highScore: 10, lowScore: 5, description: "在3艘星舰中写满数字。" }
          ],
          C: [
            { id: "C1", image: missionImage(7, "C1"), highScore: 10, lowScore: 5, description: "在3艘星舰末端的反应堆全部圈起来。" },
            { id: "C2", image: missionImage(7, "C2"), highScore: 10, lowScore: 5, description: "在3艘星舰上的水箱全部圈起来。" }
          ]
        }
      },

      level8: {
        id: "level7",
        name: "关卡 8：战斗",
        code: "LEVEL 08",
        enabled: true,
        groups: {
          A: [
            { id: "A1", image: missionImage(8, "A1"), highScore: 12, lowScore: 5, description: "占领同一张冒险版图的4个星球。" },
            { id: "A2", image: missionImage(8, "A2"), highScore: 9, lowScore: 4, description: "占领同一张冒险版图上每种类型的星球各1个。" }
          ],
          B: [
            { id: "B1", image: missionImage(8, "B1"), highScore: 9, lowScore: 5, description: "通过机器人行动，在同一张冒险版图的7个小行星上绘制你的专属图案。" },
            { id: "B2", image: missionImage(8, "B2"), highScore: 11, lowScore: 6, description: "在同一张冒险版图上，将每种类型的星球价值各提升2次。" }
          ],
          C: [
            { id: "C1", image: missionImage(8, "C1"), highScore: 10, lowScore: 4, description: "在同一张冒险版图上，划掉6个植物计分格和4个水计分格。" },
            { id: "C2", image: missionImage(8, "C2"), highScore: 10, lowScore: 6, description: "通过计划行动，在同一张冒险版图的4个不同卫星上绘制你的专属图案。" }
          ]
        }
      }
    }
  };
})();
