import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const CAPERCAILLIE_IMG = "https://cdn.poehali.dev/projects/bb91e9c5-fdc0-4b01-981d-5d380a853a1c/files/41c013a5-920c-4039-b3e9-269a342ee3d8.jpg";
const HAZEL_IMG = "https://cdn.poehali.dev/projects/bb91e9c5-fdc0-4b01-981d-5d380a853a1c/files/e30eb1e8-e63f-4278-86d5-6685a7c6b960.jpg";
const BLACKGROUSE_IMG = "https://cdn.poehali.dev/projects/bb91e9c5-fdc0-4b01-981d-5d380a853a1c/files/ff861a90-9a20-4b6e-8ad6-3b26062f9f8c.jpg";

const birds = [
  {
    id: 0,
    name: "Глухарь",
    latin: "Tetrao urogallus",
    emoji: "🦚",
    color: "#1b4332",
    accent: "#40916c",
    light: "#d8f3dc",
    img: CAPERCAILLIE_IMG,
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
      "Токование — уникальный брачный ритуал",
      "Во время тока глохнет — отсюда и название",
      "Занесён в региональные Красные книги",
    ],
  },
  {
    id: 1,
    name: "Рябчик",
    latin: "Tetrastes bonasia",
    emoji: "🐦",
    color: "#7b4f00",
    accent: "#c77d27",
    light: "#fff3cd",
    img: HAZEL_IMG,
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
      "Пара держится вместе весь год",
      "Зимой зарывается в снег для тепла",
    ],
  },
  {
    id: 2,
    name: "Тетерев",
    latin: "Lyrurus tetrix",
    emoji: "🖤",
    color: "#1a1a2e",
    accent: "#4361ee",
    light: "#dce3ff",
    img: BLACKGROUSE_IMG,
    description: "Птица с эффектным чёрным оперением и лировидным хвостом",
    facts: [
      { icon: "Ruler", label: "Длина тела", value: "до 65 см" },
      { icon: "Weight", label: "Масса", value: "до 1,8 кг" },
      { icon: "Trees", label: "Среда обитания", value: "Опушки и поляны" },
      { icon: "Leaf", label: "Питание", value: "Почки, ягоды" },
      { icon: "Heart", label: "Ток", value: "Март–май" },
      { icon: "Globe", label: "Ареал", value: "Лесная зона РФ" },
    ],
    features: [
      "Хвост самца имеет форму лиры",
      "Токует на рассвете громкими бульканьями",
      "Стаи зимой ночуют под снегом",
    ],
  },
];

function useInView(ref: React.RefObject<Element>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return inView;
}

