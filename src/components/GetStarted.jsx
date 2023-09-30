import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <a href="https://www.biblegateway.com/passage/?search=Psalm+23%3A4&version=TLV" target="_blank" rel="noreferrer">
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            
            <span className="text-gradient">Fear No Evil</span>
          </p>
          <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
        </div>

        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Psalm 23:4</span>
        </p>
        
      </div>
    </div>
  </a>
);

export default GetStarted;


