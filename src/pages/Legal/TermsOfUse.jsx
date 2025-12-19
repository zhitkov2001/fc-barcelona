import styles from "./Legal.module.scss";

import TitleBackground from "../../components/TitleBackground";

const TermsOfUse = () => {
  return (
    <section className={styles.legal}>
      <TitleBackground title='Terms of Use' />
      <div className={styles.legalContainer}>
        <h2 className={styles.legalTitle}>1. General Provisions</h2>
        <p className={styles.legalText}>
          These Terms of Use govern access to and use of the website dedicated to FC Barcelona (the “Website”). By using
          the Website, you agree to these Terms. If you do not agree, please discontinue using the Website.
        </p>
        <h2 className={styles.legalTitle}>2. Content and Intellectual Property</h2>
        <p className={styles.legalText}>
          All content on the Website, including text, images, graphics, logos, videos, and other materials, is provided
          for informational and entertainment purposes only.
        </p>
        <p className={styles.legalText}>
          The Website is not an official resource of FC Barcelona. All trademarks and logos mentioned belong to their
          respective owners.
        </p>
        <p className={styles.legalText}>
          Users may not copy, distribute, modify, or use Website materials for commercial purposes without prior written
          permission from the rights holders.
        </p>
        <h2 className={styles.legalTitle}>3. Use of the Website</h2>
        <p className={styles.legalText}>
          Users agree not to use the Website for unlawful activities, distributing malware, sending spam, or attempting
          to gain unauthorized access to the server.
        </p>
        <p className={styles.legalText}>
          The Website administration reserves the right to restrict access to users who violate these Terms.
        </p>
        <h2 className={styles.legalTitle}>4. Disclaimer</h2>
        <p className={styles.legalText}>
          All Website materials are provided “as is.” The administration does not guarantee the accuracy, relevance, or
          completeness of the information.
        </p>
        <p className={styles.legalText}>
          The Website is not liable for any damages resulting from the use of or inability to use the Website’s content.
        </p>
        <h2 className={styles.legalTitle}>5. Third-Party Links</h2>
        <p className={styles.legalText}>
          The Website may contain links to third-party websites. The administration does not control their content and
          is not responsible for their use.
        </p>
        <h2 className={styles.legalTitle}>6. Changes to the Terms</h2>
        <p className={styles.legalText}>
          The Website administration may update these Terms at any time. Continued use of the Website constitutes
          acceptance of the updated Terms.
        </p>
      </div>
    </section>
  );
};
export default TermsOfUse;
