import { connect } from 'react-redux'
import actions from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.category
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(actions.setCategory(ownProps.filter))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)