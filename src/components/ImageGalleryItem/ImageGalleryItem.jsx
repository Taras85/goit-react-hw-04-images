import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ webformatURL, largeImageURL, tags, onOpenModal }) {
    return (
        <li className={s.Item}>
            <img 
            className={s.Image}
                src={webformatURL}
                data-source={largeImageURL}
                alt={tags}
                onClick={onOpenModal}
            />
        </li>
    );
}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL:PropTypes.string.isRequired,
    tags:PropTypes.string.isRequired, 
}

export default ImageGalleryItem;