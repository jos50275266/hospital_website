import styled, { css } from "styled-components";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const NavContainer = styled.header`
  width: 100%;
  background-color: white;
  position: relative;
`;

const NavWrapper = styled.div`
  width: 100%;
  height: 8rem;
  background-color: white;
  border-bottom: 0.1rem solid #c4c5c7;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 9999;
  top: 0;
`;

const Navbar = styled.nav`
  width: 120rem;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media all and (max-width: 1290px) and (min-width: 1051px) {
    width: 100rem;
  }

  @media all and (max-width: 1050px) and (min-width: 750px) {
    width: 70rem;
  }

  @media all and (max-width: 749px) {
    width: 70%;
  }
`;

const NavbarMenu = styled.div`
  display: none;

  @media all and (max-width: 1290px) {
    display: block;
  }
`;

const NavbarMenuIcon = styled.div`
  display: none;

  @media all and (max-width: 1290px) {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
`;

const SharedNavbarMenuLine = css`
  display: none;

  @media all and (max-width: 1290px) {
    display: block;
    width: 3rem;
    height: 0.3rem;
    background-color: black;
    transition: all 0.2s ease-in-out;
  }
`;

const NavbarMenuFirstLine = styled.div`
  ${SharedNavbarMenuLine}
  ${(props) =>
    props.navbarClick
      ? css`
          transform: rotate(45deg);
          transform-origin: left;
        `
      : css`
          transform: rotate(0deg);
        `}
`;
const NavbarMenuSecondLine = styled.div`
  ${SharedNavbarMenuLine}
  ${(props) =>
    props.navbarClick
      ? css`
          opacity: 0;
          visibility: hidden;
        `
      : css`
          opacity: 1;
          visibility: visible;
        `}
`;
const NavbarMenuThirdLine = styled.div`
  ${SharedNavbarMenuLine}
  ${(props) =>
    props.navbarClick
      ? css`
          transform: rotate(-45deg);
          transform-origin: left;
        `
      : css`
          transform: rotate(0deg);
        `}
`;

const NavbarLogo = styled.div`
  font-size: 2.5rem;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 800;
  color: #004c4c;
  position: relative;
  cursor: pointer;
`;

const NavbarLists = styled.ul`
  display: flex;
  transition: all 2s ease-in-out;

  @media all and (max-width: 1290px) {
    display: none;
  }
`;

const NavbarListsSmall = styled.ul`
  display: none;

  @media all and (max-width: 1290px) {
    ${(props) =>
      props.navbarClick
        ? css`
            display: flex;
            flex-direction: column;
            position: absolute;
            flex-wrap: wrap;
            top: 8rem;
            left: 0;
            background: white;
            width: 100%;
          `
        : css`
            display: none;
          `}
  }
`;

const SharedNavbarList = css`
  height: 8rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  transition: border-bottom 0.3s;

  a {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 1.4rem;
    font-weight: bolder;
    height: 8rem;
    padding: 2rem;
    display: flex;
    align-items: center;
    transition: border-bottom 0.1s;
  }

  a:hover {
    border-bottom: 0.2rem solid #004c4c;
  }
`;

const NavbarList = styled.li`
  ${SharedNavbarList}
`;

const NavbarListSmall = styled.li`
  ${SharedNavbarList}
  flex-direction: column;
  height: auto;
`;

const SharedNavbarDropdown = css`
  width: 100%;
  min-height: 10rem;
  background: white;
  position: absolute;
  top: 8rem;
  left: 0;
  z-index: 9999;
  padding: 0 30rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const NavbarDropdownFirst = styled.ul`
  ${SharedNavbarDropdown}
  ${(props) =>
    props.mouseFirst
      ? css`
          opacity: 1;
          visibility: visible;
        `
      : css`
          opacity: 0;
          visibility: hidden;
        `}
`;

const NavbarDropdownSecond = styled.ul`
  ${SharedNavbarDropdown}
  ${(props) =>
    props.mouseSecond
      ? css`
          opacity: 1;
          visibility: visible;
        `
      : css`
          opacity: 0;
          visibility: hidden;
        `}
`;

const NavbarDropdownThird = styled.ul`
  ${SharedNavbarDropdown}
  ${(props) =>
    props.mouseThird
      ? css`
          opacity: 1;
          visibility: visible;
        `
      : css`
          opacity: 0;
          visibility: hidden;
        `}
`;

const SharedNavbarSmallDropdown = css`
  display: flex;
  width: 100%;
  padding: 0 30rem;
  justify-content: center;
