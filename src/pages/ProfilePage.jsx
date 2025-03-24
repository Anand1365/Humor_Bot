import FrameComponent1 from "../components/FrameComponent1";
import styles from "./ProfilePage.module.css";

const ProfilePage = () => {
  return (
    <div className={styles.profilePage}>
      <div className={styles.backToParent}>
        <img
          className={styles.backToIcon}
          loading="lazy"
          alt=""
          src="/back-to@2x.png"
        />
        <div className={styles.gigglesAiWrapper}>
          <b className={styles.gigglesAi}>
            <p className={styles.gigglesAi1}> Giggles AI</p>
          </b>
        </div>
      </div>
      <FrameComponent1 />
      <img
        className={styles.profileWithAddon}
        alt=""
        src="/profile-with-addon.svg"
      />
    </div>
  );
};

export default ProfilePage;
