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
              {/* 中间大卡片 */}
              <div className="mx-auto w-full max-w-3xl rounded-2xl border border-neutral-200 bg-white shadow-xl shadow-black/5">
                <div className="p-5">
                  <div className="mb-4 h-4 w-40 rounded bg-neutral-100" />
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-5 space-y-3">
                      <div className="h-9 rounded-lg bg-neutral-100" />
                      <div className="h-9 rounded-lg bg-neutral-100" />
                      <div className="h-24 rounded-xl bg-neutral-100" />
                    </div>
                    <div className="col-span-7 rounded-xl bg-neutral-100" />
                  </div>
                </div>
              </div>
  
              {/* 左边小卡片 */}
              <div className="absolute -left-2 top-20 hidden w-64 rounded-2xl border border-neutral-200 bg-white shadow-lg shadow-black/5 lg:block">
                <div className="p-4">
                  <div className="mb-3 h-4 w-36 rounded bg-neutral-100" />
                  <div className="h-28 rounded-xl bg-neutral-100" />
                </div>
              </div>
  
              {/* 右边两张堆叠卡 */}
              <div className="absolute -right-2 top-16 hidden w-64 space-y-4 lg:block">
                <div className="rounded-2xl border border-neutral-200 bg-white shadow-lg shadow-black/5">
                  <div className="p-4">
                    <div className="mb-3 h-4 w-32 rounded bg-neutral-100" />
                    <div className="h-24 rounded-xl bg-neutral-100" />
                  </div>
                </div>
                <div className="rounded-2xl border border-neutral-200 bg-white shadow-lg shadow-black/5">
                  <div className="p-4">
                    <div className="mb-3 h-4 w-40 rounded bg-neutral-100" />
                    <div className="h-20 rounded-xl bg-neutral-100" />
                  </div>
                </div>
              </div>
            </div>
  
            {/* 手机端：把左右卡片变成下方两列 */}
            <div className="mt-6 grid gap-4 lg:hidden sm:grid-cols-2">
              <div className="rounded-2xl border border-neutral-200 bg-white shadow-lg shadow-black/5">
                <div className="p-4">
                  <div className="mb-3 h-4 w-36 rounded bg-neutral-100" />
                  <div className="h-28 rounded-xl bg-neutral-100" />
                </div>
              </div>
              <div className="rounded-2xl border border-neutral-200 bg-white shadow-lg shadow-black/5">
                <div className="p-4">
                  <div className="mb-3 h-4 w-40 rounded bg-neutral-100" />
                  <div className="h-28 rounded-xl bg-neutral-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }