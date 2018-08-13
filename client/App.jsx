import React from "react";
import ReactExport from "react-data-export";
import ReactDOM from "react-dom";
var createReactClass = require('create-react-class');

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

var ProductForm = createReactClass({
			loadProductData: function(data){
				console.log(data)
				$.ajax({
					url:this.state.url,
					dataType: 'json',
					cache: false,
					success: function(data){
						console.log(data);
						this.setState({values: data});
					}.bind(this),
					error: function(xhr, status, err){
						console.log(err);
					}.bind(this)
				});
			},
			getInitialState: function () {
		        return {
		            values:
					[{value:'',
					 price:''}],
					 url:'/products'
		        };
        	},
        	componentDidMount: function(){
        		alert("Hii");
				this.loadProductData();
			},
			multiply: function(e){
				this.refs.salesvalue.value =  this.refs.sales.value * this.refs.price.value;
			},
			onProductSubmit: function(data){
				$.ajax({
					url:this.state.url,
					dataType: 'jsonp',
					type: 'POST',
					data: data,
					success: function(data){
						console.log(data);
						this.setState({values: data});
					}.bind(this),
					error: function(xhr, status, err){
						console.log(err);
					}.bind(this)
				});
				this.setState({
					values:
					[
					// {value: this.refs.salesvalue.value},
     //    			{price:this.refs.price.value}
			        {
			        value: this.refs.sales.value,
			        price: this.refs.price.value
			        // sex: 'F',
			        // is_married: true
			    }],

     					
				});
				var product = {
					sales: this.refs.sales.value.trim(),
					price: this.refs.price.value.trim(),
				
				}

				if(!product.sales || !product.price){
					alert('Please enter sales and price');
					return;
				}

				this.refs.sales.value = '';
				this.refs.price.value = '';

			},
			handleSubmit: function(e){
				e.preventDefault();
				var product = {
					sales: this.refs.sales.value.trim(),
					price: this.refs.price.value.trim(),
				
				}
			this.onProductSubmit(product);
		},
			render: function(){
				return(
						<div>
							<h3>Add Sales Details</h3>
							<div>{this.state.values.sales}</div>
							<form onSubmit={this.handleSubmit}>
								<div className="form-group">
									<label>Enter Sales</label>
									<input type="text" className="form-control" placeholder="Enter Sales" ref="sales" />
								</div>
								<div className="form-group">
									<label>Enter price per litre</label>
									<input type="text" className="form-control" placeholder="Enter Price" ref="price" />
								</div>
								<div className="form-group">
									<label>Total Sales Value</label>
									<input type="text" className="form-control" ref="salesvalue" onMouseUp={this.multiply} />
								</div>
								<button type="submit">Submit</button>
								<Download1 values={this.state.values}/>
							</form>
						</div>
					);
			}
		});

const dataSet2 = [
    {
        name: "Tanmay",
        total: 25,
        remaining: 16
    },
    {
        name: "Tushar",
        total: 25,
        remaining: 7
    }
];

class Download1 extends React.Component {
    render() {
    	console.log(this.props.values);
    	console.log(dataSet2);
        return (
        	<div>
            <ExcelFile element={<button>Download Data</button>}>
                <ExcelSheet data={this.props.values} name="Sales">
                    <ExcelColumn label="Values" value="value"/>
                    <ExcelColumn label="Price" value="price"/>
                </ExcelSheet>
                <ExcelSheet data={dataSet2} name="Leaves">
                    <ExcelColumn label="Name" value="name"/>
                    <ExcelColumn label="Total Leaves" value="total"/>
                    <ExcelColumn label="Remaining Leaves" value="remaining"/>
                </ExcelSheet>
            </ExcelFile>
            </div>
        );
    }
}

export default ProductForm;