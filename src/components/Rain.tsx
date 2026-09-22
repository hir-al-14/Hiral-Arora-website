const drops = Array.from({ length: 30 });

function Rain() {
  return (
    <div className="rain" aria-hidden="true">
      {drops.map((_, index) => (
        <span
          className="rain-drop"
          key={index}
          style={{
            left: `${(index * 37) % 100}%`,
            animationDelay: `${(index % 10) * -0.4}s`,
            animationDuration: `${2.8 + (index % 5) * 0.25}s`,
          }}
        />
      ))}
    </div>
  );
}

export default Rain;