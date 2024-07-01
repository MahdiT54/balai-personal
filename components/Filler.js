import Link from "next/link";
import logo from "../public/Logo.svg";
import fillerstyles from "../styles/Filler.module.css";
import Image from "next/image";

export default function Filler() {
  return (
    <section className={fillerstyles.filler}>
      <div className={`${fillerstyles.filler__row} row`}>
        <div className={`${fillerstyles.filler__container} container`}>
          <div className={fillerstyles.filler__section1}>
            <div className={fillerstyles.filler__text}>
              <h1 className={fillerstyles.filler__heading}>
                Manage Cash Flow & Effectively Utilize Capital
              </h1>
              <h2 className={fillerstyles.filler__subheading}>
                Understand All Your Business Data Insights Through Our
                Proprietary Analytics Dashboards, AI Powered Reports & Forecasts
              </h2>
              <button
                className={`${fillerstyles["bai__button--filler"]} bai__button bai__button--hover bai__button--focus`}
              >
                Learn More
              </button>
            </div>
            <figure className={fillerstyles.filler__imageContainer}>
              <img
                className={fillerstyles.filler__image}
                src="/BusinessCashFlow.svg"
                alt="Business Cash Flow"
              />
            </figure>
          </div>
          <div className={fillerstyles.filler__section2}>
            <figure className={fillerstyles.filler__imageContainer}>
              <img
                className={fillerstyles.filler__image}
                src="/CuttingEdge.svg"
                alt="Business Cash Flow"
              />
            </figure>
            <div className={`${fillerstyles.filler__text} align-end`}>
              <h1 className={fillerstyles.filler__heading}>
                Cutting Edge Analytics
              </h1>
              <h2 className={fillerstyles.filler__subheading}>
              With accurate information, track all of your profits from each platform
              </h2>
              <button
                className={`${fillerstyles["bai__button--filler"]} bai__button bai__button--hover bai__button--focus`}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
