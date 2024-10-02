import { useState } from "react";
import Lightbox from 'react-18-image-lightbox';

export default function Photo(props) {
    const { item } = props;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="photo col-4">
            <div className="product-image-container">

                <img
                    src={item.thumbnailUrl}
                    onClick={() => setIsOpen(true)}
                    className="product-image"
                    alt={item.title}
                />
                {isOpen && (
                    <Lightbox
                        mainSrc={item.url}
                        onCloseRequest={() => setIsOpen(false)}
                    />
                )}
            </div>
            <div className="product-info">

                <button className="btn btn-success"
                    onClick={() => {
                        props.onFavoriteAdd(item.id);
                    }}
                >
                    {item.favorite ? "Remove from Favourites" : "Add to Favourites"}
                </button>

                <h4>Title - {item.title}</h4>
                <p className="details">AlbumId : {item.albumId}</p>
                <p className="details">Id : {item.id}</p>
            </div>
        </div>
    )
}