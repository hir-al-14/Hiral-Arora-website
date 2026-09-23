const research = [
  {
    title: "An Exploratory Ukraine Rising Commodities Price Analysis: Towards a Resilient Food System",
    image: "/images/research/food-system-cover.svg",
    alt: "Title cover for the published Ukraine commodity-price study by Hiral Arora, Ambikesh Jayal, and Edmond Prakash",
    status: "Published · Springer, 2024 · UKCI 2023",
    authors: "Hiral Arora, Ambikesh Jayal & Edmond Prakash",
    description: "An exploratory study of Ukraine’s food commodity prices during the pandemic and Russia–Ukraine war. Using World Food Programme data, we examined price stability, outliers, and changes across cities and time, and explored linear regression for forecasting commodity prices.",
    links: [{ label: "Read publication", href: "https://link.springer.com/chapter/10.1007/978-3-031-47508-5_20" }],
  },
  {
    title: "Moltbook Dynamics",
    image: "/images/research/moltbook-conference.png",
    alt: "The Moltbook research team presenting to an audience at CSS Escape 2026",
    status: "Presented · CSS Escape 2026, UC Davis",
    authors: "Hiral Arora, Qiyuan Tan & Shashwat Mahalanobis",
    description: "A team study of how AI agents interact on Moltbook, combining reply-network analysis, linguistic convergence, and language-associated posting patterns. Our exploratory analyses found a dense reply core and convergence in topic-focused communities, with language and topic associations that do not establish causation.",
    links: [
      { label: "Research code", href: "https://github.com/moltbook-research/moltbook-network-analysis" },
      { label: "Conference", href: "https://css.ucdavis.edu/activities" },
    ],
  },
];

export default function Research() {
  return (
    <section className="research" id="research" aria-labelledby="research-heading">
      <div className="research-inner">
        <h2 id="research-heading">Research</h2>
        <div className="research-list">
          {research.map((item) => (
            <article className="research-item" key={item.title}>
              <a className="research-visual" href={item.links[0].href} target="_blank" rel="noreferrer" aria-label={`Explore ${item.title}`}>
                <img src={item.image} alt={item.alt} loading="lazy" width="1200" height="720" />
              </a>
              <p className="research-status">{item.status}</p>
              <h3>{item.title}</h3>
              <p className="research-authors">{item.authors}</p>
              <p className="research-description">{item.description}</p>
              <div className="research-links">
                {item.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} <span aria-hidden="true">↗</span></a>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
