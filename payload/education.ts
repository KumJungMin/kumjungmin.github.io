import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,
  list: [
    {
      title: '충남대학교 (Chungnam National University)',
      subTitle: '공학사 (B.S.) - 환경공학/ICT융합 부전공', // 또는 '환경공학 학사, ICT융합 부전공'
      startedAt: '2018-03', // 부전공 시작 시점을 기준으로 하거나, 주전공 입학 시점으로 통일할 수도 있습니다.
      endedAt: '2020-02', // 부전공 졸업 시점
    },
    {
      title: '충남대학교 (Chungnam National University)',
      subTitle: '이학사 (B.S.) - 식품영양학과 (주전공)', // 또는 '식품영양학 학사'
      startedAt: '2015-03', // 주전공 입학 시점
      endedAt: '2020-02', // 최종 졸업 시점
    },
  ],
};

export default education;
