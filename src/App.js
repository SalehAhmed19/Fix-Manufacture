import "./App.css";
import Banner from "./Pages/Home/Banner";
import BusinessSummary from "./Pages/Home/BusinessSummary";
import Parts from "./Pages/Home/Parts";
import Reviews from "./Pages/Home/Reviews";

function App() {
  return (
    <div>
      <Banner />
      <Parts />
      <BusinessSummary />
      <Reviews />
    </div>
  );
}

export default App;
