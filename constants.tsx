
import { Celebrity, NewsItem, ImpactData } from './types';

export const ORGANIZERS = [
  { 
    name: '海南科技集团', 
    tagline: '数字科技领域领军企业',
    logo: 'https://placehold.jp/40/003366/ffffff/200x80.png?text=海南科技集团' 
  },
  { 
    name: '海南公益基金会', 
    tagline: '专注公益事业发展',
    logo: 'https://placehold.jp/40/0055aa/ffffff/200x80.png?text=海南公益基金会' 
  },
  { 
    name: '海南金融投资公司', 
    tagline: '专业金融投资机构',
    logo: 'https://placehold.jp/40/222222/ffffff/200x80.png?text=海南金融投资' 
  },
  { 
    name: '创新科技研究院', 
    tagline: '前沿技术研发机构',
    logo: 'https://placehold.jp/40/3b82f6/ffffff/200x80.png?text=创新科技院' 
  }
];

export const SUPPORTERS = [
  { name: '海南省政府', logo: 'https://placehold.jp/24/333333/ffffff/180x60.png?text=海南省政府' },
  { name: '海南大学', logo: 'https://placehold.jp/24/004488/ffffff/180x60.png?text=海南大学' },
  { name: '华为技术', logo: 'https://placehold.jp/24/cc0000/ffffff/180x60.png?text=HUAWEI' },
  { name: '腾讯科技', logo: 'https://placehold.jp/24/00aa00/ffffff/180x60.png?text=Tencent' },
  { name: '阿里巴巴', logo: 'https://placehold.jp/24/ff6600/ffffff/180x60.png?text=Alibaba' },
  { name: '百度公司', logo: 'https://placehold.jp/24/2932e1/ffffff/180x60.png?text=Baidu' }
];

