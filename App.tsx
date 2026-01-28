
import React, { useState, useEffect, useRef } from 'react';
import { 
  AreaChart, Area, ResponsiveContainer
} from 'recharts';
import { CELEBRITIES, NEWS, IMPACT_STATS, PARTNERS, ORGANIZERS, SUPPORTERS } from './constants';
import { Celebrity, NewsItem } from './types';

// --- Props 接口定义 ---
interface RollingNumberProps {
  value: number;
}

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: any;
  type: 'celeb' | 'news';
  isDark: boolean;
}

interface CelebrityCardProps {
  celeb: Celebrity;
  isDark: boolean;
  onClick: () => void;
}

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

interface LeaderboardProps {
  isDark: boolean;
  onCelebClick: (c: Celebrity) => void;
}

// --- 动画数字组件 ---
const RollingNumber = ({ value }: RollingNumberProps) => {
  const [displayValue, setDisplayValue] = useState(value);
  const prevValue = useRef(value);

  useEffect(() => {
    const startValue = prevValue.current;
    const duration = 1500;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(startValue + (value - startValue) * easedProgress);
      setDisplayValue(current);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
    prevValue.current = value;
  }, [value]);

  return <span className="font-mono">{displayValue.toLocaleString()}</span>;
};

// --- 详情弹窗 (支持新闻与大师) ---
const DetailModal = ({ isOpen, onClose, data, type, isDark }: DetailModalProps) => {
  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <div className={`absolute inset-0 ${isDark ? 'bg-black/95' : 'bg-slate-900/40'} backdrop-blur-xl`} onClick={onClose}></div>
      <div className={`relative ${isDark ? 'glass border-white/20' : 'bg-white shadow-2xl border-gray-100'} w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] animate-in fade-in zoom-in duration-300 border`}>
        <div className={`sticky top-0 z-20 flex justify-between items-center p-8 backdrop-blur-md ${isDark ? 'bg-black/40 border-b border-white/5' : 'bg-white/40 border-b border-slate-100'}`}>
           <div className="flex items-center space-x-4">
              <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                {type === 'celeb' ? 'Legend Profile' : 'Intelligence Report'}
              </span>
              <div className={`h-4 w-px ${isDark ? 'bg-white/10' : 'bg-slate-200'}`}></div>
              <span className="text-[10px] font-mono opacity-40">REF: {data.id}</span>
           </div>
           <button onClick={onClose} className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${isDark ? 'glass hover:bg-white/10 text-white' : 'bg-gray-100 hover:bg-gray-200 text-slate-900'}`}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="p-8 md:p-14">
          {type === 'celeb' ? (
            <div className="grid md:grid-cols-5 gap-12">
              <div className="md:col-span-2 text-center md:text-left">
                <div className="relative inline-block mb-10 group">
                  <div className={`absolute -inset-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity ${isDark ? 'bg-blue-500/20 blur-2xl' : 'bg-blue-500/10 blur-xl'}`}></div>
                  <img src={data.avatar} className={`w-64 h-64 rounded-3xl mx-auto md:mx-0 border-4 p-2 relative grayscale hover:grayscale-0 transition-all duration-700 ${isDark ? 'border-blue-500/30' : 'border-blue-500/10'}`} alt={data.name} />
                  <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-6 py-2 rounded-full text-xs font-black tracking-widest shadow-2xl">{data.tag}</div>
                </div>
                <h2 className={`text-5xl font-black mb-4 tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>{data.name}</h2>
                <p className="text-blue-500 font-bold mb-8 tracking-widest text-sm">{data.title}</p>
                <div className={`p-6 rounded-2xl border ${isDark ? 'glass border-white/10' : 'bg-slate-50 border-slate-100'}`}>
                  <div className={`text-[10px] uppercase font-black tracking-widest mb-2 ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>影响力指数</div>
                  <div className={`text-4xl leading-none font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}><RollingNumber value={data.score} /></div>
                </div>
              </div>
              <div className="md:col-span-3 space-y-12">
                <section>
                  <h3 className="text-xs font-black text-blue-500 uppercase tracking-[0.3em] mb-6 flex items-center"><span className="w-8 h-px bg-blue-500 mr-4"></span>投资心法</h3>
                  <blockquote className={`text-3xl font-bold italic leading-tight ${isDark ? 'text-white' : 'text-slate-800'}`}>“{data.philosophy}”</blockquote>
                </section>
                <section>
                  <h3 className="text-xs font-black text-blue-500 uppercase tracking-[0.3em] mb-6 flex items-center"><span className="w-8 h-px bg-blue-500 mr-4"></span>人物背景</h3>
                  <div className={`text-lg leading-relaxed space-y-4 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                    <p className="whitespace-pre-line">{data.fullBio || data.description}</p>
                  </div>
                </section>
                <button className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest rounded-2xl transition-all shadow-xl shadow-blue-600/20 active:scale-95">注入公益价值</button>
              </div>
            </div>
          ) : (
            <div className="space-y-12 max-w-4xl mx-auto">
              <div className="relative h-[480px] w-full rounded-[2.5rem] overflow-hidden group shadow-2xl">
                <img src={data.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2.5s]" alt={data.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                <div className="absolute bottom-12 left-12 right-12">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="bg-blue-600 text-white px-5 py-2 text-[10px] font-black uppercase rounded-full shadow-xl tracking-widest">{data.category}</span>
                    <div className="flex items-center space-x-2 text-white/80 text-xs font-mono bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"><i className="far fa-clock"></i><span>{data.date}</span></div>
                    {data.author && <div className="flex items-center space-x-2 text-white/80 text-xs font-bold bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"><i className="fas fa-pen-nib"></i><span>{data.author}</span></div>}
                  </div>
                  <h2 className="text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter drop-shadow-2xl">{data.title}</h2>
                </div>
              </div>
              <div className="space-y-12 pb-20">
                <div className={`leading-[1.85] text-xl md:text-2xl space-y-10 font-light ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                   {data.fullText ? data.fullText.split('\n').map((p: string, i: number) => (
                     <p key={i} className={p.includes('：') ? 'font-bold text-blue-500/80 border-l-4 border-blue-500 pl-6 my-8' : ''}>{p}</p>
                   )) : <p>{data.content}</p>}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- 大师卡片 ---
const CelebrityCard = ({ celeb, isDark, onClick }: CelebrityCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const rotateX = ((e.clientY - rect.top) - rect.height / 2) / 10;
    const rotateY = (rect.width / 2 - (e.clientX - rect.left)) / 10;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <div ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onClick={onClick} className="group relative cursor-pointer transition-transform duration-200 ease-out h-full">
      <div className={`absolute -inset-1 opacity-0 group-hover:opacity-100 rounded-[2.5rem] blur-xl transition duration-700 ${isDark ? 'bg-blue-500/50' : 'bg-blue-600/10'}`}></div>
      <div className={`relative p-10 rounded-[2.5rem] h-full flex flex-col items-center text-center transition-all duration-500 border ${isDark ? 'glass border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent group-hover:border-blue-500/30' : 'bg-white border-gray-100 shadow-xl group-hover:shadow-2xl'}`}>
        <div className={`w-28 h-28 rounded-3xl overflow-hidden mb-8 border-2 p-2 transition-all shadow-2xl ${isDark ? 'border-white/10 group-hover:border-blue-500/50' : 'border-gray-50 group-hover:border-blue-100'}`}>
          <img src={celeb.avatar} className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700" alt="" />
        </div>
        <h3 className={`text-3xl font-black mb-2 tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>{celeb.name}</h3>
        <p className="text-[10px] text-blue-500 font-black uppercase tracking-[0.3em] mb-6">{celeb.tag}</p>
        <p className={`text-sm italic mb-10 leading-relaxed font-medium ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>"{celeb.philosophy}"</p>
        <div className={`mt-auto w-full pt-6 border-t flex justify-between items-center ${isDark ? 'border-white/5' : 'border-gray-50'}`}>
          <span className={`text-[10px] font-black uppercase ${isDark ? 'text-gray-600' : 'text-slate-300'}`}>影响力积分</span>
          <span className={`text-lg font-black ${isDark ? 'text-white' : 'text-slate-900'}`}><RollingNumber value={celeb.score} /></span>
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ isDark, onToggleTheme }: NavbarProps) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80; // 导航栏高度偏移
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[80] border-b transition-colors duration-500 ${isDark ? 'glass border-white/5' : 'bg-white/80 backdrop-blur-xl border-gray-100'}`}>
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        <a 
          href="#hero" 
          onClick={(e) => scrollToSection(e, 'hero')}
          className="flex items-center space-x-4 group cursor-pointer no-underline"
        >
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center group-hover:rotate-[15deg] transition-all"><i className="fas fa-bolt text-white text-xl"></i></div>
          <div className="hidden sm:block text-left">
            <span className={`text-xl font-black tracking-tighter uppercase block leading-none ${isDark ? 'text-white' : 'text-slate-900'}`}>海南自贸区 <span className="text-blue-500">2026</span></span>
            <span className={`text-[9px] font-black uppercase tracking-[0.2em] ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>数字公益创新大赛</span>
          </div>
        </a>
        <div className={`hidden lg:flex items-center space-x-12 text-[11px] font-black uppercase tracking-[0.25em] ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>
          <a href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className="hover:text-blue-400 transition-colors">大赛概览</a>
          <a href="#leaderboard" onClick={(e) => scrollToSection(e, 'leaderboard')} className="hover:text-blue-400 transition-colors">实时榜单</a>
          <a href="#celebs" onClick={(e) => scrollToSection(e, 'celebs')} className="hover:text-blue-400 transition-colors">大师阵容</a>
          <a href="#news" onClick={(e) => scrollToSection(e, 'news')} className="hover:text-blue-400 transition-colors">赛事动态</a>
        </div>
        <div className="flex items-center space-x-6">
          <button onClick={onToggleTheme} className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isDark ? 'bg-white/5 text-yellow-400' : 'bg-gray-100 text-slate-600'}`}>
            <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 transition-all">立即报名</button>
        </div>
      </div>
    </nav>
  );
};

