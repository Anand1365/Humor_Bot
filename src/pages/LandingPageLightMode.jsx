import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Content from "../components/Content";
import styles from "./LandingPageLightMode.module.css";

const LandingPageLightMode = () => {
  const navigate = useNavigate();

  const onABOUTTextClick = useCallback(() => {
    navigate("/about-page-2");
  }, [navigate]);

  const onPRICETextClick = useCallback(() => {
    navigate("/pricing-page-3");
  }, [navigate]);

  const onCONTACTTextClick = useCallback(() => {
    navigate("/contact-page");
  }, [navigate]);

  const onMaterialSymbolslightModeIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.landingPageLightMode1}>
      <img
        className={styles.landingPageLightMode1Child}
        alt=""
        src="/rectangle-11.svg"
      />
      <header className={styles.main}>
        <div className={styles.gigglesContainer}>
          <b className={styles.gigglesAi}>
            <p className={styles.gigglesAi1}>Giggles AI</p>
          </b>
        </div>
        <div className={styles.navigation}>
          <div className={styles.menu}>
            <div className={styles.home}>HOME</div>
            <div
              className={styles.about}
              onClick={onABOUTTextClick}
            >{`ABOUT  `}</div>
            <div
              className={styles.about}
              onClick={onPRICETextClick}
            >{`PRICE  `}</div>
            <div className={styles.contact} onClick={onCONTACTTextClick}>
              CONTACT
            </div>
          </div>
        </div>
        <div className={styles.social}>
          <img
            className={styles.mdiemailOpenOutlineIcon}
            loading="lazy"
            alt=""
            src="/mdiemailopenoutline1.svg"
          />
          <img
            className={styles.mdiemailOpenOutlineIcon}
            loading="lazy"
            alt=""
            src="/feinstagram1.svg"
          />
          <img
            className={styles.mdiemailOpenOutlineIcon}
            loading="lazy"
            alt=""
            src="/linemdlink1.svg"
          />
          <img
            className={styles.materialSymbolslightModeIcon}
            loading="lazy"
            alt=""
            src="/materialsymbolslightmode.svg"
            onClick={onMaterialSymbolslightModeIconClick}
          />
        </div>
      </header>
      <Content />
    </div>
  );
};

export default LandingPageLightMode;
