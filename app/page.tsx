import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "./components/studio/SiteHeader";
import SiteFooter from "./components/studio/SiteFooter";
import SystemSculpture from "./components/studio/SystemSculpture";
import SelectedWork from "./components/studio/SelectedWork";
import Reveal from "./components/studio/Reveal";
import ContactForm from "./components/sections/Contact/ContactForm";
import { experience } from "@/lib/data/experience";
import { certifications } from "@/lib/data/certifications";
import { education } from "@/lib/data/education";
import { testimonials } from "@/lib/data/testimonials";
import { services } from "@/lib/data/services";
import { skillCategories } from "@/lib/data/profile";
import { siteConfig, socialLinks } from "@/lib/data/siteConfig";
import BrandIcon from "./components/ui/BrandIcon";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <div className="studio" id="top">
      <SiteHeader />
      <main id="main-content">
        <section
          className="studio-hero studio-wrap"
          aria-labelledby="hero-heading"
        >
          <div className="hero-intro">
            <p className="eyebrow hero-eyebrow">
              Azure DevOps &amp; .NET Engineer
            </p>
            <h1 id="hero-heading">
              Complexity,
              <br />
              made <em>clear.</em>
            </h1>
            <p className="hero-description">
              I’m Foulla. I build reliable applications, modernize legacy
              systems, and connect the dots from code to cloud.
            </p>
            <div className="hero-actions">
              <a className="studio-button" href="#portfolio">
                Explore my work <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#about">
                A little about me <span aria-hidden="true">↘</span>
              </a>
            </div>
          </div>
          <SystemSculpture />
          <div className="hero-baseline">
            <span className="eyebrow">
              Based in Douala, Cameroon{" "}
              <span className="cross-mark" aria-hidden="true">
                ✳
              </span>
            </span>
            <a href="#portfolio" className="eyebrow">
              Scroll to discover <span aria-hidden="true">↓</span>
            </a>
            <span className="eyebrow hero-edition">
              Independent thinking. Connected systems.
            </span>
          </div>
        </section>
        <div className="toolkit-strip">
          <div className="studio-wrap toolkit-inner">
            <span className="eyebrow">Tools of the trade</span>
            {[
              "Microsoft Azure",
              "Azure DevOps",
              ".NET",
              "Docker",
              "Laravel",
              "React",
            ].map((name) => (
              <span className="toolkit-item" key={name}>
                <BrandIcon name={name} size={24} />
                {name}
              </span>
            ))}
          </div>
        </div>
        <section
          id="portfolio"
          className="studio-section studio-wrap"
          aria-labelledby="work-heading"
        >
          <Reveal>
            <div className="section-title-row">
              <div>
                <p className="eyebrow section-index">01 / Selected work</p>
                <h2 id="work-heading">
                  Real challenges.
                  <br />
                  <span className="muted-heading">Considered solutions.</span>
                </h2>
              </div>
              <p className="section-note">
                A selection of cloud, application, and AI projects, including
                open-source work and anonymized professional case studies.
              </p>
            </div>
          </Reveal>
          <SelectedWork />
        </section>
        <section
          id="about"
          className="about-section"
          aria-labelledby="about-heading"
        >
          <div className="studio-wrap about-grid">
            <Reveal className="portrait-column">
              <div className="portrait-frame">
                <span className="portrait-cross" aria-hidden="true">
                  +
                </span>
                <span className="eyebrow portrait-index">
                  The person behind the systems
                </span>
                <Image
                  src="/img/hero/foulla-portrait-transparent.png"
                  alt="Foulla Samankassou"
                  width={1427}
                  height={1582}
                  sizes="(max-width: 700px) 90vw, 40vw"
                  className="studio-portrait"
                />
                <span className="portrait-signature">Foulla.</span>
                <span className="eyebrow portrait-caption">
                  Douala, Cameroon
                </span>
              </div>
            </Reveal>
            <Reveal className="about-copy">
              <p className="eyebrow section-index">02 / Behind the work</p>
              <h2 id="about-heading">
                An engineer’s mind.
                <br />A human <em>approach.</em>
              </h2>
              <p className="about-lead">
                Good systems start with understanding the people who use them.
              </p>
              <p>
                I’m Foulla Samankassou, an Azure DevOps and .NET engineer based
                in Douala, Cameroon. My work spans building applications,
                modernizing legacy systems, and helping teams put new technology
                to use.
              </p>
              <p>
                At Africa Global Logistics, that journey has grown from
                application engineering into AI and business intelligence
                delivery. I care as much about making an idea clear as making
                the code work.
              </p>
              <div className="about-facts">
                <div>
                  <span className="eyebrow">In conversation</span>
                  <p>
                    French <span>Native</span>
                    <br />
                    English <span>Professional</span>
                  </p>
                </div>
                <div>
                  <span className="eyebrow">Currently</span>
                  <p>
                    BI/AI Project Manager
                    <br />
                    <span>Africa Global Logistics</span>
                  </p>
                </div>
              </div>
              <a
                className="text-link"
                href="https://linkedin.com/in/sam-foulla"
                target="_blank"
                rel="noopener noreferrer"
              >
                More on LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </Reveal>
          </div>
        </section>
        <section
          id="capabilities"
          className="studio-section studio-wrap"
          aria-labelledby="capabilities-heading"
        >
          <Reveal>
            <div className="section-title-row">
              <div>
                <p className="eyebrow section-index">03 / What I bring</p>
                <h2 id="capabilities-heading">
                  From the first line
                  <br />
                  to the <em>big picture.</em>
                </h2>
              </div>
              <p className="section-note">
                Hands-on engineering, with the perspective to see how everything
                fits together.
              </p>
            </div>
          </Reveal>
          <div className="capabilities-list">
            {services.map((service, i) => (
              <Reveal key={service.id}>
                <details className="capability-row" open={i === 0}>
                  <summary>
                    <span className="eyebrow">0{i + 1}</span>
                    <h3>{service.title}</h3>
                    <span className="detail-toggle" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <div className="capability-content">
                    <p>
                      {
                        [
                          "From environment setup to deployment, I help teams deliver .NET applications on Azure through structured CI/CD pipelines.",
                          "Understand what exists. Design what comes next. Move on-premises applications onto Microsoft Azure with a considered migration approach.",
                          "Maintainable applications built around real workflows, with .NET and C#, Laravel and PHP, and React or Vue.js frontends.",
                          "Turn unstructured information into something useful, with human review and adoption at the center of the process.",
                        ][i]
                      }
                    </p>
                    <ul>
                      {service.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
          <details className="stack-details">
            <summary>
              Explore my full toolkit <span aria-hidden="true">+</span>
            </summary>
            <div className="stack-grid">
              {skillCategories.map((category) => (
                <div key={category.id}>
                  <h3>{category.category}</h3>
                  <p>
                    {category.skills.map((skill) => skill.name).join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </details>
        </section>
        <section
          id="experience"
          className="experience-section studio-section"
          aria-labelledby="experience-heading"
        >
          <div className="studio-wrap experience-grid">
            <Reveal>
              <p className="eyebrow section-index">04 / The journey</p>
              <h2 id="experience-heading">
                Always
                <br />
                <em>building.</em>
              </h2>
              <p className="section-note">
                From web applications to cloud modernization and AI delivery.
                Each chapter adds a new perspective.
              </p>
            </Reveal>
            <div className="experience-list">
              {experience.map((role, i) => (
                <Reveal key={role.id}>
                  <details className="experience-row" open={i === 0}>
                    <summary>
                      <span className="eyebrow experience-period">
                        {role.period}
                        {i === 0 && (
                          <span className="current-role">Current</span>
                        )}
                      </span>
                      <h3>{role.role}</h3>
                      <span className="experience-company">{role.company}</span>
                      <span className="detail-toggle" aria-hidden="true">
                        +
                      </span>
                    </summary>
                    <div className="experience-detail">
                      <p>{role.mission}</p>
                      <ul>
                        {role.contributions.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      <div className="tech-tags">
                        {role.technologies.map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))}
                      </div>
                      <p className="experience-full">{role.description}</p>
                    </div>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <section
          id="certifications"
          className="studio-section studio-wrap credentials-section"
          aria-labelledby="credentials-heading"
        >
          <Reveal>
            <div className="section-title-row">
              <div>
                <p className="eyebrow section-index">05 / Foundations</p>
                <h2 id="credentials-heading">
                  Learning is
                  <br />
                  part of the <em>work.</em>
                </h2>
              </div>
              <p className="section-note">
                A foundation in software engineering, backed by cloud, delivery,
                and data credentials.
              </p>
            </div>
          </Reveal>
          <div className="credential-grid">
            {certifications.map((cert) => (
              <article className="credential-card" key={cert.id}>
                <Image
                  src={cert.badge}
                  alt={cert.badgeAlt || "Certification badge"}
                  width={56}
                  height={56}
                />
                <div>
                  <p className="eyebrow">{cert.issuer}</p>
                  <h3>{cert.title}</h3>
                  <p className="credential-date">{cert.date}</p>
                  <details>
                    <summary>Credential details</summary>
                    <p className="credential-id">ID: {cert.credentialId}</p>
                    {cert.credentialUrl && (
                      <a
                        className="text-link"
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Verify credential ↗
                      </a>
                    )}
                  </details>
                </div>
              </article>
            ))}
          </div>
          <div id="education" className="education-block">
            <h3>Academic foundations</h3>
            <div>
              {education.map((item) => (
                <details className="education-row" key={item.id}>
                  <summary>
                    <span className="eyebrow">{item.period}</span>
                    <span>
                      <strong>{item.certificate}</strong>
                      <span>{item.school}</span>
                    </span>
                    <span className="detail-toggle" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p>{item.description}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section
          id="testimonials"
          className="testimonials-section"
          aria-labelledby="testimonials-heading"
        >
          <div className="studio-wrap">
            <p className="eyebrow section-index">06 / In good company</p>
            <h2 id="testimonials-heading" className="sr-only">
              What collaborators say
            </h2>
            <div className="quotes-grid">
              {testimonials.map((person, i) => (
                <Reveal key={person.id}>
                  <figure className="studio-quote">
                    <span className="quote-mark" aria-hidden="true">
                      “
                    </span>
                    <blockquote>
                      {i === 0
                        ? "His ability to understand a technology, explain it clearly, and analyze problems is exceptional."
                        : "He is a real asset to a team and adapts very well to different projects."}
                    </blockquote>
                    <figcaption>
                      <a
                        href={person.authorProfileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {person.authorName} <span aria-hidden="true">↗</span>
                      </a>
                      <span>{person.authorRole}</span>
                    </figcaption>
                    <details>
                      <summary>Read full recommendation</summary>
                      <p>{person.text}</p>
                      {person.sourceUrl && (
                        <a
                          href={person.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View on LinkedIn ↗
                        </a>
                      )}
                    </details>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="studio-section studio-wrap"
          aria-labelledby="contact-heading"
        >
          <div className="contact-grid">
            <Reveal>
              <p className="eyebrow section-index">07 / Your next chapter</p>
              <h2 id="contact-heading">
                Something
                <br />
                in <em>mind?</em>
                <span className="contact-star" aria-hidden="true">
                  ✳
                </span>
              </h2>
              <p className="contact-intro">
                A new application. A legacy system ready for its next chapter.
                Let’s work through it together.
              </p>
              <a
                className="contact-email"
                href={`mailto:${siteConfig.author.email}`}
              >
                {siteConfig.author.email} <span aria-hidden="true">↗</span>
              </a>
              <div className="contact-socials">
                {socialLinks.map((link) => (
                  <a
                    className="text-link"
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label} ↗
                  </a>
                ))}
                <a className="text-link" href="tel:+237691565877">
                  Phone ↗
                </a>
              </div>
            </Reveal>
            <div className="studio-contact-form">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