export const CELEBRITIES: Celebrity[] = [
  {
    id: 'chaoguyangjia',
    name: '炒股养家',
    title: '顶级游资·养家心法创始人',
    tag: '精神领袖',
    score: 15420,
    change: 1.5,
    description: '中国股市传奇，悟道心法传播者。从百万到十亿，核心在于对共识的深度理解。',
    philosophy: '得散户心者得天下，人弃我取，人取我予。',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&auto=format&fit=crop',
    fullBio: '炒股养家先生作为国内顶级游资的代表，其“养家心法”影响了数以万计的职业投资者。在本次公益大赛中，他将“共识博弈”理论跨界应用到数字公益资源的精准分配中，旨在通过建立透明的信誉共识系统，解决传统慈善的信任痛点。',
    investmentStyle: '情绪博弈 / 龙头信仰'
  },
  {
    id: 'zhanghua',
    name: '张华',
    title: '超级牛散·价值投资践行者',
    tag: '稳健支柱',
    score: 14850,
    change: 2.1,
    description: '深耕金融科技，擅长挖掘具备核心竞争力的长线标的。',
    philosophy: '公益是最高级的投资，投资的是社会的未来。',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=400&auto=format&fit=crop',
    fullBio: '张华先生在自贸港数字基建领域有深厚积淀。他认为，数字公益不仅是资金的捐赠，更是效率的优化。他与王卫、潘伟君、炒股养家是多年的挚友，此次同台竞技，他表示将通过“长期主义”公益方案展现不同的火花。',
    investmentStyle: '价值重塑 / 趋势跟随'
  },
  {
    id: 'wangwei',
    name: '王卫',
    title: '自贸港投资专家·产业联动先行者',
    tag: '实战专家',
    score: 13900,
    change: -0.8,
    description: '致力于海南本土产业升级，擅长资本与实业的深度融合。',
    philosophy: '深耕自贸港，用数字技术赋能每一寸土地。',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&auto=format&fit=crop',
    fullBio: '作为本次赛事的东道主选手之一，王卫先生对海南各县市的帮扶需求了如指掌。他提出的“数智农业+公益直采”方案，直接打通了贫困地区农产品与高端市场的通道。',
    investmentStyle: '产业逻辑 / 周期预判'
  },
  {
    id: 'panweijun',
    name: '潘伟君',
    title: '盘口解读宗师·量化逻辑专家',
    tag: '技术核心',
    score: 13200,
    change: 3.4,
    description: '以极细致的盘口解读和资金流分析见长，洞察市场微观波动。',
    philosophy: '一切行为皆有痕迹，数据是真理的唯一语言。',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&h=400&auto=format&fit=crop',
    fullBio: '潘伟君先生将复杂的盘口博弈逻辑简化为数字公益的评估模型，能够精准计算出每一笔公益投入对社会效益的边际贡献。他的参与为本次大赛提供了极高的专业技术门槛。',
    investmentStyle: '微观博弈 / 量化对冲'
  },
  { id: 'wan_cy', name: '万长阳', title: '顶尖游资团队', tag: '机构实力', score: 12500, change: 0.5, description: '多位资深操盘手组成的超级战队，资金实力雄厚。', philosophy: '协同作战，趋势为王。', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=400&auto=format&fit=crop' },
  { id: 'gubei', name: '古北路', title: '游资风向标', tag: '市场热点', score: 12100, change: 1.2, description: '一线游资席位，擅长引导市场主流热点方向。', philosophy: '引领共识，顺势收割。', avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=400&h=400&auto=format&fit=crop' },
  { id: 'zlaoge', name: '赵老哥', title: '游资界传奇', tag: '八年一万倍', score: 14500, change: -2.5, description: '短线交易的旗帜，以凌厉的打法 and 极高的胜率著称。', philosophy: '天下武功，唯快不破。', avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=400&h=400&auto=format&fit=crop' },
  { id: 'wangxm', name: '王小明', title: '低调牛散', tag: '潜力股', score: 11200, change: 0.3, description: '低调务实，专注于科技创新企业的早期发掘。', philosophy: '守正出奇，静待花开。', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&h=400&auto=format&fit=crop' },
  { id: 'paxy', name: '平安学院', title: '专业投研机构', tag: '学术背景', score: 10800, change: 0.1, description: '体系化的投研逻辑，提供深度宏观策略支持。', philosophy: '深度研究，笃定持有。', avatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=400&h=400&auto=format&fit=crop' },
  { id: 'gyp', name: '高雅萍', title: '知名牛散', tag: '定力惊人', score: 11500, change: 0.7, description: '长线持股的典范，对核心资产有极强的持有定力。', philosophy: '时间是投资最好的朋友。', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=400&auto=format&fit=crop' },
  { id: 'wdl', name: '王东来', title: '商业投资领袖', tag: '跨界先驱', score: 10400, change: -0.4, description: '将零售哲学与金融投资完美结合的商业奇才。', philosophy: '至诚至善，成人达己。', avatar: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=400&h=400&auto=format&fit=crop' },
  { id: 'gyxy', name: '国越学院', title: '教育公益先锋', tag: '知识赋能', score: 10200, change: 0.9, description: '通过教育改变认知，用金融思维重构知识体系。', philosophy: '教育即公益，认知即财富。', avatar: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&h=400&auto=format&fit=crop' },
  { id: 'wgf', name: '王国富', title: '风投界新星', tag: '锐不可当', score: 9800, change: 1.8, description: '专注于数字化转年的创投专家，眼光毒辣。', philosophy: '拥抱未来，定义新规则。', avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=400&h=400&auto=format&fit=crop' },
  { id: 'zgl', name: '张国立', title: '文化公益大使', tag: '艺术跨界', score: 10900, change: -0.2, description: '将影视艺术的影响力转化为社会公益的正能量。', philosophy: '艺术有价，善心无界。', avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=400&h=400&auto=format&fit=crop' },
  { id: 'jjb', name: '经济帮', title: '联合战队', tag: '集团化作战', score: 9500, change: 1.1, description: '多领域专家联合，形成多维度的公益与投资闭环。', philosophy: '众志成城，价值共生。', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=400&auto=format&fit=crop' },
  { id: 'zgw', name: '赵国伟', title: '科技投资达人', tag: '硬核背景', score: 9200, change: 0.4, description: '硬科技赛道的掘金者，用技术改变公益形态。', philosophy: '代码重构世界，善心温暖人心。', avatar: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=400&h=400&auto=format&fit=crop' },
  { id: 'nbh', name: '南北环', title: '实操悍将', tag: '实战第一', score: 11800, change: 2.8, description: '极具爆发力的实战派，对市场风向极为敏感。', philosophy: '顺势则昌，唯实不破。', avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=400&h=400&auto=format&fit=crop' },
  { id: 'cy', name: '楚云', title: '新锐投资者', tag: '后起之秀', score: 8900, change: 0.6, description: 'Z世代数字化原住民，热衷于区块链公益实验。', philosophy: '透明是公益的底色。', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&h=400&auto=format&fit=crop' },
  { id: 'zzq', name: '张志强', title: '资深策略分析师', tag: '定海神针', score: 10600, change: -0.1, description: '三十年投资风云，稳字当头，智勇双全。', philosophy: '活在当下，赢在复利。', avatar: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=400&h=400&auto=format&fit=crop' },
  { id: 'w_xiaoming', name: '王小明', title: '职业牛散', tag: '成长派', score: 9400, change: 0.5, description: '致力于挖掘被市场低估的中小市值优质标的。', philosophy: '发现价值，见证成长。', avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&h=400&auto=format&fit=crop' }
];

export const NEWS: NewsItem[] = [
  {
    id: 1,
    title: '2026海南自贸区“心系全海南”数字公益创新大赛正式举办',
    date: '2026-01-02',
    category: '头条',
    content: '本次大赛是自贸区最具影响力的科技慈善盛事之一，由海南日报社等多家机构共同主办。',
    fullText: `来源：海南日报社   日期：2026-01-02   浏览：234次\n\n海南自贸区公益大赛，即2026年海南自贸区"心系全海南"数字公益创新大赛，初赛于2026年年初进行，是今年首季重磅赛事。\n\n赛事旨在通过数字技术创新推动公益事业发展，以"数字科技，创新未来"为主题，设立10大赛道机制。赛事由多家科技企业和公益机构共同主办，得到政府部门的支持与指导，致力于将科技的力量引导至最需要帮助的山区 and 人群。`,
    image: 'https://images.unsplash.com/photo-1454165833767-027ffea10c3b?q=80&w=800&h=400&auto=format&fit=crop',
    author: '海南日报社'
  },
  {
    id: 2,
    title: '各大牛散均已亮剑！张华、王卫、炒股养家友情博弈成看点',
    date: '2026-01-05',
    category: '看点',
    content: '张华、王卫、潘伟君、炒股养家几位超级牛散好友之间将擦出怎样的火花？',
    fullText: '本次比赛参赛队员不乏投资界耳熟能详的名人：万长阳、古北路、王卫、张华、赵老哥等均已入驻。最受瞩目的是张华、王卫、潘伟君、炒股养家四位好友的同台竞争。这不仅是一场技术的较量，更是一场关于“科技向善”理念深度的对话。各大流派交锋，请拭目以待。',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&h=400&auto=format&fit=crop'
  },
  {
    id: 3,
    title: '技术革新：分布式账本技术实现公益善款“分秒必达”',
    date: '2026-01-08',
    category: '科技',
    content: '大赛技术组宣布，采用最先进的跨链追踪技术，确保每一分公益金在海南自贸区的流向全程透明。',
    fullText: '【技术前哨】\n\n大赛技术委员会今日透露，本次赛事使用的数字底座已完成第三次压力测试。通过引入分布式共识机制，公益项目的审批时效从传统的平均15个工作日缩短至近乎实时。海南自贸区将成为全球首个大规模应用“即时慈善”逻辑的智慧岛屿。专家指出，这种去中心化的信任重构，正是解决公益“最后一公里”效率低下的终极方案。',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&h=400&auto=format&fit=crop',
    author: '自贸区数字实验室'
  },
  {
    id: 4,
    title: '影响力爆棚：募捐总额突破24亿，海南公益迎来“大数据时代”',
    date: '2026-01-10',
    category: '动态',
    content: '随着“赵老哥”及“楚云”等新生代力量的注入，赛事热度持续攀升，社会贡献指数连创新高。',
    fullText: '【数据周报】\n\n截至2026年1月10日，大赛官方实时看板显示，全平台募捐总额正式跨越24亿人民币大关。其中，海南本地产业联动项目占据了40%的权重。王卫先生领衔的“数智乡村”项目表现抢眼，成功带动了全省50个特色村镇的产业升级。这一里程碑标志着海南公益事业已从单纯的财务捐赠演进为基于大数据的“精准赋能”阶段。',
    image: 'https://images.unsplash.com/photo-1551288049-bbda64656ad1?q=80&w=800&h=400&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'AI赋能精准扶贫：首个数字化需求匹配引擎在琼上线',
    date: '2026-01-12',
    category: '技术',
    content: '通过AI算法自动匹配捐赠意愿与受助需求，大幅提升公益资源配置效率。',
    fullText: '【创新动态】\n\n由张华先生团队深度参与研发的“琼善之星”AI匹配引擎今日在海口发布。该引擎利用神经网络分析海南各村镇的实时数据，包括教育缺口、医疗需求及农产品滞销情况。它能瞬间为每一位捐赠者提供最紧迫的三个受助方向。张华表示：“我们正试图将投资领域的Alpha策略应用到公益领域，寻找社会效益的最大化‘超额收益’。”',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&h=400&auto=format&fit=crop',
    author: '金融科技日报'
  },
  {
    id: 6,
    title: '独家访谈：炒股养家谈“共识”在数字化公益中的基石作用',
    date: '2026-01-14',
    category: '访谈',
    content: '精神领袖级投资者首次分享公益逻辑：公益的本质是建立关于“美好”的深度共识。',
    fullText: '“为什么我们要在海南自贸港推行数字化公益？”炒股养家在接受本报专访时反问道。他认为，传统的公益模式往往受困于信息不对称。而数字技术的核心价值在于“降维”——通过透明的数据流，让公益项目像热门股票一样，能迅速在人群中建立起价值共识。这种共识一旦形成，将释放出比资金本身更强大的自发力量。',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&h=400&auto=format&fit=crop',
    author: '自贸港人物周刊'
  },
  {
    id: 7,
    title: 'VR走进五指山：数字教育项目助力黎苗文化传承',
    date: '2026-01-15',
    category: '项目',
    content: '通过虚拟现实技术，五指山深处的孩子也能身临其境地体验现代艺术与传统文化的交融。',
    fullText: '【教育前线】\n\n大赛重点支持的“云端课堂”今日正式落户五指山市。通过王卫先生筹措的专项基金，首批数字化教学设备已分发到3所民族学校。借助VR技术，当地学生不仅能接受高质量的外语教育，还能在虚拟空间中重构传统的黎锦技艺。这种“数字出海”与“文化寻根”的结合，展示了科技公益在赋能偏远地区精神世界的巨大潜力。',
    image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=800&h=400&auto=format&fit=crop'
  },
  {
    id: 8,
    title: '热度飙升：赵老哥领衔“极速筹款”活动，单小时突破千万',
    date: '2026-01-17',
    category: '看点',
    content: '“天下武功唯快不破”，赵老哥将短线交易的爆发力带入公益众筹，点燃全网热情。',
    fullText: '【赛事播报】\n\n昨日晚间，著名游资“赵老哥”在社交媒体发起了一场名为“闪电行动”的公益筹款活动。在短短60分钟内，该项目便吸引了超过10万名粉丝参与，募捐额迅速突破1200万元，创造了本次大赛自启动以来的单小时募捐纪录。这种将市场博弈中的“抢筹”机制转化为公益贡献的行为，引发了业内关于“公益游戏化”的深度讨论。',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=800&h=400&auto=format&fit=crop'
  },
  {
    id: 9,
    title: '信任重构：区块链追溯系统覆盖大赛所有善款流向',
    date: '2026-01-18',
    category: '技术',
    content: '每一笔流向海南乡村的公益资金，都将在分布式账本上留下永恒且不可篡改的印记。',
    fullText: '【技术速递】\n\n大赛技术组今日宣布，基于自贸港自主知识产权的“善源链”已完成对所有参赛项目的全覆盖。这意味着，任何一名捐赠者都可以通过扫描二维码，实时查看自己捐出的每一分钱流向了哪一个具体村庄、哪一位受助者手中，甚至可以看到物资采购的合同电子副本。这种极致的透明化，正在彻底铲除传统慈善中的寻租空间。',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&h=400&auto=format&fit=crop'
  },
  {
    id: 10,
    title: '政策利好：海南省出台数字化公益创新专项税收减免政策',
    date: '2026-01-20',
    category: '政务',
    content: '政府单位与民间公益大赛深度联动，为参与数字化转型的企业提供实质性税收激励。',
    fullText: '【政务要闻】\n\n海南省财政厅今日发布《关于支持数字公益大赛参与主体的若干激励措施》，明确提出对积极参与本次大赛并取得显著社会效益的企业，将享受相应的所得税减免政策。省商务厅相关负责人表示，通过这种“政府搭台、大师唱戏、数字赋能”的模式，海南正致力于打造全国领先的“智慧公益示范区”，吸引更多高端资本投入社会事业。',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&h=400&auto=format&fit=crop'
  },
  {
    id: 11,
    title: '全球视野：新加坡慈善基金会考察团访问海南自贸港',
    date: '2026-01-22',
    category: '国际',
    content: '国际投资者与慈善家对“大师+数字”的海南公益模式表现出浓厚兴趣，探讨跨国慈善合作。',
    fullText: '【外事交流】\n\n来自新加坡及伦敦的5家知名慈善信托基金会代表，今日抵达海口对本次大赛进行实地考察。代表团成员、某国际资产管理公司董事表示：“海南将金融逻辑、游资影响力与尖端数字技术完美融合的尝试令人惊叹。这种模式非常具有普适性，或许未来可以推广到东南亚乃至全球的数字化减贫项目中。”',
    image: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=800&h=400&auto=format&fit=crop'
  },
  {
    id: 12,
    title: '人物志：张华眼中的“公益复利”——从长期主义谈价值重塑',
    date: '2026-01-24',
    category: '深度',
    content: '牛散代表张华分享长期持股心得与公益理念的契合：最好的善行是能自我生长的系统。',
    fullText: '“做公益不应该是一次性的施舍，而应该是一次跨越时间的‘长线建仓’。”张华在演讲中动情地说道。他认为，数字技术的介入让公益项目具备了某种“自进化”属性。通过建立可持续的商业模型与数字化反馈回路，受助地区能够逐渐形成自我造血能力。这种“公益复利”带来的社会边际改善，远比单纯的资金数字更具投资价值。',
    image: 'https://images.unsplash.com/photo-1444653304464-90298a0b0a4a?q=80&w=800&h=400&auto=format&fit=crop',
    author: '深度财经'
  },
  {
    id: 13,
    title: '绿色公益：首个“碳信用来慈善”项目在本次大赛试点成功',
    date: '2026-01-26',
    category: '生态',
    content: '海南自贸港探索将个人及企业碳普惠额度转化为公益善款的新路径。',
    fullText: '【生态创新】\n\n大赛组委会今日联合海南省林业局发布首个“数字化碳中和公益包”。通过接入“善源链”系统，参与者可以将日常低碳行为积累的碳普惠额度，直接兑换为本次大赛的公益积分，并由合作银行为其背后的生态保护项目注资。这一举措标志着海南数字化公益正式进入“生态+金融+慈善”的三维度融合阶段。',
    image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=800&h=400&auto=format&fit=crop'
  },
  {
    id: 14,
    title: '结语：消除“数字鸿沟”，让自贸港的阳光照进每一个角落',
    date: '2026-01-28',
    category: '评论',
    content: '技术不应成为壁垒，而应成为桥梁。大赛即将进入决赛阶段，科技温度持续攀升。',
    fullText: '【本报特约评论】\n\n随着“心系全海南”数字公益创新大赛初赛步入尾声，我们欣喜地看到，数字技术并没有因为其高深而让公益变得遥远。相反，在万长阳、炒股养家等大师的带动下，在无数技术志愿者的努力下，那些曾经被遗忘在角落的需求正被精准捕获。数字化转期的核心目标，从来不是炫技，而是让每个人都能享受到技术带来的公平与尊严。',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=400&auto=format&fit=crop',
    author: '海南日报'
  },
  {
    id: 15,
    title: '空中生命线：数字化医疗无人机在三沙群岛完成首秀',
    date: '2026-01-30',
    category: '科技',
    content: '通过自贸港5G专网连接，急救药品与血浆实现了海岛间的极速配送。',
    fullText: '【前沿快报】\n\n今日上午，由大赛专项基金支持的“海空急救”项目在三沙市永兴岛顺利完成实测。无人机在复杂的海洋环境下，仅用15分钟便完成了跨海峡的抗蛇毒血清配送。潘伟君先生团队提供的飞行轨迹优化算法，确保了在强风环境下的航向精准度。市卫健委表示，这将彻底重构南海离岛的基层医疗保障逻辑。',
    image: 'https://images.unsplash.com/photo-1508614589041-895b83967a4f?q=80&w=800&h=400&auto=format&fit=crop'
  },
  {
    id: 16,
    title: '新锐出击：Z世代公益创业团队正式入围大赛复赛圈',
    date: '2026-02-01',
    category: '动态',
    content: '多支由海归青年组成的“AI+公益”团队带来颠覆性方案，挑战传统大师阵营。',
    fullText: '【赛事头条】\n\n随着复赛名单揭晓，几张稚嫩却自信的面孔引发热议。由苏黎世联邦理工大学学子组成的“涅槃团队”，凭借其研发的“废弃塑料数字化循环追踪系统”杀入十强。他们利用计算机视觉技术自动分类沙滩垃圾，并将其转化为可流通的“公益Token”。大赛评委万长阳表示：“后浪的爆发力超乎想象，共识博弈正在被年轻人重新定义。”',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&h=400&auto=format&fit=crop'
  },
  {
    id: 17,
    title: '数智渔业：数字公益助推万宁远洋捕捞产业绿色转型',
    date: '2026-02-03',
    category: '项目',
    content: '通过安装数字化声呐与卫星监测设备，帮助渔民精准避开保育区域，提升收益。',
    fullText: '【产业深耕】\n\n王卫先生发起的“守望蔚蓝”公益项目今日在万宁港举行交船仪式。首批30艘远洋渔船装备了最新的数字化环境监测终端。该系统能实时预警非法捕捞区域，并通过大数据分析鱼群迁徙路径，降低燃油损耗30%以上。这种“授人以渔”的数字化升级，不仅保护了生态，更为渔民带来了切实的“超额收益”。',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&h=400&auto=format&fit=crop'
  },
  {
    id: 18,
    title: '大师心经：潘伟君谈‘博弈论’如何优化公益资源分配',
    date: '2026-02-05',
    category: '访谈',
    content: '通过纳什均衡模型分析，确保每一笔捐赠都能触达边际效用最高的环节。',
    fullText: '在本次大赛的技术研讨会上，潘伟君先生分享了其独特的“盘口逻辑公益化”思路。他指出，目前的公益痛点在于资源错配——有的地方物资过剩，有的地方极度匮乏。通过引入博弈论中的激励兼容机制，可以引导各方主动上报真实需求，从而实现社会总福利的最优分配。他的这套“算法慈悲”理论，正在成为大赛的技术标准之一。',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&h=400&auto=format&fit=crop',
    author: '数智金融周刊'
  },
  {
    id: 19,
    title: '云端养老：海口智慧养老示范点启用，AI守护空巢老人',
    date: '2026-02-07',
    category: '动态',
    content: '非侵入式毫米波雷达与AI语义分析系统，为老人提供24小时全方位的健康监护。',
    fullText: '【民生纪实】\n\n位于海口市美兰区的“数字晚霞”公益社区今日正式开园。基于张华先生提供的投资模型，该项目实现了低成本的规模化复制。系统能通过监测老人的日常动作逻辑，在意外发生前3秒发出预警。同时，智能语音管家能与老人进行情感交互，缓解孤独感。张华表示：“这是投资中最稳健的品种——对人性尊严的守护。”',
    image: 'https://images.unsplash.com/photo-1516733968668-dbdce39c46ef?q=80&w=800&h=400&auto=format&fit=crop'
  },
  {
    id: 20,
    title: '全球首发：海南自贸港‘公益NFT’系列正式上线',
    date: '2026-02-09',
    category: '科技',
    content: '探索数字资产慈善化新路径，首批藏品以黎族传统图案为核心设计语言。',
    fullText: '【创新前哨】\n\n海南自贸区区块链交易所今日迎来了一批特殊的数字资产。这套名为“自贸光影”的NFT由大赛组委会联合多位艺术家创作，其销售所得将全部拨付至乡村教师培训项目。每一张NFT不仅是独一无二的数字收藏，更是持有者在“善源链”上荣誉等级的凭证。炒股养家点评道：“这是一种新型的‘共识资产’，赋予了善意金融流动性。”',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&h=400&auto=format&fit=crop'
  },
  {
    id: 21,
    title: '绿色能源：大赛专项资金助力白沙太阳能微电网建设',
    date: '2026-02-11',
    category: '生态',
    content: '通过分布式光伏技术，让深山里的村庄实现能源自给自足，并参与碳指标交易。',
    fullText: '【生态追踪】\n\n在白沙县青松乡，由大赛“低碳赛道”支持的微电网项目已正式并网。该项目不仅解决了当地电压不稳的问题，多余的电量还将通过区块链平台自动转化为碳减排额度，直接为村民带来现金收入。这种“环境公益+数字经济”的闭环，被专家誉为“自贸港绿色发展的微型样板”。',
    image: 'https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?q=80&w=800&h=400&auto=format&fit=crop'
  },
  {
    id: 22,
    title: '跨界巅峰：万长阳团队与自贸港研究院达成战略合作',
    date: '2026-02-13',
    category: '深度',
    content: '游资战队与智库机构强强联手，共同研发“社会价值指数评估系统”。',
    fullText: '【战略动态】\n\n今日，万长阳投资团队宣布向自贸港研究院捐赠一套自主研发的“动态压力分析模型”。该模型原用于预测极端市场波动，现在被重新训练用于评估大型公益项目对地区经济的带动作用。这种“金融大脑”在公益领域的降维应用，体现了本次大赛极高的学术与实操价值。',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&h=400&auto=format&fit=crop'
  },
  {
    id: 23,
    title: '数据驱动：2026海南公益蓝皮书发布，数字贡献率超60%',
    date: '2026-02-15',
    category: '政务',
    content: '权威报告显示，数字技术已成为提升公益效率的第一生产力，海南模式获全球点赞。',
    fullText: '【政务要闻】\n\n由海南省慈善总会与大赛组委会联合编撰的《2026海南自贸港数字公益蓝皮书》今日发布。报告通过详实的数据证明，在引入自动化匹配与区块链追溯后，公益资金的平均下沉速度提升了4倍，管理成本降低了25%。省领导表示，海南将以此为契机，打造全球数字公益的“样板间”。',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&h=400&auto=format&fit=crop'
  },
  {
    id: 24,
    title: '终极预告：大赛总决赛将在海口举行，千万奖金花落谁家？',
    date: '2026-02-17',
    category: '头条',
    content: '最后的共识之战即将开启，炒股养家等大师将亲自担任评委，揭秘冠军方案。',
    fullText: '【重磅预告】\n\n历经近两月的层层选拔，“心系全海南”数字公益创新大赛终于迎来了终极决战。2026年2月底，决赛盛典将在海口观澜湖会议中心隆重举行。届时，所有参赛团队将面对由投资大师、政府代表、受助群众共同组成的“共识陪审团”。这场关于智慧与善心的终极博弈，不仅将产生千万级的冠军奖金，更将定义未来十年海南公益的新高度。',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&h=400&auto=format&fit=crop',
    author: '大赛组委会'
  }
];

export const IMPACT_STATS: ImpactData[] = [
  { label: '覆盖人群', value: '1,200,000+', icon: 'fa-users', color: 'text-blue-500' },
  { label: '募捐总额', value: '¥2.4B', icon: 'fa-hand-holding-dollar', color: 'text-emerald-500' },
  { label: '创新项目', value: '3,500+', icon: 'fa-lightbulb', color: 'text-amber-500' },
  { label: '合作单位', value: '850', icon: 'fa-handshake', color: 'text-purple-500' }
];

export const PARTNERS = [
  { name: '海南日报社', logo: 'https://placehold.jp/24/003366/ffffff/180x60.png?text=海南日报社' },
  { name: '数字公益组委会', logo: 'https://placehold.jp/24/0055aa/ffffff/180x60.png?text=数字公益组委会' },
  { name: '自贸港投资协会', logo: 'https://placehold.jp/24/222222/ffffff/180x60.png?text=FTZ+Investment' },
  { name: '腾讯公益', logo: 'https://placehold.jp/24/00aa00/ffffff/180x60.png?text=腾讯公益' },
  { name: '阿里巴巴公益', logo: 'https://placehold.jp/24/ff6600/ffffff/180x60.png?text=阿里巴巴公益' },
  { name: '字节跳动', logo: 'https://placehold.jp/24/111111/ffffff/180x60.png?text=ByteDance' },
  { name: '华为云', logo: 'https://placehold.jp/24/cc0000/ffffff/180x60.png?text=HUAWEI+CLOUD' },
  { name: '平安集团', logo: 'https://placehold.jp/24/ff9900/ffffff/180x60.png?text=PING+AN' },
  { name: '蚂蚁集团', logo: 'https://placehold.jp/24/1677ff/ffffff/180x60.png?text=ANT+GROUP' },
  { name: '中国银行', logo: 'https://placehold.jp/24/990000/ffffff/180x60.png?text=Bank+of+China' },
  { name: '百度公益', logo: 'https://placehold.jp/24/2932e1/ffffff/180x60.png?text=Baidu+Charity' },
  { name: '招商银行', logo: 'https://placehold.jp/24/cc3333/ffffff/180x60.png?text=CMB' },
  // 新增银行一排
  { name: '中国工商银行', logo: 'https://placehold.jp/24/c7000b/ffffff/180x60.png?text=ICBC' },
  { name: '中国建设银行', logo: 'https://placehold.jp/24/003b90/ffffff/180x60.png?text=CCB' },
  { name: '中国农业银行', logo: 'https://placehold.jp/24/009174/ffffff/180x60.png?text=ABC' },
  { name: '交通银行', logo: 'https://placehold.jp/24/003567/ffffff/180x60.png?text=BOCOM' },
  { name: '中信银行', logo: 'https://placehold.jp/24/ed1c24/ffffff/180x60.png?text=CITIC' },
  { name: '中国邮政储蓄银行', logo: 'https://placehold.jp/24/007e3e/ffffff/180x60.png?text=PSBC' }
];
