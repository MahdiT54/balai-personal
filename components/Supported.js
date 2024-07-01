import {
  faGoogle,
  faMeta,
  faShopify,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import supportedstyles from "../styles/Supported.module.css";

export default function Supported() {
  return (
    <section className={supportedstyles.supported}>
      <div className="row">
        <div className={`${supportedstyles.supported__container} container`}>
          <h1 className={supportedstyles.supported__h1}>
            The <span className="grey">Only</span> Analytics Application That
            Centralizes Data Across All Platforms
          </h1>
          <h3 className={supportedstyles.supported__h3}>
            Centralize All Your Financial & Marketing Data
          </h3>
          <h2 className={supportedstyles.supported__h2}>We Support</h2>
          <div className={supportedstyles.supported__logos}>
            <figure
              className={`${supportedstyles.supported__logo} bai__button--hover`}
            >
              Youtube <FontAwesomeIcon icon={faYoutube} />
            </figure>
            <figure
              className={`${supportedstyles.supported__logo} bai__button--hover`}
            >
              Meta <FontAwesomeIcon icon={faMeta} />
            </figure>
            <figure
              className={`${supportedstyles.supported__logo} bai__button--hover`}
            >
              Tiktok <FontAwesomeIcon icon={faTiktok} />
            </figure>
            <figure
              className={`${supportedstyles.supported__logo} bai__button--hover`}
            >
              Google <FontAwesomeIcon icon={faGoogle} />
            </figure>
            <figure
              className={`${supportedstyles.supported__logo} bai__button--hover`}
            >
              Shopify <FontAwesomeIcon icon={faShopify} />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
