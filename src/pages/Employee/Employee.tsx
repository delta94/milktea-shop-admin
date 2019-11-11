import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import './Employee.scss'
import { Header } from "../../components/common/Header/Header";
import { EmployeePanel } from "../../components/ManageEmployee/Panel/Panel";
import { employeePath } from "../../config/route-config";
import { Empty } from "antd";
import { AddEmployee } from "../../components/ManageEmployee/AddEmployee/AddEmployee";
import { ListEmployee } from "../../components/ManageEmployee/ListEmployee/ListEmployee";
import { EditEmployee } from "../../components/ManageEmployee/EditEmployee/EditEmployee";


const Employee = ({
    isFetching,
    employees,
    roles,
    fetchConstantTypes,
    fetchEmployees,
    requestAddEmployee,
    requestEditEmployee,
    requestDeleteEmployee,
}: any) => {
    useEffect(() => {
        if (employees.length === 0) {
            fetchEmployees()
        }
        if (roles.length === 0)
            fetchConstantTypes()
    })
    return (
        <div className="employee">
            <Header title="Employee" />
            <div className="employee__wrapper" >
                <div className="employee__wrapper-left">
                    <EmployeePanel
                    />

                    <ListEmployee
                        isFetching={isFetching}
                        roles={roles}
                        employees={employees}
                        requestEditEmployee={requestEditEmployee}
                        requestDeleteEmployee={requestDeleteEmployee}
                    />
                </div>
                <div className="employee__wrapper-right">
                    <Switch>
                        <Route exact path={`${employeePath}`} render={() => <Empty />} />
                        <Route path={`${employeePath}/add`} render={_ => (
                            <AddEmployee
                                fetchConstantTypes={fetchConstantTypes}
                                roles={roles}
                                isFetching={isFetching}
                                requestAddEmployee={requestAddEmployee}
                            />
                        )} />
                        <Route path={`${employeePath}/edit/:id`} render={props => {
                            const id = props.match.params.id;
                            const employee = employees.find((item: any) => item.id === id)
                            return (
                                <EditEmployee
                                    isFetching={isFetching}
                                    roles={roles}
                                    employee={employee ? employee : false}
                                    requestEditEmployee={requestEditEmployee}
                                />)
                        }} />
                        {/*

                        <Route path={`${employeePath}/detail/:id`} render={props => {
                            const id = props.match.params.id;
                            const product: IProduct = products.find((item: any) => item.id === id)
                            const category: IProductCategory = categories.find((item: any) => item.id === product.categoryId)
                            return (
                                <ProductDetail
                                product={product}
                                category={category}
                                isFetching={(product !== undefined && category !== undefined) ? false : true}
                                />)
                        }} /> */}
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default Employee