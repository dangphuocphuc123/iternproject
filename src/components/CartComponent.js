import React from 'react'

 function CartComponent({items, renderArray, setRenderArray}) {
    console.log(items);
    console.log(renderArray);
    console.log(setRenderArray);
    if (true) return (
        <div>123</div>
    )
   
    return (

        <table class="table table-borderless table-shopping-cart">
        <thead class="text-muted">
        <tr class="small text-uppercase">
        <th scope="col">Product</th>
        <th scope="col" width="120">Quantity</th>
        <th scope="col" width="120">Price</th>
        <th scope="col" class="text-right" width="200"> </th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>
                <figure class="itemside">
                    <div class="aside"><img src="assets/images/items/1.jpg" class="img-sm" /></div>
                    <figcaption class="info">
                        <a href="#" class="title text-dark">Some name of item goes here nice</a>
                        <p class="text-muted small">Size: XL, Color: blue, <br /> Brand: Gucci</p>
                    </figcaption>
                </figure>
            </td>
            <td> 
                <select class="form-control">
                    <option>1</option>
                    <option>2</option>  
                    <option>3</option>  
                    <option>4</option>  
                </select> 
            </td>
            <td> 
                <div class="price-wrap"> 
                    <var class="price">$1156.00</var> 
                    <small class="text-muted"> $315.20 each </small> 
                </div> 
            </td>
            <td class="text-right"> 
            <a data-original-title="Save to Wishlist" title="" href="" class="btn btn-light mr-2" data-toggle="tooltip"> <i class="fa fa-heart"></i></a> 
            <a href="" class="btn btn-light"> Remove</a>
            </td>
        </tr>
        <tr>
            <td>
                <figure class="itemside">
                    <div class="aside"><img src="assets/images/items/2.jpg" class="img-sm" /></div>
                    <figcaption class="info">
                        <a href="#" class="title text-dark">Product name  goes here nice</a>
                        <p class="text-muted small">Size: XL, Color: blue, <br /> Brand: Gucci</p>
                    </figcaption>
                </figure>
            </td>
            <td> 
                <select class="form-control">
                    <option>1</option>
                    <option>2</option>  
                    <option>3</option>  
                    <option>4</option>  
                </select> 
            </td>
            <td> 
                <div class="price-wrap"> 
                    <var class="price">$149.97</var> 
                    <small  class="text-muted"> $75.00 each </small>  
                </div> 
            </td>
            <td class="text-right"> 
            <a data-original-title="Save to Wishlist" title="" href="" class="btn btn-light mr-2" data-toggle="tooltip"> <i class="fa fa-heart"></i></a> 
            <a href="" class="btn btn-light btn-round"> Remove</a>
            </td>
        </tr>
        <tr>
            <td>
                <figure class="itemside">
                    <div class="aside"><img src="assets/images/items/3.jpg" class="img-sm" /></div>
                    <figcaption class="info">
                        <a href="#" class="title text-dark">Another name of some product goes just here</a>
                        <p class="small text-muted">Size: XL, Color: blue,  Brand: Tissot</p>
                    </figcaption>
                </figure>
            </td>
            <td> 
                <select class="form-control">
                    <option>1</option>
                    <option>2</option>  
                    <option>3</option>  
                </select> 
            </td>
            <td> 
                <div class="price-wrap"> 
                    <var class="price">$98.00</var> 
                    <small class="text-muted"> $578.00 each</small> 
                </div> 
            </td>
            <td class="text-right"> 
                <a data-original-title="Save to Wishlist" title="" href="" class="btn btn-light mr-2" data-toggle="tooltip"> <i class="fa fa-heart"></i></a> 
                <a href="" class="btn btn-light btn-round"> Remove</a>
            </td>
        </tr>
        </tbody>
        </table>
    );
}

export default CartComponent;