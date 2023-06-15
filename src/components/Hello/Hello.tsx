import React from 'react';
import './Hello.css';
import { greeting } from '../../portfolio';
import Social from '../Social/Social';

function Hello() {
	const Fade: any = require("react-reveal/Fade");
	return (
		<Fade bottom duration={800}>
		<section className="section--hello">
			<div className="container row inner">

				<div className="wrapper">
					<div className="text-title">
						{greeting.title}&nbsp;
					</div>
					<div className="body col-md-8">
						<p>
						{greeting.body.split('\n').map((line, index) => (
							<React.Fragment key={index}>
							{line}
							<br />
							</React.Fragment>
						))}
						</p>
					</div>
				</div>

			</div>
		</section>
		</Fade>
	);
}
export default Hello;