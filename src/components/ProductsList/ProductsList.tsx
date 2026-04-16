import {Col, Flex, Row, Spin} from "antd";
import {memo} from "react";
import type {Product} from "../../types/types.ts";
import {Category} from "../../types/types.ts";
import ProductCard from "../ProductCard/ProductCard.tsx";

interface ProductsListProps {
    products: Product[],
    search: string,
    isLoading: boolean,
    productsCategory: Category,
}

const ProductsList = memo(({products, search, isLoading, productsCategory}: ProductsListProps) => {
    return (
        <>
            {isLoading ?
                <Flex justify={"center"} align={"center"} style={{height: "600px"}}>
                    <Spin size="large"/>
                </Flex>
                :
                <Row gutter={16} style={{ width: '100%' }}>
                    {products?.
                    filter((product: Product) => {
                        return product.title.toLowerCase().includes(search.toLowerCase())
                    }).
                    filter((product: Product) => {
                        if (productsCategory === Category.ALL) return true;
                        return product.category === productsCategory
                    }).
                    map((product: Product) => (
                        <Col xs={24} sm={12} md={8} lg={6} xl={4} key={product.id} style={{marginBottom: '1rem'}}>
                            <ProductCard product={product} />
                        </Col>
                    ))}
                </Row>
            }
        </>
    )
})

export default ProductsList;