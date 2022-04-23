import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import i from "../images/i.jpg";
import tiger from "../images/tiger.jpg";

const Homee = () => {
  return (
    <MaintenantDiv>
      <Top>
        {/* left div */}
        <Left>
          <span className="spanone">Discover a new way to rent</span>

          <span className="spantwo">Rent Your Dreams</span>

          <span>
            The mordern way to rent any products with affordable price. Fast,
            affordable, reliable E-service
          </span>
        </Left>
        <Right>
          <img src={tiger} alt="img " />
        </Right>
      </Top>

      {/* bottom div */}
      <Bottom>
        <EachCard>
          <img src={tiger} alt="img " />
          <Name>
            <span>name</span>
            <span>discription</span>
            <Link id="clothes" to="/clothes" target="_blank">
              Clothes
            </Link>
          </Name>
        </EachCard>

        <EachCard>
          <img src={tiger} alt="img " />
          <Name>
            <span>name</span>
            <span>discription</span>
            <Link id="powertools" to="/powertools" target="_blank">
              Power Tools
            </Link>
          </Name>
        </EachCard>

        <EachCard>
          <img src={tiger} alt="img " />
          <Name>
            <span>name</span>
            <span>discription</span>
            <Link id="videoshooting" to="/video" target="_blank">
              Shooting Equpments
            </Link>
          </Name>
        </EachCard>

        <EachCard>
          <img src={tiger} alt="img " />
          <Name>
            <span>name</span>
            <span>discription</span>
            <Link id="techhardware" to="/techhardware" target="_blank">
              Tech Hardware
            </Link>
          </Name>
        </EachCard>

        <EachCard>
          <img src={tiger} alt="img " />
          <Name>
            <span>name</span>
            <span>discription</span>
            <Link id="books" to="/books" target="_blank">
              Books
            </Link>
          </Name>
        </EachCard>

        <EachCard>
          <img src={tiger} alt="img " />
          <Name>
            <span>name</span>
            <span>discription</span>
            <Link id="music" to="/music" target="_blank">
              Music & instruments
            </Link>
          </Name>
        </EachCard>

        <EachCard>
          <img src={tiger} alt="img " />
          <Name>
            <span>name</span>
            <span>discription</span>
            <Link id="vehicles" to="/vehicles" target="_blank">
              Vehicles
            </Link>
          </Name>
        </EachCard>

        <EachCard>
          <img src={tiger} alt="img " />
          <Name>
            <span>name</span>
            <span>discription</span>
            <Link id="realestate" to="/realestate" target="_blank">
              Real Estate
            </Link>
          </Name>
        </EachCard>

        <EachCard>
          <img src={tiger} alt="img " />
          <Name>
            <span>name</span>
            <span>discription</span>
            <Link id="farmland" to="/farmland" target="_blank">
              Farmland
            </Link>
          </Name>
        </EachCard>

        <h1>
          now make home page and products and card with links only then making
          all pages for all categories
        </h1>
      </Bottom>
    </MaintenantDiv>
  );
};

export default Homee;

const MaintenantDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

/**TOP DIV */
const Top = styled.div`
  display: flex;
  flex-direction: row;

  align-items: flex-end;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;

  margin: 10px 10px 50px 10px;
  padding: 10px;

  span {
    margin: 4px;

    :first-child {
      color: #d93936;
      font-size: 20px;
    }

    :nth-child(2) {
      color: black;
      font-size: 38px;
      font-weight: 500;
    }

    :last-child {
      color: gray;
      font-size: 24px;
    }
  }
`;

const Right = styled.div`
  display: flex;
  margin: 10px;
  img {
    width: 600px;
    height: 300px;
  }
`;

/**BOTTOM DIV */
const Bottom = styled.div`
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: center;
`;

const EachCard = styled.div`
  display: flex;
  margin: 10px;
  box-shadow: 0px 0px 5px 2px rgba(158, 158, 158, 0.75);
  -webkit-box-shadow: 0px 0px 5px 2px rgba(158, 158, 158, 0.75);
  -moz-box-shadow: 0px 0px 5px 2px rgba(158, 158, 158, 0.75);

  border-radius: 8px;

  width: 100%;

  img {
    display: flex;
    width: 600px;
    height: 300px;
    object-fit: cover;

    margin: 10px;

    border-radius: 10px;
  }

  span {
    margin: 4px;
    padding: 6px;
    font-size: 30px;
  }

  a {
    display: flex;
    justify-content: baseline;
  }
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: 10px;
`;
