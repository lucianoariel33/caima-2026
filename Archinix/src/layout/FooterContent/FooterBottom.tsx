import { content } from "@/content/useContent";

export default function FooterBottom() {
  const { copyright } = content.site;
  const { legal } = content.footer;

  return (
    <div className="footer-bottom">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6 col-md-6">
            <p className="copyright-line">
              © {new Date().getFullYear()} {copyright}
            </p>
          </div>

          <div className="col-lg-6 col-md-6 text-md-end">
            <p className="privacy">{legal}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
