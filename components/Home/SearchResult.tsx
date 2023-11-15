import { useRouter } from "next/router";

export default function SearchResult({ resultNumber }: { resultNumber: number }) {
  const router = useRouter();
  const { search } = router.query;

  if (search === undefined) {
    return <></>;
  }

  const searchText = typeof search === "string" ? search : search[0];

  return (
    <div className="mb-4 py-2 text-xl font-bold ">
      {resultNumber > 0
        ? `Tìm thấy ${resultNumber} kết quả cho từ khóa "${searchText}"`
        : `Không tìm thấy kết quả cho từ khóa ${searchText}`}
    </div>
  );
}
