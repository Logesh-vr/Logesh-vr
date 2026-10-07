export default function ProjectVisual({
  variant,
}: {
  variant: "map" | "training" | "gesture";
}) {
  return (
    <div className={`project-visual ${variant}`} aria-hidden="true">
      {variant === "map" ? (
        <>
          <div className="map-grid" />
          <div className="map-road road-one" />
          <div className="map-road road-two" />
          <span className="map-pin pin-one" />
          <span className="map-pin pin-two" />
          <span className="map-pin pin-three" />
          <div className="visual-label">COMMUNITY / CONNECTED</div>
          <div className="map-caption">
            Every signal.
            <br />
            <strong>One shared map.</strong>
          </div>
        </>
      ) : variant === "training" ? (
        <>
          <div className="training-top">
            UB <span>TRAINING LOG</span>
          </div>
          <div className="training-title">
            Progress is
            <br />
            <em>a practice.</em>
          </div>
          <div className="bars">
            {[32, 48, 41, 62, 58, 76, 90].map((height, i) => (
              <span key={i} style={{ height: `${height}%` }} />
            ))}
          </div>
          <div className="training-bottom">
            SHOW UP. BUILD. REPEAT. <span>↗</span>
          </div>
        </>
      ) : (
        <>
          <svg className="hand" viewBox="0 0 360 260" fill="none">
            <path
              d="M144 220 106 153 94 121 111 111 144 153 134 68 152 63 166 139 168 37 189 37 190 136 209 52 230 59 211 150 245 91 263 103 234 173 217 219Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M144 220 166 139 190 136 211 150 234 173M144 220 144 153 111 111M144 220 217 219M166 139 152 63M190 136 189 37M211 150 230 59M234 173 263 103"
              stroke="currentColor"
              opacity=".35"
            />
            {[
              [144, 220],
              [106, 153],
              [94, 121],
              [111, 111],
              [144, 153],
              [134, 68],
              [152, 63],
              [166, 139],
              [168, 37],
              [189, 37],
              [190, 136],
              [209, 52],
              [230, 59],
              [211, 150],
              [245, 91],
              [263, 103],
              [234, 173],
              [217, 219],
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r="4" fill="currentColor" />
            ))}
          </svg>
          <div className="visual-label">VISION / HAND LANDMARKS</div>
          <div className="gesture-caption">
            A new way
            <br />
            to read a gesture.
          </div>
        </>
      )}
    </div>
  );
}
