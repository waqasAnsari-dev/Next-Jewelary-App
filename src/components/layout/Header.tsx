import AnnouncementBar from "./AnnouncementBar";
import Navbar from "./Navbar";
import CategoryNav from "./CategoryNav";


export default function Header() {
  return (
    <header>
      <AnnouncementBar />
      <Navbar />
      <CategoryNav />
    </header>
  );
}