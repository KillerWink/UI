import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';
import ImageLoader from '../ImageLoader';
import { CardWrapper, CardImage, CardTextWrapper, CardTextTitle, CardTextDetails } from './Card.style';

const Card = ({ imageUrl, title, details, styles }) => {
    const theme = useTheme();
    return (
        <CardWrapper theme={theme} styles={styles}>
            <CardImage>
                <ImageLoader imageUrl={imageUrl} />
            </CardImage>
            <CardTextWrapper>
                <CardTextTitle>
                    {title}
                </CardTextTitle>
                <CardTextDetails>
                    {details}
                </CardTextDetails>
            </CardTextWrapper>
        </CardWrapper>
    );
};

Card.propTypes = {
    image: PropTypes.string,
    title: PropTypes.node,
    details: PropTypes.node,
    styles: PropTypes.object,
};

export default Card;
