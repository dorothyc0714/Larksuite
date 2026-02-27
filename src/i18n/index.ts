import en from "./en.json";
import vn from "./vn.json";

export type Lang = "en" | "vn";

const DICT: Record<Lang, any> = { en, vn };

export function t(lang: Lang, key: string): string {
  const parts = key.split(".");
  let cur: any = DICT[lang];
  for (const p of parts) cur = cur?.[p];
  return typeof cur === "string" ? cur : key;
}