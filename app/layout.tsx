import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import UserSearchBar from "@/components/ui/userSearchBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GH Trackr",
  description: "GitHub Commit Tracker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section
          className="
          flex flex-col gap-5 w-screen md:w-[min(950px,_90%)]
          p-6 md:my-5
          md:rounded-xl
        mx-auto text-center
        bg-[#b5cfc4]"
        >
          <Link href="/">
            <h1 className="text-2xl font-semibold">GitHub Tracker</h1>
          </Link>
          <p className="">
            App that allows you to visualize all the commits in a repo
          </p>
          <div>
            <UserSearchBar />
          </div>
        </section>

        <section className="md:w-[min(950px,_90%)] mx-auto my-4">
          {children}
        </section>

        <footer
          className="w-full md:w-[min(950px,_90%)] 
          mx-auto md:mb-4 p-5 
          text-white text-center md:rounded-xl text-sm
          bg-[#141f1a] "
        >
          <nav>Carlos Vera@2023 Fulltime Force Take Home test </nav>
        </footer>
      </body>
    </html>
  );
}
