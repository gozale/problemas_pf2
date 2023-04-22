class Product:
    def __init__(self, key, description, price, type, existence, min_existence, max_existence):
        self.clave = clave
        self.descripcion = descripcion
        self.precio = precio
        self.clasificacion = clasificacion
        self.existencia = existencia
        self.existencia_min = existencia_min
        self.existencia_max = existencia_max

productos = [
    Producto("001", "Arroz", 12.50, "Alimentos", 30, 10, 50),
    Producto("002", "Frijol", 15.75, "Alimentos", 40, 20, 60),
    Producto("003", "Jabón de barra", 10.50, "Cuidado personal", 25, 5, 30),
    Producto("004", "Pasta dental", 20.00, "Cuidado personal", 15, 5, 20),
    # ... y así sucesivamente para los 80 productos
]
