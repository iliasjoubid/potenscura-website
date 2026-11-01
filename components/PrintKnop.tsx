'use client';

export default function PrintKnop() {
  return (
    <button className="knop knop--goud alleen-js" type="button" onClick={() => window.print()}>
      Print de kaart
    </button>
  );
}
