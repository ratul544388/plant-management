import { topHeaderAnimatedTexts } from "@/constants";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ThemeToggler } from "../theme-toggler";

const HeaderTop = () => {
  const ulRef = useRef();
  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1 });
    const current = ulRef.current;
    topHeaderAnimatedTexts.map((_, i) => {
      timeline.to(current, { y: -40 * (i + 1), duration: 1, delay: 2 });
    });
    timeline.to(current, { y: 0, duration: 0 });

    return () => timeline.kill();
  }, []);

  return (
    <div className="flex h-[50px] w-full flex-col items-center justify-center bg-green-900 text-white">
      <p className="text-sm">Bring Nature Indoors</p>
      <div className="h-7 overflow-hidden text-sm">
        <ul
          ref={ulRef}
          className="flex flex-col gap-5 text-center font-semibold"
        >
          {topHeaderAnimatedTexts.map((text) => (
            <li key={text}>{text}</li>
          ))}
          <li aria-hidden="true">{topHeaderAnimatedTexts[0]}</li>
        </ul>
      </div>
      <ThemeToggler className="ml-auto absolute right-3"/>
    </div>
  );
};

export default HeaderTop;
