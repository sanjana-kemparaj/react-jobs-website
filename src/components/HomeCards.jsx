import { Link } from "react-router-dom";
import Card from "./Card";

const HomeCards = () => {
  return (
    <>
      <section>
        <div className="container-xl lg:container m-auto font-mono">
          <div className="grid grid-cols-1  gap-4 p-4 rounded-lg">
            <Card bg="bg-gray-800">
              <h2 className="text-2xl font-bold text-green-400 font-mono">
                For Developers
              </h2>
              <p className="mt-2 mb-4 text-gray-300">
                Browse our React jobs and start your career today
              </p>
              <Link
                to="/jobs"
                className="inline-block bg-gray-900 text-green-400 rounded-lg px-4 py-2 hover:bg-gray-700 hover:text-green-300 font-mono"
              >
                Browse Jobs
              </Link>
            </Card>
            <Card bg="bg-gray-800">
              <h2 className="text-2xl font-bold text-green-400 font-mono">
                For Employers
              </h2>
              <p className="mt-2 mb-4 text-gray-300">
                List your job to find the perfect developer for the role
              </p>
              <Link
                to="/add-job"
                className="inline-block bg-gray-900 text-green-400 rounded-lg px-4 py-2 hover:bg-gray-700 hover:text-green-300 font-mono"
              >
                Add Job
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCards;
