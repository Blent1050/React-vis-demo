import React from "react";
import ReactDOM from "react-dom";
import {
  XAxis,
  YAxis,
  XYPlot,
  LineSeries,
  VerticalBarSeries,
  HorizontalGridLines
} from "react-vis";
import "./styles.css";
const data = [
  { x: 0, y: 8 },
  { x: 1, y: 5 },
  { x: 2, y: 4 },
  { x: 3, y: 9 },
  { x: 4, y: 1 },
  { x: 5, y: 7 },
  { x: 6, y: 6 },
  { x: 7, y: 3 },
  { x: 8, y: 2 },
  { x: 9, y: 0 }
];

function App() {
  return (
    <div className="App">
      <XYPlot width={300} height={300}>
        <HorizontalGridLines />
        <LineSeries
          color="red"
          data={[{ x: 1, y: 10 }, { x: 2, y: 5 }, { x: 3, y: 15 }]}
        />
        <XAxis title="X" />
        <YAxis />
      </XYPlot>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
