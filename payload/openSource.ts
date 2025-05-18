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
          content:
            'Vue UI Component Library: Actively contributed многочисленные bug fixes and feature enhancements.',
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
          content:
            'React UI Component Library: Contributed a wide range of bug fixes and improvements.',
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
          content: 'A popular UI design language and React UI library.',
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
          content: 'Contributed to the official Vue.js documentation and related libraries.',
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
      title: 'NextUI (nextui-org/nextui)',
      descriptions: [
        {
          content: 'Beautiful, fast and modern React UI library.',
        },
        {
          content: 'Submitted PRs to fix component behavior in Firefox and improve accessibility.',
          descriptions: [
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
      title: 'HeroUI (heroui-inc/heroui)',
      descriptions: [
        {
          content: 'A Tailwind CSS UI Kit with a focus on simplicity and ease of use.',
        },
        {
          content:
            'Improved AutoComplete component behavior by ensuring focused item matches selected item after filtering/selection (PR #5290).',
        },
        {
          content: 'https://github.com/heroui-inc/heroui',
          href: 'https://github.com/heroui-inc/heroui',
        },
      ],
    },
    {
      title: 'Other Contributions & Suggestions',
      descriptions: [
        {
          content:
            'Actively participated in various open-source projects by reporting issues, suggesting features, and proposing solutions.',
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
