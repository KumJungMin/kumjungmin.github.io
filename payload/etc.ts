import { IEtc } from '../component/etc/IEtc';

const etc: IEtc.Payload = {
  disable: false,

  list: [
    {
      title: '글또(개발자 글쓰기 모임) 10기 운영진',
      subTitle:
        '약 600명 규모의 개발자 글쓰기 모임에서 큐레이션 크루로서, 오픈소스 관련 글 큐레이션 및 글 검색 사이트 제작',
      startedAt: '2024-11',
      endedAt: '2025-04',
    },
    {
      title: '오픈소스 기여 스터디 8기, 운영진',
      subTitle:
        '약 20명 규모의 오픈소스 기여 스터디에서 운영진으로서, 기여자를 위한 이슈 분석 사이트 제작 및 운영 관리',
      startedAt: '2025-05',
    },
    {
      title: '멋쟁이 사자처럼 7기 운영진',
      subTitle:
        '충남대 멋쟁이사자처럼 7기에서 충남대학교 학생을 대상으로 django, django-rest-api, reactJS 교육과 스터디를 진행',
      startedAt: '2019-03',
      endedAt: '2019-08',
    },
  ],
};

export default etc;
