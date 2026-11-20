// Chapter 33: Rickettsia, Ehrlichia, and Related Bacteria (Rich Study Edition)
// Automatically plugs into window.BACTERIA_DB in index.html

window.BACTERIA_DB.push(
  {
    id: "rickettsia_rickettsii",
    name: "Rickettsia rickettsii",
    chapter: "Ch. 33: Rickettsia, Ehrlichia, and Related Bacteria",
    tags: [
      "Gram-Negative", "Gram-Variable / Poorly Staining", "Non-Acid-Fast", "Giemsa / Wright-Giemsa",
      "Coccobacilli / Tiny Pleomorphic Rods",
      "Obligate Aerobe", "Obligate Intracellular", "Non-Spore-Forming",
      "Actin-Rocket Motility",
      "Cell Culture Only",
      "Rash on Palms & Soles", "Sepsis / Septic Shock",
      "Hard Tick (Ixodes / Dermacentor / Amblyomma)", "Rabbits / Rodents", "Intrinsically Cephalosporin-Resistant"
    ],
    triggerWords: [
      "Rocky Mountain Spotted Fever (RMSF — #1 Rickettsial Pathogen in US; NC, OK, AR, TN, MO)",
      "Hard Tick Vectors: Dog Tick (Dermacentor variabilis), Wood Tick (D. andersoni), Brown Dog Tick (Rhipicephalus) — April–Sept",
      "Obligate Intracellular Endothelial Pathogen → Vasculitis & Plasma Leakage (No Toxins!)",
      "High Fever, Severe Headache, Myalgias + Centripetal Macular → Petechial Rash Involving PALMS & SOLES (NO Eschar)",
      "Stains Poorly by Gram Stain (Use Giemsa/Gimenez); Diagnose by Microimmunofluorescence (MIF) Serology",
      "Start Empirical DOXYCYCLINE Immediately (Even in Children & Pregnancy!) — 10%–25% Untreated Mortality"
    ],
    overview: `
      <p><b>What it is:</b> <i>Rickettsia rickettsii</i> (spotted fever group) is a tiny (0.3 &times; 1–2 &mu;m), <b>obligate intracellular Gram-negative rod</b> with minimal peptidoglycan (stains poorly by Gram stain; best seen with <b>Giemsa or Gimenez</b> stains) that causes <b>Rocky Mountain spotted fever (RMSF)</b>.</p>
      <p><b>Epidemiology:</b> Most common rickettsiosis in the US (3,000–7,000 spotted fever cases/year; &gt;90% April–September; highest in NC, OK, AR, TN, MO). Maintained by transovarian transmission in <b>hard ticks</b> (<i>Dermacentor variabilis</i> [dog tick], <i>D. andersoni</i> [wood tick], <i>Rhipicephalus sanguineus</i>) and wild rodents; requires prolonged tick attachment (&ge;6 hours).</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Endothelial Invasion &amp; Vasculitis:</b> Outer membrane protein <b>OmpA</b> mediates adherence to vascular endothelial cells; phospholipase lyses the phagosome so bacteria replicate freely in cytoplasm and nucleus, spreading cell-to-cell via <b>host actin polymerization</b>. Direct endothelial injury causes microvascular leakage, hypovolemia, hypoproteinemia, and multiorgan failure (no secreted toxins).</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Rocky Mountain Spotted Fever (RMSF):</b> ~7-day incubation (range 2–14); abrupt high fever, severe headache, myalgias, nausea/vomiting/abdominal pain. After ~3 days, a macular rash starts on wrists/ankles/arms (<b>including palms and soles</b>), spreading <b>centripetally</b> to the trunk and evolving into petechiae (<b>no eschar</b>). Untreated mortality 10%–25% (neurologic, renal, pulmonary, cardiac failure).</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Serology (MIF Reference Test):</b> <b>Microimmunofluorescence (MIF)</b> (confirmed by Western blot) is reference standard, though antibodies appear in week 2 (Weil-Felix test is obsolete). Direct fluorescent antibody on skin biopsy gives rapid reference confirmation. Never delay treatment waiting for serology!</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Immediate Empirical Doxycycline:</b> <b>Doxycycline</b> is the drug of choice for ALL patients (including young children and pregnant women due to high mortality!). &beta;-Lactams, aminoglycosides, and TMP-SMX are completely inactive. No vaccine exists.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>MIF (Microimmunofluorescence):</b> Reference serologic test for rickettsial diseases detecting species-specific outer membrane protein antibodies.</li>
      </ul>
    `
  },
  {
    id: "rickettsia_akari",
    name: "Rickettsia akari",
    chapter: "Ch. 33: Rickettsia, Ehrlichia, and Related Bacteria",
    tags: [
      "Gram-Negative", "Gram-Variable / Poorly Staining", "Non-Acid-Fast", "Giemsa / Wright-Giemsa",
      "Coccobacilli / Tiny Pleomorphic Rods",
      "Obligate Aerobe", "Obligate Intracellular", "Non-Spore-Forming",
      "Actin-Rocket Motility",
      "Cell Culture Only",
      "Cutaneous Eschar / Ulcer",
      "Chigger / Mite", "Rabbits / Rodents", "Intrinsically Cephalosporin-Resistant"
    ],
    triggerWords: [
      "Rickettsialpox (Spotted Fever Group — Cosmopolitan Urban Rodent Mite Vector)",
      "Biphasic Disease: Necrotic Eschar at Mite Bite (Mimics Cutaneous Anthrax!) → Fever + Generalized Papulovesicular Pox-Like Rash",
      "Mild Self-Limited Course (2–3 Weeks); Treat with Doxycycline"
    ],
    overview: `
      <p><b>What it is:</b> <i>Rickettsia akari</i> (spotted fever group; <i>akari</i> = mite) is an obligate intracellular Gram-negative rod transmitted by infected <b>house-mouse mites</b> (maintained in rodents and by transovarian transmission in mites), causing <b>rickettsialpox</b> in urban areas worldwide (e.g., New York City).</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Endothelial Intracellular Replication:</b> Escapes phagosomes into cytoplasm/nucleus with actin-based cell-to-cell spread, causing focal bite-site vasculitic eschar followed by systemic dissemination.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Rickettsialpox (Biphasic):</b> Phase 1 (~1 week post-bite): papule ulcerating into a <b>necrotic black eschar</b> (easily mistaken for cutaneous anthrax!). Phase 2 (9–14 days): abrupt high fever, headache, chills, myalgias, photophobia, and a <b>generalized papulovesicular rash</b> that crusts over (presence of rash distinguishes it from anthrax!). Usually mild and self-limited in 2–3 weeks.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Serology &amp; Biopsy IHC:</b> MIF serology or immunohistochemical staining of eschar/skin biopsies at reference labs.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Therapy:</b> <b>Doxycycline</b> hastens recovery; control via urban rodent/mite abatement.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Rickettsialpox vs. Cutaneous Anthrax:</b> Both produce a necrotic eschar, but rickettsialpox also produces high fever and a generalized papulovesicular rash.</li>
      </ul>
    `
  },
  {
    id: "rickettsia_prowazekii",
    name: "Rickettsia prowazekii",
    chapter: "Ch. 33: Rickettsia, Ehrlichia, and Related Bacteria",
    tags: [
      "Gram-Negative", "Gram-Variable / Poorly Staining", "Non-Acid-Fast", "Giemsa / Wright-Giemsa",
      "Coccobacilli / Tiny Pleomorphic Rods",
      "Obligate Aerobe", "Obligate Intracellular", "Non-Spore-Forming",
      "Non-Motile",
      "Cell Culture Only",
      "Relapsing / Undulant Fever", "Sepsis / Septic Shock",
      "Body Louse (Pediculus)", "Rabbits / Rodents", "Intrinsically Cephalosporin-Resistant"
    ],
    triggerWords: [
      "Epidemic (Louse-Borne) Typhus — Human Reservoir + Human Body Louse (Pediculus humanus)",
      "Brill-Zinsser Disease (Recrudescent Typhus Years Later — Milder, Often No Rash)",
      "Sporadic US Disease Linked to Flying Squirrels (Eastern US) & Squirrel Fleas",
      "Typhus Group: Replicates in Cytoplasm Until Cell Lysis (NO Actin Polymerization!)",
      "Centrifugal Macular/Petechial Rash (Trunk → Extremities); 20%–30% Untreated Mortality",
      "Treat with Doxycycline; Inactivated Vaccine Available for High-Risk Groups"
    ],
    overview: `
      <p><b>What it is:</b> <i>Rickettsia prowazekii</i> (typhus group) is an obligate intracellular Gram-negative rod causing <b>epidemic (louse-borne) typhus</b> and recrudescent <b>Brill-Zinsser disease</b>. Unlike spotted fever rickettsiae, typhus group lacks actin-polymerization genes and accumulates in endothelial cytoplasm until host cell lysis.</p>
      <p><b>Epidemiology:</b> <b>Humans are the primary reservoir</b>; vector is the <b>human body louse</b> (killed by infection within 2–3 weeks, so no transovarian transmission). Thrives in war, famine, and crowded unsanitary conditions (Central/East Africa, Central/South America, Asia). Sporadic eastern US cases link to <b>flying squirrels</b> and their fleas.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Cytolytic Endothelial Vasculitis &amp; Latency:</b> Lyses endothelial cells causing systemic vasculitis; can remain dormant for decades and reactivate when immunity wanes (Brill-Zinsser disease).</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Epidemic Typhus:</b> ~8-day incubation; abrupt high fever, severe headache, myalgias, pneumonia, neurologic stupor/coma, and a <b>centrifugal macular/petechial rash</b> (trunk &rarr; extremities); 20%–30% untreated mortality.</li>
        <li><b>Brill-Zinsser Disease:</b> Milder recrudescent typhus years after primary infection (often without rash), re-establishing a bacteremic source for lice.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>MIF Serology:</b> Microimmunofluorescence (confirmed by Western blot) is the test of choice.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Therapy &amp; Control:</b> <b>Doxycycline</b> is drug of choice; controlled by delousing insecticides, improved hygiene, and an inactivated vaccine for high-risk populations.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Brill-Zinsser Disease:</b> Late reactivation of dormant <i>R. prowazekii</i> years after primary epidemic typhus.</li>
      </ul>
    `
  },
  {
    id: "rickettsia_typhi",
    name: "Rickettsia typhi",
    chapter: "Ch. 33: Rickettsia, Ehrlichia, and Related Bacteria",
    tags: [
      "Gram-Negative", "Gram-Variable / Poorly Staining", "Non-Acid-Fast", "Giemsa / Wright-Giemsa",
      "Coccobacilli / Tiny Pleomorphic Rods",
      "Obligate Aerobe", "Obligate Intracellular", "Non-Spore-Forming",
      "Non-Motile",
      "Cell Culture Only",
      "Sepsis / Septic Shock",
      "Flea (Xenopsylla)", "Rabbits / Rodents", "Intrinsically Cephalosporin-Resistant"
    ],
    triggerWords: [
      "Endemic (Murine) Typhus — Rat Flea (Xenopsylla cheopis) & Cat Flea (Ctenocephalides felis)",
      "Reservoirs: Wild Rodents, Cats, Opossums, Raccoons, Skunks (South Texas, Southern CA, Hawaii)",
      "Gradual/Abrupt Fever, Headache, Myalgias, Cough + Trunk-Restricted Maculopapular Rash (~50%)",
      "Generally Mild/Uncomplicated; Treat with Doxycycline"
    ],
    overview: `
      <p><b>What it is:</b> <i>Rickettsia typhi</i> (typhus group) is an obligate intracellular Gram-negative rod causing <b>endemic (murine) typhus</b> in warm, humid coastal regions worldwide (50–100 US cases/year, mainly South Texas, southern California, and Hawaii).</p>
      <p><b>Epidemiology:</b> Maintained in rodents, cats, opossums, raccoons, and skunks; transmitted by the <b>oriental rat flea (<i>Xenopsylla cheopis</i>)</b> and <b>cat flea (<i>Ctenocephalides felis</i>)</b> during warm months.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Endothelial Replication &amp; Lysis:</b> Multiplies in vascular endothelial cytoplasm causing localized vasculitis (milder than epidemic typhus).</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Endemic (Murine) Typhus:</b> 7–14 day incubation; fever, severe headache, chills, myalgias, nausea, and cough, with a late <b>maculopapular rash restricted to the chest and abdomen</b> in ~50% of patients. Typically uncomplicated (&lt;3 weeks).</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>MIF Serology:</b> Microimmunofluorescence (with Western blot to differentiate from <i>R. prowazekii</i>).</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Therapy:</b> <b>Doxycycline</b> is drug of choice; rodent and flea control reduces exposure.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Murine Typhus:</b> Flea-borne endemic typhus caused by <i>R. typhi</i>, clinically milder than louse-borne epidemic typhus.</li>
      </ul>
    `
  },
  {
    id: "orientia_tsutsugamushi",
    name: "Orientia tsutsugamushi",
    chapter: "Ch. 33: Rickettsia, Ehrlichia, and Related Bacteria",
    tags: [
      "Gram-Variable / Poorly Staining", "Non-Acid-Fast", "Giemsa / Wright-Giemsa",
      "Coccobacilli / Tiny Pleomorphic Rods",
      "Obligate Aerobe", "Obligate Intracellular", "Non-Spore-Forming",
      "Cell Culture Only",
      "Sepsis / Septic Shock",
      "Chigger / Mite", "Rabbits / Rodents", "Intrinsically Cephalosporin-Resistant"
    ],
    triggerWords: [
      "Scrub Typhus ('Mite Disease' — Southeast Asia, Japan, China, India, Northern Australia)",
      "Vector & Reservoir: Chiggers / Red Mites (Transovarian Transmission)",
      "Lacks BOTH Peptidoglycan AND LPS!",
      "Sudden Severe Headache, Fever, Myalgias, Centrifugal Rash (<50%), Lymphadenopathy & Splenomegaly",
      "Treat with Doxycycline"
    ],
    overview: `
      <p><b>What it is:</b> <i>Orientia tsutsugamushi</i> is an obligate intracellular bacterium (family Rickettsiaceae) that uniquely <b>lacks both peptidoglycan and LPS</b> and causes <b>scrub typhus</b> across Southeast Asia, China, Japan, India, and northern Australia.</p>
      <p><b>Epidemiology:</b> Transmitted to humans by larval <b>mites (chiggers / red mites)</b>, which serve as both vector and reservoir via transovarian transmission (mites feed only once in life).</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Intracellular Endothelial Infection:</b> Escapes phagosomes to replicate in cytoplasm and nucleus, causing systemic vasculitis, lymphadenopathy, and potential CNS/cardiac complications.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Scrub Typhus:</b> 6–18 day incubation (avg 10–12); abrupt severe headache, high fever, myalgias, generalized lymphadenopathy, splenomegaly, and a centrifugal maculopapular rash (&lt;50%). Untreated mortality 1%–15% (CNS or heart failure).</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Serology &amp; NAAT:</b> MIF serology or reference PCR; stains with Giemsa/Gimenez (not Gram stain).</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Therapy:</b> <b>Doxycycline</b> is drug of choice.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Tsutsugamushi:</b> Japanese term meaning "mite disease" for scrub typhus caused by <i>Orientia tsutsugamushi</i>.</li>
      </ul>
    `
  },
  {
    id: "ehrlichia_chaffeensis",
    name: "Ehrlichia chaffeensis & E. ewingii",
    chapter: "Ch. 33: Rickettsia, Ehrlichia, and Related Bacteria",
    tags: [
      "Gram-Variable / Poorly Staining", "Non-Acid-Fast", "Giemsa / Wright-Giemsa",
      "Intraleukocytic Morulae", "Elementary & Reticulate Bodies",
      "Obligate Aerobe", "Obligate Intracellular", "Non-Spore-Forming",
      "Cell Culture Only",
      "Sepsis / Septic Shock",
      "Hard Tick (Ixodes / Dermacentor / Amblyomma)", "Intrinsically Cephalosporin-Resistant"
    ],
    triggerWords: [
      "Human Monocytic Ehrlichiosis (E. chaffeensis — Infects Monocytes) & Granulocytic Ehrlichiosis (E. ewingii)",
      "Vector: Lone Star Tick (Amblyomma americanum — Midwest & Coastal Atlantic, April–Oct); Reservoir: White-Tailed Deer & Canines",
      "Intraleukocytic Morulae (Mulberry-Like Phagosome Inclusions on Giemsa/Wright Smear — <10% Sensitive)",
      "Lacks Peptidoglycan & LPS; Prevents Phagosome-Lysosome Fusion",
      "High Fever, Headache, Myalgias, Leukopenia, Thrombocytopenia, ↑Transaminases (Rash in 30%–40%, Mostly Children)",
      "Diagnose by PCR (NAAT) & Serology; Start Empirical DOXYCYCLINE Immediately (Rifampin Alternative)"
    ],
    overview: `
      <p><b>What it is:</b> <i>Ehrlichia chaffeensis</i> (causing <b>human monocytic ehrlichiosis</b>) and <i>E. ewingii</i> (granulocytic ehrlichiosis) are obligate intracellular bacteria (family Anaplasmataceae) lacking peptidoglycan and LPS that replicate inside leukocyte phagosomes as <b>morulae</b> (clumps of elementary and reticulate bodies).</p>
      <p><b>Epidemiology:</b> Concentrated in the Midwest (MO, AR, OK) and coastal Atlantic (MD, VA, NJ, NY) matching the <b>lone star tick (<i>Amblyomma americanum</i>)</b> vector and <b>white-tailed deer</b>/canine reservoirs (April–October; no transovarian tick transmission).</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Phagosome Survival &amp; Immune Dysregulation:</b> Prevents phagosome-lysosome fusion in monocytes/macrophages; triggers disproportionate proinflammatory cytokine damage despite low organism burden.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Human Monocytic Ehrlichiosis:</b> 1–2 weeks post-tick bite; flu-like high fever, headache, malaise, myalgias, late rash in 30%–40% (more common in children), and classic lab triad of <b>leukopenia, thrombocytopenia, and elevated serum transaminases</b>. Over 50% require hospitalization (2%–3% mortality; fulminant sepsis in immunocompromised).</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>NAAT (PCR) &amp; Serology (Methods of Choice):</b> Species-specific PCR confirms acute disease; serology rises in 3–6 weeks (cross-reacts with <i>E. ewingii</i>, RMSF, Q fever, Lyme). Giemsa blood smear detects monocyte <b>morulae</b> in &lt;10% of cases during week 1.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Immediate Empirical Doxycycline:</b> Start <b>Doxycycline</b> without awaiting labs (<b>Rifampin</b> if intolerant). &beta;-Lactams, fluoroquinolones, macrolides, aminoglycosides, and chloramphenicol are INEFFECTIVE!</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Morulae:</b> Membrane-bound intracytoplasmic clusters of replicating <i>Ehrlichia</i> or <i>Anaplasma</i> inside host leukocyte phagosomes ("mulberry-like").</li>
      </ul>
    `
  },
  {
    id: "anaplasma_phagocytophilum",
    name: "Anaplasma phagocytophilum",
    chapter: "Ch. 33: Rickettsia, Ehrlichia, and Related Bacteria",
    tags: [
      "Gram-Variable / Poorly Staining", "Non-Acid-Fast", "Giemsa / Wright-Giemsa",
      "Intraleukocytic Morulae", "Elementary & Reticulate Bodies",
      "Obligate Aerobe", "Obligate Intracellular", "Non-Spore-Forming",
      "Cell Culture Only",
      "Sepsis / Septic Shock",
      "Hard Tick (Ixodes / Dermacentor / Amblyomma)", "Rabbits / Rodents", "Intrinsically Cephalosporin-Resistant"
    ],
    triggerWords: [
      "Human Granulocytic Anaplasmosis (Infects Neutrophils, Eosinophils, Basophils!)",
      "Vector: Blacklegged Tick (Ixodes — Upper Midwest MN/WI & Northeast MA/CT/NY/NJ — Same Tick as Lyme!)",
      "Reservoirs: Small Mammals (White-Footed Mouse, Chipmunks, Voles) & Deer",
      "Morulae in Granulocytes on Peripheral Blood Smear (25%–75% Sensitive in Week 1)",
      "High Fever, Headache, Myalgias, Leukopenia, Thrombocytopenia, ↑Transaminases (Rash RARE <10%!)",
      "Diagnose by PCR (NAAT) & Serology; Treat Empirically with DOXYCYCLINE"
    ],
    overview: `
      <p><b>What it is:</b> <i>Anaplasma phagocytophilum</i> (formerly agent of human granulocytic ehrlichiosis) is an obligate intracellular bacterium lacking peptidoglycan and LPS that parasitizes <b>granulocytes (neutrophils, eosinophils, basophils)</b> inside phagosomal <b>morulae</b>.</p>
      <p><b>Epidemiology:</b> Upper Midwest (MN, WI) and Northeast (MA, CT, NY, NJ) matching <b><i>Ixodes</i> ticks</b> (same vector as Lyme disease!) and small-mammal reservoirs (white-footed mouse, chipmunks, voles; April–October).</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Intragranulocytic Survival:</b> Blocks phagosome-lysosome fusion inside neutrophils; tissue injury is driven largely by macrophage activation and inflammatory cytokines.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Human Granulocytic Anaplasmosis:</b> 5–10 days post-tick bite; high fever, headache, malaise, myalgias, <b>leukopenia, thrombocytopenia, and elevated transaminases</b>. Unlike RMSF and monocytic ehrlichiosis, <b>rash is rare (&lt;10%)</b>. Over 50% require hospitalization (can cause peripheral neuropathies/facial palsy; mortality &lt;1%).</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Blood Smear, PCR &amp; Serology:</b> Giemsa/Wright peripheral blood smear shows <b>granulocyte morulae in 25%–75%</b> of patients in week 1; <b>PCR (NAAT)</b> confirms acute infection; serology rises at 3–6 weeks.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Immediate Empirical Doxycycline:</b> <b>Doxycycline</b> is drug of choice (rifampin alternative); &beta;-lactams, macrolides, fluoroquinolones, and aminoglycosides are ineffective.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>HGA vs. HME:</b> <i>A. phagocytophilum</i> (HGA) infects granulocytes via <i>Ixodes</i> ticks (NE/Upper Midwest, rash &lt;10%, morulae in 25%–75%); <i>E. chaffeensis</i> (HME) infects monocytes via <i>Amblyomma</i> ticks (Midwest/SE, rash 30%–40%, morulae &lt;10%).</li>
      </ul>
    `
  },
  {
    id: "coxiella_burnetii",
    name: "Coxiella burnetii",
    chapter: "Ch. 33: Rickettsia, Ehrlichia, and Related Bacteria",
    tags: [
      "Gram-Negative", "Gram-Variable / Poorly Staining", "Non-Acid-Fast", "Giemsa / Wright-Giemsa",
      "Coccobacilli / Tiny Pleomorphic Rods",
      "Obligate Aerobe", "Obligate Intracellular", "Non-Spore-Forming",
      "Cell Culture Only",
      "Phase I vs Phase II IgG",
      "Antigenic Variation",
      "Atypical Walking Pneumonia", "Subacute / Culture-Negative Endocarditis",
      "Unpasteurized Dairy / Livestock"
    ],
    triggerWords: [
      "Q ('Query') Fever — Spore-Like Small Cell Variant Survives Soil & Milk for Months–Years!",
      "Acquired by INHALATION of Livestock Birth Aerosols (Placenta of Cattle, Sheep, Goats) or Unpasteurized Milk (NO Tick Vector in Humans!)",
      "Ultra-Low Infectious Dose (≤10 Bacteria); NO Rash!",
      "Acute Q Fever: Flu-Like Illness, Atypical Pneumonia, Granulomatous Hepatitis (Phase II Antibodies Predominate)",
      "Chronic Q Fever (>6 Months): Blood-Culture-Negative Subacute Endocarditis (Phase I Antibodies Predominate — High Risk on Damaged Valves)",
      "Replicates Inside Acidic Macrophage Phagolysosomes!",
      "Treat Acute with Doxycycline (14 Days); Chronic Endocarditis with Prolonged Doxycycline + Hydroxychloroquine"
    ],
    overview: `
      <p><b>What it is:</b> <i>Coxiella burnetii</i> (family Coxiellaceae) is a weakly Gram-staining, <b>obligate intracellular Gram-negative rod</b> causing <b>Q ("query") fever</b>. Exists as an environmentally indestructible, spore-like <b>small cell variant</b> (surviving heat, desiccation, soil, and milk for months–years) and a metabolically active <b>large cell variant</b>.</p>
      <p><b>Epidemiology:</b> Worldwide zoonosis in cattle, sheep, goats, cats, dogs, and rabbits (massive concentrations in livestock placentas). Acquired via <b>inhalation of contaminated aerosols</b> (ranchers, vets, abattoir workers) or <b>unpasteurized milk</b>—ticks do NOT transmit Q fever to humans! Tiny infectious dose (<b>&le;10 bacteria</b>).</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Acidophilic Phagosome Survival &amp; Phase Variation:</b> <b>Phase I</b> (intact LPS) arrests phagosome-lysosome fusion and requires acidic phagosomal pH for metabolism (which also impairs antibiotic killing); <b>Phase II</b> has truncated LPS lacking O-antigen. IL-10 overproduction drives chronic intracellular persistence.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Acute Q Fever (10–14 Day Incubation):</b> Mostly asymptomatic or mild flu-like fever/headache/myalgias (<b>NO rash!</b>); &lt;5% develop hospitalization-requiring <b>atypical pneumonia, granulomatous hepatitis</b>, or pericarditis.</li>
        <li><b>Chronic Q Fever (&gt;6 Months):</b> Strikes patients with <b>valvular heart disease</b> or immunosuppression—classically presenting as serious <b>blood-culture-negative subacute endocarditis</b>.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Phase I vs. Phase II Serology (IFA — Test of Choice!):</b> <b>Acute Q fever</b> produces IgM/IgG predominantly against <b>Phase II antigens</b>; <b>Chronic Q fever (endocarditis)</b> produces high titers against both, with <b>Phase I IgG titers higher than Phase II</b> (always test alongside <i>Bartonella</i> due to cross-reactivity!). Culture is too hazardous for routine labs.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Acute Q Fever:</b> <b>Doxycycline</b> for 14 days.</li>
        <li><b>Chronic Q Fever (Endocarditis):</b> Prolonged bactericidal combination of <b>Doxycycline + Hydroxychloroquine</b> (hydroxychloroquine alkalinizes phagolysosomes to restore doxycycline activity; rifampin is an alternative partner). Phase I vaccine is not available in the US.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Phase I vs. Phase II <i>Coxiella</i> Serology:</b> Acute Q fever = high anti-Phase II antibodies; Chronic Q fever endocarditis = high anti-Phase I antibodies.</li>
      </ul>
    `
  }
);