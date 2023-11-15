import Link from "next/link";

export default function Navigator({ name, items }: { name: string; items: { name: string; href: string }[] }) {
  return (
    <li className="group relative flex h-full w-40 cursor-pointer items-center justify-center hover:bg-blue-600">
      <div className="flex h-full w-40 cursor-pointer items-center justify-center hover:bg-blue-600">
        <span>{name}</span>
      </div>
      <div className="absolute left-0 top-full hidden z-20 lg:min-w-[1000px] min-w-[800px] sm:min-[400]: translate-y-10 bg-white p-2 text-black group-hover:block">
        <ul className="grid grid-cols-3 text-sm drop-shadow-2xl sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <li key={idx} className="hover:bg-boldbg p-4">
              <Link href={item.href} className="line-clamp-1 text-ellipsis">{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
