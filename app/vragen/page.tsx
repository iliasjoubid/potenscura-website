import { permanentRedirect } from 'next/navigation';
// Oude links naar de vervallen FAQ-pagina verwijzen naar de informatie over wonen.
export default function Vragen() { permanentRedirect('/wonen'); }
