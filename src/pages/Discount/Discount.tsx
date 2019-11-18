import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import './Discount.scss'
import { Header } from "../../components/common/Header/Header";
import { discountPath } from "../../config/route-config";
import { Empty } from "antd";
import { DiscountPanel } from "../../components/ManageDiscount/Panel/Panel";
import { AddDiscount } from "../../components/ManageDiscount/AddDiscount/AddDiscount";
import { EditDiscount } from "../../components/ManageDiscount/EditDiscount/EditDiscount";
import { ListDiscount } from "../../components/ManageDiscount/ListDiscount/ListDiscount";

const Discount = ({
    discounts = [],
    isFetching,
    fetchDiscounts,
    requestAddDiscount,
    requestEditDiscount,
    requestDeleteDiscount,
}: any) => {
    useEffect(() => {
        if (discounts.length === 0)
            fetchDiscounts()
        // eslint-disable-next-line
    }, [])
    return (
        <div className="discount">
            <Header title="Discount" />
            <div className="discount__wrapper">
                <div className="discount__wrapper-left">
                    <DiscountPanel />
                    <ListDiscount
                        isFetching={isFetching}
                        requestEditDiscount={requestEditDiscount}
                        requestDeleteDiscount={requestDeleteDiscount}
                        discounts={discounts} />
                </div>
                <div className="discount__wrapper-right">
                    <Switch>
                        <Route exact path={`${discountPath}`} render={() => <Empty />} />
                        <Route path={`${discountPath}/add`} render={props => (
                            <AddDiscount
                                {...props}
                                isFetching={isFetching}
                                requestAddDiscount={requestAddDiscount}
                                discounts={discounts}
                            />
                        )} />
                        <Route path={`${discountPath}/edit/:id`} render={props => {
                            const id = props.match.params.id;
                            const discount = discounts.find((item: any) => item.id === id)
                            return (
                                <EditDiscount
                                    {...props}
                                    discounts={discounts}
                                    discount={discount ? discount : false}
                                    requestEditDiscount={requestEditDiscount}
                                />)
                        }} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default Discount