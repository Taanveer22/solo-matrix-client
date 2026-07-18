import { useLoaderData } from 'react-router';
import Carousel from '../components/Carousel';
import TabsCategory from '../components/TabsCategory';

const Home = () => {
  const jobsData = useLoaderData();
  return (
    <div>
      <div className="mb-8 lg:mb-16">
        <Carousel></Carousel>
      </div>
      <div className="">
        <TabsCategory jobsData={jobsData}></TabsCategory>
      </div>
    </div>
  );
};

export default Home;
