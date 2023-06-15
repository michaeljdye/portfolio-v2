import { Swiper, SwiperSlide } from "swiper/react";
import { customersSliderProps } from "../sliderProps";
const CustomerLight = () => {
  return (
    <section id="customers">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">Companies</h3>
            <h3 className="title">Previous Employers</h3>
          </div>
          {/* /Main Title */}
          {/* Partners */}
          <div className="resumo_fn_partners">
            <ul>
              <li>
                <a
                  href="https://www.udacity.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img src="img/partners/1.png" alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.getbellhops.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img src="img/partners/2.png" alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.campaignmonitor.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img src="img/partners/3.png" alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://hortongroup.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img src="img/partners/4.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
          {/* /Partners */}
          {/* Testimonials */}
          <div className="resumo_fn_testimonials">
            <div className="my__nav">
              <a href="#" className="prev">
                <span />
              </a>
              <a href="#" className="next">
                <span />
              </a>
            </div>
            <Swiper {...customersSliderProps} className="owl-carousel">
              <SwiperSlide className="item" key={1}>
                <div className="title_holder">
                  <p className="desc">
                    “Michael is an innovative and empathetic engineer. I had the
                    pleasure of serving as his manager at Bellhop, where he
                    consistently rose above expectations. He pushed us to adopt
                    new technology, adhere to best in class development
                    standards, and create a welcoming, results driven
                    engineering culture. Michael without a doubt is someone you
                    can trust to get work done efficiently without compromising
                    quality. It was a joy to work with him, and I can't wait to
                    see where his career will take him.”
                  </p>
                  <h3 className="title">Emily Thomas</h3>
                  <h3 className="subtitle">Principal Software Engineer</h3>
                </div>
              </SwiperSlide>

              <SwiperSlide className="item" key={2}>
                <div className="title_holder">
                  <p className="desc">
                    “I've worked alongside Michael for 2 years now, and he has
                    never been anything less than a pleasure to work with. He
                    bring positivity and an open mind into every situation, and
                    has always been a true advocate for his clients and team
                    members. He's genuinely passionate about what he does, and
                    is always looking for ways to expand his skill set and grow
                    as a professional. I'd be happy to serve as a reference for
                    Michael, both personally and professionally. ”
                  </p>
                  <h3 className="title">Peter Campbell</h3>
                  <h3 className="subtitle">
                    Director and Lead Project Manager
                  </h3>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          {/* /Testimonials */}
        </div>
      </div>
    </section>
  );
};

export default CustomerLight;
