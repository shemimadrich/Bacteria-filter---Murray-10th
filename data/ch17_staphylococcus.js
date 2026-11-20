// Chapter 17: Staphylococcus and Related Gram-Positive Cocci (Rich Study Edition — Murray 10th Ed. Revised)

window.BACTERIA_DB.push(
  {
    id: "staph_aureus",
    name: "Staphylococcus aureus",
    chapter: "Ch. 17: Staphylococcus and Related Gram-Positive Cocci",
    tags: [
      "Gram-Positive", "Non-Acid-Fast", "Cocci in Grape-like Clusters",
      "Facultative Anaerobe", "Extracellular", "Non-Spore-Forming",
      "Catalase (+)", "Coagulase (+)", "Oxidase (-)", "Beta-Hemolytic (Complete)", "Non-Motile",
      "Mannitol Salt Agar (Yellow)", "Halophilic (Salt-Loving)", "Golden-Yellow Colonies",
      "Protein A", "Polysaccharide Capsule", "Biofilm / Slime Layer",
      "Superantigen (TSST-1 / Enterotoxins / Spe)", "Cytolytic / Pore-Forming Toxin", "Exfoliative Toxins A/B", "Heat-Stable Emetic Toxin",
      "Impetigo / Folliculitis / Abscesses", "Scalded Skin Syndrome (SSSS)", "Osteomyelitis / Septic Arthritis",
      "Typical Lobar Pneumonia", "Sepsis / Septic Shock", "Acute Endocarditis", "Rapid-Onset Vomiting",
      "CGD Patient Risk"
    ],
    triggerWords: [
      "Coagulase (+)", "Catalase (+)", "Grape-Like Clusters", "Protein A",
      "TSST-1", "Exfoliative Toxins A/B", "Heat-Stable Enterotoxins", "Mannitol Salt Agar (Yellow)", "MRSA (mecA / PBP2a)"
    ],
    overview: `
      <p><b>What it is:</b> <i>Staphylococcus aureus</i> is the most virulent and clinically significant species in the genus <i>Staphylococcus</i>. Its name derives from the Greek <i>staphyle</i> ("bunch of grapes") because the non-motile, spherical Gram-positive cocci divide in multiple planes to form irregular grape-like clusters, and <i>aureus</i> ("golden") because carotenoid pigments give its colonies a distinct golden-yellow color.</p>
      <p><b>Physiology & Habitat:</b> Unlike most bacteria, staphylococci are <b>halophilic</b> (salt-tolerant), capable of growing in up to <b>10% NaCl</b> and across temperatures from 18&deg;C to 40&deg;C. This allows them to survive on dry human skin, hospital surfaces, and cured/salted foods (like ham). It transiently or persistently colonizes the <b>anterior nares (nostrils)</b>, nasopharynx, and moist skin folds (umbilicus, perineum, axilla) in ~15% (persistent) to 30% of healthy adults.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Capsule & Slime Layer (Biofilm):</b> Most clinical isolates express a polysaccharide microcapsule (serotypes 5 and 8 account for ~75% of human infections) that inhibits phagocytosis by polymorphonuclear leukocytes (PMNs). A loose monosaccharide/protein/peptide slime layer binds bacteria to catheters, prosthetic heart valves, and artificial joints.</li>
        <li><b>Peptidoglycan & Teichoic Acids:</b> Forms half the cell wall weight. Peptidoglycan has endotoxin-like activity—stimulating endogenous pyrogens (IL-1), aggregating PMNs (causing abscess formation), and activating complement. Species-specific ribitol teichoic acids (Polysaccharide A) mediate attachment to mucosal surfaces via fibronectin.</li>
        <li><b>Protein A (Immune Evasion Hallmark):</b> A surface protein covalently linked to peptidoglycan that uniquely binds the <b>Fc receptor</b> of human IgG1, IgG2, and IgG4 "upside-down." This prevents antibodies from binding upright via their Fab domains, effectively blocking opsonization and complement activation.</li>
        <li><b>Coagulase (Bound & Free):</b> Converts soluble fibrinogen into insoluble fibrin. By coating itself in a fibrin barrier, <i>S. aureus</i> walls itself off inside pyogenic abscesses and resists phagocytosis.</li>
        <li><b>Catalase:</b> Converts hydrogen peroxide (H<sub>2</sub>O<sub>2</sub>) produced by neutrophils during the oxidative burst into water and oxygen. <i>Clinical Pearl:</i> Patients with <b>Chronic Granulomatous Disease (CGD)</b> lack NADPH oxidase and cannot generate their own H<sub>2</sub>O<sub>2</sub>; because catalase-positive bacteria like <i>S. aureus</i> break down their own metabolic peroxide, CGD neutrophils have zero peroxide left to form bleach (HOCl), leading to recurrent life-threatening staphylococcal abscesses.</li>
        <li><b>Cytotoxins (Pore-Forming & Membrane-Damaging):</b>
          <ul class="list-circle pl-5 mt-1 space-y-1">
            <li><b>Alpha (&alpha;) Toxin:</b> Forms heptameric 1–2 nm pores in smooth muscle (vascular spasm), erythrocytes, leukocytes, hepatocytes, and platelets.</li>
            <li><b>Beta (&beta;) Toxin (Sphingomyelinase C):</b> Hydrolyzes membrane phospholipids specifically in proportion to sphingomyelin content; responsible for the "hot-cold" lysis phenomenon on sheep blood agar.</li>
            <li><b>Panton-Valentine Leukocidin (PVL):</b> A two-component pore-forming toxin (LukS-PV / LukF-PV) strongly associated with community-acquired MRSA (CA-MRSA) that selectively lyses human neutrophils and macrophages (without hemolytic activity), causing severe necrotizing skin infections and hemorrhagic pneumonia.</li>
          </ul>
        </li>
        <li><b>Exfoliative Toxins (ETA & ETB):</b> Serine proteases that specifically cleave <b>desmoglein-1</b>, the cadherin desmosomal protein that holds keratinocytes together in the <b>stratum granulosum</b> of the epidermis. ETA is heat-stable and chromosomal (phage-encoded); ETB is heat-labile and plasmid-mediated.</li>
        <li><b>Enterotoxins (A through X):</b> Superantigens that are remarkably resistant to gastric acid, jejunal enzymes, and heating at 100&deg;C for 30 minutes (reheating contaminated food kills the bacteria, but the preformed toxin remains fully active!). Enterotoxin A is most common in food poisoning; Enterotoxins C and D are linked to contaminated milk products; Enterotoxin B causes staphylococcal pseudomembranous enterocolitis.</li>
        <li><b>Toxic Shock Syndrome Toxin-1 (TSST-1):</b> Chromosomally encoded, heat- and proteolysis-resistant superantigen. Cross-links MHC Class II on antigen-presenting cells non-specifically to the V&beta; region of T-cell receptors, activating up to 20% of all T cells at once and triggering a massive cytokine storm (TNF-&alpha;, IL-1&beta;, IL-2, IFN-&gamma;, TNF-&beta;) that causes endothelial leakage and hypovolemic shock.</li>
      </ul>
    `,
    diseases: `
      <p class="font-semibold text-rose-300">A. Toxin-Mediated Diseases (Disseminated Toxin; Blood Cultures Usually Negative)</p>
      <ul class="list-disc pl-5 space-y-1.5 mb-3">
        <li><b>Staphylococcal Scalded Skin Syndrome (SSSS / Ritter Disease):</b> Predominantly in neonates and young children. Begins with abrupt perioral erythema ("scarlet-like" tenderness) followed within 48 hours by large, flaccid cutaneous bullae and sheets of epidermal peeling upon slight pressure (<b>positive Nikolsky sign</b>). Because ETA/ETB circulates via the bloodstream from a distant site, the blister fluid contains <b>no bacteria and no leukocytes</b>. Healing occurs in 7–10 days without scarring because cleavage is high in the stratum granulosum (sparing the basal layer) once neutralizing antibodies form.</li>
        <li><b>Staphylococcal Food Poisoning:</b> Caused by ingestion of preformed heat-stable enterotoxin in contaminated high-salt or carbohydrate foods (salted ham, processed meats, custard pastries, potato salad, ice cream) left at room temperature after contamination by a colonized food handler. <b>Ultra-short incubation (mean 4 hours)</b> with abrupt, violent vomiting, nausea, abdominal cramping, and watery nonbloody diarrhea—typically <b>without fever</b>—resolving within 24 hours.</li>
        <li><b>Toxic Shock Syndrome (TSS):</b> Classically linked to hyperabsorbent tampons (neutral pH + elevated oxygen stimulates TSST-1) or post-operative/nasal packing wounds. Abrupt high fever, hypotension, diffuse macular erythematous rash, multiorgan involvement (GI, renal, hepatic, CNS, hematologic), and late desquamation (peeling) that includes the <b>palms and soles</b>.</li>
      </ul>
      <p class="font-semibold text-rose-300">B. Suppurative (Pyogenic / Pus-Forming) & Invasive Infections</p>
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Cutaneous Infections:</b> <b>Bullous impetigo</b> (localized form of SSSS where blister fluid IS positive for bacteria and neutrophils, and Nikolsky sign is absent), <b>folliculitis</b> (pus in hair follicles; called a <i>stye/hordeolum</i> on the eyelid), <b>furuncles</b> (boils; large painful raised nodules), and <b>carbuncles</b> (coalescence of furuncles extending into subcutaneous fat with multiple draining sinus tracts and systemic chills/fever).</li>
        <li><b>Bacteremia & Acute Endocarditis:</b> Over 50% of <i>S. aureus</i> bacteremia is hospital-acquired (catheters, surgical wounds). Causes fulminant acute endocarditis with rapid valve destruction (30%–50% mortality); uniquely affects the <b>tricuspid valve (right heart)</b> in intravenous drug users.</li>
        <li><b>Pneumonia & Empyema:</b> Aspiration pneumonia (young, elderly, cystic fibrosis, COPD, post-influenza viral pneumonia) or hematogenous necrotizing/cavitary pneumonia (including CA-MRSA necrotizing pneumonia with massive hemoptysis) with empyema (10% of pneumonia cases; <i>S. aureus</i> causes one-third of all empyemas).</li>
        <li><b>Osteomyelitis & Septic Arthritis:</b> Most common cause of acute hematogenous osteomyelitis (metaphysis of long bones in children; vertebral osteomyelitis or <b>Brodie abscess</b> in adults) and native-joint septic arthritis in adults and young children.</li>
        <li><b>Staphylococcal Enterocolitis:</b> Unlike food poisoning, enterocolitis results from active colonic overgrowth of <i>S. aureus</i> (typically producing enterotoxin A and bicomponent leukotoxin LukE/LukD) after broad-spectrum antibiotics suppress normal gut flora. Presents with watery diarrhea, abdominal cramps, fever, fecal leukocytes, and white colonic plaques with ulceration (diagnosed after excluding <i>Clostridioides difficile</i>).</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Microscopy:</b> Gram stain of pus or aspirate scraped from the base of skin abscesses, sputum, or joint fluid shows <b>Gram-positive cocci in grape-like clusters</b> alongside sheets of neutrophils. Microscopy is not useful for blood (too few organisms, &lt;1/mL) or toxin-mediated diseases (SSSS bullae, food poisoning, TSS) where the toxin acts remotely.</li>
        <li><b>Culture (Nonselective & Selective Media):</b>
          <ul class="list-circle pl-5 mt-1 space-y-1">
            <li><b>Sheep Blood Agar:</b> Large, smooth, golden-yellow colonies surrounded by a zone of complete <b>beta-hemolysis</b> (driven primarily by alpha-toxin) within 24 hours.</li>
            <li><b>Mannitol Salt Agar (MSA):</b> Selective and differential medium containing <b>7.5% NaCl</b> (inhibits almost all other bacteria) and mannitol with phenol red indicator. <i>S. aureus</i> ferments mannitol, producing acid that turns the agar from red to <b>bright yellow</b> (CoNS remain red/pink).</li>
            <li><b>Chromogenic Agar:</b> Used for rapid MRSA nasal screening (colonies turn distinct colors within 24 hours).</li>
          </ul>
        </li>
        <li><b>Biochemical & Rapid Identification:</b>
          <ul class="list-circle pl-5 mt-1 space-y-1">
            <li><b>Catalase Test (+):</b> Immediate bubbling when colony is mixed with 3% H<sub>2</sub>O<sub>2</sub> (separates all <i>Staphylococcus</i> [+] from <i>Streptococcus</i> and <i>Enterococcus</i> [-]).</li>
            <li><b>Coagulase Test (+):</b> Slide test detects bound clumping factor; tube test (gold standard) detects free extracellular coagulase when incubated with plasma for 4–24 hours (separates <i>S. aureus</i> [+] from all CoNS [-]).</li>
            <li><b>MALDI-TOF MS & NAAT:</b> MALDI-TOF mass spectrometry rapidly identifies colonies to the species level. Real-time PCR (NAAT) detects nasal carriage of MSSA/MRSA and identifies the <b><i>mecA</i> or <i>mecC</i> gene</b> directly from clinical specimens.</li>
          </ul>
        </li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Mechanisms of Antibiotic Resistance (Penicillinase, MRSA, VISA & VRSA):</b>
          <ul class="list-circle pl-5 mt-1 space-y-1">
            <li><b>Penicillin Resistance (&gt;90% of strains):</b> Mediated by plasmid-encoded <b>beta-lactamase (penicillinase)</b> that hydrolyzes the beta-lactam ring of penicillin G/ampicillin. Overcome by semi-synthetic penicillinase-resistant penicillins (<b>nafcillin, oxacillin, dicloxacillin</b>) or first-generation cephalosporins (<b>cefazolin</b>).</li>
            <li><b>Methicillin Resistance (MRSA):</b> Mediated by the <b><i>mecA</i></b> (or <b><i>mecC</i></b>) gene carried on the mobile genetic element <b>SCC<i>mec</i></b> (Staphylococcal Cassette Chromosome <i>mec</i>). It encodes a novel penicillin-binding protein, <b>PBP2a (PBP2')</b>, which has low affinity for ALL beta-lactams (penicillins, cephalosporins except ceftaroline, and carbapenems), allowing peptidoglycan cross-linking to continue uninterrupted.</li>
            <li><b>Vancomycin Resistance (VISA vs. VRSA):</b> <b>Low-level resistance (VISA)</b> occurs in strains with a thicker, more disorganized cell wall that traps vancomycin in the outer matrix before it reaches the cytoplasmic membrane. <b>High-level resistance (VRSA)</b>—still very uncommon—is mediated by the <b><i>vanA</i> gene operon</b> acquired from vancomycin-resistant enterococci, which modifies peptidoglycan so it no longer binds vancomycin.</li>
          </ul>
        </li>
        <li><b>Clinical Management:</b>
          <ul class="list-circle pl-5 mt-1 space-y-1">
            <li><b>Localized Skin Abscesses:</b> <b>Incision and drainage (I&amp;D)</b> is the cornerstone of therapy.</li>
            <li><b>Oral Empiric Therapy (Outpatient CA-MRSA):</b> <b>Trimethoprim-sulfamethoxazole (TMP-SMX)</b>, long-acting tetracyclines (<b>doxycycline</b> or minocycline), <b>clindamycin</b> (perform a <b>D-test</b> first to rule out inducible <i>erm</i>-mediated resistance!), or <b>linezolid</b>.</li>
            <li><b>Severe Systemic / Inpatient MRSA Infections:</b> Intravenous <b>vancomycin</b> (drug of choice; monitor trough/AUC levels), <b>daptomycin</b> (never use daptomycin for pneumonia because pulmonary surfactant inactivates it!), intravenous <b>linezolid</b>, or <b>ceftaroline</b> (5th-generation cephalosporin engineered to bind PBP2a).</li>
            <li><b>Confirmed MSSA:</b> De-escalate to IV <b>oxacillin/nafcillin</b> or <b>cefazolin</b> (beta-lactams are more rapidly bactericidal against MSSA than vancomycin).</li>
            <li><b>Food Poisoning:</b> Strictly supportive (fluid/electrolyte repletion). Antibiotics are <b>not indicated</b> because the illness is caused by preformed toxin, not active bacterial replication.</li>
          </ul>
        </li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>MRSA / MSSA:</b> Methicillin-Resistant / Methicillin-Susceptible <i>Staphylococcus aureus</i>.</li>
        <li><b>PBP2a (Penicillin-Binding Protein 2a):</b> Altered transpeptidase encoded by the <i>mecA</i> gene on SCC<i>mec</i> that confers resistance to almost all beta-lactams.</li>
        <li><b>VISA / VRSA:</b> Vancomycin-Intermediate (thickened cell wall trapping drug) / Vancomycin-Resistant (<i>vanA</i> operon) <i>S. aureus</i>.</li>
        <li><b>SSSS (Staphylococcal Scalded Skin Syndrome):</b> Blistering exfoliative dermatitis caused by ETA/ETB cleavage of desmoglein-1 in the stratum granulosum.</li>
        <li><b>Nikolsky Sign:</b> Gentle lateral pressure on skin causes the upper epidermis to slip and peel away from the lower layers.</li>
        <li><b>TSST-1 (Toxic Shock Syndrome Toxin-1):</b> Superantigen that bridges MHC Class II and TCR V&beta; outside the antigen-binding groove, triggering a systemic cytokine storm.</li>
        <li><b>PVL (Panton-Valentine Leukocidin):</b> Pore-forming cytotoxin linked to CA-MRSA that destroys human leukocytes and causes necrotizing pneumonia.</li>
        <li><b>MSA (Mannitol Salt Agar):</b> Selective (7.5% NaCl) and differential (mannitol + phenol red) agar; turns yellow when <i>S. aureus</i> ferments mannitol.</li>
      </ul>
    `
  },
  {
    id: "staph_epidermidis",
    name: "Staphylococcus epidermidis",
    chapter: "Ch. 17: Staphylococcus and Related Gram-Positive Cocci",
    tags: [
      "Gram-Positive", "Non-Acid-Fast", "Cocci in Grape-like Clusters",
      "Facultative Anaerobe", "Extracellular", "Non-Spore-Forming",
      "Catalase (+)", "Coagulase (-)", "Oxidase (-)", "Gamma-Hemolytic (Non-Hemolytic)", "Non-Motile",
      "Novobiocin Susceptible", "Halophilic (Salt-Loving)",
      "Biofilm / Slime Layer",
      "Subacute / Culture-Negative Endocarditis", "Sepsis / Septic Shock", "Osteomyelitis / Septic Arthritis",
      "Dental Procedures / Intravascular Catheters"
    ],
    triggerWords: [
      "Coagulase (-)", "Novobiocin Susceptible", "Polysaccharide Slime Layer / Biofilm",
      "Prosthetic Heart Valves", "Intravascular Catheters & CSF Shunts", "White Non-Hemolytic Colonies"
    ],
    overview: `
      <p><b>What it is:</b> <i>Staphylococcus epidermidis</i> is the most common and clinically important member of the <b>Coagulase-Negative Staphylococci (CoNS)</b>. Unlike <i>S. aureus</i>, it lacks coagulase, alpha-toxin, exfoliative toxins, and superantigens, making it relatively avirulent in healthy hosts with intact barriers.</p>
      <p><b>Physiology & Habitat:</b> It is a universal, high-density commensal of normal human skin and mucous membranes. Because it lives on everyone's skin, it is simultaneously the <b>#1 cause of blood culture contamination</b> during venipuncture and the <b>#1 cause of hospital-acquired infections on indwelling medical devices</b>.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Exopolysaccharide Slime Layer (Biofilm — Primary Virulence Factor):</b> <i>S. epidermidis</i> produces a sticky, water-soluble extracellular matrix (containing poly-&gamma;-DL-glutamic acid and polysaccharide intercellular adhesin [PIA]).</li>
        <li><b>Two-Step Pathogenesis on Foreign Bodies:</b>
          <ol class="list-decimal pl-5 mt-1 space-y-1">
            <li><b>Initial Adherence:</b> Bacterial surface proteins (autolysins and MSCRAMMs) bind via hydrophobic interactions directly to bare synthetic plastics/polymers (catheters, grafts, shunts) or to host plasma proteins (fibrinogen, fibronectin, vitronectin) that rapidly coat newly implanted prosthetic devices.</li>
            <li><b>Biofilm Accumulation & Shielding:</b> Once attached, quorum sensing triggers dense multilayered biofilm production. The biofilm physically blocks neutrophil chemotaxis and phagocytosis, while bacteria deep inside the biofilm enter a metabolically dormant state that renders cell-wall-active antibiotics ineffective.</li>
          </ol>
        </li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Prosthetic Valve Endocarditis (Subacute):</b> Inoculated onto artificial heart valves during cardiac surgery. Because it is low-virulence, clinical disease typically presents <b>insidiously months to a year after surgery</b> with low-grade fever, malaise, and abscess formation at the suture line causing mechanical dehiscence (separation) of the valve ring and heart failure.</li>
        <li><b>Catheter & Shunt Infections:</b> Causes &gt;50% of central venous catheter-related bloodstream infections (CRBSI), ventriculoperitoneal (CSF) shunt infections, and peritoneal dialysis (CAPD) peritonitis. Persistent bacteremia in long-standing catheter or shunt infections can trigger <b>immune complex–mediated glomerulonephritis</b>.</li>
        <li><b>Prosthetic Joint Infections:</b> Chronic, indolent localized pain and mechanical loosening of total hip or knee arthroplasties (systemic fever/leukocytosis is often absent and blood cultures are usually negative).</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Culture & Biochemical Profile:</b> Forms small, <b>white (non-pigmented), gamma-hemolytic (non-hemolytic)</b> colonies on sheep blood agar. <b>Catalase (+)</b>, <b>Coagulase (-)</b>. On Mannitol Salt Agar, it grows (halophilic) but <b>does not ferment mannitol</b> (agar stays pink/red).</li>
        <li><b>Novobiocin Susceptibility Test:</b> <i>S. epidermidis</i> is <b>Novobiocin Susceptible</b> (&ge;16 mm zone of inhibition around a 5 &mu;g disk), which differentiates it in the lab from <i>S. saprophyticus</i> (Novobiocin Resistant).</li>
        <li><b>Distinguishing True Infection from Skin Contamination:</b> Because a single positive blood culture usually represents skin flora picked up by the needle, confirming true <i>S. epidermidis</i> bacteremia requires <b>two or more positive blood cultures drawn from separate venipuncture sites</b> showing identical susceptibility profiles.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>High Methicillin Resistance (&gt;80%):</b> Most hospital isolates carry the <i>mecA</i> gene (MRSE) and are resistant to oxacillin, nafcillin, and cephalosporins.</li>
        <li><b>Antimicrobial Therapy + Device Removal:</b> Intravenous <b>vancomycin</b> is the empiric drug of choice (or oxacillin if susceptible; often combined with <b>rifampin</b>—which penetrates biofilms—and an aminoglycoside like <b>gentamicin</b> for prosthetic valve endocarditis). However, because antibiotics cannot sterilize an established biofilm, <b>cure almost always requires surgical removal or replacement of the infected catheter, shunt, or prosthetic joint/valve</b>.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>CoNS (Coagulase-Negative Staphylococci):</b> Staphylococcal species lacking free coagulase (e.g., <i>S. epidermidis</i>, <i>S. saprophyticus</i>, <i>S. lugdunensis</i>, <i>S. haemolyticus</i>).</li>
        <li><b>PIA (Polysaccharide Intercellular Adhesin):</b> Key structural component of the <i>S. epidermidis</i> biofilm matrix.</li>
        <li><b>CRBSI (Catheter-Related Bloodstream Infection):</b> Bacteremia originating from a biofilm-colonized intravascular line.</li>
      </ul>
    `
  },
  {
    id: "staph_saprophyticus",
    name: "Staphylococcus saprophyticus",
    chapter: "Ch. 17: Staphylococcus and Related Gram-Positive Cocci",
    tags: [
      "Gram-Positive", "Non-Acid-Fast", "Cocci in Grape-like Clusters",
      "Facultative Anaerobe", "Extracellular", "Non-Spore-Forming",
      "Catalase (+)", "Coagulase (-)", "Oxidase (-)", "Urease (+)", "Gamma-Hemolytic (Non-Hemolytic)", "Non-Motile",
      "Novobiocin Resistant", "Halophilic (Salt-Loving)",
      "UTI / Pyelonephritis / Staghorn Calculi"
    ],
    triggerWords: [
      "Coagulase (-)", "Novobiocin Resistant", "Urease (+)",
      "Honeymoon Cystitis", "2nd Most Common UTI in Young Sexually Active Women"
    ],
    overview: `
      <p><b>What it is:</b> <i>Staphylococcus saprophyticus</i> is a coagulase-negative <i>Staphylococcus</i> that has evolved a specialized tropism for the human urinary tract epithelium.</p>
      <p><b>Epidemiology:</b> It colonizes the gastrointestinal tract and perineum (rarely an asymptomatic colonizer of the urinary tract itself) and is the <b>second most common cause of uncomplicated community-acquired urinary tract infections (after <i>Escherichia coli</i>) in young, sexually active women</b> (often called "honeymoon cystitis").</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Uroepithelial Adhesins (Aas & Ssp):</b> Expresses high-affinity cell-wall-anchored hemagglutinins/adhesins and lactosamine-binding fibrils that bind specifically to oligosaccharide receptors on transitional epithelial cells of the female bladder and urethra, preventing washout during urination.</li>
        <li><b>Urease Production:</b> Hydrolyzes urea in urine into ammonia (NH<sub>3</sub>) and CO<sub>2</sub>, raising urinary pH, damaging the bladder mucosa, and occasionally promoting urinary stone formation.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Acute Uncomplicated Cystitis ("Honeymoon Cystitis"):</b> Presents in young, sexually active females within 24–48 hours of sexual intercourse with dysuria (painful urination), urinary frequency, urgency, suprapubic tenderness, pyuria (white blood cells in urine), and microscopic or gross hematuria.</li>
        <li><b>Ascending Pyelonephritis:</b> Less commonly ascends the ureters to cause flank pain and fever, though bacteremia is rare in immunocompetent hosts.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Urine Microscopy & Dipstick:</b> Urine sediment shows <b>Gram-positive cocci in clusters</b> and abundant neutrophils (pyuria). Importantly, unlike <i>E. coli</i> and other <i>Enterobacterales</i>, <i>S. saprophyticus</i> does NOT reduce nitrates to nitrites—so the <b>urine dipstick is Leukocyte Esterase (+) but Nitrite (-)</b>!</li>
        <li><b>Culture & Biochemical Differentiation:</b> Non-hemolytic (gamma-hemolytic), white-to-yellowish colonies on blood agar; <b>Catalase (+)</b>, <b>Coagulase (-)</b>, <b>Urease (+)</b>, and crucially <b>Novobiocin Resistant</b> (differentiates it from <i>S. epidermidis</i>).</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Oral Urinary Antimicrobials:</b> Patients respond rapidly to a short course of oral <b>trimethoprim-sulfamethoxazole (TMP-SMX)</b>, <b>nitrofurantoin</b>, or a <b>fluoroquinolone</b> (e.g., ciprofloxacin), and reinfection is uncommon. Note: It is intrinsically resistant to fosfomycin in many regions.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Nitrite-Negative UTI:</b> Urinary tract infection caused by Gram-positive bacteria (<i>S. saprophyticus</i>, <i>Enterococcus</i>) or non-fermenters (<i>Pseudomonas</i>) that lack nitrate reductase.</li>
        <li><b>Novobiocin Disk Test:</b> Lab test using an aminocoumarin antibiotic disk; resistance identifies <i>S. saprophyticus</i> among clinical CoNS isolates.</li>
      </ul>
    `
  },
  {
    id: "staph_lugdunensis",
    name: "Staphylococcus lugdunensis",
    chapter: "Ch. 17: Staphylococcus and Related Gram-Positive Cocci",
    tags: [
      "Gram-Positive", "Non-Acid-Fast", "Cocci in Grape-like Clusters",
      "Facultative Anaerobe", "Extracellular", "Non-Spore-Forming",
      "Catalase (+)", "Coagulase (-)", "Oxidase (-)", "PYR (+)", "Beta-Hemolytic (Complete)", "Non-Motile",
      "Novobiocin Susceptible", "Halophilic (Salt-Loving)",
      "Acute Endocarditis", "Impetigo / Folliculitis / Abscesses", "Osteomyelitis / Septic Arthritis"
    ],
    triggerWords: [
      "Wolf in Sheep's Clothing (CoNS Acting Like S. aureus)", "Tube Coagulase (-)", "Slide Clumping Factor (+/-)",
      "PYR (+)", "Ornithine Decarboxylase (+)", "Destructive Native Valve Endocarditis"
    ],
    overview: `
      <p><b>What it is:</b> Named after Lyon, France (Latin: <i>Lugdunum</i>), where it was first isolated, <i>Staphylococcus lugdunensis</i> is the ultimate <b>"wolf in sheep's clothing"</b> in clinical microbiology. Although it is biochemically classified as a Coagulase-Negative <i>Staphylococcus</i> (CoNS), it behaves clinically with the fulminant, tissue-destroying aggressiveness of <i>Staphylococcus aureus</i>.</p>
      <p><b>Clinical Warning:</b> Unlike <i>S. epidermidis</i>, isolating <i>S. lugdunensis</i> from even a single blood culture should <b>never</b> be dismissed casually as a harmless skin contaminant.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Fibrinogen-Binding Protein (Membrane-Bound Clumping Factor):</b> Lacks secreted free coagulase, but expresses a surface fibrinogen-binding protein that mediates tight adherence to native heart valves and soft tissues.</li>
        <li><b>Delta-Like Hemolysin (SLUSH Peptides) & Metalloproteases:</b> Produces synergistic cytolytic peptides (<i>S. lugdunensis</i> synergistic hemolysins) and tissue-degrading enzymes that cause rapid valve perforation and abscess formation.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Fulminant Native Valve Endocarditis:</b> Unlike <i>S. epidermidis</i> (which infects prosthetic valves subacutely), <i>S. lugdunensis</i> is the CoNS most strongly associated with <b>aggressive native mitral and aortic valve endocarditis</b>, causing rapid leaflet destruction, heart failure, myocardial abscesses, systemic septic embolization (e.g., brain infarcts), and high mortality (up to 40%–50%) frequently requiring valve replacement.</li>
        <li><b>Pelvic & Perineal Abscesses:</b> Because it preferentially colonizes the perineum and inguinal folds, it frequently causes deep inguinal, perineal, breast, and post-surgical skin/soft-tissue abscesses, as well as prosthetic joint infections.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>The Coagulase Lab Trap:</b> In the lab, <i>S. lugdunensis</i> can fool technicians! Because it possesses membrane-bound clumping factor, it can test <b>POSITIVE on the rapid Slide Coagulase test</b> (mimicking <i>S. aureus</i>), but it is strictly <b>NEGATIVE on the Tube Coagulase test</b> (because it cannot secrete free coagulase).</li>
        <li><b>Definitive Biochemical & Proteomic Markers:</b> Medium-sized beta-hemolytic colonies with a distinct sweet/hay-like odor; <b>Catalase (+)</b>, <b>PYR (+)</b> (pyrrolidonyl arylamidase positive), and <b>Ornithine Decarboxylase (ODC) (+)</b>. Rapidly and definitively identified by <b>MALDI-TOF MS</b>.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Susceptibility Quirk (Usually Beta-Lactam Susceptible!):</b> Unlike <i>S. epidermidis</i> (&gt;80% methicillin-resistant), the vast majority (&gt;90%) of <i>S. lugdunensis</i> isolates lack the <i>mecA</i> gene and remain <b>susceptible to oxacillin/nafcillin and cefazolin</b>. However, because its clinical course is as aggressive as <i>S. aureus</i>, clinical labs use the stricter <i>S. aureus</i> MIC breakpoints when testing it, and empiric IV <b>vancomycin</b> + surgical evaluation is started immediately for endocarditis until susceptibilities return.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Clumping Factor (Bound Coagulase):</b> Surface-attached protein that binds fibrinogen directly on a glass slide; present in both <i>S. aureus</i> and <i>S. lugdunensis</i>.</li>
        <li><b>Free Coagulase:</b> Secreted enzyme that reacts with prothrombin (staphylothrombin) in a test tube to clot plasma; present in <i>S. aureus</i>, absent in <i>S. lugdunensis</i>.</li>
        <li><b>PYR (Pyrrolidonyl Arylamidase) Test:</b> Rapid colorimetric enzymatic test; positive in <i>S. lugdunensis</i>, <i>S. pyogenes</i>, and <i>Enterococcus</i>.</li>
      </ul>
    `
  }
);