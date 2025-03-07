import { UseToastOptions } from '@chakra-ui/react';
import { NavLink, SidebarLink, TabsMap } from './types';

// metadata
export const HEAD_TITLE = 'Ethereum Foundation ESP';

// home
export const HOME_URL = '/';

// about
export const ABOUT_URL = '/about';
export const WHO_WE_SUPPORT_URL = '/about/who-we-support';
export const HOW_WE_SUPPORT_URL = '/about/how-we-support';

// applicants
export const APPLICANTS_URL = '/applicants';
export const SIDEBAR_APPLICANTS_LINKS: SidebarLink[] = [
  { text: 'Mission and Scope', href: `${APPLICANTS_URL}/#mission-and-scope` },
  { text: 'How we support', href: `${APPLICANTS_URL}/#how-we-support` },
  { text: 'Application types', href: `${APPLICANTS_URL}/#application-types` }
];

export const OFFICE_HOURS_URL = '/applicants/office-hours';
export const SIDEBAR_OFFICE_HOURS_LINKS: SidebarLink[] = [
  { text: 'Summary', href: `${OFFICE_HOURS_URL}/#description` },
  { text: 'Process', href: `${OFFICE_HOURS_URL}/#process` },
  { text: 'Eligibility', href: `${OFFICE_HOURS_URL}/#eligibility` },
  { text: 'What we offer', href: `${OFFICE_HOURS_URL}/#what-we-offer` },
  { text: "What we DON'T offer", href: `${OFFICE_HOURS_URL}/#what-we-dont-offer` },
  { text: 'Before submitting', href: `${OFFICE_HOURS_URL}/#before-submitting` },
  { text: 'FAQ', href: `${OFFICE_HOURS_URL}/#faq` },
  { text: 'Apply', href: `${OFFICE_HOURS_URL}/#apply` }
];

export const PROJECT_GRANTS_URL = '/applicants/project-grants';
export const SIDEBAR_PROJECT_GRANTS_LINKS: SidebarLink[] = [
  { text: 'Summary', href: `${PROJECT_GRANTS_URL}/#description` },
  { text: 'Process', href: `${PROJECT_GRANTS_URL}/#process` },
  { text: 'Requirements', href: `${PROJECT_GRANTS_URL}/#requirements` },
  { text: 'Eligibility', href: `${PROJECT_GRANTS_URL}/#eligibility` },
  { text: 'What is NOT eligible', href: `${PROJECT_GRANTS_URL}/#what-is-not-eligible` },
  {
    text: 'Tips for submitting a great application',
    href: `${PROJECT_GRANTS_URL}/#tips-application`
  },
  { text: 'FAQ', href: `${PROJECT_GRANTS_URL}/#faq` },
  { text: 'Apply', href: `${PROJECT_GRANTS_URL}/#apply` }
];

export const SMALL_GRANTS_URL = '/applicants/small-grants';
export const SIDEBAR_SMALL_GRANTS_LINKS: SidebarLink[] = [
  { text: 'Summary', href: `${SMALL_GRANTS_URL}/#description` },
  { text: 'Process', href: `${SMALL_GRANTS_URL}/#process` },
  { text: 'Requirements', href: `${SMALL_GRANTS_URL}/#requirements` },
  { text: 'Eligibility', href: `${SMALL_GRANTS_URL}/#eligibility` },
  { text: 'What is NOT eligible', href: `${SMALL_GRANTS_URL}/#what-is-not-eligible` },
  {
    text: 'Tips for submitting a great application',
    href: `${SMALL_GRANTS_URL}/#tips-application`
  },
  { text: 'FAQ', href: `${SMALL_GRANTS_URL}/#faq` },
  { text: 'Apply', href: `${SMALL_GRANTS_URL}/#apply` }
];

