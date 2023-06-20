// import { FullPage, Slide } from 'react-full-page';
//     <FullPage controls duration={1500} scrollMode={'full-page'}>
//       <Slide>
//         <h1 className="">Inner slide content</h1>
//       </Slide>
//       <Slide>
//         <h1 className="">Another slide content</h1>
//       </Slide>
//       <Slide>
//         <h1 className="">Another slide content</h1>
//       </Slide>

import { Route, Routes as ReactRoutes } from 'react-router-dom';

//     </FullPage>
const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<div className="absolute top-0 left-0 h-full">hi</div>} />
    </ReactRoutes>
  );
};

export default Routes;
