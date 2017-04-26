/**
* JobItem
*/
import React from 'react';
import {
  JobTitle,
  JobDescription,
  JobNeed,
  JobNeedItem,
  SectionTitle
} from './style';

type jobItemProps = {
  jobTitle: string,
  needs: array
}

function JobItem(props: jobItemProps) {
  return (
    <div>
      <JobTitle>
        {props.jobTitle}
      </JobTitle>
      <JobDescription></JobDescription>
      <SectionTitle>{'岗位要求:'}</SectionTitle>
      <JobNeed>
        {props.needs.map(item => (
          <JobNeedItem key={Math.random()}>{item}</JobNeedItem>
        ))}
      </JobNeed>
      <SectionTitle>{'工作内容:'}</SectionTitle>
      <JobNeed>
        {props.jobs.map(item => (
          <JobNeedItem key={Math.random()}>{item}</JobNeedItem>
        ))}
      </JobNeed>
      <SectionTitle>{'工作福利:'}</SectionTitle>
      <JobNeed>
        {props.benefits.map(item => (
          <JobNeedItem key={Math.random()}>{item}</JobNeedItem>
        ))}
      </JobNeed>
    </div>
  );
}

export default JobItem;
