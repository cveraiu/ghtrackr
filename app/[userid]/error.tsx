"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error.cause);
  }, [error]);

  return (
    <div
      className="bg-[#5f917b] text-center text-white font-semibold
    md:rounded-xl py-5"
    >
      <h2>Error when trying to fetch data.</h2>
      <p>It may be due to:</p>
      <ul>
        <li>- Wrong user or repo</li>
        <li>- Reached the maximun amount of request to the GH Api</li>
        <li>- Internal server error </li>
      </ul>
      <button
        className="text-[#141f1a] underline"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
