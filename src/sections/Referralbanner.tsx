import React from "react";
import type { Lang } from "../i18n";
import { t } from "../i18n";

type Props = {
  lang: Lang;
  href?: string;
  className?: string;
};

export default function ReferralBanner({
  lang,
  href = "#",
  className,
}: Props) {
  const BASE = import.meta.env.BASE_URL; // e.g. "/Larksuite/"
  const bgSrc = `${BASE}images/referral-bg.png`;

  const eyebrow = t(lang, "referral.eyebrow");
  const title = t(lang, "referral.title");
  const titleLines = title.split("\n");

  return (
    <section className={className}>
      <a
        href={href}
        aria-label="Referral banner"
        className={[
          // ✅ 不要铺满全屏：居中 + 限制最大宽度
          "relative mx-auto block w-full max-w-[560px]",
          // ✅ 按设计稿比例锁定（362.5 x 224）
          "aspect-[362.5/224]",
          // ✅ 视觉：圆角 + 阴影 + hover
          "overflow-hidden rounded-[28px] shadow-[0_12px_40px_rgba(0,0,0,0.15)]",
          "transition-transform duration-200 hover:-translate-y-[2px]",
        ].join(" ")}
      >
        {/* 背景底图：铺满容器，不被撑爆 */}
        <img
          src={bgSrc}
          alt=""
          className="absolute inset-0 h-full w-full select-none object-cover"
          loading="lazy"
          draggable={false}
          onError={() => console.error("[ReferralBanner] image not found:", bgSrc)}
        />

        {/* 覆盖层：用绝对定位更接近定版运营图 */}
        <div className="absolute inset-0">
          {/* 左侧文案块：按设计稿大致位置（可继续微调） */}
          <div
            className={[
              "absolute",
              // 设计稿左上留白感：大概 32px / 28px
              "left-[8.8%] top-[12.5%]",
              // 给右侧插画留空间
              "w-[56%]",
            ].join(" ")}
          >
            <div className="text-[12px] leading-[16px] md:text-[16px] md:leading-[20px]">
              {eyebrow}
            </div>

            <div className="mt-3 text-[22px] font-semibold leading-[26px] tracking-[-0.02em] text-black md:mt-5 md:text-[40px] md:leading-[42px]">
              {titleLines.map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  {idx < titleLines.length - 1 ? <br /> : null}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* 左下角 CTA：贴近你稿子的箭头区域
          <div className="absolute left-[8.8%] top-[64%] flex items-center gap-3 md:top-[67%]">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/20 bg-white/50 backdrop-blur md:h-12 md:w-12">
              →
            </span>
            <span className="text-[14px] font-medium text-black/70 md:text-[18px]">
              {cta}
            </span>
          </div> */}

          {/* 底部 pagination dots */}
          {/* <div className="absolute bottom-[7%] left-1/2 flex -translate-x-1/2 items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-black/80 md:h-3 md:w-3" />
            <span className="h-2.5 w-2.5 rounded-full bg-black/30 md:h-3 md:w-3" />
            <span className="h-2.5 w-2.5 rounded-full bg-black/30 md:h-3 md:w-3" />
          </div> */}
        </div>
      </a>
    </section>
  );
}