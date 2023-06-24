import IndegoLogo from '@/assets/captionLogo/indego-small.svg';
import Github from '@/assets/captionLogo/github-small.svg';
import Docs from '@/assets/captionLogo/docs-small.svg';
import IndeGo from '@/assets/projectSpriteImg/Indego.png';

import BanggyulLogo from '@/assets/captionLogo/banggyul-logo.svg';
import BanggyulSprite from '@/assets/projectSpriteImg/Banggyul.png';

import GoodFELogo from '@/assets/captionLogo/goodfe-small.svg';
import GoodFESprite from '@/assets/projectSpriteImg/GoodFE.png';
import BmtiLogo from '@/assets/captionLogo/bmti-small.svg';
import BmtiSprite from '@/assets/projectSpriteImg/BMTI.png';

import TeamtodoSprite from '@/assets/projectSpriteImg/TeamTodo.png';
import StackOverFlowImg from '@/assets/projectSpriteImg/StackoverFlow.png';

export const Indego = [
  {
    projectPreview: {
      caption: 'AI를 이용한 모의 기술 면접 서비스',
      title: 'Indego',
      subDesc:
        '많은 프론트엔드 개발자 준비생들이 열심히 기술 면접을 준비하지만,막상 이를 시험해볼 공간은 몹시 제한적입니다. AI 면접관을 통해 Tech Stack에 대한 면접 준비를 실전처럼 해보는 것은 어떨까요? ',
      mainDesc:
        'Indego는 Tech Stack을 직접 선택하여 모의 기술 면접을 진행할 수 있는 서비스입니다. 랜덤으로 제공되는 질문과 타이머를 통해 사용자가 실전과 유사한 상황에서도 침착하게 답변할 수 있는 역량을 향상시킬 수 있습니다.',
      Techs: [
        'TypeScript',
        'Styled-Components',
        'React',
        'OpenAi',
        'React-Query',
        'Recoil',
        'Express',
        'Sqlite3',
        'Sequelize',
      ],
      Roles: ['FullStack-Developer'],
    },
    imgLink: {
      github: [Github, 'github', 'https://github.com/For-The-Dev/Interview-Defence-Go-Client'],
      project: [IndegoLogo, 'IndeGo', 'https://interview-defence-go-client.vercel.app'],
      docs: [Docs, 'Docs', 'https://bit.ly/3Bog9HS'],
      main: IndeGo,
    },
  },
  {
    imgContainer: {
      src: IndeGo,
      steps: 4,
    },
    PageDesc: [
      {
        title: '메인 페이지',
        content: [
          'Github 로그인을 통한 간편 회원가입',
          '스택 선택을 통한 랜덤 면접 진행',
          '검색창을 이용한 스택 추가',
        ],
      },
      {
        title: '인터뷰 페이지',
        content: ['실시간 타이머를 통한 실제 면접 압박감 및 유사 경험 제공'],
      },
      {
        title: '결과 페이지',
        content: ['면접 진행 후 면접에 대한 답변 확인 가능'],
      },
      {
        title: '마이페이지',
        content: ['진행했던 면접에 대한 답변 히스토리 제공', '문제 재도전을 통한 이해도 향상'],
      },
    ],
  },
];

