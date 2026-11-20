// Chapter 22: Neisseria and Related Bacteria (Rich Study Edition)
// Automatically plugs into window.BACTERIA_DB in index.html

window.BACTERIA_DB.push(
  {
    id: "neisseria_gonorrhoeae",
    name: "Neisseria gonorrhoeae",
    chapter: "Ch. 22: Neisseria and Related Bacteria",
    tags: [
      "Gram-Negative", "Non-Acid-Fast", "Kidney-Bean Diplococci",
      "Obligate Aerobe", "Capnophilic (Requires CO2)", "Facultative Intracellular", "Non-Spore-Forming",
      "Catalase (+)", "Oxidase (+)", "Non-Motile",
      "Thayer-Martin Media",
      "Glucose Only Fermenter",
      "IgA1 Protease", "Antigenic Variation", "LOS (Lacks O-Antigen)",
      "Urethritis / Cervicitis / PID", "Osteomyelitis / Septic Arthritis", "Neonatal Conjunctivitis", "Pharyngitis / Scarlet Fever", "Sepsis / Septic Shock",
      "Asplenia / Complement Deficiency Risk"
    ],
    triggerWords: [
      "Gram-Negative Kidney-Bean Diplococci (Intracellular in PMNs)", "Oxidase (+) & Catalase (+)",
      "Oxidizes Glucose ONLY (Maltose Negative — vs. N. meningitidis)",
      "No True Polysaccharide Capsule (No Vaccine Available)", "Pilin Antigenic & Phase Variation",
      "Chocolate Agar & Modified Thayer-Martin Media (5% CO2)", "NAAT Gold Standard",
      "Gonorrhea, PID, Fitz-Hugh–Curtis, Septic Arthritis & Ophthalmia Neonatorum",
      "Treat with Single-Dose Ceftriaxone"
    ],
    overview: `
      <p><b>What it is:</b> <i>Neisseria gonorrhoeae</i> (the gonococcus) is an aerobic, capnophilic (5% CO<sub>2</sub>), oxidase-positive, catalase-positive <b>Gram-negative diplococcus</b> arranged in pairs with flattened adjacent sides resembling <b>coffee beans / kidney beans</b>. Unlike <i>N. meningitidis</i>, it <b>lacks a true polysaccharide capsule</b> and oxidizes <b>glucose only</b> (not maltose).</p>
      <p><b>Epidemiology:</b> <b>Strict human pathogen</b> (binds human transferrin specifically); second most common reportable STI in the US (&gt;650,000 cases in 2022; ~82 million globally). Transmitted sexually (50% transmission risk female-from-male vs. ~20% male-from-female per encounter) or vertically during vaginal delivery. Asymptomatic carriage (up to 50% of infected females; common in rectal/pharyngeal sites) is the major reservoir.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Pili (Pilins):</b> Mediate attachment to nonciliated columnar epithelial cells, motility, DNA transfer, and neutrophil killing resistance. Rapid <b>antigenic variation and phase variation</b> of the exposed C-terminal variable region prevent protective immunity and block vaccine development.</li>
        <li><b>PorB (Major Outer Membrane Porin):</b> Only porin expressed (<i>porA</i> is silent); prevents neutrophil degranulation/phagolysosome fusion, facilitates epithelial invasion, and confers serum resistance.</li>
        <li><b>Opa (Opacity) Proteins:</b> Mediate intimate epithelial/phagocyte binding; opaque colonies associate with localized mucosal disease, while transparent colonies associate with PID and disseminated disease.</li>
        <li><b>Rmp Proteins:</b> Stimulate blocking antibodies that interfere with bactericidal serum activity.</li>
        <li><b>LOS (Lipooligosaccharide) &amp; Outer Membrane Blebs:</b> Lacks O-antigen; lipid A endotoxin triggers potent <b>TNF-&alpha;</b> release causing most inflammatory symptoms.</li>
        <li><b>IgA1 Protease &amp; Human Transferrin Receptors:</b> Cleaves mucosal IgA1 at the hinge region; scavenges iron directly from human transferrin/lactoferrin/hemoglobin.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Gonorrhea (Localized Genital Infection):</b> 2–5 day incubation. In males: acute purulent urethral discharge and dysuria (rarely epididymitis/prostatitis). In females: endocervical columnar infection (vaginal discharge, dysuria, abdominal pain; often asymptomatic) ascending in 10%–20% to <b>salpingitis, tubo-ovarian abscess, and pelvic inflammatory disease (PID)</b> risking ectopic pregnancy and infertility.</li>
        <li><b>Disseminated Gonococcal Infection (Gonococcemia):</b> 1%–3% of infected females (fewer males); fever, migratory arthralgias, <b>suppurative septic arthritis</b> (wrists, knees, ankles — leading cause of purulent arthritis in sexually active adults), and pustular skin lesions on an erythematous base over extremities.</li>
        <li><b>Other Syndromes:</b> <b>Ophthalmia neonatorum</b> (purulent neonatal conjunctivitis acquired at birth), <b>Fitz-Hugh–Curtis syndrome</b> (perihepatitis), anorectal gonorrhea, and pharyngitis.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>NAAT (Diagnostic Gold Standard):</b> Rapid (1–2 h), sensitive, and specific combination NAATs for <i>N. gonorrhoeae</i> and <i>Chlamydia trachomatis</i> (limitation: cannot test antibiotic susceptibility).</li>
        <li><b>Gram Stain Microscopy:</b> Highly sensitive (&gt;90%) and specific (98%) in <b>symptomatic males with purulent urethritis</b> (intracellular Gram-negative diplococci inside PMNs). Insensitive in females, asymptomatic males, pharynx, and rectum (commensal <i>Neisseria</i> confounders).</li>
        <li><b>Culture (Fastidious!):</b> Does NOT grow on sheep blood or nutrient agar (inhibited by fatty acids/trace metals). Requires direct inoculation onto prewarmed <b>enriched chocolate agar</b> AND selective <b>Modified Thayer-Martin medium</b> (in humid 5% CO<sub>2</sub> at 35–37°C). Avoid drying or refrigeration.</li>
        <li><b>Identification:</b> Oxidase (+), Gram-negative diplococci; definitive ID via carbohydrate oxidation (<b>glucose +, maltose -</b>) or MALDI-TOF MS.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>CDC Recommended Therapy:</b> Single dose of <b>Ceftriaxone</b> (penicillin, tetracycline, and ciprofloxacin resistance is widespread). Alternatives: single-dose cefixime or azithromycin + gentamicin.</li>
        <li><b>Prophylaxis &amp; Vaccine:</b> <b>Erythromycin ophthalmic ointment</b> routinely given to newborns to prevent ophthalmia neonatorum. <b>No effective vaccine exists</b> due to pilin antigenic diversity.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Modified Thayer-Martin Agar:</b> Selective chocolate agar containing antibiotics (vancomycin, colistin, nystatin, trimethoprim) to isolate pathogenic <i>Neisseria</i> from mucosal sites.</li>
        <li><b>LOS (Lipooligosaccharide):</b> Outer membrane endotoxin of <i>Neisseria</i> lacking the repeating O-polysaccharide side chain of classic LPS.</li>
        <li><b>Fitz-Hugh–Curtis Syndrome:</b> Perihepatitis (inflammation of the liver capsule) complicating ascending gonococcal or chlamydial PID.</li>
      </ul>
    `
  },
  {
    id: "neisseria_meningitidis",
    name: "Neisseria meningitidis",
    chapter: "Ch. 22: Neisseria and Related Bacteria",
    tags: [
      "Gram-Negative", "Non-Acid-Fast", "Kidney-Bean Diplococci",
      "Obligate Aerobe", "Capnophilic (Requires CO2)", "Facultative Intracellular", "Non-Spore-Forming",
      "Catalase (+)", "Oxidase (+)", "Non-Motile",
      "Thayer-Martin Media",
      "Maltose + Glucose Fermenter",
      "Polysaccharide Capsule", "IgA1 Protease", "LOS (Lacks O-Antigen)",
      "Community-Acquired Meningitis", "Sepsis / Septic Shock", "Typical Lobar Pneumonia", "Osteomyelitis / Septic Arthritis",
      "Asplenia / Complement Deficiency Risk", "Myocarditis / Pericarditis"
    ],
    triggerWords: [
      "Gram-Negative Kidney-Bean Diplococci", "Polysaccharide Capsule (Serogroups A, B, C, W135, X, Y)",
      "Oxidizes BOTH Maltose + Glucose (vs. N. gonorrhoeae)", "Grows on Blood & Chocolate Agar",
      "Petechial/Purpuric Rash, DIC & Waterhouse-Friderichsen Syndrome (Adrenal Hemorrhage)",
      "Terminal Complement Deficiency (C5–C8: 6,000-Fold Risk)",
      "Treat with Ceftriaxone; Prophylaxis with Rifampin / Ciprofloxacin / Ceftriaxone",
      "Conjugate Vaccine (A, C, Y, W135) & Protein-Based Serogroup B Vaccine"
    ],
    overview: `
      <p><b>What it is:</b> <i>Neisseria meningitidis</i> (the meningococcus) is an aerobic, oxidase-positive, catalase-positive <b>Gram-negative kidney-bean diplococcus</b> distinguished from <i>N. gonorrhoeae</i> by its antiphagocytic <b>polysaccharide capsule</b>, growth on blood agar, and oxidation of both <b>maltose and glucose</b>.</p>
      <p><b>Epidemiology:</b> <b>Humans are the only natural carriers</b> (asymptomatic nasopharyngeal carriage 1%–40%, highest in school-age children/young adults). Spread by respiratory droplets in prolonged close contact (households, military barracks, dorms). Peak disease in infants &lt;1–2 years (after maternal antibodies wane at 6 months) and adolescents. Serogroups B, C, Y predominate in Europe/Americas; serogroup A (and shifting to W/X) in the sub-Saharan African meningitis belt.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Polysaccharide Capsule (Major Virulence Factor):</b> Antiphagocytic capsule defines 13 serogroups (6 cause nearly all disease: <b>A, B, C, W135, X, Y</b>). Downregulated transiently for nasopharyngeal pilus attachment, then protects against phagocytic killing in blood/CSF.</li>
        <li><b>LOS Endotoxin &amp; Outer Membrane Blebs:</b> Shed abundantly during rapid growth, triggering diffuse endothelial damage, vasculitis, thrombosis, and <b>disseminated intravascular coagulation (DIC)</b>.</li>
        <li><b>Pili, PorA/PorB, IgA1 Protease &amp; Transferrin Receptors:</b> Mediate nasopharyngeal colonization, intracellular survival, mucosal IgA cleavage, and iron acquisition.</li>
        <li><b>Host Complement Risk:</b> Patients with terminal complement deficiencies (<b>C5, C6, C7, or C8</b>) face a <b>6,000-fold higher risk</b> of invasive meningococcal disease.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Meningitis:</b> Abrupt onset of fever, severe headache, and meningeal signs (nonspecific fever/vomiting in infants). Mortality approaches 100% untreated, &lt;10% with prompt antibiotics (low sequelae: hearing loss, learning deficits, arthritis).</li>
        <li><b>Meningococcemia (Fulminant Septicemia):</b> Life-threatening septic shock with small-vessel thrombosis, multiorgan failure, and <b>petechial skin lesions on trunk/lower extremities coalescing into hemorrhagic bullae/purpura</b>. Can progress rapidly to DIC, shock, and bilateral adrenal hemorrhage (<b>Waterhouse-Friderichsen syndrome</b>).</li>
        <li><b>Other Syndromes:</b> Meningococcal bronchopneumonia (serogroups W and Y; milder with good prognosis), septic arthritis, and urethritis.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Microscopy (CSF &amp; Peripheral Blood):</b> Gram-negative diplococci are readily seen in CSF before antibiotics; in overwhelming meningococcemia, organisms can even be visible inside peripheral blood leukocytes!</li>
        <li><b>Culture &amp; Identification:</b> Abundant in CSF and blood; grows on blood agar and chocolate agar (handle with biosafety precautions—aerosol risk to lab staff!). Identified by oxidase (+), <b>maltose (+) and glucose (+)</b> oxidation, or MALDI-TOF MS.</li>
        <li><b>NAAT vs. Antigen Detection:</b> Multiplex CNS PCR panels rapidly confirm CSF infection; antigen detection is insensitive and not recommended.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Empiric &amp; Definitive Treatment:</b> Immediate IV <b>Ceftriaxone</b> (or cefotaxime).</li>
        <li><b>Chemoprophylaxis for Close Contacts:</b> Indicated for household contacts, daycare/barracks contacts, or direct oral secretion exposure (&gt;8 h close contact, kissing, intubation/resuscitation): <b>Rifampin, Ciprofloxacin (adults), Ceftriaxone, or Azithromycin</b>.</li>
        <li><b>Vaccines:</b> Quadrivalent conjugate vaccines cover <b>serogroups A, C, Y, and W135</b>. Because serogroup B polysaccharide is weakly immunogenic and cross-reacts with human neural tissue, two separate <b>protein-based serogroup B vaccines</b> are approved.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Waterhouse-Friderichsen Syndrome:</b> Fulminant meningococcemia causing DIC, shock, and bilateral hemorrhagic destruction of the adrenal glands.</li>
        <li><b>Serogroup B Capsule Cross-Reactivity:</b> Group B capsular polysaccharide resembles human neural sialic acid (and <i>E. coli</i> K1), preventing polysaccharide vaccine use.</li>
      </ul>
    `
  },
  {
    id: "eikenella_corrodens",
    name: "Eikenella corrodens",
    chapter: "Ch. 22: Neisseria and Related Bacteria",
    tags: [
      "Gram-Negative", "Non-Acid-Fast", "Regular / Uniform Rods", "Coccobacilli / Tiny Pleomorphic Rods",
      "Facultative Anaerobe", "Capnophilic (Requires CO2)", "Extracellular", "Non-Spore-Forming",
      "Catalase (-)", "Oxidase (+)", "Non-Motile",
      "Agar Pitting + Bleach Odor",
      "Subacute / Culture-Negative Endocarditis", "Impetigo / Folliculitis / Abscesses", "Brain Abscess",
      "Dental Procedures / Intravascular Catheters"
    ],
    triggerWords: [
      "Human Bite Wounds & Clenched-Fist (Fight Bite) Injuries",
      "Pits / Corrodes Blood Agar + Characteristic Bleach-Like Odor",
      "HACEK Group (Subacute Endocarditis)", "Oxidase (+), Catalase (-), Capnophilic (5%–10% CO2)",
      "Susceptible to Penicillin/Ampicillin; Resistant to Clindamycin, Erythromycin & 1st-Gen Cephalosporins"
    ],
    overview: `
      <p><b>What it is:</b> <i>Eikenella corrodens</i> (formerly CDC subgroup HB-1; member of the <b>HACEK</b> group) is a moderate-sized (0.2 &times; 2.0 &mu;m), nonmotile, facultatively anaerobic, fastidious <b>Gram-negative rod</b> named for its tendency to <b>pit ("corrode") agar</b>.</p>
      <p><b>Epidemiology:</b> Normal commensal of the human upper respiratory tract and oral cavity. Acts as an opportunistic pathogen following oral trauma or in immunocompromised hosts—classically isolated from <b>human bite wounds and clenched-fist ("fight bite") injuries</b>, often in polymicrobial mixtures.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Opportunistic Tissue Invasion:</b> Enters deep tissues via traumatic inoculation (human bites) or bloodstream from the oral mucosa to adhere to previously damaged heart valves.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Human Bite &amp; Fistfight Wound Infections:</b> Classic deep-tissue hand/knuckle infections following traumatic inoculation of oral flora.</li>
        <li><b>Subacute Bacterial Endocarditis (HACEK):</b> Gradual onset of low-grade fever, night sweats, and chills in patients with preexisting heart valve disease.</li>
        <li><b>Other Infections:</b> Sinusitis, meningitis, brain abscesses, pneumonia, and lung abscesses.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Culture &amp; Hallmarks:</b> Slow-growing (48 h) on blood or chocolate agar in <b>5%–10% CO<sub>2</sub></b>; grows poorly or not at all on Gram-negative selective media (MacConkey). Preliminary ID made when a slow-growing Gram-negative rod <b>pits blood agar</b> (&lt;50% of isolates) and emits a <b>characteristic bleach-like odor</b>. Oxidase (+), catalase (-).</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Susceptible Agents:</b> Unusually for a Gram-negative rod, susceptible to <b>Penicillin</b> and <b>Ampicillin</b> (as well as amoxicillin-clavulanate, extended-spectrum cephalosporins, tetracyclines, and fluoroquinolones).</li>
        <li><b>Empiric Bite-Wound Pitfall:</b> Resistant to <b>oxacillin, 1st-generation cephalosporins, clindamycin, erythromycin, and aminoglycosides</b>—common empiric wound drugs fail!</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>HACEK Group:</b> Fastidious oral Gram-negative rods causing subacute endocarditis: <i>Haemophilus/Aggregatibacter</i>, <i>Cardiobacterium</i>, <i>Eikenella</i>, and <i>Kingella</i>.</li>
      </ul>
    `
  },
  {
    id: "kingella_kingae",
    name: "Kingella kingae",
    chapter: "Ch. 22: Neisseria and Related Bacteria",
    tags: [
      "Gram-Negative", "Non-Acid-Fast", "Coccobacilli / Tiny Pleomorphic Rods",
      "Facultative Anaerobe", "Extracellular", "Non-Spore-Forming",
      "Catalase (-)", "Oxidase (+)", "Beta-Hemolytic (Complete)", "Non-Motile",
      "Osteomyelitis / Septic Arthritis", "Subacute / Culture-Negative Endocarditis",
      "Dental Procedures / Intravascular Catheters"
    ],
    triggerWords: [
      "Small Gram-Negative Coccobacilli Resembling Neisseria",
      "Pediatric Septic Arthritis & Osteomyelitis",
      "HACEK Subacute Endocarditis (All Ages)", "Slow-Growing (≥3 Days) & Fastidious"
    ],
    overview: `
      <p><b>What it is:</b> <i>Kingella kingae</i> is a small, fastidious, facultatively anaerobic, carbohydrate-fermenting <b>Gram-negative coccobacillus</b> that morphologically resembles <i>Neisseria</i> and belongs to the <b>HACEK</b> group.</p>
      <p><b>Epidemiology:</b> Normal resident of the human oropharynx; enters the bloodstream via oral mucosal breaks to seed joints (especially in young children) or damaged heart valves.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Mucosal Colonization &amp; Hematogenous Seeding:</b> Colonizes the pediatric oropharynx and invades the bloodstream to infect synovial tissue, bone, and cardiac valves.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Pediatric Septic Arthritis:</b> Major cause of osteoarticular infections and septic arthritis in young children.</li>
        <li><b>Subacute Bacterial Endocarditis (HACEK):</b> Insidious endocarditis with low-grade fever, night sweats, and chills in patients of all ages.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Culture:</b> Fastidious and slow-growing—requires <b>&ge;3 days of incubation</b> in blood culture broths (inoculating synovial fluid directly into blood culture bottles improves recovery). Oxidase (+), catalase (-), weakly &beta;-hemolytic.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Broad Susceptibility:</b> Most strains are susceptible to <b>&beta;-lactam antibiotics</b> (e.g., ceftriaxone, ampicillin), tetracyclines, erythromycin, fluoroquinolones, and aminoglycosides.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>HACEK Endocarditis:</b> Subacute infective endocarditis caused by fastidious oropharyngeal Gram-negative rods, including <i>K. kingae</i>.</li>
      </ul>
    `
  }
);
