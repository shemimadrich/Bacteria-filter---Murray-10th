// Chapter 32: Mycoplasma (Rich Study Edition)
// Automatically plugs into window.BACTERIA_DB in index.html

window.BACTERIA_DB.push(
  {
    id: "mycoplasma_pneumoniae",
    name: "Mycoplasma pneumoniae",
    chapter: "Ch. 32: Mycoplasma",
    tags: [
      "Wall-Less / Sterols in Membrane", "Non-Acid-Fast", "Coccobacilli / Tiny Pleomorphic Rods",
      "Obligate Aerobe", "Extracellular", "Non-Spore-Forming",
      "Non-Motile",
      "Eaton Agar (Fried-Egg Colonies)", "Slow-Growing (>7 Days)",
      "Cold Agglutinins (Anti-I IgM)",
      "Superantigen (TSST-1 / Enterotoxins / Spe)",
      "Atypical Walking Pneumonia", "Pharyngitis / Scarlet Fever",
      "Intrinsically Cephalosporin-Resistant", "Intrinsically Vancomycin-Resistant"
    ],
    triggerWords: [
      "Smallest Free-Living Bacterium (Passes 0.45-μm Filters; Eaton Agent)",
      "NO Cell Wall + Sterols in Cell Membrane → Does NOT Gram Stain & Resistant to ALL Beta-Lactams & Vancomycin!",
      "Strict Aerobe (Unlike Other Mycoplasmas); P1 Adhesin Binds Cilia Base → Ciliostasis & Persistent Dry Cough",
      "Primary Atypical ('Walking') Pneumonia & Tracheobronchitis (School-Age Children 5–15 & Young Adults; Year-Round, No Seasonality)",
      "Chest X-Ray Patchy Infiltrates Worse Than Physical Exam",
      "PCR / NAAT Is Diagnostic Test of Choice (Cold Agglutinins Insensitive/Nonspecific)",
      "Treat with Macrolides (Erythromycin/Azithromycin), Doxycycline, or Fluoroquinolones"
    ],
    overview: `
      <p><b>What it is:</b> <i>Mycoplasma pneumoniae</i> (also called the <b>Eaton agent</b>) is the <b>smallest free-living bacterium</b> (passes 0.45-&mu;m filters). Unique among bacteria because it completely <b>lacks a peptidoglycan cell wall</b> and incorporates <b>sterols</b> into its plasma membrane—making it invisible on Gram stain and intrinsically resistant to all cell-wall–active antibiotics (penicillins, cephalosporins, carbapenems, vancomycin). Unlike other facultative mycoplasmas, <i>M. pneumoniae</i> is a <b>strict aerobe</b>.</p>
      <p><b>Epidemiology:</b> <b>Strict human pathogen</b> spread via large respiratory droplets among close contacts (classmates, families, dorms). Occurs <b>year-round with no seasonal peak</b> (epidemics every 4–8 years), peaking in ages <b>5–15 years</b> and young adults (~2 million US pneumonia cases/year).</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>P1 Adhesin Protein:</b> Polar attachment organelle binds sialated glycoprotein receptors at the base of respiratory cilia (and on RBCs), triggering <b>ciliostasis</b> and destruction of ciliated epithelial cells—impairing mucociliary clearance and causing a protracted dry cough.</li>
        <li><b>Superantigen Activity:</b> Stimulates inflammatory cell migration and cytokine release (TNF-&alpha;, IL-1, IL-6) contributing to both bacterial clearance and airway pathology.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Tracheobronchitis (Most Common) &amp; Pharyngitis:</b> 2–3 week incubation; low-grade fever, malaise, headache, and persistent dry nonproductive cough lasting &ge;2 weeks.</li>
        <li><b>Primary Atypical ("Walking") Pneumonia:</b> Patchy bronchopneumonia on chest radiograph that looks markedly worse than clinical auscultation findings (GI symptoms/myalgias uncommon).</li>
        <li><b>Secondary Extrapulmonary Complications:</b> Neurologic (meningoencephalitis, myelitis, paralysis), pericarditis, autoimmune hemolytic anemia, arthritis, and mucocutaneous lesions.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>PCR / NAAT (Diagnostic Test of Choice):</b> Species-specific or multiplex respiratory PCR assays provide the highest sensitivity and rapid turnaround.</li>
        <li><b>Why Microscopy, Culture &amp; Cold Agglutinins Fall Short:</b> Gram stain is useless (no cell wall); culture (serum-enriched Eaton media with penicillin) is slow (2–6 weeks) and insensitive; serology (EIA against P1 adhesin) requires paired sera 3–4 weeks apart; <b>cold agglutinins</b> (anti-I IgM agglutinating RBCs at 4°C) are insensitive/nonspecific and no longer recommended.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Effective Drugs (Cell-Wall Drugs Fail!):</b> <b>Macrolides (Erythromycin, Azithromycin)</b>, <b>Doxycycline</b> (adults), or newer <b>Fluoroquinolones</b> (adults). Note: macrolide resistance exceeds 90% in parts of Asia. Immunity is not lifelong and vaccines have been ineffective.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Cold Agglutinins:</b> Nonspecific IgM autoantibodies (against RBC I-antigen) classically associated with <i>M. pneumoniae</i> that agglutinate erythrocytes at 4°C.</li>
        <li><b>L-Forms vs. Mycoplasmas:</b> Cell wall–deficient L-forms lack membrane sterols and can revert to walled forms; true mycoplasmas have sterol-containing membranes and never synthesize cell walls.</li>
      </ul>
    `
  },
  {
    id: "mycoplasma_genitalium_hominis",
    name: "Mycoplasma genitalium & Mycoplasma hominis",
    chapter: "Ch. 32: Mycoplasma",
    tags: [
      "Wall-Less / Sterols in Membrane", "Non-Acid-Fast", "Coccobacilli / Tiny Pleomorphic Rods",
      "Facultative Anaerobe", "Extracellular", "Non-Spore-Forming",
      "Non-Motile",
      "Eaton Agar (Fried-Egg Colonies)",
      "Urethritis / Cervicitis / PID", "UTI / Pyelonephritis / Staghorn Calculi", "Sepsis / Septic Shock",
      "Intrinsically Cephalosporin-Resistant", "Intrinsically Vancomycin-Resistant"
    ],
    triggerWords: [
      "Genital Wall-Less Mycoplasmas (Facultative Anaerobes — Resistant to Beta-Lactams & Vancomycin)",
      "M. genitalium: Nongonococcal Urethritis (NGU), Cervicitis & PID (Diagnose by NAAT; Macrolide/Fluoroquinolone Resistance Common)",
      "M. hominis: Pyelonephritis, Postpartum Fever & Immunocompromised Systemic Infections (Large 'Fried-Egg' Colonies in 1–4 Days; Macrolide-Resistant — Use Clindamycin/Doxycycline)"
    ],
    overview: `
      <p><b>What it is:</b> <i>Mycoplasma genitalium</i> and <i>Mycoplasma hominis</i> are facultatively anaerobic, cell wall–less, sterol-membrane genital mycoplasmas (alongside <i>Ureaplasma</i> spp.). Both are intrinsically resistant to all &beta;-lactams and vancomycin.</p>
      <p><b>Epidemiology:</b> Common sexually acquired genitourinary colonizers after puberty (~15% of sexually active adults carry <i>M. hominis</i>, and an even higher proportion carry <i>M. genitalium</i>).</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Surface Lipoprotein Variation:</b> Rapid antigenic switching of surface lipoproteins helps evade host immunity and establish persistent urogenital infections.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b><i>M. genitalium</i>:</b> <b>Nongonococcal urethritis (NGU)</b>, cervicitis, and pelvic inflammatory disease (PID).</li>
        <li><b><i>M. hominis</i>:</b> <b>Pyelonephritis, postpartum fever</b>, and systemic infections in immunocompromised hosts.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>NAAT vs. Culture:</b> <i>M. genitalium</i> grows extremely slowly—<b>NAAT (PCR)</b> is the diagnostic test of choice. <i>M. hominis</i> grows in 1–4 days forming characteristic large <b>"fried-egg" colonies</b> on serum-enriched agar (confirmed by antiserum growth inhibition).</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Distinct Resistance Profiles:</b> <i>M. genitalium</i> frequently exhibits resistance to macrolides (azithromycin) and fluoroquinolones. <i>M. hominis</i> is <b>naturally resistant to macrolides</b> (and occasionally tetracyclines)—<b>Clindamycin</b> is effective for resistant <i>M. hominis</i>. Prevent via safe sexual practices.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Fried-Egg Colonies:</b> Classic microscopic colony appearance of <i>Mycoplasma</i> (dense central core embedded in agar surrounded by a lighter translucent peripheral zone).</li>
      </ul>
    `
  }
);