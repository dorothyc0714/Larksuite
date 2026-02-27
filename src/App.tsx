import { useEffect, useMemo, useState } from "react";
import type { Lang } from "./i18n";
import { Home } from "./pages/Home";

function getLangFromHash(): Lang {
  // 支持 #/en 或 #/vn
  const hash = window.location.hash || "";
  const seg = hash.replace("#", "").split("/")[1];
  return seg === "vn" ? "vn" : "en";
}

function setLangToHash(lang: Lang) {
  const newHash = `#/${lang}`;
  if (window.location.hash !== newHash) {
    window.location.hash = newHash;
  }
}

export default function App() {
  const [lang, setLang] = useState<Lang>(() => getLangFromHash());

  // 监听地址栏变化（手动改 hash / 前进后退）
  useEffect(() => {
    const onHashChange = () => setLang(getLangFromHash());
    window.addEventListener("hashchange", onHashChange);

    // 如果首次没有 hash，默认补上
    if (!window.location.hash) setLangToHash(lang);

    return () => window.removeEventListener("hashchange", onHashChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const langLabel = useMemo(() => (lang === "vn" ? "Tiếng Việt" : "English"), [lang]);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="sticky top-0 z-10 border-b border-neutral-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="text-sm font-semibold">Marketing Site</div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-neutral-500">{langLabel}</span>
            <select
              className="rounded-md border border-neutral-300 px-3 py-1.5 text-sm"
              value={lang}
              onChange={(e) => setLangToHash(e.target.value as Lang)}
            >
              <option value="en">English</option>
              <option value="vn">Tiếng Việt</option>
            </select>
          </div>
        </div>
      </header>

      <Home lang={lang} />
    </div>
  );
}