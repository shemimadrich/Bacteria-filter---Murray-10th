// Chapter 20: Listeria and Related Gram-Positive Bacteria (Rich Study Edition)
// Automatically plugs into window.BACTERIA_DB in index.html

window.BACTERIA_DB.push(
  {
    id: "listeria_monocytogenes",
    name: "Listeria monocytogenes",
    chapter: "Ch. 20: Listeria and Related Gram-Positive Bacteria",
    tags: [
      "Gram-Positive", "Non-Acid-Fast", "Regular / Uniform Rods", "Coccobacilli / Tiny Pleomorphic Rods",
      "Facultative Anaerobe", "Facultative Intracellular", "Non-Spore-Forming",
      "Catalase (+)", "Oxidase (-)", "Beta-Hemolytic (Complete)", "Motile", "Tumbling Motility (25°C)", "Actin-Rocket Motility",
      "Cold Enrichment (4°C)", "Halophilic (Salt-Loving)",
      "CAMP Test / Hippurate (+)",
      "Cytolytic / Pore-Forming Toxin",
      "Neonatal Meningitis", "Community-Acquired Meningitis", "Sepsis / Septic Shock", "Watery Secretory Diarrhea",
      "Deli Meats / Soft Cheese", "Unpasteurized Dairy / Livestock", "Intrinsically Cephalosporin-Resistant", "Transfusion-Associated Sepsis"
    ],
    triggerWords: [
      "Tumbling Motility at Room Temp (25°C)", "Actin-Rocket Motility (ActA)",
      "Listeriolysin O (Phagolysosome Escape)", "Cold Enrichment (Grows at 4°C)",
      "Weak Beta-Hemolysis & Catalase (+)", "Deli Meats & Unpasteurized Soft Cheese",
      "Granulomatosis Infantiseptica", "Neonatal / Elderly / Immunocompromised Meningitis",
      "Intrinsically Cephalosporin-Resistant (Treat with Ampicillin + Gentamicin)"
    ],
    overview: `
      <p><b>What it is:</b> <i>Listeria monocytogenes</i> is a short (0.4–0.5 &times; 0.5–2 &mu;m), nonbranching, non–spore-forming, facultatively anaerobic <b>Gram-positive rod (coccobacillus)</b>. It appears singly, in pairs, or in short chains and can easily be mistaken on Gram stain for <i>Streptococcus pneumoniae</i>—a critical pitfall because both cause meningitis.</p>
      <p><b>Physiology &amp; Habitat:</b> Ubiquitous in soil, water, and the feces of mammals, birds, and fish (1%–5% fecal carriage in healthy humans). Uniquely capable of growing across a broad temperature range (<b>1°C–45°C</b>, meaning it multiplies during prolonged refrigeration!) and in high salt concentrations. Although uncommon, it is the leading cause of foodborne illness deaths in the United States.</p>
      <p><b>High-Risk Populations:</b> Because clearance relies on <b>cell-mediated immunity</b> (not humoral antibodies), severe disease is concentrated in <b>neonates, pregnant women (especially 3rd trimester), the elderly, and patients with cellular immune defects</b> (organ transplants, lymphomas, AIDS, TNF-&alpha; inhibitors like infliximab).</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Facultative Intracellular Survival:</b> Survives stomach acid, bile salts, and proteolytic enzymes via stress-response genes after ingestion of contaminated food.</li>
        <li><b>Internalins (InlA &amp; InlB):</b> Surface proteins that bind host cell glycoprotein receptors (e.g., E-cadherin on enterocytes and M cells in Peyer patches), triggering bacterial internalization.</li>
        <li><b>Listeriolysin O &amp; Phospholipase C:</b> Activated by the acidic pH of the host phagolysosome; this pore-forming cytolysin and two phospholipase C enzymes lyse the phagolysosomal membrane, releasing <i>Listeria</i> into the host cell cytosol to replicate.</li>
        <li><b>ActA (Actin-Rocket Motility):</b> Localized at one pole of the bacterium, ActA coordinates host actin filament assembly into a tail that propels the bacterium to the plasma membrane, forming a protrusion (filopod) that pushes it directly into an adjacent cell—spreading cell-to-cell while evading antibodies and complement.</li>
        <li><b><i>prfA</i> (Positive Regulatory Factor):</b> Master regulatory gene controlling the virulence gene cluster for membrane lysis, intracellular replication, and actin-based motility.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Early-Onset Neonatal Disease (In Utero / Transplacental):</b> Can cause spontaneous abortion, stillbirth, or premature birth. The severe disseminated form, <b>granulomatosis infantiseptica</b>, produces abscesses and granulomas across multiple organs with high mortality unless promptly treated.</li>
        <li><b>Late-Onset Neonatal Disease (2–3 Weeks Postpartum):</b> Acquired at or soon after birth; presents as <b>meningitis or meningoencephalitis with septicemia</b> (clinically indistinguishable from Group B <i>Streptococcus</i>).</li>
        <li><b>Infections in Pregnant Women:</b> Most common in the 3rd trimester; presents as a nonspecific influenza-like febrile illness or primary bacteremia that may resolve in the mother while posing severe risk to the fetus.</li>
        <li><b>Disease in Healthy Adults:</b> Usually asymptomatic, mild flu-like illness, or acute self-limited <b>gastroenteritis</b> (1-day incubation followed by ~2 days of watery diarrhea, fever, nausea, headache, myalgias, and arthralgias).</li>
        <li><b>Adult Meningitis &amp; Primary Bacteremia:</b> Meningitis is the most common form of disseminated disease in adults (20%–50% mortality and frequent neurologic sequelae); must always be suspected in transplant recipients, cancer patients, elderly adults, and pregnant women.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Microscopy (Often Negative in CSF):</b> CSF Gram stain is typically negative because bacterial concentration (&le;10<sup>4</sup> CFU/mL) is below the 10<sup>5</sup> CFU/mL detection threshold. When seen, they appear as intracellular and extracellular Gram-positive coccobacilli (some decolorize easily).</li>
        <li><b>Culture &amp; Cold Enrichment:</b> Grows on conventional media in 1–2 days as small round colonies with <b>weak &beta;-hemolysis</b> on sheep blood agar. <b>Cold enrichment (prolonged refrigeration at 4°C)</b> selectively recovers <i>Listeria</i> from heavily contaminated specimens.</li>
        <li><b>Preliminary Hallmarks:</b> <b>Catalase (+)</b>, <b>CAMP (+)</b> (block-shaped hemolysis), hippurate (+), and characteristic end-over-end <b>tumbling motility at room temperature (25°C)</b> in broth (or umbrella-shaped motility in semisolid agar; less motile at 37°C). Any Gram-positive rod from blood or CSF must be identified to distinguish <i>Listeria</i> from skin-contaminant <i>Corynebacterium</i>.</li>
        <li><b>Definitive Identification &amp; NAAT:</b> Multiplex CNS PCR panels rapidly detect <i>L. monocytogenes</i> in CSF; MALDI-TOF MS or sequencing confirms isolates. PFGE and whole-genome sequencing track foodborne outbreaks (serotypes 1/2a, 1/2b, 4b cause most human disease).</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Treatment of Choice:</b> Because most drugs are only bacteriostatic, serious infections require bactericidal synergy with <b>Ampicillin (or Penicillin) + Gentamicin</b> (similar to <i>Enterococcus</i>).</li>
        <li><b>Intrinsic Cephalosporin Resistance:</b> <i>Listeria</i> is <b>naturally resistant to all cephalosporins</b> (why empiric meningitis regimens in neonates, elderly &gt;50, and immunocompromised hosts MUST add ampicillin to ceftriaxone + vancomycin!).</li>
        <li><b>Alternatives:</b> <b>Trimethoprim-sulfamethoxazole (TMP-SMX)</b> is bactericidal and effective in penicillin-allergic patients. Linezolid, daptomycin, and tigecycline show in vitro activity; resistance to macrolides, fluoroquinolones, and tetracyclines occurs.</li>
        <li><b>Prevention:</b> No vaccine exists. High-risk patients (pregnant, elderly, immunocompromised) should avoid unpasteurized milk/soft cheeses, raw or undercooked deli meats/hot dogs, and unwashed raw vegetables.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Listeriolysin O:</b> Acid-activated, pore-forming cytolysin that lyses the host phagolysosome so <i>Listeria</i> can escape into the cytosol.</li>
        <li><b>ActA:</b> Polar surface protein that recruits host actin filaments for intracellular "actin-rocket" propulsion and direct cell-to-cell spread.</li>
        <li><b>Granulomatosis Infantiseptica:</b> Severe early-onset transplacental neonatal listeriosis characterized by disseminated multi-organ abscesses and granulomas.</li>
        <li><b>Cold Enrichment:</b> Refrigerating specimens (4°C) to allow psychrotrophic <i>Listeria</i> to multiply while suppressing competing flora.</li>
      </ul>
    `
  },
  {
    id: "erysipelothrix_rhusiopathiae",
    name: "Erysipelothrix rhusiopathiae",
    chapter: "Ch. 20: Listeria and Related Gram-Positive Bacteria",
    tags: [
      "Gram-Positive", "Gram-Variable / Poorly Staining", "Non-Acid-Fast", "Regular / Uniform Rods",
      "Microaerophilic", "Capnophilic (Requires CO2)", "Extracellular", "Non-Spore-Forming",
      "Catalase (-)", "Oxidase (-)", "Alpha-Hemolytic (Partial/Green)", "Gamma-Hemolytic (Non-Hemolytic)", "Non-Motile",
      "H2S Production (+)",
      "Polysaccharide Capsule",
      "Erysipelas / Cellulitis", "Subacute / Culture-Negative Endocarditis", "Sepsis / Septic Shock",
      "Fish / Shellfish / Marine Water", "Unpasteurized Dairy / Livestock", "Intrinsically Vancomycin-Resistant"
    ],
    triggerWords: [
      "Erysipeloid (Violaceous Raised Hand/Finger Lesion — Non-Suppurative)",
      "Occupational Zoonosis (Butchers, Fish Handlers, Swine/Turkey Workers)",
      "Catalase (-), Non-Motile, H2S (+) Gram-Positive Rod",
      "Intrinsically Vancomycin-Resistant (Treat with Penicillin)",
      "Subacute Endocarditis on Previously Undamaged Aortic Valve"
    ],
    overview: `
      <p><b>What it is:</b> <i>Erysipelothrix rhusiopathiae</i> is a slender (0.2–0.5 &times; 0.8–2.5 &mu;m), non–spore-forming, microaerophilic <b>Gram-positive rod</b> that sometimes forms long "hairlike" filaments (up to 60 &mu;m) and readily decolorizes to appear Gram-negative.</p>
      <p><b>Epidemiology (Occupational Zoonosis):</b> Ubiquitous worldwide on the tonsils and digestive tracts of wild and domestic animals—especially <b>swine, turkeys, and fish</b>. Resistant to drying, high salt, pickling, and smoking, surviving months to years in organic-rich soil. Human infection is primarily occupational in <b>butchers, meat processors, farmers, poultry workers, fish handlers, and veterinarians</b> via subcutaneous inoculation through an abrasion or puncture wound.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Neuraminidase:</b> Thought to mediate bacterial attachment to and penetration into host epithelial cells.</li>
        <li><b>Polysaccharide-Like Capsule:</b> Protects the bacterium from host phagocytosis.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Erysipeloid (Localized Cutaneous Infection):</b> Develops 2–7 days after skin trauma (typically fingers or hands) as a <b>painful, pruritic, burning/throbbing violaceous inflammatory plaque with a raised edge</b> that slowly spreads peripherally as the center fades. Crucially, <b>suppuration (pus) is absent</b>, distinguishing it from streptococcal erysipelas.</li>
        <li><b>Generalized Cutaneous Disease:</b> Diffuse violaceous skin lesions spreading locally or to distant sites accompanied by fever and arthralgias; blood cultures are typically negative.</li>
        <li><b>Septicemia &amp; Endocarditis:</b> Uncommon, but when bacteremia occurs it is strongly associated with <b>subacute (or acute) endocarditis</b>—notably affecting <b>previously undamaged native heart valves (especially the aortic valve)</b>, often in patients with occupational exposure and alcoholism.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Specimen Collection (Deep Tissue Required!):</b> Because the rods reside only in the deep dermis/subcutaneous tissue, surface swabs are negative; <b>full-thickness skin biopsy or deep aspirates from the lesion margin</b> are required.</li>
        <li><b>Culture &amp; Microscopy:</b> Gram stain is typically negative (thin Gram-positive rods that decolorize easily). Grows slowly (incubate &ge;3 days) on conventional media in <b>5%–10% CO<sub>2</sub></b> as a mixture of tiny smooth colonies (easily overlooked) and larger rough colonies.</li>
        <li><b>Key Biochemical Differentiators (vs. <i>Listeria</i>):</b> <b>Catalase (-)</b>, <b>Non-Motile</b>, and uniquely among Gram-positive rods produces <b>hydrogen sulfide (H<sub>2</sub>S +)</b> on triple-sugar iron (TSI) agar. Serology is not useful.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Drug of Choice:</b> <b>Penicillin</b> is first-line for both localized erysipeloid and systemic endocarditis.</li>
        <li><b>Critical Resistance Alert:</b> <i>E. rhusiopathiae</i> is <b>intrinsically resistant to Vancomycin</b>—a dangerous trap if empiric vancomycin is started for Gram-positive bacteremia or endocarditis before species identification!</li>
        <li><b>Penicillin-Allergic Alternatives:</b> Oral <b>ciprofloxacin</b> or <b>clindamycin</b> for localized skin disease; IV <b>ceftriaxone</b> or <b>imipenem</b> for disseminated disease/endocarditis. Variable susceptibility to macrolides, sulfonamides, and aminoglycosides.</li>
        <li><b>Prevention:</b> Protective gloves and skin coverings for high-risk workers; vaccination is used to control disease in swine.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Erysipeloid:</b> Painful, pruritic, violaceous, non-suppurative localized skin lesion on the fingers/hands caused by <i>E. rhusiopathiae</i> ("red skin disease").</li>
        <li><b>H<sub>2</sub>S (+) Gram-Positive Rod:</b> Unique biochemical hallmark on TSI agar separating <i>Erysipelothrix</i> from <i>Listeria</i> and <i>Corynebacterium</i>.</li>
      </ul>
    `
  },
  {
    id: "corynebacterium_diphtheriae",
    name: "Corynebacterium diphtheriae",
    chapter: "Ch. 20: Listeria and Related Gram-Positive Bacteria",
    tags: [
      "Gram-Positive", "Non-Acid-Fast", "Club-Shaped / Chinese-Letter Diphtheroids",
      "Facultative Anaerobe", "Extracellular", "Non-Spore-Forming",
      "Catalase (+)", "Oxidase (-)", "Non-Motile",
      "Cysteine-Tellurite / Tinsdale Agar",
      "Elek Test (+)",
      "AB Toxin: Inhibits EF-2",
      "Diphtheria Pseudomembrane", "Pharyngitis / Scarlet Fever", "Cutaneous Eschar / Ulcer", "Subacute / Culture-Negative Endocarditis", "Myocarditis / Pericarditis"
    ],
    triggerWords: [
      "Club-Shaped / Chinese-Letter Pleomorphic Rods", "Metachromatic (Babes-Ernst) Granules",
      "Gray-Black Colonies on Cysteine-Tellurite / Brown Halo on Tinsdale Agar",
      "Diphtheria Toxin (Beta-Phage / tox Gene — AB Toxin Inhibiting EF-2)",
      "Firmly Adherent Gray Pseudomembrane (Bleeds if Scraped)",
      "Myocarditis & Cranial/Peripheral Neuropathy", "Elek Immunodiffusion Test (+)",
      "Treat Immediately with Antitoxin + Penicillin/Erythromycin"
    ],
    overview: `
      <p><b>What it is:</b> <i>Corynebacterium diphtheriae</i> is an irregularly staining, pleomorphic, <b>club-shaped Gram-positive rod</b> (arranged in palisades or "Chinese-letter" V/L formations). Its cell wall contains arabinose, galactose, <i>meso</i>-DAP, and <b>short-chain mycolic acids (22–36 carbons)</b>—too short to be acid-fast. Subdivided into 4 biotypes (<i>belfanti, gravis, intermedius, mitis</i>; most disease is biotype <i>mitis</i>).</p>
      <p><b>Epidemiology:</b> <b>Humans are the only known reservoir</b>, maintained by asymptomatic oropharyngeal or skin carriage in immune individuals and transmitted via respiratory droplets or skin contact. Rare in vaccinated countries (14 US cases 1996–2018; 10,107 global cases in 2020) and linked to unimmunized populations, crowding, or travel to endemic areas.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Diphtheria Exotoxin (Lysogenic &beta;-Phage <i>tox</i> Gene):</b> Classic 58.3-kDa <b>A-B exotoxin</b> secreted and cleaved into disulfide-linked A and B subunits. The organism does NOT need to enter the bloodstream—toxin produced locally disseminates hematogenously to cause systemic damage.</li>
        <li><b>B Subunit (Binding &amp; Translocation):</b> Binds host <b>heparin-binding epidermal growth factor (HB-EGF)</b> receptors—abundant on <b>cardiac and neural cells</b>—and inserts into the endosomal membrane to translocate the A subunit into the cytosol.</li>
        <li><b>A Subunit (Catalytic — Inhibits EF-2):</b> Permanently inactivates <b>elongation factor-2 (EF-2)</b> via ADP-ribosylation, halting protein synthesis and killing the host cell. A single toxin molecule can inactivate a cell's entire EF-2 pool.</li>
        <li><b>DTxR (Diphtheria Toxin Repressor):</b> Chromosomally encoded repressor activated by <b>high iron concentrations</b>, shutting off toxin transcription when iron is abundant (low iron triggers toxin production).</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Respiratory Diphtheria:</b> 2–4 day incubation, sudden malaise, sore throat, low-grade fever, and exudative pharyngitis that evolves into a thick gray-white <b>pseudomembrane</b> (bacteria, fibrin, lymphocytes, plasma cells, necrotic epithelium) over the tonsils, uvula, palate, nasopharynx, or larynx. The membrane is <b>firmly adherent and bleeds when dislodged</b> (unique to diphtheria) and can cause fatal airway obstruction.</li>
        <li><b>Systemic Toxin Complications:</b>
          <ul class="list-circle pl-5 mt-1 space-y-1">
            <li><b>Myocarditis:</b> Develops 1–2 weeks into illness (often as throat symptoms improve), progressing to arrhythmias, congestive heart failure, and death.</li>
            <li><b>Neurotoxicity:</b> Begins with soft palate/pharyngeal paralysis (nasal voice, dysphagia), then oculomotor/ciliary paralysis, progressing to peripheral neuritis.</li>
          </ul>
        </li>
        <li><b>Cutaneous Diphtheria:</b> Acquired via skin contact; forms a papule that evolves into a <b>chronic, nonhealing ulcer</b> sometimes covered by a grayish membrane (often co-infected with <i>S. aureus</i> or <i>S. pyogenes</i>). Highly contagious!</li>
        <li><b>Nontoxigenic Strain Infections:</b> Do not cause classic diphtheria but can cause pharyngitis, septicemia, endocarditis, septic arthritis, osteomyelitis, and abscesses.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Clinical Diagnosis First:</b> Treatment MUST begin immediately based on clinical suspicion—definitive lab confirmation takes at least a week.</li>
        <li><b>Microscopy (Unreliable):</b> Gram stain and methylene blue stain (showing metachromatic granules) are nonspecific and unreliable on throat swabs due to commensal diphtheroids.</li>
        <li><b>Selective Culture (Nasopharynx + Throat Swabs):</b> Inoculate onto blood agar PLUS selective media: <b>Cysteine-Tellurite Blood Agar (CTBA)</b> (gray-to-black colonies from tellurite reduction; long shelf life), <b>Tinsdale medium</b> (best recovery; gray-black colonies with a <b>brown halo</b> from cysteinase activity; short shelf life), or <b>Colistin-Nalidixic Agar (CNA)</b>.</li>
        <li><b>Identification &amp; Toxigenicity Testing (Mandatory!):</b> Identify species via MALDI-TOF MS or sequencing, then confirm toxin production via the <b>Elek test</b> (in vitro immunodiffusion assay — gold standard) or <b>PCR for the <i>tox</i> gene</b> (rapid, though unexpressed <i>tox</i> genes can test positive).</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Diphtheria Antitoxin (Most Critical Step):</b> Administer immediately to neutralize free circulating exotoxin before host cell internalization (once internalized, cell death is irreversible).</li>
        <li><b>Antibiotics &amp; Supportive Care:</b> <b>Penicillin or Erythromycin</b> eliminates <i>C. diphtheriae</i> and halts further toxin production; combine with airway maintenance, bed rest, and isolation.</li>
        <li><b>Active Immunization (Toxoid):</b> Formalin-inactivated toxoid (DTaP/Tdap/Td) given at 2, 4, 6, 15–18 months, 4–6 years, and every 10 years. Natural infection does NOT reliably confer immunity, so recovering patients must be vaccinated!</li>
        <li><b>Close Contacts (Toxigenic Strains):</b> Collect nasopharyngeal cultures, start immediate prophylaxis with <b>erythromycin or penicillin</b>, and give a toxoid booster if &gt;5 years since last dose (applies to both respiratory and cutaneous diphtheria contacts).</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Elek Test:</b> In vitro agar immunodiffusion assay (gold standard) detecting diphtheria toxin production using antitoxin-impregnated filter paper strips.</li>
        <li><b>DTxR:</b> Iron-activated chromosomal repressor protein that inhibits <i>tox</i> gene transcription under high-iron conditions.</li>
        <li><b>Tinsdale Medium:</b> Selective agar containing tellurite and cysteine; <i>C. diphtheriae</i> forms black colonies surrounded by a characteristic brown halo.</li>
      </ul>
    `
  },
  {
    id: "corynebacterium_jeikeium",
    name: "Corynebacterium jeikeium (Group JK)",
    chapter: "Ch. 20: Listeria and Related Gram-Positive Bacteria",
    tags: [
      "Gram-Positive", "Non-Acid-Fast", "Club-Shaped / Chinese-Letter Diphtheroids",
      "Obligate Aerobe", "Extracellular", "Non-Spore-Forming",
      "Catalase (+)", "Oxidase (-)", "Non-Motile",
      "Sepsis / Septic Shock", "Subacute / Culture-Negative Endocarditis",
      "Dental Procedures / Intravascular Catheters"
    ],
    triggerWords: [
      "Multidrug-Resistant Opportunistic Diphtheroid (Group JK)",
      "Lipophilic Corynebacterium (Small Colonies Requiring Lipid-Supplemented Media)",
      "Intravascular Catheter, Shunt & Prosthetic Infections in Immunocompromised Hosts",
      "Treat with Vancomycin"
    ],
    overview: `
      <p><b>What it is:</b> <i>Corynebacterium jeikeium</i> (historically classified as Group JK) is a strictly aerobic, nonmotile, catalase-positive, <b>lipophilic club-shaped Gram-positive rod</b> that colonizes human skin, especially in hospitalized patients.</p>
      <p><b>Clinical Importance:</b> Unlike benign skin diphtheroids often dismissed as contaminants, <i>C. jeikeium</i> is a major <b>multidrug-resistant nosocomial opportunist</b> in neutropenic, hematologic malignancy, and ICU patients with indwelling devices.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Skin Colonization &amp; Foreign-Body Adherence:</b> Readily colonizes hospitalized patients' skin and adheres to intravascular catheters, CSF shunts, and prosthetic heart valves.</li>
        <li><b>Broad Antimicrobial Resistance:</b> Intrinsic and acquired resistance to &beta;-lactams, aminoglycosides, macrolides, and fluoroquinolones allows selection under broad-spectrum hospital antibiotic therapy.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Opportunistic Device &amp; Bloodstream Infections:</b> Septicemia, prosthetic/native-valve endocarditis, surgical wound infections, and infections of indwelling <b>intravascular catheters, shunts, and prostheses</b> in hospitalized or immunocompromised hosts.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Culture &amp; Microscopy:</b> Gram-positive club-shaped rods in clumps/palisades; catalase (+), nonmotile. Because it is <b>lipophilic</b>, it forms tiny slow-growing colonies unless media are supplemented with lipids (e.g., Tween 80).</li>
        <li><b>Identification:</b> MALDI-TOF MS or 16S rRNA sequencing distinguishes <i>C. jeikeium</i> from harmless skin flora; multiple positive blood cultures or catheter-tip cultures support true infection.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Antimicrobial Therapy:</b> Because strains are typically multidrug-resistant (resistant to penicillins, cephalosporins, and aminoglycosides), <b>Vancomycin</b> (or daptomycin/linezolid) is the mainstay of therapy alongside removal of infected catheters or foreign bodies.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Lipophilic Corynebacteria:</b> <i>Corynebacterium</i> species (such as <i>C. jeikeium</i> and <i>C. urealyticum</i>) that require lipid-supplemented media for robust colony growth.</li>
      </ul>
    `
  },
  {
    id: "corynebacterium_urealyticum",
    name: "Corynebacterium urealyticum",
    chapter: "Ch. 20: Listeria and Related Gram-Positive Bacteria",
    tags: [
      "Gram-Positive", "Non-Acid-Fast", "Club-Shaped / Chinese-Letter Diphtheroids",
      "Obligate Aerobe", "Extracellular", "Non-Spore-Forming",
      "Catalase (+)", "Oxidase (-)", "Urease (+)", "Non-Motile",
      "UTI / Pyelonephritis / Staghorn Calculi", "Sepsis / Septic Shock", "Subacute / Culture-Negative Endocarditis"
    ],
    triggerWords: [
      "Rapidly Urease-Positive Diphtheroid", "Alkaline-Encrusted Cystitis & Struvite Stones",
      "Slow-Growing Lipophilic Gram-Positive Rod in Urine", "Multidrug-Resistant (Treat with Vancomycin)"
    ],
    overview: `
      <p><b>What it is:</b> <i>Corynebacterium urealyticum</i> is a slow-growing, lipophilic, strictly aerobic, catalase-positive <b>Gram-positive diphtheroid</b> named for its ability to <b>rapidly hydrolyze urea</b>.</p>
      <p><b>Clinical Importance:</b> An important opportunistic urinary pathogen in elderly, urologically instrumented, catheterized, or renal transplant patients receiving broad-spectrum antibiotics.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Potent Urease Activity:</b> Rapidly splits urinary urea into ammonia, producing highly alkaline urine (pH &gt;8) that damages bladder mucosa and precipitates magnesium ammonium phosphate (struvite) crystals onto the bladder wall.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Urinary Tract Infections:</b> Causes pyelonephritis, struvite calculi, and characteristic <b>alkaline-encrusted cystitis</b> (calcified mucosal plaques in the bladder).</li>
        <li><b>Invasive Opportunistic Disease:</b> Occasionally causes septicemia, endocarditis, and wound infections.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Urine &amp; Culture:</b> Suspect when a patient has alkaline urine, struvite crystals, and pyuria with negative routine 24-hour urine cultures (slow growth requires 48–72 hours of incubation). Rapidly <b>Urease (+)</b>, catalase (+), nonmotile; confirmed by MALDI-TOF MS.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Antimicrobials &amp; Acidification:</b> Multidrug-resistant (similar to <i>C. jeikeium</i>); <b>Vancomycin</b> (or teicoplanin) is the treatment of choice, often combined with urinary acidification and endoscopic removal of encrusted bladder plaques.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Alkaline-Encrusted Cystitis:</b> Chronic calcifying bladder inflammation caused by struvite deposition in persistently alkaline urine due to urease-producing <i>C. urealyticum</i>.</li>
      </ul>
    `
  },
  {
    id: "tropheryma_whipplei",
    name: "Tropheryma whipplei",
    chapter: "Ch. 20: Listeria and Related Gram-Positive Bacteria",
    tags: [
      "Gram-Positive", "Gram-Variable / Poorly Staining", "Non-Acid-Fast", "PAS-Positive Macrophages",
      "Regular / Uniform Rods",
      "Facultative Intracellular", "Non-Spore-Forming", "Non-Motile",
      "Slow-Growing (>7 Days)", "Cell Culture Only",
      "Subacute / Culture-Negative Endocarditis", "Osteomyelitis / Septic Arthritis", "Watery Secretory Diarrhea"
    ],
    triggerWords: [
      "Whipple Disease (Malabsorption, Weight Loss, Arthralgias, CNS/Cardiac Involvement)",
      "PAS-Positive Foamy Macrophages in Small Bowel Lamina Propria",
      "Fastidious Actinomycete (PCR / Biopsy Diagnosis)", "Blood-Culture-Negative Endocarditis"
    ],
    overview: `
      <p><b>What it is:</b> <i>Tropheryma whipplei</i> (Greek: <i>trophe</i> = nourishment, <i>eryma</i> = barrier; named after George Whipple, 1907) is a fastidious, slow-growing, Gram-positive actinomycete (related to coryneform bacteria) that causes <b>Whipple disease</b>.</p>
      <p><b>Clinical Importance:</b> Classically causes chronic systemic malabsorption with migratory arthralgias, diarrhea, weight loss, and potential CNS or cardiac (culture-negative endocarditis) involvement, predominantly in middle-aged men.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Intracellular Persistence in Macrophages:</b> Survives and replicates within phagosomes of macrophages in the intestinal lamina propria and systemic tissues, impairing macrophage activation and lymphatic drainage (causing malabsorption).</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Whipple Disease:</b> Chronic multisystem illness featuring migratory polyarthralgias (often years before GI symptoms), chronic diarrhea/steatorrhea, malabsorption, profound weight loss, lymphadenopathy, hyperpigmentation, and neurologic manifestations (dementia, ophthalmoplegia, oculomasticatory myorhythmia).</li>
        <li><b>Culture-Negative Endocarditis:</b> Can cause isolated subacute blood-culture-negative endocarditis without overt gastrointestinal symptoms.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Histopathology (Duodenal Biopsy):</b> Hallmark finding of villous blunting and massive infiltration of the lamina propria by foamy macrophages packed with <b>Periodic Acid–Schiff (PAS)-positive, diastase-resistant</b> glycoprotein granules (must be acid-fast negative to distinguish from <i>Mycobacterium avium</i> complex!).</li>
        <li><b>PCR / NAAT:</b> Specific PCR on duodenal biopsy, CSF, synovial fluid, or cardiac valve tissue confirms the diagnosis (routine bacterial culture fails; organism grows only in specialized cell culture systems).</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Prolonged CNS-Penetrating Therapy:</b> Initial IV induction with <b>Ceftriaxone</b> (or Meropenem/Penicillin) for 2 weeks followed by at least <b>1 year of oral Trimethoprim-Sulfamethoxazole (TMP-SMX)</b> (or doxycycline + hydroxychloroquine) to eradicate intracellular reservoirs and prevent CNS relapse.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>PAS-Positive Macrophages:</b> Periodic Acid–Schiff staining highlights mucopolysaccharide-rich cell walls of intracellular <i>T. whipplei</i> inside lamina propria macrophages (Ziehl-Neelsen negative, unlike MAC).</li>
      </ul>
    `
  }
);

