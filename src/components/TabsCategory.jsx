import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';

const TabsCategory = ({ jobsData }) => {
  console.log(jobsData);
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4 text-center">Browse Jobs By Categories</h1>
      <p className="opacity-70 mb-4 text-center">
        Three categories available for the time being. They are Web Development, Graphics Design and
        Digital Marketing. Browse them by clicking on the tabs below.
      </p>
      <section>
        <Tabs>
          <div className="flex justify-center items-center">
            <TabList>
              <Tab>Title 1</Tab>
              <Tab>Title 2</Tab>
              <Tab>Title 2</Tab>
            </TabList>
          </div>

          <TabPanel>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {jobsData
                .filter((jobItem) => jobItem.category === 'web-development')
                .map((jobItem) => (
                  <JobCard key={jobItem?._id} jobItem={jobItem}></JobCard>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {jobsData
                .filter((jobItem) => jobItem.category === 'digital-marketing')
                .map((jobItem) => (
                  <JobCard key={jobItem?._id} jobItem={jobItem}></JobCard>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {jobsData
                .filter((jobItem) => jobItem.category === 'graphics-design')
                .map((jobItem) => (
                  <JobCard key={jobItem?._id} jobItem={jobItem}></JobCard>
                ))}
            </div>
          </TabPanel>
        </Tabs>
      </section>
    </div>
  );
};

export default TabsCategory;
