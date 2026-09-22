type SectionHeadingProps = {
  number: string;
  title: string;
  description?: string;
};

function SectionHeading({
  number,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <span className="section-number">
        {number}
      </span>

      <div>
        <h2>{title}</h2>

        {description && (
          <p>{description}</p>
        )}
      </div>
    </div>
  );
}

export default SectionHeading;