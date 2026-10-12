// src/data/nalaWeekly.ts
// Single source of truth for Nala Weekly issues.
// To publish a new issue, add it to the TOP of the array. The homepage
// "Nala Weekly" section shows the 6 newest issues, and the archive page
// can import this same array to list them all.

export type NalaWeeklyIssue = {
  issueNumber: string; // e.g. '03'
  date: string;        // e.g. '13 October 2026'
  description: string; // short summary of the issue
  pdfLink: string;     // e.g. '/uploads/nala-weekly/Nala-Weekly-Issue-03.pdf'
};

export const nalaWeeklyIssues: NalaWeeklyIssue[] = [
  {
    issueNumber: '02',
    date: '6 October 2026',
    description:
      "This week's Nala Weekly tracks five flashpoints as the region's conflicts increasingly converge. In Ethiopia, federal forces have retaken Mekelle and Addis Ababa has broken off relations with Eritrea, raising the risk of an interstate war. In Sudan, army chief Abdel Fattah al-Burhan has ruled out talks as the RSF opens a new front in Blue Nile on the Ethiopian border. In South Sudan, the main opposition is boycotting the pre-election dialogue, leaving the 22 December poll short of legitimacy. Somalia is caught between rival regional blocs as Ethiopia weighs pulling troops out and the AU mission's funding is in doubt. At the Red Sea and Bab el-Mandeb, Saudi-backed Yemeni forces are fighting the Houthis for control of the strait.",
    pdfLink: '/uploads/nala-weekly/Nala-Weekly-Issue-02.pdf',
  },
  {
    issueNumber: '01',
    date: '29 September 2026',
    description:
      "This week's Nala Weekly tracks four fast-moving flashpoints reshaping the security environment in the Horn of Africa and the Red Sea region. In South Sudan, President Salva Kiir has cleared the way for a 22 December vote, but with Riek Machar on trial and the main opposition rejecting the process, the poll risks deepening the crisis. In Ethiopia, a seven-group alliance with the TPLF as its main fighting force has taken up arms against Prime Minister Abiy Ahmed, ending the Pretoria agreement and raising the risk of a regional war. At the Red Sea and Bab el-Mandeb, the Houthis' seizure of Mayun Island has opened a Red Sea front in the war with Iran, putting one of the world's key shipping lanes at risk. In Sudan, the RSF is applying the siege tactics used in El Fasher to El-Obeid, pushing the country towards a de facto partition.",
    pdfLink: '/uploads/nala-weekly/Nala-Weekly-Issue-01.pdf',
  },
];