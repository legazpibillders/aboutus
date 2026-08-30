const defaultData = {
  companyName: "Legaspi Billders Construction",
  companyShort: "Legaspi Billders",
  heroTitle: "Reliable construction solutions across the Philippines.",
  heroSubtitle: "We deliver civil, structural, and electromechanical services for private and government sectors with focus on quality, safety, and dependable execution.",
  aboutTitle: "Building durable infrastructure and dependable partnerships.",
  aboutSummary: "Legaspi Billders Construction is a sole proprietorship engaged in civil, structural and electromechanical services across the Philippines, serving both private and government sectors. Primary operational regions: Bicol Region, Metro Manila, and North Luzon with strong presence in telecom and power projects.",
  mission: "To deliver world-class construction services that exceed client expectations through skilled execution, integrity, and continuous improvement.",
  vision: "To be a leading construction partner in the Philippines, recognized for quality, innovation, and reliability in infrastructure and telecommunication development.",
  whyChooseUs: [
    "Strong project execution across industrial and commercial sectors",
    "Skilled workforce and experienced technical teams",
    "Focus on safety, quality, and turnaround efficiency",
    "Capability to handle both private and government projects",
    "Trusted support from planning to completion"
  ],
  companyStrengths: [
    "Established in 2020",
    "Active in Bicol, Metro Manila, and North Luzon",
    "Serves both private and government sectors",
    "Works in telecom, energy, infrastructure, and building projects",
    "Committed to quality and long-term client relationships"
  ],
  footerAddress: "Mezzanine Level, 776 San Sebastian St., Quiapo, Manila 1001",
  footerContact: "sales.legazpi@gmail.com",
  footerPhone: "+63 995 156 9259",
  services: [
    {
      title: "General Construction",
      description: "Civil and structural works for industrial, commercial, and public infrastructure projects."
    },
    {
      title: "Telecom Infrastructure",
      description: "Rooftop towers, cell site works, and telecom installations across the Philippines."
    },
    {
      title: "Residential & Commercial Buildings",
      description: "Construction, renovation, and fit-out works for private residential and commercial developments."
    },
    {
      title: "Electrical & Mechanical Works",
      description: "Power distribution, instrumentation, and electromechanical installations and maintenance."
    },
    {
      title: "Tower Erection",
      description: "Greenfield and rooftop erection works supported by skilled field crews and technical expertise."
    },
    {
      title: "Design & Build Services",
      description: "Architectural planning, engineering drawings, and integrated project execution from concept to completion."
    }
  ],
  contactEmail: "sales.legazpi@gmail.com",
  contactPhone: "+63 995 156 9259",
  contactAddress: "Mezzanine Level, 776 San Sebastian St., Quiapo, Manila 1001"
};

const setText = (id, value) => {
  const node = document.getElementById(id);
  if (node && value) {
    node.textContent = value;
  }
};

const setList = (id, items) => {
  const node = document.getElementById(id);
  if (!node) return;

  const values = Array.isArray(items) ? items : [];
  node.innerHTML = values.map((item) => `<li>${item}</li>`).join("");
};

const renderServices = (items) => {
  const target = document.getElementById("services-grid");
  if (!target) return;

  const serviceItems = Array.isArray(items) && items.length ? items : defaultData.services;

  target.innerHTML = serviceItems
    .map(
      (service) => `
        <article class="service-card">
          <h3>${service.title}</h3>
          <p>${service.description}</p>
        </article>
      `
    )
    .join("");
};

const applySiteData = (data) => {
  const site = { ...defaultData, ...data };

  setText("brand-name", site.companyName);
  setText("footer-brand", site.companyName);
  setText("company-short", site.companyShort || site.companyName);
  setText("hero-title", site.heroTitle);
  setText("hero-subtitle", site.heroSubtitle);
  setText("about-title", site.aboutTitle);
  setText("about-summary", site.aboutSummary);
  setText("mission-text", site.mission);
  setText("vision-text", site.vision);
  setList("why-list", site.whyChooseUs);
  setList("strengths-list", site.companyStrengths);
  setText("footer-address", site.footerAddress);
  setText("footer-contact", site.footerContact);
  setText("footer-phone", site.footerPhone);
  setText("contact-email", site.contactEmail);
  setText("contact-phone", site.contactPhone);
  setText("contact-address", site.contactAddress);
  const yearNode = document.getElementById("year");
  if (yearNode) yearNode.textContent = new Date().getFullYear();

  renderServices(site.services);
};

fetch("site.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("No site.json found");
    }
    return response.json();
  })
  .then((data) => applySiteData(data))
  .catch(() => applySiteData(defaultData));
