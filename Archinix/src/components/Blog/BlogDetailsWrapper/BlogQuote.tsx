import quoteImg from "/assets/img/straight-quotes.png";

interface BlogQuote {
  details: string;
  img: string;
}

const quote: BlogQuote = {
  details:
    "With the rise of remote work and flexible work arrangements, more and more people are finding themselves in need of a functional home office spaces.",
  img: quoteImg,
};

export default function BlogQuote() {
  return (
    <div className="blog-quote-text mt-60">
      <div className="quote-sign">
        <img src={quote.img} alt="quote" />
      </div>
      <h3>{quote.details}</h3>
    </div>
  );
}
