import React, {Component} from 'react'
import Spinner from '../Spinner'
import ErrorIndicator from '../ErrorIndicator'
import { fetchTrainers } from '../../actions'
import withTrainersService from '../../hoc/withTrainersService'
import { connect } from 'react-redux'
import {compose} from '../../utils'
import Trainer from './Trainer'

const Trainers = ({trainers}) => {
    <ul className="trainers__list">
        {
            trainers.map((trainer) => {
                return (
                     <li key={trainer.id} >
                        <Trainer trainerClass={trainer.trainerClass} 
                        fullName={trainer.fullName}
                        info={trainer.info} />
                    </li>
                )
            })
        }
    </ul>
}

class TrainersPageContainer extends Component {
    componentDidMount() {
        this.props.fetchTrainers();
    }
    render() {
        const { trainers, loading, error } = this.props;
    
        if (loading) {
          return <Spinner />;
        }
    
        if (error) {
          return <ErrorIndicator />;
        }
    
        return <Trainers trainers={trainers}/>;
    }
}

const mapStateToProps = ({ trainers, loading, error }) => {
    return { trainers, loading, error };
  };
  
  const mapDispatchToProps = (dispatch, { trainersstoreService }) => {
  
    return {
        fetchTrainers: fetchTrainers(trainersstoreService, dispatch),
    };
  };
  
export default compose(
    withTrainersService(),
    connect(mapStateToProps, mapDispatchToProps))(TrainersPageContainer);
