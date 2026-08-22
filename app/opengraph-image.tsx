import { ImageResponse } from "next/og";

export const alt =
  "Foulla SAMANKASSOU — BI/AI Project Manager and Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#050505",
          color: "#ffffff",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "64px",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#222222",
            border: "1px solid #3a3a3a",
            borderRadius: "36px",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
            padding: "64px",
            width: "100%",
          }}
        >
          <div
            style={{
              color: "#f78f42",
              display: "flex",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            BI/AI Project Manager · Software Engineer
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            <div style={{ display: "flex", fontSize: 68, fontWeight: 800 }}>
              Foulla SAMANKASSOU
            </div>
            <div
              style={{
                color: "#c7c7c7",
                display: "flex",
                fontSize: 34,
                lineHeight: 1.35,
                maxWidth: 940,
              }}
            >
              BI, AI and Azure solutions that turn operational data into better
              decisions.
            </div>
          </div>
          <div style={{ color: "#f78f42", display: "flex", fontSize: 24 }}>
            samankassou.com
          </div>
        </div>
      </div>
    ),
    size,
  );
}
