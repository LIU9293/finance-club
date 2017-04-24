/**
* @flow
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
      <SectionTitle>{'你需要:'}</SectionTitle>
      <JobNeed>
        {props.needs.map(item => (
          <JobNeedItem key={Math.random()}>{item}</JobNeedItem>
        ))}
      </JobNeed>
    </div>
  );
}

export default JobItem;
