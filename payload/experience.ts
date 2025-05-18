import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: 'GLN International, HANA Financial Group',
      link: 'https://www.glninternational.com/',
      introduce:
        '태국, 일본, 라오스 등, 여러 국가에서 QR 결제와 ATM 출금 서비스를 제공하는 금융 회사.',
      positions: [
        {
          title: 'Frontend Developer / 매니저',
          startedAt: '2024-08',
          descriptions: [
            '빌드 사이즈 최적화 및 메모리 누수 지점 분석을 통해 초기 로딩 시간 5초에서 2.5초로 50% 단축',
            '단위 테스트 도입으로 테스트 커버리지 60%를 확보하여 리팩토링 시 안정성을 대폭 향상시키고, 배포 전후 관련 버그 발생률을 감소시킴',
            'ESLint Custom Rule 및 Husky hook을 적용하여 코드 품질을 정비하고 일관성을 확보함으로써 코드 리뷰 시간 단축 및 잠재적 오류 감소 효과를 달성',
            '해외 송금 모듈의 Vue 2 → Vue 3 마이그레이션을 성공적으로 완료하고 컴포저블 방식으로 리팩토링하여 코드 이해도 증가 및 관련 이슈 처리 시간 단축 등 유지보수성을 향상',
            '프로젝트 마무리 회고 밋업과 기능 검증을 위한 1,2차 QA 시스템 정착을 주도하여 배포 안정성 및 팀 협업 효율 증대에 기여',
          ],
          skillKeywords: [
            'Vue.js',
            'Typescript',
            'Javascript',
            'Jest',
            'vue/test-utils',
            'Playwright',
          ],
        },
      ],
    },
    {
      title: '아이쿱',
      link: 'https://intro.doctorvice.co.kr/',
      introduce:
        '1차 의원 중심으로 고혈압 · 당뇨병 환자를 위한 EMR 웹 서비스를 운영하는 의료 IT 스타트업.',
      positions: [
        {
          title: 'Frontend Developer / 대리',
          startedAt: '2024-01',
          endedAt: '2024-08',
          descriptions: [
            'Vitest를 기반으로 UI 및 비즈니스 로직 테스트를 진행하여 리팩토링 안정성을 확보',
            'React 기반 신규 가입 기능 개발을 담당했으며, 회고 문화를 제안하여 팀의 애자일 역량 강화에 일조',
            '매주 팀 회의를 주도하여 기술 공유 문화를 활성화하고, 기술 부채 관리 프로세스를 수립',
          ],
          skillKeywords: [
            'Vue.js',
            'React.js',
            'Typescript',
            'Javascript',
            'Vitest',
            'React Testing Library',
          ],
        },
      ],
    },
    {
      title: '알파프라임',
      link: 'https://www.alphasquare.co.kr/home/special-factor?code=002360&factor=returns_top',
      introduce: 'MAU 10만 이상인, WTS 기반 주식 거래 서비스를 하는 금융 스타트업',
      positions: [
        {
          title: 'Frontend Developer',
          startedAt: '2020-10',
          endedAt: '2023-11',
          descriptions: [
            '주요 서비스의 핵심 기능(웹/앱 서비스, Canvas 기반 실시간 차트 라이브러리 등) 15건 이상 개발 주도',
            'Vite 도입을 통해 전체 빌드 시간을 기존 45초에서 8초로 약 83% 단축하여 개발 생산성 향상',
            'MonoRepo 환경 및 리뷰 알림 봇(GitHub Actions + Discord)을 구축하여 개발 생산성 및 팀 협업 효율 증대',
            'Storybook 기반 UI 시스템을 제안하고 성공적으로 구축하여 디자인팀과 개발팀 간의 불일치를 줄이고 컴포넌트 재사용성 증대',
            '기능 명세서, 인터페이스 정의, 코딩 컨벤션 재정립을 주도하여 신규 입사자의 온보딩 기간을 단축하고 개발 문서의 표준화',
          ],
          skillKeywords: ['Vue.js', 'Chart.js', 'Javascript'],
        },
      ],
    },
  ],
};

export default experience;
