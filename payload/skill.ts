import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    {
      title: 'Javascript',
      level: 3,
    },
    {
      title: 'Typescript',
      level: 3,
    },
    {
      title: 'CSS/SCSS',
      level: 3,
    },
    {
      title: 'Python',
      level: 2,
    },
    {
      title: 'C',
      level: 2,
    },
    {
      title: 'SQL',
      level: 1,
    },
  ],
};

const Frameworks: ISkill.Skill = {
  category: 'Frameworks',
  items: [
    {
      title: 'Vue.js',
      level: 3,
    },
    {
      title: 'React.js',
      level: 2,
    },
  ],
};

const TestingTools: ISkill.Skill = {
  category: 'Testing Tools',
  items: [
    {
      title: 'Vitest/Jest',
      level: 3,
    },
    {
      title: 'test-utils',
      level: 3,
    },
    {
      title: 'Testing Library',
      level: 2,
    },
    {
      title: 'Playwright',
      level: 2,
    },
  ],
};

const CICDandCollaboration: ISkill.Skill = {
  category: 'CICD & Collaboration',
  items: [
    {
      title: 'GitHub Actions',
      level: 3,
    },
    {
      title: 'Storybook',
      level: 3,
    },
    {
      title: 'Jira/Notion',
      level: 3,
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [programmingLanguages, Frameworks, TestingTools, CICDandCollaboration],
  tooltip:
    '3: 내부 원리를 이해하고, 제품 개발 가능 수준\n2: 기본적인 제품 개발 가능 수준\n1: 기초 수준',
};

export default skill;
