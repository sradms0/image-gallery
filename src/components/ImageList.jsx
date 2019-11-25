import React from 'react';
import ImageItem from './ImageItem';
import NotFound from './NotFound';

/**
 * Component for displaying a list of images
 *
 * @component
 * @example
 * const images = [{"id": "11111111111", "owner": "111111111@111", ...}, {...}, {...}];
 * return(<ImageList images={images}/>);
 */
const ImageList = props => {
  const imageItems = props.images.map(imageItem => 
    <ImageItem url={`https://farm${imageItem.farm}.staticflickr.com/${imageItem.server}/${imageItem.id}_${imageItem.secret}.jpg`}
               key={imageItem.id}
    />);

  return (
    <div className='photo-container'>
      <h2>{props.title}</h2>
      <ul>{imageItems.length > 0 ? imageItems: <NotFound/>}</ul>
    </div>
  );
}

export default ImageList;
