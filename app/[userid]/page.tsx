import Link from "next/link";
import { Repo } from "@/types/repo";

export default async function Page({ params }: { params: { userid: string } }) {
  const URL = `https://api.github.com/users/${params.userid}/repos`;
  const res = await fetch(URL, { cache: "no-cache" });

  if (!res.ok) throw new Error("Fetch error");

  const repos = await res.json();
  return (
    <>
      <h2 className="my-4 text-xl text-center">List of repositories</h2>
      <div className="flex flex-col gap-2 text-center">
        {repos.map((repo: Repo, key: number) => {
          return (
            <Link href={`/${params.userid}/${repo.name}`} key={key}>
              <div className="w-full p-4 bg-[#d7e5df] rounded-lg hover:bg-[#b5cfc4]">
                <h2>{repo.name}</h2>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
