"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

import EmptyState from "@/components/EmptyState";
import LoaderSpinner from "@/components/LoaderSpinner";

const Discover = () => {
  const podcastData = useQuery(api.podcasts.getPodcastBySearch, { search: "" });

  return (
    <div className="flex flex-col gap-9">
      <div className="flex flex-col gap-9">
        <h1 className="text-20 font-bold text-white-1">Discover</h1>

        {podcastData ? (
          <>
            {podcastData.length > 0 ? (
              <div></div>
            ) : (
              <EmptyState title="No results found" />
            )}
          </>
        ) : (
          <LoaderSpinner />
        )}
      </div>
    </div>
  );
};

export default Discover;
