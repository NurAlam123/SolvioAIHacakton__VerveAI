import moment from "moment";

interface TimeProps {
  time: string;
}

const Time = ({ time }: TimeProps) => {
  const formattedTime = moment(time).fromNow();

  return <time dateTime={time}>{formattedTime}</time>;
};

export default Time;
