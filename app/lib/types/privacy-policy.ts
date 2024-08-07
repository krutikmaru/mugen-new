type SubSection = {
  subHeading: string;
  description: string;
  subSections?: SubSection[];
};

export type PrivacyPolicy = {
  heading: string;
  description: string;
  subSections?: SubSection[];
};
