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
    <>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-primary text-white">
            <th className="w-1/5 rounded-tl border-r border-white p-1 last:border-none">{"Số hiệu"}</th>
            <th className="w-1/5 border-r border-white p-1 last:border-none">{"Ngày ban hành"}</th>
            <th className=" last:border-r-none rounded-tr border-r border-white p-1">{"Tên"}</th>
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
      {docsList.length === 0 && <div className="text-center py-2 text-xl text-gray-400 font-bold">There is no document published yet</div>}
    </>
  );
}
