import React from 'react';

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

export default ImageItem;
