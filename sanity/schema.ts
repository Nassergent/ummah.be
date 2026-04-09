import { siteSettings } from './schemas/siteSettings';
import { homePage } from './schemas/homePage';
import { waqfConfig } from './schemas/waqfConfig';
import { fatwa } from './schemas/fatwa';
import { teamMember } from './schemas/teamMember';
import { donatieProject } from './schemas/donatieProject';
import { hisabRapport } from './schemas/hisabRapport';
import { faqItem } from './schemas/faqItem';
import { impactStory } from './schemas/impactStory';
import { nieuwsPost } from './schemas/nieuwsPost';

export const schemaTypes = [
  // Singletons
  siteSettings,
  homePage,
  waqfConfig,
  fatwa,
  // Collecties
  teamMember,
  donatieProject,
  hisabRapport,
  faqItem,
  impactStory,
  nieuwsPost,
];
