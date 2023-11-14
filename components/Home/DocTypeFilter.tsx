import { DocumentType } from "@/db/document";
import Link from "next/link";
import { useRouter } from "next/router";

export function DocTypeFilter({ docTypesList }: { docTypesList: DocumentType[] }) {
  const router = useRouter();
  const { docType } = router.query;
  let chonsenDocTypes: string[];

  if (docType === undefined) {
    chonsenDocTypes = [];
  } else if (typeof docType === "string") {
    chonsenDocTypes = [docType];
  } else {
    chonsenDocTypes = docType;
  }

  return (
    <aside className=" mb-8 w-full">
      <div className=" mb-5 w-full">
        <h2 className="relative  m-0 w-full text-base font-bold leading-normal  before:absolute before:-bottom-[5px] before:left-0 before:right-0 before:border-b-[3px] before:border-b-gray-300">
          <Link
            href=""
            className="relative py-[5px] pr-4 text-lg font-bold text-primary  after:absolute after:-bottom-[3px] after:left-0 after:right-4 after:border-b-[3px] after:border-b-primary"
          >
            <span>Document Type</span>
          </Link>
        </h2>
      </div>
      <div className=" w-full bg-gray-100 py-4 pr-1">
        <ul className="m-0 max-h-[140px] list-none overflow-y-auto pl-4">
          {docTypesList.map((docType) => (
            <li key={docType.id} className=" m-0 w-full cursor-pointer p-0 leading-loose">
              <span className="cursor-pointer text-sm font-normal ">
                <label htmlFor={`filter-docType-${docType.id}`} className="mb-[2px] block cursor-pointer">
                  <input
                    type="checkbox"
                    id={`filter-docType-${docType.id}`}
                    className="form-checkbox mr-2 h-3 w-3 border-primary p-0  focus:ring-0"
                    checked={chonsenDocTypes.includes(docType.name)}
                    onChange={() => {
                      const basePath = router.asPath.split("?")[0];
                      let newChosen;

                      if (chonsenDocTypes.includes(docType.name)) {
                        newChosen = chonsenDocTypes.filter((chosen) => chosen !== docType.name);
                      } else {
                        newChosen = chonsenDocTypes.concat(docType.name);
                      }

                      const newQuery = {
                        ...router.query,
                      };

                      delete newQuery.slug;
                      newQuery.docType = newChosen;

                      router.replace(
                        {
                          pathname: basePath,
                          query: newQuery,
                        },
                        undefined,
                        {
                          scroll: false,
                        },
                      );
                    }}
                  />
                  {docType.name}
                </label>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
