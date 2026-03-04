import { Navigate, Route, Routes, useParams } from "react-router-dom";
import type { Lang } from "../i18n";
import Home from "./Home";

function LangHome() {
  const params = useParams();
  const lang = (params.lang as Lang) || "en";
  return <Home lang={lang} />;
}

export function AppRoutes() {
  return (
    <Routes>
      {/* 默认进 en */}
      <Route path="/" element={<Navigate to="/en" replace />} />

      {/* /en /vn */}
      <Route path="/:lang" element={<LangHome />} />

      {/* 兜底 */}
      <Route path="*" element={<Navigate to="/en" replace />} />
    </Routes>
  );
}