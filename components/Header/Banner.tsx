import Image from "next/image";
import { Homenaje } from "next/font/google";
import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/solid";

const homenaje = Homenaje({
  subsets: ["latin"],
  variable: "--font-homenaje",
  weight: "400",
});

export default function Banner() {
  return (
    <div className="relative h-40 bg-white">
      <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <DocumentMagnifyingGlassIcon className="text-primary h-12 w-12 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20" />
        <h1 className={`${homenaje.className} text-primary font-homenaje text-3xl font-bold sm:text-3xl md:text-4xl lg:text-5xl`}>
          Blockchain Legal Document System
        </h1>
      </div>
    </div>
  );
}
