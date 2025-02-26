const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// 1. Получить все продукты
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error("Ошибка при получении всех продуктов:", error);
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

// 2. Поиск по любому фильтру  
router.get("/search", async (req, res) => {
  try {
    const filter = req.query; // Получаем все параметры из строки запроса
    const products = await Product.find(filter); // Ищем по переданным параметрам
    if (products.length === 0) {
      return res.status(404).json({ message: "Продукты по заданным фильтрам не найдены" });
    }
    res.status(200).json(products);
  } catch (error) {
    console.error("Ошибка при поиске продуктов:", error);
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

// 3. Создать новый продукт
router.post("/", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error("Ошибка при добавлении продукта:", error);
    res.status(400).json({ message: "Ошибка в данных или на сервере" });
  }
});

// 4. Удалить продукт по ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Продукт не найден" });
    }
    res.status(200).json({ message: "Продукт удален", deletedProduct });
  } catch (error) {
    console.error("Ошибка при удалении продукта:", error);
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

module.exports = router;