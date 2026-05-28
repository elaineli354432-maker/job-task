const temples = [
  {
    id: 'yongning', name: '永宁寺', juan: '卷一', area: '城内', type: '皇家寺院', x: 52, y: 38,
    description: '北魏都城核心佛寺之一，以高塔与皇家营建著称。',
    original: '永宁寺，熙平元年①，灵太后胡氏②所立也。\n【此处替换为《洛阳伽蓝记》准确原文】',
    translation: '永宁寺是北魏后期极具象征意义的皇家寺院。此处译文为示例，后续可替换为逐句翻译。',
    annotations: [
      ['①', '熙平元年', '北魏孝明帝年号，对应公元516年。'],
      ['②', '灵太后胡氏', '孝明帝之母，北魏后期重要政治人物。']
    ],
    events: ['516年：北魏洛阳佛寺营建进入高峰。', '永宁寺塔成为都城景观与政治象征。']
  },
  {
    id: 'jianzhong', name: '建中寺', juan: '卷一', area: '城内', type: '都城寺院', x: 46, y: 43,
    description: '位于城内道路网络之间，适合展示寺院与坊市关系。',
    original: '建中寺，旧址在都城大道之侧①。\n【此处替换为《洛阳伽蓝记》准确原文】',
    translation: '建中寺处于城内交通与礼佛活动交汇之处。此处为示例译文。',
    annotations: [['①', '都城大道', '指洛阳城内主要通行干道，连接宫城、坊区与城门。']],
    events: ['北魏迁都洛阳后，城市坊市与寺院空间快速重组。']
  },
  {
    id: 'changqiu', name: '长秋寺', juan: '卷二', area: '城东', type: '贵族施建', x: 68, y: 40,
    description: '城东寺院群中的示例节点，强调园林、宅第与寺院转换。',
    original: '长秋寺，在城东旧坊①。\n【此处替换为《洛阳伽蓝记》准确原文】',
    translation: '长秋寺位于洛阳城东，可能与旧有坊区和贵族空间有关。',
    annotations: [['①', '旧坊', '坊为城市分区单元；示例说明可替换为准确校注。']],
    events: ['城东区域常见宅第、园林与佛寺并存的空间叙事。']
  },
  {
    id: 'yaoguang', name: '瑶光寺', juan: '卷二', area: '城东', type: '尼寺', x: 74, y: 33,
    description: '以清雅院落与静修意象呈现，适合后续加入尼寺史料。',
    original: '瑶光寺，院宇清整①。\n【此处替换为《洛阳伽蓝记》准确原文】',
    translation: '瑶光寺的空间想象以洁净、静谧和院落秩序为主。',
    annotations: [['①', '清整', '形容寺院布局整肃、环境清雅。']],
    events: ['北魏洛阳佛教生活中，尼寺与女性供养活动是重要线索。']
  },
  {
    id: 'jingming', name: '景明寺', juan: '卷三', area: '城南', type: '译经相关寺院', x: 55, y: 62,
    description: '城南交通节点附近的寺院，用于连接僧侣活动与经像流通。',
    original: '景明寺，南郭之冲①。\n【此处替换为《洛阳伽蓝记》准确原文】',
    translation: '景明寺处于城南要道附近，往来僧俗活动频繁。',
    annotations: [['①', '南郭之冲', '城南交通要冲；“郭”常指外城或城外区域。']],
    events: ['南向道路连接洛阳城与郊野、河渠和外部交通网络。']
  },
  {
    id: 'longhua', name: '龙华寺', juan: '卷四', area: '城西', type: '讲经道场', x: 31, y: 45,
    description: '城西佛事活动节点，强调讲经、集会与郊野边界。',
    original: '龙华寺，西郊名刹①。\n【此处替换为《洛阳伽蓝记》准确原文】',
    translation: '龙华寺可被理解为城西佛教活动和公共集会的重要地点。',
    annotations: [['①', '名刹', '声望较高、香火较盛的寺院。']],
    events: ['城西区域与出城道路、郊外佛寺及贵族游观活动相关。']
  },
  {
    id: 'qintaishangjun', name: '秦太上君寺', juan: '卷五', area: '城北', type: '复合信仰空间', x: 50, y: 20,
    description: '名称保留佛道交涉的历史语感，位于北部通道意象中。',
    original: '秦太上君寺，北邙道旁①。\n【此处替换为《洛阳伽蓝记》准确原文】',
    translation: '秦太上君寺的名称提示了北魏洛阳多元信仰空间的复杂性。',
    annotations: [['①', '北邙道', '北出洛阳的重要道路，与陵区、山地和郊野相接。']],
    events: ['北邙与洛阳丧葬、郊祀和宗教景观关系密切。']
  },
  {
    id: 'ningxuan', name: '凝玄寺', juan: '卷五', area: '城北', type: '山门寺院', x: 61, y: 17,
    description: '靠近北门和北部山地想象的寺院节点。',
    original: '凝玄寺，近城北门①。\n【此处替换为《洛阳伽蓝记》准确原文】',
    translation: '凝玄寺位于北向出入的空间叙事中，兼具地理标识意义。',
    annotations: [['①', '城北门', '洛阳城北向出入的重要门区。']],
    events: ['北部城门连接宫城北向轴线、北邙与外部交通。']
  },
  {
    id: 'baoguang', name: '宝光寺', juan: '卷三', area: '城南', type: '城市寺院', x: 42, y: 67,
    description: '补充南部寺院点位，使总图更具“诸寺环布”的视觉密度。',
    original: '宝光寺，南坊之间①。\n【示例节点：后续替换为准确原文】',
    translation: '宝光寺作为示例节点，用于展示城南寺院与坊区关系。',
    annotations: [['①', '南坊', '此处为示例注释，后续可替换为考据内容。']],
    events: ['南部坊区与河道、城门之间构成寺院分布的重要背景。']
  }
];

