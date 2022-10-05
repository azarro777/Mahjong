import React from 'react';
import {Provider} from 'react-redux';
import { Card } from './components/card/Card';
import { Navbar } from './components/navbar/Navbar';
import { ControlPanel } from './components/control-panel/ControlPanel';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from './App';

const mockStore = configureMockStore([thunk]);

describe('Testing <App/>', () => {
  it('should render a Navbar, ControlPanel, Card component', () => {
    const store = mockStore({
      filteredQuotes: [{ticker: 'Google'},{ticker: 'Tesla'}]
    });
    const wrapper = shallow(
      <Provider store={store}>
        <App>
          <Navbar/>
          <ControlPanel/>
          <Card/>
        </App>
      </Provider>
    );
    expect(wrapper.find(Navbar).exists()).toBe(true);
    expect(wrapper.find(ControlPanel).exists()).toBe(true);
    expect(wrapper.find(Card).exists()).toBe(true);
  })
})
