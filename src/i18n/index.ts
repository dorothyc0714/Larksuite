import en from "./en.json";
import vn from "./vn.json";
import ja from "./ja.json";
import id from "./id.json";
import pt from "./pt.json";

export type Lang = "en" | "vn" | "ja" | "id" | "pt";

const DICT = {
  en,
  vn,
  ja,
  id,
  pt,
};

export function t(lang: Lang, key: string): string {
  const parts = key.split(".");
  let cur: any = DICT[lang];
  for (const p of parts) cur = cur?.[p];
  return typeof cur === "string" ? cur : key;
}