// Chapter 17: Staphylococcus and Related Gram-Positive Cocci
// To add or edit a bacterium, simply edit its { ... } block below!

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
    triggerWords: ["Coagulase (+)", "Protein A", "TSST-1", "Exfoliative Toxins", "Enterotoxins", "Mannitol Salt Agar", "MRSA (mecA/PBP2a)"],
    virulence: "Thick peptidoglycan layer, slimy monosaccharide capsule, and Protein A (binds Fc receptor of IgG1/IgG2/IgG4 to block opsonophagocytosis). Produces cytotoxins (alpha, beta, delta, gamma, and Panton-Valentine leukocidin [PVL]), exfoliative toxins A & B (serine proteases splitting desmoglein-1 in stratum granulosum), heat-stable enterotoxins A–X (emetic food poisoning), and Toxic Shock Syndrome Toxin-1 (TSST-1 superantigen).",
    diseases: "Toxin-mediated: Staphylococcal Scalded Skin Syndrome (SSSS; Nikolsky sign positive, no organisms/leukocytes in bullae), Toxic Shock Syndrome (fever, hypotension, diffuse macular erythematous rash with palmar/plantar desquamation), rapid-onset food poisoning (1–6 hr incubation; salted meats, pastries, potato salad; severe vomiting, no fever). Suppurative: Impetigo, folliculitis, furuncles, carbuncles, surgical wound infections, bacteremia, acute endocarditis (especially IV drug users), osteomyelitis (Brodie abscess), septic arthritis, post-viral necrotizing pneumonia/empyema.",
    diagnosis: "Microscopy useful for pyogenic skin/soft-tissue abscesses (Gram-positive cocci in grape-like clusters), not blood or food. Grows rapidly on sheep blood agar (large smooth golden-yellow colonies due to carotenoid pigment, beta-hemolysis) and selective Mannitol Salt Agar (7.5% NaCl; ferments mannitol turning agar yellow). Catalase (+), Coagulase (+). MALDI-TOF MS for rapid species ID; PCR/NAAT for mecA/mecC genes (encoding low-affinity PBP2a in MRSA).",
    treatment: "Incision and drainage for localized skin abscesses. Oral empiric MRSA therapy: TMP-SMX, doxycycline/minocycline, clindamycin, or linezolid. Severe systemic infections require intravenous vancomycin, daptomycin, linezolid, or ceftaroline. Oxacillin/nafcillin or cefazolin reserved for confirmed MSSA."
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
    triggerWords: ["Coagulase (-)", "Novobiocin Susceptible", "Polysaccharide Slime / Biofilm", "Prosthetic Valves & Catheters", "White Non-Hemolytic Colonies"],
    virulence: "Coagulase-negative Staphylococcus (CoNS). Primary virulence factor is a loose exopolysaccharide slime layer (biofilm) that mediates firm adherence to synthetic polymers (prosthetic heart valves, artificial joints, shunts, intravascular catheters) and shields bacteria from antibiotics and host phagocytosis.",
    diseases: "Subacute endocarditis on prosthetic heart valves (often developing months to a year after valve placement), central venous catheter-related bloodstream infections, CSF shunt infections, prosthetic joint infections (especially hip/knee arthroplasty), and peritoneal dialysis catheter peritonitis.",
    diagnosis: "Gram-positive cocci in clusters; Catalase (+), Coagulase (-), Non-hemolytic (white colonies on blood agar), does not ferment mannitol on MSA, and is Novobiocin Susceptible (distinguishes it from S. saprophyticus). Because it is universal skin flora, repeated positive blood cultures from separate venipuncture sites are required to confirm true infection vs. skin contamination.",
    treatment: "High rates of methicillin/oxacillin resistance (>80%). Drug of choice is intravenous vancomycin (often combined with rifampin and gentamicin for prosthetic valve infections), coupled with removal/replacement of the infected catheter, shunt, or prosthetic device whenever feasible."
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
    triggerWords: ["Coagulase (-)", "Novobiocin Resistant", "Urease (+)", "Honeymoon Cystitis", "UTI in Young Sexually Active Women"],
    virulence: "Coagulase-negative Staphylococcus with specialized surface adhesins that bind with high affinity to human uroepithelium, along with urease production that alkalinizes urine.",
    diseases: "Uncomplicated urinary tract infections (acute cystitis / 'honeymoon cystitis') in young, sexually active women (dysuria, pyuria, and bacteriuria).",
    diagnosis: "Gram-positive cocci in clusters in urinary sediment; Catalase (+), Coagulase (-), Non-hemolytic, and Novobiocin Resistant (key lab differentiator from S. epidermidis). MALDI-TOF MS provides rapid definitive identification.",
    treatment: "Readily treated with oral trimethoprim-sulfamethoxazole (TMP-SMX), nitrofurantoin, or fluoroquinolones."
  },
  {
    id: "staph_lugdunensis",
    name: "Staphylococcus lugdunensis",
    chapter: "Ch. 17: Staphylococcus and Related Gram-Positive Cocci",
    tags: [
      "Gram-Positive", "Non-Acid-Fast", "Cocci in Grape-like Clusters",
      "Facultative Anaerobe", "Extracellular", "Non-Spore-Forming",
      "Catalase (+)", "Coagulase (-)", "Oxidase (-)", "PYR (+)", "Beta-Hemolytic (Complete)", "Non-Motile",
      "Acute Endocarditis", "Impetigo / Folliculitis / Abscesses", "Osteomyelitis / Septic Arthritis"
    ],
    triggerWords: ["Coagulase-Negative by Tube Test", "Clumping Factor (+) on Slide Test", "PYR (+)", "Ornitihine Decarboxylase (+)", "Aggressive Native Valve Endocarditis"],
    virulence: "Although technically a coagulase-negative Staphylococcus (negative tube coagulase test for free coagulase), it expresses membrane-bound clumping factor (can test positive on slide coagulase/latex agglutination tests) and behaves clinically with the fulminant aggressiveness of S. aureus.",
    diseases: "Fulminant, destructive acute endocarditis on native heart valves (rapid valve destruction, myocardial abscess formation, high mortality), as well as skin/soft-tissue abscesses and prosthetic joint infections.",
    diagnosis: "Gram-positive cocci in clusters; Catalase (+), Free Tube Coagulase (-), Bound Clumping Factor (+/-), PYR (+), Ornithine Decarboxylase (+). Identified definitively by MALDI-TOF MS.",
    treatment: "Unlike other coagulase-negative staphylococci, most isolates remain susceptible to beta-lactams (oxacillin/nafcillin or cefazolin), though mecA testing is mandatory and vancomycin is used empirically in severe endocarditis."
  }
);
