import React from 'react'
import { Link } from 'react-router'


export default class Navbar extends React.Component {


	render() {

		return (
				
				<header id="dewa" >
					<div className="col-lg-4 col-md-4 col-sm-4 logoBox">
						
						<Link to={`/`} id="logo">
							<span>Inventory</span>
						</Link>

					</div>
					<div className="col-lg-8 col-md-8 col-sm-8">

						<ul className="dewaMenu">

							<li className="item">
								<Link to={`/`}>
									Home
								</Link>
							</li>
							
							<li className="item">

								<Link to={`/product`}>
									Product
								</Link>

							</li>

							<li className="item">

								<Link to={`/suppliers`}>
									Suppliers
								</Link>

							</li>

							<li className="item">

								<Link to={`/transaksi`}>
									Transaksi
								</Link>

							</li>

						</ul>
					</div>
					<div className="clearfix"></div>
				</header>
			)
	}
}