// Chapter 19: Bacillus (Rich Study Edition — Murray 10th Ed. Revised)
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
      "Non-Hemolytic Medusa Head Colonies", "Non-Motile & Gamma-Phage Susceptible",
      "Painless Black Eschar (Malignant Pustule)", "Woolsorter's Disease (Mediastinal Widening)"
    ],
    overview: `
      <p><b>What it is:</b> <i>Bacillus anthracis</i> is a large (1 &times; 3–8 &mu;m), aerobic or facultatively anaerobic, <b>endospore-forming Gram-positive rod</b> that arranges as single cells, pairs, or long serpentine "boxcar-like" chains. It is the etiologic agent of <b>anthrax</b> and one of the highest-priority Tier 1 bioterrorism agents because its hardy endospores survive in soil and animal products for decades.</p>
      <p><b>Epidemiology & Transmission:</b> Primarily a disease of herbivores (cattle, sheep, goats, horses) that ingest spores from soil. Humans acquire infection via three portals of entry—<b>never via person-to-person transmission</b> (because replication occurs in mediastinal lymph nodes rather than the bronchopulmonary tree):
        <ul class="list-circle pl-5 mt-1 space-y-1">
          <li><b>Cutaneous Inoculation (95% of natural human cases):</b> Spores enter through skin abrasions when handling contaminated <b>animal hides, goat hair, wool, fur, or bone meal</b> (industrial or agricultural anthrax), or via contaminated heroin ("injection anthrax").</li>
          <li><b>Ingestion:</b> Eating undercooked meat from infected herbivores (very rare in humans).</li>
          <li><b>Inhalation ("Woolsorter's Disease" / Bioterrorism):</b> Inhaling aerosolized spores (1–5 &mu;m) during wool/hide processing or deliberate weaponized spore release (e.g., 2001 US postal attacks).</li>
        </ul>
      </p>
    `,
    virulence: `
      <p>Virulent <i>B. anthracis</i> requires two large plasmids—<b>pXO1</b> (encoding the three toxin components) and <b>pXO2</b> (encoding the capsule). Loss of either plasmid renders the strain avirulent (the live attenuated <b>Sterne livestock vaccine</b> lacks pXO2!):</p>
      <ul class="list-disc pl-5 space-y-1.5 mt-1">
        <li><b>Polypeptide Capsule (Poly-&gamma;-D-Glutamic Acid — Plasmid pXO2):</b> Unique in medical bacteriology! Whereas almost all other bacterial capsules are made of polysaccharides, the <i>B. anthracis</i> capsule is a <b>polypeptide composed purely of D-glutamic acid</b> (synthesized by <i>capA, capB, capC</i>). Only one capsular serotype exists; it is strongly antiphagocytic and poorly immunogenic.</li>
        <li><b>Tripartite Anthrax Exotoxin System (Plasmid pXO1):</b> Consists of three separate heat-labile proteins—<b>Protective Antigen (PA)</b>, <b>Edema Factor (EF)</b>, and <b>Lethal Factor (LF)</b>—which are completely nontoxic individually, but combine at the host cell surface to form two potent binary AB toxins:
          <ul class="list-circle pl-5 mt-1 space-y-1">
            <li><b>Protective Antigen (PA — The "B" Binding Subunit):</b> The 83 kDa PA protein binds to receptors on host cells (brain, heart, intestine, lung, skeletal muscle, pancreas, macrophages). Host proteases cleave off a 20 kDa fragment, leaving a 63 kDa fragment (PA<sub>63</sub>) that self-assembles into a <b>ring-shaped heptamer ("prepore")</b> capable of binding up to three molecules of EF and/or LF competitively. After receptor-mediated endocytosis, acidification of the endosome causes the heptamer to form a transmembrane pore that translocates EF and LF into the host cytosol. (Called "Protective Antigen" because PA is the most immunogenic protein and anti-PA antibodies confer protective immunity!).</li>
            <li><b>Edema Toxin (PA + Edema Factor [EF]):</b> EF is a <b>calmodulin-dependent adenylate cyclase</b> (related to the adenylate cyclases of <i>Bordetella pertussis</i> and <i>Pseudomonas aeruginosa</i>) that massively increases intracellular <b>cAMP</b>, causing severe localized fluid accumulation/edema and inhibiting innate immune cells.</li>
            <li><b>Lethal Toxin (PA + Lethal Factor [LF]):</b> LF is a <b>zinc-dependent metalloprotease</b> that specifically cleaves and inactivates <b>Mitogen-Activated Protein Kinase Kinases (MAPKKs)</b>. This disrupts intracellular signaling pathways, stimulates macrophages to release proinflammatory cytokines (TNF-&alpha; and IL-1&beta;), and induces rapid cell death and endothelial barrier collapse.</li>
          </ul>
        </li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Cutaneous Anthrax ("Malignant Pustule"):</b> Starts 2–5 days after spore inoculation as a painless, pruritic papule on exposed skin (hands, forearms, neck) that rapidly progresses into an ulcer surrounded by vesicles. Toxin-induced necrosis creates a pathognomonic <b>central, painless, coal-black necrotic eschar</b> surrounded by <b>massive non-pitting brawny edema</b> (from Edema Toxin) and painful lymphadenopathy. Despite the historical name "malignant pustule," the lesion is <b>neither malignant nor purulent (no pus is present unless secondarily infected)</b>. Untreated mortality is ~20% due to septicemia; with treatment, mortality is &lt;1%.</li>
        <li><b>Inhalation Anthrax ("Woolsorter's Disease"):</b> Spores inhaled into alveoli are phagocytosed by alveolar macrophages and transported intact to the <b>mediastinal and peribronchial lymph nodes</b>, where they germinate (latent germination can take 2 months or more!). Presents in a classic <b>biphasic clinical course</b>:
          <ul class="list-circle pl-5 mt-1 space-y-1">
            <li><b>Stage 1 (Prodrome):</b> 3–5 days of nonspecific viral-like symptoms (fever, dry nonproductive cough, myalgias, malaise).</li>
            <li><b>Stage 2 (Fulminant Mediastinitis & Shock):</b> Abrupt onset of respiratory failure, fever, edema, and sepsis as hemorrhagic necrosis develops in the mediastinal lymph nodes. <b>Chest X-ray/CT shows dramatic mediastinal widening and pleural effusions (true alveolar pneumonia rarely develops—the abnormal CXR is hemorrhagic mediastinitis!)</b>. Hematogenous spread leads to hemorrhagic <b>meningitis</b> in 50% of patients and nearly 100% mortality within 3 days unless treated immediately.</li>
          </ul>
        </li>
        <li><b>Gastrointestinal Anthrax:</b> Depends on the site of spore germination:
          <ul class="list-circle pl-5 mt-1 space-y-1">
            <li><b>Oropharyngeal Form:</b> Ulcerations in the mouth or esophagus with cervical edema, regional lymphadenopathy, and sepsis.</li>
            <li><b>Intestinal Form:</b> Spores invade the terminal ileum or cecum, causing nausea, vomiting, malaise, abdominal pain, and rapid progression to systemic disease and shock (mortality &gt;50%).</li>
          </ul>
        </li>
        <li><b>Injection Anthrax:</b> Seen in subcutaneous/intramuscular heroin users; presents with severe deep soft-tissue edema, compartment syndrome, and necrotizing fasciitis lacking the classic superficial black eschar.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Microscopy (Specimens vs. Culture):</b>
          <ul class="list-circle pl-5 mt-1 space-y-1">
            <li><b>Direct Clinical Specimens (Vesicle Fluid, Blood, CSF, Lymph Nodes):</b> Anthrax is one of the few bacterial diseases with such overwhelming bacteremia that organisms are visible directly on a peripheral blood Gram stain! Shows large, square-ended ("boxcar") Gram-positive rods in chains surrounded by a prominent polypeptide capsule (visualized via <b>M'Fadyean methylene blue stain</b>, India ink, or DFA). <b>Crucial Rule: Endospores are NEVER seen in direct clinical specimens</b>; spores only form in 2- to 3-day-old cultures incubated in a low-CO<sub>2</sub> atmosphere (visualized with malachite green spore stain).</li>
            <li><b>Culture Smears:</b> Shows central-to-subterminal <b>oval endospores that do NOT swell the mother sporangium</b> (contrast with <i>Clostridium</i> species, whose spores swell the rod).</li>
          </ul>
        </li>
        <li><b>Colony Morphology on Sheep Blood Agar:</b> Grows rapidly overnight as large (2–5 mm), flat, dry, nonpigmented grey-white colonies with a <b>"ground-glass" surface</b> and irregular swirling comma-shaped outgrowths at the margins resembling a <b>"Medusa head"</b>. When lifted with an inoculating loop, colonies are sticky and stand upright like <b>"beaten egg whites."</b> Note: The capsule is produced in vivo and not typically observed on routine culture unless incubated under special high-CO<sub>2</sub>/bicarbonate conditions.</li>
        <li><b>Three Key Laboratory Differentiators (<i>B. anthracis</i> vs. <i>B. cereus</i>):</b>
          <ol class="list-decimal pl-5 mt-1 space-y-1">
            <li><b>Hemolysis:</b> <i>B. anthracis</i> is strictly <b>Non-Hemolytic (Gamma-Hemolytic)</b> on sheep blood agar (whereas <i>B. cereus</i> is strongly Beta-Hemolytic).</li>
            <li><b>Motility:</b> <i>B. anthracis</i> is <b>Non-Motile</b> (whereas <i>B. cereus</i> is motile via peritrichous flagella).</li>
            <li><b>Gamma-Phage & Capsule Confirmation:</b> Definitive identification in a public health reference lab demonstrates capsule production (microscopy or DFA) PLUS either specific lysis by diagnostic <b>Gamma (&gamma;) Bacteriophage</b> or a positive DFA for the <i>B. anthracis</i> cell-wall polysaccharide (alongside reference PCR/NAAT).</li>
          </ol>
        </li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Cutaneous Anthrax (Uncomplicated):</b> Although penicillin was historically the drug of choice, resistance in naturally occurring and bioengineered strains (as well as resistance to sulfonamides and extended-spectrum cephalosporins) makes current empirical therapy oral <b>Ciprofloxacin, Doxycycline, Levofloxacin, or Moxifloxacin</b> (extended to 60 days if bioterrorism aerosol exposure is suspected due to delayed spore germination).</li>
        <li><b>Severe / Systemic Anthrax (Inhalation, GI, or Meningeal — IV Triple Therapy):</b> High mortality requires immediate <b>intravenous triple antimicrobial therapy</b> PLUS an antitoxin:
          <ul class="list-circle pl-5 mt-1 space-y-1">
            <li><b>Fluoroquinolone:</b> IV <b>Ciprofloxacin, Levofloxacin, or Moxifloxacin</b>.</li>
            <li><b>Bactericidal Beta-Lactam:</b> e.g., IV <b>Meropenem</b>.</li>
            <li><b>Protein Synthesis Inhibitor (To Shut Down Toxin Production):</b> IV <b>Linezolid, Clindamycin, or Rifampicin</b>.</li>
            <li><b>Monoclonal Antitoxins Against Protective Antigen (PA):</b> <b>Raxibacumab</b> or <b>Obiltoxaximab</b> (monoclonal antibodies that bind PA and block EF/LF entry into host cells) or polyclonal Anthrax Immune Globulin (AIG).</li>
          </ul>
        </li>
        <li><b>Post-Exposure Prophylaxis (PEP) & Vaccination:</b> Because ungerminated spores can remain latent in mediastinal lymph nodes for 2 months or more, aerosol exposure requires <b>60 full days of oral Ciprofloxacin or Doxycycline</b> plus <b>Anthrax Vaccine Adsorbed (AVA / BioThrax — rich in Protective Antigen)</b>. Control of natural disease also relies on vaccinating livestock herds in endemic regions.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>pXO1 & pXO2:</b> The two essential virulence plasmids of <i>B. anthracis</i>; pXO1 encodes PA, EF, and LF toxins, while pXO2 encodes the poly-D-glutamic acid capsule.</li>
        <li><b>PA (Protective Antigen):</b> The B-subunit heptamer pore (PA<sub>63</sub>) that delivers Edema Factor (EF) and Lethal Factor (LF) into host cells; primary target of anthrax vaccines and monoclonal antitoxins.</li>
        <li><b>EF (Edema Factor):</b> Calmodulin-dependent adenylate cyclase that raises intracellular cAMP, causing massive brawny edema.</li>
        <li><b>LF (Lethal Factor):</b> Zinc metalloprotease that cleaves MAPKKs, triggering macrophage cytokine release, cell death, and fatal shock.</li>
        <li><b>M'Fadyean Reaction:</b> Polychrome methylene blue stain demonstrating capsular material around <i>B. anthracis</i> rods in clinical smears.</li>
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
      "Diarrheal Form (Heat-Labile Enterotoxin / cAMP — Meat & Vegetables, >6 hr Watery Diarrhea)",
      "Post-Traumatic Fulminant Endophthalmitis (Eye Loss)", "Penicillin & Cephalosporin Resistant"
    ],
    overview: `
      <p><b>What it is:</b> <i>Bacillus cereus</i> is a ubiquitous, <b>motile, beta-hemolytic, spore-forming Gram-positive rod</b> that closely resembles <i>B. anthracis</i> morphologically ("the <i>Bacillus cereus</i> group" encompasses both species along with <i>B. thuringiensis</i> and <i>B. mycoides</i>). Its species name (<i>cereus</i> = "waxen") refers to its dull, frosted-glass colony surface.</p>
      <p><b>Physiology & Habitat:</b> Found universally in soil, dust, grains, rice, vegetables, and milk. Because its heat-resistant spores survive initial cooking and germinate rapidly when food is left unrefrigerated at room temperature, it is a classic cause of two distinct forms of foodborne illness, as well as devastating ocular and catheter-related opportunistic infections.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Heat-Stable Emetic Enterotoxin (Cereulide):</b> A small, proteolysis-resistant cyclic dodecadepsipeptide mitochondrial toxin that is <b>extremely resistant to heat (survives frying and reheating!), acid, and gastric enzymes</b>. Preformed in food (classically rice) as spores germinate and multiply; once ingested, cereulide stimulates <b>5-HT<sub>3</sub> (serotonin) receptors on vagus nerve afferents</b> to trigger vomiting and impairs mitochondrial fatty acid metabolism (rarely causing fulminant liver failure at high doses).</li>
        <li><b>Heat-Labile Diarrheal Enterotoxins (Hemolysin BL [HBL], Nonhemolytic Enterotoxin [Nhe], Cytotoxin K):</b> Destroyed by heating. Unlike the preformed emetic toxin, diarrheal enterotoxins are <b>produced in vivo inside the small intestine</b> after ingested spores/vegetative cells multiply. Similar to <i>E. coli</i> and <i>Vibrio cholerae</i> enterotoxins, they stimulate intestinal epithelial <b>adenylate cyclase (increasing cAMP)</b>, leading to profuse watery diarrhea.</li>
        <li><b>Tissue-Destructive Ocular Toxins (Three-Toxin Synergy):</b> Rapid panophthalmitis is driven by the synergistic action of three toxins: <b>Necrotic Toxin</b> (a heat-labile enterotoxin), <b>Cereolysin</b> (a potent hemolysin named after the species), and <b>Phospholipase C (Lecithinase)</b>, which rapidly liquefy retinal and corneal tissue.</li>
      </ul>
    `,
    diseases: `
      <p class="font-semibold text-rose-300">A. Two Distinct Forms of Gastroenteritis (Murray Table 19.2)</p>
      <ul class="list-disc pl-5 space-y-1.5 mb-3">
        <li><b>Emetic Form (Intoxication — Clinical Mimic of <i>Staphylococcus aureus</i> Food Poisoning):</b>
          <ul class="list-circle pl-5 mt-1 space-y-1">
            <li><b>Classic Vehicle:</b> <b>Boiled or fried rice</b> (cooked in bulk, cooled slowly at room temperature—allowing heat-resistant spores to germinate and secrete heat-stable cereulide—and then reheated/flash-fried).</li>
            <li><b>Incubation & Presentation:</b> Short incubation of <b>1 to 6 hours (mean 2 hours)</b>; presents with severe nausea, vomiting, and abdominal cramps (diarrhea and fever are generally absent). Duration is short (8–10 hours; &lt;24 hours); rare cases with heavy toxin loads cause fulminant liver failure.</li>
          </ul>
        </li>
        <li><b>Diarrheal Form (True Intestinal Infection — Clinical Mimic of <i>Clostridium perfringens</i> Food Poisoning):</b>
          <ul class="list-circle pl-5 mt-1 space-y-1">
            <li><b>Classic Vehicle:</b> Contaminated <b>meats, vegetables, or sauces</b>.</li>
            <li><b>Incubation & Presentation:</b> Longer incubation of <b>&gt;6 hours (mean 9 hours)</b> (time required for bacteria to multiply and secrete heat-labile enterotoxin in vivo inside the gut); presents with profuse <b>watery secretory diarrhea</b>, nausea, and abdominal cramps. Lasts &ge;24 hours.</li>
          </ul>
        </li>
      </ul>
      <p class="font-semibold text-rose-300">B. Invasive Extraintestinal Infections</p>
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Fulminant Post-Traumatic Endophthalmitis / Panophthalmitis:</b> Introduced directly into the eye following <b>penetrating ocular trauma with a soil- or metal-contaminated foreign body</b>, or hematogenously in IV drug users. Progresses with terrifying speed—causing severe eye pain, purulence, and <b>complete permanent loss of the eye within 48 hours</b>!</li>
        <li><b>Opportunistic Bacteremia, Catheter Sepsis & Anthrax-Like Pneumonia:</b> Causes central venous catheter and CNS shunt infections, endocarditis (in IV drug users), and bacteremia/meningitis in severely immunosuppressed patients. Notably, rare encapsulated strains of <i>B. cereus</i> carrying <i>B. anthracis</i> <b>pXO1 toxin genes</b> have caused fatal <b>severe anthrax-like pneumonia in immunocompetent metalworkers</b>!</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Microscopy & Culture:</b> Large Gram-positive rods in chains with central/subterminal oval spores (clear unstained areas on Gram stain; green on malachite green stain) that do not swell the sporangium. Because transient colonization occurs in healthy individuals, confirming food poisoning requires isolating &ge;10<sup>5</sup> CFU/g from the implicated food (in practice, gastroenteritis is diagnosed clinically/epidemiologically). Organisms grow rapidly from infected eyes, catheters, or blood.</li>
        <li><b>Key Lab Differentiators from <i>B. anthracis</i>:</b>
          <ul class="list-circle pl-5 mt-1 space-y-1">
            <li><b>Sheep Blood Agar:</b> Forms large, dull, frosted-glass colonies surrounded by a wide zone of complete <b>Beta-Hemolysis</b>.</li>
            <li><b>Motility (+):</b> Actively <b>motile</b> (peritrichous flagella; may swarm on moist agar).</li>
            <li><b>Lecithinase (+) on Egg Yolk Agar:</b> Produces an opaque zone of precipitation around colonies due to phospholipase C activity.</li>
            <li><b>Penicillin & Cephalosporin Resistant:</b> Carries genes for resistance to penicillins and cephalosporins.</li>
          </ul>
        </li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Gastroenteritis (Both Forms):</b> Self-limited; managed with <b>supportive oral or IV hydration only</b>. Antibiotics are not indicated. Prevention relies on rapid consumption after cooking and proper refrigeration of uneaten foods.</li>
        <li><b>Ocular & Systemic Invasive Infections (Intrinsic Beta-Lactam Resistance!):</b> Because <i>B. cereus</i> carries resistance genes against all <b>penicillins and cephalosporins</b>, those agents are ineffective! Invasive infections and endophthalmitis require immediate therapy with <b>Vancomycin, Clindamycin, Ciprofloxacin, or Gentamicin</b> (including intravitreal antibiotics and urgent surgery for ocular trauma, or infected catheter removal).</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Cereulide:</b> Heat-stable, proteolysis-resistant mitochondrial emetic toxin of <i>B. cereus</i> associated with reheated rice.</li>
        <li><b>HBL / Nhe:</b> Heat-labile diarrheal enterotoxins of <i>B. cereus</i> that stimulate intestinal adenylate cyclase (cAMP) in vivo.</li>
        <li><b>Cereolysin:</b> Potent cytolytic hemolysin contributing (with necrotic toxin and phospholipase C) to rapid eye destruction in <i>B. cereus</i> endophthalmitis.</li>
      </ul>
    `
  }
);