import type { Lang } from "../i18n";
import { t } from "../i18n";

export function HeroLarkStyle({ lang }: { lang: Lang }) {
  return (
    <section className="relative overflow-hidden">
      {/* 背景淡蓝（接近图里的感觉） */}
      <div className="absolute inset-0 -z-10 bg-[#F2F7FF]" />

      <div className="mx-auto max-w-6xl px-6 pb-16 pt-14 sm:pt-16 lg:pt-20">
        {/* Headline */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            {t(lang, "hero2.titlePrefix")}{" "}
            <span className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent">
              {t(lang, "hero2.titleHighlight")}
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-neutral-600 sm:text-lg">
            {t(lang, "hero2.subtitle")}
          </p>

          {/* Trust row */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-neutral-600">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-neutral-200 text-[10px]">
                
              </span>
              <span>{t(lang, "hero2.trust1Label")}</span>
              <span className="text-yellow-500">★★★★★</span>
              <span className="text-neutral-700">
                {t(lang, "hero2.trust1Rating")}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-neutral-200 text-[10px]">
                ✓
              </span>
              <span>{t(lang, "hero2.trust2Label")}</span>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 flex justify-center">
            <a
              href="#demo"
              className="group inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-blue-600 to-sky-400 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/20 hover:opacity-95"
            >
              {t(lang, "hero2.cta")}
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-blue-600 transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </a>
          </div>
        </div>

        {/* Collage */}
        <div className="mx-auto mt-14 max-w-5xl">
          <div className="relative">
          <img
            src={`${import.meta.env.BASE_URL}images/hero-project-dashboard@2x.png`}
            alt="Project dashboard preview"
            className="hero-image"
          />

          </div>

          
        </div>
      </div>
    </section>
  );
}