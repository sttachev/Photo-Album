import { useState, useEffect } from "react";
import Photo from './Photo';


const LOCAL_STORAGE_KEY = "favorites";

export default function Album1(props) {
    const [photos, setPhotos] = useState([]);
    const filteredPhotos = photos.filter(photo => photo.albumId === 1);
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
    );
    const { url, title, id, albumId, thumbnailUrl } = props;

    useEffect(() => {
        if (favorites.length > 0) { localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favorites)) }
    }, [favorites]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setPhotos(data);
            });
    }, []);

    function handleFavorite(id) {
        const newFavorites = favorites.map(item => {
            return item.id === id ? { ...item, favorite: !item.favorite } : item;
        });

        setFavorites(newFavorites);
    };

    return (<>
        <div>
            <h1>Album 1 - Photos {filteredPhotos.length}</h1>
            <div className="container">
                <div className="row">
                    <div className="col-12 row">
                        {favorites.filter(photo => photo.albumId === 1).map(item => {
                            return (
                                <Photo
                                    key={item.id}
                                    item={item}
                                    thumbnailUrl={thumbnailUrl}
                                    albumId={albumId}
                                    id={id}
                                    title={title}
                                    url={url}
                                    onFavoriteAdd={handleFavorite}></Photo>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}