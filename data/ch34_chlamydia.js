// Chapter 34: Chlamydia (Rich Study Edition)
// Automatically plugs into window.BACTERIA_DB in index.html

window.BACTERIA_DB.push(
  {
    id: "chlamydia_trachomatis",
    name: "Chlamydia trachomatis",
    chapter: "Ch. 34: Chlamydia",
    tags: [
      "Gram-Negative", "Gram-Variable / Poorly Staining", "Non-Acid-Fast",
      "Elementary & Reticulate Bodies",
      "Obligate Intracellular", "Non-Spore-Forming",
      "Non-Motile",
      "Cell Culture Only",
      "Urethritis / Cervicitis / PID", "Trachoma", "Neonatal Conjunctivitis", "Lymphogranuloma Venereum",
      "Atypical Walking Pneumonia", "Osteomyelitis / Septic Arthritis",
      "Intrinsically Cephalosporin-Resistant"
    ],
    triggerWords: [
      "Obligate Intracellular Energy Parasite — Biphasic Cycle: Infectious Elementary Body (EB) ↔ Replicating Reticulate Body (RB)",
      "Single Round Iodine-Staining Glycogen Inclusion per Cell; Susceptible to Sulfonamides (vs. C. pneumoniae & C. psittaci)",
      "Serovars A, B, Ba, C: Trachoma (#1 Infectious Cause of Blindness Worldwide!)",
      "Serovars D–K: #1 Bacterial STI in US (Urethritis, Cervicitis, PID, Reiter Syndrome) + Neonatal Conjunctivitis & Afebrile Staccato-Cough Infant Pneumonia",
      "Serovars L1–L3: Lymphogranuloma Venereum (LGV — Painless Genital Ulcer → Painful Fluctuant Inguinal Buboes & Proctitis)",
      "NAAT (PCR) on Endocervical Swab or First-Void Urine Is Diagnostic Gold Standard (90%–98% Sensitive)",
      "Treat Adults with Single-Dose Azithromycin or 7 Days Doxycycline (21 Days for LGV); Neonates with Erythromycin"
    ],
    overview: `
      <p><b>What it is:</b> <i>Chlamydia trachomatis</i> is an <b>obligate intracellular energy parasite</b> (relies on host ATP) with a unique biphasic developmental cycle: hardy, metabolically inactive, disulfide–cross-linked (OMP2) infectious <b>Elementary Bodies (EBs)</b> enter host cells, block phagolysosomal fusion, convert into replicating <b>Reticulate Bodies (RBs)</b> inside a single <b>iodine-staining glycogen inclusion</b>, and reorganize back into EBs released at 48–72 hours. Divided into 2 biovars (<b>trachoma</b> and <b>LGV</b>) and 19 MOMP serovars.</p>
      <p><b>Epidemiology:</b> <b>Restricted to humans</b>. It is the <b>#1 bacterial STI in the US</b> (&gt;1.6 million reported / ~4 million estimated annual cases; ~50 million globally) and the <b>leading infectious cause of blindness worldwide</b> (trachoma). Infection does NOT confer lasting immunity—reinfection triggers worsening immunopathologic scarring!</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Restricted Cell Tropism &amp; Phagosome Protection:</b> Non-LGV serovars infect nonciliated columnar/cuboidal/transitional epithelium (urethra, endocervix, fallopian tubes, rectum, conjunctiva, infant airways); invasive <b>LGV serovars (L1–L3)</b> replicate in mononuclear phagocytes and draining lymph nodes.</li>
        <li><b>Immunopathologic Scarring:</b> Tissue damage arises from direct host cell lysis plus vigorous proinflammatory cytokine responses on repeated infections &rarr; corneal scarring/blindness (trachoma) and tubal scarring/infertility (PID).</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Trachoma (Serovars A, B, Ba, C):</b> Chronic follicular keratoconjunctivitis &rarr; eyelid scarring/inward-turning lashes &rarr; corneal ulceration, pannus, and blindness.</li>
        <li><b>Urogenital Infections &amp; Reiter Syndrome (Serovars D–K):</b> Up to 80% of females asymptomatic; causes mucopurulent cervicitis, urethritis (35%–50% of NGU; often co-infected with <i>N. gonorrhoeae</i>), endometritis, salpingitis, PID, perihepatitis, adult inclusion conjunctivitis, and reactive arthritis (<b>Reiter syndrome</b>: urethritis + conjunctivitis + polyarthritis).</li>
        <li><b>Neonatal Infections (Birth Canal Exposure):</b> <b>Neonatal inclusion conjunctivitis</b> (5–12 days post-birth; ~25% of exposed newborns) and <b>afebrile infant interstitial pneumonia</b> (2–3 weeks post-birth with hallmark <b>staccato cough</b>).</li>
        <li><b>Lymphogranuloma Venereum (LGV — Serovars L1, L2, L2a, L3):</b> Small, <b>painless</b> transient genital papule/ulcer followed by <b>painful fluctuant inguinal lymph node buboes</b> (rupturing into fistulas), proctitis, and chronic genital strictures/elephantiasis.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>NAAT / PCR (Gold Standard — 90%–98% Sensitive):</b> Performed on columnar-cell specimens (endocervical swab — NOT vaginal exudate!, urethral swab, or first-void urine).</li>
        <li><b>LGV Serology:</b> Vigorous antibody response detected by complement fixation (&ge;1:256 or 4-fold rise) and confirmed by species/serovar-specific MIF.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Cell-Wall Drugs Ineffective!</b> Beta-lactams cannot reach replicating RB peptidoglycan.</li>
        <li><b>Recommended Regimens:</b> Adult urogenital/ocular infections: single dose <b>Azithromycin</b> or 7 days <b>Doxycycline</b>. <b>LGV:</b> <b>Doxycycline for 21 days</b> (erythromycin for pregnancy/children &lt;9). <b>Newborn conjunctivitis/pneumonia:</b> oral <b>Erythromycin</b> for 10–14 days. Treat sexual partners!</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>EB &amp; RB (Elementary &amp; Reticulate Bodies):</b> The two developmental stages of <i>Chlamydia</i>: infectious extracellular EB (stabilized by OMP2 disulfide bonds) and replicating intracellular RB.</li>
        <li><b>Staccato Cough:</b> Classic afebrile, rapid-fire cough seen in 2- to 3-week-old infants with <i>C. trachomatis</i> interstitial pneumonia.</li>
      </ul>
    `
  },
  {
    id: "chlamydia_pneumoniae",
    name: "Chlamydia pneumoniae",
    chapter: "Ch. 34: Chlamydia",
    tags: [
      "Gram-Negative", "Gram-Variable / Poorly Staining", "Non-Acid-Fast",
      "Elementary & Reticulate Bodies",
      "Obligate Intracellular", "Non-Spore-Forming",
      "Non-Motile",
      "Cell Culture Only",
      "Atypical Walking Pneumonia", "Epiglottitis / Otitis / Sinusitis", "Pharyngitis / Scarlet Fever",
      "Intrinsically Cephalosporin-Resistant"
    ],
    triggerWords: [
      "Single Serovar (TWAR) — Pear-Shaped Elementary Bodies & Multiple Non-Glycogen Inclusions",
      "Strict Human Respiratory Pathogen (Person-to-Person Aerosols — 50% Seropositive by Age 20, 80% by Age 60–70)",
      "Atypical Pneumonia, Bronchitis, Sinusitis & Pharyngitis (Indistinguishable from Mycoplasma)",
      "Associated with Atherosclerosis / Coronary Artery Disease (Infects Vascular Smooth Muscle & Endothelium)",
      "Diagnose by Multiplex Respiratory NAAT or MIF Serology; Treat with Azithromycin, Doxycycline, or Levofloxacin"
    ],
    overview: `
      <p><b>What it is:</b> <i>Chlamydia pneumoniae</i> (single biovar/serovar <b>TWAR</b>) is an obligate intracellular bacterium with <b>pear-shaped EBs</b> and multiple uniform, <b>non–glycogen-staining inclusions</b> per cell (no plasmid DNA; resistant to sulfonamides).</p>
      <p><b>Epidemiology:</b> Ubiquitous <b>human respiratory pathogen</b> spread person-to-person via respiratory secretions (50% of adults have antibodies by age 20; 80% by age 60–70).</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Respiratory &amp; Vascular Infection:</b> Replicates inside respiratory epithelium as well as coronary vascular smooth muscle cells, endothelial cells, and macrophages (impairing mitochondria and generating reactive oxygen species linked to <b>atherosclerotic plaques</b>).</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Respiratory Tract Infections:</b> Mostly asymptomatic or mild persistent cough and malaise—causes <b>sinusitis, pharyngitis, bronchitis, and atypical pneumonia</b> (single-lobe infiltrate; indistinguishable clinically from <i>M. pneumoniae</i> or <i>Legionella</i>).</li>
        <li><b>Atherosclerosis Association:</b> Repeatedly demonstrated in coronary atherosclerotic lesions.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Multiplex Respiratory NAAT (Preferred):</b> Included on commercial respiratory PCR panels (cell culture in HEp-2 cells is unavailable in routine labs).</li>
        <li><b>MIF Serology:</b> Only acceptable serologic test (acute infection = single IgM &gt;1:16 or 4-fold IgG rise; single IgG useless).</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Recommended Agents:</b> <b>Macrolides (Azithromycin), Doxycycline, or Levofloxacin</b>.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>TWAR:</b> Historical designation for the sole serotype of <i>Chlamydia pneumoniae</i> (combining original isolates TW-183 and AR-39).</li>
      </ul>
    `
  },
  {
    id: "chlamydia_psittaci",
    name: "Chlamydia psittaci",
    chapter: "Ch. 34: Chlamydia",
    tags: [
      "Gram-Negative", "Gram-Variable / Poorly Staining", "Non-Acid-Fast",
      "Elementary & Reticulate Bodies",
      "Obligate Intracellular", "Non-Spore-Forming",
      "Non-Motile",
      "Cell Culture Only",
      "Atypical Walking Pneumonia", "Typical Lobar Pneumonia",
      "Birds / Parrots", "Intrinsically Cephalosporin-Resistant"
    ],
    triggerWords: [
      "Psittacosis ('Parrot Fever') / Ornithosis — Acquired by Inhaling Dried Bird Droppings/Secretions",
      "Reservoir: Parrots, Parakeets, Macaws, Cockatiels & Poultry (Vets, Zookeepers, Pet-Shop & Poultry Workers)",
      "Multiple Variably Sized Non-Glycogen Inclusions; Resistant to Sulfonamides",
      "Severe Headache, High Fever, Nonproductive Cough, Lobar/Interstitial Pneumonia, CNS Confusion, Hepatosplenomegaly",
      "Diagnose by MIF Serology (CF 4-Fold Rise) or NAAT; Treat with Doxycycline or Macrolides"
    ],
    overview: `
      <p><b>What it is:</b> <i>Chlamydia psittaci</i> (Greek: <i>psittakos</i> = parrot) is a zoonotic obligate intracellular bacterium with round EBs and multiple variably sized <b>non–glycogen-staining inclusions</b> causing <b>psittacosis (ornithosis / parrot fever)</b>.</p>
      <p><b>Epidemiology:</b> Natural reservoir is virtually any bird species (especially psittacine birds: <b>parrots, parakeets, macaws, cockatiels</b>, plus poultry). Transmitted to humans via <b>inhalation of dried bird excrement, urine, or respiratory secretions</b> (vets, zookeepers, pet-shop and poultry-plant workers); person-to-person spread is rare (&lt;10 reported US cases/year, underdiagnosed).</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Reticuloendothelial &amp; Hematogenous Spread:</b> After inhalation, spreads to liver and spleen reticuloendothelial cells causing focal necrosis, then seeds the lungs and CNS hematogenously, provoking lymphocytic alveolar inflammation, edema, and bronchiolar mucous plugging.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Psittacosis (Ornithosis):</b> 5–14 day incubation; severe headache, high fever, chills, myalgias, nonproductive cough, rales, and lobar/interstitial pulmonary consolidation. Systemic features include <b>CNS involvement</b> (headache, mental confusion, encephalitis), GI symptoms, <b>hepatosplenomegaly</b>, carditis, and follicular keratoconjunctivitis (~5% mortality in severe untreated disease).</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Serology &amp; NAAT:</b> 4-fold rise on paired acute/convalescent CF sera confirmed by species-specific <b>MIF</b> (note cross-reactivity with <i>C. pneumoniae</i>); NAATs are most sensitive/specific where available; cell culture is rarely performed.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Therapy &amp; Avian Control:</b> Treat with <b>Doxycycline or Macrolides</b> (patient isolation/contact prophylaxis unnecessary). Prevent by treating imported/pet birds with <b>chlortetracycline for 45 days</b>; no vaccine exists.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Ornithosis (Psittacosis):</b> Zoonotic atypical pneumonia and systemic illness caused by inhaling <i>C. psittaci</i> from infected birds.</li>
      </ul>
    `
  }
);
