/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "The Future of Healthcare: How AI is Transforming Medical Coding",
    description:
      "Explore the impact of artificial intelligence on healthcare operations, specifically focusing on the role of AI in automating and optimizing medical coding processes. Discuss the benefits of AI-driven solutions like MediCod in improving accuracy, efficiency, and compliance in medical coding, ultimately driving better patient care and financial outcomes.",
    url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  },
  {
    title: "Navigating the Complexities of Medical Billing: Challenges and Solutions",
    description:
      "Dive into the complexities of medical billing and the challenges faced by healthcare organizations in ensuring accuracy, efficiency, and compliance. Discuss innovative solutions such as MediCod AI, which streamline billing processes, reduce errors, and ensure adherence to coding guidelines and regulations, ultimately improving revenue cycle management and financial performance.",
  },
  {
    title: "Unlocking the Potential of Healthcare Automation: The Role of AI in Revenue Cycle Management",
    description:
      " Explore the transformative power of automation in healthcare revenue cycle management, with a focus on AI-driven solutions like MediCod. Discuss how automation streamlines workflows, reduces manual errors, and enhances compliance, enabling healthcare organizations to optimize revenue capture, minimize revenue leakage, and improve overall financial health.",
    url: "https://victorndiritu.tech/",
  },
  {
    title: "Innovation in Action: Case Studies of MediCod AI Implementation",
    description:
      "Highlight real-world examples of healthcare organizations leveraging MediCod AI to revolutionize their medical coding and billing processes. Share success stories, case studies, and testimonials from clients who have experienced the benefits of automation, efficiency, and accuracy with MediCod, demonstrating its impact on improving operational efficiency and financial performance.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
