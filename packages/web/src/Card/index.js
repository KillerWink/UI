import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';
import ImageLoader from '../ImageLoader';
import { CardWrapper, CardImage, CardTextTitle, CardTextDetails } from './Card.style';

const Card = ({ children, styles }) => {
    const theme = useTheme();
    return (
        <CardWrapper theme={theme} styles={styles}>
            {children}
        </CardWrapper>
    );
};

Card.Image = ({imageUrl}) => {
    const theme = useTheme();
    return (
        <CardImage theme={theme}>
            <ImageLoader imageUrl={imageUrl} />
        </CardImage>
    );
};

Card.Title = ({children}) => {
    return (
        <CardTextTitle>
            {children}
        </CardTextTitle>
    );
};

Card.Details = ({children}) => {
    return (
        <CardTextDetails>
            {children}
        </CardTextDetails>
    );
};

Card.propTypes = {
    image: PropTypes.string,
    title: PropTypes.node,
    details: PropTypes.node,
    styles: PropTypes.object,
};

export default Card;
