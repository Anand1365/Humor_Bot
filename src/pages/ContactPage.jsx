import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ContactPage.module.css";

const ContactPage = () => {
  const navigate = useNavigate();

  const onMaleUserIconClick = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  return (
    <div className={styles.contactPage}>
      <header className={styles.frameParent}>
        <div className={styles.backToParent}>
          <img
            className={styles.backToIcon}
            loading="lazy"
            alt=""
            src="/back-to@2x.png"
          />
          <div className={styles.gigglesAiWrapper}>
            <b className={styles.gigglesAi}>
              <p className={styles.gotQuestionsLets}>Giggles AI</p>
            </b>
          </div>
        </div>
        <div className={styles.maleUserWrapper}>
          <img
            className={styles.maleUserIcon}
            loading="lazy"
            alt=""
            src="/male-user@2x.png"
            onClick={onMaleUserIconClick}
          />
        </div>
      </header>
      <section className={styles.contactPageInner}>
        <div className={styles.frameGroup}>
          <div className={styles.pixelarticonsarrowUpParent}>
            <img
              className={styles.pixelarticonsarrowUp}
              loading="lazy"
              alt=""
              src="/pixelarticonsarrowup@2x.png"
            />
            <div className={styles.gotQuestionsLetsTalkWeWrapper}>
              <div className={styles.gotQuestionsLetsContainer}>
                <p className={styles.gotQuestionsLets}>
                  Got Questions? Let’s Talk!
                </p>
                <p className={styles.gotQuestionsLets}>
                  {" "}
                  We’d love to hear from you. Reach out for support, feedback,
                  or just to say hi!
                </p>
              </div>
            </div>
          </div>
          <div className={styles.centerFrameWrapper}>
            <div className={styles.centerFrame}>
              <div className={styles.frameContainer}>
                <div className={styles.frameWrapper}>
                  <div className={styles.pixelarticonsarrowUpGroup}>
                    <img
                      className={styles.pixelarticonsarrowUp}
                      loading="lazy"
                      alt=""
                      src="/pixelarticonsarrowup-1@2x.png"
                    />
                    <div className={styles.contactInfo9112xxxxxxx0Wrapper}>
                      <div className={styles.contactInfo}>
                        Contact Info :- +9112xxxxxxx0
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.pixelarticonsarrowUpContainer}>
                  <img
                    className={styles.pixelarticonsarrowUp}
                    loading="lazy"
                    alt=""
                    src="/pixelarticonsarrowup-1@2x.png"
                  />
                  <div className={styles.submitARequestGoogleFormWrapper}>
                    <div className={styles.contactInfo}>
                      Submit a Request:- google form link
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.centerFrameInner}>
                <div className={styles.pixelarticonsarrowUpGroup}>
                  <img
                    className={styles.pixelarticonsarrowUp}
                    loading="lazy"
                    alt=""
                    src="/pixelarticonsarrowup-1@2x.png"
                  />
                  <div className={styles.contactInfo9112xxxxxxx0Wrapper}>
                    <div className={styles.contactInfo}>
                      Email :- GigglesAI@gmail.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
