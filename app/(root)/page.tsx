"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

import PodcastCard from "@/components/PodcastCard";
import LoaderSpinner from "@/components/LoaderSpinner";

function Home() {
  const trendingPodcasts = useQuery(api.podcasts.getTrendingPodcasts);

  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending podcasts</h1>

        {trendingPodcasts ? (
          <div className="podcast_grid pb-5">
            {trendingPodcasts?.map(
              ({ _id, podcastTitle, podcastDescription, imageUrl }) => (
                <PodcastCard
                  key={_id}
                  title={podcastTitle}
                  description={podcastDescription}
                  imgUrl={imageUrl!}
                  podcastId={_id}
                />
              )
            )}
          </div>
        ) : (
          <LoaderSpinner />
        )}
      </section>
    </div>
  );
}

export default Home;
