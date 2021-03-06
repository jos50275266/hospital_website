import { useState } from "react";
import styled from "styled-components";
import Footer from "../../components/home/footer";
import FirstMap from "../../components/maps/firstMap";
import SecondMap from "../../components/maps/secondMap";

const LocationContainer = styled.div`
  width: 100%;
  margin-top: 8rem;
  background: #ffffff;
`;

const LocationWrapper = styled.div`
  width: 100%;
`;

const LocationTop = styled.div`
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
`;

const LocationTopWrapper = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: column;

  @media all and (max-width: 750px) and (min-width: 569px) {
    width: 90%;
  }

  @media all and (max-width: 568px) {
    width: 100%;
  }
`;

const LocationTopButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 3rem;

  button {
    width: 50%;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 2rem;
    padding: 2rem 5rem;
    border: none;
    cursor: pointer;
  }

  @media all and (max-width: 750px) {
    flex-direction: column;

    button {
      width: 100%;
    }
  }
`;

const LocationHospitalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const LocationInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    display: flex;
    align-items: center;
    width: 90%;
    margin: 4rem auto;
    font-size: 2.5rem;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: bolder;
    padding-bottom: 2rem;
    border-bottom: 1px solid gray;
    gap: 2rem;
  }

  h3 {
    display: flex;
    align-items: center;
    width: 90%;
    margin: 4rem auto;
    font-size: 2.2rem;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: lighter;
    padding-bottom: 2rem;
    border-bottom: 0.5px solid #e5e5e5;
    gap: 2rem;

    span {
      font-size: 2.5rem;
      font-weight: bold;
    }
  }

  h5 {
    display: flex;
    align-items: center;
    width: 90%;
    margin: auto;
    font-size: 1.9rem;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: bolder;
    border-bottom: 0.5px solid #e5e5e5;
    gap: 2rem;
    padding-bottom: 2rem;
  }

  h6 {
    display: flex;
    align-items: center;
    width: 90%;
    margin: auto;
    font-size: 2rem;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: bolder;
    gap: 2rem;
  }

  ul {
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-family: "Noto Sans KR", sans-serif;
    padding-bottom: 2rem;
    border-bottom: 0.5px solid #e5e5e5;

    li {
      font-size: 1.5rem;
      font-weight: bolder;
    }
  }

  section {
    width: 90%;
    margin: auto;
    margin-bottom: 2.4rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    h5 {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      font-family: "Noto Sans KR", sans-serif;
      font-size: 2rem;

      span {
        color: #0163d4;
        font-size: 2.5rem;
      }
    }

    h6 {
      font-family: "Noto Sans KR", sans-serif;
      font-size: 1.8rem;
    }
  }

  @media all and (max-width: 1095px) and (min-width: 540px) {
    h3 {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
    }
  }

  @media all and (max-width: 539px) and (min-width: 450px) {
    h4 {
      display: flex;
      align-items: center;
      width: 95%;
      margin: 4rem auto;
      font-size: 2rem;
      font-family: "Noto Sans KR", sans-serif;
      font-weight: bolder;
      padding-bottom: 2rem;
      border-bottom: 1px solid gray;
      gap: 2rem;
    }

    h3 {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 90%;
      margin: 4rem auto;
      font-size: 1.6rem;
      font-family: "Noto Sans KR", sans-serif;
      font-weight: lighter;
      padding-bottom: 2rem;
      border-bottom: 0.5px solid #e5e5e5;
      gap: 2rem;

      span {
        font-size: 2rem;
        font-weight: bold;
      }
    }

    h5 {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 90%;
      margin: auto;
      font-size: 1.5rem;
      font-family: "Noto Sans KR", sans-serif;
      font-weight: bolder;
      border-bottom: 0.5px solid #e5e5e5;
      gap: 2rem;
      padding-bottom: 2rem;
    }

    h6 {
      display: flex;
      align-items: center;
      width: 90%;
      margin: auto;
      font-size: 1.5rem;
      font-family: "Noto Sans KR", sans-serif;
      font-weight: bolder;
      gap: 1.5rem;
    }

    ul {
      width: 90%;
      margin: auto;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      font-family: "Noto Sans KR", sans-serif;
      padding-bottom: 2rem;
      border-bottom: 0.5px solid #e5e5e5;

      li {
        font-size: 1.5rem;
        font-weight: bolder;
      }
    }

    section {
      width: 90%;
      margin: auto;
      margin-bottom: 2.4rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      h5 {
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        font-family: "Noto Sans KR", sans-serif;
        font-size: 1.8rem;

        span {
          color: #0163d4;
          font-size: 2rem;
        }
      }

      h6 {
        font-family: "Noto Sans KR", sans-serif;
        font-size: 1.8rem;
      }
    }
  }

  @media all and (max-width: 449px) {
    h4 {
      display: flex;
      align-items: center;
      width: 95%;
      margin: 4rem auto;
      font-size: 1.7rem;
      font-family: "Noto Sans KR", sans-serif;
      font-weight: bolder;
      padding-bottom: 2rem;
      border-bottom: 1px solid gray;
      gap: 2rem;
    }

    h3 {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 90%;
      margin: 4rem auto;
      font-size: 1.6rem;
      font-family: "Noto Sans KR", sans-serif;
      font-weight: lighter;
      padding-bottom: 2rem;
      border-bottom: 0.5px solid #e5e5e5;
      gap: 2rem;

      span {
        font-size: 2rem;
        font-weight: bold;
      }
    }

    h5 {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 90%;
      margin: auto;
      font-size: 1.5rem;
      font-family: "Noto Sans KR", sans-serif;
      font-weight: bolder;
      border-bottom: 0.5px solid #e5e5e5;
      gap: 2rem;
      padding-bottom: 2rem;
    }

    h6 {
      display: flex;
      align-items: center;
      width: 90%;
      margin: auto;
      font-size: 1.5rem;
      font-family: "Noto Sans KR", sans-serif;
      font-weight: bolder;
      gap: 1.5rem;
    }

    ul {
      width: 90%;
      margin: auto;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      font-family: "Noto Sans KR", sans-serif;
      padding-bottom: 2rem;
      border-bottom: 0.5px solid #e5e5e5;

      li {
        font-size: 1.5rem;
        font-weight: bolder;
      }
    }

    section {
      width: 90%;
      margin: auto;
      margin-bottom: 2.4rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      h5 {
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        font-family: "Noto Sans KR", sans-serif;
        font-size: 1.5rem;

        span {
          color: #0163d4;
          font-size: 1.7rem;
        }
      }

      h6 {
        font-family: "Noto Sans KR", sans-serif;
        font-size: 1.8rem;
      }
    }
  }
