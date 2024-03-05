import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Task1 from "./pages/Task1/Tsak1";
import Task2 from "./pages/Task2/Task2";
import Task3 from "./pages/Task3/Task3";
import Task4 from "./pages/Task4/Task4";
import Task5 from "./pages/Task5/Task5";
import Task6 from "./pages/Task6/Task6";
import Task7 from "./pages/Task7/Task7";
import Task8 from "./pages/Task8/Task8";
import Task9 from "./pages/Task9/Task9";
import Task10 from "./pages/Task10/Task10";
import Task11 from "./pages/Task11/Task11";
import Task12 from "./pages/Task12/Task12";
import Task13 from "./pages/Task13/Task13";
import Task14 from "./pages/Task14/Task14";
import Task15 from "./pages/Task15/Task15";
import Task16 from "./pages/Task16/Task16";
import Task17 from "./pages/Task17/Task17";
import Task18 from "./pages/Task18/Task18";
import Task19 from "./pages/Task19/Task19";
import Task20 from "./pages/Task20/Task20";
import Task21 from "./pages/Task21/Task21";
import Task22 from "./pages/Task22/Task22";
import Task23 from "./pages/Task23/Task23";
import Task24 from "./pages/Task24/Task24";
import Task25 from "./pages/Task25/Task25";
import Task26 from "./pages/Task26/Task26";
import Task27 from "./pages/Task27/Task27";
import Task28 from "./pages/Task28/Task28";
import Task29 from "./pages/Task29/Task29";
import Task30 from "./pages/Task30/Task30";
import Task31 from "./pages/Task31/Task31";
import Task32 from "./pages/Task32/Task32";
import Task33 from "./pages/Task33/Task33";
import Task34 from "./pages/Task34/Task34";
import Task35 from "./pages/Task35/Task35";
import Task36 from "./pages/Task36/Task36";
import Task37 from "./pages/Task37/Task37";
import Task38 from "./pages/Task38/Task38";
import Task39 from "./pages/Task39/Task39";
import Task40 from "./pages/Task40/Task40";
import Task41 from "./pages/Task41/Task41";
import Task42 from "./pages/Task42/Task42";
import Task44 from "./pages/Task44/Task44";
import Task45 from "./pages/Task45/Task45";
import Task43 from "./pages/Task43/Task43";
import Task46 from "./pages/Task46/Task46";
import Task47 from "./pages/Task47/Task47";
import Task48 from "./pages/Task48/Task48";
import Task49 from "./pages/Task49/Task49";
import Task50 from "./pages/Task50/Task50";
import Task51 from "./pages/Task51/Task51";
import Task52 from "./pages/Task52/Task52";
import Task53 from "./pages/Task53/Task53";
import Task54 from "./pages/Task54/Task54";
import Task55 from "./pages/Task55/Task55";
import Task56 from "./pages/Task56/Task56";
import Task57 from "./pages/Task57/Taks57";
import Task58 from "./pages/Task58/Task58";
import Task59 from "./pages/Task59/Task59";
import Task60 from "./pages/Task60/Task60";
import Task61 from "./pages/Task61/Task61";
import Task62 from "./pages/Task62/Task62";
import Task63 from "./pages/Task63/Task63";
import Task64 from "./pages/Task64/Task64";
import Task65 from "./pages/Task65/Task65";
import Task66 from "./pages/Task66/Task66";
import Task67 from "./pages/Task67/Task67";
import Task68 from "./pages/Task68/Task68";
import Task69 from "./pages/Task69/Task69";
import Task70 from "./pages/Task70/Task70";
import Task71 from "./pages/Task71/Task71";
import Task72 from "./pages/Task72/Task72";
import { TaskContext } from "./Context/Context";

