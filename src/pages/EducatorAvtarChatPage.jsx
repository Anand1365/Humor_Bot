import { useCallback,useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./EducatorAvtarChatPage.module.css";

const EducatorAvtarChatPage = () => {
  const navigate = useNavigate();

  const onMaleUserIconClick = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);
    const onBackToIconClick = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  return (
    <div className={styles.educatorAvtarChatPage}>
      <header className={styles.pageLayout}>
        <div className={styles.navigation}>
          <img
            className={styles.backToIcon}
            loading="lazy"
            alt=""
            src="/back-to@2x.png"
            onClick={() => navigate(-1)}
          />
          <div className={styles.titleContainer}>
            <h3 className={styles.gigglesAi}>
              <p className={styles.gigglesAi1}>Giggles AI</p>
            </h3>
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
        <div className={styles.chatArea}>
          <div className={styles.response}>
            <img className={styles.responseChild} loading="lazy" alt="" />
          </div>
          <div className={styles.inputZone}>
            <img
              className={styles.messageBubbleIcon}
              loading="lazy"
              alt=""
              src="/rectangle1@2x.png"
            />
            <div className={styles.promptContainer}>
              <div className={styles.prompt}>
                <h1 className={styles.askMeFor}>Ask me for any advice.</h1>
                <div className={styles.inputPrompt}>
                  <div className={styles.problemArea}>
                    <div className={styles.problemAreaChild} />
                    <input
                      className={styles.problemPrompt}
                      placeholder="Tell me your problem"
                      type="text"
                    />
                    <img
                      className={styles.stashpaperplaneSolidIcon}
                      alt=""
                      src="/stashpaperplanesolid.svg"
                    />
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

export default EducatorAvtarChatPage;
