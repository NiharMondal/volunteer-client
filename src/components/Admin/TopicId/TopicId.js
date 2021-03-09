import React from 'react';
import {useParams} from 'react-router-dom'
import Default from "../Default/Default";
import AddEvent from '../AddEvent/AddEvent';
const TopicId = () => {
  let { topicId } = useParams();
  
  return (
    <div>
      {
        topicId === "add-event" ? <AddEvent /> : <Default/>
      }
    </div>
  );
};

export default TopicId;