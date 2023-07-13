export interface ListItemProps {
    state: string,
    listing_id: number,
    url: string,
    MainImage: {
        url_570xN: string,
        listing_image_id: string,
    },
    title: string,
    currency_code: string,
    price: string,
    quantity: number,
}