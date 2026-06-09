import { createFileRoute, notFound } from "@tanstack/react-router";
import { MobileShell } from "@/components/MobileShell";
import { DevLauncher } from "@/components/DevLauncher";
import * as S from "@/components/screens";

type Tab = "meeting" | "schedule" | "me";
const map: Record<string, { node: React.ReactNode; label: string; tab?: Tab; hideTab?: boolean }> = {
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
  head: () => ({
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
    ],
  }),
  loader: ({ params }) => {
    if (!map[params.id]) throw notFound();
    return { id: params.id };
  },
  component: Page,
});

function Page() {
  const { id } = Route.useLoaderData();
  const item = map[id];
  return (
    <>
      <MobileShell tab={item.tab} hideTab={item.hideTab}>
        {item.node}
      </MobileShell>
      <DevLauncher />
    </>
  );
}
