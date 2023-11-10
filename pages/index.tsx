import DocumentList from "@/components/DocumentsList";
import Header from "@/components/Header";
import BannerDivider from "@/components/Header/BannerDivider";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      <Header />
      <BannerDivider/>
      <main className="container mt-8 flex gap-4">
        <div className="h-[100vh[ flex-1 bg-white">
          <DocumentList />
        </div>
        <Sidebar />
      </main>
    </>
  );
}
