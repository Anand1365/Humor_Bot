import PropTypes from "prop-types";
import styles from "./free-plan-description.module.css";

const FreePlanDescription = ({ className = "" }) => {
  return (
    <div className={[styles.freePlanDescription, className].join(" ")}>
      <div className={styles.freePlanFeatures}>
        <div className={styles.freePlanFeaturesChild} />
        <div className={styles.plusFeature}>
          <h1 className={styles.free}>Free</h1>
          <div className={styles.freePlanFeatureList}>
            <h2 className={styles.free}>
              <p
                className={styles.exploreTheFun}
              >{`Explore the fun side of AI `}</p>
              <p className={styles.exploreTheFun}>
                with witty and engaging chats.
              </p>
            </h2>
            <div className={styles.featureList}>
              <div className={styles.innerFeatureList}>
                <img
                  className={styles.deepNestedFeature}
                  loading="lazy"
                  alt=""
                  src="/frame-15.svg"
                />
                <div className={styles.featureAccess}>
                  <div className={styles.accessFeatures}>
                    <div className={styles.accessToGiggles}>
                      Access to Giggles AI
                    </div>
                    <div className={styles.sentimentAwareness}>
                      Sentiment Awareness
                    </div>
                    <div className={styles.accessToGiggles}>
                      Daily chats (150)
                    </div>
                    <div
                      className={styles.exploreMultiplePersonalitiesContainer}
                    >
                      <p className={styles.exploreTheFun}>
                        {" "}
                        Explore multiple personalities
                      </p>
                      <p className={styles.exploreTheFun}> of AI</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.plusPlanFeatures}>
          <div className={styles.ultimateGigglesAI}>
            <div className={styles.accessToGiggles}>$0/ month</div>
            <button className={styles.free1}>
              <div className={styles.getFree}>Get Free</div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.proPlanDescription}>
        <div className={styles.proFeatures}>
          <div className={styles.freePlanFeaturesChild} />
          <div className={styles.proHeader}>
            <div className={styles.proTitle}>
              <h1 className={styles.free}>Pro</h1>
              <h3 className={styles.enhanceYourChatsContainer}>
                <p
                  className={styles.exploreTheFun}
                >{`Enhance your chats with `}</p>
                <p
                  className={styles.exploreTheFun}
                >{`smarter humor and advanced `}</p>
                <p className={styles.exploreTheFun}>AI replies.</p>
              </h3>
            </div>
            <div className={styles.proCheckmarks}>
              <div className={styles.proCheckmarkList}>
                <div className={styles.checkmarkRow}>
                  <img
                    className={styles.mditickIcon}
                    loading="lazy"
                    alt=""
                    src="/mditick.svg"
                  />
                  <img
                    className={styles.mditickIcon}
                    loading="lazy"
                    alt=""
                    src="/mditick.svg"
                  />
                  <img
                    className={styles.mditickIcon}
                    loading="lazy"
                    alt=""
                    src="/mditick.svg"
                  />
                  <img
                    className={styles.mditickIcon}
                    loading="lazy"
                    alt=""
                    src="/mditick.svg"
                  />
                  <img
                    className={styles.mditickIcon}
                    loading="lazy"
                    alt=""
                    src="/mditick.svg"
                  />
                  <img
                    className={styles.mditickIcon}
                    loading="lazy"
                    alt=""
                    src="/mditick.svg"
                  />
                </div>
                <div className={styles.proFeatureItemsWrapper}>
                  <div className={styles.proFeatureItems}>
                    <div className={styles.accessToGiggles}>
                      Everything in Free
                    </div>
                    <div className={styles.accessToGiggles}>
                      Advanced AI Personalities
                    </div>
                    <div className={styles.accessToGiggles}>
                      Enhanced Sentiment Awareness
                    </div>
                    <div className={styles.accessToGiggles}>
                      Daily Chats (Unlimited)
                    </div>
                    <div
                      className={styles.accessToGiggles}
                    >{`AI Jokes & Memes`}</div>
                    <div className={styles.accessToGiggles}>Group AI Chats</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.proPricing}>
            <div className={styles.proMonthly}>
              <div className={styles.accessToGiggles}>$10/ month</div>
            </div>
            <button className={styles.proButton}>
              <div className={styles.getFree}>Get Pro</div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.freePlanFeatures1}>
        <div className={styles.freePlanFeaturesChild} />
        <h1 className={styles.plus}>Plus</h1>
        <div className={styles.experienceTheFullPowerOfGParent}>
          <b className={styles.accessToGiggles}>
            <p
              className={styles.exploreTheFun}
            >{`Experience the full power of `}</p>
            <p className={styles.exploreTheFun}>
              GigglesAI with ultimate customization.
            </p>
          </b>
          <div className={styles.plusFeatureList}>
            <div className={styles.plusCheckmarks}>
              <div className={styles.checkmarkRow}>
                <img
                  className={styles.mditickIcon}
                  loading="lazy"
                  alt=""
                  src="/mditick.svg"
                />
                <img
                  className={styles.mditickIcon}
                  loading="lazy"
                  alt=""
                  src="/mditick.svg"
                />
                <img
                  className={styles.mditickIcon}
                  loading="lazy"
                  alt=""
                  src="/mditick.svg"
                />
                <img
                  className={styles.mditickIcon}
                  loading="lazy"
                  alt=""
                  src="/mditick.svg"
                />
                <img
                  className={styles.mditickIcon}
                  loading="lazy"
                  alt=""
                  src="/mditick.svg"
                />
                <img
                  className={styles.mditickIcon}
                  loading="lazy"
                  alt=""
                  src="/mditick.svg"
                />
                <img
                  className={styles.mditickIcon}
                  loading="lazy"
                  alt=""
                  src="/mditick.svg"
                />
                <img
                  className={styles.mditickIcon}
                  loading="lazy"
                  alt=""
                  src="/mditick.svg"
                />
              </div>
              <div className={styles.allFeaturesWrapper}>
                <div className={styles.allFeatures}>
                  <div className={styles.accessToGiggles}>
                    Everything in Plus
                  </div>
                  <div className={styles.allAiPersonalities}>
                    {" "}
                    All AI Personalities
                  </div>
                  <div className={styles.accessToGiggles}>
                    Ultra Sentiment Awareness
                  </div>
                  <div className={styles.advancedFeatures}>
                    <div className={styles.aiJokes1}>{`AI Jokes & Memes`}</div>
                    <div className={styles.accessToGiggles}>
                      Daily Chats(Unlimited)
                    </div>
                    <div className={styles.groupAiChatsParent}>
                      <div className={styles.groupAiChats1}>Group AI Chats</div>
                      <div className={styles.customCreator}>
                        <div className={styles.customAiCreator}>
                          Custom AI Creator
                        </div>
                        <div className={styles.customAiCreator1}>
                          Custom AI Creator
                        </div>
                      </div>
                      <div className={styles.earlyAccess}>Early Access</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.plusPricing}>
          <div className={styles.plusMonthly}>
            <div className={styles.accessToGiggles}>$14.99/ month</div>
          </div>
          <button className={styles.plusButton}>
            <div className={styles.getFree}>Get Plus</div>
          </button>
        </div>
      </div>
    </div>
  );
};

FreePlanDescription.propTypes = {
  className: PropTypes.string,
};

export default FreePlanDescription;