export const ACADEMIC_GRANTS_URL = '/academic-grants';
export const SIDEBAR_ACADEMIC_GRANTS_LINKS: SidebarLink[] = [
  { text: 'Summary', href: `${ACADEMIC_GRANTS_URL}/#description` },
  { text: 'Submit proposal', href: `${ACADEMIC_GRANTS_URL}/#submit-proposal` },
  { text: 'Deadline', href: `${ACADEMIC_GRANTS_URL}/#deadline` },
  { text: 'Requirements', href: `${ACADEMIC_GRANTS_URL}/#requirements` },
  { text: 'Selection criteria', href: `${ACADEMIC_GRANTS_URL}/#selection-criteria` },
  { text: 'Wishlist', href: `${ACADEMIC_GRANTS_URL}/#wishlist` },
  { text: 'Next steps and support', href: `${ACADEMIC_GRANTS_URL}/#next-steps-and-support` },
  { text: 'FAQ', href: `${ACADEMIC_GRANTS_URL}/#faq` },
  { text: 'Apply', href: `${ACADEMIC_GRANTS_URL}/#apply` }
];

export const DEVCON_GRANTS_URL = '/devcon-grants';
export const SIDEBAR_DEVCON_GRANTS_LINKS: SidebarLink[] = [
  { text: 'Summary', href: `${DEVCON_GRANTS_URL}/#description` },
  { text: 'Who', href: `${DEVCON_GRANTS_URL}/#who` },
  { text: 'Eligibility', href: `${DEVCON_GRANTS_URL}/#eligibility` },
  { text: 'How to apply', href: `${DEVCON_GRANTS_URL}/#how-to-apply` },
  { text: 'Selection criteria', href: `${DEVCON_GRANTS_URL}/#selection-criteria` },
  { text: 'Next steps and support', href: `${DEVCON_GRANTS_URL}/#next-steps-and-support` },
  { text: 'FAQ', href: `${DEVCON_GRANTS_URL}/#faq` },
  { text: 'Apply', href: `${DEVCON_GRANTS_URL}/#apply` }
];

export const LAYER_2_GRANTS_URL = '/layer-2-grants';
export const SIDEBAR_LAYER_2_GRANTS_LINKS: SidebarLink[] = [
  { text: 'Summary', href: `${LAYER_2_GRANTS_URL}/#description` },
  { text: 'Introduction', href: `${LAYER_2_GRANTS_URL}/#introduction` },
  { text: 'Ideas', href: `${LAYER_2_GRANTS_URL}/#ideas` },
  { text: 'Deadline', href: `${LAYER_2_GRANTS_URL}/#deadline` },
  { text: 'Submit a proposal', href: `${LAYER_2_GRANTS_URL}/#submit-proposal` },
  { text: 'Requirements', href: `${LAYER_2_GRANTS_URL}/#requirements` },
  { text: 'Selection criteria', href: `${LAYER_2_GRANTS_URL}/#selection-criteria` },
  { text: 'FAQ', href: `${LAYER_2_GRANTS_URL}/#faq` }
];

// apply forms
export const PROJECT_GRANTS_APPLY_URL = '/applicants/project-grants/apply';
export const OFFICE_HOURS_APPLY_URL = '/applicants/office-hours/apply';
export const SMALL_GRANTS_APPLY_URL = '/applicants/small-grants/apply';
export const ACADEMIC_GRANTS_APPLY_URL = '/academic-grants/apply';
export const DEVCON_GRANTS_APPLY_URL = '/devcon-grants/apply';

// grantee finance form
export const GRANTEE_FINANCE_URL = '/applicants/grantee-finance';

// thank you pages
export const PROJECT_GRANTS_THANK_YOU_PAGE_URL = '/applicants/project-grants/thank-you';
export const OFFICE_HOURS_THANK_YOU_PAGE_URL = '/applicants/office-hours/thank-you';
export const SMALL_GRANTS_THANK_YOU_PAGE_URL = '/applicants/small-grants/thank-you';
export const GRANTEE_FINANCE_THANK_YOU_PAGE_URL = '/applicants/grantee-finance/thank-you';
export const ACADEMIC_GRANTS_THANK_YOU_PAGE_URL = '/academic-grants/thank-you';
export const DEVCON_GRANTS_THANK_YOU_PAGE_URL = '/devcon-grants/thank-you';