export const Banggyul = [
  {
    projectPreview: {
      caption: '제주도 게스트하우스 호스팅-예약 서비스',
      title: '방귤방귤',
      subDesc:
        '제주도 한달살이가 유행인 요즘, 게스트하우스를 예약하고, 후기를 찾아볼 수 있는 서비스는 매우 한정적이고 불편합니다. 방귤방귤 서비스를 통해 보다 쉽고 간편하게 숙소 예약과 호스팅을 해보는건 어떨까요?',
      mainDesc:
        '방귤방귤은 사용자에게 맞춤형 게스트 하우스 추천과 간편한 예약 서비스를 제공합니다. 호스트는 템플릿을 사용하여 손쉽게 숙소를 호스팅할 수 있습니다. 사용자와 호스트 모두에게 편리한 숙소 호스팅과 예약 경험을 제공합니다.',
      Techs: ['React', 'TypeScript', 'Tailwind-Css', 'Redux'],
      Roles: ['Team Leader', 'Frontend-Developer'],
    },
    imgLink: {
      github: [Github, 'github', 'https://github.com/codestates-seb/seb40_main_002'],
      project: [BanggyulLogo, 'Banggyul', 'https://seb40-main-002.vercel.app'],
      docs: [Docs, 'Docs', 'https://bit.ly/3YaDNAk'],
      main: BanggyulSprite,
    },
  },
  {
    imgContainer: {
      src: BanggyulSprite,
      steps: 5,
    },
    PageDesc: [
      {
        title: '메인 페이지',
        content: [
          '호스팅 된 숙소 확인 및 원하는 위치, 태그, 날짜별 숙소 검색 \n (회원가입 시 입력한 태그 기반 숙소 추천)',
        ],
      },
      {
        title: '마이페이지',
        content: [
          '개인 정보 수정 (태그, 닉네임, 프로필 사진)',
          '숙소 이용자 - 찜한 숙소, 후기 내역, 예약 내역 조회',
          '호스트 - 등록한 숙소 확인 및 새로운 게스트하우스 등록',
        ],
      },
      {
        title: '회원가입 페이지',
        content: ['소셜 로그인을 통한 간편 회원가입(카카오, 구글, 네이버)'],
      },
      {
        title: '숙소 상세 페이지, 예약 결제 페이지, 후기 작성 페이지',
        content: [
          '숙소 상세 정보 확인 (예약 가능 날짜, 위치, 객실 정보 등)',
          '이용한 숙소 후기 작성 및 작성 후기 조회',
        ],
      },
      {
        title: '숙소 호스팅 페이지',
        content: [
          '템플릿을 이용한 간편한 숙소 호스팅(위치, 객실 정보, 어메니티 등)',
          '관리자 마이페이지를 통한 숙소 정보 수정 가능',
        ],
      },
    ],
  },
];

export const GoodFE = [
  {
    projectPreview: {
      caption: '코스를 수료한 동기들이 마음을 주고 받을 수 있는 편지 서비스',
      title: 'GoodFE',
      subDesc:
        '함께한 동료들 덕분에 6개월 동안 많은 것을 배우고 성장할 수 있었습니다. 서로를 격려하고 응원하여 이겨내던 순간들을 회상하며, 부끄러워 차마 하지 못했던 응원과 감사의 말을 편지로 전해보는 건 어떨까요?',
      mainDesc:
        'GoodFE는 코드스테이츠 FE40기 동료들을 위한 특별한 편지 서비스입니다. 추억을 회상할 수 있는 친숙한 UI를 제공하여 동료들에게 마음을 전할 수 있는 특별한 공간을 만들고자 했습니다.',
      Techs: ['Next.js', 'JavaScript', 'Styled-component', 'Recoil'],
      Roles: ['Front Leader', 'Frontend-Developer'],
    },
    imgLink: {
      github: [Github, 'github', 'https://github.com/Quick-Project/ddoboja'],
      project: [GoodFELogo, 'GoodFE', 'https://ddoboja.vercel.app'],
      docs: [Docs, 'Docs', 'https://bit.ly/3ZcmQXx'],
      main: GoodFESprite,
    },
  },
  {
    imgContainer: {
      src: GoodFESprite,
      steps: 6,
    },
    PageDesc: [
      {
        title: '메인 페이지',
        content: [
          '검색 창을 통한 개인 편지 조회',
          '아이콘을 이용한 편지 서비스 진입',
          'CodeState에 제출된 깃허브 아이디를 이용한 사용자 식별',
        ],
      },
      {
        title: '개인 편지 작성 페이지(Maekjoo)',
        content: [
          '동기 이름을 입력하여 편지 작성',
          '하단 째깍이를 이용하여 다크모드 조정 가능(특정 조건을 충족 시 이벤트 애니메이션 동작)',
        ],
      },
      {
        title: '롤링페이퍼 작성 페이지(Progamers)',
        content: ['FE 40기 동기 전체에게 롤링페이퍼 작성'],
      },
      {
        title: '롤링 페이퍼 조회 페이지(VsCodeStates)',
        content: ['작성된 롤링페이퍼 열람 가능'],
      },
    ],
  },
];

