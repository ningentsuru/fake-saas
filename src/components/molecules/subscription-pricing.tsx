"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface dataProps {
  link: string;
  priceId: string;
  price: string;
  duration: string;
}

interface SubscriptionPricingProps {
  data: dataProps;
  email?: string;
}

export default function SubscriptionPricing({
  data,
  email,
}: SubscriptionPricingProps) {
  return (
    <Button className="cursor-pointer">
      <Link href={`${data.link}?prefilled_email=${email}`}>
        Subscribe for {data.price}
      </Link>
    </Button>
  );
}
