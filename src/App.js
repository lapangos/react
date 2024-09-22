import "./App.css";
import { createChart } from "lightweight-charts";

import React, { Component } from "react";

const chart = createChart(document.body, { width: 400, height: 300 });
const lineSeries = chart.addLineSeries();
lineSeries.setData([
  { time: "2019-04-11", value: 80.01 },
  { time: "2019-04-12", value: 96.63 },
  { time: "2019-04-13", value: 76.64 },
  { time: "2019-04-14", value: 81.89 },
  { time: "2019-04-15", value: 74.43 },
  { time: "2019-04-16", value: 80.01 },
  { time: "2019-04-17", value: 96.63 },
  { time: "2019-04-18", value: 76.64 },
  { time: "2019-04-19", value: 81.89 },
  { time: "2019-04-20", value: 74.43 },
]);

// Create WebSocket connection.
// const getWebSocket = () => {
//   const binanceSocket = new WebSocket(
//     "wss://stream.binance.com:9443/ws/btcusdt@kline_5m"
//   );
//   binanceSocket.addEventListener("message", (event) => {
//     console.log("Message from server ", event.data);
//   });
// };

export default class App extends Component {
  render() {
    return (
      <div>
        <div>{chart}</div>
        {/* <div>
          <button onClick={this.getWebSocket}>Click me!</button>
        </div> */}
      </div>
    );
  }
}
