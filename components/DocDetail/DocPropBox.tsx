import React from "react";

export interface DocumentDetail {
  docHash: string;
  documentNumber: string;
  documentName: string;
  documentType: string;
  publishDivision: string;
  publisher: string;
  publishedDate: string;
  signers: {
    signerName: string;
    positionName: string;
  }[];
}

export default function DocPropBox({ docDetail }: { docDetail: DocumentDetail }) {
  return (
    <div className="w-1/3">
      <div className="flex h-10 items-center rounded-t bg-primary p-2 font-semibold text-white">
        <h3 className="">Document Properties</h3>
      </div>
      <table className="w-full rounded-b bg-white p-2">
        <tbody>
          <tr className="even:bg-slate-50">
            <td className="w-2/5 border border-grayborder p-3">Document no.</td>
            <td className="w-3/5 border border-grayborder p-3">{docDetail.documentNumber}</td>
          </tr>
          <tr className="even:bg-slate-50">
            <td className="w-2/5 border border-grayborder p-3">Document name</td>
            <td className="w-3/5 border border-grayborder p-3">{docDetail.documentName}</td>
          </tr>
          <tr className="even:bg-slate-50">
            <td className="w-2/5 border border-grayborder p-3">Document type</td>
            <td className="w-3/5 border border-grayborder p-3">{docDetail.documentType}</td>
          </tr>
          <tr className="even:bg-slate-50">
            <td className="w-2/5 border border-grayborder p-3">Publishing division</td>
            <td className="w-3/5 border border-grayborder p-3">{docDetail.publishDivision}</td>
          </tr>
          <tr className="even:bg-slate-50">
            <td className="w-2/5 border border-grayborder p-3">Publisher</td>
            <td className="w-3/5 border border-grayborder p-3">{docDetail.publisher}</td>
          </tr>
          <tr className="even:bg-slate-50">
            <td className="w-2/5 border border-grayborder p-3">Published date</td>
            <td className="w-3/5 border border-grayborder p-3">{docDetail.publishedDate}</td>
          </tr>
          <tr className="even:bg-slate-50">
            <td className="w-2/5 border border-grayborder p-3">Signed by</td>
            <td className="w-3/5 border border-grayborder p-3">
              {docDetail.signers.map((signer) => `${signer.signerName} - ${signer.positionName}`).join(", ")}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
