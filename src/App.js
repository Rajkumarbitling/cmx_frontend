
import './App.css';
import SideMenu from './components/SideMenu';
import CardSection from './components/CardSection';
import SliderSection from './components/SliderSection';
import RewardSection from './components/RewardSection';
import BenefitSection from './components/BenefitSection';


function App() {
  return (
    <div className="App bg-image text-white">
      <div className="container">
        <div className="row w-70 position-relative">
          <div className="col-md-3 col-sm-12 menu mb-4">
            <SideMenu />
          </div>
          <div className="col-md-9 col-sm-12">
            <CardSection />
            <SliderSection />
            <RewardSection />
            <BenefitSection />
          </div>
          </div>
      </div>
    </div>
  );
}

export default App;
