// Chapter 25: Vibrio and Related Bacteria (Rich Study Edition)
// Automatically plugs into window.BACTERIA_DB in index.html

window.BACTERIA_DB.push(
  {
    id: "vibrio_cholerae",
    name: "Vibrio cholerae",
    chapter: "Ch. 25: Vibrio and Related Bacteria",
    tags: [
      "Gram-Negative", "Non-Acid-Fast", "Comma-Shaped / Curved Rods",
      "Facultative Anaerobe", "Extracellular", "Non-Spore-Forming",
      "Catalase (+)", "Oxidase (+)", "Motile",
      "Non-Lactose Fermenter", "TCBS Agar", "Halophilic (Salt-Loving)",
      "AB Toxin: Increases cAMP",
      "Watery Secretory Diarrhea", "Sepsis / Septic Shock",
      "Fish / Shellfish / Marine Water"
    ],
    triggerWords: [
      "Curved Comma-Shaped Gram-Negative Rod with Single Polar Flagellum",
      "Oxidase (+) (Separates from Enterobacterales) & Yellow Colonies on TCBS Agar (Sucrose +)",
      "Cholera Toxin (CTXΦ Phage — AB5 Toxin Binding GM1 → ↑cAMP)",
      "Toxin Coregulated Pilus (TCP — VPI-1) + Zot + Ace",
      "Painless Profuse Rice-Water Stools (Up to 1 L/hr Loss → Hypovolemic Shock, Acidosis, Hypokalemia)",
      "O1 (Classical & El Tor) & O139 Epidemic Strains; Acid-Labile (High Inoculum >10^8)",
      "Cornerstone: Prompt Fluid & Electrolyte Replacement + Single-Dose Azithromycin"
    ],
    overview: `
      <p><b>What it is:</b> <i>Vibrio cholerae</i> is a small (0.5–1.5 &times; 3 &mu;m), <b>curved (comma-shaped), facultatively anaerobic, fermentative Gram-negative rod</b> with a single <b>polar flagellum</b> and a positive <b>cytochrome oxidase</b> reaction (separating it from Enterobacterales). Unlike other halophilic vibrios, <i>V. cholerae</i> can grow without added NaCl, thrives at alkaline pH (6.5–9.0), and is killed by stomach acid.</p>
      <p><b>Epidemiology:</b> Lives naturally in estuarine/marine waters and chitinous shellfish worldwide. Epidemic cholera is caused by toxin-producing serogroups <b>O1</b> (biotypes Classical and current 7th-pandemic <b>El Tor</b>; serotypes Inaba, Ogawa, Hikojima) and <b>O139 Bengal</b> (~3 million cases and 100,000 deaths/year globally). Spread via fecally contaminated water/food in poor sanitation or post-disaster settings (high infectious dose &gt;10<sup>8</sup>, dropping to 10<sup>3</sup>–10<sup>5</sup> with achlorhydria).</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Toxin Coregulated Pilus (TCP — VPI-1):</b> Mediates adherence to intestinal mucosa (preventing flush-out during massive diarrhea) and serves as the surface receptor for lysogenic bacteriophage <b>CTX&Phi;</b>.</li>
        <li><b>Cholera Toxin (<i>ctxA/ctxB</i> on Phage CTX&Phi;):</b> Classic <b>AB<sub>5</sub> exotoxin</b> homologous to ETEC LT-I. Five B subunits bind <b>GM<sub>1</sub> ganglioside</b> receptors on enterocytes (enhanced by neuraminidase); the A subunit activates G<sub>s</sub> &rarr; adenylate cyclase &rarr; massive <b>&uarr;cAMP</b> &rarr; hypersecretion of electrolytes and water (up to 1 L/hr!).</li>
        <li><b>Accessory Toxins:</b> <b>Zonula occludens toxin (Zot)</b> loosens tight junctions; <b>accessory cholera enterotoxin (Ace)</b> increases fluid secretion; <b>chemotaxis proteins (Cep)</b> aid adherence.</li>
        <li><b>Capsule Status:</b> O1 lacks a capsule (disease stays confined to the gut); non-O1 strains produce capsules and can cause bacteremia.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Cholera (O1 &amp; O139):</b> 2–3 day incubation (as fast as &lt;12 h); abrupt massive watery diarrhea and vomiting without fever. Stools become colorless, odorless, protein-free, and mucus-flecked (<b>"rice-water" stools</b>), causing severe dehydration, painful muscle cramps, <b>metabolic acidosis</b> (bicarbonate loss), <b>hypokalemia</b>, renal failure, and hypovolemic shock (up to 70% mortality untreated; &lt;1% with prompt rehydration).</li>
        <li><b>Non-O1 Gastroenteritis &amp; Septicemia:</b> Milder watery diarrhea; extraintestinal septicemia in liver disease or hematologic malignancy.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Transport &amp; Culture:</b> Survives poorly in dry/acidic conditions—use <b>Cary-Blair transport medium</b> (not buffered glycerol-saline). Enrich in <b>alkaline peptone broth (pH 8.6)</b> and plate on selective <b>TCBS agar</b> (<i>V. cholerae</i> ferments sucrose &rarr; yellow colonies).</li>
        <li><b>Rapid Tests &amp; NAAT:</b> Multiplex GI NAAT panels are becoming standard; immunoassays detect cholera toxin or O1/O139 LPS in endemic outbreaks; direct stool microscopy shows curved rods early in illness.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Fluid &amp; Electrolyte Replacement (Life-Saving Cornerstone):</b> Immediate aggressive oral or IV rehydration prevents shock and reduces mortality to &lt;1%.</li>
        <li><b>Adjunctive Antibiotics:</b> Single dose of <b>Azithromycin</b> is drug of choice (reduces toxin output and duration); single-dose doxycycline or ciprofloxacin as alternatives if susceptible.</li>
        <li><b>Prevention:</b> Clean water and sewage sanitation; FDA-approved live attenuated oral cholera vaccine (and 3 WHO-approved oral vaccines) provide short-term protection for travelers.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>TCBS Agar (Thiosulfate Citrate Bile Salts Sucrose):</b> Selective/differential agar for <i>Vibrio</i>; sucrose-fermenting <i>V. cholerae</i> forms yellow colonies, while non-fermenting <i>V. parahaemolyticus</i> and <i>V. vulnificus</i> form green colonies.</li>
        <li><b>CTX&Phi; Bacteriophage:</b> Lysogenic phage using TCP as its receptor to integrate cholera toxin genes (<i>ctxA/ctxB</i>) into <i>V. cholerae</i>.</li>
      </ul>
    `
  },
  {
    id: "vibrio_parahaemolyticus",
    name: "Vibrio parahaemolyticus",
    chapter: "Ch. 25: Vibrio and Related Bacteria",
    tags: [
      "Gram-Negative", "Non-Acid-Fast", "Comma-Shaped / Curved Rods",
      "Facultative Anaerobe", "Extracellular", "Non-Spore-Forming",
      "Catalase (+)", "Oxidase (+)", "Motile",
      "Non-Lactose Fermenter", "TCBS Agar", "Halophilic (Salt-Loving)",
      "Cytolytic / Pore-Forming Toxin",
      "Watery Secretory Diarrhea", "Erysipelas / Cellulitis",
      "Fish / Shellfish / Marine Water"
    ],
    triggerWords: [
      "Halophilic Curved Gram-Negative Rod (Requires NaCl Supplement)",
      "Raw / Undercooked Shellfish (Oysters — #1 Vibrio Gastroenteritis in US & #1 Bacterial Gastroenteritis in Japan/SE Asia)",
      "Kanagawa Hemolysin (TDH — Beta-Hemolytic on Human Blood Agar, Not Sheep Blood)",
      "Explosive Self-Limited Watery Diarrhea (5–72 hr Incubation) & Seawater Wound Infections"
    ],
    overview: `
      <p><b>What it is:</b> <i>Vibrio parahaemolyticus</i> is a halophilic ("salt-loving"), oxidase-positive, motile, curved Gram-negative rod that requires supplemental NaCl for growth.</p>
      <p><b>Epidemiology:</b> Found year-round in estuarine/marine waters and shellfish (oysters, clams, mussels), multiplying rapidly when seawater exceeds 15°C. It is the <b>#1 cause of bacterial gastroenteritis in Japan and Southeast Asia</b> and the <b>#1 <i>Vibrio</i> cause of gastroenteritis in the United States</b>.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Thermostable Direct Hemolysin (TDH / Kanagawa Hemolysin):</b> Enterotoxin that increases intracellular calcium in enterocytes to drive chloride ion secretion and watery diarrhea; defines virulent <b>Kanagawa-positive</b> strains (lyses human RBCs but not sheep RBCs).</li>
        <li><b>Adhesins &amp; Type III Secretion Systems:</b> Mediate mucosal survival and virulence factor expression.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Gastroenteritis:</b> 5–72 h incubation (mean 24 h); abrupt <b>explosive watery diarrhea</b> (rarely bloody) with abdominal cramps, nausea, vomiting, headache, and low-grade fever lasting ~3–5 days with uneventful recovery.</li>
        <li><b>Wound Infections &amp; Bacteremia:</b> Occur after exposure of skin wounds to contaminated warm seawater.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Culture &amp; NAAT:</b> Multiplex GI PCR panels rapidly detect <i>V. parahaemolyticus</i>. Grows on <b>TCBS agar</b> (green non-sucrose-fermenting colonies); biochemical test media MUST be supplemented with <b>1% NaCl</b>.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Management:</b> Usually self-limited—manage with <b>fluid and electrolyte replacement</b>; antibiotics (e.g., doxycycline or fluoroquinolone) reserved for severe infections.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Kanagawa Phenomenon:</b> &beta;-hemolysis on human blood agar (not sheep blood) produced by TDH-positive virulent strains of <i>V. parahaemolyticus</i>.</li>
      </ul>
    `
  },
  {
    id: "vibrio_vulnificus",
    name: "Vibrio vulnificus",
    chapter: "Ch. 25: Vibrio and Related Bacteria",
    tags: [
      "Gram-Negative", "Non-Acid-Fast", "Comma-Shaped / Curved Rods",
      "Facultative Anaerobe", "Extracellular", "Non-Spore-Forming",
      "Catalase (+)", "Oxidase (+)", "Motile",
      "Rapid Lactose Fermenter", "TCBS Agar", "Halophilic (Salt-Loving)",
      "Polysaccharide Capsule", "Cytolytic / Pore-Forming Toxin",
      "Necrotizing Fasciitis / Gas Gangrene", "Sepsis / Septic Shock", "Erysipelas / Cellulitis",
      "Fish / Shellfish / Marine Water", "Iron Overload / Cirrhosis Risk"
    ],
    triggerWords: [
      "Responsible for >90% of Vibrio-Related Deaths in the US",
      "Primary Septicemia After Raw Oysters (Up to 50% Mortality — Liver Disease / Cirrhosis / Iron Overload)",
      "Rapidly Progressive Hemorrhagic Bullous Wound Infection / Necrosis After Seawater Exposure (20%–30% Mortality)",
      "Acidic Polysaccharide Capsule & Cytolytic Toxins",
      "Treat Immediately with Doxycycline/Minocycline/Ciprofloxacin + Ceftriaxone/Cefotaxime"
    ],
    overview: `
      <p><b>What it is:</b> <i>Vibrio vulnificus</i> ("inflicting wounds") is an exceptionally virulent halophilic, oxidase-positive, curved Gram-negative rod that causes <b>&gt;90% of all <i>Vibrio</i>-related deaths in the United States</b>.</p>
      <p><b>Epidemiology:</b> Thrives in warm estuarine/marine waters and raw shellfish (especially oysters), peaking during warm summer months. Life-threatening disease strikes patients with <b>hepatic disease (cirrhosis/alcoholism), iron overload/hematopoietic disorders, chronic renal failure, or immunosuppression</b>.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Acidic Polysaccharide Capsule:</b> Strongly antiphagocytic and essential for bloodstream survival and disseminated septicemia.</li>
        <li><b>Gastric Acid Neutralization &amp; Immune Evasion:</b> Rapidly degrades lysine into alkaline byproducts to survive stomach acid; induces macrophage apoptosis.</li>
        <li><b>Cytolysins, Proteases &amp; Collagenase:</b> Secreted enzymes causing rapid hemorrhagic bullae and soft-tissue necrosis.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Primary Septicemia (Raw Oyster Ingestion):</b> Sudden fever, chills, vomiting, diarrhea, abdominal pain, and secondary <b>necrotic hemorrhagic skin lesions</b>—mortality reaches <b>50%</b>, especially in patients with liver disease.</li>
        <li><b>Rapidly Progressive Wound Infection (Seawater Exposure):</b> Initial pain, swelling, and erythema rapidly escalating to <b>vesicles/bullae, severe tissue necrosis, and septicemia</b> (20%–30% mortality).</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Microscopy &amp; Culture:</b> Gram stain of bullous wound aspirate shows curved Gram-negative rods; blood and wound cultures grow on blood, MacConkey (many strains ferment lactose!), and TCBS agar (requires 1% NaCl for biochemical ID).</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Urgent Combination Antibiotics &amp; Debridement:</b> Prompt IV therapy with <b>Minocycline, Doxycycline, or Ciprofloxacin PLUS Ceftriaxone or Cefotaxime</b>, alongside aggressive surgical debridement for necrotic wounds. Patients with liver disease must avoid raw shellfish and warm seawater wound exposure.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Halophilic Vibrios:</b> Marine <i>Vibrio</i> species (<i>V. vulnificus</i>, <i>V. parahaemolyticus</i>) requiring NaCl supplementation for optimal in vitro growth and biochemical testing.</li>
      </ul>
    `
  },
  {
    id: "aeromonas_species",
    name: "Aeromonas species (A. hydrophila, A. caviae, A. veronii biovar sobria)",
    chapter: "Ch. 25: Vibrio and Related Bacteria",
    tags: [
      "Gram-Negative", "Non-Acid-Fast", "Regular / Uniform Rods",
      "Facultative Anaerobe", "Extracellular", "Non-Spore-Forming",
      "Catalase (+)", "Oxidase (+)", "Beta-Hemolytic (Complete)", "Motile",
      "Non-Lactose Fermenter",
      "Watery Secretory Diarrhea", "Inflammatory / Bloody Dysentery", "Erysipelas / Cellulitis", "Sepsis / Septic Shock",
      "Fish / Shellfish / Marine Water", "Iron Overload / Cirrhosis Risk", "Intrinsically Cephalosporin-Resistant"
    ],
    triggerWords: [
      "Fresh & Brackish Water Gram-Negative Rod (Oxidase + & Polar Flagellum)",
      "Medicinal Leech Wound Infections (A. veronii biovar sobria in Leech Gut)",
      "Three Syndromes: Diarrhea (Healthy), Traumatic Water-Exposed Wounds, Systemic Sepsis (Hepatobiliary/Malignancy)",
      "Resistant to Penicillins, Most Cephalosporins & Erythromycin (Treat with Fluoroquinolones)"
    ],
    overview: `
      <p><b>What it is:</b> <i>Aeromonas</i> species (family Aeromonadaceae; main pathogens <i>A. hydrophila, A. caviae, A. veronii</i> biovar <i>sobria</i>) are facultatively anaerobic, fermentative, <b>oxidase-positive Gram-negative rods</b> with polar flagella that are ubiquitous in <b>fresh and brackish water</b>.</p>
      <p><b>Epidemiology:</b> Acquired via ingestion of contaminated water/food or traumatic wound exposure to freshwater. Famously complicates plastic/reconstructive surgery using <b>medicinal leeches (<i>Hirudo medicinalis</i>)</b>, whose guts are colonized with <i>A. veronii</i> biovar <i>sobria</i> to digest blood.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Putative Virulence Factors:</b> Produces endotoxin, hemolysins, proteases, and heat-labile/heat-stable enterotoxins (exact individual roles remain incompletely defined).</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Diarrheal Disease (Healthy Hosts):</b> Ranges from acute watery diarrhea to dysenteric bloody diarrhea with leukocytes, or chronic intermittent diarrhea.</li>
        <li><b>Wound Infections:</b> Traumatic freshwater-exposed wounds or <b>medicinal leech–associated skin-graft infections</b>.</li>
        <li><b>Opportunistic Systemic Sepsis:</b> Bacteremia in immunocompromised hosts, particularly those with <b>hepatobiliary disease</b> or underlying malignancy.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Culture &amp; Differentiation:</b> Grows on blood agar (often &beta;-hemolytic) and MacConkey agar; distinguished from Enterobacterales by a positive <b>cytochrome oxidase</b> spot test and from halophilic <i>Vibrio</i> by growing without NaCl.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Supportive vs. Antibiotic Therapy:</b> Acute diarrhea is self-limited (supportive care only). Chronic diarrhea, wound infections, and systemic disease require antibiotics—<i>Aeromonas</i> is <b>resistant to penicillins, most cephalosporins, and erythromycin</b>; <b>Fluoroquinolones</b> (ciprofloxacin, levofloxacin) are empiric therapy of choice, confirmed by susceptibility testing.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Hirudin &amp; Medicinal Leeches:</b> Leeches secrete thrombin-inhibitor hirudin to keep surgical grafts bleeding while carrying <i>Aeromonas</i> in their gut, risking graft wound infection.</li>
      </ul>
    `
  }
);
