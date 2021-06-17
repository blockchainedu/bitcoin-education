import React from "react"
import MobileDropdown from "./mobileDropdown"

class NationalTeamCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            toggle: false
        }
        
    }

    onClickFilp = () => {
        this.props.setGlobalClick(true);
        this.setState({toggle: !this.state.toggle})     
    } 

    render() {
        return (
            <div className="text-center m-auto">
                <div>
                    <div className={"flip-card " + (this.state.toggle && this.props.globalClick ? "hover" : "")}>
                        <div className="flip-card-inner" onClick={() => this.onClickFilp()} >
                            <div className="flip-card-front">
                                <img className="m-auto" src={this.props.image} filp-card-container="true"/>
                            </div>
                            <div className="flip-card-back text-black font-mont p-5 text-sm text-left">
                                <div filp-card-container="true">Ashton Barger is a Past President of the Miami University Blockchain Club and a 2020 Graduate of Miami University of Ohio. He currently works full time as an Account Manager for Zebu Digital, a Crypto and Blockchain Marketing Agency. He has been volunteering as the President of BEN USA since January of 2021 and is loving the progress the team has made since joining BEN. In his free time he enjoys hiking, skiing,</div>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="font-mont font-bold text-xl text-black pt-5">{this.props.name}</h3>
                <div className="text-bengrey-300">{this.props.title}</div>
            </div>
        )
    }
}

// const NationalTeamCard = (props) => {

    
    
    
// }

export default NationalTeamCard