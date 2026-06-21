"use client";

import { useSession } from "@/hooks/use-session";
import SubscriptionPricing from "@/components/molecules/subscription-pricing";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Landing() {
  const { session } = useSession();
  const email = session?.user?.email || "";

  const subscribeContents: {
    title: string;
    subTitle: string;
    context: string;
  }[] = [
    {
      title: "Free",
      subTitle: "Free Tier",
      context:
        "Best for exploring the dashboard and keeping a lightweight retail workflow.",
    },
    {
      title: "Regular",
      subTitle: "Regular Tier",
      context:
        "Adds practical management tools for shops with steady daily operations.",
    },
    {
      title: "Premium",
      subTitle: "Premium Tier",
      context:
        "Built for broader reporting, tighter coordination, and more active teams.",
    },
  ];

  const pricing = [
    {
      link: "",
      priceId: "",
      price: "",
      duration: "",
    },
    {
      link: "https://buy.stripe.com/test_cNi7sK9pH4JmdlR0CzbV600",
      priceId: "price_1TkGPvCg79Vy3F5NBBgeAwvI",
      price: "$4.99",
      duration: "Monthly",
    },
    {
      link: "https://buy.stripe.com/test_14A8wOdFXb7KepV995bV601",
      priceId: "price_1TkGu4Cg79Vy3F5NlmRDXZal",
      price: "$9.99",
      duration: "Monthly",
    },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-y-auto px-5 py-16 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
              Subscription
            </p>
            <h1 className="mt-0 sm:mt-3 text-xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Choose your workspace
            </h1>
          </div>
          <p className="max-w-sm text-sm leading-tight sm:leading-6 text-white/75 sm:text-right">
            Start free, then upgrade when your store needs more room to move.
          </p>
        </div>

        <Carousel className="block md:hidden max-w-[calc(100vw-40px)] sm:max-w-screen">
          <CarouselContent>
            {subscribeContents.map((item, index) => (
              <CarouselItem key={item.title}>
                <div className="flex flex-col justify-between rounded-lg border border-white/25 bg-white/10 p-5 backdrop-blur">
                  <div className="block sm:grid gap-4 grid-cols-[30%_70%]">
                    <div className="flex flex-col">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/65">
                        {item.subTitle}
                      </p>
                      <h2 className="mt-3 text-3xl font-black">{item.title}</h2>
                    </div>
                    <p className="mt-4 max-h-12 text-sm leading-6 text-white/75">
                      {item.context}
                    </p>
                  </div>
                  <div className="mt-4">
                    {index ? (
                      <div className="[&_button]:w-full">
                        <SubscriptionPricing
                          data={pricing[index]}
                          email={email}
                        />
                      </div>
                    ) : (
                      <Button className="w-full disabled:opacity-80" disabled>
                        Already subscribed
                      </Button>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="hidden md:grid gap-4 md:grid-cols-3">
          {subscribeContents.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-lg border border-white/25 bg-white/10 p-5 backdrop-blur"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/65">
                {item.subTitle}
              </p>
              <h2 className="mt-3 text-3xl font-black">{item.title}</h2>
              <p className="mt-4 min-h-12 text-sm leading-6 text-white/75">
                {item.context}
              </p>
              <div className="mt-8">
                {index ? (
                  <div className="mt-8 [&_button]:w-full">
                    <SubscriptionPricing data={pricing[index]} email={email} />
                  </div>
                ) : (
                  <Button className="w-full disabled:opacity-80" disabled>
                    Already subscribed
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
