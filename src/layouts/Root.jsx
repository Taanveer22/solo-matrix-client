import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Root = () => {
  return (
    <div>
      <section className="">
        <Header></Header>
      </section>
      <section className="max-w-7xl w-11/12 mx-auto my-8 lg:my-16">
        <Outlet></Outlet>
      </section>
      <section className="">
        <Footer></Footer>
      </section>
    </div>
  );
};

export default Root;
