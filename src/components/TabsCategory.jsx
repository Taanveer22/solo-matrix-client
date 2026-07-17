import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabsCategory = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4 text-center">Browse Jobs By Categories</h1>
      <p className="opacity-70 mb-4 text-center">
        Three categories available for the time being. They are Web Development, Graphics Design and
        Digital Marketing. Browse them by clicking on the tabs below.
      </p>
      <section className="flex justify-center items-center">
        <Tabs>
          <TabList>
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </section>
    </div>
  );
};

export default TabsCategory;
