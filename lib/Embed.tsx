import React from "react";

export default function Embed({ src, ...opts }: { src?: string }) {
  if (!src) return <></>;
  return (
    <div>
      <div style={{ position: "relative", paddingTop: "100%" }}>
        <iframe
          src={src}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          allowTransparency
          allowFullScreen
          frameBorder={0}
          scrolling="no"
          {...opts}
        ></iframe>
      </div>
    </div>
  );
}
