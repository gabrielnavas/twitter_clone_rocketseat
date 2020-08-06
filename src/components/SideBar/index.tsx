import React from 'react';

import StickyBox from 'react-sticky-box';

import {
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body,
} from './styles';

import FollowSuggestion from '../FollowSuggestion';
import List from '../List';
import News from '../News';

const SideBar: React.FC = () => {
    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Buscar no Twitter" />
                <SearchIcon />
            </SearchWrapper>

            <StickyBox>
                <Body>
                    <List
                        title="Talvez você curta..."
                        elements={[
                            <FollowSuggestion
                                name="Luiz Batanero"
                                nickname="@luizbatanero"
                            />,
                            <FollowSuggestion
                                name="Luke Morales"
                                nickname="@lukemorales"
                            />,
                            <FollowSuggestion
                                name="Camila Magalhães"
                                nickname="@camilsaamgl"
                            />
                        ]}
                    />
                    <List
                        title="Talvez você curta..."
                        elements={[
                            <News />,
                            <News />,
                            <News />,
                        ]}
                    />
                </Body>
            </StickyBox>

        </Container>
    );
}

export default SideBar;