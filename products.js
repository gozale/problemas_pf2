class Product {
    constructor(key, description, price, type, existence, min_existence, max_existence) {
      this.key = key;
      this.description = description;
      this.price = price;
      this.type = type;
      this.existence = existence;
      this.min_existence = min_existence;
      this.max_existence = max_existence;
    }
  }
  
  const Products = [
    new Product("01", "Aceite vegetal", 5.99, "Aceites y grasas", 50, 20, 100),
    new Product("02", "Aceite de oliva", 25, "Aceites y grasas", 25, 10, 50),
    new Product("03", "Aceite de coco", 10.99, "Aceites y grasas", 35, 15, 70),
    new Product("04", "Aceite de girasol", 7.99, "Aceites y grasas", 70, 30, 150),
    new Product("05", "Aceitulas", 3.99, "Conservas y enlatados", 20, 10, 40),
    new Product("06", "Aderezo para ensaladas", 2.99, "Salsas y condimentos", 40, 20, 60),
    new Product("07", "Aderezo ranch", 2.99, "Salsas y condimentos", 25, 5, 30),
    new Product("08", "Aderezo mil islas", 2.99, "Salsas y condimentos", 15, 5, 20),
    new Product("09", "Ají amarillo", 1.99, "Salsas y condimentos", 30, 10, 50),
    new Product("10", "Ají rocoto", 1.99, "Salsas y condimentos", 40, 20, 60),
    new Product("11", "Ají panca", 1.99, "Salsas y condimentos", 25, 5, 30),
    new Product("12", "Pasta dental", 20.00, "Cuidado personal", 15, 5, 20),
    new Product("13", "Arroz", 12.50, "Alimentos", 30, 10, 50),
    new Product("14", "Frijol", 15.75, "Alimentos", 40, 20, 60),
    new Product("15", "Jabón de barra", 10.50, "Cuidado personal", 25, 5, 30),
    new Product("16", "Pasta dental", 20.00, "Cuidado personal", 15, 5, 20),
    new Product("17", "Arroz", 12.50, "Alimentos", 30, 10, 50),
    new Product("18", "Frijol", 15.75, "Alimentos", 40, 20, 60),
    new Product("19", "Jabón de barra", 10.50, "Cuidado personal", 25, 5, 30),
    new Product("20", "Pasta dental", 20.00, "Cuidado personal", 15, 5, 20),
    new Product("21", "Arroz", 12.50, "Alimentos", 30, 10, 50),
    new Product("22", "Frijol", 15.75, "Alimentos", 40, 20, 60),
    new Product("23", "Jabón de barra", 10.50, "Cuidado personal", 25, 5, 30),
    new Product("24", "Pasta dental", 20.00, "Cuidado personal", 15, 5, 20),
    new Product("25", "Arroz", 12.50, "Alimentos", 30, 10, 50),
    new Product("26", "Frijol", 15.75, "Alimentos", 40, 20, 60),
    new Product("27", "Jabón de barra", 10.50, "Cuidado personal", 25, 5, 30),
    new Product("28", "Pasta dental", 20.00, "Cuidado personal", 15, 5, 20),
    new Product("29", "Arroz", 12.50, "Alimentos", 30, 10, 50),
    new Product("30", "Frijol", 15.75, "Alimentos", 40, 20, 60),
    new Product("31", "Jabón de barra", 10.50, "Cuidado personal", 25, 5, 30),
    new Product("32", "Pasta dental", 20.00, "Cuidado personal", 15, 5, 20),
    new Product("33", "Arroz", 12.50, "Alimentos", 30, 10, 50),
    new Product("34", "Frijol", 15.75, "Alimentos", 40, 20, 60),
    new Product("35", "Jabón de barra", 10.50, "Cuidado personal", 25, 5, 30),
    new Product("36", "Pasta dental", 20.00, "Cuidado personal", 15, 5, 20),
    new Product("37", "Arroz", 12.50, "Alimentos", 30, 10, 50),
    new Product("38", "Frijol", 15.75, "Alimentos", 40, 20, 60),
    new Product("39", "Jabón de barra", 10.50, "Cuidado personal", 25, 5, 30),
    new Product("40", "Pasta dental", 20.00, "Cuidado personal", 15, 5, 20),
    new Product("41", "Arroz", 12.50, "Alimentos", 30, 10, 50),
    new Product("42", "Frijol", 15.75, "Alimentos", 40, 20, 60),
    new Product("43", "Jabón de barra", 10.50, "Cuidado personal", 25, 5, 30),
    new Product("44", "Pasta dental", 20.00, "Cuidado personal", 15, 5, 20),
    new Product("45", "Arroz", 12.50, "Alimentos", 30, 10, 50),
    new Product("46", "Frijol", 15.75, "Alimentos", 40, 20, 60),
    new Product("47", "Jabón de barra", 10.50, "Cuidado personal", 25, 5, 30),
    new Product("48", "Pasta dental", 20.00, "Cuidado personal", 15, 5, 20),
    new Product("49", "Arroz", 12.50, "Alimentos", 30, 10, 50),
    new Product("50", "Frijol", 15.75, "Alimentos", 40, 20, 60),
    new Product("51", "Jabón de barra", 10.50, "Cuidado personal", 25, 5, 30),
    new Product("52", "Pasta dental", 20.00, "Cuidado personal", 15, 5, 20),
    new Product("53", "Arroz", 12.50, "Alimentos", 30, 10, 50),
    new Product("54", "Frijol", 15.75, "Alimentos", 40, 20, 60),
    new Product("55", "Jabón de barra", 10.50, "Cuidado personal", 25, 5, 30),
    new Product("56", "Pasta dental", 20.00, "Cuidado personal", 15, 5, 20),
    new Product("57", "Arroz", 12.50, "Alimentos", 30, 10, 50),
    new Product("58", "Frijol", 15.75, "Alimentos", 40, 20, 60),
    new Product("59", "Jabón de barra", 10.50, "Cuidado personal", 25, 5, 30),
    new Product("60", "Pasta dental", 20.00, "Cuidado personal", 15, 5, 20),
    new Product("61", "Arroz", 12.50, "Alimentos", 30, 10, 50),
    new Product("62", "Frijol", 15.75, "Alimentos", 40, 20, 60),
    new Product("63", "Jabón de barra", 10.50, "Cuidado personal", 25, 5, 30),
    new Product("64", "Pasta dental", 20.00, "Cuidado personal", 15, 5, 20),
    new Product("65", "Arroz", 12.50, "Alimentos", 30, 10, 50),
    new Product("66", "Frijol", 15.75, "Alimentos", 40, 20, 60),
    new Product("67", "Jabón de barra", 10.50, "Cuidado personal", 25, 5, 30),
    new Product("68", "Pasta dental", 20.00, "Cuidado personal", 15, 5, 20),
    new Product("69", "Arroz", 12.50, "Alimentos", 30, 10, 50),
    new Product("70", "Frijol", 15.75, "Alimentos", 40, 20, 60),
    new Product("71", "Jabón de barra", 10.50, "Cuidado personal", 25, 5, 30),
    new Product("72", "Pasta dental", 20.00, "Cuidado personal", 15, 5, 20),
    new Product("73", "Arroz", 12.50, "Alimentos", 30, 10, 50),
    new Product("74", "Frijol", 15.75, "Alimentos", 40, 20, 60),
    new Product("75", "Jabón de barra", 10.50, "Cuidado personal", 25, 5, 30),
    new Product("76", "Pasta dental", 20.00, "Cuidado personal", 15, 5, 20),
    new Product("77", "Arroz", 12.50, "Alimentos", 30, 10, 50),
    new Product("78", "Frijol", 15.75, "Alimentos", 40, 20, 60),
    new Product("79", "Jabón de barra", 10.50, "Cuidado personal", 25, 5, 30),
    new Product("80", "Pasta dental", 20.00, "Cuidado personal", 15, 5, 20),

  ];
  
  const pmy20 = Products.filter(p => p.existence > 20).length;
  console.log(`Número de productos con más de 20 en existencia: ${pmy20}`);
  
  const pme15 = Products.filter(p => p.existence < 15).length;
  console.log(`Número de productos con menos de 15 en existencia: ${pme15}`);
  
  const funcion3 = Products.filter(p => p.type === "Alimentos" && p.price > 15.50);
  console.log("Productos con el mismo tipo y precio mayor a 15.5: ");
  funcion3.forEach(p => console.log(p.description));
  
  const funcion4 = Products.filter(p => p.price > 20.30 && p.price < 45.00);
  console.log("Productos con precio mayor a 20.3 y menor a 45: ");
  funcion4.forEach(p => console.log(p.description));
  
  // 5) Número de Products agrupados por su clasificación
  const funcion5 = Products.reduce((acc, p) => {
    if (acc[p.type]) {
      acc[p.type]++;
    } else {
      acc[p.type] = 1;
    }
    return acc;
  }, {});
  console.log("Número de productos agrupados por su clasificación: ");
  console.log(funcion5);
  