import { styled } from "@mui/material";
import Man from "../../assets/images/man-bg1.png";

const TimelineContainer = styled("ul")`
  list-style: none;
  margin: 8px 0 8px 35px;
  padding: 0;
`;

const TimelineItem = styled("li")`
  border-left: solid 2px #eee;
  margin: 0;
  padding: 0 0 20px 15px;
  font-size: 13.5px;
  color: #787878;
  p {
    margin: 0;
    span {
      color: black;
    }
  }
  &:before {
    content: "";
    border: solid 2px var(--primary-color);
    width: 4px;
    height: 4px;
    border-radius: 50px;
    -moz-border-radius: 50px;
    -webkit-border-radius: 50px;
    margin-left: -20px;
    margin-top: 4.5px;
    font-weight: 400;
    background: #fff;
    display: block;
    position: absolute;
  }
  &:last-child {
    border-left: solid 2px transparent;
    margin-top: -4.5px;
  }
  &:first-child {
    padding-bottom: 5px;
    position: relative;
  }
  &:first-child::before {
    content: "";
    margin-left: -40px;
    margin-top: -30px;
    margin-bottom: 20px;
    position: relative;
    border: 0;
    width: 20px;
    height: 20px;
    padding: 14px 14px;
    background: var(--primary-color) !important;
    box-shadow: 0px 2px 32px 0px rgb(4 123 248 / 30%);
  }

  &:first-child::after {
    content: "";
    background: url(${Man}) no-repeat;
    width: 50px;
    height: 50px;
    position: absolute;
    top: 0;
    left: 0;
    margin: 0px -26px;
    background-size: 100% 100%;
  }
`;

const Timeline = () => {
  return (
    <TimelineContainer>
      <TimelineItem></TimelineItem>
      <TimelineItem>
        <p>
          <span>Name:</span> Ebuka Chuqz
        </p>
      </TimelineItem>
      <TimelineItem>
        <p>
          <span>Birthday:</span> 15 February
        </p>
      </TimelineItem>
      <TimelineItem>
        <p>
          <span>Job:</span> Freelancer
        </p>
      </TimelineItem>
      <TimelineItem>
        <p>
          <span>Email:</span> echuqz@gmail.com
        </p>
      </TimelineItem>
      <TimelineItem>
        <p>
          <span>Twitter:</span> @EbukaChuqz
        </p>
      </TimelineItem>
    </TimelineContainer>
  );
};

export default Timeline;
