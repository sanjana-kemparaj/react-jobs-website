import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage from "./pages/JobPage";
import AddJobPage from "./pages/AddjobPage";
import EditJobPage from "./pages/EditJobPage";

/*
const addJob = async (newJob) => {
  try {
    const res = await fetch("http://localhost:9000/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });

    if (res.ok) {
      // After adding the job, refresh the job list
      fetchJobs();
    } else {
      console.error("Failed to add job");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

const updateJob = async (job) => {
  console.log(job._id);
  try {
    const res = await fetch(`http://localhost:9000/api/jobs/${job._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });

    if (!res.ok) {
      // If the response is not ok, throw an error
      throw new Error("Failed to update job");
    }

    const updatedJob = await res.json(); // Parse the response as JSON

    console.log("Job updated successfully:", updatedJob); // Optional: log the updated job
    return updatedJob; // Return the updated job
  } catch (error) {
    console.error("Error updating job:", error.message); // Handle errors here
    return null; // Return null if something goes wrong
  }
};

//delete job
const deleteJob = async (id) => {
  const res = await fetch(`http://localhost:9000/api/jobs/${id}`, {
    // Use full URL
    method: "DELETE",
  });

  if (!res.ok) {
    console.error("Failed to delete job");
    return;
  }

  console.log("Job deleted successfully");
};
*/

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/jobs/:id" element={<JobPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/jobs/:id" element={<JobPage /*deleteJob={deleteJob}*/ />} />
      <Route
        path="/add-job"
        element={<AddJobPage /*addJobSubmit={addJob}*/ />}
      />
      <Route
        path="/edit-job/:id"
        element={<EditJobPage /*updateJobSubmit={updateJob}*/ />}
      />
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