function BirdSection({ bird, index }: { bird: typeof birds[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>);
  const isEven = index % 2 === 0;

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center py-20 px-4 relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${bird.light} 0%, #ffffff 55%, ${bird.light}88 100%)` }}
    >
      <div
        className="absolute rounded-full opacity-10 pointer-events-none"
        style={{
          width: "700px", height: "700px",
          background: bird.accent,
          top: "-150px",
          right: isEven ? "-250px" : "auto",
          left: isEven ? "auto" : "-250px",
        }}
      />

      <div className="max-w-6xl mx-auto w-full">
        <div
          className="text-center mb-14 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(-30px)", transitionDelay: "0ms" }}
        >
          <div
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full text-sm mb-5"
            style={{ background: bird.accent + "22", color: bird.color }}
          >
            <span className="text-xl">{bird.emoji}</span>
            <span className="font-cormorant italic text-base">{bird.latin}</span>
          </div>
          <h2
            className="font-cormorant font-bold leading-tight mb-3"
            style={{ fontSize: "clamp(3rem, 7vw, 5rem)", color: bird.color }}
          >
            {bird.name}
          </h2>
          <p className="font-golos text-xl text-gray-500 max-w-lg mx-auto">{bird.description}</p>
        </div>

        <div className={`grid md:grid-cols-2 gap-12 items-center ${isEven ? "" : "md:[direction:rtl]"}`}>
          <div
            className="transition-all duration-700"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : `translateX(${isEven ? "-50px" : "50px"})`,
              transitionDelay: "150ms",
              direction: "ltr",
            }}
          >
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"
              style={{ border: `4px solid ${bird.accent}44` }}
            >
              <img src={bird.img} alt={bird.name} className="w-full h-full object-cover" />
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(to top, ${bird.color}cc 0%, transparent 55%)` }}
              />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="font-golos font-semibold text-white text-sm">📍 В природной среде обитания</span>
              </div>
            </div>
          </div>

          <div
            className="transition-all duration-700"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : `translateX(${isEven ? "50px" : "-50px"})`,
              transitionDelay: "280ms",
              direction: "ltr",
            }}
          >
            <div className="grid grid-cols-2 gap-3 mb-5">
              {bird.facts.map((fact, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-4 flex flex-col gap-1 transition-transform hover:scale-105 cursor-default bg-white"
                  style={{ boxShadow: `0 4px 20px ${bird.accent}25`, border: `1px solid ${bird.accent}33` }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: bird.accent + "22" }}
                    >
                      <Icon name={fact.icon as "Ruler"} size={16} style={{ color: bird.accent }} />
                    </div>
                    <span className="font-golos text-xs text-gray-400 uppercase tracking-wide leading-tight">{fact.label}</span>
                  </div>
                  <span className="font-golos font-semibold text-gray-800 text-sm">{fact.value}</span>
                </div>
              ))}
            </div>

            <div
              className="rounded-2xl p-5"
              style={{ background: bird.color, boxShadow: `0 10px 40px ${bird.color}55` }}
            >
              <p className="font-golos font-semibold text-sm uppercase tracking-widest mb-3 opacity-60" style={{ color: "white" }}>
                Интересные факты
              </p>
              <ul className="space-y-2">
                {bird.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 font-golos text-sm leading-relaxed" style={{ color: "white" }}>
                    <span className="opacity-60 mt-0.5 flex-shrink-0">✦</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Index() {
  return (
    <div className="font-golos bg-white">
      {/* Hero */}
      <header
        className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden px-4"
        style={{ background: "linear-gradient(160deg, #081c15 0%, #1b4332 45%, #2d6a4f 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, #52b78855 0%, transparent 50%), radial-gradient(circle at 80% 70%, #40916c55 0%, transparent 50%)",
          }}
        />

        <div className="relative z-10" style={{ animation: "fadeInUp 0.8s ease both" }}>
          <div className="text-6xl mb-6" style={{ animation: "fadeInUp 0.6s ease both" }}>🌲</div>

          <p
            className="font-cormorant italic text-green-300 text-xl mb-4 tracking-widest"
            style={{ animation: "fadeInUp 0.7s 0.1s ease both" }}
          >
            Биология · Отряд Курообразные
          </p>

          <h1
            className="font-cormorant font-bold text-white leading-[1.1] mb-6"
            style={{ fontSize: "clamp(2.8rem, 9vw, 6rem)", animation: "fadeInUp 0.7s 0.2s ease both" }}
          >
            Лесные куриные<br />
            <span style={{ color: "#74c69d" }}>птицы России</span>
          </h1>

          <p
            className="font-golos text-green-200 text-lg max-w-lg mx-auto mb-10 leading-relaxed"
            style={{ animation: "fadeInUp 0.7s 0.3s ease both" }}
          >
            Три вида — три судьбы в бескрайнем российском лесу.
            Узнай всё об их жизни, повадках и особенностях.
          </p>

          <div
            className="flex gap-3 justify-center flex-wrap"
            style={{ animation: "fadeInUp 0.7s 0.4s ease both" }}
          >
            {birds.map((b, i) => (
              <a
                key={i}
                href={`#bird-${i}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(`#bird-${i}`)?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-2 px-6 py-3 rounded-full font-golos font-semibold text-sm transition-all hover:scale-105 hover:bg-white hover:text-gray-900"
                style={{
                  background: "#ffffff18",
                  color: "white",
                  border: "1px solid #ffffff35",
                  backdropFilter: "blur(8px)",
                }}
              >
                <span>{b.emoji}</span> {b.name}
              </a>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8" style={{ color: "#74c69d", animation: "bounce 1.5s infinite" }}>
          <Icon name="ChevronDown" size={30} />
        </div>
      </header>

      {/* Bird sections */}
      {birds.map((bird, i) => (
        <div key={i} id={`bird-${i}`}>
          <BirdSection bird={bird} index={i} />
        </div>
      ))}

      {/* Footer */}
      <footer className="py-24 px-4 text-center" style={{ background: "#081c15" }}>
        <p className="font-cormorant italic text-green-400 text-lg mb-3 tracking-wide">Сохраним природу вместе</p>
        <h3 className="font-cormorant font-bold text-white text-5xl mb-10">Они нуждаются в защите</h3>
        <div className="flex justify-center gap-5 flex-wrap max-w-xl mx-auto mb-12">
          {[
            { icon: "Shield", text: "Охраняемые виды", desc: "Часть видов в Красной книге" },
            { icon: "TreePine", text: "Лесные экосистемы", desc: "Зависят от здоровья леса" },
            { icon: "BookOpen", text: "Изучение природы", desc: "Основа биологии" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-3 px-7 py-6 rounded-2xl flex-1 min-w-[160px]"
              style={{ background: "#ffffff0d", border: "1px solid #ffffff15" }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: "#2d6a4f" }}
              >
                <Icon name={item.icon as "Shield"} size={22} className="text-green-300" />
              </div>
              <div>
                <p className="font-golos font-semibold text-green-200 text-sm">{item.text}</p>
                <p className="font-golos text-green-600 text-xs mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="font-golos text-green-700 text-sm">
          Образовательный проект · Биология · {new Date().getFullYear()}
        </p>
      </footer>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
      `}</style>
    </div>
  );
}
