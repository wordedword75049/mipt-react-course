import './App.css';
import {Clock} from './Clock'
import {NameForm} from "./NameForm";


function App() {
    let counters_params = [
        {
            start: 0,
            string: "first"
        }, {
            start: 10,
            string: "second"
        }
    ];
  return (
    <div className="container">
        {counters_params.map(
            (each_counter) =>
                <Clock start={each_counter.start} caption={each_counter.string}/>)
        }
        <NameForm/>
    </div>

  );
}

export default App;
