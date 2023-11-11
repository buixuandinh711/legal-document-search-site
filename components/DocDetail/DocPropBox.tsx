import Link from "next/link";

export default function DocPropBox() {
  return (
    <div className="w-1/3">
      <div className="flex h-10 items-center rounded-t bg-primary p-2 font-semibold text-white">
        <h3 className="">Document Properties</h3>
      </div>
      <table className="w-full rounded-b bg-white p-2">
        <tr className="even:bg-slate-50">
          <td className="w-2/5 border border-grayborder p-3">Document no.</td>
          <td className="w-3/5 border border-grayborder p-3">21/2023/QH15</td>
        </tr>
        <tr className="even:bg-slate-50">
          <td className="w-2/5 border border-grayborder p-3">Document name</td>
          <td className="w-3/5 border border-grayborder p-3">{"LUẬT SỬA ĐỔI, BỔ SUNG MỘT SỐ ĐIỀU CỦA LUẬT CÔNG AN NHÂN DÂN"}</td>
        </tr>
        <tr className="even:bg-slate-50">
          <td className="w-2/5 border border-grayborder p-3">Document type</td>
          <td className="w-3/5 border border-grayborder p-3">{"Luật"}</td>
        </tr>
        <tr className="even:bg-slate-50">
          <td className="w-2/5 border border-grayborder p-3">{"Issuing agency"}</td>
          <td className="w-3/5 border border-grayborder p-3">{"Ministry of Transport"}</td>
        </tr>
        <tr className="even:bg-slate-50">
          <td className="w-2/5 border border-grayborder p-3">{"Published date"}</td>
          <td className="w-3/5 border border-grayborder p-3">{"01/01/2024"}</td>
        </tr>
        <tr className="even:bg-slate-50">
          <td className="w-2/5 border border-grayborder p-3">{"Effective date"}</td>
          <td className="w-3/5 border border-grayborder p-3">{"01/01/2024"}</td>
        </tr>
        <tr className="even:bg-slate-50">
          <td className="w-2/5 border border-grayborder p-3">{"Signed by"}</td>
          <td className="w-3/5 border border-grayborder p-3">{"Bui Xuan Dinh"}</td>
        </tr>
      </table>
    </div>
  );
}
