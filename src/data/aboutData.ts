import JS from '@stackIcon/JS.svg';
import TS from '@stackIcon/TS.svg';
import React from '@stackIcon/React.svg';
import ReactQuery from '@stackIcon/React-Query.svg';
import Recoil from '@stackIcon/Recoil.svg';
import Redux from '@stackIcon/Redux.svg';
import Tailwindcss from '@stackIcon/Tailwindcss.svg';
import StyledComponent from '@stackIcon/StyledComponent.svg';
import Github from '@stackIcon/Github.svg';
import Figma from '@stackIcon/Figma.svg';
import Notion from '@stackIcon/Notion.svg';

export const aboutData = [
  // {
  //   title: '안정적인 서비스에 대해 고민하고 나아가는 개발자, 이명규입니다.',
  //   desc: `안정적인 서비스는 자연스러운 흐름과 서비스의 성능이 중요하다고 생각합니다. Userflow를 작성하여 흐름을 설계하고, React-Query의 적절한 캐싱을 통해 성능을 향상 시킬 수 있습니다. 이외에도 리액트의 렌더링 조건과 memoization Hook, Code Splitting 등 최적화 기법에 대해 공부하고 프로젝트에 적용하여 안정적인 서비스를 제공하고자 합니다.`,
  // },
  {
    title: '기록을 통한 성장을 지향합니다.',
    desc: `새로운 지식을 배우거나 이슈가 발생했을 때 당시 상황과 함께 학습 내용을 기록합니다. 순간의 감정과 함께 지식을 기록함으로써 오래 기억하고, 반복된 실수를 최소화했습니다. 결과적으로 발생한 상황에 다양한 시도를 해보며, 문제 해결에 적극적으로 기여할 수 있었습니다.`,
  },
  {
    title: 'Success를 위한 Process',
    desc: `명확한 목표와 방향성은 프로젝트의 완성도를 높이는 데 중요하다고 생각합니다. 데일리 스크럼을 적극적으로 활용하여 작업 전에 팀원들과 함께 작업 내용과 우선순위를 정하였습니다. 또한, 문제 해결에 오랜 시간이 걸리거나 풀리지 않는 경우 즉각적으로 팀원들과 공유하여 시간을 효율적으로 사용하였습니다.`,
  },
];

export const techStack = [
  {
    stack: 'JavaScript',
    stackImg: JS,
    stackdesc: [
      'ES6 이후 문법 및 호이스팅/스코프 체인,비동기 처리 등 이해',
      'Array의 내장 함수(map, filter, reduce 등)를 이용한 데이터 조작',
    ],
  },
  {
    stack: 'TypeScript',
    stackImg: TS,
    stackdesc: [
      'Type Aliases, 인터페이스, 제네릭 등의 개념 이해',
      'JSX 타입 체크 ,리액트 Hook의 타입 추론 경험',
    ],
  },
  {
    stack: 'React',
    stackImg: React,
    stackdesc: [
      'React Hooks(useEffect,useState)를 이용한 함수형 컴포넌트 작성',
      'Custom hook을 이용한 코드 중복 제거 및 로직 재사용성 향상',
      'Axios, Fetch API를 이용한 서버 API 연동 구현',
    ],
  },
  {
    stack: 'React-Query',
    stackImg: ReactQuery,
    stackdesc: [
      'useQuery, useMutation Hook을 이용하여 서버 데이터 관리와 처리를 경험',
      '상황에 따라 invalidateQueries, refetchQueries를 이용하여 데이터를 최신 상태로 유지',
      '프로젝트 특성과 요구사항에 맞게 QueryClient의 defaultOptions을 적용',
    ],
  },
  {
    stack: 'Recoil',
    stackImg: Recoil,
    stackdesc: ['atom과 useRecoilState, useRecoilValue를 이용한 상태 관리'],
  },
  {
    stack: 'Redux',
    stackImg: Redux,
    stackdesc: ['Action, Reducer, useDispatch를 이용한 상태 관리'],
  },
  {
    stack: 'Tailwindcss',
    stackImg: Tailwindcss,
    stackdesc: ['CSS 및 반응형 웹 적용'],
  },
  {
    stack: 'Styled-Component',
    stackImg: StyledComponent,
    stackdesc: ['CSS 및 반응형 웹 적용'],
  },
  {
    stack: 'Github',
    stackImg: Github,
    stackdesc: [
      'git-flow 브랜치 전략 및 코드 confilct 해결 경험',
      'pull request와 코드 리뷰를 통한 협업 경험',
    ],
  },
  {
    stack: 'Figma',
    stackImg: Figma,
    stackdesc: ['Userflow, 프로젝트 프로토타입 제작 및 관리'],
  },
  {
    stack: 'Notion',
    stackImg: Notion,
    stackdesc: [
      '개인적인 TIL 작성 및 일정 관리',
      '프로젝트 관련 문서 작성 및 공유',
      '지식공유 및 회고록 작성',
    ],
  },
];
