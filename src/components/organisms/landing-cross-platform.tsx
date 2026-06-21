import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default async function LandingCrossPlatform() {
  const crossPlatformContents: {
    title: string;
    subTitle: string;
    context: string;
  }[] = [
    {
      title: "01",
      subTitle: "Web",
      context:
        "Desktop, laptop, tablet, and mobile access through the world wide web.",
    },
    {
      title: "02",
      subTitle: "Mobile",
      context:
        "Tablet and phone support for Android and iOS users on the move.",
    },
    {
      title: "03",
      subTitle: "Desktop",
      context: "A dedicated desktop application for focused back-office work.",
    },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-y-auto px-5 py-16 sm:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-6 sm:gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-black/60">
            Access everywhere
          </p>
          <h1 className="mt-3 text-2xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Cross-platform by design
          </h1>
          <p className="mt-4 sm:mt-5 max-w-xl text-base leading-tight sm:leading-7 text-black/70 sm:text-lg">
            Keep the same workflow available from the browser, mobile devices,
            and a desktop application without changing how your team works.
          </p>
        </div>

        <Carousel className="block sm:hidden max-w-[calc(100vw-40px)] sm:max-w-screen">
          <CarouselContent>
            {crossPlatformContents.map((item) => (
              <CarouselItem key={item.title}>
                <div className="rounded-lg border border-black/15 bg-white/65 p-5 shadow-sm backdrop-blur">
                  <div className="lg:mb-8 text-3xl font-black">
                    {item.title} {item.subTitle}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-black/70">
                    {item.context}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="hidden sm:grid gap-4 sm:grid-cols-3">
          {crossPlatformContents.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-black/15 bg-white/65 p-5 shadow-sm backdrop-blur"
            >
              <div className="flex space-x-2 items-center lg:items-start lg:flex-col">
                <div className="lg:mb-8 text-3xl font-black">{item.title}</div>
                <h3 className="text-xl font-bold">{item.subTitle}</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-black/70">
                {item.context}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