const Leaderboard = ({ isDark, onCelebClick }: LeaderboardProps) => {
  const [data, setData] = useState([...CELEBRITIES].sort((a, b) => b.score - a.score));
  const [lastUpdate, setLastUpdate] = useState(new Date().toLocaleTimeString());
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsUpdating(true);
      setTimeout(() => setIsUpdating(false), 1000);
      setData(prev => {
        const newData = prev.map(c => {
          if (Math.random() > 0.8) return c;
          const delta = (Math.random() > 0.4 ? 1 : -1) * Math.floor(Math.random() * 80 + 20);
          const newScore = Math.max(1000, c.score + delta);
          return { ...c, score: newScore, change: Number(((delta / c.score) * 100).toFixed(2)) };
        }).sort((a, b) => b.score - a.score);
        return newData;
      });
      setLastUpdate(new Date().toLocaleTimeString());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="leaderboard" className={`py-32 scroll-mt-20 transition-colors duration-500 relative ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className={`text-7xl font-black uppercase italic tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>影响力<span className="text-blue-500">排行榜</span></h2>
            <div className="flex items-center mt-6 space-x-6">
              <p className={`font-mono text-xs uppercase tracking-widest ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>Real-time Consensus Index</p>
              <div className={`flex items-center px-4 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-widest ${isUpdating ? 'border-blue-500/50 bg-blue-500/10 text-blue-500' : 'border-transparent text-transparent'}`}>
                <i className="fas fa-sync-alt animate-spin mr-2"></i> 同步中...
              </div>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className={`px-8 py-4 rounded-3xl border ${isDark ? 'glass border-white/5 bg-white/[0.02]' : 'bg-slate-50 border-slate-100 shadow-sm'}`}>
               <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-1 block">最后更新</span>
               <span className={`text-lg font-mono font-bold leading-none ${isDark ? 'text-white' : 'text-slate-900'}`}>{lastUpdate}</span>
            </div>
          </div>
        </div>
        <div className={`rounded-[3rem] overflow-hidden border transition-all duration-500 ${isDark ? 'glass border-white/10 shadow-2xl' : 'bg-white border-gray-100 shadow-2xl'}`}>
          <div className={`grid grid-cols-12 px-12 py-6 border-b text-[10px] font-black uppercase tracking-[0.3em] ${isDark ? 'bg-white/5 border-white/5 text-gray-500' : 'bg-gray-50 border-gray-100 text-slate-400'}`}>
            <div className="col-span-1">排名</div><div className="col-span-4">选手 / 团队</div><div className="col-span-3">核心头衔</div><div className="col-span-2">分值</div><div className="col-span-2 text-right">动态指数</div>
          </div>
          <div className="max-h-[600px] overflow-y-auto custom-scrollbar">
            {data.map((celeb, idx) => (
              <div key={celeb.id} onClick={() => onCelebClick(celeb)} className={`grid grid-cols-12 items-center px-12 py-9 border-b transition-all group ${isDark ? 'border-white/5 hover:bg-blue-600/[0.08]' : 'border-gray-50 hover:bg-blue-50'} cursor-pointer`}>
                <div className={`col-span-1 font-mono text-4xl font-black ${isDark ? 'text-gray-800' : 'text-gray-100'}`}>{(idx + 1).toString().padStart(2, '0')}</div>
                <div className="col-span-4 flex items-center space-x-6">
                  <img src={celeb.avatar} className="w-14 h-14 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="" />
                  <span className={`font-black text-2xl ${isDark ? 'text-white' : 'text-slate-900'}`}>{celeb.name}</span>
                </div>
                <div className="col-span-3 text-xs font-black uppercase opacity-40">{celeb.title}</div>
                <div className="col-span-2 font-mono font-black text-2xl text-blue-500"><RollingNumber value={celeb.score} /></div>
                <div className="col-span-2 text-right">
                  <span className={`flex items-center justify-end space-x-2 font-mono font-black ${celeb.change >= 0 ? 'text-emerald-500' : 'text-red-500'}`}>
                    <i className={`fas ${celeb.change >= 0 ? 'fa-caret-up' : 'fa-caret-down'}`}></i>
                    <span>{celeb.change >= 0 ? '+' : ''}{celeb.change}%</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const [activeCeleb, setActiveCeleb] = useState<Celebrity | null>(null);
  const [activeNews, setActiveNews] = useState<NewsItem | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // 分页加载新闻
  const NEWS_PER_PAGE = 2;
  const [visibleNewsCount, setVisibleNewsCount] = useState(NEWS_PER_PAGE);

  const handleLoadMore = () => {
    setVisibleNewsCount(prev => Math.min(prev + NEWS_PER_PAGE, NEWS.length));
  };

  return (
    <div className={`min-h-screen pb-16 transition-colors duration-500 ${isDarkMode ? 'bg-[#050505] text-white' : 'bg-[#F9FAFB] text-slate-900'}`}>
      <Navbar isDark={isDarkMode} onToggleTheme={() => setIsDarkMode(!isDarkMode)} />
      
      {/* 英雄区 */}
      <section id="hero" className={`relative pt-44 pb-32 scroll-mt-20 overflow-hidden min-h-screen flex flex-col justify-center ${isDarkMode ? 'bg-cyber-grid' : 'bg-white'}`}>
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
          <div className="z-10">
            <h1 className={`text-8xl md:text-[9rem] font-black mb-10 leading-[0.8] tracking-tighter ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              心系海南<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500">数字向善</span>
            </h1>
            <p className="text-2xl max-w-xl mb-16 font-light opacity-70">以顶级游资“炒股养家”为首的大师阵容已入驻。重塑数字公益边界。</p>
            <button 
              onClick={() => {
                const el = document.getElementById('leaderboard');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block px-16 py-6 bg-blue-600 text-white font-black uppercase tracking-widest rounded-full hover:bg-slate-900 transition-all shadow-2xl active:scale-95"
            >
              立即开启探索
            </button>
          </div>
          <div className={`p-10 rounded-[4rem] border relative overflow-hidden backdrop-blur-3xl transform rotate-1 hover:rotate-0 transition-all duration-700 ${isDarkMode ? 'glass border-white/10' : 'bg-white shadow-2xl'}`}>
             <div className="h-80 w-full mb-8">
               <ResponsiveContainer width="100%" height="100%">
                 <AreaChart data={[ {v: 400}, {v: 850}, {v: 720}, {v: 1100}, {v: 1600} ]}><Area type="monotone" dataKey="v" stroke="#3b82f6" fillOpacity={0.1} fill="#3b82f6" strokeWidth={4} /></AreaChart>
               </ResponsiveContainer>
             </div>
             <div className="grid grid-cols-3 gap-6">
               {IMPACT_STATS.slice(0, 3).map((stat, i) => (
                 <div key={i} className={`p-6 rounded-3xl border ${isDarkMode ? 'glass border-white/5' : 'bg-slate-50 border-slate-100'}`}>
                   <span className="text-[10px] font-black opacity-40 uppercase block mb-2">{stat.label}</span>
                   <span className={`text-xl font-black ${stat.color}`}>{stat.value}</span>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      <Leaderboard isDark={isDarkMode} onCelebClick={setActiveCeleb} />

      <section id="celebs" className="py-32 scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-7xl font-black italic uppercase mb-24">传奇大师阵容</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {CELEBRITIES.slice(0, 8).map(celeb => (
              <CelebrityCard key={celeb.id} celeb={celeb} isDark={isDarkMode} onClick={() => setActiveCeleb(celeb)} />
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-32 scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-7xl font-black italic uppercase mb-24">赛事动态</h2>
          <div className="grid md:grid-cols-2 gap-16">
            {NEWS.slice(0, visibleNewsCount).map(news => (
              <div key={news.id} className={`group relative rounded-[3.5rem] overflow-hidden border transition-all duration-500 ${isDarkMode ? 'glass border-white/5' : 'bg-white border-gray-100 shadow-xl'}`}>
                <div className="flex flex-col xl:flex-row">
                  <div className="xl:w-1/2 h-80 xl:h-auto overflow-hidden"><img src={news.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" /></div>
                  <div className="p-12 xl:w-1/2 flex flex-col">
                    <div className="flex items-center space-x-4 mb-6"><span className="px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black uppercase rounded-full">{news.category}</span><span className="text-xs font-mono opacity-40">{news.date}</span></div>
                    <h3 className="text-3xl font-black mb-6 group-hover:text-blue-500 transition-colors leading-tight">{news.title}</h3>
                    <button onClick={() => setActiveNews(news)} className="self-start text-[10px] font-black uppercase tracking-widest flex items-center space-x-3 py-4 px-8 rounded-2xl bg-blue-500/5 hover:bg-blue-500 hover:text-white transition-all">
                      <span>阅读全文</span> <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {visibleNewsCount < NEWS.length && (
            <div className="flex justify-center mt-20">
              <button 
                onClick={handleLoadMore}
                className="group flex items-center space-x-4 px-12 py-6 bg-blue-600/10 border border-blue-500/30 text-blue-500 rounded-3xl font-black uppercase tracking-[0.2em] text-[11px] hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-2xl active:scale-95"
              >
                <span>加载更多动态</span>
                <i className="fas fa-plus group-hover:rotate-180 transition-transform duration-500"></i>
              </button>
            </div>
          )}
        </div>
      </section>

      <footer className={`pt-32 pb-24 border-t mt-32 transition-colors duration-500 ${isDarkMode ? 'bg-black border-white/5' : 'bg-white border-gray-100'}`}>
        <div className="max-w-[1400px] mx-auto px-6">
          
          {/* 主办单位 */}
          <div className="mb-24">
            <h4 className="text-[12px] font-black uppercase tracking-[0.4em] flex items-center mb-12">
              <span className="w-10 h-1 bg-blue-600 mr-5"></span>
              主办单位 / Organizers
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ORGANIZERS.map((org, idx) => (
                <div key={idx} className={`p-8 rounded-[2rem] border transition-all duration-500 hover:shadow-2xl flex flex-col items-center text-center group ${isDarkMode ? 'glass border-white/10 hover:border-blue-500/30 bg-white/[0.02]' : 'bg-white border-gray-100 hover:border-blue-500/20 shadow-lg'}`}>
                  <img src={org.logo} className="h-16 w-auto mb-6 grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100" alt={org.name} />
                  <h5 className="text-xl font-black mb-2">{org.name}</h5>
                  <p className="text-[10px] uppercase font-black tracking-widest text-blue-500/70">{org.tagline}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 支持单位 */}
          <div className="mb-24">
            <h4 className="text-[12px] font-black uppercase tracking-[0.4em] flex items-center mb-12">
              <span className="w-10 h-1 bg-gray-400 mr-5"></span>
              支持单位 / Supporting Units
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {SUPPORTERS.map((sup, idx) => (
                <div key={idx} className={`p-6 rounded-2xl border flex items-center justify-center transition-all duration-500 group ${isDarkMode ? 'glass border-white/5 bg-white/[0.01] hover:bg-white/[0.05]' : 'bg-slate-50 border-slate-100 hover:bg-white hover:shadow-md'}`}>
                  <img src={sup.logo} className="max-h-10 w-auto grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt={sup.name} />
                </div>
              ))}
            </div>
          </div>

          {/* 战略伙伴 */}
          <div className="mb-32">
             <div className="flex items-center justify-between mb-16">
                <h4 className="text-[11px] font-black uppercase tracking-[0.4em] flex items-center">
                  <span className="w-8 h-px bg-blue-600 mr-4"></span>
                  战略合作伙伴 / Strategic Partners
                </h4>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {PARTNERS.map((partner, idx) => (
                  <div 
                    key={idx} 
                    className={`group relative aspect-[3/1.2] rounded-2xl border flex items-center justify-center p-6 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl ${isDarkMode ? 'glass border-white/5 bg-white/[0.02] hover:bg-white/[0.08] hover:border-blue-500/30' : 'bg-slate-50 border-slate-100 hover:bg-white hover:border-blue-500/20'}`}
                  >
                    <img 
                      src={partner.logo} 
                      className="max-h-12 w-auto grayscale group-hover:grayscale-0 transition-all duration-700 opacity-40 group-hover:opacity-100 group-hover:scale-110" 
                      alt={partner.name} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"></div>
                  </div>
                ))}
             </div>
          </div>

          <div className="grid md:grid-cols-12 gap-20 border-t pt-20 border-white/5">
            <div className="md:col-span-6 space-y-10">
              <div className="flex items-center space-x-5">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center"><i className="fas fa-bolt text-white text-2xl"></i></div>
                <span className={`text-4xl font-black tracking-tighter uppercase ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>海南自贸区 2026</span>
              </div>
              <p className="max-w-lg opacity-60 text-lg">用数字科技重构公益逻辑。我们相信资本的力量与善意的结合。</p>
            </div>
            <div className="md:col-span-6 text-right flex flex-col justify-end space-y-4">
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-blue-500">© 2026 海南自贸区"心系全海南"数字公益创新大赛组委会 版权所有</p>
              <p className="text-[10px] font-mono opacity-40 tracking-widest uppercase">
                琼ICP备2026001234号 | 自贸区政府部门 指导
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* 滚动快讯 */}
      <div className={`fixed bottom-0 left-0 w-full z-[90] border-t overflow-hidden py-3 ${isDarkMode ? 'bg-black/90 backdrop-blur-xl border-white/5 text-blue-400' : 'bg-blue-600 text-white'}`}>
        <div className="flex animate-[ticker_30s_linear_infinite] whitespace-nowrap">
          {[1,2,3].map(i => (
            <div key={i} className="flex items-center space-x-12 px-6">
              {CELEBRITIES.map(c => (
                <span key={c.id} className="text-[10px] font-black uppercase tracking-widest flex items-center"><span className="opacity-60 mr-2">{c.name}:</span><span className="font-mono">{c.score}</span><span className={`ml-2 ${c.change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>{c.change}%</span></span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <DetailModal isOpen={!!activeCeleb} onClose={() => setActiveCeleb(null)} data={activeCeleb} type="celeb" isDark={isDarkMode} />
      <DetailModal isOpen={!!activeNews} onClose={() => setActiveNews(null)} data={activeNews} type="news" isDark={isDarkMode} />

      <style>{`
        @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-33.33%); } }
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(59, 130, 246, 0.2); border-radius: 10px; }
      `}</style>
    </div>
  );
}
