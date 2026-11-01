import { concept } from '@/lib/gegevens';
import { email, telefoon } from '@/lib/site';


type Veld = { naam: string; label: string; waarde: string };

const kort = (v: unknown, max: number) => String(v ?? '').replace(/\s+/g, ' ').trim().slice(0, max);
const fout = (status: number, tekst: string) => Response.json({ fout: tekst }, { status });

export async function POST(req: Request) {
  if (concept) return fout(404, 'Dit is een concept');
  let b: Record<string, unknown>;
  try {
    b = await req.json();
  } catch {
    return fout(400, 'Onleesbaar');
  }
  if (b.website) return Response.json({ ok: true });

  const velden: Veld[] = (Array.isArray(b.velden) ? b.velden : []).slice(0, 12).map((v: Record<string, unknown>) => ({
    naam: kort(v?.naam, 40),
    label: kort(v?.label, 80),
    waarde: String(v?.waarde ?? '').trim().slice(0, 5000),
  }));
  const naam = kort(velden.find((v) => v.naam === 'naam')?.waarde, 120);
  const afzender = kort(velden.find((v) => v.naam === 'email')?.waarde, 160);
  if (!naam || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(afzender) || !velden.some((v) => v.waarde.length >= 5 && v.naam !== 'email')) {
    return fout(400, 'Onvolledig');
  }

  const { RESEND_API_KEY: sleutel, BERICHT_AAN: aan, BERICHT_VAN: van } = process.env;
  if (!sleutel || !aan || !van) return fout(503, `Niet ingesteld. Mail naar ${email.tekst} of bel ${telefoon.tekst}.`);

  const soort = b.formulier === 'sollicitatie' ? 'sollicitatie' : 'bericht';
  const tekst = velden.filter((v) => v.waarde).map((v) => `${v.label}:\n${v.waarde}`).join('\n\n');
  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${sleutel}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: van, to: [aan], reply_to: afzender, subject: `Website: ${soort} van ${naam}`, text: tekst }),
    });
    if (!r.ok) throw new Error(`Resend ${r.status}`);
  } catch (e) {
    console.error(e);
    return fout(502, 'Versturen mislukt');
  }
  return Response.json({ ok: true });
}
