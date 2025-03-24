import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import styles from "./LandingPageDarkMode.module.css";

const LandingPageDarkMode = () => {
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
    navigate("/landing-page-light-mode-1");
  }, [navigate]);

  return (
    <div className={styles.landingPageDarkMode1}>
      <img
        className={styles.landingPageDarkMode1Child}
        alt=""
        src="/rectangle-1.svg"
      />
      <header className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.gigglesAiWrapper}>
            <b className={styles.gigglesAi}>
              <p className={styles.gigglesAi1}>Giggles AI</p>
            </b>
          </div>
          <div className={styles.homeParent}>
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
        <div className={styles.mdiemailOpenOutlineParent}>
          <img
            className={styles.mdiemailOpenOutlineIcon}
            loading="lazy"
            alt=""
            src="/mdiemailopenoutline.svg"
          />
          <img
            className={styles.mdiemailOpenOutlineIcon}
            loading="lazy"
            alt=""
            src="/feinstagram.svg"
          />
          <img
            className={styles.mdiemailOpenOutlineIcon}
            loading="lazy"
            alt=""
            src="/linemdlink.svg"
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
      <FrameComponent />
    </div>
  );
};

export default LandingPageDarkMode;
