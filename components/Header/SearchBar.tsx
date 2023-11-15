import { useRouter } from "next/router";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const { search } = router.query;
  let [searchText, setSearchText] = useState(() => {
    if (search === undefined) {
      return "";
    } else if (typeof search === "string") {
      return search;
    } else {
      return search[0];
    }
  });

  return (
    <form
      className="flex items-center justify-between gap-1"
      onSubmit={async (e) => {
        e.preventDefault();
        if (searchText) {
          const newQuery = {
            ...router.query,
          };

          delete newQuery.slug;
          newQuery.search = searchText;

          const basePath = router.asPath.split("?")[0];
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
        }
      }}
    >
      <input
        type="text"
        name=""
        placeholder="Nhập từ khóa tìm kiếm..."
        className=" h-10 flex-1 rounded border border-grayborder p-1 text-base"
        autoComplete="search"
        id="search"
        value={searchText}
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
      />
      <button className="inline-flex h-10 items-center justify-center rounded bg-primary px-4 text-white" type="submit">
        Tìm
      </button>
    </form>
  );
}
