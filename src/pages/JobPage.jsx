import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
import { toast } from "react-toastify";

// Import the job data directly from the JSON file
import jobsData from "../jobs.json";

const JobPage = () => {
  const { id } = useParams(); // Getting the job ID from the URL

  // Access the jobs array from the imported data
  const job = jobsData.jobs.find((job) => job.id === id);

  // If job is not found, show a message or handle it gracefully
  if (!job) {
    return <div>Job not found</div>;
  }

  const onDeleteClick = () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this listing?"
    );

    if (!confirm) return;

    // Handle the deletion logic here if necessary
    toast.success("Job deleted successfully");
    // After deletion, navigate back to the job listings
  };

  return (
    <>
      <section className="bg-gray-900">
        <div className="container m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="text-green-400 hover:text-green-500 flex items-center font-mono"
          >
            <FaArrowLeft className="mr-2" /> Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="bg-gray-800">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-gray-700 p-6 rounded-lg shadow-md text-center md:text-left font-mono">
                <div className="text-gray-300 mb-4 font-mono">{job.type}</div>
                <h1 className="text-3xl font-bold mb-4 text-green-400 font-mono">
                  {job.title}
                </h1>
                <div className="text-gray-300 mb-4 flex align-middle justify-center md:justify-start font-mono">
                  <FaMapMarker className="text-lg text-green-400 mr-2" />
                  <p className="text-green-400 font-mono">{job.location}</p>
                </div>
              </div>

              <div className="bg-gray-700 p-6 rounded-lg shadow-md mt-6 font-mono">
                <h3 className="text-green-400 text-lg font-bold mb-6">
                  Job Description
                </h3>

                <p className="mb-4 text-gray-300">{job.description}</p>

                <h3 className="text-green-400 text-lg font-bold mb-2">
                  Salary
                </h3>

                <p className="mb-4 text-gray-300">{job.salary}</p>
              </div>
            </main>

            {/* <!-- Sidebar --> */}
            <aside>
              {/* <!-- Company Info --> */}
              <div className="bg-gray-700 p-6 rounded-lg shadow-md font-mono">
                <h3 className="text-xl font-bold mb-6 text-green-400 font-mono">
                  Company Info
                </h3>

                <h2 className="text-2xl text-green-400">{job.company.name}</h2>

                <p className="my-2 text-gray-300">{job.company.description}</p>

                <hr className="my-4 border-gray-600" />

                <h3 className="text-lg text-green-400 font-mono">
                  Contact Email:
                </h3>

                <p className="my-2 bg-gray-600 p-2 font-bold text-gray-300 rounded">
                  {job.company.contactEmail}
                </p>

                <h3 className="text-lg text-green-400 font-mono">
                  Contact Phone:
                </h3>

                <p className="my-2 bg-gray-600 p-2 font-bold text-gray-300 rounded">
                  {job.company.contactPhone}
                </p>
              </div>

              {/* <!-- Manage --> */}
              <div className="bg-gray-700 p-6 rounded-lg shadow-md mt-6 font-mono">
                <h3 className="text-xl font-bold mb-6 text-green-400">
                  Manage Job
                </h3>
                <Link
                  to={`/edit-job/${job.id}`}
                  className="bg-green-400 hover:bg-green-500 text-gray-900 text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  E-D-I-T
                </Link>
                <button
                  onClick={onDeleteClick}
                  className="bg-red-500 hover:bg-red-600 text-gray-900  font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  D-E-L-E-T-E
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobPage;

// import { useParams, useLoaderData, useNavigate } from "react-router-dom";
// import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";

// const JobPage = ({ deleteJob }) => {
//   const { id } = useParams();
//   const job = useLoaderData();
//   const navigate = useNavigate();

//   const onDeleteClick = (jobId) => {
//     const confirm = window.confirm(
//       "Are you sure you want to delete this listing?"
//     );

//     if (!confirm) return;
//     deleteJob(jobId);
//     toast.success("Job deleted successfully");
//     navigate("/jobs");
//   };

//   return (
//     <>
//       <section className="bg-gray-900">
//         <div className="container m-auto py-6 px-6">
//           <Link
//             to="/jobs"
//             className="text-green-400 hover:text-green-500 flex items-center font-mono"
//           >
//             <FaArrowLeft className="mr-2" /> Back to Job Listings
//           </Link>
//         </div>
//       </section>

//       <section className="bg-gray-800">
//         <div className="container m-auto py-10 px-6">
//           <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
//             <main>
//               <div className="bg-gray-700 p-6 rounded-lg shadow-md text-center md:text-left font-mono">
//                 <div className="text-gray-300 mb-4 font-mono">{job.type}</div>
//                 <h1 className="text-3xl font-bold mb-4 text-green-400 font-mono">
//                   {job.title}
//                 </h1>
//                 <div className="text-gray-300 mb-4 flex align-middle justify-center md:justify-start font-mono">
//                   <FaMapMarker className="text-lg text-green-400 mr-2" />
//                   <p className="text-green-400 font-mono">{job.location}</p>
//                 </div>
//               </div>

//               <div className="bg-gray-700 p-6 rounded-lg shadow-md mt-6 font-mono">
//                 <h3 className="text-green-400 text-lg font-bold mb-6">
//                   Job Description
//                 </h3>

//                 <p className="mb-4 text-gray-300">{job.description}</p>

//                 <h3 className="text-green-400 text-lg font-bold mb-2">
//                   Salary
//                 </h3>

//                 <p className="mb-4 text-gray-300">{job.salary}</p>
//               </div>
//             </main>

//             {/* <!-- Sidebar --> */}
//             <aside>
//               {/* <!-- Company Info --> */}
//               <div className="bg-gray-700 p-6 rounded-lg shadow-md font-mono">
//                 <h3 className="text-xl font-bold mb-6 text-green-400 font-mono">
//                   Company Info
//                 </h3>

//                 <h2 className="text-2xl text-green-400">{job.company.name}</h2>

//                 <p className="my-2 text-gray-300">{job.company.description}</p>

//                 <hr className="my-4 border-gray-600" />

//                 <h3 className="text-lg text-green-400 font-mono">
//                   Contact Email:
//                 </h3>

//                 <p className="my-2 bg-gray-600 p-2 font-bold text-gray-300 rounded">
//                   {job.company.contactEmail}
//                 </p>

//                 <h3 className="text-lg text-green-400 font-mono">
//                   Contact Phone:
//                 </h3>

//                 <p className="my-2 bg-gray-600 p-2 font-bold text-gray-300 rounded">
//                   {job.company.contactPhone}
//                 </p>
//               </div>

//               {/* <!-- Manage --> */}
//               <div className="bg-gray-700 p-6 rounded-lg shadow-md mt-6 font-mono">
//                 <h3 className="text-xl font-bold mb-6 text-green-400">
//                   Manage Job
//                 </h3>
//                 <Link
//                   to={`/edit-job/${job._id}`}
//                   className="bg-green-400 hover:bg-green-500 text-gray-900 text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
//                 >
//                   E-D-I-T
//                 </Link>
//                 <button
//                   onClick={() => onDeleteClick(job._id)}
//                   className="bg-red-500 hover:bg-red-600 text-gray-900  font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
//                 >
//                   D-E-L-E-T-E
//                 </button>
//               </div>
//             </aside>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// const jobLoader = async ({ params }) => {
//   const res = await fetch(`http://localhost:9000/api/jobs/${params.id}`);
//   const data = await res.json();
//   return data;
// };

// export { JobPage as default, jobLoader };
