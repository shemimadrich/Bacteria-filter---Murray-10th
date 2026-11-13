// Chapter 19: Bacillus (Rich Study Edition)
// Automatically plugs into window.BACTERIA_DB in index.html

window.BACTERIA_DB.push(
  {
    id: "bacillus_anthracis",
    name: "Bacillus anthracis",
    chapter: "Ch. 19: Bacillus",
    tags: [
      "Gram-Positive", "Non-Acid-Fast", "Regular / Uniform Rods", "Boxcar-Shaped Rods",
      "Facultative Anaerobe", "Extracellular", "Spore-Forming",
      "Catalase (+)", "Oxidase (-)", "Gamma-Hemolytic (Non-Hemolytic)", "Non-Motile",
      "Medusa Head Colonies",
      "Poly-D-Glutamic Acid Capsule", "AB Toxin: Increases cAMP", "Cytolytic / Pore-Forming Toxin",
      "Cutaneous Eschar / Ulcer", "Typical Lobar Pneumonia", "Sepsis / Septic Shock", "Community-Acquired Meningitis",
      "Wool / Animal Hides"
    ],
    triggerWords: [
      "Spore-Forming Gram-Positive Rod (Boxcar Chains)", "Poly-D-Glutamic Acid Capsule (pXO2)",
      "Protective Antigen + Edema Factor (cAMP) + Lethal Factor (MAPKK Protease) (pXO1)",
      "Non-Hemolytic Medusa Head Colonies", "Non-Motile & Penicillin Susceptible",
      "Painless Black Eschar (Malignant Pustule)", "Woolsorter's Disease (Mediastinal Widening)"
    ],
    overview: `
      <p><b>What it is:</b> <i>Bacillus anthracis</i> is a large ($1 \\times 3\\text{–}8\\text{ }\\mu\\text{m}$), aerobic or facultatively anaerobic, <b>endospore-forming Gram-positive rod</b> that arranges as single cells, pairs, or long serpentine "boxcar-like" chains. It is the etiologic agent of <b>anthrax</b> and one of the highest-priority Tier 1 bioterrorism agents because its hardy endospores survive in soil and animal products for decades.</p>
      <p><b>Epidemiology & Transmission:</b> Primarily a disease of herbivores (cattle, sheep, goats, horses) that ingest spores from soil. Humans acquire infection via three portals of entry—<b>never via person-to-person transmission</b>:
        <ul class="list-circle pl-5 mt-1 space-y-1">
          <li><b>Cutaneous Inoculation (95% of natural human cases):</b> Spores enter through skin abrasions when handling contaminated <b>animal hides, goat hair, wool, fur, or bone meal</b> (industrial or agricultural anthrax), or via contaminated heroin ("injection anthrax").</li>
          <li><b>Ingestion:</b> Eating undercooked meat from infected herbivores.</li>
          <li><b>Inhalation ("Woolsorter's Disease" / Bioterrorism):</b> Inhaling aerosolized spores ($1\\text{–}5\\text{ }\\mu\\text{m}$) during wool/hide processing or deliberate weaponized spore release (e.g., 2001 US postal attacks).</li>
        </ul>
      </p>
    `,
    virulence: `
      <p>Virulent <i>B. anthracis</i> requires two large plasmids—<b>pXO1</b> (encoding the three toxin components) and <b>pXO2</b> (encoding the capsule). Loss of either plasmid renders the strain avirulent (the live attenuated <b>Sterne livestock vaccine</b> lacks pXO2!):</p>
      <ul class="list-disc pl-5 space-y-1.5 mt-1">
        <li><b>Polypeptide Capsule (Poly-$\\gamma$-D-Glutamic Acid — Plasmid pXO2):</b> Unique in medical bacteriology! Whereas almost all other bacterial capsules are made of polysaccharides, the <i>B. anthracis</i> capsule is a <b>polypeptide composed purely of D-glutamic acid</b> (synthesized by <i>capA, capB, capC</i>). It is strongly antiphagocytic and poorly immunogenic.</li>
        <li><b>Tripartite Anthrax Exotoxin System (Plasmid pXO1):</b> Consists of three separate heat-labile proteins—<b>Protective Antigen (PA)</b>, <b>Edema Factor (EF)</b>, and <b>Lethal Factor (LF)</b>—which are completely nontoxic individually, but combine at the host cell surface to form two potent binary AB toxins:
          <ul class="list-circle pl-5 mt-1 space-y-1">
            <li><b>Protective Antigen (PA — The "B" Binding Subunit):</b> The $83\\text{ kDa}$ PA protein binds to capillary morphogenesis protein 2 (CMG2) and tumor endothelial marker 8 (TEM8) receptors on host cells. Host furin-like proteases cleave off a $20\\text{ kDa}$ fragment, leaving a $63\\text{ kDa}$ fragment ($\text{PA}_{63}$) that self-assembles into a <b>ring-shaped heptamer (pre-pore)</b> capable of binding up to three molecules of EF and/or LF. After receptor-mediated endocytosis, acidification of the endosome causes the heptamer to insert into the membrane as a channel, translocating EF and LF into the host cytosol. (Called "Protective Antigen" because anti-PA antibodies neutralize toxin entry and confer protective immunity!).</li>
            <li><b>Edema Toxin (PA + Edema Factor [EF]):</b> EF is a <b>calmodulin-dependent adenylate cyclase</b> (similar to <i>Bordetella pertussis</i> adenylate cyclase) that massively increases intracellular <b>cAMP</b>, causing severe localized tissue edema and inhibiting neutrophil function.</li>
            <li><b>Lethal Toxin (PA + Lethal Factor [LF]):</b> LF is a <b>zinc-dependent metalloprotease</b> that specifically cleaves and inactivates <b>Mitogen-Activated Protein Kinase Kinases (MAPKK 1/2/3/4/6/7)</b>. This disrupts intracellular signaling pathways, stimulates macrophages to release proinflammatory cytokines (TNF-$\\alpha$ and IL-1$\\beta$), and induces rapid inflammasome-mediated lysis (pyroptosis) of macrophages and endothelial barrier collapse.</li>
          </ul>
        </li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Cutaneous Anthrax ("Malignant Pustule"):</b> Starts 2–5 days after spore inoculation as a painless, pruritic papule on exposed skin (hands, forearms, neck) that rapidly progresses into an ulcer surrounded by vesicles. Toxin-induced necrosis creates a pathognomonic <b>central, painless, coal-black necrotic eschar</b> surrounded by <b>massive non-pitting brawny edema</b> (from Edema Toxin) and painful lymphadenopathy. Despite the historical name "malignant pustule," the lesion is <b>neither malignant nor purulent (no pus is present unless secondarily infected)</b>. Untreated mortality is ~20% due to septicemia; with treatment, mortality is <1%.</li>
        <li><b>Inhalation Anthrax ("Woolsorter's Disease"):</b> Spores inhaled into alveoli are phagocytosed by alveolar macrophages and transported intact to the <b>mediastinal and peribronchial lymph nodes</b>, where they germinate (latent germination can take up to 2 months!). Presents in a classic <b>biphasic clinical course</b>:
          <ul class="list-circle pl-5 mt-1 space-y-1">
            <li><b>Stage 1 (Prodrome):</b> 3–5 days of nonspecific viral-like symptoms (fever, dry nonproductive cough, myalgias, malaise).</li>
            <li><b>Stage 2 (Fulminant Mediastinitis & Shock):</b> Abrupt onset of respiratory distress, cyanosis, stridor, profuse diaphoresis, and high fever as hemorrhagic necrosis develops in the mediastinal lymph nodes. <b>Chest X-ray/CT shows dramatic mediastinal widening and pleural effusions (often WITHOUT true alveolar pneumonia!)</b>. Hematogenous spread leads to hemorrhagic <b>meningitis</b> in 50% of patients and nearly 100% mortality within 24–36 hours unless treated aggressively and early.</li>
          </ul>
        </li>
        <li><b>Gastrointestinal Anthrax:</b> Depends on the site of spore germination:
          <ul class="list-circle pl-5 mt-1 space-y-1">
            <li><b>Oropharyngeal Form:</b> Ulcerations with pseudomembranes in the mouth/esophagus, cervical edema, and lymphadenopathy.</li>
            <li><b>Intestinal Form:</b> Spores invade the terminal ileum or cecum, causing nausea, vomiting, fever, severe abdominal pain, bloody diarrhea (hematochezia), mesenteric hemorrhagic lymphadenitis, ascites, and rapid shock (mortality >50%).</li>
          </ul>
        </li>
        <li><b>Injection Anthrax:</b> Seen in subcutaneous/intramuscular heroin users; presents with severe deep soft-tissue edema, compartment syndrome, and necrotizing fasciitis lacking the classic superficial black eschar.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Microscopy (Specimens vs. Culture):</b>
          <ul class="list-circle pl-5 mt-1 space-y-1">
            <li><b>Direct Clinical Specimens (Vesicle Fluid, Blood, CSF, Spleen):</b> Shows large, square-ended ("boxcar") Gram-positive rods in chains surrounded by a prominent polypeptide capsule (visualized via <b>M'Fadyean polychrome methylene blue stain</b> as pink amorphous capsular material surrounding blue bacilli, or via India ink / DFA). <b>Crucial Rule: Endospores are NEVER seen in direct clinical specimens</b> because spores only form when nutrients are depleted in the presence of oxygen ($\\text{CO}_2$ levels inside living host tissues inhibit sporulation!).</li>
            <li><b>Culture Smears:</b> Shows central-to-subterminal <b>oval endospores that do NOT swell the mother sporangium</b> (contrast with <i>Clostridium</i> species, whose spores swell the rod).</li>
          </ul>
        </li>
        <li><b>Colony Morphology on Sheep Blood Agar:</b> Grows rapidly overnight as large ($2\\text{–}5\\text{ mm}$), flat, dry, grey-white colonies with irregular swirling comma-shaped outgrowths at the margins resembling a <b>"Medusa head"</b>. When lifted with an inoculating loop, colonies have a tacky, <b>"beaten-egg-white" consistency</b> (stands up like whipped meringue). Note: To induce capsule formation (mucoid colonies) in vitro, the plate must be incubated on <b>bicarbonate agar in 5%–20% $\\text{CO}_2$</b>.</li>
        <li><b>Three Key Laboratory Differentiators (<i>B. anthracis</i> vs. <i>B. cereus</i>):</b>
          <ol class="list-decimal pl-5 mt-1 space-y-1">
            <li><b>Hemolysis:</b> <i>B. anthracis</i> is strictly <b>Non-Hemolytic (Gamma-Hemolytic)</b> on sheep blood agar (whereas <i>B. cereus</i> is strongly Beta-Hemolytic).</li>
            <li><b>Motility:</b> <i>B. anthracis</i> is <b>Non-Motile</b> (whereas <i>B. cereus</i> is motile via peritrichous flagella).</li>
            <li><b>Penicillin & Gamma-Phage Susceptibility:</b> <i>B. anthracis</i> is usually <b>Susceptible to Penicillin</b> and lysed by diagnostic <b>Gamma ($\\gamma$) Bacteriophage</b> (whereas <i>B. cereus</i> is Penicillin-Resistant due to beta-lactamase and resistant to gamma-phage).</li>
          </ol>
        </li>
        <li><b>Definitive Confirmation (LRN Reference Testing):</b> PCR/NAAT amplifying chromosomal and plasmid (pXO1/pXO2) targets, plus Direct Fluorescent Antibody (DFA) staining against the poly-D-glutamic acid capsule and cell-wall polysaccharide.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Cutaneous Anthrax (Uncomplicated):</b> Oral <b>Ciprofloxacin</b> or <b>Doxycycline</b> (or Amoxicillin if proven penicillin-susceptible, as inducible beta-lactamases exist in some strains) for 7–10 days (extended to 60 days if bioterrorism exposure is suspected due to delayed spore germination in the lungs).</li>
        <li><b>Inhalation, Gastrointestinal, or Meningeal Anthrax:</b> High mortality requires immediate <b>combination intravenous antimicrobial therapy (2 to 3 agents)</b> PLUS an antitoxin:
          <ul class="list-circle pl-5 mt-1 space-y-1">
            <li><b>Bactericidal Agent:</b> IV <b>Ciprofloxacin</b> (or Meropenem/Imipenem or Vancomycin).</li>
            <li><b>Protein Synthesis Inhibitor (To Shut Down Toxin Production):</b> IV <b>Linezolid</b> or <b>Clindamycin</b> (or Rifampin).</li>
            <li><b>Monoclonal Antitoxins Against Protective Antigen (PA):</b> <b>Raxibacumab</b> or <b>Obiltoxaximab</b> (monoclonal antibodies that bind PA and block EF/LF entry into host cells) or polyclonal Anthrax Immune Globulin (AIG).</li>
          </ul>
        </li>
        <li><b>Post-Exposure Prophylaxis (PEP) & Vaccination:</b> Because ungerminated spores can sit dormant in mediastinal lymph nodes for up to 60 days before germinating, anyone exposed to aerosolized anthrax spores requires <b>60 full days of oral Ciprofloxacin or Doxycycline</b> combined with 3 doses of <b>Anthrax Vaccine Adsorbed (AVA / BioThrax — cell-free filtrate rich in Protective Antigen)</b>.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>pXO1 & pXO2:</b> The two essential virulence plasmids of <i>B. anthracis</i>; pXO1 encodes PA, EF, and LF toxins, while pXO2 encodes the poly-D-glutamic acid capsule.</li>
        <li><b>PA (Protective Antigen):</b> The B-subunit heptamer pore that delivers Edema Factor (EF) and Lethal Factor (LF) into host cells; primary target of anthrax vaccines and monoclonal antitoxins.</li>
        <li><b>EF (Edema Factor):</b> Calmodulin-dependent adenylate cyclase that raises intracellular cAMP, causing massive brawny edema.</li>
        <li><b>LF (Lethal Factor):</b> Zinc metalloprotease that cleaves MAPKKs, triggering macrophage lysis and fatal shock.</li>
        <li><b>M'Fadyean Reaction:</b> Polychrome methylene blue stain demonstrating pink capsular material around blue <i>B. anthracis</i> rods in blood/spleen smears.</li>
      </ul>
    `
  },
  {
    id: "bacillus_cereus",
    name: "Bacillus cereus",
    chapter: "Ch. 19: Bacillus",
    tags: [
      "Gram-Positive", "Non-Acid-Fast", "Regular / Uniform Rods", "Boxcar-Shaped Rods",
      "Facultative Anaerobe", "Extracellular", "Spore-Forming",
      "Catalase (+)", "Oxidase (-)", "Beta-Hemolytic (Complete)", "Motile", "Swarming Motility",
      "Nagler Reaction / Lecithinase (+)",
      "Heat-Stable Emetic Toxin", "Heat-Labile Diarrheal Toxin", "Cytolytic / Pore-Forming Toxin",
      "Rapid-Onset Vomiting", "Watery Secretory Diarrhea", "Keratitis / Endophthalmitis", "Sepsis / Septic Shock",
      "Reheated Rice", "Dental Procedures / Intravascular Catheters", "Intrinsically Cephalosporin-Resistant"
    ],
    triggerWords: [
      "Spore-Forming Gram-Positive Rod", "Beta-Hemolytic & Motile (vs B. anthracis)",
      "Emetic Form (Heat-Stable Cereulide Toxin — Fried / Reheated Rice, 1–6 hr Vomiting)",
      "Diarrheal Form (Heat-Labile Enterotoxin / cAMP — Meat & Vegetables, 8–16 hr Watery Diarrhea)",
      "Post-Traumatic Fulminant Endophthalmitis (Eye Loss)", "Penicillin & Cephalosporin Resistant"
    ],
    overview: `
      <p><b>What it is:</b> <i>Bacillus cereus</i> is a ubiquitous, <b>motile, beta-hemolytic, spore-forming Gram-positive rod</b> that closely resembles <i>B. anthracis</i> morphologically ("the <i>Bacillus cereus</i> group" encompasses both species along with the insect pathogen <i>B. thuringiensis</i> and <i>B. mycoides</i>).</p>
      <p><b>Physiology & Habitat:</b> Found universally in soil, dust, grains, rice, vegetables, and milk. Because its heat-resistant spores survive initial cooking and germinate rapidly when food is left unrefrigerated at room temperature, it is a classic cause of two distinct forms of foodborne illness, as well as devastating ocular and catheter-related opportunistic infections.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Heat-Stable Emetic Enterotoxin (Cereulide):</b> A small, cyclic dodecadepsipeptide potassium ionophore (structurally similar to valinomycin) that is <b>extremely resistant to heat (survives 121°C for 90 minutes, frying, and microwave reheating!), acid (pH 2–11), and proteolysis (trypsin/pepsin)</b>. Preformed in food (classically rice) as spores germinate and multiply; once ingested, cereulide binds <b>5-$\\text{HT}_3$ (serotonin) receptors on the vagus nerve afferents</b> in the stomach and duodenum to stimulate the brainstem vomiting center, and disrupts mitochondrial oxidative phosphorylation.</li>
        <li><b>Heat-Labile Diarrheal Enterotoxins (Hemolysin BL [HBL], Nonhemolytic Enterotoxin [Nhe], Cytotoxin K):</b> Destroyed by heating at 56°C for 5 minutes. Unlike the preformed emetic toxin, diarrheal enterotoxins are <b>produced in vivo inside the small intestine</b> after ingested spores/vegetative cells multiply. They stimulate intestinal epithelial <b>adenylate cyclase (increasing cAMP)</b>, leading to active fluid and electrolyte secretion (watery diarrhea).</li>
        <li><b>Tissue-Destructive Ocular Toxins (Three-Toxin Synergy):</b> Rapid panophthalmitis is driven by the synergistic action of three toxins: <b>Necrotic Toxin</b> (a heat-labile enterotoxin), <b>Cereolysin</b> (a potent thiol-activated cholesterol-binding hemolysin similar to streptolysin O), and <b>Phospholipase C (Lecithinase)</b>, which rapidly liquefy retinal and corneal tissue.</li>
      </ul>
    `,
    diseases: `
      <p class="font-semibold text-rose-300">A. Two Distinct Forms of Gastroenteritis (Murray Table 19.2)</p>
      <ul class="list-disc pl-5 space-y-1.5 mb-3">
        <li><b>Emetic Form (Intoxication — Clinical Mimic of <i>Staphylococcus aureus</i> Food Poisoning):</b>
          <ul class="list-circle pl-5 mt-1 space-y-1">
            <li><b>Classic Vehicle:</b> <b>Boiled or fried rice</b> (e.g., buffet or restaurant rice cooked in bulk, cooled slowly at room temperature—allowing heat-activated spores to germinate and secrete heat-stable cereulide—and then flash-fried).</li>
            <li><b>Incubation & Presentation:</b> Short incubation of <b>1 to 6 hours</b>; presents with severe nausea, violent vomiting, and abdominal cramps (diarrhea is uncommon; fever is absent). Resolves within 8–24 hours; rare fulminant cases cause acute liver failure due to mitochondrial toxicity.</li>
          </ul>
        </li>
        <li><b>Diarrheal Form (True Intestinal Infection — Clinical Mimic of <i>Clostridium perfringens</i> Food Poisoning):</b>
          <ul class="list-circle pl-5 mt-1 space-y-1">
            <li><b>Classic Vehicle:</b> Contaminated <b>meats, poultry, vegetables, sauces, or puddings</b>.</li>
            <li><b>Incubation & Presentation:</b> Longer incubation of <b>8 to 24 hours</b> (time required for bacteria to multiply and secrete heat-labile enterotoxin in vivo inside the gut); presents with profuse <b>watery secretory diarrhea</b>, abdominal cramps, and tenesmus (vomiting and fever are rare). Lasts $\\ge 24$ hours.</li>
          </ul>
        </li>
      </ul>
      <p class="font-semibold text-rose-300">B. Invasive Extraintestinal Infections</p>
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Fulminant Post-Traumatic Endophthalmitis / Panophthalmitis:</b> Introduced directly into the eye following <b>penetrating ocular trauma with a soil- or metal-contaminated foreign body</b>, cataract surgery, or hematogenously in IV drug users. Progresses with terrifying speed—causing severe eye pain, corneal ring abscesses, retinal necrosis, and <b>complete permanent loss of light perception within 24 to 48 hours</b>!</li>
        <li><b>Opportunistic Bacteremia, Catheter Sepsis & Anthrax-Like Pneumonia:</b> Causes central venous catheter sepsis, endocarditis (in IV drug users), meningitis, and severe hemorrhagic pneumonia in neutropenic/immunocompromised patients. Note: Certain strains of <i>B. cereus</i> (e.g., in welders or metalworkers) have acquired a plasmid nearly identical to <i>B. anthracis</i> pXO1 and can cause fatal <b>anthrax-like fulminant pneumonia</b>!</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Microscopy & Culture:</b> Large Gram-positive rods in chains with central/subterminal oval spores that do not swell the sporangium (often stains Gram-variable or Gram-negative in older cultures). For food poisoning, testing stool alone is unreliable because transient fecal carriage occurs in healthy adults; confirmation requires isolating $\\ge 10^5\\text{ CFU/g}$ of <i>B. cereus</i> from the epidemiologically implicated food or detecting enterotoxin directly.</li>
        <li><b>Key Lab Differentiators from <i>B. anthracis</i>:</b>
          <ul class="list-circle pl-5 mt-1 space-y-1">
            <li><b>Sheep Blood Agar:</b> Forms large, feathery, frosted-glass colonies surrounded by a wide zone of complete <b>Beta-Hemolysis</b>.</li>
            <li><b>Motility (+):</b> Actively <b>motile</b> (peritrichous flagella; may swarm on moist agar).</li>
            <li><b>Lecithinase (+) on Egg Yolk Agar:</b> Produces an opaque zone of precipitation around colonies due to phospholipase C activity.</li>
            <li><b>Penicillin Resistant:</b> Produces broad-spectrum chromosomal beta-lactamases.</li>
          </ul>
        </li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Gastroenteritis (Both Forms):</b> Self-limited; managed with <b>supportive oral or IV hydration only</b>. Antibiotics do not shorten symptoms and are not indicated. Prevention relies on rapid refrigeration of cooked rice/foods (<4°C) or holding foods hot (>60°C).</li>
        <li><b>Ocular & Systemic Invasive Infections (Intrinsic Beta-Lactam Resistance!):</b> Because <i>B. cereus</i> produces potent beta-lactamases, it is <b>resistant to all penicillins and cephalosporins</b>! Invasive infections and endophthalmitis require immediate empiric therapy with intravenous (and intravitreal for eye infections) <b>Vancomycin</b>, <b>Clindamycin</b>, <b>Ciprofloxacin (Fluoroquinolones)</b>, or <b>Gentamicin</b>, alongside urgent ophthalmologic vitrectomy or infected catheter removal.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Cereulide:</b> Heat-stable, acid-stable cyclic dodecadepsipeptide emetic toxin of <i>B. cereus</i> associated with reheated rice.</li>
        <li><b>HBL / Nhe:</b> Heat-labile diarrheal enterotoxins of <i>B. cereus</i> that stimulate intestinal adenylate cyclase (cAMP) in vivo.</li>
        <li><b>Cereolysin:</b> Thiol-activated cytolytic hemolysin contributing to rapid retinal destruction in <i>B. cereus</i> endophthalmitis.</li>
      </ul>
    `
  }
);
