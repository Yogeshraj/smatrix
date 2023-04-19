import Quadrants from "@/components/quadrants/Quadrants";
import Sidebar from "@/components/sidebar/Sidebar";

export default function Home() {
  return (
    <div className="container">
      <div className="grid grid-cols-[72%_27%] gap-4">
        <Quadrants />
        <Sidebar />
      </div>
    </div>
  );
}
