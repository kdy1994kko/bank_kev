import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Psalm 144:1-2</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Praise be to the Lord my Rock,
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        who trains my hands for war 
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        and my fingers for battle.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <a href="https://www.biblegateway.com/passage/?search=Psalm+144%3A1-2&version=NIV" target="_blank" rel="noreferrer">
        <Button styles={`mt-10`} />
      </a>
    </div>
  </section>
);

export default CTA;