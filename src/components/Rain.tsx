const drops = Array.from({ length: 42 });

function Rain() {
  return (
    <div className="intro-rain" aria-hidden="true">
      {drops.map((_, index) => (
        <span
          className="intro-rain-drop"
          key={index}
          style={{
            left: `${(index * 37) % 103}%`,
            animationDelay: `${(index % 13) * -0.43}s`,
            animationDuration: `${
              3.1 + (index % 7) * 0.28
            }s`,
            opacity: 0.16 + (index % 5) * 0.035,
          }}
        />
      ))}
    </div>
  );
}

export default Rain;