`;

const LocationInfoWrapperPhone = styled.div`
  width: 95%;
  margin: 3rem auto;
  display: flex;

  div {
    width: 50%;
    display: flex;
    gap: 2rem;

    h6 {
      font-family: "Noto Sans KR", sans-serif;
      font-size: 2.5rem;
      font-weight: lighter;

      span {
        font-size: 2.5rem;
        font-weight: bold;
      }
    }
  }

  @media all and (max-width: 1100px) and (min-width: 950px) {
    div {
      h6 {
        font-size: 2rem;
      }
    }
  }

  @media all and (max-width: 949px) and (min-width: 539px) {
    flex-direction: column;
    gap: 2rem;
    text-align: left;

    div {
      flex-direction: column;
      width: 100%;

      h6 {
        font-family: "Noto Sans KR", sans-serif;
        font-size: 2rem;
        font-weight: lighter;
        display: flex;
        justify-content: flex-start;
        width: 100%;

        span {
          font-size: 2rem;
          font-weight: bold;
        }
      }
    }
  }

  @media all and (max-width: 539px) and (min-width: 415px) {
    flex-direction: column;
    gap: 2rem;
    text-align: center;

    div {
      width: 100%;
      display: flex;
      gap: 2rem;

      h6 {
        font-family: "Noto Sans KR", sans-serif;
        font-size: 2rem;
        font-weight: lighter;
        display: flex;
        justify-content: flex-start;
        width: 95%;
        margin: auto;

        span {
          font-size: 2rem;
          font-weight: bold;
        }
      }
    }
  }

  @media all and (max-width: 414px) and (min-width: 377px) {
    flex-direction: column;
    gap: 2rem;
    text-align: center;

    div {
      width: 100%;
      display: flex;
      gap: 2rem;

      h6 {
        font-family: "Noto Sans KR", sans-serif;
        font-size: 2rem;
        font-weight: lighter;
        display: flex;
        justify-content: flex-start;
        width: 95%;
        margin: auto;

        span {
          font-size: 1.5rem;
          font-weight: bold;
        }
      }
    }
  }

  @media all and (max-width: 376px) {
    flex-direction: column;
    gap: 2rem;
    text-align: center;

    div {
      width: 100%;
      display: flex;
      gap: 2rem;

      h6 {
        font-family: "Noto Sans KR", sans-serif;
        font-size: 1.7rem;
        font-weight: lighter;
        display: flex;
        justify-content: flex-start;
        width: 70%;
        margin: auto;

        span {
          font-size: 1.3rem;
          font-weight: bold;
        }
      }
    }
  }
