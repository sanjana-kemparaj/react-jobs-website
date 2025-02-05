import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

const JobListing = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  let description = job.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + "...";
  }

  return (
    <div className="bg-gray-800 rounded-xl shadow-md relative font-mono">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-400 my-2 font-mono">{job.type}</div>
          <h3 className="text-xl font-bold text-green-400 font-mono">
            {job.title}
          </h3>
        </div>

        <div className="mb-5 text-gray-300">{description}</div>
        <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className="text-green-400 mb-5 hover:text-green-300 font-mono"
        >
          {showFullDescription ? "Less" : "More"}
        </button>

        <h3 className="text-green-400 mb-2 font-mono">{job.salary}</h3>

        <div className="border border-gray-700 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-400 mb-3 font-mono">
            <FaMapMarker className="inline text-lg mb-1 mr-1" />
            {job.location}
          </div>
          <Link
            to={`/jobs/${job.id}`}
            className="h-[36px] bg-gray-900 hover:bg-gray-700 text-green-400 px-4 py-2 rounded-lg text-center text-sm font-mono"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobListing;

// import { useState } from "react";
// import { FaMapMarker } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const JobListing = ({ job }) => {
//   const [showFullDescription, setShowFullDescription] = useState(false);
//   let description = job.description;

//   if (!showFullDescription) {
//     description = description.substring(0, 90) + "...";
//   }

//   return (
//     <div className="bg-gray-800 rounded-xl shadow-md relative font-mono">
//       <div className="p-4">
//         <div className="mb-6">
//           <div className="text-gray-400 my-2 font-mono">{job.type}</div>
//           <h3 className="text-xl font-bold text-green-400 font-mono">
//             {job.title}
//           </h3>
//         </div>

//         <div className="mb-5 text-gray-300">{description}</div>
//         <button
//           onClick={() => setShowFullDescription((prevState) => !prevState)}
//           className="text-green-400 mb-5 hover:text-green-300 font-mono"
//         >
//           {showFullDescription ? "Less" : "More"}
//         </button>

//         <h3 className="text-green-400 mb-2 font-mono">{job.salary}</h3>

//         <div className="border border-gray-700 mb-5"></div>

//         <div className="flex flex-col lg:flex-row justify-between mb-4">
//           <div className="text-orange-400 mb-3 font-mono">
//             <FaMapMarker className="inline text-lg mb-1 mr-1" />
//             {job.location}
//           </div>
//           <Link
//             to={`/jobs/${job._id}`}
//             className="h-[36px] bg-gray-900 hover:bg-gray-700 text-green-400 px-4 py-2 rounded-lg text-center text-sm font-mono"
//           >
//             Read More
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobListing;
