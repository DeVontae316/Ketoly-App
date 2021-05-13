export default function cartReducer(state, action) {
    const { payload, type } = action;

    switch (type) {
        case 'ADD_CART_ITEM':
            console.log("payload recieved below:")
            console.log({ ...payload })
            return {
                ...state,
                cartItems: [...state.cartItems, { ...payload }],
            }
        case 'ADD_CART_TOTAL':
            const newCart = state.cartItems.map((item) => {
                if (item.id === payload) {
                    return {
                        ...item,
                        amount: item.amount + 1
                    }

                }
                return item;
            })
            return {
                ...state,
                totalCartAmount: state.totalCartAmount + 1,
                cartItems: newCart,
            }
        case 'ADD_CART_TOTAL_ITEM':
            console.log("add dispatch hit");
            const increaseItemAmount = state.cartItems.map((item, index) => {
                if (item.id === payload) {
                    console.log("item below:");
                    console.log(item);
                    return { ...item, amount: item.amount + 1 }
                }
                return item;
            })

            return {
                ...state,
                cartItems: increaseItemAmount
            }
        case 'DECREASE_CART_TOTAL_ITEM':
            const decreaseItemAmount = state.cartItems.map((item) => {
                if (item.id === payload && item.amount !== 0) {
                    return { ...item, amount: item.amount - 1 }
                }
                return item;
            })
            return {
                ...state,
                cartItems: decreaseItemAmount,
            }
        case 'CART_TOTAL_PRICE':
            const { total } = state.cartItems.reduce((acc, item) => {
                const { price, amount } = item;
                const modifiedPrice = parseFloat(price.slice(1, 5));
                const itemTotal = modifiedPrice * amount;
                /*   console.log(acc.total + ' total');
                  console.log(modifiedPrice + ' price') */
                acc.total += itemTotal;
                return acc;


            }, {
                total: 0,

            })
            return {
                ...state,
                totalPrice: total

            }
        case 'DELETE_CART_ITEM':
            const deletedItemCart = state.cartItems.filter(item => item.id !== payload);
            const totalCartItems = deletedItemCart.length;
            return {
                ...state,
                cartItems: deletedItemCart,
                totalCartAmount: totalCartItems,
            }
        case 'CLEAR_CART':
            return {
                ...state,
                cartItems: [],
                totalCartAmount: [],
            }

        default:
            return {
                state,
            }
    }
}