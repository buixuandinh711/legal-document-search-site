import Link from "next/link";

export default function HomeSidebar() {
  return (
    <aside className="flex w-1/4 flex-col gap-8">
      <div className="new-docs">
        <div className="flex h-10 items-center rounded-t bg-primary p-2 font-semibold text-white">
          <h3 className="">New Documents</h3>
        </div>
        <div className="rounded-b bg-white p-2">
          <ul className="list-inside list-disc">
            <li className="py-1">
              <Link href="/csdl/van-ban-phap-luat">New Law</Link>
            </li>
            <li className="py-1">
              <Link href="/csdl/cong-van">New Decision</Link>
            </li>
            <li className="py-1">
              <Link href="/csdl/tcvn">New Decree</Link>
            </li>
            <li className="py-1">
              <Link href="/csdl/du-thao">New Resolution</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="search-field">
        <div className="flex h-10 items-center rounded-t bg-primary p-2 font-semibold text-white">
          <h3 className="">Search Field</h3>
        </div>
        <div className="rounded-b bg-white p-2">
          <ul className="list-inside list-disc">
            <li className="py-1">
              <Link href="/csdl/van-ban-phap-luat">Land-Housing</Link>
            </li>
            <li className="py-1">
              <Link href="/csdl/cong-van">Enterprise</Link>
            </li>
            <li className="py-1">
              <Link href="/csdl/tcvn">Tax-free-fee</Link>
            </li>
            <li className="py-1">
              <Link href="/csdl/du-thao">Finance-Banking</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="">
        <div className="flex h-10 items-center rounded-t bg-primary p-2 font-semibold text-white">
          <h3 className="">Issuing Agency</h3>
        </div>
        <div className="rounded-b bg-white p-2">
          <ul className="list-inside list-disc">
            <li className="py-1">
              <Link href="/csdl/cong-van">Government</Link>
            </li>
            <li className="py-1">
              <Link href="/csdl/tcvn">Ministry</Link>
            </li>
            <li className="py-1">
              <Link href="/csdl/du-thao">{"People's Committee"}</Link>
            </li>
            <li className="py-1">
              <Link href="/csdl/du-thao">{"People's Council"}</Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
