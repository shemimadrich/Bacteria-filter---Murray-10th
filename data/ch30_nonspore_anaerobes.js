// Chapter 30: Non-Spore-Forming Anaerobic Bacteria (Rich Study Edition)
// Automatically plugs into window.BACTERIA_DB in index.html

window.BACTERIA_DB.push(
  {
    id: "actinomyces_species",
    name: "Actinomyces species (A. israelii)",
    chapter: "Ch. 30: Non-Spore-Forming Anaerobic Bacteria",
    tags: [
      "Gram-Positive", "Non-Acid-Fast", "Branching Filamentous Rods",
      "Obligate Anaerobe", "Facultative Anaerobe", "Extracellular", "Non-Spore-Forming",
      "Non-Motile",
      "Slow-Growing (>7 Days)", "Yellow Sulfur Granules", "Molar Tooth / Breadcrumb Colonies",
      "Impetigo / Folliculitis / Abscesses", "Cavitary / Granulomatous Lung Disease", "Brain Abscess",
      "Dental Procedures / Intravascular Catheters", "CGD Patient Risk"
    ],
    triggerWords: [
      "Anaerobic / Facultative, NON-Acid-Fast Branching Filamentous Gram-Positive Rods (vs. Aerobic Weakly Acid-Fast Nocardia!)",
      "Yellow 'Sulfur Granules' (Filamentous Masses Bound by Calcium Phosphate)",
      "'Molar Tooth' White Colonies After 1–2 Weeks Anaerobic Incubation",
      "Endogenous Chronic Granulomatous Abscesses + Draining Sinus Tracts + Woody Fibrosis",
      "Cervicofacial (Most Common — Jaw/Neck After Dental Procedure), Thoracic, Abdominal, Pelvic (IUD!) & Solitary Brain Abscess",
      "Treat with Surgical Debridement + Prolonged Penicillin (4–12 Months); Resistant to Metronidazole!"
    ],
    overview: `
      <p><b>What it is:</b> <i>Actinomyces</i> species (classically <i>A. israelii</i>; "ray fungus") are slow-growing, strictly or facultatively anaerobic, <b>non-acid-fast, branching filamentous Gram-positive rods</b>. True bacteria (inhibited by penicillin, not antifungals) distinguished from morphologically similar <i>Nocardia</i> by being <b>anaerobic and non-acid-fast</b>.</p>
      <p><b>Epidemiology:</b> Strictly <b>endogenous</b> (no person-to-person spread); normal colonizers of the upper respiratory/oral cavity, GI tract, and female genital tract (NOT normal skin flora). Low virulence—disease requires mucosal barrier disruption (dental extraction, poor oral hygiene, surgery, or prolonged IUD use).</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Chronic Granulomatous Suppuration &amp; Sulfur Granules:</b> Invades traumatized mucosa to form slow-growing, suppurative abscesses connected by draining sinus tracts, surrounded by dense fibrosing granulation tissue ("woody" induration) and macroscopic <b>sulfur granules</b> (calcium-phosphate–bound bacterial filaments).</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Cervicofacial Actinomycosis (Most Common):</b> Follows poor oral hygiene, dental extraction, or oral trauma; painless or pyogenic woody jaw/neck swelling with <b>draining sinus tracts along the jaw angle</b> discharging yellow sulfur granules.</li>
        <li><b>Pelvic Actinomycosis:</b> Classic complication of long-term <b>intrauterine device (IUD)</b> colonization causing destructive pelvic masses, tubo-ovarian abscesses, or ureteral obstruction.</li>
        <li><b>Thoracic, Abdominal &amp; CNS Actinomycosis:</b> Pulmonary abscesses crossing tissue planes, disseminated abdominal abscesses, and solitary <b>brain abscess</b> (or meningitis/empyema); febrile disease also seen in CGD patients.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Microscopy of Crushed Sulfur Granules:</b> Crush sand-like yellow granules from pus/sinus tracts between glass slides &rarr; delicate <b>Gram-positive branching filaments</b> at the periphery (<b>acid-fast negative</b>).</li>
        <li><b>Anaerobic Culture:</b> Collect deep tissue/pus avoiding mucosal contamination; fastidious and slow-growing (requires <b>&ge;2 weeks</b> anaerobically), forming white domed irregular colonies resembling a <b>molar tooth</b>.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Debridement + Prolonged Penicillin (4–12 Months):</b> Uniformly susceptible to <b>Penicillin (drug of choice)</b>, carbapenems, macrolides, and clindamycin. Crucially, <b>most species are resistant to Metronidazole</b>!</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Sulfur Granules:</b> Macroscopic yellow-orange sand-like grains in actinomycotic pus composed of filamentous <i>Actinomyces</i> colonies cemented by calcium phosphate (do NOT actually contain sulfur).</li>
      </ul>
    `
  },
  {
    id: "cutibacterium_acnes",
    name: "Cutibacterium (Propionibacterium) acnes",
    chapter: "Ch. 30: Non-Spore-Forming Anaerobic Bacteria",
    tags: [
      "Gram-Positive", "Non-Acid-Fast", "Club-Shaped / Chinese-Letter Diphtheroids",
      "Obligate Anaerobe", "Aerotolerant Anaerobe", "Extracellular", "Non-Spore-Forming",
      "Catalase (+)", "Non-Motile",
      "Impetigo / Folliculitis / Abscesses", "Subacute / Culture-Negative Endocarditis", "Community-Acquired Meningitis",
      "Dental Procedures / Intravascular Catheters"
    ],
    triggerWords: [
      "Formerly Propionibacterium acnes (Renamed Cutibacterium in 2016)",
      "Small Anaerobic / Aerotolerant Pleomorphic Gram-Positive Skin Rod (Catalase +)",
      "Acne Vulgaris (Sebaceous Follicle Inflammation via Lipases, Proteases & Leukocyte Chemotaxis)",
      "Chronic Indolent Foreign-Body / VP Shunt / Prosthetic Joint & Valve Infections",
      "Common Blood Culture Skin Contaminant (Evaluate Clinical Context Carefully!)"
    ],
    overview: `
      <p><b>What it is:</b> <i>Cutibacterium acnes</i> (formerly <i>Propionibacterium acnes</i>; produces propionic acid) is a small, pleomorphic, anaerobic/aerotolerant <b>Gram-positive diphtheroid rod</b> inhabiting normal human skin (sebaceous follicles), conjunctiva, external ear, oropharynx, and female genital tract.</p>
      <p><b>Clinical Importance:</b> Drives the inflammatory response in <b>acne vulgaris</b>, frequently contaminates blood cultures at venipuncture, and causes chronic, indolent <b>prosthetic device and CSF shunt infections</b>.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Sebaceous Inflammation (Acne):</b> Produces low-molecular-weight chemotactic peptides attracting leukocytes into sebaceous follicles, plus hydrolytic enzymes (<b>lipases, proteases, neuraminidase, hyaluronidase</b>) triggering local follicular inflammation.</li>
        <li><b>Biofilm on Prosthetics:</b> Adheres to ventriculoperitoneal shunts, prosthetic shoulder joints, catheters, and heart valves.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Acne Vulgaris:</b> Inflammatory papules/pustules inside sebaceous follicles (unrelated to skin cleanliness).</li>
        <li><b>Opportunistic Foreign-Body Infections:</b> Chronic, often afebrile <b>CSF (VP) shunt meningitis</b>, prosthetic joint/valve infections, intravascular catheter sepsis, and lacrimal canaliculitis.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Anaerobic Culture (Slow Growth):</b> Requires 2–5+ days on anaerobic media; pleomorphic Gram-positive rods in clumps/short chains. Always interpret blood isolates alongside clinical context (foreign body vs. skin contaminant).</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Acne:</b> Topical <b>benzoyl peroxide</b> + topical/oral antibiotics (<b>erythromycin, clindamycin</b>).</li>
        <li><b>Shunt / Prosthetic Infections:</b> Surgical <b>removal of foreign hardware</b> + prolonged high-dose <b>Penicillin</b> (or vancomycin/ceftriaxone).</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Propionic Acid Fermentation:</b> Primary metabolic end-product giving <i>Cutibacterium</i> its historical genus name <i>Propionibacterium</i>.</li>
      </ul>
    `
  },
  {
    id: "lactobacillus_species",
    name: "Lactobacillus species",
    chapter: "Ch. 30: Non-Spore-Forming Anaerobic Bacteria",
    tags: [
      "Gram-Positive", "Non-Acid-Fast", "Regular / Uniform Rods",
      "Facultative Anaerobe", "Obligate Anaerobe", "Extracellular", "Non-Spore-Forming",
      "Catalase (-)", "Non-Motile",
      "Subacute / Culture-Negative Endocarditis", "Sepsis / Septic Shock",
      "Dental Procedures / Intravascular Catheters", "Intrinsically Vancomycin-Resistant"
    ],
    triggerWords: [
      "Normal Commensal of Vagina, Urethra, Mouth & GI Tract (Lactic Acid Fermentation)",
      "Intrinsically Vancomycin-Resistant Gram-Positive Rod!",
      "Subacute Endocarditis (After Dental Procedures) & Opportunistic/Probiotic Septicemia",
      "Requires Bactericidal Synergy: Penicillin + Aminoglycoside (Gentamicin)"
    ],
    overview: `
      <p><b>What it is:</b> <i>Lactobacillus</i> species are facultatively or strictly anaerobic, catalase-negative, lactic-acid–producing <b>Gram-positive rods</b> that form the protective normal flora of the mouth, GI tract, vagina, and urethra.</p>
      <p><b>Clinical Pitfalls:</b> Abundant in urine cultures as harmless urethral contaminants (cannot grow in urine!). True bloodstream invasion occurs transiently after childbirth/gynecologic procedures, as <b>subacute endocarditis</b> (often post-dental work), or as opportunistic septicemia in immunocompromised hosts (including rare <b>probiotic-associated bacteremia</b>).</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Low Intrinsic Virulence &amp; Vancomycin Resistance:</b> Opportunistically adheres to damaged heart valves during bacteremia; carries intrinsic D-Ala-D-Lac cell-wall precursors conferring natural <b>vancomycin resistance</b>.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Endocarditis &amp; Opportunistic Septicemia:</b> Subacute endocarditis on previously damaged valves (e.g., rheumatic mitral valve) and bacteremia in severely immunocompromised patients.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Blood Culture &amp; ID:</b> Regular Gram-positive rods, catalase (-), vancomycin-resistant; multiple positive blood cultures distinguish true endocarditis from contamination.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Bactericidal Combination Required:</b> Resistant to vancomycin and only inhibited by monotherapy—treat serious endocarditis/sepsis with <b>Penicillin + Aminoglycoside (Gentamicin)</b> for 6 weeks.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Intrinsic Vancomycin-Resistant Gram-Positive Rods:</b> Key board triad: <i>Lactobacillus</i>, <i>Erysipelothrix</i>, and <i>Leuconostoc/Pediococcus</i>.</li>
      </ul>
    `
  },
  {
    id: "mobiluncus_species",
    name: "Mobiluncus species (M. curtisii)",
    chapter: "Ch. 30: Non-Spore-Forming Anaerobic Bacteria",
    tags: [
      "Gram-Positive", "Gram-Variable / Poorly Staining", "Non-Acid-Fast", "Comma-Shaped / Curved Rods",
      "Obligate Anaerobe", "Extracellular", "Non-Spore-Forming",
      "Motile",
      "Bacterial Vaginosis (Clue Cells)"
    ],
    triggerWords: [
      "Motile, Curved, Tapered-End Anaerobic Rods (Gram-Variable / Appear Gram-Negative)",
      "True Gram-Positive Cell Wall (Lacks Endotoxin; Vancomycin-Susceptible, Colistin-Resistant)",
      "Abundant Marker Organism in Bacterial Vaginosis (M. curtisii)"
    ],
    overview: `
      <p><b>What it is:</b> <i>Mobiluncus</i> species ("motile hook"; notably <i>M. curtisii</i>) are fastidious, obligate anaerobic, motile, <b>curved rods with tapered ends</b>. Although they stain Gram-variable or Gram-negative, they are classified as <b>Gram-positive</b> because they have a Gram-positive cell wall, lack endotoxin, and are vancomycin-susceptible/colistin-resistant.</p>
      <p><b>Clinical Importance:</b> Rarely found in healthy vaginas, but abundant in women with <b>bacterial vaginosis</b> (useful microscopic marker alongside clue cells).</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Vaginal Dysbiosis Association:</b> Proliferates alongside other anaerobes (e.g., <i>Gardnerella</i>) when protective vaginal lactobacilli decline, though its exact pathogenic role remains unclear.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Bacterial Vaginosis (Vaginitis):</b> Polymicrobial vaginal dysbiosis with malodorous discharge and elevated pH; rarely causes opportunistic extragenital infections.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Vaginal Gram Stain:</b> Characteristic curved rods with pointed ends alongside clue cells and reduced lactobacilli (culture is slow and fastidious, rarely performed).</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Antimicrobials:</b> Susceptible to <b>clindamycin, ampicillin, vancomycin, and erythromycin</b> (metronidazole or clindamycin used clinically for bacterial vaginosis).</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Mobiluncus Gram-Variable Paradox:</b> Visually stains pink/variable like a Gram-negative rod despite having a true Gram-positive cell wall without LPS endotoxin.</li>
      </ul>
    `
  },
  {
    id: "anaerobic_gram_positive_cocci",
    name: "Anaerobic Gram-Positive Cocci (Peptostreptococcus, Finegoldia, Anaerococcus)",
    chapter: "Ch. 30: Non-Spore-Forming Anaerobic Bacteria",
    tags: [
      "Gram-Positive", "Non-Acid-Fast", "Cocci in Chains or Pairs",
      "Obligate Anaerobe", "Extracellular", "Non-Spore-Forming",
      "Non-Motile",
      "Brain Abscess", "Epiglottitis / Otitis / Sinusitis", "Impetigo / Folliculitis / Abscesses", "Erysipelas / Cellulitis", "Osteomyelitis / Septic Arthritis"
    ],
    triggerWords: [
      "Polymicrobial Endogenous Anaerobic Infections (Oral, GI, GU & Skin Flora)",
      "Sinusitis, Pleuropulmonary, Brain, Intraabdominal & Pelvic Abscesses",
      "Cellulitis, Soft-Tissue Infections & Osteomyelitis",
      "Susceptible to Penicillins & Carbapenems; Resistant to Aminoglycosides (All Anaerobes!)"
    ],
    overview: `
      <p><b>What it is:</b> A group of obligate anaerobic Gram-positive cocci—historically all called <i>Peptostreptococcus</i>, now reclassified into <i>Peptostreptococcus, Finegoldia, Anaerococcus, Micromonas, Peptoniphilus, Atopobium</i>, and <i>Schleiferella</i>. Genus-level differentiation is rarely needed clinically.</p>
      <p><b>Epidemiology:</b> Normal commensals of the oral cavity, GI tract, GU tract, and skin; cause endogenous <b>polymicrobial infections</b> when mucosal or skin barriers are breached.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Polymicrobial Synergy:</b> Act synergistically with aerobic and anaerobic partners in devitalized or hypoxic tissues to form deep pyogenic abscesses.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Site-Specific Endogenous Infections:</b> Upper airway/oral &rarr; <b>sinusitis, brain abscess, pleuropulmonary abscess</b>; GI &rarr; <b>intraabdominal abscess</b>; GU &rarr; <b>endometritis, salpingitis, pelvic/tubo-ovarian abscess</b>; Skin &rarr; <b>cellulitis, soft-tissue infection</b>; Blood &rarr; <b>osteomyelitis, endocarditis</b>.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Anaerobic Collection &amp; Culture:</b> Avoid mucosal contamination, transport in an <b>oxygen-free container</b>, and incubate anaerobically for <b>5–7 days</b> (confirm true anaerobes by verifying no growth in air + 10% CO<sub>2</sub>).</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Broad-Spectrum Polymicrobial Coverage:</b> Susceptible to <b>Penicillins and Carbapenems</b> (intermediate to cephalosporins, clindamycin, macrolides, tetracyclines; <b>resistant to aminoglycosides</b>, as are all anaerobes). Combine with drainage and aerobic coverage.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Anaerobe Aminoglycoside Resistance:</b> All obligate anaerobes are intrinsically resistant to aminoglycosides because oxygen-dependent active transport is required for drug uptake.</li>
      </ul>
    `
  },
  {
    id: "bacteroides_fragilis",
    name: "Bacteroides fragilis",
    chapter: "Ch. 30: Non-Spore-Forming Anaerobic Bacteria",
    tags: [
      "Gram-Negative", "Gram-Variable / Poorly Staining", "Non-Acid-Fast", "Regular / Uniform Rods",
      "Obligate Anaerobe", "Extracellular", "Non-Spore-Forming",
      "Catalase (+)", "Non-Motile",
      "Bile Esculin Agar (Black)",
      "Polysaccharide Capsule",
      "Impetigo / Folliculitis / Abscesses", "Necrotizing Fasciitis / Gas Gangrene", "Sepsis / Septic Shock", "Watery Secretory Diarrhea", "Brain Abscess",
      "Intrinsically Cephalosporin-Resistant"
    ],
    triggerWords: [
      "Most Important Anaerobic Gram-Negative Rod (#1 Anaerobe in Intraabdominal Abscesses & Bacteremia)",
      "Polysaccharide Capsule (Major Virulence Factor — Stimulates Abscess Formation & Peritoneal Adherence)",
      "Modified LPS Lipid A Has LITTLE OR NO Endotoxin Activity!",
      "Growth Stimulated by Bile — Black Colonies on Bacteroides Bile-Esculin (BBE) Agar (Gentamicin Resistant)",
      "Aerotolerant Survival (Catalase + & Superoxide Dismutase +)",
      "Enterotoxigenic B. fragilis (Heat-Labile Zinc Metalloprotease → Watery Diarrhea in Children <5)",
      "Beta-Lactamase (+) & Clindamycin Resistance Common — Treat with Metronidazole, Carbapenems, or Piperacillin-Tazobactam"
    ],
    overview: `
      <p><b>What it is:</b> <i>Bacteroides fragilis</i> (alongside <i>B. thetaiotaomicron</i>) is a rapidly growing, pleomorphic, faintly staining, <b>obligate anaerobic Gram-negative rod</b> whose growth is characteristically <b>stimulated by bile</b>. Despite representing &lt;1% of normal colonic flora, it is the <b>#1 anaerobe isolated from intraabdominal abscesses and clinically significant anaerobic bacteremia</b>.</p>
      <p><b>Unique Cell Wall:</b> Unlike aerobic Gram-negative rods, <i>B. fragilis</i> LPS has <b>little or no endotoxin activity</b> because its lipid A lacks phosphate groups on glucosamine residues and has fewer fatty acid chains.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Polysaccharide Capsule (Major Virulence Factor):</b> Antiphagocytic, mediates peritoneal surface adherence, and directly stimulates leukocyte migration and <b>abscess formation</b>.</li>
        <li><b>Oxygen Tolerance &amp; Short-Chain Fatty Acids:</b> Produces <b>catalase and superoxide dismutase</b> to survive transient oxygen exposure during tissue invasion; succinic acid inhibits phagocytic killing.</li>
        <li><b><i>B. fragilis</i> Enterotoxin (Enterotoxigenic Strains):</b> Heat-labile zinc metalloprotease causing F-actin rearrangement, chloride/fluid secretion, and IL-8–mediated mucosal inflammation.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Intraabdominal &amp; Liver Abscesses:</b> #1 anaerobic pathogen following bowel perforation, ruptured appendicitis, or abdominal surgery (polymicrobial with <i>E. coli</i> / <i>Enterococcus</i>).</li>
        <li><b>Gynecologic, Skin/Soft-Tissue &amp; Necrotizing Fasciitis:</b> Pelvic/tubo-ovarian abscesses, foul-smelling perineal/post-hemorrhoidectomy synergistic myonecrosis/fasciitis, and #1 anaerobic cause of bacteremia.</li>
        <li><b>Gastroenteritis:</b> Enterotoxigenic strains cause self-limited watery diarrhea, mostly in children &lt;5 years.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Microscopy &amp; Selective Culture:</b> Faintly staining pleomorphic Gram-negative rods. Grows rapidly (&le;2 days) anaerobically on <b>Bacteroides Bile-Esculin (BBE) agar</b> (stimulated by bile, resistant to gentamicin, hydrolyzes esculin &rarr; <b>black precipitate</b>). Definitive ID by MALDI-TOF MS.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Surgical Drainage + Anaerobic Antibiotics:</b> Virtually all isolates produce <b>&beta;-lactamases</b> (resistant to penicillin and many cephalosporins), and plasmid-mediated clindamycin resistance is common. Best agents: <b>Metronidazole, Carbapenems (imipenem, meropenem), and &beta;-lactam/&beta;-lactamase inhibitors (piperacillin-tazobactam)</b>.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>BBE Agar (Bacteroides Bile-Esculin):</b> Selective/differential anaerobic agar containing 20% bile and gentamicin; <i>B. fragilis</i> thrives and blackens the agar via esculin hydrolysis.</li>
      </ul>
    `
  },
  {
    id: "fusobacterium_species",
    name: "Fusobacterium species (F. nucleatum, F. necrophorum)",
    chapter: "Ch. 30: Non-Spore-Forming Anaerobic Bacteria",
    tags: [
      "Gram-Negative", "Gram-Variable / Poorly Staining", "Non-Acid-Fast", "Fusiform / Spindle-Shaped Rods",
      "Obligate Anaerobe", "Extracellular", "Non-Spore-Forming",
      "Non-Motile",
      "Brain Abscess", "Epiglottitis / Otitis / Sinusitis", "Pharyngitis / Scarlet Fever", "Sepsis / Septic Shock"
    ],
    triggerWords: [
      "Thin, Elongated, Spindle-Shaped (Fusiform) Anaerobic Gram-Negative Rods with Tapered Ends",
      "Head & Neck Infections (Periodontitis, Chronic Sinusitis/Otitis, Pharyngitis)",
      "Aspiration Pleuropulmonary Infections, Polymicrobial Brain Abscesses & Bacteremia"
    ],
    overview: `
      <p><b>What it is:</b> <i>Fusobacterium</i> species (most importantly <i>F. nucleatum</i> and <i>F. necrophorum</i>; "spindle rod") are thin, faintly staining, <b>elongated anaerobic Gram-negative rods with pointed/tapered ends</b>.</p>
      <p><b>Epidemiology:</b> Predominant anaerobic commensals of the oral cavity and upper respiratory tract; invade endogenously into head/neck tissues, lungs (via aspiration), brain, and bloodstream.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Mucosal Adherence &amp; Polymicrobial Tissue Invasion:</b> Co-aggregates with oral anaerobes and aerobes in deep periodontal, pharyngeal, sinus, and aspiration abscesses.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Head, Neck &amp; CNS Infections:</b> Chronic sinusitis, otitis, periodontal disease, severe pharyngitis/septic thrombophlebitis, and polymicrobial <b>brain abscesses</b> (direct extension from sinusitis/otitis).</li>
        <li><b>Aspiration Pneumonia &amp; Bacteremia:</b> Lower respiratory anaerobic infections (especially in alcoholics) and anaerobic bacteremia.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Microscopy &amp; Culture:</b> Characteristic thin, elongated, faintly staining <b>fusiform (spindle-shaped) Gram-negative rods</b>; fastidious anaerobic growth (&ge;3 days); definitive ID via MALDI-TOF MS.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Drainage + Antimicrobials:</b> Some isolates produce &beta;-lactamases; treat serious infections with <b>Metronidazole, Carbapenems, or &beta;-lactam/&beta;-lactamase inhibitors</b> alongside drainage.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Fusiform Morphology:</b> Elongated, needle- or spindle-shaped bacilli with sharply tapered ends characteristic of <i>Fusobacterium</i>.</li>
      </ul>
    `
  },
  {
    id: "prevotella_porphyromonas",
    name: "Prevotella & Porphyromonas species",
    chapter: "Ch. 30: Non-Spore-Forming Anaerobic Bacteria",
    tags: [
      "Gram-Negative", "Gram-Variable / Poorly Staining", "Non-Acid-Fast", "Coccobacilli / Tiny Pleomorphic Rods",
      "Obligate Anaerobe", "Extracellular", "Non-Spore-Forming",
      "Non-Motile",
      "Polysaccharide Capsule",
      "Brain Abscess", "Epiglottitis / Otitis / Sinusitis", "Impetigo / Folliculitis / Abscesses", "Urethritis / Cervicitis / PID"
    ],
    triggerWords: [
      "Very Small, Faintly Staining Anaerobic Gram-Negative Rods (Pigmented Porphyromonas)",
      "P. melaninogenica, P. intermedia & Porphyromonas gingivalis (Head/Neck, Periodontitis, Aspiration, Brain Abscess)",
      "Prevotella bivia & P. disiens (Gynecologic Infections — PID, Endometritis, Pelvic Abscess)",
      "Ig-Degrading Proteases & Fimbriae (TNF-α / IL-1β Induction); Beta-Lactamase Producers"
    ],
    overview: `
      <p><b>What it is:</b> <i>Prevotella</i> (<i>P. melaninogenica, P. intermedia, P. bivia, P. disiens</i>) and <i>Porphyromonas</i> (<i>P. gingivalis, P. asaccharolytica</i>; "purple/pigmented rods") are very small, faintly staining, fastidious <b>obligate anaerobic Gram-negative rods</b> that outnumber aerobes 10- to 1000-fold on mucosal surfaces.</p>
      <p><b>Epidemiology:</b> Endogenous oral, respiratory, GI, and female genital tract commensals causing polymicrobial infections above and below the diaphragm.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Fimbriae, Capsule &amp; Proteases:</b> <i>P. gingivalis</i> fimbriae bind epithelium and trigger TNF-&alpha;/IL-1&beta;; <i>P. melaninogenica</i> has an antiphagocytic capsule aiding peritoneal adherence; both genera secrete <b>immunoglobulin-degrading proteases</b>.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Head, Neck &amp; Brain Infections:</b> Periodontitis, chronic sinusitis/otitis, aspiration pleuropulmonary infections, and polymicrobial <b>brain abscesses</b> (<i>P. melaninogenica, P. intermedia, P. gingivalis</i>).</li>
        <li><b>Gynecologic &amp; Intraabdominal Infections:</b> <i>P. bivia</i> and <i>P. disiens</i> are major anaerobes in PID, endometritis, and pelvic abscesses; <i>P. melaninogenica</i> contributes to intraabdominal infections.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Anaerobic Culture &amp; ID:</b> Fastidious, requiring &ge;3 days of strict anaerobic incubation (pigmented brown-black colonies in <i>Porphyromonas</i> / <i>P. melaninogenica</i>); identified by MALDI-TOF MS.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Antimicrobials:</b> Many species produce <b>&beta;-lactamases</b>; best treated with <b>Metronidazole, Carbapenems, or &beta;-lactam/&beta;-lactamase inhibitors</b> plus surgical drainage.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Pigmented Oral Anaerobes:</b> <i>Porphyromonas</i> and <i>Prevotella melaninogenica</i> produce dark heme-derived pigments on blood agar and dominate oral/head-and-neck anaerobic infections.</li>
      </ul>
    `
  }
);