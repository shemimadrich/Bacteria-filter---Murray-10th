// Chapter 31: Treponema, Borrelia, and Leptospira (Rich Study Edition)
// Automatically plugs into window.BACTERIA_DB in index.html

window.BACTERIA_DB.push(
  {
    id: "treponema_pallidum",
    name: "Treponema pallidum",
    chapter: "Ch. 31: Treponema, Borrelia, and Leptospira",
    tags: [
      "Gram-Negative", "Gram-Variable / Poorly Staining", "Non-Acid-Fast", "Darkfield Microscopy", "Silver Stain",
      "Thin Tightly Coiled Spirochetes",
      "Microaerophilic", "Obligate Anaerobe", "Extracellular", "Non-Spore-Forming",
      "Catalase (-)", "Motile", "Corkscrew / Darting Motility",
      "Unculturable In Vitro",
      "VDRL / RPR + FTA-ABS / TP-PA",
      "Painless Chancre", "Rash on Palms & Soles", "Neurosyphilis"
    ],
    triggerWords: [
      "Thin Tightly Coiled Spirochete (Too Thin for Light/Gram Microscopy — Use Darkfield or DFA)",
      "Unculturable In Vitro (Missing TCA Cycle, Catalase & SOD)",
      "Primary Syphilis: Painless Indurated Chancre + Painless Lymphadenopathy (Heals Spontaneously)",
      "Secondary Syphilis: Disseminated Rash Including Palms & Soles + Condylomata Lata (Highly Infectious)",
      "Tertiary Syphilis: Gummas, Cardiovascular Aortitis & Neurosyphilis (CSF VDRL Specific; CSF FTA-ABS Sensitive)",
      "Congenital Syphilis (Rhinitis, Desquamating Rash, Teeth/Bone Malformations, Blindness, Deafness)",
      "Nontreponemal Screen (VDRL/RPR — Tracks Treatment!) + Treponemal Confirm (FTA-ABS/TP-PA/EIA — Lifelong Positive)",
      "Drug of Choice: Benzathine Penicillin G (MUST Desensitize for Neurosyphilis & Pregnancy!)"
    ],
    overview: `
      <p><b>What it is:</b> <i>Treponema pallidum</i> subsp. <i>pallidum</i> ("pale turning thread") is a thin (0.1–0.2 &times; 6–20 &mu;m), <b>tightly coiled spirochete</b> with pointed straight ends that causes <b>venereal syphilis</b> (nonvenereal subspecies: <i>endemicum</i> = bejel; <i>pertenue</i> = yaws). It is too thin to visualize by Gram/Giemsa stain and <b>cannot grow in cell-free culture</b> (lacks TCA cycle, catalase, and SOD).</p>
      <p><b>Epidemiology:</b> <b>Exclusive to humans</b>; 3rd most common bacterial STI in the US (&gt;209,000 cases in 2023; rising sharply, especially in MSM). Extremely labile to drying/disinfectants—spread ONLY by direct sexual contact (~30% risk per exposure), congenitally across the placenta, or rarely via blood transfusion. Increases HIV transmission risk.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Immune Evasion ("Stealth" Outer Membrane):</b> Lipoproteins are anchored beneath the outer membrane with almost no exposed surface antigens, allowing evasion of immune clearance; adheres to host fibronectin and uses hyaluronidase for perivascular infiltration.</li>
        <li><b>Host-Driven Pathology:</b> Classic endarteritis/periarteritis and chronic tissue destruction are mediated primarily by the host's immune response.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Primary Syphilis (10–90 Days):</b> Single or multiple <b>painless ulcers (chancres)</b> with raised borders and painless regional lymphadenopathy; teeming with spirochetes, heals spontaneously in ~2 months (giving false reassurance!).</li>
        <li><b>Secondary Syphilis:</b> Flu-like prodrome, generalized lymphadenopathy, disseminated mucocutaneous <b>rash covering palms and soles</b>, and highly infectious moist plaques (<b>condylomata lata</b>); resolves spontaneously into latency.</li>
        <li><b>Tertiary (Late) Syphilis (~1/3 of Untreated):</b> Years to decades later—granulomatous <b>gummas</b> (bone/skin/organs), <b>cardiovascular syphilis</b> (aortitis), and <b>neurosyphilis</b> (dementia, meningitis, blindness; CNS seeding can occur early, especially in AIDS!).</li>
        <li><b>Congenital Syphilis:</b> Fetal death or rhinitis, desquamating rash, teeth/bone malformations, blindness, deafness, and cardiovascular disease.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Direct Microscopy (Primary/Secondary Lesions):</b> <b>Darkfield microscopy</b> (immediate exam of exudate; avoid oral/rectal lesions due to commensal spirochetes) or <b>Direct Fluorescent Antibody (DFA)</b> (specific monoclonal reagent usable on oral/rectal/nonviable samples). Culture is NEVER attempted.</li>
        <li><b>Nontreponemal Serology (VDRL, RPR, USR, TRUST):</b> Detect anti-cardiolipin reaginic antibodies; cheap screening tests (70%–85% primary, 100% secondary, ~70% late). Titers fall with successful treatment (used to monitor cure!). <b>CSF VDRL</b> is highly specific (not sensitive) for neurosyphilis.</li>
        <li><b>Treponemal Serology (FTA-ABS, TP-PA, EIA):</b> Detect specific anti-<i>T. pallidum</i> antibodies; confirm positive screens and generally remain positive for life. <b>CSF FTA-ABS</b> is highly sensitive (negative rules out neurosyphilis).</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Penicillin G (Uniformly Active Drug of Choice):</b> Single IM dose of <b>benzathine penicillin G</b> for early syphilis; 3 weekly doses for late/congenital syphilis. Doxycycline or azithromycin for penicillin-allergic early syphilis (monitor for macrolide failure). <b>Neurosyphilis and pregnant patients MUST receive penicillin</b> (desensitize if allergic!). No vaccine exists.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Condylomata Lata:</b> Flat, moist, raised perianal/intertriginous plaques of secondary syphilis teeming with infectious spirochetes.</li>
        <li><b>Gumma:</b> Destructive granulomatous lesion of tertiary syphilis affecting bone, skin, or viscera.</li>
      </ul>
    `
  },
  {
    id: "borrelia_burgdorferi",
    name: "Borrelia burgdorferi",
    chapter: "Ch. 31: Treponema, Borrelia, and Leptospira",
    tags: [
      "Gram-Variable / Poorly Staining", "Non-Acid-Fast", "Loosely Coiled Thick Spirochetes",
      "Microaerophilic", "Extracellular", "Non-Spore-Forming",
      "Motile",
      "Slow-Growing (>7 Days)",
      "Two-Tier EIA + Western Blot",
      "Erythema Migrans", "Osteomyelitis / Septic Arthritis", "Community-Acquired Meningitis",
      "Hard Tick (Ixodes / Dermacentor / Amblyomma)", "Rabbits / Rodents"
    ],
    triggerWords: [
      "Lyme Disease (#1 Vector-Borne Disease in the United States!)",
      "Hard Tick Vector: Ixodes scapularis (NE/Mid-Atlantic/Upper Midwest) & I. pacificus (West Coast) — Nymphs (>90% of Cases, Needs ≥48 hr Feeding)",
      "Reservoirs: White-Footed Mouse (Nymphs — Most Important!) & White-Tailed Deer (Adults)",
      "OspA (Tick Midgut) → OspC (Mammalian Transmission)",
      "Early Localized: Erythema Migrans (Expanding Bull's-Eye Rash ≥5 cm — Clinical Diagnosis!)",
      "Disseminated / Late: Arthritis (~60%, Knee), Facial Nerve Palsy (10%–20%), AV Heart Block (5%), Acrodermatitis Chronica Atrophicans",
      "Standard Two-Tier Serology (EIA/IFA Screen → Western Blot or 2nd EIA Confirm)",
      "Treat Early with Oral Doxycycline, Amoxicillin, or Cefuroxime; CNS/Recurrent Arthritis with IV Ceftriaxone"
    ],
    overview: `
      <p><b>What it is:</b> <i>Borrelia burgdorferi</i> (with European/Asian species <i>B. garinii</i> and <i>B. afzelii</i>) is a large (0.2–0.5 &times; 8–30 &mu;m), microaerophilic, <b>loosely coiled spirochete</b> with periplasmic flagella that stains poorly by Gram stain and is the etiologic agent of <b>Lyme disease</b>.</p>
      <p><b>Epidemiology:</b> <b>Leading vector-borne disease in the US</b> (62,551 reported / ~475,000 estimated annual cases), concentrated in the Northeast/Mid-Atlantic and Upper Midwest, peaking June–July. Transmitted by <b>hard ticks (<i>Ixodes scapularis</i>, <i>I. pacificus</i>)</b> during prolonged feeding (<b>&ge;48 hours</b>); &gt;90% of human cases come from poppy-seed–sized nymphs infected by the <b>white-footed mouse</b> (adults feed on white-tailed deer).</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Outer Surface Protein Switching (OspA &rarr; OspC):</b> Expresses <b>OspA</b> to bind unfed tick midgut; blood-meal feeding represses OspA and upregulates <b>OspC</b> for salivary migration and mammalian transmission.</li>
        <li><b>Low Organism Burden &amp; Immune Pathology:</b> Present in very low numbers in skin and late tissues; late arthritis/neuropathy may reflect persistent spirochetes or immunologic cross-reactivity.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Early Localized Stage (3–30 Days):</b> <b>Erythema migrans</b>—expanding red macule/papule (&ge;5 cm to &gt;50 cm) with flat red border and central clearing, accompanied by fatigue, headache, fever, myalgias, and lymphadenopathy (note: STARI from lone star ticks mimics this without <i>B. burgdorferi</i>).</li>
        <li><b>Early Disseminated Stage (Days–Weeks):</b> Multiple skin lesions, <b>neurologic disease (10%–20% — facial nerve palsy, meningitis)</b>, and <b>cardiac complications (5% — AV heart block)</b>.</li>
        <li><b>Late Stage (Months–Years):</b> Intermittent large-joint <b>arthritis (~60% of untreated, classically the knee)</b> and bluish-red chronic skin swelling (<b>acrodermatitis chronica atrophicans</b>, mostly in Europe).</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Early Localized Disease:</b> Diagnose clinically by erythema migrans (microscopy is useless, culture is insensitive, and early serology is often negative for 2–4 weeks!).</li>
        <li><b>Standard Two-Tier Testing (STTT — Choice for Disseminated/Late Disease):</b> Initial sensitive <b>EIA or IFA</b> screen, confirmed if positive by <b>Western blot</b> (or CDC-approved 2nd EIA). IgM peaks 6–8 weeks; IgG peaks 4–6 months and is nearly universal in late arthritis/neuroborreliosis.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Early Disease &amp; Mild Arthritis:</b> Oral <b>Doxycycline, Amoxicillin, or Cefuroxime</b>.</li>
        <li><b>CNS Disease or Recurrent Arthritis:</b> IV <b>Ceftriaxone, Cefotaxime, or Penicillin G</b>. ("Post-Lyme disease syndrome" does not respond to repeat antibiotics.) No human vaccine is currently marketed (OspA vaccine withdrawn in 2002).</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Erythema Migrans:</b> Characteristic expanding erythematous target/bull's-eye rash (&ge;5 cm) of early localized Lyme disease.</li>
        <li><b>STTT (Standard Two-Tier Testing):</b> CDC-recommended EIA/IFA screen followed by confirmatory Western blot (or 2nd EIA) for Lyme serodiagnosis.</li>
      </ul>
    `
  },
  {
    id: "borrelia_relapsing_fever",
    name: "Borrelia recurrentis & B. hermsii (Relapsing Fever)",
    chapter: "Ch. 31: Treponema, Borrelia, and Leptospira",
    tags: [
      "Gram-Variable / Poorly Staining", "Non-Acid-Fast", "Giemsa / Wright-Giemsa",
      "Loosely Coiled Thick Spirochetes",
      "Microaerophilic", "Extracellular", "Non-Spore-Forming",
      "Motile",
      "Antigenic Variation",
      "Relapsing / Undulant Fever", "Sepsis / Septic Shock",
      "Body Louse (Pediculus)", "Soft Tick (Ornithodoros)", "Rabbits / Rodents"
    ],
    triggerWords: [
      "Epidemic Relapsing Fever: B. recurrentis (Human Reservoir + Human Body Louse — Crushed During Feeding; High Mortality)",
      "Endemic Relapsing Fever: B. hermsii & 15+ Species (Rodent Reservoir + Nocturnal Soft Ticks Ornithodoros — Mountain Cabins)",
      "Antigenic Phase Variation of OspC-Like Lipoproteins → Recurrent Febrile Bacteremic Episodes",
      "Diagnose by Giemsa / Wright-Stained Peripheral Blood Smear During Fever (>70% Sensitive — Serology Useless!)",
      "Treat with Tetracyclines (Doxycycline) or Penicillins — Watch for Jarisch-Herxheimer Reaction!"
    ],
    overview: `
      <p><b>What it is:</b> Relapsing fever is caused by large, loosely coiled <i>Borrelia</i> spirochetes visible on <b>Giemsa/Wright-stained blood smears</b>: (1) <b>Epidemic (louse-borne) relapsing fever</b> caused by <i>B. recurrentis</i> (humans = only reservoir; vector = <b>human body louse</b> crushed on skin; now mostly NE Africa) and (2) <b>Endemic (tick-borne) relapsing fever</b> caused by <i>B. hermsii</i> and &ge;15 species (reservoirs = rodents/small mammals + nocturnal <b>soft ticks <i>Ornithodoros</i></b>; western US mountain cabins).</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Antigenic Phase Variation (Mechanism of Relapses!):</b> Expresses only one OspC-homologous surface lipoprotein gene at a time. When host antibodies clear the first wave via complement lysis, genetic switching (10<sup>-3</sup>–10<sup>-4</sup>/generation) generates a new antigenic coat that triggers the next febrile bacteremia wave!</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Relapsing Fever:</b> 1-week incubation &rarr; abrupt shaking chills, high fever, myalgias, headache, and hepatosplenomegaly lasting 3–7 days, followed by a 1-week afebrile interval and milder relapses (usually 1 relapse in louse-borne; up to 10 relapses in tick-borne). Mortality &lt;5% endemic vs. up to 70% in debilitated epidemic cases.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Peripheral Blood Smear (Test of Choice!):</b> Observing large spirochetes on <b>Giemsa- or Wright-stained blood smears collected during a febrile episode</b> is &gt;70% sensitive. Serology is NOT useful due to antigenic variation; culture is rarely available.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Antimicrobials &amp; Jarisch-Herxheimer Alert:</b> <b>Tetracyclines</b> (drug of choice; use <b>penicillins</b> in pregnancy/young children). Monitor closely for an acute shock-like <b>Jarisch-Herxheimer reaction</b> (rigors, fever spike, hypotension, leukopenia) within hours of starting therapy due to rapid spirochete lysis.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Jarisch-Herxheimer Reaction:</b> Acute febrile, hypotensive shock-like reaction occurring hours after starting antibiotics for spirochetal infections (relapsing fever, syphilis) due to rapid massive bacterial lysis.</li>
      </ul>
    `
  },
  {
    id: "leptospira_species",
    name: "Leptospira species (Leptospirosis)",
    chapter: "Ch. 31: Treponema, Borrelia, and Leptospira",
    tags: [
      "Gram-Negative", "Gram-Variable / Poorly Staining", "Non-Acid-Fast", "Darkfield Microscopy", "Silver Stain",
      "Hooked-End Spirochetes",
      "Obligate Aerobe", "Extracellular", "Non-Spore-Forming",
      "Motile", "Corkscrew / Darting Motility",
      "Slow-Growing (>7 Days)",
      "Community-Acquired Meningitis", "Sepsis / Septic Shock",
      "Rabbits / Rodents", "Fish / Shellfish / Marine Water", "Weil Disease (Jaundice + Renal Failure)"
    ],
    triggerWords: [
      "Thin Tightly Coiled Obligate Aerobic Spirochete with Hooked Ends ('Question Mark' / Shepherd's Crook)",
      "Rodent Renal Tubule Reservoir → Shed in Urine Contaminating Freshwater Lakes, Rivers & Soil (Triathletes, Farmers, Vets)",
      "Biphasic Illness: Flu-Like Bacteremia → Conjunctival Suffusion + Aseptic Meningitis",
      "Weil Disease (Icteric Leptospirosis — ~10%): Jaundice, Renal Failure, Hemorrhage, Vasculitis (10%–15% Mortality)",
      "Culture Blood/CSF in First 10 Days; Urine After Week 1 (Up to 3 Months) on Fletcher/EMJH Media at 28–30°C",
      "Reference Serology: Microscopic Agglutination Test (MAT — Titer ≥1:800 or 4-Fold Rise)",
      "Treat with IV Penicillin or Doxycycline (Doxycycline Only for Prophylaxis!)"
    ],
    overview: `
      <p><b>What it is:</b> Pathogenic <i>Leptospira</i> species (historically <i>L. interrogans</i>; "thin coil") are thin (0.1 &times; 6–20 &mu;m), <b>obligate aerobic, tightly coiled spirochetes with hooked ends</b> propelled by two periplasmic flagella; optimal growth at 28°C–30°C.</p>
      <p><b>Epidemiology:</b> Worldwide zoonosis (&gt;1 million cases and ~60,000 deaths/year globally; 100–150 US cases/year, highest in Hawaii/Puerto Rico). <b>Rodents and small mammals</b> are permanent reservoir hosts shedding spirochetes in urine into freshwater lakes, rivers, and moist soil (survive up to 6 weeks). Humans are incidental hosts via recreational water exposure (swimming/triathlons) or occupational animal contact (farmers, vets, slaughterhouse workers); <b>no person-to-person spread</b>.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Mucosal/Skin Penetration &amp; Endothelial Damage:</b> Highly motile spirochetes penetrate intact mucous membranes (conjunctiva) or minor skin abrasions, disseminate hematogenously to all organs including CSF, and damage small-vessel endothelium (vasculitis, hemorrhage, hepatic/renal dysfunction).</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Biphasic Leptospirosis (1–2 Week Incubation):</b> Phase 1 (bacteremic): flu-like fever, chills, headache, myalgias, vomiting/diarrhea (organisms in blood &amp; CSF). Phase 2 (immune): sudden headache, myalgia, abdominal pain, and hallmark <b>conjunctival suffusion (red eyes)</b>; CNS form mimics benign <b>aseptic viral meningitis</b>.</li>
        <li><b>Weil Disease (Severe Icteric Form — ~10%):</b> Striking <b>jaundice</b> (without permanent hepatic necrosis!), <b>acute renal failure</b>, thrombocytopenia, hemorrhage, myocarditis, and vascular collapse (10%–15% mortality; survivors typically recover full liver and kidney function).</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Serology (Diagnostic Test of Choice):</b> Reference method is the <b>Microscopic Agglutination Test (MAT)</b> using live leptospires (titer &ge;1:800 or 4-fold rise; ELISA/agglutination for screening). Microscopy (Gram/silver/darkfield) is insensitive and not recommended.</li>
        <li><b>Specialized Culture Timing:</b> Slow-growing (2 weeks to 4 months on Fletcher/EMJH media at 28–30°C). Collect <b>blood or CSF during the first 10 days</b>, and neutralized/centrifuged <b>urine after week 1 (up to 3 months)</b>.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Treatment &amp; Prophylaxis:</b> Treat with IV <b>Penicillin or Doxycycline</b>. <b>Doxycycline (NOT penicillin)</b> can be used for chemoprophylaxis after high-risk water/animal exposure. Controlled via rodent abatement and livestock/pet vaccination.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Weil Disease:</b> Severe icteric leptospirosis characterized by jaundice, renal failure, vasculitis, and hemorrhage.</li>
        <li><b>MAT (Microscopic Agglutination Test):</b> Reference serologic assay measuring patient serum agglutination of live <i>Leptospira</i> serovars.</li>
      </ul>
    `
  }
);