`;

const HospitalFirst = () => {
  return (
    <LocationHospitalWrapper>
      <FirstMap />
      <LocationInfoWrapper>
        <h4>
          <img src="../subway.png" />
          ?????????
        </h4>
        <h6>?????? ????????? 3??????(?????????) ???????????????- 2??? ?????? ???</h6>
        <h4>
          <img src="../bus-station.png" />
          ??????
        </h4>
        <section>
          <h5>
            <span>?????????????????????1</span>
            ?????? 1-1, 323-1, ??????2-1, 234, 509, 413
          </h5>
          <h5>
            <span>?????????????????????2(?????????)</span>
            ??????1, 323, ??????2, ??????4, 234, 509, 403, 413
          </h5>
          <h5>
            <span>????????????</span>
            ?????????????????? ?????? ?????? ????????? ????????? ????????????????????? ???????????????.
          </h5>
        </section>
        <h5>
          <img src="../nav.png" />
          ??????????????? ????????? ????????? 414, ?????????????????? 5???
        </h5>
        <LocationInfoWrapperPhone>
          <div>
            <h6>
              <img src="../phone-call.png" />
              <span>Phone:</span>053-255-6875
            </h6>
          </div>
          <div>
            <h6>
              <img src="../fax.png" />
              <span>Fax:</span>053-255-6075
            </h6>
          </div>
        </LocationInfoWrapperPhone>
      </LocationInfoWrapper>
    </LocationHospitalWrapper>
  );
};

const HospitalSecond = () => {
  return (
    <LocationHospitalWrapper>
      <SecondMap />
      <LocationInfoWrapper>
        <h4>
          <img src="../bus.png" />
          ???????????? ????????? ???:
        </h4>
        <ul>
          <li>
            ?????????????????? ????????? IC?????? ?????? ??? (?????? ????????? ??? ?????? ????????????
            ????????? --&gt;
          </li>
          <li>?????? ???????????????????????? ?????? ??? ?????? ?????? --&gt;</li>
          <li>????????? ???????????? ?????? ??? ??????????????? ????????? ?????? ????????? --&gt;</li>
          <li>???????????? ??????????????? ?????? --&gt;</li>
          <li>????????????????????? ?????? --&gt;</li>
          <li>???????????????????????? ????????? U??? --&gt;</li>
          <li>
            ?????? ????????? ?????? ?????? ??? ???????????? ??? ???????????? ????????? ??? ?????????
            --&gt;
          </li>
          <li>
            ??????????????? ?????? ???????????? ?????? (????????????????????? 3??? ??????????????????)
          </li>
        </ul>
        <h3>
          <img src="../car.png" />
          ??????????????? ????????? (???????????????)
          <span>?????? ?????? ??????????????? 418??? 9</span>
        </h3>
        <h5>
          <img src="../nav.png" />
          ??????????????? ?????? ?????? 2??? 925-2 ????????????????????? 3F
        </h5>
        <LocationInfoWrapperPhone>
          <div>
            <h6>
              <img src="../phone-call.png" />
              <span>Phone:</span>053-255-6875
            </h6>
          </div>
          <div>
            <h6>
              <img src="../fax.png" />
              <span>Fax:</span>053-255-6075
            </h6>
          </div>
        </LocationInfoWrapperPhone>
      </LocationInfoWrapper>
    </LocationHospitalWrapper>
  );
};

const Locations = () => {
  const [location, setLocation] = useState(true);

  return (
    <LocationContainer>
      <LocationWrapper>
        <LocationTop>
          <h4>LOCATION</h4>
          <h2>????????? ???</h2>
          <h3>
            ????????????????????? ??????????????? ?????? ????????? <br /> ????????? ????????? ????????????
          </h3>
        </LocationTop>
        <LocationTopWrapper>
          <LocationTopButtonWrapper>
            <button
              style={{
                background: location ? " #2c2526" : "#f7f7f7",
                color: location ? "#f2e2d8" : "#8d8f9e",
              }}
              onClick={() => setLocation(true)}
            >
              ?????????
            </button>
            <button
              style={{
                background: location ? "#f7f7f7" : " #2c2526",
                color: location ? "#8d8f9e" : "#f2e2d8",
              }}
              onClick={() => setLocation(false)}
            >
              ????????????
            </button>
          </LocationTopButtonWrapper>
          <LocationHospitalWrapper></LocationHospitalWrapper>
          {location ? <HospitalFirst /> : <HospitalSecond />}
        </LocationTopWrapper>
      </LocationWrapper>
      <Footer />
    </LocationContainer>
  );
};

export default Locations;
