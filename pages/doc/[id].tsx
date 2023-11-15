import DocContent from "@/components/DocDetail/DocContent";
import DocPropBox, { DocumentDetail } from "@/components/DocDetail/DocPropBox";
import { queryDocById, queryDocSigners } from "@/db/document";
import { convertSecsToDate } from "@/utils/utils";
import { GetServerSideProps } from "next";

export default function DocDetail({ docDetail, docUri }: { docDetail: DocumentDetail; docUri: string }) {
  return (
    <div className="container mt-12 flex gap-8">
      <DocContent docUri={docUri} />
      <DocPropBox docDetail={docDetail} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<{
  docDetail: DocumentDetail;
  docUri: string;
}> = async (context) => {
  try {
    const id = context.params!.id;

    if (!(typeof id == "string") || !id.match(/^([0-9A-Fa-f][0-9A-Fa-f])+$/)) {
      return {
        redirect: {
          destination: "/500",
          permanent: false,
        },
      };
    }

    const [docDetailQuery, docSignersQuery] = await Promise.all([queryDocById(id), queryDocSigners(id)]);
    const docDetail: DocumentDetail = {
      docHash: docDetailQuery.documentContentHash,
      documentNumber: docDetailQuery.number,
      documentName: docDetailQuery.name,
      documentType: docDetailQuery.docType,
      publishDivision: docDetailQuery.divisionName,
      publisher: docDetailQuery.officerName + " - " + docDetailQuery.positionName,
      publishedDate: convertSecsToDate(Math.floor(docDetailQuery.publishedTimestamp.getTime() / 1000)),
      signers: docSignersQuery,
    };

    return {
      props: {
        docDetail,
        docUri: docDetailQuery.resourceUri,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      redirect: {
        destination: "/500",
        permanent: false,
      },
    };
  }
};
