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
       var tag="thailand";
       this.props.onSelectTag(tag);
    }
    handleLangChange2 = () => {
       var tag="paris";
       this.props.onSelectTag(tag);
    }
    handleLangChange3 = () => {
       var tag="pirates";
       this.props.onSelectTag(tag);
    }
    handleLangChange4 = () => {
       var tag="latada";
       this.props.onSelectTag(tag);
    }
    handleLangChange5 = () => {
       var tag="boys";
       this.props.onSelectTag(tag);
    }
    handleLangChange6 = () => {
       var tag="ahri";
       this.props.onSelectTag(tag);
    }
    handleLangChange7 = () => {
       var tag="locked";
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
                      Thailand
                    </Tab>
                    <Tab className="tab" onClick={this.handleLangChange2}>
                      Paris
                    </Tab>
                    <Tab className="tab" onClick={this.handleLangChange3}>
                      House of Pirates
                    </Tab>
                    <Tab className="tab" onClick={this.handleLangChange4}>
                      Latada
                    </Tab>
                    <Tab className="tab" onClick={this.handleLangChange5}>
                      Me and the Boys
                    </Tab>
                    <Tab className="tab" onClick={this.handleLangChange6}>
                      Ahri
                    </Tab>
                    <Tab className="tab" onClick={this.handleLangChange7}>
                      Locked
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default TabMenu;
