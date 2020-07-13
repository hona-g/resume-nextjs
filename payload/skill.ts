import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Development',
  items: [
    {
      title: 'C/C++',
      level: 3,
    },
    {
      title: 'Python',
      level: 3,
    },
    {
      title: 'Java',
      level: 3,
    },
    {
      title: 'MySQL',
      level: 2,
    },
    {
      title: 'Node/React js',
      level: 2,
    },
    {
      title: 'AWS',
      level: 2,
    },
    {
      title: 'Unity Engine',
      level: 2,
    },
    {
      title: 'CUDA',
      level: 1,
    },
    {
      title: 'MongoDB',
      level: 1,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'AI/ML',
  items: [
    {
      title: 'Machine Learning',
    },
    {
      title: 'Computer Vision',
    },
    {
      title: 'Deep Neural Network',
    },
    {
      title: '데이터 시각화',
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Algorithms',
    },
    {
      title: 'Statistics',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, etc],
  tooltip: '1: 기초 수준\n2: 사용 가능\n3: 능숙함',
};

export default skill;
