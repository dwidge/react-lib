import React from "react";

const styles = `
.bar-chart {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
}
.bar-chart.vertical {
  flex-direction: row;
  align-items: flex-end;
  height: 200px; /* Example height */
}
.bar {
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 0.5em;
  background: linear-gradient(
    var(--bar-color, #007bff),
    var(--bar-color, #007bff)
  );
  background-repeat: no-repeat;
  transition: background-size 0.5s ease-in-out;
  color: white;
}
.bar.vertical {
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  width: 30px;
  background-size: auto var(--size);
}

.bar.horizontal {
  flex-direction: row;
  height: 20px;
  width: 100%;
  background-size: var(--size) auto;
}

.bar-label {
  font-family: sans-serif;
  font-size: 0.8rem;
  white-space: nowrap;
}
`;

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
    <>
      <style>{styles}</style>
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
    </>
  );
};

export default BarChart;
