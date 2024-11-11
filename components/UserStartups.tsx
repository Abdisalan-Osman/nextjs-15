import { client } from "@/sanity/lib/client";
import { USER_STARTUPS_QUERY } from "@/sanity/lib/queries";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";

export default async function UserStartups({ id }: { id: string }) {
  const startup = await client.fetch(USER_STARTUPS_QUERY, { id });

  return (
    <>
      {startup.length > 0 ? (
        startup.map((startup: StartupTypeCard) => (
          <StartupCard key={startup._id} post={startup} />
        ))
      ) : (
        <p className="no-result">No post yet</p>
      )}
    </>
  );
}
