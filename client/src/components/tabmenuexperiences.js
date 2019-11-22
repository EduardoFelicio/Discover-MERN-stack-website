import React,{Component} from 'react';
import {Tabs, Tab} from 'react-mdl';

class TabMenu extends Component {

    constructor(props) {
        super(props)
        this.state = { activeTab: 0,
          selectedTag: null,};
    }
    handleLangChange0 = () => {
       var tag="all";
       this.props.onSelectTag(tag);
    }
    handleLangChange1 = () => {
       var tag="hiking";
       this.props.onSelectTag(tag);
    }
    handleLangChange2 = () => {
       var tag="paris";
       this.props.onSelectTag(tag);
    }
    handleLangChange3 = () => {
       var tag="snow";
       this.props.onSelectTag(tag);
    }
    handleLangChange4 = () => {
       var tag="university";
       this.props.onSelectTag(tag);
    }
    handleLangChange5 = () => {
       var tag="tech";
       this.props.onSelectTag(tag);
    }

    render() {
        return (
            <div className="tab-menu">
                <Tabs className="tabs" activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })}>
                    <Tab className="tab" onClick={this.handleLangChange0}>
                      All
                    </Tab>
                    <Tab className="tab" onClick={this.handleLangChange1}>
                      Hiking
                    </Tab>
                    <Tab className="tab" onClick={this.handleLangChange2}>
                      Paris
                    </Tab>
                    <Tab className="tab" onClick={this.handleLangChange3}>
                      Snow
                    </Tab>
                    <Tab className="tab" onClick={this.handleLangChange4}>
                      University
                    </Tab>
                    <Tab className="tab" onClick={this.handleLangChange5}>
                      Tech
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default TabMenu;
