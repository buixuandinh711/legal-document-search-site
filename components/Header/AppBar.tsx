import Navigator from "@/components/Header/Navigator";
import { docTypes, ministries, provinces } from "@/db/static";
import Link from "next/link";

export default function AppBar() {
  return (
    <div className="h-12 w-full bg-primary text-lg  text-white">
      <div className="container flex h-full items-center justify-between gap-8">
        <nav className="h-full">
          <ul className="flex h-full items-center justify-between gap-4">
            <li className="flex h-full w-40 cursor-pointer items-center justify-center hover:bg-blue-600">
              <Link href={"/"}>{"Trang chủ"}</Link>
            </li>
            <Navigator name={"Trung ương"} items={ministries.map((item) => ({ name: item.name, href: `/?div=${item.id}` }))} />
            <Navigator
              name={"Địa phương"}
              items={provinces.map((item) => ({ name: item.name, href: `/?div=H${item.id}&div=K${item.id}` }))}
            />
            <Navigator name={"Loại văn bản"} items={docTypes.map((item) => ({ name: item.name, href: `/?docType=${item.name}` }))} />
          </ul>
        </nav>
      </div>
    </div>
  );
}
