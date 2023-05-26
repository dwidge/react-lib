import React from "react";
import { Aspect } from "./Aspect";

export default function Embed({
  src,
  a,
  ...opts
}: {
  src?: string;
  a?: number;
}) {
  if (!src) return <></>;
  return (
    <Aspect a={a}>
      <iframe
        src={src}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowTransparency
        allowFullScreen
        frameBorder={0}
        scrolling="no"
        {...opts}
      ></iframe>
    </Aspect>
  );
}
