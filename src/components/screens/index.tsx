import { Link } from "@tanstack/react-router";
import { NavBar, SectionTitle, Tag, PrimaryButton, GhostButton } from "./primitives";

/* ---------------- shared data ---------------- */
const conferences = [
  {
    id: "01",
    cover: "linear-gradient(135deg, #0b1e3a 0%, #1f3a6b 55%, #3b82f6 100%)",
    kicker: "Featured · 2026",
    title: "数字化审计与企业治理峰会",
    when: "06/15 · Sat 09:00",
    where: "南京财经大学 · 仙林校区",
    tag: "推荐",
    spots: "已报名 312 / 500",
  },
  {
    id: "02",
    cover: "linear-gradient(135deg, #102a4c 0%, #2e5aa8 100%)",
    kicker: "Symposium",
    title: "ESG 报告与会计准则前沿",
    when: "06/22 · Sun 14:00",
    where: "线上 · 腾讯会议",
    tag: "线上",
    spots: "已报名 88 / 200",
  },
  {
    id: "03",
    cover: "linear-gradient(135deg, #14305c 0%, #4a7bd1 100%)",
    kicker: "Workshop",
    title: "AI 时代的财务分析工作坊",
    when: "07/03 · Wed 19:00",
    where: "学院楼 B305",
    tag: "即将截止",
    spots: "已报名 47 / 60",
  },
];

