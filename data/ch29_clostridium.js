// Chapter 29: Clostridium and Clostridioides (Rich Study Edition)
// Automatically plugs into window.BACTERIA_DB in index.html

window.BACTERIA_DB.push(
  {
    id: "clostridium_perfringens",
    name: "Clostridium perfringens",
    chapter: "Ch. 29: Clostridium and Clostridioides",
    tags: [
      "Gram-Positive", "Gram-Variable / Poorly Staining", "Non-Acid-Fast", "Boxcar-Shaped Rods", "Regular / Uniform Rods",
      "Obligate Anaerobe", "Extracellular", "Spore-Forming",
      "Catalase (-)", "Oxidase (-)", "Beta-Hemolytic (Complete)", "Double-Zone Hemolysis", "Non-Motile",
      "Nagler Reaction / Lecithinase (+)",
      "Cytolytic / Pore-Forming Toxin", "Heat-Labile Diarrheal Toxin",
      "Necrotizing Fasciitis / Gas Gangrene", "Erysipelas / Cellulitis", "Watery Secretory Diarrhea", "Inflammatory / Bloody Dysentery", "Sepsis / Septic Shock"
    ],
    triggerWords: [
      "Large Rectangular (Boxcar) Gram-Positive Rod — Spores Rarely Seen In Vivo/Vitro!",
      "Double-Zone Beta-Hemolysis on Blood Agar (Theta + Alpha Toxin) & Non-Motile",
      "Alpha Toxin (Phospholipase C / Lecithinase — Nagler Reaction +) → Gas Gangrene (Myonecrosis) & Massive Hemolysis",
      "Absence of Leukocytes on Wound Gram Stain (Lysed by Clostridial Toxins)",
      "Food Poisoning (Type A Enterotoxin Produced During Sporulation — Meat/Gravy, 8–12 hr Watery Diarrhea, No Fever/Vomiting)",
      "Enteritis Necroticans / Pig-Bel (Type C Beta Toxin — Pork + Sweet Potatoes)",
      "Treat Myonecrosis with Urgent Surgical Debridement + High-Dose Penicillin"
    ],
    overview: `
      <p><b>What it is:</b> <i>Clostridium perfringens</i> ("breaking through") is a large (0.6–2.4 &times; 1.3–19.0 &mu;m), rectangular, <b>nonmotile, anaerobic, spore-forming Gram-positive rod</b> (frequently decolorizing in smears). Crucially, <b>spores are rarely observed</b> in vivo or in routine culture. Subdivided into five toxinotypes (<b>A–E</b>) based on four major lethal toxins (alpha, beta, epsilon, iota).</p>
      <p><b>Epidemiology:</b> Type A is ubiquitous in soil, water, sewage, and human/animal GI tracts; types B–E colonize animal (and occasionally human) intestines. Rapidly divides every 8–10 minutes in anaerobic devitalized tissue or improperly held cooked meats (&lt;60°C).</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Alpha Toxin (All Types A–E — Most Important Virulence Factor):</b> A <b>lecithinase (phospholipase C)</b> that lyses erythrocytes, platelets, leukocytes, and endothelial cells—causing massive hemolysis, bleeding, vascular permeability, myonecrosis, hepatic toxicity, and myocardial dysfunction (bradycardia/hypotension).</li>
        <li><b>Beta Toxin (Types B &amp; C):</b> Causes intestinal stasis, mucosal necrosis, and jejunal perforation (<b>enteritis necroticans / pig-bel</b>); normally inactivated by trypsin.</li>
        <li><b>Enterotoxin (Primarily Type A):</b> Heat-labile toxin produced during <b>sporulation</b> in the alkaline small intestine (enhanced by trypsin); inserts into ileal/jejunal brush-border membranes to form pores causing fluid/ion loss.</li>
        <li><b>Other Toxins:</b> Theta toxin (perfringolysin O — inner zone of complete hemolysis), epsilon toxin (types B/D), iota toxin (type E), collagenase, hyaluronidase, and proteases.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Myonecrosis (Gas Gangrene):</b> Life-threatening muscle necrosis developing within ~1 week of trauma/surgery; intense pain, devitalized muscle, subcutaneous/intramuscular <b>gas</b> from rapid fermentation, massive hemolysis, shock, renal failure, and death often within 2 days (40%–100% mortality).</li>
        <li><b>Cellulitis &amp; Suppurative Myositis:</b> Localized soft-tissue gas/edema (nonpainful) or pus in muscle planes without true myonecrosis.</li>
        <li><b>Clostridial Food Poisoning (Type A):</b> 8–12 h after eating contaminated reheated meat/gravy held &lt;60°C; abdominal cramps and <b>watery diarrhea without fever, nausea, or vomiting</b>, resolving in &lt;24 h.</li>
        <li><b>Necrotizing Enteritis (Enteritis Necroticans / Pig-Bel — Type C):</b> Acute jejunal necrosis, bloody diarrhea, perforation, and ~50% mortality (classically Papua New Guinea: contaminated pork + sweet potatoes containing a heat-resistant trypsin inhibitor).</li>
        <li><b>Septicemia:</b> Over half of blood isolates are transient/contaminants, but true septicemia complicating myonecrosis causes catastrophic intravascular hemolysis and shock.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Microscopy (Rapid Presumptive ID):</b> Wound Gram stain shows abundant rectangular Gram-positive rods with a striking <b>absence of inflammatory leukocytes</b> (lysed by toxins) and rarely any spores.</li>
        <li><b>Culture &amp; Double-Zone Hemolysis:</b> Fast-growing anaerobe (hours!) with flat spreading colonies on sheep blood agar displaying classic <b>double-zone hemolysis</b> (inner complete &beta;-hemolysis from theta toxin + outer partial hemolysis from alpha toxin) and positive <b>Nagler lecithinase reaction</b> on egg yolk agar.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Myonecrosis / Soft-Tissue Infections:</b> Immediate aggressive <b>surgical debridement + high-dose IV Penicillin</b> (hyperbaric oxygen results are inconclusive).</li>
        <li><b>Food Poisoning:</b> Self-limited; oral/IV rehydration only (<b>no antibiotics</b>). Prevent by rapid cooling (&lt;4°C) or reheating food to &ge;74°C to destroy heat-labile enterotoxin.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Double-Zone Hemolysis:</b> Characteristic dual ring on sheep blood agar around <i>C. perfringens</i> (inner clear ring = theta toxin; outer hazy ring = alpha toxin/lecithinase).</li>
        <li><b>Nagler Reaction:</b> Detection of <i>C. perfringens</i> alpha-toxin (lecithinase) precipitation on egg yolk agar, inhibited by anti-alpha-toxin antibody.</li>
      </ul>
    `
  },
  {
    id: "clostridium_tetani",
    name: "Clostridium tetani",
    chapter: "Ch. 29: Clostridium and Clostridioides",
    tags: [
      "Gram-Positive", "Non-Acid-Fast", "Regular / Uniform Rods",
      "Obligate Anaerobe", "Extracellular", "Spore-Forming",
      "Catalase (-)", "Oxidase (-)", "Motile", "Swarming Motility",
      "Neurotoxin: Blocks GABA/Glycine (Spastic)",
      "Spastic Paralysis / Tetanus"
    ],
    triggerWords: [
      "Terminal Round Spores ('Drumstick' / 'Tennis Racket' Appearance)",
      "Extremely Oxygen-Sensitive Obligate Anaerobe (Swarming Film on Agar)",
      "Tetanospasmin (Plasmid-Encoded Zinc Endopeptidase — Retrograde Axonal Transport to Spinal Cord)",
      "Blocks Inhibitory Neurotransmitters Glycine & GABA → Unregulated Spastic Paralysis",
      "Trismus (Lockjaw), Risus Sardonicus, Opisthotonos & Autonomic Instability",
      "Neonatal Tetanus (Umbilical Stump — >90% Mortality)",
      "Clinical Diagnosis; Treat Immediately with Debridement + Metronidazole + Human Tetanus IG + Toxoid Vaccine"
    ],
    overview: `
      <p><b>What it is:</b> <i>Clostridium tetani</i> ("related to tension") is a large (0.5–2 &times; 2–18 &mu;m), motile, proteolytic, <b>extremely oxygen-sensitive anaerobic Gram-positive rod</b> that forms distinctive round, <b>terminal spores resembling drumsticks</b>.</p>
      <p><b>Epidemiology:</b> Spores are ubiquitous in fertile soil and animal/human GI tracts. Rare in vaccinated nations (~30 US cases/year, mostly unimmunized or overdue for 10-year boosters), but causes &gt;73,000 cases/year globally (~27,000 neonatal cases, ~35,000 deaths).</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Tetanospasmin (Nonconjugative Plasmid A-B Neurotoxin):</b> Released upon cell lysis; heavy (B) chain binds polysialogangliosides on motor neurons and undergoes <b>retrograde axonal transport</b> to spinal cord motor neuron soma. Acidified endosomes release the light (A) chain—a <b>zinc endopeptidase</b> that irreversibly cleaves vesicle-trafficking proteins, blocking release of inhibitory neurotransmitters <b>glycine and GABA</b> &rarr; unregulated excitatory firing and <b>spastic paralysis</b> (recovery requires regrowing new axonal terminals).</li>
        <li><b>Tetanolysin:</b> Oxygen-labile hemolysin of unknown clinical significance.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Generalized Tetanus (Most Common):</b> Incubation days to weeks (shorter when wound is closer to CNS). Presents with <b>trismus (lockjaw — masseter spasm)</b>, <b><i>risus sardonicus</i></b> (sardonic facial grin), drooling, sweating, and persistent back spasms (<b>opisthotonos</b>); severe disease causes autonomic instability (arrhythmias, BP swings, profuse diaphoresis).</li>
        <li><b>Localized &amp; Cephalic Tetanus:</b> Spasms confined to wound site; cephalic tetanus (head wound) carries a very poor prognosis.</li>
        <li><b>Neonatal Tetanus:</b> Umbilical stump contamination in developing countries; &gt;90% mortality.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Strictly Clinical Diagnosis:</b> Never wait for lab confirmation! Culture is positive in only ~30% (few organisms, extreme oxygen sensitivity, grows as a thin swarming film); neither toxin nor antibodies are detectable in patient serum.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Four-Pillar Immediate Management:</b> (1) <b>Wound debridement</b>, (2) <b>Metronidazole</b> (preferred over penicillin because penicillin antagonizes GABA and can worsen CNS excitability), (3) <b>Human Tetanus Immunoglobulin (HTIG)</b> to neutralize unbound toxin, and (4) <b>Tetanus toxoid vaccination</b> (natural infection does NOT confer immunity!) plus ICU airway/spasm support.</li>
        <li><b>Prevention:</b> 3-dose tetanus toxoid series + booster every 10 years.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Risus Sardonicus &amp; Opisthotonos:</b> Fixed sardonic facial grimace and extreme backward arching of the spine caused by unopposed tetanospasmin-induced spastic contractions.</li>
      </ul>
    `
  },
  {
    id: "clostridium_botulinum",
    name: "Clostridium botulinum",
    chapter: "Ch. 29: Clostridium and Clostridioides",
    tags: [
      "Gram-Positive", "Non-Acid-Fast", "Regular / Uniform Rods",
      "Obligate Anaerobe", "Extracellular", "Spore-Forming",
      "Catalase (-)", "Oxidase (-)", "Motile",
      "Neurotoxin: Blocks ACh (Flaccid)",
      "Flaccid Paralysis / Botulism",
      "Canned Goods / Honey"
    ],
    triggerWords: [
      "Botulinum Toxin (Types A, B, E, F — Heat-Labile Zinc Endopeptidase A-B Neurotoxin)",
      "Remains at Neuromuscular Junction → Blocks Acetylcholine Release → Descending Flaccid Paralysis",
      "Foodborne Botulism (Home-Canned Foods / Low-Acid Carrot Juice / Preserved Fish — Preformed Toxin)",
      "Infant Botulism (#1 Form in US ~70% — Honey / Soil Spores Germinating In Vivo → Floppy Baby, Constipation, Weak Cry)",
      "Wound Botulism & Inhalation Botulism (Bioterrorism Threat)",
      "Afebrile with Clear Sensorium, Fixed Dilated Pupils, Dry Mouth & Respiratory Paralysis",
      "Treat with Ventilatory Support + Heptavalent Antitoxin (BIG-IV for Infants); Avoid Antibiotics in Foodborne/Infant Forms"
    ],
    overview: `
      <p><b>What it is:</b> <i>Clostridium botulinum</i> (Latin: <i>botulus</i> = sausage) is a heterogeneous group of large (0.6–1.4 &times; 3.0–20.2 &mu;m), fastidious, <b>anaerobic, spore-forming Gram-positive rods</b> producing 8 antigenic neurotoxins (A–G; <b>types A, B, E, and F</b> cause human disease).</p>
      <p><b>Epidemiology:</b> Spores are widespread in soil and water (~110 US cases/year; <b>~70% are infant botulism</b>, mean age 13 weeks). Foodborne disease (&lt;25 US cases/year) stems from <b>home-canned low-acid foods</b> (types A/B) or preserved fish (type E); infant botulism from <b>honey</b>, soil, or dust.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Botulinum Neurotoxin (150-kDa A-B Zinc Endopeptidase):</b> Complexed with nontoxic proteins that protect it from gastric digestion. Unlike tetanospasmin, it <b>remains at the peripheral neuromuscular junction</b>; the internalized light (A) chain irreversibly cleaves proteins regulating <b>acetylcholine (ACh) release</b> at peripheral cholinergic synapses &rarr; <b>flaccid paralysis</b> (recovery requires months of nerve terminal regeneration).</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Foodborne Botulism (Preformed Toxin):</b> 1–3 days post-ingestion; dizziness, <b>blurred vision with fixed dilated pupils, dry mouth</b> (anticholinergic signs), constipation, abdominal pain, <b>no fever, clear sensorium</b>, progressing to <b>bilateral descending flaccid paralysis</b> and respiratory arrest (5%–10% mortality with ICU ventilation).</li>
        <li><b>Infant Botulism (In Vivo Spore Colonization &lt;1 Year):</b> Spores germinate in immature gut flora lacking competitive microbes &rarr; constipation, weak cry, poor feeding/sucking, "floppy baby" flaccid paralysis, and respiratory arrest (1%–2% mortality).</li>
        <li><b>Wound &amp; Inhalation Botulism:</b> Wound botulism has longer incubation (&ge;4 days) and minimal GI symptoms; inhalation botulism is a rapid-onset, high-mortality bioweapon threat.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Toxin Bioassay &amp; Culture:</b> Confirmed by detecting toxin activity in food, serum, stool, or gastric fluid via public-health <b>mouse neutralization bioassay</b> (serum toxin positive in &gt;90% of infants vs. &lt;60% in foodborne). Heating mixed specimens to <b>80°C for 10 min</b> kills non-spore-formers to isolate heat-resistant <i>C. botulinum</i> spores.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Ventilatory Support + Antitoxin:</b> Immediate airway/ventilatory support + <b>heptavalent botulinum antitoxin</b> (or human <b>BIG-IV</b> for infant botulism) to neutralize unbound circulating toxin. <b>Avoid antibiotics</b> in foodborne/infant botulism (bacterial lysis releases more toxin; metronidazole/penicillin used only in wound botulism).</li>
        <li><b>Prevention:</b> Keep food acidic or refrigerated (&le;4°C); heat home-canned food to <b>60°C–100°C for 10 min</b> (inactivates heat-labile toxin); <b>never feed honey to infants &lt;1 year</b>.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>BIG-IV (Botulism Immune Globulin Intravenous):</b> Human-derived antitoxin specifically used to treat infant botulism.</li>
      </ul>
    `
  },
  {
    id: "clostridium_septicum",
    name: "Clostridium septicum",
    chapter: "Ch. 29: Clostridium and Clostridioides",
    tags: [
      "Gram-Positive", "Non-Acid-Fast", "Regular / Uniform Rods",
      "Obligate Anaerobe", "Extracellular", "Spore-Forming",
      "Catalase (-)", "Oxidase (-)", "Beta-Hemolytic (Complete)", "Motile", "Swarming Motility",
      "Necrotizing Fasciitis / Gas Gangrene", "Sepsis / Septic Shock",
      "Colon Cancer Association"
    ],
    triggerWords: [
      "Nontraumatic (Spontaneous) Gas Gangrene / Myonecrosis",
      "Strongly Associated with Occult Colon Cancer, Acute Leukemia & Diabetes!",
      "Rapidly Swarming Growth on Blood Agar (Mirrors Fulminant Tissue Spread)",
      "Death Within 1–2 Days Without Immediate Surgery & Antibiotics"
    ],
    overview: `
      <p><b>What it is:</b> <i>Clostridium septicum</i> ("putrefactive") is a motile, spore-forming anaerobic Gram-positive rod notorious for causing <b>spontaneous (nontraumatic) gas gangrene</b> and fulminant bacteremia.</p>
      <p><b>Clinical Hallmark:</b> Strongly linked to compromised bowel mucosal integrity in patients with <b>occult colon carcinoma, acute leukemia, neutropenia, or diabetes</b>—finding <i>C. septicum</i> bacteremia mandates a workup for occult GI malignancy!</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Histolytic Toxins &amp; Rapid Tissue Invasion:</b> Spreads hematogenously from ulcerated bowel mucosa into healthy muscle, rapidly proliferating with gas production and fulminant tissue necrosis.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Nontraumatic Myonecrosis (Spontaneous Gas Gangrene) &amp; Septicemia:</b> Fulminant gas-forming muscle destruction and shock; most patients die within 1–2 days of presentation without emergent intervention.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Microscopy &amp; Culture:</b> Spore-forming Gram-positive rods that rapidly <b>swarm across blood agar plates</b>; blood/tissue cultures confirm diagnosis; radiographs show soft-tissue gas.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Emergent Management:</b> Urgent surgical debridement + high-dose IV <b>Penicillin</b> (often with clindamycin to suppress toxin synthesis), followed by colonoscopy/workup for occult colorectal cancer.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Nontraumatic Myonecrosis:</b> Spontaneous clostridial gas gangrene arising hematogenously from GI mucosal lesions (classically occult colon cancer), most often caused by <i>C. septicum</i>.</li>
      </ul>
    `
  },
  {
    id: "clostridium_sordellii",
    name: "Clostridium sordellii",
    chapter: "Ch. 29: Clostridium and Clostridioides",
    tags: [
      "Gram-Positive", "Non-Acid-Fast", "Regular / Uniform Rods",
      "Obligate Anaerobe", "Extracellular", "Spore-Forming",
      "Catalase (-)", "Oxidase (-)", "Urease (+)", "Motile",
      "Necrotizing Fasciitis / Gas Gangrene", "Sepsis / Septic Shock"
    ],
    triggerWords: [
      "Fatal Toxic Shock Syndrome After Natural Childbirth or Medically Induced Abortion",
      "Classic Triad: Afebrile Presentation + Marked Hemoconcentration + Leukemoid Reaction",
      "Rapid Refractory Hypotension, Capillary Leak & Endometritis (Death Within 24–48 h)",
      "Urease (+) Clostridium Species"
    ],
    overview: `
      <p><b>What it is:</b> <i>Clostridium sordellii</i> is an anaerobic, spore-forming, urease-positive Gram-positive rod capable of causing gas gangrene and a uniquely <b>fatal afebrile toxic shock syndrome</b>.</p>
      <p><b>Epidemiology:</b> Well-documented complication following <b>natural childbirth, medically induced abortions</b> (mifepristone/misoprostol), or deep tissue trauma/injection drug use.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Lethal &amp; Hemorrhagic Toxins:</b> Induce massive third-spacing/capillary leak, profound edema, tissue necrosis, and refractory septic shock without triggering a typical febrile response.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Postpartum / Post-Abortion Endometritis &amp; Toxic Shock Syndrome:</b> Fulminant course characterized by <b>absence of fever</b>, severe abdominal pain, tachycardia, refractory hypotension, massive peritoneal/pleural effusions, <b>hemoconcentration</b>, and extreme neutrophil elevation (<b>leukemoid reaction</b>).</li>
        <li><b>Myonecrosis (Gas Gangrene):</b> Necrotizing soft-tissue infection.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Microscopy, Culture &amp; PCR:</b> Gram-positive rods in necrotic endometrial/wound tissue; anaerobic culture (urease +) or species-specific PCR confirms diagnosis.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Aggressive Surgical &amp; Antimicrobial Therapy:</b> Emergent surgical debridement/hysterectomy + broad-spectrum anaerobic IV antibiotics (penicillin/clindamycin) and ICU hemodynamic support (mortality remains very high).</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Leukemoid Reaction:</b> Extreme reactive elevation in peripheral white blood cell count (&gt;50,000/&mu;L) typical of <i>C. sordellii</i> toxic shock syndrome.</li>
      </ul>
    `
  },
  {
    id: "clostridioides_difficile",
    name: "Clostridioides difficile",
    chapter: "Ch. 29: Clostridium and Clostridioides",
    tags: [
      "Gram-Positive", "Non-Acid-Fast", "Regular / Uniform Rods",
      "Obligate Anaerobe", "Extracellular", "Spore-Forming",
      "Catalase (-)", "Oxidase (-)", "Motile",
      "Horse Stable Odor",
      "Stool GDH + Toxin A/B Assay",
      "Cytoskeleton Toxin (Toxin A/B)",
      "Pseudomembranous Colitis", "Watery Secretory Diarrhea"
    ],
    triggerWords: [
      "Antibiotic-Associated Diarrhea & Pseudomembranous Colitis (5–10 Days Post-Antibiotics)",
      "Implicated Drugs: Clindamycin, Penicillins, Cephalosporins, Fluoroquinolones",
      "Toxin A (Enterotoxin — Neutrophil Chemotaxis & Tight Junction Disruption) & Toxin B (Cytotoxin — Actin Depolymerization)",
      "Whitish-Yellow Colonic Plaques (Pseudomembranes) Over Intact Mucosa",
      "Barnyard / Horse-Stable Odor; Hardy Spores Persist Months in Hospitals & Cause 20%–30% Relapse",
      "Diagnose by Stool Toxin PCR / NAAT or Toxin Immunoassay (Culture Alone = Colonization)",
      "Treat with Oral Vancomycin or Fidaxomicin; Fecal Microbiota Transplant for Recurrent Disease"
    ],
    overview: `
      <p><b>What it is:</b> <i>Clostridioides difficile</i> (formerly <i>Clostridium difficile</i>; "difficult" due to extreme oxygen sensitivity of vegetative cells) is a large (0.5–1.9 &times; 3.0–17 &mu;m), motile, spore-forming anaerobic Gram-positive rod that produces volatile fatty acids giving a classic <b>"barnyard" / horse-stable odor</b>.</p>
      <p><b>Epidemiology:</b> Colonizes a small fraction of healthy people and hospitalized patients (frequent harmless colonization in infants). Disruption of normal colonic microbiota by <b>antibiotics</b> (especially clindamycin, penicillins, cephalosporins, fluoroquinolones) allows overgrowth and toxin production in both hospital and community settings.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Toxin A (Enterotoxin):</b> Chemotactic for neutrophils (driving ileal/colonic inflammation and cytokine release) and disrupts epithelial tight junctions, increasing permeability and diarrhea.</li>
        <li><b>Toxin B (Cytotoxin):</b> Depolymerizes host <b>actin filaments</b>, destroying the cellular cytoskeleton (note: Toxin A–negative / Toxin B–positive strains still cause full disease!).</li>
        <li><b>Surface Layer Proteins &amp; Resilient Spores:</b> Mediate colonic adherence; spores survive antibiotics, alcohol hand rubs, and hospital environments for months.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Antibiotic-Associated Diarrhea:</b> Acute watery diarrhea developing 5–10 days after antibiotic exposure (ranges from mild/self-limited to protracted).</li>
        <li><b>Pseudomembranous Colitis:</b> Severe, life-threatening colitis with profuse diarrhea, abdominal cramping, fever, and characteristic <b>whitish plaques (pseudomembranes of fibrin, mucus, and inflammatory cells) overlying intact colonic mucosa</b> on colonoscopy.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Toxin Detection Required (Not Culture Alone!):</b> Stool culture detects harmless colonization; confirm disease in symptomatic patients via <b>commercial molecular PCR/NAAT assays for toxin genes</b> (high sensitivity/specificity, rapid) or stool GDH + toxin A/B immunoassays / cell-culture cytotoxicity assay.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Stop Offending Antibiotic &amp; Treat:</b> Mild disease may resolve upon stopping the implicated antibiotic. Severe diarrhea/colitis requires oral <b>Vancomycin</b> or <b>Fidaxomicin</b> (metronidazole historically used).</li>
        <li><b>Relapses (20%–30%) &amp; Fecal Transplant:</b> Antibiotics kill vegetative cells but NOT spores, leading to germination and relapse; recurrent disease responds dramatically to <b>fecal microbiota transplantation ("rePOOPulate")</b> restoring protective gut flora. Strict environmental spore disinfection is essential.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Pseudomembrane (Colonic):</b> Raised whitish-yellow exudative plaque of fibrin, mucin, and neutrophils overlying intact colonic mucosa in <i>C. difficile</i> colitis.</li>
      </ul>
    `
  }
);
