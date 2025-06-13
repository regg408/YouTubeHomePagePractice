"use client";
import RectangleButton from "@/components/RectangleButton";
import GuideBarStatusContext from "@/contexts/GuideBarStatusContext";
import Image from "next/image";
import { useContext } from "react";

export default function Home() {
  const guideCtx = useContext(GuideBarStatusContext);

  return (
    <div className="flex flex-row">
      <GuideBar isExpand={guideCtx.isExpand} />
      <Content className={guideCtx.isExpand ? "ml-(--guide-expand-width)" : "ml-(--guide-collapse-width)"} />
    </div>
  );
}


interface ContentProps {
  className?: string;
}

function Content(props: ContentProps) {
  const { className = "" } = props;

  return (
    <div className={
      [
        className,
        "flex-1 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
      ].join(" ")
    }>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          fill={false}
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}

interface GuideBarProps {
  isExpand: boolean;
}

const guideConfig = {
  user: [
    { text: "History", icon: "/history.svg" },
    { text: "Playlists", icon: "/playlist_play.svg" },
    { text: "Your videos", icon: "/smart_display.svg" },
    { text: "Watch later", icon: "/schedule.svg" },
    { text: "Liked Video", icon: "/thumb_up.svg" },
  ],
  explorer: [
    { text: "Trending", icon: "/mode_heat.svg" },
    { text: "Music", icon: "/music_note.svg" },
    { text: "Movies", icon: "/movie.svg" },
    { text: "Live", icon: "/sensors.svg" },
    { text: "Gaming", icon: "/sports_esports.svg" },
    { text: "News", icon: "/newsmode.svg" },
    { text: "Sports", icon: "/trophy.svg" },
    { text: "Courses", icon: "/school.svg" },
    { text: "Podcasts", icon: "/podcasts.svg" },
  ],
  tool: [
    { text: "Settings", icon: "/settings.svg" },
    { text: "Report history", icon: "/flag.svg" },
    { text: "Help", icon: "/help.svg" },
    { text: "Send feedback", icon: "/feedback.svg" },
  ]
};

function GuideBar(props: GuideBarProps) {
  const { isExpand } = props;

  return (
    <nav className={
      [
        (isExpand ? "w-(--guide-expand-width)" : "w-(--guide-collapse-width)"),
        "fixed left-0 top-(--toolbar-height) bottom-0 bg-(--background) overflow-y-auto"
      ].join(" ")}>
      {
        isExpand ?
          <div className="flex flex-col w-full px-2.5 items-center divide-(--foreground) divide-y-1">
            <div className="flex flex-col w-full py-2.5">
              <RectangleButton className="w-full flex flex-row justify-start p-2.5 items-center hover:bg-(--highlight) rounded-xl gap-5">
                <Image className="dark:invert" aria-hidden src="/home.svg" alt="home icon" width={24} height={24} />
                <span>Home</span>
              </RectangleButton>
              <RectangleButton className="w-full flex flex-row justify-start p-2.5 items-center hover:bg-(--highlight) rounded-xl gap-5">
                <Image className="dark:invert" aria-hidden src="/subscriptions.svg" alt="subscriptions icon" width={24} height={24} />
                <span>Subscriptions</span>
              </RectangleButton>
            </div>
            <div className="flex flex-col w-full py-2.5">
              <RectangleButton className="w-full flex flex-row justify-start p-2.5 items-center hover:bg-(--highlight) rounded-xl gap-5">
                <span>You</span>
                <Image className="dark:invert" aria-hidden src="/chevron_right.svg" alt="chevron_right icon" width={24} height={24} />
              </RectangleButton>
              {
                guideConfig.user.map((config) => {
                  return (
                    <RectangleButton key={`explore-${config.text}`} className="w-full flex flex-row justify-start p-2.5 items-center hover:bg-(--highlight) rounded-xl gap-5">
                      <Image className="dark:invert" aria-hidden src={config.icon} alt={`icon-${config.text}`} width={24} height={24} />
                      <span>{config.text}</span>
                    </RectangleButton>
                  );
                })
              }
            </div>
            <div className="flex flex-col w-full py-2.5">
              <h1 className="font-bold p-2.5">Subscriptions</h1>

            </div>
            <div className="flex flex-col w-full py-2.5">
              <h1 className="font-bold p-2.5">Explorer</h1>
              {
                guideConfig.explorer.map((config) => {
                  return (
                    <RectangleButton key={`explore-${config.text}`} className="w-full flex flex-row justify-start p-2.5 items-center hover:bg-(--highlight) rounded-xl gap-5">
                      <Image className="dark:invert" aria-hidden src={config.icon} alt={`icon-${config.text}`} width={24} height={24} />
                      <span>{config.text}</span>
                    </RectangleButton>
                  );
                })
              }
            </div>
            <div className="flex flex-col w-full py-2.5">
              {
                guideConfig.tool.map((config) => {
                  return (
                    <RectangleButton key={`explore-${config.text}`} className="w-full flex flex-row justify-start p-2.5 items-center hover:bg-(--highlight) rounded-xl gap-5">
                      <Image className="dark:invert" aria-hidden src={config.icon} alt={`icon-${config.text}`} width={24} height={24} />
                      <span>{config.text}</span>
                    </RectangleButton>
                  );
                })
              }
            </div>
            <div className="flex flex-col w-full py-2.5">
              <div className="flex flex-row flex-wrap p-2.5 text-gray-400 text-[13px]">
                <span className="[&:not(:last-child)]:mr-2.5">About</span>
                <span className="[&:not(:last-child)]:mr-2.5">Press</span>
                <span className="[&:not(:last-child)]:mr-2.5">Copyright</span>
                <span className="[&:not(:last-child)]:mr-2.5">Contact us</span>
                <span className="[&:not(:last-child)]:mr-2.5">Creators</span>
                <span className="[&:not(:last-child)]:mr-2.5">Advertise</span>
                <span className="[&:not(:last-child)]:mr-2.5">Developers</span>
              </div>
              <div className="flex flex-row flex-wrap p-2.5 text-gray-400 text-[13px]">
                <span className="[&:not(:last-child)]:mr-2.5">Terms</span>
                <span className="[&:not(:last-child)]:mr-2.5">Privacy</span>
                <span className="[&:not(:last-child)]:mr-2.5">Policy & Safety</span>
                <span className="[&:not(:last-child)]:mr-2.5">How XXX works</span>
                <span className="[&:not(:last-child)]:mr-2.5">Test new features</span>
              </div>
              <div className="p-2.5 text-[13px] text-gray-600">© Copyright Here</div>
            </div>
          </div> :
          <div className="flex flex-col w-full items-center">
            <RectangleButton className="w-full aspect-square flex flex-col justify-center items-center hover:bg-(--highlight) rounded-2xl">
              <Image className="dark:invert" aria-hidden src="/home.svg" alt="home icon" width={24} height={24} />
              <span className=" text-(length:--guide-icon-font-size)">Home</span>
            </RectangleButton>
            <RectangleButton className="w-full aspect-square flex flex-col justify-center items-center hover:bg-(--highlight) rounded-2xl">
              <Image className="dark:invert" aria-hidden src="/subscriptions.svg" alt="subscriptions icon" width={24} height={24} />
              <span className=" text-(length:--guide-icon-font-size)">Subscriptions</span>
            </RectangleButton>
            <RectangleButton className="w-full aspect-square flex flex-col justify-center items-center hover:bg-(--highlight) rounded-2xl">
              <Image className="dark:invert" aria-hidden src="/account_circle.svg" alt="account_circle icon" width={24} height={24} />
              <span className=" text-(length:--guide-icon-font-size)">You</span>
            </RectangleButton>
          </div>
      }


    </nav>
  );
}