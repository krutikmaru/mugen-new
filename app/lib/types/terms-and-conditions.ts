type SubSection = {
  subHeading: string;
  description: string;
  subSections?: SubSection[];
};

export type TermsAndConditions = {
  heading: string;
  description: string;
  subSections?: SubSection[];
};
