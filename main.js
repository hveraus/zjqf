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

  /* Dongfang page */
  df_banner_en:   { cn: 'Dongfang Oils · Company Overview', en: '东方油脂 · 公司概况' },
  df_s1: { cn: '油脂储罐<br>Oil Tanks', en: 'Oil Storage<br>Tanks' },
  df_s2: { cn: '立方米总容量<br>Total Capacity (m³)', en: 'Total Capacity<br>in m³' },
  df_s3: { cn: '吨年接储能力<br>Annual Throughput', en: 'Tonnes Annual<br>Throughput' },
  df_s4: { cn: '占地面积<br>Land Area', en: 'Land Area<br>in Mu' },
  df_intro_lbl:    { cn: '公司简介', en: 'Overview' },
  df_intro_lbl_en: { cn: 'Company Overview', en: '公司简介' },
  df_p1: {
    cn: '<strong>嘉兴市乍浦东方油脂有限公司</strong>是由浙江省轻纺供销有限公司控股的全资子公司，1998年收购原日本伊藤忠嘉兴喜爱油脂公司后组建，注册资金1000万元，占地面积52亩，位于浙江省嘉兴市乍浦滨海大道1371号。',
    en: '<strong>Jiaxing Zhapu Dongfang Oils Co., Ltd.</strong> is a wholly-owned subsidiary of ZJQF, established in 1998 following the acquisition of the former Japanese joint venture Itochu Jiaxing Oils. Registered capital RMB 10 million, occupying 52 mu at 1371 Binhai Avenue, Zhapu, Jiaxing, Zhejiang.',
  },
  df_p2: {
    cn: '公司主要从事动植物油脂及农副产品、纸、纸浆、化工原料等的销售及货运仓储业务，为客户提供一站式仓储接运解决方案。公司是<strong>浙江省首个动植物油脂公用型保税仓库</strong>，年接储油脂能力在50万吨以上，是国内最具规模的油脂储运企业之一。',
    en: 'The company specialises in trading and logistics for animal & vegetable oils, agricultural products, pulp, paper, and chemical raw materials — offering one-stop warehousing and transfer solutions. As <strong>Zhejiang Province\'s first bonded warehouse for animal & vegetable oils</strong>, it handles over 500,000 tonnes annually.',
  },
  df_fac_lbl:    { cn: '设施与能力', en: 'Facilities' },
  df_fac_lbl_en: { cn: 'Infrastructure & Capabilities', en: '设施与能力' },
  df_f1_title: { cn: '油脂储罐', en: 'Storage Tanks' },
  df_f1_en:    { cn: 'Storage Tanks', en: '油脂储罐' },
  df_f1_desc:  {
    cn: '现有油脂储罐32只，总容量约68,850立方米，其中不锈钢储罐6只计8,850立方米，可满足各类动植物油脂及工业油脂的分类储存需求。',
    en: '32 storage tanks with total capacity of ~68,850 m³, including 6 stainless-steel tanks (8,850 m³), accommodating a wide range of animal, vegetable, and industrial oils.',
  },
  df_f2_title: { cn: '输油管道', en: 'Pipeline System' },
  df_f2_en:    { cn: 'Pipeline System', en: '输油管道' },
  df_f2_desc:  {
    cn: '建有一条连接液体化工专用嘉港码头的集肤伴热输油管道，管径DN300，长度4000米，码头接卸速度可达每小时300吨以上；另设两条管线直达内河海恒码头，其中一条为不锈钢管线。',
    en: 'A DN300 skin-effect heat-traced pipeline of 4,000 m connects to Jiagang Wharf, enabling discharge rates exceeding 300 t/h. Two additional pipelines run directly to Haiheng Inland Wharf, one of which is stainless steel.',
  },
  df_f3_title: { cn: '配套设施', en: 'Support Facilities' },
  df_f3_en:    { cn: 'Support Facilities', en: '配套设施' },
  df_f3_desc:  {
    cn: '拥有4,800平方米厂房及配套油泵房、配电房、消防设备和办公用房，全面支持油脂接卸、装载、储运各环节的安全高效运营。',
    en: '4,800 m² of workshop space alongside pump rooms, power distribution, fire-fighting equipment, and offices — fully supporting safe and efficient oil receiving, loading, and storage operations.',
  },
  df_gal_lbl:    { cn: '厂区掠影', en: 'Gallery' },
  df_gal_lbl_en: { cn: 'Facility Gallery', en: '厂区掠影' },
  df_band_title: { cn: '浙江省首个动植物油脂公用型保税仓库', en: 'Zhejiang\'s First Bonded Warehouse for Animal & Vegetable Oils' },
  df_band_sub:   { cn: '一站式仓储接运解决方案 · 年接储能力50万吨以上', en: 'One-Stop Warehousing & Transfer · 500,000+ Tonnes Annual Capacity' },
  df_company_val: { cn: '嘉兴市乍浦东方油脂有限公司', en: 'Jiaxing Zhapu Dongfang Oils Co., Ltd.' },
  df_addr_val:    { cn: '浙江省嘉兴市乍浦滨海大道1371号', en: '1371 Binhai Ave, Zhapu, Jiaxing, Zhejiang' },
  df_rep_lbl:     { cn: '法人代表 · Legal Rep', en: 'Legal Representative' },
  df_rep_val:     { cn: '夏浩', en: 'Xia Hao' },
  df_map_hint:    { cn: '浙江省嘉兴市乍浦滨海大道1371号', en: '1371 Binhai Ave, Zhapu, Jiaxing' },

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
