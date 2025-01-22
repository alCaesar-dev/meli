const make = (data) => {
    return {
        author: {
            name: data.seller?.name ?? data.seller?.nickname ?? "",
            lastname: data.seller?.lastname ?? "",
        },
        item: {
            id: data.item.id,
            title: data.item.title,
            price: {
                currency: data.item.currency_id,
                amount: data.item.price,
                decimals: 0
            },
            picture: data.item.pictures[0].url,
            condition: data.item.condition,
            free_shipping: data.item.shipping.free_shipping,
            sold_quantity: 0,
            description: data.description?.plain_text ?? data.description?.text,
        }
    };
}

const collection = (data) => {
    return {
        author: {
            name: "",
            lastname: ""
        },
        categories: data.filters.map(({values}) => values.map(({name}) => name)),
        items: data.results.map((item) => ({
            id: item.id,
            location: item.address.state_name,
            author: {
                name: item.seller?.name ?? item.seller?.nickname ?? "",
                lastname: item.seller?.lastname ?? "",
            },
            title: item.title,
            price: {
                currency: item.currency_id,
                amount: item.price,
                decimals: 0
            },
            picture: item.thumbnail,
            condition: item.condition,
            sold_quantity: 0,
            free_shipping: item.shipping.free_shipping,
        }))
    };
}

export {collection, make};