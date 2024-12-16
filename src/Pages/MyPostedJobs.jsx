import { useEffect, useState } from "react";
import useAuth from "../Hooks/UseAuth";

const MyPostedJobs = () => {

    const [jobs, setJobs] = useState([])
    const { user } = useAuth()

    useEffect(() => {
        fetch(`http://localhost:5000/jobs?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }, [user.email])

    return (
        <div>
            <h2 className="text-3xl">My Posted jobs: {jobs.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>job title</th>
                            <th>Deadline</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            jobs.map((job, index) => 
                            (<tr key={job._id} className="bg-base-200">
                                <th>{index + 1}</th>
                                <td>{job.title}</td>
                                <td>{job.applicationDeadline}</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedJobs;