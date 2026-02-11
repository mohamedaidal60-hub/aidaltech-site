const usmaHistory = [
  "USMA Champion d'Algérie 1963",
  "USMA Champion d'Algérie 1996",
  "USMA Champion d'Algérie 2002",
  "USMA Champion d'Algérie 2003",
  "USMA Champion d'Algérie 2005",
  "USMA Champion d'Algérie 2014",
  "USMA Champion d'Algérie 2016",
  "USMA Champion d'Algérie 2019",
  "USMA Coupe d'Algérie 1981",
  "USMA Coupe d'Algérie 1988",
  "USMA Coupe d'Algérie 1997",
  "USMA Coupe d'Algérie 1999",
  "USMA Coupe d'Algérie 2004",
  "USMA Coupe d'Algérie 2008",
  "USMA Coupe d'Algérie 2010",
  "USMA Coupe d'Algérie 2012",
  "USMA Coupe d'Algérie 2013",
  "USMA Ligue des Champions CAF 2003",
  "USMA Supercoupe d'Algérie 2004",
  "USMA Supercoupe d'Algérie 2006",
  "USMA Supercoupe d'Algérie 2014",
  "USMA Supercoupe d'Algérie 2016",
  "USMA Coupe Arabe 2013",
  "USMA Champion d'Algérie 2023",
  "USMA Champion d'Algérie 2025",
];

const USMAWatermark = () => {
  const rows = [];
  for (let i = 0; i < 20; i++) {
    const text = usmaHistory
      .map((t, idx) => usmaHistory[(i * 3 + idx) % usmaHistory.length])
      .join("   ★   ");
    rows.push(
      <div
        key={i}
        className="usma-watermark-text"
        style={{
          marginLeft: `${(i % 3) * -200}px`,
          animationDelay: `${i * 0.5}s`
        }}
      >
        {text}
      </div>
    );
  }

  return <div className="usma-watermark">{rows}</div>;
};

export default USMAWatermark;
