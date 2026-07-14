import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Root = () => {
  return (
    <div>
      <section className="">
        <Header></Header>
      </section>
      <section className="">
        <Outlet></Outlet>
      </section>
      <section className="">
        <Footer></Footer>
      </section>
    </div>
  );
};

export default Root;
