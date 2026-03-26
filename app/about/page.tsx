import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="about-hero">
        <div className="about-hero-img"></div>
        <div className="about-hero-content">
          <h1>Meet Kritika</h1>
          <p>Curator · Traveler · 33 countries &amp; counting</p>
        </div>
      </div>

      {/* Body */}
      <div className="about-body">
        <div className="about-split">
          <div>
            <div className="about-img"></div>
            <p className="about-img-caption">Replace with your photo</p>
            <div className="about-stats">
              <div className="astat">
                <div className="astat-n">33</div>
                <div className="astat-l">Countries visited</div>
              </div>
              <div className="astat">
                <div className="astat-n">3</div>
                <div className="astat-l">Wonders of the world</div>
              </div>
              <div className="astat">
                <div className="astat-n">5★</div>
                <div className="astat-l">Hotel standards</div>
              </div>
              <div className="astat">
                <div className="astat-n">∞</div>
                <div className="astat-l">Flight tabs open</div>
              </div>
            </div>
          </div>
          <div className="about-text-wrap">
            <p className="about-label">The story</p>
            <div className="about-name">
              Hi, I&apos;m <em>Kritika</em>
            </div>
            <p className="about-role">Travel curator · Based in New York City, NY</p>
            <p className="about-bio">
              I&apos;m a Manhattan-based tech professional by day — and an obsessive travel planner
              basically every other waking hour.{' '}
              <strong>33 countries, 3 wonders of the world</strong>, and a camera roll that would
              take a week to scroll through.
            </p>
            <p className="about-bio">
              My idea of a perfect Tuesday evening is opening 14 flight tabs and phantom-planning a
              trip I may or may not actually take. Eventually I thought: if I&apos;m this good at
              the part people hate, why not actually help? Because the logistics, the research, the
              &ldquo;which hotel actually has the good robes&rdquo; — that&apos;s where I live.
            </p>
            <p className="about-bio">
              My favorite destination for natural beauty is <strong>Switzerland</strong>. I&apos;ve
              explored the fjords of Norway, stood under the northern lights in Yellowknife, and
              hiked the glaciers of Alaska. My favorite food country is <strong>Japan</strong> —
              and it&apos;s not even close.
            </p>
            <div className="adv-section">
              <p className="adv-label">Some things I&apos;ve done</p>
              <div className="adv-list">
                {[
                  'Great Barrier Reef',
                  'Manta rays, Hawaii',
                  'Surfing, Costa Rica',
                  'Cooking class, Rome',
                  'Fjords of Norway',
                  'Northern lights, Yellowknife',
                  'Glaciers of Alaska',
                  '3 Wonders of the World',
                ].map((tag) => (
                  <span className="adv-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="about-pillars">
          <div className="pillar">
            <div className="pillar-title">
              <em>Honest</em> curation
            </div>
            <div className="pillar-desc">
              No paid placements. Only places I&apos;d genuinely send my closest friends.
            </div>
          </div>
          <div className="pillar">
            <div className="pillar-title">
              Luxury <em>for real</em>
            </div>
            <div className="pillar-desc">
              I know what makes a hotel feel truly special — the robes, the beds, the small things.
            </div>
          </div>
          <div className="pillar">
            <div className="pillar-title">
              Travel <em>your way</em>
            </div>
            <div className="pillar-desc">
              Beach days and adrenaline. Culture and comfort. You don&apos;t have to choose.
            </div>
          </div>
        </div>
      </div>

      {/* Countries */}
      <div className="countries-sec">
        <div className="countries-inner">
          <div className="countries-header">
            <div>
              <p className="c-label">The passport</p>
              <h2 className="c-h2">
                Countries I&apos;ve <em>explored</em>
              </h2>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className="c-count">33</div>
              <div className="c-count-label">Countries visited</div>
            </div>
          </div>
          <div className="legend">
            <div className="leg">
              <div className="leg-dot" style={{ background: 'var(--como-mist)', border: '0.5px solid var(--como-blue)' }}></div>
              Been there
            </div>
            <div className="leg">
              <div className="leg-dot" style={{ background: '#EDE9E3', border: '0.5px solid var(--sand)' }}></div>
              On the list
            </div>
          </div>
          <div className="regions">
            <div className="region">
              <p className="region-name">North America &amp; Caribbean</p>
              <div className="country-chips">
                {['United States','Canada','Mexico','Jamaica','Bahamas','Turks & Caicos','Aruba','Puerto Rico','Costa Rica'].map((c) => (
                  <span className="chip been" key={c}>{c}</span>
                ))}
              </div>
            </div>
            <div className="region">
              <p className="region-name">Europe</p>
              <div className="country-chips">
                {['United Kingdom','France','Italy','Spain','Germany','Netherlands','Austria','Switzerland','Belgium','Luxembourg','Hungary','Monaco','Liechtenstein','Vatican City','Norway','Sweden','Finland','Estonia','Turkey'].map((c) => (
                  <span className="chip been" key={c}>{c}</span>
                ))}
                <span className="chip next">Greece</span>
              </div>
            </div>
            <div className="region">
              <p className="region-name">Asia &amp; Oceania</p>
              <div className="country-chips">
                {['Japan','India','Hong Kong','Singapore','Australia'].map((c) => (
                  <span className="chip been" key={c}>{c}</span>
                ))}
                <span className="chip next">Thailand</span>
              </div>
            </div>
            <div className="region">
              <p className="region-name">South America</p>
              <div className="country-chips">
                <span className="chip next">Brazil</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next banner */}
      <div className="next-banner">
        <div className="next-banner-img"></div>
        <div className="next-banner-overlay"></div>
        <div className="next-banner-content">
          <p>Next on the list</p>
          <h3>The bucket list continues…</h3>
          <div className="next-chips">
            <span className="next-chip">✦ Greece</span>
            <span className="next-chip">✦ Thailand</span>
            <span className="next-chip">✦ Brazil</span>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
