import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    // GLN International 프로젝트
    {
      title: '속도 개선 프로젝트',
      startedAt: '2025-04',
      // endedAt: '2025-06',
      where: 'GLN International, HANA Financial Group',
      descriptions: [
        {
          content:
            '서비스 속도 개선을 위한 프로젝트로, 앱 초기 로딩 속도를 5ms에서 1.5ms로 단축시키는 작업',
          descriptions: [
            {
              content:
                '초기 로드하는 CSS 중에서 전역 CSS는 preload 처리하고, 나머지는 scoped CSS로 변경',
            },
            { content: '실제로 사용하지 않는 라이브러리 및 script 파일 제거' },
            { content: '커스텀 빌트인 함수를 일반 유틸 함수로 변경' },
            {
              content:
                '순서 보장할 필요없는 API 호출과 브릿지 통신을 Promise 객체로 변경하여 병렬 처리',
            },
          ],
        },
      ],
    },
    {
      title: '빠른 결제 개선 프로젝트',
      startedAt: '2025-04',
      endedAt: '2025-04',
      where: 'GLN International, HANA Financial Group',
      descriptions: [
        {
          content:
            '기존 빠른 결제 서비스의 이용을 증대시키기 위해, 빠른 결제 설정 진입점을 추가하는 작업(프로젝트 리더 겸업)',
          descriptions: [
            {
              content: '기획/디자인팀과의 긴밀한 협업 및 공통 채널 운영으로 이슈 누락 방지',
            },
            {
              content:
                '여러 파일에 분산되어 있던 빠른 결제 설정 로직을 통합 및 테스트 작성으로, 유지보수성 향상',
            },
            {
              content: '로그 분석을 통해 기능 사용률 변화 추적 및 기획 의도 검증',
            },
            {
              content: 'QA 프로세스 주도 및 회고를 통해 팀 협업 방식 개선',
            },
          ],
        },
      ],
    },
    {
      title: '성능 개선 및 기술 부채 해결 프로젝트',
      startedAt: '2024-10', // GLN 입사 후 시작일로 가정
      // endedAt: '진행 중이므로 생략 또는 현재 날짜', // 현재 진행 중이면 endedAt 생략 가능
      where: 'GLN International, HANA Financial Group',
      descriptions: [
        {
          content:
            '서비스 품질 향상 및 개발 효율성 증대를 목표로 성능 최적화 및 기술 부채 해결 주도',
        },
        {
          content: '주요 기술 제안 및 도입을 통한 실질적인 개선 효과 달성',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'Provide 주입 방식 빌드 크기 증가 이슈 분석 및 named export 방식 적용',
            },
            {
              content:
                'WeakMap 기반 SVG Icon 컴포넌트 시스템 제안 (아이콘 관리 용이성 및 앱 로딩 속도 개선)',
            },
            {
              content:
                'JQuery 의존성 제거 및 TypeScript 점진적 도입 (런타임 에러 감소 및 코드 유지보수성 향상)',
            },
            { content: 'Jest 테스트 환경 구축 및 단위 테스트 작성 (운영 안정성 확보)' },
            // { content: '서비스워커 기반 앱 자동 업데이트 플로우 제안' },
          ],
        },
        {
          content: '개발 편의성 향상을 위한 DX 개선 활동 전개',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'preMerge 단계 테스트 커버리지 검증 CI/CD 파이프라인 제안',
            },
            { content: 'useErrorLog 커스텀 훅 개발 (디버깅 효율성 증대)' },
            {
              content:
                '타이머 자동 초기화 훅 (useTimeout, useInterval) 개발 및 useInfiniteScroll 훅 안정화',
            },
            { content: 'API 응답 코드 가독성 및 관리 효율성 증대 (Enum, Const 객체 적용)' },
            { content: 'ESLint Custom Rule 정의 및 import order 적용 (코드 일관성 확보)' },
          ],
        },
        // 필요시 이 프로젝트의 다른 주요 내용 추가 가능
      ],
    },
    {
      title: '해외 송금 서비스 Vue3 마이그레이션 및 안정화',
      startedAt: '2024-07',
      endedAt: '2024-09',
      where: 'GLN International, HANA Financial Group',
      descriptions: [
        {
          content:
            '기존 해외 송금 서비스의 Vue 2에서 Vue 3로의 성공적인 마이그레이션 및 리팩토링 담당',
        },
        {
          content: '서비스 안정성 및 코드 품질 향상',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '운영 중이던 주요 버그 30여 건 해결 (IOS 스크롤 백화, 데이터 호출 미작동 등)',
            },
            { content: '불필요한 레거시 코드 제거 (파일당 평균 10줄 이상)' },
            { content: 'Composition API 기반 리팩토링으로 코드 가독성 및 재사용성 증대' },
          ],
        },
      ],
    },
    // 아이쿱 프로젝트
    {
      title: '닥터바이스 도입 문의 웹사이트 개발',
      startedAt: '2024-04',
      endedAt: '2024-05',
      where: '아이쿱',
      descriptions: [
        {
          content:
            '닥터바이스 서비스 확산을 위한 신규 도입 문의 웹사이트 개발 담당 (프론트엔드 개발)',
          // technologies: ['React', 'Vite', 'Vitest', 'React Testing Library', 'Zustand'],
        },
        {
          content: '웹사이트 런칭 후 서비스 도입 문의 증대 및 사용자 경험 개선',
          weight: 'MEDIUM',
          descriptions: [
            { content: '월 평균 도입 문의 건수 약 500건 이상 증가에 기여' },
            { content: 'Vitest, RTL 기반 테스트 코드로 코드 안정성 확보' },
            { content: 'Zustand 스토어 최적화로 불필요한 리렌더링 문제 해결' },
            { content: '재사용 모달 컴포넌트 리팩토링으로 개발 편의성 및 유지보수성 향상' },
            { content: 'IntersectionObserver 활용 이미지 지연 로딩 적용 (초기 로딩 성능 개선)' },
          ],
        },
        {
          content: '팀 문화 및 프로세스 개선 기여',
          descriptions: [
            { content: '정기 회의 및 스쿼드 소통 방식 제안/도입으로 협업 효율 증진' },
            { content: 'React 사내 스터디 주관으로 팀 기술 역량 강화 기여' },
          ],
        },
      ],
    },
    // 알파프라임 프로젝트
    {
      title: '지표분석 플랜제 도입 및 UI/UX 개편 프로젝트',
      startedAt: '2023-06',
      endedAt: '2023-08',
      where: '알파프라임',
      descriptions: [
        {
          content:
            '서비스 핵심 기능인 지표분석 서비스의 UI/UX 전면 개편 및 신규 BM(플랜제) 도입 주도 (메인 프론트엔드 개발 담당)',
          // technologies: ['Vue (Composables, Provide)', 'VueQuery', 'Pinia'], // 기술 스택 추가 예시 (IProject 인터페이스에 따라)
        },
        {
          content: '프로젝트 결과, 서비스 핵심 지표 대폭 개선 및 매출 증대에 크게 기여',
          // weight: 'HIGH', // 이 프로젝트는 성과가 매우 뛰어나므로 HIGH로 표시 가능
          descriptions: [
            { content: '개편 후 월간 조회수 195% 증가, 사용자 수 132% 증가 달성' },
            { content: '플랜 구독 매출이 전체 서비스 매출의 43.27% 차지 (핵심 수익원 성장 기여)' },
            { content: 'VueQuery 활용, 사용자 구독 상태별 실시간 데이터 접근 제어 구현' },
            {
              content:
                '업무 관리 시스템 개선 (상/하위 태스크 기반)으로 명세 추적 용이성 및 일정 관리 정확도 향상',
            },
          ],
        },
      ],
    },
    {
      title: '개발 문화 및 시스템 개선 주도 (리뷰 알림, Vite, Storybook, MonoRepo)',
      startedAt: '2022-09', // 가장 먼저 시작된 Vite/MonoRepo 기준으로
      endedAt: '2023-09', // 리뷰 알림 시스템 구축 완료 시점
      where: '알파프라임',
      descriptions: [
        {
          content:
            '개발 생산성, 코드 품질, 협업 효율 증진을 위한 다수의 시스템 개선 프로젝트 제안 및 도입',
        },
        {
          content: '사내 리뷰 할당 자동 알림 시스템 구축',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'GitHub Actions, API, Discord Webhook 활용 시스템 구현' },
            { content: '리뷰 누락 건수 주 평균 60% 감소 및 리뷰 속도 향상' },
          ],
        },
        {
          content: 'Vite 도입으로 개발 서버 구동 시간 약 98% 단축',
          weight: 'MEDIUM',
          descriptions: [
            { content: '기존 13,594ms → 182ms로 개선' },
            { content: 'Vite 플러그인 이슈 해결 및 커뮤니티 해결 방안 공유' },
          ],
        },
        {
          content: 'Storybook 기반 UI 시스템 구축',
          weight: 'MEDIUM',
          descriptions: [
            { content: '디자인팀과 협력하여 시스템 구축 및 운영' },
            { content: '디자인-개발 불일치 감소, 컴포넌트 재사용성 증대' },
          ],
        },
        {
          content: 'MonoRepo (Lerna, Yarn Workspace) 도입',
          weight: 'MEDIUM',
          descriptions: [
            { content: '분리된 레포지토리 통합 및 Git history 보존' },
            { content: '패키지 및 버저닝 구조 설계, 릴리즈 자동화로 코드 공유 및 관리 효율 증대' },
          ],
        },
      ],
    },
  ],
};

export default project;
