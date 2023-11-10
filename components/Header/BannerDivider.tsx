import Image from "next/image";

export default function BannerDivider() {
  return (
    <div className="relative h-32">
      <Image
        src={"/legal_banner.jpg"}
        alt={"Banner"}
        fill
        sizes="100vw"
        priority
        placeholder="blur"
        blurDataURL="/image-loader.gif"
        className="object-none"
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 text-white">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-gray-500 opacity-70"></div>
        <div className="absolute z-10 left-0 right-0 top-4">
          <div className="container">
            {" "}
            <h3 className="text-center text-2xl font-semibold">
              A blockchain-powered legal document storage, search, and retrieval system.
            </h3>
            <p className="text-center">
              Welcome to the Blockchain-Powered Legal Document Storage System. Here, you can securely store, efficiently search, and swiftly
              retrieve legal normative documents. Our system ensures data integrity and security through blockchain technology, allowing for
              seamless and accurate searches within complex legal records.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
