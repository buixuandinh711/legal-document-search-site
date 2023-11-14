import DocumentList, { DocumentItem } from "@/components/Home/DocumentsList";
import HomeSidebar from "@/components/Home/HomeSidebar";
import { DocumentType, queryAllDocs, queryDocTypes, queryDocs } from "@/db/document";
import { convertQueryParam, convertSecsToDate } from "@/utils/utils";
import { GetServerSideProps } from "next";

export default function Home({ docsList, docTypes }: { docsList: DocumentItem[]; docTypes: DocumentType[] }) {
  return (
    <>
      <main className="container mt-12 flex gap-8">
        <HomeSidebar docTypesList={docTypes} />
        <div className="h-[100vh[ flex-1 bg-white">
          <DocumentList docsList={docsList} />
        </div>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  docsList: DocumentItem[];
  docTypes: DocumentType[];
}> = async (context) => {
  try {
    const { docType, year } = context.query;

    const [queriedDocs, queriedDocTypes] = await Promise.all([queryDocs({ docType: convertQueryParam(docType) }), queryDocTypes()]);
    const docsList: DocumentItem[] = queriedDocs.map((doc) => ({
      docContentHash: doc.documentContentHash,
      documentNumber: doc.number,
      name: doc.name,
      publishedDate: convertSecsToDate(doc.publishedTimestamp),
    }));

    return {
      props: {
        docsList: docsList,
        docTypes: queriedDocTypes,
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
