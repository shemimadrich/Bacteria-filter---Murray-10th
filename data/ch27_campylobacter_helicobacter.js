// Chapter 27: Campylobacter and Helicobacter (Rich Study Edition)
// Automatically plugs into window.BACTERIA_DB in index.html

window.BACTERIA_DB.push(
  {
    id: "campylobacter_jejuni",
    name: "Campylobacter jejuni",
    chapter: "Ch. 27: Campylobacter and Helicobacter",
    tags: [
      "Gram-Negative", "Non-Acid-Fast", "Comma-Shaped / Curved Rods", "Gull-Wing / S-Shaped / Helical Rods",
      "Microaerophilic", "Extracellular", "Non-Spore-Forming",
      "Catalase (+)", "Oxidase (+)", "Motile", "Corkscrew / Darting Motility",
      "Thermophilic (42°C)",
      "CAMP Test / Hippurate (+)",
      "Polysaccharide Capsule", "LOS (Lacks O-Antigen)",
      "Inflammatory / Bloody Dysentery", "Pseudoappendicitis", "Osteomyelitis / Septic Arthritis",
      "Poultry / Eggs / Reptiles", "Unpasteurized Dairy / Livestock"
    ],
    triggerWords: [
      "#1 Bacterial Cause of Gastroenteritis in US & Worldwide",
      "Thin Curved / Comma / S-Shaped / Gull-Wing Gram-Negative Rod (Darting Motility)",
      "Microaerophilic (5%–7% O2, 5%–10% CO2) & Thermophilic (Grows Best at 42°C)",
      "Oxidase (+), Catalase (+), Hippurate (+), Asaccharolytic",
      "Contaminated Poultry (>50% of Cases) & Unpasteurized Milk",
      "Guillain-Barré Syndrome (Serotype O:19 LOS Cross-Reacts with Nerve Gangliosides)",
      "Reactive Arthritis (HLA-B27)", "Treat Severe Enteritis with Erythromycin or Azithromycin"
    ],
    overview: `
      <p><b>What it is:</b> <i>Campylobacter jejuni</i> (alongside <i>C. coli</i> in pigs/developing countries and <i>C. upsaliensis</i> in dogs) is a small (0.2–0.5 &times; 0.5–5.0 &mu;m), motile, <b>comma-/S-shaped ("gull-wing") Gram-negative rod</b> that is <b>microaerophilic</b>, <b>thermophilic (42°C)</b>, oxidase-positive, catalase-positive, and unable to ferment or oxidize carbohydrates.</p>
      <p><b>Epidemiology:</b> <b>Zoonotic</b> and the <b>most common cause of bacterial gastroenteritis</b> in developed and developing countries (~1.5 million US cases/year). Over half of cases come from <b>contaminated poultry</b> (also unpasteurized milk or water; milk neutralizes gastric acid and lowers the infectious dose). Peaks in summer, infants/young children, and 20–40 year olds.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Mucosal Invasion:</b> Invades mucosa of the jejunum, ileum, and colon, causing ulcerated, edematous, bloody mucosa with crypt abscesses and neutrophil/eosinophil infiltration.</li>
        <li><b>Lipooligosaccharide (LOS) &amp; Molecular Mimicry:</b> Lacks classic LPS O-antigen; antigenic cross-reactivity between surface LOS (especially serotype <b>O:19</b>) and peripheral nerve gangliosides triggers autoimmune <b>Guillain-Barré syndrome</b> (~1 in 1,000 cases).</li>
        <li><b>Polysaccharide Capsule:</b> Contributes to virulence and serves as a vaccine target.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Acute Enteritis:</b> Diarrhea (&ge;10 stools/day, often grossly bloody), fever, and severe abdominal cramps (can mimic <b>acute appendicitis</b>); usually self-limited (&sim;1 week), though prolonged/severe in hypogammaglobulinemia or AIDS.</li>
        <li><b>Guillain-Barré Syndrome (Autoimmune Complication):</b> Ascending symmetric peripheral motor weakness developing after enteritis (also linked to <i>C. upsaliensis</i>).</li>
        <li><b>Reactive Arthritis:</b> Post-infectious joint pain/swelling (hands, ankles, knees) lasting weeks to months, strongly associated with <b>HLA-B27</b>.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>NAAT &amp; Stool Antigen:</b> Multiplex enteric PCR panels (superior sensitivity to culture) and stool immunoassays (80%–90% sensitive, &gt;95% specific) are widely used.</li>
        <li><b>Selective Culture:</b> Requires a <b>microaerophilic atmosphere</b> (5%–7% O<sub>2</sub>, 5%–10% CO<sub>2</sub>), elevated temperature (<b>42°C</b>), and charcoal/blood antibiotic-selective agar incubated &ge;48 hours (note: antibiotics in selective media may inhibit <i>C. upsaliensis</i>).</li>
        <li><b>Microscopy &amp; ID:</b> Faint thin S-shaped rods on stool Gram stain; presumptive ID by oxidase (+), catalase (+), hippurate (+) (<i>C. jejuni</i>), confirmed by MALDI-TOF MS.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Supportive vs. Macrolides:</b> Usually self-limited (fluid/electrolyte replacement). For severe enteritis, <b>Erythromycin or Azithromycin</b> are drugs of choice (fluoroquinolone resistance is rising; resistant to penicillins, cephalosporins, and sulfonamides). Prevent by thoroughly cooking poultry and avoiding raw milk.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Guillain-Barré Syndrome:</b> Acute autoimmune demyelinating polyneuropathy triggered by molecular mimicry between <i>C. jejuni</i> LOS (e.g., O:19) and host nerve gangliosides.</li>
      </ul>
    `
  },
  {
    id: "campylobacter_fetus",
    name: "Campylobacter fetus",
    chapter: "Ch. 27: Campylobacter and Helicobacter",
    tags: [
      "Gram-Negative", "Non-Acid-Fast", "Comma-Shaped / Curved Rods", "Gull-Wing / S-Shaped / Helical Rods",
      "Microaerophilic", "Extracellular", "Non-Spore-Forming",
      "Catalase (+)", "Oxidase (+)", "Motile", "Corkscrew / Darting Motility",
      "Sepsis / Septic Shock", "Acute Endocarditis", "Community-Acquired Meningitis",
      "Unpasteurized Dairy / Livestock"
    ],
    triggerWords: [
      "Systemic & Intravascular Campylobacter (Bacteremia, Septic Thrombophlebitis, Endocarditis, Meningoencephalitis)",
      "Heat-Stable S-Layer Protein Capsule (Prevents C3b Binding & Serum Killing)",
      "NOT Thermophilic (Does NOT Grow at 42°C — Grows at 25°C/37°C)",
      "Infects Elderly & Immunocompromised (Liver Disease, Diabetes, Alcoholism, Malignancy)"
    ],
    overview: `
      <p><b>What it is:</b> <i>Campylobacter fetus</i> is a microaerophilic, curved Gram-negative rod (reservoirs: <b>cattle and sheep</b>) that differs sharply from <i>C. jejuni</i>: it is <b>NOT thermophilic</b> (cannot grow at 42°C) and causes <b>systemic intravascular infections</b> rather than simple gastroenteritis.</p>
      <p><b>Epidemiology:</b> Uncommon (&lt;250 US cases/year), striking debilitated, elderly, and immunocompromised patients (liver disease, diabetes, alcoholism, malignancy).</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>S-Layer Protein (Heat-Stable Capsule-Like Protein):</b> Prevents complement <b>C3b binding</b> and antibody/complement-mediated serum killing, enabling bloodstream survival and distant seeding (loss of S protein abolishes virulence).</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Intravascular &amp; Extraintestinal Infections:</b> Septicemia, <b>septic thrombophlebitis</b>, endocarditis, meningoencephalitis, septic arthritis, abscesses, and septic abortion (gastroenteritis is less common).</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Blood Culture:</b> Requires microaerophilic incubation at 37°C (will NOT grow on 42°C stool-screening plates); oxidase (+), catalase (+); confirmed by MALDI-TOF MS.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Systemic Therapy:</b> Treated with an <b>aminoglycoside, imipenem, or chloramphenicol</b> (resistant to penicillins and cephalosporins).</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>S Protein (Surface Layer):</b> Heat-stable antiphagocytic/anti-complement protein coat unique to <i>C. fetus</i> that blocks C3b opsonization in serum.</li>
      </ul>
    `
  },
  {
    id: "helicobacter_pylori",
    name: "Helicobacter pylori",
    chapter: "Ch. 27: Campylobacter and Helicobacter",
    tags: [
      "Gram-Negative", "Non-Acid-Fast", "Silver Stain", "Gull-Wing / S-Shaped / Helical Rods",
      "Microaerophilic", "Extracellular", "Non-Spore-Forming",
      "Catalase (+)", "Oxidase (+)", "Urease (+)", "Motile", "Corkscrew / Darting Motility",
      "Slow-Growing (>7 Days)",
      "Urea Breath / Stool Antigen Test",
      "CagA & VacA",
      "Peptic Ulcer / Gastric Cancer"
    ],
    triggerWords: [
      "Spiral Gram-Negative Rod with Corkscrew Motility (Polar Flagella)",
      "Abundant Urease (+) (Neutralizes Gastric Acid with Ammonia → Rapid Biopsy Urease & Urea Breath Test)",
      "Oxidase (+), Catalase (+), Microaerophilic, Asaccharolytic",
      "VacA (Vacuolating Cytotoxin) & CagA (Type VI Secretion Island → IL-8 & Cancer Risk)",
      "Gastritis, 85% Gastric Ulcers, 95% Duodenal Ulcers, Gastric Adenocarcinoma & MALT B-Cell Lymphoma",
      "Warthin-Starry Silver Stain (Biopsy), Stool Antigen Immunoassay & Urea Breath Test",
      "Quadruple Therapy: PPI + Clarithromycin + Amoxicillin + Metronidazole"
    ],
    overview: `
      <p><b>What it is:</b> <i>Helicobacter pylori</i> is a microaerophilic, <b>spiral-shaped Gram-negative rod</b> (0.5–1.0 &times; 2–4 &mu;m; coccoid in older cultures) with polar flagella (<b>corkscrew motility</b>), positive oxidase/catalase tests, and extraordinarily potent <b>urease</b> activity. (Enterohepatic species <i>H. cinaedi</i> and <i>H. fennelliae</i> cause gastroenteritis, proctocolitis, and bacteremia in HIV/immunocompromised hosts.)</p>
      <p><b>Epidemiology:</b> <b>Humans are the primary reservoir</b>; transmitted fecal-orally and persists for life unless treated. Colonizes 70%–90% of populations in developing countries (before age 10) vs. &lt;40% in the US; present in 70%–100% of patients with gastritis or peptic ulcers. Interestingly, colonization may protect against GERD and esophageal/gastric cardia adenocarcinoma.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Gastric Acid Survival:</b> Produces an <b>acid-inhibitory protein</b> (blocks parietal cell acid secretion) and abundant <b>urease</b> (hydrolyzes urea to ammonia, creating a neutral pH cloud), while corkscrew motility propels it through gastric mucus to adhere to epithelium.</li>
        <li><b>VacA (Vacuolating Cytotoxin A):</b> Penetrates gastric epithelial cells and induces destructive cytoplasmic vacuole formation (assisted by urease byproducts, mucinase, and phospholipases).</li>
        <li><b>CagA (Cytotoxin-Associated Gene on <i>cag</i> Pathogenicity Island):</b> Injected via a secretion syringe into epithelial cells, disrupting cytoskeleton and stimulating <b>IL-8</b> neutrophil recruitment—strongly associated with peptic ulcers and gastric cancer.</li>
        <li><b>Immune Evasion:</b> Low-endotoxin lipid A; O-side chain mimics <b>Lewis blood group antigens</b>; catalase and superoxide dismutase resist phagocytic killing.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Acute &amp; Chronic Gastritis:</b> Fullness, nausea, vomiting, hypochlorhydria progressing to chronic antral gastritis or pangastritis.</li>
        <li><b>Peptic Ulcer Disease:</b> Develops in 10%–15% of chronic gastritis patients; causes <b>85% of gastric ulcers</b> and <b>95% of duodenal ulcers</b>.</li>
        <li><b>Gastric Malignancies:</b> Increases risk of <b>gastric adenocarcinoma</b> nearly 100-fold (chronic fibrosis/intestinal metaplasia) and triggers clonal B-cell proliferation leading to <b>gastric MALT B-cell lymphoma</b>.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Noninvasive Tests (Preferred for Routine Diagnosis &amp; Test-of-Cure):</b>
          <ul class="list-circle pl-5 mt-1 space-y-1">
            <li><b>Stool Antigen Immunoassay:</b> &gt;95% sensitive/specific, inexpensive; recommended for both initial diagnosis and confirming cure after antibiotics.</li>
            <li><b>Urea Breath Test:</b> Noninvasive detection of isotopically labeled CO<sub>2</sub> after ingesting labeled urea; excellent sensitivity/specificity.</li>
          </ul>
        </li>
        <li><b>Invasive Gastric Biopsy Tests:</b> <b>Warthin-Starry silver stain</b> (most sensitive histology, ~100% specific) and rapid <b>biopsy urease test</b> (&lt;2 h, ~100% specific). Culture (microaerophilic enriched media up to 2 weeks) is reserved for antibiotic susceptibility testing.</li>
        <li><b>Serology Limitation:</b> IgG/IgA titers persist for years and <b>cannot distinguish active infection from past exposure</b>.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Multi-Drug Eradication Regimen (Never Monotherapy!):</b> Combination of a <b>proton pump inhibitor (e.g., omeprazole) + macrolide (clarithromycin) + &beta;-lactam (amoxicillin) + metronidazole</b> for 7–10+ days. Treatment failure is most commonly due to <b>clarithromycin resistance</b> (perform culture/susceptibility if therapy fails).</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Warthin-Starry Silver Stain:</b> Histologic silver stain offering the highest microscopic sensitivity for visualizing spiral <i>H. pylori</i> on gastric biopsy specimens.</li>
        <li><b>MALT Lymphoma:</b> Mucosa-associated lymphoid tissue B-cell lymphoma of the stomach driven by chronic <i>H. pylori</i> antigenic stimulation.</li>
      </ul>
    `
  }
);