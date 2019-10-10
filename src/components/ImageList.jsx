import React from 'react';
import ImageItem from './ImageItem';

export default props => {
  const imageItems = props.images.map(imageItem => 
    <ImageItem url={`https://farm${imageItem.farm}.staticflickr.com/${imageItem.server}/${imageItem.id}_${imageItem.secret}.jpg`}
               key={imageItem.id}
    />);

  const display = () => {
    if (imageItems.length > 0) return (<ul>{imageItems}</ul>);
    else return (<p>That search did not return any results, please try again</p>);
  }

  return (<div className='photo-container'>{display()}</div>);
}
