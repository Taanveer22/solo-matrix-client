import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useLoaderData } from 'react-router';
import { toast } from 'react-toastify';
import useAuth from '../hooks/useAuth';
import useAxiosCommon from '../hooks/useAxiosCommon';

const JobCardDetails = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const axiosCommon = useAxiosCommon();
  const { user } = useAuth();
  const jobData = useLoaderData();
  console.log(jobData);
  const { _id, deadline, category, jobTitle, description, minPrice, maxPrice, client } = jobData;

  const handleBidFormSubmit = async (e) => {
    e.preventDefault();
    if (user?.email === client?.email) {
      return toast.error('Action not permitted');
    }

    // pick bid form data
    const bidPrice = parseFloat(e.target.bidPrice.value);
    if (bidPrice < parseFloat(minPrice)) {
      return toast.error('Bid at least min price');
    }
    const freelancerEmail = e.target.freelancerEmail.value;
    const comment = e.target.comment.value;
    const deadline = selectedDate;

    const bidData = {
      jobId: _id,
      jobTitle,
      category,
      clientEmail: client?.email,
      status: 'pending',
      bidPrice,
      freelancerEmail,
      comment,
      deadline,
    };

    console.log(bidData);

    try {
      const res = await axiosCommon.post(`/bids`, bidData);
      console.log(res?.data);
      if (res?.data?.insertedId) {
        toast.success('Bid placed successfully');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-around gap-5  items-center md:max-w-7xl mx-auto bg-gray-200 rounded-xl">
      {/* Job Details */}
      <div className="flex-1 px-4 py-7 rounded-md shadow-md md:min-h-87.5">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-gray-800">
            Deadline: {new Date(deadline).toLocaleDateString()}
          </span>
          <span className="px-4 py-1 text-xs text-blue-800 bg-blue-200 rounded-full ">
            {category}
          </span>
        </div>
        <div>
          <h1 className="mt-2 text-3xl font-semibold text-gray-800">{jobTitle}</h1>
          <p className="mt-2 text-lg text-gray-600">{description}</p>
          <p className="mt-6 text-sm font-bold text-gray-600 ">Client Details:</p>
          <div className="flex items-center gap-5">
            <div>
              <p className="mt-2 text-sm  text-gray-600">Name: {client?.name}</p>
              <p className="mt-2 text-sm  text-gray-600">Email: {client?.email}</p>
            </div>
            <div className="rounded-full object-cover overflow-hidden w-14 h-14">
              <img src={client?.photo} alt="Photo" />
            </div>
          </div>
          <p className="mt-6 text-lg font-bold text-gray-600 ">
            Range: ${minPrice} - ${maxPrice}
          </p>
        </div>
      </div>

      {/* Place A Bid Form */}
      <section className="p-6 w-full rounded-md shadow-md flex-1 md:min-h-87.5">
        <h2 className="text-lg font-semibold text-gray-700 capitalize ">Place A Bid</h2>
        <form onSubmit={handleBidFormSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700" htmlFor="bidPrice">
                Bid Price
              </label>
              <input
                id="bidPrice"
                type="number"
                name="bidPrice"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 border-2 border-black rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="freelancerEmail">
                Freelancer Email
              </label>
              <input
                value={user?.email || ''}
                id="freelancerEmail"
                type="email"
                name="freelancerEmail"
                readOnly
                className="block w-full px-4 py-2 mt-2 text-gray-700 border-2 border-black rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="comment">
                Comment
              </label>
              <input
                id="comment"
                name="comment"
                type="text"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700  border-2 border-black rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Deadline</label>

              {/* Date Picker Input Field */}
              <DatePicker
                className="border-2 border-black p-2 rounded-md w-full"
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                minDate={new Date()}
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Place Bid
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default JobCardDetails;
