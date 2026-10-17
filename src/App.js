import React, { useState } from 'react';
import { 
  PenTool, 
  Layout, 
  Smartphone, 
  Briefcase, 
  Code,  
  MousePointer2,
  Heart,
  ChevronLeft,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import './App.css';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    { 
      title: 'NU SIS', 
      desc: 'Web and mobile management system.', 
      url: 'https://www.nu-sis.com', 
      img: '/nu-sis.png'
    },
    { 
      title: 'Fleuré Frames', 
      desc: 'Digital photobooth.', 
      url: 'https://nrunace.github.io/fleure-frames/', 
      img: '/fleure-frames.png'
    },
    { 
      title: 'Moodle', 
      desc: 'Task management system.', 
      url: 'https://task-management-system-indol-nine.vercel.app/', 
      img: '/moodle.png'
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % projects.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);

  const getSlideClass = (idx) => {
    const diff = idx - currentSlide;
    const len = projects.length;
    if (diff === 0) return 'active';
    if (diff === 1 || diff === -(len - 1)) return 'next';
    if (diff === -1 || diff === (len - 1)) return 'prev';
    return 'hidden';
  };

  const graphicDesigns = [
    {
      id: 1,
      title: 'Gong Xi Fa Cai!',
      url: 'https://www.facebook.com/thecwsj/posts/pfbid02bPhj39vr3WENAErHaJzxxwXzC3Ls5duwqHLimAbUFhpyScQAS8eHUkrPCmPGAKvsl'
    },
    {
      id: 2,
      title: 'Seaside Jam 2025',
      url: 'https://www.facebook.com/NUMOAph/posts/pfbid024dknvaLK8GvTHgNtrsEcg2zT1ChaKB9QQgd3DxnZAu9N5Ae86N7cB36s51XGuCxzl?rdid=Cf6McwHTXvIprY2c#'
    },
    {
      id: 3,
      title: 'History Is Written by Those Who Show Up',
      url: 'https://www.facebook.com/thecwsj/posts/pfbid0DcFaqiJMArZPbi93sUswCGS9yQxMDZ38jtxtJLu8PKXnPMREGfJEVmzE4Q5qxRRwl?rdid=ul4s4yoKHTlaKjfS#'
    },
    {
      id: 4,
      title: 'WHAT A LIFE AS A BULLDOG',
      url: 'https://www.facebook.com/thecwsj/posts/pfbid0ghMBsHv8h5wJ86ryuKaGoLkABx1sQRhnTgQizwLGHuCfward5mAJgZqatr4zuZrgl'
    },
  ];

  const getFacebookEmbedUrl = (postUrl) => {
    if (!postUrl) return '';
    if (postUrl.includes('plugins/post.php')) return postUrl;
    return `https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(postUrl)}&show_text=false&width=300`;
  };

  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    body: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:jenna.quinto09@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.body + '\n\n---\nSender Email: ' + formData.email)}`;
    
    window.location.href = mailtoLink;
    
    setFormData({ email: '', subject: '', body: '' });
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="logo script" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/my-logo.png" alt="Logo" style={{ width: '30px', height: '30px', marginRight: '0.5rem' }} />
          <span>natalie</span>
        </div>
        
        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation & Button Wrapper */}
        <div className={`nav-wrapper ${isMenuOpen ? 'open' : ''}`}>
          <nav>
            <ul className="nav-links">
              <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
              <li><a href="#stack" onClick={() => setIsMenuOpen(false)}>Stack</a></li>
              <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
              <li><a href="#designs" onClick={() => setIsMenuOpen(false)}>Designs</a></li>
            </ul>
          </nav>
          <a href="#contact" className="btn-outline" onClick={() => setIsMenuOpen(false)}>Inquire</a>
        </div>
      </header>

      <div className="main-wrapper">
        <section id="about" className="hero-section">
          <Heart className="deco-heart" style={{ top: '20%', right: '15%' }} />
          <MousePointer2 className="deco-cursor" style={{ bottom: '25%', right: '25%' }} />

          <h1 className="hero-title serif">
            hi, it's <span className="script">natalie</span> 
          </h1>
          
          <div className="pill-container">
            <span className="pill">creative-led</span>
            <span className="pill pink">strategy-first</span>
          </div>

          <button className="btn-work" onClick={() => window.location.href = '#contact'}>
            Work with Me
          </button>

          <p className="hero-bio" style={{ marginTop: '3rem' }}>
            I'm <b>Natalie</b>, a 4th Year Information Technology student at NU MOA. I specialize in graphic and web design with nine years of editing and design experience— mostly for personal, and academic use. I’m dedicated to creating captivating and aesthetically pleasing outputs.
          </p>
        </section>
      </div>

      {/* Marquee Section */}
      <div className="marquee-wrapper">
        <div className="marquee-content">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="marquee-item">UI/UX Design <Heart className="marquee-icon" size={16} fill="currentColor" /></span>
              <span className="marquee-item">Frontend Web <Heart className="marquee-icon" size={16} fill="currentColor" /></span>
              <span className="marquee-item">Mobile Development <Heart className="marquee-icon" size={16} fill="currentColor" /></span>
              <span className="marquee-item">Graphic Design <Heart className="marquee-icon" size={16} fill="currentColor" /></span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Tech Stack Section */}
      <section id="stack" className="tech-stack-section">
        <div className="stamp">J.N.Q</div>
        
        <div className="stack-header">
          <p className="stack-subtitle">Where Logic Meets Platform Strategy</p>
          <h2 className="stack-title serif">The Toolkit, <span className="script">Built to Scale</span></h2>
        </div>

        <div className="stack-grid">
          <div className="stack-card">
            <div className="stack-card-header">
              <PenTool className="stack-card-icon" />
              <h3 className="stack-card-title serif">UI/UX Design</h3>
            </div>
            <p className="stack-card-items">Figma, Canva, Adobe Photoshop</p>
          </div>

          <div className="stack-card">
            <div className="stack-card-header">
              <Layout className="stack-card-icon" />
              <h3 className="stack-card-title serif">Frontend & Web</h3>
            </div>
            <p className="stack-card-items">ReactJS, JavaScript, HTML5 / CSS3</p>
          </div>

          <div className="stack-card">
            <div className="stack-card-header">
              <Smartphone className="stack-card-icon" />
              <h3 className="stack-card-title serif">Mobile Dev</h3>
            </div>
            <p className="stack-card-items">React Native, Flutter</p>
          </div>

          <div className="stack-card">
            <div className="stack-card-header">
              <Briefcase className="stack-card-icon" />
              <h3 className="stack-card-title serif">Workflow & Mgmt</h3>
            </div>
            <p className="stack-card-items">GitHub, Notion, Microsoft Office Suite</p>
          </div>

          <div className="stack-card">
            <div className="stack-card-header">
              <Code className="stack-card-icon" />
              <h3 className="stack-card-title serif">Languages</h3>
            </div>
            <p className="stack-card-items">Java, JavaScript, PHP</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="projects-header">
          <h2 className="projects-title serif">Featured <span className="script">Projects</span></h2>
        </div>

        <div className="carousel-container">
          <div className="carousel-track">
            {projects.map((project, idx) => {
              const slidePosition = getSlideClass(idx);
              
              return (
                <div 
                  className={`carousel-slide-wrapper ${slidePosition}`} 
                  key={idx}
                  onClick={() => {
                    if (slidePosition === 'next') nextSlide();
                    if (slidePosition === 'prev') prevSlide();
                  }}
                >
                  <div className="polaroid" style={{ cursor: slidePosition === 'active' ? 'default' : 'pointer' }}>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="polaroid-link">
                      <div className="polaroid-img-placeholder">
                        <img src={project.img} alt={project.title} className="polaroid-img" />
                      </div>
                      <div className="polaroid-caption">
                        <h3 className="polaroid-title">{project.title}</h3>
                        <p className="polaroid-desc">{project.desc}</p>
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="carousel-controls">
            <button className="control-btn" onClick={prevSlide}><ChevronLeft /></button>
            <button className="control-btn" onClick={nextSlide}><ChevronRight /></button>
          </div>
        </div>
      </section>

      {/* Graphic Designs Section */}
      <section id="designs" className="designs-section">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="serif" style={{ fontSize: '3.5rem', color: 'var(--brown)' }}>Graphic <span className="script">Designs</span></h2>
          <p style={{ marginTop: '1rem', color: '#666' }}>A collection of visual works and social media materials.</p>
        </div>

        <div 
          className="designs-grid brand-scrollbar" 
          style={{ 
            display: 'flex', 
            flexWrap: 'nowrap', 
            gap: '2rem', 
            overflowX: 'auto', 
            padding: '1rem', 
            paddingBottom: '2rem', 
            scrollSnapType: 'x mandatory', 
            WebkitOverflowScrolling: 'touch',            
          }}
        >
          {graphicDesigns.map((design) => {
            const safeEmbedUrl = getFacebookEmbedUrl(design.url);

            return (
              <div 
                className="fb-placeholder" 
                key={design.id} 
                style={{ 
                  flex: '0 0 auto',
                  width: '100%', 
                  maxWidth: '300px',
                  background: 'white',
                  padding: '1rem',
                  borderRadius: '10px',
                  scrollSnapAlign: 'center',
                  display: 'flex',          
                  flexDirection: 'column'
                }}
              >
                {safeEmbedUrl ? (
                  <>
                    <iframe 
                      src={safeEmbedUrl}
                      width="100%" 
                      height="250" 
                      style={{ 
                        border: 'none', 
                        overflow: 'hidden', 
                        borderRadius: '10px', 
                        boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
                      }} 
                      scrolling="no" 
                      frameBorder="0" 
                      allowFullScreen={true} 
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      title={design.title}
                    ></iframe>
                    
                    <h4 
                      className="serif" 
                      style={{ 
                        textAlign: 'center', 
                        color: 'var(--brown)', 
                        marginTop: '1rem', 
                        fontSize: '1rem',
                        fontWeight: '600',
                        background: 'transparent', 
                        backgroundColor: 'transparent',
                        padding: 0
                      }}
                    >
                      {design.title}
                    </h4>
                  </>
                  
                ) : (
                  <div style={{ padding: '1.5rem', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', borderRadius: '10px' }}>
                    <div className="fb-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      <div className="fb-avatar" style={{ background: 'var(--brown)', padding: '0.5rem', borderRadius: '50%' }}>
                        <span style={{color: 'white', fontWeight: 'bold'}}>f</span>
                      </div>
                      <div className="fb-info">
                        <div className="fb-name" style={{ fontWeight: 'bold', color: 'var(--brown)' }}>Your Page/Name</div>
                        <div className="fb-time" style={{ fontSize: '0.8rem', color: '#888' }}>Just now</div>
                      </div>
                    </div>
                    <div className="fb-content" style={{ padding: '2rem 0', textAlign: 'center', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
                      [ Facebook Post Embed ]<br/><br/>{design.title}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button 
            className="btn-work" 
            onClick={() => window.location.href = 'https://secretlangitu.my.canva.site/natalie-portfolio'}
          >
            View More Designs
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2 className="contact-title serif">Let's <span className="script">create</span> something together.</h2>
        
        <form className="contact-form" onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '400px', margin: '0 auto' }}>
          
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="contact-input" 
            placeholder="Your Email Address" 
            required 
          />
          
          <input 
            type="text" 
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="contact-input" 
            placeholder="Subject" 
            required 
          />
          
          <textarea 
            name="body"
            value={formData.body}
            onChange={handleInputChange}
            className="contact-textarea" 
            placeholder="Your Message" 
            rows="5"
            required 
          />
          
          <button type="submit" className="contact-submit">Send Message</button>
        </form>

        <div className="social-links">
          <a href="https://www.facebook.com/quintoocute" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
            <FaFacebookF size={20} />
          </a>
          <a href="https://github.com/nrunace" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/jen-natalie-quinto-34b755400/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
            <FaLinkedinIn size={20} />
          </a>
        </div>
      </section>

    </div>
  );
}