function App() {
  const constext = {
    tast69Constext: { id: 1, name: "Anton", surname: "Miranovich" },
    tast70Constext: { en: "Hello", ru: "Привет", jp: "Ni hao" },
    tast71Constext: { temperature: "29", humidity: "80%", windSpeed: "60km/h" },
  };

  return (
    <>
      <TaskContext.Provider value={constext}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/task1" element={<Task1 />}></Route>
          <Route path="/task2" element={<Task2 />}></Route>
          <Route path="/task3" element={<Task3 />}></Route>
          <Route path="/task4" element={<Task4 />}></Route>
          <Route path="/task5" element={<Task5 />}></Route>
          <Route path="/task6" element={<Task6 />}></Route>
          <Route path="/task7" element={<Task7 />}></Route>
          <Route path="/task8" element={<Task8 />}></Route>
          <Route path="/task9" element={<Task9 />}></Route>
          <Route path="/task10" element={<Task10 />}></Route>
          <Route path="/task11" element={<Task11 />}></Route>
          <Route path="/task12" element={<Task12 />}></Route>
          <Route path="/task13" element={<Task13 />}></Route>
          <Route path="/task14" element={<Task14 />}></Route>
          <Route path="/task15" element={<Task15 />}></Route>
          <Route path="/task16" element={<Task16 />}></Route>
          <Route path="/task17" element={<Task17 />}></Route>
          <Route path="/task18" element={<Task18 />}></Route>
          <Route path="/task19" element={<Task19 />}></Route>
          <Route path="/task20" element={<Task20 />}></Route>
          <Route path="/task21" element={<Task21 />}></Route>
          <Route path="/task22" element={<Task22 />}></Route>
          <Route path="/task23" element={<Task23 />}></Route>
          <Route path="/task24" element={<Task24 />}></Route>
          <Route path="/task25" element={<Task25 />}></Route>
          <Route path="/task26" element={<Task26 />}></Route>
          <Route path="/task27" element={<Task27 />}></Route>
          <Route path="/task28" element={<Task28 />}></Route>
          <Route path="/task29" element={<Task29 />}></Route>
          <Route path="/task30" element={<Task30 />}></Route>
          <Route path="/task31" element={<Task31 />}></Route>
          <Route path="/task32" element={<Task32 />}></Route>
          <Route path="/task33" element={<Task33 />}></Route>
          <Route path="/task34" element={<Task34 />}></Route>
          <Route path="/task35" element={<Task35 />}></Route>
          <Route path="/task36" element={<Task36 />}></Route>
          <Route path="/task37" element={<Task37 />}></Route>
          <Route path="/task38" element={<Task38 />}></Route>
          <Route path="/task39" element={<Task39 />}></Route>
          <Route path="/task40" element={<Task40 />}></Route>
          <Route path="/task41" element={<Task41 />}></Route>
          <Route path="/task42" element={<Task42 />}></Route>
          <Route path="/task43" element={<Task43 />}></Route>
          <Route path="/task44" element={<Task44 />}></Route>
          <Route path="/task45" element={<Task45 />}></Route>
          <Route path="/task46" element={<Task46 />}></Route>
          <Route path="/task47" element={<Task47 />}></Route>
          <Route path="/task48" element={<Task48 />}></Route>
          <Route path="/task49" element={<Task49 />}></Route>
          <Route path="/task50" element={<Task50 />}></Route>
          <Route path="/task51" element={<Task51 />}></Route>
          <Route path="/task52" element={<Task52 />}></Route>
          <Route path="/task53" element={<Task53 />}></Route>
          <Route path="/task54" element={<Task54 />}></Route>
          <Route path="/task55" element={<Task55 />}></Route>
          <Route path="/task56" element={<Task56 />}></Route>
          <Route path="/task57" element={<Task57 />}></Route>
          <Route path="/task58" element={<Task58 />}></Route>
          <Route path="/task59" element={<Task59 />}></Route>
          <Route path="/task60" element={<Task60 />}></Route>
          <Route path="/task61" element={<Task61 />}></Route>
          <Route path="/task62" element={<Task62 />}></Route>
          <Route path="/task63" element={<Task63 />}></Route>
          <Route path="/task64" element={<Task64 />}></Route>
          <Route path="/task65" element={<Task65 />}></Route>
          <Route path="/task66" element={<Task66 />}></Route>
          <Route path="/task67" element={<Task67 />}></Route>
          <Route path="/task68" element={<Task68 />}></Route>
          <Route path="/task69" element={<Task69 />}></Route>
          <Route path="/task70" element={<Task70 />}></Route>
          <Route path="/task71" element={<Task71 />}></Route>
          <Route path="/task72" element={<Task72 />}></Route>
        </Routes>
      </TaskContext.Provider>
    </>
  );
}

export default App;
