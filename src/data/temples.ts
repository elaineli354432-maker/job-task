export type Annotation = {
  marker: string;
  term: string;
  explanation: string;
};

export type Temple = {
  id: string;
  name: string;
  juan: string;
  area: string;
  type: string;
  x: number;
  y: number;
  shortDescription: string;
  originalText: string;
  annotations: Annotation[];
  conceptImage?: string;
  imagePrompt: string;
};

export const temples: Temple[] = [
  { id: 'yongning', name: '永宁寺', juan: '卷一', area: '城内', type: '皇家寺院', x: 52, y: 38, shortDescription: '北魏都城核心佛寺之一，以高塔著称。', originalText: '永宁寺，熙平元年①，灵太后胡氏②所立也。\n【此处替换为《洛阳伽蓝记》原文】', annotations: [ { marker: '①', term: '熙平元年', explanation: '北魏孝明帝年号，对应公元516年。' }, { marker: '②', term: '灵太后胡氏', explanation: '北魏后期重要政治人物，孝明帝之母。' } ], imagePrompt: '高塔耸立、夯土台基、木构殿宇、北魏都城天际线，古籍插图风。' },
  { id: 'jianzhong', name: '建中寺', juan: '卷一', area: '城内', type: '都城寺院', x: 47, y: 42, shortDescription: '位于内城交通要道附近，僧众往来频繁。', originalText: '建中寺，旧址在都城大道之侧①。\n【此处替换为《洛阳伽蓝记》原文】', annotations: [ { marker: '①', term: '都城大道', explanation: '指北魏洛阳城内主要通行干道。' } ], imagePrompt: '临街寺院、门阙与街市相邻、行人稀疏、纸本淡墨质感。' },
  { id: 'changqiu', name: '长秋寺', juan: '卷二', area: '城东', type: '贵族施建', x: 69, y: 40, shortDescription: '城东寺院群中的代表，园林氛围较强。', originalText: '长秋寺，在城东旧坊①。\n【此处替换为《洛阳伽蓝记》原文】', annotations: [ { marker: '①', term: '旧坊', explanation: '坊为城市分区单元，旧坊说明其所在街坊历史较早。' } ], imagePrompt: '城东寺院、竹木掩映、回廊庭院、淡赭与黛青配色。' },
  { id: 'yaoguang', name: '瑶光寺', juan: '卷二', area: '城东', type: '尼寺', x: 74, y: 33, shortDescription: '以精巧院落与静修空间见称。', originalText: '瑶光寺，院宇清整①。\n【此处替换为《洛阳伽蓝记》原文】', annotations: [ { marker: '①', term: '清整', explanation: '形容寺院布局整肃、环境清雅。' } ], imagePrompt: '小尺度院落、女众佛寺、白墙灰瓦、静谧晨雾。' },
  { id: 'jingming', name: '景明寺', juan: '卷三', area: '城南', type: '译经相关寺院', x: 55, y: 62, shortDescription: '与僧侣活动和经像流通有关的要点。', originalText: '景明寺，南郭之冲①。\n【此处替换为《洛阳伽蓝记》原文】', annotations: [ { marker: '①', term: '南郭之冲', explanation: '位于城南交通节点，往来人员众多。' } ], imagePrompt: '城南大道旁寺院、经幢与石灯、古地图注记风格。' },
  { id: 'longhua', name: '龙华寺', juan: '卷四', area: '城西', type: '讲经道场', x: 31, y: 45, shortDescription: '城西佛事活动频繁的讲经空间。', originalText: '龙华寺，西郊名刹①。\n【此处替换为《洛阳伽蓝记》原文】', annotations: [ { marker: '①', term: '名刹', explanation: '指在当时声望较高、香火较盛的寺院。' } ], imagePrompt: '城西寺院、开阔前庭、讲经台、风化石阶与古树。' },
  { id: 'qintaishangjun', name: '秦太上君寺', juan: '卷五', area: '城北', type: '复合信仰空间', x: 50, y: 20, shortDescription: '名称体现佛道交涉的历史语境。', originalText: '秦太上君寺，北邙道旁①。\n【此处替换为《洛阳伽蓝记》原文】', annotations: [ { marker: '①', term: '北邙道', explanation: '北出洛阳的重要通道，与陵区及郊野相接。' } ], imagePrompt: '北郊寺观并置意象、坡地台阶、风沙天色、古籍边注。' },
  { id: 'ningxuan', name: '凝玄寺', juan: '卷五', area: '城北', type: '山门寺院', x: 61, y: 17, shortDescription: '靠近北部通道，兼具宗教与地理标识意义。', originalText: '凝玄寺，近城北门①。\n【此处替换为《洛阳伽蓝记》原文】', annotations: [ { marker: '①', term: '城北门', explanation: '北魏洛阳城北向出入的重要门区。' } ], imagePrompt: '北门附近寺院、门楼剪影、苍青色调、旧纸纤维纹理。' }
];
