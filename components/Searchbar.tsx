"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { Input } from "./ui/input";
import { Router } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const Searchbar = () => {
    const [search, setSearch] = useState("");
    const router = useRouter();
    const pathname = usePathname();

  useEffect(() => {
    if (search) {
      router.push(`/discover?search=${search}`);
    } else if (!search && pathname === "/discover") {
      router.push("/discover");
    }
  }, [search, router, pathname]);

  return (
    <div className="relative mt-8 block">
      <Input
        className="input-class py-6 pl-12 focus-visible:ring-offset-orange-1"
        placeholder="Search for podcasts"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Image
        src="/icons/search.svg"
        alt="search"
        height={20}
        width={20}
        className="absolute top-3.5 left-4"
      />
    </div>
  );
};

export default Searchbar;
