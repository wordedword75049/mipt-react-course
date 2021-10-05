import './App.css';
import {Clock} from './Clock'


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
    <div class="container">
        {counters_params.map(
            (each_counter) =>
                <Clock start={each_counter.start} caption={each_counter.string}/>)
        }
    </div>
  );
}

export default App;
