import apiServices from "./apiServices";

// =========================
// PRODUCT APIs
// =========================

// Get all products
export const getProductsApi = () => {
  return apiServices.get("/products");
};

// Get single product
export const getProductByIdApi = (id) => {
  return apiServices.get(`/products/${id}`);
};

// Add new product
export const addProductApi = (data) => {
  return apiServices.post("/products", data);
};

// Update product
export const updateProductApi = (id, data) => {
  return apiServices.put(`/products/${id}`, data);
};

// Delete product
export const deleteProductApi = (id) => {
  return apiServices.delete(`/products/${id}`);
};


// =========================
// CART APIs
// =========================

// Get all cart items
export const getCartApi = () => {
  return apiServices.get("/cart");
};

// Add product to cart
export const addToCartApi = (data) => {
  return apiServices.post("/cart", data);
};

// Update cart item
export const updateCartApi = (id, data) => {
  return apiServices.put(`/cart/${id}`, data);
};

// Delete cart item
export const deleteFromCartApi = (id) => {
  return apiServices.delete(`/cart/${id}`);
};


// =========================
// WISHLIST APIs
// =========================

// Get all wishlist items
export const getWishlistApi = () => {
  return apiServices.get("/wishlist");
};

// Add product to wishlist
export const addToWishlistApi = (data) => {
  return apiServices.post("/wishlist", data);
};

// Delete product from wishlist
export const deleteFromWishlistApi = (id) => {
  return apiServices.delete(`/wishlist/${id}`);
};