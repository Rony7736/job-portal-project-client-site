import Swal from "sweetalert2";
import useAuth from "../Hooks/UseAuth";
import { useNavigate } from "react-router-dom";

const AddJob = () => {

    const {user} = useAuth()
    const navigate = useNavigate()

    const handleAddJob = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const initialData = Object.fromEntries(formData.entries())
        const {min, max, currency, ...newJob} = initialData
        newJob.salaryRange = {min, max, currency}

        // (/ r n ta kete array korar jonno ata kora hoise)
        newJob.requirements = newJob.requirements.split('\n')
        newJob.responsibilities = newJob.responsibilities.split('\n')
        console.log(newJob)

        fetch('http://localhost:5000/jobs', {
            "method" : "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newJob)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    icon: "success",
                    title: "Job has been added successfully",
                    showConfirmButton: false,
                    timer: 1500,
                  });

                  navigate('/myPostedJobs')
            }           
        })
        
    }

    return (
        <form onSubmit={handleAddJob} className="card-body">

            {/* Job Title */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Title</span>
                </label>
                <input type="text" placeholder="Job Title" name="title" className="input input-bordered" required />
            </div>

            {/* Job Location */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Job Location</span>
                </label>
                <input type="text" placeholder="Job Location" name="location" className="input input-bordered" required />
            </div>

            {/* Job Type */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Job Field</span>
                </label>
                <select defaultValue="Pick a Job Field" name="job_type" className="select select-ghost w-full max-w-xs">
                    <option disabled>Pick a Job Field</option>
                    <option>Engineering</option>
                    <option>Marketing</option>
                    <option>Finance</option>
                    <option>Teaching</option>
                </select>
            </div>

            {/* Job Category */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Job Type</span>
                </label>
                <select defaultValue="Pick a Job Type" name="category" className="select select-ghost w-full max-w-xs">
                    <option disabled>Pick a Job Type</option>
                    <option>Full-Time</option>
                    <option>Intern</option>
                    <option>Part-Time</option>
                </select>
            </div>

            {/* Salary Range */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Salary Range</span>
                    </label>
                    <input type="text" placeholder="Min" name="min" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <input type="text" placeholder="Max" name="max" className="input input-bordered" required />
                </div>
                <div className="form-control">
         
                    <select name="currency" className="select select-ghost w-full max-w-xs">
                        <option defaultValue="Currency" disabled>Currency</option>
                        <option>BDT</option>
                        <option>USD</option>
                        <option>INR</option>
                    </select>
                </div>
            </div>

             {/* Job Description */}
             <div className="form-control">
                <label className="label">
                    <span className="label-text">Description</span>
                </label>
                <textarea className="textarea textarea-bordered" name="description" placeholder="Job Description" required ></textarea>
            </div>

            {/* Company Name */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Company Name</span>
                </label>
                <input placeholder="Company Name" name="company" className="input input-bordered" required />
            </div>

            {/* Job Requirements */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Job Requirements</span>
                </label>
                <textarea className="textarea textarea-bordered" name="requirements" placeholder="Put each requirements in a new line" required ></textarea>
            </div>

            {/* Responsibilities */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Job Responsibilities</span>
                </label>
                <textarea className="textarea textarea-bordered" name="responsibilities" placeholder="Write each responsibilities in a new line" required ></textarea>
            </div>

            {/* HR Name */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">HR Name</span>
                </label>
                <input type="text" defaultValue={user?.displayName} placeholder="Hr Name" name="hr_name" className="input input-bordered" required />
            </div>

            {/* HR Email */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">HR Email</span>
                </label>
                <input type="email" defaultValue={user?.email} placeholder="HR Email" name="hr_email" className="input input-bordered" required />
            </div>

            {/* Application Deadline */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Deadline</span>
                </label>
                <input type="date" placeholder="Application Deadline" name="applicationDeadline" className="input input-bordered" required />
            </div>

            {/* Company Logo */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Company Logo URL</span>
                </label>
                <input type="text" placeholder="Company logo URL" name="company_logo" className="input input-bordered" required />
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
            </div>
        </form>
    );
};

export default AddJob;