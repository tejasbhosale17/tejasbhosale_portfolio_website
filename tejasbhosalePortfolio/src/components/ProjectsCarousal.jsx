import "./styles/projectsCarousal.min.css";
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const ProjectsCarousal = () => {
  const animationRefs = useRef([]);

  useEffect(() => {
    animationRefs.current.forEach((ref, index) => {
      if (ref) {
        lottie.loadAnimation({
          container: ref,
          renderer: "svg",
          loop: true,
          autoplay: true,
          path: ref.getAttribute("data-src"),
        });
      }
    });
  }, []);

  return (
    <div className="why_me_animation_trigger">
      <div className="why_me_animation_container">
        <div className="div-block-160">
          {/* Card 1 */}
          <div data-theme="light" className="div-block-161">
            <div className="why_heading_wrapper">
              <h3 className="condesed_title">
                Working on creating better tomorrow
              </h3>
              <div className="div-block-295">
                <div
                  ref={(el) => (animationRefs.current[0] = el)}
                  className="lottie-animation"
                  data-animation-type="lottie"
                  data-src="https://cdn.prod.website-files.com/672dc217e27ecc7b1096daa2/67385d0c4dc9e54784d798da_deseloper_animation_mika_unbearable.json"
                ></div>
              </div>
            </div>
            <div className="div-block-163">
              <div className="div-block-168">
                <div className="div-block-164 bold">
                  <p className="paragraph_main--tw1">
                    As both a designer and a developer, I bridge the gap between
                    these two fields.
                  </p>
                </div>
                <div className="div-block-164">
                  <p className="paragraph_main--tw1">
                    This ensures your vision is realized exactly as you imagined
                    it, without compromises or misunderstandings.
                  </p>
                </div>
              </div>
              <div className="div-block-166">
                <div>1</div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div data-theme="dark" className="div-block-161 card2">
            <div className="why_heading_wrapper">
              <h3 className="condesed_title lenght">
                Frustration-free process
              </h3>
              <div className="div-block-295">
                <div
                  ref={(el) => (animationRefs.current[1] = el)}
                  className="lottie-animation card2"
                  data-animation-type="lottie"
                  data-src="https://cdn.prod.website-files.com/672dc217e27ecc7b1096daa2/673877193c6b445a0013f401_pong_animation_mika_unbearable.json"
                ></div>
              </div>
            </div>
            <div className="div-block-163">
              <div className="div-block-168">
                <div className="div-block-164 bold">
                  <p className="paragraph_main--tw1">
                    Forget the frustration of endless back-and-forth between
                    separate professionals.
                  </p>
                </div>
                <div className="div-block-164">
                  <p className="paragraph_main--tw1">
                    My integrated approach accelerates turnaround times and
                    reduces miscommunication, making the process smooth and
                    straightforward.
                  </p>
                </div>
              </div>
              <div className="div-block-166">
                <div>2</div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div data-theme="light" className="div-block-161 card3">
            <div className="why_heading_wrapper">
              <h3 className="condesed_title lenght">Pixel perfect results</h3>
              <div className="div-block-295">
                <div
                  ref={(el) => (animationRefs.current[2] = el)}
                  className="lottie-animation card3"
                  data-animation-type="lottie"
                  data-src="https://cdn.prod.website-files.com/672dc217e27ecc7b1096daa2/6738959e548f28b99c81a3d0_pixel_perfect_animation_unbearable_mika.json"
                ></div>
              </div>
            </div>
            <div className="div-block-163">
              <div className="div-block-168">
                <div className="div-block-164 bold">
                  <p className="paragraph_main--tw1">
                    Benefit from meticulous attention to detail.
                  </p>
                </div>
                <div className="div-block-164">
                  <p className="paragraph_main--tw1">
                    With a keen eye for design and strong coding skills, I
                    deliver websites that are both functionally robust and
                    visually captivating—crafted to perfection in every pixel.
                  </p>
                </div>
              </div>
              <div className="div-block-166">
                <div>3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCarousal;
