import { Homenaje } from "next/font/google";
import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/solid";

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
          <DocumentMagnifyingGlassIcon className="h-12 w-12 text-primary sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20" />
          <h1 className={`${homenaje.className} font-homenaje text-3xl font-bold text-primary sm:text-3xl md:text-4xl lg:text-5xl`}>
            Blockchain Legal Document System
          </h1>
        </div>
        <div className="flex items-center justify-between gap-1">
          <input
            type="text"
            placeholder="Enter to search legal documents..."
            className=" h-10 flex-1 rounded border border-grayborder p-1 text-base"
          />
          <button className="inline-flex h-10 items-center justify-center rounded bg-primary px-4 text-white">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
