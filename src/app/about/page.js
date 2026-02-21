import Hero from "@/components/Hero/Hero";
import styles from "./about.module.scss";

export default function About() {
  return (
    <main>
      <Hero
        title="About Our Mission"
        subtitle="We are dedicated to creating the best web experiences using cutting-edge technologies and beautiful design."
        showCta={false}
      />

      <section className={`container ${styles.about}`}>
        <div className={styles.about__container}>
          <h2>Our Story</h2>
          <p>
            Started with a vision to simplify web development without compromising on design quality.
            We believe that every developer should have access to a solid foundation that handles
            the complexities of responsiveness and modern aesthetics.
          </p>
          <p>
            Our template combines the power of Next.js with the flexibility of SCSS to provide
            a seamless development experience.
          </p>
        </div>
      </section>
    </main>
  );
}
