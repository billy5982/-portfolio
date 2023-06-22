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
  {
    title: 'How에서 Wow로',
    desc: `'어떻게?'라는 질문을 세우고 문제에 접근하며 해결해나갑니다. 이 과정을 통해 문제의 본질에 한발 다가설 수 있었고, 문제점과 보완점을 찾아 개선해나갈 수 있었습니다. 검색과 디버깅을 통해 해결책을 강구하고, 새로운 방식의 코드를 작성하기 위해 도전하고 있습니다.`,
  },
  {
    title: 'Success를 위한 Process',
    desc: `명확한 목표와 방향성은 프로젝트의 완성도를 높이는데 중요하다고 생각합니다. 팀원들과 함께 업무의 중요도를 나누고, 각자의 진행 상황을 공유하여 효율적인 업무 처리를 위해 노력했습니다. 주기적인 커뮤니케이션을 통해 팀원들의 다양한 의견을 수렴하고 조율하여, 팀의 목적 달성을 위해 협력하고 노력합니다.`,
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
