import { useState } from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";
import jobsData from "../jobs.json"; // Import the dummy job data

const JobListings = ({ isHome = false }) => {
  const [jobs] = useState(jobsData.jobs); // Use the static job data
  const [loading, setLoading] = useState(false); // No API call, so no need for loading state

  return (
    <section className="bg-gray-900 px-4 py-10">
      <div className="container-xl mt-10 lg:container m-auto">
        <h2 className="text-3xl font-bold text-green-400 mb-6 text-center font-mono">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        <h3 className="text-xl text-gray-300 mb-6 text-center font-mono">
          {isHome ? "{ Here are your latest jobs }" : "{ Look for jobs here }"}
        </h3>

        {loading ? (
          <Spinner loading />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;

// import { useEffect, useState } from "react";
// import JobListing from "./JobListing";
// import Spinner from "./Spinner";

// const JobListings = ({ isHome = false }) => {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const fetchJobs = async () => {
//     const apiUrl = isHome
//       ? "http://localhost:9000/api/jobs?limit=3"
//       : "http://localhost:9000/api/jobs";
//     try {
//       const res = await fetch(apiUrl);
//       const data = await res.json();
//       setJobs(data);
//     } catch (error) {
//       console.log("error", error);
//     } finally {
//       setLoading(false);
//     }
//   };
//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   return (
//     <section className="bg-gray-900 px-4 py-10">
//       <div className="container-xl mt-10 lg:container m-auto">
//         <h2 className="text-3xl font-bold text-green-400 mb-6 text-center font-mono">
//           {isHome ? "Recent Jobs" : "Browse Jobs"}
//         </h2>
//         <h3 className="text-xl text-gray-300 mb-6 text-center font-mono">
//           {isHome ? "{ Here are your latest jobs }" : "{ Look for jobs here }"}
//         </h3>

//         {loading ? (
//           <Spinner loading />
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {jobs.map((job) => (
//               <JobListing key={job.id} job={job} />
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default JobListings;
