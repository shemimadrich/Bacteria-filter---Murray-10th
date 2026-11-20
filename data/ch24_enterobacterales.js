// Chapter 24: Enterobacterales (Rich Study Edition)
// Automatically plugs into window.BACTERIA_DB in index.html

window.BACTERIA_DB.push(
  {
    id: "escherichia_coli_general",
    name: "Escherichia coli (UPEC, Neonatal Meningitis, ETEC, EPEC, EAEC, EIEC)",
    chapter: "Ch. 24: Enterobacterales",
    tags: [
      "Gram-Negative", "Non-Acid-Fast", "Regular / Uniform Rods",
      "Facultative Anaerobe", "Extracellular", "Non-Spore-Forming",
      "Catalase (+)", "Oxidase (-)", "Motile", "Actin-Rocket Motility",
      "Rapid Lactose Fermenter",
      "Indole (+)",
      "Polysaccharide Capsule", "AB Toxin: Increases cAMP", "Heat-Stable Toxin: Increases cGMP", "Cytolytic / Pore-Forming Toxin",
      "UTI / Pyelonephritis / Staghorn Calculi", "Neonatal Meningitis", "Sepsis / Septic Shock",
      "Watery Secretory Diarrhea", "Inflammatory / Bloody Dysentery"
    ],
    triggerWords: [
      "Rapid Lactose Fermenter (Pink on MacConkey) & Indole (+)",
      "UPEC (#1 Community UTI — P Pili & HlyA Hemolysin)",
      "Neonatal Meningitis (K1 Capsular Antigen — 75% of Cases)",
      "ETEC (Traveler's Diarrhea — LT [cAMP] & STa [cGMP])",
      "EPEC (Infants — LEE / Tir-Intimin A/E Microvillus Effacement)",
      "EAEC (Stacked-Brick Adherence — Persistent Pediatric Diarrhea)",
      "EIEC (Shigella-Like Colonic Invasion — pInv & Actin Tails)"
    ],
    overview: `
      <p><b>What it is:</b> <i>Escherichia coli</i> is the most common and clinically important member of the order <b>Enterobacterales</b>—a facultatively anaerobic, catalase-positive, <b>oxidase-negative</b>, glucose- and <b>rapid lactose-fermenting Gram-negative rod</b> sharing the enterobacterial common antigen and O (somatic), K (capsular), and H (flagellar) antigens.</p>
      <p><b>Epidemiology:</b> Abundant commensal of the human GI tract. It is the <b>#1 Gram-negative rod isolated from sepsis</b>, causes <b>&gt;80% of community-acquired UTIs</b>, and—through acquisition of plasmids, phages, or pathogenicity islands—causes diverse diarrheal syndromes. Extraintestinal infections are mostly endogenous; gastroenteritis and neonatal meningitis are acquired exogenously.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>General Enterobacterales Factors:</b> Endotoxin (LPS lipid A), antiphagocytic capsule, antigenic phase variation (O, K, H), siderophores (enterobactin, aerobactin), serum resistance, and plasmid-mediated ESBL/carbapenemase resistance.</li>
        <li><b>Uropathogenic (UPEC) Factors:</b> Specialized adhesins (<b>P pili</b>, AAF/I, AAF/III, Dr) binding uroepithelium to prevent washout, plus <b>hemolysin HlyA</b>.</li>
        <li><b>Neonatal Meningitis Factor:</b> <b>K1 capsular polysaccharide</b> (present in ~75% of neonatal meningitis strains; cross-reacts with Group B <i>N. meningitidis</i>).</li>
        <li><b>ETEC Toxins (Plasmid-Encoded):</b> Colonization factors (CFA/I, II, IV) + <b>Heat-Stable Toxin STa</b> (activates guanylate cyclase C &rarr; &uarr;<b>cGMP</b>) and <b>Heat-Labile Toxin LT-I</b> (80% homologous to cholera toxin; binds GM<sub>1</sub> &rarr; activates G<sub>s</sub>/adenylate cyclase &rarr; &uarr;<b>cAMP</b>).</li>
        <li><b>EPEC Pathogenicity Island (LEE):</b> Type III secretion system injects <b>Tir</b> (translocated intimin receptor) into enterocytes; binding of outer-membrane <b>intimin</b> polymerizes actin and causes <b>attachment/effacement (A/E)</b> microvillus destruction (typical strains also carry EAF plasmid / bundle-forming pili).</li>
        <li><b>EAEC &amp; EIEC:</b> EAEC forms plasmid-mediated <b>"stacked-brick"</b> aggregative biofilms causing persistent diarrhea; EIEC uses <b><i>pInv</i> plasmid genes</b> to invade colonic epithelium, escape vacuoles, and spread cell-to-cell via <b>actin tails</b> (like <i>Shigella</i> and <i>Listeria</i>).</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Extraintestinal Infections:</b> <b>UTIs</b> (cystitis, pyelonephritis), <b>neonatal meningitis</b> (alongside Group B <i>Streptococcus</i>, top cause in infants &lt;1 month), and <b>Gram-negative septicemia</b> (usually from UTI or bowel perforation/peritonitis).</li>
        <li><b>ETEC (Small Intestine):</b> Leading cause of <b>traveler's diarrhea</b> (~30%) and developing-world infant diarrhea; 1–2 day incubation, watery nonbloody secretory diarrhea and cramps lasting 3–5 days (high inoculum from contaminated food/water; no person-to-person spread).</li>
        <li><b>EPEC &amp; EAEC (Small Intestine):</b> EPEC causes severe/protracted watery infant diarrhea (&lt;2 yr) in developing regions; EAEC causes acute or <b>chronic persistent watery diarrhea with growth retardation</b> in children and HIV patients.</li>
        <li><b>EIEC (Large Intestine):</b> Rare; watery diarrhea that can progress to <b>Shigella-like dysentery</b> (fever, cramps, scant bloody stools with leukocytes).</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Culture &amp; Biochemistry:</b> Rapidly grows on blood agar and forms bright <b>pink-purple lactose-fermenting colonies on MacConkey agar</b> (metallic green sheen on EMB). Oxidase (-), catalase (+), <b>indole (+)</b>, motile. Confirmed by MALDI-TOF MS or biochemical panels.</li>
        <li><b>Enteric Pathotype Detection:</b> Commercial <b>multiplex GI PCR (NAAT) panels</b> simultaneously identify ETEC, EPEC, EAEC, EIEC, and STEC directly from stool (immunoassays also exist for ETEC ST).</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Susceptibility-Guided Therapy:</b> Extraintestinal infections require susceptibility testing because plasmid-mediated <b>ESBLs</b> (inactivating penicillins/cephalosporins) and <b>carbapenemases</b> are increasingly widespread.</li>
        <li><b>Gastroenteritis:</b> Primarily oral/IV rehydration; antibiotics reserved for severe cases per clinical guidelines.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>LEE (Locus of Enterocyte Effacement):</b> Chromosomal pathogenicity island encoding the Type III secretion system, Tir, and intimin in EPEC and some STEC.</li>
        <li><b>ESBL (Extended-Spectrum &beta;-Lactamase):</b> Plasmid-encoded enzyme inactivating penicillins and cephalosporins in <i>E. coli</i>, <i>Klebsiella</i>, and <i>Proteus</i>.</li>
      </ul>
    `
  },
  {
    id: "escherichia_coli_stec",
    name: "Escherichia coli (STEC / EHEC — O157:H7)",
    chapter: "Ch. 24: Enterobacterales",
    tags: [
      "Gram-Negative", "Non-Acid-Fast", "Regular / Uniform Rods",
      "Facultative Anaerobe", "Extracellular", "Non-Spore-Forming",
      "Catalase (+)", "Oxidase (-)", "Motile",
      "Rapid Lactose Fermenter",
      "Indole (+)",
      "Sorbitol MacConkey (-)",
      "28S rRNA Shiga / Shiga-Like Toxin",
      "Inflammatory / Bloody Dysentery", "Hemolytic Uremic Syndrome (HUS)",
      "Undercooked Ground Beef", "Unpasteurized Dairy / Livestock"
    ],
    triggerWords: [
      "Shiga Toxin-Producing E. coli (STEC / EHEC — Stx1 & Stx2)",
      "O157:H7 Does NOT Ferment Sorbitol (Colorless on Sorbitol-MacConkey Agar)",
      "28S rRNA Cleavage (Halts Protein Synthesis; Gb3 Receptor on Gut & Glomeruli)",
      "Hemorrhagic Colitis (Grossly Bloody Diarrhea Without High Fever)",
      "Hemolytic Uremic Syndrome (HUS — Acute Renal Failure, Thrombocytopenia, MAHA)",
      "Undercooked Ground Beef, Spinach, Unpasteurized Milk/Cider (Low Dose <100 Bacteria)",
      "AVOID Antibiotics (Increases Risk of HUS!)"
    ],
    overview: `
      <p><b>What it is:</b> Shiga toxin–producing <i>Escherichia coli</i> (<b>STEC</b>, including the subset <b>EHEC</b>; outdated name VTEC) are pathogenic <i>E. coli</i> strains defined by production of lysogenic phage-encoded <b>Shiga toxin 1 (Stx1)</b> and/or <b>Shiga toxin 2 (Stx2)</b>. Serotype <b>O157:H7</b> causes ~1/3 of infections, with &gt;50 non-O157 serogroups causing the remainder.</p>
      <p><b>Epidemiology:</b> ~265,000 US infections/year, peaking in warm months and children &lt;5 years. Acquired from <b>undercooked ground beef</b>, raw vegetables (e.g., spinach), unpasteurized milk or apple cider, or contaminated water. <b>Very low infectious dose (&lt;100 bacteria)</b> permits person-to-person spread.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Shiga Toxins (Stx1 &amp; Stx2 — Lysogenic Bacteriophages):</b> AB<sub>5</sub> exotoxins (Stx1 is virtually identical to <i>Shigella dysenteriae</i> Shiga toxin). Five B subunits bind host glycolipid receptor <b>Gb3 (globotriaosylceramide)</b>, heavily expressed on intestinal villi and <b>renal glomerular endothelial cells</b>. The internalized A<sub>1</sub> subunit cleaves <b>28S rRNA</b>, halting host protein synthesis.</li>
        <li><b>Stx2 &amp; HUS Pathogenesis:</b> Stx2 preferentially destroys glomerular endothelial cells, triggering platelet activation, microvascular thrombin deposition, microangiopathic hemolysis, and acute renal failure.</li>
        <li><b>LEE Pathogenicity Island:</b> Many EHEC strains also carry LEE (evolved from EPEC), causing A/E microvillus destruction; strains with both Stx and A/E activity are most virulent.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Hemorrhagic Colitis:</b> 3–4 day incubation; starts as watery diarrhea with severe abdominal cramps (vomiting in ~50%; <b>high fever typically absent</b>), progressing within 2 days in 30%–65% to <b>grossly bloody diarrhea</b>; resolves in 4–10 days.</li>
        <li><b>Hemolytic Uremic Syndrome (HUS):</b> Develops in <b>5%–10% of infected children &lt;10 years</b>; classic triad of <b>acute renal failure, thrombocytopenia, and microangiopathic hemolytic anemia</b> (3%–5% mortality; up to 30% have long-term renal/CNS sequelae).</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Shiga Toxin Gene Detection (Preferred):</b> Multiplex stool PCR (NAAT) or Shiga toxin immunoassays detect BOTH O157 and non-O157 STEC strains.</li>
        <li><b>Sorbitol-MacConkey (SMAC) Agar Screening:</b> Unlike most <i>E. coli</i>, O157:H7 does <b>NOT ferment sorbitol</b> (forms colorless colonies on SMAC; confirmed by O157/H7 serotyping).</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Supportive Care ONLY — Antibiotics Contraindicated!</b> Manage with hydration and monitoring for HUS. <b>Antibiotics are NOT recommended</b> because they induce phage lysis/toxin release and <b>increase the risk of HUS</b> in children.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Gb3 (Globotriaosylceramide):</b> Host cell glycolipid receptor for Shiga toxin B subunits on intestinal mucosa and renal glomerular endothelium.</li>
        <li><b>SMAC (Sorbitol-MacConkey Agar):</b> Differential agar substituting sorbitol for lactose to screen for sorbitol-negative <i>E. coli</i> O157:H7.</li>
      </ul>
    `
  },
  {
    id: "salmonella_nontyphoidal",
    name: "Salmonella enterica (Nontyphoidal: S. Enteritidis, S. Typhimurium)",
    chapter: "Ch. 24: Enterobacterales",
    tags: [
      "Gram-Negative", "Non-Acid-Fast", "Regular / Uniform Rods",
      "Facultative Anaerobe", "Facultative Intracellular", "Non-Spore-Forming",
      "Catalase (+)", "Oxidase (-)", "Motile",
      "Non-Lactose Fermenter",
      "H2S Production (+)",
      "Watery Secretory Diarrhea", "Sepsis / Septic Shock", "Osteomyelitis / Septic Arthritis",
      "Poultry / Eggs / Reptiles", "Unpasteurized Dairy / Livestock"
    ],
    triggerWords: [
      "Non-Lactose Fermenter (Colorless on MacConkey), Motile & H2S (+) (Black Colonies on HE/XLD)",
      "Poultry, Eggs, Dairy & Reptiles (Large Infectious Dose 10^6–10^8)",
      "Pathogenicity Islands I & II (Dual Type III Secretion Systems — Replicates Inside Vacuole)",
      "Osteomyelitis in Sickle Cell Disease & Bacteremia in Immunocompromised",
      "Do NOT Give Antibiotics for Uncomplicated Gastroenteritis (Prolongs Carriage)"
    ],
    overview: `
      <p><b>What it is:</b> Most clinically significant salmonellae belong to <i>Salmonella enterica</i> (&gt;2,500 serovars; nontyphoidal pathogens include <i>Salmonella</i> Enteritidis, <i>Salmonella</i> Typhimurium, and animal-adapted <i>Salmonella</i> Choleraesuis). They are motile, facultatively anaerobic, oxidase-negative, <b>non-lactose-fermenting, H<sub>2</sub>S-producing Gram-negative rods</b>.</p>
      <p><b>Epidemiology:</b> Broad animal reservoir (<b>poultry, eggs, dairy, reptiles, livestock</b>); ~1.4 million US infections/year (150 million globally). Requires a <b>large inoculum (10<sup>6</sup>–10<sup>8</sup> bacteria)</b> in healthy hosts, though the infectious dose drops sharply in infants, elderly, immunosuppressed hosts, sickle cell disease, or patients with reduced gastric acidity (PPIs/antacids).</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Pathogenicity Island I (SPI-1):</b> Encodes a <b>Type III secretion system</b> and <i>Salmonella</i>-secreted invasion proteins (SSPs) mediating invasion into <b>M cells of Peyer patches</b> and small-intestinal enterocytes.</li>
        <li><b>Pathogenicity Island II (SPI-2):</b> Encodes a second Type III secretion system allowing survival and replication <b>inside endocytic vacuoles</b> (unlike <i>Shigella</i>, which escapes into the cytosol) and evasion of host immunity.</li>
        <li><b>Bile Salt Resistance &amp; Endotoxin:</b> Resists bile salts; inflammatory response releases prostaglandins, elevating cAMP and driving active fluid secretion.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Gastroenteritis (Most Common Form in US):</b> 6–48 h after contaminated food/water; nausea, vomiting, <b>nonbloody diarrhea</b>, fever, cramps, myalgias, and headache resolving spontaneously in 2–7 days.</li>
        <li><b>Septicemia &amp; Suppurative Metastatic Infections:</b> Higher risk in pediatric, geriatric, HIV, and <b>sickle cell disease</b> patients (especially <i>S.</i> Choleraesuis); ~10% develop localized suppurative foci such as <b>osteomyelitis, endocarditis, or septic arthritis</b>.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Culture &amp; Biochemistry:</b> Colorless <b>non-lactose-fermenting</b> colonies on MacConkey agar; resistant to bile salts; <b>motile</b> and <b>H<sub>2</sub>S (+)</b> (distinguishes from nonmotile, H<sub>2</sub>S-negative <i>Shigella</i>!).</li>
        <li><b>NAAT &amp; ID:</b> Multiplex enteric PCR panels rapidly detect <i>Salmonella</i> in stool; MALDI-TOF MS and serotyping confirm isolates.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Uncomplicated Gastroenteritis:</b> <b>Supportive hydration only — avoid antibiotics</b>, which can prolong fecal carriage!</li>
        <li><b>Bacteremia / High-Risk Patients:</b> Susceptibility-guided therapy (e.g., ceftriaxone, azithromycin, or fluoroquinolone). Prevent via thorough cooking and refrigeration of poultry and eggs.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>SPI-1 &amp; SPI-2:</b> Chromosomal <i>Salmonella</i> Pathogenicity Islands encoding two distinct Type III secretion systems for mucosal invasion and intravacuolar survival.</li>
      </ul>
    `
  },
  {
    id: "salmonella_typhi",
    name: "Salmonella enterica serovar Typhi (Typhoid Fever)",
    chapter: "Ch. 24: Enterobacterales",
    tags: [
      "Gram-Negative", "Non-Acid-Fast", "Regular / Uniform Rods",
      "Facultative Anaerobe", "Facultative Intracellular", "Non-Spore-Forming",
      "Catalase (+)", "Oxidase (-)", "Motile",
      "Non-Lactose Fermenter",
      "H2S Production (+)",
      "Polysaccharide Capsule",
      "Enteric (Typhoid) Fever", "Sepsis / Septic Shock"
    ],
    triggerWords: [
      "Strict Human Reservoir (No Animal Reservoir — Chronic Gallbladder Carriage)",
      "Low Infectious Dose (Person-to-Person via Contaminated Food/Water)",
      "Vi Capsular Polysaccharide Antigen", "Enteric / Typhoid Fever (Gradually Rising Fever → GI Symptoms)",
      "Two Vaccines (Oral Live Attenuated & Vi Capsular Polysaccharide)"
    ],
    overview: `
      <p><b>What it is:</b> <i>Salmonella</i> Typhi (and milder <i>Salmonella</i> Paratyphi A/B/C) are <b>strictly human-adapted</b> serovars of <i>S. enterica</i> that cause systemic <b>enteric (typhoid) fever</b> rather than simple food-poisoning gastroenteritis.</p>
      <p><b>Epidemiology:</b> <b>No animal reservoir</b>; maintained by human carriers via contaminated food/water (~350 US cases/year, mostly travelers; ~25 million cases and &gt;200,000 deaths/year worldwide). Unlike nontyphoidal <i>Salmonella</i>, <i>S.</i> Typhi has a <b>low infectious dose</b>, permitting easy person-to-person spread.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Vi Polysaccharide Capsule:</b> Antiphagocytic capsular antigen unique to <i>S.</i> Typhi (and select serovars) protecting against serum killing and phagocytosis.</li>
        <li><b>Macrophage Survival &amp; Reticuloendothelial Dissemination:</b> Invades intestinal epithelium, is engulfed by macrophages, and replicates in the <b>liver, spleen, and bone marrow</b> before seeding the <b>gallbladder</b> and reinfecting the gut.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Typhoid (Enteric) Fever:</b> 10–14 days after ingestion, patients develop <b>gradually increasing fever</b>, headache, myalgias, malaise, anorexia, and hepatosplenomegaly lasting &ge;1 week (bacteremic phase), followed by GI symptoms as gallbladder organisms reinfect the intestine.</li>
        <li><b>Chronic Asymptomatic Gallbladder Carriage:</b> Develops in <b>1%–5%</b> of patients (&gt;1 year), serving as a persistent human reservoir for foodborne transmission.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Blood &amp; Stool Culture:</b> Blood cultures are highest yield early in the febrile bacteremic phase (shows characteristic bipolar staining on Gram stain); non-lactose-fermenting, motile, weakly H<sub>2</sub>S (+). Confirmed by MALDI-TOF MS and Vi/O/H serotyping.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Mandatory Antibiotic Therapy:</b> Unlike nontyphoidal gastroenteritis, <i>S.</i> Typhi ALWAYS requires systemic antibiotics guided by susceptibility testing (e.g., ceftriaxone, azithromycin, or fluoroquinolones — fluoroquinolone resistance is increasing!).</li>
        <li><b>Vaccines (40%–70% Protective for Travelers):</b> Single-dose injectable <b>Vi capsular polysaccharide vaccine</b> or 4-dose <b>oral live attenuated vaccine</b>.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Vi Antigen:</b> Virulence capsular polysaccharide of <i>Salmonella</i> Typhi and basis for the injectable typhoid vaccine.</li>
      </ul>
    `
  },
  {
    id: "shigella_species",
    name: "Shigella species (S. dysenteriae, S. flexneri, S. boydii, S. sonnei)",
    chapter: "Ch. 24: Enterobacterales",
    tags: [
      "Gram-Negative", "Non-Acid-Fast", "Regular / Uniform Rods",
      "Facultative Anaerobe", "Facultative Intracellular", "Non-Spore-Forming",
      "Catalase (+)", "Oxidase (-)", "Non-Motile", "Actin-Rocket Motility",
      "Non-Lactose Fermenter",
      "28S rRNA Shiga / Shiga-Like Toxin",
      "Inflammatory / Bloody Dysentery", "Hemolytic Uremic Syndrome (HUS)"
    ],
    triggerWords: [
      "Non-Lactose Fermenter, Non-Motile & H2S (-) (vs. Salmonella)",
      "Ultra-Low Infectious Dose (100–200 Bacteria — Day-Care Outbreaks, Person-to-Person)",
      "Humans Are the ONLY Reservoir (S. sonnei #1 in US; S. flexneri Developing World)",
      "M-Cell Invasion (Type III IpaA–D), Vacuole Escape, Actin-Rocket Spread & Macrophage Apoptosis",
      "Shiga Toxin (S. dysenteriae — 28S rRNA Cleavage → Hemorrhagic Colitis & HUS)",
      "Bacillary Dysentery (Lower Cramps, Tenesmus, Pus & Blood in Stool)"
    ],
    overview: `
      <p><b>What it is:</b> Four species/serogroups (<i>S. dysenteriae, S. flexneri, S. boydii, S. sonnei</i>—genetically biogroups of <i>E. coli</i>) that are <b>nonmotile</b>, non-lactose-fermenting, <b>H<sub>2</sub>S-negative</b>, oxidase-negative Gram-negative rods.</p>
      <p><b>Epidemiology:</b> <b>Humans are the ONLY reservoir</b> (~500,000 US cases/year; ~90 million globally). <i>S. sonnei</i> causes ~85% of US cases; <i>S. flexneri</i> predominates in developing countries; <i>S. dysenteriae</i> causes severe epidemics (5%–15% fatality). Primarily pediatric (60% &lt;10 years; day-care outbreaks) and transmitted fecal-orally via contaminated hands because the infectious dose is tiny (<b>100–200 bacteria</b>).</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Colonic Invasion &amp; Cell-to-Cell Spread:</b> Invades <b>M cells in Peyer patches</b> via a virulence-plasmid <b>Type III secretion system (IpaA, IpaB, IpaC, IpaD)</b>, lyses the phagocytic vacuole to replicate in the <b>cytoplasm</b>, and rearranges host actin filaments to propel directly into adjacent cells—evading immune clearance.</li>
        <li><b>Macrophage Apoptosis &amp; Inflammation:</b> Induces macrophage apoptosis releasing IL-1&beta;, recruiting neutrophils that destabilize the colonic wall.</li>
        <li><b>Shiga Toxin (<i>S. dysenteriae</i>):</b> AB<sub>5</sub> exotoxin binding Gb3 receptors; A subunit cleaves <b>28S rRNA</b> (60S ribosome), halting protein synthesis and causing colonic mucosal necrosis and occasionally glomerular endothelial destruction (<b>HUS</b>).</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Shigellosis (Bacillary Dysentery):</b> 1–3 day incubation; begins with enterotoxin-mediated watery diarrhea, then progresses to the cardinal presentation of <b>lower abdominal cramps, tenesmus (straining), fever, and scant stools packed with blood, pus (neutrophils), and mucus</b>.</li>
        <li><b>Hemolytic Uremic Syndrome (HUS):</b> Complication of Shiga toxin–producing <i>S. dysenteriae</i>.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Culture &amp; Differentiation from <i>Salmonella</i>:</b> Colorless <b>non-lactose-fermenting</b> colonies on MacConkey agar; resistant to bile salts; crucially <b>Non-Motile and H<sub>2</sub>S (-)</b>.</li>
        <li><b>NAAT:</b> Multiplex GI PCR panels rapidly detect <i>Shigella</i> directly from stool.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Antimicrobial Therapy (To Reduce Spread!):</b> Although often self-limited, antibiotics are recommended to shorten illness and curb secondary transmission. Must be guided by susceptibility testing—<b>~5% of US isolates in 2022 were XDR</b> (resistant to all standard empiric/alternative drugs) and MDR <i>S. sonnei</i> is common. Prevent with strict handwashing and diaper hygiene.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>IpaA–D Proteins:</b> Type III secreted invasion plasmid antigens of <i>Shigella</i> that induce host membrane ruffling and bacterial uptake.</li>
        <li><b>Tenesmus:</b> Painful, urgent straining to defecate—a hallmark of colonic mucosal invasion in shigellosis.</li>
      </ul>
    `
  },
  {
    id: "yersinia_pestis",
    name: "Yersinia pestis",
    chapter: "Ch. 24: Enterobacterales",
    tags: [
      "Gram-Negative", "Non-Acid-Fast", "Regular / Uniform Rods", "Coccobacilli / Tiny Pleomorphic Rods",
      "Facultative Anaerobe", "Facultative Intracellular", "Non-Spore-Forming",
      "Catalase (+)", "Oxidase (-)", "Non-Motile",
      "Non-Lactose Fermenter",
      "Bipolar Safety-Pin Staining",
      "Polysaccharide Capsule",
      "Sepsis / Septic Shock", "Typical Lobar Pneumonia",
      "Flea (Xenopsylla)", "Rabbits / Rodents"
    ],
    triggerWords: [
      "Plague (Bubonic & Pneumonic)", "Bipolar Safety-Pin Staining Gram-Negative Rod",
      "Flea Vector (Xenopsylla) & Rodent/Squirrel/Cat Reservoirs (Sylvatic vs. Urban Plague)",
      "F1 Antiphagocytic Protein Capsule & Plasminogen Activator (pla) Protease",
      "Type III Secretion System (YopH, YopE, YopJ/P — Resists Phagocytosis)",
      "Painful Groin/Axillary Bubo; Aerosol Person-to-Person Spread in Pneumonic Plague",
      "Treat with Gentamicin (or Streptomycin/Doxycycline)"
    ],
    overview: `
      <p><b>What it is:</b> <i>Yersinia pestis</i> (family Yersiniaceae, order Enterobacterales) is a nonmotile, non-lactose-fermenting, oxidase-negative, catalase-positive Gram-negative rod exhibiting classic <b>bipolar ("safety-pin") staining</b> and causing <b>plague</b>.</p>
      <p><b>Epidemiology (Zoonotic):</b> Two cycles: <b>Urban plague</b> (rats &harr; fleas &rarr; humans; largely controlled via rodent sanitation) and <b>Sylvatic plague</b> (squirrels, rabbits, field rats, prairie dogs, domestic cats &harr; fleas &rarr; humans; endemic in the western US with &lt;10 cases/year). Highly infectious; person-to-person spread occurs via respiratory aerosols ONLY in pneumonic plague.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Type III Secretion System (Yop Effectors):</b> Injects <b>YopH</b> (dephosphorylates phagocytosis proteins), <b>YopE</b> (disrupts actin filaments), and <b>YopJ/P</b> (induces macrophage apoptosis) while suppressing cytokine release.</li>
        <li><b>Fraction 1 (<i>f1</i>) Plasmid Gene:</b> Encodes an antiphagocytic <b>protein capsule</b>.</li>
        <li><b>Plasminogen Activator (<i>pla</i>) Protease Gene:</b> Degrades complement C3b and C5a (blocking opsonization/chemotaxis) and lyses fibrin clots to permit rapid systemic dissemination.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Bubonic Plague:</b> &le;7 days after infected flea bite; high fever and a <b>painful inflammatory swollen lymph node (bubo)</b> in the groin or axilla. Rapidly progresses to fatal bacteremia/sepsis (up to 75% untreated mortality).</li>
        <li><b>Pneumonic Plague:</b> Shorter incubation (2–3 days); abrupt fever, malaise, and bilateral pulmonary infiltrates within 1 day. <b>Highly contagious via respiratory aerosols</b> with &gt;90% mortality if untreated.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Microscopy &amp; Culture (Biosafety Alert!):</b> Bipolar "safety-pin" Gram-negative rods from bubo aspirate, blood, or sputum. Non-lactose-fermenting, nonmotile. Notify lab immediately due to aerosol hazard and bioterrorism potential.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Prompt Therapy &amp; Isolation:</b> Respiratory isolation for pneumonic plague; treated effectively with <b>Gentamicin</b> (or streptomycin, doxycycline, or fluoroquinolones). No human vaccine is currently available.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Bubo:</b> Intensely painful, swollen, necrotic regional lymph node (groin or axilla) draining the site of a flea bite in bubonic plague.</li>
        <li><b>Sylvatic vs. Urban Plague:</b> Wild mammal/rodent reservoir plague (western US) vs. city rat-borne plague.</li>
      </ul>
    `
  },
  {
    id: "yersinia_enterocolitica",
    name: "Yersinia enterocolitica",
    chapter: "Ch. 24: Enterobacterales",
    tags: [
      "Gram-Negative", "Non-Acid-Fast", "Regular / Uniform Rods",
      "Facultative Anaerobe", "Facultative Intracellular", "Non-Spore-Forming",
      "Catalase (+)", "Oxidase (-)", "Urease (+)", "Non-Motile",
      "Non-Lactose Fermenter", "Cold Enrichment (4°C)",
      "Inflammatory / Bloody Dysentery", "Pseudoappendicitis", "Sepsis / Septic Shock",
      "Unpasteurized Dairy / Livestock", "Iron Overload / Cirrhosis Risk"
    ],
    triggerWords: [
      "Cold Enrichment (Grows at 4°C — Refrigerated Blood Transfusion Bacteremia/Shock)",
      "Pseudoappendicitis (Terminal Ileitis & Mesenteric Lymphadenitis in Children)",
      "Enterocolitis from Contaminated Pork/Meat, Unpasteurized Milk or Water (Cold Climates)",
      "Non-Lactose Fermenter, Motile at 25°C / Non-Motile at 37°C, Urease (+)"
    ],
    overview: `
      <p><b>What it is:</b> <i>Yersinia enterocolitica</i> (and closely related <i>Y. pseudotuberculosis</i>) is a zoonotic, non-lactose-fermenting Gram-negative rod of the Enterobacterales that uniquely thrives at cold temperatures (<b>4°C</b>).</p>
      <p><b>Epidemiology:</b> Natural reservoirs include <b>pigs, rodents, livestock, and rabbits</b>. Common in Scandinavian/northern European countries and cold regions of North America, peaking in winter; 90% of cases stem from contaminated meat (pork), milk, or water (serogroups O3, O9 globally; O8 in US).</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Type III Secretion System (Yop Proteins):</b> Resists phagocytic killing and suppresses host inflammatory cytokines (shared with <i>Y. pestis</i>).</li>
        <li><b>Psychrotrophic Growth (4°C):</b> Multiplies to lethal concentrations inside refrigerated donor blood products, causing transfusion-associated endotoxic shock.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Enterocolitis (~2/3 of Cases):</b> 1–10 day incubation (avg 4–6 days); fever, abdominal pain, and diarrhea lasting 1–2 weeks (can become chronic for months).</li>
        <li><b>Pseudoappendicitis (Children):</b> Inflammation of the terminal ileum and enlarged mesenteric lymph nodes closely mimicking acute appendicitis (also caused by <i>Y. pseudotuberculosis</i>).</li>
        <li><b>Transfusion-Related Bacteremia &amp; Iron Overload Sepsis:</b> Septicemia and endotoxic shock from refrigerated packed RBCs; also arthritis, hepatitis, and intraabdominal abscesses in adults.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Cold Enrichment (4°C):</b> Because <i>Y. enterocolitica</i> grows slowly at 37°C, mixing stool in saline at <b>4°C for &ge;2 weeks</b> selectively enriches it while killing competing flora. Non-lactose-fermenting on MacConkey agar; urease (+); motile at 25°C but nonmotile at 37°C.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Management:</b> Enterocolitis is usually self-limited; invasive disease/bacteremia is treated based on susceptibility (e.g., 3rd-generation cephalosporin, fluoroquinolone, or TMP-SMX).</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Pseudoappendicitis:</b> Right lower quadrant pain from terminal ileitis and mesenteric lymphadenitis mimicking surgical appendicitis.</li>
      </ul>
    `
  },
  {
    id: "klebsiella_pneumoniae",
    name: "Klebsiella pneumoniae",
    chapter: "Ch. 24: Enterobacterales",
    tags: [
      "Gram-Negative", "Non-Acid-Fast", "Regular / Uniform Rods",
      "Facultative Anaerobe", "Extracellular", "Non-Spore-Forming",
      "Catalase (+)", "Oxidase (-)", "Urease (+)", "Non-Motile",
      "Rapid Lactose Fermenter", "Heavily Mucoid Capsule",
      "Citrate (+)", "VP (+)",
      "Polysaccharide Capsule",
      "Typical Lobar Pneumonia", "Cavitary / Granulomatous Lung Disease", "UTI / Pyelonephritis / Staghorn Calculi", "Sepsis / Septic Shock"
    ],
    triggerWords: [
      "Heavily Mucoid Lactose-Fermenting Colonies (Prominent Polysaccharide Capsule)",
      "Non-Motile, Urease (+), Indole (-) (vs. E. coli)",
      "Primary Necrotizing Lobar Pneumonia (Cavitation & Blood-Tinged / Currant-Jelly Sputum)",
      "Hospital-Acquired UTI, Wound & Bacteremia", "Major Carrier of ESBL & Carbapenemase (KPC / Pan-Resistant)"
    ],
    overview: `
      <p><b>What it is:</b> <i>Klebsiella pneumoniae</i> (alongside <i>K. oxytoca</i>) is a <b>nonmotile</b>, urease-positive, rapid lactose-fermenting Gram-negative rod distinguished by a massive antiphagocytic <b>polysaccharide capsule</b> producing wet, heaped, viscous <b>mucoid colonies</b>.</p>
      <p><b>Clinical Importance:</b> Causes both community-acquired and hospital-acquired primary lobar pneumonia, UTIs, wound infections, and sepsis—and is a leading global threat for <b>carbapenem-resistant and pan-drug-resistant Enterobacterales</b>.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Prominent Antiphagocytic Polysaccharide Capsule:</b> Repels hydrophobic phagocytes, blocks complement/antibody binding, and creates the characteristic mucoid colony phenotype.</li>
        <li><b>Multidrug Resistance Plasmids:</b> Frequently acquires ESBLs and carbapenemases conferring resistance to all &beta;-lactams and multiple other classes.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Primary Lobar Pneumonia:</b> Community- or hospital-acquired; classically produces <b>necrotic destruction of alveolar spaces, cavitation, and thick blood-tinged sputum</b> (often in alcoholics, diabetics, or hospitalized patients).</li>
        <li><b>UTIs, Wound &amp; Soft-Tissue Infections:</b> Major nosocomial opportunist.</li>
        <li><b>Subspecies Syndromes:</b> <i>K. pneumoniae</i> subsp. <i>rhinoscleromatis</i> causes granulomatous nasal disease; subsp. <i>ozaenae</i> causes chronic atrophic rhinitis.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Culture &amp; Biochemistry:</b> Large, viscous, pink <b>mucoid lactose-fermenting</b> colonies on MacConkey agar; <b>Non-Motile</b>, urease (+), citrate (+), VP (+), indole (-) (<i>K. oxytoca</i> is indole +).</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Susceptibility-Guided Therapy Required:</b> Due to widespread ESBL and carbapenemase (KPC/NDM) production, definitive therapy must be directed by in vitro susceptibility testing.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Carbapenem-Resistant <i>Klebsiella</i>:</b> Strains producing carbapenemases that hydrolyze carbapenems and virtually all &beta;-lactams.</li>
      </ul>
    `
  },
  {
    id: "klebsiella_granulomatis",
    name: "Klebsiella granulomatis",
    chapter: "Ch. 24: Enterobacterales",
    tags: [
      "Gram-Negative", "Non-Acid-Fast", "Giemsa / Wright-Giemsa", "Coccobacilli / Tiny Pleomorphic Rods",
      "Facultative Anaerobe", "Facultative Intracellular", "Non-Spore-Forming",
      "Non-Motile",
      "Cell Culture Only",
      "Painless Chancre", "Cutaneous Eschar / Ulcer"
    ],
    triggerWords: [
      "Granuloma Inguinale (Donovanosis)", "Painless Beefy-Red Genital Ulcers Mimicking Syphilis",
      "Donovan Bodies (Intracellular Bacteria in Mononuclear Cells on Modified Giemsa Stain)",
      "Endemic in Tropical Regions (Papua New Guinea, India, Southern Africa, Caribbean)"
    ],
    overview: `
      <p><b>What it is:</b> Formerly <i>Donovania granulomatis</i> and <i>Calymmatobacterium granulomatis</i>, <i>Klebsiella granulomatis</i> is a fastidious, encapsulated, intracellular Gram-negative rod causing the sexually transmitted ulcerative disease <b>granuloma inguinale (donovanosis)</b>.</p>
      <p><b>Epidemiology:</b> Rare in the US; endemic in Papua New Guinea, the Caribbean, South America, India, southern Africa, Vietnam, and Australia. Transmitted via repeated sexual exposure or nonsexual genital trauma.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Intracellular Survival in Mononuclear Phagocytes:</b> Multiplies inside cytoplasmic vacuoles of tissue macrophages ("Donovan bodies"), provoking chronic granulomatous breakdown of genital skin.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Granuloma Inguinale (Donovanosis):</b> Prolonged incubation (weeks to months); subcutaneous genital/inguinal nodules break down into <b>painless granulomatous ulcers</b> that extend and coalesce, closely mimicking syphilitic chancres.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Impression Smear (Modified Giemsa / Wright Stain):</b> Tissue scraping of granulation tissue reveals numerous encapsulated bacilli inside cytoplasmic vacuoles of mononuclear cells (<b>Donovan bodies</b>). Does not grow on routine agar.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Antimicrobial Therapy:</b> Prolonged oral therapy (typically &ge;3 weeks until lesions heal) with <b>Azithromycin</b> (or doxycycline, ciprofloxacin, or TMP-SMX).</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Donovan Bodies:</b> Clusters of intracellular <i>K. granulomatis</i> inside mononuclear phagocyte vacuoles visible on modified Giemsa-stained tissue smears.</li>
      </ul>
    `
  },
  {
    id: "proteus_mirabilis",
    name: "Proteus mirabilis",
    chapter: "Ch. 24: Enterobacterales",
    tags: [
      "Gram-Negative", "Non-Acid-Fast", "Regular / Uniform Rods",
      "Facultative Anaerobe", "Extracellular", "Non-Spore-Forming",
      "Catalase (+)", "Oxidase (-)", "Urease (+)", "Motile", "Swarming Motility",
      "Non-Lactose Fermenter",
      "H2S Production (+)", "Phenylalanine Deaminase (+)",
      "UTI / Pyelonephritis / Staghorn Calculi", "Sepsis / Septic Shock"
    ],
    triggerWords: [
      "Swarming Motility on Blood Agar (Concentric Waves)", "Potent Urease (+) → Alkaline Urine & Struvite/Apatite Kidney Stones",
      "Non-Lactose Fermenter, H2S (+), Phenylalanine Deaminase (+), Indole (-)",
      "Cystitis, Pyelonephritis & Staghorn Calculi"
    ],
    overview: `
      <p><b>What it is:</b> <i>Proteus mirabilis</i> (family Morganellaceae, order Enterobacterales; named after the shape-shifting Greek god Proteus) is a highly motile, non-lactose-fermenting, H<sub>2</sub>S-positive, <b>potent urease-producing Gram-negative rod</b>.</p>
      <p><b>Clinical Importance:</b> Commensal intestinal organism and major cause of complicated urinary tract infections and infection-induced kidney stones.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Potent Urease Production:</b> Splits urinary urea into CO<sub>2</sub> and ammonia, markedly raising urine pH. Alkaline urine is directly toxic to uroepithelium and precipitates magnesium and calcium into <b>struvite and apatite renal (staghorn) stones</b>.</li>
        <li><b>Peritrichous Flagella &amp; Pili:</b> Vigorous motility promotes ascent from urethra to bladder and kidneys.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Urinary Tract Infections &amp; Renal Calculi:</b> Cystitis, pyelonephritis, and <b>struvite/apatite staghorn kidney stones</b> (which harbor bacteria and cause recurrent UTIs).</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Culture &amp; Biochemistry:</b> Characteristic <b>swarming motility</b> across blood agar plates; colorless <b>non-lactose-fermenting</b> colonies on MacConkey; <b>Urease (+)</b>, <b>H<sub>2</sub>S (+)</b>, <b>phenylalanine deaminase (+)</b>, indole (-).</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Antimicrobial Therapy:</b> Often susceptible to many antibiotics, though ESBL-producing strains are increasingly common; guide therapy by susceptibility testing (and address obstructing stones).</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Struvite Stones:</b> Magnesium ammonium phosphate kidney stones precipitated by alkaline urine from urease-positive bacteria like <i>P. mirabilis</i>.</li>
      </ul>
    `
  },
  {
    id: "serratia_marcescens",
    name: "Serratia marcescens",
    chapter: "Ch. 24: Enterobacterales",
    tags: [
      "Gram-Negative", "Non-Acid-Fast", "Regular / Uniform Rods",
      "Facultative Anaerobe", "Extracellular", "Non-Spore-Forming",
      "Catalase (+)", "Oxidase (-)", "Motile",
      "Slow / Late Lactose Fermenter", "Red Pigment (Prodigiosin)",
      "Citrate (+)", "VP (+)",
      "CF / Ventilator Pneumonia", "UTI / Pyelonephritis / Staghorn Calculi", "Sepsis / Septic Shock",
      "Dental Procedures / Intravascular Catheters"
    ],
    triggerWords: [
      "Red Pigment (Prodigiosin) at Room Temperature", "Slow / Late Lactose Fermenter",
      "Hospital-Acquired Opportunist (Neonates, ICU, Catheters, Ventilator Pneumonia)",
      "Intrinsically Resistant to Ampicillin & 1st-Gen Cephalosporins (Inducible AmpC)"
    ],
    overview: `
      <p><b>What it is:</b> <i>Serratia marcescens</i> (family Yersiniaceae, order Enterobacterales) is a motile, facultatively anaerobic, slow/late lactose-fermenting Gram-negative rod famous for producing the red pigment <b>prodigiosin</b> (especially in environmental/room-temperature isolates).</p>
      <p><b>Epidemiology:</b> Rarely causes primary infections in healthy people; an important <b>hospital-acquired opportunist</b> in neonates, ICU patients, and immunocompromised hosts with catheters or respiratory equipment.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Opportunistic Nosocomial Survival &amp; Resistance:</b> Thrives in moist hospital environments and carries inducible chromosomal AmpC &beta;-lactamases plus transferable resistance plasmids.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Nosocomial Infections:</b> Hospital-acquired pneumonia, catheter-associated UTIs, bloodstream infections, wound infections, and neonatal ICU outbreaks.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Culture &amp; ID:</b> Slow/late lactose fermenter on MacConkey agar; red pigment (<b>prodigiosin</b>) on agar in some strains; oxidase (-), DNase (+), citrate (+), VP (+); confirmed by MALDI-TOF MS.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Susceptibility-Guided Therapy:</b> Avoid ampicillin and early-generation cephalosporins; treat with susceptibility-confirmed agents (e.g., cefepime, carbapenems, fluoroquinolones, or TMP-SMX).</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Prodigiosin:</b> Distinctive non-diffusible red pigment produced by strains of <i>Serratia marcescens</i>.</li>
      </ul>
    `
  },
  {
    id: "enterobacter_citrobacter",
    name: "Enterobacter cloacae & Citrobacter koseri",
    chapter: "Ch. 24: Enterobacterales",
    tags: [
      "Gram-Negative", "Non-Acid-Fast", "Regular / Uniform Rods",
      "Facultative Anaerobe", "Extracellular", "Non-Spore-Forming",
      "Catalase (+)", "Oxidase (-)", "Motile",
      "Rapid Lactose Fermenter", "Slow / Late Lactose Fermenter",
      "Citrate (+)", "VP (+)",
      "Neonatal Meningitis", "Brain Abscess", "CF / Ventilator Pneumonia", "UTI / Pyelonephritis / Staghorn Calculi", "Sepsis / Septic Shock"
    ],
    triggerWords: [
      "Hospital-Acquired Opportunists (Neonates & Immunocompromised)",
      "Citrobacter koseri: Strong Predilection for Neonatal Meningitis & Brain Abscesses",
      "Enterobacter cloacae: Inducible AmpC Beta-Lactamase (Resistance During Cephalosporin Therapy)",
      "Lactose Fermenters (Rapid or Late) & Citrate (+)"
    ],
    overview: `
      <p><b>What it is:</b> <i>Enterobacter cloacae</i> and <i>Citrobacter</i> species (<i>C. koseri, C. freundii</i>; alongside <i>Morganella</i>) are motile, oxidase-negative, catalase-positive Gram-negative rods in the order Enterobacterales that are rare causes of primary disease in healthy adults but important <b>hospital-acquired opportunists</b>.</p>
      <p><b>Clinical Importance:</b> Predominantly affect neonates and hospitalized immunocompromised patients, with <i>Citrobacter koseri</i> notorious for causing destructive <b>neonatal meningitis and brain abscesses</b>.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Endotoxin &amp; Inducible AmpC Resistance:</b> LPS endotoxin drives nosocomial sepsis; <i>Enterobacter</i> and <i>C. freundii</i> carry inducible AmpC &beta;-lactamases that can confer resistance to 3rd-generation cephalosporins during therapy.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b><i>Citrobacter koseri</i> Neonatal CNS Disease:</b> Distinct predilection for <b>neonatal meningitis complicated by necrotic brain abscesses</b>.</li>
        <li><b>Nosocomial Infections:</b> Hospital-acquired pneumonia, catheter-associated UTIs, surgical wound infections, and bacteremia in ICU/immunocompromised hosts.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Culture &amp; ID:</b> Rapid or slow lactose fermenters on MacConkey agar; motile, oxidase (-), citrate (+); definitively identified by MALDI-TOF MS or commercial biochemical panels.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Susceptibility-Guided Therapy:</b> Guided by in vitro testing (e.g., cefepime or carbapenems for AmpC-producing <i>Enterobacter</i>; CNS-penetrating agents such as meropenem or cefotaxime + aminoglycoside for <i>C. koseri</i> neonatal meningitis).</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>AmpC &beta;-Lactamase:</b> Inducible chromosomal cephalosporinase common in <i>Enterobacter</i>, <i>Serratia</i>, <i>Citrobacter freundii</i>, and <i>Morganella</i>.</li>
      </ul>
    `
  }
);