window.BACTERIA_DB.push(
  {
    id: "arcanobacterium_haemolyticum",
    name: "Arcanobacterium haemolyticum",
    chapter: "Ch. 20: Listeria and Related Gram-Positive Bacteria",
    tags: [
      "Gram-Positive", "Non-Acid-Fast", "Club-Shaped / Chinese-Letter Diphtheroids",
      "Facultative Anaerobe", "Extracellular", "Non-Spore-Forming",
      "Catalase (-)", "Oxidase (-)", "Beta-Hemolytic (Complete)", "Non-Motile",
      "Pharyngitis / Scarlet Fever", "Impetigo / Folliculitis / Abscesses", "Erysipelas / Cellulitis"
    ],
    triggerWords: [
      "Exudative Pharyngitis + Scarlatiniform Rash in Teens & Young Adults", "Classic Mimic of Group A Strep (GAS)",
      "Catalase (-) Pleomorphic Gram-Positive Diphtheroid Rod", "Reverse CAMP Test (+) (Inhibits S. aureus Beta-Hemolysin)",
      "No Rheumatic Fever Risk & Macrolide Susceptible"
    ],
    overview: `
      <p><b>What it is:</b> Formerly classified as <i>Corynebacterium haemolyticum</i>, <i>Arcanobacterium haemolyticum</i> is a facultatively anaerobic, catalase-negative, beta-hemolytic pleomorphic Gram-positive rod (diphtheroid) highlighted in Murray Chapter 79 as an important bacterial cause of <b>exudative pharyngitis in adolescents and young adults</b>.</p>
      <p><b>Clinical Mimicry:</b> It closely mimics <i>Streptococcus pyogenes</i> (Group A Strep) pharyngitis and scarlet fever, often causing diagnostic confusion when rapid strep tests (RADT) return negative.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Phospholipase D (Sphingomyelinase D):</b> Major exotoxin that damages host cell membranes, induces local pharyngeal inflammation/necrosis, and causes the characteristic <b>reverse CAMP reaction</b> on sheep blood agar.</li>
        <li><b>Arcanolysin (Cholesterol-Dependent Cytolysin):</b> Pore-forming toxin that lyses human erythrocytes and pharyngeal epithelial cells.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Adolescent &amp; Young Adult Pharyngitis with Scarlatiniform Rash:</b> Presents with sore throat, pharyngeal exudates, cervical lymphadenopathy, and—in ~50% of patients—a pruritic, erythematous maculopapular or scarlatiniform rash on the trunk and extensor surfaces (sparing palms/soles; unlike GAS, it <b>does NOT cause rheumatic fever</b>).</li>
        <li><b>Wound &amp; Soft-Tissue Infections:</b> Can cause chronic skin ulcers, cellulitis, and abscesses (especially in older or diabetic patients) and rarely invasive sepsis or Lemierre-like peritonsillar infections.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Culture &amp; Hemolysis:</b> Slow-growing (48 hours) small colonies showing narrow <b>beta-hemolysis</b> (more prominent on human or rabbit blood agar than sheep blood agar); <b>Catalase (-)</b> (distinguishes it from <i>Corynebacterium</i> species, which are catalase-positive).</li>
        <li><b>Reverse CAMP Test (+):</b> Phospholipase D <b>inhibits</b> the beta-hemolysin of <i>Staphylococcus aureus</i>, producing a distinctive zone of inhibited hemolysis; confirmed rapidly by <b>MALDI-TOF MS</b>.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Macrolides (Erythromycin / Azithromycin) or Beta-Lactams:</b> Oral <b>erythromycin</b> or <b>azithromycin</b> is commonly favored because penicillin clinical failures/tolerance have been reported; clindamycin and doxycycline are also active. Note: Virtually all strains are <b>resistant to trimethoprim-sulfamethoxazole (TMP-SMX)</b>.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Reverse CAMP Test:</b> Inhibition of <i>S. aureus</i> beta-lysin hemolysis by bacterial phospholipase D (classic for <i>Arcanobacterium haemolyticum</i> and <i>Corynebacterium pseudotuberculosis</i>).</li>
      </ul>
    `
  }
);
