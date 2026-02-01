import "./Hero.css";

function Hero({ title, subtitle, ctaText, image }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2 className="hero-title">{title}</h2>
        <p className="hero-subtitle">{subtitle}</p>
        {ctaText ? <div className="hero-cta">{ctaText}</div> : null}
      </div>
      {image ? (
        <img className="hero-image" src={image} alt={title ?? "Hero image"} />
      ) : null}
    </section>
  );
}

export default Hero;
