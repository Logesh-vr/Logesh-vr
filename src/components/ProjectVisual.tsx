export default function ProjectVisual({
  variant,
}: {
  variant: "orbital" | "evolution" | "parcel";
}) {
  return (
    <div className={`project-visual ${variant}`} aria-hidden="true">
      <svg className="domain-art" viewBox="0 0 360 270" fill="none">
        {variant === "orbital" ? (
          <>
            <circle cx="204" cy="130" r="69" fill="#294a36" />
            <g stroke="#c6f36b" opacity=".55">
              <ellipse cx="204" cy="130" rx="32" ry="69" />
              <ellipse cx="204" cy="130" rx="60" ry="69" />
              <ellipse cx="204" cy="130" rx="69" ry="23" />
              <path d="M135 130H273M144 97H264M144 163H264" />
            </g>
            <g stroke="#456346">
              <ellipse
                cx="204"
                cy="130"
                rx="116"
                ry="48"
                transform="rotate(-30 204 130)"
              />
              <ellipse
                cx="204"
                cy="130"
                rx="113"
                ry="49"
                transform="rotate(48 204 130)"
              />
            </g>
            <circle cx="301" cy="72" r="5" fill="#294a36" />
            <circle cx="138" cy="58" r="4" fill="#547e17" />
            <circle cx="99" cy="181" r="5" fill="#294a36" />
            <path
              d="M56 89H82M69 76V102M294 193H310M302 185V201"
              stroke="#456346"
              opacity=".6"
            />
          </>
        ) : variant === "evolution" ? (
          <>
            <g stroke="#c6f36b" opacity=".22">
              {[72, 102, 132, 162].flatMap((y, i) =>
                [65, 95, 125, 155, 185].map((ny, j) => (
                  <path key={`${i}-${j}`} d={`M224 ${y} 273 ${ny}`} />
                )),
              )}
              {[65, 95, 125, 155, 185].flatMap((y, i) =>
                [94, 132, 170].map((ny, j) => (
                  <path key={`out-${i}-${j}`} d={`M273 ${y} 325 ${ny}`} />
                )),
              )}
            </g>
            <g fill="#c6f36b">
              {[72, 102, 132, 162].map((y) => (
                <circle key={y} cx="224" cy={y} r="4" />
              ))}
              {[65, 95, 125, 155, 185].map((y) => (
                <circle key={y} cx="273" cy={y} r="4" />
              ))}
              {[94, 132, 170].map((y) => (
                <circle key={y} cx="325" cy={y} r="5" />
              ))}
            </g>
            <path
              d="M50 191V145H62V158H74V169H87V156H98V120H113V87H160V120H130V133H154V144H144V136H130V169H117V181H105V203H91V190H80V181H65V191Z"
              fill="#c6f36b"
            />
            <rect x="146" y="97" width="5" height="5" fill="#252b22" />
            <path d="M28 211H180" stroke="#c6f36b" opacity=".3" />
            <path
              d="M44 224H72M92 224H117M143 224H158"
              stroke="#c6f36b"
              opacity=".4"
            />
            <path d="M185 135H207" stroke="#c6f36b" strokeDasharray="3 4" />
          </>
        ) : (
          <>
            <path
              d="M148 80 213 48 278 80 213 115Z"
              fill="#c5bbdc"
              stroke="#766395"
              strokeWidth="1.5"
            />
            <path
              d="M148 80 213 115V193L148 158Z"
              fill="#d3cbe6"
              stroke="#766395"
              strokeWidth="1.5"
            />
            <path
              d="M213 115 278 80V158L213 193Z"
              fill="#b2a3ce"
              stroke="#766395"
              strokeWidth="1.5"
            />
            <path
              d="M180 64 244 97V130L228 139V107L164 72"
              fill="#eee9f5"
              stroke="#766395"
              strokeWidth="1"
            />
            <path
              d="M166 118V141M161 123 166 118 171 129M180 126V149M175 131 180 126 185 137"
              stroke="#766395"
              strokeWidth="2"
            />
            <path
              d="M31 204H86L94 186 102 220 111 147 120 231 130 197H163L174 207H324"
              stroke="#766395"
              strokeWidth="2"
            />
            <path
              d="M31 206V46M31 246H325"
              stroke="#766395"
              opacity=".2"
              strokeDasharray="3 5"
            />
          </>
        )}
      </svg>
      <div className="visual-label">
        {variant === "orbital"
          ? "ORBITAL ELEMENTS / SGP4"
          : variant === "evolution"
            ? "SENSE / SELECT / EVOLVE"
            : "SIMULATED TELEMETRY / DIGITAL TWIN"}
      </div>
      {variant === "orbital" && (
        <div className="visual-caption">
          An orbit.
          <br />
          <em>A different perspective.</em>
        </div>
      )}
      {variant === "evolution" && (
        <div className="visual-caption">
          Learning through
          <br />
          <em>every restart.</em>
        </div>
      )}
      {variant === "parcel" && (
        <div className="visual-caption">
          Every impact
          <br />
          <em>leaves a signal.</em>
        </div>
      )}
    </div>
  );
}
