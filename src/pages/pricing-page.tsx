import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FreePlanDescription from "../components/free-plan-description";
import styles from "./pricing-page.module.css";

const PricingPage = () => {
  const navigate = useNavigate();

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
