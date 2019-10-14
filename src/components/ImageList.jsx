import React from 'react';
import ImageItem from './ImageItem';
import NotFound from './NotFound';

export default props => {
  const imageItems = props.images.map(imageItem => 
    <ImageItem url={`https://farm${imageItem.farm}.staticflickr.com/${imageItem.server}/${imageItem.id}_${imageItem.secret}.jpg`}
               key={imageItem.id}
    />);

  const display = () => {
    if (imageItems.length > 0) return (<ul>{imageItems}</ul>);
    else return (<NotFound/>);
  }

  return (<div className='photo-container'>{display()}</div>);
}
