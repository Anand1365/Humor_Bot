import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={[styles.profilePageInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.profileIconWrapper}>
              <img
                className={styles.profileIcon}
                loading="lazy"
                alt=""
                src="/profile-icon.svg"
              />
            </div>
            <div className={styles.mainIconWrapper}>
              <img
                className={styles.mainIcon}
                loading="lazy"
                alt=""
                src="/main-icon.svg"
              />
            </div>
            <img
              className={styles.callIcon}
              loading="lazy"
              alt=""
              src="/call-icon.svg"
            />
          </div>
        </div>
        <div className={styles.nameEmailContainer}>
          <p className={styles.name}>{`Name  →  `}</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>Email →</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>Phone →</p>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
