import styles from "./Legal.module.scss";

import TitleBackground from "../../components/TitleBackground";

const PrivacyPolicy = () => {
  return (
    <section className={styles.legal}>
      <TitleBackground title='Privacy Policy' />
      <div className={styles.legalContainer}>
        <h2 className={styles.legalTitle}>1. General Provisions</h2>
        <p className={styles.legalText}>
          This Privacy Policy explains what data is collected from users of the website dedicated to FC Barcelona and
          how that data is used. By using the Website, you agree to the terms of this Policy.
        </p>
        <h2 className={styles.legalTitle}>2. Data We Collect</h2>
        <p className={styles.legalText}>We may collect the following types of data:</p>
        <h3 className={styles.legalTitle2}>2.1. Personal Information</h3>
        <p className={styles.legalText}>
          — Name, email address (only if voluntarily provided, for example via a newsletter signup or contact form).
        </p>
        <h3 className={styles.legalTitle2}>2.2. Technical Data</h3>
        <p className={styles.legalText}>— IP address</p>
        <p className={styles.legalText}>— Browser type</p>
        <p className={styles.legalText}>— Language settings</p>
        <p className={styles.legalText}>— Interaction data (cookies, analytics information)</p>
        <h3 className={styles.legalTitle2}>2.3. Cookies and Analytics</h3>
        <p className={styles.legalText}>
          The Website may use cookies and third-party analytics tools (e.g., Google Analytics) to analyze user behavior.
        </p>
        <h2 className={styles.legalTitle}>3. How We Use Data</h2>
        <p className={styles.legalText}>Collected data may be used for:</p>
        <p className={styles.legalText}>— improving Website performance;</p>
        <p className={styles.legalText}>— personalizing content;</p>
        <p className={styles.legalText}>— analyzing traffic;</p>
        <p className={styles.legalText}>
          — communicating with users (if they voluntarily provide contact information).
        </p>
        <h2 className={styles.legalTitle}>4. Sharing Data with Third Parties</h2>
        <p className={styles.legalText}>We do not sell or share personal data with third parties, except for:</p>
        <p className={styles.legalText}>— analytics services;</p>
        <p className={styles.legalText}>— situations required by law (e.g., government requests).</p>
        <h2 className={styles.legalTitle}>5. Data Security</h2>
        <p className={styles.legalText}>
          We take reasonable measures to protect information from unauthorized access, loss, or alteration. However, no
          data transmission method over the internet is completely secure.
        </p>
        <h2 className={styles.legalTitle}>6. User Rights</h2>
        <p className={styles.legalText}>Users have the right to:</p>
        <p className={styles.legalText}>— request a copy of their personal data;</p>
        <p className={styles.legalText}>— request correction or deletion of their data;</p>
        <p className={styles.legalText}>— withdraw consent for data processing.</p>
        <h2 className={styles.legalTitle}>7. Data Retention</h2>
        <p className={styles.legalText}>
          Data is stored only as long as necessary to fulfill the purposes outlined in this Policy, unless a longer
          retention period is required by law.
        </p>
        <h2 className={styles.legalTitle}>8. Changes to the Policy</h2>
        <p className={styles.legalText}>
          We may update this Privacy Policy. The date of the latest update will be displayed at the bottom of the page.
        </p>
      </div>
    </section>
  );
};
export default PrivacyPolicy;
