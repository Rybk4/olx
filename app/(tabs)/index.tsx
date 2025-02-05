import React from "react";
import { SafeAreaView, StatusBar, FlatList } from "react-native";
import CategoriesSlider from "@/components/CategoriesSlider";
import RecomendSection from "@/components/RecomendSection";

const sliderData = [
  { id: 1, name: "Элемент 1" },
  { id: 2, name: "Элемент 2" },
  { id: 3, name: "Элемент 3" },
  { id: 4, name: "Элемент 4" },
  { id: 5, name: "Элемент 5" },
  { id: 6, name: "Элемент 6" },
  { id: 7, name: "Элемент 7" },
  { id: 8, name: "Элемент 8" },
  { id: 9, name: "Элемент 9" },
  { id: 10, name: "Элемент 10" },
  { id: 11, name: "Элемент 11" },
  { id: 12, name: "Элемент 12" },
  { id: 13, name: "Элемент 13" },
  { id: 14, name: "Элемент 14" },
  { id: 15, name: "Элемент 15" }
];

const products = [
  { id: 1, name: "Телефон", condition: "БУ", price: "50000", city: "Алматы", date: "05.02.2025" },
  { id: 2, name: "Ноутбук", condition: "Новый", price: "300000", city: "Астана", date: "04.02.2025" },
  { id: 3, name: "Велосипед", condition: "БУ", price: "75000", city: "Шымкент", date: "03.02.2025" },
  { id: 4, name: "Камера", condition: "Новый", price: "150000", city: "Караганда", date: "02.02.2025" },
  { id: 5, name: "Наушники", condition: "БУ", price: "20000", city: "Атырау", date: "01.02.2025" }
];

// Массив с компонентами
const sections = [
  { id: "slider", component: <CategoriesSlider data={sliderData} /> },
  { id: "recomend", component: <RecomendSection data={products} /> }
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black", paddingTop: StatusBar.currentHeight || 20 }}>
      <FlatList
        data={sections}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => item.component}  
      />
    </SafeAreaView>
  );
}
