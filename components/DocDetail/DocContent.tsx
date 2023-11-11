export default function DocContent() {
  return (
    <div className=" w-2/3 rounded">
      <div className="flex h-10 items-center rounded-t bg-primary p-2 font-semibold text-white">
        <h3 className="">Document Content</h3>
      </div>
      <div className="bg-white p-4">
        <object
          data="https://storage.googleapis.com/legal_document_test/d247173d928ae5b2bb42da703a9deaaf226b2b6b465e8e60f10e85782d292906"
          datatype="application/text"
          className="h-screen w-full object-scale-down"
        />
      </div>
    </div>
  );
}
