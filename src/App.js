import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { addFeature, removeFeature } from './actions/actions'
import { connect } from 'react-redux';

const App = ({ addFeature, removeFeature, additionalPrice, additionalFeatures, car }) => {


  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={additionalFeatures}
          addFeature={addFeature} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};


function mapStateToProps(state) {
  return {
    additionalPrice: state.additionalPrice,
    additionalFeatures: state.additionalFeatures,
    car: state.car
  };
}

export default connect(mapStateToProps, { addFeature, removeFeature })(App);
