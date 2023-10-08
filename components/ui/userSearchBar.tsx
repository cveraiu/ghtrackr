"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function UserSearchBar() {
  const router = useRouter();
  const [user, setUser] = useState("");
  return (
    <>
      <input
        className="mr-5 px-2 rounded-lg"
        type="text"
        placeholder="Enter a user"
        onChange={(e) => {
          setUser(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            router.push(`/${user}`);
          }
        }}
      />
      <button className="bg-[#141f1a] text-white px-2 rounded-xl">
        <Link href={`/${user}`}>Search</Link>
      </button>
    </>
  );
}
