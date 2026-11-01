const HY = 100;
const LIJNEN = Array.from({ length: 31 }, (_, i) => 500 + (i - 15) * 200);

export default function Vloer() {
  return (
    <svg className="leeg__vloer" viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="vloer-vervaag" gradientUnits="userSpaceOnUse" x1="0" y1={HY} x2="0" y2="1000">
          <stop offset="0" stopColor="currentColor" stopOpacity="0" />
          <stop offset="0.45" stopColor="currentColor" stopOpacity="0.55" />
          <stop offset="1" stopColor="currentColor" />
        </linearGradient>
      </defs>
      <g stroke="url(#vloer-vervaag)" strokeOpacity="0.2">
        {LIJNEN.map((x) => <line key={x} x1="500" y1={HY} x2={x} y2="1000" />)}
      </g>
      <line x1="0" y1={HY} x2="1000" y2={HY} stroke="var(--goud)" strokeWidth="2" />
    </svg>
  );
}
