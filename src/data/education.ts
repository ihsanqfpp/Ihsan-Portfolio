export type Education = {
  id: number;
  institution: string;
  degree: string;
  period: string;
  grade: string;
  highlight?: string;
};

export const education: Education[] = [
  {
    id: 1,
    institution: "Islamia College University, Peshawar",
    degree: "BS Software Engineering",
    period: "Sep 2021 - Jul 2025",
    grade: "CGPA: 3.10 / 4.0",
    highlight: "FYP: Recipe Sharing Web App",
  },
  {
    id: 2,
    institution: "Hangu Institute of Science and Technology",
    degree: "FSc Pre-Engineering",
    period: "Completed",
    grade: "854 / 1100",
  },
  {
    id: 3,
    institution: "Hangu Institute of Science and Technology",
    degree: "Matriculation (Science)",
    period: "Completed",
    grade: "980 / 1100",
  },
];
