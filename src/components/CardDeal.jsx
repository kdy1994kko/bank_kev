import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        What's more <br className="sm:block hidden" /> important to you?
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        REWARDS, GREAT RATES, BUILDING CREDIT <br className="sm:block hidden" /> Browse Our Cards
      </p>

      <a href="https://www.navyfederal.org/loans-cards/credit-cards.html" target="_blank" rel="noreferrer">
        <Button styles={`mt-10`} />
      </a>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;