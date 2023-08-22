
import { Text, View, Image, TextInput, ScrollView } from 'react-native';
import React, { useLayoutEffect } from "react"
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronDownIcon, UserIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <SafeAreaView className="bg-white pt-5 flex">
            { /* Header Texts */}
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <Image source={{ uri: "https://links.papareact.com/wru" }}
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full"></Image>
                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs" >Deliver Now!</Text>
                    <Text className="font-bold text-xl">
                        Current Location
                        <ChevronDownIcon size={20} color="#00CCB8" />
                    </Text>
                </View>

                <UserIcon size={35} color="#00CCB8" />
            </View>
            <View className="flex-row items-center space-x-2 pb-2 mx-4">
                <View className="flex-row space-x-2 bg-gray-200 p-3">
                    <MagnifyingGlassIcon className="flex-none" color="gray" size={20
                    } />
                    <TextInput
                        className="flex-1"
                        placeholder="Restaurants and cuisines"
                        keyboardType="default" />
                </View>
                <AdjustmentsVerticalIcon color="#00CCB8" />
            </View>
            {/* Body */}
            <ScrollView>
                {/* Categories */}
                <Categories></Categories>

                {/* Featured Row*/}
                <FeaturedRow
                    title="Featured"
                    description="Paid placements from our partners"
                    id="1"
                ></FeaturedRow>

                {/* Tasty Discounts */}
                <FeaturedRow
                    title="Tasty Discounts"
                    description="Everyone's been enjoying these juicy discounts!"
                    id="2"
                ></FeaturedRow>

                {/* Offers near you */}
                <FeaturedRow
                    title="Offers near you"
                    description="Why not support your local restaurant tonight!"
                    id="3"
                ></FeaturedRow>
            </ScrollView>
        </SafeAreaView>)
}

export default HomeScreen;
