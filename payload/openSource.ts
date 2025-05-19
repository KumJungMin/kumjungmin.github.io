import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { IOpenSource } from '../component/openSource/IOpenSource';

const openSource: IOpenSource.Payload = {
  disable: false,
  description: {
    icon: faGithub,
    linkTitle: '기여 목록 자세히보기',
    link: 'https://github.com/KumJungMin/KumJungMin/blob/main/contribution.md',
  },
  list: [
    {
      title: 'PrimeVue (primefaces/primevue)',
      descriptions: [
        {
          content: 'Vue UI Component Library: 버그 수정 및 개선을 위한 다양한 기여를 했습니다.',
        },
        {
          content: 'Key contributions include:',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Resolved issues in Calendar, DatePicker, DataTable, Dropdown, Accordion, TreeSelect, Menubar, Carousel, and DynamicDialog components.',
            },
            {
              content:
                'Improved component behavior (e.g., scroll blocking, overlay positioning, event handling, keyboard navigation, data updates).',
            },
            {
              content:
                'Enhanced date/time selection logic, including range highlighting and input validation.',
            },
            {
              content:
                'Refactored and optimized component internals (e.g., ResizeObserver for autoResize, passthrough props).',
            },
            // { content: 'Example: Fixed issue preventing scroll unblock when multiple dialogs are open (PR #5854).' }, // 구체적 예시 한두개
            // { content: 'Example: Enhanced DataTable to apply updated cell value after sorting (PR #6984).' },
          ],
        },
        {
          content:
            'Participated in discussions, proposing solutions and new features (e.g., Checkbox indeterminate option, Calendar parameter cleanup).',
        },
        {
          content: 'https://github.com/primefaces/primevue',
          href: 'https://github.com/primefaces/primevue',
        },
      ],
    },
    {
      title: 'PrimeReact (primefaces/primereact)',
      descriptions: [
        {
          content: 'React UI Component Library: 버그 수정 및 개선을 위한 다양한 기여를 했습니다.',
        },
        {
          content: 'Key contributions include:',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Addressed bugs in Calendar, DataTable, Dropdown, TreeTable, MultiSelect, AutoComplete, OrderList, Picklist, InputOtp, InputMask, and Galleria components.',
            },
            {
              content:
                'Improved user experience (e.g., keyboard navigation, date/time selection, drag-and-drop, focus management).',
            },
            {
              content:
                'Enhanced component stability and reliability (e.g., event handling, state updates, prop validation).',
            },
            {
              content:
                'Refined component styling and theming (e.g., DataTable footer border in SASS theme).',
            },
            // { content: 'Example: Fixed TreeTable to highlight rows selected with checkbox (PR #7406).' },
            // { content: 'Example: Ensured correct year/month range highlighting in Calendar (PR #6760, #6759).' },
          ],
        },
        {
          content: 'https://github.com/primefaces/primereact',
          href: 'https://github.com/primefaces/primereact',
        },
      ],
    },
    {
      title: 'Ant Design (ant-design/ant-design)',
      descriptions: [
        {
          content: 'React UI library: 버그 수정을 위한 기여를 했습니다.',
        },
        {
          content:
            'Improved documentation for TimePicker and DatePicker components by adding guides for the `needConfirm` option.',
          // descriptions: [ // 필요시 PR 링크 명시
          //   { content: 'Added needConfirm option guide to TimePicker (PR #48945).' },
          //   { content: 'Updated needConfirm option guide to DatePicker (PR #48967).' },
          // ]
        },
        {
          content: 'https://github.com/ant-design/ant-design',
          href: 'https://github.com/ant-design/ant-design',
        },
      ],
    },
    {
      title: 'Vue.js Ecosystem',
      descriptions: [
        {
          content: 'Vue.js: Vue 3 공식 문서와 더불어 관련 라이브러리의 문서 개선에 기여했습니다.',
        },
        {
          content: 'Key contributions:',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'vue-i18n-next: Added pnpm installation guide to documentation (PR #1676).',
            },
            { content: '@vue/core-docs: Added error type guidance for defineProps (PR #2697).' },
            { content: '@vue/core-docs: Added watcher `once` option guide (PR #2698).' },
          ],
        },
        // { // vue-scroll-picker는 개별 항목으로 빼거나 여기에 포함
        //   content: 'vue-scroll-picker: Suggested `disable` property to prevent scrolling on specific items (Issue #816).',
        //   href: 'https://github.com/wan2land/vue-scroll-picker'
        // }
      ],
    },
    {
      title: 'HeroUI (heroui-inc/heroui)',
      descriptions: [
        {
          content: 'React UI Component Library: 버그 수정 및 개선을 위한 기여를 했습니다.',
        },
        {
          content: 'Submitted PRs to fix component behavior in Firefox and improve accessibility.',
          descriptions: [
            {
              content:
                'Improved AutoComplete component behavior by ensuring focused item matches selected item after filtering/selection (PR #5290).',
            },
            {
              content:
                'Prevented year/month change in `showMonthAndYearPickers` mode (Firefox specific, PR #3088).',
            },
            {
              content:
                'Applied `inert` attribute according to `isHeaderExpanded` for better accessibility (PR #3087).',
            },
          ],
        },
        {
          content: 'https://github.com/nextui-org/nextui',
          href: 'https://github.com/nextui-org/nextui',
        },
      ],
    },
    {
      title: 'Other Contributions & Suggestions',
      descriptions: [
        {
          content: '여러 라이브러리에서 버그 제안, 대체 솔루션 제안 등의 기여를 했습니다.',
        },
        {
          content: 'Examples include:',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'jshttp/mime-types: Suggested solution for path browser compatibility error in Vite (Issue #124).',
            },
            {
              content:
                'LouisMazel/maz-ui: Suggested enhancements for arrow key support and value override (Issue #1067).',
            },
            {
              content:
                'indielayer/ui: Suggested feature to keep notification open on hover and reported modal width issue (Issue #83).',
            },
            {
              content:
                'wan2land/vue-scroll-picker: Suggested `disable` property for item scroll prevention (Issue #816).',
            },
          ],
        },
      ],
    },
  ],
};

export default openSource;
