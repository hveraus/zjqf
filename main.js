/* ── Translations ── */
const i18n = {
  /* Nav */
  nav_home:     { cn: '首页',     en: 'Home' },
  nav_about:    { cn: '关于我们', en: 'About Us' },
  nav_products: { cn: '经营产品', en: 'Products' },
  nav_dongfang: { cn: '东方公司', en: 'Dongfang Co.' },

  /* Hero */
  hero_badge:  { cn: '浙江省轻纺供销有限公司 · 浙江，中国', en: 'ZJQF Supply & Marketing · Zhejiang, China' },
  hero_slogan: { cn: '追求卓越<br><em>永攀高峰</em>', en: 'Pursuing<br><em>Excellence</em>' },
  hero_sub:    { cn: 'Pursuing Excellence · Reaching New Heights', en: 'Reaching New Heights · 追求卓越' },
  hero_btn1:   { cn: '了解业务&ensp;OUR BUSINESS', en: 'Our Business' },
  hero_btn2:   { cn: '联系我们&ensp;CONTACT US',   en: 'Contact Us' },
  scroll:      { cn: 'Scroll', en: 'Scroll' },

  /* Homepage – About section */
  about_tag:      { cn: '关于轻纺 · About Us',                  en: 'About Us · ZJQF' },
  about_title:    { cn: '专注贸易<br>致力发展',                  en: 'Focused Trading<br>Committed to Growth' },
  about_title_en: { cn: 'Focused Trading · Committed to Growth', en: '专注贸易 · 致力发展' },
  about_lead: {
    cn: '<strong>浙江省轻纺供销有限公司</strong>深耕大宗商品贸易领域，专注动植物油脂、木浆废纸及工业油脂的进出口贸易，以诚信经营为本，以客户需求为先，持续构建稳健高效的供应链体系，致力成为业界值得信赖的贸易伙伴。',
    en: '<strong>ZJQF Supply & Marketing Co., Ltd.</strong> is dedicated to bulk commodity trading, specialising in animal & vegetable oils, wood pulp & waste paper, and industrial oils — building a trusted and efficient global supply chain.',
  },
  about_lead_en: {
    cn: 'Zhejiang Light Textile Supply & Marketing Co., Ltd. is dedicated to bulk commodity trading — specialising in animal & vegetable oils, wood pulp & waste paper, and industrial oils. Built on integrity, we serve as a trusted partner to our clients.',
    en: '浙江省轻纺供销有限公司专注大宗商品贸易，以诚信为本，致力成为业界可信赖的合作伙伴。',
  },
  stat1: { cn: '年行业经验<br>Years Experience', en: 'Years of<br>Experience' },
  stat2: { cn: '核心业务领域<br>Core Areas',     en: 'Core Business<br>Areas' },
  stat3: { cn: '诚信合作精神<br>Integrity First', en: 'Integrity<br>First' },

  /* Business */
  biz_tag:      { cn: '经营领域 · Business Areas',   en: 'Business Areas · Our Products' },
  biz_title:    { cn: '三大核心业务',                 en: 'Three Core Domains' },
  biz_title_en: { cn: 'Three Core Business Domains',  en: '三大核心经营领域' },
  biz1_name:    { cn: '油脂油化',                     en: 'Oils & Oleochemicals' },
  biz1_name_en: { cn: 'Oils & Oleochemicals',          en: '油脂油化' },
  biz1_tags:    { cn: '<span>棕榈仁油</span><span>棕榈油</span><span>甘油</span><span>脂肪酸</span><span>UCO</span>', en: '<span>Palm Kernel Oil</span><span>Palm Oil</span><span>Glycerin</span><span>Fatty Acid</span><span>UCO</span>' },
  biz2_name:    { cn: '纸浆',              en: 'Wood Pulp' },
  biz2_name_en: { cn: 'Wood Pulp',          en: '纸浆' },
  biz2_tags:    { cn: '<span>虹鱼</span><span>凯利普</span><span>银星</span><span>蓝森林</span>', en: '<span>Arauco</span><span>Clearwater</span><span>Silver Star</span><span>Blue Forest</span>' },
  biz3_name:    { cn: '饲料与其他',          en: 'Feed & Others' },
  biz3_name_en: { cn: 'Feed & Others',       en: '饲料与其他' },
  biz3_tags:    { cn: '<span>棕榈粕</span><span>乳清粉</span><span>木薯淀粉</span>', en: '<span>Palm Kernel Meal</span><span>Whey Powder</span><span>Tapioca Starch</span>' },

  /* Contact */
  contact_tag:      { cn: '联系我们 · Contact Us',                    en: 'Contact Us · Get in Touch' },
  contact_title:    { cn: '携手合作<br>共创价值',                      en: 'Partner With Us<br>Create Value' },
  contact_title_en: { cn: 'Partner With Us · Create Value Together',   en: '携手合作 · 共创价值' },
  c_addr_lbl: { cn: '公司地址 · Address', en: 'Address' },
  c_addr_val: { cn: '浙江省杭州市上城区凯旋路445号<br>物产国际广场25楼F', en: '25F-F, Wuchan International Plaza<br>445 Kaixuan Rd, Hangzhou, Zhejiang' },
  c_addr_en:  { cn: '25F-F, Wuchan International Plaza, 445 Kaixuan Rd,<br>Shangcheng District, Hangzhou, Zhejiang', en: '浙江省杭州市上城区凯旋路445号物产国际广场25楼F' },
  c_tel_lbl:     { cn: '联系电话 · Phone', en: 'Phone' },
  c_email_lbl:   { cn: '电子邮箱 · Email', en: 'Email' },
  c_company_lbl: { cn: '公司名称 · Company',               en: 'Company' },
  c_company_val: { cn: '浙江省轻纺供销有限公司',            en: 'Zhejiang Light Textile Supply & Marketing Co., Ltd.' },
  c_company_en:  { cn: 'Zhejiang Light Textile Supply & Marketing Co., Ltd.', en: '浙江省轻纺供销有限公司' },
  qr_lbl:        { cn: '扫码关注公众号<br>Scan to Follow WeChat Official Account', en: 'Scan to Follow<br>WeChat Official Account' },
  brand_name:    { cn: '浙江省轻纺供销有限公司', en: 'ZJQF Supply & Marketing Co., Ltd.' },
  brand_name_en: { cn: 'Zhejiang Light Textile Supply & Marketing Co., Ltd.', en: '浙江省轻纺供销有限公司' },
  brand_slogan:  { cn: '追求卓越，永攀高峰<br>Pursuing Excellence · Reaching New Heights', en: 'Pursuing Excellence · Reaching New Heights<br>追求卓越，永攀高峰' },

  /* Footer */
  footer_copy: { cn: '© 2024 浙江省轻纺供销有限公司. All Rights Reserved.', en: '© 2024 ZJQF Supply & Marketing Co., Ltd. All Rights Reserved.' },
  footer_addr: { cn: '浙江省杭州市上城区凯旋路445号', en: '445 Kaixuan Rd, Hangzhou, Zhejiang, China' },

  /* About page – banner & tabs */
  about_banner_en: { cn: 'About Us · Company Overview', en: '关于我们 · 公司概况' },
  tab_intro:       { cn: '公司简介', en: 'Overview' },
  tab_intro_en:    { cn: 'Company Overview', en: '公司简介' },
  tab_culture:     { cn: '企业文化', en: 'Culture' },
  tab_culture_en:  { cn: 'Corporate Culture', en: '企业文化' },
  tab_history:     { cn: '发展历程', en: 'History' },
  tab_history_en:  { cn: 'Company History', en: '发展历程' },
  tab_contact:     { cn: '联系我们', en: 'Contact' },
  tab_contact_en:  { cn: 'Contact Us', en: '联系我们' },

  /* About page – intro */
  intro_p1: {
    cn: '浙江省轻纺供销有限公司成立于1973年，由浙江省第一轻工业局生产组分支演变而来，2001年改制为国有控股的有限责任制公司。公司是一家具有自营进出口经营权，集贸易、储运、加工为一体的大型综合性商贸流通企业，公司总部位于杭州，在嘉兴设有全资子公司。经过三十多年、几代人的辛勤努力，公司已在国内外建立了广泛的进出口物资贸易渠道和营销网络，具有独立的油脂生产加工、储运基地。',
    en: 'Founded in December 1973 as a branch of the Production Division of Zhejiang Province\'s First Light Industry Bureau, ZJQF was restructured in 2001 into a state-controlled limited liability company, now under the holding of Shenghua Group Holdings Co., Ltd. The company is a large comprehensive trading and logistics enterprise with its own import & export rights, operating across trading, warehousing, and processing. It has four holding subsidiaries in Hong Kong, Hangzhou, Shanghai, and Jiaxing.',
  },
  intro_img_cap: { cn: '浙江省轻纺供销有限公司 办公环境', en: 'ZJQF Office Environment' },
  intro_p2: {
    cn: '公司年销售额达8亿元以上。主要经营工业油脂、食用动植物油、纸浆、纸、废纸、金属材料、化工原料等。油脂是公司的主营品种，年接储动植物油脂达50万吨以上，是国内最大工业油脂进口商和经销商之一，在国内同行业中享有较好的信誉和较高的知名度。',
    en: 'The company\'s annual turnover exceeds RMB 800 million. Its primary businesses include industrial oils & fats, edible animal & vegetable oils, pulp, paper, waste paper, metal materials, and chemical raw materials. As one of China\'s largest importers and distributors of industrial oils, the company handles over 500,000 tonnes of animal & vegetable oils annually, with strong industry reputation and brand recognition.',
  },
  intro_p3: {
    cn: '公司本着"品质第一、信誉至上"的经营原则，为广大用户提供优质服务，谋求共赢发展。',
    en: 'Guided by the principle of "Quality First, Integrity Above All", the company is committed to delivering excellent service to its clients and pursuing mutually beneficial growth.',
  },

  /* About page – culture */
  cult1_lbl: { cn: '企业精神', en: 'Corporate Spirit' },
  cult1_val: { cn: '追求卓越、勇攀高峰', en: 'Pursue Excellence · Reach New Heights' },
  cult1_en:  { cn: 'Pursue Excellence · Reach New Heights', en: '追求卓越、勇攀高峰' },
  cult2_lbl: { cn: '企业宗旨', en: 'Corporate Mission' },
  cult2_val: { cn: '爱岗敬业、开拓进取\n求实创新、放眼未来', en: 'Dedicated & Professional\nInnovative & Forward-Looking' },
  cult2_en:  { cn: 'Dedicated · Progressive · Innovative · Forward-Looking', en: '爱岗敬业 · 开拓进取 · 求实创新 · 放眼未来' },
  cult3_lbl: { cn: '经营理念', en: 'Business Philosophy' },
  cult3_val: { cn: '市场为尊、诚信为本\n合作共赢、共创价值', en: 'Market-Oriented · Integrity-Based\nWin-Win · Value Creation' },
  cult3_en:  { cn: 'Market-Oriented · Integrity-Based · Win-Win · Value Creation', en: '市场为尊 · 诚信为本 · 合作共赢 · 共创价值' },
  cult4_lbl: { cn: '经营原则', en: 'Operating Principle' },
  cult4_val: { cn: '品质第一、信誉至上', en: 'Quality First · Integrity Above All' },
  cult4_en:  { cn: 'Quality First · Integrity Above All', en: '品质第一、信誉至上' },

  /* About page – history */
  tl1: { cn: '公司由浙江省第一轻工业局生产组分支演变而来，正式成立。', en: 'The company was established as a branch of the Production Division of Zhejiang Province\'s First Light Industry Bureau.' },
  tl2: { cn: '公司更名为"浙江省一轻物资公司"。', en: 'Renamed "Zhejiang Province First Light Industry Materials Company".' },
  tl3: { cn: '公司改称"浙江省轻工业厅供销公司"。', en: 'Renamed "Zhejiang Province Light Industry Department Supply & Marketing Company".' },
  tl4: { cn: '公司在上海设立"浙江省轻纺产品经销服务公司"。', en: 'Established "Zhejiang Light Textile Products Sales & Service Company" in Shanghai.' },
  tl5: { cn: '公司改名为浙江省轻纺工业供销公司。', en: 'Renamed "Zhejiang Light Textile Industry Supply & Marketing Company".' },
  tl6: { cn: '获得自营进出口经营权，正式开展国际贸易业务。', en: 'Obtained independent import & export operating rights, formally launching international trade operations.' },
  tl7: { cn: '改制为国有控股的有限责任制公司，现由升华集团控股有限公司控股，更名为浙江省轻纺供销有限公司。', en: 'Restructured into a state-controlled limited liability company under Shenghua Group Holdings Co., Ltd., renamed ZJQF Supply & Marketing Co., Ltd.' },
  tl8: { cn: '公司持续深耕大宗商品贸易领域，业务规模稳步扩大，在动植物油脂、木浆废纸及工业油脂等领域保持行业领先地位。', en: 'Continuing to deepen its presence in bulk commodity trading, with steadily expanding business scale and industry-leading position in animal & vegetable oils, wood pulp & waste paper, and industrial oils.' },

  /* About page – contact */
  c_biz_contact_lbl:  { cn: '业务联系 · Business Contact', en: 'Business Contact' },
  c_biz_contact_name: { cn: '郭经理', en: 'Manager Guo' },
  map_hint: { cn: '浙江省杭州市上城区凯旋路445号', en: '445 Kaixuan Rd, Shangcheng District, Hangzhou' },
};

