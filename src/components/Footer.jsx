import "./Footer.css";

function Footer({ storeName, email, phone, address, copyright }) {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <strong>{storeName}</strong>
          <div>{address}</div>
        </div>
        <div>
          <div>{email}</div>
          <div>{phone}</div>
        </div>
      </div>
      <div className="footer-bottom">{copyright}</div>
    </footer>
  );
}

export default Footer;
