import { useState, useEffect } from 'react';
import Nav from '../Home/nav/Nav';
import Footer from '../Home/Footer/Footer';
import './privacy.css';

// ── Content ──────────────────────────────────────────────────────────────────
const content = {
  en: {
    dir: 'ltr',
    badge: 'Legal',
    title: 'Privacy Policy',
    subtitle:
      'We take your privacy seriously. This page explains how we collect, use, and protect your data.',
    updated: 'Last updated: March 2025',
    sections: [
      {
        id: 'introduction',
        icon: 'ℹ️',
        title: 'Introduction',
        body: 'This Privacy Policy explains how CodeSphere ("we", "us", or "our") collects, uses, discloses, and safeguards your information when you visit our website or use our services. Please read this policy carefully. By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by all terms outlined here.',
      },
      {
        id: 'information-collection',
        icon: '📋',
        title: 'Information We Collect',
        body: 'We may collect personal information you voluntarily provide, including your name, email address, phone number, and any messages you send us through contact forms. We also automatically collect certain technical data such as your IP address, browser type, pages visited, and time spent on our site to help us improve our services.',
      },
      {
        id: 'how-we-use',
        icon: '⚙️',
        title: 'How We Use Your Information',
        body: 'We use the information we collect to provide, maintain, and improve our services; respond to your inquiries and provide customer support; send you updates, newsletters, and promotional materials (only if you opt in); comply with legal obligations; and prevent fraudulent or unauthorized activity on our platform.',
      },
      {
        id: 'sharing-information',
        icon: '🔗',
        title: 'Sharing Your Information',
        body: 'We do not sell, trade, or rent your personal information to third parties. We may share your data with trusted service providers who assist us in operating our website and delivering services (e.g., email providers, analytics tools), subject to strict confidentiality agreements. We may also disclose information when required by law.',
      },
      {
        id: 'data-security',
        icon: '🛡️',
        title: 'Data Security',
        body: 'We implement industry-standard technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.',
      },
      {
        id: 'cookies',
        icon: '🍪',
        title: 'Cookies & Tracking Technologies',
        body: 'Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some parts of our site may not function properly without cookies.',
      },
      {
        id: 'your-rights',
        icon: '⚖️',
        title: 'Your Privacy Rights',
        body: 'You have the right to access, correct, or delete the personal information we hold about you at any time. You may also withdraw consent for marketing communications and request a copy of your data in a portable format. To exercise any of these rights, please contact us using the details below.',
      },
      {
        id: 'third-party',
        icon: '🌐',
        title: 'Third-Party Links',
        body: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to read the privacy policy of every website you visit.',
      },
      {
        id: 'children',
        icon: '👶',
        title: "Children's Privacy",
        body: 'Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately so we can delete it.',
      },
      {
        id: 'contact-us',
        icon: '📬',
        title: 'Contact Us',
        body: 'If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at: Email: csphere28@gmail.com | Company: CodeSphere ',
      },
    ],
  },
  ar: {
    dir: 'rtl',
    badge: 'قانوني',
    title: 'سياسة الخصوصية',
    subtitle:
      'نحن نأخذ خصوصيتك على محمل الجد. توضح هذه الصفحة كيفية جمع بياناتك واستخدامها وحمايتها.',
    updated: 'آخر تحديث: مارس 2025',
    sections: [
      {
        id: 'introduction-ar',
        icon: 'ℹ️',
        title: 'مقدمة',
        body: 'توضح سياسة الخصوصية هذه كيفية قيام CodeSphere ("نحن" أو "لنا") بجمع معلوماتك واستخدامها والإفصاح عنها وحمايتها عند زيارتك لموقعنا الإلكتروني أو استخدام خدماتنا. يُرجى قراءة هذه السياسة بعناية. باستخدامك لخدماتنا، فإنك توافق على جميع الشروط الواردة هنا.',
      },
      {
        id: 'information-collection-ar',
        icon: '📋',
        title: 'المعلومات التي نجمعها',
        body: 'قد نجمع المعلومات الشخصية التي تقدمها طوعًا، بما في ذلك اسمك وعنوان بريدك الإلكتروني ورقم هاتفك وأي رسائل ترسلها عبر نماذج التواصل. كما نجمع تلقائيًا بيانات تقنية مثل عنوان IP الخاص بك ونوع المتصفح والصفحات التي زرتها.',
      },
      {
        id: 'how-we-use-ar',
        icon: '⚙️',
        title: 'كيف نستخدم معلوماتك',
        body: 'نستخدم المعلومات التي نجمعها لتقديم خدماتنا وتحسينها، والرد على استفساراتك، وإرسال التحديثات والنشرات الإخبارية (فقط إذا وافقت على ذلك)، والامتثال للالتزامات القانونية، ومنع أي نشاط احتيالي.',
      },
      {
        id: 'sharing-information-ar',
        icon: '🔗',
        title: 'مشاركة معلوماتك',
        body: 'لا نبيع معلوماتك الشخصية ولا نتاجر بها مع أطراف ثالثة. قد نشارك بياناتك مع مزودي خدمات موثوقين يساعدوننا في تشغيل موقعنا وتقديم الخدمات، وذلك وفق اتفاقيات سرية صارمة. كما قد نكشف عن المعلومات عند الاقتضاء القانوني.',
      },
      {
        id: 'data-security-ar',
        icon: '🛡️',
        title: 'أمان البيانات',
        body: 'نطبق تدابير تقنية وتنظيمية وفق معايير الصناعة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التعديل أو الإفصاح أو الإتلاف. ومع ذلك، لا يمكن ضمان الأمان المطلق لأي بيانات تُرسل عبر الإنترنت.',
      },
      {
        id: 'cookies-ar',
        icon: '🍪',
        title: 'ملفات تعريف الارتباط',
        body: 'يستخدم موقعنا ملفات تعريف الارتباط وتقنيات التتبع المماثلة لتحسين تجربة التصفح وتحليل حركة الزيارات. يمكنك ضبط متصفحك لرفض ملفات تعريف الارتباط، غير أن بعض أجزاء الموقع قد لا تعمل بشكل صحيح بدونها.',
      },
      {
        id: 'your-rights-ar',
        icon: '⚖️',
        title: 'حقوقك في الخصوصية',
        body: 'يحق لك في أي وقت الاطلاع على معلوماتك الشخصية لدينا أو تصحيحها أو حذفها. يمكنك أيضًا سحب موافقتك على الاتصالات التسويقية وطلب نسخة من بياناتك. للاستفادة من هذه الحقوق، يُرجى التواصل معنا.',
      },
      {
        id: 'third-party-ar',
        icon: '🌐',
        title: 'روابط الأطراف الثالثة',
        body: 'قد يحتوي موقعنا على روابط لمواقع إلكترونية تابعة لأطراف ثالثة. لسنا مسؤولين عن ممارسات الخصوصية أو محتوى تلك المواقع، وننصحك بقراءة سياسة الخصوصية الخاصة بكل موقع تزوره.',
      },
      {
        id: 'children-ar',
        icon: '👶',
        title: 'خصوصية الأطفال',
        body: 'خدماتنا غير موجهة للأفراد دون سن 13 عامًا. لا نجمع عن قصد أي معلومات شخصية من الأطفال. إذا كنت تعتقد أننا جمعنا مثل هذه المعلومات دون قصد، يُرجى التواصل معنا فورًا لحذفها.',
      },
      {
        id: 'contact-us-ar',
        icon: '📬',
        title: 'تواصل معنا',
        body: 'إذا كان لديك أي أسئلة أو استفسارات بشأن سياسة الخصوصية هذه، يُرجى التواصل معنا عبر: البريد الإلكتروني: csphere28@gmail.com | الشركة: CodeSphere ',
      },
    ],
  },
};

