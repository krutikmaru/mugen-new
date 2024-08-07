"use client";
import { services } from "@/app/lib/data/services";
import ContentArea from "@/app/ui/components/services/ContentArea";
import VisualArea from "@/app/ui/components/services/VisualArea";
import ActionArea from "@/app/ui/components/services/ActionArea";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Service, Slide } from "@/app/lib/types/service";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function Page({ params }: { params: { serviceId: string } }) {
  const router = useRouter();
  const service = services.find((s) => s.id === params.serviceId);
  if (!service) {
    router.push("/");
    return;
  }

  return (
    <div className="p-5 sm:p-10 pt-24 mt-0 sm:mt-24 bg-white dark:bg-black w-screen h-full lg:h-screen flex flex-col lg:flex-row justify-start lg:justify-center items-start space-y-10 lg:space-y-0 space-x-0 lg:space-x-2">
      <ContentArea service={service} />
      <VisualArea service={service} />
      <ActionArea service={service} />
    </div>
  );
}

export default Page;