export const Bmti = [
  {
    projectPreview: {
      caption: '사용자의 성향을 분석하여 칵테일을 추천해주는 서비스',
      title: 'BMTI',
      subDesc:
        '칵테일바에서 어떤 칵테일을 마실 지 몰라 고민하셨나요? 혹은 내 성향과 맞는 칵테일을 찾고 계신가요? 간단한 설문을 통해 나와 맞는 칵테일을 찾아보세요!',
      mainDesc:
        'BMTI는 사용자의 취향을 분석하여 맞춤 칵테일을 추천하는 서비스입니다. 설문조사를 통해 사용자의 선호도와 취향을 파악하고, 그에 맞게 다양한 칵테일을 추천해드립니다.',
      Techs: ['React', 'JavaScript', 'Styled-component'],
      Roles: ['Frontend-Developer'],
    },
    imgLink: {
      github: [Github, 'github', 'https://github.com/Quick-Project/BMTI-DLink '],
      project: [BmtiLogo, 'BMTI', 'https://quick-project.github.io/BMTI-DLink/'],
      docs: [Docs, 'Docs', 'https://bit.ly/3SCzzjQ'],
      main: BmtiSprite,
    },
  },
  {
    imgContainer: {
      src: BmtiSprite,
      steps: 5,
    },
    PageDesc: [
      {
        title: '메인 페이지',
        content: ['버튼을 이용한 설문조사 페이지 이동'],
      },
      {
        title: '설문조사 페이지',
        content: ['진행도 확인을 위한 상단 Progress Bar 제공'],
      },
      {
        title: '결과 페이지',
        content: [
          '취향에 맞는 칵테일 추천 및 유래 제공',
          '사용자 취향 수치화 및 분석 결과 제공',
          '프로젝트 홍보 및 칵테일 정보 공유를 위한 SNS 공유 기능 제공',
        ],
      },
    ],
  },
];

export const TeamTodo = {
  projectPreview: {
    caption: '',
    title: 'Team Todo',
    subDesc: '',
    mainDesc:
      'Team Todo는 FireBase의 Realtime Database를 이용하여 실시간으로 팀원의 업무진행 사항을 파악하기 위해 제작되었습니다.',
    Techs: ['React', 'JavaScript', 'TailwindCss', 'Firebase'],
    Roles: ['Solo-Project'],
  },
  imgLink: {
    github: [Github, 'github', 'https://github.com/billy5982/firebase-todo'],
    docs: [Docs, 'Docs', 'https://bit.ly/3kHA67t'],
    project: [],
    main: TeamtodoSprite,
    steps: 4,
  },
};

export const StackOver = {
  projectPreview: {
    caption: '',
    title: 'StackOverflow 클론코딩',
    subDesc: '',
    mainDesc: 'StackOverflow 클론 코딩을 통해 처음으로 백엔드와의 협업을 진행할 수 있었습니다.',
    Techs: ['React', 'JavaScript', 'Styled-Component', 'Redux'],
    Roles: ['Team Leader', 'Frontend-Developer'],
  },
  imgLink: {
    github: [Github, 'github', 'https://github.com/codestates-seb/seb40_pre_024'],
    docs: [],
    project: [],
    main: StackOverFlowImg,
    steps: 0,
  },
};

export type SideProjectType = typeof TeamTodo;
export type ProjectDataType = typeof Indego;
export type ProjectPreviewType = (typeof Indego)[0];
export type ImgLinkType = (typeof Indego)[0]['imgLink'];
export type PreviewType = (typeof Indego)[0]['projectPreview'];
export type ProjectDetail = (typeof Indego)[1];
export type ProjectDetailImg = (typeof Indego)[1]['imgContainer'];
export type ProjectDetailDesc = (typeof Indego)[1]['PageDesc'];
