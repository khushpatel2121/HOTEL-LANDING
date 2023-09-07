import React, { useEffect, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { FaLocationArrow } from "react-icons/fa";
import { AiFillCalendar } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ scrollNav }) => (scrollNav ? "transparent" : "white")};
  height: 100px;
  margin-top: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 2;
  color: ${({ scrollNav }) => (scrollNav ? "White" : "black")};
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
`;

const Right = styled.div`
  flex: 2;
  align-items: center;
  display: flex;
  justify-content: center;

  font-size: 1.5rem;
`;
const Auth = styled.div`
  display: flex;
  gap: 15px;
  margin-left: 30px;
`;

const Sign = styled.div`
  display: flex;
  justify-self: end;
  cursor: pointer;
  background-color: transparent;
  font-size: 1.2rem;
  color: #a78c59;
`;

const Left = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Logo = styled.div`
  display: flex;
  gap: 0.2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #a78c59;
`;

const Logo1 = styled.div`
  font-size: 3rem;
  font-family: "Righteous", cursive;
`;

const Logo2 = styled.div`
  font-size: 0.7rem;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;

  height: 70px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;

  border: 3px solid #a78c59;
  font-family: "Roboto";
  background-color: white;
  color: ${({ scrollNav }) => (scrollNav ? "black" : "white")};
`;

const MenuItem1 = styled.li`
  font-weight: 100;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  width: 100%;
  gap: 10px;
`;
const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  font-size: 1rem;
  font-family: "Roboto";
  color: ${({ scrollNav }) => (scrollNav ? "black" : "black")};
  background-color: transparent;
`;
const Icon = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #a78c59;
`;

const MenuItem2 = styled.li`
  font-weight: 100;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  width: 100%;
`;

const MMenuItem = styled.li`
  font-weight: 100;
  height: 70px;
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  border-left: 2px solid #a78c59;
  border-right: 2px solid #a78c59;
  position: relative;
`;
const Date1 = styled.div`
  position: absolute;
  top: 80px;

  user-select: none;
`;
const Span = styled.span`
  cursor: pointer;
  font-size: 0.8rem;
  color: gray;
`;

const Options = styled.div`
  z-index: 2;
  position: absolute;
  top: 90px;
  background-color: white;
  color: grey;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
`;
const OptionsItems = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;

const OptionText = styled.span`
font-size: 20px;
`;

const OptionCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: black;
`;

const OptionCounterNumber = styled.span``;

const Button = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #a78c59;
  color: #a78c59;
  cursor: pointer;
  background-color: white;
`;

const Navbar = () => {
  const date = new Date();
  const [scrollNav, setNav] = useState(true);
  const [openDate, setOpenDate] = useState(false);
  const [dates, setdate] = useState([
    {
      startDate: date,
      endDate: date,
      key: "selection",
    },
  ]);

  const [openOptions, setopenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    Children: 0,
    Room: 1,
  });

  const handleOptions = (name, operations) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operations === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setNav(false);
    } else {
      setNav(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  return (
    <Container scrollNav={scrollNav}>
      <Nav>
        <Left>
          <Logo>
            <Logo1>Happy.</Logo1>
            <Logo2>HOTELS</Logo2>
          </Logo>
        </Left>
        <Right>
          <Menu scrollNav={scrollNav}>
            <MenuItem1>
              <Icon>
                <FaLocationArrow />
              </Icon>
              <Input scrollNav={scrollNav} placeholder="Location?" />
            </MenuItem1>

            <MMenuItem>
              <Icon>
                <AiFillCalendar />
              </Icon>
              <Span onClick={() => setOpenDate(!openDate)}>{`${format(
                dates[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</Span>
              {openDate && (
                <>
                  <Date1>
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setdate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={dates}
                      className="date"
                      minDate={new Date()}
                    />
                  </Date1>
                </>
              )}
            </MMenuItem>
            <MenuItem2>
              <Icon>
                <BsFillPersonFill />
              </Icon>
              <Span onClick={() => setopenOptions(!openOptions)}>
                {`${options.adult} adult · ${options.Children} children · ${options.Room} room`}{" "}
              </Span>
              {openOptions && (
                <Options>
                  <OptionsItems>
                    <OptionText>Adult</OptionText>
                    <OptionCounter>
                      <Button
                        disabled={options.adult <= 1}
                        onClick={() => handleOptions("adult", "d")}
                      >
                        -
                      </Button>
                      <OptionCounterNumber>{options.adult}</OptionCounterNumber>
                      <Button onClick={() => handleOptions("adult", "i")}>
                        +
                      </Button>
                    </OptionCounter>
                  </OptionsItems>
                  <OptionsItems>
                    <OptionText>Children</OptionText>
                    <OptionCounter>
                      <Button
                        disabled={options.Children <= 0}
                        onClick={() => handleOptions("Children", "d")}
                      >
                        -
                      </Button>
                      <OptionCounterNumber>{options.Children}</OptionCounterNumber>
                      <Button onClick={() => handleOptions("Children", "i")}>
                        +
                      </Button>
                    </OptionCounter>
                  </OptionsItems>{" "}
                  <OptionsItems>
                    <OptionText>Room</OptionText>
                    <OptionCounter>
                      <Button
                        disabled={options.Room <= 1}
                        onClick={() => handleOptions("Room", "d")}
                      >
                        -
                      </Button>
                      <OptionCounterNumber>{options.Room}</OptionCounterNumber>
                      <Button onClick={() => handleOptions("Room", "i")}>
                        +
                      </Button>
                    </OptionCounter>
                  </OptionsItems>
                </Options>
              )}
            </MenuItem2>
          </Menu>
          <Auth>
            <Sign scrollNav={scrollNav}>Login</Sign>
            <Sign scrollNav={scrollNav}>register</Sign>
          </Auth>
        </Right>
      </Nav>
    </Container>
  );
};

export default Navbar;
