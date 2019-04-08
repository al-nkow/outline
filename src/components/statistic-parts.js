import styled from 'styled-components';

export const ButWrap = styled.div`
  float: left;
  margin-right: 10px;
`;

export const Buttons = styled.div`
  overflow: hidden;
  margin-bottom: 20px;
`;

export const Button = styled.div`
  width: 200px;
  padding: 10px;
  text-align: center;
  background: #456e98;
  color: #fff;
  font-weight: bold;
  border-radius: 2px;
  margin-bottom: 7px;
`;

export const MenuItem = styled.div`
  padding: 10px 0 0 35px;
  position: relative;
  color: #919ba4;
  &:before {
    content: '';
    height: 1px;
    width: 15px;
    position: absolute;
    left: 15px;
    bottom: 8px;
    background: #919ba4;
  }
  &:after {
    content: '';
    width: 1px;
    height: 28px;
    position: absolute;
    left: 15px;
    bottom: 8px;
    background: #919ba4;
  }
  cursor: pointer;
  &:hover {
    color: #323641;
  }
  &.active {
    color: #323641;
  }
`;

export const Tabs = styled.div`
  overflow: hidden;
  margin-bottom: 20px;
`;

export const Tab = styled.div`
  background: #456e98;
  color: #ffffff;
  padding: 5px 10px;
  float: left;
  margin-right: 2px;
  margin-bottom: 2px;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    background: #253648;
  }
  &.active {
    background: #253648;
  }
`;

export const Files = styled.div`
  margin-bottom: 20px;
  overflow: auto;
`;

export const File = styled.div`
  padding-top: 5px;
  padding-left: 30px;
  position: relative;
  margin-bottom: 10px;
  svg {
    position: absolute;
    top: 2px;
    left: 0;
    fill: #456e98;
    vertical-align: middle;
    margin-right: 10px;
  }
`;