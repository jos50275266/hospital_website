import styled from "styled-components";
import Footer from "../../components/home/footer";

const IntroMedicalStaffContainer = styled.div`
  width: 100%;
  margin-top: 8rem;
  background: #eeedf1;
`;

const IntroMedicalStaffWrapper = styled.div`
  width: 100%;
`;

const IntroMedicalStaffTop = styled.div`
  width: 100%;
  min-height: 35vh;
  background-image: linear-gradient(
      90deg,
      rgba(54, 53, 57, 1) 0%,
      rgba(20, 5, 12, 0.8071603641456583) 86%
    ),
    url("../introbackground.jpg");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10rem;

  h4 {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 2rem;
    font-weight: lighter;
    color: white;
  }

  h2 {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 5rem;
    font-weight: bold;
    color: white;
    margin-bottom: 5rem;
  }

  h3 {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 1.5rem;
    font-weight: lighter;
    color: white;
    text-align: center;
  }

  @media all and (max-width: 428px) {
    h4 {
      font-family: "Noto Sans KR", sans-serif;
      font-size: 1.5rem;
      font-weight: lighter;
      color: white;
    }

    h2 {
      font-family: "Noto Sans KR", sans-serif;
      font-size: 4rem;
      font-weight: bold;
      color: white;
      margin-bottom: 5rem;
    }

    h3 {
      font-family: "Noto Sans KR", sans-serif;
      font-size: 1.2rem;
      font-weight: lighter;
      color: white;
      text-align: center;
    }
  }
`;

const IntroMedicalStaffMiddle = styled.div`
  width: 60%;
  display: flex;
  margin: auto;
  margin-bottom: 10rem;

  @media all and (max-width: 1675px) and (min-width: 1250px) {
    width: 80%;
  }

  @media all and (max-width: 1249px) and (min-width: 790px) {
    width: 100%;
  }

  @media all and (max-width: 789px) {
    width: 100%;
    flex-direction: column;
  }
`;

const IntroMedicalStaffLeft = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  justify-content: center;

  img {
    width: 40rem;
    height: 50rem;
  }

  @media all and (max-width: 999px) and (min-width: 790px) {
    img {
      width: 35rem;
    }
  }

  @media all and (max-width: 789px) {
    width: 90%;

    img {
      width: 40rem;
      height: 30rem;
    }
  }
`;

const IntroMedicalStaffRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  h2 {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 3rem;
    border-bottom: 2px solid #497da4;
    padding-bottom: 2rem;

    span {
      font-size: 4rem;
      color: #497da4;
    }
  }

  h4 {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 2.5rem;
    margin: 1.5rem 0;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;

    li {
      font-family: "Noto Sans KR", sans-serif;
      font-size: 2rem;
    }
  }

  @media all and (max-width: 999px) {
    h2 {
      font-family: "Noto Sans KR", sans-serif;
      font-size: 2rem;
      border-bottom: 2px solid #497da4;
      padding-bottom: 2rem;

      span {
        font-size: 3.5rem;
        color: #497da4;
      }
    }

    h4 {
      font-family: "Noto Sans KR", sans-serif;
      font-size: 2rem;
      margin: 1.5rem 0;
    }

    ul {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 1rem;

      li {
        font-family: "Noto Sans KR", sans-serif;
        font-size: 1.5rem;
      }
    }
  }

  @media all and (max-width: 789px) and (min-width: 475px) {
    width: 90%;
    margin: auto;

    h2 {
      font-family: "Noto Sans KR", sans-serif;
      font-size: 2rem;
      border-bottom: 2px solid #497da4;
      padding-bottom: 2rem;
      text-align: center;
      margin-top: 2rem;

      span {
        font-size: 3rem;
        color: #497da4;
      }
    }

    h4 {
      font-family: "Noto Sans KR", sans-serif;
      font-size: 2rem;
      margin: 1.5rem 0;
      text-align: center;
    }

    ul {
      width: 65%;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 1rem;

      li {
        font-family: "Noto Sans KR", sans-serif;
        font-size: 1.5rem;
      }
    }
  }

  @media all and (max-width: 474px) {
    width: 90%;
    margin: auto;

    h2 {
      font-family: "Noto Sans KR", sans-serif;
      font-size: 1.8rem;
      border-bottom: 2px solid #497da4;
      padding-bottom: 2rem;
      text-align: center;
      margin-top: 2rem;

      span {
        font-size: 2.8rem;
        color: #497da4;
      }
    }

    h4 {
      font-family: "Noto Sans KR", sans-serif;
      font-size: 2rem;
      margin: 1.5rem 0;
      text-align: center;
    }

    ul {
      width: 85%;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 1rem;

      li {
        font-family: "Noto Sans KR", sans-serif;
        font-size: 1.5rem;
      }
    }
  }
`;

const IntroMedicalStaff = () => {
  return (
    <IntroMedicalStaffContainer>
      <IntroMedicalStaffWrapper>
        <IntroMedicalStaffTop>
          <h4>INTRODUCTION OF THE MEDICAL STAFF</h4>
          <h2>????????? ??????</h2>
          <h3>
            ????????????????????? ??????????????? ?????? ????????? <br /> ????????? ????????? ????????????
          </h3>
        </IntroMedicalStaffTop>
        <IntroMedicalStaffMiddle>
          <IntroMedicalStaffLeft>
            <img src="../doctor2.png" />
          </IntroMedicalStaffLeft>
          <IntroMedicalStaffRight>
            <h2>
              ?????????????????? ????????? <span>?????? ?????????</span>
            </h2>
            <h4>????????????</h4>
            <ul>
              <li>- ?????? ?????????</li>
              <li>- ?????????????????? ??????/????????? ?????? ?????????</li>
              <li>- ?????????????????? ?????? ?????? ?????????</li>
              <li>- ???????????????????????? ???????????? ?????? ????????????</li>
              <li>- ?????????????????? ??????</li>
              <li>- ???????????????????????? ???????????? ??????</li>
              <li>- ????????????????????? ??????</li>
              <li>- ?????? ?????????</li>
              <li>- ???????????????????????????????????? ??????</li>
              <li>- ??????????????????????????? ??????</li>
              <li>- ?????????????????????????????? ?????????</li>
            </ul>
          </IntroMedicalStaffRight>
        </IntroMedicalStaffMiddle>
        <IntroMedicalStaffMiddle>
          <IntroMedicalStaffLeft>
            <img src="../doctor1.png" />
          </IntroMedicalStaffLeft>
          <IntroMedicalStaffRight>
            <h2>
              ?????????????????? ???????????? <span>?????? ?????????</span>
            </h2>
            <h4>????????????</h4>
            <ul>
              <li>- ?????? ?????????</li>
              <li>- ???????????????????????? ????????????</li>
              <li>- ???????????????????????? ?????? ?????? ?????????</li>
              <li>- ???????????????????????? ?????? ?????? ???????????????</li>
              <li>- ?????????????????? ??????</li>
              <li>- ????????????????????? ??????</li>
              <li>- ????????????????????? ????????? ??????</li>
              <li>- ???????????????????????? ???????????? ??????</li>
              <li>- ??????????????????????????? ??????</li>
            </ul>
          </IntroMedicalStaffRight>
        </IntroMedicalStaffMiddle>
      </IntroMedicalStaffWrapper>
      <Footer />
    </IntroMedicalStaffContainer>
  );
};

export default IntroMedicalStaff;
