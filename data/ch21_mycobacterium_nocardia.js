// Chapter 21: Mycobacterium and Related Acid-Fast Bacteria (Rich Study Edition)
// Automatically plugs into window.BACTERIA_DB in index.html

window.BACTERIA_DB.push(
  {
    id: "mycobacterium_tuberculosis",
    name: "Mycobacterium tuberculosis",
    chapter: "Ch. 21: Mycobacterium and Related Acid-Fast Bacteria",
    tags: [
      "Gram-Variable / Poorly Staining", "Strongly Acid-Fast", "Beaded / Cording Rods",
      "Obligate Aerobe", "Facultative Intracellular", "Non-Spore-Forming",
      "Catalase (+)", "Non-Motile",
      "Löwenstein-Jensen / Middlebrook Agar", "Slow-Growing (>7 Days)",
      "Niacin + Nitrate (+)",
      "Mycolic Acids & Cord Factor",
      "Cavitary / Granulomatous Lung Disease", "Community-Acquired Meningitis", "Osteomyelitis / Septic Arthritis", "Sepsis / Septic Shock"
    ],
    triggerWords: [
      "Strongly Acid-Fast (70–90 Carbon Mycolic Acids)", "Blocks Phagosome-Lysosome Fusion (EEA1)",
      "Caseating Granulomas & Langhans Giant Cells", "Ziehl-Neelsen / Kinyoun / Auramine-Rhodamine Stain",
      "Löwenstein-Jensen & Middlebrook Agar (3+ Weeks)", "PPD Skin Test & IFN-γ Release Assay (ESAT-6 / CFP-10)",
      "MDR-TB (INH + Rifampin Resistant) & XDR-TB", "BCG Vaccine (Attenuated M. bovis)"
    ],
    overview: `
      <p><b>What it is:</b> <i>Mycobacterium tuberculosis</i> is a nonmotile, non–spore-forming, strictly aerobic, slow-growing rod characterized by a complex <b>lipid-rich cell wall containing long-chain mycolic acids (70–90 carbons)</b> and high DNA G+C content (61%–71%). This waxy coat imparts strong <b>acid-fastness</b>, slow replication, and resistance to detergents, drying, and routine antibacterial drugs.</p>
      <p><b>Epidemiology:</b> <b>Humans are the only natural reservoir</b>; transmitted person-to-person via inhalation of small infectious aerosols (1–3 bacilli reach alveoli). Roughly one-fourth of the global population is infected (10.6 million new cases and 1.6 million deaths in 2021; 8,300 US cases in 2022, ~70% in foreign-born persons). High-risk groups include HIV-infected individuals, homeless populations, prisoners, substance abusers, and healthcare workers.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Intracellular Survival in Alveolar Macrophages:</b> Prevents <b>phagosome-lysosome fusion</b> by blocking the bridging molecule <b>early endosomal autoantigen 1 (EEA1)</b>, while fusing with nutrient-rich vesicles and catalytically neutralizing reactive nitrogen/oxygen intermediates.</li>
        <li><b>Cell Wall Mycolic Acids &amp; Cord Factor:</b> Lipid-rich cell wall confers acid-fastness and antibiotic/detergent resistance; cell-wall proteins stimulate cell-mediated immunity (basis of PPD skin testing).</li>
        <li><b>Granuloma Formation &amp; Latency:</b> Infected macrophages secrete <b>IL-12 and TNF-&alpha;</b>, recruiting T cells and NK cells to differentiate into <b>TH1 cells secreting IFN-&gamma;</b> (activating macrophage killing). With large bacterial burdens, alveolar macrophages, epithelioid cells, and <b>Langhans giant cells</b> wall off necrotic centers into fibrin-encapsulated <b>caseous granulomas</b> where dormant bacilli can reactivate decades later if cellular immunity wanes.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Primary &amp; Reactivation Pulmonary Tuberculosis:</b> Initial focus typically in middle/lower lung fields; ~5% progress to active disease within 2 years and ~5% reactivate later in life. Active disease has insidious onset with malaise, weight loss, night sweats, chronic cough, and hemoptysis (from tissue destruction and <b>upper-lobe cavitary disease</b>).</li>
        <li><b>HIV-Associated &amp; Disseminated (Extrapulmonary) TB:</b> In HIV patients with low CD4 counts, ~10% develop active disease within 1 year, twice as likely to disseminate hematogenously to extrapulmonary organs (meninges, spine/bones, kidneys, lymph nodes) and often presenting with negative chest X-rays.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Immunodiagnosis (Latent/Exposure Screening):</b>
          <ul class="list-circle pl-5 mt-1 space-y-1">
            <li><b>Tuberculin Skin Test (PPD):</b> Intradermal injection of 5 TU PPD; induration measured at 48 h. False negatives in anergic/HIV patients; false positives in BCG-vaccinated individuals.</li>
            <li><b>IFN-&gamma; Release Assays (IGRA):</b> Measure T-cell IFN-&gamma; release to <i>M. tuberculosis</i>–specific antigens (<b>ESAT-6, CFP-10</b>); unaffected by BCG vaccination.</li>
          </ul>
        </li>
        <li><b>Acid-Fast Microscopy:</b> Most rapid confirmation; carbolfuchsin stains (<b>Ziehl-Neelsen</b> hot or <b>Kinyoun</b> cold) or fluorescent auramine-rhodamine (<b>Truant fluorochrome</b> — most sensitive). Specificity &gt;95%; positive smears indicate high infectivity (cavitary disease).</li>
        <li><b>NAAT / PCR &amp; Whole-Genome Sequencing:</b> Commercial PCR assays are the rapid diagnostic test of choice and simultaneously detect <b>rifampin and/or isoniazid resistance genes</b> (note: does not detect NTM).</li>
        <li><b>Culture &amp; Identification:</b> Collect 3 consecutive early-morning sputum specimens; decontaminate with <b>2% NaOH</b> to kill normal flora. Nonpigmented/light-tan colonies appear in <b>&ge;3 weeks</b> on egg-based (<b>Löwenstein-Jensen</b>) or agar-based (<b>Middlebrook</b>) media (~2 weeks in specialized broth). Definitive ID via MALDI-TOF MS, 16S rRNA/<i>SecA</i> sequencing, or nucleic acid probes (historically niacin + nitrate positive).</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Multi-Drug Prolonged Regimens:</b> Requires multiple antimycobacterial agents for at least 4–6+ months to prevent selection of resistant mutants (spontaneous resistance occurs in ~1 in 10<sup>5</sup>–10<sup>6</sup> bacilli).</li>
        <li><b>Drug-Resistant TB:</b> <b>MDR-TB</b> is resistant to at least isoniazid and rifampin; <b>XDR-TB</b> is additionally resistant to fluoroquinolones and at least one second-line agent (e.g., kanamycin, amikacin, capreomycin).</li>
        <li><b>Chemoprophylaxis (LTBI):</b> Isoniazid, rifapentine, and/or rifampin per CDC guidelines.</li>
        <li><b>BCG Vaccination:</b> Live attenuated <i>M. bovis</i> reduces pediatric TB in endemic regions (contraindicated in HIV/immunocompromised hosts; causes PPD positivity but NOT IGRA positivity).</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>PPD (Purified Protein Derivative):</b> Extracted mycobacterial cell-wall proteins used for delayed-type hypersensitivity skin testing.</li>
        <li><b>IGRA (ESAT-6 / CFP-10):</b> In vitro blood immunoassay measuring IFN-&gamma; secretion to TB-specific antigens that are absent in BCG.</li>
        <li><b>MDR-TB / XDR-TB:</b> Multidrug-resistant (INH + rifampin) and extensively drug-resistant <i>M. tuberculosis</i>.</li>
      </ul>
    `
  },
  {
    id: "mycobacterium_leprae",
    name: "Mycobacterium leprae",
    chapter: "Ch. 21: Mycobacterium and Related Acid-Fast Bacteria",
    tags: [
      "Gram-Variable / Poorly Staining", "Strongly Acid-Fast", "Beaded / Cording Rods",
      "Obligate Aerobe", "Obligate Intracellular", "Non-Spore-Forming",
      "Non-Motile",
      "Unculturable In Vitro", "Slow-Growing (>7 Days)",
      "Mycolic Acids & Cord Factor",
      "Cutaneous Eschar / Ulcer",
      "Armadillos"
    ],
    triggerWords: [
      "Leprosy (Hansen Disease)", "Unculturable In Vitro (Cell-Free Media)",
      "Tuberculoid (Paucibacillary — Strong TH1 / Lepromin +) vs. Lepromatous (Multibacillary — Foamy Macrophages / Lepromin -)",
      "Armadillo Reservoir (Southern US)", "Peripheral Nerve Damage & Sensory Loss",
      "WHO Multi-Drug Therapy (Dapsone + Rifampicin + Clofazimine)"
    ],
    overview: `
      <p><b>What it is:</b> <i>Mycobacterium leprae</i> is an extremely slow-growing, strongly acid-fast obligate intracellular bacillus that <b>cannot grow in cell-free laboratory culture</b> and causes <b>leprosy (Hansen disease)</b>.</p>
      <p><b>Epidemiology:</b> Global incidence has dropped sharply (~140,000 new cases in 2021, highest in India, Brazil, Indonesia; ~150 US cases/year, mostly immigrants). Endemic in <b>wild nine-banded armadillos</b> in Florida, Texas, and Louisiana. Requires prolonged person-to-person contact (aerosols or skin contact with respiratory secretions/wound exudates) with an incubation period up to <b>20 years</b>.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Immune-Determined Disease Spectrum:</b> Clinical pathology is dictated by the host's cell-mediated immune response rather than secreted toxins.</li>
        <li><b>Tuberculoid (Paucibacillary):</b> Strong TH1 cellular immune response activates macrophages to clear bacilli; few acid-fast rods are seen, with lymphocyte-rimmed granulomas and Langhans giant cells.</li>
        <li><b>Lepromatous (Multibacillary):</b> Specific defect in cellular immunity to <i>M. leprae</i> paired with strong (nonprotective) humoral hypergammaglobulinemia; dermal macrophages ("foamy" cells) and Schwann cells of peripheral nerves teem with acid-fast bacilli.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Tuberculoid Leprosy (Paucibacillary — Low Infectivity):</b> Few erythematous or <b>hypopigmented anesthetic skin macules/plaques</b> with flat centers and raised demarcated borders, visible peripheral nerve enlargement, and complete localized sensory loss. Erythema nodosum absent.</li>
        <li><b>Lepromatous Leprosy (Multibacillary — High Infectivity):</b> Numerous erythematous macules, papules, plaques, and disfiguring nodules, thickened dermis, extensive tissue destruction (nasal cartilage/mucosa, ears, bones), diffuse patchy sensory loss without nerve enlargement, and frequent <b>erythema nodosum</b>.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Culture Impossible:</b> <i>M. leprae</i> <b>cannot be grown on cell-free agar or broth</b>.</li>
        <li><b>Microscopy &amp; Histopathology:</b> Acid-fast stains of skin/nasal scrapings or biopsy are <b>heavily positive in lepromatous leprosy</b> (foamy macrophages full of bacilli) but <b>typically negative in tuberculoid leprosy</b> (granulomas with Langhans cells).</li>
        <li><b>Lepromin Skin Test:</b> Delayed-type hypersensitivity reaction is <b>positive in tuberculoid leprosy</b> and <b>nonreactive in lepromatous leprosy</b>.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>WHO Multi-Drug Therapy (Never Monotherapy!):</b> Combination of <b>Dapsone + Rifampicin + Clofazimine</b> for a minimum of <b>6 months</b> in paucibacillary (tuberculoid) disease and <b>12 months</b> in multibacillary (lepromatous) disease.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Lepromin Test:</b> Intradermal test using <i>M. leprae</i> antigen to distinguish tuberculoid (reactive) from lepromatous (nonreactive) leprosy.</li>
        <li><b>Paucibacillary vs. Multibacillary:</b> WHO clinical classification corresponding to tuberculoid (few bacilli) vs. lepromatous (abundant bacilli) Hansen disease.</li>
      </ul>
    `
  },
  {
    id: "mycobacterium_avium_complex",
    name: "Mycobacterium avium Complex (MAC)",
    chapter: "Ch. 21: Mycobacterium and Related Acid-Fast Bacteria",
    tags: [
      "Gram-Variable / Poorly Staining", "Strongly Acid-Fast", "Beaded / Cording Rods",
      "Obligate Aerobe", "Facultative Intracellular", "Non-Spore-Forming",
      "Non-Motile",
      "Löwenstein-Jensen / Middlebrook Agar", "Slow-Growing (>7 Days)",
      "Mycolic Acids & Cord Factor",
      "Cavitary / Granulomatous Lung Disease", "Sepsis / Septic Shock", "Nonchromogen (Runyon III)", "AIDS / Low CD4 (<50) Risk"
    ],
    triggerWords: [
      "Slow-Growing Nonpigmented NTM (M. avium & M. intracellulare)",
      "Lady Windermere Syndrome (Elderly Female Nonsmokers — Bronchiectasis)",
      "Disseminated MAC in Advanced AIDS (CD4 < 50 cells/μL)",
      "Solitary Pulmonary Nodule & TB-Like Cavitary Disease",
      "Treat with Macrolide (Clarithromycin/Azithromycin) + Ethambutol + Rifampin"
    ],
    overview: `
      <p><b>What it is:</b> The <i>Mycobacterium avium</i> complex (MAC)—principally <i>M. avium</i> and <i>M. intracellulare</i>—consists of <b>slow-growing, nonpigmented nontuberculous mycobacteria (Runyon Group III)</b> that are ubiquitous in water and soil.</p>
      <p><b>Epidemiology:</b> Acquired via ingestion or inhalation of contaminated environmental water/aerosols; <b>no person-to-person transmission</b> occurs. One of the most common pathogenic acid-fast groups in both immunocompetent pulmonary disease and advanced AIDS.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Intracellular Replication in Macrophages:</b> Survives inside host macrophages after mucosal ingestion or inhalation; in severely immunocompromised hosts (CD4 &lt;50/&mu;L), replicates to massive tissue burdens (hundreds to thousands of bacilli per mL of blood) before organ dysfunction manifests.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Pulmonary Disease in Immunocompetent Hosts (3 Classic Forms):</b>
          <ul class="list-circle pl-5 mt-1 space-y-1">
            <li><b>Fibrocavitary Disease:</b> Middle-aged/older male smokers with underlying lung disease; slowly evolving upper-lobe cavities mimicking TB.</li>
            <li><b>Lady Windermere Syndrome:</b> Indolent nodular bronchiectasis in the lingula or right middle lobe of <b>elderly female nonsmokers</b> (postulated from chronic voluntary cough suppression).</li>
            <li><b>Solitary Pulmonary Nodule:</b> Most common mycobacterial cause of a solitary lung nodule.</li>
          </ul>
        </li>
        <li><b>Disseminated MAC in AIDS (CD4 &lt;50 cells/&mu;L):</b> Primarily <i>M. avium</i>; acquired mainly via GI ingestion with lymph node replication and massive systemic dissemination to virtually every organ (liver, spleen, bone marrow, GI tract, blood, pericardium).</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Acid-Fast Stain &amp; Culture:</b> Strongly acid-fast rods; slow-growing nonpigmented colonies on Middlebrook/Löwenstein-Jensen agar or mycobacterial blood culture broth (high bacillary burden in AIDS tissue biopsies).</li>
        <li><b>Definitive Identification:</b> MALDI-TOF MS, nucleic acid probes, or 16S rRNA/<i>SecA</i> sequencing (standard <i>M. tuberculosis</i> NAATs do NOT detect MAC).</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Standard Multi-Drug Regimen:</b> Resistant to routine TB drugs like isoniazid; recommended therapy is a macrolide (<b>Clarithromycin or Azithromycin</b>) combined with <b>Ethambutol and Rifampin</b> (monitor drug interactions with HIV protease inhibitors).</li>
        <li><b>AIDS Prophylaxis:</b> <b>Azithromycin or Clarithromycin</b> chemoprophylaxis is recommended for HIV patients when CD4 counts fall below <b>50 cells/&mu;L</b> (incidence has dropped sharply with effective ART).</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Lady Windermere Syndrome:</b> Nodular lingular/middle-lobe bronchiectatic MAC lung disease seen in elderly female nonsmokers.</li>
        <li><b>NTM (Nontuberculous Mycobacteria):</b> Environmental mycobacteria outside the <i>M. tuberculosis</i> complex; not spread person-to-person.</li>
      </ul>
    `
  },
  {
    id: "mycobacterium_kansasii",
    name: "Mycobacterium kansasii",
    chapter: "Ch. 21: Mycobacterium and Related Acid-Fast Bacteria",
    tags: [
      "Gram-Variable / Poorly Staining", "Strongly Acid-Fast", "Beaded / Cording Rods",
      "Obligate Aerobe", "Facultative Intracellular", "Non-Spore-Forming",
      "Non-Motile",
      "Löwenstein-Jensen / Middlebrook Agar", "Slow-Growing (>7 Days)", "Photochromogen",
      "Mycolic Acids & Cord Factor",
      "Cavitary / Granulomatous Lung Disease"
    ],
    triggerWords: [
      "Photochromogen (Yellow Carotenoid Pigment After Light Exposure — Runyon Group I)",
      "Slow-Growing NTM Causing TB-Like Cavitary Pulmonary Disease",
      "No Person-to-Person Transmission", "Never Mistake Pigmented Mycobacteria for M. tuberculosis"
    ],
    overview: `
      <p><b>What it is:</b> <i>Mycobacterium kansasii</i> is a common, usually pathogenic, <b>slow-growing photochromogenic nontuberculous mycobacterium (Runyon Group I)</b> that produces intense yellow carotenoid pigment only after brief exposure to light.</p>
      <p><b>Epidemiology:</b> Acquired from environmental water sources (no person-to-person spread). Causes chronic pulmonary disease clinically and radiographically identical to tuberculosis, as well as disseminated disease in AIDS patients.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Lipid-Rich Mycolic Acid Cell Wall:</b> Confers acid-fastness, intracellular macrophage survival, and granulomatous tissue inflammation.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>TB-Like Pulmonary Disease:</b> Chronic cavitary upper-lobe lung disease mimicking <i>M. tuberculosis</i> in patients with underlying structural lung disease or immunocompromise.</li>
        <li><b>Disseminated Disease:</b> Occurs in patients with advanced AIDS or severe cellular immunosuppression.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Culture &amp; Photochromogenicity:</b> Slow-growing acid-fast rods on Middlebrook/Löwenstein-Jensen agar that develop bright <b>yellow carotenoid pigment after exposure to light</b> (rules out <i>M. tuberculosis</i>). Confirmed by MALDI-TOF MS or gene sequencing.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Antimycobacterial Regimen:</b> Unlike MAC, <i>M. kansasii</i> is typically susceptible to standard anti-TB drugs and treated with a prolonged combination of <b>Rifampin + Isoniazid + Ethambutol</b> (or macrolide-based regimens if rifampin-resistant).</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Photochromogen (Runyon Group I):</b> Slow-growing NTM (e.g., <i>M. kansasii</i>, <i>M. marinum</i>) that forms nonpigmented colonies in the dark and turns bright yellow after light exposure.</li>
      </ul>
    `
  },
  {
    id: "mycobacterium_marinum",
    name: "Mycobacterium marinum",
    chapter: "Ch. 21: Mycobacterium and Related Acid-Fast Bacteria",
    tags: [
      "Gram-Variable / Poorly Staining", "Strongly Acid-Fast", "Beaded / Cording Rods",
      "Obligate Aerobe", "Facultative Intracellular", "Non-Spore-Forming",
      "Non-Motile",
      "Löwenstein-Jensen / Middlebrook Agar", "Slow-Growing (>7 Days)", "Photochromogen",
      "Mycolic Acids & Cord Factor",
      "Cutaneous Eschar / Ulcer", "Impetigo / Folliculitis / Abscesses",
      "Fish / Shellfish / Marine Water"
    ],
    triggerWords: [
      "Photochromogen (Yellow Pigment in Light)", "Grows Optimally at Cool Temperatures (~30°C)",
      "Fish Tank / Swimming Pool Granuloma (Cutaneous Ulcers & Sporotrichoid Nodules)",
      "No Person-to-Person Transmission"
    ],
    overview: `
      <p><b>What it is:</b> <i>Mycobacterium marinum</i> is a <b>slow-growing photochromogenic NTM (Runyon Group I)</b> that grows optimally at cooler temperatures (~30°C–32°C) rather than core body temperature (37°C).</p>
      <p><b>Epidemiology:</b> Found in fresh and saltwater environments, aquariums, and swimming pools. Inoculated into skin abrasions during fish handling or aquarium cleaning; no person-to-person spread.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Cool-Temperature Tropism &amp; Intracellular Survival:</b> Prefers cooler peripheral extremities (hands, forearms, knees), surviving inside dermal macrophages to provoke chronic granulomatous skin lesions.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Cutaneous Granulomas ("Fish Tank Granuloma"):</b> Chronic papules, nodules, or ulcers on extremities that can ascend along lymphatic channels (lymphocutaneous/sporotrichoid pattern); rarely disseminates in AIDS patients.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Culture (Notify Lab for Cool Incubation!):</b> Tissue biopsy cultured on Middlebrook/Löwenstein-Jensen agar at <b>30°C</b> (may fail at 37°C). Produces yellow carotenoid pigment upon light exposure; confirmed by MALDI-TOF MS or sequencing.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Antimicrobial Therapy:</b> Prolonged therapy (months) with combination regimens such as <b>Clarithromycin + Ethambutol</b> (or Rifampin, Doxycycline, or TMP-SMX) guided by susceptibility testing.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Cool-Temperature Cutaneous NTM:</b> Slow-growing mycobacteria favoring cool skin surfaces: <i>M. marinum</i>, <i>M. ulcerans</i>, and <i>M. haemophilum</i>.</li>
      </ul>
    `
  },
  {
    id: "rapidly_growing_mycobacteria",
    name: "Rapidly Growing Mycobacteria (M. abscessus, M. chelonae, M. fortuitum)",
    chapter: "Ch. 21: Mycobacterium and Related Acid-Fast Bacteria",
    tags: [
      "Gram-Variable / Poorly Staining", "Weakly / Partially Acid-Fast", "Beaded / Cording Rods",
      "Obligate Aerobe", "Extracellular", "Non-Spore-Forming",
      "Non-Motile",
      "Löwenstein-Jensen / Middlebrook Agar", "Rapidly Growing Mycobacteria (<7 Days)",
      "Mycolic Acids & Cord Factor",
      "Impetigo / Folliculitis / Abscesses", "Cutaneous Eschar / Ulcer", "CF / Ventilator Pneumonia",
      "Dental Procedures / Intravascular Catheters", "Hot Tubs / Burn Wounds / Contact Lenses"
    ],
    triggerWords: [
      "Rapidly Growing NTM (<7 Days — Runyon Group IV)", "Irregular Acid-Fast Staining",
      "Trauma & Iatrogenic Infections (Catheters, Prostheses, Pedicure Footbath Furunculosis)",
      "Resistant to Standard Anti-TB Drugs; Susceptible to Conventional Antibiotics (Clarithromycin, Amikacin, Imipenem, Cefoxitin)"
    ],
    overview: `
      <p><b>What it is:</b> The rapidly growing nontuberculous mycobacteria (Runyon Group IV)—most commonly <i>M. fortuitum</i>, <i>M. chelonae</i>, <i>M. abscessus</i>, and <i>M. mucogenicum</i>—form visible colonies in <b>less than 7 days</b>. They have relatively low virulence and stain irregularly with traditional acid-fast stains.</p>
      <p><b>Epidemiology:</b> Ubiquitous in soil and tap water. Rarely cause disseminated disease; instead, they cause opportunistic infections after deep subcutaneous inoculation via <b>trauma or iatrogenic procedures</b> (IV catheters, contaminated wound dressings, prosthetic heart valves, peritoneal dialysis, bronchoscopy) or contaminated nail salon footbaths (e.g., <i>M. fortuitum</i> leg furunculosis after shaving).</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Environmental Persistence &amp; Biofilm Formation:</b> Lipid-rich mycolic acid cell walls confer resistance to disinfectants and standard antimycobacterial drugs, enabling colonization of hospital water supplies and prosthetic devices.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Traumatic &amp; Iatrogenic Cutaneous/Soft-Tissue Infections:</b> Subcutaneous abscesses, violaceous boils/furunculosis (classic nail-salon footbath outbreaks with <i>M. fortuitum</i>), and surgical wound infections failing routine empirical antibiotics.</li>
        <li><b>Device &amp; Pulmonary Infections:</b> Intravascular catheter bacteremia, prosthetic valve endocarditis, and chronic pulmonary infections (notably <i>M. abscessus</i> in CF/bronchiectasis).</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Culture &amp; Microscopy:</b> Routine 1–2 day bacterial cultures often miss them (require 3–7 days); stain irregularly on acid-fast and Gram stains. Species identification via MALDI-TOF MS or gene sequencing is essential because susceptibility profiles vary dramatically by species.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Conventional Antibacterials (Not Anti-TB Drugs!):</b> Resistant to isoniazid/rifampin/ethambutol, but susceptible to agents such as <b>Clarithromycin, Amikacin, Imipenem, Cefoxitin, and Sulfonamides</b>—always guided by in vitro susceptibility testing.</li>
        <li><b>Source Control:</b> <b>Removal of infected prosthetic devices or catheters</b> is generally required for cure.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Runyon Group IV:</b> Rapidly growing NTM producing colonies in &lt;7 days; should never be mistaken for <i>M. tuberculosis</i>.</li>
      </ul>
    `
  },
  {
    id: "nocardia_species",
    name: "Nocardia species",
    chapter: "Ch. 21: Mycobacterium and Related Acid-Fast Bacteria",
    tags: [
      "Gram-Positive", "Gram-Variable / Poorly Staining", "Weakly / Partially Acid-Fast", "Branching Filamentous Rods",
      "Obligate Aerobe", "Facultative Intracellular", "Non-Spore-Forming",
      "Catalase (+)", "Urease (+)", "Non-Motile",
      "BCYE Agar (Cysteine & Iron)",
      "Mycolic Acids & Cord Factor",
      "Cavitary / Granulomatous Lung Disease", "Brain Abscess", "Impetigo / Folliculitis / Abscesses", "Erysipelas / Cellulitis", "Community-Acquired Meningitis",
      "CGD Patient Risk"
    ],
    triggerWords: [
      "Weakly / Partially Acid-Fast (Modified Kinyoun Stain)", "Strict Aerobe (vs. Anaerobic Actinomyces)",
      "Delicate Beaded Branching Filamentous Rods + Aerial Hyphae", "Grows on BCYE Agar (3–5 Days)",
      "Cavitary Pneumonia + Brain Abscess Dissemination in Immunocompromised Hosts",
      "Mycetoma (N. brasiliensis) & Lymphocutaneous Disease", "Treat with TMP-SMX"
    ],
    overview: `
      <p><b>What it is:</b> <i>Nocardia</i> species (common pathogens: <i>N. cyriacigeorgica, N. farcinica, N. brasiliensis, N. nova, N. abscessus</i>) are <b>strictly aerobic, catalase-positive Gram-positive rods</b> that form delicate, beaded, <b>branching filaments</b> resembling fungal hyphae. Their cell wall contains <b>medium-chain mycolic acids (50–62 carbons)</b>, making them <b>weakly (partially) acid-fast</b> (requiring weak HCl decolorization).</p>
      <p><b>Epidemiology:</b> Strictly <b>exogenous</b>, ubiquitous in organic-rich soil. Bronchopulmonary disease follows inhalation/aspiration primarily in <b>immunocompromised patients</b> (HIV, T-cell deficiencies, transplant recipients, CGD) or patients with chronic lung disease; cutaneous disease follows traumatic soil inoculation.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Resistance to Oxidative Burst:</b> Secretion of <b>catalase</b> and <b>superoxide dismutase</b> (plus surface-associated SOD) neutralizes hydrogen peroxide and superoxide inside phagocytes.</li>
        <li><b>Macrophage Survival &amp; Replication:</b> Prevents <b>phagosome-lysosome fusion</b> (mediated by <b>cord factor</b>), blocks phagosome acidification, and metabolizes host acid phosphatase as a carbon source.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Bronchopulmonary Nocardiosis:</b> Indolent pneumonia with necrosis, abscess formation, <b>cavitation</b>, and pleural spread in immunocompromised hosts (cough, dyspnea, fever). Finding pulmonary/disseminated nocardiosis in a seemingly healthy host warrants an immunologic workup!</li>
        <li><b>CNS Dissemination (Up to 1/3 of Patients!):</b> Hematogenous spread from the lungs produces single or multiple <b>brain abscesses</b> (fever, headache, focal neurologic deficits, seizures) or chronic meningitis.</li>
        <li><b>Cutaneous Infections (Primary or Secondary):</b>
          <ul class="list-circle pl-5 mt-1 space-y-1">
            <li><b>Mycetoma:</b> Painless, chronic destructive swelling (usually feet) with suppurative granulomas, bone/muscle invasion, and multiple draining sinus tracts (<i>N. brasiliensis</i> is the #1 cause in the Americas).</li>
            <li><b>Lymphocutaneous Disease:</b> Cutaneous nodules and ulcers ascending along lymphatics (mimics <i>Sporothrix schenckii</i> and <i>M. marinum</i>).</li>
            <li><b>Cellulitis &amp; Subcutaneous Abscesses:</b> Granulomatous ulcers with surrounding erythema.</li>
          </ul>
        </li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Microscopy (Rapid Preliminary ID):</b> Gram stain shows poorly staining, <b>delicate beaded branching Gram-positive filaments</b>. <b>Modified acid-fast stain</b> (weak acid decolorization) shows partially acid-fast red filaments—differentiating <i>Nocardia</i> from morphologically identical but <b>non-acid-fast, anaerobic <i>Actinomyces</i></b>!</li>
        <li><b>Culture (Notify Lab to Hold Plates!):</b> Slow-growing (<b>3–5 days</b>) in 5%–10% CO<sub>2</sub> on nonselective media or <b>BCYE agar</b> (selective for respiratory specimens; recovers both <i>Nocardia</i> and <i>Legionella</i>). Colonies are dry-to-waxy, white-to-orange, and display <b>aerial hyphae</b> under a dissecting microscope (aerial hyphae + weak acid-fastness is unique to <i>Nocardia</i>).</li>
        <li><b>Definitive ID:</b> MALDI-TOF MS or molecular sequencing (16S rRNA / heat-shock protein gene), paired with susceptibility testing.</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>First-Line Therapy:</b> <b>Trimethoprim-Sulfamethoxazole (TMP-SMX)</b> is initial empiric therapy for localized cutaneous disease in immunocompetent hosts.</li>
        <li><b>Severe, Pulmonary, Immunocompromised, or CNS Disease:</b> Prolonged combination therapy (2–3 drugs) due to slow growth and relapse risk: <b>TMP-SMX + Amikacin</b> (pulmonary/cutaneous) or <b>TMP-SMX + Imipenem or Ceftriaxone/Cefotaxime</b> (CNS/brain abscess), always tailored by in vitro susceptibility testing.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Aerial Hyphae:</b> Filamentous projections protruding upward from the colony surface; combined with weak acid-fastness, this rapidly identifies <i>Nocardia</i>.</li>
        <li><b>Mycetoma:</b> Chronic, destructive subcutaneous infection with suppurative granulomas and multiple draining sinus tracts, classically caused by <i>N. brasiliensis</i>.</li>
      </ul>
    `
  },
  {
    id: "rhodococcus_equi",
    name: "Rhodococcus equi",
    chapter: "Ch. 21: Mycobacterium and Related Acid-Fast Bacteria",
    tags: [
      "Gram-Positive", "Weakly / Partially Acid-Fast", "Regular / Uniform Rods", "Coccobacilli / Tiny Pleomorphic Rods",
      "Obligate Aerobe", "Facultative Intracellular", "Non-Spore-Forming",
      "Catalase (+)", "Non-Motile",
      "Salmon-Pink Colonies",
      "Mycolic Acids & Cord Factor",
      "Cavitary / Granulomatous Lung Disease", "Community-Acquired Meningitis", "Keratitis / Endophthalmitis", "Sepsis / Septic Shock",
      "Unpasteurized Dairy / Livestock", "Intrinsically Cephalosporin-Resistant", "AIDS / Low CD4 (<50) Risk"
    ],
    triggerWords: [
      "Weakly Acid-Fast Rod That Reverts to Cocci", "Mucoid Salmon-Pink Colonies (After ≥4 Days)",
      "Cavitary Pneumonia / Lung Abscesses in HIV & Transplant Patients",
      "Facultative Intracellular Macrophage Pathogen", "Resistant to Penicillins & Cephalosporins"
    ],
    overview: `
      <p><b>What it is:</b> <i>Rhodococcus equi</i> (formerly <i>Corynebacterium equi</i>) is a strictly aerobic, weakly acid-fast <b>Gram-positive bacterium that initially appears rodlike (4 hours) and reverts to coccoid forms (18 hours)</b> without delicate branching filaments.</p>
      <p><b>Epidemiology:</b> Originally a veterinary pathogen of herbivores (horses/soil contaminated with manure), it is now an increasingly recognized <b>opportunistic pathogen of immunocompromised hosts</b> (especially HIV/AIDS with low CD4 counts and transplant recipients), often without documented animal contact.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Intracellular Survival in Macrophages:</b> Facultative intracellular pathogen that survives inside macrophages and provokes chronic granulomatous inflammation and abscess formation; depressed IFN-&gamma; production impairs pulmonary clearance.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Invasive Pulmonary Disease (Immunocompromised):</b> Nodules, lobar consolidation, and necrotizing/cavitary <b>lung abscesses</b> with frequent hematogenous dissemination to lymph nodes, meninges, pericardium, and skin (50% mortality in low-CD4 HIV patients).</li>
        <li><b>Opportunistic Infections (Immunocompetent):</b> Posttraumatic cutaneous infections, CAPD peritonitis, and traumatic endophthalmitis.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Culture &amp; Microscopy:</b> Grows slowly aerobically on nonselective media as <b>mucoid colonies</b> developing a characteristic <b>salmon-pink pigment after &ge;4 days</b>. Weakly acid-fast (best demonstrated when grown on mycobacterial Middlebrook agar).</li>
        <li><b>Identification:</b> Biochemically inert; definitive species ID requires MALDI-TOF MS or gene sequencing (frequently misidentified as insignificant coryneform skin flora).</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Avoid Penicillins &amp; Cephalosporins:</b> Resistance to penicillins and cephalosporins is common.</li>
        <li><b>Localized (Immunocompetent):</b> Extended-spectrum macrolide (<b>Azithromycin or Clarithromycin</b>) or fluoroquinolone (<b>Levofloxacin</b>).</li>
        <li><b>Disseminated / Immunocompromised:</b> Combination of &ge;2 active drugs with at least one achieving high intracellular macrophage penetration (e.g., <b>Vancomycin, Imipenem, Aminoglycosides, Levofloxacin/Ciprofloxacin, Rifampin</b>), guided by susceptibility testing.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Rod-to-Coccus Cycle:</b> Morphologic transition of <i>R. equi</i> from short rods in young broth cultures to coccoid forms in mature cultures.</li>
        <li><b>Gordonia &amp; Tsukamurella:</b> Related partially acid-fast soil actinomycetes that are rare opportunistic causes of intravascular catheter-associated bacteremia.</li>
      </ul>
    `
  }
);

