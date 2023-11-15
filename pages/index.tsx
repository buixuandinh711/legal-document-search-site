import DocumentList, { DocumentItem } from "@/components/Home/DocumentsList";
import HomeSidebar from "@/components/Home/HomeSidebar";
import SearchResult from "@/components/Home/SearchResult";
import { DocumentType, queryDocTypes, queryDocs } from "@/db/document";
import { convertQueryParam, convertSecsToDate } from "@/utils/utils";
import { GetServerSideProps } from "next";

export default function Home({ docsList }: { docsList: DocumentItem[] }) {
  return (
    <>
      <main className="container mt-12 ">
        <SearchResult resultNumber={docsList.length} />
        <div className="flex items-start gap-8">
          <HomeSidebar />
          <div className="flex-1 bg-white">
            <DocumentList docsList={docsList} />
          </div>
        </div>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  docsList: DocumentItem[];
}> = async (context) => {
  try {
    const { docType, year, div, search } = context.query;

    let normalizedSearch: string;
    if (search === undefined) {
      normalizedSearch = "";
    } else if (typeof search === "string") {
      normalizedSearch = search;
    } else {
      normalizedSearch = search[0];
    }

    const [queriedDocs] = await Promise.all([
      queryDocs({
        docType: convertQueryParam(docType),
        year: convertQueryParam(year),
        div: convertQueryParam(div),
        searchText: normalizedSearch,
      }),
    ]);
    const docsList: DocumentItem[] = queriedDocs.map((doc) => ({
      docContentHash: doc.documentContentHash,
      documentNumber: doc.number,
      name: doc.name,
      publishedDate: convertSecsToDate(Math.floor(doc.publishedTimestamp.getTime() / 1000)),
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
