import React, { Component } from 'react';
import BandInput from './BandInput';
import Band from  './Band';
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>
          {this.props.bands.map(band => <Band key={band.id} delete = {this.props.delete} band = {band}/> )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  delete: bandId => dispatch({type: "DELETE_BAND", id: bandId})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
