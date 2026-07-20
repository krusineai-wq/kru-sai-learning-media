"use client";

import { useMemo, useState } from "react";

type MediaItem = {
  id: number;
  title: string;
  subject: string;
  activity: string;
  level: string;
  description: string;
  example: string;
  icon: string;
  color: string;
};

const media: MediaItem[] = [
  { id: 1, title: "นักล่าศิลาจารึก AR", subject: "สังคมศึกษา", activity: "เกม AR", level: "ประถมศึกษา", description: "เกมค้นหา สแกน และเก็บชิ้นส่วนศิลาจารึก พร้อมการเคลื่อนไหวรอบห้องเรียน", example: "ให้นักเรียนเดิน วิ่ง หมุนตัว ก้ม เอื้อม และกระโดดเพื่อทำภารกิจ AR", icon: "🪨", color: "blue" },
  { id: 2, title: "ใบงานรามเกียรติ์", subject: "ภาษาไทย", activity: "ใบงาน", level: "ประถมศึกษา", description: "ใบงานภาพระบายสีและกิจกรรมเรียนรู้ตัวละคร เหตุการณ์ และศิลปวัฒนธรรมจากรามเกียรติ์", example: "ใช้เป็นกิจกรรมระบายสี จับคู่ และเขียนคำตอบหลังเรียน", icon: "🐒", color: "coral" },
  { id: 3, title: "เกมเศรษฐีอาณาจักรสุโขทัย", subject: "สังคมศึกษา", activity: "เกมกระดาน", level: "ประถมศึกษา", description: "กระดานเกมเรียนรู้สถานที่สำคัญ วิถีชีวิต และความเจริญของอาณาจักรสุโขทัย", example: "เล่นเป็นกลุ่มพร้อมการ์ดความรู้ การ์ดเหตุการณ์ และเงินพดด้วง", icon: "🏯", color: "lavender" },
  { id: 4, title: "โรงเรียนแห่งอักษรไทย", subject: "ภาษาไทย", activity: "โปสเตอร์ความรู้", level: "ประถมศึกษา", description: "ชุดสื่อเรื่องพ่อขุนรามคำแหง กำเนิดอักษรไทย และศิลาจารึกหลักที่ ๑", example: "จัดเป็นฐานการเรียนรู้ 10 จุด หรือใช้ประกอบนิทรรศการวันภาษาไทย", icon: "ก", color: "yellow" },
  { id: 5, title: "นักสืบพยัญชนะ", subject: "ภาษาไทย", activity: "เกมการเรียนรู้", level: "ป.1–ป.3", description: "ภารกิจค้นหาพยัญชนะ ก–ฮ พร้อมฝึกอ่านคำและเขียนตัวอักษร", example: "ใช้เล่นก่อนทำใบงานฝึกเขียนและทบทวนเป็นรายบุคคล", icon: "🔎", color: "blue" },
  { id: 6, title: "เกมรถไฟสะกดคำ", subject: "ภาษาไทย", activity: "เกมการเรียนรู้", level: "ป.1", description: "เกมเรียงพยัญชนะ สระ และตัวสะกดให้เป็นคำผ่านขบวนรถไฟน่ารัก", example: "ให้นักเรียนต่อชิ้นส่วนคำ เช่น ป + ล + า แล้วอ่านออกเสียง", icon: "🚂", color: "coral" },
  { id: 7, title: "โหม่งคำศัพท์ จับคู่ภาพ", subject: "ภาษาไทย", activity: "เกม AR", level: "ป.1–ป.3", description: "เกมจับคู่ภาพกับคำศัพท์โดยใช้การโยกตัวและโหม่งฟองสบู่คำตอบ", example: "เปิดกล้อง ให้นักเรียนเคลื่อนไหวและเลือกคำที่ตรงกับภาพปริศนา", icon: "🫧", color: "lavender" },
  { id: 8, title: "แบบฝึกอ่านจับใจความ", subject: "ภาษาไทย", activity: "ใบงาน", level: "ป.1–ป.3", description: "นิทานสั้นพร้อมภาพประกอบและคำถามจับใจความ 4 ข้อต่อเรื่อง", example: "อ่านร่วมกันแล้วตอบคำถามเรื่องตัวละคร เหตุการณ์ และข้อคิด", icon: "📖", color: "yellow" },
  { id: 9, title: "ล่าขุมทรัพย์สุภาษิตไทย", subject: "ภาษาไทย", activity: "เกมการเรียนรู้", level: "ป.4–ป.6", description: "ภารกิจตามหาความหมายของสุภาษิตไทยผ่านแผนที่ เกาะสมบัติ และหีบทอง", example: "ใช้คู่กับแบบทดสอบก่อน–หลังเรียนและใบงาน 5 แผ่น", icon: "🗺️", color: "coral" },
  { id: 10, title: "พิชิตอาณาจักรคำเป็นคำตาย", subject: "ภาษาไทย", activity: "เกมการเรียนรู้", level: "ป.4–ป.6", description: "ชุดภารกิจจำแนกคำเป็นและคำตาย พร้อมด่านชิงแชมป์", example: "แบ่งทีมสะสมคะแนนจาก 10 ภารกิจและสรุปหลักภาษา", icon: "🏰", color: "blue" },
  { id: 11, title: "Active Learning ภาษาไทย", subject: "ภาษาไทย", activity: "งานนำเสนอ", level: "ป.4–ป.6", description: "สื่อประกอบการนำเสนอการจัดการเรียนรู้ภาษาไทยแบบลงมือปฏิบัติ", example: "ใช้เป็นหน้าปกและสไลด์นำเข้าสู่กิจกรรมในชั้นเรียน", icon: "✨", color: "lavender" },
  { id: 12, title: "เกมเศรษฐีภาษาอังกฤษ", subject: "ภาษาอังกฤษ", activity: "เกมกระดาน", level: "ประถมศึกษา", description: "กระดานเกม 25 ช่องพร้อมการ์ดคำศัพท์ภาษาอังกฤษ 40 ใบ", example: "ทบทวนคำศัพท์เป็นกลุ่มผ่านการเดินหมากและการ์ดคำถาม", icon: "ABC", color: "yellow" },
  { id: 13, title: "English Phonics", subject: "ภาษาอังกฤษ", activity: "แบบฝึกอ่าน", level: "ประถมศึกษา", description: "ชุดฝึกเสียง a, e, i และ ar พร้อมเรื่องสั้นสำหรับฝึกอ่าน", example: "ใช้ฝึกออกเสียงก่อนอ่านเรื่องสั้นและตอบคำถาม", icon: "🔤", color: "blue" },
  { id: 14, title: "Prime Dodge AR", subject: "คณิตศาสตร์", activity: "เกม AR", level: "ประถมศึกษา", description: "เกมเคลื่อนไหวจำแนกจำนวนเฉพาะและจำนวนประกอบด้วยการโหม่งและหลบ", example: "ตั้งอุปกรณ์ให้เห็นครึ่งตัว แล้วให้นักเรียนขยับตามโจทย์บนหน้าจอ", icon: "🔢", color: "coral" },
  { id: 15, title: "Color by Number", subject: "คณิตศาสตร์", activity: "ใบงาน", level: "ป.1–ป.3", description: "ใบงานคณิตศาสตร์ระบายสีตามตัวเลขและฝึกนับจำนวน 1–10", example: "ใช้เป็นกิจกรรมทบทวนจำนวนและฝึกกล้ามเนื้อมัดเล็ก", icon: "🎨", color: "lavender" },
  { id: 16, title: "Hyper Bakery Beat", subject: "การงานอาชีพ", activity: "เกม AR", level: "ประถมศึกษา", description: "เกมเชฟขนมหวาน 5 ด่าน ฝึกลำดับขั้นตอนผ่านท่าสับมือและควงแขน", example: "สะสมดาวทุกด่านและปลดล็อกของตกแต่งหน้าเค้ก", icon: "🧁", color: "yellow" },
  { id: 17, title: "สื่อวันภาษาไทยแห่งชาติ", subject: "กิจกรรมวันสำคัญ", activity: "โปสเตอร์และใบงาน", level: "ประถมศึกษา", description: "โปสเตอร์ วารสาร ปกรายงาน และใบงานสำหรับวันที่ ๒๙ กรกฎาคม", example: "ใช้จัดบอร์ด นิทรรศการ กิจกรรมระบายสี และรายงานผลโครงการ", icon: "🇹🇭", color: "blue" },
  { id: 18, title: "สื่อวันอาสาฬหบูชา", subject: "กิจกรรมวันสำคัญ", activity: "โปสเตอร์และใบงาน", level: "ประถมศึกษา", description: "ชุดความรู้ วารสาร ปกรายงาน และใบงานภาพระบายสีวันอาสาฬหบูชา", example: "ใช้ประกอบกิจกรรมเรียนรู้พระธรรมและวันสำคัญทางพระพุทธศาสนา", icon: "🪷", color: "coral" },
  { id: 19, title: "สื่อวันสุนทรภู่", subject: "กิจกรรมวันสำคัญ", activity: "โปสเตอร์และใบงาน", level: "ประถมศึกษา", description: "โปสเตอร์ เกียรติบัตร ปกรายงาน และภารกิจนักสืบวรรณคดี", example: "ใช้จัดกิจกรรมวันที่ 26 มิถุนายนและนิทรรศการวรรณคดีไทย", icon: "🌊", color: "lavender" },
  { id: 20, title: "วารสารวันลูกเสือ", subject: "กิจกรรมวันสำคัญ", activity: "วารสารประชาสัมพันธ์", level: "โรงเรียน", description: "วารสารข่าวประชาสัมพันธ์และปกรายงานกิจกรรมลูกเสือ–เนตรนารี", example: "ใส่ภาพกิจกรรมในกรอบโล่ง 6 ช่องและใช้ประชาสัมพันธ์โรงเรียน", icon: "⚜️", color: "yellow" }
];

