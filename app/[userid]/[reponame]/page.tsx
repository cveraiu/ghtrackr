import React from "react";
import CommitCard from "@/components/ui/commitCard";
import { Commit } from "@/types/commit";

export default async function page({
  params,
}: {
  params: { userid: string; reponame: string };
}) {
  const URL = `https://api.github.com/repos/${params.userid}/${params.reponame}/commits`;
  const res = await fetch(URL, { cache: "no-cache" });

  if (!res.ok) throw new Error("Fetching error");

  const commits = await res.json();

  return (
    <>
      <h2 className="my-4 text-xl text-center">
        List of commits - {params.reponame}
      </h2>
      <div className="flex flex-col gap-2 text-center">
        {commits.map((commit: Commit, key: number) => {
          return <CommitCard commit={commit} key={key} />;
        })}
      </div>
    </>
  );
}
