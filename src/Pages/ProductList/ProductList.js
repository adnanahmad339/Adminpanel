import "./ProductList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import {useDispatch,useSelector} from "react-redux"
import {deleteProduct,getProducts} from "../../Redux/apiCalls"


const ProductList = () => {

    const products = useSelector((state) => state.product.products);

    const dispatch=useDispatch();

   useEffect(()=>
   {
    getProducts(dispatch)
   },[dispatch])
   const handleDelete = (id) => {
  deleteProduct(id,dispatch)
       };
    
    
       const columns= [
            { field: '_id', headerName: 'ID', width: 250 },
            { field: 'product', headerName: 'Product', width:220,
        
        
        
            renderCell:(params)=>{
              return(
        <div className="productListUser">
        <img src={params.row.img} alt="" className="productListImg" />
        {params.row.title}
        </div>
        
              )
            }
          
          
          
          },
        
            {
              field: 'inStock',
              headerName: 'Stock',
              width: 80,
            },
          
            {
              field: 'price',
              headerName: 'Price',
          
              width: 80,
             
            },
            {
              field: 'action',
              headerName: 'Action',
          
              width: 150,
              renderCell:(params)=>{
                return(
                  <>
                  
                  <Link to={"/product/"+params.row._id}>
               <button className='productListEdit'>Edit</button>
              </Link>
                
              <DeleteOutline
                      className="productListDelete"
                      onClick={() => handleDelete(params.row._id)}
              />
              
                  </>
                )
              }
             
            },
          ];
          
        
    return (
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={products}
          columns={columns}
          pageSize={5}
          getRowId={(row)=>row._id}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    );
}
 
export default ProductList;


























