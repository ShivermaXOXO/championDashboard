import { CardAvatar, CardAvatarWrapper, CardDetailWrapper, CardNameWrapper, FavHeader, Remove } from './dashboardStyles';
import { useFavourites } from '../context/FavouriteContext';

const Favourite = () => {
    const { favourites, removeFromFavourites } = useFavourites();
    return (
        <>
            <FavHeader>Favourites</FavHeader>
            {favourites.length === 0 ? (
                <p>No favourites yet</p>
            ) : (favourites.map((fav, index) => (
                <CardDetailWrapper key={index} flex="0.1" height="60px">
                <CardAvatarWrapper flex="0.08">
                        <CardAvatar src={fav.image_url}></CardAvatar>
                </CardAvatarWrapper>
                    <CardNameWrapper flex="0.87">{fav.name}</CardNameWrapper>
                    <Remove onClick={() => removeFromFavourites(fav.id)}>Remove</Remove>
            </CardDetailWrapper>
            )))}
        </>
    );
}

export default Favourite;
