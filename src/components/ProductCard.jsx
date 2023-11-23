function ProductCard({ courseType = "Bootcamp",title, description, price, discountPrice, addShoppingCart }) {
  return (
    <section className="w-[352px]">
      <div className="bg-[#152A46] flex flex-row rounded-t-[20px]">
        <img src="/img/person.png" className="w-[75px] h-[149.15px] mt-[16px] ml-[28px]"/>
        <div className="ml-[17px] mt-[27px]">
          <p className="font-extrabold md:text-[#FFCD29] sm:text-red-600 xl:text-blue-600 text-base">
            {courseType}
          </p>
          <p className="font-extrabold text-[#FFFF] text-xl mt-[9px]">
            {title}
          </p>
          <p className="font-normal text-[#FFFF] text-xs">
            {description}
          </p>
        </div>
      </div>
      <div className="rounded-b-[20px] px-[24px] shadow-md">
        <p className="font-extrabold text-[#000000] text-xl mt-[9px]">
          {title}
        </p>
        <p className="font-normal text-[#000000] text-base">
          {description}
        </p>
        <div className="mt-[12px] pb-[12px] flex flex-row justify-end">
          {discountPrice ? (
            <span>
              <s className="text-base font-extrabold text-gray-400">
            Rp. {price}
            </s>
            <p className="font-extrabold text-[#0ACF83] text-xl">
              Rp. {price - discountPrice}
            </p>
            </span>
          ) : <p className="font-extrabold text-[#0ACF83] text-xl">
              Rp. {price}
            </p>}
        </div>
        <button className="bg-[#0ACF83] w-full h-[48px] rounded-[8px] text-white mb-4"
          onClick={() => addShoppingCart({ courseType, title, description, price, discountPrice })}
        >Add Cart</button>
      </div>
    </section>
  )
}

export default ProductCard