import React, { Component } from 'react'

export default class Skills extends Component {
  render() {
    return (
      <div>
      <section className="colorlib-skills" data-section="skills">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">My Specialty</span>
              <h2 className="colorlib-heading animate-box">My Skills</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
              <p>Skill set</p>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
              <div className="progress-wrap">
                <h3>C/C++</h3>
                <div className="progress">
                  <div className="progress-bar color-1" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}>
                    <span>90%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
              <div className="progress-wrap">
                <h3>PHP</h3>
                <div className="progress">
                  <div className="progress-bar color-2" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}}>
                    <span>70%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
              <div className="progress-wrap">
                <h3>HTML5</h3>
                <div className="progress">
                  <div className="progress-bar color-3" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{width: '85%'}}>
                    <span>85%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
              <div className="progress-wrap">
                <h3>CSS3</h3>
                <div className="progress">
                  <div className="progress-bar color-4" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                    <span>80%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
              <div className="progress-wrap">
                <h3>.NET</h3>
                <div className="progress">
                  <div className="progress-bar color-5" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '50%'}}>
                    <span>50%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
              <div className="progress-wrap">
                <h3>React</h3>
                <div className="progress">
                  <div className="progress-bar color-6" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} style={{width: '20%'}}>
                    <span>20%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br /><br />
          <p>Hobbies</p>
          <center><div class="icon-box-area spad">
                  <div class="icon-box">
                    <i class="flaticon-004-cinema"></i>
                    <p>Watching Movies</p>
                  </div>
                  <div class="icon-box">
                    <i class="flaticon-015-photo-camera"></i>
                    <p>Photography</p>
                  </div>
                  <div class="icon-box">
                    <i class="flaticon-036-chess"></i>
                    <p>Playing Chess</p>
                  </div>
                  <div class="icon-box">
                    <i class="flaticon-035-tent"></i>
                    <p>Camping in nature</p>
                  </div>
                </div></center>
        </div>
      </section>
      </div>
    )
  }
}