`;

const NavbarDropdownSmallFirst = styled.ul`
  ${SharedNavbarSmallDropdown}
  display: none;
  background-color: #004c4c;

  @media all and (max-width: 1290px) and (min-width: 790px) {
    ${(props) =>
      props.collapseFirst
        ? css`
            display: flex;
            flex-direction: column;
          `
        : css`
            display: none;
          `}
  }

  @media all and (max-width: 789px) {
    ${(props) =>
      props.collapseFirst
        ? css`
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            padding: 0;
          `
        : css`
            display: none;
          `}
  }
`;

const NavbarDropdownSmallSecond = styled.ul`
  ${SharedNavbarSmallDropdown}
  display: none;
  background-color: #004c4c;

  @media all and (max-width: 1290px) and (min-width: 790px) {
    ${(props) =>
      props.collapseSecond
        ? css`
            display: flex;
            flex-direction: column;
          `
        : css`
            display: none;
          `}
  }

  @media all and (max-width: 789px) {
    ${(props) =>
      props.collapseSecond
        ? css`
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            padding: 0;
          `
        : css`
            display: none;
          `}
  }
`;

const NavbarDropdownSmallThird = styled.ul`
  ${SharedNavbarSmallDropdown}
  display: none;
  background-color: #004c4c;

  @media all and (max-width: 1290px) and (min-width: 790px) {
    ${(props) =>
      props.collapseThird
        ? css`
            display: flex;
            flex-direction: column;
          `
        : css`
            display: none;
          `}
  }

  @media all and (max-width: 789px) {
    ${(props) =>
      props.collapseThird
        ? css`
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            padding: 0;
          `
        : css`
            display: none;
          `}
  }
`;

const NavbarDropdownList = styled.li`
  width: 25rem;
  margin: 2rem 10rem;
  display: flex;
  flex-direction: column;

  a {
    font-size: 1.6rem;
    color: #004c4c;
  }
`;

const NavbarDropdownSmallList = styled.li`
  width: 100%;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  a {
    font-size: 1.5rem;
    color: white;
  }
