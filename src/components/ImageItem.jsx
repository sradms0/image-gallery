import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component for displaying an image
 *
 * @component
 * @example
 * const url = `https://farm${farm}.staticflickr.com/${server}`
 * return (<ImageItem url={url}/>);
 */
const ImageItem = props => (
  <li><img src={props.url} alt='' /></li>
);

ImageItem.propTypes = { url: PropTypes.string.isRequired };

export default ImageItem;
