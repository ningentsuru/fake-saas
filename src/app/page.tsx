import Link from "next/link";
import LandingActions from "@/components/molecules/landing-actions";
import LandingCrossPlatform from "@/components/organisms/landing-cross-platform";
import LandingFeatures from "@/components/organisms/landing-features";
import LandingSubscription from "@/components/organisms/landing-subscription";

import {
  StickyStack,
  StickySection,
} from "@/components/organisms/sticky-stack";

export default function Landing() {
  const sections: StickySection[] = [
    {
      id: "sec-1",
      backgroundColor: "#ffffff",
      backgroundColorDark: "#CCCCCC",
      textColor: "#000000",
      textColorDark: "#000000",
      children: (
        <div className="flex h-full w-full items-center justify-center overflow-y-auto px-5 py-20 sm:px-8">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
            <div className="mb-8 inline-flex max-w-full items-center rounded-full border border-black/15 bg-black/3 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] sm:text-sm">
              Retail management system
            </div>
            <h1 className="max-w-5xl text-5xl font-black leading-[0.9] sm:text-7xl md:text-8xl lg:text-9xl">
              Fake SaaS
            </h1>
            <p className="mt-6 max-w-2xl text-balance text-lg font-medium leading-7 text-black/70 sm:text-2xl sm:leading-9">
              A clean personal project for tracking inventory, sales, pricing,
              and store operations in one responsive workspace.
            </p>
            <p className="mt-10 text-sm text-black/60 sm:text-base">
              Made by{" "}
              <Link
                className="font-semibold text-black underline decoration-black/25 underline-offset-4 transition hover:decoration-black"
                href="https://www.linkedin.com/in/joshua-alexis-sardido"
                target="blank"
              >
                Joshua Alexis Sardido
              </Link>
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "sec-2",
      backgroundColor: "#FAD215",
      backgroundColorDark: "#C8A811",
      textColor: "#000000",
      textColorDark: "#000000",
      children: <LandingCrossPlatform />,
    },
    {
      id: "sec-3",
      backgroundColor: "#1E419C",
      backgroundColorDark: "#18347D",
      textColor: "#ffffff",
      textColorDark: "#ffffff",
      children: <LandingFeatures />,
    },
    {
      id: "sec-4",
      backgroundColor: "#CE2029",
      backgroundColorDark: "#A51A21",
      textColor: "#ffffff",
      textColorDark: "#ffffff",
      children: <LandingSubscription />,
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <LandingActions />
      <StickyStack sections={sections} />
    </div>
  );
}
