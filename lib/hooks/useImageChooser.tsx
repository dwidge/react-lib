// Copyright DWJ 2022.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import React, { useState, useEffect } from "react";
import { useFileChooser } from "./useFileChooser";
import { Vertical } from "../Flex";

const useImageChooser = ({ id = "image" }): [File | undefined, JSX.Element] => {
  const [preview, setPreview] = useState<string>("");
  const [file, FileChooser] = useFileChooser({ id });

  useEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    } else setPreview("");
  }, [file]);

  const C = (
    <Vertical>
      {FileChooser}
      {preview && <img alt={file?.name} src={preview} />}
    </Vertical>
  );

  return [file, C];
};

export default useImageChooser;