window.BACTERIA_DB.push(
  {
    id: "mycobacterium_scrofulaceum",
    name: "Mycobacterium scrofulaceum",
    chapter: "Ch. 21: Mycobacterium and Related Acid-Fast Bacteria",
    tags: [
      "Gram-Variable / Poorly Staining", "Strongly Acid-Fast", "Regular / Uniform Rods", "Beaded / Cording Rods",
      "Obligate Aerobe", "Facultative Intracellular", "Non-Spore-Forming",
      "Catalase (+)", "Oxidase (-)", "Urease (+)", "Non-Motile",
      "Löwenstein-Jensen / Middlebrook Agar", "Slow-Growing (>7 Days)", "Scotochromogen",
      "Mycolic Acids & Cord Factor",
      "Impetigo / Folliculitis / Abscesses", "Cavitary / Granulomatous Lung Disease"
    ],
    triggerWords: [
      "Runyon Group II Scotochromogen (Yellow-Orange Pigment in Dark & Light)", "Pediatric Cervical Lymphadenitis (Scrofula)",
      "Slow-Growing Acid-Fast Bacilli", "Environmental Water / Soil", "Surgical Excision Over Antibiotics"
    ],
    overview: `
      <p><b>What it is:</b> <i>Mycobacterium scrofulaceum</i> is the classic clinical representative of the <b>Runyon Group II scotochromogenic nontuberculous mycobacteria (NTM)</b>—meaning its slow-growing colonies produce bright yellow-to-orange carotenoid pigment <b>both in the dark and in the light</b>.</p>
      <p><b>Physiology &amp; Habitat:</b> Ubiquitous environmental saprophyte found in tap water, soil, and raw milk; not transmitted person-to-person.</p>
    `,
    virulence: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Mycolic Acid–Rich Cell Wall:</b> Confers strong acid-fastness, environmental persistence, and resistance to disinfectants and routine antibiotics.</li>
        <li><b>Intracellular Granulomatous Inflammation:</b> Survives within macrophages in regional lymph nodes, eliciting chronic caseating or non-caseating granulomas.</li>
      </ul>
    `,
    diseases: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Pediatric Cervical Lymphadenitis ("Scrofula"):</b> Classic presentation in immunocompetent children aged 1–5 years with a painless, unilateral, slowly enlarging submandibular or anterior cervical lymph node that may suppurate and form a chronic draining sinus tract (unlike tuberculous scrofula, systemic symptoms and chest X-ray abnormalities are typically absent).</li>
        <li><b>Opportunistic Pulmonary or Disseminated Disease:</b> Uncommonly causes chronic cavitary lung disease in adults with preexisting structural lung disease or disseminated disease in severely immunocompromised hosts.</li>
      </ul>
    `,
    diagnosis: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Acid-Fast Microscopy &amp; Culture:</b> Acid-fast bacilli on Ziehl-Neelsen or auramine-rhodamine stain; slow growth (&gt;7 days, often 2–4 weeks) on L&ouml;wenstein-Jensen or Middlebrook 7H10/7H11 media forming smooth, yellow-orange colonies even when incubated in complete darkness (<b>scotochromogen</b>).</li>
        <li><b>Definitive Identification:</b> MALDI-TOF MS, nucleic acid probes, or 16S rRNA / <i>rpoB</i> gene sequencing (distinguishes it from <i>M. avium</i> complex, which is now the more common cause of pediatric NTM lymphadenitis, and from <i>M. tuberculosis</i>).</li>
      </ul>
    `,
    treatment: `
      <ul class="list-disc pl-5 space-y-1.5">
        <li><b>Complete Surgical Excision (Treatment of Choice for Pediatric Lymphadenitis):</b> Because <i>M. scrofulaceum</i> is frequently resistant to standard antituberculous drugs (isoniazid, ethambutol), <b>complete surgical excision</b> of the involved lymph node is curative and avoids chronic fistula formation seen with simple incision and drainage.</li>
        <li><b>Antimicrobial Therapy (When Excision Is Incomplete or Systemic):</b> Macrolide-based combination regimens (<b>clarithromycin or azithromycin</b> plus <b>rifampin</b> or <b>ethambutol</b>) guided by in vitro susceptibility testing.</li>
      </ul>
    `,
    glossary: `
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Scotochromogen (Runyon Group II):</b> Slow-growing mycobacteria that produce yellow-orange pigment in the dark as well as in the light (e.g., <i>M. scrofulaceum</i>, <i>M. gordonae</i>).</li>
        <li><b>Scrofula:</b> Chronic mycobacterial cervical lymphadenitis (caused by <i>M. tuberculosis</i> in adults or NTM such as MAC and <i>M. scrofulaceum</i> in young children).</li>
      </ul>
    `
  }
);
