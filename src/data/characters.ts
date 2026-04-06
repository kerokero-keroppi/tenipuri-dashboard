export type Character = {
  name: string;
  grade: string;
  birthday: string;
  ageCurrent: number;
  height: number | null;
  weight: number | null;
  bloodType: string;
  dominantArm: string;
  family: string;
  school: string;
};

export const characters: Character[] = [
  // 青春学園中等部
  { name: '越前 リョーマ', grade: '1年', birthday: '12/24', ageCurrent: 12, height: 151, weight: 50, bloodType: 'O', dominantArm: '左', family: '父・母・従姉・猫', school: '青春学園' },
  { name: '手塚 国光', grade: '3年', birthday: '10/7', ageCurrent: 14, height: 179, weight: 58, bloodType: 'O', dominantArm: '左', family: '祖父・父・母', school: '青春学園' },
  { name: '大石 秀一郎', grade: '3年', birthday: '4/30', ageCurrent: 15, height: 175, weight: 55, bloodType: 'O', dominantArm: '右', family: '父・母・妹', school: '青春学園' },
  { name: '不二 周助', grade: '3年', birthday: '2/29', ageCurrent: 14, height: 167, weight: 53, bloodType: 'B', dominantArm: '右', family: '父・母・姉・弟', school: '青春学園' },
  { name: '菊丸 英二', grade: '3年', birthday: '11/28', ageCurrent: 14, height: 171, weight: 52, bloodType: 'A', dominantArm: '右', family: '祖父・祖母・父・母・兄・兄・姉・姉', school: '青春学園' },
  { name: '乾 貞治', grade: '3年', birthday: '6/3', ageCurrent: 15, height: 184, weight: 62, bloodType: 'AB', dominantArm: '右', family: '父・母', school: '青春学園' },
  { name: '河村 隆', grade: '3年', birthday: '11/18', ageCurrent: 14, height: 180, weight: 65, bloodType: 'A', dominantArm: '右', family: '父・母・妹', school: '青春学園' },
  { name: '桃城 武', grade: '2年', birthday: '7/23', ageCurrent: 14, height: 170, weight: 58, bloodType: 'O', dominantArm: '右', family: '父・母・弟・妹', school: '青春学園' },
  { name: '海堂 薫', grade: '2年', birthday: '5/11', ageCurrent: 14, height: 173, weight: 57, bloodType: 'B', dominantArm: '右', family: '父・母・弟', school: '青春学園' },
  { name: '荒井 将史', grade: '2年', birthday: '3/29', ageCurrent: 13, height: 169, weight: null, bloodType: 'B', dominantArm: '右', family: '', school: '青春学園' },
  { name: '池田 雅也', grade: '2年', birthday: '7/18', ageCurrent: 14, height: 162, weight: null, bloodType: 'A', dominantArm: '右', family: '', school: '青春学園' },
  { name: '堀尾 聡史', grade: '1年', birthday: '9/25', ageCurrent: 12, height: 151, weight: null, bloodType: 'O', dominantArm: '右', family: '（兄）', school: '青春学園' },
  { name: '加藤 勝郎', grade: '1年', birthday: '3/2', ageCurrent: 12, height: 148, weight: null, bloodType: 'A', dominantArm: '右', family: '（父）', school: '青春学園' },
  { name: '水野 カツオ', grade: '1年', birthday: '4/7', ageCurrent: 13, height: 158, weight: null, bloodType: 'O', dominantArm: '右', family: '', school: '青春学園' },

  // 氷帝学園中等部
  { name: '跡部 景吾', grade: '3年', birthday: '10/4', ageCurrent: 14, height: 175, weight: 62, bloodType: 'A', dominantArm: '右', family: '祖父・祖母・父・母', school: '氷帝学園' },
  { name: '忍足 侑士', grade: '3年', birthday: '10/15', ageCurrent: 14, height: 178, weight: 64, bloodType: 'A', dominantArm: '右', family: '父・母・姉', school: '氷帝学園' },
  { name: '向日 岳人', grade: '3年', birthday: '9/12', ageCurrent: 14, height: 158, weight: 48, bloodType: 'B', dominantArm: '左', family: '父・母・姉・弟', school: '氷帝学園' },
  { name: '宍戸 亮', grade: '3年', birthday: '9/29', ageCurrent: 14, height: 172, weight: 60, bloodType: 'B', dominantArm: '右', family: '祖母・父・母・兄・犬', school: '氷帝学園' },
  { name: '芥川 慈郎', grade: '3年', birthday: '5/5', ageCurrent: 15, height: 160, weight: 49, bloodType: 'AB', dominantArm: '右', family: '父・母・兄・妹', school: '氷帝学園' },
  { name: '樺地 崇弘', grade: '2年', birthday: '1/3', ageCurrent: 13, height: 190, weight: 85, bloodType: 'O', dominantArm: '右', family: '祖母・父・母・妹', school: '氷帝学園' },
  { name: '鳳 長太郎', grade: '2年', birthday: '2/14', ageCurrent: 13, height: 185, weight: 72, bloodType: 'O', dominantArm: '右', family: '祖母・父・母・姉・猫', school: '氷帝学園' },
  { name: '日吉 若', grade: '2年', birthday: '12/5', ageCurrent: 13, height: 172, weight: 60, bloodType: 'AB', dominantArm: '右', family: '祖父・祖母・父・母・兄', school: '氷帝学園' },
  { name: '滝 萩之介', grade: '3年', birthday: '10/29', ageCurrent: 14, height: 167, weight: null, bloodType: 'A', dominantArm: '右', family: '', school: '氷帝学園' },

  // 立海大附属中学校
  { name: '幸村 精市', grade: '3年', birthday: '3/5', ageCurrent: 14, height: 175, weight: 61, bloodType: 'A', dominantArm: '右', family: '父・母・祖母・妹', school: '立海' },
  { name: '真田 弦一郎', grade: '3年', birthday: '5/21', ageCurrent: 15, height: 180, weight: 68, bloodType: 'A', dominantArm: '右', family: '父・母・兄', school: '立海' },
  { name: '柳 蓮二', grade: '3年', birthday: '6/4', ageCurrent: 15, height: 181, weight: 67, bloodType: 'A', dominantArm: '右', family: '祖父・祖母・父・母・姉', school: '立海' },
  { name: '柳生 比呂士', grade: '3年', birthday: '10/19', ageCurrent: 14, height: 177, weight: 64, bloodType: 'A', dominantArm: '右', family: '祖父・父・母・妹', school: '立海' },
  { name: '仁王 雅治', grade: '3年', birthday: '12/4', ageCurrent: 14, height: 175, weight: 62, bloodType: 'AB', dominantArm: '左', family: '父・母・姉・弟', school: '立海' },
  { name: '丸井 ブン太', grade: '3年', birthday: '4/20', ageCurrent: 15, height: 164, weight: 62, bloodType: 'B', dominantArm: '右', family: '祖母・父・母・弟・弟', school: '立海' },
  { name: 'ジャッカル 桑原', grade: '3年', birthday: '11/3', ageCurrent: 14, height: 178, weight: 69, bloodType: 'O', dominantArm: '右', family: '父・母', school: '立海' },
  { name: '切原 赤也', grade: '2年', birthday: '9/25', ageCurrent: 13, height: 168, weight: 61, bloodType: 'O', dominantArm: '右', family: '父・母・姉', school: '立海' },

  // 六角中学校
  { name: '葵 剣太郎', grade: '1年', birthday: '12/20', ageCurrent: 12, height: 165, weight: 45, bloodType: 'O', dominantArm: '右', family: '祖父・祖母・父・母・兄・兄', school: '六角' },
  { name: '佐伯 虎次郎', grade: '3年', birthday: '10/1', ageCurrent: 14, height: 174, weight: 61, bloodType: 'O', dominantArm: '左', family: '父・母・姉', school: '六角' },
  { name: '黒羽 春風', grade: '3年', birthday: '9/29', ageCurrent: 14, height: 184, weight: 73, bloodType: 'A', dominantArm: '右', family: '父・母・弟・犬・犬', school: '六角' },
  { name: '天根 ヒカル', grade: '2年', birthday: '11/22', ageCurrent: 13, height: 180, weight: 69, bloodType: 'A', dominantArm: '右', family: '父・母・姉・猫', school: '六角' },
  { name: '樹 希彦', grade: '3年', birthday: '8/31', ageCurrent: 14, height: 174, weight: 62, bloodType: 'AB', dominantArm: '右', family: '父・母・兄・姉・妹', school: '六角' },
  { name: '木更津 亮', grade: '3年', birthday: '11/20', ageCurrent: 14, height: 168, weight: 51, bloodType: 'O', dominantArm: '右', family: '父・母・弟', school: '六角' },
  { name: '首藤 聡', grade: '3年', birthday: '4/15', ageCurrent: 15, height: 176, weight: 65, bloodType: 'B', dominantArm: '右', family: '父・母・妹・弟', school: '六角' },

  // 比嘉中学校
  { name: '木手 永四郎', grade: '3年', birthday: '11/9', ageCurrent: 14, height: 179, weight: 72, bloodType: 'A', dominantArm: '左', family: '父・母・妹・インコ', school: '比嘉' },
  { name: '田仁志 慧', grade: '3年', birthday: '10/23', ageCurrent: 14, height: 193, weight: 106, bloodType: 'A', dominantArm: '右', family: '父・母・兄等多数', school: '比嘉' },
  { name: '平古場 凛', grade: '3年', birthday: '3/3', ageCurrent: 14, height: 172, weight: 54, bloodType: 'AB', dominantArm: '右', family: '祖母・父・母・姉・熱帯魚', school: '比嘉' },
  { name: '知念 寛', grade: '3年', birthday: '6/29', ageCurrent: 15, height: 193, weight: 60, bloodType: 'A', dominantArm: '右', family: '祖父・母・妹・妹・弟', school: '比嘉' },
  { name: '甲斐 裕次郎', grade: '3年', birthday: '8/27', ageCurrent: 14, height: 175, weight: 63, bloodType: 'B', dominantArm: '左', family: '祖父・祖母・父・母・兄・妹', school: '比嘉' },
  { name: '不知火 知弥', grade: '3年', birthday: '1/15', ageCurrent: 14, height: 179, weight: 75, bloodType: 'A', dominantArm: '右', family: '祖父・祖母・父・母・兄・弟', school: '比嘉' },
  { name: '新垣 浩一', grade: '2年', birthday: '5/21', ageCurrent: 14, height: 169, weight: 54, bloodType: 'O', dominantArm: '左', family: '祖父・祖母・父・母・ウサギ', school: '比嘉' },

  // 山吹中学校
  { name: '千石 清純', grade: '3年', birthday: '11/25', ageCurrent: 14, height: 170, weight: 59, bloodType: 'O', dominantArm: '右', family: '父・母・姉', school: '山吹' },
  { name: '南 健太郎', grade: '3年', birthday: '7/3', ageCurrent: 15, height: 178, weight: 66, bloodType: 'A', dominantArm: '右', family: '父・母・弟', school: '山吹' },
  { name: '東方 雅美', grade: '3年', birthday: '9/10', ageCurrent: 14, height: 187, weight: 76, bloodType: 'A', dominantArm: '右', family: '父・母・妹', school: '山吹' },
  { name: '壇 太一', grade: '1年', birthday: '1/2', ageCurrent: 12, height: 147, weight: 40, bloodType: 'AB', dominantArm: '左', family: '父・母・妹・犬', school: '山吹' },
  { name: '室町 十次', grade: '2年', birthday: '10/31', ageCurrent: 13, height: 165, weight: 55, bloodType: 'AB', dominantArm: '右', family: '父・母・姉', school: '山吹' },
  { name: '喜多 一馬', grade: '2年', birthday: '7/26', ageCurrent: 14, height: 170, weight: null, bloodType: 'O', dominantArm: '右', family: '', school: '山吹' },
  { name: '新渡米 稲吉', grade: '3年', birthday: '8/8', ageCurrent: 15, height: 168, weight: null, bloodType: 'A', dominantArm: '右', family: '', school: '山吹' },
  { name: '亜久津 仁', grade: '3年', birthday: '4/2', ageCurrent: 15, height: 183, weight: 71, bloodType: 'B', dominantArm: '右', family: '母', school: '山吹' },

  // 不動峰中学校
  { name: '橘 桔平', grade: '3年', birthday: '8/15', ageCurrent: 15, height: 179, weight: 67, bloodType: 'O', dominantArm: '右', family: '曽祖母・祖母・父・母・妹', school: '不動峰' },
  { name: '伊武 深司', grade: '2年', birthday: '11/3', ageCurrent: 13, height: 165, weight: 55, bloodType: 'AB', dominantArm: '右', family: '父・母・妹・妹', school: '不動峰' },
  { name: '神尾 アキラ', grade: '2年', birthday: '8/26', ageCurrent: 13, height: 165, weight: 52, bloodType: 'O', dominantArm: '右', family: '父・母・姉', school: '不動峰' },
  { name: '石田 鉄', grade: '2年', birthday: '11/30', ageCurrent: 13, height: 188, weight: 80, bloodType: 'O', dominantArm: '右', family: '父・母・妹', school: '不動峰' },
  { name: '桜井 雅也', grade: '2年', birthday: '7/1', ageCurrent: 14, height: 164, weight: null, bloodType: 'O', dominantArm: '右', family: '', school: '不動峰' },
  { name: '内村 京介', grade: '2年', birthday: '10/28', ageCurrent: 13, height: 159, weight: null, bloodType: 'B', dominantArm: '右', family: '', school: '不動峰' },
  { name: '森 辰徳', grade: '2年', birthday: '4/18', ageCurrent: 14, height: 164, weight: null, bloodType: 'A', dominantArm: '右', family: '', school: '不動峰' },

  // 四天宝寺中学校
  { name: '白石 蔵ノ介', grade: '3年', birthday: '4/14', ageCurrent: 15, height: 178, weight: 66, bloodType: 'B', dominantArm: '左', family: '父・母・姉・妹・猫', school: '四天宝寺' },
  { name: '千歳 千里', grade: '3年', birthday: '12/31', ageCurrent: 14, height: 194, weight: 81, bloodType: 'A', dominantArm: '左', family: '父・母・妹', school: '四天宝寺' },
  { name: '金色 小春', grade: '3年', birthday: '11/9', ageCurrent: 14, height: 170, weight: 60, bloodType: 'B', dominantArm: '右', family: '父・母・姉', school: '四天宝寺' },
  { name: '一氏 ユウジ', grade: '3年', birthday: '9/11', ageCurrent: 14, height: 168, weight: 59, bloodType: 'B', dominantArm: '左', family: '父・母・兄', school: '四天宝寺' },
  { name: '忍足 謙也', grade: '3年', birthday: '3/17', ageCurrent: 14, height: 177, weight: 63, bloodType: 'B', dominantArm: '右', family: '父・母・弟・イグアナ', school: '四天宝寺' },
  { name: '石田 銀', grade: '3年', birthday: '1/25', ageCurrent: 14, height: 189, weight: 82, bloodType: 'O', dominantArm: '左', family: '父・母・弟・妹', school: '四天宝寺' },
  { name: '財前 光', grade: '2年', birthday: '7/20', ageCurrent: 14, height: 167, weight: 57, bloodType: 'A', dominantArm: '左', family: '父・母・兄・義姉・甥', school: '四天宝寺' },
  { name: '小石川 健二郎', grade: '3年', birthday: '2/3', ageCurrent: 14, height: null, weight: null, bloodType: 'O', dominantArm: '右', family: '', school: '四天宝寺' },
  { name: '遠山 金太郎', grade: '1年', birthday: '4/1', ageCurrent: 12, height: 151, weight: 52, bloodType: 'B', dominantArm: '右', family: '父・母・犬', school: '四天宝寺' },

  // 聖ルドルフ学院中学校
  { name: '赤澤 吉朗', grade: '3年', birthday: '8/3', ageCurrent: 15, height: 178, weight: null, bloodType: 'O', dominantArm: '右', family: '祖母・父・母・兄', school: '聖ルドルフ' },
  { name: '観月 はじめ', grade: '3年', birthday: '5/27', ageCurrent: 15, height: 166, weight: 52, bloodType: 'B', dominantArm: '右', family: '祖父・祖母・父・母・姉・姉', school: '聖ルドルフ' },
  { name: '不二 裕太', grade: '2年', birthday: '2/18', ageCurrent: 13, height: 170, weight: 56, bloodType: 'O', dominantArm: '左', family: '父・母・姉・兄', school: '聖ルドルフ' },
  { name: '木更津 淳', grade: '3年', birthday: '11/20', ageCurrent: 14, height: 168, weight: 55, bloodType: 'O', dominantArm: '右', family: '父・母・兄', school: '聖ルドルフ' },
  { name: '柳沢 慎也', grade: '3年', birthday: '12/9', ageCurrent: 14, height: 169, weight: 57, bloodType: 'O', dominantArm: '右', family: '父・母', school: '聖ルドルフ' },
  { name: '金田 一郎', grade: '2年', birthday: '12/31', ageCurrent: 13, height: 163, weight: null, bloodType: 'A', dominantArm: '右', family: '父・母・弟', school: '聖ルドルフ' },
  { name: '野村 拓也', grade: '3年', birthday: '2/28', ageCurrent: 14, height: 158, weight: null, bloodType: 'B', dominantArm: '右', family: '', school: '聖ルドルフ' },
];
