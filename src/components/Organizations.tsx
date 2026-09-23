const organizations = [
  { name: "CodeLab", role: "VP of Projects", logo: "codelab.svg", url: "https://codelabdavis.com/", present: true, style: "codelab" },
  { name: "The AI Collective", role: "Director of Workshops", logo: "aic.png", url: "https://www.aicdavis.org/", present: true, style: "aic" },
  { name: "GDSC", role: "Technical Lead", detail: "Google Developer Student Club", logo: "gdsc.png", url: "https://developers.google.com/community/gdsc", present: false, style: "gdsc" },
  { name: "#include", role: "Developer Member", logo: "include.svg", url: "https://includedavis.com/", present: false, style: "include" },
];

export default function Organizations() {
  return (
    <section className="organizations" id="organizations" aria-labelledby="organizations-heading">
      <div className="organizations-inner">
        <h2 id="organizations-heading">Clubs &amp; organizations</h2>
        <div className="organizations-grid">
          {organizations.map(org => (
            <a className="organization" href={org.url} target="_blank" rel="noreferrer" key={org.name}>
              <div className={`organization-logo ${org.style}`}><img src={`/images/organizations/${org.logo}`} alt={`${org.name} logo`} loading="lazy" /></div>
              <div className="organization-name"><h3>{org.name}</h3>{org.present && <span className="organization-present">present</span>}</div>
              {org.detail && <p className="organization-detail">{org.detail}</p>}
              <p className="organization-role">{org.role}</p>
              <span className="organization-link">Visit website <span aria-hidden="true">↗</span></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
