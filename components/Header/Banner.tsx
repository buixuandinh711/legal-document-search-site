import { Homenaje } from "next/font/google";
import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/solid";
import SearchBar from "@/components/Header/SearchBar";

const homenaje = Homenaje({
  subsets: ["latin"],
  variable: "--font-homenaje",
  weight: "400",
});

export default function Banner() {
  return (
    <div className="bg-white">
      <div className="container flex h-40 items-center justify-between">
        <div className="flex w-3/4 min-w-[240px] items-center justify-start">
          <DocumentMagnifyingGlassIcon className="h-14 w-14 text-primary sm:h-12 sm:w-12 lg:h-16 lg:w-16" />
          <h1 className={`${homenaje.className} font-homenaje text-3xl font-bold text-primary sm:text-2xl lg:text-4xl`}>
            Blockchain Legal Document System
          </h1>
        </div>
        <SearchBar />
      </div>
    </div>
  );
}
