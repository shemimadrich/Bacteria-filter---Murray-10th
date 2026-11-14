// Chapter 20: Listeria and Related Gram-Positive Bacteria
// Interactive Bacteria Database - Medical Microbiology (Murray et al.)

window.BACTERIA_DB = window.BACTERIA_DB || [];
window.BACTERIA_DB.push(
  {
    id: "listeria_monocytogenes",
    name: "Listeria monocytogenes",
    chapter: "Ch. 20: Listeria and Related Gram-Positive Bacteria",
    tags: [
      "Gram-Positive",
      "Non-Acid-Fast",
      "Rods / Bacilli",
      "Small Regular Rods / Coccobacilli",
      "Facultative Anaerobe",
      "Facultative Intracellular",
      "Non-Spore-Forming",
      "Catalase (+)",
      "Coagulase (-)",
      "Oxidase (-)",
      "Beta-Hemolytic (Weak)",
      "Motile (Tumbling at 25°C / Cold Enrichment)",
      "CAMP Test (+)",
      "Halophilic (Salt-Loving)",
      "Psychrotolerant (Cold-Growing 1°C-45°C)",
      "Meningitis / Encephalitis",
      "Neonatal Sepsis / Meningitis",
      "Bacteremia / Sepsis",
      "Gastroenteritis / Foodborne",
      "Granulomatosis Infantiseptica",
      "Pore-Forming Toxin (Listeriolysin O)",
      "Actin Polymerization (ActA / Filopods)",
      "Cephalosporin Resistant (Intrinsic)"
    ],
    triggerWords: [
      "Tumbling Motility at Room Temperature (20°C–25°C)",
      "Cold Growth / Prolonged Refrigeration (Psychrotrophic)",
      "Actin Rockets / Comets (ActA)",
      "Listeriolysin O (LLO)",
      "Granulomatosis Infantiseptica",
      "Unpasteurized Soft Cheeses / Cold Cuts / Deli Meats",
      "Meningitis in Neonates, Elderly, and Immunocompromised",
      "Intrinsic Cephalosporin Resistance (Treat with Ampicillin)"
    ],
    overview: `
      <p><b>What it is:</b> <i>Listeria monocytogenes</i> is a small ($0.4\text{ to }0.5 \times 0.5\text{ to }2\text{ }\mu\text{m}$), non-branching, non-spore-forming, facultatively anaerobic Gram-positive rod. In clinical smears, it frequently appears as single cells, pairs, or short chains (coccobacilli) that can easily be mistaken for <i>Streptococcus pneumoniae</i> or enterococci.</p>
      <p><b>Physiological Resilience & Habitat:</b> <i>L. monocytogenes</i> is an environmental saprophyte found in soil, water, vegetation, and the feces of many animals. It is distinguished by its ability to multiply at high salt concentrations (up to 10% NaCl) and across an extreme temperature range of <b>1°C to 45°C</b>. This allows tiny bacterial inocula in refrigerated food products (e.g., cold cuts, soft cheeses, unpasteurized milk, packaged salads, cantaloupe) to proliferate into massive infectious doses over time.</p>
      <p><b>Epidemiology:</b> Although overall human incidence is low ($\approx 1600$ cases/year in the US), it is the <b>leading cause of death attributed to foodborne bacterial infections</b>, with a mortality rate reaching 20%–50% in vulnerable groups: neonates, pregnant women (third trimester), transplant recipients, lymphoma patients, anti-TNF-treated patients, and the elderly.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Stress Response Activation:</b> Mediated by stress-response genes that allow ingested bacteria to survive gastric acid, proteolytic digestive enzymes, and bile salts in the gastrointestinal tract.</li>
        <li><b>Internalins (InlA & InlB):</b> Surface adhesins that mediate receptor-mediated endocytosis into non-phagocytic cells. <b>Internalin A (InlA)</b> binds to <b>E-cadherin</b> (calcium-dependent epithelial cadherin) on enterocytes and M cells in Peyer patches; <b>Internalin B (InlB)</b> binds the Met receptor tyrosine kinase on hepatocytes and endothelial cells.</li>
        <li><b>Phagosomal Escape (Listeriolysin O & Phospholipases):</b> Following cellular internalization into a phagosome, the drop in pH activates <b>Listeriolysin O (LLO)</b> (a cholesterol-dependent pore-forming cytolysin) and two distinct <b>phospholipase C</b> enzymes (PlcA, a phosphatidylinositol-PLC; and PlcB, a broad-spectrum phosphatidylcholine-PLC). Together, they lyse the vacuolar membrane, releasing the bacterium directly into the host cytoplasm.</li>
        <li><b>Actin-Based Motility (ActA Protein):</b> Located at one pole of the bacterial cell, <b>ActA</b> recruits host Arp2/3 complexes and polymerizes host G-actin into a polarized filament tail ("actin rocket / comet tail"). This propels the bacterium through the host cytoplasm toward the cell periphery.</li>
        <li><b>Filopod Formation & Direct Cell-to-Cell Spread:</b> The moving bacterium pushes the host membrane into a fingerlike protrusion (filopod) that is engulfed by an adjacent macrophage or enterocyte. The bacterium is internalized within a double-membrane vacuole, which is subsequently dissolved by LLO and PlcB. This cycle permits <b>direct cell-to-cell spread while remaining completely shielded from extracellular humoral antibodies and complement</b>.</li>
        <li><b>PrfA Master Regulator:</b> A single transcriptional activator, <b>PrfA</b> (positive regulatory factor A), coordinates the environmental and temperature-dependent upregulation of LLO, ActA, internalins, and phospholipases upon host invasion ($37^\circ\text{C}$).</li>
      </ul>
    `,
    diseases: `
      <p class="font-semibold text-rose-300">A. Neonatal Infections</p>
      <ul class="list-disc pl-5 space-y-1.5 mb-3">
        <li><b>Early-Onset Disease (Granulomatosis Infantiseptica):</b> Acquired transplacentally in utero from a bacteremic mother. Characterized by wide dissemination resulting in intrauterine abortion, stillbirth, premature birth, and diffuse pyogenic granulomas and microabscesses in the fetal liver, spleen, lungs, and brain. Carries an extremely high mortality rate unless recognized and treated immediately.</li>
        <li><b>Late-Onset Disease:</b> Acquired during vaginal delivery or postnatally from hospital/household contacts (appearing 2 to 3 weeks postpartum). Classically manifests as acute <b>purulent meningitis or meningoencephalitis with septicemia</b>; clinically indistinguishable from neonatal Group B streptococcal infection.</li>
      </ul>
      <p class="font-semibold text-rose-300">B. Adult & Immunocompromised Syndromes</p>
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Maternal Listeriosis (Pregnancy):</b> Occurs predominantly in the third trimester when cell-mediated immunity is naturally suppressed. Manifests as a mild, nonspecific influenza-like illness (fever, myalgias, arthralgias, chills) that often resolves spontaneously, but transient bacteremia seeds the placenta and amniotic fluid.</li>
        <li><b>Adult Meningitis & Rhombencephalitis:</b> The most common clinical manifestation of disseminated listeriosis in non-pregnant adults. Strongly clustered in patients with compromised T-cell immunity (solid organ transplants, hematologic malignancies, corticosteroid or infliximab therapy) and elderly individuals ($>65$ years). May present insidiously with cranial nerve palsies, altered mental status, and high CSF protein.</li>
        <li><b>Primary Bacteremia & Sepsis:</b> High-grade fevers, chills, and hypotension in immunocompromised hosts, hemodialysis patients, or cirrhotic individuals.</li>
        <li><b>Acute Febrile Gastroenteritis:</b> Healthy immunocompetent individuals who ingest massive bacterial inocula from contaminated food develop acute, self-limited, non-invasive watery diarrhea, nausea, fever, headache, and abdominal cramping after a 24-hour incubation period.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Microscopy & CSF Gram Stain Limitations:</b> CSF Gram stain is <b>frequently negative (diagnostic pitfall!)</b> because bacterial concentrations in CSF are typically low ($10^2\text{ to }10^4\text{ CFU/mL}$), well below the optical detection limit ($10^5\text{ CFU/mL}$). When visible, they appear as small, pleomorphic, non-spore-forming Gram-positive coccobacilli in pairs or short chains that decolorize easily, mimicking pneumococci or enterococci.</li>
        <li><b>Culture & Cold Enrichment:</b> Proliferates readily on 5% sheep blood agar overnight, forming small, smooth, grayish translucent colonies with a <b>narrow zone of weak $\beta$-hemolysis</b> (often closely resembling Group B streptococci). When specimens are heavily contaminated with mixed flora (e.g., stool, food products), <b>cold enrichment</b> (holding the sample at 4°C for weeks) suppresses competitor flora while permitting psychrotolerant <i>Listeria</i> to multiply.</li>
        <li><b>Diagnostic Motility:</b> In nutrient broth, <i>Listeria</i> demonstrates characteristic <b>end-over-end tumbling motility</b> on wet mounts at room temperature (<b>20°C–25°C</b>), but is non-motile or sluggish at 37°C. In semisolid motility agar, it produces a distinctive <b>"umbrella-shaped" growth pattern</b> below the agar surface at 25°C.</li>
        <li><b>Biochemical Differentiation:</b> <b>Catalase (+)</b> (differentiates it from catalase-negative <i>Streptococcus</i> and <i>Enterococcus</i>), <b>Oxidase (-)</b>, <b>Bile-Esculin (+)</b> (hydrolyzes esculin in 40% bile), and <b>CAMP Test (+)</b> (forms a rectangular or block-like zone of enhanced hemolysis near a perpendicular streak of $\beta$-lysin-producing <i>Staphylococcus aureus</i>, contrasting with the arrowhead zone of <i>S. agalactiae</i>).</li>
        <li><b>Molecular Diagnostics & MALDI-TOF:</b> Rapid commercial multiplex syndromic meningitis/encephalitis PCR panels target <i>L. monocytogenes</i> DNA directly from CSF. MALDI-TOF mass spectrometry and whole-genome sequencing (WGS) provide species-level identification and outbreak tracing.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Crucial Antimicrobial Rule (Intrinsic Cephalosporin Resistance):</b> <i>Listeria</i> is <b>naturally and universally resistant to all cephalosporins</b> (including 3rd-generation agents like ceftriaxone and cefotaxime) due to low binding affinity to its essential penicillin-binding proteins (PBPs). Empiric bacterial meningitis regimens must therefore add <b>ampicillin</b> whenever <i>Listeria</i> is in the differential (neonates, adults $>50$, pregnant women, and immunocompromised patients).</li>
        <li><b>Regimen of Choice for Invasive Disease:</b> High-dose intravenous <b>ampicillin (or penicillin G)</b>, traditionally combined synergistically with an aminoglycoside (<b>gentamicin</b>) for bactericidal killing in meningitis, endocarditis, and granulomatosis infantiseptica.</li>
        <li><b>Penicillin-Allergic Alternative:</b> Intravenous <b>trimethoprim-sulfamethoxazole (TMP-SMX)</b> is bactericidal, penetrates the blood-brain barrier effectively, and serves as the preferred first-line alternative. Linezolid, daptomycin, and meropenem exhibit in vitro activity.</li>
        <li><b>Prevention:</b> Avoid unpasteurized dairy, soft cheeses (brie, camembert, queso fresco), unheated deli meats/hot dogs, and unwashed raw produce during pregnancy or immunosuppression. Wash cutting boards and reheat processed meats until steaming hot.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>ActA:</b> Bacterial surface protein that recruits host Arp2/3 to polymerize actin tails, driving intracellular propulsion and filopod formation.</li>
        <li><b>Internalins (InlA/InlB):</b> Bacterial surface invasins mediating receptor-mediated entry into epithelial cells (via E-cadherin) and hepatocytes (via Met).</li>
        <li><b>Listeriolysin O (LLO):</b> Cholesterol-dependent pore-forming cytolysin activated at acidic pH to rupture the host phagosome.</li>
        <li><b>Psychrotolerant (Psychrotrophic):</b> Capable of sustained survival and replication at low refrigeration temperatures ($1^\circ\text{C}$ to $4^\circ\text{C}$).</li>
        <li><b>Granulomatosis Infantiseptica:</b> Severe, fatal early-onset intrauterine listeriosis characterized by pyogenic granulomas and microabscesses across internal organs.</li>
      </ul>
    `
  },
  {
    id: "corynebacterium_diphtheriae",
    name: "Corynebacterium diphtheriae",
    chapter: "Ch. 20: Listeria and Related Gram-Positive Bacteria",
    tags: [
      "Gram-Positive",
      "Non-Acid-Fast",
      "Rods / Bacilli",
      "Pleomorphic / Club-Shaped Rods",
      "Facultative Anaerobe",
      "Extracellular",
      "Non-Spore-Forming",
      "Catalase (+)",
      "Oxidase (-)",
      "Non-Motile",
      "Metachromatic (Babès-Ernst) Granules",
      "Toxigenic / Phage-Encoded A-B Toxin",
      "Protein Synthesis Inhibitor (EF-2 Inactivation)",
      "Tinsdale / Tellurite Agar (Black Colonies with Brown Halo)",
      "Loeffler Serum Medium",
      "Pharyngitis / Pseudomembrane",
      "Respiratory Diphtheria",
      "Cutaneous Ulcers",
      "Myocarditis / Toxin-Mediated",
      "Neuropathy",
      "Toxoid Vaccine Preventable"
    ],
    triggerWords: [
      "Club-Shaped Rods (Coryneforms / Chinese Letters)",
      "Metachromatic Granules (Babès-Ernst / Methylene Blue)",
      "Diphtheria Toxin (A-B Exotoxin)",
      "Lysogenic Beta-Corynephage (tox Gene)",
      "Inactivation of Elongation Factor-2 (EF-2 ADP-Ribosylation)",
      "Tough Grayish Pharyngeal Pseudomembrane (Bleeds on Scraping)",
      "Bull Neck Cervical Lymphadenopathy",
      "Tinsdale Agar / Cystine-Tellurite (Black Colonies + Brown Halo)",
      "Elek Immunodiffusion Test",
      "Diphtheria Antitoxin (DAT) + DTaP Toxoid Vaccine"
    ],
    overview: `
      <p><b>What it is:</b> <i>Corynebacterium diphtheriae</i> is the etiologic agent of <b>diphtheria</b>, a classic upper respiratory and cutaneous toxemia. It is a slender, pleomorphic, non-motile, non-spore-forming, unencapsulated Gram-positive rod ($0.3\text{ to }0.8 \times 1.0\text{ to }8.0\text{ }\mu\text{m}$). On microscopy, cells display irregular swellings at one end (club-shaped or "coryneform") and arrange in parallel palisades or sharp angular configurations resembling <b>"Chinese characters"</b> or V/L shapes.</p>
      <p><b>Cell Wall Chemistry:</b> Contains arabinose, galactose, <i>meso</i>-diaminopimelic acid (<i>meso</i>-DAP), and <b>short-chain mycolic acids (22 to 36 carbons)</b>. Unlike <i>Mycobacterium</i> and <i>Nocardia</i> (which possess medium-to-long chain mycolic acids), the short-chain mycolates of corynebacteria <b>do not confer acid-fastness</b>.</p>
      <p><b>Epidemiology:</b> Humans are the sole reservoir. The bacterium is carried asymptomatically in the oropharynx or skin of immune individuals and spread person-to-person via airborne respiratory droplets or skin contact. In nations with comprehensive pediatric immunization programs, diphtheria is exceptionally rare, but remains endemic in regions with low vaccine coverage (e.g., parts of Africa, South Asia).</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Diphtheria Exotoxin (A-B Toxin):</b> The primary virulence factor responsible for both the local necrotizing pseudomembrane and systemic cardioneurotoxicity. The structural <i>tox</i> gene is not chromosomal; it is carried by a <b>lysogenic corynebacteriophage ($\beta$-phage)</b> that integrates into the bacterial chromosome via lysogenic conversion.</li>
        <li><b>Processing & Structure:</b> Synthesized as a 62-kDa inactive single polypeptide precursor. Cellular secretion removes the leader peptide, and cleavage by host trypsin-like proteases yields two functional fragments (A and B) linked by a covalent disulfide bond.</li>
        <li><b>Fragment B (Binding & Translocation):</b> The carboxyl-terminal domain binds specifically to the <b>heparin-binding epidermal growth factor-like precursor (HB-EGF)</b>, a cell surface receptor expressed abundantly on human myocardial, cardiac conduction, and neural Schwann cells. Receptor-mediated endocytosis draws the toxin into an endosome; acidification triggers a conformational change that translocates Fragment A across the vesicle membrane into the host cytosol.</li>
        <li><b>Fragment A (Catalytic ADP-Ribosylation):</b> The amino-terminal active catalytic domain transfers an ADP-ribose moiety from host NAD+ onto a modified diphthamide residue of <b>Elongation Factor-2 (EF-2)</b>:
          <div class="bg-slate-900/80 p-2 my-1 rounded text-xs text-emerald-300 font-mono">
            NAD⁺ + EF-2 (active) —[Fragment A]→ Nicotinamide + ADP-ribosyl-EF-2 (inactive) + H⁺
          </div>
          This irreversibly inactivates EF-2, completely blocking the translocation of peptidyl-tRNA on the 80S ribosome and <b>halting host cell protein synthesis</b>. A single molecule of Fragment A can completely inactivate all EF-2 molecules in a host cell, causing necrotic cell death.</li>
        <li><b>Iron Regulation (DTxR Repressor):</b> Toxin synthesis is regulated by the chromosomal iron-dependent protein <b>DTxR</b> (diphtheria toxin repressor). When environmental iron concentrations are high, iron binds DTxR, forming an active complex that binds the <i>tox</i> promoter and represses transcription. Under <b>iron-depleted conditions</b> (such as in host respiratory secretions), the repressor dissociates, triggering maximal toxin production.</li>
      </ul>
    `,
    diseases: `
      <p class="font-semibold text-rose-300">A. Respiratory Diphtheria</p>
      <ul class="list-disc pl-5 space-y-1.5 mb-3">
        <li><b>Clinical Onset & Pseudomembrane Formation:</b> Following a 2- to 4-day incubation period, the organism proliferates locally on pharyngeal mucosal cells, elaborating exotoxin. Onset is insidious with sore throat, malaise, low-grade fever ($<38.5^\circ\text{C}$), and exudative pharyngitis. The necrotized mucosa forms a thick, leathery, adherent <b>gray-to-black pseudomembrane</b> composed of coagulated fibrin, bacteria, polymorphonuclear leukocytes, and necrotic epithelial cells.</li>
        <li><b>Airway Compromise & Bull Neck:</b> The pseudomembrane coats the tonsils, uvula, and soft palate, and can extend down into the larynx, trachea, and bronchial tree. It is <b>tightly adherent; forcible attempts to scrape or dislodge it tear underlying capillaries and cause profuse bleeding</b>. Marked cervical lymphadenopathy and soft-tissue edema produce the classic <b>"bull neck"</b> appearance. Extensive membrane formation and edema can cause fatal mechanical suffocation.</li>
      </ul>
      <p class="font-semibold text-rose-300">B. Systemic Complications (Toxemia)</p>
      <ul class="list-disc pl-5 space-y-1.5 mb-3">
        <li><b>Diphtheritic Myocarditis:</b> Exotoxin enters the bloodstream (the bacteria remain localized to the pharynx and <b>do not cause bacteremia</b>). Cardiac toxicity develops 1 to 2 weeks after onset, frequently as pharyngeal symptoms are resolving. Presents with ST-T changes, AV conduction blocks, fatal ventricular arrhythmias, cardiomegaly, and congestive heart failure.</li>
        <li><b>Neurotoxicity:</b> Proportional to toxin dose. Begins 2 to 6 weeks into illness, initially presenting as <b>soft palate and pharyngeal paralysis</b> (nasal regurgitation of fluids, nasal speech), oculomotor and ciliary paralysis (loss of accommodation, strabismus), progressing to generalized peripheral symmetric polyneuropathy and motor paralysis of the diaphragm.</li>
      </ul>
      <p class="font-semibold text-rose-300">C. Cutaneous Diphtheria</p>
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Chronic Non-Healing Ulcers:</b> Acquired by direct skin contact. The organism enters through an abrasion or insect bite to produce a painful papule that breaks down into a <b>punched-out, chronic, non-healing ulcer</b> covered with a grayish dirty pseudomembrane, frequently co-colonized by <i>S. aureus</i> or <i>S. pyogenes</i>. Systemic toxic complications are rare because low toxin quantities enter the circulation.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Clinical Urgency:</b> Laboratory confirmation takes several days; because delay in antitoxin administration significantly increases mortality, <b>presumptive clinical diagnosis mandates immediate therapy without waiting for laboratory results</b>.</li>
        <li><b>Specimen Collection:</b> Swabs should be taken from both the nasopharynx and directly beneath the edge of the pseudomembrane (avoiding purely superficial swabbing).</li>
        <li><b>Microscopy (Loeffler's Staining):</b> Methylene blue or Albert's stain reveals pleomorphic club-shaped rods containing reddish-purple <b>metachromatic polyphosphate granules (Babès-Ernst bodies)</b> against a blue/green cytoplasmic background. Gram stain alone cannot distinguish <i>C. diphtheriae</i> from benign skin and pharyngeal commensal corynebacteria ("diphtheroids").</li>
        <li><b>Specialized Culture Media:</b> <ul class="list-circle pl-5 mt-1 space-y-1">
          <li><b>Cystine-Tellurite Blood Agar (CTBA):</b> Potassium tellurite inhibits normal respiratory commensals; <i>C. diphtheriae</i> reduces tellurite to produce <b>gray-to-black colonies</b>.</li>
          <li><b>Tinsdale Medium (Gold Standard):</b> Selective agar containing tellurite, sodium thiosulfate, and horse serum. <i>C. diphtheriae</i> degrades cystine via cysteinase activity, generating a distinct <b>dark brown-to-black halo surrounding grayish-black colonies</b>.</li>
          <li><b>Loeffler Serum Slope:</b> Coagulated horse serum slant that enhances rapid growth (12–18 hours) and accentuates pleomorphic morphology and metachromatic granules.</li>
        </ul></li>
        <li><b>Toxigenicity Confirmation (Elek Test):</b> Detecting the presence of <i>C. diphtheriae</i> is insufficient because nontoxigenic strains do not cause diphtheria. Every isolate must undergo toxigenicity testing via the <b>Elek immunodiffusion assay</b>: a filter paper strip impregnated with diphtheria antitoxin is placed across a serum agar plate inoculated perpendicularly with the test strain. If toxin is elaborated, it diffuses against the antitoxin to generate visible white <b>precipitin lines at 45° angles</b>.</li>
        <li><b>Tox Gene PCR:</b> Polymerase chain reaction assays detect the <i>tox</i> gene directly from clinical swabs within hours (though positive PCR indicates presence of the gene, not phenotypic toxin secretion).</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Immediate Equine Diphtheria Antitoxin (DAT):</b> The definitive life-saving intervention. Administered intravenously immediately upon clinical suspicion to neutralize free, unabsorbed circulating toxin. <i>Crucial Concept:</i> Antitoxin can <b>only neutralize uninternalized extracellular toxin</b>; once Fragment A enters host cells and binds EF-2, cell death is inevitable.</li>
        <li><b>Antimicrobial Therapy:</b> Intravenous <b>penicillin G</b> or oral/IV <b>erythromycin (or azithromycin)</b> for 14 days. Antibiotics eliminate the proliferating bacterial population, terminating further toxin secretion, halting local tissue necrosis, and clearing carriage to prevent secondary transmission.</li>
        <li><b>Airway Management & Supportive Care:</b> Strict respiratory droplet isolation, bed rest (myocarditis monitoring), and endotracheal intubation or tracheostomy if the airway is compromised by the pseudomembrane.</li>
        <li><b>Active Immunization Following Recovery:</b> Natural infection does <b>NOT confer protective immunity</b> because the fatal dose of toxin is lower than the immunogenic threshold! Survivors must receive a complete course of <b>diphtheria toxoid</b> upon recovery.</li>
        <li><b>Vaccine Prevention (DTaP / Tdap):</b> Formalin-inactivated diphtheria toxoid is combined with tetanus toxoid and acellular pertussis antigens. Administered in a primary series at 2, 4, 6, and 15–18 months, booster at 4–6 years, and routine <b>Td/Tdap booster every 10 years</b> throughout adulthood.</li>
        <li><b>Management of Close Contacts:</b> Collect nasopharyngeal culture swabs, administer immediate antimicrobial prophylaxis (oral erythromycin for 7–10 days or a single IM benzathine penicillin injection), and provide a toxoid booster if $>5$ years have elapsed since their last dose.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Babès-Ernst Granules:</b> Metachromatic polymetaphosphate storage granules inside corynebacteria that stain reddish-purple with methylene blue.</li>
        <li><b>Coryneform:</b> Club-shaped morphology resembling a battering club (Greek: <i>koryne</i>), arranged in V- or L-shaped palisades.</li>
        <li><b>DTxR:</b> Diphtheria toxin repressor; chromosomal protein that binds iron to repress <i>tox</i> transcription in high-iron environments.</li>
        <li><b>Elek Test:</b> In vitro double immunodiffusion precipitin test used to confirm phenotypic toxin elaboration.</li>
        <li><b>Elongation Factor-2 (EF-2):</b> Essential eukaryotic ribosomal translocation factor inactivated by ADP-ribosylation from diphtheria toxin Fragment A.</li>
        <li><b>Pseudomembrane:</b> Tough, leathery, adherent fibrinous exudate covering the respiratory mucosa that bleeds upon forcible mechanical removal.</li>
        <li><b>Toxoid:</b> Formalin-inactivated bacterial toxin that is nontoxic but retains full immunogenicity to stimulate neutralizing IgG antibodies.</li>
      </ul>
    `
  },
  {
    id: "corynebacterium_jeikeium",
    name: "Corynebacterium jeikeium",
    chapter: "Ch. 20: Listeria and Related Gram-Positive Bacteria",
    tags: [
      "Gram-Positive",
      "Non-Acid-Fast",
      "Rods / Bacilli",
      "Pleomorphic / Club-Shaped Rods",
      "Aerobe",
      "Facultative Anaerobe",
      "Extracellular",
      "Non-Spore-Forming",
      "Catalase (+)",
      "Oxidase (-)",
      "Non-Motile",
      "Lipophilic",
      "Opportunistic / Hospital-Acquired",
      "Catheter / Shunt / Hardware Infection",
      "Bacteremia / Sepsis",
      "Endocarditis",
      "Multidrug Resistant (Vancomycin Only)"
    ],
    triggerWords: [
      "Group JK Corynebacterium",
      "Lipophilic Diphtheroid",
      "Severe Neutropenia / Hematologic Malignancy",
      "Indwelling Vascular Catheter Sepsis",
      "Prosthetic Valve Endocarditis",
      "Broad-Spectrum Multidrug Resistance",
      "Vancomycin Sensitive Only"
    ],
    overview: `
      <p><b>What it is:</b> <i>Corynebacterium jeikeium</i> (originally classified by the CDC as <b>Corynebacterium group JK</b>) is an opportunistic, non-motile, non-spore-forming, pleomorphic Gram-positive rod. It is a strict or facultative aerobe and is <b>lipophilic</b>, showing markedly enhanced colony development when media is supplemented with lipids (e.g., 0.1%–1% Tween 80).</p>
      <p><b>Epidemiology & Hospital Niche:</b> It is part of the normal cutaneous microbiota, predominantly colonizing skin folds (axilla, groin, perineum) in up to 30%–40% of hospitalized patients. In patients receiving broad-spectrum antibiotics, selective pressure leads to substantial cutaneous colonization. It is now recognized as a premier opportunistic hospital-acquired pathogen in patients with severe <b>prolonged neutropenia, hematologic malignancies, or indwelling intravenous foreign bodies</b>.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Biofilm Formation on Hardware:</b> Adheres readily to synthetic biomaterials (silicone catheters, vascular graft Teflon, prosthetic heart valves), producing a protective biofilm that blocks leukocyte penetration and decreases antimicrobial access.</li>
        <li><b>Hydrophobic Cell Wall:</b> Possesses cell-wall lipid components that promote adherence to host epithelial surfaces and intravascular plastics.</li>
        <li><b>Multidrug Resistance Determinants:</b> Carries plasmid- and transposon-mediated resistance genes conferring resistance to virtually all standard beta-lactam and macrolide classes.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Catheter-Related Bloodstream Infections (CRBSI):</b> The most common clinical manifestation. Presents with persistent high fever, rigors, and bacteremia in neutropenic cancer patients with tunneled central lines (e.g., Hickman or Port-a-Cath).</li>
        <li><b>Prosthetic Valve Endocarditis (PVE):</b> Infects mechanical or bioprosthetic valves subacutely, causing leaflet dehiscing, perivalvular abscesses, and systemic emboli.</li>
        <li><b>Surgical Site & Foreign Body Infections:</b> Deep wound infections following cardiothoracic surgery, infected orthopedic prostheses, peritoneal dialysis catheter peritonitis, and CSF shunt infections.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Microscopic Morphology:</b> Pleomorphic, club-shaped Gram-positive bacilli arranged in small clumps and palisades. Often mistaken for harmless skin "diphtheroid" contaminants unless repeated positive cultures from separate venipunctures demonstrate true bacteremia.</li>
        <li><b>Culture Characteristics:</b> Forms pinpoint, smooth, entire colonies on 5% sheep blood agar after 48 hours; growth is significantly accelerated by the addition of <b>lipids (lipophilic phenotype)</b>. Non-hemolytic.</li>
        <li><b>Biochemical Profile:</b> <b>Catalase (+)</b>, <b>Urease (-)</b> (distinguishing it from <i>C. urealyticum</i>), non-fermentative or ferments only glucose oxidatively, nitrate reduction negative.</li>
        <li><b>Species Confirmation:</b> MALDI-TOF mass spectrometry or 16S rRNA gene sequencing.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Notorious Multidrug Resistance (MDR):</b> <i>C. jeikeium</i> is almost universally resistant to penicillins, cephalosporins, carbapenems, aminoglycosides, fluoroquinolones, macrolides, and tetracyclines.</li>
        <li><b>Definitive Regimen:</b> Intravenous <b>vancomycin</b> is the drug of choice. Linezolid, daptomycin, and tigecycline are active alternatives in vitro.</li>
        <li><b>Catheter / Hardware Removal:</b> Because bacterial eradication from established intravascular biofilms is virtually impossible with medical therapy alone, successful cure almost always mandates <b>prompt removal of the infected vascular catheter, shunt, or foreign body</b>.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Diphtheroid:</b> Generic clinical laboratory term for pleomorphic, non-pathogenic corynebacterial species colonizing skin and mucous membranes.</li>
        <li><b>Group JK:</b> Historic CDC taxonomic designation for <i>Corynebacterium jeikeium</i> before formal speciation.</li>
        <li><b>Lipophilic Corynebacteria:</b> Strains whose growth and colony development require or are substantially enhanced by exogenous lipid supplementation.</li>
      </ul>
    `
  },
  {
    id: "corynebacterium_urealyticum",
    name: "Corynebacterium urealyticum",
    chapter: "Ch. 20: Listeria and Related Gram-Positive Bacteria",
    tags: [
      "Gram-Positive",
      "Non-Acid-Fast",
      "Rods / Bacilli",
      "Pleomorphic / Club-Shaped Rods",
      "Aerobe",
      "Extracellular",
      "Non-Spore-Forming",
      "Catalase (+)",
      "Oxidase (-)",
      "Rapid Urease (+)",
      "Non-Motile",
      "Lipophilic",
      "UTI / Pyelonephritis / Staghorn Calculi",
      "Alkaline-Encrusted Cystitis / Struvite Calculi",
      "Opportunistic / Hospital-Acquired",
      "Multidrug Resistant (Vancomycin Only)"
    ],
    triggerWords: [
      "Group D2 Corynebacterium",
      "Rapid & Robust Urease (+)",
      "Alkaline-Encrusted Cystitis (Calcified Bladder Mucosa)",
      "Struvite / Triple-Phosphate Staghorn Calculi",
      "Alkaline Urine (pH > 8.0) with Ammonia Odor",
      "Indwelling Foley Catheter Uropathogen",
      "Multidrug Resistant Gram-Positive Rod"
    ],
    overview: `
      <p><b>What it is:</b> <i>Corynebacterium urealyticum</i> (formerly designated <b>Corynebacterium group D2</b>) is a strictly aerobic, non-motile, slow-growing, lipophilic, pleomorphic Gram-positive rod. It is distinguished by its <b>extraordinarily potent and rapid urease activity</b>.</p>
      <p><b>Epidemiology:</b> It asymptomatically colonizes the skin and perineum of healthy individuals, but expands dramatically in hospitalized patients who have undergone urologic instrumentation, prolonged urinary catheterization, or extensive courses of broad-spectrum antibiotics. It is an opportunistic pathogen of the urinary tract.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Hyper-Urease Secretion:</b> The cardinal virulence factor. The organism produces copious urease that rapidly splits urea in urine into ammonia ($\text{NH}_3$) and carbon dioxide ($\text{CO}_2$):
          <div class="bg-slate-900/80 p-2 my-1 rounded text-xs text-emerald-300 font-mono">
            (NH₂)₂CO + H₂O —[Urease]→ 2 NH₃ + CO₂
          </div>
          Ammonia combines with water to generate ammonium ions ($\text{NH}_4^+$) and free hydroxyl ions ($\text{OH}^-$), driving urinary pH to intensely alkaline levels (<b>pH $> 8.0\text{ to }9.0$</b>).</li>
        <li><b>Urothelial Necrosis:</b> The high concentration of free ammonia and elevated pH directly strips glycosaminoglycans and causes chemical ulceration and necrosis of the bladder transitional epithelium.</li>
        <li><b>Alkaline Mineral Precipitation:</b> Extreme alkalinity exceeds the solubility product of minerals, precipitating ammonium, magnesium, and phosphate to form insoluble <b>struvite (magnesium ammonium phosphate, $\text{MgNH}_4\text{PO}_4\cdot 6\text{H}_2\text{O}$) and carbonate apatite</b> crystals that encrust onto the ulcerated bladder wall and catheter surfaces.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Alkaline-Encrusted Cystitis:</b> A chronic, severely painful inflammatory bladder infection characterized by gross hematuria, severe dysuria, passage of calcified gritty debris in urine, and the formation of hard, calcified, white-to-yellow mineral plaques encrusting the necrotic bladder mucosal wall (visible on cystoscopy and CT imaging).</li>
        <li><b>Encrusted Pyelitis & Staghorn Calculi:</b> Ascending infection leads to chronic renal pelvic inflammation, calcified encrustations of the renal collecting system, and rapid formation of <b>struvite staghorn calculi</b> that can cause hydronephrosis, obstructive uropathy, and progressive renal failure.</li>
        <li><b>Bacteremia:</b> Rarely seeds the bloodstream following urologic procedures or surgical manipulation of infected, obstructed kidneys.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Urinalysis:</b> Turbid, pungent, ammoniacal urine showing <b>strongly alkaline pH ($\ge 8.0$)</b>, microscopic hematuria, pyuria, and abundant <b>"coffin-lid" magnesium ammonium phosphate (triple phosphate / struvite) crystals</b>.</li>
        <li><b>Microscopy & Culture Pitfalls:</b> Gram stain reveals pleomorphic Gram-positive rods. Because it is slow-growing and lipophilic, standard urine cultures read at 24 hours are frequently <b>reported as "no growth" or dismissed as insignificant diphtheroid skin flora</b>! Plates must be incubated for <b>48 to 72 hours</b> (ideally with lipid enrichment like Tween 80).</li>
        <li><b>Biochemical Profile:</b> <b>Urease (+) within minutes</b> (Christensen urea agar turns deep magenta almost instantly), <b>Catalase (+)</b>, <b>Oxidase (-)</b>, asaccharolytic (does not ferment carbohydrates), non-motile.</li>
        <li><b>Definitive Identification:</b> MALDI-TOF MS rapidly differentiates it from other corynebacteria and *S. saprophyticus*.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>High-Level Multidrug Resistance:</b> Resistant to penicillins, cephalosporins, carbapenems, macrolides, and fluoroquinolones.</li>
        <li><b>Antimicrobial Therapy:</b> Intravenous <b>vancomycin</b> is the drug of choice. Teicoplanin is active, and oral linezolid can be utilized for completion of therapy.</li>
        <li><b>Urologic Intervention & Urinary Acidification:</b> Medical antimicrobial therapy alone is ineffective in the presence of calcified plaques; <b>complete transurethral resection/debridement of encrusted bladder plaques and surgical removal of staghorn calculi</b> are required. Pharmacologic urinary acidification (e.g., oral acetohydroxamic acid or citric acid bladder washouts) helps dissolve mineral encrustations.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Alkaline-Encrusted Cystitis:</b> Destructive bladder mucosal inflammation characterized by calcified struvite plaque deposition driven by high bacterial urease.</li>
        <li><b>Group D2:</b> Former taxonomic designation for <i>Corynebacterium urealyticum</i>.</li>
        <li><b>Struvite:</b> Magnesium ammonium phosphate hexahydrate; mineral crystal forming staghorn calculi in alkaline urine.</li>
      </ul>
    `
  },
  {
    id: "erysipelothrix_rhusiopathiae",
    name: "Erysipelothrix rhusiopathiae",
    chapter: "Ch. 20: Listeria and Related Gram-Positive Bacteria",
    tags: [
      "Gram-Positive",
      "Non-Acid-Fast",
      "Rods / Bacilli",
      "Pleomorphic / Slender Filamentous Rods",
      "Microaerophilic",
      "Extracellular",
      "Non-Spore-Forming",
      "Catalase (-)",
      "Oxidase (-)",
      "Non-Motile",
      "H2S Producer (TSI Blackening)",
      "Alpha-Hemolytic (Incomplete)",
      "Erysipeloid / Cutaneous Infection",
      "Endocarditis",
      "Zoonotic / Occupational Risk (Butchers / Fish Handlers)",
      "Vancomycin Resistant (Intrinsic)",
      "Penicillin Susceptible"
    ],
    triggerWords: [
      "Slender Gram-Positive Rod / Hairlike Filaments",
      "H2S Production on TSI Agar (Black Butt)",
      "Catalase Negative & Non-Motile (vs. Listeria)",
      "Erysipeloid (Violaceous Skin Plaque with Central Clearing)",
      "Occupational Disease: Butchers, Swine/Poultry Workers, Fish Handlers",
      "Swine Erysipelas (Diamond Skin Disease in Pigs)",
      "Acute/Subacute Aortic Valve Endocarditis",
      "Intrinsic Resistance to Vancomycin (Treat with Penicillin)"
    ],
    overview: `
      <p><b>What it is:</b> <i>Erysipelothrix rhusiopathiae</i> is a slender, pleomorphic, non-spore-forming Gram-positive bacillus ($0.2\text{ to }0.5 \times 0.8\text{ to }2.5\text{ }\mu\text{m}$). In culture, it has a pronounced tendency to form elongated, tangled, <b>hairlike filaments up to 60 $\mu\text{m}$ in length</b> (Greek: <i>erythros</i> [red], <i>pella</i> [skin], <i>thrix</i> [hair]). It decolorizes readily and can appear Gram-negative on routine smears.</p>
      <p><b>Epidemiology & Animal Reservoir:</b> Distributed worldwide as a commensal or pathogen in domestic and wild animals, particularly <b>swine</b> (in which it causes "swine erysipelas" or "diamond skin disease"), domestic poultry (turkeys), and marine life (coating the slimy cutaneous mucus of fresh and saltwater fish). Humans acquire infection zoonotically via <b>direct occupational cutaneous inoculation</b> through minor abrasions, cuts, or puncture wounds from handling contaminated animal tissues, meat, poultry, or fish.</p>
      <p><b>Occupational High-Risk Groups:</b> Butchers, meatpackers, abattoir workers, farmers, poultry processors, fishermen, fish handlers, and veterinarians ("fish-handler's disease", "whale finger", "seal finger").</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Polysaccharide Microcapsule:</b> Virulent strains produce a thin capsule that confers resistance to opsonization and phagocytic engulfment by polymorphonuclear leukocytes.</li>
        <li><b>Neuraminidase Production:</b> Secretes an extracellular neuraminidase that cleaves terminal $\alpha$-galactosyl residues from host cell glycoproteins. This facilitates attachment, tissue penetration, and cellular invasion into dermal tissues and vascular endothelium.</li>
        <li><b>Intracellular Survival in Phagocytes:</b> Can survive and multiply within macrophages, facilitating persistent local inflammation and systemic hematogenous seeding.</li>
      </ul>
    `,
    diseases: `
      <p class="font-semibold text-rose-300">A. Localized Cutaneous Disease (Erysipeloid)</p>
      <ul class="list-disc pl-5 space-y-1.5 mb-3">
        <li><b>Clinical Presentation:</b> The most common form of human infection. Following a 1- to 7-day incubation period after occupational trauma (usually on the fingers or hands), a painful, throbbing, pruritic, well-demarcated <b>violaceous or purplish-red inflammatory plaque</b> develops.</li>
        <li><b>Distinguishing Features:</b> The lesion expands peripherally with a sharp, raised, erythematous border while the <b>center fades/clears</b>. Crucially, <b>suppuration (pus formation) and vesicle development are absent</b>. Systemic symptoms (fever, chills) are absent or mild. (Must not be confused with streptococcal <i>erysipelas</i>, which is accompanied by bright red erythema, rapid spread, and high spiking fever).</li>
      </ul>
      <p class="font-semibold text-rose-300">B. Generalized Cutaneous Disease</p>
      <ul class="list-disc pl-5 space-y-1.5 mb-3">
        <li>Presents with multiple, migrating, violaceous rhomboid or circular skin lesions appearing at distant cutaneous sites, accompanied by systemic fever and arthralgias, but blood cultures remain negative.</li>
      </ul>
      <p class="font-semibold text-rose-300">C. Septicemia & Severe Endocarditis</p>
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Destructive Endocarditis:</b> Uncommon but well-recognized systemic complication. Strikingly, it exhibits a predilection for attacking <b>previously undamaged native heart valves (particularly the aortic valve)</b>. Associated with extensive paravalvular abscesses, valve leaflet destruction, congestive heart failure, and systemic embolization. Cutaneous lesions may be absent in over a third of bacteremic endocarditis cases.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Biopsy vs. Superficial Swab:</b> The bacteria reside exclusively in the <b>deep dermal layer at the active advancing margin</b> of the erysipeloid lesion. Superficial swabs of the skin surface are universally negative. Diagnosis requires a <b>full-thickness skin biopsy or deep needle aspirate</b> taken from the advancing leading edge.</li>
        <li><b>Microscopy:</b> Gram stain of biopsy tissue shows slender, pleomorphic Gram-positive rods, but organisms may be sparse.</li>
        <li><b>Culture Requirements:</b> Microaerophilic organism (growth favored by <b>5%–10% $\text{CO}_2$</b>). Grows slowly on blood agar (requires $\ge 48\text{ to }72$ hours), forming tiny, smooth, translucent $\alpha$-hemolytic colonies that green the agar. Rough colonies with hairlike filaments appear after prolonged incubation.</li>
        <li><b>Decisive Differentiation from Listeria:</b>
          <div class="bg-slate-900/80 p-2.5 my-1.5 rounded text-xs space-y-1">
            <p>• <b>Motility:</b> <i>Erysipelothrix</i> is <b>Non-Motile</b> (<i>Listeria</i> has tumbling motility at 25°C).</p>
            <p>• <b>Catalase:</b> <i>Erysipelothrix</i> is <b>Catalase (-)</b> (<i>Listeria</i> is Catalase +).</p>
            <p>• <b>H₂S Production:</b> <i>Erysipelothrix</i> produces <b>Hydrogen Sulfide (H₂S)</b> on Triple Sugar Iron (TSI) agar, forming a <b>black precipitate along the stab line</b>. <i>Erysipelothrix</i> is the <u>ONLY</u> medically important Gram-positive rod that produces H₂S on TSI!</p>
          </div>
        </li>
        <li><b>Definitive Confirmation:</b> MALDI-TOF mass spectrometry or 16S rRNA gene sequencing. Serology is unreliable due to poor antibody titers in human infections.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Crucial Diagnostic Trap (Intrinsic Vancomycin Resistance):</b> Like <i>Leuconostoc</i>, <i>Pediococcus</i>, and certain lactobacilli, <i>E. rhusiopathiae</i> is <b>intrinsically resistant to vancomycin and all glycopeptides</b> because its peptidoglycan cell-wall pentapeptide precursors terminate in D-alanine-D-lactate rather than D-alanine-D-alanine, preventing vancomycin binding! Using vancomycin empirically for suspected Gram-positive endocarditis will lead to fatal clinical failure.</li>
        <li><b>Drug of Choice:</b> Exquisitely susceptible to <b>penicillin</b>. Localized erysipeloid is treated with oral penicillin V or amoxicillin (or ciprofloxacin/clindamycin in penicillin-allergic patients).</li>
        <li><b>Systemic & Endocarditis Regimens:</b> High-dose intravenous <b>penicillin G</b> (or ceftriaxone / carbapenem). Surgical valve replacement is frequently necessary for paravalvular aortic abscesses.</li>
        <li><b>Prevention:</b> Occupational hygiene: heavy-duty protective gloves, arm guards, and boots for abattoir and meat/fish workers; prompt cleansing and disinfection of skin abrasions. Swine herds are controlled by active veterinary vaccination.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Erysipeloid:</b> A localized, purplish, non-suppurative occupational cellulitis of the hand caused by cutaneous inoculation of <i>E. rhusiopathiae</i>.</li>
        <li><b>Erysipelas:</b> An unrelated, superficial bright-red skin infection with high fever caused by <i>Streptococcus pyogenes</i>.</li>
        <li><b>TSI (Triple Sugar Iron) Agar:</b> Differential medium testing carbohydrate fermentation and hydrogen sulfide ($\text{H}_2\text{S}$) production; blackening indicates $\text{H}_2\text{S}$.</li>
        <li><b>Vancomycin Resistance (Intrinsic):</b> Natural biochemical inability of vancomycin to bind peptidoglycan precursors terminating in D-lactate.</li>
      </ul>
    `
  },
  {
    id: "arcanobacterium_haemolyticum",
    name: "Arcanobacterium haemolyticum",
    chapter: "Ch. 20: Listeria and Related Gram-Positive Bacteria",
    tags: [
      "Gram-Positive",
      "Non-Acid-Fast",
      "Rods / Bacilli",
      "Pleomorphic / Slender Rods",
      "Facultative Anaerobe",
      "Extracellular",
      "Non-Spore-Forming",
      "Catalase (-)",
      "Oxidase (-)",
      "Non-Motile",
      "Beta-Hemolytic (Narrow / Delayed)",
      "Reverse CAMP Test (+)",
      "Pharyngitis / Pseudomembrane",
      "Exudative Pharyngitis & Scarlatiniform Rash",
      "Wound Infections / Abscesses",
      "Macrolide Susceptible"
    ],
    triggerWords: [
      "Adolescent Pharyngitis (15–25 Years)",
      "Scarlatiniform / Maculopapular Exanthem (Rash)",
      "Catalase Negative Gram-Positive Rod",
      "Narrow Beta-Hemolysis (Enhanced on Human Blood)",
      "Reverse CAMP Test Positive (Inhibits S. aureus Beta-Lysin)",
      "Penicillin Treatment Failure (Treat with Macrolides)"
    ],
    overview: `
      <p><b>What it is:</b> <i>Arcanobacterium haemolyticum</i> (formerly <i>Corynebacterium haemolyticum</i>; Latin: <i>arcanus</i>, "secretive" or hidden rod) is a small, pleomorphic, non-motile, non-spore-forming, facultatively anaerobic Gram-positive rod. It grows slowly and can be difficult to detect among normal upper respiratory flora.</p>
      <p><b>Clinical Target Population:</b> Unlike <i>S. pyogenes</i> (which peaks in school-age children 5–15 years old), <i>A. haemolyticum</i> has a distinct predilection for causing acute exudative pharyngitis in <b>older adolescents and young adults (ages 15 to 25)</b>.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Phospholipase D (PLD):</b> Secretes an extracellular sphingomyelinase/phospholipase D that damages host mammalian cell membranes, causes tissue necrosis, and inhibits the activity of <i>Staphylococcus aureus</i> beta-lysin.</li>
        <li><b>Hemolysin (Arcanolysin):</b> A cholesterol-dependent pore-forming cytolysin that mediates hemolysis of human and rabbit erythrocytes.</li>
        <li><b>Neuraminidase:</b> Cleaves terminal sialic acid on host mucous membranes to enhance bacterial adherence.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Exudative Pharyngitis with Scarlatiniform Rash:</b> Severe pharyngitis with tonsillar exudate, cervical lymphadenopathy, and high fever in adolescents. In 50% of patients, it is accompanied by a fine, pruritic, erythematous <b>maculopapular or scarlatiniform exanthem</b> starting on the trunk and extensor surfaces of extremities (sparing the face, palms, and soles), followed by desquamation. Clinically indistinguishable from scarlet fever (GAS) or infectious mononucleosis (EBV).</li>
        <li><b>Cutaneous Ulcers & Wound Infections:</b> Chronic skin ulcers, wound infections, and soft-tissue abscesses, frequently in polymicrobial mixtures in diabetic patients.</li>
        <li><b>Systemic Disease:</b> Rare bacteremia, subacute endocarditis, and osteomyelitis in immunocompromised hosts.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Delayed Beta-Hemolysis:</b> On 5% sheep blood agar, colonies are pinpoint and non-hemolytic at 24 hours; clear, <b>narrow zones of complete $\beta$-hemolysis appear only after 48 to 72 hours</b> of incubation. Hemolysis is much more pronounced on human or rabbit blood agar.</li>
        <li><b>Catalase & Motility:</b> <b>Catalase (-)</b> (differentiates it from catalase-positive <i>Corynebacterium</i> species), <b>Non-Motile</b>.</li>
        <li><b>Reverse CAMP Reaction (Diagnostic Hallmark):</b> Produces phospholipase D that specifically antagonizes and inhibits the staphylococcal $\beta$-hemolysin. When streaked perpendicularly to <i>Staphylococcus aureus</i> on sheep blood agar, it produces a distinctive <b>"arrowhead" of inhibition</b> (absent hemolysis) where the two hemolysins overlap (in direct contrast to the enhanced hemolysis of <i>S. agalactiae</i>).</li>
        <li><b>Confirmation:</b> MALDI-TOF mass spectrometry. Throat swabs testing negative on rapid GAS antigen tests should be evaluated for <i>A. haemolyticum</i> in adolescents with persistent pharyngitis and rash.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Penicillin Paradox:</b> Although usually susceptible to penicillin in vitro, <b>clinical treatment failures and relapses with penicillin are common</b> because of poor intracellular penetration into pharyngeal epithelial cells.</li>
        <li><b>Therapy of Choice:</b> <b>Macrolides</b> (oral <b>erythromycin</b> or <b>azithromycin</b>) produce rapid clinical resolution and eradicate pharyngeal carriage. Tetracyclines (doxycycline) and fluoroquinolones are effective alternatives.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Arcanolysin:</b> Cholesterol-dependent cytolysin produced by <i>A. haemolyticum</i>.</li>
        <li><b>Phospholipase D (PLD):</b> Sphingomyelinase that mediates tissue damage and produces the reverse CAMP reaction.</li>
        <li><b>Reverse CAMP Test:</b> Laboratory reaction where a test organism inhibits the hemolytic activity of <i>S. aureus</i> $\beta$-lysin.</li>
      </ul>
    `
  }
);
