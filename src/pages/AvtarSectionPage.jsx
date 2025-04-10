import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AvtarSectionPage.module.css";


const AvtarSectionPage = () => {
  const navigate = useNavigate();

  const onMaleUserIconClick = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const onImagePlaceholderClick = useCallback(() => {
    navigate("/friend-avtar-chat-page");
  }, [navigate]);

  const onBackToIconClick = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const onRectangleImageClick = useCallback(() => {
    navigate("/educator-avtar-chat-page");
  }, [navigate]);
  return (
    <div className={styles.avtarSectionPage}>
      <header className={styles.frameParent}>


        <div className={styles.frameWrapper}>
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
                <p className={styles.gigglesAi1}>Giggles AI</p>
              </b>
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
      <div className={styles.avtarSectionPageInner}>
        <div className={styles.chooseAnAvatarToTalkWithParent}>
          <h1 className={styles.chooseAnAvatar}>
            Choose an Avatar to talk with.
          </h1>
          <div className={styles.avatarGrid}>
            <div className={styles.avatarCard}>
              <div className={styles.avatarImage}>
                <img
                  className={styles.imagePlaceholderIcon}
                  loading="lazy"
                  alt=""
                  src="/rectangle2@2x.png"
                  onClick={onImagePlaceholderClick}
                />
                <button className={styles.avatarDescription}>
                  <b className={styles.friend}>
                    <span className={styles.friend1}>friend</span>
                    <span className={styles.span}>{` `}</span>
                  </b>
                </button>
              </div>
              <div className={styles.avatarImage1}>
                <div className={styles.rectangleWrapper}>
                  <img
                    className={styles.rectangleIcon}
                    loading="lazy"
                    alt=""
                    src="/rectangle-12@2x.png"
                    onClick={onRectangleImageClick}
                  />
                </div>
                <button className={styles.educatorWrapper}>
                  <b className={styles.educator}>Educator</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvtarSectionPage;