const timeline = [
  ['220', '曹丕代汉，进入魏晋南北朝长期分合的历史开端。'],
  ['317', '东晋建立，北方政权更替频繁，洛阳地位屡经变化。'],
  ['386', '拓跋珪建立北魏，北方逐步走向统一。'],
  ['493', '北魏孝文帝迁都洛阳，制度、礼制与城市空间全面汉化。'],
  ['516', '永宁寺等皇家佛寺营建，洛阳佛教景观达到高峰。'],
  ['534', '北魏分裂为东魏、西魏，洛阳政治中心地位改变。'],
  ['547前后', '杨衒之追忆洛阳寺院盛况，《洛阳伽蓝记》的书写背景逐渐形成。'],
  ['589', '隋灭陈，南北重新统一，魏晋南北朝结束。']
];

const filterLabels = ['全部', '卷一', '卷二', '卷三', '卷四', '卷五'];
let selectedFilter = '全部';
let activeTempleId = null;

const markersEl = document.querySelector('#markers');
const filtersEl = document.querySelector('#filters');
const detailEl = document.querySelector('#detail');
const conceptArtEl = document.querySelector('#conceptArt');
const detailMetaEl = document.querySelector('#detailMeta');
const detailNameEl = document.querySelector('#detailName');
const detailDescriptionEl = document.querySelector('#detailDescription');
const originalTextEl = document.querySelector('#originalText');
const translationTextEl = document.querySelector('#translationText');
const annotationListEl = document.querySelector('#annotationList');
const eventListEl = document.querySelector('#eventList');
const timelineListEl = document.querySelector('#timelineList');

function createFilters() {
  filtersEl.innerHTML = filterLabels.map((label) => (
    `<button class="filter-button${label === selectedFilter ? ' active' : ''}" type="button" data-filter="${label}">${label}</button>`
  )).join('');

  filtersEl.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
      selectedFilter = button.dataset.filter;
      createFilters();
      renderMarkers();
    });
  });
}

function renderMarkers() {
  markersEl.innerHTML = temples.map((temple) => {
    const dimmed = selectedFilter !== '全部' && temple.juan !== selectedFilter;
    const active = temple.id === activeTempleId;
    return `
      <button class="temple-marker${dimmed ? ' dimmed' : ''}${active ? ' active' : ''}" type="button" data-id="${temple.id}" style="left:${temple.x}%;top:${temple.y}%" aria-label="查看${temple.name}">
        <span class="marker-dot"></span>
        <span class="marker-label">${temple.name} · ${temple.juan} · ${temple.area}</span>
      </button>
    `;
  }).join('');

  markersEl.querySelectorAll('.temple-marker').forEach((marker) => {
    marker.addEventListener('click', () => showTemple(marker.dataset.id));
  });
}

function highlightNotes(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/([①-⑩])/g, '<span class="note-marker">$1</span>')
    .replace(/\n/g, '<br>');
}

function showTemple(id) {
  const temple = temples.find((item) => item.id === id);
  if (!temple) return;

  activeTempleId = id;
  detailEl.classList.add('open');
  conceptArtEl.dataset.title = temple.name;
  detailMetaEl.textContent = `${temple.juan} · ${temple.area} · ${temple.type}`;
  detailNameEl.textContent = temple.name;
  detailDescriptionEl.textContent = temple.description;
  originalTextEl.innerHTML = highlightNotes(temple.original);
  translationTextEl.textContent = temple.translation;
  annotationListEl.innerHTML = temple.annotations.map(([marker, term, explanation]) => (
    `<li><span class="note-marker">${marker}</span> <strong>${term}：</strong>${explanation}</li>`
  )).join('');
  eventListEl.innerHTML = temple.events.map((event) => `<li>${event}</li>`).join('');
  renderMarkers();
  detailEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderTimeline() {
  timelineListEl.innerHTML = timeline.map(([year, text]) => (
    `<div class="timeline-item"><span class="timeline-year">${year}</span><p>${text}</p></div>`
  )).join('');
}

document.querySelector('#closeDetail').addEventListener('click', () => {
  detailEl.classList.remove('open');
  activeTempleId = null;
  renderMarkers();
});

document.querySelector('#resetView').addEventListener('click', () => {
  selectedFilter = '全部';
  activeTempleId = null;
  detailEl.classList.remove('open');
  createFilters();
  renderMarkers();
});

createFilters();
renderMarkers();
renderTimeline();
