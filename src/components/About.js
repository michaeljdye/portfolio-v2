import { useState } from "react";

const About = () => {
  const [toggleList, setToggleList] = useState("tab1");
  const activeList = (value) => (value === toggleList ? "active" : "");
  return (
    <section id="about">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">About Me</h3>
            <h3 className="title">Biography</h3>
            <p className="desc">
              {`I am a software Engineer with 9+ years in tech and 5+ years of experience building engaging, performant, and accessible websites and applications.`}
            </p>
          </div>
          {/* /Main Title */}
          {/* About Information */}
          <div className="resumo_fn_about_info">
            <div className="about_left">
              <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Michael Dye</th>
                  </tr>
                  <tr>
                    <th>Address</th>
                    <th>Nashville, TN</th>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <th>
                      <a href="tel:+3846923442364">615 423 2458</a>
                    </th>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <th>
                      <a href="mailto:hello@michaeldye.dev">
                        hello@michaeldye.dev
                      </a>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="about_right">
              {/* Download CV Button */}
              <div className="resumo_fn_cv_btn">
                <a href="pdf/michael-dye-resume.pdf" download>
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 449.306 449.306"
                      style={{ enableBackground: "new 0 0 449.306 449.306" }}
                      xmlSpace="preserve"
                      className="fn__svg replaced-svg"
                    >
                      <path d="M447.739,251.298l-59.037-126.433c-1.731-3.54-5.484-5.625-9.404-5.224h-50.155c-5.771,0-10.449,4.678-10.449,10.449     c0,5.771,4.678,10.449,10.449,10.449h43.363l48.588,104.49h-59.559c-27.004-0.133-51.563,15.625-62.694,40.229     c-8.062,16.923-25.141,27.698-43.886,27.69h-60.604c-18.745,0.008-35.823-10.767-43.886-27.69     c-11.131-24.604-35.69-40.362-62.694-40.229H29.257l57.469-104.49h33.437c5.771,0,10.449-4.678,10.449-10.449     c0-5.771-4.678-10.449-10.449-10.449H80.457c-3.776-0.358-7.425,1.467-9.404,4.702L2.09,250.776     c-1.209,1.072-1.958,2.569-2.09,4.18v130.09c0.832,29.282,24.524,52.744,53.812,53.29h341.682     c29.289-0.546,52.98-24.008,53.812-53.29v-130.09C449.107,253.622,448.567,252.362,447.739,251.298z M428.408,385.045     c-0.812,17.743-15.16,31.864-32.914,32.392H53.812c-17.754-0.528-32.102-14.648-32.914-32.392V265.927h66.873     c18.745-0.008,35.823,10.767,43.886,27.69c11.131,24.604,35.69,40.362,62.694,40.229h60.604     c27.004,0.133,51.563-15.625,62.694-40.229c8.062-16.923,25.141-27.698,43.886-27.69h66.873V385.045z" />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 449.306 449.306"
                      style={{ enableBackground: "new 0 0 449.306 449.306" }}
                      xmlSpace="preserve"
                      className="fn__svg arrow replaced-svg"
                    >
                      <path d="M217.339,252.865c3.706,4.04,9.986,4.31,14.025,0.603c0.21-0.192,0.411-0.394,0.603-0.603l71.053-71.576   c3.462-4.617,2.527-11.166-2.09-14.629c-3.715-2.786-8.824-2.786-12.539,0l-53.29,53.29V21.42   c0-5.771-4.678-10.449-10.449-10.449s-10.449,4.678-10.449,10.449v198.531l-53.29-53.29c-4.617-3.462-11.166-2.527-14.629,2.09   c-2.786,3.715-2.786,8.824,0,12.539L217.339,252.865z" />
                    </svg>
                  </span>
                  <span>Download CV</span>
                </a>
              </div>
              {/* /Download CV Button */}
            </div>
          </div>
          {/* /About Information */}
          {/* Tabs Shortcode */}
          <div className="resumo_fn_tabs">
            {/* Tab: Header */}
            <div className="tab_header">
              <ul>
                <li className={activeList("tab1")}>
                  <a href="#" onClick={() => setToggleList("tab1")}>
                    Experience
                  </a>
                </li>
                <li className={activeList("tab2")}>
                  <a href="#" onClick={() => setToggleList("tab2")}>
                    Education
                  </a>
                </li>
                <li className={activeList("tab3")}>
                  <a href="#" onClick={() => setToggleList("tab3")}>
                    Skills
                  </a>
                </li>
              </ul>
            </div>
            {/* /Tab: Header */}
            {/* Tab: Content */}
            <div className="tab_content">
              {/* #1 tab content */}
              <div id="tab1" className={`tab_item ${activeList("tab1")}`}>
                {/* Boxed List */}
                <div className="resumo_fn_boxed_list">
                  <ul>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Udacity</h5>
                          <span>( 2022 — 2023 )</span>
                        </div>
                        <h3>Frontend Engineer, Content Platform</h3>
                        <p>
                          During my time at Udacity as a Frontend Engineer, I
                          had the opportunity to work with an incredible team on
                          the Content Platform. Together, we built new features
                          that revolutionized the content development lifecycle.
                          I also took the lead in developing a streamlined
                          enrollments tool and successfully migrated the Mocha
                          platform to Next.js, enhancing performance and
                          scalability.{" "}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Bellhop</h5>
                          <span>( 2021 — 2022 )</span>
                        </div>
                        <h3>Frontend Engineer, Growth</h3>
                        <p>
                          As a Frontend Engineer at Bellhop, I had the
                          opportunity to build impactful features for
                          customer-facing web applications. My responsibilities
                          included closely monitoring application performance,
                          strategizing improvements, and promptly resolving
                          technical issues. Collaborating with a talented team,
                          we consistently delivered exceptional user experiences
                          and worked towards driving continuous innovation.{" "}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Campaign Monitor</h5>
                          <span>( 2019 — 2020 )</span>
                        </div>
                        <h3>Frontend Engineer, Growth</h3>
                        <p>
                          Developed features for enterprise marketing sites in
                          the SaaS space. Optimized sites for performance,
                          accessibility, and conversion. Migrated legacy tech
                          stacks to a modern, unified system.{" "}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Horton Group</h5>
                          <span>( 2014 — 2019 )</span>
                        </div>
                        <h3>Software Engineer, Custom Shop</h3>
                        <p>
                          As a Software Engineer at Horton Group, I wore
                          multiple hats, not just as a developer but also as a
                          skilled project manager. Alongside a talented, agile
                          development team, I engineered, tested, and launched
                          serverless applications, leveraging my expertise in
                          React and Next.js. I also took charge of managing the
                          construction of engaging custom WordPress marketing
                          sites for national and local businesses. It was a
                          rewarding experience to combine technical prowess with
                          project management skills to deliver remarkable
                          digital solutions.{" "}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* /Boxed List */}
              </div>
              {/* /#1 tab content */}
              {/* #2 tab content */}
              <div id="tab2" className={`tab_item ${activeList("tab2")}`}>
                {/* Boxed List */}
                <div className="resumo_fn_boxed_list">
                  <ul>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Udacity</h5>
                          <span>( 2014 — 2017 )</span>
                        </div>
                        <h3>Frontend Web Developer Nanodegree</h3>
                        <p>
                          The Front End Web Developer Nanodegree program equips
                          learners with the unique skills they need to build
                          high-quality websites and dynamic applications to
                          create stunning user experiences for the web.{" "}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Udacity</h5>
                          <span>( 2011 — 2014 )</span>
                        </div>
                        <h3>Full Stack Javascript Developer Nanodegree</h3>
                        <p>
                          Mastered the skills necessary to become a successful
                          full stack developer. Learned how to build UI and UX,
                          create APIs and server side business logic and develop
                          the persistence layer to store, process and retrieve
                          data.{" "}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Middle Tennessee State University</h5>
                          <span>( 2007 — 2011 )</span>
                        </div>
                        <h3>Bachelor Degree</h3>
                        <p>
                          Activities and societies: Cum Laude, Dean’s List, Phi
                          Kappa Phi, Kappa Tau AlphaActivities and societies:
                          Cum Laude, Dean’s List, Phi Kappa Phi, Kappa Tau Alpha
                        </p>
                        <br />
                        <p>
                          Minors: Marketing and SociologyMinors: Marketing and
                          Sociology{" "}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* /Boxed List */}
              </div>
              {/* /#2 tab content */}
              {/* #3 tab content */}
              <div id="tab3" className={`tab_item ${activeList("tab3")}`}>
                {/* Progress Bar */}
                <div className="resumo_fn_progress_bar">
                  <div className="progress_item open" data-value={98}>
                    <div className="item_in">
                      <h3 className="progress_title">JavaScript</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "2%" }}
                      >
                        98%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "98%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={92}>
                    <div className="item_in">
                      <h3 className="progress_title">TypeScript</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "10%" }}
                      >
                        90%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "90%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={99}>
                    <div className="item_in">
                      <h3 className="progress_title">HTML5 &amp; CSS3</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "1%" }}
                      >
                        99%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "97%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={97}>
                    <div className="item_in">
                      <h3 className="progress_title">React</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "3%" }}
                      >
                        97%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "95%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={95}>
                    <div className="item_in">
                      <h3 className="progress_title">Next.js</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "5%" }}
                      >
                        95%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "95%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={85}>
                    <div className="item_in">
                      <h3 className="progress_title">Node.js</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "15%" }}
                      >
                        85%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "85%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={93}>
                    <div className="item_in">
                      <h3 className="progress_title">GraphQL</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "7%" }}
                      >
                        93%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "93%" }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* /Progress Bar */}
                {/* Description */}
                <div className="resumo_fn_desc">
                  <p>
                    Proven expertise in leading large-scale migrations,
                    implementing cutting-edge technologies, and architecting
                    seamless user experiences, resulting in improved
                    performance, accelerated development, and increased customer
                    engagement.
                  </p>
                </div>
              </div>
              {/* /#2 tab content */}
            </div>
            {/* /Tab: Content */}
          </div>
          {/* /Tabs Shortcode */}
        </div>
      </div>
    </section>
  );
};

export default About;
