import styles from "@/app/features/expert-hakeem/page.module.css";

const qualifications = [
  {
    icon: "🎓",
    title: "Bachelor of Unani Medicine & Surgery",
    subtitle: "B.U.M.S.",
    description:
      "Professional degree in Unani Medicine with extensive knowledge of diagnosis, herbal medicines and holistic healthcare.",
  },

  {
    icon: "🌿",
    title: "Diploma in Naturopathy & Yogic Sciences",
    subtitle: "Certified",
    description:
      "Specialized training in naturopathy, yoga therapy, detoxification and natural healing techniques.",
  },

  {
    icon: "🩺",
    title: "Advanced Diploma in Cupping Therapy",
    subtitle: "Hijama Specialist",
    description:
      "Professional certification in Hijama Therapy for pain management, detoxification and wellness treatments.",
  },

  {
    icon: "💆",
    title: "Facial Cupping Therapy",
    subtitle: "Certified Course",
    description:
      "Advanced facial cupping techniques for skin rejuvenation, blood circulation and facial wellness.",
  },

  {
    icon: "🏥",
    title: "Clinical Practice",
    subtitle: "Professional Experience",
    description:
      "Years of experience treating chronic diseases using authentic Unani medicine and personalized treatment plans.",
  },

  {
    icon: "📚",
    title: "Continuous Medical Learning",
    subtitle: "Healthcare Education",
    description:
      "Regular participation in workshops, seminars and professional healthcare training programs.",
  },
];

export default function Qualifications() {
  return (
    <section className={styles.qualificationSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTag}>QUALIFICATIONS</span>

        <h2 className={styles.sectionTitle}>
          Education & Professional Qualifications
        </h2>

        <p className={styles.sectionDescription}>
          Professional education, certifications and years of clinical
          experience dedicated to providing authentic Unani healthcare.
        </p>
      </div>

      <div className={styles.qualificationGrid}>
        {qualifications.map((item, index) => (
          <div key={index} className={styles.qualificationCard}>
            <div className={styles.iconBox}>
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <span>{item.subtitle}</span>

            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}