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
          <DocumentMagnifyingGlassIcon className="h-14 w-14 text-primary sm:h-12 sm:w-12 lg:h-16 lg:w-16" />
          <h1 className={`${homenaje.className} font-homenaje text-3xl font-bold text-primary sm:text-2xl lg:text-4xl`}>
            Blockchain Legal Document System
          </h1>
        </div>
        <div className="flex items-center justify-between gap-1">
          <input
            type="text"
            placeholder="Nhập từ khóa tìm kiếm..."
            className=" h-10 flex-1 rounded border border-grayborder p-1 text-base"
          />
          <button className="inline-flex h-10 items-center justify-center rounded bg-primary px-4 text-white">Tìm</button>
        </div>
      </div>
    </div>
  );
}
