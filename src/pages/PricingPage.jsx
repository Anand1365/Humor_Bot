import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FreePlanDescription from "../components/FreePlanDescription";
import styles from "./PricingPage.module.css";

const PricingPage = () => {
  const navigate = useNavigate();

  const onBackToIconClick = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const onMaleUserIconClick = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  return (
    <div className={styles.pricingPage3}>
      <header className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.backToParent}>
            <img
              className={styles.backToIcon}
              loading="lazy"
              onClick={onBackToIconClick}
              alt=""
              src="/back-to@2x.png"
            />
            <div className={styles.gigglesAiWrapper}>
              <h1 className={styles.gigglesAi}>
                <p className={styles.gigglesAi1}>Giggles AI</p>
              </h1>
            </div>
          </div>
        </div>
        <img
          className={styles.maleUserIcon}
          loading="lazy"
          alt=""
          src="/male-user@2x.png"
          onClick={onMaleUserIconClick}
        />
      </header>
      <main className={styles.content}>
        <section className={styles.frameGroup}>
          <div className={styles.pricingWrapper}>
            <h1 className={styles.pricing}>{`Pricing `}</h1>
          </div>
          <FreePlanDescription />
        </section>
      </main>
    </div>
  );
};

export default PricingPage;
