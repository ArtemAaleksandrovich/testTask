import { useState } from 'react'
import ProductsList from "./components/ProductsList/ProductsList.tsx";
import {Category} from "./types/types.ts";
import Title from "antd/es/typography/Title";
import {Flex} from "antd";
import ProductsTabs from "./components/ProductsTabs/ProductsTabs.tsx";
import SearchBar from "./components/SearchBar/SearchBar.tsx";
import {staticProducts} from "./constants/constants.ts";

function App() {
    const [productsCategory, setProductsCategory] = useState<Category>(Category.ALL);
    const [searchValue, setSearchValue] = useState<string>('');

    return (
    <Flex orientation="vertical" align="center">
        <Title level={1}> Магазин электроники </Title>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        <ProductsTabs setProductsCategory={setProductsCategory} productsCategory={productsCategory} />
        <ProductsList products={staticProducts} search={searchValue} isLoading={false} productsCategory={productsCategory} />
    </Flex>
  )
}

export default App
