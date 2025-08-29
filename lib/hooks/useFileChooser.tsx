// Copyright DWJ 2023.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import React, { useState } from "react";
import { Vertical } from "../Flex";

export function useFileChooser({
  id = "image",
}): [File | undefined, React.JSX.Element] {
  const [file, setFile] = useState<File>();

  const C = (
    <label htmlFor={id}>
      <Vertical>
        <input
          id={id}
          name={id}
          type="file"
          onChange={(event) => {
            setFile(event.target.files?.[0]);
          }}
        />
      </Vertical>
    </label>
  );

  return [file, C];
}
