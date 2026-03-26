import Footer from "@/components/Footer";

export default function ContactPage() {
	return (
		<>
			<div className="contact-pg">
				{/* Left panel */}
				<div className="cl">
					<div className="cl-img"></div>
					<div className="cl-overlay"></div>
					<div className="cl-content">
						<p className="cl-label">Let&apos;s plan something beautiful</p>
						<h2>
							Tell us where
							<br />
							you want to <em>feel</em>
						</h2>
						<p>
							Whether you have a destination in mind or just a feeling
							you&apos;re chasing — we&apos;d love to help you find it.
						</p>
						<div>
							<div className="cd-label">Email</div>
							<div className="cd-val">ayaratravel@gmail.com</div>
						</div>
						<div>
							<div className="cd-label">Website</div>
							<div className="cd-val">ayaratravel.com</div>
						</div>
						<div>
							<div className="cd-label">Response time</div>
							<div className="cd-val">Within 48 hours</div>
						</div>
					</div>
				</div>

				{/* Right panel — form */}
				<form
					className="cr"
					action="https://formspree.io/f/mlgpqene"
					method="POST"
				>
					<div className="fr2">
						<div className="fg">
							<label className="fl" htmlFor="first-name">
								First name
							</label>
							<input
								id="first-name"
								className="fi"
								type="text"
								name="first_name"
								placeholder="Your name"
								required
							/>
						</div>
						<div className="fg">
							<label className="fl" htmlFor="last-name">
								Last name
							</label>
							<input
								id="last-name"
								className="fi"
								type="text"
								name="last_name"
								placeholder="Your surname"
								required
							/>
						</div>
					</div>
					<div className="fg">
						<label className="fl" htmlFor="email">
							Email
						</label>
						<input
							id="email"
							className="fi"
							type="email"
							name="email"
							placeholder="your@email.com"
							required
						/>
					</div>
					<div className="fg">
						<label className="fl" htmlFor="phone">
							Phone
						</label>
						<input
							id="phone"
							className="fi"
							type="text"
							name="phone"
							placeholder="Optional, if you would prefer to be contacted through text"
						/>
					</div>
					<div className="fg">
						<label className="fl" htmlFor="destination">
							Dream destination
						</label>
						<input
							id="destination"
							className="fi"
							type="text"
							name="dream_destination"
							placeholder="Or just describe a feeling..."
						/>
					</div>
					<div className="fg">
						<label className="fl" htmlFor="message">
							Tell us more
						</label>
						<textarea
							id="message"
							className="ft"
							name="message"
							placeholder="When are you thinking of travelling? Any special occasion? What's your budget?"
						></textarea>
					</div>
					<button className="fsub" type="submit">
						Send enquiry
					</button>
				</form>
			</div>

			<Footer />
		</>
	);
}
