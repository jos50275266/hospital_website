import styled from "styled-components";
import Footer from "../../components/home/footer";

const IntroTimeContainer = styled.div`
  width: 100%;
  margin-top: 8rem;
  background: #ffffff;
`;

const IntroTimeTop = styled.div`
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
`;

const IntroTimerContainer = styled.div`
  width: 100%;
  min-height: 60vh;
  display: flex;
  /* background-color: #a7caf2; */
`;

const IntroTimeWrapper = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media all and (max-width: 1349px) and (min-width: 1185px) {
    margin: auto;
    width: 85%;
  }

  @media all and (max-width: 1184px) and (min-width: 379px) {
    margin: auto;
    width: 95%;
  }

  @media all and (max-width: 378px) {
    width: 100%;
  }
`;

const IntroTimerLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  padding-left: 4rem;
  gap: 2rem;

  @media all and (max-width: 1184px) and (min-width: 379px) {
    width: 90%;
    margin: auto;
    margin-top: 7rem;
  }

  @media all and (max-width: 378px) {
    margin-top: 7rem;
    width: 100%;
  }
`;

const IntroTimerLeftHeader = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: flex-start;
  align-items: center;

  h6 {
    font-size: 3rem;
    color: #30292a;
  }
`;

const IntroTimerLeftTimeWrapper = styled.div`
  display: flex;
  font-family: "Noto Sans KR", sans-serif;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  border: 0.5px solid #e4e5e7;

  span {
    font-size: 2.5rem;
    font-weight: light;
    color: #30292a;

    width: 10rem;
  }

  h5 {
    font-size: 1.8rem;
    color: #30292a;
  }

  h6 {
    font-size: 2rem;
    color: #30292a;
  }

  @media all and (max-width: 580px) and (min-width: 513px) {
    gap: 1rem;

    span {
      font-size: 2.2rem;
      font-weight: light;
      color: #30292a;

      width: 10rem;
    }

    h5 {
      font-size: 1.6rem;
      color: #30292a;
    }

    h6 {
      font-size: 1.7rem;
      color: #30292a;
    }
  }

  @media all and (max-width: 512px) {
    gap: 0rem;

    span {
      font-size: 1.4rem;
      font-weight: bold;
      color: #30292a;

      width: 8rem;
    }

    h5 {
      font-size: 1.4rem;
      color: #30292a;
    }

    h6 {
      font-size: 1.5rem;
      color: #30292a;
    }
  }
`;

const IntroTimerRightWrapper = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 7rem;
  padding-left: 3rem;

  @media all and (max-width: 1184px) {
    width: 90%;
    margin: auto;
    margin-bottom: 8rem;
  }
`;

const IntroTimerRightFirstWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 5rem;
  gap: 3rem;
  border: 0.5px solid #e4e5e7;
  padding: 1rem;

  h3 {
    font-family: "Noto Sans KR", sans-serif;
    color: #30292a;
    font-size: 3.5rem;
  }

  h4 {
    font-family: "Noto Sans KR", sans-serif;
    color: #30292a;
    font-size: 2.6rem;
    font-weight: lighter;
  }

  @media all and (max-width: 1184px) and (min-width: 670px) {
    justify-content: flex-start;
    align-items: flex-start;
  }

  @media all and (max-width: 669px) and (min-width: 450px) {
    h3 {
      font-family: "Noto Sans KR", sans-serif;
      color: #30292a;
      font-size: 2.8rem;
    }

    h4 {
      font-family: "Noto Sans KR", sans-serif;
      color: #30292a;
      font-size: 2rem;
      font-weight: lighter;
    }
  }

  @media all and (max-width: 449px) {
    h3 {
      font-family: "Noto Sans KR", sans-serif;
      color: #30292a;
      font-size: 2.5rem;
    }

    h4 {
      font-family: "Noto Sans KR", sans-serif;
      color: #30292a;
      font-size: 1.8rem;
      font-weight: lighter;
    }
  }
`;

const IntroTimerRightSecondWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  img {
    width: 6rem;
    height: 6rem;
  }

  span {
    font-family: "Noto Sans KR", sans-serif;
    color: #30292a;
    font-size: 3rem;
    font-weight: bold;
  }

  @media all and (max-width: 1184px) and (min-width: 600px) {
    justify-content: flex-start;
    align-items: flex-start;
  }

  @media all and (max-width: 599px) {
    flex-direction: column;

    img {
      width: 6rem;
      height: 6rem;
    }

    span {
      font-family: "Noto Sans KR", sans-serif;
      color: #30292a;
      font-size: 2rem;
    }
  }
`;

const Time = () => {
  return (
    <IntroTimerContainer>
      <IntroTimeWrapper>
        <IntroTimerLeft>
          <IntroTimerLeftHeader>
            <img src="../deadline.png" />
            <h6>????????????</h6>
          </IntroTimerLeftHeader>
          <IntroTimerLeftTimeWrapper>
            <span>??????</span>
            <h6>
              am 10:00 ~ pm 17:30 <br />
              (????????? ??????)
            </h6>
          </IntroTimerLeftTimeWrapper>
          <IntroTimerLeftTimeWrapper>
            <span>????????????</span>
            <h6>pm 13:00 ~ pm 14:30</h6>
          </IntroTimerLeftTimeWrapper>
          <IntroTimerLeftTimeWrapper>
            <span>?????????</span>
            <h6>am 10:00 ~ pm 13:00 </h6>
          </IntroTimerLeftTimeWrapper>
          <IntroTimerLeftTimeWrapper>
            <h5>
              (?????? - ?????? 1, 2, 4, 5?????? ????????? ?????? ??????) <br />
              (?????? ????????? ????????? ??????)
            </h5>
          </IntroTimerLeftTimeWrapper>
          <IntroTimerLeftTimeWrapper>
            <h5>????????? ??? ???????????? ???????????????.</h5>
          </IntroTimerLeftTimeWrapper>
        </IntroTimerLeft>
        <IntroTimerRightWrapper>
          <IntroTimerRightFirstWrapper>
            <h3>??????: 053-252-6875</h3>
            <h4>
              ?????? ????????? ????????? 414 <br />
              (??????????????? 60m)
            </h4>
          </IntroTimerRightFirstWrapper>
          <IntroTimerRightSecondWrapper>
            <img src="../kakao.png" />
            <span>??????????????????: @??????????????????</span>
          </IntroTimerRightSecondWrapper>
        </IntroTimerRightWrapper>
      </IntroTimeWrapper>
    </IntroTimerContainer>
  );
};

const IntroTime = () => {
  return (
    <IntroTimeContainer>
      <IntroTimeTop>
        <h4>DOCTOR'S HOURS</h4>
        <h2>????????????</h2>
        <h3>
          ????????????????????? ??????????????? ?????? ????????? <br /> ????????? ????????? ????????????
        </h3>
      </IntroTimeTop>
      <Time />
      <Footer />
    </IntroTimeContainer>
  );
};

export default IntroTime;
