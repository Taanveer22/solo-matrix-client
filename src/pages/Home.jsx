import Carousel from '../components/Carousel';
import TabsCategory from '../components/TabsCategory';

const Home = () => {
  return (
    <div>
      <div className="mb-8 lg:mb-16">
        <Carousel></Carousel>
      </div>
      <div className="">
        <TabsCategory></TabsCategory>
      </div>
    </div>
  );
};

export default Home;
