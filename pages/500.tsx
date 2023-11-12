export default function Error500() {
  return (
    <section className=" w-full">
      <div className="container">
        <div className="-mx-4">
          <div className="relative  min-h-[50vh] w-full px-4 py-8">
            <h1 className="text-6xl font-bold text-gray-800">500</h1>
            <h2 className="mb-4 text-3xl font-semibold text-gray-600">Server Error</h2>
            <p className="text-lg text-gray-500">Sorry, something went wrong with the server.</p>
            <p className="text-lg text-gray-500">Please try again later.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
