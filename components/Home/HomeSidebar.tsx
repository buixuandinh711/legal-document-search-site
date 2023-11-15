import { DivisionFilter } from "@/components/Home/DivisionFilter";
import { DocTypeFilter } from "@/components/Home/DocTypeFilter";
import { YearFilter } from "@/components/Home/YearFilter";
import { docTypes, ministries, provinces_commitee, provinces_council } from "@/db/static";
import { DocumentType } from "@/db/document";

export default function HomeSidebar() {
  return (
    <aside className="flex w-1/4 flex-col gap-8">
      <DocTypeFilter docTypesList={docTypes} />
      <YearFilter />
      <DivisionFilter name={"Chính phủ, Bộ, Cơ quan ngang bộ"} divisionsList={ministries} />
      <DivisionFilter name={"Ủy ban nhân dân"} divisionsList={provinces_commitee} />
      <DivisionFilter name={"Hội đồng nhân dân"} divisionsList={provinces_council} />
    </aside>
  );
}
