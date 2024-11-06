class Product {
    constructor(
      id,
      name,
      features,
      description,
      image, 
      brand,
      type,
      precio,
      stock,
      garantia,
      user, 
    ) {
      this.id = id;
      this.name = name;
      this.features = features;
      this.description = description;
      this.image = image; 
      this.brand = brand;
      this.type = type;
      this.precio = precio;
      this.stock = stock;
      this.garantia = garantia;
      this.user = user;
    }
  }
  
  export default Product;