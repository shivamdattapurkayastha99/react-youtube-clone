
import './App.css';
import Header from './Header';
import SideBar from './SideBar'
import RecommendedVideos from './RecommendedVideos';
function App() {
  return (
    <div className="App">
      {/* <h1>Shivam Youtube Clone </h1> */}
      <Header></Header>
      
      <div className="app_page">
      <SideBar/>
      <RecommendedVideos/>

      </div>


    </div>
  );
}

export default App;
