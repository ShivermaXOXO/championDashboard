import { CardAvatar, CardAvatarWrapper, CardDetailWrapper, CardNameWrapper, FavHeader, Remove } from './dashboardStyles';

function Favourite() {
    return (
        <>
            <FavHeader>Favourites</FavHeader>
            <CardDetailWrapper flex="0.1" height="60px">
                <CardAvatarWrapper flex="0.08">
                    <CardAvatar></CardAvatar>
                </CardAvatarWrapper>
                <CardNameWrapper flex="0.87"></CardNameWrapper>
                <Remove>Remove</Remove>
            </CardDetailWrapper>
        </>
    );
}

export default Favourite;
