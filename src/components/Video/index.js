import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

const Video = ({ className, url }) => {
    return (
        <video
            autoPlay
            className={`${styles.video} ${className}`}
            key={url}
            loop="loop"
            muted
            controls
            data-test="video">
            <source src={url} />
            <p>Para ver o video por favor habilite JavaScript e considere atualizar para um navegador que suporte <a href="http://videojs.com/html5-video-support/">Video HTML 5</a>.</p>
        </video>
    );
}

Video.propTypes = {
    className: PropTypes.string,
    url: PropTypes.string.isRequired
};

Video.defaultProps = {
    className: ''
};

export default Video;