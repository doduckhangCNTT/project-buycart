//file này để chứa danh sách các sản phẩm
var initialState = [
    {
        id:1,
        name: 'iphone 7 plush',
        description: 'Sản phẩm tại Việt Nam',
        price: 5000,
        image: 'https://images.unsplash.com/photo-1519923834699-ef0b7cde4712?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80',
        inventory: 10,
        rating: 3
    },
    {
        id:2,
        name: 'iphone 7 plush',
        description: 'Sản phẩm tại Nhật Bản',
        price: 45000,
        image: 'https://images.unsplash.com/photo-1501162946741-4960f990fdf4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        inventory: 4,
        rating: 2
    },
    {
        id:3,
        name: 'iphone 7 plush',
        description: 'Sản phẩm tại USA',
        price: 5000,
        image: 'https://images.unsplash.com/photo-1592898741947-bc9570c9f5bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80',
        inventory: 16,
        rating: 4
    },
    {
        id:4,
        name: 'iphone 7 plush',
        description: 'Sản phẩm tại Đức',
        price: 46000,
        image: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1266&q=80',
        inventory: 9,
        rating: 1
    },
    {
        id:5,
        name: 'iphone 7 plush',
        description: 'Sản phẩm tại Anh',
        price: 10000,
        image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1059&q=80',
        inventory: 5,
        rating: 5
    },
]

const products = (state = initialState, action) => {
    switch (action.type)  {
        
        default: return [...state];
    }
}

export default products;