import Footer from '@/components/Footer';

const posts = [
  {
    img: 'https://images.unsplash.com/photo-1612528443702-f6741f70a049?w=700&q=80',
    cat: 'Destinations',
    title: <>The <em>quiet villages</em> of the Amalfi Coast</>,
    desc: "Beyond Positano — the hidden spots where time moves slowly and the limoncello is always cold.",
    meta: '8 min · March 2026',
  },
  {
    img: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=700&q=80',
    cat: 'Packing',
    title: <>What to pack for a <em>luxury island escape</em></>,
    desc: "A considered packing list — linen-forward, minimal, and elegantly practical.",
    meta: '5 min · Feb 2026',
  },
  {
    img: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=700&q=80',
    cat: 'Hotels',
    title: <>The world&apos;s most <em>beautiful boutique hotels</em></>,
    desc: "Small, soulful, entirely memorable — these are the stays worth building a trip around.",
    meta: '6 min · Jan 2026',
  },
  {
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80',
    cat: 'Adventure',
    title: <>Swimming with <em>manta rays</em> in Hawaii</>,
    desc: "What it's actually like — and how to book it without the tourist trap version.",
    meta: '5 min · Nov 2025',
  },
  {
    img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=700&q=80',
    cat: 'Food & Culture',
    title: <>Why <em>Japan</em> ruined every other food country for me</>,
    desc: "An honest love letter to Japanese food culture — from convenience stores to Michelin stars.",
    meta: '9 min · Oct 2025',
  },
  {
    img: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=700&q=80',
    cat: 'Nature',
    title: <>Chasing the <em>northern lights</em> in Yellowknife</>,
    desc: "What no one tells you about seeing the aurora — and why it's worth every frozen minute.",
    meta: '7 min · Sep 2025',
  },
];

export default function JournalPage() {
  return (
    <>
      <div className="pg-hero">
        <div
          className="pg-hero-img"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=1600&q=80')" }}
        ></div>
        <div className="pg-hero-content">
          <h1>The Journal</h1>
          <p>Stories, guides &amp; the late checkout edit</p>
        </div>
      </div>

      <div className="blog-pg">
        <div className="sec-hd" style={{ marginBottom: '2rem' }}>
          <div>
            <p className="sec-label">Latest stories</p>
            <h2 className="sec-h2">
              From the <em>road</em>
            </h2>
          </div>
        </div>
        <div className="blog-grid">
          {posts.map((post, i) => (
            <div className="bc" key={i}>
              <div className="bc-img">
                <div className="bc-img-bg" style={{ backgroundImage: `url('${post.img}')` }}></div>
              </div>
              <div className="bc-cat">{post.cat}</div>
              <div className="bc-title">{post.title}</div>
              <div className="bc-desc">{post.desc}</div>
              <div className="bc-meta">{post.meta}</div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