/* ── Language engine ── */
let currentLang = 'cn';

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === 'cn' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[key]) el.innerHTML = i18n[key][lang];
  });
  document.getElementById('btn-cn').classList.toggle('active', lang === 'cn');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
}

/* ── Nav scroll ── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('solid', window.scrollY > 40);
}, { passive: true });

/* ── Mobile menu ── */
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

/* ── Hero carousel (index.html only) ── */
const heroEl = document.querySelector('.hero');
if (heroEl) {
  const slides = document.querySelectorAll('.slide');
  const dots   = document.querySelectorAll('.h-dot');
  let cur = 0, timer;

  function goTo(i) {
    slides[cur].classList.remove('active');
    dots[cur].classList.remove('on');
    cur = (i + slides.length) % slides.length;
    slides[cur].classList.add('active');
    dots[cur].classList.add('on');
    heroEl.classList.toggle('no-overlay', cur === 1);
  }

  function startTimer() { timer = setInterval(() => goTo(cur + 1), 5500); }
  function resetTimer()  { clearInterval(timer); startTimer(); }

  document.getElementById('next').addEventListener('click', () => { goTo(cur + 1); resetTimer(); });
  document.getElementById('prev').addEventListener('click', () => { goTo(cur - 1); resetTimer(); });
  dots.forEach(d => d.addEventListener('click', () => { goTo(+d.dataset.i); resetTimer(); }));

  heroEl.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
  heroEl.addEventListener('touchend',   e => {
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) { goTo(dx < 0 ? cur + 1 : cur - 1); resetTimer(); }
  }, { passive: true });

  startTimer();
}
let touchX = 0;

/* ── Scroll reveal ── */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });
document.querySelectorAll('.rv').forEach(el => io.observe(el));

/* ── Init ── */
setLang('cn');
