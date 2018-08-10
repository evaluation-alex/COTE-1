import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "../atoms/Icon/Icon";
import { Title } from '../atoms/Typography';
import DetailsCard from '../DropdownCard/DetailsCard';
import DropdownCard from "../DropdownCard/DropdownCard";
import { colors as defaultColors } from "../../styles/defaults";


const Wrapper = styled.div`
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14);
`;

const AddIcon = styled(Icon)`
  color: ${props => props.theme.colorPrimary ? props.theme.colorPrimary : defaultColors.black};
`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1em;
  justify-content: space-between;
  text-align: center;
  border-bottom: 1px solid #eeeeee
`;

const DetailCardWrapper = styled.div`
  height: 350px;;
  overflow: auto;
`

class CardSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdding: false,
        };
    }

    handleClick() {
        this.setState({ isAdding: true });
    }

    render() {
        const { details, title } = this.props;
        return (
            <Wrapper>
                <TopWrapper>
                    <Title bold>{title}</Title>
                    <AddIcon name="add" onClick={this.handleClick} />
                </TopWrapper>
                <DetailCardWrapper>
                    {details.map((detail) => (
                        <DropdownCard title={detail.title} underline={true}>
                            <DetailsCard links={detail.links} allDetails={detail.allDetails} underline={true} />
                        </DropdownCard>
                    ))}
                </DetailCardWrapper>
            </Wrapper>
        );
    }

}

export default CardSlider;
