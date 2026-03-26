export type Hotel = { name: string; vibe: string; desc: string; price: string };
export type Activity = { icon: string; title: string; desc: string };
export type FoodCard = { name: string; type: string; desc: string };
export type ItineraryDay = { num: string; title: string; desc: string };

export type Destination = {
	slug: string;
	name: string;
	subtitle: string;
	heroImg: string;
	introLabel: string;
	introH2: string; // may contain <em> tags - store as string with HTML
	introParagraphs: string[];
	introImg: string;
	hotels: Hotel[];
	tipLabel: string;
	tip: string;
	activities: Activity[];
	food?: FoodCard[];
	itineraryLabel?: string;
	itineraryTitle?: string; // may contain <em> tags
	itineraryDays?: ItineraryDay[];
	ctaImg: string;
	ctaLabel: string;
	ctaH2: string;
	ctaP: string;
	ctaTrip: string; // short name like "Como trip"
};

export const destinations: Destination[] = [
	{
		slug: "como",
		name: "Lake Como",
		subtitle: "Italy · Lakeside · Elegant",
		heroImg:
			"https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1600&q=80",
		introLabel: "The destination",
		introH2: "Where the mountains <em>meet the water</em>",
		introParagraphs: [
			"Lake Como is one of Italy's most breathtaking destinations — a glacial lake framed by steep mountains, elegant villas, and small towns that have barely changed in centuries. This is where old-world Europe feels genuinely alive: ferry boats dotting the water, bougainvillea spilling over stone walls, aperitivo on a terrace as the sun drops behind the Alps.",
			"I've been to Lake Como and it remains one of my most treasured travel memories. The light at golden hour on the water is something that photographs simply cannot capture properly — it has to be felt in person.",
		],
		introImg:
			"https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=700&q=80",
		hotels: [
			{
				name: "Grand Hotel Tremezzo",
				vibe: "Iconic Luxury",
				desc: "A Belle Époque landmark on the western shore with its famous floating pool on the lake. If you want the full cinematic Lake Como experience — this is it. Impeccable service, stunning rooms, and a terrace that will ruin you for all other terraces.",
				price: "From ~$700/night · Tremezzo",
			},
			{
				name: "Villa d'Este",
				vibe: "Historic Grande Dame",
				desc: "A 16th-century cardinal's villa turned five-star hotel. The gardens alone are worth the visit. For those who want to feel like they're staying inside history. Formal, opulent, unforgettable.",
				price: "From ~$900/night · Cernobbio",
			},
			{
				name: "Filario Hotel & Residences",
				vibe: "Modern Boutique",
				desc: "Sleek, contemporary design with spectacular lake views. A newer property that feels fresh against Como's classical backdrop. Perfect if you want luxury without the formality — great pool, relaxed vibe, excellent breakfast.",
				price: "From ~$350/night · Lezzeno",
			},
			{
				name: "Hotel du Lac",
				vibe: "Charming & Affordable",
				desc: "A beloved family-run hotel right on the waterfront in Varenna. Excellent value for money, genuine warmth from the staff, and one of the best lake views you'll find at this price point. Book early — it sells out fast.",
				price: "From ~$180/night · Varenna",
			},
		],
		tipLabel: "Ayara tip — getting around",
		tip: "The public ferry system (Navigazione Laghi) is one of the best-kept secrets of Lake Como. A day pass costs around €15 and lets you hop between villages all day. It's scenic, affordable, and far more enjoyable than driving the narrow lakeside roads. For special occasions, private boat hire is widely available — expect to pay €300–600 for a half-day guided tour of the villas by water. Worth every euro.",
		activities: [
			{
				icon: "🚢",
				title: "Private boat tour of the villas",
				desc: "Glide past Villa del Balbianello (filming location of Casino Royale and Star Wars), Villa Carlotta, and Villa Melzi from the water. A private skipper makes it feel like the lake is entirely yours.",
			},
			{
				icon: "⛴",
				title: "Hop the public ferry",
				desc: "Buy a day pass and bounce between Varenna, Bellagio, Tremezzo, and Menaggio. Each town has its own personality — Varenna for romance, Bellagio for shopping and gelato, Menaggio for a local feel.",
			},
			{
				icon: "🏛",
				title: "Tour Villa del Balbianello",
				desc: "One of the most photographed villas in Italy. The terraced gardens overlooking the lake are spectacular. Accessible by boat or a scenic walk through the forest.",
			},
			{
				icon: "🌿",
				title: "Gardens of Villa Carlotta",
				desc: "Famous for its rhododendrons and azaleas in spring, and spectacular year-round. The art inside is a bonus — Canova sculptures, Thorvaldsen reliefs.",
			},
			{
				icon: "🥾",
				title: "Hike above Varenna",
				desc: "The trail from Varenna up to Vezio Castle takes about 30 minutes and delivers panoramic lake views that feel genuinely earned. The castle itself has falconry displays.",
			},
			{
				icon: "🍋",
				title: "Aperitivo in Bellagio",
				desc: "Bellagio's lakeside promenade at sunset is the quintessential Como moment. Order a Campari spritz, watch the ferries, and do absolutely nothing else for an hour.",
			},
		],
		food: [
			{
				name: "Ristorante Silvio",
				type: "Local · Seafood · Varenna",
				desc: "A family-run institution famous for their freshwater fish from the lake. The misultin (dried agone fish) is a local specialty you won't find anywhere else. Casual, warm, and completely authentic.",
			},
			{
				name: "La Punta",
				type: "Fine Dining · Cernobbio",
				desc: "Perched at the tip of a small peninsula with 270-degree lake views. The setting is extraordinary and the Italian cuisine matches it. Reserve a terrace table at sunset if you can get one.",
			},
			{
				name: "Trattoria del Ponticello",
				type: "Traditional · Como Town",
				desc: "A no-frills neighborhood trattoria in Como's old town that serves the kind of honest, simple northern Italian food that reminds you why you love Italy. Cash only, packed at lunch, worth the wait.",
			},
			{
				name: "Bilacus",
				type: "Osteria · Bellagio",
				desc: "One of Bellagio's most beloved spots — a vine-covered courtyard, excellent local wine list, and risotto that is made with actual care. Arrive before 7pm or expect a wait.",
			},
			{
				name: "Gelateria del Borgo",
				type: "Gelato · Varenna",
				desc: "The best gelato on the lake, full stop. The pistachio is the colour it's supposed to be (green, not bright). Small, unassuming, and absolutely essential.",
			},
		],
		itineraryLabel: "Sample itinerary",
		itineraryTitle: "5 days at <em>Lake Como</em>",
		itineraryDays: [
			{
				num: "01",
				title: "Arrive in Varenna",
				desc: "Check into Hotel du Lac. Walk the village in the late afternoon, aperitivo at the waterfront. Dinner at Ristorante Silvio.",
			},
			{
				num: "02",
				title: "Private boat day",
				desc: "Morning private boat tour of the Grand Villas. Stop at Villa del Balbianello. Afternoon in Bellagio — gelato and the promenade at sunset.",
			},
			{
				num: "03",
				title: "Ferry day",
				desc: "Buy a ferry day pass. Explore Menaggio in the morning, lunch in Tremezzo, afternoon at Villa Carlotta gardens.",
			},
			{
				num: "04",
				title: "Hike & relax",
				desc: "Morning hike to Vezio Castle above Varenna. Afternoon by the hotel pool or lake. Dinner at La Punta — request a sunset table.",
			},
			{
				num: "05",
				title: "Como town",
				desc: "Morning ferry to Como city. Visit the Cathedral, explore the silk shops (Como is famous for its silk), lunch at Trattoria del Ponticello, evening departure.",
			},
		],
		ctaImg:
			"https://images.unsplash.com/photo-1602002418082-dd4a3f5b2b82?w=1600&q=80",
		ctaLabel: "Ready to plan?",
		ctaH2: "Let's build your Como trip",
		ctaP: "I'll handle every detail — from the private boat booking to the sunset dinner reservation.",
		ctaTrip: "Como",
	},
	{
		slug: "santorini",
		name: "Santorini",
		subtitle: "Greece · Island · Romantic",
		heroImg:
			"https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1600&q=80",
		introLabel: "The destination",
		introH2: "Cliffs, sunsets, and <em>white-washed dreams</em>",
		introParagraphs: [
			"Santorini is one of the most photographed places on Earth — and it earns every single shot. The caldera views from Oia and Fira are extraordinary. The wine grown from volcanic soil is unlike anything you'll taste elsewhere. And the sunsets are, genuinely, as good as everyone says.",
			"The trick with Santorini is going in shoulder season (May or late September) and staying in Oia or Imerovigli rather than the crowded center. Get the timing right and it feels like a private island.",
		],
		introImg:
			"https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80",
		hotels: [
			{
				name: "Canaves Oia Epitome",
				vibe: "Ultimate Luxury",
				desc: "Perched above the caldera in Oia with infinity pools that appear to spill into the sea. Cave suites carved into the cliffside. This is the iconic Santorini experience at its most refined — expect exceptional service and sunsets that will make you cry.",
				price: "From ~$900/night · Oia",
			},
			{
				name: "Mystique",
				vibe: "Chic & Dramatic",
				desc: "Built into the cliff with dramatic caldera views. The Charisma suites have private pools and panoramic terraces. Deeply romantic and visually stunning — one of the best hotel experiences on the island.",
				price: "From ~$700/night · Oia",
			},
			{
				name: "Astra Suites",
				vibe: "Romantic Boutique",
				desc: "A beautifully intimate property in Imerovigli — quieter than Oia but with equally stunning views. The breakfast served on your private terrace with the caldera below is one of the best morning experiences in travel.",
				price: "From ~$400/night · Imerovigli",
			},
			{
				name: "Santorini Palace",
				vibe: "Value with Views",
				desc: "Great caldera views at a fraction of the luxury-hotel price. Pool, good breakfast, central Fira location. Perfect if you want the Santorini experience without spending $700 a night.",
				price: "From ~$180/night · Fira",
			},
		],
		tipLabel: "Ayara tip",
		tip: "Walk the Fira to Oia trail (10km, about 3 hours) in the early morning before the heat and crowds arrive. You'll have the caldera views almost entirely to yourself and arrive in Oia perfectly timed for a late breakfast. One of the best free things you can do on the island.",
		activities: [
			{
				icon: "🌅",
				title: "Oia sunset",
				desc: "Get there 90 minutes early and find a spot on the castle ruins. Yes, it's crowded. Yes, it's still worth it.",
			},
			{
				icon: "🚶",
				title: "Fira to Oia hike",
				desc: "The best way to see the caldera. Go early, bring water, wear real shoes.",
			},
			{
				icon: "🍷",
				title: "Wine tasting at Santo Wines",
				desc: "The island's most celebrated winery with caldera-view tasting terraces. The Assyrtiko white wine is exceptional.",
			},
			{
				icon: "🏖",
				title: "Perissa & Perivolos beaches",
				desc: "The black sand beaches on the south coast. Less glamorous than Oia but where you actually swim.",
			},
			{
				icon: "⛵",
				title: "Sailing trip around the caldera",
				desc: "Half-day catamaran tours include swimming in hot springs, the Red and White beaches, and sunset. One of the best day trips on the island.",
			},
			{
				icon: "🏺",
				title: "Ancient Akrotiri",
				desc: 'A Minoan city preserved under volcanic ash — often called the "Pompeii of the Aegean." Genuinely fascinating and far less visited than it deserves.',
			},
		],
		food: [
			{
				name: "Metaxy Mas",
				type: "Local Taverna · Exo Gonia",
				desc: "Arguably the best food on the island, tucked in a village most tourists drive straight past. The lamb and the fava bean dip are extraordinary. Cash preferred, no reservations — arrive early.",
			},
			{
				name: "Selene",
				type: "Fine Dining · Pyrgos",
				desc: "The island's most acclaimed restaurant — contemporary Greek cuisine using local volcanic-soil ingredients. Book weeks in advance. The tasting menu is the move.",
			},
			{
				name: "Roka",
				type: "Casual Greek · Oia",
				desc: "One of the rare restaurants in Oia that prioritizes food over the view. Excellent mezze, good wine, charming little courtyard. Always busy — arrive before 7pm.",
			},
			{
				name: "Lucky's Souvlakis",
				type: "Street Food · Fira",
				desc: "The best €4 you'll spend in Santorini. A legendary souvlaki spot that locals have been eating at for decades. Counter seating, no frills, perfect food.",
			},
		],
		itineraryLabel: "Sample itinerary",
		itineraryTitle: "5 days in <em>Santorini</em>",
		itineraryDays: [
			{
				num: "01",
				title: "Arrive in Oia",
				desc: "Check in, decompress at your terrace pool, first caldera sunset from the castle. Dinner at Roka.",
			},
			{
				num: "02",
				title: "Hike & wine",
				desc: "Early morning Fira to Oia hike. Late breakfast. Afternoon wine tasting at Santo Wines overlooking the caldera.",
			},
			{
				num: "03",
				title: "Sailing day",
				desc: "Full-day catamaran tour: hot springs, Red Beach, White Beach, swimming stops, sunset on the water.",
			},
			{
				num: "04",
				title: "Villages & food",
				desc: "Morning at Ancient Akrotiri. Lunch at Metaxy Mas in Exo Gonia. Evening at Perissa black sand beach. Dinner at Selene.",
			},
			{
				num: "05",
				title: "Slow morning",
				desc: "Final breakfast on the terrace. Browse Oia's galleries and boutiques. One last sunset before departure.",
			},
		],
		ctaImg:
			"https://images.unsplash.com/photo-1602002418082-dd4a3f5b2b82?w=1600&q=80",
		ctaLabel: "Ready to plan?",
		ctaH2: "Let's build your Santorini trip",
		ctaP: "I'll handle the reservations, the private boat, and that sunset table you deserve.",
		ctaTrip: "Santorini",
	},
	{
		slug: "kyoto",
		name: "Kyoto",
		subtitle: "Japan · Cultural · Serene",
		heroImg:
			"https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1600&q=80",
		introLabel: "The destination",
		introH2: "Ancient Japan, <em>perfectly preserved</em>",
		introParagraphs: [
			"Kyoto was Japan's imperial capital for over a thousand years and it shows — in the thousands of temples and shrines, in the preservation of traditional arts like geisha culture, and in a culinary tradition (kaiseki) that turns seasonal ingredients into a form of meditation.",
			"This is my personal favorite city in Japan, and that's saying something for a country where every city is exceptional. Kyoto rewards slow travel — the more time you give it, the more it reveals.",
		],
		introImg:
			"https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
		hotels: [
			{
				name: "Aman Kyoto",
				vibe: "Ultimate Luxury · Peaceful",
				desc: "Hidden in a private forest on the grounds of a historic estate. The most serene luxury hotel I know of in Japan — possibly anywhere. The garden walk at dusk is unforgettable. For those who want absolute quiet and absolute quality.",
				price: "From ~$1,200/night · Kita-ku",
			},
			{
				name: "The Ritz-Carlton Kyoto",
				vibe: "Grand Luxury · Central",
				desc: "Riverside location in central Kyoto, walking distance from major sights. Incredible spa, flawless service, rooms that balance contemporary design with Japanese aesthetics. The best hotel for those who want luxury and convenience.",
				price: "From ~$700/night · Nakagyo",
			},
			{
				name: "Nazuna Kyoto",
				vibe: "Boutique Machiya",
				desc: "An intimate inn in a beautifully restored traditional townhouse (machiya). Only 8 rooms, each with an indoor cypress bath. Deeply Japanese in atmosphere and completely charming. The kaiseki breakfast alone is worth it.",
				price: "From ~$500/night · Kawaramachi",
			},
			{
				name: "Piece Hostel Sanjo",
				vibe: "Budget Boutique",
				desc: "One of Japan's best budget stays — designer interiors, great communal spaces, a helpful multilingual team. Perfectly located and brilliant value. Proof that budget travel in Kyoto can still feel considered.",
				price: "From ~$40/night · Sanjo",
			},
		],
		tipLabel: "Ayara tip",
		tip: "Book any kaiseki dinner at least 3–4 weeks in advance, especially during sakura season (late March–early April) and autumn foliage (November). These are Kyoto's most special meals — multi-course seasonal Japanese cuisine — and the best spots fill up months ahead. It's one of the most memorable dining experiences you can have anywhere on Earth.",
		activities: [
			{
				icon: "⛩",
				title: "Fushimi Inari at dawn",
				desc: "The thousands of torii gates are magical — but go before 7am to have them nearly to yourself. One of Japan's most iconic images.",
			},
			{
				icon: "🎋",
				title: "Arashiyama Bamboo Grove",
				desc: "Again — go early. The bamboo forest at sunrise with no crowds is transcendent. Combine with a visit to Tenryu-ji garden.",
			},
			{
				icon: "🍵",
				title: "Traditional tea ceremony",
				desc: "Book a private ceremony in Gion. An hour of pure presence — the preparation of matcha elevated to an art form.",
			},
			{
				icon: "🏯",
				title: "Nijo Castle",
				desc: "The nightingale floors (designed to squeak when walked on, alerting guards) make this one of the most fascinating castles in Japan.",
			},
			{
				icon: "🌸",
				title: "Philosopher's Path",
				desc: "A canal-side walking path lined with cherry trees. In spring it's one of the most beautiful walks in the world. Beautiful year-round.",
			},
			{
				icon: "🦌",
				title: "Day trip to Nara",
				desc: "30 minutes by train — free-roaming deer, the enormous Todai-ji Buddha, and a gentler pace than Kyoto.",
			},
		],
		food: [
			{
				name: "Kikunoi Honten",
				type: "Kaiseki · Higashiyama",
				desc: "A three-Michelin-star kaiseki institution that has been serving seasonal Japanese cuisine for generations. The most beautiful and complete expression of what Kyoto food can be. Book months ahead.",
			},
			{
				name: "Nishiki Market",
				type: "Street Food · Central Kyoto",
				desc: 'Kyoto\'s "kitchen" — a covered market with over a hundred stalls selling pickles, tofu, grilled skewers, fresh dashi, and more. The best lunch in the city costs under ¥1,000 if you eat as you walk.',
			},
			{
				name: "Kichi Kichi",
				type: "Omurice · Sanjo",
				desc: "Famous for the theatrical chef Motokichi Yukimura who folds his omelettes with extraordinary speed and flair. The rice omelette is a Kyoto comfort food classic.",
			},
			{
				name: "Gion Kappa",
				type: "Izakaya · Gion",
				desc: "A tiny, lively izakaya (Japanese gastropub) in the heart of Gion. No English menu, no reservations — point at what looks good, order sake, and enjoy one of the most authentic evenings in Kyoto.",
			},
		],
		itineraryLabel: "Sample itinerary",
		itineraryTitle: "6 days in <em>Kyoto</em>",
		itineraryDays: [
			{
				num: "01",
				title: "Arrive & orient",
				desc: "Check in, evening walk through Gion. Dinner at Gion Kappa izakaya. First glimpse of the lantern-lit streets.",
			},
			{
				num: "02",
				title: "Eastern Kyoto",
				desc: "Fushimi Inari at dawn. Kiyomizudera Temple. Afternoon on Philosopher's Path. Kaiseki dinner at Kikunoi.",
			},
			{
				num: "03",
				title: "Arashiyama",
				desc: "Bamboo grove at sunrise. Tenryu-ji garden. Monkey Park (optional). Afternoon river boat cruise. Early night.",
			},
			{
				num: "04",
				title: "Tea & Nijo",
				desc: "Morning tea ceremony in Gion. Nijo Castle. Nishiki Market lunch. Afternoon at Kinkaku-ji (Golden Pavilion).",
			},
			{
				num: "05",
				title: "Day trip to Nara",
				desc: "Morning train to Nara. Deer park, Todai-ji, Kasuga Shrine. Back to Kyoto for final dinner.",
			},
			{
				num: "06",
				title: "Slow morning",
				desc: "Early morning market shopping. Final matcha at a Higashiyama tea shop. Bullet train to Tokyo or departure.",
			},
		],
		ctaImg:
			"https://images.unsplash.com/photo-1602002418082-dd4a3f5b2b82?w=1600&q=80",
		ctaLabel: "Ready to plan?",
		ctaH2: "Let's build your Japan trip",
		ctaP: "I'll secure the kaiseki reservations, the tea ceremony, and a bullet train itinerary that flows perfectly.",
		ctaTrip: "Kyoto",
	},
	{
		slug: "maldives",
		name: "The Maldives",
		subtitle: "Indian Ocean · Luxury · Ocean",
		heroImg:
			"https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1600&q=80",
		introLabel: "The destination",
		introH2: "Overwater villas and <em>infinite blue</em>",
		introParagraphs: [
			"The Maldives is one of those places that actually lives up to every photograph. 1,200 islands across the Indian Ocean, nearly all uninhabited, with some of the world's clearest water and most abundant marine life above the world's largest coral atoll system. It is genuinely paradise — and it is absolutely worth going before it changes.",
			"This is a place for doing nothing, beautifully. An overwater villa, a private snorkeling lagoon, breakfast delivered by boat. The Maldives rewards those who surrender to the pace of it.",
		],
		introImg:
			"https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80",
		hotels: [
			{
				name: "Soneva Jani",
				vibe: "Ultimate Overwater Luxury",
				desc: "Water villas with retractable roofs for stargazing from bed, private slides into the lagoon, and a commitment to sustainability that is genuinely impressive. The most extraordinary resort I know of in the Maldives. For a once-in-a-lifetime special occasion.",
				price: "From ~$2,000/night",
			},
			{
				name: "Gili Lankanfushi",
				vibe: "Barefoot Luxury",
				desc: 'No keys, no shoes required — a genuinely barefoot-luxury resort that makes you feel like the island is yours. Over-water villas, a personal "Mr. Friday" butler, and some of the best snorkeling directly off your deck.',
				price: "From ~$1,200/night",
			},
			{
				name: "Cinnamon Hakuraa Huraa",
				vibe: "Value Overwater",
				desc: "Overwater bungalows at a fraction of the ultra-luxury price. The lagoon is beautiful, the snorkeling is excellent, and the all-inclusive option makes it very good value. A genuine Maldives experience without the four-figure nightly rate.",
				price: "From ~$350/night (all-inclusive)",
			},
			{
				name: "OBLU Xperience Ailafushi",
				vibe: "Budget Friendly",
				desc: "The Maldives' best budget option — overwater rooms, beach access, snorkeling, and decent food at prices that won't require a second mortgage. Proof that the Maldives doesn't have to cost $1,000/night to be extraordinary.",
				price: "From ~$180/night",
			},
		],
		tipLabel: "Ayara tip",
		tip: "Almost every Maldives resort is on its own private island, which means you need to factor in a speedboat or seaplane transfer from Malé on top of the hotel rate. Seaplane transfers cost $300–600 per person return but are an extraordinary experience in themselves — flying low over hundreds of tiny atolls. Budget for this separately and don't let it surprise you.",
		activities: [
			{
				icon: "🤿",
				title: "Snorkeling & diving",
				desc: "The reef directly off most overwater villas is extraordinary. Night dives with manta rays and whale sharks are available seasonally.",
			},
			{
				icon: "🌅",
				title: "Sandbank sunset picnic",
				desc: "Most resorts will arrange a private picnic on a deserted sandbank surrounded by ocean — one of the most romantic experiences in travel.",
			},
			{
				icon: "🐠",
				title: "Whale shark swimming",
				desc: "South Ari Atoll has the highest concentration of whale sharks in the world — gentle giants that you can swim alongside year-round.",
			},
			{
				icon: "🧘",
				title: "Overwater yoga and spa",
				desc: "Almost every luxury resort has an overwater spa. A massage with the sound of the ocean below you is the definition of restorative.",
			},
		],
		ctaImg:
			"https://images.unsplash.com/photo-1602002418082-dd4a3f5b2b82?w=1600&q=80",
		ctaLabel: "Ready to plan?",
		ctaH2: "Let's build your Maldives escape",
		ctaP: "I'll find the perfect resort for your budget and arrange everything from the seaplane to the sandbank picnic.",
		ctaTrip: "Maldives",
	},
	{
		slug: "portugal",
		name: "Portugal",
		subtitle: "Europe · Coastal · Historic",
		heroImg:
			"https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1600&q=80",
		introLabel: "The destination",
		introH2: "Europe's most <em>underrated gem</em>",
		introParagraphs: [
			"Portugal is everything you want from a European escape — cobblestone streets, dramatic coastlines, extraordinary food, and wine that costs almost nothing and tastes like it should cost everything. Lisbon has the energy of a great city without the exhaustion of Paris or Rome. The Algarve coast has some of Europe's most dramatic cliffs and turquoise water.",
			"Portugal is on my list for very good reason: it offers genuine luxury and genuine local experience simultaneously, at a fraction of the cost of most Western European destinations.",
		],
		introImg:
			"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
		hotels: [
			{
				name: "Bairro Alto Hotel",
				vibe: "Chic Boutique · Lisbon",
				desc: "Lisbon's most beloved boutique hotel — elegant 18th-century townhouse with a rooftop terrace overlooking the city. Walking distance to everything. The bar is exceptional and the design is understated perfection. For those who want the real Lisbon.",
				price: "From ~$350/night · Chiado, Lisbon",
			},
			{
				name: "Bela Vista Hotel & Spa",
				vibe: "Historic Luxury · Algarve",
				desc: "A beautifully restored 19th-century mansion on the cliffs above Praia da Rocha. Art nouveau interiors, a Michelin-starred restaurant, and views of the Atlantic. The Algarve's most atmospheric luxury stay.",
				price: "From ~$400/night · Portimão",
			},
			{
				name: "Areias do Seixo",
				vibe: "Eco Luxury · Coast",
				desc: "A stunning eco-resort an hour north of Lisbon, set among dunes and pine forest directly behind a wild Atlantic beach. Organic food, natural spa, thoughtful design. For those who want nature and luxury in equal measure.",
				price: "From ~$300/night · Torres Vedras",
			},
			{
				name: "Santiago de Alfama",
				vibe: "Boutique · Lisbon",
				desc: "A converted medieval palace in Lisbon's oldest neighborhood. 19 rooms, each unique, all beautiful. The breakfast terrace overlooks the Tagus River. Excellent value for the quality and location.",
				price: "From ~$200/night · Alfama, Lisbon",
			},
		],
		tipLabel: "Ayara tip",
		tip: 'The best value move in Portugal is buying wine directly from a local shop rather than at restaurants. A bottle of excellent Alentejo red costs €6–12 at a wine shop. Bring it to a restaurant and pay the corkage fee — you\'ll drink better wine for less money, and the locals will respect you for it. Also: always order the "prato do dia" (dish of the day) at lunch — it includes bread, a main, and often wine for €8–12.',
		activities: [
			{
				icon: "🚃",
				title: "Tram 28 through Alfama",
				desc: "Lisbon's most iconic tram route winds through the oldest neighborhoods. Take it once for the views, then walk back to actually see everything.",
			},
			{
				icon: "🏰",
				title: "Sintra day trip",
				desc: "A UNESCO World Heritage town 40 minutes from Lisbon, packed with fairy-tale palaces and castles in the hills. The Pena Palace alone justifies the trip.",
			},
			{
				icon: "🌊",
				title: "Algarve cliff walks",
				desc: "The Ponta da Piedade rock formations near Lagos are some of Europe's most dramatic coastal scenery. Walk the cliff path or take a kayak under the arches.",
			},
			{
				icon: "🍷",
				title: "Wine tasting in the Douro Valley",
				desc: "A 3-hour drive north from Lisbon, the terraced vineyards of the Douro River valley are among the most beautiful in the world. Port wine tastings at the quintas are excellent.",
			},
			{
				icon: "🎵",
				title: "Fado in Alfama",
				desc: "Fado — Portugal's soulful, melancholy folk music — is best heard in a small restaurant in Alfama with a glass of wine. An unmissable cultural experience.",
			},
			{
				icon: "🏄",
				title: "Surf in Nazaré or Ericeira",
				desc: "Portugal has some of the best surfing in Europe. Nazaré is famous for its enormous winter waves; Ericeira is a world surf reserve with breaks for all levels.",
			},
		],
		food: [
			{
				name: "Time Out Market",
				type: "Food Hall · Lisbon",
				desc: "Not a tourist trap despite what it sounds like — Portugal's best chefs have stalls here. Go for lunch, try four different things, spend about €20 total and eat better than most sit-down restaurants in Europe.",
			},
			{
				name: "O Corvo",
				type: "Wine Bar · Intendente, Lisbon",
				desc: "A tiny, beloved wine bar with a constantly changing menu of natural wines and small plates. Cult status among Lisbon's food community. No reservations, small space, absolutely worth the wait.",
			},
			{
				name: "Cervejaria Ramiro",
				type: "Seafood Institution · Lisbon",
				desc: "Lisbon's most famous seafood restaurant — huge, always packed, and completely worth it. The prawns, clams, and percebes (barnacles) are exceptional. Arrive by 7pm or expect a 45-minute wait.",
			},
			{
				name: "A Cevicheria",
				type: "Creative · Príncipe Real, Lisbon",
				desc: "Chef Kiko Martins' celebrated restaurant under a giant octopus sculpture. Portuguese ingredients treated with creative flair. One of Lisbon's best dining experiences — book ahead.",
			},
		],
		itineraryLabel: "Sample itinerary",
		itineraryTitle: "7 days in <em>Portugal</em>",
		itineraryDays: [
			{
				num: "01–02",
				title: "Lisbon",
				desc: "Alfama and Tram 28. Bairro Alto at night. Cervejaria Ramiro for seafood. Time Out Market for lunch.",
			},
			{
				num: "03",
				title: "Sintra day trip",
				desc: "Train to Sintra. Pena Palace, Moorish Castle. Back to Lisbon for fado dinner in Alfama.",
			},
			{
				num: "04–05",
				title: "Algarve",
				desc: "Drive or fly to the Algarve. Ponta da Piedade rock formations. Lagos town. Cliff walk at sunset. Seafood dinner.",
			},
			{
				num: "06",
				title: "Coast & beach",
				desc: "Full beach day at Praia da Marinha (one of Europe's most beautiful beaches). Sunset cocktails.",
			},
			{
				num: "07",
				title: "Back to Lisbon",
				desc: "Return via the Alentejo wine region. Wine tasting en route. Final dinner at A Cevicheria.",
			},
		],
		ctaImg:
			"https://images.unsplash.com/photo-1602002418082-dd4a3f5b2b82?w=1600&q=80",
		ctaLabel: "Ready to plan?",
		ctaH2: "Let's build your Portugal trip",
		ctaP: "From the fado dinner reservation to the Algarve cliff hotel — I'll handle it all.",
		ctaTrip: "Portugal",
	},
	{
		slug: "switzerland",
		name: "Swiss Alps",
		subtitle: "Switzerland · Mountains · Nature",
		heroImg:
			"https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1600&q=80",
		introLabel: "The destination",
		introH2: "My favorite place on <em>Earth</em>",
		introParagraphs: [
			"Switzerland is, without any hesitation, my favorite destination for natural beauty in the world. The Alps are extraordinary in every season — snow-capped and electric-blue in winter, wildflower-covered and dramatically green in summer. The Swiss have built some of the world's finest mountain infrastructure: cogwheel trains, cable cars, and châlets that make accessing truly remote places feel effortless.",
			"Zermatt, Grindelwald, Interlaken, Lucerne — each has its own character. This is a country where the scenery is so relentlessly beautiful that you find yourself unable to take a bad photograph.",
		],
		introImg:
			"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
		hotels: [
			{
				name: "Mont Cervin Palace",
				vibe: "Grande Dame · Zermatt",
				desc: "The definitive Zermatt luxury hotel — a Victorian-era palace at the foot of the Matterhorn. The views from the spa are extraordinary. For a classic, elegant Alpine experience at its peak.",
				price: "From ~$600/night · Zermatt",
			},
			{
				name: "Lauterbrunnen Hotel Staubbach",
				vibe: "Charming Valley · Budget",
				desc: "A beautifully simple hotel in the jaw-dropping Lauterbrunnen Valley — 72 waterfalls, sheer cliffs, and the sound of cowbells. Exceptional value for one of Switzerland's most spectacular settings.",
				price: "From ~$150/night · Lauterbrunnen",
			},
			{
				name: "Victoria-Jungfrau",
				vibe: "Grand Luxury · Interlaken",
				desc: "A Belle Époque Grand Hotel framing the Jungfrau massif — extraordinary service, excellent spa, multiple restaurants. The central location makes it the ideal base for the Bernese Oberland adventures.",
				price: "From ~$500/night · Interlaken",
			},
			{
				name: "CERVO Mountain Resort",
				vibe: "Modern Boutique · Zermatt",
				desc: "Contemporary design meets Alpine warmth — a cluster of chalets above Zermatt with Matterhorn views, an exceptional restaurant, and a design-forward sensibility that feels genuinely fresh.",
				price: "From ~$400/night · Zermatt",
			},
		],
		tipLabel: "Ayara tip",
		tip: "The Swiss Travel Pass is one of the best travel investments in Europe — it includes unlimited travel on trains, boats, and most mountain railways across the entire country. A 8-day pass costs around $400 but includes almost all transport, including the cogwheel trains up to Jungfraujoch and the boats across Lake Lucerne. For a two-week Switzerland trip, it pays for itself very quickly.",
		activities: [
			{
				icon: "🏔",
				title: "Jungfraujoch (Top of Europe)",
				desc: "A cogwheel train ride to 3,454 meters — the highest railway station in Europe. Year-round glacier and views across five countries on a clear day.",
			},
			{
				icon: "🎿",
				title: "Skiing in Zermatt",
				desc: "One of Europe's highest ski areas, with the Matterhorn as a backdrop. The highest lifts are skiable almost year-round.",
			},
			{
				icon: "🥾",
				title: "Lauterbrunnen Valley hikes",
				desc: "Some of the world's most dramatic hiking — waterfalls, sheer cliffs, and views that justify every uphill step. The Männlichen ridge walk is outstanding.",
			},
			{
				icon: "🚢",
				title: "Lake Lucerne boat cruise",
				desc: "The most beautiful lake in Switzerland, surrounded by mountains. The paddle steamers are historic and the views are extraordinary in every direction.",
			},
			{
				icon: "🧀",
				title: "Cheese and chocolate tasting",
				desc: "Switzerland takes both seriously. The Gruyères cheese factory tour and any good Swiss chocolatier are genuinely excellent experiences.",
			},
			{
				icon: "🌸",
				title: "Glacier hike",
				desc: "Guided walks on the Aletsch Glacier (the largest in the Alps) or the Gorner Glacier above Zermatt are unlike anything else in Europe.",
			},
		],
		ctaImg:
			"https://images.unsplash.com/photo-1602002418082-dd4a3f5b2b82?w=1600&q=80",
		ctaLabel: "Ready to plan?",
		ctaH2: "Let's build your Switzerland trip",
		ctaP: "My personal favorite destination. I'll build you an itinerary that does it full justice.",
		ctaTrip: "Switzerland",
	},
	{
		slug: "bali",
		name: "Bali",
		subtitle: "Indonesia · Tropical · Spiritual",
		heroImg:
			"https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1600&q=80",
		introLabel: "The destination",
		introH2: "The island that <em>feeds the soul</em>",
		introParagraphs: [
			"Bali is one of Southeast Asia's crown jewels — a small island packed with extraordinary temples, terraced rice fields, volcanic mountains, surf beaches, and a Hindu culture unlike anything else in Indonesia. It's been \"discovered\" many times over, but the best of Bali — Ubud's rice paddies at dawn, a temple ceremony at sunset, a morning surf at Canggu — remains genuinely magical.",
		],
		introImg:
			"https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80",
		hotels: [
			{
				name: "Four Seasons at Sayan",
				vibe: "Iconic Luxury · Ubud",
				desc: "A suspended elliptical lobby over the Ayung River gorge, surrounded by rice terraces. The most architecturally extraordinary luxury hotel in Bali. For those who want nature and luxury in perfect balance.",
				price: "From ~$700/night · Ubud",
			},
			{
				name: "Capella Ubud",
				vibe: "Tent Luxury · Forest",
				desc: "Luxury tents in the Balinese forest — an award-winning hotel that feels like glamping reimagined with unlimited budget. River views, private butler, extraordinary food. One of the most talked-about hotels in Asia.",
				price: "From ~$900/night · Ubud",
			},
			{
				name: "Katamama",
				vibe: "Boutique Crafted · Seminyak",
				desc: "A stunning boutique hotel built almost entirely from traditional Balinese materials — hand-crafted brickwork, alang-alang grass roofs. Close to Seminyak's beach clubs. The most beautiful mid-luxury hotel in the south.",
				price: "From ~$300/night · Seminyak",
			},
			{
				name: "Bisma Eight",
				vibe: "Views & Value · Ubud",
				desc: "Stunning infinity pool overlooking the Campuhan Valley, beautiful rooms, excellent service — at about a third of the Four Seasons price. The best view-to-price ratio in Ubud.",
				price: "From ~$150/night · Ubud",
			},
		],
		tipLabel: "Ayara tip",
		tip: "Split your time between the north (Ubud — spiritual, cultural, inland) and the south (Seminyak or Canggu — beaches, surf, nightlife). They feel like different countries. Three nights in Ubud and three nights in Seminyak gives you the full Bali experience. And hire a local driver for the day to reach the temple sites — it's affordable, easier than renting a scooter, and the drivers double as excellent guides.",
		activities: [
			{
				icon: "🌅",
				title: "Tegallalang Rice Terraces",
				desc: "The iconic UNESCO-listed rice terraces north of Ubud. Go at 7am before the tour groups arrive.",
			},
			{
				icon: "⛩",
				title: "Tanah Lot at sunset",
				desc: "Bali's most photographed temple, perched on a rock in the sea. The sunset here is spectacular.",
			},
			{
				icon: "🏄",
				title: "Surf at Canggu or Kuta",
				desc: "Bali has breaks for all levels. Canggu is cooler and less crowded; Kuta has the most consistent beginner waves.",
			},
			{
				icon: "🧘",
				title: "Yoga & wellness in Ubud",
				desc: "The Yoga Barn offers classes in the jungle from dawn to dusk. Ubud is one of the world's great wellness destinations.",
			},
			{
				icon: "🌋",
				title: "Mount Batur sunrise hike",
				desc: "A 2-hour predawn hike to the rim of an active volcano, arriving for one of the most dramatic sunrises you'll ever witness.",
			},
			{
				icon: "🎭",
				title: "Kecak fire dance",
				desc: "A traditional Balinese trance dance performed at sunset at the Uluwatu cliff temple. Deeply atmospheric and genuinely moving.",
			},
		],
		food: [
			{
				name: "Locavore",
				type: "Fine Dining · Ubud",
				desc: "Consistently ranked among Asia's best restaurants — a hyper-local tasting menu where every ingredient is sourced within a day's travel. Book a month ahead. Worth it completely.",
			},
			{
				name: "Warung Babi Guling Ibu Oka",
				type: "Street Food · Ubud",
				desc: "Anthony Bourdain's favorite Bali meal — whole roast suckling pig with crackling, rice, and sambal. Open until it sells out (usually by 1pm). Arrive at noon and eat the best $5 meal of your trip.",
			},
			{
				name: "Merah Putih",
				type: "Modern Indonesian · Seminyak",
				desc: "The most beautiful restaurant in Bali — a soaring bamboo structure housing refined versions of Indonesian classics. Perfect for a special dinner in the south.",
			},
			{
				name: "Sarong",
				type: "Asian Tapas · Seminyak",
				desc: "One of Bali's longest-running hit restaurants — Asian small plates served in an open-air space that manages to feel both elegant and relaxed. The cocktails are excellent.",
			},
		],
		ctaImg:
			"https://images.unsplash.com/photo-1602002418082-dd4a3f5b2b82?w=1600&q=80",
		ctaLabel: "Ready to plan?",
		ctaH2: "Let's build your Bali trip",
		ctaP: "I'll design your perfect Bali itinerary — from the rice terraces at dawn to the beach clubs at sunset.",
		ctaTrip: "Bali",
	},
	{
		slug: "tulum",
		name: "Tulum",
		subtitle: "Mexico · Coastal · Bohemian",
		heroImg:
			"https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&q=80",
		introLabel: "The destination",
		introH2: "Jungle, ruins, and <em>Caribbean perfection</em>",
		introParagraphs: [
			"Tulum is the intersection of ancient Mayan civilization, Caribbean beach, and a bohemian aesthetic that has made it one of the world's most photographed destinations. The clifftop ruins overlooking the turquoise sea are extraordinary. The beach clubs are among the most stylish in the world. And the cenotes — natural limestone swimming pools filled with crystal-clear water — are something that has to be seen to be believed.",
		],
		introImg:
			"https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=80",
		hotels: [
			{
				name: "Azulik",
				vibe: "Treehouse Luxury",
				desc: "Cantilevered wooden villas over the sea — no electricity, no mirrors, pure immersion in the jungle and ocean. The most visually extraordinary hotel in Tulum. An adults-only, phones-discouraged sanctuary.",
				price: "From ~$800/night",
			},
			{
				name: "Be Tulum",
				vibe: "Boho Chic Luxury",
				desc: "Barefoot luxury with a strong yoga and wellness program, private beach access, and beautifully designed rooms that feel genuinely of this place. The most complete luxury resort on the beach strip.",
				price: "From ~$500/night",
			},
			{
				name: "Mia Tulum",
				vibe: "Mid-Range Boutique",
				desc: "Beautiful beachfront property with a strong wellness focus, excellent restaurant, and a warm, attentive team. Great value for the beach strip location and the quality of design.",
				price: "From ~$200/night",
			},
			{
				name: "Casa Malca",
				vibe: "Artistic · Beach Road",
				desc: "A former Pablo Escobar mansion converted into a genuinely excellent boutique hotel — original art throughout, beachfront location, good food, a story to tell. One of Tulum's most distinctive stays.",
				price: "From ~$250/night",
			},
		],
		tipLabel: "Ayara tip",
		tip: "Visit a cenote early — Gran Cenote and Dos Ojos open at 8am and are magnificent in the first hour before tour groups arrive. Rent a bicycle to get between the town and the beach strip (about 3km) — it's the most pleasant and practical way to navigate Tulum. And bring cash: many of the best places — tacos, cenotes, local restaurants — are cash only.",
		activities: [
			{
				icon: "🏊",
				title: "Cenote swimming",
				desc: "Gran Cenote, Dos Ojos, and Casa Cenote — three extraordinary natural swimming pools. Go early, bring goggles.",
			},
			{
				icon: "🏺",
				title: "Tulum ruins",
				desc: "The only Mayan ruins overlooking the Caribbean. Small but spectacular — the setting makes it unique.",
			},
			{
				icon: "🎶",
				title: "Beach club day",
				desc: "Papaya Playa, Mia, or Rosa Negra — world-class DJs, gorgeous settings, and the most stylish beach club scene in the Americas.",
			},
			{
				icon: "🌮",
				title: "El Camello Jr tacos",
				desc: "The best fish tacos on the Mexican Caribbean coast. No decor, paper plates, $3 a taco, life-changing.",
			},
		],
		ctaImg:
			"https://images.unsplash.com/photo-1602002418082-dd4a3f5b2b82?w=1600&q=80",
		ctaLabel: "Ready to plan?",
		ctaH2: "Let's build your Tulum trip",
		ctaP: "I'll design your perfect Tulum escape — from the cenote mornings to the beach club sunsets.",
		ctaTrip: "Tulum",
	},
];

export function getDestination(slug: string): Destination | undefined {
	return destinations.find((d) => d.slug === slug);
}