// ── Component ─────────────────────────────────────────────────────────────────
export default function Privacy() {
  const [lang, setLang] = useState('en');
  const [activeId, setActiveId] = useState(null);
  const c = content[lang];

  // Scroll spy
  useEffect(() => {
    const handler = () => {
      const sections = document.querySelectorAll('.prv-section');
      let current = null;
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 160) current = s.id;
      });
      setActiveId(current);
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 120, behavior: 'smooth' });
  };

  return (
    <>
      <Nav />

      <div className="prv-page" dir={c.dir}>
        {/* ── Hero ── */}
        <div className="prv-hero">
          <div className="prv-hero-bg" />
          <div className="prv-hero-dots" />

          <div className="prv-hero-content">
            <span className="prv-badge">{c.badge}</span>
            <h1 className="prv-hero-title">{c.title}</h1>
            <p className="prv-hero-sub">{c.subtitle}</p>

            {/* Language Toggle */}
            <div className="prv-lang-toggle">
              <button
                className={`prv-lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => setLang('en')}
              >
                English
              </button>
              <button
                className={`prv-lang-btn ${lang === 'ar' ? 'active' : ''}`}
                onClick={() => setLang('ar')}
              >
                العربية
              </button>
            </div>

            {/* Section Pills */}
            <div className="prv-pills">
              {c.sections.map((s) => (
                <button
                  key={s.id}
                  className={`prv-pill ${activeId === s.id ? 'active' : ''}`}
                  onClick={() => scrollTo(s.id)}
                >
                  {s.icon} {s.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="prv-body">
          {/* Sidebar TOC */}
          <aside className="prv-sidebar">
            <div className="prv-toc">
              <p className="prv-toc-label">
                {lang === 'en' ? 'Table of Contents' : 'المحتويات'}
              </p>
              {c.sections.map((s) => (
                <button
                  key={s.id}
                  className={`prv-toc-item ${activeId === s.id ? 'active' : ''}`}
                  onClick={() => scrollTo(s.id)}
                >
                  <span className="prv-toc-icon">{s.icon}</span>
                  <span>{s.title}</span>
                </button>
              ))}
            </div>
          </aside>

          {/* Main Content */}
          <main className="prv-main">
            {c.sections.map((s, i) => (
              <div
                key={s.id}
                id={s.id}
                className="prv-section"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <div className="prv-section-header">
                  <span className="prv-section-icon">{s.icon}</span>
                  <h2 className="prv-section-title">{s.title}</h2>
                </div>
                <div className="prv-section-divider" />
                <p className="prv-section-body">{s.body}</p>
              </div>
            ))}

          </main>
        </div>
      </div>

      <Footer />
    </>
  );
}