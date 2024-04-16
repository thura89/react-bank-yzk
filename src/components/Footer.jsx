import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} flex-col md:flex-row mb-8 w-full`}>
      <div className=" flex flex-1 flex-col justify-start mr-10">
        <img
          src={logo}
          alt="logo"
          className="w-[266px] h-[72.6px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
      <div className=" flex flex-[1.5] flex-row flex-wrap justify-between mt-10 md:mt-0">
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.title}
            className="flex flex-col my-4 ss:my-0 min-w-[150px]"
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerLink.title}
            </h4>
            <ul className=" list-none mt-4">
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal  text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index === footerLink.links.length - 1 ? "mb-0" : "mb-4"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full justify-between flex flex-col md:flex-row pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="text-white font-poppins font-normal text-[18px] leading-[27px]">
        Copyright Ⓒ 2024 YZKBank. All Rights Reserved.
      </p>
      <div className="flex flex-row mt-6 md:mt-0">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={` cursor-pointer w-[21px] h-[21px] object-contain ${
              index === socialMedia.length - 1 ? "mr-0" : "mr-6"
            }`}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
