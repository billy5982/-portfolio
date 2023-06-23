import IndegoLogo from '@/assets/captionLogo/indego-small.svg';
import Github from '@/assets/captionLogo/github-small.svg';
import Docs from '@/assets/captionLogo/docs-small.svg';
import IndeGo from '@/assets/projectSpriteImg/Indego.png';

export const Indego = [
  {
    projectPreview: {
      caption: 'AI를 이용한 모의 기술 면접 서비스',
      title: 'Indego',
      subDesc:
        '많은 프론트엔드 개발자 준비생들이 열심히 기술 면접을 준비하지만,막상 이를 시험해볼 공간은 몹시 제한적입니다. AI 면접관을 통해 Tech Stack에 대한 면접 준비를 실전처럼 해보는 것은 어떨까요? ',
      mainDesc:
        'Indego는 Tech Stack을 직접 선택하여 모의 기술 면접을 진행할 수 있는 서비스입니다. 랜덤으로 제공되는 질문과 타이머를 통해 사용자가 실전과 유사한 상황에서도 침착하게 답변할 수 있는 역량을 향상시킬 수 있습니다.',
      Techs: ['TypeScript', 'Styled-Components', 'React', 'OpenAi', 'React-Query', 'Recoil'],
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
export type ProjectDataType = typeof Indego;
export type ProjectPreviewType = (typeof Indego)[0];
export type ImgLinkType = (typeof Indego)[0]['imgLink'];
export type PreviewType = (typeof Indego)[0]['projectPreview'];
export type ProjectDetail = (typeof Indego)[1];
export type ProjectDetailImg = (typeof Indego)[1]['imgContainer'];
export type ProjectDetailDesc = (typeof Indego)[1]['PageDesc'];
