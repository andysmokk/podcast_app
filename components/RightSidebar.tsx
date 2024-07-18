"use client";

import { SignedIn, UserButton, useUser } from "@clerk/nextjs";
import { api } from "@/convex/_generated/api";
import Image from "next/image";
import Link from "next/link";

import Header from "./Header";
import Carousel from "./Carousel";
import { useQuery } from "convex/react";

const RightSidebar = () => {
  const { user } = useUser();
  4;
  const topPodcasters = useQuery(api.users.getTopUserByPodcastCount);
  console.log("🚀 ~ RightSidebar ~ topPodcasters:", topPodcasters);

  return (
    <section className="right_sidebar text-white-1">
      <SignedIn>
        <Link href={`/profile/${user?.id}`} className="flex gap-3 pb-12">
          <UserButton />
          <div className="flex w-full justify-between items-center">
            <h1 className="text-16 truncate font-semibold text-white-1">
              {user?.firstName} {user?.lastName}
            </h1>
            <Image
              src="/icons/right-arrow.svg"
              alt="arrow"
              width={24}
              height={24}
            />
          </div>
        </Link>
      </SignedIn>

      <section>
        <Header headerTitle="Fans Like you" />
        <Carousel fansLikeDetail={topPodcasters!} />
      </section>
    </section>
  );
};

export default RightSidebar;