`;

const NavbarListComponent = ({
  mouseFirst,
  mouseSecond,
  mouseThird,
  setMouseFirst,
  setMouseSecond,
  setMouseThird,
}) => {
  return (
    <NavbarLists>
      <NavbarList
        onMouseOver={() => {
          setMouseFirst(!mouseFirst);
        }}
        onMouseOut={() => {
          setMouseFirst(!mouseFirst);
        }}
      >
        <a>?????????????????? ??????</a>
        <NavbarDropdownFirst mouseFirst={mouseFirst}>
          <NavbarDropdownList>
            <Link href="/intro/introHospital">
              <a>????????????</a>
            </Link>
          </NavbarDropdownList>
          <NavbarDropdownList>
            <Link href="/intro/introMedicalStaff">
              <a>???????????????</a>
            </Link>
          </NavbarDropdownList>
          <NavbarDropdownList>
            <Link href="/intro/introTime">
              <a>????????????</a>
            </Link>
          </NavbarDropdownList>
          <NavbarDropdownList>
            <Link href="/intro/locations">
              <a>??????????????? ???</a>
            </Link>
          </NavbarDropdownList>
        </NavbarDropdownFirst>
      </NavbarList>
      <NavbarList
        onMouseOver={() => {
          setMouseSecond(!mouseSecond);
        }}
        onMouseOut={() => {
          setMouseSecond(!mouseSecond);
        }}
      >
        <a>????????????</a>
        <NavbarDropdownSecond mouseSecond={mouseSecond}>
          <NavbarDropdownList>
            <a>?????? ?????????</a>
          </NavbarDropdownList>
          <NavbarDropdownList>
            <a>VABB ?????????</a>
          </NavbarDropdownList>
          <NavbarDropdownList>
            <a>????????? ?????????</a>
          </NavbarDropdownList>
          <NavbarDropdownList>
            <a>???????????? ??????</a>
          </NavbarDropdownList>
        </NavbarDropdownSecond>
      </NavbarList>
      <NavbarList
        onMouseOver={() => {
          setMouseThird(!mouseThird);
        }}
        onMouseOut={() => {
          setMouseThird(!mouseThird);
        }}
      >
        <a>?????????????????? ??????</a>
        <NavbarDropdownThird mouseThird={mouseThird}>
          <NavbarDropdownList>
            <Link href="/info/notice">
              <a>????????????</a>
            </Link>
          </NavbarDropdownList>
          <NavbarDropdownList>
            <Link href="/info/board">
              <a>?????????</a>
            </Link>
          </NavbarDropdownList>
        </NavbarDropdownThird>
      </NavbarList>
    </NavbarLists>
  );
};

const NavbarListSmallComponent = ({
  navbarClick,
  collapseFirst,
  collapseSecond,
  collapseThird,
  setCollapseFirst,
  setCollapseSecond,
  setCollapseThird,
}) => {
  return (
    <NavbarListsSmall navbarClick={navbarClick}>
      <NavbarListSmall>
        <a onClick={() => setCollapseFirst(!collapseFirst)}>
          ?????????????????? ??????
        </a>
        <NavbarDropdownSmallFirst collapseFirst={collapseFirst}>
          <NavbarDropdownSmallList>
            <Link href="/intro/introHospital">
              <a>????????????</a>
            </Link>
          </NavbarDropdownSmallList>
          <NavbarDropdownSmallList>
            <Link href="/intro/introMedicalStaff">
              <a>???????????????</a>
            </Link>
          </NavbarDropdownSmallList>
          <NavbarDropdownSmallList>
            <Link href="/intro/introFacility">
              <a>?????? ????????????</a>
            </Link>
          </NavbarDropdownSmallList>
          <NavbarDropdownSmallList>
            <Link href="/intro/locations">
              <a>??????????????? ???</a>
            </Link>
          </NavbarDropdownSmallList>
        </NavbarDropdownSmallFirst>
      </NavbarListSmall>
      <NavbarListSmall>
        <a onClick={() => setCollapseSecond(!collapseSecond)}>????????????</a>
        <NavbarDropdownSmallSecond collapseSecond={collapseSecond}>
          <NavbarDropdownSmallList>
            <a>?????? ?????????</a>
          </NavbarDropdownSmallList>
          <NavbarDropdownSmallList>
            <a>VABB ?????????</a>
          </NavbarDropdownSmallList>
          <NavbarDropdownSmallList>
            <a>????????? ?????????</a>
          </NavbarDropdownSmallList>
          <NavbarDropdownSmallList>
            <a>???????????? ??????</a>
          </NavbarDropdownSmallList>
        </NavbarDropdownSmallSecond>
      </NavbarListSmall>
      <NavbarListSmall>
        <a onClick={() => setCollapseThird(!collapseThird)}>
          ?????????????????? ??????
        </a>
        <NavbarDropdownSmallThird collapseThird={collapseThird}>
          <NavbarDropdownSmallList>
            <Link href="/info/notice">
              <a>????????????</a>
            </Link>
          </NavbarDropdownSmallList>
          <NavbarDropdownSmallList>
            <Link href="/info/board">
              <a>?????????</a>
            </Link>
          </NavbarDropdownSmallList>
        </NavbarDropdownSmallThird>
      </NavbarListSmall>
    </NavbarListsSmall>
  );
};

const GlobalNavbar = () => {
  const { pathname } = useRouter();

  useEffect(() => {
    // some browsers (like safari) may require a timeout to delay calling this
    // function after a page has loaded; otherwise, it may not update the position
    setNavbarClick(false);
    setCollapseFirst(false);
    setCollapseSecond(false);
    setCollapseThird(false);
  }, [pathname]);

  const [mouseFirst, setMouseFirst] = useState(false);
  const [mouseSecond, setMouseSecond] = useState(false);
  const [mouseThird, setMouseThird] = useState(false);

  const [collapseFirst, setCollapseFirst] = useState(false);
  const [collapseSecond, setCollapseSecond] = useState(false);
  const [collapseThird, setCollapseThird] = useState(false);

  const [navbarClick, setNavbarClick] = useState(false);

  return (
    <NavContainer>
      <NavWrapper>
        <Navbar>
          <Link href="/">
            <NavbarLogo>??????????????????</NavbarLogo>
          </Link>
          <NavbarMenu>
            <NavbarMenuIcon onClick={() => setNavbarClick(!navbarClick)}>
              <NavbarMenuFirstLine
                navbarClick={navbarClick}
              ></NavbarMenuFirstLine>
              <NavbarMenuSecondLine
                navbarClick={navbarClick}
              ></NavbarMenuSecondLine>
              <NavbarMenuThirdLine
                navbarClick={navbarClick}
              ></NavbarMenuThirdLine>
            </NavbarMenuIcon>
          </NavbarMenu>
          <NavbarListComponent
            mouseFirst={mouseFirst}
            mouseSecond={mouseSecond}
            mouseThird={mouseThird}
            setMouseFirst={setMouseFirst}
            setMouseSecond={setMouseSecond}
            setMouseThird={setMouseThird}
          />
          <NavbarListSmallComponent
            navbarClick={navbarClick}
            collapseFirst={collapseFirst}
            collapseSecond={collapseSecond}
            collapseThird={collapseThird}
            setCollapseFirst={setCollapseFirst}
            setCollapseSecond={setCollapseSecond}
            setCollapseThird={setCollapseThird}
          />
        </Navbar>
      </NavWrapper>
    </NavContainer>
  );
};

export default GlobalNavbar;
