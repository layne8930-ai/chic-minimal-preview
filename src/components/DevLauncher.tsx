import { useState } from "react";
import { Link } from "@tanstack/react-router";

const screens = [
  { id: "01", label: "会议中心" },
  { id: "02", label: "会议详情" },
  { id: "03", label: "登录引导" },
  { id: "04", label: "身份选择" },
  { id: "05", label: "我的 · 参会者" },
  { id: "06", label: "报名表单" },
  { id: "07", label: "我的票" },
  { id: "08", label: "电子票" },
  { id: "09", label: "扫码签到" },
  { id: "10", label: "我的 · 志愿者" },
  { id: "11", label: "招募大厅" },
  { id: "12", label: "招募详情" },
  { id: "13", label: "任务看板" },
  { id: "14", label: "培训中心" },
];

/**
 * 极小开发期页面跳板：右下角浮标，仅为方便预览 14 个独立小程序界面。
 * 上线时直接删除本组件即可，对页面零侵入。
 */
export function DevLauncher() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        aria-label="页面索引"
        onClick={() => setOpen((v) => !v)}
        className="fixed z-[60] bottom-[88px] right-3 w-9 h-9 rounded-full bg-ink text-paper text-[14px] leading-none shadow-md flex items-center justify-center"
      >
        {open ? "×" : "≡"}
      </button>
      {open && (
        <div
          className="fixed inset-0 z-[55] bg-ink/30 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute bottom-[132px] right-3 left-3 max-h-[70dvh] overflow-y-auto rounded-2xl bg-paper border border-rule p-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent px-2 pb-2">
              Pages · 14
            </div>
            <ul className="divide-y divide-rule">
              {screens.map((s) => (
                <li key={s.id}>
                  <Link
                    to={s.id === "01" ? "/" : "/p/$id"}
                    params={s.id === "01" ? undefined : { id: s.id }}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-3 py-2.5 px-2 text-ink"
                  >
                    <span className="font-mono text-[11px] tracking-widest text-ink-soft w-9">
                      P{s.id}
                    </span>
                    <span className="font-serif text-[15px]">{s.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
