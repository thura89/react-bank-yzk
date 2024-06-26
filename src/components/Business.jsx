import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`feature-card flex items-center flex-row p-6 rounded-[20px] ${
      index === features.length - 1 ? "mb-0" : "mb-6"
    }`}
  >
    <div
      className={`${styles.flexCenter} rounded-full bg-dimBlue w-[64px] h-[64px]`}
    >
      <img src={icon} alt={title} className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex flex-1 flex-col ml-3">
      <h4 className="text-white font-poppins font-semibold text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="text-white font-poppins font-normal text-[16px] leading-[24px] ">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" /> we’ll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button style={`mt-10`} />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
