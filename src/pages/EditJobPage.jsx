import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

const EditJobPage = ({ updateJobSubmit }) => {
  const job = useLoaderData();
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState(job.title);
  const [type, setType] = useState(job.type);
  const [location, setLocation] = useState(job.location);
  const [description, setDescription] = useState(job.description);
  const [salary, setSalary] = useState(job.salary);
  const [companyName, setCompanyName] = useState(job.company.name);
  const [companyDescription, setCompanyDescription] = useState(
    job.company.description
  );
  const [contactEmail, setContactEmail] = useState(job.company.contactEmail);
  const [contactPhone, setContactPhone] = useState(job.company.contactPhone);

  const submitForm = (e) => {
    e.preventDefault();

    const updatedJob = {
      _id: job._id,
      title,
      type,
      location,
      description,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };
    updateJobSubmit(updatedJob);
    toast.success("Job Updated Successfully");
    setTimeout(() => {
      window.location.href = `/jobs/${job._id}`;
    }, 100);
  };

  return (
    <section className="bg-gray-900 px-4 py-10 font-mono">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-green-400 mb-6 text-center font-mono">
          Edit Job
        </h2>

        <div className="bg-gray-800 text-white p-8 flex flex-col justify-center items-center rounded-md shadow-md">
          <form onSubmit={submitForm} className="w-[90%] mt-5 mb-5">
            <div className="mb-6">
              <label
                htmlFor="type"
                className="block text-gray-300 font-bold mb-2"
              >
                Job Type
              </label>
              <select
                id="type"
                name="type"
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="mb-6">
              <label
                htmlFor="title"
                className="block text-gray-300 font-bold mb-2"
              >
                Job Title
              </label>
              <input
                type="text"
                id="title"
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter job title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="description"
                className="block text-gray-300 font-bold mb-2"
              >
                Job Description
              </label>
              <textarea
                id="description"
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                rows="4"
                placeholder="Enter job description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="mb-6">
              <label
                htmlFor="salary"
                className="block text-gray-300 font-bold mb-2"
              >
                Salary Range
              </label>
              <select
                id="salary"
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              >
                <option value="Under $50K">Under $50K</option>
                <option value="$50K - 60K">$50K - $60K</option>
                <option value="$60K - 70K">$60K - $70K</option>
                <option value="$70K - 80K">$70K - $80K</option>
                <option value="$80K - 90K">$80K - $90K</option>
                <option value="$90K - 100K">$90K - $100K</option>
                <option value="$100K - 125K">$100K - $125K</option>
                <option value="$125K - 150K">$125K - $150K</option>
                <option value="$150K - 175K">$150K - $175K</option>
                <option value="$175K - 200K">$175K - $200K</option>
                <option value="Over $200K">Over $200K</option>
              </select>
            </div>

            <div className="mb-6">
              <label
                htmlFor="location"
                className="block text-gray-300 font-bold mb-2"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>

            <h3 className="text-2xl text-green-400 mb-4">Company Info</h3>

            <div className="mb-6">
              <label
                htmlFor="companyName"
                className="block text-gray-300 font-bold mb-2"
              >
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter company name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="companyDescription"
                className="block text-gray-300 font-bold mb-2"
              >
                Company Description
              </label>
              <textarea
                id="companyDescription"
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                rows="4"
                placeholder="Enter company description"
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-6">
              <label
                htmlFor="contactEmail"
                className="block text-gray-300 font-bold mb-2"
              >
                Contact Email
              </label>
              <input
                type="email"
                id="contactEmail"
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter contact email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="contactPhone"
                className="block text-gray-300 font-bold mb-2"
              >
                Contact Phone
              </label>
              <input
                type="tel"
                id="contactPhone"
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter contact phone"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-1/2 mt-4 bg-gray-900 border border-green-400 text-green-400 rounded-lg px-4 py-2 hover:bg-gray-700 hover:text-green-300 font-mono"
              >
                Update Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditJobPage;
