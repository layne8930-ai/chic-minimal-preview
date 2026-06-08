import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import * as S from "@/components/screens";

const map: Record<string, { node: React.ReactNode; label: string; tab?: "meeting" | "schedule" | "me"; hideTab?: boolean }> = {
  "01": { node: <S.P01 />, label: "会议中心", tab: "meeting" },
  "02": { node: <S.P02 />, label: "会议详情", hideTab: true },
  "03": { node: <S.P03 />, label: "登录引导", hideTab: true },
  "04": { node: <S.P04 />, label: "身份选择", hideTab: true },
  "05": { node: <S.P05 />, label: "我的 · 参会者", tab: "me" },
  "06": { node: <S.P06 />, label: "报名表单", hideTab: true },
  "07": { node: <S.P07 />, label: "我的票", hideTab: true },
  "08": { node: <S.P08 />, label: "电子票", hideTab: true },
  "09": { node: <S.P09 />, label: "扫码签到", hideTab: true },
  "10": { node: <S.P10 />, label: "我的 · 志愿者", tab: "me" },
  "11": { node: <S.P11 />, label: "招募大厅", tab: "meeting" },
  "12": { node: <S.P12 />, label: "招募详情", hideTab: true },
  "13": { node: <S.P13 />, label: "任务看板", tab: "schedule" },
  "14": { node: <S.P14 />, label: "培训中心", hideTab: true },
};

export const Route = createFileRoute("/p/$id")({
  loader: ({ params }) => {
    if (!map[params.id]) throw notFound();
    return { id: params.id };
  },
  component: Page,
});

function Page() {
  const { id } = Route.useLoaderData();
  const item = map[id];
  const ids = Object.keys(map);
  const idx = ids.indexOf(id);
  const prev = ids[(idx - 1 + ids.length) % ids.length];
  const next = ids[(idx + 1) % ids.length];

  return (
    <div className="min-h-screen py-10 px-4 bg-paper-deep">
      <div className="max-w-4xl mx-auto mb-6 flex items-baseline justify-between">
        <Link to="/" className="font-mono text-[11px] tracking-widest uppercase text-ink-soft hover:text-ink">
          ← 全部界面
        </Link>
        <div className="font-mono text-[11px] tracking-widest uppercase text-ink-soft">
          P{id} / 14
        </div>
      </div>

      <PhoneFrame code={`P${id}`} label={item.label} tab={item.tab} hideTab={item.hideTab}>
        {item.node}
      </PhoneFrame>

      <div className="max-w-4xl mx-auto mt-8 flex justify-between font-mono text-[11px] tracking-widest uppercase">
        <Link to="/p/$id" params={{ id: prev }} className="text-ink hover:text-accent">
          ‹ P{prev}
        </Link>
        <Link to="/p/$id" params={{ id: next }} className="text-ink hover:text-accent">
          P{next} ›
        </Link>
      </div>
    </div>
  );
}
