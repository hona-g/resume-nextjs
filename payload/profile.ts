import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faUser, faComment } from '@fortawesome/free-regular-svg-icons';
import image from '../asset/_sample.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: 'Lim Hwan Gyu',
    small: '(임환규)',
  },
  contact: [
    {
      title: 'lhwanstar@gmail.com',
      link: '#',
      icon: faEnvelope,
    },
    {
      title: 'hwan9yu (카카오톡)',
      icon: faComment,
      badge: true,
    },
    {
      title: 'https://github.com/lhwanstar',
      link: 'https://github.com/lhwanstar',
      icon: faGithub,
    }
  ],
  notice: {
    title: "입사 지원용으로 공개한 페이지입니다.",
    icon: faUser,
  },
};

export default profile;
