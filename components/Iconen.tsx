export function Pijl({ maat = 20 }: { maat?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={maat} height={maat} aria-hidden="true">
      <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" fill="none" />
    </svg>
  );
}

export function Menu() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
      <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="1.8" fill="none" />
    </svg>
  );
}

export function Voorbeeld({ className = '', tekst = 'Voorbeeld' }: { className?: string; tekst?: string }) {
  return <span className={`label-voorbeeld ${className}`.trim()}>{tekst}</span>;
}
