import Link from "next/link";
import Footer from "@/components/Footer";

const destinations = [
	{
		name: "Amalfi Coast, Italy",
		tag: "Coastal · Mediterranean",
		img: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=700&q=80",
		slug: null,
	},
	{
		name: "Santorini, Greece",
		tag: "Island · Romantic",
		img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=700&q=80",
		slug: "santorini",
	},
	{
		name: "Lake Como, Italy",
		tag: "Lakeside · Elegant",
		img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=700&q=80",
		slug: "como",
	},
	{
		name: "Kyoto, Japan",
		tag: "Cultural · Serene",
		img: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=700&q=80",
		slug: "kyoto",
	},
	{
		name: "Maldives",
		tag: "Luxury · Ocean",
		img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=700&q=80",
		slug: "maldives",
	},
	{
		name: "Swiss Alps",
		tag: "Mountains · Nature",
		img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=700&q=80",
		slug: "switzerland",
	},
	{
		name: "Tulum, Mexico",
		tag: "Coastal · Bohemian",
		img: "https://images.unsplash.com/photo-1682687220208-22d7a2543e88?w=700&q=80",
		slug: "tulum",
	},
	{
		name: "Bali, Indonesia",
		tag: "Tropical · Spiritual",
		img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=700&q=80",
		slug: "bali",
	},
];

export default function DestinationsPage() {
	return (
		<>
			<div className="pg-hero">
				<div
					className="pg-hero-img"
					style={{
						backgroundImage:
							"url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80')",
					}}
				></div>
				<div className="pg-hero-content">
					<h1>Destinations</h1>
					<p>Curated escapes around the world</p>
				</div>
			</div>

			<div className="dest-list">
				<div className="dest-full-grid">
					{destinations.map((d) =>
						d.slug ? (
							<Link
								href={`/destinations/${d.slug}`}
								className="dfc"
								key={d.name}
								style={{ textDecoration: "none", display: "block" }}
							>
								<div className="dfc-img">
									<div
										className="dfc-img-bg"
										style={{ backgroundImage: `url('${d.img}')` }}
									></div>
								</div>
								<div className="dfc-info">
									<div className="dfc-name">{d.name}</div>
									<div className="dfc-tag">{d.tag}</div>
									<div className="dfc-btn">Explore guide →</div>
								</div>
							</Link>
						) : (
							<div className="dfc" key={d.name}>
								<div className="dfc-img">
									<div
										className="dfc-img-bg"
										style={{ backgroundImage: `url('${d.img}')` }}
									></div>
								</div>
								<div className="dfc-info">
									<div className="dfc-name">{d.name}</div>
									<div className="dfc-tag">{d.tag}</div>
								</div>
							</div>
						),
					)}
				</div>
			</div>

			<Footer />
		</>
	);
}
