/**
* @flow
* JobItem
*/
import React from 'react';
import {
  JobTitle
} from './style';

type jobItemProps = {
  jobTitle: string
}

function JobItem(props: jobItemProps) {
  return (
    <div>
      <JobTitle>
        {props.jobTitle}
      </JobTitle>
    </div>
  );
}

export default JobItem;
