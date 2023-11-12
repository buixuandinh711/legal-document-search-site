import Link from "next/link";

export default function AppBar() {
  return (
    <div className="h-12 w-full bg-primary text-lg  text-white">
      <div className="container flex h-full items-center justify-between gap-8">
        <nav className="h-full">
          <ul className="flex h-full items-center justify-between gap-4">
            <li className="flex h-full w-40 cursor-pointer items-center justify-center hover:bg-blue-600">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="flex h-full w-40 cursor-pointer items-center justify-center hover:bg-blue-600">
              <Link href={"#"}>Central Authority</Link>
            </li>
            <li className="flex h-full w-40 cursor-pointer items-center justify-center hover:bg-blue-600">
              <Link href={"#"}>Local Authority</Link>
            </li>
            <li className="flex h-full w-40 cursor-pointer items-center justify-center hover:bg-blue-600">
              <Link href={"#"}>Category</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
