import React from 'react';
import { TrainersServiceConsumer } from '../TrainersServiceContext';

const withTrainersService = () => (Wrapped) => {

  return (props) => {
    return (
      <TrainersServiceConsumer>
        {
          (trainersService) => {
            return (<Wrapped {...props}
                trainersService={trainersService}/>);
          }
        }
      </TrainersServiceConsumer>
    );
  }
};

export default withTrainersService;
