import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ABOUTPAGE.module.css";

const ABOUTPAGE = () => {
  const onBackToIconClick = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const navigate = useNavigate();

  const onHOMETextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPRICETextClick = useCallback(() => {
    navigate("/pricing-page-3");
  }, [navigate]);

  const onCONTACTTextClick = useCallback(() => {
    navigate("/contact-page");
  }, [navigate]);

  const onMaleUserIconClick = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  return (
    <div className={styles.aboutPage2}>
      <header className={styles.frameParent}>
        <div className={styles.backToParent}>
          <img
            className={styles.backToIcon}
            loading="lazy"
            alt=""
            src="/back-to@2x.png"
            onClick={onBackToIconClick}
          />
          <div className={styles.gigglesAiWrapper}>
            <b className={styles.gigglesAi}>
              <p className={styles.welcomeToGigglesai}>Giggles AI</p>
            </b>
          </div>
        </div>
        <div className={styles.menuWrapper}>
          <div className={styles.menu}>
            <div className={styles.home} onClick={onHOMETextClick}>
              HOME
            </div>
            <div className={styles.about}>{`ABOUT  `}</div>
            <div
              className={styles.price}
              onClick={onPRICETextClick}
            >{`PRICE  `}</div>
            <div className={styles.contact} onClick={onCONTACTTextClick}>
              CONTACT
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
      <section className={styles.content}>
        <div className={styles.aboutMeParent}>
          <h2 className={styles.aboutMe}>About me!!</h2>
          <div className={styles.welcomeToGigglesaiYourAiWrapper}>
            <b className={styles.welcomeToGigglesaiContainer}>
              <p className={styles.welcomeToGigglesai}>
                Welcome to GigglesAI – Your AI Buddy for Laughter and Fun!
              </p>
              <p className={styles.welcomeToGigglesai}>&nbsp;</p>
              <p
                className={styles.welcomeToGigglesai}
              >{`GigglesAI isn’t just another chatbot—it’s your personal humor companion! `}</p>
              <p
                className={styles.welcomeToGigglesai}
              >{`Designed to understand emotions and respond with wit, sarcasm, and just the right dose of comedy, GigglesAI makes every conversation feel lively and entertaining. `}</p>
              <p className={styles.welcomeToGigglesai}>&nbsp;</p>
              <p className={styles.welcomeToGigglesai}>
                Whether you need a clever comeback, a mood-boosting joke, or an
                AI friend who "gets" your vibe, GigglesAI is here to turn every
                chat into a delightful experience.
              </p>
              <p className={styles.welcomeToGigglesai}>&nbsp;</p>
              <p className={styles.welcomeToGigglesai}>
                Brought to life by....
              </p>
              <p className={styles.welcomeToGigglesai}>
                Anand, Pratik, Rishita, and Shalini.
              </p>
              <p className={styles.welcomeToGigglesai}>
                GigglesAI is more than words—it’s humor, personality, and
                AI-driven fun at its finest!
              </p>
            </b>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ABOUTPAGE;
