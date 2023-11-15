import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const currentYear = new Date().getFullYear();
const yearsArray = Array.from({ length: 10 }, (_, index) => (currentYear - index).toString());

export function YearFilter() {
  const router = useRouter();
  const { year } = router.query;
  let chonsenYears: string[];

  if (year === undefined) {
    chonsenYears = [];
  } else if (typeof year === "string") {
    chonsenYears = [year];
  } else {
    chonsenYears = year;
  }

  return (
    <aside className=" mb-8 w-full">
      <div className=" mb-5 w-full">
        <h2 className="relative  m-0 w-full text-base font-bold leading-normal  before:absolute before:-bottom-[5px] before:left-0 before:right-0 before:border-b-[3px] before:border-b-gray-300">
          <Link
            href=""
            className="relative py-[5px] pr-4 text-lg font-bold text-primary  after:absolute after:-bottom-[3px] after:left-0 after:right-4 after:border-b-[3px] after:border-b-primary"
          >
            <span>Năm ban hành</span>
          </Link>
        </h2>
      </div>
      <div className=" w-full bg-boldbg py-4 pr-1">
        <ul className="m-0 max-h-[140px] list-none overflow-y-auto pl-4">
          {yearsArray.map((year, index) => (
            <li key={year} className=" m-0 w-full cursor-pointer p-0 leading-loose">
              <span className="cursor-pointer text-sm font-normal ">
                <label htmlFor={`filter-year-${year.toLocaleLowerCase()}`} className="mb-[2px] block cursor-pointer">
                  <input
                    type="checkbox"
                    id={`filter-year-${year.toLocaleLowerCase()}`}
                    className="form-checkbox mr-2 h-3 w-3 border-primary p-0  focus:ring-0"
                    checked={chonsenYears.includes(year)}
                    onChange={() => {
                      const basePath = router.asPath.split("?")[0];
                      let newChosen;

                      if (chonsenYears.includes(year)) {
                        newChosen = chonsenYears.filter((chosen) => chosen !== year);
                      } else {
                        newChosen = chonsenYears.concat(year);
                      }

                      const newQuery = {
                        ...router.query,
                      };

                      delete newQuery.slug;
                      newQuery.year = newChosen;

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
                  {(() => {
                    if (index === 0) return "Năm nay";
                    return year;
                  })()}
                </label>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
