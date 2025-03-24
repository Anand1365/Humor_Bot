import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FriendAvtarChatPage.module.css";

const FriendAvtarChatPage = () => {
  const navigate = useNavigate();

  const onMaleUserIconClick = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  return (
    <div className={styles.friendAvtarChatPage}>
      <header className={styles.topBar}>
        <div className={styles.backToParent}>
          <img
            className={styles.backToIcon}
            loading="lazy"
            alt=""
            src="/back-to@2x.png"
          />
          <div className={styles.gigglesAiWrapper}>
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
          <div className={styles.avatarArea}>
            <img className={styles.avatarAreaChild} loading="lazy" alt="" />
          </div>
          <div className={styles.chatBubble}>
            <img
              className={styles.chatBackgroundIcon}
              loading="lazy"
              alt=""
              src="/rectangle@2x.png"
            />
            <div className={styles.messageArea}>
              <div className={styles.advicePrompt}>
                <h1 className={styles.askMeFor}>Ask me for any advice.</h1>
                <div className={styles.problemPrompt}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <input
                      className={styles.frameItem}
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

export default FriendAvtarChatPage;
