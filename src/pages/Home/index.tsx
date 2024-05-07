import Navbar from "../../components/Navbar";
import SearchBar from "./components/SearchBar";

const Home = () => {
  return (
    <div>
      <div className="relative">
        <div style={{ height: 450 }} className="overflow-hidden">
          <img src="https://images.unsplash.com/photo-1605036687969-9c2878c7395b" />
        </div>
        <div className="absolute top-0 w-full px-12 py-8">
          <Navbar />
        </div>
        <div className="absolute m-auto left-0 right-0 -bottom-8 border rounded-lg w-3/4 bg-white flex flex-row divide-x-2 gap-2 p-2">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Home;
