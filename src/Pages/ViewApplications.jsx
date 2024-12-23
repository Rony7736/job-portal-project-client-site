import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplications = () => {
    const applications = useLoaderData()

    const handleStatusUpdate = (e, id) => {
        const data = {
            status: e.target.value
        }
        fetch(`http://localhost:5000/job-applications/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        icon: "success",
                        title: "Status has been Updated",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
    }

    return (
        <div>
            <h2 className="text-3xl">Applications for this job: {applications.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Update Status</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            applications.map((app, index) =>
                            (<tr key={app._id}>
                                <td>{index + 1}</td>
                                <td>{app.applicant_email}</td>
                                <td></td>
                                <td>
                                    <select onChange={(e) => handleStatusUpdate(e, app._id)}
                                        defaultValue={app.status || "Change Status"}
                                        className="select select-bordered select-xs w-full max-w-xs">
                                        <option disabled>Change Status</option>
                                        <option>Under Review</option>
                                        <option>Set Review</option>
                                        <option>Hired</option>
                                        <option>Rejected</option>

                                    </select>
                                </td>
                            </tr>))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplications;