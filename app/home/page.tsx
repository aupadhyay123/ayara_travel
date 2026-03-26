"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function HomePage() {
	const heroImgRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const timer = setTimeout(() => {
			heroImgRef.current?.classList.add("loaded");
		}, 100);
		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			{/* Hero */}
			<div className="hero">
				<div className="hero-img" ref={heroImgRef}></div>
				<div className="hero-overlay"></div>
				<div className="hero-content">
					<h1 className="hero-h1">
						<em>Journeys designed</em>
						<br />
						around you
					</h1>
					<p className="hero-sub">
						Thoughtfully curated escapes for those who travel not just to see —
						but to feel. Quiet luxury, honest advice, and planning that makes it
						look effortless.
					</p>
				</div>
			</div>

			{/* Intro */}
			<div className="intro">
				<div className="intro-text">
					<p className="intro-label">Our philosophy</p>
					<h2 className="intro-h2">
						Travel as an <em>experience,</em>
						<br />
						not a transaction
					</h2>
					<p className="intro-p">
						The best journeys linger long after you&apos;ve unpacked. We curate
						escapes that are intentional, unhurried, and entirely yours — from
						the hotel robe to the hidden trattoria no one else knows about.
					</p>
					<Link href="/about" className="intro-link">
						Meet your curator →
					</Link>
				</div>
				<div className="intro-visual">
					<div className="intro-visual-img"></div>
					<div className="intro-float">
						<p>&ldquo;We found this little place…&rdquo;</p>
						<span>— every Ayara traveler</span>
					</div>
				</div>
			</div>

			{/* Destinations preview */}
			<section className="dest-sec">
				<div className="sec-hd">
					<div>
						<p className="sec-label">Curated escapes</p>
						<h2 className="sec-h2">
							Destinations worth <em>dreaming of</em>
						</h2>
					</div>
					<Link href="/destinations" className="sec-more">
						View all →
					</Link>
				</div>
				<div className="collage">
					<Link href="/destinations/como" className="tile" style={{ textDecoration: 'none', display: 'block' }}>
						<div
							className="tile-bg"
							style={{
								backgroundImage:
									"url('https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1600&q=80')",
							}}
						></div>
						<div className="tile-info">
							<div className="tile-name">Lake Como</div>
							<div className="tile-sub">Italy · Lakeside</div>
						</div>
					</Link>
					<Link href="/destinations/santorini" className="tile" style={{ textDecoration: 'none', display: 'block' }}>
						<div
							className="tile-bg"
							style={{
								backgroundImage:
									"url('https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80')",
							}}
						></div>
						<div className="tile-info">
							<div className="tile-name">Santorini</div>
							<div className="tile-sub">Greece · Island</div>
						</div>
					</Link>
					<Link href="/destinations/kyoto" className="tile" style={{ textDecoration: 'none', display: 'block' }}>
						<div
							className="tile-bg"
							style={{
								backgroundImage:
									"url('https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80')",
							}}
						></div>
						<div className="tile-info">
							<div className="tile-name">Kyoto</div>
							<div className="tile-sub">Japan · Cultural</div>
						</div>
					</Link>
					<Link href="/destinations/maldives" className="tile" style={{ textDecoration: 'none', display: 'block' }}>
						<div
							className="tile-bg"
							style={{
								backgroundImage:
									"url('https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80')",
							}}
						></div>
						<div className="tile-info">
							<div className="tile-name">Maldives</div>
							<div className="tile-sub">Indian Ocean · Luxury</div>
						</div>
					</Link>
					<Link href="/destinations/portugal" className="tile" style={{ textDecoration: 'none', display: 'block' }}>
						<div
							className="tile-bg"
							style={{
								backgroundImage:
									"url('https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&q=80')",
							}}
						></div>
						<div className="tile-info">
							<div className="tile-name">Portugal</div>
							<div className="tile-sub">Europe · Coastal</div>
						</div>
					</Link>
				</div>
			</section>

			{/* Services */}
			<section className="services">
				<div>
					<p className="sec-label">How we work</p>
					<h2 className="sec-h2">
						Designed for <em>how you want to feel</em>
					</h2>
				</div>
				<div className="svc-grid">
					<div className="svc">
						<div className="svc-n">01</div>
						<div className="svc-title">
							<em>Custom</em> Itineraries
						</div>
						<div className="svc-desc">
							Every detail considered, every moment intentional. Built around
							who you are — not a template.
						</div>
					</div>
					<div className="svc">
						<div className="svc-n">02</div>
						<div className="svc-title">
							Honeymoons &amp; <em>Romance</em>
						</div>
						<div className="svc-desc">
							Intimate, private, unforgettable. Crafted for couples who want the
							world to feel like it&apos;s theirs.
						</div>
					</div>
					<div className="svc">
						<div className="svc-n">03</div>
						<div className="svc-title">
							<em>Group</em> Travel
						</div>
						<div className="svc-desc">
							Coordinated effortlessly, experienced fully. For those who want to
							share the beauty of travel.
						</div>
					</div>
				</div>
			</section>

			{/* Full bleed */}
			<div className="fullbleed">
				<div className="fullbleed-img"></div>
				<div className="fullbleed-overlay"></div>
				<div className="fullbleed-content">
					<p>The Ayara philosophy</p>
					<h2>&ldquo;Travel, reimagined&rdquo;</h2>
				</div>
			</div>

			{/* Editorial */}
			<section className="editorial">
				<div className="sec-hd">
					<div>
						<p className="sec-label">The late checkout edit</p>
						<h2 className="sec-h2">
							From the <em>journal</em>
						</h2>
					</div>
					<Link href="/journal" className="sec-more">
						Read all →
					</Link>
				</div>
				<div className="edit-grid">
					<Link href="/journal/como" className="edit-main" style={{ textDecoration: 'none', display: 'block', cursor: 'pointer' }}>
						<div className="edit-main-img">
							<div
								className="edit-main-img-bg"
								style={{
									backgroundImage:
										"url('https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=900&q=80')",
								}}
							></div>
						</div>
						<div className="edit-cat">Destinations</div>
						<div className="edit-title">
							Lake Como: <em>private villas, boat rides, and the ferry</em> most tourists overlook
						</div>
						<div className="edit-meta">9 min read · March 2026</div>
					</Link>
					<div className="edit-stack">
						<Link href="/journal/packing" className="edit-sm" style={{ textDecoration: 'none', display: 'flex', cursor: 'pointer' }}>
							<div className="edit-sm-img">
								<div
									className="edit-sm-img-bg"
									style={{
										backgroundImage:
											"url('https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&q=80')",
									}}
								></div>
							</div>
							<div>
								<div className="edit-sm-cat">Packing</div>
								<div className="edit-sm-title">
									What to pack for a <em>luxury island escape</em>
								</div>
								<div className="edit-sm-meta">6 min · Feb 2026</div>
							</div>
						</Link>
						<Link href="/journal/hotels" className="edit-sm" style={{ textDecoration: 'none', display: 'flex', cursor: 'pointer' }}>
							<div className="edit-sm-img">
								<div
									className="edit-sm-img-bg"
									style={{
										backgroundImage:
											"url('https://images.unsplash.com/photo-1455587734955-081b22074882?w=400&q=80')",
									}}
								></div>
							</div>
							<div>
								<div className="edit-sm-cat">Hotels</div>
								<div className="edit-sm-title">
									The world&apos;s most <em>beautiful boutique hotels</em>
								</div>
								<div className="edit-sm-meta">6 min · Jan 2026</div>
							</div>
						</Link>
						<Link href="/journal/japan" className="edit-sm" style={{ textDecoration: 'none', display: 'flex', cursor: 'pointer' }}>
							<div className="edit-sm-img">
								<div
									className="edit-sm-img-bg"
									style={{
										backgroundImage:
											"url('https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&q=80')",
									}}
								></div>
							</div>
							<div>
								<div className="edit-sm-cat">Food</div>
								<div className="edit-sm-title">
									Why <em>Japan</em> ruined every other food country for me
								</div>
								<div className="edit-sm-meta">9 min · Dec 2025</div>
							</div>
						</Link>
					</div>
				</div>
			</section>

			{/* CTA */}
			<div className="cta">
				<div className="cta-img"></div>
				<div className="cta-overlay"></div>
				<div className="cta-content">
					<p className="cta-label">Your journey awaits</p>
					<h2 className="cta-h2">
						Start planning
						<br />
						your escape
					</h2>
					<p className="cta-p">
						Tell us where you want to go — or just how you want to feel when you
						get there. We&apos;ll handle everything else.
					</p>
					<Link href="/contact" className="cta-btn">
						Begin your journey
					</Link>
				</div>
			</div>

			<Footer />
		</>
	);
}
