import Layout from "./components/layout/Layout";
import Nav from "./components/layout/Nav";
import Widgets from "./components/layout/Widgets";
function App() {
  return (
    <div
      className={`font-["Sofia Pro"] relative flex md:justify-center h-screen text-primary__text`}
    >
      <Nav />
      <Layout />
      <Widgets />
    </div>
  );
}

export default App;
