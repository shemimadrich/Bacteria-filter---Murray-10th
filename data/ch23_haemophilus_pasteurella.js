// Chapter 23: Haemophilus and Related Bacteria (Rich Study Edition)
// Automatically plugs into window.BACTERIA_DB in index.html

window.BACTERIA_DB.push(
  {
    id: "haemophilus_influenzae",
    name: "Haemophilus influenzae",
    chapter: "Ch. 23: Haemophilus and Related Bacteria",
    tags: [
      "Gram-Negative", "Non-Acid-Fast", "Coccobacilli / Tiny Pleomorphic Rods",
      "Facultative Anaerobe", "Extracellular", "Non-Spore-Forming",
      "Catalase (+)", "Oxidase (+)", "Non-Motile",
      "Chocolate Agar (X & V Factors)",
      "Polysaccharide Capsule", "IgA1 Protease",
      "Community-Acquired Meningitis", "Epiglottitis / Otitis / Sinusitis", "Typical Lobar Pneumonia", "Erysipelas / Cellulitis", "Osteomyelitis / Septic Arthritis",
      "Asplenia / Complement Deficiency Risk"
    ],
    triggerWords: [
      "Small Pleomorphic Gram-Negative Coccobacilli", "Requires BOTH X (Hemin) & V (NAD) Factors",
      "Chocolate Agar & Satellite Phenomenon Around S. aureus",
      "Hib PRP (Polyribitol Phosphate) Capsule — Conjugated Vaccine",
      "Meningitis, Epiglottitis & Facial Cellulitis (Unvaccinated Children)",
      "Otitis Media, Sinusitis & COPD Pneumonia (Nontypeable Strains)", "IgA1 Protease"
    ],
    overview: `
      <p><b>What it is:</b> <i>Haemophilus influenzae</i> ("blood lover") is a small (0.2–0.3 &times; 1.0–2.0 &mu;m), pleomorphic, facultatively anaerobic <b>Gram-negative rod/coccobacillus</b> requiring both <b>X factor (hemin)</b> and <b>V factor (NAD)</b> for aerobic growth. Divided into 6 encapsulated serotypes (<b>a–f</b>) and nonencapsulated (<b>nontypeable</b>) strains, plus 8 biochemical biotypes (I–VIII).</p>
      <p><b>Epidemiology:</b> Nonencapsulated strains colonize virtually all humans' upper respiratory tracts within months of birth. Before conjugated <b>Hib</b> vaccines (1987), serotype b caused &gt;95% of invasive disease (~20,000 US pediatric cases/year). Vaccination virtually eliminated Hib in the US (now mostly nonimmune children or elderly with waning immunity; nontypeable strains cause &gt;50% of invasive disease), though Hib still causes ~2.2 million serious pediatric cases and &gt;500,000 deaths/year globally.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Polyribitol Phosphate (PRP) Polysaccharide Capsule (Serotype b):</b> Major antiphagocytic virulence factor; risk of invasive meningitis/epiglottitis is highest in patients lacking anti-PRP antibodies, complement-deficient patients, and <b>asplenic</b> patients.</li>
        <li><b>Pili, Nonpilus Adhesins &amp; Cell Wall LPS (Lipid A):</b> Mediate oropharyngeal adherence; LPS and glycopeptide paralyze respiratory cilia, damage epithelium, and induce intense meningeal inflammation.</li>
        <li><b>IgA1 Protease:</b> Produced by both encapsulated and nontypeable strains to cleave mucosal IgA1 and facilitate respiratory colonization.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Invasive Serotype b (Hib) Disease (Unvaccinated Children):</b>
          <ul class="list-circle pl-5 mt-1 space-y-1">
            <li><b>Meningitis:</b> Peak prevaccine age 3–18 months; 1–3 day URI prodrome followed by bacterial meningitis (&lt;10% mortality with prompt therapy).</li>
            <li><b>Epiglottitis (Obstructive Laryngitis):</b> Life-threatening pediatric emergency (peak 2–4 years); fever, pharyngitis, and rapid supraglottic swelling causing airway obstruction (<b>NEVER swab the posterior pharynx!</b>).</li>
            <li><b>Cellulitis &amp; Septic Arthritis:</b> Reddish-blue cheek/periorbital cellulitis; single large-joint septic arthritis in children &lt;2 years.</li>
          </ul>
        </li>
        <li><b>Mucosal &amp; Pulmonary Disease (Nontypeable Strains):</b> Alongside <i>S. pneumoniae</i>, the top cause of acute/chronic <b>otitis media and sinusitis</b>; major cause of bronchitis exacerbations and <b>pneumonia</b> in elderly patients with COPD, cystic fibrosis, or aspiration risk.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Microscopy:</b> Gram stain of CSF detects pleomorphic Gram-negative coccobacilli in &gt;80% of untreated meningitis cases (~10<sup>7</sup> CFU/mL).</li>
        <li><b>Culture (Chocolate Agar &amp; Satellite Phenomenon):</b> Sheep blood agar contains inhibitors of V factor; heating destroys these inhibitors, making <b>chocolate agar</b> required (overheating destroys V factor!). On unheated blood agar, grows as tiny colonies around <i>S. aureus</i> (<b>satellite phenomenon</b>: staphylococci lyse RBCs for X factor and excrete NAD/V factor).</li>
        <li><b>NAAT vs. PRP Antigen:</b> Multiplex CNS NAATs have replaced latex PRP antigen agglutination (which only detects now-rare serotype b). Presumptive ID by X + V factor requirement; definitive ID via MALDI-TOF MS or sequencing.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Systemic Infections (Meningitis / Epiglottitis):</b> Prompt IV <b>broad-spectrum cephalosporin</b> (e.g., ceftriaxone, cefotaxime) — untreated mortality approaches 100%.</li>
        <li><b>Non-Invasive (Otitis / Sinusitis):</b> Amoxicillin (if susceptible; ~30% produce &beta;-lactamase), amoxicillin-clavulanate, active cephalosporin, azithromycin, doxycycline, or fluoroquinolone.</li>
        <li><b>Prevention:</b> <b>Conjugated Hib PRP vaccine</b> (conjugated to diphtheria/tetanus toxoid or meningococcal OMP to trigger T-cell–dependent immunity in infants &ge;2 months; given at 2, 4, 6 months + booster at 12–15 months). <b>Rifampin chemoprophylaxis</b> for high-risk household/daycare contacts (&lt;2 years).</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>X Factor (Hemin) &amp; V Factor (NAD):</b> Essential growth factors required by <i>H. influenzae</i>; provided freely on gently heated chocolate agar.</li>
        <li><b>Satellite Phenomenon:</b> Growth of <i>H. influenzae</i> exclusively around colonies of <i>S. aureus</i> on sheep blood agar due to staphylococcal release of V factor (NAD).</li>
        <li><b>PRP (Polyribitol Phosphate):</b> Capsular polysaccharide of <i>H. influenzae</i> type b and antigen target of the Hib conjugate vaccine.</li>
      </ul>
    `
  },
  {
    id: "haemophilus_ducreyi",
    name: "Haemophilus ducreyi",
    chapter: "Ch. 23: Haemophilus and Related Bacteria",
    tags: [
      "Gram-Negative", "Non-Acid-Fast", "Coccobacilli / Tiny Pleomorphic Rods",
      "Facultative Anaerobe", "Capnophilic (Requires CO2)", "Extracellular", "Non-Spore-Forming",
      "Oxidase (+)", "Non-Motile",
      "Chocolate Agar (X Factor Only)",
      "Painful Chancroid", "Cutaneous Eschar / Ulcer"
    ],
    triggerWords: [
      "Chancroid (Soft Chancre — Painful Genital Ulcer + Inguinal Lymphadenopathy)",
      "Requires X Factor (Hemin) ONLY (No V Factor Needed)",
      "Sexually Transmitted Genital Ulcer (Rule Out Syphilis & HSV)",
      "Treat with Erythromycin (or Azithromycin)"
    ],
    overview: `
      <p><b>What it is:</b> <i>Haemophilus ducreyi</i> is a fastidious, small Gram-negative rod that requires <b>X factor (hemin) only</b> (not V factor) and is the etiologic agent of the sexually transmitted disease <b>chancroid (soft chancre)</b>.</p>
      <p><b>Epidemiology:</b> Major cause of genital ulcers in Africa and Asia; uncommon and underreported in North America and Europe. Diagnosed more often in males because females frequently have asymptomatic or inapparent lesions.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Mucosal Invasion &amp; Cytotoxicity:</b> Enters genital epithelium through microabrasions during sexual contact, inducing localized tissue necrosis, painful ulceration, and suppurative regional lymphadenitis.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Chancroid (Soft Chancre):</b> 5–7 days after sexual exposure, a tender erythematous papule appears on the genitalia or perianal area and ulcerates within 2 days into a <b>painful genital ulcer</b> accompanied by tender <b>inguinal lymphadenopathy</b> (contrast with the painless indurated chancre of syphilis).</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Specimen &amp; Culture:</b> Collect a moistened swab from the ulcer base/margin (more sensitive than lymph node aspirate). Notify the lab! Requires specialized <b>GC agar supplemented with hemoglobin, fetal bovine serum, IsoVitaleX, and vancomycin</b> incubated at <b>33°C in 5%–10% CO<sub>2</sub> for &ge;7 days</b> (still &lt;85% sensitive).</li>
        <li><b>Differential Diagnosis:</b> Must exclude syphilis (<i>T. pallidum</i>) and genital herpes (HSV); NAAT/PCR is preferred where available.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Recommended Therapy:</b> Most isolates are susceptible to <b>Erythromycin</b> (recommended in Murray; azithromycin or ceftriaxone are also used clinically).</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Soft Chancre (Chancroid):</b> Painful, non-indurated genital ulcer with inguinal lymphadenopathy caused by <i>H. ducreyi</i> ("you cry with ducreyi").</li>
      </ul>
    `
  },
  {
    id: "haemophilus_aegyptius",
    name: "Haemophilus aegyptius",
    chapter: "Ch. 23: Haemophilus and Related Bacteria",
    tags: [
      "Gram-Negative", "Non-Acid-Fast", "Coccobacilli / Tiny Pleomorphic Rods",
      "Facultative Anaerobe", "Capnophilic (Requires CO2)", "Extracellular", "Non-Spore-Forming",
      "Catalase (+)", "Oxidase (+)", "Non-Motile",
      "Chocolate Agar (X & V Factors)",
      "Neonatal Conjunctivitis", "Keratitis / Endophthalmitis"
    ],
    triggerWords: [
      "Koch-Weeks Bacillus", "Acute Purulent Conjunctivitis (Epidemic Pink Eye)",
      "Brazilian Purpuric Fever (Biogroup aegyptius)", "Requires X & V Factors (Chocolate Agar + IsoVitaleX)"
    ],
    overview: `
      <p><b>What it is:</b> <i>Haemophilus aegyptius</i> (historically the <b>Koch-Weeks bacillus</b>, observed by Robert Koch in 1883 in Egypt) is a fastidious Gram-negative coccobacillus closely related to <i>H. influenzae</i> that requires both <b>X and V factors</b>.</p>
      <p><b>Epidemiology:</b> Highly contagious cause of epidemic acute purulent conjunctivitis, especially during warm months.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Conjunctival Adherence &amp; Endotoxin:</b> Adheres to conjunctival epithelium causing purulent ocular inflammation; virulent strains (<i>H. influenzae</i> biogroup <i>aegyptius</i>) can cause fulminant pediatric septicemia (Brazilian purpuric fever).</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Acute Purulent Conjunctivitis ("Pink Eye"):</b> Contagious seasonal epidemics of purulent conjunctivitis.</li>
        <li><b>Brazilian Purpuric Fever:</b> Fulminant pediatric sepsis with purpura and shock following antecedent conjunctivitis.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Culture:</b> Fastidious; grows best on <b>chocolate agar supplemented with 1% IsoVitaleX</b> in CO<sub>2</sub> for 2–4 days; requires both X and V factors.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Therapy:</b> Topical or systemic antimicrobials (e.g., broad-spectrum cephalosporin for invasive disease; macrolide/fluoroquinolone for conjunctivitis) guided by susceptibility.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Koch-Weeks Bacillus:</b> Historical name for <i>Haemophilus aegyptius</i>, a classic agent of epidemic purulent conjunctivitis.</li>
      </ul>
    `
  },
  {
    id: "aggregatibacter_species",
    name: "Aggregatibacter actinomycetemcomitans & A. aphrophilus",
    chapter: "Ch. 23: Haemophilus and Related Bacteria",
    tags: [
      "Gram-Negative", "Non-Acid-Fast", "Coccobacilli / Tiny Pleomorphic Rods",
      "Facultative Anaerobe", "Capnophilic (Requires CO2)", "Extracellular", "Non-Spore-Forming",
      "Non-Motile",
      "Subacute / Culture-Negative Endocarditis",
      "Dental Procedures / Intravascular Catheters", "Star-Shaped Colonies"
    ],
    triggerWords: [
      "HACEK Group (Subacute Bacterial Endocarditis)", "Adherent Colonies on Blood Culture Bottle Glass",
      "Periodontitis & Bite Wounds (A. actinomycetemcomitans)", "Frequently Accompanies Actinomyces",
      "Treat Endocarditis with Ceftriaxone"
    ],
    overview: `
      <p><b>What it is:</b> <i>Aggregatibacter actinomycetemcomitans</i> (formerly <i>Actinobacillus</i>; "accompanying an actinomycete") and <i>A. aphrophilus</i> (formerly <i>Haemophilus aphrophilus</i>) are small, fastidious, facultatively anaerobic <b>Gram-negative rods</b> that aggregate/clump together and belong to the <b>HACEK</b> group.</p>
      <p><b>Epidemiology:</b> Normal commensals of the human oral cavity; spread hematogenously from the mouth to previously damaged or prosthetic heart valves.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Adherence &amp; Valve Colonization:</b> Form strongly adherent colonies on surfaces and damaged cardiac endothelium, enabling indolent vegetative growth.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Subacute Bacterial Endocarditis:</b> Insidious fever, night sweats, fatigue, and valve vegetations on damaged native or artificial valves.</li>
        <li><b>Periodontitis &amp; Bite Wounds:</b> <i>A. actinomycetemcomitans</i> is a common cause of destructive periodontitis and bite-wound infections; <i>A. aphrophilus</i> causes opportunistic infections.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Blood Culture (Slow Growth):</b> Grow slowly in blood cultures (~5+ days) and characteristically form <b>adherent colonies sticking to the glass surface of blood culture bottles</b> and agar media. Identified via MALDI-TOF MS or biochemical panels.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Drug of Choice:</b> Extended-spectrum cephalosporin such as IV <b>Ceftriaxone</b> is first-line for HACEK endocarditis.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Aggregatibacter:</b> Reclassified HACEK genus uniting <i>A. actinomycetemcomitans</i> and <i>A. aphrophilus</i> (the "A" in HACEK).</li>
      </ul>
    `
  },
  {
    id: "pasteurella_multocida",
    name: "Pasteurella multocida",
    chapter: "Ch. 23: Haemophilus and Related Bacteria",
    tags: [
      "Gram-Negative", "Non-Acid-Fast", "Coccobacilli / Tiny Pleomorphic Rods",
      "Facultative Anaerobe", "Extracellular", "Non-Spore-Forming",
      "Catalase (+)", "Oxidase (+)", "Non-Motile",
      "Musty / Mouse Nest Odor",
      "Indole (+)", "Bipolar Safety-Pin Staining",
      "Polysaccharide Capsule",
      "Erysipelas / Cellulitis", "Necrotizing Fasciitis / Gas Gangrene", "Sepsis / Septic Shock", "Community-Acquired Meningitis",
      "Cat / Dog Bite or Scratch", "Iron Overload / Cirrhosis Risk"
    ],
    triggerWords: [
      "Cat & Dog Bite Wounds (Rapid-Onset Cellulitis & Lymphadenitis <24–48 h)",
      "Small Bipolar-Staining Gram-Negative Coccobacilli", "Hyaluronic Acid Capsule (Large Buttery Colonies)",
      "Indole (+) Musty Odor; Grows on Blood/Chocolate Agar (Poorly on MacConkey)",
      "Oxidase (+) & Catalase (+)", "Systemic Sepsis in Cirrhosis / Hepatic Disease",
      "Treat with Penicillin (Amoxicillin-Clavulanate); Resistant to Oxacillin & 1st-Gen Cephalosporins"
    ],
    overview: `
      <p><b>What it is:</b> <i>Pasteurella multocida</i> ("many-killing") is a small, facultatively anaerobic, fermentative, oxidase-positive, catalase-positive <b>Gram-negative coccobacillus</b> (alongside <i>P. canis</i> from dogs).</p>
      <p><b>Epidemiology:</b> Normal commensal in the oropharynx of healthy animals (especially <b>cats and dogs</b>). Human infections result from animal bites, scratches, or pet licking of open wounds—particularly <b>cat bites</b> because their narrow, deep puncture wounds are hard to disinfect.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Hyaluronic Acid Polysaccharide Capsule:</b> Antiphagocytic capsule responsible for virulence and the organism's large, buttery colony morphology.</li>
        <li><b>Endotoxin (LPS):</b> Drives rapid local inflammation, erythema, and septic shock in disseminated infections.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Animal Bite Wound Infection (Most Common):</b> Rapidly developing localized <b>cellulitis, pain, serous/purulent discharge, and regional lymphadenitis</b> within 24–48 hours of a cat or dog bite/scratch (can progress to tenosynovitis, osteomyelitis, or necrotizing fasciitis).</li>
        <li><b>Chronic Respiratory Exacerbation:</b> Colonization of the oropharynx with aspiration in patients with underlying chronic pulmonary disease.</li>
        <li><b>Systemic Bacteremia &amp; Meningitis:</b> High-mortality septicemia in immunocompromised hosts, especially patients with <b>underlying hepatic disease / cirrhosis</b> or steroid use.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Culture &amp; Odor Hallmark:</b> Grows well overnight on <b>blood and chocolate agar</b>, but <b>poorly or not at all on MacConkey agar</b>. Forms large, <b>buttery colonies</b> with a characteristic <b>musty odor</b> caused by <b>indole production</b>.</li>
        <li><b>Microscopy &amp; Biochemistry:</b> Small Gram-negative coccobacilli (often with bipolar staining), oxidase (+), catalase (+), indole (+).</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Drug of Choice:</b> <b>Penicillin</b> (or amoxicillin-clavulanate for polymicrobial bite coverage). Acceptable alternatives: expanded-spectrum cephalosporins, macrolides, tetracyclines (doxycycline), or fluoroquinolones.</li>
        <li><b>Drugs to Avoid:</b> Semisynthetic penicillins (<b>oxacillin/nafcillin</b>), <b>1st-generation cephalosporins (cephalexin/cefazolin)</b>, and aminoglycosides have poor activity!</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Pasteurella Indole Musty Odor:</b> Distinctive musty/mousy odor of <i>P. multocida</i> colonies on blood agar due to indole production.</li>
      </ul>
    `
  }
);

