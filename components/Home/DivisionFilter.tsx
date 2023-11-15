import Link from "next/link";
import { useRouter } from "next/router";

export function DivisionFilter({ name, divisionsList }: { name: string; divisionsList: { id: string; name: string }[] }) {
  const router = useRouter();
  const { div } = router.query;
  let chonsenDivs: string[];

  if (div === undefined) {
    chonsenDivs = [];
  } else if (typeof div === "string") {
    chonsenDivs = [div];
  } else {
    chonsenDivs = div;
  }

  return (
    <aside className=" mb-8 w-full">
      <div className=" mb-5 w-full">
        <h2 className="relative  m-0 w-full text-base font-bold leading-normal  before:absolute before:-bottom-[5px] before:left-0 before:right-0 before:border-b-[3px] before:border-b-gray-300">
          <Link
            href=""
            className="relative py-[5px] pr-4 text-lg font-bold text-primary  after:absolute after:-bottom-[3px] after:left-0 after:right-4 after:border-b-[3px] after:border-b-primary"
          >
            <span>{name}</span>
          </Link>
        </h2>
      </div>
      <div className=" w-full bg-boldbg py-4 pr-1">
        <ul className="m-0 max-h-[140px] list-none overflow-y-auto pl-4">
          {divisionsList.map((div) => (
            <li key={div.id} className=" m-0 w-full cursor-pointer p-0 leading-loose">
              <span className="cursor-pointer text-sm font-normal ">
                <label htmlFor={`filter-div-${div.id}`} className="mb-[2px] block cursor-pointer">
                  <input
                    type="checkbox"
                    id={`filter-div-${div.id}`}
                    className="form-checkbox mr-2 h-3 w-3 border-primary p-0  focus:ring-0"
                    checked={chonsenDivs.includes(div.id)}
                    onChange={() => {
                      const basePath = router.asPath.split("?")[0];
                      let newChosen;

                      if (chonsenDivs.includes(div.id)) {
                        newChosen = chonsenDivs.filter((chosen) => chosen !== div.id);
                      } else {
                        newChosen = chonsenDivs.concat(div.id);
                      }

                      const newQuery = {
                        ...router.query,
                      };

                      delete newQuery.slug;
                      newQuery.div = newChosen;

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
                  {div.name}
                </label>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
