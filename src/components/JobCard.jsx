import { Link } from 'react-router';

const JobCard = ({ jobItem }) => {
  const { _id, category, deadline, jobTitle, description, minPrice, maxPrice } = jobItem;
  console.log(jobItem);
  return (
    <>
      <Link
        to={`/jobDetails/${_id}`}
        className="max-w-2xl px-8 py-4 bg-gray-800 rounded-lg shadow-md "
      >
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-gray-300 ">
            {new Date(deadline).toLocaleDateString()}
          </span>
          <button className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">
            {category}
          </button>
        </div>

        <div className="mt-2">
          <h2 className="text-xl font-bold text-gray-300 hover:text-gray-600  hover:underline">
            {jobTitle}
          </h2>
          <p className="mt-2 text-gray-300 ">{description}</p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <p className="text-blue-600">
            Range : {minPrice} - {maxPrice} $
          </p>
        </div>
      </Link>
    </>
  );
};

export default JobCard;
