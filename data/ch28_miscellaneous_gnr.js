// Chapter 28: Miscellaneous Gram-Negative Rods (Rich Study Edition)
// Automatically plugs into window.BACTERIA_DB in index.html

window.BACTERIA_DB.push(
  {
    id: "bartonella_henselae",
    name: "Bartonella henselae",
    chapter: "Ch. 28: Miscellaneous Gram-Negative Rods",
    tags: [
      "Gram-Negative", "Non-Acid-Fast", "Silver Stain", "Coccobacilli / Tiny Pleomorphic Rods",
      "Obligate Aerobe", "Facultative Intracellular", "Non-Spore-Forming",
      "Slow-Growing (>7 Days)",
      "Bacillary Angiomatosis", "Subacute / Culture-Negative Endocarditis", "Sepsis / Septic Shock",
      "Cat / Dog Bite or Scratch", "Flea (Xenopsylla)"
    ],
    triggerWords: [
      "Cat-Scratch Disease (Benign Chronic Regional Lymphadenopathy in Children)",
      "Bacillary Angiomatosis (Blood-Filled Vascular Skin Nodules in HIV/AIDS)",
      "Peliosis Hepatis & Splenic Peliosis (Liver/Spleen Blood-Filled Cysts)",
      "Reservoirs: Cats (Oropharynx/Claws) & Cat Fleas",
      "Fastidious Slow-Growing GNR (2–6 Weeks); Serology for Cat-Scratch Disease",
      "Treat with Azithromycin, Erythromycin, or Doxycycline"
    ],
    overview: `
      <p><b>What it is:</b> <i>Bartonella henselae</i> is a short (0.2–0.6 &times; 0.5–1.0 &mu;m), fastidious, slow-growing Gram-negative coccobacillus/rod requiring 2–6 weeks of incubation in culture.</p>
      <p><b>Epidemiology:</b> Natural reservoirs are <b>cats</b> (asymptomatic oropharyngeal carriage and transient bacteremia, especially in kittens/feral cats) and <b>cat fleas</b>. Spread to humans via cat scratches, bites, or contact with contaminated flea feces.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Endothelial Angioproliferation:</b> Stimulates endothelial cell proliferation in immunocompromised hosts, producing blood-filled vascular cysts (bacillary angiomatosis, peliosis hepatis).</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Cat-Scratch Disease (Immunocompetent Children):</b> Benign, usually self-limited <b>chronic regional lymphadenopathy</b> draining the scratch/bite site (rarely disseminates to liver, spleen, eye, or CNS).</li>
        <li><b>Bacillary Angiomatosis &amp; Peliosis Hepatis (HIV/AIDS):</b> Angioproliferative blood-filled nodules of the skin, lymph nodes, <b>liver (peliosis hepatis)</b>, or <b>spleen (splenic peliosis)</b>, plus chronic recurrent febrile bacteremia.</li>
        <li><b>Subacute Culture-Negative Endocarditis:</b> Insidious endocarditis in exposed patients.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Cat-Scratch Disease:</b> Definitive diagnosis is clinical presentation + <b>serology</b> (cultures are virtually always negative due to vigorous cellular immunity; bacilli may be seen on silver-stained lymph node tissue).</li>
        <li><b>Immunocompromised Bacteremia:</b> Isolatable from blood cultures ONLY if incubated <b>&ge;4 weeks</b>.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Antimicrobials:</b> <b>Azithromycin</b> (recommended if cat-scratch disease is treated); oral <b>erythromycin, doxycycline, or azithromycin</b> for bacillary angiomatosis/systemic disease. Avoid penicillinase-resistant penicillins, 1st-gen cephalosporins, and clindamycin.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Peliosis Hepatis:</b> Blood-filled cystic vascular lesions of the liver caused by <i>B. henselae</i> in immunocompromised hosts.</li>
      </ul>
    `
  },
  {
    id: "bartonella_quintana",
    name: "Bartonella quintana",
    chapter: "Ch. 28: Miscellaneous Gram-Negative Rods",
    tags: [
      "Gram-Negative", "Non-Acid-Fast", "Coccobacilli / Tiny Pleomorphic Rods",
      "Obligate Aerobe", "Facultative Intracellular", "Non-Spore-Forming",
      "Slow-Growing (>7 Days)",
      "Relapsing / Undulant Fever", "Bacillary Angiomatosis", "Subacute / Culture-Negative Endocarditis", "Sepsis / Septic Shock",
      "Body Louse (Pediculus)"
    ],
    triggerWords: [
      "Trench Fever ('5-Day' Relapsing Fever + Shin/Tibia Bone Pain)",
      "Vector: Human Body Louse (No Animal Reservoir — Homeless / Substandard Hygiene)",
      "Bacillary Angiomatosis (Skin, Subcutaneous, Bone) & Subacute Endocarditis",
      "Treat with Doxycycline + Gentamicin"
    ],
    overview: `
      <p><b>What it is:</b> <i>Bartonella quintana</i> ("fifth" — referring to 5-day fever) is a fastidious, slow-growing Gram-negative rod historically famous as the cause of World War I <b>trench fever</b>.</p>
      <p><b>Epidemiology:</b> <b>No animal reservoir</b>; transmitted person-to-person via contaminated feces of the <b>human body louse (<i>Pediculus</i>)</b>, primarily affecting homeless populations and settings with substandard hygiene.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Persistent Bacteremia &amp; Vascular Proliferation:</b> Persists in erythrocytes/bloodstream causing relapsing fevers and triggers angioproliferative lesions in skin, subcutaneous tissues, and bone.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Trench Fever ("5-Day Fever"):</b> Severe headache, weakness, <b>long-bone pain (especially tibia)</b>, and fever recurring at 5-day intervals (nonfatal but debilitating).</li>
        <li><b>HIV / Homeless Syndromes:</b> Insidious recurrent febrile bacteremia, <b>subacute endocarditis</b>, and <b>bacillary angiomatosis</b> (blood-filled vascular nodules of skin, subcutaneous tissue, or bone).</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Blood Culture &amp; Serology/PCR:</b> Slow-growing in blood cultures (2–6 weeks); serology and PCR assist diagnosis.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Recommended Regimen:</b> <b>Doxycycline combined with Gentamicin</b> is most commonly used for <i>B. quintana</i> infections (bacteremia/endocarditis).</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Trench Fever:</b> Louse-borne 5-day relapsing febrile illness with severe tibial pain caused by <i>B. quintana</i>.</li>
      </ul>
    `
  },
  {
    id: "bartonella_bacilliformis",
    name: "Bartonella bacilliformis",
    chapter: "Ch. 28: Miscellaneous Gram-Negative Rods",
    tags: [
      "Gram-Negative", "Non-Acid-Fast", "Coccobacilli / Tiny Pleomorphic Rods",
      "Obligate Aerobe", "Facultative Intracellular", "Non-Spore-Forming",
      "Motile",
      "Slow-Growing (>7 Days)",
      "Bacillary Angiomatosis", "Sepsis / Septic Shock"
    ],
    triggerWords: [
      "Carrión Disease (Biphasic: Acute Oroya Fever → Chronic Verruga Peruana)",
      "Oroya Fever: Acute Hemolytic Bacteremia & Severe Anemia (Penetrates RBCs)",
      "Verruga Peruana ('Peruvian Wart' — Blood-Filled Angioproliferative Skin Nodules)",
      "Endemic to Andes Mountains (Peru, Ecuador, Colombia) — Sandfly Vector (Phlebotomus)",
      "Treat with Azithromycin (Secondary: Erythromycin, Ciprofloxacin, Rifampicin)"
    ],
    overview: `
      <p><b>What it is:</b> <i>Bartonella bacilliformis</i> is a fastidious Gram-negative rod restricted to the <b>Andes Mountains of Peru, Ecuador, and Colombia</b>, matching the distribution of its <b><i>Phlebotomus</i> sandfly vector</b>.</p>
      <p><b>Historical Note:</b> Medical student Daniel Carrión proved that Oroya fever and verruga peruana were two stages of the same disease by inoculating himself with wart aspirate—and dying of Oroya fever.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Erythrocyte &amp; Endothelial Invasion:</b> Penetrates RBCs (increasing fragility and reticuloendothelial destruction &rarr; severe hemolytic anemia) and vascular endothelial cells (driving chronic angioproliferative skin nodules).</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Carrión Disease (Two Stages):</b>
          <ul class="list-circle pl-5 mt-1 space-y-1">
            <li><b>Acute Stage (Oroya Fever):</b> High-mortality acute hemolytic bacteremia with fever, severe anemia, myalgia, arthralgia, and headache.</li>
            <li><b>Chronic Stage (Verruga Peruana / "Peruvian Wart"):</b> 1–2 cm blood-engorged angioproliferative cutaneous nodules appearing over 1–2 months and persisting months to years.</li>
          </ul>
        </li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Blood Smear &amp; Culture:</b> Bacilli visible inside erythrocytes during acute Oroya fever; slow-growing in specialized culture (2–6 weeks).</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Recommended Therapy:</b> High untreated mortality warrants prompt treatment with <b>Azithromycin</b> (secondary options: erythromycin, ciprofloxacin, or rifampicin).</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Oroya Fever &amp; Verruga Peruana:</b> The acute hemolytic bacteremic phase and chronic vascular skin-nodule phase of <i>B. bacilliformis</i> Carrión disease.</li>
      </ul>
    `
  },
  {
    id: "bordetella_pertussis",
    name: "Bordetella pertussis",
    chapter: "Ch. 28: Miscellaneous Gram-Negative Rods",
    tags: [
      "Gram-Negative", "Non-Acid-Fast", "Coccobacilli / Tiny Pleomorphic Rods",
      "Obligate Aerobe", "Extracellular", "Non-Spore-Forming",
      "Catalase (+)", "Oxidase (+)", "Non-Motile",
      "Bordet-Gengou / Regan-Lowe Agar",
      "AB Toxin: Increases cAMP",
      "Paroxysmal Whooping Cough"
    ],
    triggerWords: [
      "Tiny Strictly Aerobic Gram-Negative Coccobacillus",
      "Humans Are the ONLY Reservoir (No Animal Reservoir)",
      "Pertussis Toxin (Increases cAMP → Respiratory Secretions & Marked Lymphocytosis)",
      "Tracheal Cytotoxin (Paralyzes Cilia) + Pertactin & Filamentous Hemagglutinin Adhesins",
      "Three Stages: Catarrhal (Most Contagious!) → Paroxysmal (Whooping Cough + Vomiting) → Convalescent",
      "NAAT / PCR Is Diagnostic Test of Choice (Culture on Regan-Lowe/Bordet-Gengou Insensitive)",
      "Treat & Prophylax with Azithromycin (Macrolides); Acellular Vaccine (DTaP / Tdap)"
    ],
    overview: `
      <p><b>What it is:</b> <i>Bordetella pertussis</i> is an extremely small (0.2–0.5 &times; 1 &mu;m), <b>strictly aerobic Gram-negative coccobacillus</b> causing <b>pertussis (whooping cough)</b>. (Related species: <i>B. parapertussis</i> causes 10%–20% of mild pertussis; <i>B. bronchiseptica</i> infects animals/occasional humans; <i>B. holmesii</i> causes septicemia.)</p>
      <p><b>Epidemiology:</b> <b>Strictly human disease</b> (no animal/environmental reservoir) spread via infectious aerosols (~150,000 global cases; &gt;2,000 US cases in 2021). Now increasingly recognized in adolescents and adults with waning immunity (often presenting as chronic persistent cough without classic whoop).</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Adhesins:</b> <b>Pertactin, filamentous hemagglutinin (FHA), and fimbriae</b> bind ciliated respiratory epithelial cells.</li>
        <li><b>Pertussis Toxin (Systemic Toxicity):</b> Classic A-B toxin that inactivates G<sub>i</sub> (the inhibitory regulator of adenylate cyclase), raising intracellular <b>cAMP</b> &rarr; excessive respiratory secretions/mucus and hallmark <b>marked lymphocytosis</b>.</li>
        <li><b>Tracheal Cytotoxin &amp; Dermonecrotic Toxin:</b> Tracheal cytotoxin inhibits cilia movement and extrudes ciliated cells (impairing mucus clearance &rarr; paroxysmal cough); dermonecrotic toxin causes localized tissue ischemia.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Pertussis (3 Classic Stages After 7–10 Day Incubation):</b>
          <ul class="list-circle pl-5 mt-1 space-y-1">
            <li><b>1. Catarrhal Stage (1–2 Weeks):</b> Common-cold symptoms (rhinorrhea, sneezing, malaise, low-grade fever); <b>peak bacterial numbers — highest contagiousness!</b></li>
            <li><b>2. Paroxysmal Stage (2–4 Weeks):</b> 40–50 daily bursts of repetitive coughs ending in an <b>inspiratory whoop</b>, post-tussive vomiting, exhaustion, and <b>marked lymphocytosis</b>.</li>
            <li><b>3. Convalescent Stage (3–4+ Weeks):</b> Diminishing paroxysms, but risk of secondary complications (pneumonia, seizures, encephalopathy).</li>
          </ul>
        </li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>NAAT / PCR (Diagnostic Test of Choice):</b> Far more sensitive and specific than culture or microscopy (Gram stain should NOT be performed—too tiny/insensitive).</li>
        <li><b>Culture Limitations:</b> Extremely sensitive to drying and toxic media metabolites; requires nasopharyngeal aspirate plated immediately onto freshly prepared <b>Regan-Lowe charcoal</b> or <b>Bordet-Gengou</b> agar (&lt;50% sensitive).</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Supportive Care &amp; Macrolides:</b> Supportive nursing care during paroxysms. <b>Azithromycin</b> is drug of choice (eliminates bacteria and reduces infectivity, especially early; TMP-SMX or fluoroquinolones if macrolide-intolerant). Postexposure prophylaxis with azithromycin within 21 days for high-risk contacts.</li>
        <li><b>Acellular Vaccines (DTaP / Tdap):</b> Contain inactivated pertussis toxin, FHA, and pertactin; pediatric series at 2, 4, 6, 15–18 months, and 4–6 years; adult Tdap booster at 11–12 years and once at 19–65 years.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Regan-Lowe Agar:</b> Charcoal-supplemented selective medium that absorbs toxic fatty acids/metabolites to isolate <i>B. pertussis</i>.</li>
      </ul>
    `
  },
  {
    id: "brucella_species",
    name: "Brucella species (B. melitensis, B. abortus, B. suis, B. canis)",
    chapter: "Ch. 28: Miscellaneous Gram-Negative Rods",
    tags: [
      "Gram-Negative", "Non-Acid-Fast", "Coccobacilli / Tiny Pleomorphic Rods",
      "Obligate Aerobe", "Capnophilic (Requires CO2)", "Facultative Intracellular", "Non-Spore-Forming",
      "Catalase (+)", "Oxidase (+)", "Urease (+)", "Non-Motile",
      "Slow-Growing (>7 Days)",
      "Relapsing / Undulant Fever", "Sepsis / Septic Shock", "Osteomyelitis / Septic Arthritis",
      "Unpasteurized Dairy / Livestock"
    ],
    triggerWords: [
      "Undulant Fever / Brucellosis / Bang Disease / Malta Fever",
      "Small Strictly Aerobic, Non-Motile, Oxidase (+) & Urease (+) Gram-Negative Coccobacilli",
      "Zoonotic Reservoirs: B. melitensis (Goats/Sheep — Most Common & Severe), B. abortus (Cattle), B. suis (Swine), B. canis (Dogs)",
      "Unpasteurized Milk/Dairy, Animal Birth Products (Erythritol Tropism) & Lab Aerosol Hazard",
      "Intracellular Parasite of Reticuloendothelial System (Granulomas in Liver, Spleen, Bone Marrow)",
      "Blood Cultures Incubate ≥2 Weeks; Serology (≥4-Fold Rise or Single Titer ≥1:160)",
      "WHO Regimen: Doxycycline + Rifampin for ≥6 Weeks (TMP-SMX in Pregnant Women & Children <8)"
    ],
    overview: `
      <p><b>What it is:</b> <i>Brucella</i> species (4 human pathogens: <i>B. melitensis</i> [goats/sheep — most common/severe], <i>B. abortus</i> [cattle/bison], <i>B. suis</i> [swine/reindeer], <i>B. canis</i> [dogs/foxes]) are small (0.5 &times; 0.6–1.5 &mu;m), nonmotile, nonencapsulated, strictly aerobic, non-fermenting, oxidase- and urease-positive <b>Gram-negative coccobacilli</b>.</p>
      <p><b>Epidemiology:</b> Worldwide zoonosis (&gt;500,000 cases/year globally; 80–120/year in US, highest in CA/TX from Mexican unpasteurized dairy). Acquired via ingestion of <b>unpasteurized milk/cheese</b>, direct contact with animal tissues/placentas, or inhalation (major <b>laboratory-acquired infection</b> and bioterrorism risk).</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Intracellular Reticuloendothelial Parasite:</b> Survives and replicates inside macrophages/monocytes, carried to the <b>spleen, liver, bone marrow, lymph nodes, and kidneys</b> where secreted proteins induce destructive granulomas.</li>
        <li><b>Smooth LPS O-Chain &amp; Erythritol Tropism:</b> No exotoxin; smooth LPS O-chain is essential for virulence. Animal placenta/breast/uterus tissues are rich in <b>erythritol</b> (causing animal abortion and massive shedding in milk/birth products).</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Acute Brucellosis ("Undulant Fever"):</b> 1–3 weeks post-exposure; malaise, chills, sweats, fatigue, weight loss, myalgias, arthralgias, nonproductive cough, and classic <b>intermittent (undulant) fever</b>. <i>B. melitensis</i> and <i>B. suis</i> cause severe destructive disease; <i>B. abortus</i> and <i>B. canis</i> are milder.</li>
        <li><b>Advanced &amp; Relapsing Disease:</b> Osteolytic bone/joint lesions, GI/respiratory/CNS/cardiac involvement; relapses occur 3–6 months after inadequate therapy due to persistent intracellular foci (not drug resistance).</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Culture (Notify Lab — Aerosol Hazard!):</b> Slow-growing; enriched blood agars require &ge;3 days and <b>blood cultures must be incubated for 2 weeks</b> before calling negative. Oxidase (+), <b>urease (+)</b>, nonmotile; 16S rRNA sequencing confirms genus.</li>
        <li><b>Serology:</b> Presumptive diagnosis by <b>&ge;4-fold titer rise</b> or <b>single titer &ge;1:160</b>.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>WHO Combination Therapy (&ge;6 Weeks):</b> <b>Doxycycline + Rifampin</b> (monotherapy leads to relapse). For <b>pregnant women and children &lt;8 years</b>, substitute <b>TMP-SMX</b> for doxycycline.</li>
        <li><b>Prevention:</b> Pasteurize dairy, vaccinate livestock (<i>B. abortus</i> RB51), and use biosafety cabinets in labs (no human vaccine).</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Erythritol Tropism:</b> Sugar alcohol abundant in animal (not human) placenta and mammary glands preferentially metabolized by <i>Brucella</i>.</li>
      </ul>
    `
  },
  {
    id: "cardiobacterium_hominis",
    name: "Cardiobacterium hominis",
    chapter: "Ch. 28: Miscellaneous Gram-Negative Rods",
    tags: [
      "Gram-Negative", "Gram-Variable / Poorly Staining", "Non-Acid-Fast", "Coccobacilli / Tiny Pleomorphic Rods",
      "Facultative Anaerobe", "Capnophilic (Requires CO2)", "Extracellular", "Non-Spore-Forming",
      "Catalase (-)", "Oxidase (+)", "Non-Motile",
      "Indole (+)",
      "Subacute / Culture-Negative Endocarditis",
      "Dental Procedures / Intravascular Catheters"
    ],
    triggerWords: [
      "HACEK Subacute Endocarditis ('Small Rod of the Hearts of Males')",
      "Preexisting Heart Disease + Oral Disease / Dental Procedure",
      "Pleomorphic Gram-Negative / Gram-Variable Rods — Oxidase (+), Catalase (-), Indole (+)",
      "Slow-Growing in Blood Cultures (≥1 Week); Does NOT Grow on MacConkey Agar",
      "Treat with Ceftriaxone (2–6 Weeks); Avoid Erythromycin (Commonly Resistant)"
    ],
    overview: `
      <p><b>What it is:</b> <i>Cardiobacterium hominis</i> (and related <i>C. valvarum</i>; the "C" in <b>HACEK</b>) is a small (1 &times; 1–2 &mu;m), pleomorphic, nonmotile, facultatively anaerobic, fermentative, <b>oxidase-positive, catalase-negative Gram-negative/Gram-variable rod</b>.</p>
      <p><b>Epidemiology:</b> Normal upper respiratory/oral commensal in most healthy people; enters the bloodstream during dental procedures or oral disease to colonize damaged heart valves.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Low-Virulence Valve Adherence:</b> Slowly multiplies on damaged cardiac endothelium, producing insidious subacute vegetations with rare systemic complications.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Subacute Bacterial Endocarditis:</b> Insidious onset of fatigue, malaise, anorexia, and low-grade fever over months in patients with preexisting heart disease and prior oral disease or dental extraction.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Blood Culture (Slow Growth):</b> Requires <b>&ge;1 week</b> in blood culture bottles; forms 1-mm pinpoint colonies on blood/chocolate agar in enhanced CO<sub>2</sub> and humidity after &ge;2 days; <b>does NOT grow on MacConkey agar</b>. Oxidase (+), catalase (-), indole (+).</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Therapy &amp; Prophylaxis:</b> <b>Ceftriaxone</b> for 2–6 weeks is recommended (complete recovery is common). Dental prophylaxis with long-acting penicillin in high-risk heart patients; <b>do NOT use erythromycin</b> (commonly resistant).</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Cardiobacterium valvarum:</b> Related HACEK species also causing subacute endocarditis following dental procedures.</li>
      </ul>
    `
  },
  {
    id: "francisella_tularensis",
    name: "Francisella tularensis",
    chapter: "Ch. 28: Miscellaneous Gram-Negative Rods",
    tags: [
      "Gram-Negative", "Gram-Variable / Poorly Staining", "Non-Acid-Fast", "Coccobacilli / Tiny Pleomorphic Rods",
      "Obligate Aerobe", "Facultative Intracellular", "Non-Spore-Forming",
      "Oxidase (-)", "Non-Motile",
      "BCYE Agar (Cysteine & Iron)",
      "Polysaccharide Capsule",
      "Cutaneous Eschar / Ulcer", "Typical Lobar Pneumonia", "Sepsis / Septic Shock",
      "Hard Tick (Ixodes / Dermacentor / Amblyomma)", "Rabbits / Rodents", "Cat / Dog Bite or Scratch"
    ],
    triggerWords: [
      "Tularemia (Rabbit Fever / Tick Fever / Deerfly Fever)",
      "Tiny Faintly Staining Strictly Aerobic Gram-Negative Coccobacillus",
      "Requires Cysteine for Growth (Grows on BCYE & Chocolate Agar — NOT Blood Agar)",
      "Type A (North America — Rabbits/Ticks/Cats — Severe) vs. Type B (Northern Hemisphere — Rodents/Waterways)",
      "Ulceroglandular (Most Common), Oculoglandular, Pneumonic & Typhoidal Forms",
      "Extreme Biohazard (Penetrates Unbroken Skin & Aerosols — Use Biohazard Hood!)",
      "Drug of Choice: Gentamicin (Beta-Lactamase + → Penicillins/Cephalosporins Ineffective!)"
    ],
    overview: `
      <p><b>What it is:</b> <i>Francisella tularensis</i> is a tiny (0.2 &times; 0.2–0.7 &mu;m), faintly staining, nonmotile, strictly aerobic <b>Gram-negative coccobacillus</b> requiring <b>cysteine</b> for growth. Two major subspecies: <b>subsp. <i>tularensis</i> (Type A</b> — North America, most virulent, especially Type A-east) and <b>subsp. <i>holarctica</i> (Type B</b> — Northern Hemisphere).</p>
      <p><b>Epidemiology (Zoonotic):</b> Infects &gt;200 mammals and arthropods. Type A associates with <b>rabbits/hares, cats, hard ticks (<i>Ixodes, Dermacentor, Amblyomma</i>), and deerflies</b>; Type B with <b>rodents, cats, and waterways</b> (~150 US cases/year, peaking in summer). High risk for hunters, lab workers, and as an aerosol bioweapon.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Facultative Intracellular Pathogen:</b> Inhibits phagosome-lysosome fusion and escapes into the cytosol of macrophages, neutrophils, and epithelial/endothelial cells (clearance requires T-cell–mediated IFN-&gamma;/TNF activation).</li>
        <li><b>Antiphagocytic Polysaccharide-Rich Capsule:</b> Protects against complement-mediated killing during bacteremia; endotoxin is relatively weak.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Ulceroglandular Tularemia (Most Common):</b> Painful papule at tick bite or inoculation site (e.g., rabbit skinning/cat bite) progressing to a <b>necrotic ulcer with raised border + regional lymphadenopathy</b>.</li>
        <li><b>Oculoglandular Tularemia:</b> Direct eye contamination &rarr; painful conjunctivitis + preauricular/cervical lymphadenopathy.</li>
        <li><b>Pneumonic &amp; Typhoidal Tularemia:</b> Aerosol inhalation causes high-mortality pneumonia with sepsis (bioweapon threat); also glandular and oropharyngeal/GI forms.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Extreme Laboratory Biohazard:</b> Can penetrate unbroken skin/mucosa and infect via aerosols—wear gloves and perform ALL work in a <b>biohazard hood</b>!</li>
        <li><b>Culture &amp; Serology:</b> Gram stain almost always fails. Slow-growing (&ge;3 days; blood cultures &ge;1 week) on cysteine-containing <b>chocolate agar or BCYE agar</b> (NOT sheep blood agar). Most cases are diagnosed by <b>serology</b> (&ge;4-fold titer rise or single titer &ge;1:160).</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Drug of Choice:</b> <b>Gentamicin</b> (reduces mortality to &lt;1%); <b>doxycycline or ciprofloxacin</b> for mild disease. Produces <b>&beta;-lactamase</b>, rendering <b>penicillins and cephalosporins ineffective!</b></li>
        <li><b>Prevention:</b> Wear gloves when handling wild rabbits, promptly remove ticks (organism is in tick feces, requiring prolonged feeding), and use prophylactic antibiotics after high-risk aerosol exposure. No licensed vaccine exists.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Ulceroglandular Tularemia:</b> Most common clinical presentation of <i>F. tularensis</i>: necrotic cutaneous ulcer at the bite/inoculation site paired with swollen regional lymph nodes.</li>
      </ul>
    `
  },
  {
    id: "legionella_pneumophila",
    name: "Legionella pneumophila",
    chapter: "Ch. 28: Miscellaneous Gram-Negative Rods",
    tags: [
      "Gram-Negative", "Gram-Variable / Poorly Staining", "Non-Acid-Fast", "Silver Stain", "Coccobacilli / Tiny Pleomorphic Rods",
      "Obligate Aerobe", "Facultative Intracellular", "Non-Spore-Forming",
      "Catalase (+)", "Oxidase (+)", "Motile",
      "BCYE Agar (Cysteine & Iron)",
      "Urinary Antigen Test (+)",
      "Atypical Walking Pneumonia", "Typical Lobar Pneumonia",
      "Cooling Towers / Showers / AC", "Hot Tubs / Burn Wounds / Contact Lenses", "Intrinsically Cephalosporin-Resistant"
    ],
    triggerWords: [
      "Atypical Severe Pneumonia (Legionnaires Disease) & Self-Limited Pontiac Fever",
      "Slender Pleomorphic Poorly Staining Gram-Negative Rod (Dieterle Silver Stain in Tissue)",
      "Requires L-Cysteine & Iron Salts — Grows ONLY on BCYE Agar (Not Blood/Chocolate)",
      "Urinary Antigen Test (Detects Serogroup 1 — 80%–90% of Community Cases) & Respiratory NAAT",
      "Aquatic Aerosols (AC Cooling Towers, Showers, Hot Tubs, Water Misters — Survives in Amebae & Biofilms)",
      "No Person-to-Person Transmission; Multiorgan Involvement (GI, CNS, Liver, Kidney)",
      "Treat with Macrolide (Azithromycin) or Fluoroquinolone (Levofloxacin) — Beta-Lactams Ineffective!"
    ],
    overview: `
      <p><b>What it is:</b> <i>Legionella pneumophila</i> (causes 90% of legionellosis; serogroups 1 and 6 most common) is a slender, pleomorphic, strictly aerobic, poorly Gram-staining rod that derives energy from amino acids (not carbohydrates) and strictly requires <b>L-cysteine and iron</b> for growth.</p>
      <p><b>Epidemiology:</b> Ubiquitous aquatic saprophyte thriving inside free-living water amebae and pipe biofilms—surviving warmth and chlorination in <b>air-conditioning cooling towers, showerheads, hot tubs, and water misters</b>. Transmitted by inhaling contaminated aerosols (<b>no person-to-person spread</b>); peaks in late summer/autumn, mostly in adults &ge;40 years, smokers, and hospitalized/immunocompromised hosts (~9,000–18,000 US cases/year).</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Facultative Intracellular Macrophage Pathogen:</b> Binds C3b &rarr; enters alveolar macrophages via CR3 receptors, <b>inhibits phagolysosome fusion</b> (avoiding oxidative killing), replicates in vacuoles, and secretes proteases/lipases/nucleases that lyse host cells.</li>
        <li><b>Cell-Mediated Clearance:</b> Requires TH1-derived <b>IFN-&gamma;</b> to activate parasitized macrophages.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Legionnaires Disease (Legionellosis):</b> 2–10 day incubation; abrupt high fever, chills, dry nonproductive cough, headache, <b>multilobar necrotizing pneumonia</b>, and prominent <b>multiorgan involvement (GI diarrhea, CNS confusion, liver, kidneys)</b>. Untreated mortality 15% (healthy) to 75% (immunocompromised).</li>
        <li><b>Pontiac Fever:</b> Self-limited, non-pneumonic flu-like febrile illness (12 h onset, resolves in 2–5 days without antibiotics); thought to be a hypersensitivity reaction to bacterial endotoxin.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Urinary Antigen Immunoassay:</b> Rapid, sensitive (~90%) detection of soluble <b>serogroup 1 LPS</b> in urine (covers 80%–90% of community cases, but &lt;50% of hospital cases; remains positive for weeks/months after therapy).</li>
        <li><b>NAAT &amp; Culture (Gold Standard):</b> Respiratory PCR equals culture sensitivity. Culture requires <b>BCYE agar (L-cysteine + iron salts)</b> for 3–5 days (small ground-glass colonies; no growth on blood/chocolate agar). Gram stain is typically negative; tissue visualization uses <b>Dieterle silver stain</b>.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Intracellular-Active Drugs Required:</b> <b>Macrolides (Azithromycin, Clarithromycin)</b> or <b>Fluoroquinolones (Levofloxacin, Ciprofloxacin)</b>. <b>&beta;-Lactams (penicillins/cephalosporins) are INEFFECTIVE</b> (&beta;-lactamase production + poor macrophage penetration). Pontiac fever needs no antibiotics.</li>
        <li><b>Prevention:</b> Hospital water monitoring, superheating/hyperchlorination, or continuous copper-silver ionization.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>BCYE Agar (Buffered Charcoal Yeast Extract):</b> L-cysteine– and iron-enriched agar required to isolate <i>Legionella</i> (also grows <i>Francisella</i> and <i>Nocardia</i>).</li>
        <li><b>Pontiac Fever:</b> Acute self-limited, non-pneumonic febrile syndrome caused by <i>L. pneumophila</i> hypersensitivity.</li>
      </ul>
    `
  },
  {
    id: "streptobacillus_moniliformis",
    name: "Streptobacillus moniliformis",
    chapter: "Ch. 28: Miscellaneous Gram-Negative Rods",
    tags: [
      "Gram-Negative", "Gram-Variable / Poorly Staining", "Non-Acid-Fast", "Fusiform / Spindle-Shaped Rods", "Coccobacilli / Tiny Pleomorphic Rods",
      "Facultative Anaerobe", "Extracellular", "Non-Spore-Forming",
      "Non-Motile",
      "Eaton Agar (Fried-Egg Colonies)",
      "Rash on Palms & Soles", "Osteomyelitis / Septic Arthritis", "Sepsis / Septic Shock",
      "Rabbits / Rodents"
    ],
    triggerWords: [
      "Rat-Bite Fever & Haverhill Fever (Contaminated Food/Water)",
      "Long Thin Pleomorphic Gram-Negative Rod with Bulbous 'String-of-Beads' Swellings",
      "Irregular Fever, Migratory Polyarthralgias & Hemorrhagic/Maculopapular Rash Involving Hands & Feet (Palms & Soles)",
      "'Puffball' / 'Breadcrumb' Growth in Broth & 'Fried-Egg' L-Form Colonies on Agar",
      "Treat with Penicillin or Tetracycline (10% Untreated Mortality)"
    ],
    overview: `
      <p><b>What it is:</b> <i>Streptobacillus moniliformis</i> ("twisted necklace-shaped rod") is a long, thin (0.1–0.5 &times; 1–5 &mu;m), poorly staining, pleomorphic Gram-negative rod that forms bulbous swellings resembling a <b>string of beads</b> and long filaments in older cultures.</p>
      <p><b>Epidemiology:</b> Resides in the nasopharynx of <b>rats and small rodents</b> (and transiently in rodent-eating pets). Acquired via rodent bites/scratches (<b>rat-bite fever</b>—children with pet rats, lab workers, pet shop staff) or rarely contaminated food/water (<b>Haverhill fever</b>).</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Bacteremic Dissemination &amp; Joint Tropism:</b> Invades through bite wounds or minor skin cuts exposed to rodents, disseminating hematogenously to skin, joints, and meninges.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Rat-Bite Fever &amp; Haverhill Fever:</b> 2–10 day incubation; abrupt irregular fever, chills, headache, myalgia, and <b>migratory polyarthralgias</b>, followed days later by a <b>maculopapular or petechial rash extending to the hands and feet (palms and soles)</b>. Untreated mortality is ~10% (sepsis, endocarditis, meningitis).</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Culture (Notify Lab!):</b> Slow-growing (&ge;3 days) and requires enriched media (15% blood, 20% serum, or 5% ascitic fluid). Forms <b>"puffballs" / "bread crumbs"</b> in broth and small round colonies (cell wall–defective L-forms resemble <b>"fried eggs"</b> on agar). Biochemically inert—definitive ID via <b>16S rRNA sequencing</b>.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Recommended Therapy:</b> Susceptible to <b>Penicillin</b> (note: ineffective against cell wall–defective L-form variants) and <b>Tetracycline</b>.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Haverhill Fever:</b> Food- or waterborne outbreak form of <i>S. moniliformis</i> infection (clinically similar to rat-bite fever without a rodent bite).</li>
      </ul>
    `
  }
);