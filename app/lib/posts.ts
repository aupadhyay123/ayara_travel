export type PostSection =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'blockquote'; text: string }
  | { type: 'tip'; label: string; text: string }
  | { type: 'ul'; items: string[] };

export type RelatedPost = {
  slug: string;
  img: string;
  cat: string;
  title: string;
};

export type Post = {
  slug: string;
  cat: string;
  title: string;
  byline: string;
  heroImg: string;
  sections: PostSection[];
  related: RelatedPost[];
};

export const posts: Post[] = [
  {
    slug: 'como',
    cat: 'Destinations · Italy',
    title: 'Lake Como: private villas, boat rides, and the ferry most tourists overlook',
    byline: 'By Kritika · March 2026 · 9 min read',
    heroImg: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1400&q=80',
    sections: [
      { type: 'p', text: "I have been to Lake Como, and I want to be very clear about something: no photograph does it justice. Not the ones you've seen on Pinterest, not the ones in travel magazines, not the ones on the Instagram accounts you follow. The light on that water at golden hour, with the Alps reflected across the surface and a ferry disappearing into the distance — that is a thing you have to feel. It has to happen to you in person." },
      { type: 'p', text: "What most people don't know is that Lake Como is actually one of the most accessible luxury destinations in Italy. The famous Grand Hotels are real and worth every euro for a special occasion — but there's also a €15 day ferry pass that lets you hop between villages all day, a €4 espresso at a waterfront bar in Varenna, and free walks up to medieval castles with views that would cost hundreds of dollars at a rooftop bar anywhere else." },
      { type: 'h2', text: 'The private villa tours' },
      { type: 'p', text: "The great villas of Lake Como are its defining feature — and the best way to experience them is by private boat. Hiring a local skipper for a half-day (expect to pay €300–600 depending on the boat and duration) gives you access to all three shores and the freedom to linger wherever you want. Your skipper will anchor just offshore from the great estates and narrate their history — it's one of the most genuinely elegant experiences I've had anywhere." },
      { type: 'p', text: "Villa del Balbianello is the most famous — a Franciscan monastery turned private estate, now owned by the Italian national trust. You've seen it in Casino Royale and the Star Wars prequels. From the water, the terraced gardens cascading down to the lake are extraordinary. Land visits are available (the interior is beautiful) but seeing it from a boat first, from the same angle that guests arriving by water would have seen it for centuries, is the proper way to arrive." },
      { type: 'p', text: "Villa Carlotta in Tremezzo is the most accessible — it's open to the public, and its rhododendron-filled gardens in spring are among the most beautiful in Italy. The art inside (Canova sculptures, Thorvaldsen friezes) is exceptional and often overlooked by visitors who come only for the gardens. Give yourself two hours minimum." },
      { type: 'p', text: "Villa d'Este in Cernobbio is now a five-star hotel — the most famous on the lake, originally built for a cardinal in the 16th century. You don't have to stay there to appreciate it: lunch at their restaurant gets you access to the grounds and a glimpse of what the ultimate Lake Como experience looks like." },
      { type: 'blockquote', text: '"The villas of Lake Como are not museum pieces. They are living things — still inhabited, still beautiful, still the reason this lake has drawn the world\'s most privileged travelers for five hundred years."' },
      { type: 'h2', text: 'The ferry system no one tells you about' },
      { type: 'p', text: "Here is the Lake Como secret that most travel guides overlook entirely: the public ferry system (operated by Navigazione Laghi) is excellent, affordable, and gives you almost as much freedom as a private boat for a fraction of the cost." },
      { type: 'p', text: "A day pass costs around €15 and allows unlimited hops between all the major lake towns — Varenna, Bellagio, Tremezzo, Menaggio, Cadenabbia, and Como city itself. The ferries run frequently throughout the day, the views are identical to what you'd see from a private boat, and the experience of arriving at Bellagio's harbor on a public ferry and stepping directly into the flower-lined promenade is genuinely wonderful." },
      { type: 'p', text: "My recommendation: do one private boat half-day (morning, for the villa tour, when light is best) and use the ferry for everything else. You get the magic of both — the intimacy of a private skipper's commentary, and the freedom to wander between villages at your own pace for the rest of the day." },
      { type: 'tip', label: 'Ayara tip — which village to stay in', text: "Stay in Varenna rather than Bellagio. Both are beautiful, but Varenna is quieter, more authentically Italian, and gets slightly fewer day-trippers. It's also perfectly positioned on the eastern shore for incredible sunset light across the water to the western Alps. Hotel du Lac is outstanding value for money right on the waterfront." },
      { type: 'h2', text: 'Practical things worth knowing' },
      { type: 'p', text: "May and September are the sweet spots — warm enough to swim, light crowds, and the best photographic light. July and August are beautiful but crowded, with traffic on the lakeside roads that can make car travel genuinely frustrating. If you go in peak summer, take the train from Milan (1 hour to Varenna) rather than driving." },
      { type: 'p', text: "The lake towns are small — you don't need more than two or three days to feel properly settled. Give yourself a slow morning in each place: coffee at a waterfront bar, a walk through the narrow streets, lunch wherever looks right. Lake Como rewards the unhurried traveler above all others." },
    ],
    related: [
      { slug: 'packing', img: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=500&q=80', cat: 'Packing', title: 'What to pack for a luxury island escape' },
      { slug: 'hotels', img: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=500&q=80', cat: 'Hotels', title: "The world's most beautiful boutique hotels" },
    ],
  },
  {
    slug: 'packing',
    cat: 'Packing · Travel Tips',
    title: 'What to pack for a luxury island escape',
    byline: 'By Kritika · February 2026 · 6 min read',
    heroImg: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=1400&q=80',
    sections: [
      { type: 'p', text: "I have packed for a lot of trips. Thirty-three countries worth, across climates ranging from −30°C in Yellowknife to the Maldives in peak humidity. I have overpacked, I have underpacked, and I have finally — after an embarrassing number of \"why did I bring this\" moments and \"why didn't I bring that\" regrets — figured out the exact formula for an island packing list that actually works." },
      { type: 'p', text: "The overarching principle: pack half of what you think you need, and spend the money you save on the things that actually improve the experience on the ground. Here is what I actually bring." },
      { type: 'h2', text: 'The non-negotiables — things most people forget' },
      { type: 'ul', items: [
        "Waterproof phone case or pouch — essential for the water, the boat, the beach. The $15 ones on Amazon work perfectly well. I never go to a beach destination without one.",
        "A cheap pair of sunglasses specifically for the water — your good ones stay on the towel. Buy a $10 pair you won't mourn when they go overboard on a snorkeling excursion.",
        "Reef-safe sunscreen (SPF 50+) — the only kind worth using anywhere with coral. Bring enough from home; it's significantly cheaper than resort pricing.",
        "A large, lightweight tote beach bag — foldable, fits over a carry-on handle. Use it for the beach, the market, the day trip. I bring one bag that does everything.",
        "A silk sleep mask and silicone earplugs — luxury hotels are sometimes on busy streets or have early maintenance. Great sleep is non-negotiable and these weigh nothing.",
        "Collapsible water bottle — stays filled, stays cold, eliminates single-use plastic waste. Many beach clubs now charge $5 for a bottle of water.",
        "Lightweight dry bag — for boat trips, snorkeling excursions, any day where your belongings might get wet. A 10L roll-top dry bag costs $15 and has saved my passport twice.",
        "Mini portable charger — for long beach days and dinner nights when you're away from a socket all day. Get one that holds at least two full phone charges.",
      ]},
      { type: 'h2', text: 'The clothing formula' },
      { type: 'p', text: "Linen is everything for warm-weather travel. It breathes, looks intentionally effortless when slightly wrinkled, and packs down better than cotton. Build your entire wardrobe around two or three linen pieces in neutral tones — white, ivory, sand, sage — and everything layers and combines without effort." },
      { type: 'p', text: "For a week-long island trip, here is my actual clothing list: two linen sets (short or trouser + top), one swimsuit (a second if you hate damp swimwear at dinner), one dress that works for evening, two light t-shirts, one pair of shorts, one lightweight layer (a thin knit or linen shirt), one pair of proper sandals, one pair of flip flops for the beach." },
      { type: 'p', text: "That is it. Anything else is weight you carry and don't need." },
      { type: 'blockquote', text: '"Pack half of what you think you need. You\'ll find the rest at a local market — and those purchases will be the things you actually treasure."' },
      { type: 'h2', text: 'The smart packing tricks' },
      { type: 'p', text: "Wear your heaviest shoes on the plane — they take up a disproportionate amount of suitcase space. Roll everything instead of folding; it reduces wrinkles and saves space. Put your smallest items inside your shoes. And always, always leave a quarter of your bag empty on the way out — you will find things, you will buy things, and having space for them is the mark of a seasoned traveler." },
      { type: 'tip', label: 'Ayara tip — liquids', text: "Decant your skincare into reusable silicone travel bottles instead of packing full-size products. A good travel skincare set weighs under 200 grams and takes up almost no space. And buy your full-size sunscreen when you arrive — it's almost always the same brands, often cheaper, and you'll never pay for oversized liquids at the airport again." },
      { type: 'h2', text: 'The beach bag essentials' },
      { type: 'p', text: "What goes in the bag each day: waterproof phone case (always), dry bag with wallet and passport copy, reef-safe sunscreen, lip balm with SPF, cheap sunglasses, collapsible water bottle, one light cover-up, and a small first aid kit with antihistamines and ibuprofen. That covers 90% of beach day scenarios and fits in any decent tote." },
      { type: 'p', text: "The one luxury item I never skip: a good travel towel. The microfibre kind that packs to the size of a fist and dries in 20 minutes. Hotel pool towels are fine; beach towels at most resorts are inadequate and beach rentals add up. Bring your own." },
    ],
    related: [
      { slug: 'como', img: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=500&q=80', cat: 'Destinations', title: 'Lake Como: private villas and the ferry' },
      { slug: 'japan', img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500&q=80', cat: 'Food & Culture', title: 'Why Japan ruined every other food country for me' },
    ],
  },
  {
    slug: 'hotels',
    cat: 'Hotels · Luxury',
    title: "The world's most beautiful boutique hotels",
    byline: 'By Kritika · January 2026 · 6 min read',
    heroImg: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=1400&q=80',
    sections: [
      { type: 'p', text: "I am deeply, unapologetically particular about hotels. I notice the robes immediately (always the robes), the quality of the mattress, whether the blackout curtains actually block the light, the temperature of the room when you arrive, and whether someone has anticipated anything about you before you've even unpacked. After 33 countries and more hotel stays than I can count, I have strong opinions — and this is a list of the kinds of properties that have genuinely stayed with me." },
      { type: 'h2', text: 'What makes a boutique hotel unforgettable' },
      { type: 'p', text: "It is almost never about the amenities list. The hotels I remember most vividly are the ones where a staff member did something I hadn't asked for and didn't expect. Water by the bed before I woke up. A note that referenced something I'd mentioned at check-in. Knowing my coffee order by the second morning. These are not expensive things to do — they require attention, not budget." },
      { type: 'p', text: "Small properties — genuine boutique hotels with under 30 rooms — nearly always do this better than the large chains. The economics force it: they can't compete on size or facilities, so they compete on care. And care, it turns out, is what you actually remember." },
      { type: 'blockquote', text: '"The best hotel stay I\'ve had cost less per night than a standard room at a major chain. Size and soul have almost no relationship."' },
      { type: 'h2', text: 'What I look for when booking' },
      { type: 'p', text: "Family-owned properties that have been in the same hands for generations tend to have a quality of care that corporate management groups simply cannot manufacture. Look for hotels where the design feels specific to its location — materials sourced locally, art from regional artists, food that reflects the cuisine of the place. Hotels that could be anywhere are, philosophically, nowhere." },
      { type: 'p', text: "When reading reviews, I search specifically for mentions of individual staff members by name. That pattern — \"ask for Marco at breakfast,\" \"Lucia at the front desk is extraordinary\" — tells you more about the quality of a hotel than any star rating. It means the team is known and valued, which means they're staying, which means the consistency is real." },
      { type: 'tip', label: 'Ayara tip', text: "Always call to book rather than using an OTA. Introduce yourself briefly, mention the occasion if there is one, and ask directly: \"Is there anything you'd recommend to make this stay particularly special?\" Hotels appreciate direct guests — you'll often be upgraded, get a better room assignment, or receive a small welcome amenity that doesn't appear on the booking platform. The conversation costs two minutes and the return is disproportionate." },
      { type: 'h2', text: 'The robe test' },
      { type: 'p', text: "I am serious about robes. They are a canary in the coal mine for overall hotel quality. A thin, rough-textured hotel robe tells you everything: the property is cutting costs where they hope you won't notice. A thick, well-laundered, properly weighted robe tells you the same — that someone here cares about how your morning feels. It sounds absurd as a metric. It has never steered me wrong." },
      { type: 'p', text: "Other non-obvious quality indicators: the showerhead (pressure and temperature stability), whether the pillows are adjustable in firmness, the quality of the breakfast coffee (the kitchen runs from the same philosophy as everything else), and whether the do-not-disturb sign is actually respected." },
    ],
    related: [
      { slug: 'como', img: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=500&q=80', cat: 'Destinations', title: 'Lake Como: private villas and the ferry' },
      { slug: 'packing', img: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=500&q=80', cat: 'Packing', title: 'What to pack for a luxury island escape' },
    ],
  },
  {
    slug: 'hawaii',
    cat: 'Adventure · Hawaii',
    title: 'Swimming with manta rays in Hawaii',
    byline: 'By Kritika · November 2025 · 5 min read',
    heroImg: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80',
    sections: [
      { type: 'p', text: "I have been in the water in a lot of places. I've snorkeled the Great Barrier Reef in Australia, surfed in Costa Rica and along the Gold Coast in Australia, and swum in cenotes in Mexico. But swimming with manta rays on the Big Island of Hawaii was a different category of experience entirely — and I did not expect to cry while floating in the Pacific at 9pm." },
      { type: 'h2', text: 'What actually happens' },
      { type: 'p', text: "You go out after dark. The water off the Kona coast on Hawaii's Big Island is warm, calm, and lit by the operators' underwater lights, which attract plankton — the manta rays' primary food source. Within minutes of hitting the water, enormous shapes begin to rise from below you, doing slow, effortless barrel rolls directly underneath your mask." },
      { type: 'p', text: "Some of these animals have wingspans exceeding 12 feet. They come within inches of your face. They are completely unhurried and completely indifferent to your presence in the best possible way — you are simply another object in their feeding route. You hold onto a floating board, you look down, and the ocean comes up to meet you." },
      { type: 'blockquote', text: '"There is something about being in dark water, lit only from below, watching something ancient and enormous move with absolute ease, that recalibrates your sense of what the word \'grace\' means."' },
      { type: 'h2', text: 'How to book it properly' },
      { type: 'p', text: "Several operators run these tours, and the quality varies significantly. Prioritize small group tours — maximum 10–12 people — with operators who are transparent about their conservation commitments and who brief you thoroughly before entering the water. The best operators will ask you not to touch the rays and will explain why (the oils from human hands damage their mucus coating)." },
      { type: 'p', text: "Book directly with the operator rather than through a general activity desk or OTA. Read reviews specifically for what guides do when rays don't show — the good operators have backup plans and alternative sites, and their guests consistently mention this." },
      { type: 'tip', label: 'Ayara tip', text: "The Kona coast averages around 300 manta ray sightings per year, but there are still occasional no-show nights. Book your tour for early in your trip so you have a second chance if you get unlucky the first time. Bring an underwater camera if you have one — a GoPro on a wrist mount will capture something you'll want to show people for the rest of your life." },
      { type: 'p', text: "It is worth noting: you do not need to be an experienced swimmer. This is floating, not diving. If you can snorkel, you can do this. The operators will tell you everything you need to know before you get in the water, and the experience is calm and unhurried. This is one of the most accessible extraordinary things you can do anywhere in the ocean." },
    ],
    related: [
      { slug: 'lights', img: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=500&q=80', cat: 'Nature', title: 'Chasing the northern lights in Yellowknife' },
      { slug: 'japan', img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500&q=80', cat: 'Food & Culture', title: 'Why Japan ruined every other food country for me' },
    ],
  },
  {
    slug: 'japan',
    cat: 'Food & Culture · Japan',
    title: 'Why Japan ruined every other food country for me',
    byline: 'By Kritika · October 2025 · 9 min read',
    heroImg: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1400&q=80',
    sections: [
      { type: 'p', text: "I love food. I've done a cooking class in Rome, eaten my way through Singapore's hawker centres, spent an hours-long kaiseki dinner in Kyoto that remains the most beautiful meal of my life, and navigated Japan's konbini (convenience store) culture with the seriousness it deserves. Japan is, without any competition, the best food country I have visited. And I've visited a lot of them." },
      { type: 'h2', text: 'It starts at the convenience store' },
      { type: 'p', text: "I am completely serious, and you need to believe me about this: the first thing you should do when you land in Japan is go directly to a 7-Eleven or a Lawson or a FamilyMart. The onigiri (rice balls, made fresh that morning) are exceptional. The egg salad sandwiches have a devoted international following for excellent reason. The matcha soft-serve is better than most dedicated dessert restaurants anywhere else on Earth." },
      { type: 'p', text: "This is the fundamental thing about Japan that reshapes your food expectations permanently: quality is the starting point, not the aspiration. A bowl of ramen from a tiny 8-seat counter restaurant where the chef has been making that specific broth for 25 years will cost you ¥900 (about $6) and will be one of the most technically accomplished meals you've ever eaten. The chef is not cutting corners because it's cheap. The price is cheap because the overhead is low. The care is identical to a Michelin-starred kitchen." },
      { type: 'blockquote', text: '"Every meal in Japan — from the vending machine coffee to the 17-course omakase — is taken seriously. That seriousness is a form of hospitality. It is contagious."' },
      { type: 'h2', text: 'Kyoto versus Tokyo' },
      { type: 'p', text: "Tokyo is overwhelming in the best possible way. A city of 14 million people that contains more Michelin-starred restaurants than any other city on Earth, plus ramen shops, sushi counters, yakitori alleys, and department store basement food halls (the depachika) that are genuinely the finest grocery stores in the world." },
      { type: 'p', text: "Kyoto is more focused. The kaiseki tradition — multi-course seasonal cuisine built around whatever is at its peak in that exact moment — is at its finest here. A proper kaiseki dinner in Kyoto, at one of the established ryotei (traditional restaurants), involves 10–15 courses served over three or four hours. Each dish is small, each ingredient chosen with intention, each presentation considered. It is the most complete expression of hospitality-as-art form that I know of." },
      { type: 'p', text: "If you only have one week: go to both. Take the Shinkansen (bullet train, 75 minutes) between them. Stay in Kyoto for the atmosphere, the temples, and the kaiseki. Day-trip to Tokyo for the density and scale of what's possible. You will not regret a single hour of it." },
      { type: 'tip', label: 'Ayara tip', text: "Book your Kyoto kaiseki dinner at least 3–4 weeks in advance, especially during sakura season (late March to early April) and autumn foliage (November). The best restaurants fill months ahead during these periods. The depachika (department store basement food halls) in Tokyo — particularly at Isetan in Shinjuku and Mitsukoshi in Ginza — are worth a full morning of your trip even if you buy nothing. The level of care applied to Japanese food culture is most visible there." },
      { type: 'h2', text: 'The things I ate that I still think about' },
      { type: 'p', text: "The conveyor belt sushi (kaiten-zushi) at a mid-range Tokyo chain that was better than the best sushi I'd had outside Japan. A bowl of tsukemen (thick dipping ramen) from a tiny shop in Shinjuku found only because I followed a queue of salarymen. Tamagoyaki (sweetened egg omelette) from a Nishiki Market stall in Kyoto still warm from the pan. A matcha parfait at a department store in Kyoto that contained seven distinct layers and was the most beautiful dessert I've ever seen before I ate it. A can of hot corn soup from a vending machine in Osaka at midnight. Yes, the vending machine soup." },
      { type: 'p', text: "Japan is the only country where I have eaten better from a vending machine than I have at sit-down restaurants in other countries. That sentence is not hyperbole. It is the honest truth of a traveler who has eaten in 33 countries and keeps coming back to Japan." },
    ],
    related: [
      { slug: 'como', img: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=500&q=80', cat: 'Destinations', title: 'Lake Como: private villas and the ferry' },
      { slug: 'hotels', img: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=500&q=80', cat: 'Hotels', title: "The world's most beautiful boutique hotels" },
    ],
  },
  {
    slug: 'lights',
    cat: 'Nature · Canada',
    title: 'Chasing the northern lights in Yellowknife',
    byline: 'By Kritika · September 2025 · 7 min read',
    heroImg: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1400&q=80',
    sections: [
      { type: 'p', text: "I have wanted to see the northern lights my entire life. I finally did it in Yellowknife, in Canada's Northwest Territories — a small city of about 20,000 people sitting directly under the auroral oval, which places it among the very best locations on Earth to see the aurora borealis. It was −30°C (−22°F). I stood outside for two hours. I did not want to go in. That should tell you everything you need to know about what it felt like." },
      { type: 'h2', text: 'Why Yellowknife specifically' },
      { type: 'p', text: "Iceland gets the marketing. Norway's Tromsø gets the travel magazine covers. But Yellowknife has a combination of factors that makes it genuinely exceptional: it sits directly under the auroral oval (the ring around the magnetic pole where aurora activity is most concentrated), it has very little light pollution once you're outside the small city, and the nights are extremely long from late August through April. The aurora is visible on clear nights approximately 240 nights per year. That's an extraordinary statistic." },
      { type: 'p', text: "The other underappreciated factor is the Indigenous culture — the Dene people have lived with the aurora for thousands of years, and local guides bring a depth of knowledge and spiritual context to the experience that significantly enhances it. The aurora is not just a light show. It is a presence." },
      { type: 'blockquote', text: '"Standing under the aurora in complete silence — just the crunch of snow underfoot and the sky moving above you — I understood for the first time why people use the word \'spiritual\' to describe something that is not religious."' },
      { type: 'h2', text: 'What to actually expect' },
      { type: 'p', text: "The aurora does not cooperate on command. You need clear skies and sufficient solar activity, and neither is within your control. This is why you must plan for at least three nights — ideally five. I went for four nights and had two extraordinary evenings and two cloudy ones. If I'd gone for two nights, I might have seen nothing." },
      { type: 'p', text: "Reputable local tour operators in Yellowknife track aurora forecasts obsessively and will genuinely text you at 11pm or midnight when conditions are suddenly perfect. This is not a marketing claim — they do it because their reputation depends on it and because they love the lights as much as you do." },
      { type: 'tip', label: 'Ayara tip — what to wear', text: "This is not a situation where you improvise clothing. Dress in layers rated to −40°C: merino wool base layer, fleece mid-layer, a down puffer, a proper windproof outer shell. Handwarmers in your gloves and toewarmers in your boots. A balaclava under your hat. Face cream to protect exposed skin. You will look completely ridiculous and be completely comfortable. People who underdress miss the show because they go back inside after 20 minutes. Don't be those people." },
      { type: 'h2', text: 'Photographing the lights' },
      { type: 'p', text: "Your phone camera — even modern phones with night modes — will not capture what you actually see. Bring a camera that allows manual settings, or borrow one. Set to ISO 1600–3200, aperture as wide as it goes (f/1.8–f/2.8), shutter speed 10–15 seconds, and mount it on a tripod. The long exposure captures the movement and color in a way your eye can't fully register in real time. These are images you will print and put on your wall." },
      { type: 'p', text: "And one final thing: put the camera down for at least ten minutes and just watch. The photographs matter less than the memory of standing under a sky that was actually moving, actually changing color, actually performing — in complete silence, in the absolute cold, at the edge of the northern world." },
    ],
    related: [
      { slug: 'hawaii', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80', cat: 'Adventure', title: 'Swimming with manta rays in Hawaii' },
      { slug: 'japan', img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500&q=80', cat: 'Food & Culture', title: 'Why Japan ruined every other food country for me' },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find(p => p.slug === slug);
}
