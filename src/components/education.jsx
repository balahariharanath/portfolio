import React, { Component } from 'react'

export default class Education extends Component {
  render() {
    return (
	<div>
		<section class="colorlib-education" data-section="education">
				<div class="colorlib-narrow-content">
					<div class="row">
						<div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span class="heading-meta">Education</span>
							<h2 class="colorlib-heading animate-box">Education</h2>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
							<div class="fancy-collapse-panel">
								<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
									<div class="panel panel-default">
									    <div class="panel-heading" role="tab" id="headingOne">
									        <h4 class="panel-title">
									            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Master Degree Software Systems
									            </a>
									        </h4>
									    </div>
									    <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
									         <div class="panel-body">
									            <div class="row">
										      		<div class="col-md-6">
										      			<p>CGPA </p>
                                <p>Kongu Engineering College,<br /> Perundurai,<br /> Erode.</p>
										      		</div>
										      		<div class="col-md-6">
										      			<p>8.51</p>
										      		</div>
										      	</div>
									         </div>

									    </div>
									</div>
                  <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingTwo">
                          <h4 class="panel-title">
                              <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">Higher secondary
                              </a>
                          </h4>
                      </div>
                      <div id="collapseTwo" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingTw0">
                           <div class="panel-body">
                              <div class="row">
                              <div class="col-md-6">
                                <p>Percentage </p>
                                <p>The Navodaya Academy(C.B.S.E),<br /> Keerambur,<br /> Namakkal.</p>
                              </div>
                              <div class="col-md-6">
                                <p>75.4</p>
                              </div>
                            </div>
                           </div>

                      </div>
                  </div>
                  <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingThree">
                          <h4 class="panel-title">
                              <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="true" aria-controls="collapseThree">Senior Secondary
                              </a>
                          </h4>
                      </div>
                      <div id="collapseThree" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingThree">
                           <div class="panel-body">
                              <div class="row">
                              <div class="col-md-6">
                              <p>Grade </p>
                              <p>The Navodaya Academy(C.B.S.E),<br /> Keerambur,<br /> Namakkal.</p>
                            </div>
                            <div class="col-md-6">
                              <p>A2(8.6)</p>
                              </div>
                            </div>
                           </div>
                     </div>
                  </div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
		)
	}
}
