import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";

const JobApply = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const {user} = useAuth()
    // console.log(user, id);
    


    const submitJobApplication = (e) => {
        e.preventDefault()
        const form = e.target
        const linkedin = form.linkedin.value
        const github = form.github.value
        const resume = form.resume.value
        // console.log(linkedin, github, resume);

        const jobApplication = {
            job_id: id,
            applicant_email : user.email,
            linkedin,
            github,
            resume
        }
        
        fetch("http://localhost:5000/job-applications", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(jobApplication)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert("Job apply Successfull")
            }
        })
        navigate("/myApplications")

    }

    return (
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
            <h1 className="text-5xl font-bold text-center p-4">Apply Job and good Luck</h1>
            <form onSubmit={submitJobApplication} className="card-body">

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">LinkedIn URL</span>
                    </label>
                    <input type="url" placeholder="LinkedIn URL" name="linkedin" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Github URL</span>
                    </label>
                    <input type="url" placeholder="Github URL" name="github" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Resume URL</span>
                    </label>
                    <input type="url" placeholder="Resume URL" name="resume" className="input input-bordered" required />
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-primary">Apply</button>
                </div>
            </form>
        </div>
    );
};

export default JobApply;