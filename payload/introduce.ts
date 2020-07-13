import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '컴퓨터공학 학사 졸업예정자로서 머신러닝 개발자로 취직을 희망하고 있습니다. 데이터를 수집 및 분석하여 결정력 있는 신경망 네트워크를 구축하는 데 큰 관심이 있습니다. 다른 사람들이 쉽게 찾을 수 없는 특징들의 상관관계를 발견하여 가치를 창출해 내는 데이터사이언티스트가 되고자 하는 포부를 갖고 있습니다.',
    'Web, App, Game 분야에서 각각 개발자로 근무한 경험이 있으며, 다양한 프로그래밍 기술을 보유하고 있습니다. C++, Python, Javascript, Java 등을 사용하며 알고리즘 기법을 통한 문제 해결에 관심이 있습니다.',
    '대학 연구실이나 학원 및 독학을 통해 데이터분석 및 신경망 네트워크에 대한 공부를 하였으며, 여러 프로젝트를 통해 스스로 데이터를 수집하여 학습시킨 경험이 있습니다.',
    '자세한 사항은 아래 내용을 참고해 주세요.'

  ],
  sign: 'Lim Hwangyu',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
