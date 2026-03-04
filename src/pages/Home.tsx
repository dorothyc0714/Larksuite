import type { Lang } from "../i18n";
import { HeroLarkStyle } from "../sections/Herolarkstyle";
import ReferralBanner from "../sections/Referralbanner";

export default function Home({ lang }: { lang: Lang }) {
  return (
    <main>
      <HeroLarkStyle lang={lang} />

      <ReferralBanner lang={lang} className="mt-10" />
    </main>
  );
}