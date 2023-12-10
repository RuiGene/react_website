import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import HotelIcon from '@mui/icons-material/Hotel';
import Typography from '@mui/material/Typography';

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
        >
          August, 2002
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot variant="outlined" color="primary">
            <ChildCareIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx = {{ m: 'auto 0' }}>
          <Typography variant="h6" component="span">
            The day I was born!
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
        >
          January, 2017
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot variant="outlined" color="primary">
            <ChildCareIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx = {{ m: 'auto 0' }}>
          <Typography variant="h6" component="span">
            Started highschool at WBHS
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
        >
          January, 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot variant="outlined" color="primary">
            <ChildCareIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx = {{ m: 'auto 0' }}>
          <Typography variant="h6" component="span">
            Commenced a BEng(Hons)/BCom at the University of Auckland
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
        >
          November, 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot variant="outlined" color="primary">
            <ChildCareIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx = {{ m: 'auto 0' }}>
          <Typography variant="h6" component="span">
            Started my first internship at Squirrel as a Data Intern
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
        >
          January, 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot variant="outlined" color="primary">
            <ChildCareIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx = {{ m: 'auto 0' }}>
          <Typography variant="h6" component="span">
            Commenced a BEng(Hons)/BCom at the University of Auckland
          </Typography>
        </TimelineContent>
      </TimelineItem>

    </Timeline>
  );
}