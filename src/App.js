import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import LeaderBoard from "./LeaderBoard";
import QuizApp from "./QuizApp";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="app flex justify-center items-center h-screen">
            <QuizApp />
          </div>
        </Route>
        <Route exact path="/leaderboard">
          <LeaderBoard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
