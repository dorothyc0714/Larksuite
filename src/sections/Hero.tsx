import type { Lang } from "../i18n";
import { t } from "../i18n";

type HeroProps = {
  lang: Lang;
};

export function Hero({ lang }: HeroProps) {
  return (
    <section className="px-6">
      <div className="mx-auto max-w-6xl py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Text */}
          <div>
          <h1 className="max-w-2xl text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {t(lang, "hero.title")}
        </h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-neutral-600 sm:text-lg">
              {t(lang, "hero.subtitle")}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center rounded-lg bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
              >
                {t(lang, "hero.ctaPrimary")}
              </a>
              <a
                href="#sales"
                className="inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
              >
                {t(lang, "hero.ctaSecondary")}
              </a>
              <span className="text-sm text-neutral-500 sm:ml-2">
                {t(lang, "hero.note")}
              </span>
            </div>
          </div>

          {/* Visual */}
            <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
                {/* Top bar (fake browser chrome) */}
                <div className="flex items-center gap-2 border-b border-neutral-200 bg-neutral-50 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
                <div className="ml-3 h-6 flex-1 rounded-md bg-white/80" />
                </div>

                {/* Content area (replace later with real screenshot/video) */}
                <div className="aspect-[16/10] bg-gradient-to-br from-neutral-50 to-neutral-100 p-6">
                <div className="grid h-full grid-cols-12 gap-4">
                    <div className="col-span-4 space-y-3">
                    <div className="h-8 rounded-lg bg-white/90" />
                    <div className="h-8 rounded-lg bg-white/80" />
                    <div className="h-8 rounded-lg bg-white/70" />
                    <div className="h-24 rounded-xl bg-white/70" />
                    </div>
                    <div className="col-span-8 rounded-2xl bg-white/80" />
                </div>
                </div>
            </div>

            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
            </div>
        </div>
      </div>
    </section>
  );
}