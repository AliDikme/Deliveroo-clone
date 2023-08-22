import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing1"></CategoryCard>
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing2"></CategoryCard>
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing3"></CategoryCard>
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing4"></CategoryCard>
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing4"></CategoryCard>
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing4"></CategoryCard>
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing4"></CategoryCard>
        </ScrollView>


    )
}

export default Categories