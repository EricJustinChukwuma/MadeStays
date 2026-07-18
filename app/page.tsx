import Image from "next/image";
import Header from "@/components/layout/Header";
import Dashboard from "@/components/dashboard/Dashboard";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans">
      <Header />
      <Dashboard />
      
    </div>
  );
}
