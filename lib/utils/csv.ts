// Copyright DWJ 2023.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

export interface Row {
  [key: string]: string;
}

export const calcArrayCSV = (s: string, del = " "): Row[] => {
  const lines = s.split("\n").map((s) => s.split(del));
  const headers = lines[0];
  const rows = lines.slice(1);
  return rows.map((r) =>
    Object.fromEntries(headers.map((k, i) => [k, r[i] ?? ""]))
  );
};

export const calcCSVArray = (rows: Row[], del: string = " "): string => {
  if (!rows.length) return "";
  const cols = Object.keys(rows[0]);
  const header = cols.join(del);
  const data = rows.map((row) => cols.map((k) => row[k]).join(del));
  return [header, ...data].join("\n");
};
