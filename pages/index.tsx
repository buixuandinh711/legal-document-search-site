import DocumentList from "@/components/Home/DocumentsList";
import HomeSidebar from "@/components/Home/HomeSidebar";

export default function Home() {
  return (
    <>
      <main className="container mt-12 flex gap-8">
        <div className="h-[100vh[ flex-1 bg-white">
          <DocumentList />
        </div>
        <HomeSidebar />
      </main>
    </>
  );
}
