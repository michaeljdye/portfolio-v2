import { useEffect, useState } from "react";
import { dataImage } from "../utilits";

const Modalbox = ({ close, value }) => {
  const data = [
    {
      name: "Send2Win App",
      tag: "illustration, design",
      desc: [
        {
          p: "Send2Win gives users the chance to test their email knowledge by designing the perfect send.",
        },
        {
          p: "React, JS and Firebase",
        },
      ],
    },
    {
      name: "Udacity Content Platform",
      tag: "web, mobile, online",
      desc: [
        {
          p: "Udacity's content platform provides a rich set of content creation features instructors used to develop impactful programs for students.",
        },
        { p: "Typescript, Next.js and GraphQL" },
      ],
    },
    {
      name: "Bellhop Moving Dashboard",
      tag: "design, vector",
      desc: [
        {
          p: "Bellhop moving Dashboard allows you to modify, reschedule, and review your move details all in one convenient place.",
        },
        {
          p: "React, Next.js and GraphQL",
        },
      ],
    },
    {
      name: "OkMoveMe App",
      tag: "mobile, design",
      desc: [
        {
          p: "OkMoveMe allows you to manage your move from one centralized dashboard, which includes checklists, moving resources and more.",
        },
        {
          p: "React, JS and CSS",
        },
      ],
    },
    {
      name: "Explore the Nations",
      tag: "mobile, design",
      desc: [
        {
          p: "Explore The Nations features some of the top restaurants in The Nations. The app works with the Yelp and Google maps APIs to retrieve dynamic data about each location.",
        },
        {
          p: "React, JS and CSS",
        },
      ],
    },
  ];

  const [index, setIndex] = useState(value);
  useEffect(() => {
    dataImage();
  }, [index]);

  return (
    <div className="resumo_fn_modalbox opened">
      <a
        className="extra_closer"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          close(false);
        }}
      />
      <div className="box_inner">
        <a
          className="closer"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            close(false);
          }}
        >
          <span />
        </a>
        <div className="modal_content">
          <div className="modal_in">
            {data.map(
              (d, i) =>
                i + 1 == index && (
                  <div key={i}>
                    <p className="fn__cat">{d.tag}</p>
                    <h3 className="fn__title">{d.name}</h3>
                    <div className="img_holder">
                      <img src="/img/thumb/square.jpg" alt="" />
                      <div
                        className="abs_img"
                        data-bg-img={`/img/portfolio/${index}.png`}
                      />
                    </div>
                    {d.desc.map((des, i) => (
                      <p key={i} className="fn__desc">
                        {des.p}
                      </p>
                    ))}
                  </div>
                )
            )}
          </div>

          <div className="fn__nav" data-from="portfolio" data-index="1">
            <a
              href="#"
              className="prev"
              onClick={(e) => {
                e.preventDefault();
                setIndex(index == 1 ? 5 : index - 1);
              }}
            >
              <span className="text">Prev</span>
              <span className="arrow_wrapper">
                <span className="arrow"></span>
              </span>
            </a>
            <a
              href="#"
              className="next"
              onClick={(e) => {
                e.preventDefault();
                setIndex(index == 5 ? 1 : index + 1);
              }}
            >
              <span className="text">Next</span>
              <span className="arrow_wrapper">
                <span className="arrow"></span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modalbox;
