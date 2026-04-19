import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";

const CAPERCAILLIE_IMG = "https://cdn.poehali.dev/projects/bb91e9c5-fdc0-4b01-981d-5d380a853a1c/files/41c013a5-920c-4039-b3e9-269a342ee3d8.jpg";
const HAZEL_IMG = "https://cdn.poehali.dev/projects/bb91e9c5-fdc0-4b01-981d-5d380a853a1c/files/e30eb1e8-e63f-4278-86d5-6685a7c6b960.jpg";
const BLACKGROUSE_IMG = "https://cdn.poehali.dev/projects/bb91e9c5-fdc0-4b01-981d-5d380a853a1c/files/ff861a90-9a20-4b6e-8ad6-3b26062f9f8c.jpg";

// ─── Слайд 1: Титульный ──────────────────────────────────────────────────────
function Slide1() {
  return (
    <div className="slide-content flex flex-col items-center justify-center h-full text-center px-8 relative overflow-hidden">
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at 30% 40%, #1b432244 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, #2d6a4f33 0%, transparent 60%)"
      }} />
      <div className="relative z-10">
        <div className="text-7xl mb-6" style={{ animation: "slideUp 0.6s 0.1s both" }}>🌲</div>
        <p className="font-cormorant italic text-green-300 text-xl tracking-[0.3em] mb-4" style={{ animation: "slideUp 0.6s 0.2s both" }}>
          Биология · 7 класс · Отряд Курообразные
        </p>
        <h1
          className="font-cormorant font-bold text-white leading-[1.05] mb-6"
          style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)", animation: "slideUp 0.6s 0.3s both" }}
        >
          Лесные куриные<br />
          <span style={{ color: "#74c69d" }}>птицы России</span>
        </h1>
        <p className="font-golos text-green-200 text-lg max-w-lg mx-auto leading-relaxed mb-10" style={{ animation: "slideUp 0.6s 0.4s both" }}>
          Семейство Фазановые · Три вида лесных тетеревиных птиц,
          населяющих бескрайние леса нашей страны
        </p>
        <div className="flex gap-4 justify-center flex-wrap" style={{ animation: "slideUp 0.6s 0.5s both" }}>
          {["🦚 Глухарь", "🐦 Рябчик", "🖤 Тетерев"].map((b) => (
            <span key={b} className="px-5 py-2 rounded-full font-golos text-sm text-green-200"
              style={{ background: "#ffffff10", border: "1px solid #ffffff25" }}>
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Слайд 2: Классификация ───────────────────────────────────────────────────
function Slide2() {
  const levels = [
    { rank: "Тип", value: "Хордовые", icon: "Dna" },
    { rank: "Класс", value: "Птицы", icon: "Bird" },
    { rank: "Отряд", value: "Курообразные", icon: "Layers" },
    { rank: "Семейство", value: "Фазановые", icon: "TreePine" },
    { rank: "Виды", value: "Глухарь · Рябчик · Тетерев", icon: "Feather" },
  ];
  return (
    <div className="slide-content flex flex-col items-center justify-center h-full px-8 relative overflow-hidden">
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <p className="font-cormorant italic text-green-300 text-lg tracking-widest text-center mb-3" style={{ animation: "slideUp 0.5s 0.1s both" }}>
          Систематика
        </p>
        <h2 className="font-cormorant font-bold text-white text-center mb-12"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", animation: "slideUp 0.5s 0.15s both" }}>
          Место в системе живой природы
        </h2>
        <div className="flex flex-col gap-3">
          {levels.map((l, i) => (
            <div key={i} className="flex items-center gap-5 rounded-2xl px-6 py-4 transition-transform hover:scale-[1.01]"
              style={{
                background: `rgba(255,255,255,${0.04 + i * 0.025})`,
                border: "1px solid rgba(255,255,255,0.1)",
                animation: `slideUp 0.5s ${0.2 + i * 0.1}s both`
              }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "#40916c33", border: "1px solid #40916c55" }}>
                <Icon name={l.icon as "Dna"} size={18} className="text-green-400" />
              </div>
              <span className="font-golos text-green-400 text-sm w-28 flex-shrink-0 uppercase tracking-widest">{l.rank}</span>
              <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, #40916c44, transparent)" }} />
              <span className="font-cormorant font-semibold text-white text-xl">{l.value}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 p-5 rounded-2xl text-center" style={{ background: "rgba(116,198,157,0.1)", border: "1px solid rgba(116,198,157,0.2)", animation: "slideUp 0.5s 0.75s both" }}>
          <p className="font-golos text-green-200 text-sm leading-relaxed">
            Все три вида — оседлые птицы России. Ведут преимущественно наземный образ жизни,
            хорошо приспособлены к суровому зимнему климату.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Слайд 3–5: Птица ─────────────────────────────────────────────────────────
function SlideBird({ bird }: {
  bird: {
    name: string; latin: string; emoji: string; color: string; accent: string;
    img: string; description: string;
    facts: { icon: string; label: string; value: string }[];
    features: string[];
  }
}) {
  return (
    <div className="slide-content flex items-center h-full px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 80% 50%, ${bird.accent}18 0%, transparent 60%)` }} />
      <div className="relative z-10 w-full max-w-6xl mx-auto grid md:grid-cols-[1fr_1.1fr] gap-10 items-center">
        {/* Photo column */}
        <div style={{ animation: "slideUp 0.5s 0.1s both" }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 text-sm"
            style={{ background: bird.accent + "22", color: bird.accent, border: `1px solid ${bird.accent}44` }}>
            <span>{bird.emoji}</span>
            <span className="font-cormorant italic">{bird.latin}</span>
          </div>
          <h2 className="font-cormorant font-bold text-white mb-2" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
            {bird.name}
          </h2>
          <p className="font-golos text-green-200 text-base mb-6 opacity-80">{bird.description}</p>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]"
            style={{ border: `3px solid ${bird.accent}44` }}>
            <img src={bird.img} alt={bird.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${bird.color}ee 0%, transparent 50%)` }} />
            <span className="absolute bottom-4 left-4 font-golos text-xs text-white opacity-70">📍 Природная среда обитания</span>
          </div>
        </div>
        {/* Facts column */}
        <div style={{ animation: "slideUp 0.5s 0.25s both" }}>
          <div className="grid grid-cols-2 gap-2.5 mb-5">
            {bird.facts.map((f, i) => (
              <div key={i} className="rounded-xl p-3.5 bg-white/5 hover:bg-white/10 transition-colors"
                style={{ border: `1px solid ${bird.accent}33` }}>
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: bird.accent + "25" }}>
                    <Icon name={f.icon as "Ruler"} size={14} style={{ color: bird.accent }} />
                  </div>
                  <span className="font-golos text-[10px] uppercase tracking-wider text-green-400 opacity-80">{f.label}</span>
                </div>
                <span className="font-golos font-semibold text-white text-sm">{f.value}</span>
              </div>
            ))}
          </div>
          <div className="rounded-2xl p-5" style={{ background: `${bird.accent}20`, border: `1px solid ${bird.accent}40` }}>
            <p className="font-golos text-[10px] uppercase tracking-[0.2em] text-green-400 mb-3">Особенности</p>
            <ul className="space-y-2.5">
              {bird.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 font-golos text-sm text-green-100 leading-relaxed">
                  <span style={{ color: bird.accent }} className="flex-shrink-0 mt-0.5">✦</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Слайд 6: Сравнение ───────────────────────────────────────────────────────
function Slide6() {
  const rows = [
    { param: "Длина тела", cap: "до 110 см", hazel: "до 38 см", black: "до 65 см" },
    { param: "Масса", cap: "до 6,5 кг", hazel: "до 500 г", black: "до 1,8 кг" },
    { param: "Среда обитания", cap: "Хвойные леса", hazel: "Смешанные леса", black: "Опушки, поляны" },
    { param: "Питание", cap: "Хвоя, ягоды", hazel: "Серёжки, почки", black: "Почки, ягоды" },
    { param: "Ток", cap: "Апрель–май", hazel: "—", black: "Март–май" },
    { param: "Моногамия", cap: "Нет", hazel: "Да", black: "Нет" },
  ];
  return (
    <div className="slide-content flex flex-col items-center justify-center h-full px-6 md:px-12 relative overflow-hidden">
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <p className="font-cormorant italic text-green-300 text-lg tracking-widest text-center mb-2" style={{ animation: "slideUp 0.5s 0.1s both" }}>
          Сравнительный анализ
        </p>
        <h2 className="font-cormorant font-bold text-white text-center mb-8"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", animation: "slideUp 0.5s 0.15s both" }}>
          Три вида — сравнительная таблица
        </h2>
        <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.1)", animation: "slideUp 0.5s 0.2s both" }}>
          {/* Header */}
          <div className="grid grid-cols-4 px-5 py-3" style={{ background: "rgba(64,145,108,0.25)" }}>
            <span className="font-golos text-xs uppercase tracking-widest text-green-400">Показатель</span>
            {["🦚 Глухарь", "🐦 Рябчик", "🖤 Тетерев"].map((h) => (
              <span key={h} className="font-golos text-xs uppercase tracking-widest text-green-400 text-center">{h}</span>
            ))}
          </div>
          {rows.map((row, i) => (
            <div key={i} className="grid grid-cols-4 px-5 py-3.5"
              style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.06)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <span className="font-golos text-sm text-green-300 font-medium">{row.param}</span>
              <span className="font-golos text-sm text-white text-center">{row.cap}</span>
              <span className="font-golos text-sm text-white text-center">{row.hazel}</span>
              <span className="font-golos text-sm text-white text-center">{row.black}</span>
            </div>
          ))}
        </div>
        <p className="font-golos text-green-500 text-xs text-center mt-4" style={{ animation: "slideUp 0.5s 0.5s both" }}>
          Данные приведены для самцов вида
        </p>
      </div>
    </div>
  );
}

// ─── Слайд 7: Охрана и выводы ─────────────────────────────────────────────────
function Slide7() {
  const points = [
    { icon: "AlertTriangle", title: "Угрозы", text: "Вырубка лесов, браконьерство, беспокойство в период токования" },
    { icon: "Shield", title: "Охрана", text: "Включены в региональные Красные книги, охота ограничена" },
    { icon: "TreePine", title: "Среда", text: "Зависят от состояния лесных экосистем и их биоразнообразия" },
    { icon: "BookOpen", title: "Значение", text: "Индикаторы здоровья леса и объекты охотничьего хозяйства" },
  ];
  return (
    <div className="slide-content flex flex-col items-center justify-center h-full px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at 50% 80%, #1b432266 0%, transparent 60%)"
      }} />
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        <p className="font-cormorant italic text-green-300 text-lg tracking-widest mb-3" style={{ animation: "slideUp 0.5s 0.1s both" }}>
          Охрана природы
        </p>
        <h2 className="font-cormorant font-bold text-white mb-3"
          style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", animation: "slideUp 0.5s 0.15s both" }}>
          Они нуждаются в защите
        </h2>
        <p className="font-golos text-green-200 text-base mb-10 max-w-xl mx-auto" style={{ animation: "slideUp 0.5s 0.2s both" }}>
          Численность лесных куриных птиц снижается. Главная причина — разрушение мест обитания.
        </p>
        <div className="grid grid-cols-2 gap-4 mb-10">
          {points.map((p, i) => (
            <div key={i} className="rounded-2xl p-5 text-left"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                animation: `slideUp 0.5s ${0.25 + i * 0.1}s both`
              }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#40916c33" }}>
                  <Icon name={p.icon as "Shield"} size={18} className="text-green-400" />
                </div>
                <span className="font-golos font-semibold text-white text-sm">{p.title}</span>
              </div>
              <p className="font-golos text-green-300 text-sm leading-relaxed opacity-85">{p.text}</p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl py-5 px-8 inline-block"
          style={{ background: "rgba(116,198,157,0.15)", border: "1px solid rgba(116,198,157,0.3)", animation: "slideUp 0.5s 0.65s both" }}>
          <p className="font-cormorant italic text-green-200 text-xl">
            «Сохранить лес — значит сохранить птицу»
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Данные птиц ──────────────────────────────────────────────────────────────
const birds = [
  {
    name: "Глухарь", latin: "Tetrao urogallus", emoji: "🦚",
    color: "#0d2b1a", accent: "#40916c", img: CAPERCAILLIE_IMG,
    description: "Самая крупная лесная куриная птица России",
    facts: [
      { icon: "Ruler", label: "Длина тела", value: "до 110 см" },
      { icon: "Weight", label: "Масса", value: "до 6,5 кг" },
      { icon: "Trees", label: "Среда обитания", value: "Хвойные леса" },
      { icon: "Leaf", label: "Питание", value: "Хвоя, ягоды" },
      { icon: "Heart", label: "Ток", value: "Апрель–май" },
      { icon: "Globe", label: "Ареал", value: "Вся Россия" },
    ],
    features: [
      "Токование — уникальный брачный ритуал самца",
      "Во время тока глохнет — отсюда название",
      "Занесён в региональные Красные книги",
    ],
  },
  {
    name: "Рябчик", latin: "Tetrastes bonasia", emoji: "🐦",
    color: "#2b1a00", accent: "#c77d27", img: HAZEL_IMG,
    description: "Небольшая скрытная птица смешанных лесов",
    facts: [
      { icon: "Ruler", label: "Длина тела", value: "до 38 см" },
      { icon: "Weight", label: "Масса", value: "до 500 г" },
      { icon: "Trees", label: "Среда обитания", value: "Смешанные леса" },
      { icon: "Leaf", label: "Питание", value: "Серёжки, почки" },
      { icon: "Heart", label: "Пары", value: "Моногамные" },
      { icon: "Globe", label: "Ареал", value: "Евразия" },
    ],
    features: [
      "Мастер маскировки — почти незаметен в лесу",
      "Пара держится вместе в течение всего года",
      "Зимой зарывается в снег для сохранения тепла",
    ],
  },
  {
    name: "Тетерев", latin: "Lyrurus tetrix", emoji: "🖤",
    color: "#0d0d20", accent: "#4361ee", img: BLACKGROUSE_IMG,
    description: "Птица с эффектным оперением и лировидным хвостом",
    facts: [
      { icon: "Ruler", label: "Длина тела", value: "до 65 см" },
      { icon: "Weight", label: "Масса", value: "до 1,8 кг" },
      { icon: "Trees", label: "Среда обитания", value: "Опушки и поляны" },
      { icon: "Leaf", label: "Питание", value: "Почки, ягоды" },
      { icon: "Heart", label: "Ток", value: "Март–май" },
      { icon: "Globe", label: "Ареал", value: "Лесная зона РФ" },
    ],
    features: [
      "Хвост самца имеет характерную форму лиры",
      "Токует на рассвете громкими бульканьями",
      "Стаи зимой ночуют под снегом",
    ],
  },
];

// ─── Слайды ────────────────────────────────────────────────────────────────────
const SLIDE_LABELS = [
  "Введение", "Классификация", "Глухарь", "Рябчик", "Тетерев", "Сравнение", "Охрана"
];

const TOTAL = 7;

export default function Index() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState<"next" | "prev">("next");
  const [animating, setAnimating] = useState(false);

  const go = useCallback((to: number) => {
    if (animating || to === current || to < 0 || to >= TOTAL) return;
    setDir(to > current ? "next" : "prev");
    setAnimating(true);
    setTimeout(() => {
      setCurrent(to);
      setAnimating(false);
    }, 350);
  }, [animating, current]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") go(current + 1);
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") go(current - 1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current, go]);

  const renderSlide = (idx: number) => {
    if (idx === 0) return <Slide1 />;
    if (idx === 1) return <Slide2 />;
    if (idx === 2) return <SlideBird bird={birds[0]} />;
    if (idx === 3) return <SlideBird bird={birds[1]} />;
    if (idx === 4) return <SlideBird bird={birds[2]} />;
    if (idx === 5) return <Slide6 />;
    return <Slide7 />;
  };

  return (
    <div className="font-golos h-screen overflow-hidden relative select-none"
      style={{ background: "#071a0e" }}>

      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{ backgroundImage: "radial-gradient(circle at 15% 85%, #1b4332 0%, transparent 45%), radial-gradient(circle at 85% 15%, #2d6a4f 0%, transparent 40%)" }} />

      {/* Slide area */}
      <div key={current}
        className={`absolute inset-0 transition-none ${animating ? "opacity-0" : "opacity-100"}`}
        style={{ transition: animating ? "none" : "opacity 0.35s ease", transform: animating ? `translateX(${dir === "next" ? "30px" : "-30px"})` : "translateX(0)" }}>
        {renderSlide(current)}
      </div>

      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-5 z-30"
        style={{ background: "linear-gradient(to bottom, rgba(7,26,14,0.95) 0%, transparent 100%)" }}>
        <div className="flex items-center gap-2">
          <span className="text-green-500 text-lg">🌲</span>
          <span className="font-cormorant italic text-green-300 text-sm tracking-widest">Лесные куриные птицы</span>
        </div>
        <span className="font-golos text-green-500 text-sm">
          <span className="text-green-200 font-semibold">{current + 1}</span> / {TOTAL}
        </span>
      </div>

      {/* Slide dots / progress */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30">
        {Array.from({ length: TOTAL }).map((_, i) => (
          <button key={i} onClick={() => go(i)}
            className="transition-all duration-300 rounded-full"
            style={{
              width: i === current ? "32px" : "8px",
              height: "8px",
              background: i === current ? "#74c69d" : "#40916c55",
            }}
            title={SLIDE_LABELS[i]}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      {current > 0 && (
        <button onClick={() => go(current - 1)}
          className="absolute left-5 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}>
          <Icon name="ChevronLeft" size={22} className="text-white" />
        </button>
      )}
      {current < TOTAL - 1 && (
        <button onClick={() => go(current + 1)}
          className="absolute right-5 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}>
          <Icon name="ChevronRight" size={22} className="text-white" />
        </button>
      )}

      {/* Label bottom right */}
      <div className="absolute bottom-8 right-8 z-30">
        <span className="font-golos text-xs uppercase tracking-widest text-green-600">
          {SLIDE_LABELS[current]}
        </span>
      </div>

      {/* Keyboard hint */}
      {current === 0 && (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 font-golos text-xs text-green-600"
          style={{ animation: "slideUp 0.5s 1s both" }}>
          <Icon name="Keyboard" size={14} />
          <span>← → для навигации</span>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .slide-content {
          height: 100vh;
          padding-top: 72px;
          padding-bottom: 72px;
        }
      `}</style>
    </div>
  );
}
