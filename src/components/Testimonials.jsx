import styles from "../style";
import { feedback } from "../constants";
import FeedBackCard from "./FeedBackCard";

const Testimonials = () => (
  <section
    className={`${styles.paddingY} ${styles.flexCenter} relative flex-col`}
  >
    {/* Gradient BG */}
    <div />

    <div className=" w-full flex justify-between mb-6 md:mb-16 items-center md:flex-row flex-col relative z-[1]">
      <h2 className={styles.heading2}>
        What People are <br className="sm:block hidden" /> saying about us
      </h2>
      <div className="w-full mt-6 md:mt-0">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>

    <div className=" flex flex-wrap justify-center md:justify-start relative w-full feedback-container z-[1]">
      {feedback.map((card) => (
        <FeedBackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
