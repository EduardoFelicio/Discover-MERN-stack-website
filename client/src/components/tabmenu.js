import React from 'react';
import {Tabs, Tab} from 'react-mdl';
import { NavHashLink as NavLink } from 'react-router-hash-link';

class TabMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: null };
    }

    render() {
        return (
            <div className="tab-menu">
                <Tabs className="tabs" activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })}>
                    <Tab className="tab">
                      <NavLink smooth to="/landingpage#abroad-id" activeClassName="selected" style={{color: "#ffffff", fontFamily: "denseregular", fontSize: "20px"}}>
                        Abroad
                      </NavLink>
                    </Tab>
                    <Tab className="tab">
                      <NavLink smooth to="/landingpage#university-id" activeClassName="selected" style={{color: "#ffffff", fontFamily: "denseregular", fontSize: "20px"}}>
                        University
                      </NavLink>
                    </Tab>
                    <Tab className="tab">
                      <NavLink smooth to="/landingpage#people-id" activeClassName="selected" style={{color: "#ffffff", fontFamily: "denseregular", fontSize: "20px"}}>
                        People
                      </NavLink>
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default TabMenu;
