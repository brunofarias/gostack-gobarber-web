import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    width: 160px;
    background-color: #ff9000;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    color: #321e38;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s;
    transform: translateX(-50%);

    &::before {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
