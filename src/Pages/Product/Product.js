
import { Link } from "react-router-dom";
import "./Product.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Publish } from '@mui/icons-material';
import { useSelector } from "react-redux";
import { updateProduct } from "../../Redux/apiCalls";
import { useDispatch } from "react-redux";
import { useState } from "react";




const Product = () => {
    const location = useLocation();
    const productId = location.pathname.split("/")[2];

    const product = useSelector(state => state.product.products.find(product => product._id === productId))
    const dispatch = useDispatch();

    console.log(productId);
    // const [title, setTitle]=useState("");
    // const [desc, setDesc]=useState("");
    // const [price, setPrice]=useState("");
    // const [inStock, setInStock]=useState("");

    const [inputs, setInputs] = useState({})



    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    }
    console.log(inputs);
    const handleUpdate = async () => {


        await updateProduct(productId, inputs, dispatch)


        // await axios.put('http://localhost:5000/api/products/`$productId`', inputs, productId)
        // .then(response=>console.log(response.data))


    }



    return (<>
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">

                <div className="productTopRight">
                    <div className="productInfoTop">
                        {/* <img src={product.img} alt="" className="productInfoImg" /> */}
                        <span className="productName">Product Name</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">{product._id}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfoValue">5123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Price</span>
                            <span className="productInfoValue">{product.price}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoValue">{product.inStock}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder={product.title} name="title" onChange={handleChange} />
                        <label>Product Description</label>
                        <input type="text" placeholder={product.desc} name="desc" onChange={handleChange} />
                        <label>Product Price</label>
                        <input type="text" placeholder={product.price} name="price" onChange={handleChange} />

                        <label>In Stock</label>
                        <select name="inStock" id="idStock"
                            onChange={handleChange}
                        >
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>

                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src={product.img} alt="" className="productUploadImg"

                            />
                            <label for="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <button className="productButton" onClick={(e) => handleUpdate(e.preventDefault())}>Update</button>
                    </div>
                </form>

            </div>
        </div>


    </>);
}

export default Product;