const subjects = ["ทั้งหมด", "ภาษาไทย", "สังคมศึกษา", "ภาษาอังกฤษ", "คณิตศาสตร์", "การงานอาชีพ", "กิจกรรมวันสำคัญ"];
const activities = ["ทุกกิจกรรม", "เกม AR", "ใบงาน", "เกมการเรียนรู้", "เกมกระดาน", "โปสเตอร์ความรู้", "โปสเตอร์และใบงาน", "งานนำเสนอ", "แบบฝึกอ่าน", "วารสารประชาสัมพันธ์"];

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [subject, setSubject] = useState("ทั้งหมด");
  const [activity, setActivity] = useState("ทุกกิจกรรม");
  const [selected, setSelected] = useState<MediaItem | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return media.filter((item) => {
      const matchesText = !needle || `${item.title} ${item.subject} ${item.activity} ${item.level} ${item.description}`.toLowerCase().includes(needle);
      return matchesText && (subject === "ทั้งหมด" || item.subject === subject) && (activity === "ทุกกิจกรรม" || item.activity === activity);
    });
  }, [query, subject, activity]);

  const clearFilters = () => {
    setQuery("");
    setSubject("ทั้งหมด");
    setActivity("ทุกกิจกรรม");
  };

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#home" aria-label="หน้าแรกครูทรายปั้นสื่อ AI">
          <span className="brand-mark">KS</span>
          <span><b>ครูทรายปั้นสื่อ AI</b><small>Kawaii Learning Studio</small></span>
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="เปิดเมนู">☰</button>
        <nav className={menuOpen ? "nav open" : "nav"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>หน้าแรก</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>คลังสื่อ</a>
          <a href="#how-to" onClick={() => setMenuOpen(false)}>ตัวอย่างการใช้งาน</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>เกี่ยวกับครูทราย</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="bubble bubble-one" />
        <div className="bubble bubble-two" />
        <div className="hero-copy">
          <span className="eyebrow">✨ สื่อการเรียนรู้สำหรับเด็กประถม</span>
          <h1>คลังสื่อการเรียนรู้<br /><em>สร้างสรรค์ด้วย AI</em></h1>
          <p>รวมโปสเตอร์ ใบงาน เกม AR และสื่อ Active Learning จากผลงานของครูทรายปั้นสื่อ AI</p>
          <div className="hero-actions">
            <a className="primary-button" href="#gallery">สำรวจคลังสื่อ <span>→</span></a>
            <a className="secondary-button" href="#how-to">ดูตัวอย่างการใช้</a>
          </div>
          <div className="mini-stats" aria-label="ประเภทผลงาน">
            <span><b>8</b> กลุ่มสาระ</span><i />
            <span><b>AR</b> เคลื่อนไหว</span><i />
            <span><b>ป.1–6</b> ใช้ได้จริง</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="เด็กนักเรียนกำลังเรียนรู้ด้วยสื่อ AI">
          <div className="visual-halo" />
          <img src="/kru-sai-portfolio-hero.png" alt="ภาพประกอบเด็กนักเรียนกับสื่อการเรียนรู้แบบ 3D Kawaii" />
          <span className="float-card card-a">AR <b>✨</b></span>
          <span className="float-card card-b">ใบงาน <b>✏️</b></span>
          <span className="float-card card-c">เกม <b>🎲</b></span>
        </div>
      </section>

      <section className="search-panel" aria-label="ค้นหาและกรองสื่อ">
        <div className="search-box"><span>⌕</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="ค้นหาสื่อการสอน เช่น รามเกียรติ์, สุโขทัย, เกม AR…" aria-label="ค้นหาสื่อการสอน" />{query && <button onClick={() => setQuery("")} aria-label="ล้างคำค้นหา">×</button>}</div>
        <div className="quick-chips">
          {subjects.slice(1, 6).map((name) => <button key={name} className={subject === name ? "active" : ""} onClick={() => setSubject(subject === name ? "ทั้งหมด" : name)}>{name}</button>)}
        </div>
      </section>

      <section className="gallery-section" id="gallery">
        <div className="section-heading">
          <div><span className="kicker">ผลงานสื่อการสอน</span><h2>เลือกสื่อที่เหมาะกับห้องเรียน</h2><p>ค้นหาและกรองผลงานตามรายวิชาและรูปแบบกิจกรรม</p></div>
          <span className="result-count">พบ {filtered.length} รายการ</span>
        </div>
        <div className="filters">
          <div className="filter-group" role="group" aria-label="กรองตามรายวิชา">{subjects.map((name) => <button key={name} className={subject === name ? "active" : ""} onClick={() => setSubject(name)}>{name}</button>)}</div>
          <label>กิจกรรม<select value={activity} onChange={(e) => setActivity(e.target.value)}>{activities.map((name) => <option key={name}>{name}</option>)}</select></label>
        </div>

        {filtered.length ? <div className="media-grid">{filtered.map((item) => (
          <article className={`media-card ${item.color}`} key={item.id}>
            <button className="card-hit" onClick={() => setSelected(item)} aria-label={`เปิดรายละเอียด ${item.title}`} />
            <div className="card-art"><span className="art-orbit" /><b>{item.icon}</b><small>{item.activity}</small></div>
            <div className="card-body"><div className="tags"><span>{item.subject}</span><span>{item.level}</span></div><h3>{item.title}</h3><p>{item.description}</p><button className="detail-link" onClick={() => setSelected(item)}>ดูรายละเอียด <span>→</span></button></div>
          </article>
        ))}</div> : <div className="empty-state"><span>🔍</span><h3>ยังไม่พบสื่อที่ตรงกับการค้นหา</h3><p>ลองเปลี่ยนคำค้นหา รายวิชา หรือประเภทกิจกรรม</p><button onClick={clearFilters}>แสดงสื่อทั้งหมด</button></div>}
      </section>

      <section className="how-section" id="how-to">
        <div className="section-heading centered"><span className="kicker">จากสื่อสู่การเรียนรู้</span><h2>ตัวอย่างการนำไปใช้ในชั้นเรียน</h2><p>เลือกใช้ตามเวลา อุปกรณ์ และรูปแบบการเรียนรู้ของนักเรียน</p></div>
        <div className="steps">
          <article><span>01</span><div className="step-icon">🖼️</div><h3>จัดบอร์ดและนำเข้าสู่บทเรียน</h3><p>ใช้โปสเตอร์หรือสื่อความรู้สร้างความสนใจ ก่อนเข้าสู่กิจกรรมหลัก</p></article>
          <article><span>02</span><div className="step-icon">🤸</div><h3>เรียนรู้ผ่านเกมและการเคลื่อนไหว</h3><p>ใช้เกม AR และ Active Learning ให้นักเรียนคิด ตอบ และขยับร่างกาย</p></article>
          <article><span>03</span><div className="step-icon">📝</div><h3>สรุปด้วยใบงาน</h3><p>ตรวจความเข้าใจผ่านการระบายสี เติมคำ จับคู่ หรือเขียนสรุป</p></article>
          <article><span>04</span><div className="step-icon">⭐</div><h3>สะสมผลงานและประเมินผล</h3><p>บันทึกคะแนน ดาว ภารกิจ และผลงานของนักเรียนหลังจบกิจกรรม</p></article>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-card"><div className="about-badge"><span>AI</span><b>ครูทราย</b></div><div><span className="kicker">ผู้สร้างสื่อ</span><h2>นางสาวรัชฎาพร แก่งทองหลาง</h2><h3>ตำแหน่งครู • โรงเรียนครูทรายปั้นสื่อ AI</h3><p>สร้างสื่อการเรียนการสอนสำหรับระดับอนุบาล ประถมต้น ประถมปลาย มัธยมต้น และมัธยมปลาย ครอบคลุมโปสเตอร์ ใบงาน เกมการเรียนรู้ และสื่อ AR</p><div className="about-tags"><span>โปสเตอร์</span><span>ใบงาน</span><span>3D Kawaii</span><span>เกม AR</span></div></div></div>
      </section>

      <footer><a className="brand footer-brand" href="#home"><span className="brand-mark">KS</span><span><b>ครูทรายปั้นสื่อ AI</b><small>Kawaii Learning Studio</small></span></a><p>คลังผลงานสื่อการเรียนรู้สำหรับห้องเรียน</p><a href="#home">กลับด้านบน ↑</a></footer>

      {selected && <div className="modal-backdrop" role="presentation" onMouseDown={() => setSelected(null)}><section className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onMouseDown={(e) => e.stopPropagation()}><button className="modal-close" onClick={() => setSelected(null)} aria-label="ปิดรายละเอียด">×</button><div className={`modal-art ${selected.color}`}><span>{selected.icon}</span></div><div className="modal-content"><div className="tags"><span>{selected.subject}</span><span>{selected.activity}</span><span>{selected.level}</span></div><h2 id="modal-title">{selected.title}</h2><p>{selected.description}</p><div className="use-box"><b>💡 ตัวอย่างการใช้งาน</b><p>{selected.example}</p></div><button className="primary-button" onClick={() => setSelected(null)}>กลับไปดูผลงาน</button></div></section></div>}
    </main>
  );
}
