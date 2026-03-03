export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {year} Mohamed Saleh. All rights reserved.</p>
        <a className="footer__top" href="#home">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}