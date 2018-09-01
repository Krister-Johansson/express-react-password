import React, { Component } from 'react'

class Dashboard extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="header mt-md-5">
                            <div className="header-body">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h6 className="header-pretitle">Overview</h6>
                                        <h1 className="header-title">Notification requests</h1>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col">
                                        <ul className="nav nav-tabs nav-overflow header-tabs">
                                            <li className="nav-item">
                                                <a href="#!" className="nav-link active">All <span className="badge badge-pill badge-soft-secondary">823</span></a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#!" className="nav-link">Pending <span className="badge badge-pill badge-soft-secondary">24</span></a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#!" className="nav-link">Processing <span className="badge badge-pill badge-soft-secondary">3</span></a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#!" className="nav-link">Refunded <span className="badge badge-pill badge-soft-secondary">71</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card" data-toggle="lists" data-lists-values='["orders-order", "orders-product", "orders-date", "orders-total", "orders-status", "orders-method"]'>
                            <div className="card-header">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <form className="row align-items-center">
                                            <div className="col-auto pr-0">
                                                <span className="fe fe-search text-muted"></span>
                                            </div>
                                            <div className="col">
                                                <input type="search" className="form-control form-control-flush search" placeholder="Search"></input>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-auto">
                                        <div className="dropdown">
                                            <button className="btn btn-sm btn-white dropdown-toggle" type="button" id="bulkActionDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Bulk action</button>
                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="bulkActionDropdown">
                                                <a className="dropdown-item" href="#!">Action</a>
                                                <a className="dropdown-item" href="#!">Another action</a>
                                                <a className="dropdown-item" href="#!">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-sm table-nowrap card-table">
                                    <thead>
                                        <tr>
                                            <th>
                                                <div className="custom-control custom-checkbox table-checkbox">
                                                    <input type="checkbox" className="custom-control-input" name="ordersSelect" id="ordersSelectAll"></input>
                                                    <label className="custom-control-label" htmlFor="ordersSelectAll">&nbsp;</label>
                                                </div>
                                            </th>
                                            <th>
                                                <a href="#" className="text-muted sort" data-sort="orders-order">Order</a>
                                            </th>
                                            <th>
                                                <a href="#" className="text-muted sort" data-sort="orders-product">Product</a>
                                            </th>
                                            <th>
                                                <a href="#" className="text-muted sort" data-sort="orders-date">Date</a>
                                            </th>
                                            <th>
                                                <a href="#" className="text-muted sort" data-sort="orders-total">Total</a>
                                            </th>
                                            <th>
                                                <a href="#" className="text-muted sort" data-sort="orders-status">Status</a>
                                            </th>
                                            <th colSpan="2">
                                                <a href="#" className="text-muted sort" data-sort="orders-method">Payment method</a>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="list">
                                        <tr>    
                                            <td>
                                                <div className="custom-control custom-checkbox table-checkbox">
                                                    <input type="checkbox" className="custom-control-input" name="ordersSelect" id="ordersSelectOne"></input>
                                                    <label className="custom-control-label" htmlFor="ordersSelectOne">&nbsp;</label>
                                                </div>
                                            </td>
                                            <td className="orders-order">#6520</td>
                                            <td className="orders-product">Wall Poster</td>
                                            <td className="orders-date"><time dateTime="2018-07-30">07/30/18</time></td>
                                            <td className="orders-total">$55.25</td>
                                            <td className="orders-status">
                                                <div className="badge badge-soft-success">Shipped</div>
                                            </td>
                                            <td className="orders-method">Mastercard</td>
                                            <td className="text-right">
                                                <div className="dropdown">
                                                    <a href="#!" className="dropdown-ellipses dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="fe fe-more-vertical"></i>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a href="#!" className="dropdown-item">Action</a>
                                                        <a href="#!" className="dropdown-item">Another action</a>
                                                        <a href="#!" className="dropdown-item">Something else here</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard
