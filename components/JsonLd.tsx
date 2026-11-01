export default function JsonLd({ data }: { data: object | object[] }) {
  const lijst = Array.isArray(data) ? data : [data];
  return (
    <>
      {lijst.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d).replace(/</g, '\\u003c').replace(/>/g, '\\u003e') }} />
      ))}
    </>
  );
}
