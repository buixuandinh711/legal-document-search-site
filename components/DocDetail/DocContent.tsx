export default function DocContent({ docUri }: { docUri: string }) {
  return (
    <div className=" w-2/3 rounded">
      <div className="flex h-10 items-center rounded-t bg-primary p-2 font-semibold text-white">
        <h3 className="">Document Content</h3>
      </div>
      <div className="bg-white p-4">
        <object data={docUri} datatype="application/pdf" className="h-screen w-full object-scale-down" />
      </div>
    </div>
  );
}
