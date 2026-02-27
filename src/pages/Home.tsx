import type { Lang } from "../i18n";
import { HeroLarkStyle } from "../sections/Herolarkstyle";

export function Home({ lang }: { lang: Lang }) {
  return <HeroLarkStyle lang={lang} />;
}