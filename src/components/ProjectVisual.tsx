export default function ProjectVisual({
  variant,
}: {
  variant: "orbital" | "evolution" | "connectome";
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
            <g stroke="#766395" opacity=".35">
              <path d="M48 68 88 45 122 75 92 111 51 100 48 68 122 75 145 116 92 111 76 155 42 138 51 100M88 45 146 55 168 88 145 116 168 151 126 171 76 155 92 111M126 171 145 116M122 75 168 88" />
              <path d="M183 127H224" strokeDasharray="4 5" />
            </g>
            <g fill="#766395">
              {[
                [48, 68],
                [88, 45],
                [122, 75],
                [92, 111],
                [51, 100],
                [145, 116],
                [76, 155],
                [42, 138],
                [146, 55],
                [168, 88],
                [168, 151],
                [126, 171],
              ].map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r={i === 3 ? 6 : 4} />
              ))}
            </g>
            <g stroke="#766395" strokeWidth="3" strokeLinecap="round">
              <path d="M270 112 240 88 227 67M271 130 235 131 215 151M272 151 243 175 231 201M286 112 317 88 329 67M286 130 321 131 340 151M284 151 315 175 328 201" />
              <path d="M269 94 260 77M283 94 293 77" />
            </g>
            <ellipse
              cx="261"
              cy="116"
              rx="18"
              ry="38"
              transform="rotate(-24 261 116)"
              fill="#f2edf9"
              stroke="#766395"
              opacity=".8"
            />
            <ellipse
              cx="295"
              cy="116"
              rx="18"
              ry="38"
              transform="rotate(24 295 116)"
              fill="#f2edf9"
              stroke="#766395"
              opacity=".8"
            />
            <ellipse
              cx="278"
              cy="148"
              rx="14"
              ry="35"
              fill="#b2a3ce"
              stroke="#766395"
            />
            <ellipse cx="278" cy="116" rx="14" ry="21" fill="#766395" />
            <circle cx="278" cy="95" r="12" fill="#433a57" />
            <path
              d="M32 223H106L114 207 122 233 130 217H184"
              stroke="#766395"
              opacity=".65"
            />
          </>
        )}
      </svg>
      <div className="visual-label">
        {variant === "orbital"
          ? "ORBITAL ELEMENTS / SGP4"
          : variant === "evolution"
            ? "SENSE / SELECT / EVOLVE"
            : "CONNECTOME / BRAIN / BODY"}
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
      {variant === "connectome" && (
        <div className="visual-caption">
          A brain. A body.
          <br />
          <em>A world to explore.</em>
        </div>
      )}
    </div>
  );
}
