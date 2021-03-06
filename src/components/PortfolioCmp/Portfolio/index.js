import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import "./portfolio.css";

const Index = () => {
  const data = useStaticQuery(graphql`query HeaderQuery {
  allDataJson {
    edges {
      node {
        name
        img {
          childImageSharp {
            gatsbyImageData(placeholder: NONE, layout: FULL_WIDTH)
          }
        }
        link
        technologies
      }
    }
  }
}
`);

  const [modal, setModal] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [slideSide, setSlideSide] = React.useState(null);

  const items = data.allDataJson.edges;

  const activeSlide = items[currentIndex].node;

  const onClick = (index) => {
    setModal(true);
    setCurrentIndex(index);
  };

  const previous = () => {
    setSlideSide("left");
    currentIndex > 0
      ? setCurrentIndex(currentIndex - 1)
      : setCurrentIndex(items.length - 1);
  };
  const next = () => {
    setSlideSide("right");
    currentIndex < items.length - 1
      ? setCurrentIndex(currentIndex + 1)
      : setCurrentIndex(0);
  };

  return (
    <section className="portfolio">
      {items.map(({ node }, index) => (
        <div
          key={index}
          role="button"
          tabIndex={0}
          className="portfolio__item"
          onClick={() => onClick(index)}
          onKeyDown={() => onClick(index)}
        >
          {node.img && (
            <div className="item__image">
              <GatsbyImage
                image={node.img.childImageSharp.gatsbyImageData}
                alt={`${node.name} image`} />
            </div>
          )}

          <h2>{node.name}</h2>

          {node.technologies && (
            <div className="item__technologies">
              {node.technologies.map((technology, index) => (
                <p style={{ margin: "12px 10px" }} key={index}>
                  {technology}
                </p>
              ))}
            </div>
          )}

          {node.link && (
            <a href={node.link} target="_blank" rel="noreferrer">
              Open website
            </a>
          )}
        </div>
      ))}

      {modal && (
        <div className={`portfolio__modal`}>
          <div
            role="button"
            tabIndex={0}
            aria-label="Mute volume"
            className="modal__overlay"
            onClick={() => setModal(false)}
            onKeyDown={() => setModal(false)}
          />

          <button
            onClick={() => previous()}
            className="modal__previous"
            aria-label="Mute volume"
          />

          <div
            className={`modal__content modal__content--slide-${slideSide}`}
            onAnimationEnd={() => setSlideSide(null)}
          >
            <button
              onClick={() => setModal(!modal)}
              className="modal__close"
              aria-label="Mute volume"
            />

            {activeSlide.img && (
              <div className="item__image">
                <GatsbyImage
                  image={activeSlide.img.childImageSharp.gatsbyImageData}
                  alt={`${activeSlide.name} image`} />
              </div>
            )}

            <h2>{activeSlide.name}</h2>
            {activeSlide.technologies && (
              <div className="item__technologies">
                {activeSlide.technologies.map((technology, index) => (
                  <p key={index}>{technology}</p>
                ))}
              </div>
            )}

            {activeSlide.link && <a href={activeSlide.link}>Open website</a>}
          </div>

          <button
            onClick={() => next()}
            className="modal__next"
            aria-label="Mute volume"
          />
        </div>
      )}
    </section>
  );
};

export default Index;
