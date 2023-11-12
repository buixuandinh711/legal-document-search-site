import DocumentList, { DocumentItem } from "@/components/Home/DocumentsList";
import HomeSidebar from "@/components/Home/HomeSidebar";
import { queryAllDocs } from "@/db/document";
import { convertSecsToDate } from "@/utils/utils";
import { GetServerSideProps } from "next";

export default function Home({ docsList }: { docsList: DocumentItem[] }) {
  return (
    <>
      <main className="container mt-12 flex gap-8">
        <div className="h-[100vh[ flex-1 bg-white">
          <DocumentList docsList={docsList} />
        </div>
        <HomeSidebar />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  docsList: DocumentItem[];
}> = async () => {
  try {
    const queriedDocs = await queryAllDocs();
    const docsList: DocumentItem[] = queriedDocs.map((doc) => ({
      docContentHash: doc.documentContentHash,
      documentNumber: doc.number,
      name: doc.name,
      publishedDate: convertSecsToDate(doc.publishedTimestamp),
    }));

    return {
      props: {
        docsList: docsList,
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
