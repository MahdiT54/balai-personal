import TryAIstyles from "../styles/TryAI.module.css";

export default function TryAi() {
  return (
    <section className={TryAIstyles.TryAI__section}>
      <div className="row">
        <div className={`${TryAIstyles.TryAI__container} container`}>
          <div className={TryAIstyles["TryAI__text--wrapper"]}>
            <h1 className={TryAIstyles.TryAI__h1}>Balance AI</h1>
            <h3 className={TryAIstyles.TryAI__h3}>
              Business AI Chat Assistant
            </h3>
            <h3 className={TryAIstyles.TryAI__h3}>
              Welcome to the Future of Analytics!
            </h3>
            <p className={TryAIstyles.TryAI__p}>
              Our AI serves as a personal Business Advisor clarifying all
              insights and allows users to request custom comparisons. We also
              suggest potential investment strategies tp help boost profit and
              warn users of potential risks based on their personal business
              data & thousands of other successful businesses across all
              industries.
            </p>
            <button
              className={`${TryAIstyles["bai__button--TryAI"]} bai__button bai__button--hover bai__button--focus`}
            >
              Sign Up
            </button>
          </div>
          <figure className={TryAIstyles.figure__wrapper}>
            <img src="" alt="" />
            Image coming soon
          </figure>
        </div>
      </div>
    </section>
  );
}
