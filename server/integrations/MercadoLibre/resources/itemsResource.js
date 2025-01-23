const make = (data) => {
    return {
        author: {
            name: "",
            lastname: ""
        },
        item: {
            id: "",
            title: "",
            price: {
                currency: "",
                amount: "",
                decimals: ""
            },
            picture: "",
            condition: "",
            free_shipping: "",
            sold_quantity: "",
            description: "",
        }
    };
}

export default make;