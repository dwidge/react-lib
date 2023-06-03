import React from "react";
import "./BarChart.css";

export interface BarCSS extends React.CSSProperties {
  "--size": string;
}

const BarChart = ({
  data,
  vertical = false,
}: {
  data: { [i: string]: number };
  vertical?: boolean;
}) => {
  const maxFieldValue = Math.max(...Object.values(data));

  return (
    <div className={`bar-chart ${vertical ? "vertical" : "horizontal"}`}>
      {Object.entries(data).map(([name, value]) => (
        <div
          key={name}
          className={`bar ${vertical ? "vertical" : "horizontal"}`}
          style={
            {
              "--size": `${(value / maxFieldValue) * 100}%`,
            } as BarCSS
          }
        >
          <div className={"bar-label"}>
            {name} {value}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BarChart;
