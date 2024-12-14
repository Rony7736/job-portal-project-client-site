import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
    const { _id, title, company, company_logo, requirements, description, location, salaryRange } = job

    return (
        <div className="card card-compact bg-base-100 shadow-xl px-2 py-4 border">
            <div className="flex gap-3">
                <figure>
                    <img className="w-16" src={company_logo} alt="" />
                </figure>
                <div>
                    <h4 className="text-2xl">{company}</h4>
                    <p className="flex items-center gap-2"><IoLocationOutline /> {location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <div className="flex gap-2 flex-wrap mt-4">
                    {
                        requirements.map((requirement, index) => <p className="border rounded-md text-center px-2 hover:text-yellow-800 hover:bg-green-300 hover:font-semibold" key={index}>{requirement}</p>)
                    }
                </div>

                <div className="card-actions flex-row items-center justify-end">
                    <p> Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>

                    <Link to= {`/jobs/${_id}`}><button className="btn btn-primary">Apply</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HotJobCard;