import { View, Text, ScrollView } from "react-native"
import React from 'react'
import { ArrowRightIcon } from "react-native-heroicons/outline"
import RestaurantCard from "./RestaurantCard"

const FeaturedRow = ({ id, title, description }) => {
    return (
        <View>
            <View className='mt-4 flex-row items-centers justify-between px-4'>
                <Text>{title}</Text>
                <ArrowRightIcon color="#00CCBB"></ArrowRightIcon>
            </View>

            <Text className="text-xs text-gray-500 px-4">
                {description}
            </Text>

            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
                showsHorizontalScrollIndicator={false}
                className="pt-4"
            >

                {/* RestaurantCards */}
                <RestaurantCard
                    id="1"
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo Sushi"
                    rating="3.5"
                    genre="sadf"
                    address="fsadf"
                    short_description="fasdf"
                    dishes="Food"
                    long="hurracan"
                    lat="olmax"
                ></RestaurantCard>
                <RestaurantCard
                    id="1"
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo Sushi"
                    rating="3.5"
                    genre="sadf"
                    address="fsadf"
                    short_description="fasdf"
                    dishes="Food"
                    long="hurracan"
                    lat="olmax"
                ></RestaurantCard>
                <RestaurantCard
                    id="1"
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo Sushi"
                    rating="3.5"
                    genre="sadf"
                    address="fsadf"
                    short_description="fasdf"
                    dishes="Food"
                    long="hurracan"
                    lat="olmax"
                ></RestaurantCard>
                <RestaurantCard
                    id="1"
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo Sushi"
                    rating="3.5"
                    genre="sadf"
                    address="fsadf"
                    short_description="fasdf"
                    dishes="Food"
                    long="hurracan"
                    lat="olmax"
                ></RestaurantCard>
                <RestaurantCard
                    id="1"
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo Sushi"
                    rating="3.5"
                    genre="sadf"
                    address="fsadf"
                    short_description="fasdf"
                    dishes="Food"
                    long="hurracan"
                    lat="olmax"
                ></RestaurantCard>
            </ScrollView>
        </View >
    )
}

export default FeaturedRow