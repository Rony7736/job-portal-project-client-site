import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const { _id, title, company_logo, company, applicationDeadline } = useLoaderData()

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl flex flex-col items-center justify-center p-4 border my-8">
                <figure className="">
                    <img className="w-16" src={company_logo} alt="" />
                </figure>
                <h4 className="text-2xl">Apply For: {company}</h4>
                <h2 className="card-title">{title}</h2>
                <p>{applicationDeadline}</p>

                <Link to={`/jobApply/${_id}`}>
                    <button className="btn btn-warning my-4">Apply Now</button>
                </Link>
            </div>
        </div>
    );
};

export default JobDetails;