// Copyright DWJ 2023.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { useMemo } from "react";

function parse<T>(s: string): T {
  try {
    return JSON.parse(s) ?? ({} as T);
  } catch (e) {
    return {} as T;
  }
}

export function useJson<T>([value, setValue]: [
  value: string,
  onChange: (v: string) => void
]): [T, (v: T) => void] {
  const parsed = useMemo(() => parse<T>(value), [value]);
  const setParsed = (parsed: T) => setValue(JSON.stringify(parsed));
  return [parsed, setParsed];
}
