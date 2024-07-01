import analyticsstyles from "../styles/Analytics.module.css";

export default function Analytics() {
  return (
    <section className={analyticsstyles.analytics}>
      <div className="row">
        <div className={`${analyticsstyles.analytics__container} container`}>
          <h1 className={analyticsstyles.analytics__h1}>
            Intuitive Analytics Dashboard
          </h1>
          <div className={analyticsstyles.dashboard__wrap}>
            <figure className={analyticsstyles["analytics__img--wrap"]}>
              <img src="/analyticsimg1.svg" alt="first image" />
            </figure>
            <figure className={analyticsstyles["analytics__img--wrap"]}>
              <img src="/analyticsimg2.svg" alt="second image" />
            </figure>
            <figure className={analyticsstyles["analytics__img--wrap"]}>
              <img src="/analyticsimg3.svg" alt="third image" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
