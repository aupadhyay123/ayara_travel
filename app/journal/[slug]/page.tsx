import { notFound } from 'next/navigation';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { getPost } from '@/app/lib/posts';

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <>
      <div className="post-hero">
        <div className="post-hero-img" style={{ backgroundImage: `url('${post.heroImg}')` }}></div>
        <div className="post-hero-info">
          <div className="post-cat">{post.cat}</div>
          <h1 className="post-h1">{post.title}</h1>
          <div className="post-byline">{post.byline}</div>
        </div>
      </div>

      <div className="post-body">
        {post.sections.map((section, i) => {
          if (section.type === 'p') return <p key={i}>{section.text}</p>;
          if (section.type === 'h2') return <h2 key={i}>{section.text}</h2>;
          if (section.type === 'blockquote') return <blockquote key={i}><p>{section.text}</p></blockquote>;
          if (section.type === 'tip') return (
            <div className="post-tip" key={i}>
              <div className="post-tip-label">{section.label}</div>
              <p>{section.text}</p>
            </div>
          );
          if (section.type === 'ul') return (
            <ul className="pack-list" key={i}>
              {section.items.map((item, j) => <li key={j}>{item}</li>)}
            </ul>
          );
          return null;
        })}
      </div>

      <div className="post-more">
        <div>
          <p className="sec-label">Continue reading</p>
          <h2 className="sec-h2">More from the <em>journal</em></h2>
        </div>
        <div className="post-more-grid">
          {post.related.map((r) => (
            <Link href={`/journal/${r.slug}`} className="bc" key={r.slug} style={{ cursor: 'pointer', textDecoration: 'none' }}>
              <div className="bc-img">
                <div className="bc-img-bg" style={{ backgroundImage: `url('${r.img}')` }}></div>
              </div>
              <div className="bc-cat">{r.cat}</div>
              <div className="bc-title">{r.title}</div>
              <div className="bc-read">Read more →</div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
