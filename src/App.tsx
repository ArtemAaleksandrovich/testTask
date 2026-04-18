import {useCallback, useEffect, useState} from 'react'
import ProductsList from "./components/ProductsList/ProductsList.tsx";
import {Category, type Product} from "./types/types.ts";
import Title from "antd/es/typography/Title";
import {Flex, notification} from "antd";
import ProductsTabs from "./components/ProductsTabs/ProductsTabs.tsx";
import SearchBar from "./components/SearchBar/SearchBar.tsx";
import {staticProducts} from "./constants/constants.ts";
import ProductModal from "./components/ProductModal/ProductModal.tsx";

const fetchProducts= async (): Promise<Product[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(staticProducts)
        }, 500)
    })
}

function App() {
    const [productsCategory, setProductsCategory] = useState<Category>(Category.ALL);
    const [searchValue, setSearchValue] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [api, contextHolder] = notification.useNotification();
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    useEffect(() => {
        loadProducts();
    }, [])

    const loadProducts = async () => {
        try{
            const response = await fetchProducts();
            setProducts(response);
        } catch (error: unknown) {
            if (error instanceof Error) {
                api.error({
                    title: 'Ошибка!',
                    description: "Ошибка при получении товаров! " + error.message,
                });
            } else {
                api.error({
                    title: 'Ошибка!',
                    description: "Неизвестная ошибка при получении товаров! " + error,
                });
            }
        } finally {
            setIsLoading(false);
        }
    }

    const handleProductClick = useCallback((product: Product) => {
        setSelectedProduct(product);
    }, []);

    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    return (
    <Flex orientation="vertical" align="center">
        {contextHolder}
        <Title level={1}> Магазин электроники </Title>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        <ProductsTabs setProductsCategory={setProductsCategory} productsCategory={productsCategory} />
        <ProductsList products={products} search={searchValue} isLoading={isLoading} productsCategory={productsCategory} onProductClick={handleProductClick} />
        {selectedProduct && <ProductModal product={selectedProduct} isOpenModal={!!selectedProduct} onCloseModal={handleCloseModal} />}
    </Flex>
  )
}

export default App
