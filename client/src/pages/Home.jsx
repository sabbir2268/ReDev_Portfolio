import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import MyActivity from "../components/MyActivity/MyActivity";
import Projects from "./../components/projects/Projects";

const Home = () => {
  return (
    <div>
      <About></About>
      <Projects></Projects>
      <MyActivity></MyActivity>
      <Contact></Contact>
    </div>
  );
};

export default Home;
