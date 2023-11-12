import { useRouter } from "next/router";

export interface DocumentItem {
  docContentHash: string;
  documentNumber: string;
  publishedDate: string;
  name: string;
}

export default function DocumentList({ docsList }: { docsList: DocumentItem[] }) {
  const router = useRouter();

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-primary text-white">
          <th className="w-1/5 rounded-tl border border-r border-white p-1 last:border-none">Document Number</th>
          <th className="w-1/5 border-r border-white p-1 last:border-none">Published Date</th>
          <th className=" last:border-r-none rounded-tr border-r border-white p-1">Name</th>
        </tr>
      </thead>
      <tbody>
        {docsList.map((doc) => (
          <tr
            key={doc.documentNumber}
            className="cursor-pointer even:bg-slate-50"
            onClick={() => {
              router.push(`doc/${doc.docContentHash}`);
            }}
          >
            <td className="border border-grayborder p-2">
              <div className="flex min-h-[100px] items-center justify-center ">
                <span>{doc.documentNumber}</span>
              </div>
            </td>
            <td className="border border-grayborder p-2">
              <div className="flex min-h-[100px] items-center justify-center ">
                <span>{doc.publishedDate}</span>
              </div>
            </td>
            <td className="border border-grayborder p-2">
              <div className="flex min-h-[100px] items-center ">
                <span>{doc.name}</span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
