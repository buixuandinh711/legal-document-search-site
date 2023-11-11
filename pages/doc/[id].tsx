import DocContent from "@/components/DocDetail/DocContent";
import DocPropBox from "@/components/DocDetail/DocPropBox";

export default function DocDetail() {
  return (
    <div className="container mt-12 flex gap-8">
      <DocContent />
      <DocPropBox />
    </div>
  );
}
