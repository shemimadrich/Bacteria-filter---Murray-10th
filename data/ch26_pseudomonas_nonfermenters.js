// Chapter 26: Pseudomonas and Related Bacteria (Rich Study Edition)
// Automatically plugs into window.BACTERIA_DB in index.html

window.BACTERIA_DB.push(
  {
    id: "pseudomonas_aeruginosa",
    name: "Pseudomonas aeruginosa",
    chapter: "Ch. 26: Pseudomonas and Related Bacteria",
    tags: [
      "Gram-Negative", "Non-Acid-Fast", "Regular / Uniform Rods",
      "Obligate Aerobe", "Extracellular", "Non-Spore-Forming",
      "Catalase (+)", "Oxidase (+)", "Beta-Hemolytic (Complete)", "Motile",
      "Non-Lactose Fermenter", "Blue-Green Pigment + Grape Odor", "Heavily Mucoid Capsule",
      "Polysaccharide Capsule", "Biofilm / Slime Layer", "AB Toxin: Inhibits EF-2", "Cytolytic / Pore-Forming Toxin",
      "CF / Ventilator Pneumonia", "Impetigo / Folliculitis / Abscesses", "Cutaneous Eschar / Ulcer",
      "Epiglottitis / Otitis / Sinusitis", "Keratitis / Endophthalmitis", "UTI / Pyelonephritis / Staghorn Calculi",
      "Osteomyelitis / Septic Arthritis", "Sepsis / Septic Shock", "Acute Endocarditis",
      "Hot Tubs / Burn Wounds / Contact Lenses", "Dental Procedures / Intravascular Catheters"
    ],
    triggerWords: [
      "Strictly Aerobic, Non-Fermenting, Oxidase (+) Gram-Negative Rod",
      "Blue-Green Pigment (Pyocyanin + Pyoverdin) & Sweet Grape-Like Odor",
      "Exotoxin A (Inhibits EF-2 — Same Mechanism as Diphtheria Toxin)",
      "Alginate Mucoid Capsule/Biofilm (Cystic Fibrosis Chronic Pneumonia)",
      "Ecthyma Gangrenosum (Hemorrhagic Necrotic Skin Lesions in Neutropenic Sepsis)",
      "Burn Wounds, Hot-Tub Folliculitis, Swimmer's Ear / Malignant Otitis Externa (Diabetics)",
      "Contact Lens Corneal Ulcers & Nail-Puncture Foot Osteochondritis",
      "Intrinsic, Acquired & Adaptive (AmpC / Biofilm) Multidrug Resistance; Uniformly TMP-SMX Resistant"
    ],
    overview: `
      <p><b>What it is:</b> <i>Pseudomonas aeruginosa</i> is a motile, <b>strictly aerobic</b> (can use nitrate/arginine anaerobically), non-fermenting, <b>cytochrome oxidase–positive Gram-negative rod</b> typically arranged in pairs. It has a massive genome (5,567 genes) conferring extreme environmental versatility (grows at 4°C–42°C, even in distilled water) and extensive antibiotic resistance.</p>
      <p><b>Epidemiology:</b> Ubiquitous in soil, water, and moist hospital reservoirs (sinks, toilets, ventilators, dialysis equipment, cut flowers, disinfectants). Primarily an <b>opportunistic pathogen</b> in neutropenic/immunocompromised hosts, <b>cystic fibrosis (CF)</b> patients, burn victims, and patients on broad-spectrum antibiotics (&gt;32,600 MDR US healthcare infections and ~2,700 deaths in 2017).</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Adhesins &amp; Alginate Capsule:</b> Flagella, pili, LPS (endotoxin), and <b>alginate</b> (mucoid exopolysaccharide capsule/biofilm activated in CF lungs that blocks phagocytosis and antibiotics).</li>
        <li><b>Exotoxin A (ETA — Most Important Toxin):</b> Disrupts eukaryotic protein synthesis by <b>blocking EF-2 peptide chain elongation</b> (same mechanism as diphtheria toxin, though structurally distinct); drives burn dermatonecrosis, corneal damage, and chronic lung destruction.</li>
        <li><b>Pigments:</b> <b>Pyocyanin</b> (blue; generates toxic superoxide/H<sub>2</sub>O<sub>2</sub> and stimulates IL-8 neutrophil influx) and <b>Pyoverdin</b> (yellow-green siderophore binding iron and regulating ETA secretion).</li>
        <li><b>Tissue-Destructive Enzymes &amp; Type III Toxins:</b> Elastases <b>LasA &amp; LasB</b> (degrade elastin &rarr; lung damage and <b>ecthyma gangrenosum</b>; cleave complement), alkaline protease, heat-labile hemolysin <b>phospholipase C</b>, and Type III–injected <b>Exoenzymes S &amp; T</b> (actin rearrangement and epithelial necrosis).</li>
        <li><b>Triple Antibiotic Resistance Mechanisms:</b> (1) <b>Intrinsic</b> (low-permeability outer membrane porins + constitutive efflux pumps), (2) <b>Acquired</b> (plasmid &beta;-lactamases/carbapenemases, porin mutations), and (3) <b>Adaptive</b> (biofilm- or &beta;-lactam–induced <i>ampC</i> expression, not predicted by standard lab tests).</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Pulmonary Infections:</b> Ranges from asymptomatic colonization or tracheobronchitis to <b>necrotizing bilateral bronchopneumonia</b> (up to 70% mortality in ventilated/neutropenic patients) and chronic mucoid exacerbations in <b>cystic fibrosis</b>.</li>
        <li><b>Skin, Soft Tissue &amp; Bone:</b> Severe <b>burn wound infections</b> (vascular necrosis &rarr; bacteremia), <b>hot-tub/whirlpool folliculitis</b>, fingernail infections ("nail salons"), and <b>foot osteochondritis</b> after stepping on a nail through a sneaker.</li>
        <li><b>Ear &amp; Eye Infections:</b> External otitis (<b>"swimmer's ear"</b>), life-threatening invasive <b>malignant external otitis</b> in elderly/diabetic patients (cranial nerve/bone invasion), chronic otitis media, and sight-threatening <b>corneal ulcers</b> (contact lens trauma + contaminated water).</li>
        <li><b>UTIs, Bacteremia &amp; Endocarditis:</b> Catheter-associated UTIs; high-mortality neutropenic bacteremia with <b>ecthyma gangrenosum</b> (hemorrhagic necrotic ulcers lacking neutrophils); tricuspid endocarditis in IV drug users.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Culture &amp; Hallmarks:</b> Grows rapidly aerobically on blood agar and MacConkey agar (<b>non-lactose fermenter</b>). Flat spreading colonies with <b>&beta;-hemolysis</b>, <b>green pigmentation</b> (blue pyocyanin + yellow-green pyoverdin), <b>sweet grape-like odor</b>, and rapid <b>oxidase (+)</b> reaction (differentiates from Enterobacterales and <i>Stenotrophomonas</i>).</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Combination Active Therapy:</b> Serious infections require a <b>combination of active antipseudomonal agents</b> guided by susceptibility testing (resistance to carbapenems, aminoglycosides, and colistin is rising; <b>uniformly resistant to TMP-SMX</b>). Prevent by sterilizing ventilators/dialysis lines and avoiding unnecessary broad-spectrum antibiotics.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Ecthyma Gangrenosum:</b> Pathognomonic hemorrhagic, necrotic, ulcerated skin lesions in bacteremic/neutropenic <i>P. aeruginosa</i> patients caused by LasA/LasB elastase-mediated vascular destruction.</li>
        <li><b>Pyocyanin &amp; Pyoverdin:</b> Blue and yellow-green diffusible pigments giving <i>P. aeruginosa</i> colonies their classic green color while contributing directly to oxidative injury and iron scavenging.</li>
      </ul>
    `
  },
  {
    id: "burkholderia_cepacia_complex",
    name: "Burkholderia cepacia Complex",
    chapter: "Ch. 26: Pseudomonas and Related Bacteria",
    tags: [
      "Gram-Negative", "Non-Acid-Fast", "Regular / Uniform Rods",
      "Obligate Aerobe", "Extracellular", "Non-Spore-Forming",
      "Catalase (+)", "Oxidase (+)", "Motile",
      "Non-Lactose Fermenter",
      "CF / Ventilator Pneumonia", "UTI / Pyelonephritis / Staghorn Calculi", "Sepsis / Septic Shock",
      "CGD Patient Risk", "Dental Procedures / Intravascular Catheters"
    ],
    triggerWords: [
      "Cystic Fibrosis (Contraindication to Lung Transplant) & Chronic Granulomatous Disease (CGD) Pneumonia",
      "Catheter-Associated UTI & Bacteremia", "Oxidase (+) Non-Fermenting Gram-Negative Rod",
      "Susceptible to TMP-SMX (Unlike P. aeruginosa)"
    ],
    overview: `
      <p><b>What it is:</b> The <i>Burkholderia cepacia</i> complex comprises 17 closely related non-fermenting, oxidase-positive Gram-negative rod species formerly classified under <i>Pseudomonas</i> (originally isolated from rotten onions).</p>
      <p><b>Epidemiology:</b> Colonizes moist environmental and hospital surfaces. An opportunistic pathogen with a devastating predilection for patients with <b>cystic fibrosis (CF)</b> or <b>chronic granulomatous disease (CGD)</b>.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Opportunistic Pulmonary Destruction &amp; Drug Resistance:</b> Persists in defective airways (CF) and catalase-positive survival in CGD phagocytes, driving progressive necrotizing lung destruction; displays poor clinical response to many &beta;-lactams and fluoroquinolones.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Pulmonary Infections (CF &amp; CGD):</b> Causes severe progressive pulmonary tissue destruction; respiratory colonization in CF carries such poor prognosis that it is a <b>contraindication to lung transplantation</b>.</li>
        <li><b>Nosocomial Opportunistic Infections:</b> Catheter-associated UTIs and intravascular catheter septicemia (relatively low virulence outside pulmonary disease).</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Culture &amp; ID:</b> Non-fermenting, oxidase-positive Gram-negative rods; selective media (e.g., BCSA) used for CF sputum; confirmed by MALDI-TOF MS or molecular methods.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Drug of Choice:</b> Susceptible to <b>Trimethoprim-Sulfamethoxazole (TMP-SMX)</b>—a key distinction from uniformly TMP-SMX–resistant <i>P. aeruginosa</i>! Clinical response to piperacillin, cephalosporins, and ciprofloxacin is generally poor despite occasional in vitro susceptibility.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>CGD (Chronic Granulomatous Disease):</b> Primary immunodeficiency with defective phagocyte NADPH oxidase, predisposing to catalase-positive pathogens like <i>B. cepacia</i>, <i>S. aureus</i>, and <i>Nocardia</i>.</li>
      </ul>
    `
  },
  {
    id: "burkholderia_pseudomallei",
    name: "Burkholderia pseudomallei",
    chapter: "Ch. 26: Pseudomonas and Related Bacteria",
    tags: [
      "Gram-Negative", "Non-Acid-Fast", "Regular / Uniform Rods",
      "Obligate Aerobe", "Facultative Intracellular", "Non-Spore-Forming",
      "Catalase (+)", "Oxidase (+)", "Motile",
      "Non-Lactose Fermenter",
      "Bipolar Safety-Pin Staining",
      "Cavitary / Granulomatous Lung Disease", "Impetigo / Folliculitis / Abscesses", "Sepsis / Septic Shock"
    ],
    triggerWords: [
      "Melioidosis (Southeast Asia, India, Africa, Australia — Soil & Water Saprophyte)",
      "Suppurative Cutaneous Abscesses & Cavitary Necrotizing Pneumonia → Overwhelming Sepsis",
      "High-Risk Bioweapon / Lab Aerosol Hazard (Notify Public Health)",
      "Susceptible to TMP-SMX (Plus Ceftazidime/Carbapenems in Acute Phase)"
    ],
    overview: `
      <p><b>What it is:</b> <i>Burkholderia pseudomallei</i> is a motile, aerobic, non-fermenting, oxidase-positive environmental saprophyte of soil, water, and vegetation that causes <b>melioidosis</b> (resembling equine glanders caused by <i>B. mallei</i>).</p>
      <p><b>Epidemiology:</b> Endemic in <b>Southeast Asia, India, Africa, and Australia</b>. Acquired via inhalation or percutaneous inoculation; severe opportunistic disease occurs in alcoholics, diabetics, and patients with chronic renal or lung disease. Classified as a potential bioweapon requiring licensed biosafety handling.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Intracellular Survival &amp; Abscess Formation:</b> Capable of latent persistence and necrotizing/suppurative tissue destruction across skin, lungs, and bloodstream.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Cutaneous Melioidosis:</b> Localized suppurative skin infection with regional lymphadenitis, fever, and malaise that can rapidly progress to overwhelming sepsis.</li>
        <li><b>Pulmonary Melioidosis:</b> Ranges from asymptomatic colonization or mild bronchitis to <b>cavitary necrotizing pneumonia</b> progressing to fatal septicemia if untreated.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Culture (Extreme Biosafety Precaution!):</b> Non-fermenting, oxidase-positive Gram-negative rod with bipolar staining; highly infectious via lab aerosols (similar to <i>M. tuberculosis</i>); isolation requires public health notification.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Therapy:</b> Susceptible to <b>TMP-SMX</b> (distinguishing from <i>P. aeruginosa</i>; intensive IV therapy such as ceftazidime or meropenem followed by prolonged oral TMP-SMX eradication is used clinically).</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Melioidosis:</b> Suppurative cutaneous, cavitary pulmonary, or septicemic disease caused by <i>B. pseudomallei</i> in tropical endemic zones.</li>
      </ul>
    `
  },
  {
    id: "stenotrophomonas_maltophilia",
    name: "Stenotrophomonas maltophilia",
    chapter: "Ch. 26: Pseudomonas and Related Bacteria",
    tags: [
      "Gram-Negative", "Non-Acid-Fast", "Regular / Uniform Rods",
      "Obligate Aerobe", "Extracellular", "Non-Spore-Forming",
      "Catalase (+)", "Oxidase (-)", "Motile",
      "Non-Lactose Fermenter",
      "CF / Ventilator Pneumonia", "Sepsis / Septic Shock", "UTI / Pyelonephritis / Staghorn Calculi",
      "Dental Procedures / Intravascular Catheters", "Intrinsically Cephalosporin-Resistant"
    ],
    triggerWords: [
      "Oxidase (-) Non-Fermenting Gram-Negative Rod (Distinguishes from P. aeruginosa)",
      "Uniformly Resistant to Carbapenems & Aminoglycosides!",
      "Breakthrough Bacteremia & Pneumonia in Neutropenic/ICU Patients on Carbapenems",
      "Drug of Choice: TMP-SMX (Exact Opposite of P. aeruginosa!)"
    ],
    overview: `
      <p><b>What it is:</b> <i>Stenotrophomonas maltophilia</i> (formerly <i>Pseudomonas/Xanthomonas maltophilia</i>) is an aerobic, non-fermenting, <b>cytochrome oxidase–negative</b> Gram-negative rod.</p>
      <p><b>Epidemiology:</b> Opportunistic nosocomial pathogen traced to contaminated IV catheters, disinfectants, ventilators, and ice machines. Selectively infects debilitated/neutropenic patients receiving long-term <b>carbapenems or aminoglycosides</b>.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Intrinsic Multidrug Resistance:</b> Inherently resistant to all <b>carbapenems (imipenem, meropenem, ertapenem)</b>, most &beta;-lactams, and aminoglycosides—enabling superinfection during broad-spectrum therapy.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Nosocomial Bacteremia &amp; Pneumonia:</b> High-mortality bloodstream infections, ventilator-associated pneumonia, wound infections, and UTIs in immunocompromised/neutropenic patients.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Culture &amp; Key Differentiator:</b> Non-lactose-fermenting Gram-negative rod that is <b>Oxidase (-)</b> (unlike oxidase-positive <i>P. aeruginosa</i>); confirmed by MALDI-TOF MS and susceptibility profile (carbapenem-resistant, TMP-SMX–susceptible).</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Drug of Choice:</b> <b>Trimethoprim-Sulfamethoxazole (TMP-SMX)</b> if susceptible (or ciprofloxacin combined with ticarcillin-clavulanate or ceftazidime). Never use carbapenems!</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Carbapenem vs. TMP-SMX Rule:</b> <i>P. aeruginosa</i> is generally carbapenem-susceptible / TMP-SMX–resistant; <i>S. maltophilia</i> is uniformly carbapenem-resistant / TMP-SMX–susceptible.</li>
      </ul>
    `
  },
  {
    id: "acinetobacter_baumannii",
    name: "Acinetobacter baumannii",
    chapter: "Ch. 26: Pseudomonas and Related Bacteria",
    tags: [
      "Gram-Negative", "Non-Acid-Fast", "Coccobacilli / Tiny Pleomorphic Rods",
      "Obligate Aerobe", "Extracellular", "Non-Spore-Forming",
      "Catalase (+)", "Oxidase (-)", "Non-Motile",
      "Non-Lactose Fermenter",
      "CF / Ventilator Pneumonia", "UTI / Pyelonephritis / Staghorn Calculi", "Sepsis / Septic Shock", "Erysipelas / Cellulitis",
      "Dental Procedures / Intravascular Catheters"
    ],
    triggerWords: [
      "Strictly Aerobic, Oxidase (-), Non-Motile Plump Gram-Negative Coccobacilli",
      "Survives on BOTH Moist Equipment & Dry Human Skin (Unusual for GNR)",
      "Ventilator-Associated Pneumonia, Military/Traumatic & Nosocomial Wounds, UTIs, Sepsis",
      "Extensively Drug-Resistant (Carbapenem-Resistant & Heteroresistant Strains)"
    ],
    overview: `
      <p><b>What it is:</b> <i>Acinetobacter baumannii</i> ("unable to move rod"; glucose-oxidizing species causing most human disease, alongside non-oxidizing <i>A. lwoffii</i> and <i>A. haemolyticus</i>) is a <b>strictly aerobic, oxidase-negative, nonmotile, plump Gram-negative coccobacillus</b>.</p>
      <p><b>Epidemiology:</b> Environmental and hospital saprophyte unusually capable of surviving on both moist surfaces (ventilators) and <b>dry surfaces (human skin)</b>. Proliferates in hospitalized patients on broad-spectrum antibiotics, post-surgery, or on mechanical ventilation.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Desiccation Tolerance &amp; Extreme Drug Resistance:</b> Survives dry hospital environments and readily acquires multidrug resistance including carbapenemases and <b>heteroresistant subpopulations</b> (missed by routine susceptibility tests).</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Ventilator-Associated &amp; Nosocomial Pneumonia:</b> Major ICU respiratory pathogen.</li>
        <li><b>Traumatic &amp; Nosocomial Wounds, UTIs &amp; Septicemia:</b> Notorious cause of military combat wound infections ("Iraqibacter") and hospital-acquired wounds/UTIs.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Microscopy &amp; Culture:</b> Plump Gram-negative coccobacilli (can look like diplococci on Gram stain!); strictly aerobic, <b>oxidase (-)</b>, catalase (+), nonmotile; confirmed by MALDI-TOF MS.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Susceptibility-Guided Combination Therapy:</b> Empiric therapy for serious infections uses a broad-spectrum &beta;-lactam (e.g., ceftazidime or imipenem) + aminoglycoside, adjusted strictly by susceptibility testing (beware carbapenem/colistin heteroresistance).</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Heteroresistance:</b> Presence of a highly resistant bacterial subpopulation within a predominantly susceptible isolate, risking treatment failure with carbapenems or colistin.</li>
      </ul>
    `
  },
  {
    id: "moraxella_catarrhalis",
    name: "Moraxella catarrhalis",
    chapter: "Ch. 26: Pseudomonas and Related Bacteria",
    tags: [
      "Gram-Negative", "Non-Acid-Fast", "Kidney-Bean Diplococci",
      "Obligate Aerobe", "Extracellular", "Non-Spore-Forming",
      "Catalase (+)", "Oxidase (+)", "Non-Motile",
      "Butyrate Esterase (+)",
      "Epiglottitis / Otitis / Sinusitis", "Typical Lobar Pneumonia"
    ],
    triggerWords: [
      "Strictly Aerobic, Oxidase (+), Gram-Negative Diplococci (Mimics Neisseria!)",
      "Butyrate Esterase (+) & Asaccharolytic (Does Not Ferment/Oxidize Sugars)",
      "Otitis Media & Sinusitis (Healthy Children/Adults)",
      "Bronchitis & Bronchopneumonia (Elderly COPD Patients)",
      "Beta-Lactamase (+) — Resistant to Penicillins; Susceptible to Amoxicillin-Clavulanate, Cephalosporins, Macrolides, TMP-SMX"
    ],
    overview: `
      <p><b>What it is:</b> <i>Moraxella catarrhalis</i> is a <b>strictly aerobic, oxidase-positive, catalase-positive Gram-negative diplococcus</b> that closely resembles <i>Neisseria</i> on Gram stain but does not utilize carbohydrates and is <b>butyrate esterase (+)</b>.</p>
      <p><b>Epidemiology:</b> Human upper respiratory mucosal commensal causing community-acquired upper respiratory infections in healthy individuals and lower respiratory exacerbations in elderly patients with chronic lung disease.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Mucosal Adherence &amp; &beta;-Lactamase Production:</b> Colonizes respiratory mucosa; most clinical isolates produce &beta;-lactamases conferring penicillin/ampicillin resistance.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Otitis Media &amp; Sinusitis:</b> Common upper respiratory pathogen in previously healthy children and adults (alongside <i>S. pneumoniae</i> and nontypeable <i>H. influenzae</i>).</li>
        <li><b>Bronchitis &amp; Bronchopneumonia:</b> Important cause of tracheobronchitis and pneumonia exacerbations in <b>elderly patients with COPD / chronic lung disease</b>.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Microscopy &amp; ID:</b> Gram-negative diplococci in sputum/respiratory secretions; strictly aerobic, oxidase (+), <b>butyrate esterase (+)</b>, DNase (+); confirmed by MALDI-TOF MS.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Effective Agents:</b> Resistant to penicillins/amoxicillin due to &beta;-lactamase, but uniformly susceptible to <b>amoxicillin-clavulanate</b> (&beta;-lactam/&beta;-lactamase inhibitor), <b>cephalosporins, erythromycin/macrolides, tetracyclines, and TMP-SMX</b>.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Butyrate Esterase Test:</b> Rapid enzymatic spot test differentiating <i>M. catarrhalis</i> (+) from morphologically identical <i>Neisseria</i> species (-).</li>
      </ul>
    `
  }
);