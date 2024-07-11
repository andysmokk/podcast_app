import Image from "next/image";

const PodcastDetails = ({ params }: { params: { podcastId: string } }) => {
  return (
    <section className="flex w-full flex-col">
      <header className="mt-9 flex items-center justify-between">
        <h1 className="text-20 font-bold text-white-1">Currently</h1>
        <figure className="flex gap-3">
          <Image
            src="/icons/headphone.svg"
            alt="headphone"
            width={24}
            height={24}
          />
          {/* <h2 className="text-16 font-bold text-white-1">{podcast?.views}</h2> */}
        </figure>
      </header>
    </section>
  );
};

export default PodcastDetails;
