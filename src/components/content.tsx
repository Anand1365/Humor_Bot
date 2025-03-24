import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./content.module.css";

const Content = ({ className = "" }) => {
  const navigate = useNavigate();

  const onCTAContainerClick = useCallback(() => {
    navigate("/avtar-section-page");
  }, [navigate]);

  return (
    <section className={[styles.content, className].join(" ")}>
      <div className={styles.exploreCreativityOfAChatboParent}>
        <h1 className={styles.exploreCreativityOfContainer}>
          <p className={styles.exploreCreativityOf}>
            Explore creativity of a chatbot.
          </p>
          <p className={styles.exploreCreativityOf}>
            Find your favorite chatbot personality
          </p>
        </h1>
        <div className={styles.description}>
          <b className={styles.giggleAiHumoreContainer}>
            <p
              className={styles.exploreCreativityOf}
            >{`Giggle AI (Humore Bhai) is a witty AI assistant that blends intelligence with humor, making conversations fun and engaging. `}</p>
            <p className={styles.exploreCreativityOf}>
              It delivers smart, sarcastic, and lighthearted responses while
              staying helpful!
            </p>
          </b>
          <div className={styles.callToAction}>
            <div className={styles.buttonContainer}>
              <div className={styles.cta} onClick={onCTAContainerClick}>
                <button className={styles.cta1} />
                <b className={styles.letsStart}>
                  <p className={styles.exploreCreativityOf}>LET’S START</p>
                </b>
              </div>
              <div className={styles.buttonContainerInner}>
                <div className={styles.phflowArrowDuotoneParent}>
                  <img
                    className={styles.phflowArrowDuotoneIcon}
                    loading="lazy"
                    alt=""
                    src="/phflowarrowduotone@2x.png"
                  />
                  <div className={styles.clickMeHurryContainer}>
                    <p className={styles.exploreCreativityOf}>
                      <span>CLICK ME</span>
                      <span className={styles.span}>!!!!!!</span>
                    </p>
                    <p className={styles.exploreCreativityOf}>
                      <span>HURRY</span>
                      <span className={styles.span}>!!</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
