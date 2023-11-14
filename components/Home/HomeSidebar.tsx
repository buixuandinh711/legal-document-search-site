import { DocTypeFilter } from "@/components/Home/DocTypeFilter";
import { YearFilter } from "@/components/Home/YearFilter";
import { DocumentType } from "@/db/document";
import Link from "next/link";

export default function HomeSidebar({ docTypesList }: { docTypesList: DocumentType[] }) {
  return (
    <aside className="flex w-1/4 flex-col gap-8">
      <DocTypeFilter docTypesList={docTypesList} />
      <YearFilter />
    </aside>
  );
}
