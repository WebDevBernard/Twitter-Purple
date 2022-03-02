import Layout from "./components/Layout";
import Nav from "./components/Nav";
import Widgets from "./components/Widgets";
function App() {
  return (
    <div
      className={`font-["Sofia Pro"] relative flex md:justify-center h-screen text-slate-700`}
    >
      <Nav />
      <Layout />
      <Widgets />
    </div>
  );
}

export default App;
