import Link from "next/link";

export default function AppBar() {
  return (
    <div className="bg-primary h-16 w-full text-lg  text-white">
      <div className="container flex h-full items-center justify-between gap-8">
        <nav className="h-full">
          <ul className="flex h-full items-center justify-between gap-4">
            <li className="flex h-full w-40 items-center justify-center hover:bg-blue-600">
              <Link href={"#"}>Home</Link>
            </li>
            <li className="flex h-full w-40 items-center justify-center hover:bg-blue-600">
              <Link href={"#"}>Local Authorities</Link>
            </li>
            <li className="flex h-full w-40 items-center justify-center hover:bg-blue-600">
              <Link href={"#"}>Central Authorities</Link>
            </li>
            <li className="flex h-full w-40 items-center justify-center hover:bg-blue-600">
              <Link href={"#"}>Category</Link>
            </li>
          </ul>
        </nav>
        <input type="text" placeholder="Enter to search legal documents..." className=" max-w-[400px] flex-1 rounded p-2 text-base" />
      </div>
    </div>
  );
}
