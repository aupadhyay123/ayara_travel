import { notFound } from 'next/navigation';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { getDestination } from '@/app/lib/destinations';

export default function DestinationPage({ params }: { params: { slug: string } }) {
  const dest = getDestination(params.slug);
  if (!dest) notFound();

  return (
    <>
      <div className="pg-hero">
        <div className="pg-hero-img" style={{ backgroundImage: `url('${dest.heroImg}')` }}></div>
        <div className="pg-hero-content">
          <h1>{dest.name}</h1>
          <p>{dest.subtitle}</p>
        </div>
      </div>

      <div className="dest-guide">
        <div className="dg-intro">
          <div className="dg-intro-text">
            <p className="sec-label">{dest.introLabel}</p>
            <h2 dangerouslySetInnerHTML={{ __html: dest.introH2 }} />
            {dest.introParagraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="dg-intro-img">
            <div className="dg-intro-img-bg" style={{ backgroundImage: `url('${dest.introImg}')` }}></div>
          </div>
        </div>

        <div className="dg-section">
          <div className="dg-section-title">Where to <em>stay</em></div>
          <div className="hotels-grid">
            {dest.hotels.map((h) => (
              <div className="hotel-card" key={h.name}>
                <div className="hotel-name">{h.name}</div>
                <div className="hotel-vibe">{h.vibe}</div>
                <div className="hotel-desc">{h.desc}</div>
                <div className="hotel-price">{h.price}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="dg-tip">
          <div className="dg-tip-label">{dest.tipLabel}</div>
          <p>{dest.tip}</p>
        </div>

        <div className="dg-section">
          <div className="dg-section-title">Things to <em>do</em></div>
          <div className="activities-list">
            {dest.activities.map((a) => (
              <div className="act-item" key={a.title}>
                <div className="act-icon">{a.icon}</div>
                <div className="act-text"><strong>{a.title}</strong>{a.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {dest.food && dest.food.length > 0 && (
          <div className="dg-section">
            <div className="dg-section-title">Where to <em>eat</em></div>
            <div className="food-grid">
              {dest.food.map((f) => (
                <div className="food-card" key={f.name}>
                  <div className="food-name">{f.name}</div>
                  <div className="food-type">{f.type}</div>
                  <div className="food-desc">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {dest.itineraryDays && dest.itineraryDays.length > 0 && (
        <div className="dg-itinerary">
          <div className="dg-itinerary-inner">
            <p className="sec-label">{dest.itineraryLabel}</p>
            <h2 className="sec-h2" dangerouslySetInnerHTML={{ __html: dest.itineraryTitle ?? '' }} />
            <div className="itin-days">
              {dest.itineraryDays.map((day) => (
                <div className="itin-day" key={day.num}>
                  <div className="itin-day-num">{day.num}</div>
                  <div className="itin-day-title">{day.title}</div>
                  <div className="itin-day-desc">{day.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="cta">
        <div className="cta-img" style={{ backgroundImage: `url('${dest.ctaImg}')` }}></div>
        <div className="cta-overlay"></div>
        <div className="cta-content">
          <p className="cta-label">{dest.ctaLabel}</p>
          <h2 className="cta-h2"><em>Let&apos;s build</em> your {dest.ctaTrip} trip</h2>
          <p className="cta-p">{dest.ctaP}</p>
          <Link href="/contact" className="cta-btn">Get in touch</Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