// ethereum ecosystem
export const ETHEREUM_ORG_URL = 'https://ethereum.org/';
export const ETHEREUM_COOKIE_POLICY_URL = 'https://ethereum.org/en/cookie-policy/';
export const ETHEREUM_PRIVACY_POLICY_URL = 'https://ethereum.org/en/privacy-policy/';
export const ETHEREUM_TERMS_OF_USE_URL = 'https://ethereum.org/en/terms-of-use/';
export const ETHEREUM_GITHUB_URL = 'https://github.com/ethereum';
export const ETHEREUM_JOBS_URL = 'https://ethereum.org/en/community/#ethereum-jobs';
export const ETHEREUM_COMMUNITY_URL = 'https://ethereum.org/en/community/';
export const ETHEREUM_BROAD_ECOSYSTEM_URL =
  'https://ethereum.org/en/community/grants/#broad-ethereum-ecosystem';
export const ETHEREUM_GRANTS_URL = 'https://ethereum.org/en/community/grants/';

// EF
export const EF_PHILOSOPHY_URL = 'https://ethereum.foundation/philosophy/';
export const EF_JOBS_URL = 'https://ethereum.bamboohr.com/jobs/';

// ESP external links
export const ESP_BLOG_URL = 'https://blog.ethereum.org/category/ecosystem-support-program/';
export const ESP_TWITTER_URL = 'https://twitter.com/EF_ESP';
export const ESP_EMAIL_ADDRESS = 'esp@ethereum.org';
export const ACADEMIC_GRANTS_EMAIL_ADDRESS = 'academic-grants@ethereum.org';
export const DEVCON_GRANTS_EMAIL_ADDRESS = 'grants@devcon.org';
export const LAYER_2_GRANTS_EMAIL_ADDRESS = 'layer2grants@ethereum.org';

// applicants tabs
export const APPLICANTS_TABS = ['Overview', 'Office Hours', 'Small Grants', 'Project Grants'];
export const APPLICANTS_TABS_MAP: TabsMap = {
  [APPLICANTS_URL]: 0,
  [OFFICE_HOURS_URL]: 1,
  [SMALL_GRANTS_URL]: 2,
  [PROJECT_GRANTS_URL]: 3,
  [OFFICE_HOURS_APPLY_URL]: 1,
  [OFFICE_HOURS_THANK_YOU_PAGE_URL]: 1,
  [SMALL_GRANTS_APPLY_URL]: 2,
  [SMALL_GRANTS_THANK_YOU_PAGE_URL]: 2,
  [PROJECT_GRANTS_APPLY_URL]: 3,
  [PROJECT_GRANTS_THANK_YOU_PAGE_URL]: 3
};

// about tabs
export const ABOUT_TABS = ['What We Support', 'Who We Support', 'How We Support'];
export const ABOUT_TABS_MAP: TabsMap = {
  [ABOUT_URL]: 0,
  [WHO_WE_SUPPORT_URL]: 1,
  [HOW_WE_SUPPORT_URL]: 2
};

// nav
export const NAV_LINKS: NavLink[] = [
  { href: HOME_URL, text: 'Home' },
  { href: APPLICANTS_URL, text: 'How to Apply' },
  { href: ABOUT_URL, text: 'About ESP' },
  { href: ESP_BLOG_URL, text: 'Blog' }
];

// external links
export const ETHRESEARCH_URL = 'https://ethresear.ch/';
export const DEVCON_URL = 'https://devcon.org/';
export const HCAPTCHA_VERIFY_URL = 'https://hcaptcha.com/siteverify';

// api
export const DOWNLOAD_APPLICATION_URL = '/projectGrantsApplication.docx';

// grants list
export const CURRENT_GRANTS_QUARTERS = ['3', '4'];

// proposal upload file size limit (4mb)
export const MAX_PROPOSAL_FILE_SIZE = 4194304;

// toast options
export const TOAST_OPTIONS: UseToastOptions = {
  position: 'top-right',
  duration: 5000,
  isClosable: true,
  containerStyle: {
    fontFamily: 'fonts.heading'
  }
};

// preview image
export const HOMEPAGE_HERO_MOBILE_URL =
  'https://esp.ethereum.foundation/images/homepage-hero-mobile.png';

export const LAYER_2_GRANTS_PREVIEW_URL =
  'https://esp.ethereum.foundation/images/layer-2-grants.png';

// Thank you and apply urls
export const GRANTS_URLS = [
  ACADEMIC_GRANTS_APPLY_URL,
  ACADEMIC_GRANTS_THANK_YOU_PAGE_URL,
  DEVCON_GRANTS_APPLY_URL,
  DEVCON_GRANTS_THANK_YOU_PAGE_URL
];
