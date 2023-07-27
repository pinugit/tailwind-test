import "./App.css";
import HomeSearch from "./components/sidebar/HomeSearch";

function App() {
  return <HomeSearch onSelectingItem={(item) => void} />;
}
export default App;
