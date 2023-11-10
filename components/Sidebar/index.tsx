import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-1/4 flex-col gap-8 flex">
      <div className="">
        <div className="flex h-10 items-center rounded-t bg-primary p-2 font-semibold text-white">
          <h3 className="">CSDL văn bản</h3>
        </div>
        <div className="rounded-b bg-white p-2">
          <ul className="list-inside list-disc">
            <li className="py-1">
              <Link href="/csdl/van-ban-phap-luat">Văn bản pháp luật</Link>
            </li>
            <li className="py-1">
              <Link href="/csdl/cong-van">Công văn</Link>
            </li>
            <li className="py-1">
              <Link href="/csdl/tcvn">TCVN</Link>
            </li>
            <li className="py-1">
              <Link href="/csdl/du-thao">Dự thảo văn bản</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="">
        <div className="flex h-10 items-center rounded-t bg-primary p-2 font-semibold text-white">
          <h3 className="">CSDL văn bản</h3>
        </div>
        <div className="rounded-b bg-white p-2">
          <ul className="list-inside list-disc">
            <li className="py-1">
              <Link href="/csdl/van-ban-phap-luat">Văn bản pháp luật</Link>
            </li>
            <li className="py-1">
              <Link href="/csdl/cong-van">Công văn</Link>
            </li>
            <li className="py-1">
              <Link href="/csdl/tcvn">TCVN</Link>
            </li>
            <li className="py-1">
              <Link href="/csdl/du-thao">Dự thảo văn bản</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="">
        <div className="flex h-10 items-center rounded-t bg-primary p-2 font-semibold text-white">
          <h3 className="">CSDL văn bản</h3>
        </div>
        <div className="rounded-b bg-white p-2">
          <ul className="list-inside list-disc">
            <li className="py-1">
              <Link href="/csdl/van-ban-phap-luat">Văn bản pháp luật</Link>
            </li>
            <li className="py-1">
              <Link href="/csdl/cong-van">Công văn</Link>
            </li>
            <li className="py-1">
              <Link href="/csdl/tcvn">TCVN</Link>
            </li>
            <li className="py-1">
              <Link href="/csdl/du-thao">Dự thảo văn bản</Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
