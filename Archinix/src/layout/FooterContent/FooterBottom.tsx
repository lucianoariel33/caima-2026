export default function FooterBottom() {
  return (
    <div className="footer-bottom">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6 col-md-6">
            <p className="copyright-line">
              © {new Date().getFullYear()} Archinix. All rights reserved.
            </p>
          </div>

          <div className="col-lg-6 col-md-6 text-md-end">
            <p className="privacy">Privacy Policy | Terms &amp; Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
}
