function Website() {
  return (
    <>
      <div className="grid grid-cols-4  gap-2 max-sm:grid-cols-2">
        <div className="row-start-1 row-end-1  col-start-1 col-end-5 justify-center bg-yellow-300 h-8 max-sm:text-sm max-sm:h-4 max-sm:col-start-1 max-sm:col-end-2">
          <ul className="flex justify-evenly text-black">
            <li>All CATEGORIES</li>
            <li>TODAY DEALS</li>
            <li>ELECTRONICS</li>
            <li>CLOTHINGS</li>
            <li>COMPUTERS</li>
            <li>FURNITURES</li>
            <li>MOM & BABY</li>
            <li>BOOKS & MORE</li>
          </ul>
        </div>
        <div className="row-start-2 row-end-2 col-start-2 col-end-4 max-sm:col-start-1 max-sm:col-end-2">
          <div className="grid grid-cols-3 ">
            <div className="col-start-1 col-end-3 max-sm:col-start-1  max-sm:col-end-2">
              <img
                className="object-cover"
                src="https://nouthemes.net/html/martfury/img/slider/home-4/1.jpg"
                alt=""
              />
            </div>

            <div className="col-start-3 col-end-4 max-sm:col-start-1 max-sm:col-end-2">
              <img
                className="object-cover"
                src="https://nouthemes.net/html/martfury/img/slider/home-4/left.jpg"
                alt=""
              />
            </div>
          </div>
          <p>Top Categories Of The Month</p>
          <hr />
        </div>
        <div className="row-start-3 row-end-3 col-start-2 col-end-4 max-sm:col-start-1  max-sm:col-end-2">
          <div className="grid grid-col-3 grid-row-2 max-sm:col-start-1  max-sm:col-end-2">
            <div className="col-start-1 col-end-2 row-start-1 row-end-1  border w-50 ">
              <div className="grid grid-cols-3 justify-evenly">
                <div className="col-span-1">
                  <img
                    src="https://nouthemes.net/html/martfury/img/categories/shop/5.jpg"
                     
                  ></img>
                </div>
                <div className="col-span-1 ">
                  <h2 className="text-lg ">Electronics</h2>
                  <p>
                    TV Televisions Air Conditioners Washing Machines Audio &
                    Theaters Office Electronics
                  </p>
                </div>
              </div>
            </div>

            <div className="col-start-2 col-end-3 row-start-1 row-end-1  border w-50">
              <div className="grid grid-cols-3 justify-evenly">
                <div className="col-span-1 ">
                  <img src="https://nouthemes.net/html/martfury/img/categories/shop/1.jpg"></img>
                </div>
                <div className="col-span-1">
                  <h2>Clothings</h2>
                  <p>Womens Mens Bags & Backpacks Accessories</p>
                </div>
              </div>
            </div>
            <div className="col-start-3 col-end-4 row-start-1 row-end-1 justify-evenly  border w-50">
              <div className="grid grid-cols-3">
              <div className="col-span-1">
              <img
                src="https://nouthemes.net/html/martfury/img/categories/shop/9.jpg"
                >
                </img>
              </div>
              <div className="col-span-1">
              <h2>Computers</h2>
              <p>Desktop PC Laptop PC Gaming Storage & Memory PC Components</p>
              </div>
            </div>
            </div>


            <div className="col-start-1 col-end-2 row-start-2 row-end-2 justify-evenly  border w-50">
              <div className="grid grid-cols-3">
<div className="col-span-1">
<img src="https://nouthemes.net/html/martfury/img/categories/shop/2.jpg"></img>

</div>
             <div className="col-span-1">
              <h2>Home & Kitchen</h2>
              <p>Funitures Decor Cookwares Utensil & Gadgets Garden Tools</p>
            </div>
            </div>
            </div>
            <div className="col-start-2 col-end-3 row-start-2 row-end-2 justify-evenly  border w-50">
              <div className="grid grid-cols-3">
                <div className="col-span-1">
                <img
                src="https://nouthemes.net/html/martfury/img/categories/shop/10.jpg"
                ></img>
              
                </div>
                <div className="col-span-1">
              <h2>Healthy & Beauty</h2>
              <p>Makeup Skin Care Hair Care Tools & Equipments Perfurmes</p>
              </div>
              </div>
            </div>
            <div className="col-start-3 col-end-4 row-start-2 row-end-2 justify-evenly  border w-50">
              <div className="grid grid-cols-3">
                <div className="col-span-1">'
                <img
                src="https://nouthemes.net/html/martfury/img/categories/shop/6.jpg"
                ></img>
             
                </div>
                <div className="col-span-1">
              <h2>Jewelry & Watch</h2>
              <p>Pendant Necklace Watch Bracelets Accessories</p>
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row-start-4 row-end-4 col-start-2 col-end-4 max-sm:col-start-1  max-sm:col-end-2">
          <img
            className="object-cover"
            src="https://nouthemes.net/html/martfury/img/promotions/home-4-1.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Website;
