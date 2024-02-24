import { Chrono } from "react-chrono";

/*const items = [
  {
    title: "May 1940",
    cardTitle: "Dunkirk",
    cardSubtitle: "Men of the British Expeditionary Force.",
    cardDetailedText:
      "On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and attacking northern France.",
  },
];*/

const items = [{ title: 2018 }, { title: 2019 }];

const App = () => (
  <div className="chrono-container">
    <Chrono
      mode="VERTICAL"
      items={items}
      theme={{
        primary: "red",
        secondary: "blue",
        cardBgColor: "#fff",
        cardForeColor: "violet",
        titleColor: "red",
      }}
    >
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/csk-logo-img.png"
          alt="chennai-super-kings"
          className="image"
        />
      </div>
      <div>
        <h1>Mumbai Indians</h1>
        <p>IPL Team winner for the year 2019 is mumbai indians</p>
      </div>
    </Chrono>
  </div>
);

export default App;
