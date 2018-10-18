import React from 'react';
import styled from 'react-emotion';

const StyledSVG = styled('svg')({
  display: 'inline-block',
  height: '2.5em',
  width: 'auto'
});

const StyledSVGSmall = styled(StyledSVG)`
  height: 1.5em;
  margin-top: -5px;
`;

const SVGContainer = styled('span')`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-bottom: 10px;
`;


function LogoIcon (props) {
  return (
    <SVGContainer {...props}>
      <StyledSVG viewBox="0 0 512 512">
        <g><g><g>
          <path d="M185.379,308.966H52.966c-9.737,0-17.655-7.923-17.655-17.655V220.69   c0-9.732,7.918-17.655,17.655-17.655h132.414c9.737,0,17.655,7.923,17.655,17.655v17.655h35.31V220.69   c0-29.207-23.758-52.966-52.966-52.966H52.966C23.758,167.724,0,191.482,0,220.69v70.621c0,29.207,23.758,52.966,52.966,52.966   h132.414c29.207,0,52.966-23.758,52.966-52.966h-35.31C203.034,301.043,195.116,308.966,185.379,308.966z" data-original="#3D1600" class="active-path" data-old_color="#8B4513" fill="#3D1600"/>
          <path d="M459.034,167.724H326.621c-29.207,0-52.966,23.758-52.966,52.966v17.655h35.31V220.69   c0-9.732,7.918-17.655,17.655-17.655h132.414c9.737,0,17.655,7.923,17.655,17.655v70.621c0,9.732-7.918,17.655-17.655,17.655   H326.621c-9.737,0-17.655-7.923-17.655-17.655h-35.31c0,29.207,23.758,52.966,52.966,52.966h132.414   c29.207,0,52.966-23.758,52.966-52.966V220.69C512,191.482,488.242,167.724,459.034,167.724z" data-original="#3D1600" class="active-path" data-old_color="#8B4513" fill="#3D1600"/>
        </g><path d="M361.931,273.655c9.75,0,17.655-7.905,17.655-17.655s-7.905-17.655-17.655-17.655h-52.966h-35.31  h-35.31h-35.31h-52.966c-9.75,0-17.655,7.905-17.655,17.655s7.905,17.655,17.655,17.655h52.966h35.31h35.31h35.31H361.931z" data-original="#3D1600" class="active-path" data-old_color="#AAB4CB" fill="#3D1600"/><g>
          <rect x="203.034" y="273.655" width="35.31" height="17.655" data-original="#3D1600" class="active-path" data-old_color="#96A1BA" fill="#3D1600"/>
          <rect x="273.655" y="273.655" width="35.31" height="17.655" data-original="#3D1600" class="active-path" data-old_color="#96A1BA" fill="#3D1600"/>
        </g></g></g>
      </StyledSVG>
      <StyledSVGSmall viewBox="0 0 512 512">
        <g><g><g>
          <path d="M92.191,58.369c-5.721-5.721-5.231-15.112,1.014-20.255c81.769-67.342,223.027-43.676,323.692,56.99   s124.331,241.922,56.99,323.693c-5.143,6.244-14.534,6.735-20.255,1.014L92.191,58.369z" data-original="#3D1600" class="active-path" data-old_color="#573024" fill="#3D1600"/>
          <path d="M419.811,453.632c5.721,5.721,5.231,15.112-1.014,20.255   c-81.771,67.342-223.027,43.675-323.693-56.99S-29.228,174.975,38.114,93.205c5.143-6.244,14.534-6.735,20.255-1.014   L419.811,453.632z" data-original="#3D1600" class="active-path" data-old_color="#573024" fill="#3D1600"/>
        </g><g>
          <path d="M92.191,58.369c-5.721-5.721-5.231-15.112,1.014-20.255C135.788,3.045,194.504-7.343,255.219,4.971   l-0.093,216.332L92.191,58.369z" data-original="#3D1600" class="active-path" data-old_color="#83432D" fill="#3D1600"/>
          <path d="M255.86,506.841c-55.583-11.481-112.779-41.968-160.756-89.943   C-5.562,316.233-29.228,174.975,38.114,93.205c5.143-6.244,14.534-6.735,20.255-1.014l196.928,196.928L255.86,506.841z" data-original="#3D1600" class="active-path" data-old_color="#83432D" fill="#3D1600"/>
        </g></g></g>
      </StyledSVGSmall>
    </SVGContainer>
  );
}

export { LogoIcon };