window.BACTERIA_DB.push(
  {
    id: "haemophilus_parainfluenzae",
    name: "Haemophilus parainfluenzae",
    chapter: "Ch. 23: Haemophilus and Related Bacteria",
    tags: [
      "Gram-Negative", "Non-Acid-Fast", "Coccobacilli / Tiny Pleomorphic Rods",
      "Facultative Anaerobe", "Capnophilic (Requires CO2)", "Extracellular", "Non-Spore-Forming",
      "Catalase (+)", "Oxidase (+)", "Gamma-Hemolytic (Non-Hemolytic)", "Non-Motile",
      "Chocolate Agar (V Factor Only)",
      "Subacute / Culture-Negative Endocarditis", "Epiglottitis / Otitis / Sinusitis", "Sepsis / Septic Shock",
      "Dental Procedures / Intravascular Catheters"
    ],
    triggerWords: [
      "Requires V Factor (NAD) ONLY — Does NOT Need X Factor (Hemin)", "HACEK Group Endocarditis",
      "Oral / Oropharyngeal Commensal", "Large Friable Valve Vegetations (Emboli)", "Porphyrin Test (+)"
    ],
    overview: `
      <p><b>What it is:</b> <i>Haemophilus parainfluenzae</i> is a small, pleomorphic Gram-negative coccobacillus and the most abundant <i>Haemophilus</i> species in the normal human oral cavity and oropharynx. Clinically, it is an important member of the <b>HACEK group</b> of fastidious Gram-negative endocarditis pathogens.</p>
      <p><b>Classic Lab Distinction:</b> Unlike <i>H. influenzae</i> (requires both X and V factors) and <i>H. ducreyi</i> (requires X factor only), <i>H. parainfluenzae</i> synthesizes its own hemin and requires <b>V factor (NAD) ONLY</b>.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Adherence &amp; Biofilm Formation:</b> Expresses fimbriae and outer membrane adhesins that attach to damaged endocardial surfaces and prosthetic heart valves following dental or oral mucosal trauma.</li>
        <li><b>Endotoxin (LOS):</b> Lipooligosaccharide triggers local inflammation and systemic fever/embolization in intravascular infections.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Subacute Infective Endocarditis (HACEK Group):</b> Characteristically affects patients with preexisting valvular heart disease or prosthetic valves following dental procedures; produces large, friable vegetations with a high rate of <b>major systemic arterial embolization</b>.</li>
        <li><b>Opportunistic Respiratory, Sinus &amp; Genitourinary Infections:</b> Occasional cause of acute sinusitis, otitis media, exacerbations of chronic bronchitis, brain/liver abscesses, and neonatal or urogenital infections.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Factor Requirement Testing:</b> Grows on <b>chocolate agar</b> (or blood agar with <i>S. aureus</i> satellite streak) and strictly around the <b>V-factor (NAD) disk ONLY</b>—does not require X factor (hemin) and is <b>ALA/porphyrin test positive</b> (confirms endogenous heme synthesis).</li>
        <li><b>Blood Culture &amp; MALDI-TOF MS:</b> Modern automated blood culture systems typically detect HACEK bacteremia within 3–5 days; species identification is confirmed by MALDI-TOF MS or biochemical panels.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Third-Generation Cephalosporins (Drug of Choice):</b> Because beta-lactamase production is common among <i>Haemophilus</i> species, <b>IV Ceftriaxone</b> (or cefotaxime) is the standard therapy for HACEK endocarditis (typically 4 weeks for native valves, 6 weeks for prosthetic valves); fluoroquinolones (ciprofloxacin/levofloxacin) or ampicillin-sulbactam are alternatives.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>V Factor (NAD / Nicotinamide Adenine Dinucleotide):</b> Heat-labile coenzyme released from lysed RBCs in chocolate agar; solely required by <i>H. parainfluenzae</i>.</li>
        <li><b>HACEK Group:</b> Fastidious oral Gram-negative rods causing subacute endocarditis (<i>Haemophilus</i>/<i>Aggregatibacter</i>, <i>Cardiobacterium</i>, <i>Eikenella</i>, <i>Kingella</i>).</li>
      </ul>
    `
  }
);
