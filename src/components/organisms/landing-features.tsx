import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Brain, ShieldUser, Hammer } from "lucide-react";

export default async function LandingFeatures() {
  const iconMap = {
    Brain,
    ShieldUser,
    Hammer,
  } as const;

  type FeatureIcon = keyof typeof iconMap;

  const featuresContents: {
    title: string;
    icon: FeatureIcon;
    context: string[];
  }[] = [
    {
      title: "Core",
      icon: "Brain",
      context: [
        "Inventory management (WIP)",
        "Point of sale integration",
        "Customer relationship management",
        "Order and fulfillment management",
      ],
    },
    {
      title: "Admin",
      icon: "ShieldUser",
      context: [
        "Analytics and reporting",
        "Employee management",
        "Financial management",
        "Vendor and supplier coordination",
      ],
    },
    {
      title: "Developer",
      icon: "Hammer",
      context: [
        "Cross-platform app delivery",
        "Authentication-ready flows",
        "Stripe subscription hooks",
        "Modular dashboard pages",
      ],
    },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-y-auto px-5 py-16 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/65">
            What it handles
          </p>
          <h1 className="mt-5 text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Features for daily retail operations
          </h1>
        </div>

        <Carousel className="block md:hidden max-w-[calc(100vw-40px)] sm:max-w-screen">
          <CarouselContent>
            {featuresContents.map((item) => {
              const IconComponent = iconMap[item.icon];

              return (
                <CarouselItem key={item.title}>
                  <div className="rounded-lg border border-white/20 bg-white/10 p-5 backdrop-blur">
                    <h2 className="flex items-center gap-2 text-2xl font-bold">
                      {item.title}
                      {IconComponent && (
                        <IconComponent className="flex sm:hidden md:flex" />
                      )}
                    </h2>
                    <div className="flex">
                      <ul className="mt-2 text-sm leading-6 text-white/85">
                        {item.context.map((content) => (
                          <li key={content}>{content}</li>
                        ))}
                      </ul>
                      <div className="hidden flex-1 sm:flex justify-center">
                        {IconComponent && <IconComponent className="size-20" />}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>

        <div className="hidden md:grid gap-4 md:grid-cols-3">
          {featuresContents.map((item) => {
            const IconComponent = iconMap[item.icon];

            return (
              <div
                key={item.title}
                className="rounded-lg border border-white/20 bg-white/10 p-5 backdrop-blur"
              >
                <h2 className="flex items-center gap-2 text-2xl font-bold">
                  {item.title}
                  {IconComponent && <IconComponent />}
                </h2>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-white/85">
                  {item.context.map((content) => (
                    <li key={content}>{content}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
