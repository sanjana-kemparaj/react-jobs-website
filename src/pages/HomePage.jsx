import Hero from "../components/Hero";
import JobListings from "../components/JobListings";
import HomeCards from "../components/HomeCards";
import ViewAllJobs from "../components/ViewAllJobs";
import ShakingKeyboard from "../components/ShakingKeyboard";

const HomePage = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Hero />
      <div className="flex justify-center ">
        <div className="lg:flex md:flex justify-center align-center">
          <ShakingKeyboard />
          <HomeCards />
        </div>
      </div>

      <JobListings isHome={true} />
      <ViewAllJobs />
    </div>
  );
};

export default HomePage;
