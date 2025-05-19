import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faBlogger, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
// import image from '../asset/sample_tux.png';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image: '',
  name: {
    title: '금정민',
    small: '(Lux)',
  },
  contact: [
    {
      title: 'today.as.fresh@gmail.com',
      link: 'mailto:today.as.fresh@gmail.com',
      icon: faEnvelope,
    },
    {
      link: 'https://github.com/KumJungMin',
      icon: faGithub,
    },
    {
      link: 'http://www.linkedin.com/in/jungmin-lux',
      icon: faLinkedin,
    },
    {
      link: 'https://mong-blog.tistory.com',
      icon: faBlogger,
    },
  ],
  notice: {
    title: '연락은 이메일 혹은 링크드인 메시지로 부탁드립니다 :)',
    icon: faBell,
  },
};

export default profile;
