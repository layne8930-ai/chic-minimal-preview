import { createFileRoute } from "@tanstack/react-router";
import { MobileShell } from "@/components/MobileShell";
import { DevLauncher } from "@/components/DevLauncher";
import * as S from "@/components/screens";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "智学会 · 小程序" },
      { name: "description", content: "智学会小程序全屏渲染" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <MobileShell tab="meeting">
        <S.P01 />
      </MobileShell>
      <DevLauncher />
    </>
  );
}