/* ============ P01 会议中心 ============ */
export function P01() {
  return (
    <div>
      {/* magazine masthead */}
      <div className="px-4 pt-3 pb-4 border-b border-ink/80">
        <div className="flex items-baseline justify-between">
          <div>
            <div className="font-mono text-[10px] tracking-[0.35em] uppercase text-ink-soft">
              Vol. XII · Issue 06
            </div>
            <h1 className="font-display text-[34px] leading-none text-ink mt-1">
              智学会 <em className="text-accent">Quarterly</em>
            </h1>
          </div>
          <span className="font-mono text-[11px] text-ink-soft">06.08</span>
        </div>
        <p className="mt-3 font-serif text-[13px] text-ink-soft italic">
          A reading room for accounting, audit & finance · 南京财经大学会计学院
        </p>
      </div>

      {/* search */}
      <div className="px-4 pt-4">
        <div className="flex items-center gap-2 border border-ink px-3 py-2.5">
          <span className="text-ink">⌕</span>
          <input
            placeholder="搜索会议、嘉宾、主题…"
            className="flex-1 bg-transparent text-[13px] outline-none placeholder:text-ink-soft"
          />
          <span className="font-mono text-[10px] tracking-widest text-ink-soft">FILTER</span>
        </div>
      </div>

      {/* hero feature */}
      <Link to="/p/02" className="block px-4 pt-5">
        <div
          className="h-44 w-full relative overflow-hidden"
          style={{ background: conferences[0].cover }}
        >
          <div className="absolute inset-0 p-5 flex flex-col justify-between text-paper">
            <div className="flex justify-between text-[10px] tracking-[0.3em] font-mono uppercase">
              <span>Cover Story</span>
              <span>06/15</span>
            </div>
            <div>
              <h3 className="font-display text-[26px] leading-tight">
                数字化审计与<br />企业治理峰会
              </h3>
              <div className="mt-2 font-mono text-[10px] tracking-widest opacity-80">
                READ FEATURE →
              </div>
            </div>
          </div>
        </div>
      </Link>

      <SectionTitle kicker="In this issue" title="近期会议" />

      <div className="px-4 space-y-5 pb-8">
        {conferences.slice(1).map((c, i) => (
          <Link
            to="/p/02"
            key={c.id}
            className="flex gap-4 border-b border-rule pb-5 last:border-0"
          >
            <div
              className="w-24 h-28 flex-shrink-0"
              style={{ background: c.cover }}
            />
            <div className="flex-1 min-w-0">
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-accent">
                {c.kicker} · No.{String(i + 2).padStart(2, "0")}
              </div>
              <h4 className="font-display text-[20px] leading-tight text-ink mt-1">
                {c.title}
              </h4>
              <div className="mt-2 text-[11px] text-ink-soft font-mono">
                {c.when} — {c.where}
              </div>
              <div className="mt-2 flex gap-1.5">
                <Tag tone={c.tag === "即将截止" ? "accent" : "ink"}>{c.tag}</Tag>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ============ P02 会议详情 ============ */
export function P02() {
  return (
    <div>
      <NavBar title="会议详情" back="/p/01" right={<span>⋯</span>} />
      <div
        className="h-52 relative"
        style={{ background: conferences[0].cover }}
      >
        <div className="absolute bottom-0 left-0 right-0 p-5 text-paper">
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-80">
            Cover Story · 06.15.2026
          </div>
          <h1 className="font-display text-[28px] leading-tight mt-2">
            数字化审计与<br />企业治理峰会
          </h1>
        </div>
      </div>

      <div className="px-4 py-5 border-b border-rule flex justify-between text-[12px] font-mono text-ink-soft">
        <span>09:00 — 17:30</span>
        <span>仙林 · 综合楼 A101</span>
        <span>312 / 500</span>
      </div>

      <div className="px-4 py-5">
        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent">Editor's Note</div>
        <p className="mt-2 font-serif text-[15px] leading-7 text-ink">
          在数据成为新生产要素的当下，<em>审计与治理</em>正经历范式转移。本届峰会汇聚学界、四大与监管机构，围绕智能审计、ESG 披露与内部控制再造展开两日深谈。
        </p>
      </div>

      <SectionTitle kicker="Agenda" title="会议议程" />
      <ol className="px-4 pb-2">
        {[
          ["09:00", "开幕致辞", "李教授 · 南财会计学院院长"],
          ["09:30", "主旨演讲：智能审计的边界", "陈博士 · 普华永道"],
          ["10:30", "圆桌：ESG 披露的中国路径", "四位嘉宾"],
          ["14:00", "案例分享 · 工作坊", "分会场"],
        ].map(([t, h, s]) => (
          <li key={t} className="flex gap-4 border-b border-rule py-3">
            <span className="font-mono text-[12px] text-accent w-12 pt-0.5">{t}</span>
            <div>
              <div className="font-serif text-[15px] text-ink">{h}</div>
              <div className="text-[11px] text-ink-soft mt-0.5">{s}</div>
            </div>
          </li>
        ))}
      </ol>
      <div className="px-4 mt-2 text-[11px] font-mono tracking-widest text-ink-soft underline">
        VIEW FULL AGENDA →
      </div>

      <SectionTitle kicker="Speakers" title="特邀嘉宾" />
      <div className="px-4 grid grid-cols-3 gap-3 pb-6">
        {["陈博士", "李教授", "王合伙人", "张教授", "刘审计师", "周经理"].map((n, i) => (
          <div key={n} className="text-center">
            <div
              className="aspect-square w-full mb-2"
              style={{
                background: `linear-gradient(135deg, hsl(${210 + i * 8} 45% 30%), hsl(${210 + i * 8} 55% 60%))`,
              }}
            />
            <div className="font-serif text-[13px] text-ink">{n}</div>
            <div className="text-[10px] text-ink-soft font-mono">SPEAKER</div>
          </div>
        ))}
      </div>

      <SectionTitle kicker="Venue" title="会议地址" />
      <div className="px-4 pb-6">
        <div className="h-32 bg-muted border border-rule relative">
          <div className="absolute inset-0 flex items-center justify-center text-ink-soft font-mono text-[10px] tracking-widest">
            ◉  MAP PREVIEW
          </div>
        </div>
        <div className="mt-2 text-[12px] text-ink-soft">南京市栖霞区文苑路 3 号 · 仙林校区综合楼 A101</div>
      </div>

      {/* footer CTA */}
      <div className="sticky bottom-0 bg-paper border-t border-ink px-4 py-3 flex gap-3">
        <GhostButton to="/p/11">志愿者</GhostButton>
        <PrimaryButton to="/p/03" full>立即报名</PrimaryButton>
      </div>
    </div>
  );
}

/* ============ P03 登录引导 ============ */
export function P03() {
  return (
    <div className="h-full flex flex-col">
      <NavBar title="登录" back="/p/02" />
      <div className="flex-1 px-6 pt-10">
        <div className="font-mono text-[10px] tracking-[0.35em] uppercase text-accent">Welcome</div>
        <h1 className="font-display text-[36px] leading-tight text-ink mt-2">
          请先登录,<br /><em>继续您的旅程</em>
        </h1>
        <p className="mt-4 font-serif text-[14px] text-ink-soft leading-7">
          我们仅获取您的昵称与头像，用于会议报名与签到。校园账号将通过学院身份服务校验。
        </p>

        <div className="mt-12 space-y-3">
          <Link
            to="/p/04"
            className="flex items-center justify-center gap-2 bg-ink text-paper py-3.5 text-sm tracking-[0.2em] uppercase"
          >
            <span>✺</span> 微信一键登录
          </Link>
          <Link
            to="/p/04"
            className="flex items-center justify-center border border-ink text-ink py-3.5 text-sm tracking-[0.2em] uppercase"
          >
            校园账号登录
          </Link>
          <Link
            to="/p/01"
            className="block text-center text-[12px] font-mono tracking-widest text-ink-soft underline pt-4"
          >
            跳过 · 先逛逛
          </Link>
        </div>
      </div>
      <div className="px-6 pb-10 text-[10px] text-ink-soft text-center font-mono">
        登录即同意 《用户协议》 与 《隐私政策》
      </div>
    </div>
  );
}

/* ============ P04 身份选择 ============ */
export function P04() {
  return (
    <div>
      <NavBar title="选择身份" back="/p/03" />
      <div className="px-5 pt-8">
        <div className="font-mono text-[10px] tracking-[0.35em] uppercase text-accent">Choose your role</div>
        <h1 className="font-display text-[30px] leading-tight text-ink mt-2">
          您是以何种身份<br />加入本届会议？
        </h1>
        <p className="mt-3 text-[12px] text-ink-soft">可随时在「我的」中切换</p>

        <div className="mt-10 space-y-4">
          <Link
            to="/p/06"
            className="block border border-ink p-5 hover:bg-ink hover:text-paper transition group"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase">01 / Attendee</div>
                <div className="font-display text-[24px] mt-1">我是参会者</div>
              </div>
              <span className="font-display text-3xl">→</span>
            </div>
            <p className="mt-3 font-serif text-[13px] text-ink-soft group-hover:text-paper/80 italic">
              来听讲、学习、获取证书与积分。
            </p>
          </Link>

          <Link
            to="/p/10"
            className="block border border-ink p-5 hover:bg-ink hover:text-paper transition group"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase">02 / Volunteer</div>
                <div className="font-display text-[24px] mt-1">我是志愿者</div>
              </div>
              <span className="font-display text-3xl">→</span>
            </div>
            <p className="mt-3 font-serif text-[13px] text-ink-soft group-hover:text-paper/80 italic">
              来服务、积累经验、赚取积分与推荐信。
            </p>
          </Link>

          <Link
            to="/p/01"
            className="block border border-rule p-5 text-center"
          >
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-ink-soft">03 / Guest</div>
            <div className="font-serif text-[16px] mt-1 text-ink">我只是逛逛</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ============ P05 我的-参会者 ============ */
export function P05() {
  return (
    <div>
      <div className="px-5 pt-4 pb-6 border-b border-ink/80 bg-paper-deep">
        <div className="font-mono text-[10px] tracking-[0.35em] uppercase text-ink-soft">Member · No. 2024-1138</div>
        <div className="flex items-center gap-4 mt-3">
          <div
            className="w-16 h-16 rounded-full"
            style={{ background: "linear-gradient(135deg,#3b82f6,#0b1e3a)" }}
          />
          <div>
            <h1 className="font-display text-[26px] text-ink leading-tight">林知远</h1>
            <div className="text-[11px] text-ink-soft font-mono mt-1">会计学 · 2023 级 · 参会者</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 px-5 py-5 border-b border-rule">
        {[["12", "已参会"], ["08", "证书"], ["340", "积分"]].map(([n, l]) => (
          <div key={l} className="text-center">
            <div className="font-display text-[28px] text-ink">{n}</div>
            <div className="text-[10px] tracking-[0.25em] uppercase font-mono text-ink-soft mt-1">{l}</div>
          </div>
        ))}
      </div>

      <SectionTitle kicker="My pass" title="电子票" />
      <Link to="/p/08" className="block mx-5 border border-ink p-4">
        <div className="flex justify-between items-start">
          <div>
            <div className="font-mono text-[10px] tracking-widest text-accent">UPCOMING</div>
            <div className="font-display text-[18px] text-ink mt-1">数字化审计峰会</div>
            <div className="text-[11px] text-ink-soft font-mono mt-1">06/15 · A101 · SEAT 088</div>
          </div>
          <div className="w-12 h-12 bg-ink" />
        </div>
      </Link>

      <SectionTitle kicker="Shortcuts" title="快捷入口" />
      <div className="grid grid-cols-4 gap-2 px-5 pb-4 text-center">
        {[
          ["◇", "我的票", "/p/07"],
          ["⌖", "签到", "/p/09"],
          ["✦", "证书", "/p/05"],
          ["⚯", "积分", "/p/05"],
        ].map(([g, l, to]) => (
          <Link to={to} key={l} className="border border-rule py-4">
            <div className="text-2xl text-accent leading-none">{g}</div>
            <div className="text-[10px] mt-2 font-mono tracking-widest text-ink-soft">{l}</div>
          </Link>
        ))}
      </div>

      <div className="px-5 mt-2 pb-8 space-y-0 border-t border-rule">
        {["切换为志愿者身份", "我的报名记录", "我的收藏", "消息中心", "帮助与反馈", "设置"].map((t, i) => (
          <Link
            to={i === 0 ? "/p/10" : "/p/05"}
            key={t}
            className="flex justify-between items-center py-4 border-b border-rule font-serif text-[15px] text-ink"
          >
            <span>{t}</span>
            <span className="text-ink-soft">›</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ============ P06 报名表单 ============ */
export function P06() {
  return (
    <div>
      <NavBar title="报名信息" back="/p/02" />
      <div className="px-5 pt-5">
        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent">Registration · Step 1 of 2</div>
        <h1 className="font-display text-[26px] mt-2 text-ink">填写参会信息</h1>
      </div>

      <SectionTitle kicker="Ticket" title="选择票档" />
      <div className="px-5 space-y-3">
        {[
          ["标准票", "学生 · 免费", true],
          ["进阶票", "含午餐与资料 · ¥88", false],
          ["VIP 票", "嘉宾晚宴席位 · ¥288", false],
        ].map(([n, d, on], i) => (
          <div
            key={i}
            className={`border p-4 flex justify-between items-center ${on ? "border-ink bg-ink text-paper" : "border-rule"}`}
          >
            <div>
              <div className={`font-display text-[18px] ${on ? "text-paper" : "text-ink"}`}>{n as string}</div>
              <div className={`text-[11px] mt-1 font-mono ${on ? "opacity-70" : "text-ink-soft"}`}>{d as string}</div>
            </div>
            <div className={`w-4 h-4 rounded-full border ${on ? "bg-accent border-accent" : "border-ink"}`} />
          </div>
        ))}
      </div>

      <SectionTitle kicker="Personal" title="个人信息" />
      <div className="px-5 space-y-4 pb-4">
        {[
          ["姓名", "林知远"],
          ["手机号", "138 ████ 2024"],
          ["所属单位", "南京财经大学"],
          ["邮箱（用于发送证书）", "lin@example.edu"],
        ].map(([l, v]) => (
          <div key={l}>
            <label className="text-[10px] font-mono tracking-[0.25em] uppercase text-ink-soft">{l}</label>
            <input
              defaultValue={v}
              className="mt-1 w-full bg-transparent border-b border-ink py-2 text-[15px] font-serif text-ink outline-none"
            />
          </div>
        ))}
      </div>

      <SectionTitle kicker="Extra" title="附加问题" />
      <div className="px-5 pb-32">
        <label className="text-[10px] font-mono tracking-[0.25em] uppercase text-ink-soft">您希望与哪位嘉宾交流？</label>
        <textarea
          rows={3}
          defaultValue=""
          placeholder="选填……"
          className="mt-1 w-full bg-transparent border border-rule p-3 text-[14px] font-serif outline-none"
        />
      </div>

      <div className="sticky bottom-0 bg-paper border-t border-ink px-4 py-3">
        <PrimaryButton to="/p/08" full>提交报名</PrimaryButton>
      </div>
    </div>
  );
}

/* ============ P07 我的票/订单 ============ */
export function P07() {
  return (
    <div>
      <NavBar title="我的票" back="/p/05" />
      <div className="flex border-b border-rule text-[12px] font-mono tracking-widest uppercase">
        {["即将开始", "进行中", "已结束"].map((t, i) => (
          <button
            key={t}
            className={`flex-1 py-3 ${i === 0 ? "text-ink border-b-2 border-ink" : "text-ink-soft"}`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="px-4 py-4 space-y-4">
        {[
          ["数字化审计峰会", "06/15 09:00", "A101", "088", "PAID"],
          ["ESG 报告与会计准则", "06/22 14:00", "线上", "—", "FREE"],
          ["AI 财务工作坊", "07/03 19:00", "B305", "022", "PENDING"],
        ].map(([n, t, p, s, st]) => (
          <Link
            to="/p/08"
            key={n}
            className="block border border-ink bg-paper"
          >
            <div className="px-4 py-3 flex justify-between items-center border-b border-dashed border-ink">
              <span className="font-display text-[17px] text-ink">{n}</span>
              <span className="font-mono text-[10px] tracking-widest text-accent">{st}</span>
            </div>
            <div className="px-4 py-3 flex justify-between text-[11px] font-mono text-ink-soft">
              <span>{t}</span>
              <span>{p}</span>
              <span>SEAT {s}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ============ P08 报名成功 / 电子票 ============ */
export function P08() {
  return (
    <div>
      <NavBar title="电子票" back="/p/07" right={<span>↗</span>} />
      <div className="px-5 pt-8 text-center">
        <div className="font-mono text-[10px] tracking-[0.35em] uppercase text-accent">Confirmed</div>
        <h1 className="font-display text-[32px] mt-2 text-ink">
          报名成功 <em>·</em> 期待相见
        </h1>
        <p className="font-serif italic text-[13px] text-ink-soft mt-3">
          请于会议当日 08:30 起到 A101 大厅出示此票。
        </p>
      </div>

      <div className="mx-5 mt-8 border border-ink bg-paper">
        <div className="p-5 border-b border-dashed border-ink">
          <div className="font-mono text-[10px] tracking-widest text-ink-soft">PASS NO. 2026-0615-088</div>
          <div className="font-display text-[22px] text-ink mt-2 leading-tight">
            数字化审计与<br />企业治理峰会
          </div>
          <div className="grid grid-cols-3 mt-4 gap-2 text-[11px] font-mono text-ink-soft">
            <div><div className="text-ink">06/15</div>DATE</div>
            <div><div className="text-ink">09:00</div>OPEN</div>
            <div><div className="text-ink">A101 · 088</div>SEAT</div>
          </div>
        </div>
        <div className="p-6 flex flex-col items-center">
          <div className="w-44 h-44 bg-ink relative" style={{
            backgroundImage: "repeating-linear-gradient(0deg,#eaf0fb 0 2px,transparent 2px 6px),repeating-linear-gradient(90deg,#eaf0fb 0 2px,transparent 2px 6px)"
          }} />
          <div className="font-mono text-[10px] tracking-widest text-ink-soft mt-4">
            SCAN AT CHECK-IN
          </div>
        </div>
      </div>

      <div className="px-5 mt-6 pb-10 space-y-3">
        <PrimaryButton to="/p/09" full>前往签到</PrimaryButton>
        <GhostButton to="/p/05" full>返回我的</GhostButton>
      </div>
    </div>
  );
}

/* ============ P09 扫码签到 ============ */
export function P09() {
  return (
    <div className="h-full bg-ink text-paper flex flex-col">
      <div className="h-12 flex items-center justify-between px-4 mt-11">
        <Link to="/p/10" className="text-paper text-lg">‹</Link>
        <span className="font-display text-[17px]">扫码签到</span>
        <span className="font-mono text-[11px] tracking-widest opacity-70">FLASH</span>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        <div className="font-mono text-[10px] tracking-[0.35em] uppercase text-accent">Scanner</div>
        <p className="font-serif italic text-center mt-2 text-paper/80">
          将参会者的二维码放入框内，<br />识别后将自动签到。
        </p>
        <div className="relative mt-8 w-60 h-60">
          <div className="absolute inset-0 border border-paper/30" />
          {/* corners */}
          {[
            "top-0 left-0 border-t-2 border-l-2",
            "top-0 right-0 border-t-2 border-r-2",
            "bottom-0 left-0 border-b-2 border-l-2",
            "bottom-0 right-0 border-b-2 border-r-2",
          ].map((c) => (
            <span key={c} className={`absolute w-7 h-7 border-accent ${c}`} />
          ))}
          <div className="absolute left-2 right-2 h-px bg-accent top-1/2 shadow-[0_0_12px_var(--accent)]" />
        </div>
        <div className="mt-10 grid grid-cols-3 gap-6 text-center">
          {[["142", "今日签到"], ["28", "待签到"], ["3", "异常"]].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-[24px]">{n}</div>
              <div className="text-[10px] font-mono tracking-widest opacity-70 mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-5 pb-8 flex gap-3">
        <button className="flex-1 border border-paper/40 text-paper py-3 text-[12px] tracking-widest uppercase">
          手动输入
        </button>
        <Link to="/p/13" className="flex-1 bg-accent text-paper text-center py-3 text-[12px] tracking-widest uppercase">
          查看任务
        </Link>
      </div>
    </div>
  );
}

/* ============ P10 我的-志愿者 ============ */
export function P10() {
  return (
    <div>
      <div className="px-5 pt-4 pb-6 border-b border-ink/80" style={{ background: "linear-gradient(180deg,#0b1e3a,#14305c)" }}>
        <div className="font-mono text-[10px] tracking-[0.35em] uppercase text-paper/70">Volunteer · Lv.3</div>
        <div className="flex items-center gap-4 mt-3 text-paper">
          <div className="w-16 h-16 rounded-full" style={{ background: "linear-gradient(135deg,#3b82f6,#93c5fd)" }} />
          <div>
            <h1 className="font-display text-[26px] leading-tight">林知远</h1>
            <div className="text-[11px] font-mono opacity-80 mt-1">会计学 · 服务时长 36h</div>
          </div>
        </div>
        <div className="mt-4 h-1 bg-paper/20">
          <div className="h-full bg-accent" style={{ width: "62%" }} />
        </div>
        <div className="mt-1 flex justify-between text-[10px] font-mono text-paper/70">
          <span>Lv.3 · 620 pts</span>
          <span>NEXT Lv.4 — 380</span>
        </div>
      </div>

      <SectionTitle kicker="Today" title="今日任务" />
      <Link to="/p/13" className="block mx-5 border border-ink p-4">
        <div className="font-mono text-[10px] tracking-widest text-accent">ASSIGNED · 3 TASKS</div>
        <div className="font-display text-[18px] text-ink mt-1">数字化审计峰会 · 签到组</div>
        <div className="text-[11px] text-ink-soft font-mono mt-2">06/15 · 08:00 — 12:00 · A101 大厅</div>
      </Link>

      <SectionTitle kicker="Shortcuts" title="快捷入口" />
      <div className="grid grid-cols-4 gap-2 px-5 pb-4 text-center">
        {[
          ["⌖", "扫码", "/p/09"],
          ["❍", "招募", "/p/11"],
          ["⚒", "任务", "/p/13"],
          ["✺", "培训", "/p/14"],
        ].map(([g, l, to]) => (
          <Link to={to} key={l} className="border border-rule py-4">
            <div className="text-2xl text-accent leading-none">{g}</div>
            <div className="text-[10px] mt-2 font-mono tracking-widest text-ink-soft">{l}</div>
          </Link>
        ))}
      </div>

      <div className="px-5 mt-2 pb-8 border-t border-rule">
        {["切换为参会者身份", "我的服务记录", "我的证书与推荐信", "积分商城", "设置"].map((t, i) => (
          <Link
            to={i === 0 ? "/p/05" : "/p/10"}
            key={t}
            className="flex justify-between items-center py-4 border-b border-rule font-serif text-[15px] text-ink"
          >
            <span>{t}</span>
            <span className="text-ink-soft">›</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ============ P11 招募大厅 ============ */
export function P11() {
  return (
    <div>
      <div className="px-4 pt-3 pb-4 border-b border-ink/80">
        <div className="font-mono text-[10px] tracking-[0.35em] uppercase text-ink-soft">Volunteer · Call</div>
        <h1 className="font-display text-[30px] text-ink mt-1">招募大厅</h1>
        <p className="mt-2 font-serif italic text-[13px] text-ink-soft">
          来自学院与外部机构的志愿岗位，按截止日期排序。
        </p>
      </div>

      <div className="px-4 pt-4 flex gap-2 overflow-x-auto pb-2">
        {["全部", "签到组", "讲解组", "媒体组", "后勤", "线上协助"].map((t, i) => (
          <span
            key={t}
            className={`px-3 py-1.5 text-[11px] tracking-widest font-mono uppercase whitespace-nowrap border ${i === 0 ? "bg-ink text-paper border-ink" : "border-rule text-ink-soft"}`}
          >
            {t}
          </span>
        ))}
      </div>

      <div className="px-4 mt-3 space-y-5 pb-8">
        {[
          ["签到组志愿者 · 数字化审计峰会", "06/15", "A101 大厅", "需要 8 人 · 已报 5", ["积分", "证书", "餐补"], "即将截止"],
          ["讲解组志愿者 · ESG 论坛", "06/22", "线上", "需要 4 人 · 已报 2", ["积分", "推荐信"], "招募中"],
          ["媒体记录 · AI 工作坊", "07/03", "B305", "需要 2 人 · 已报 0", ["积分", "证书"], "新发布"],
          ["后勤组 · 学院年度大会", "07/12", "图书馆报告厅", "需要 6 人 · 已报 6", ["积分"], "已满"],
        ].map(([t, d, p, s, tags, st], i) => (
          <Link
            to="/p/12"
            key={i}
            className="block border-b border-rule pb-5"
          >
            <div className="flex justify-between text-[10px] font-mono tracking-widest uppercase">
              <span className="text-accent">{st as string}</span>
              <span className="text-ink-soft">{d as string}</span>
            </div>
            <h3 className="font-display text-[20px] text-ink mt-1 leading-tight">{t as string}</h3>
            <div className="text-[11px] text-ink-soft font-mono mt-1.5">{p as string} · {s as string}</div>
            <div className="flex gap-1.5 mt-2.5">
              {(tags as string[]).map((tag) => <Tag key={tag} tone="sage">{tag}</Tag>)}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ============ P12 招募详情 ============ */
export function P12() {
  return (
    <div>
      <NavBar title="招募详情" back="/p/11" />
      <div className="px-5 pt-5">
        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent">CALL · CLOSING 06.13</div>
        <h1 className="font-display text-[26px] text-ink mt-2 leading-tight">
          签到组志愿者<br /><em>数字化审计峰会</em>
        </h1>
        <div className="mt-3 text-[12px] font-mono text-ink-soft">06/15 · 08:00 — 12:00 · A101 大厅</div>
        <div className="mt-3 flex gap-1.5">
          <Tag tone="sage">积分 ×30</Tag>
          <Tag tone="sage">证书</Tag>
          <Tag tone="sage">餐补</Tag>
        </div>
      </div>

      <div className="px-5 mt-5">
        <div className="h-2 bg-muted">
          <div className="h-full bg-ink" style={{ width: "62%" }} />
        </div>
        <div className="mt-1 flex justify-between text-[10px] font-mono text-ink-soft">
          <span>已报名 5 / 8</span>
          <span>截止 06/13 18:00</span>
        </div>
      </div>

      <SectionTitle kicker="Brief" title="岗位说明" />
      <div className="px-5 font-serif text-[14px] leading-7 text-ink">
        负责会议当日来宾签到、引导入场、临时问题处理。要求着装得体、普通话流利、能站立服务 4 小时。
      </div>

      <SectionTitle kicker="Requirements" title="任职要求" />
      <ul className="px-5 space-y-2 text-[13px] text-ink">
        {["在校本科生或研究生", "曾参加过至少一次校园活动", "具备基本的礼仪与表达能力", "已完成「岗前培训」"].map((r) => (
          <li key={r} className="flex gap-3"><span className="text-accent">/</span>{r}</li>
        ))}
      </ul>

      <SectionTitle kicker="Contact" title="联系负责人" />
      <div className="px-5 pb-32 text-[13px] text-ink-soft font-mono">
        负责人 · 周老师 · zhou@nufe.edu.cn
      </div>

      <div className="sticky bottom-0 bg-paper border-t border-ink px-4 py-3 flex gap-3">
        <GhostButton to="/p/14">先去培训</GhostButton>
        <PrimaryButton to="/p/06" full>立即报名</PrimaryButton>
      </div>
    </div>
  );
}

/* ============ P13 任务看板 ============ */
export function P13() {
  return (
    <div>
      <div className="px-4 pt-3 pb-4 border-b border-ink/80">
        <div className="font-mono text-[10px] tracking-[0.35em] uppercase text-ink-soft">06/15 · Saturday</div>
        <h1 className="font-display text-[30px] text-ink mt-1">任务看板</h1>
        <p className="mt-1 font-serif italic text-[13px] text-ink-soft">数字化审计峰会 · 签到组</p>
      </div>

      <div className="flex border-b border-rule text-[12px] font-mono tracking-widest uppercase">
        {[["待办", 3], ["进行中", 1], ["已完成", 2]].map(([t, n], i) => (
          <button
            key={t}
            className={`flex-1 py-3 flex justify-center items-center gap-1.5 ${i === 0 ? "text-ink border-b-2 border-ink" : "text-ink-soft"}`}
          >
            {t}
            <span className="text-[10px] text-accent">{n}</span>
          </button>
        ))}
      </div>

      <div className="px-4 py-4 space-y-4">
        {[
          ["08:00", "签到桌物料布置", "A101 大厅西侧", "TODO", "high"],
          ["08:30", "嘉宾接待 · 陈博士", "南门停车场", "TODO", "mid"],
          ["09:00", "开幕引导入场", "A101", "TODO", "high"],
          ["10:30", "茶歇协助", "二楼休息区", "DONE", "low"],
        ].map(([t, n, p, st, pr], i) => (
          <div key={i} className="border border-rule p-4 bg-paper relative">
            {pr === "high" && <span className="absolute top-0 left-0 w-1 h-full bg-accent" />}
            <div className="flex justify-between items-start">
              <div>
                <div className="font-mono text-[10px] tracking-widest text-ink-soft">{t} · {p}</div>
                <div className="font-display text-[17px] text-ink mt-1">{n}</div>
              </div>
              <Tag tone={st === "DONE" ? "sage" : "accent"}>{st}</Tag>
            </div>
            <div className="mt-3 flex gap-2">
              <button className="flex-1 border border-ink py-2 text-[11px] tracking-widest uppercase">详情</button>
              <button className="flex-1 bg-ink text-paper py-2 text-[11px] tracking-widest uppercase">开始</button>
            </div>
          </div>
        ))}
      </div>

      <div className="px-5 pb-8">
        <Link to="/p/09" className="block w-full bg-accent text-paper text-center py-3 text-[12px] tracking-widest uppercase">
          扫码签到 / 上报
        </Link>
      </div>
    </div>
  );
}

/* ============ P14 培训中心 ============ */
export function P14() {
  return (
    <div>
      <NavBar title="培训中心" back="/p/10" />
      <div className="px-5 pt-5">
        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent">Volunteer Academy</div>
        <h1 className="font-display text-[28px] text-ink mt-2 leading-tight">
          上岗前请完成<br /><em>必修课程与测试</em>
        </h1>
        <div className="mt-4 flex gap-2">
          <div className="flex-1 border border-ink p-3">
            <div className="font-mono text-[10px] text-ink-soft tracking-widest">PROGRESS</div>
            <div className="font-display text-[20px] text-ink mt-1">3 / 5</div>
          </div>
          <div className="flex-1 border border-ink p-3">
            <div className="font-mono text-[10px] text-ink-soft tracking-widest">TEST</div>
            <div className="font-display text-[20px] text-ink mt-1">88 分</div>
          </div>
        </div>
      </div>

      <SectionTitle kicker="Curriculum" title="课程列表" />
      <div className="px-5 space-y-4 pb-4">
        {[
          ["01", "志愿服务基础与礼仪", "12 min", "done"],
          ["02", "签到流程标准化", "08 min", "done"],
          ["03", "突发情况处理", "15 min", "done"],
          ["04", "嘉宾接待规范", "10 min", "doing"],
          ["05", "结业测试", "20 题", "lock"],
        ].map(([n, t, d, s]) => (
          <div key={n} className="flex gap-4 items-center border-b border-rule pb-4">
            <div className="font-display text-[22px] text-accent w-8">{n}</div>
            <div className="flex-1">
              <div className="font-serif text-[15px] text-ink">{t}</div>
              <div className="text-[11px] font-mono text-ink-soft mt-0.5">{d}</div>
            </div>
            <Tag tone={s === "done" ? "sage" : s === "doing" ? "accent" : "muted"}>
              {s === "done" ? "已完成" : s === "doing" ? "学习中" : "待解锁"}
            </Tag>
          </div>
        ))}
      </div>

      <div className="px-5 pb-10 pt-2">
        <PrimaryButton to="/p/13" full>继续学习</PrimaryButton>
      </div>
    </div>
  );
}
